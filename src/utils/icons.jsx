import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  Handshake,
  FileBarChart,
  ShieldCheck,
  Building2,
  Users,
  BadgeDollarSign,
  UserCheck
} from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const ContactIcon = ({ item }) => {
  if (item.type === "tel" && item.wa) return <FaWhatsapp size={18} />;
  if (item.type === "tel") return <Phone size={18} />;
  if (item.type === "email") return <Mail size={18} />;
  if (item.type === "addr") return <MapPin size={18} />;
  return null;
};

export const infoIcon =({item, size}) => {
  if (item.type === "linkedIn") return <FaLinkedin size={size}/>;
  if (item.type === "instagram") return <FaInstagram size={size}/>;
  if (item.type === "facebook") return <FaFacebook size={size}/>;
  return null;
}

export const BarIcon = ({ type, className, size }) => {
  switch (type) {
    case "whatsapp":
      return <FaWhatsapp size={size} className={className} />;
    case "tel":
      return <Phone size={size} className={className} />;
    case "email":
      return <Mail size={size} className={className} />;
    case "addr":
      return <MapPin size={size} className={className} />;
    default:
      return null;
  }
}

export const getBenefitIcon = ({ type, label }) => {
  const t = (type || "").toLowerCase();
  const l = (label || "").toLowerCase();

  // 1) Si hay type explícito, prioridad
  switch (t) {
    case "contractors":
    case "mantenimiento":
    case "mantenimiento-propiedades":
      return Wrench;
    case "personalizado":
    case "servicio-personalizado":
      return Handshake;
    case "reportes":
    case "reportes-transparentes":
      return FileBarChart;
    case "compliance":
    case "legal":
    case "confianza":
      return ShieldCheck;
    case "condominios":
    case "propiedades":
      return Building2;
    case "inquilinos":
      return Users;
    case "cobros":
      return BadgeDollarSign;
    default:   
    if (/(contratistas|mantenimiento)/.test(l)) return Wrench;
    if (/(personalizado)/.test(l)) return Handshake;
    if (/(reporte|transparente)/.test(l)) return FileBarChart;
    return FileBarChart;
  }
};

export const getServiceIcon = ({ title }) => {
  const ttl = (title || "").toLowerCase();

  if (/(inquilino|selecci)/.test(ttl)) return UserCheck;
  if (/(condominio|consorcio|propiedad)/.test(ttl)) return Building2;
  if (/(alquiler|cobro)/.test(ttl)) return BadgeDollarSign;
  if (/(mantenimiento|reparaci)/.test(ttl)) return Wrench;
  if (/(legal|cumplim|regulaci)/.test(ttl)) return ShieldCheck;
  if (/(reporte|financ)/.test(ttl)) return FileBarChart;

  return Handshake; // fallback
};