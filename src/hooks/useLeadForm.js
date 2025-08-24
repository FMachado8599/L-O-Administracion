import { useState, useCallback } from "react";
import { sendLead } from "@/services/leadApi.js";

export function useLeadForm() {
  const [status, setStatus] = useState("idle");   // idle | loading | success | error
  const [error, setError] = useState(null);

    const NAME_MAP = {
    nombre:  ["nombre", "fullName", "fullname", "name", "nombreCompleto", "nombre_completo", "full_name"],
    telefono:["telefono", "tel", "phone", "telefono_movil", "celular"],
    email:   ["email", "e-mail", "correo", "mail"],
    mensaje: ["mensaje", "message", "consulta", "duda", "comentario"],
    botField:["botField", "hp", "honeypot"]
    };

    // normaliza nombres de keys: quita espacios, _ y -, y pasa a minúsculas
    const norm = (s) => String(s).trim().toLowerCase().replace(/[\s_-]+/g, "");

    // busca en el FormData la PRIMERA key cuyo nombre "normalizado" coincida con alguno de los alias
    function pickFirstByAlias(fd, aliases) {
    const keys = Array.from(fd.keys());
    const aliasSet = new Set(aliases.map(norm));
    const matchKey = keys.find((k) => aliasSet.has(norm(k)));
    if (!matchKey) return "";
    const v = fd.get(matchKey);
    return (typeof v === "string" ? v : "");
    }

    const buildPayloadFromForm = useCallback((formEl) => {
    const fd = new FormData(formEl);
    return {
        nombre:   pickFirstByAlias(fd, NAME_MAP.nombre).trim(),
        telefono: pickFirstByAlias(fd, NAME_MAP.telefono).trim(),
        email:    pickFirstByAlias(fd, NAME_MAP.email).trim(),
        mensaje:  pickFirstByAlias(fd, NAME_MAP.mensaje).trim(),
        botField: pickFirstByAlias(fd, NAME_MAP.botField)
    };
    }, []);

  const submitForm = useCallback(async (formEl) => {
    setStatus("loading");
    setError(null);
    try {
      const payload = buildPayloadFromForm(formEl);
      const { ok } = await sendLead(payload);
      if (ok) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        setError(new Error("No se pudo enviar"));
      }
    } catch (err) {
      setStatus("error");
      setError(err);
    }
  }, [buildPayloadFromForm]);

  return { status, error, submitForm };
}
