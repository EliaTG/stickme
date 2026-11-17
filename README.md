# Stick Me

Base project with Astro, React, TypeScript and GSAP.

## Development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run check
npm run build
```

## Structure

- `src/pages/`: Astro routes.
- `src/layouts/`: shared page layouts.
- `src/components/`: React and Astro components.
- `src/lib/animation.ts`: GSAP entry point for future animations.
- `src/styles/`: global styles.
- `src/assets/`: assets processed by Astro.
- `public/`: static files.

The homepage renders a React component. Character animation and image upload are left for future implementation.
