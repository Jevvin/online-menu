# Online Menu

Aplicación de menús en línea con pedidos para restaurantes. Basada en Next.js y TypeScript.

## Características

- Next.js con SSR y SSG
- Rutas dinámicas: `/[restaurant]/menu`
- Middleware para subdominios
- Componentes reutilizables con Tailwind CSS y shadcn/ui
- Integración con Supabase (base de datos y autenticación)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` para ver la aplicación.

## Conectar Supabase Auth

1. Crea un proyecto en [Supabase](https://supabase.com).
2. Obtén la URL del proyecto y la clave `anon` pública.
3. Crea un archivo `.env.local` con:

```bash
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave
```

Con esto la autenticación con Supabase estará lista para usar en los formularios.

La aplicación está preparada para desplegarse en [Vercel](https://vercel.com/).

## Despliegue en Vercel

El archivo `public/index.html` redirige automaticamente a la página principal (`/`). Esto permite que Vercel muestre correctamente la app al acceder al dominio raíz.
