import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Topbar from "../../components/Topbar/Topbar";
import Services from "../../components/Services/Services";
import './_home.scss';
import Benefits from "../../components/Benefits/Benefits";
import Cobertura from "../../components/Cobertura/Cobertura";
import AboutUs from "../../components/AboutUs/AboutUs";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactBar from "../../components/ContactBar/ContactBar";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Cobertura />
      <AboutUs />
      <ContactForm />
      <ContactBar />
      <FAQ />
      <Footer />
    </div>
  )
}