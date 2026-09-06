type PhoneContact = {
  /** Number in international format with "+", used for the "tel:" href. */
  value: string;
  /** Human-readable format shown in the UI. */
  display: string;
};

type WhatsAppContact = {
  /** Number in international format without "+" or spaces, used for wa.me links. */
  number: string;
  /** Optional label to distinguish channels (e.g. "Sales", "Rentals"). */
  label: `WhatsApp ${string}`;
};

type HoursSpan = {
  /** Days covered, e.g. "Lun-Vie". */
  days: string;
  /** Opening hours for those days, e.g. "8:00-18:00". */
  time: string;
};

export const contact = {
  city: "Bogotá, Colombia",
  hours: [
    { days: "Lun-Vie", time: "8:00-18:00" },
    { days: "Sáb", time: "9:00-13:00" },
  ] satisfies HoursSpan[],
  email: "inmobiliariamym@yahoo.com",
  phones: [
    { value: "+573173005145", display: "+57 317 300 5145" },
    { value: "+573173005146", display: "+57 317 300 5146" },
  ] satisfies PhoneContact[],
  whatsapps: [
    { number: "573173005146", label: "WhatsApp Comercial" },
  ] satisfies WhatsAppContact[],
};

/** Builds a wa.me link from a WhatsApp number (international format, no "+"). */
export function whatsappUrlFor(number: string): string {
  return `https://wa.me/${number}`;
}

/** Primary WhatsApp link; add or reorder entries in `contact.whatsapps` to change it. */
export const whatsappUrl: string = whatsappUrlFor(contact.whatsapps[0].number);

type SocialLink = {
  name: string;
  /** Icon glyph rendered inside the button while the channel is disabled. */
  glyph: string;
  /** Accessible label, e.g. "Facebook, próximamente". */
  label: string;
};

/** Disabled social channels shown around the WhatsApp buttons. */
export const socialLinks = [
  { name: "Facebook", glyph: "f", label: "Facebook, próximamente" },
  { name: "Instagram", glyph: "◎", label: "Instagram, próximamente" },
  { name: "Telegram", glyph: "↗", label: "Telegram, próximamente" },
] as SocialLink[];

/** Accessible labels and sr-only text for the site chrome. */
export const ariaLabels = {
  brandLink: "Inicio, Organización Inmobiliaria M&M LTDA",
  openMenu: "Abrir menú de navegación",
  closeMenu: "Cerrar menú de navegación",
  mainNav: "Navegación principal",
  mobileNav: "Navegación móvil",
  drawerTitle: "Navegación",
  contactChannels: "Canales de contacto",
  contactSection: "Información de contacto de Inmobiliaria M&M",
  servicesNav: "Servicios",
  companyNav: "Compañía",
  drawerDescription:
    "Enlaces de navegación y datos de contacto de Organización Inmobiliaria M&M.",
  comingSoon: "Próximamente",
};

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
];

const ownersPortalUrl: string =
  "https://simidocs.siminmobiliarias.com/base/simired/simidocsapi1.0/index.php?inmo=47&tipo=1";

export const paymentUrl: string =
  "https://customers.ecollect.co/html/10515/ecollect10515.html";

const tenantsPortalUrl: string =
  "https://simidocs.siminmobiliarias.com/base/simired/simidocsapi1.0/index.php?inmo=47&tipo=2";

export const propertiesUrl: string =
  "https://simi-api.com/iframeNvo/index.php?inmo=47&typebox=1&numbox=3&viewtitlesearch=1&titlesearch=Buscador%20de%20Inmuebles&colortitlesearch=FFFFFF&bgtitlesearch=0076BD&secondct=0076BD&primaryc=0076BD&primaryct=ffff&token=5VA63X5Mh974QeioekM6C9HsqiHhX2AlFMbs6RIe";

export const accessCards = [
  {
    title: "Portal Propietarios",
    description:
      "Gestiona tus inmuebles, pagos recibidos y estados de cuenta en un solo lugar.",
    action: "Ingresar",
    icon: "house",
    href: ownersPortalUrl,
  },
  {
    title: "Paga tu canon",
    description: "Realiza tu pago mensual de forma rápida, segura y trazable.",
    action: "Pagar canon",
    icon: "card",
    href: paymentUrl,
  },
  {
    title: "Portal Arrendatarios",
    description:
      "Consulta contratos, pagos realizados y solicitudes de mantenimiento.",
    action: "Ingresar",
    icon: "key",
    href: tenantsPortalUrl,
  },
  {
    title: "Ver inmuebles",
    description:
      "Explora nuestras propiedades disponibles para arriendo y venta en Bogotá.",
    action: "Explorar",
    icon: "building",
    href: propertiesUrl,
  },
] as const;

export const benefits = [
  {
    value: "20+",
    title: "Años de experiencia",
    description: "Acompañando familias y empresas en Bogotá.",
  },
  {
    value: "100%",
    title: "Gestión transparente",
    description: "Reportes mensuales claros y trazables.",
  },
  {
    value: "1:1",
    title: "Atención personalizada",
    description: "Un asesor dedicado para cada cliente.",
  },
] as const;

export type IconName = (typeof accessCards)[number]["icon"];
