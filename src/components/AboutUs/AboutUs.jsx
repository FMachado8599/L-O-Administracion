import './_aboutUs.scss'
import text from "@/data/landing.es.json";

export default function AboutUs() {

    const about = text.about;
    const images = about?.images ?? [];
    const paragraphs = about?.paragraphs ?? [];

  return (
    <section className='about-us' id='about'>
        <div className='about-us-images-container'>
            {images.map((image,idx) => (
                <figure className='about-us-image-figure'>
                    <img src={image} key={image ?? idx} alt="Imagen de propietarios" />
                </figure>
            ))}
        </div>
        <div className='about-us-text'>
            <h2>{about.title}</h2>
            <div className='about-us-text-container'>
                {paragraphs.map((text,idx) => (
                    <p key={text ?? idx}>{text}</p>
                ))}
            </div>
        </div>
    </section>
  )
}