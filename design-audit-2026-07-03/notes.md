# Pure Drip Design Audit

Date: 2026-07-03
Target: http://localhost:3003
Scope: Main conversion path from homepage discovery to IV therapy page and inquiry.
Destination: Local folder, `/Users/udaypatel/Desktop/puredrip/design-audit-2026-07-03`.

## Captured Steps

1. Homepage desktop hero
   Screenshot: `/Users/udaypatel/Desktop/puredrip/design-audit-2026-07-03/01-home-desktop-hero.png`
   Health: Strong brand impression, but header contrast is weak over the dark hero image.

2. IV Therapy desktop hero
   Screenshot: `/Users/udaypatel/Desktop/puredrip/design-audit-2026-07-03/02-iv-therapy-desktop-hero.png`
   Health: Premium and calm, but the primary page CTA lands below the first viewport on a 1280x720 desktop.

3. Inquiry form desktop
   Screenshot: `/Users/udaypatel/Desktop/puredrip/design-audit-2026-07-03/03-inquiry-desktop.png`
   Health: Clear and credible; the form is structured well, though the submit/consent area is below the fold.

4. Homepage mobile hero
   Screenshot: `/Users/udaypatel/Desktop/puredrip/design-audit-2026-07-03/04-home-mobile-hero.png`
   Health: Content fits after animation settles, with a strong mobile brand moment. Header contrast remains a risk.

5. Homepage mobile menu
   Screenshot: `/Users/udaypatel/Desktop/puredrip/design-audit-2026-07-03/05-home-mobile-menu.png`
   Health: Easy to scan and tap, but the menu stops above the hero CTAs, making the open state feel visually mixed with the page behind it.

## Strengths

- The site has a distinctive premium wellness voice. The serif wordmark, large editorial headings, real care imagery, and restrained spacing make Pure Drip feel more elevated than a generic clinic site.
- The primary homepage hero explains the offer quickly: mobile IV therapy, nurse-led care, locations served, and booking are all visible in the first viewport.
- The form is thoughtfully labeled, the radio choices are plain-language, and the phone/email/location alternatives add trust.
- Reduced-motion support is present in the animation components, which is a good accessibility foundation.

## UX Risks

1. Transparent header is hard to read on the homepage hero.
   Evidence: The header stays `bg-transparent` while logo/nav text use dark ink colors over a dark purple image. Desktop nav and mobile menu icon are both low-contrast before scroll.
   Likely source: `src/components/header.tsx`.

2. IV Therapy page delays the main conversion action.
   Evidence: On a 1280x720 viewport, the `Book a session` and `How it works` CTAs measure at y=816-864, below the visible 720px viewport. The H1 starts around y=473, so the page spends too much of the first view on empty upper space.
   Likely source: `src/app/iv-therapy/page.tsx`, especially the hero `py-20 sm:py-28` and `lg:items-end` alignment.

3. Mobile menu open state competes with the underlying hero.
   Evidence: The menu panel exposes the hero text and homepage CTAs immediately underneath. This makes two sets of navigation/actions visible at once.
   Likely source: `src/components/header.tsx`.

4. Desktop navigation is crowded.
   Evidence: Eight nav items plus the booking button fit, but the row reads dense for a premium wellness brand. It is especially risky once contrast is fixed because it will become more visually present.

5. Inquiry form requires commitment before the user sees the submit path.
   Evidence: The visible form area shows intent, name, phone, email, date, and message. Consent and submit sit below the first viewport. The structure is usable, but the form feels longer than the left-side reassurance suggests.

## Accessibility Risks

- Header contrast likely fails or comes close to failing over the hero image. The visual risk is clear from screenshots; exact WCAG contrast should be checked after choosing the final header treatment.
- The header nav links and mobile menu button do not show obvious custom focus-visible styling in the captured states. Keyboard testing was not completed in this screenshot audit.
- The mobile menu should ideally manage focus and background scroll while open. The screenshots only confirm the visual state, not focus trapping or escape-key behavior.
- Motion is reduced when users prefer reduced motion, which is a confirmed strength.
- Form labels and field groups are present and readable. Error and success behavior were not submitted or verified because that could trigger a real inquiry flow.

## Recommendations

1. Fix the transparent header first.
   Use a light header state on dark hero sections: light wordmark, white or white/75 nav text, visible hover/focus states, and a menu icon/button treatment that remains readable. Alternatively, add a subtle top scrim behind the header.

2. Raise the IV Therapy hero conversion controls.
   Bring the H1 and CTA block higher by reducing vertical padding and changing desktop alignment from bottom-heavy to center/start. Aim to make `Book a session` visible without scrolling at 1280x720.

3. Make the mobile menu feel intentional.
   Consider a full-height sheet, backdrop, or stronger panel that visually owns the open state. Keep the large Book Now CTA, but avoid showing the underlying hero CTAs at the same time.

4. Simplify the desktop nav hierarchy.
   Consider grouping secondary pages like About, Location, and FAQs under a calmer secondary area, or make the active/current nav state more deliberate while reducing equal weight across all eight items.

5. Shorten the perceived inquiry form.
   Keep the current fields, but add a visible submit/reassurance cue earlier or use a two-column desktop layout that keeps consent and submit closer. A small privacy/response-time note near the form header would also help given the medical context.

## Evidence Limits

- This was a screenshot-led UX/design audit, not a full WCAG audit.
- Keyboard traversal, screen reader output, and actual form submission were not tested.
- Full-page screenshots were rejected because the browser capture repeated the hero background; accepted evidence is viewport-based.
