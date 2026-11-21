# Swapno Tech — Implementation Status

Last updated: 20 November 2026  
Repository: `mi-murad/SwapnoTech`  
Working branch: `swapnotech-site-build`  
Preview alias: https://swapnotech-git-swapnotech-site-build-swapno3.vercel.app
Latest verified preview alias: https://swapnotech-git-swapnotech-site-build-swapno3.vercel.app

## Delivered in this build
- Reworked homepage hero and storytelling sequence on `swapnotech-site-build`; Mars/Earth/Venus remains intro-only.
- Added responsive abstract 3D-style composition, sticky scroll-story stage, active-step transitions and reduced-motion fallbacks.
- Refined the homepage parallax map to target the actual Apex-inspired hero, brand story, sticky story stage, service rows, work visuals, process, packages, team, insights and CTA layers.
- Repaired desktop pointer response: it now targets the live abstract hero artwork core rather than legacy `.hero` / `.planet-main` selectors that are not present in the Apex homepage.
- Added homepage packages, team story and newsletter-information sections while retaining existing service, work and product components.
- Added the missing `WEBSITE_SPEC.md` to this branch and updated it to state that planetary imagery is intro-only.
- Phase 2 cinematic intro integrated with first-visit handling, mobile fallback, skip, reduced-motion bypass and chapter labels.
- Homepage work gallery with interactive category filters.
- Added collaboration/process section without inventing team identities.
- Added dedicated service detail routes.
- Added individual editorial article routes.
- Added policy and community-guideline draft pages.
- Added account access placeholders that explicitly remain inactive.
- Contact form now validates and prepares/copies an enquiry draft; it does not submit to a server.
- Added route-specific document titles and meta descriptions.
- Completed day/night theme token and component contrast overrides, plus visible keyboard focus states.
- No new runtime dependencies added.

## Creative direction implementation — 20 November 2026
- Applied the approved Graphite / Porcelain / Signal Orange website palette to the shared dark and light theme tokens. Official logo artwork and brand identity rules remain separate from UI surface colours.
- Added the custom SVG Swapno Explorer astronaut-engineer character to the homepage hero, with restrained float and pointer/parallax depth.
- Updated the intro to use the same hero character composition for the final reveal. Desktop Mars → Earth → Venus portal transitions are shortened; the intro now targets roughly 4 seconds under normal media playback and retains a 7.6-second safety timeout. Skip, first-visit handling and reduced-motion bypass remain.
- Added a lighter mobile intro fallback with the mascot and headline rather than forcing the full desktop video sequence.
- Added a persistent EN/BN selector with a reusable translation layer and a separate Bangla copy module (`src/translations.js`, 355 initial phrase entries; native-language review is still pending).
- Extended Bangla switching across the navigation, homepage storytelling and service sections, work filters/cards, packages, products, team, insights, footer, inner-page routes, contact form labels/placeholders/status, and route metadata.
- The contact form's prepared enquiry text now follows the selected language. It still only prepares/copies the enquiry; it does not send or store it.
- The selected language is passed into the cinematic intro. Intro chapter captions, mobile headline and skip control now support Bangla.
- Added Noto Sans Bengali for the site and intro, with Bengali-specific heading spacing and line-height rules.
- This is an implementation pass, not final localization sign-off. Bangla wording, terminology and line wrapping still need native-language review and visual QA.
- The intro's mascot frame is aligned to the homepage hero frame in source. Actual browser/device visual confirmation is still outstanding.

## Verification completed
- Latest Vercel preview deployment `dpl_Gy1dYAWEJ4WCUmP3jNzk6b4vBzfS` for commit `7cd29751071bd94311542925ff3f5ab9944d525a` reached READY at `https://swapnotech-mhlyklnve-swapno3.vercel.app`.
- Vercel confirms the current preview deployment reached READY. This confirms deployment/build completion, not visual browser QA.
- No new runtime dependencies or backend/external integrations were added.
- Source check confirms the homepage component contains no Mars/Earth/Venus references; the intro remains in `public/intro.html`.
- Vercel production-mode build completed successfully on the development branch.
- The latest verified preview is isolated to `swapnotech-site-build`; production/main remain untouched.
- Reduced-motion and responsive CSS rules are present.
- Browser-based visual, interaction and physical-device checks have not yet been completed in this session.
- No production deployment was made.

## Known blockers and limitations
1. **Backend identity:** both connected Supabase account links currently list only a project named `Swapno AI`. It is not safe to assume that this is the Swapno Tech backend. No schema, auth, RLS, storage or data changes have been made.
2. **Lead delivery:** the contact form copies a prepared enquiry to the visitor's clipboard; it does not email, store or notify Swapno Tech.
3. **Authentication and admin:** login, registration, CMS and admin operations are inactive.
4. **Product functionality:** Creator Platform, Hosting, Swapno Founders and Website Solution are frontend product journeys, not connected production systems.
5. **Content:** portfolio entries are concept/category showcases, not real client case studies. Privacy, Terms and Community Guidelines are review drafts.
6. **Brand assets:** the intro currently uses typography rather than an unverified low-resolution logo crop. The approved high-resolution logo should be supplied from the official brand source.
7. **Language:** EN/BN switching is implemented across the public content and intro. Native-language review, copy completeness checks and visual line-wrap QA are still required.
8. **Visual QA:** the build is verified, but a complete visual review across physical devices and browsers has not been completed.

## Required before production
- Confirm the correct Swapno Tech Supabase project and environment ownership.
- Approve data model, auth roles, RLS, storage and lead-handling workflow.
- Confirm business contact channels and legal entity details.
- Supply approved logo and real portfolio/team assets.
- Complete native-language review of Bangla content and all public copy.
- Complete accessibility, SEO, responsive, browser and constrained-network testing.
- Confirm domain, production environment, backups and monitoring.
- Obtain explicit owner approval for production release.
