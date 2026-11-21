import React, { useEffect, useState } from 'react';
import { BN_COPY } from './translations.js';


function tx(lang, value) {
  if (lang !== 'BN' || typeof value !== 'string') return value;
  const key = value.trim();
  const translated = Object.prototype.hasOwnProperty.call(BN_COPY, key) ? BN_COPY[key] : BN_COPY[value];
  if (typeof translated !== 'string') return value;
  const leadingLength = value.length - value.trimStart().length;
  const trailingLength = value.length - value.trimEnd().length;
  return value.slice(0, leadingLength) + translated + (trailingLength ? value.slice(-trailingLength) : '');
}
function Localize({ lang = 'EN', children }) {
  if (lang !== 'BN') return children;
  const walk = (node) => {
    if (typeof node === 'string') return tx(lang, node);
    if (Array.isArray(node)) return node.map(walk);
    if (!React.isValidElement(node)) return node;
    const props = {};
    ['aria-label', 'placeholder', 'title', 'alt'].forEach((key) => {
      if (typeof node.props[key] === 'string') props[key] = tx(lang, node.props[key]);
    });
    const children = React.Children.map(node.props.children, walk);
    return React.cloneElement(node, props, children);
  };
  return <>{React.Children.map(children, walk)}</>;
}

const routes = [
  ['Home','/'],['Services','/services'],['Packages','/packages'],['Work','/portfolio'],
  ['Insights','/blog'],['About','/about'],['Contact','/contact']
];
const products = [
  {name:'Website Solution',tag:'Launch your digital home',desc:'Build a polished, mobile-ready website from guided structures. Choose a starting point, shape your pages and publish with confidence.',href:'/products/website-solution',number:'01'},
  {name:'Creator Platform',tag:'Make your work discoverable',desc:'A professional home for creators to present their skills, projects and experience—and connect with the right opportunities.',href:'/products/creator-platform',number:'02'},
  {name:'Hosting',tag:'A reliable place to begin',desc:'Compare suitable hosting options and get help coordinating setup, migration and ongoing support.',href:'/products/hosting',number:'03'}
];
const services = [
  ['01','Brand & identity','Positioning, visual identity and brand systems that make a business recognizable.'],
  ['02','Content & campaigns','Creative direction, social content, motion and campaigns built around a clear objective.'],
  ['03','Websites & platforms','Responsive websites, landing pages and practical digital products.'],
  ['04','Growth & marketing','Research-led strategy, channel planning and ongoing digital marketing support.'],
  ['05','Creative production','Graphic design, video editing, animation and product-focused storytelling.'],
  ['06','Business technology','Automation, integrations and digital workflows that reduce friction.']
];
const projects = [
  {name:'Brand identity systems',type:'Branding',category:'Branding',desc:'Visual identity explorations, typography, colour and brand applications.',kind:'Identity study'},
  {name:'Campaign films',type:'Video',category:'Video',desc:'Short-form storytelling, motion direction and product-focused film concepts.',kind:'Motion study'},
  {name:'Editorial graphics',type:'Graphics & Posters',category:'Graphics & Posters',desc:'Campaign layouts, social systems, posters and information-led design.',kind:'Editorial study'},
  {name:'Digital experiences',type:'Websites & Technology',category:'Websites & Technology',desc:'Responsive interfaces, website structures and useful digital product concepts.',kind:'Interface study'},
  {name:'Business transformations',type:'Case Studies',category:'Case Studies',desc:'A case-study format for documenting the challenge, approach, deliverables and verified outcome.',kind:'Case-study format'}
];
const workCategories=['All','Case Studies','Video','Graphics & Posters','Branding','Websites & Technology'];
const serviceDetails={
 '/services/brand-identity':['Brand & identity','Build a recognizable foundation.','Positioning, visual direction, logo systems, typography, colour and practical brand applications.'],
 '/services/content-campaigns':['Content & campaigns','Give every message a clear purpose.','Creative direction, content planning, campaign concepts, social assets and motion-led storytelling.'],
 '/services/websites-platforms':['Websites & platforms','Make your digital presence work harder.','Responsive websites, landing pages, product interfaces and practical platform experiences.'],
 '/services/growth-marketing':['Growth & marketing','Connect the plan to measurable action.','Research, channel planning, campaign setup, content systems and ongoing optimization.'],
 '/services/creative-production':['Creative production','Turn ideas into engaging content.','Graphic design, video editing, animation, product visuals and digital-first creative assets.'],
 '/services/business-technology':['Business technology','Make everyday workflows more useful.','Automation planning, integrations, CRM workflows and custom technology coordination.']
};
const articleDetails={
 '/blog/clearer-digital-foundation':['A clearer digital foundation','Strategy','A practical digital foundation starts with clarity: who you serve, what they need, and what action should happen next.','Before choosing tools, map the customer journey. Identify the questions people ask, the information they need to trust you, and the simplest path to enquire or buy. Then select only the channels and features that support that journey.'],
 '/blog/design-that-earns-attention':['Design that earns attention','Creative','A strong visual earns attention, but a clear message gives that attention somewhere useful to go.','Start with one message per asset. Build hierarchy around the most important idea, support it with evidence or context, and make the next action obvious. Consistency across formats helps people recognize the brand without making every post look identical.'],
 '/blog/from-idea-to-useful-product':['From idea to useful product','Technology','The best first version solves one real problem clearly instead of trying to do everything at once.','Write down the user, the problem and the outcome. Sketch the shortest workflow that delivers that outcome. Test it with real people, learn where they get stuck, and add complexity only when it removes a proven obstacle.']
};
const articles = [
  ['A clearer digital foundation','Strategy','A practical starting point for businesses building their online presence.'],
  ['Design that earns attention','Creative','Why a visual idea needs a clear message and a useful next step.'],
  ['From idea to useful product','Technology','How to turn a business need into a focused digital experience.']
];
const pageCopy = {
  '/about':['A team for what comes next','We bring creative thinking and practical technology together to help ideas become useful, visible and ready to grow.'],
  '/services':['Make the next move meaningful','A connected set of creative, digital and growth services—planned around the real needs of your business.'],
  '/packages':['A clearer way to get started','Choose a starting scope. We’ll shape the details around your goals, timeline and available resources.'],
  '/portfolio':['Selected work & explorations','A growing collection of brand, content and digital work. Detailed case studies will be added as each project is approved for publication.'],
  '/blog':['Ideas for building forward','Notes on business, creative work, technology and the decisions behind better digital experiences.'],
  '/contact':['Tell us what you’re building','Share the goal, the challenge or the early idea. We’ll help you find a practical next step.'],
  '/products/website-solution':['A website you can shape yourself','Start with a considered structure, customize the content and publish a responsive website—without starting from a blank page.'],
  '/products/creator-platform':['Let your work speak clearly','Build a professional profile, organize your portfolio and become easier to discover for relevant opportunities.'],
  '/products/hosting':['Hosting, without the guesswork','Explore suitable hosting options and get human support with selection, setup and coordination.'],
  '/founders':['A space for people building businesses','Swapno Founders brings aspiring entrepreneurs, founders and business owners together to learn, exchange ideas and find opportunities.'],
 '/privacy':['Privacy & data principles','A plain-language draft explaining how Swapno Tech intends to handle information across its website and future services.'],
 '/terms':['Terms of use','A draft framework for using the Swapno Tech website, products and services. Final terms require review before launch.'],
 '/community-guidelines':['Community guidelines','A shared standard for respectful, useful and safe participation in Swapno Founders.'],
 '/login':['Your Swapno account','Account access is being prepared. No sign-in or account creation is active in this preview.'],
 '/register':['Create your Swapno account','Registration will open when the account and privacy workflows are ready.']
};
function Arrow({diagonal=false}) { return <span aria-hidden="true" className="arrow">{diagonal?'↗':'→'}</span>; }
function Brand({light=false}) { return <a className={'brand '+(light?'brand-light':'')} href="/" aria-label="Swapno Tech home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SWAPNO<span>TECH</span></span></a>; }
function Header({theme,setTheme,lang,setLang}) {
  const [open,setOpen]=useState(false);
  return <Localize lang={lang}><header className="header"><div className="nav-wrap"><Brand />
    <nav className={open?'nav nav-open':'nav'} aria-label="Main navigation">
      {routes.map(([name,path])=><a key={path} href={path} onClick={()=>setOpen(false)}>{tx(lang,name)}</a>)}
      <a href="/founders" className="nav-founders" onClick={()=>setOpen(false)}>Founders ↗</a>
    </nav>
    <div className="nav-actions"><button type="button" className="text-control language-toggle" aria-label={lang==='EN'?'Switch to Bangla':'Switch to English'} onClick={()=>setLang(lang==='EN'?'BN':'EN')}>{lang==='EN'?'বাংলা':'EN'}</button><button className="theme-toggle" aria-label="Toggle colour theme" onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?'☼':'◐'}</button><a className="button button-small button-orange nav-cta" href="/contact">{lang==='BN'?'প্রজেক্ট শুরু করুন':'Start a project'} <Arrow diagonal /></a><button className="menu-toggle" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button></div>
  </div></header></Localize>;
}
function Footer({lang='EN'}) {
  const bn=lang==='BN';
  return <Localize lang={lang}><footer className="footer"><div className="footer-top"><div><Brand light/><p className="footer-note">{bn?<>সম্ভাবনা থেকে অগ্রযাত্রা।<br/>বর্ধনশীল ভাবনার জন্য সৃজনশীল প্রযুক্তি।</>:<>Possibilities into progress.<br/>Creative technology for growing ideas.</>}</p></div><div className="footer-links"><div><b>Explore</b><a href="/services">Services</a><a href="/portfolio">Work</a><a href="/blog">Insights</a><a href="/about">About</a></div><div><b>Products</b><a href="/products/website-solution">Website Solution</a><a href="/products/creator-platform">Creator Platform</a><a href="/products/hosting">Hosting</a><a href="/founders">Swapno Founders</a></div><div><b>Connect</b><a href="/contact">Start a conversation</a><a href="/contact">Contact us</a><a href="/login">Account</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Swapno Tech</span><span>Built around possibility.</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/community-guidelines">Community</a></div></div></footer></Localize>;
}
function SectionHeading({eyebrow,title,copy,lang='EN'}) { return <Localize lang={lang}><div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div></Localize>; }
function WorkGallery({featured=false,lang='EN'}) {
 const [active,setActive]=useState('All');
 const visible=projects.filter(p=>active==='All'||p.category===active);
 return <Localize lang={lang}><div className={featured?'work-gallery work-gallery-featured':'work-gallery'}>
  <div className="work-filters" role="group" aria-label="Filter portfolio categories">{workCategories.map(c=><button type="button" key={c} className={active===c?'filter-chip active':'filter-chip'} aria-pressed={active===c} onClick={()=>setActive(c)} >{tx(lang,c)}</button>)}</div>
  <div className="work-grid">{visible.map((p,i)=><article className={'work-card work-'+(i%4)} key={p.category}>
   <div className="work-visual"><span className="visual-index">0{projects.indexOf(p)+1}</span><div className="visual-shape"></div><span className="visual-caption">{tx(lang,p.kind).toUpperCase()}</span><span className="visual-category">{tx(lang,p.type)}</span></div>
   <div className="work-meta"><div><h3>{tx(lang,p.name)}</h3><p>{tx(lang,p.desc)}</p></div><span className="eyebrow">CONCEPT SHOWCASE</span></div>
  </article>)}</div>
  <p className="note">These are category and presentation studies, not published client case studies or claims of commercial results. Verified project work will replace them as publication is approved.</p>
 </div></Localize>;
}
function CollaborationSection(){return <section className="section collaboration-section"><div className="section-split"><SectionHeading lang={lang} eyebrow="09 / HOW WE COLLABORATE" title="A team around the work." copy="The right people, skills and learning paths come together around each project—without pretending every project needs the same team."/></div><div className="collaboration-grid"><article><span>01 / ALIGN</span><h3>Shared direction</h3><p>Agree on the goal, audience, responsibilities and definition of done before production begins.</p></article><article><span>02 / CONTRIBUTE</span><h3>Skills in action</h3><p>Bring skilled contributors and learners into clearly scoped tasks with review and support.</p></article><article><span>03 / IMPROVE</span><h3>Learn as we build</h3><p>Review progress, share feedback and document what the next person needs to know.</p></article></div></section>}
function Home({lang='EN'}) {
  const bn = lang === 'BN';
  const [storyActive, setStoryActive] = useState(0);

  useEffect(() => {
    const steps = [...document.querySelectorAll('[data-story-step]')];
    if (!steps.length || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setStoryActive(Number(entry.target.dataset.storyStep));
      });
    }, { rootMargin: '-38% 0px -38% 0px', threshold: 0 });
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const story = [
    { number: '01', title: 'See the possibility.', copy: 'Every meaningful project starts with a better question. We look at the business, the people it serves and the opportunity in front of it.', label: 'START WITH UNDERSTANDING', visual: 'DISCOVER' },
    { number: '02', title: 'Make it tangible.', copy: 'Strategy becomes a clear direction. Creative ideas become a visual language. Technology becomes an experience people can actually use.', label: 'TURN THINKING INTO MAKING', visual: 'CREATE' },
    { number: '03', title: 'Move it forward.', copy: 'The work connects across channels and touchpoints—so every part has a purpose and the next step feels clear.', label: 'BUILD MOMENTUM', visual: 'CONNECT' },
  ].map(item => ({...item,title:tx(lang,item.title),copy:tx(lang,item.copy),label:tx(lang,item.label),visual:tx(lang,item.visual)}));

  return <Localize lang={lang}>
    <section className="apex-hero" id="top">
      <div className="apex-hero-grid" aria-hidden="true" />
      <div className="apex-hero-glow" aria-hidden="true" />
      <div className="apex-hero-copy">
        <span className="eyebrow eyebrow-line"><span /> INDEPENDENT CREATIVE & TECHNOLOGY PARTNER</span>
        <h1>{bn?<>সম্ভাবনা থেকে<br/><em>অগ্রযাত্রা।</em></>:<>Possibilities<br />into <em>progress.</em></>}</h1>
        <p>{bn?'আমরা কৌশল, সৃজনশীল চিন্তা ও প্রযুক্তিকে একত্র করে ব্যবসাকে এগিয়ে নিতে সাহায্য করি।':'We connect strategy, creative thinking and technology to help businesses build what comes next.'}</p>
        <div className="hero-actions">
          <a className="button button-orange" href="/contact">{bn?'প্রজেক্ট শুরু করুন':'Start a project'} <Arrow diagonal /></a>
          <a className="button button-ghost" href="#story">{bn?'আমাদের কাজের ধরন দেখুন':'Explore our approach'} <Arrow /></a>
        </div>
      </div>
      <div className="apex-hero-art" aria-hidden="true">
        <div className="hero-art-frame"><div className="hero-art-core"><svg className="swapno-mascot" viewBox="0 0 520 620" role="img" aria-label="Swapno Explorer astronaut engineer"><defs><linearGradient id="suit" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#F4F6F8"/><stop offset=".48" stop-color="#8795A4"/><stop offset="1" stop-color="#263442"/></linearGradient><linearGradient id="visor" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#9BCAD8"/><stop offset=".42" stop-color="#294052"/><stop offset="1" stop-color="#101923"/></linearGradient></defs><ellipse cx="260" cy="586" rx="168" ry="18" fill="#000" opacity=".24"/><path d="M105 605c9-105 60-164 155-176 96 12 147 71 155 176H105Z" fill="url(#suit)" stroke="#E8EDF2" stroke-width="3"/><path d="M150 605c12-72 48-115 110-125 62 10 98 53 110 125" fill="#202B37" stroke="#FF6300" stroke-width="5"/><path d="M211 446h98l27 94-76 48-76-48 27-94Z" fill="#344352" stroke="#B8C4CF" stroke-width="3"/><path d="M231 472h58l18 47-47 29-47-29 18-47Z" fill="#101A24" stroke="#FF6300" stroke-width="3"/><circle cx="260" cy="499" r="12" fill="#FF6300"/><path d="M194 103c15-51 53-79 105-79 54 0 93 32 105 86l8 94c4 76-53 139-130 139s-134-63-130-139l8-101Z" fill="url(#suit)" stroke="#E8EDF2" stroke-width="5"/><path d="M174 164c9-61 44-96 100-102 63-6 109 29 122 89l-6 63c-7 57-51 98-113 98-61 0-104-41-111-98l8-50Z" fill="url(#visor)" stroke="#FF8738" stroke-width="7"/><path d="M191 158c25-43 58-65 102-69 37-4 69 8 90 34-41 7-75 26-103 58-25 28-54 42-89 43v-66Z" fill="#D9F2FA" opacity=".16"/><path d="M190 225c42-4 79-24 112-59 22-23 45-38 72-46" fill="none" stroke="#A6D8E6" stroke-opacity=".6" stroke-width="5" stroke-linecap="round"/><circle cx="168" cy="199" r="16" fill="#344352" stroke="#FF6300" stroke-width="4"/><circle cx="352" cy="199" r="16" fill="#344352" stroke="#FF6300" stroke-width="4"/><path d="M183 101c25-38 61-57 108-57 47 0 84 22 107 64" fill="none" stroke="#FFF" stroke-opacity=".65" stroke-width="5"/><path d="M144 391c-4 27 3 49 24 66l40 26 24-38-31-36-57-18Zm232 0c4 27-3 49-24 66l-40 26-24-38 31-36 57-18Z" fill="#536272" stroke="#C4CED7" stroke-width="3"/><path d="M135 421l35 15m215-15-35 15" stroke="#FF6300" stroke-width="8" stroke-linecap="round"/></svg></div><div className="hero-art-ribbon ribbon-one" /><div className="hero-art-ribbon ribbon-two" /><div className="hero-art-orbit orbit-a" /><div className="hero-art-orbit orbit-b" /></div>
        <span className="hero-art-note note-top">IDEAS / IN MOTION</span><span className="hero-art-note note-bottom">SWAPNO TECH — 2026</span>
      </div>
      <div className="apex-hero-footer"><span>STRATEGY / CREATIVE / TECHNOLOGY</span><a href="#story">SCROLL TO DISCOVER <b>↓</b></a></div>
      <div className="apex-hero-index">01 <i /> 04</div>
    </section>

    <section className="brand-story section" id="about">
      <div className="brand-story-top"><span className="eyebrow">01 / THE SWAPNO APPROACH</span><span className="brand-story-side">ONE CONNECTED TEAM<br />FOR THE WHOLE PICTURE</span></div>
      <div className="brand-story-grid">
        <h2>Good work<br />starts with <em>clarity.</em></h2>
        <div><p className="brand-story-lead">Growing a business takes more than a good-looking post or a website on its own.</p><p>It takes a clear offer, a recognisable brand, useful content, thoughtful marketing and digital tools that work together. Swapno Tech brings those capabilities into one connected process—from the first conversation to the work people see and use.</p><a className="text-link" href="/about">Discover Swapno Tech <Arrow diagonal /></a></div>
      </div>
      <div className="brand-story-ribbon"><span>STRATEGY BEFORE OUTPUT</span><i /><span>CREATIVE WITH CONTEXT</span><i /><span>TECHNOLOGY WITH PURPOSE</span></div>
    </section>

    <section className="story-section" id="story" data-active={storyActive}>
      <div className="story-stage-wrap">
        <div className="story-stage">
          <div className="story-stage-grid" />
          <div className="story-stage-art">
            <div className="story-art-ring ring-one" /><div className="story-art-ring ring-two" />
            <div className="story-art-panel panel-back" /><div className="story-art-panel panel-front" />
            <div className="story-art-word">{story[storyActive].visual}</div>
            <span className="story-art-index">0{storyActive + 1} — 03</span>
          </div>
          <div className="story-stage-caption"><span>THE SWAPNO METHOD</span><b>THINK / MAKE / MOVE</b></div>
        </div>
      </div>
      <div className="story-steps">
        <div className="story-intro"><span className="eyebrow">02 / A CONNECTED WAY OF WORKING</span><h2>From first thought<br />to <em>real momentum.</em></h2><p>Different disciplines. One shared direction. Follow the thinking behind the work.</p></div>
        {story.map((item, index) => <article className={'story-step' + (storyActive === index ? ' is-active' : '')} data-story-step={index} key={item.number}>
          <span className="story-step-number">{item.number} / {item.label}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="story-step-line"><i /></span>
        </article>)}
      </div>
    </section>

    <section className="section services-preview" id="services"><div className="section-split"><SectionHeading lang={lang} eyebrow="03 / WHAT WE DO" title="A connected<br/>creative engine." copy="Choose the capability you need, or bring us the bigger challenge. We’ll shape the right combination of creative and technology work."/><a className="text-link" href="/services">All services <Arrow diagonal /></a></div><div className="service-list">{services.map(([n,t,d])=><a href="/services" className="service-row" key={n}><span>{n}</span><h3>{tx(lang,t)}</h3><p>{tx(lang,d)}</p><Arrow diagonal /></a>)}</div></section>

    <section className="section work-preview" id="work"><div className="section-split"><SectionHeading lang={lang} eyebrow="04 / SELECTED WORK" title="Work made<br/><em>with intent.</em>" copy="A growing collection of brand, content and digital explorations. Published case studies will include verified project context and outcomes."/><a className="text-link" href="/portfolio">Explore the work <Arrow diagonal /></a></div><WorkGallery lang={lang} featured /></section>

    <section className="process-band" id="process"><div className="process-band-inner"><span className="eyebrow">05 / HOW WE WORK</span><div className="process-heading"><h2>Clear thinking.<br/><em>Thoughtful making.</em></h2><p>You know what we’re solving, what we’re making and what needs your review before work moves forward.</p></div><div className="process-steps"><div><b>01</b><h3>Understand</h3><p>Learn the business, audience, challenge and desired outcome.</p></div><div><b>02</b><h3>Shape</h3><p>Research the brief, agree priorities and set a focused direction.</p></div><div><b>03</b><h3>Create</h3><p>Build, test and refine the approved creative or digital experience.</p></div><div><b>04</b><h3>Improve</h3><p>Review together, learn from the work and define the next step.</p></div></div></div></section>

    <section className="section packages-preview" id="packages"><div className="section-split"><SectionHeading lang={lang} eyebrow="06 / WAYS TO WORK TOGETHER" title="Start where<br/><em>you are.</em>" copy="Not every business needs everything at once. Start with the work that matters now, then build from there."/><a className="text-link" href="/packages">Explore packages <Arrow diagonal /></a></div><div className="package-grid">{[['01','Essentials','A focused starting point','One important business need, clearly scoped.'],['02','Growth','A connected monthly rhythm','Ongoing creative and digital support around agreed priorities.'],['03','Custom','Built around your brief','A tailored combination of strategy, production and technology.']].map((p)=><article className="package-card" key={p[0]}><span className="eyebrow">OPTION {p[0]}</span><h3>{p[1]}</h3><h4>{p[2]}</h4><p>{p[3]}</p><a className="text-link" href="/packages">Explore option <Arrow diagonal /></a></article>)}</div></section>

    <section className="section products-preview" id="products"><SectionHeading lang={lang} eyebrow="07 / THE SWAPNO ECOSYSTEM" title="Useful tools.<br/><em>Better connections.</em>" copy="Alongside agency services, Swapno is building three core products to make digital business, creative discovery and getting online more accessible."/><div className="product-grid">{products.map(p=><a href={p.href} className="product-card" key={p.number}><span className="product-no">{p.number}</span><span className="product-icon">{p.number==='01'?'⌘':p.number==='02'?'◈':'⌁'}</span><div><span className="eyebrow">{p.tag}</span><h3>{tx(lang,p.name)}</h3><p>{tx(lang,p.desc)}</p></div><span className="card-link">Discover product <Arrow diagonal /></span></a>)}</div></section>

    <section className="team-story section" id="team"><div><span className="eyebrow">08 / THE PEOPLE BEHIND THE WORK</span><h2>Good work is<br/>made <em>together.</em></h2></div><div className="team-story-copy"><p>Swapno is built around skilled contributors and people learning through real work. We value shared responsibility, practical learning and clear communication—not a distant hand-off between departments.</p><a className="text-link" href="/about">How our team works <Arrow diagonal /></a></div><div className="team-story-mark" aria-hidden="true">S<span>.</span></div></section>

    <section className="section insight-preview" id="insights"><div className="section-split"><SectionHeading lang={lang} eyebrow="09 / INSIGHTS & IDEAS" title="Keep learning.<br/><em>Keep moving.</em>" copy="Practical thinking on brand, content, marketing and digital systems—grounded in the questions businesses face while growing."/><a className="text-link" href="/blog">All insights <Arrow diagonal /></a></div><div className="article-grid">{articles.map((a,i)=><a className="article-card" href={['/blog/clearer-digital-foundation','/blog/design-that-earns-attention','/blog/from-idea-to-useful-product'][i]} key={a[0]}><span className="article-index">0{i+1} / {tx(lang,a[1])}</span><h3>{tx(lang,a[0])}</h3><p>{tx(lang,a[2])}</p><span className="card-link">Read insight <Arrow diagonal /></span></a>)}</div></section>

    <section className="newsletter-story"><div><span className="eyebrow">10 / NOTES FROM SWAPNO</span><h2>Ideas worth<br/><em>keeping close.</em></h2></div><p>Occasional notes on creative work, business and useful technology. Our newsletter is being prepared; in the meantime, explore the latest insights.</p><a className="button button-ghost" href="/blog">Explore insights <Arrow diagonal /></a></section>
    <section className="final-cta"><span className="eyebrow">11 / HAVE SOMETHING IN MIND?</span><h2>Let’s make<br/><em>it matter.</em></h2><p>Tell us what you’re building, what needs to change or where you want to go next. We’ll find a practical way to begin.</p><a className="button button-orange" href="/contact">Start a conversation <Arrow diagonal /></a><span className="cta-orbit" /></section>
  </Localize>;
}

function GenericPage({path,lang='EN'}) {
  const [title,desc]=(pageCopy[path]||['Page coming into focus','We are shaping this experience with the same care as the rest of the Swapno ecosystem.']).map(v=>tx(lang,v));
  const [sent,setSent]=useState(''); const [draft,setDraft]=useState('');
  if(path==='/services') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="WHAT WE DO" title={title} desc={desc}/><section className="section inner-section"><div className="service-list">{services.map(([n,t,d],i)=><a href={['/services/brand-identity','/services/content-campaigns','/services/websites-platforms','/services/growth-marketing','/services/creative-production','/services/business-technology'][i]} className="service-row" key={n}><span>{n}</span><h3>{tx(lang,t)}</h3><p>{tx(lang,d)}</p><Arrow diagonal/></a>)}</div></section><ProductStrip lang={lang}/></main></Localize>;
  if(serviceDetails[path]) { const [serviceTitle,serviceTagline,serviceDesc]=serviceDetails[path].map(v=>tx(lang,v)); return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SWAPNO TECH / SERVICE" title={serviceTitle} desc={serviceTagline}/><section className="section inner-section"><div className="service-detail-layout"><div><span className="eyebrow">WHAT THIS CAN INCLUDE</span><h2>{serviceDesc}</h2><p>Every engagement starts with a conversation about your goals, audience, timeline and available resources. Scope is confirmed before work begins.</p><a className="button button-orange" href={'/contact?service='+encodeURIComponent(serviceTitle)}>Discuss this service <Arrow diagonal/></a></div><div className="service-detail-points"><div><b>01</b><h3>Understand</h3><p>Clarify the challenge and the outcome that matters.</p></div><div><b>02</b><h3>Plan</h3><p>Agree on deliverables, responsibilities and timing.</p></div><div><b>03</b><h3>Deliver</h3><p>Create, review and refine the agreed work.</p></div></div></div></section><ProductStrip/></main></Localize>; }
  if(path==='/packages') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="WAYS TO WORK TOGETHER" title={title} desc={desc}/><section className="section inner-section"><div className="package-grid">{[['Essentials','A focused starting point','A clear scope for one important business need.'],['Growth','A connected monthly rhythm','Ongoing creative and digital support shaped around agreed priorities.'],['Custom','Built around your brief','A tailored combination of strategy, production and technology.']].map((p,i)=><article className="package-card" key={p[0]}><span className="eyebrow">OPTION 0{i+1}</span><h2>{tx(lang,p[0])}</h2><h3>{tx(lang,p[1])}</h3><p>{tx(lang,p[2])}</p><a className="text-link" href="/contact">Discuss scope <Arrow diagonal/></a></article>)}</div><p className="note">Final scope and pricing are confirmed after understanding your requirements. No unapproved prices or guarantees are displayed.</p></section></main></Localize>;
  if(path==='/portfolio') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SELECTED WORK" title={title} desc={desc}/><section className="section inner-section"><WorkGallery lang={lang}/></section></main></Localize>;
    if(path==='/blog') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="INSIGHTS" title={title} desc={desc}/><section className="section inner-section"><div className="article-grid article-grid-page">{articles.map((a,i)=><a className="article-card" href={['/blog/clearer-digital-foundation','/blog/design-that-earns-attention','/blog/from-idea-to-useful-product'][i]} key={tx(lang,a[0])}><span className="article-index">0{i+1} / {tx(lang,a[1])}</span><h3>{a[0]}</h3><p>{tx(lang,a[2])}</p><span className="card-link">Read insight <Arrow diagonal/></span></a>)}</div><p className="note">These are editorial starter articles and should be reviewed by the Swapno Tech team before public promotion.</p></section></main></Localize>;
  if(articleDetails[path]) { const [articleTitle,category,summary,body]=articleDetails[path].map(v=>tx(lang,v)); return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow={'FIELD NOTES / '+category.toUpperCase()} title={articleTitle} desc={summary}/><article className="section inner-section article-detail"><p>{body}</p><p>Use this as a working principle: make the next step clear, test it with real people and improve from evidence rather than assumption.</p><a className="text-link" href="/blog">← Back to insights</a></article></main></Localize>; }
    if(path==='/contact') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="START A CONVERSATION" title={title} desc={desc}/><section className="section inner-section contact-layout"><div><span className="eyebrow">A GOOD PLACE TO BEGIN</span><h2>Tell us a little<br/>about the idea.</h2><p>Share what you want to achieve, what is getting in the way and what kind of support you are looking for.</p><a className="text-link" href="#enquiry-form">Use the enquiry form <Arrow diagonal/></a></div><form id="enquiry-form" className="contact-form" onSubmit={async e=>{e.preventDefault();const data=new FormData(e.currentTarget);const service=tx(lang,data.get('service')||'');const text=lang==='BN'?'SWAPNO TECH যোগাযোগ\nনাম: '+data.get('name')+'\nইমেইল: '+data.get('email')+'\nবিষয়: '+service+'\nপ্রকল্প: '+data.get('message'):'SWAPNO TECH ENQUIRY\nName: '+data.get('name')+'\nEmail: '+data.get('email')+'\nArea: '+service+'\nProject: '+data.get('message');setDraft(text);try{await navigator.clipboard.writeText(text);setSent('Enquiry copied. Paste it into your preferred contact channel to send it.');}catch{setSent('Your enquiry is prepared below. Select and copy it to send through your preferred contact channel.');}}}><label>Your name<input required name="name" placeholder="How should we address you?"/></label><label>Email address<input required type="email" name="email" placeholder="you@example.com"/></label><label>What do you need help with?<select name="service" defaultValue={new URLSearchParams(window.location.search).get('service')||''}><option value="" disabled>Select an area</option><option>Brand & identity</option><option>Content & campaigns</option><option>Websites & platforms</option><option>Growth & marketing</option><option>Creative production</option><option>Business technology</option><option>Website Solution</option><option>Creator Platform</option><option>Hosting</option><option>Something else</option></select></label><label>Tell us about your project<textarea required rows="4" name="message" placeholder="A little context helps us give you a useful response."/></label><button className="button button-orange" type="submit">Copy enquiry <Arrow diagonal/></button>{sent&&<p className="form-feedback" role="status">{sent}</p>}{draft&&!sent.startsWith('Enquiry copied')&&<textarea className="enquiry-draft" readOnly rows="6" value={draft} aria-label="Prepared enquiry text"/>}</form></section></main></Localize>;
  if(path==='/about') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="WHO WE ARE" title={title} desc={desc}/><section className="section inner-section"><div className="about-statement"><span className="eyebrow">OUR BELIEF</span><h2>Technology should make possibility <em>practical.</em></h2><p>Swapno Tech connects creative services, digital products and hands-on collaboration. We value clear communication, thoughtful work and progress that can be sustained.</p></div><div className="values-grid">{[['Clarity','Make the purpose understandable.'],['Craft','Care about the details and the whole.'],['Collaboration','Work with people, not around them.'],['Progress','Choose useful steps over noise.']].map(v=><div key={v[0]}><span className="eyebrow">OUR VALUE</span><h3>{tx(lang,v[0])}</h3><p>{tx(lang,v[1])}</p></div>)}</div></section></main></Localize>;
  if(path.startsWith('/products/')) { const item=products.find(p=>p.href===path); return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow={"SWAPNO PRODUCT / " + (item?.number || '')} title={title} desc={desc}/><section className="section inner-section product-detail"><div className="product-detail-visual"><span className="eyebrow">DESIGNED TO MAKE THE NEXT STEP EASIER</span><div className="product-orbit"><span>{item?.number}</span></div></div><div><span className="eyebrow">HOW IT WORKS</span><div className="detail-steps">{(path.includes('website')?[['Choose a foundation','Start with a template and page structure.'],['Shape your pages','Edit content and reorder supported sections.'],['Preview & publish','Check the responsive result before going live.']]:path.includes('creator')?[['Create a profile','Introduce your skills, focus and experience.'],['Show your work','Organize projects into a clear portfolio.'],['Get discovered','Be found through relevant categories and search.']]:[['Explore verified options','Review available plans and key terms.'],['Share your requirements','Tell us about your site, traffic and support needs.'],['Coordinate setup','Get help with the next steps and provider coordination.']]).map((s,i)=><div className="detail-step" key={s[0]}><b>0{i+1}</b><div><h3>{tx(lang,s[0])}</h3><p>{tx(lang,s[1])}</p></div></div>)}</div><a className="button button-orange" href="/contact">Enquire about {item?.name||'this product'} <Arrow diagonal/></a><p className="note">Product preview and enquiry journey. Account, publishing, creator discovery and provider integrations are not connected in this first frontend milestone.</p></div></section></main></Localize>; }
  if(path==='/privacy'||path==='/terms'||path==='/community-guidelines') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SWAPNO TECH / POLICY" title={title} desc={desc}/><section className="section inner-section legal-content">
    {path==='/privacy'?<><h2>What this draft covers</h2><p>This page is a working policy draft, not a final legal notice. Before public launch, Swapno Tech must confirm its operating entity, contact details, analytics, hosting, data retention and any third-party processors.</p><h3>Information you choose to provide</h3><p>When enquiry or account features are connected, we will explain what information is collected, why it is needed, who can access it and how long it is retained. Do not submit passwords, payment details or sensitive personal information through this preview.</p><h3>Future products and accounts</h3><p>Creator profiles, community membership, website publishing and notifications will require clear privacy settings, access controls and retention rules before activation.</p><h3>Your choices</h3><p>Final contact and data-request procedures will be published here once the responsible contact channel and backend are confirmed.</p></>:path==='/terms'?<><h2>Using this website</h2><p>This is a draft framework. Service agreements, payment terms, cancellation rules, intellectual property ownership and liability wording must be reviewed and approved before launch.</p><h3>Project scope</h3><p>Any paid work should begin only after deliverables, timing, responsibilities, review rounds and fees are confirmed in writing.</p><h3>Products and availability</h3><p>Product pages describe intended direction and may not represent live or purchasable services. Availability, provider terms and technical limits must be confirmed before commitment.</p><h3>Content and accuracy</h3><p>Do not rely on preview content as a guarantee of results, pricing, timelines or feature availability.</p></>:<><h2>Our community standard</h2><p>Swapno Founders should be a respectful, useful space for aspiring entrepreneurs, founders and business owners.</p><h3>Be constructive</h3><p>Share relevant context, respect different experience levels and challenge ideas without attacking people.</p><h3>No spam or misleading claims</h3><p>Do not flood groups with promotions, impersonate others, share deceptive offers or publish private information without permission.</p><h3>Protect privacy</h3><p>Ask before sharing another person's contact details, work or private conversations. Report concerns to moderators instead of escalating conflict.</p><h3>Moderation and access</h3><p>Group permissions, reporting, appeals and founder verification must be implemented before community access opens. Membership does not automatically mean verified-founder status.</p></>}
    <p className="note">Draft content for internal review. Not a substitute for jurisdiction-specific legal advice.</p></section></main></Localize>;
  if(path==='/login'||path==='/register') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SWAPNO ACCOUNT" title={title} desc={desc}/><section className="section inner-section account-preview"><div className="account-status"><span className="eyebrow">NOT YET ACTIVE</span><h2>Account access is part of the next connected build.</h2><p>We are keeping sign-in and registration unavailable until the correct Swapno Tech backend, permissions and privacy workflows are configured.</p><a className="button button-orange" href="/contact">Ask about access <Arrow diagonal/></a></div></section></main></Localize>;
  if(path==='/founders') return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SWAPNO FOUNDERS" title={title} desc={desc}/><section className="section inner-section"><div className="founder-groups">{[['01','Founder Announcements','Updates and important information from moderators.'],['02','Open Discussion','Introductions, questions, learning and networking.'],['03','Founders’ Circle','A focused space for business challenges and thoughtful problem-solving.'],['04','Opportunities & Collaboration','Partnerships, projects, referrals and events—with community moderation.']].map(g=><article key={g[0]}><b>{g[0]}</b><div><h3>{tx(lang,g[1])}</h3><p>{tx(lang,g[2])}</p></div></article>)}</div><div className="founder-note"><h2>Built on trust.<br/><em>Guided by contribution.</em></h2><p>Membership, founder verification and access permissions are separate. Applications, privacy controls and moderation will be part of the connected community build.</p><a className="button button-orange" href="/contact">Ask about joining <Arrow diagonal/></a></div></section></main></Localize>;
  return <Localize lang={lang}><main className="inner-page"><PageHero lang={lang} eyebrow="SWAPNO TECH" title={title} desc={desc}/><section className="section inner-section"><p>This page is being prepared. Contact us if you need information in the meantime.</p><a className="button button-orange" href="/contact">Contact Swapno Tech <Arrow diagonal/></a></section></main></Localize>;
}
function PageHero({eyebrow,title,desc,lang='EN'}) { return <Localize lang={lang}><section className="page-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{desc}</p><div className="page-hero-mark">S<span>.</span></div></section></Localize>; }
function ProductStrip({lang='EN'}) { return <Localize lang={lang}><section className="section products-preview"><SectionHeading lang={lang} eyebrow="THE ECOSYSTEM" title="More ways to move forward."/><div className="product-grid">{products.map(p=><a href={p.href} className="product-card" key={p.number}><span className="product-no">{p.number}</span><h3>{tx(lang,p.name)}</h3><p>{tx(lang,p.desc)}</p><span className="card-link">Explore <Arrow diagonal/></span></a>)}</div></section></Localize>; }
function IntroGate({lang='EN'}) {
  const [visible,setVisible] = useState(false);
  useEffect(() => {
    if (window.location.pathname !== '/') return;
    const forcePreview = new URLSearchParams(window.location.search).get('intro') === '1';
    const storageKey = 'swapno-intro-seen-v1';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    try {
      if (!forcePreview && window.localStorage.getItem(storageKey) === '1') return;
    } catch {}
    setVisible(true);
    let finished = false;
    let revealTimer;
    const finish = () => {
      if (finished) return;
      finished = true;
      try { window.localStorage.setItem(storageKey,'1'); } catch {}
      revealTimer = window.setTimeout(() => setVisible(false), 600);
    };
    const onMessage = event => {
      if (event.origin === window.location.origin && event.data?.type === 'SWAPNO_INTRO_DONE') finish();
    };
    window.addEventListener('message',onMessage);
    const fallback = window.setTimeout(finish,9000);
    return () => {
      window.removeEventListener('message',onMessage);
      window.clearTimeout(fallback);
      window.clearTimeout(revealTimer);
    };
  },[]);
  if (!visible) return null;
  return <div className="intro-gate" style={{position:'fixed',inset:0,zIndex:2000,background:'transparent',transition:'opacity .55s ease'}}>
    <iframe title="Swapno Tech cinematic introduction" src={'/intro.html?lang='+lang} style={{width:'100%',height:'100%',border:0,display:'block'}} />
  </div>;
}
export default function App() {
  const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('swapno-theme')||'dark'}catch{return 'dark'}});
  const [lang,setLang]=useState(()=>{try{return localStorage.getItem('swapno-lang')||'EN'}catch{return 'EN'}});
  const path=window.location.pathname.replace(/\/$/,'')||'/';
  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('swapno-theme',theme)}catch{}},[theme]);
  useEffect(()=>{document.documentElement.lang=lang==='BN'?'bn':'en';try{localStorage.setItem('swapno-lang',lang)}catch{}},[lang]);
  useEffect(()=>{const title=tx(lang,pageCopy[path]?.[0]||serviceDetails[path]?.[0]||articleDetails[path]?.[0]||'Build what comes next');const description=tx(lang,pageCopy[path]?.[1]||serviceDetails[path]?.[2]||articleDetails[path]?.[2]||'Swapno Tech — creative technology and digital business solutions.');document.title=title+' — Swapno Tech';document.documentElement.lang=lang==='BN'?'bn':'en';const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content',description);window.scrollTo(0,0)},[path,lang]);
  useEffect(()=>{
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets=[...document.querySelectorAll('.section, .intro-band, .process-band, .final-cta, .page-hero, .footer')];
    if(reduce || !('IntersectionObserver' in window)){targets.forEach(el=>el.classList.add('is-visible'));return;}
    targets.forEach(el=>el.classList.add('reveal-ready'));
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
    },{threshold:0.12,rootMargin:'0px 0px -5% 0px'});
    targets.forEach(el=>observer.observe(el));
    return ()=>observer.disconnect();
  },[path]);
  useEffect(()=>{
    const bar=document.querySelector('.scroll-progress');
    if(!bar)return;
    const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;bar.style.transform='scaleX('+(max>0?window.scrollY/max:0)+')';};
    update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
    return ()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);};
  },[path]);
  useEffect(()=>{
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce)return;
    const depthRules=[
      // Homepage layers: measured, subtle movement that follows the scroll.
      ['.apex-hero-art',0.055],['.brand-story-grid h2',0.025],
      ['.brand-story-grid > div',0.018],['.story-stage-art',0.045],
      ['.story-art-ring',0.025],['.story-art-panel.panel-back',0.018],
      ['.story-art-panel.panel-front',0.032],['.service-row h3',0.012],
      ['.work-visual .visual-shape',0.065],['.process-steps > div',0.025],
      ['.package-card',0.018],['.product-icon',0.035],
      ['.team-story-mark',0.025],['.article-card h3',0.015],
      ['.newsletter-story h2',0.02],['.cta-orbit',0.055],
      // Shared detail-page depth.
      ['.page-hero-mark',0.025],['.product-detail-visual .product-orbit',0.06],
      ['.detail-step',0.015],['.founder-groups article',0.015]
    ];
    const layers=[];
    depthRules.forEach(([selector,depth])=>{
      document.querySelectorAll(selector).forEach(el=>{
        el.dataset.motionDepth=String(depth);
        layers.push({el,depth});
      });
    });
    let frame=0;
    const paint=()=>{
      frame=0;
      const height=window.innerHeight||1;
      layers.forEach(({el,depth})=>{
        const rect=el.getBoundingClientRect();
        if(rect.bottom < -120 || rect.top > height+120)return;
        const offset=(rect.top+rect.height/2-height/2)/height;
        const y=Math.max(-34,Math.min(34,-offset*depth*height));
        el.style.setProperty('--motion-y',y.toFixed(1)+'px');
      });
    };
    const requestPaint=()=>{if(!frame)frame=window.requestAnimationFrame(paint);};
    requestPaint();
    window.addEventListener('scroll',requestPaint,{passive:true});
    window.addEventListener('resize',requestPaint);
    const hero=document.querySelector('.apex-hero');
    const artwork=document.querySelector('.hero-art-core');
    const finePointer=window.matchMedia('(pointer:fine)').matches;
    const onPointerMove=e=>{
      if(!hero||!artwork)return;
      const rect=hero.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      artwork.style.setProperty('--tilt-x',(x*5).toFixed(2)+'deg');
      artwork.style.setProperty('--tilt-y',(-y*5).toFixed(2)+'deg');
      hero.style.setProperty('--pointer-x',(x*9).toFixed(1)+'px');
      hero.style.setProperty('--pointer-y',(y*9).toFixed(1)+'px');
    };
    const onPointerLeave=()=>{
      if(!artwork||!hero)return;
      artwork.style.setProperty('--tilt-x','0deg');
      artwork.style.setProperty('--tilt-y','0deg');
      hero.style.setProperty('--pointer-x','0px');
      hero.style.setProperty('--pointer-y','0px');
    };
    if(hero&&artwork&&finePointer){
      hero.addEventListener('pointermove',onPointerMove,{passive:true});
      hero.addEventListener('pointerleave',onPointerLeave);
    }
    return ()=>{
      window.removeEventListener('scroll',requestPaint);
      window.removeEventListener('resize',requestPaint);
      if(frame)window.cancelAnimationFrame(frame);
      if(hero&&artwork&&finePointer){
        hero.removeEventListener('pointermove',onPointerMove);
        hero.removeEventListener('pointerleave',onPointerLeave);
      }
    };
  },[path]);
  return <div className="app-shell"><div className="scroll-progress" aria-hidden="true"/><IntroGate lang={lang}/><Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang}/>{path==='/'?<Home lang={lang}/>:<GenericPage path={path} lang={lang}/>}<Footer lang={lang}/></div>;
}