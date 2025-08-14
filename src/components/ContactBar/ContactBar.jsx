import './_contactBar.scss'
import text from "@/data/landing.es.json";
import { replaceVars } from "../../utils/replaceVars";

export default function ContactBar() {

    const landing = replaceVars(text);
    const contactBlock = landing.contact_block;

  return (
    <div>
        <section>
            {contactBlock.map((contact, idx) => (
                <div key={idx} className="contact-item">
                <img
                    src={new URL(`/src/assets/media/icons/${contact.icon}`, import.meta.url).href}
                    alt={`Icono de ${contact.title}`}
                />
                <div>
                    <h3>{contact.title}</h3>
                    <p>{contact.value}</p>
                </div>
                </div>
            ))}
        </section>
    </div>
  )
}