# Make A Child Smile Initiative

The existing Next.js 14 App Router homepage, redesigned around school uniforms, dignity, and confidence. Uses Manrope, Framer Motion, and a green/cream/gold palette.

## Development

Run `npm install`, then `npm run dev`. On Windows PowerShell with script execution disabled, use `npm.cmd`.

Validation: `npx tsc --noEmit`, `npm run lint`, and `npm run build`. Google Fonts access is needed for the first font download.

## Content and assets

- `src/lib/photos.ts` maps all page photographs.
- `src/app/image.webp` is the original school photograph.
- `public/images/placeholder-*.jpg` are approved temporary Unsplash images. Replace them with MACSI photographs. Source IDs: `1503676260728-1c00da094a0b`, `1509062522246-3755977927d7`, `1497486751825-1233686d5d80`.
- `src/app/logo.png` is the existing legacy logo. The new green MACSI logo was not present in this checkout; replace this asset when available.
- `src/lib/donations.ts` is the shared source for the existing uniform cost (NGN 4,500), donation presets, WhatsApp destination, contact details, impact counts and next-semester target. Preset amounts and messages are derived from the uniform cost.
- `src/components/sections/gallery.tsx` holds the five MACSI gallery photographs and captions. Add entries there to grow the gallery.
- The donation FAQ describes the existing WhatsApp process and local uniform production. It does not claim a payment provider, registration status or allocation percentages.

## Interactions

Masked heading entrances, layered photo parallax, CSS marquee, rolling digit counters, image reveals, draggable/keyboard-accessible campaign carousel, swipeable testimonials, accessible mobile menu, and scroll-driven closing text. Reduced-motion settings disable continuous motion and show closing text immediately.

Donations retain the existing WhatsApp links to `2348078675919`. There is no checkout or payment backend in this project. The buttons open WhatsApp; they do not process payments or send messages automatically.

## Donation journey

`DonateButton` is shared by navigation, hero, story decision points and footer. It links to `/#support` and focuses the donation choices on the homepage. Use `location` for consistent `data-cta="donate"` / `data-location` attributes; no analytics provider is installed.

`PersistentDonate` uses observers to display a desktop floating button or compact mobile bar after the visitor passes the introduction. It hides while the hero donation button, support section or footer donation button is visible, while the mobile menu is open, and while a form field is focused. The mobile bar includes safe-area padding and the page reserves bottom space.

The homepage explains the mission, how donations work, local tailoring, real gallery photos, impact, campaigns, testimonials and qualitative transparency before the WhatsApp donation choices. The 500-uniform next-semester target is presented as a goal, separately from the existing 100+ children supported.

Browser checks for these journeys are in `.review/donation-journey.cjs` (uses the local Playwright installation and preview at port 3101).

Development output uses .next-dev; production builds use .next-production, so preview and build processes can run independently.
