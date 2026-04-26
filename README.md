# Ecommerce Mercado

Proyecto de ecommerce inspirado visualmente en MercadoLibre, desarrollado con React, TypeScript, Vite y Tailwind CSS. La pantalla principal muestra un listado de productos con filtros por categoría, rango de precio y ordenamiento.

## Tecnologías usadas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide, para los íconos

## Funcionalidades

- Encabezado con logo, buscador, ubicación, navegación y carrito.
- Página principal con 12 productos.
- Filtro por categorías.
- Filtro por precio mínimo y máximo.
- Ordenamiento por relevancia, menor precio, mayor precio y mejor calificación.
- Tarjetas de producto con imagen, precio, descuento, envío y calificación.
- Layout responsive para escritorio y pantallas más pequeñas.

## Estructura principal

```txt
src/
  app/
    components/
      Header.tsx
      LucideIcon.tsx
    context/
      CartContext.tsx
    data/
      product.ts
    pages/
      HomePage.tsx
      RootLayout.tsx
    routes.tsx
  styles/
    index.css
    tailwind.css
  App.tsx
  main.tsx
```

## Cómo ejecutar el proyecto

Primero instala las dependencias:

```bash
npm install
```

Luego inicia el servidor de desarrollo:

```bash
npm run dev
```

El proyecto se puede abrir en:

```txt
http://localhost:5173/
```

## Comandos útiles

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Crear la versión de producción:

```bash
npm run build
```

Revisar errores de lint:

```bash
npm run lint
```

Vista previa de producción:

```bash
npm run preview
```

## Correcciones realizadas

Durante el desarrollo quedaron algunos errores importantes que impedían que la página cargara correctamente. Estos fueron los principales problemas corregidos:

1. La página principal estaba vacía.

   El archivo `HomePage.tsx` no tenía contenido funcional, por eso la ruta principal no mostraba el catálogo. Se creó la vista con filtros, ordenamiento y tarjetas de producto.

2. La ruta inicial no estaba configurada.

   En `routes.tsx` faltaba indicar qué componente debía mostrarse en `/`. Se agregó una ruta `index` que apunta a `HomePage`.

3. Tailwind no estaba cargando.

   En `src/styles/index.css` la importación de Tailwind estaba comentada. Se activó el import de `tailwind.css` para que las clases de estilo funcionen.

4. Había un enlace incorrecto de CSS en `index.html`.

   El HTML intentaba cargar `/src/index.css`, pero ese archivo no existía. Se eliminó ese enlace porque los estilos ya se cargan desde `main.tsx`.

5. El paquete de íconos estaba mal importado.

   El código usaba `lucide-react`, pero el proyecto tenía instalado `lucide`. Para resolverlo se creó `LucideIcon.tsx`, un componente pequeño que renderiza los íconos disponibles en el paquete instalado.

6. El servidor de desarrollo mostraba la página en blanco.

   La configuración de Vite tenía el plugin de React activado, pero en este entorno estaba provocando que la página quedara con el `root` vacío durante desarrollo. Se dejó una configuración más simple con Vite y Tailwind, manteniendo el build y el servidor local funcionando correctamente.

7. Algunos textos estaban con caracteres dañados.

   Varias palabras con tildes y algunos íconos se habían guardado con codificación incorrecta. Se corrigieron textos como `Categorías`, `Electrónica`, `Envío gratis` y otros nombres visibles.

## Imágenes

Las imágenes de los productos se cargan desde enlaces externos de Unsplash que ya estaban en la data del proyecto. No se guardan imágenes locales dentro del repositorio.

## Estado actual

El proyecto compila correctamente y pasa la revisión de lint:

```bash
npm run build
npm run lint
```
