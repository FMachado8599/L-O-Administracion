// frontend/src/services/leadApi.js
const BASE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_MAIL_API) ||
  "http://localhost:5179";

export async function sendLead(payload) {
  const res = await fetch(`${BASE_URL}/api/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // 200 OK → { ok: true }
  if (res.ok) {
    const json = await res.json().catch(() => ({}));
    return { ok: !!json.ok };
  }

  // 400 (validación) u otros → devolvemos info útil
  let error = "Error enviando la consulta";
  let details = null;
  try {
    const json = await res.json();
    error = json?.error || error;
    details = json?.details || null; // zod issues si vienen
  } catch (_) {}
  const err = new Error(error);
  err.details = details;
  throw err;
}
