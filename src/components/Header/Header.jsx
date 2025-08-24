import text from "@/data/landing.es.json";
import logo from "@/assets/media/logo/l-o-admin_logo_light.webp";
import "./_header.scss";

export default function Header() {
  const navItems = text.header.nav;
  
  const handleHomeClick = (e) => {
    e.preventDefault(); // evita reload de página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="header-container">
      <header>
        <a href="#" onClick={handleHomeClick} className="logo-container">
          <img src={logo} alt="L&O Administraciones" className="logo" />
        </a>
        <nav>
          <ul>
            {navItems.map(({ key, label }) => (
              <li key={key}>
                {key === "home" ? (
                  <a href="#" onClick={handleHomeClick}>
                    {label}
                  </a>
                ) : (
                  <a href={`#${key}`}>{label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}