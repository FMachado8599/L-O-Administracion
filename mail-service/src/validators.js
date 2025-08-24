import { z } from "zod";

export const leadSchema = z.object({
  nombre: z.string().trim().min(2, "Nombre demasiado corto").max(120),
  // Si viene "" en telefono, lo tratamos como "no enviado"
  telefono: z.preprocess(
    (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
    z.string().trim().min(3, "Teléfono demasiado corto").max(40)
  ).optional(),
  email: z.string().trim().email("Email inválido"),
  mensaje: z.string().trim().min(5, "Mensaje demasiado corto").max(5000),
  // Honeypot (si viene con valor, luego ignoramos el envío)
  botField: z.string().optional()
});
