import "./_services.scss";
import text from "@/data/landing.es.json";

export default function Services() {
  const services = text.services;
  const items = services?.items ?? [];

  return (
    <section className="services">
      <h2>{services.title}</h2>
      <p>{services.intro}</p>

      <ul className="services__list">
        {items.map((item, idx) => (
          <li key={item.title ?? idx} className="services__item">
            <img
            src={new URL(`/src/assets/media/icons/${item.img}`, import.meta.url).href}
            alt={`Icono de ${item.description}`}
            />
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}