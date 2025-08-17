import './_benefits.scss'
import text from "@/data/landing.es.json";
import { getBenefitIcon } from '@/utils/icons'

export default function Benefits() {

    const benefits = text.benefits ?? {}; 
    const bullets = benefits?.bullets ?? [];

  return (
    <section className="benefits">
      <div className="benefits-text-container">
        <div className="benefits-title-container">
          <h2 className="benefits-title">{benefits.title}</h2>
          <h2 className="benefits-title-kicker">{benefits.kicker}</h2>
        </div>
        <h6 className="benefits-subtitle h7">{benefits.subtitle}</h6>
      </div>

      <ul className="benefits-list">
        {bullets.map((bullet, idx) => {

            if (!bullet) return null; // ✅ guard   

            const key = bullet.id ?? bullet.label ?? idx;

            const Icon = getBenefitIcon({ type: bullet.type, label: bullet.label });

          return (
            <li key={key} className="benefits-item">
              {Icon && <Icon className="benefits-item-icon" size={24} />}
              <h6 className="benefits-item-title h7">{bullet.label}</h6>
              {bullet.text && <p>{bullet.text}</p>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}