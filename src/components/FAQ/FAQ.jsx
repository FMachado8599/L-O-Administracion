import text from "@/data/landing.es.json";
import './_faq.scss'

export default function FAQ() {

    const faq = text.faq;

  return (
    <section>
        <h2>{faq.title}</h2>
        <h3>{faq.subtitle}</h3>
        <div>
            {faq.questions.map((item, idx) => (
                <div key={idx}>
                    <h4>{item.q}</h4>
                    <p>{item.a}</p>
                </div>
            ))}
        </div>
    </section>
  )
}