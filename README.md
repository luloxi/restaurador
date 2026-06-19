# Restaurador

**Plataforma de tokenización de propiedades históricas y activos en desuso sobre Cardano (CIP-0113).**

Restaurador permite comercializar tokens de proyectos de restauración y visualizar cada activo. Los fondos recaudados financian la puesta en valor. Los inversores obtienen retornos vía operación del inmueble.

## Características principales
- Landing completa orientada a inversores retail e institucionales y propietarios
- Marketplace interactivo con filtros
- Detalle de cada proyecto + tokenomics + reglas CIP-0113
- Flujo completo de compra simulado con wallet Cardano (Lace / Eternl etc.)
- Portfolio personal
- Formulario de solicitud para propietarios
- Diseño elegante patrimonial con paleta verde bosque + crema + cobre

## Demo de la tecnología
Utiliza el estándar **CIP-0113 Programmable Tokens** de Cardano Foundation para emitir tokens nativos con reglas de cumplimiento embebidas.

Sitio de referencia: [Cardano Programmable Tokens](https://cardanofoundation.org/blog/programmable-tokens-cardano)

## Desarrollo local

```bash
npm run dev
```

## Deploy

Este proyecto está listo para Vercel.

```bash
npx vercel
# o conecta el repositorio en Vercel
```

## Estructura

- `data/projects.ts` — 5 proyectos mock detallados
- `app/page.tsx` — SPA completa con todos los flujos
- Componentes integrados (modales, filtros, simulación de compra)

---

**Nota:** Esta es una demostración conceptual. Los datos y transacciones son simulados.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
