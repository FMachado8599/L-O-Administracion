import './_cobertura.scss'
import text from "@/data/landing.es.json";

export default function Cobertura() {

    const coverage = text.coverage;
    const areas = coverage?.areas ?? [];
    const sections = coverage?.sections ?? [];
    const cta = text.cta ?? {};

  return (
    <div className='coverage-container'>
        <section className='coverage'>
            <div className='coverage-text coverage-sub-section'>
                <div className='coverage-titles'>
                    <h2 className='coverage-title'>{coverage.title}</h2>
                    <h3 className='coverage-subtitle'>{coverage.intro}</h3>                    
                </div>
                <div className="coverage-lists">
                    {sections.map((section, sIdx) => {
                    const items = Array.isArray(section.items) ? section.items : [];
                    return (
                        <div key={section.title ?? sIdx} className="coverage-list">
                            {section.title && <h5>{section.title}</h5>}
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
            <div className='coverage-card-container coverage-sub-section'>
                <div className='coverage-card'>
                    {cta.title && <h2 className='coverage-card-title'>{cta.title}</h2>}
                    {cta.text && <p className='coverage-card-text'>{cta.text}</p>}
                    {cta.button && (
                        <div className="cta__actions">
                        <button type="button" className='card-button-cta'>{cta.button}</button>
                        </div>
                    )} 
                </div>
            </div>
        </section>
    </div>
  )
}