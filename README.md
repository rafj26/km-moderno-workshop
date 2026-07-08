# Kilometro Moderno Workshop — Landing Page

Landing page one-page construida en **Astro + Tailwind CSS**, optimizada para
SEO local en Panamá Oeste (La Chorrera, Arraiján, Vista Alegre, Costa Verde) y
Ciudad de Panamá, con captura de leads directa a WhatsApp.

## 🚀 Instalación

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist (HTML estático + sitemap, listo para Vercel/Netlify)
npm run preview   # sirve el build de producción localmente
```

Requiere Node.js 18+.

## ✅ Checklist antes de publicar

1. ✅ **Teléfono configurado** → `src/data/site.js` — `phoneRaw: "50766207896"` / `phoneDisplay: "+507 6620-7896"`.
2. **Dominio real** → editar `site` en `astro.config.mjs` (actualmente `https://www.chentetechcar.com`; afecta el `canonical`, Open Graph, Twitter Card y el sitemap automático).
3. **Fotos reales de trabajos** → reemplazar los SVG de `public/images/trabajos/` por fotos optimizadas (`.webp` o `.jpg`, idealmente < 150 KB c/u) en `src/components/Portfolio.astro`.
4. ✅ **Imagen Open Graph** → `public/images/og-image.jpg` generada (1200×630 px, colores de marca). Reemplazar si se dispone de fotografía real del negocio.
5. **Favicon real** → reemplazar `public/favicon.svg` por el logo real.
6. ✅ **Apple Touch Icon** → `public/apple-touch-icon.png` generado (180×180 px). Reemplazar por versión con logo real cuando esté disponible.
7. **Testimonios** → son textos recreados; sustituir por capturas o citas reales de clientes en `src/components/Testimonials.astro`.
8. Revisar el `JSON-LD` (`AutoRepair`) en `src/layouts/Layout.astro` — ajustar horarios y zonas si cambian.

## 🧱 Estructura de componentes

```
src/
├─ data/site.js          → config central (teléfono, zonas, helper wa.me)
├─ layouts/Layout.astro  → <head> SEO completo, JSON-LD, fuentes, Header/Footer/CTA flotante
├─ components/
│  ├─ Header.astro
│  ├─ Hero.astro         → H1 + panel HUD de diagnóstico (elemento de marca)
│  ├─ Services.astro     → Electromecánica / A·A / Mecánica integral
│  ├─ Portfolio.astro    → carrusel con CSS scroll-snap (sin JS)
│  ├─ Testimonials.astro → burbujas estilo WhatsApp
│  ├─ Coverage.astro     → zonas por región
│  ├─ FAQ.astro          → acordeón nativo <details> (sin JS)
│  ├─ Footer.astro
│  ├─ WhatsappCTA.astro  → botón reutilizable con mensaje precargado
│  └─ FloatingWhatsapp.astro
└─ pages/index.astro     → ensambla todas las secciones
```

## ⚡ Notas de rendimiento (Core Web Vitals)

- **Cero JavaScript de framework**: Astro renderiza HTML estático; el único
  "JS" del sitio es nativo del navegador (`<details>` para el FAQ, scroll-snap
  CSS para el carrusel). Esto mantiene el TBT/INP casi en cero.
- **Fuentes**: cargadas con `preconnect` + `display=swap` para no bloquear el
  render y evitar FOIT.
- **Imágenes**: todas con `width`/`height` explícitos (evita CLS) y
  `loading="lazy"` fuera del viewport inicial.
- **CSS**: Tailwind purga automáticamente las clases no usadas en `build`.
- Antes de producción: pasar las fotos reales por un optimizador (`.webp`,
  `astro:assets`, o un servicio como Squoosh) para mantener el LCP bajo.

## 🔍 SEO local

- **Meta tags completos** en `<head>`: `title`, `description`, `keywords`,
  `robots`, `canonical`.
- **Open Graph** (Facebook, WhatsApp, LinkedIn): `og:type`, `og:locale`,
  `og:title`, `og:description`, `og:url`, `og:image` (1200×630),
  `og:image:width`, `og:image:height`, `og:site_name`.
- **Twitter/X Card**: `twitter:card`, `twitter:title`, `twitter:description`,
  `twitter:image`.
- **Geo tags**: `geo.region` y `geo.placename` para reforzar la señal de
  SEO local en Panamá.
- **Apple Touch Icon**: `public/apple-touch-icon.png` — ícono que aparece
  al guardar el sitio en la pantalla de inicio de iOS.
- **Sitemap automático**: generado por `@astrojs/sitemap` en cada
  `npm run build` → `dist/sitemap-index.xml` + `dist/sitemap-0.xml`.
- Datos estructurados `schema.org/AutoRepair` con `areaServed` por ciudad
  (mejor señal local que un solo texto de dirección para un técnico móvil).
- Encabezados semánticos: un único `<h1>` en el Hero, `<h2>` por sección,
  `<h3>` por servicio.
- Copys con keywords long-tail integradas de forma natural (diagnóstico por
  escáner, aire acondicionado automotriz, mecánico a domicilio, etc.).

## 📱 Diseño responsive

- **Mobile-first**: todos los componentes usan clases Tailwind sin prefijo
  para móvil y `sm:` / `md:` para pantallas más grandes.
- Rango probado: desde **320 px** (budget) hasta **1280 px** (desktop).
- Botones hero a ancho completo en móvil (`w-full`) y tamaño natural en
  sm+ (`sm:w-auto`).
- Panel HUD: padding `p-4 sm:p-6` y texto `text-xs sm:text-sm` para
  pantallas ≤ 360 px.
- Cards de servicios, cobertura y FAQ con `p-4 sm:p-6` para evitar
  contenido apretado en pantallas pequeñas.
- Carrusel de portafolio con CSS `scroll-snap` (sin JS) y `scrollbar-hide`
  para experiencia táctil nativa.
- `scroll-padding-top: 5rem` compensa el header sticky al navegar con anclas.
- `viewport-fit=cover` en el meta viewport para dispositivos con notch.
- `prefers-reduced-motion` respetado en todas las animaciones CSS.

## 🎨 Sistema de diseño

| Token | Valor | Uso |
|---|---|---|
| `brand.bg` | `#0B1622` | Fondo base (azul oscuro profundo) |
| `brand.surface` | `#122032` | Cards y paneles |
| `brand.orange` | `#F2600C` | Acento "naranja mecánico" (marca, botón llamar) |
| `brand.green` | `#25D366` | Reservado **solo** para CTAs de WhatsApp |
| `brand.teal` | `#2FD4C9` | Acento "escáner/diagnóstico" (HUD, chips técnicos) |

Tipografías: `Oswald` (display, industrial) + `Inter` (texto) + `JetBrains
Mono` (códigos de diagnóstico y chips técnicos).
