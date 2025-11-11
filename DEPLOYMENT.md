# QuantXlr8 Deployment Guide

## Quick Start (Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs on **http://localhost:8080**

## Production Deployment

### Build Output
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deployment Platforms

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Static Hosting (S3, GitHub Pages, etc.)
Upload the contents of the `dist/` folder to your static hosting provider.

## Environment Configuration

### Build Environment Variables (Optional)
Create a `.env` file in the root directory:

```env
# API Configuration (when implementing real backend)
VITE_API_BASE_URL=https://api.quantxlr8.com
VITE_CONTACT_EMAIL=hello@quantxlr8.com
```

## Performance Optimization

### Current Optimizations
✅ Image optimization via Vite
✅ Code splitting and lazy loading
✅ CSS purging via Tailwind
✅ Font preloading (Inter, Source Sans 3)
✅ SVG logo assets (infinitely scalable)
✅ Semantic HTML for accessibility
✅ WCAG 2.2 AA compliant

### Lighthouse Targets
- **Performance:** >90
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

## Form Backend Integration

Currently, forms log to console (development mode). To integrate with a real backend:

### Option 1: Serverless Functions (Vercel/Netlify)

Create API routes in `api/` directory:

**api/startup.ts** (Vercel)
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;
  
  // Validate with Zod
  // Send to CRM/Email service
  // Store in database
  
  return res.status(200).json({ message: 'Application received' });
}
```

**netlify/functions/startup.ts** (Netlify)
```typescript
import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const data = JSON.parse(event.body || '{}');
  
  // Process submission
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Application received' })
  };
};
```

### Option 2: External API

Update form handlers in `src/components/Forms.tsx`:

```typescript
const response = await fetch('https://api.quantxlr8.com/startup', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
  },
  body: JSON.stringify(data),
});
```

### Recommended Services
- **Email:** SendGrid, AWS SES, Resend
- **CRM:** HubSpot, Salesforce, Pipedrive
- **Database:** Supabase, PlanetScale, Vercel Postgres
- **Forms:** Formspree, Formspark (no-code options)

## SEO Configuration

### Custom Domain Setup
1. Point your domain DNS to deployment platform
2. Update `index.html` meta tags with production URLs
3. Update `site.webmanifest` start_url

### Sitemap Generation (Future)
```bash
npm i -D vite-plugin-sitemap
```

Add to `vite.config.ts`:
```typescript
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    sitemap({ hostname: 'https://quantxlr8.com' })
  ]
});
```

### Google Analytics (Optional)
Add to `index.html` <head>:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Monitoring & Analytics

### Recommended Tools
- **Performance:** Vercel Analytics, Cloudflare Web Analytics
- **Errors:** Sentry
- **User behavior:** PostHog, Plausible (privacy-friendly)

## Security Headers

Add to deployment platform configuration:

**Vercel** (`vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

**Netlify** (`netlify.toml`):
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## Accessibility Testing

```bash
# Install axe CLI
npm i -g @axe-core/cli

# Run accessibility audit
axe http://localhost:8080
```

## Support

For deployment issues or questions, contact the development team or refer to:
- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

Built with ❤️ for QuantXlr8
