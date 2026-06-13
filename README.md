# Angular Content Projection Demo

This project demonstrates modern content projection techniques in Angular 22, using PrimeNG for UI styling.

## Features

The demo covers the following key concepts:

1. **Basic `ng-content`**: Simple content projection with fallback content
2. **Named Slots**: Content projection with selectable slots using attributes or CSS classes
3. **`ng-container`**: Using the container element to avoid extra DOM nodes
4. **`NgTemplateOutlet`**: Dynamically rendering templates with context
5. **Angular 22 Modern Syntax**: Using `@if`, `@for`, `@switch` instead of structural directives

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm or pnpm

### Installation

```bash
pnpm install
```

### Development Server

To start a local development server, run:

```bash
pnpm start
# or
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Building

To build the project run:

```bash
pnpm build
# or
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Additional Resources

- [Angular Content Projection Guide](https://angular.dev/guide/components/content-projection)
- [Angular Template Syntax](https://angular.dev/guide/templates)
- [PrimeNG Documentation](https://primeng.org/)
- [Vercel Angular Deployment Guide](https://vercel.com/docs/frameworks/angular)
