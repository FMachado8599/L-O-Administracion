import text from "@/data/landing.es.json";
import './_faq.scss'

export default function FAQ() {

    const faq = text.faq;

  return (
    <div className="faq-container">
        <section className="faq" >
            <div className="faq-titles">
                <h2>{faq.title}</h2>
                <h3 className="h7">{faq.subtitle}</h3>                
            </div>
                {faq.questions.map((item, idx) => (
                    <div className="faq-card" key={idx}>
                        <h6>{item.q}</h6>
                        <p>{item.a}</p>
                    </div>
                ))}
        </section>                       
    </div>
  )
}