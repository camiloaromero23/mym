export const whatsappUrl: string = "https://wa.me/573173005146";

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Inmuebles", href: "#inmuebles" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const ownersPortalUrl: string =
  "https://simidocs.siminmobiliarias.com/base/simired/simidocsapi1.0/index.php?inmo=47&tipo=1";

export const paymentUrl: string =
  "https://customers.ecollect.co/html/10515/ecollect10515.html";

export const tenantsPortalUrl: string =
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
