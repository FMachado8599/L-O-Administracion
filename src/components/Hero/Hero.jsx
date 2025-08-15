import './_hero.scss'
import heroImg from '@/assets/media/images/hero_img_2048x1090.webp'
import text from "@/data/landing.es.json";

export default function Hero() {

    const heroItems = text.hero; 

  return (
    <div className='hero-container'>
        <img src={heroImg} alt="Imagen de montevideo en el atardecer" className='hero-img'/>
        <section className="hero">
            <h1 className="hero-title">{heroItems.title}<span>{heroItems.kicker}</span></h1>
            <h4 className="hero-subtitle">{heroItems.subtitle}</h4>
            <div className="hero-button-container">
                <button>
                    {heroItems.primaryCta}               
                </button>
                <button>
                    {heroItems.secondaryCta}
                </button>
            </div>
        </section>
    </div>
  )
}