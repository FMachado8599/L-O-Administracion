export const normalizePhoneForWa = (raw, countryPrefix = "598") => {
  const digits = String(raw || "").replace(/\D+/g, "");
  if (!digits) return "";
  if (digits.startsWith(countryPrefix)) return digits;
  return countryPrefix + digits.replace(/^0+/, "");
};

/**
 * Construye el link de WhatsApp a partir de número + mensaje
 */
export const buildWaHref = (phone, message) => {
  const digits = normalizePhoneForWa(phone, "598");
  const text = encodeURIComponent(
    message || "Hola, me gustaría hacer una consulta."
  );
  return digits ? `https://wa.me/${digits}?text=${text}` : "#";
};

/**
 * Dado un item de contacto del JSON + mensaje WA global,
 * retorna el href correcto según el type.
 */
export const buildContactHref = (item, waMessage) => {
  switch (item.type) {
    case "tel":
      return item.wa
        ? buildWaHref(item.value, waMessage)
        : `tel:${String(item.value).replace(/\s+/g, "")}`;
    case "email":
      return `mailto:${item.value}`;
    case "addr":
      return `https://maps.google.com/?q=${encodeURIComponent(item.value)}`;
    default:
      return "#";
  }
};