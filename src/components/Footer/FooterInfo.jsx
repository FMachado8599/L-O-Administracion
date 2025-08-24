import text from "@/data/landing.es.json";
import { replaceVars } from "@/utils/replaceVars";
import './styles/_footer-info.scss';
import { normalizePhoneForWa, buildWaHref, buildContactHref } from '../../utils/phoneNumbersAdaptation'
import { ContactIcon, infoIcon } from '../../utils/icons'

export default function FooterInfo() {

  const landing = replaceVars(text);

  const footer = landing.footer ?? {};
  const lists = footer.lists ?? {};

  // Tagline
  const tagline = lists.tagline ?? {};
  const taglineLogo = tagline.logo || null;
  const taglineText = tagline.text || "";
  const taglineIcons = Array.isArray(tagline.icons) ? tagline.icons : [];

  // Servicios / Áreas / Contacto
  const servicios = lists.servicios ?? {};
  const serviciosTitle = servicios.title || "Servicios";
  const serviciosItems = Array.isArray(servicios.items) ? servicios.items : [];

  const areas = lists.areas ?? {};
  const areasTitle = areas.title || "Áreas";
  const areasItems = Array.isArray(areas.items) ? areas.items : [];

  // Contacto (ya resuelto)
  const contacto = lists.contacto ?? {};
  const contactoTitle = contacto.title || "Contacto";
  const contactItems = Array.isArray(contacto.items) ? contacto.items : [];

  // Link WA global del JSON (opcional para un CTA o para el ícono del tagline)
  const waPhone = contacto.wa?.phone || "";
  const waMessage = contacto.wa?.message || "";
  const waHref = buildWaHref(waPhone, waMessage);

  return (
    <div className="content">
      {/* Tagline */}
      <div className="footer-tagline">
        {taglineLogo && (
          <img
            src={new URL(`/src/assets/media/logo/${taglineLogo}`, import.meta.url).href}
            alt="Logo"
            className="footer-logo"
          />
        )}

        {taglineText && <p>{taglineText}</p>}

        {!!taglineIcons.length && (
          <div className="footer-tagline-icons">
            {taglineIcons.map((it, idx) => {
              // it = { type: "linkedIn" | "instagram" | "facebook", href: "..." }
              if (!it?.href) return null;

              return (
                <a
                  key={`${it.type}-${idx}`}
                  className="footer-tagline-icon-link"
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={it.type}
                  title={it.type}
                >
                  {infoIcon({ item: { type: it.type } })} {/* ⬅️ ícono desde icons.jsx */}
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className="footer-list">
        <h6>{serviciosTitle}</h6>
        <ul>
          {serviciosItems.map((item, idx) => (
            <li key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-list">
        <h6>{areasTitle}</h6>
        <ul>
          {areasItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="footer-list">
        <h6>{contactoTitle}</h6>
        <ul>
          {contactItems.map((it, idx) => {
            const label = it.label ? `${it.label}: ` : "";

            // Email
            if (it.type === "email") {
              const handleCopy = () => {
                navigator.clipboard.writeText(it.value).then(() => {
                  alert("Email copiado al portapapeles ✅");
                });
              };
              return (
                <li key={idx}>
                  <button type="button" onClick={handleCopy} className="copy-email-btn">
                    <ContactIcon item={it} className="contact-icon" />
                    {it.value}
                  </button>
                </li>
              );
            }

            // Dirección
            if (it.type === "addr") {
              const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(it.value)}`;
              return (
                <li key={idx}>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ContactIcon item={it} className="contact-icon" />
                    {it.value}
                  </a>
                </li>
              );
            }

            // Teléfonos y WhatsApp
            const href = buildContactHref(it, waMessage);
            return (
              <li key={idx}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <ContactIcon item={it} className="contact-icon" />
                  {it.value}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

