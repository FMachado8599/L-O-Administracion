import "./_services.scss";
import text from "@/data/landing.es.json";

export default function Services() {
  const services = text.services;
  const items = services?.items ?? [];

  return (
    <section className="services">
      <h2 className="services-title">{services.title}</h2>
      <h5 className="services-subtitle">{services.intro}</h5>

      <ul className="services-list">
        {items.map((item, idx) => (
          <li key={item.title ?? idx} className="services-item">
            <img
            src={new URL(`/src/assets/media/icons/${item.img}`, import.meta.url).href}
            alt={`Icono de ${item.description}`}
            className="services-item-icon"
            />
            <h5 className="services-item-title">{item.title}</h5>
            {item.description && <p className="service-item-description">{item.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}