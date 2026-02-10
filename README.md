# Portfolio

## Key Technical Features:

- Svelte 5 (Runes): Utilizes the latest Svelte reactivity system for all interactive UI elements.

- Centralized State Management: All portfolio data is orchestrated through a single source of truth in src/landing/Data.svelte.js, ensuring easy maintainability and clean data flow.

- Hybrid Rendering: Combines static content delivery with reactive components for optimal Core Web Vitals.

- Modern Styling: Powered by Tailwind CSS for a utility-first, performant design system.

```text

├── public/              
├── src/
│   ├── components/      
│   │   ├── landing/     
│   │   ├── projects/    
│   │   ├── navigation/  
│   │   └── footer/      
│   ├── Layouts/         
│   ├── pages/           
│   ├── styles/          
│   └── landing/         
├── astro.config.mjs     
└── package.json  
```

##  Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Preview

Feel free to check [the preview ](https://thodlaskaris.dev/)
