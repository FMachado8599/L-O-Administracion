import './_cobertura.scss'
import text from "@/data/landing.es.json";

export default function Cobertura() {

    const coverage = text.coverage;
    const areas = coverage?.areas ?? [];
    const sections = coverage?.sections ?? [];
    const cta = text.cta ?? {};

  return (
    <section>
        <div>
            <h2>{coverage.title}</h2>
            <h3>{coverage.intro}</h3>
            <div className="cobertura__lists">
                {sections.map((section, sIdx) => {
                const items = Array.isArray(section.items) ? section.items : [];
                return (
                    <div key={section.title ?? sIdx} className="cobertura__list">
                    {section.title && <h4>{section.title}</h4>}
                    <ul>
                        {items.map((item, iIdx) => (
                        <li key={`${section.title ?? sIdx}-${iIdx}`}>{item}</li>
                        ))}
                    </ul>
                    </div>
                );
                })}
            </div>            
        </div>
        <div>
            {cta.title && <h2>{cta.title}</h2>}
            {cta.text && <p>{cta.text}</p>}
            {cta.button && (
                <div className="cta__actions">
                <button type="button">{cta.button}</button>
                </div>
            )} 
        </div>
    </section>
  )
}