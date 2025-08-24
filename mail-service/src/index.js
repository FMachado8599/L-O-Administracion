import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { leadSchema } from "./validators.js";
import React from "react";
import { Resend } from "resend";
import ContactEmail from "./emails/ContactEmail.tsx";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);


const app = express();
app.use(cors());            // abierto en dev; luego afinamos
app.use(express.json());    // para leer JSON

// CORS robusto: permite cualquier header que el browser pida en el preflight
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

//   // refleja los headers que el browser quiere usar
//   const reqHeaders = req.header("Access-Control-Request-Headers");
//   res.header("Access-Control-Allow-Headers", reqHeaders || "Content-Type");

//   if (req.method === "OPTIONS") {
//     return res.sendStatus(204); // preflight OK y corto
//   }

//   console.log(`[${req.method}] ${req.path}`);

//   next();
// });

app.use((req, _res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

// Salud del server
app.get("/api/ping", (_req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

app.options("/api/send", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    req.header("Access-Control-Request-Headers") || "Content-Type"
  );
  return res.sendStatus(204);
});

// Endpoint del formulario (por ahora SOLO eco)
app.post("/api/send", async (req, res) => {
  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ ok: false, error: "Datos inválidos", details: parsed.error.issues });
  }

  const data = parsed.data;

  // Honeypot: ignorar bots en silencio
  if (data.botField) {
    return res.json({ ok: true });
  }

  // Seguridad mínima: evitar crash si falta la key
  if (!process.env.RESEND_API_KEY) {
    console.error("[resend] falta RESEND_API_KEY");
    return res.status(500).json({ ok: false, error: "Config incompleta (RESEND_API_KEY)" });
  }

  try {
    const emailProps = {
      nombre: data.nombre,
      telefono: data.telefono,
      email: data.email,
      mensaje: data.mensaje,
    };

    console.log("[env] to =", process.env.MAIL_TO);

    const { data: sent, error } = await resend.emails.send({
      from: process.env.MAIL_FROM,     // definido en .env
      to: [process.env.MAIL_TO],       // definido en .env
      reply_to: data.email,
      subject: "Nueva consulta desde la web",
      react: React.createElement(ContactEmail, emailProps),
    });

    if (error) {
      console.error("[resend:error]", error);
      return res.status(500).json({ ok: false, error: "No se pudo enviar el correo" });
    }

    console.log("[resend:id]", sent?.id);
    return res.json({ ok: true });
  } catch (e) {
    console.error("[resend:exception]", e);
    return res.status(500).json({ ok: false, error: "Error del servidor al enviar" });
  }
});

const port = process.env.PORT || 5179;
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
