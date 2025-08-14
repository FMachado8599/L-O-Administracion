import text from "@/data/landing.es.json";
import { replaceVars } from "@/utils/replaceVars";

export default function FooterInfo() {
  const footer = text.footer ?? {};
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

  const contacto = lists.contacto ?? {};
  const contactoTitle = contacto.title || "Contacto";
  const landing = replaceVars(text);
  const contactItems = landing.footer.lists.contacto.items;

  return (
    <div className="footer">
      {/* Tagline */}
      <div className="footer__tagline">
        {taglineLogo && (
          <img
            src={
              // si guardaste solo el nombre de archivo:
              new URL(`/src/assets/media/logo/${taglineLogo}`, import.meta.url).href
            }
            alt="Logo"
          />
        )}
        {taglineText && <p>{taglineText}</p>}

        {!!taglineIcons.length && (
          <div className="footer__tagline-icons">
            {taglineIcons.map((it, idx) => {
              const src =
                typeof it === "string"
                  ? it
                  : it?.icon
                  ? new URL(`/src/assets/media/icons/${it.icon}`, import.meta.url).href
                  : null;
              return src ? <img key={it?.id ?? idx} src={src} alt="" /> : null;
            })}
          </div>
        )}
      </div>

      {/* Servicios y Áreas juntos */}
      <div className="footer__lists">
        <div className="footer__list">
          <h3>{serviciosTitle}</h3>
          <ul>
            {serviciosItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer__list">
          <h3>{areasTitle}</h3>
          <ul>
            {areasItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contacto */}
      <div className="footer__contact">
        <h3>{contactoTitle}</h3>
        <ul>
          {contactItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

