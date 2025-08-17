import "./_contactBar.scss";
import text from "@/data/landing.es.json";
import { replaceVars } from "@/utils/replaceVars";
import { buildContactHref } from "@/utils/phoneNumbersAdaptation";
import { BarIcon } from "@/utils/icons";

export default function ContactBar() {
  const landing = replaceVars(text);
  const contactBlock = landing?.contact_block ?? [];
  const waMessage = landing?.footer?.lists?.contacto?.wa?.message ?? "Hola, me gustaría hacer una consulta.";

  return (
    <section className="contact-bar">
      {contactBlock.map((contact, idx) => {
        if (!contact) return null;
        const { title, value } = contact;
        // fallback
        const rawType = contact.type || contact.icon?.replace(/\..+$/, "");
        const type = (rawType || "").toLowerCase();

        if (type === "email") {
          const onCopy = () => {
            navigator.clipboard.writeText(value || "");
            alert("Email copiado al portapapeles ✅");
          };
          return (
            <div key={idx} className="contact-item">
              <BarIcon type="email" className="contact-bar-icon" size="24"/>
              <div>
                <h6 className="contact-item-title">{title}</h6>
                <button type="button" className="contact-item-action" onClick={onCopy}>
                  {value}
                </button>
              </div>
            </div>
          );
        }

        if (type === "tel" || type === "whatsapp") {
          const telItem = {
            type: "tel",
            value,
            wa: type === "whatsapp" || contact.wa === true,
          };
          const href = buildContactHref(telItem, waMessage);
          return (
            <div key={idx} className="contact-item">
              <BarIcon type={telItem.wa ? "whatsapp" : "tel"} className="contact-bar-icon" size="24"/>
              <div>
                <h6 className="contact-item-title">{title}</h6>
                <a className="contact-item-action" href={href} target="_blank" rel="noopener noreferrer">
                  {value}
                </a>
              </div>
            </div>
          );
        }

        // Fallback: solo hay archivo de icon
        if (contact.icon) {
          const src = new URL(`/src/assets/media/icons/${contact.icon}`, import.meta.url).href;
          return (
            <div key={idx} className="contact-item">
              <img src={src} alt={`Icono de ${title}`} className="contact-bar-icon" />
              <div>
                <h6 className="contact-item-title">{title}</h6>
                <p>{value}</p>
              </div>
            </div>
          );
        }

        // Último fallback
        return (
          <div key={idx} className="contact-item">
            <div className="contact-bar-icon" />
            <div>
              <h6 className="contact-item-title">{title}</h6>
              <p>{value}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
