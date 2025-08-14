import './_aboutUs.scss'
import text from "@/data/landing.es.json";

export default function AboutUs() {

    const about = text.about;
    const images = about?.images ?? [];
    const paragraphs = about?.paragraphs ?? [];

  return (
    <section>
        <div>
            {images.map((image,idx) => (
                <img src={image} key={image ?? idx} alt="Imagen de propietarios" />
            ))}
        </div>
        <div>
            <h2>{about.title}</h2>
            {paragraphs.map((text,idx) => (
                <p key={text ?? idx}>{text}</p>
            ))}
        </div>
    </section>
  )
}