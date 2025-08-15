import './_benefits.scss'
import text from "@/data/landing.es.json";

export default function Benefits() {

    const benefits = text.benefits;
    const bullets = benefits?.bullets ?? [];

  return (
        <section className="benefits">
            <div className='benefits-text-container'>
                <div className='benefits-title-container'>
                    <h2 className='benefits-title'>{benefits.title}</h2>
                    <h2 className='benefits-title-kicker'>{benefits.kicker}</h2>
                </div>
                <h5 className='benefits-subtitle'>{benefits.subtitle}</h5>
            </div>
            <ul className="benefits-list">
                {bullets.map((bullet, idx) => (
                    <li key={bullet.label ?? idx} className="benefits-item">
                    {bullet.img && (
                        <img
                        src={new URL(`/src/assets/media/icons/${bullet.img}`, import.meta.url).href}
                        alt={`Icono de ${bullet.label}`}
                        className='benefits-item-icon'
                        />
                    )}
                    <h5 className='benefits-item-title'>{bullet.label}</h5>
                    {bullet.text && <p>{bullet.text}</p>}
                    </li>
                ))}
            </ul>
        </section>
  )
}