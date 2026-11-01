# Le Sucre

Landing estática responsive, sin dependencias de JavaScript. Requiere Node.js para generar la carpeta de publicación; Python 3 para el servidor local.

## Desarrollo

`npm run dev` — servidor en el puerto 3000.

`npm run build` — genera `dist/`.

`npm run preview` — sirve la versión de publicación en el puerto 3000.

## Publicar

- **Vercel:** preset Other, comando de build `npm run build`, directorio de salida `dist`.
- **Cloudflare Pages:** comando de build `npm run build`, directorio de salida `dist`.

No requiere variables de entorno ni backend. Las fuentes Google Fonts tienen fallback local.

## Datos pendientes antes de publicar

Instagram no pudo consultarse desde el entorno. La paleta y el diseño son una propuesta a validar con la marca. Reemplazar el texto editorial de historia por la historia oficial; confirmar sabores; incorporar direcciones, horarios, datos del titular comercial y domicilio legal. Reemplazar el enlace general a PedidosYa por el enlace real al comercio. Las imágenes y sabores son ilustrativos.
