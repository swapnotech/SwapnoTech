# Website Experience Specification

This document defines what every public section and page is for. It is the implementation checklist for the agency website; DESIGN_SYSTEM.md governs visual language and ARCHITECTURE.md governs technical boundaries.

## 1. Business story
Swapno Tech combines creative agency delivery and digital technology. The homepage should follow the cinematic, connected-motion approach of Apex Motion Studio as a reference—not copy its assets or layouts. Tell Swapno's own business story in customer language. Mars/Earth/Venus appear only in the intro. The site should explain the business in customer language:
- **Who we help:** entrepreneurs, startups, ecommerce/F-commerce businesses and growing companies.
- **What we do:** brand and design, content and production, social media/digital marketing, campaigns, websites and digital systems.
- **How it connects:** understand the business and audience → clarify the offer → shape the brand and content → distribute through appropriate channels → create a useful website/digital destination → learn and improve.
- **Why it matters:** clients can coordinate creative and technology work through one accountable team. Do not promise specific sales or growth outcomes.

Do not turn the homepage into a feature list. Lead with a clear business proposition, then prove the capability through real work, a transparent process and clear service pages.

## 2. Homepage sections

The Mars/Earth/Venus concept belongs **only to the cinematic intro**. It must not be repeated as homepage sections, cards, illustrations, backgrounds or navigation metaphors. After the intro, the homepage has its own Apex Motion Studio-inspired creative direction: connected editorial storytelling, layered composition, parallax depth, scroll-aligned transitions and a clear business narrative.

| Order | Section | Purpose and required content | Primary interaction |
|---|---|---|---|
| 0 | Cinematic intro | Mars → Earth → Venus journey, progress, official logo reveal/docking and portal handoff into the homepage hero. Maximum about 8 seconds, skippable and mobile-aware. | Skip; automatic transition |
| 1 | Cinematic hero | Clear Swapno Tech proposition, expressive typography, layered abstract visual composition and one project CTA plus a work/approach CTA. | Start a Project; Explore the Story |
| 2 | Swapno identity | Explain what the agency brings together, who it helps and how creative + technology connect. | About Swapno |
| 3 | Connected story | Tell the journey from understanding a business opportunity → shaping a direction → making useful creative and digital work → moving forward. Use abstract visual storytelling, parallax and aligned scroll transitions. No planetary motifs. | Explore the approach |
| 4 | Services | Organise actual deliverables into clear families: Brand & Design; Content & Production; Social Media & Digital Marketing; Web & Technology. Explain the outcomes of the work without guarantees. | Service detail pages |
| 5 | Portfolio categories | All Work, Case Studies, Video, Graphics & Posters, Branding, Websites & Technology. Categories change the selected content, not just a decorative tab state. | Filter work |
| 6 | Featured work | Real approved client work, with context, scope, role and verified outcomes where available. Case studies tell problem → approach → execution → outcome. | Open case study |
| 7 | Process | Connected timeline: Understand → Strategy → Create & Build → Review & Improve. Explain what the client receives at each stage. | Start a Project |
| 8 | Packages | Explain engagement choices (focused project, ongoing partnership, custom scope). Display prices only when approved and accurate; do not fabricate tiers. | Explore Packages / Request Quote |
| 9 | Product ecosystem | Three product previews only: Website Solution, Creator Platform, Hosting Packages. Swapno Founders is visibly separate as a community. | Explore each product / Apply to Join |
| 10 | Team | Real people, portraits and factual roles only. One-at-a-time/interweaving profile reveal is allowed; no invented names or headshots. | Meet the Team / Join or Collaborate |
| 11 | Insights | Editorial articles and practical business/creative/technology insights. Only show published articles. | Read Insights |
| 12 | Newsletter | Optional separate subscription with explicit consent. Account creation must never subscribe automatically. | Subscribe |
| 13 | Final CTA and footer | Clear invitation to discuss a project, complete navigation, ecosystem, contact, social and legal links. | Let's Talk / Start a Project |

Portfolio and team modules must not render fabricated placeholders. Until actual approved media/content is available, keep unpublished items out of public output rather than filling the space with generic illustrations or fake sample clients.

## 3. Header and navigation
Desktop: logo on left; Services, Work, Products, About and Insights; product dropdown; account access; “Let's Talk” primary CTA. Compact on scroll and theme-aware.
Mobile: logo and menu; a clean full-screen/large panel with the same routes, account link and contact CTA. Touch targets at least 44px. Navigation closes after selection and supports Escape.

## 4. Service information architecture
Use plain customer-facing labels and route each service family to a useful detail page:
- **Brand & Design:** brand strategy/identity, graphic design, campaign creatives and social design.
- **Content & Production:** content planning, video editing, short-form video, animation and motion graphics.
- **Social Media & Digital Marketing:** social media management, content distribution and digital campaigns. Paid campaign management may be described only when that exact scope is confirmed for the offer.
- **Web & Technology:** website design/development, software and digital platforms.
- **Launch and support:** startup/page setup and relevant digital add-ons where the team has confirmed capability.

Do not add SEO, PPC, influencer management, guaranteed performance, or other specialist claims merely because they appear on a reference agency's website. Final copy must describe Swapno's real deliverables.

Each service detail page needs: a direct offer statement, who it is for, what is included, how it works, relevant approved work, FAQ when useful, one main CTA and related services.

## 5. Public page map and purpose

| Route | Page job | Main CTA |
|---|---|---|
| / | Full agency narrative and discovery | Start a Project |
| /about | Story, principles, team approach and how Swapno works | Let's Talk |
| /services | Organised service families and how they work together | Explore Services / Start a Project |
| /services/brand-design | Brand identity and visual communication offer | Discuss Brand Work |
| /services/content-production | Content, video, short-form, animation and motion offer | Discuss Content |
| /services/social-media-marketing | Social media and campaign support offer | Discuss Marketing |
| /services/web-technology | Website, software and platform offer | Discuss a Digital Build |
| /packages | Engagement choices, inclusions and quote path; no invented prices | Request a Quote |
| /work | Filterable approved portfolio | View Case Studies |
| /work/case-studies/:slug | One project: context, scope, role, process and verified result | Discuss a Similar Project |
| /work/video | Video and motion portfolio | Start a Video Project |
| /work/graphics | Graphic design and campaign portfolio | Discuss Design Work |
| /work/branding | Brand identity portfolio | Discuss Branding |
| /work/websites | Website and technology portfolio | Discuss a Website |
| /insights | Published articles and categories | Read an Article |
| /insights/:slug | One editorial article, related reading and share metadata | Explore More |
| /contact | Project enquiry form, scope guidance and verified contact details | Send Enquiry |
| /products/website-solution | Builder concept, workflow, capabilities and add-ons | Build Your Website |
| /products/creator-platform | Professional discovery, profiles and creator value | Explore Creators |
| /products/hosting | Verified provider packages, terms and enquiry flow | Request Hosting |
| /community/founders | Separate Swapno Founders community, groups and application process | Apply to Join |
| /login | Sign in | Sign In |
| /register | Create an account with explicit consent choices | Create Account |
| /privacy | Privacy policy | — |
| /terms | Terms of use | — |
| /community/guidelines | Community rules and safety expectations | Apply to Join |

All route designs must use the shared design system but have page-specific layout and content. Do not render the same generic hero/card template across every route.

## 6. Product and community boundaries
- Website Solution, Creator Platform and Hosting Packages are the three core products.
- Swapno Founders is a distinct community. It must not be visually or structurally merged into Creator Platform.
- Public Creator profiles hide private contact data and private metrics. Client contact routes through Swapno.
- Hosting prices, features, renewal terms and provider statements must come from verified providers.
- Website builder MVP uses templates and approved sections, not an arbitrary free-position canvas or arbitrary code execution.
- Founder membership approval and verified-founder status are distinct. Four founder groups have different posting permissions.

## 7. Conversion and interaction rules
One primary CTA per page. Secondary actions support the main action, not compete with it.
- Project enquiries ask only for information needed to route the request.
- Newsletter consent is optional and separate from account registration.
- Signup popup, when implemented, offers two distinct options: Create an Account and Subscribe to Newsletter. It is dismissible, non-blocking, not shown to authenticated users and respects a cooldown.
- Filters, dropdowns, theme control, navigation and form states must work—not just look interactive.
- Never claim a form is live until it is connected to a working submission destination and has been tested.

## 8. Visual and layout acceptance criteria
- Mars/Earth/Venus imagery is intro-only. Do not use planets or space motifs in homepage sections.
- Homepage motion should feel connected and intentional: editorial composition, layered depth, parallax and scroll-aligned scene transitions inspired by Apex Motion Studio, while retaining Swapno's own brand identity.
- No cartoon or childish assets, toy-like planets, clip-art or made-up portfolio visuals.
- No overlapping/colliding/clipped text, headings, controls, nav items or decorative media.
- Decorative visuals must not reduce text contrast or compete with the primary message.
- Test at 360, 375, 390, 768, 1024, 1280 and 1440px widths; test both themes.
- No horizontal overflow on mobile. No critical information available only on hover.
- Use authentic assets and reviewed English/Bangla copy.
- Mobile content hierarchy must remain complete; desktop enhancements are progressive, not required to understand the page.

## 9. Build sequence
1. Re-establish the visual foundation: real intro choreography, hero, header, transitions and footer; test early on the live feature preview.
2. Complete the homepage sections in sequence and source real portfolio/team assets.
3. Build About, Services and service detail pages, Packages, Work/Case Studies, Insights and Contact.
4. Build the public Website Solution, Creator Platform, Hosting and Swapno Founders pages.
5. Build authentication, product dashboards, moderation and admin only after backend/security foundations are configured.
6. Verify mobile, desktop, both themes, both languages, accessibility, SEO and performance before release.
