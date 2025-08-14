import './_hero.scss'
import heroImg from '@/assets/media/images/hero_img_2048x1090.webp'
import text from "@/data/landing.es.json";

export default function Hero() {

    const heroItems = text.hero; 

  return (
    <div>
        <img src={heroImg} alt="Imagen de montevideo en el atardecer" />
        <section>
            <h1>{heroItems.title}<span>{heroItems.kicker}</span></h1>
            <h3>{heroItems.subtitle}</h3>
            <div>
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