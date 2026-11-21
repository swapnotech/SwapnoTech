# Design System & References

## Primary reference
Apex Motion Studio — https://www.apexmotions.studio/ — reference for cinematic storytelling, integrated motion, scroll-aligned transitions, 3D depth and clear editorial hierarchy. Study its principles; do not copy its brand, exact layouts or assets.

## Supporting references
Locomotive https://locomotive.ca/; Active Theory https://activetheory.net/; Resn https://resn.co.nz/; Unseen Studio https://unseen.co/; Fantik Studio https://fantik.studio/; Contra https://contra.com/; Behance https://www.behance.net/; Shopify https://www.shopify.com/; Apple https://www.apple.com/; Awwwards https://www.awwwards.com/; Dribbble https://dribbble.com/.
Use for study, not direct copying.

## Brand identity
Canva source: https://www.canva.com/d/vybbw3TXrdHsiyx
Use the latest official logo artwork. Never redraw, stretch, rotate or recolour the official logo. The official brand identity remains authoritative for logo usage; the website interface has its own approved UI palette below.

## Approved website palette
**Graphite / Porcelain / Signal Orange** is the approved website UI direction. It replaces the previous cream-heavy website surfaces while retaining orange as a restrained brand accent.

| Token | Dark theme | Light theme |
|---|---|---|
| Background | `#0B0F14` | `#F4F6F8` |
| Surface | `#151C24` | `#FFFFFF` |
| Raised surface | `#202A35` | `#E8EDF2` |
| Text | `#F4F6F8` | `#111820` |
| Muted text | `#AAB4C0` | `#56616D` |
| Accent | `#FF6300` | `#FF6300` |
| Soft neutral | `#E8EDF2` | `#E8EDF2` |

Orange is reserved for primary actions, active states, focus accents and small details. Avoid large cream blocks, excessive gradients and orange-heavy backgrounds. Both themes must preserve readable contrast, visible focus and distinct surface hierarchy.

## Visual language and mascot
Futuristic, premium, minimal and human. Use strong display typography, legible body text, structured grids, consistent alignment and negative space. The approved hero character is **Swapno Explorer**: a premium astronaut engineer with subtle robotic/technical details, graphite and titanium suit surfaces, a reflective visor and restrained orange signals. It is a recurring brand anchor, not a decorative character repeated in every section. Keep the character composition consistent between intro and homepage hero.

## Intro and motion
Adapt the supplied `planet-jumping.html` mechanics: full-screen opening, loading indicator, floating brand mark, logo docking, layered planetary video scenes, portal/canvas mask and subtle pointer response. Replace unrelated brand assets. The Swapno intro is Mars → Earth → Venus, with a maximum duration of 8 seconds, skip control, mobile fallback, reduced-motion bypass and a reliable fallback if remote video is unavailable.

The intro is a separate opening narrative; planetary imagery must not be repeated as homepage section content. Its final mascot frame must match the homepage hero's mascot scale, position, frame and lighting, then crossfade directly into the real hero without a black flash or duplicated scene.

## Homepage sequence
Intro → Hero → brand introduction → connected approach/story → Services → selected work → process → packages → three core products → team → insights → newsletter → final CTA/footer.

## Motion and performance
Use controlled parallax, scroll reveals and shared transitions. Prefer transforms and opacity. Avoid scroll hijacking, excessive continuous motion, heavy WebGL on mobile and blur-heavy effects. Defer below-fold media, optimize responsive images/video, code-split heavy modules and provide static fallbacks. Measure Core Web Vitals on mobile. Motion should connect adjacent sections rather than animate each card independently.

## UX, accessibility and language
Readable contrast, keyboard access, visible focus, semantic structure, labeled forms, reduced motion and no hover-only controls. Day/night theme and English/Bangla language controls must work across every public page, form, validation message and metadata. English and Bangla are separately authored and reviewed; Bangla must be natural, meaningful, approachable and professional. Do not mark localization complete until every route is translated and reviewed.
