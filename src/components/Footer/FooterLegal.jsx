import './styles/_footer-legal.scss';
import text from "@/data/landing.es.json";

export default function FooterLegal() {

    const legal = text.footer.legal;

  return (
    <div>
        <span>{text.footer.copyright}</span>
        {legal.map((item, idx) => (
            <span key={idx}>
                {item}
            </span>
        ))}
    </div>
  )
}