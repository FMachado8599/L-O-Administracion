import "./_services.scss";
import text from "@/data/landing.es.json";
import { getServiceIcon } from "@/utils/icons";

export default function Services() {
  const services = text.services ?? {};
  const items = services?.items ?? [];

  return (
    <section className="services" id="services">
      <h2 className="services-title">{services.title}</h2>
      <h6 className="services-subtitle h7">{services.intro}</h6>

      <ul className="services-list">
        {items.map((item, idx) => {
          const key = item.id ?? item.title ?? idx;

          // Lucide por helper (preferido)
          const Icon = getServiceIcon({ type: item.type, title: item.title });

          return (
            <li key={key} className="services-item">
              {Icon && <Icon className="services-item-icon" size={24} />}
              <h6 className="services-item-title h7">{item.title}</h6>
              {item.description && (
                <p className="services-item-description">{item.description}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
