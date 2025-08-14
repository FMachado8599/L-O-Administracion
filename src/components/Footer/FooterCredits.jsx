import './styles/_footer-credits.scss'
import text from "@/data/landing.es.json";

export default function FooterCredits() {

    const credit = text.footer.credit;

  return (
    <div>{credit}</div>
  )
}