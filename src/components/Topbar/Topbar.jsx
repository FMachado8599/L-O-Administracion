import rawLanding from "@/data/landing.es.json";
import { replaceVars } from "@/utils/replaceVars";
import { buildContactHref } from "@/utils/phoneNumbersAdaptation"; // ya lo tenés
import { ContactIcon, infoIcon } from "@/utils/icons.jsx"; // tus íconos
import "./_topbar.scss";

const landing = replaceVars(rawLanding);

export default function Topbar() {
  // Datos resueltos
  const phone = landing?.header?.topbar?.phone ?? "";
  const email = landing?.header?.topbar?.email ?? "";

  // Mensaje WA: toma header.topbar.wa.message o cae a contacto.wa.message
  const waMessage =
    landing?.header?.topbar?.wa?.message ??
    landing?.footer?.lists?.contacto?.wa?.message ??
    "Hola, me gustaría hacer una consulta.";

  // Armamos “items” como en Contacto para reusar la misma lógica/íconos
  const phoneItem = { type: "tel", wa: true, value: phone }; // WhatsApp por defecto
  const emailItem = { type: "email", value: email };

  const phoneHref = buildContactHref(phoneItem, waMessage);

  // Redes (si existen en el JSON)
  const socials = Array.isArray(landing?.header?.topbar?.social)
    ? landing.header.topbar.social
    : [];

  const copyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copiado al portapapeles ✅");
    });
  };

  return (
    <div className="topbar">
      <section className="topbar-container">
        {/* Teléfono: abre WhatsApp con mensaje */}
        {phone && (
          <a href={phoneHref} target="_blank" rel="noopener noreferrer" className="topbar_item">
            <ContactIcon item={phoneItem} />
            <span>{phone}</span>
          </a>
        )}

        {/* Email: copia al portapapeles */}
        {email && (
          <button type="button" onClick={copyEmail} className="topbar_item">
            <ContactIcon item={emailItem} />
            <span>{email}</span>
          </button>
        )}

        {/* Redes: usa infoIcon por type */}
        <div className="topbar-socials-container">
            {socials.map((s, idx) => {
                if (!s?.href) return null;
                return (
                    <a
                    key={`${s.type}-${idx}`}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="topbar-item topbar-social"
                    aria-label={s.type}
                    title={s.type}
                    >
                    {infoIcon({ item: { type: s.type }, size: 15 })}
                    </a>
                );
            })}
        </div>
      </section>
    </div>
  );
}
