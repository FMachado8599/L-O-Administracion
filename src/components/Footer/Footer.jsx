import FooterCredits from './FooterCredits'
import FooterInfo from './FooterInfo'
import FooterLegal from './FooterLegal'
import './styles/_footer.scss'

export default function Footer() {
  return (
    <footer>
        <div className='footer-content-container'>
            <FooterInfo />
            <FooterLegal />
            <FooterCredits />
        </div>
    </footer>
  )
}