# AI Development Rules for Homestay Bumina EENK Website

## Tech Stack Overview

- **Framework**: Next.js 15 with App Router for modern React-based static site generation
- **Language**: TypeScript for type-safe development
- **Styling**: Tailwind CSS v4 for utility-first responsive design
- **Component Library**: shadcn/ui components (pre-installed) for consistent UI elements
- **Icons**: lucide-react for lightweight SVG icons
- **Image Handling**: Next.js Image component with unoptimized flag for static export
- **Deployment**: Static export to GitHub Pages with GitHub Actions CI/CD
- **APIs**: File-based API routes for N8N integration (articles management)
- **SEO**: Built-in Next.js metadata API with structured data for LodgingBusiness
- **State Management**: React Hooks for client-side interactivity

## Library Usage Rules

### UI Components
- **Primary Choice**: Use shadcn/ui components whenever possible for forms, cards, alerts, etc.
- **Custom Components**: Create new components in `src/components/` for unique UI elements
- **Styling**: Always use Tailwind CSS classes for styling; avoid inline styles or CSS modules

### Icons
- **Only Library**: Use `lucide-react` for all icons throughout the application
- **Custom Icons**: Create SVG components only when specific branding icons are required

### Images
- **Component**: Use Next.js `Image` component for all images with `unoptimized` prop
- **Optimization**: No image optimization libraries needed due to static export requirements

### Data Management
- **Static Content**: Store in JSON files in `src/lib/` directory
- **API Routes**: Use file-based API routes in `src/app/api/` for external integrations
- **Helpers**: Create TypeScript helper functions in `src/lib/` for data processing

### SEO & Metadata
- **Page Metadata**: Use Next.js `metadata` object in page files
- **Structured Data**: Add JSON-LD structured data in `layout.tsx` for business information
- **Sitemaps**: Maintain `sitemap.ts` and `robots.ts` in `src/app/` directory

### Forms & User Input
- **Form Library**: Use shadcn/ui form components with React Hook Form for complex forms
- **Validation**: Implement with Zod if form validation is needed

### Animations
- **Simple Animations**: Use Tailwind CSS classes with transition utilities
- **Complex Animations**: Use Framer Motion only if absolutely necessary

### HTTP Requests
- **API Routes**: Prefer file-based API routes for server-side operations
- **External APIs**: Use `fetch` API for client-side requests to external services

### State Management
- **Local State**: Use React `useState` and `useReducer` hooks
- **Global State**: Avoid global state management libraries; use React Context if needed
- **Server State**: Use React Server Components where possible for data fetching

### File Structure
- **Pages**: Create in `src/app/` directory following App Router conventions
- **Components**: Place in `src/components/` with descriptive names
- **Libraries**: Helper functions and data in `src/lib/`
- **Public Assets**: Static files in `public/` directory

### Performance Rules
- **Bundle Size**: Keep bundle size minimal; avoid large third-party libraries
- **Image Optimization**: Use appropriate image sizes and formats
- **Code Splitting**: Leverage Next.js automatic code splitting
- **Lazy Loading**: Use Next.js dynamic imports for heavy components

### Accessibility
- **ARIA**: Follow ARIA best practices for interactive components
- **Semantic HTML**: Use proper HTML elements for content structure
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible

### Testing
- **Type Checking**: Maintain strict TypeScript typing throughout
- **Manual Testing**: Test all changes in browser before committing
- **Cross-browser**: Verify functionality in latest Chrome, Firefox, and Safari