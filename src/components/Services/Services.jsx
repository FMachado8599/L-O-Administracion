import "./_services.scss";
import text from "@/data/landing.es.json";
import { getServiceIcon } from "@/utils/icons";
import { useRef } from "react";
import { gsap } from "@/utils/gsap";
import { useGsapContext } from "@/utils/useGsapContext";

export default function Services() {
  const services = text.services ?? {};
  const items = services?.items ?? [];
  const scope = useRef(null);

  useGsapContext(scope, () => {
    const els = gsap.utils.toArray(".services-item");

    // estado inicial por si el CSS no cargó a tiempo
    gsap.set(els, { opacity: 0, y: 16, willChange: "transform, opacity" });

    els.forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: i * 0.06, // stagger suave
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });
    });
  });

  return (
    <section className="services" id="services" ref={scope}>
      <h2 className="services-title">{services.title}</h2>
      <h6 className="services-subtitle h7">{services.intro}</h6>

      <ul className="services-list">
        {items.map((item, idx) => {
          const key = item.id ?? item.title ?? idx;
          const Icon = getServiceIcon({ type: item.type, title: item.title });

          return (
            <li key={key} className="services-item" data-idx={idx}>
              {Icon && <Icon className="services-item-icon" size={24} />}
              <h6 className="services-item-title h7">{item.title}</h6>
              {item.description && (
                <p className="services-item-description">{item.description}</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
