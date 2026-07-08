// Config central del sitio. Editar aquí actualiza toda la landing.
export const site = {
  name: "Kilometro Moderno Workshop",
  shortName: "Kilometro Moderno",
  tagline: "Electromecánica, Aire Acondicionado y Escáner Automotriz a Domicilio",
  description:
    "Mecánico experto a domicilio en Panamá Oeste y Ciudad. Especialista en electromecánica, reparación de aire acondicionado automotriz y diagnóstico por escáner profesional.",
  keywords:
    "electromecanico a domicilio panama, aire acondicionado de auto panama, escaner automotriz arraijan, taller mecanico la chorrera, arreglar aire de carro, mecanico de confianza panama",

  // TODO: reemplazar por el número real (formato E.164 sin '+', ej: 50761234567)
  phoneRaw: "50766207896",
  phoneDisplay: "+507 6620-7896",

  hours: "Lun - Sáb, 3:00 pm - 9:00 pm (fuera de horario laboral) · Dom con cita previa",

  areaServed: [
    {
      region: "Panamá Oeste",
      cities: ["La Chorrera", "Arraiján", "Vista Alegre", "Costa Verde", "Burunga", "Nuevo Emperador"],
    },
    {
      region: "Ciudad de Panamá",
      cities: ["Panamá Centro", "San Miguelito", "Ancón", "Betania", "Alcalde Díaz"],
    },
  ],

  socialProof: {
    yearsExperience: "10+",
    rating: "5.0",
  },
};

/**
 * Genera un link de WhatsApp (wa.me) con mensaje precargado y correctamente codificado.
 * @param {string} message
 */
export function waLink(message) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Hola, necesito un diagnóstico para mi auto. Es un [Marca/Modelo] año [Año].";
