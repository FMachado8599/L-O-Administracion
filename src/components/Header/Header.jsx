import text from "@/data/landing.es.json";
import logo from "@/assets/media/logo/l-o-admin_logo_light.webp";
import "./_header.scss";

export default function Header() {
  const navItems = text.header.nav;

  return (
    <header>
      <img src={logo} alt="L&O Administraciones" className="logo" />
      <nav>
        <ul>
          {navItems.map(({ key, label }) => (
            <li key={key}>
              <a href={key === "home" ? "/" : `/${key}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}