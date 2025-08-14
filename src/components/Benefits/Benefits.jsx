import './_benefits.scss'
import text from "@/data/landing.es.json";

export default function Benefits() {

    const benefits = text.benefits;
    const bullets = benefits?.bullets ?? [];

  return (
    <div>
        <section className="benefits">
            <h2>
                {benefits.title}
                <span>
                    {benefits.kicker}
                </span>
            </h2>
            <p>{benefits.subtitle}</p>

                <ul className="benefits__list">
                {bullets.map((bullet, idx) => (
                    <li key={bullet.label ?? idx} className="benefits__item">
                    {bullet.img && (
                        <img
                        src={new URL(`/src/assets/media/icons/${bullet.img}`, import.meta.url).href}
                        alt={`Icono de ${bullet.label}`}
                        />
                    )}
                    <h3>{bullet.label}</h3>
                    {bullet.text && <p>{bullet.text}</p>}
                    </li>
                ))}
            </ul>
        </section>
    </div>
  )
}