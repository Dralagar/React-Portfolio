// Central content model for the React Now Dev site.
// Editing the arrays/objects below updates the rendered site everywhere
// that content is used — no need to touch component or page files for
// routine content changes (new case study, new service, new team member).

export const site = {
  name: "React Now Dev",
  tagline: "Digital solutions for businesses, refugee-led organisations & enterprises across East Africa",
  email: "gdralagar@gmail.com",
  phone: "+254 706 255 611",
  whatsapp: "+254706255611",
  location: "Nairobi, Kenya",
  regions: ["Kenya", "Uganda", "South Sudan"],
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Lean custom full-stack builds or WordPress sites — whichever fits your budget and how your team will maintain it.",
    description:
      "We deliver two tracks depending on the brief: fast, dynamic full-stack builds using React, Next.js, Node.js and MongoDB for single-page and app-like sites, and WordPress builds for multi-page, easy-to-self-manage organisational sites. Every build is mobile-first, responsive, and performance-tuned.",
    deliverables: [
      "Responsive, mobile-first frontend",
      "Blog / CMS integration where required",
      "Contact and donation forms",
      "Domain, hosting, and SSL setup",
    ],
  },
  {
    slug: "web-design",
    title: "Web Design & Visual Identity",
    summary: "Colour palettes, typography, and lightweight brand style guides for a consistent digital presence.",
    description:
      "Where a client doesn't yet have a strong visual identity, we develop one: colour palette, typography, iconography, homepage banner style, and a short website style guide. This isn't a full corporate rebrand — it's a lightweight identity purpose-built for digital communication.",
    deliverables: ["Colour palette & typography", "Iconography", "Website style guide", "Image treatment guidelines"],
  },
  {
    slug: "seo-geo",
    title: "SEO & GEO Optimisation",
    summary: "Optimised for Google — and for AI-powered search and answer platforms.",
    description:
      "Search Engine Optimisation covers keyword research, meta titles/descriptions, URL structure, heading hierarchy, XML sitemaps, and Search Console/Analytics setup. Generative Engine Optimisation (GEO) goes further — structured data, semantic HTML, and well-organised, authoritative content so organisations are discoverable within AI-powered search and answer platforms, not just traditional search engines.",
    deliverables: ["Keyword research & on-page SEO", "XML sitemap & robots.txt", "Structured data (Schema.org)", "Analytics & Search Console setup"],
  },
  {
    slug: "hosting",
    title: "Hosting & Website Management",
    summary: "Reliable, locally-hosted infrastructure with the client keeping full ownership.",
    description:
      "We set up and manage hosting (typically with a Kenyan provider), domains, SSL, backups, and security monitoring. Hosting accounts and domains are registered in the client's own name, so ownership and control always stay with them — even after our engagement ends.",
    deliverables: ["Domain registration & DNS", "Managed hosting & SSL", "Backups & security monitoring", "Ongoing technical support"],
  },
  {
    slug: "communications",
    title: "Communications Consultancy",
    summary: "Content strategy and messaging support to help organisations tell their story.",
    description:
      "Beyond the website itself, we support content strategy, messaging, and ongoing digital communications — helping organisations speak clearly and consistently to donors, partners, and customers across their site and social channels.",
    deliverables: ["Content strategy & messaging", "Website copywriting support", "Social media & newsletter support"],
  },
  {
    slug: "training",
    title: "Training & Capacity Building",
    summary: "Hands-on training so your team can manage the site independently after handover.",
    description:
      "Every engagement includes administrator training — logging into the CMS, updating pages, uploading news, managing images, publishing blogs, basic SEO practice, and website security awareness — plus a manual and follow-up support session.",
    deliverables: ["Live or virtual admin training", "Administrator manual", "Recorded training session", "Follow-up support session"],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  status: "Completed" | "Ongoing";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ashden-climate-solutions",
    client: "Ashden Climate Solutions",
    category: "Multi-organisation website programme",
    year: "2026",
    summary:
      "Website design, development, SEO/GEO optimisation, hosting, and capacity building for four refugee-led enterprises across East Africa.",
    challenge:
      "Refugee-led enterprises supported by Ashden were making real impact but lacked professional digital platforms to communicate their mission, attract funding, and engage stakeholders.",
    approach: [
      "Discovery and content planning with each participating organisation",
      "Lightweight visual identity development per organisation",
      "WordPress builds using a build-once, replicate-and-reskin model to keep multi-site delivery fast and cost-efficient",
      "SEO and Generative Engine Optimisation on every site",
      "Administrator training and two years of managed hosting per organisation",
    ],
    outcome:
      "Four donor-ready, accessible (WCAG-aligned) websites delivered end-to-end in an estimated 6–8 weeks, with each organisation trained to manage its own site.",
    status: "Ongoing",
  },
  {
    slug: "rwin",
    client: "Refugee Women in Nairobi (RWIN)",
    category: "Community-based organisation website",
    year: "2026",
    summary:
      "Full discovery, brand identity, and a five-section responsive website for a refugee-led CBO supporting displaced women and girls in Nairobi's urban refugee communities.",
    challenge:
      "RWIN needed a credible, donor-ready digital presence that reflected its mission, programmes, and impact without an existing brand identity to build from.",
    approach: [
      "Discovery and stakeholder consultation to define brand identity and communication goals",
      "Five-section responsive website: Home, About Us, Our Programmes, Get Involved, Contact",
      "Mobile-first, accessible (WCAG 2.1 AA) design with SEO-ready meta tags",
      "Google Analytics integration and CMS handover training",
    ],
    outcome:
      "A credible, donor-ready digital presence translating a grassroots mission into a professional online platform, delivered on a two-tranche payment model within a 7-week timeline.",
    status: "Ongoing",
  },
  {
    slug: "pamoja-twaweza",
    client: "Pamoja Twaweza CBO",
    category: "Custom full-stack website",
    year: "2024",
    summary: "Full website development and digital communication strategy support.",
    challenge:
      "Pamoja Twaweza needed a modern, mobile-first, aesthetically distinctive single-page website with blog functionality, built to a tight 5-week timeline.",
    approach: [
      "Mobile-first, dynamic single-page frontend built with React, Next.js and Tailwind CSS",
      "Blog integration with a Node.js / Express / MongoDB backend",
      "Full SEO setup: metadata, alt text, and performance optimisation",
      "Domain registration and hosting setup and handover",
    ],
    outcome: "A fully responsive, SEO-optimised custom website delivered end-to-end within 5 weeks.",
    status: "Completed",
  },
  {
    slug: "refugee-brotherhood",
    client: "Refugee Brotherhood (RLO)",
    category: "Refugee-led organisation website",
    year: "2023",
    summary: "Full website delivery and digital outlook and strategy support.",
    challenge: "A refugee-led organisation needed a professional website and a clearer digital strategy to grow its visibility.",
    approach: ["Full website design and development", "Digital outlook and communications strategy support"],
    outcome: "A complete, professional website supporting the organisation's outreach and credibility.",
    status: "Completed",
  },
  {
    slug: "mel-laundry",
    client: "Mel Laundry",
    category: "Business website",
    year: "2023",
    summary: "Full, accessible business website delivery.",
    challenge: "A local business needed a professional, accessible website to establish credibility online.",
    approach: ["Full website design and development", "Accessibility-conscious build"],
    outcome: "A complete, accessible business website supporting the client's local visibility.",
    status: "Completed",
  },
];

export type PricingPackage = {
  name: string;
  priceLabel: string;
  bestFor: string;
  items: { label: string; amount: string }[];
  note?: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    name: "Lean Site — Single-Page Custom Build",
    priceLabel: "From KSh 25,000",
    bestFor:
      "A fast, modern web presence for a small business, professional, or CBO. Based on our delivered Pamoja Twaweza CBO build.",
    items: [
      { label: "Mobile-first, dynamic single-page site (React / Next.js / Node.js / MongoDB)", amount: "20,000" },
      { label: "Domain name registration", amount: "1,700" },
      { label: "Hosting (first year)", amount: "3,500" },
      { label: "Basic SEO optimisation", amount: "1,000" },
    ],
  },
  {
    name: "Standard Site — Multi-Page WordPress Build",
    priceLabel: "From KSh 46,000 (first site) · KSh 46,000 each additional",
    bestFor:
      "Organisations needing a full multi-page, WCAG-aligned, SEO + GEO optimised site with hands-on team training.",
    items: [
      { label: "Design & development — first site", amount: "48,000" },
      { label: "Design & development — each additional site", amount: "24,000" },
      { label: "SEO & GEO implementation (per organisation)", amount: "15,000" },
      { label: "Hosting & domain (2 years)", amount: "7,000" },
      { label: "Administrator training & handover", amount: "Included" },
    ],
    note: "Multi-organisation programme rollouts benefit from reduced per-site pricing after the first build.",
  },
];

export const addOns = [
  { name: "SEO & GEO Optimisation (standalone)", price: "From KSh 15,000 per site" },
  { name: "Hosting, Domain & Maintenance", price: "From KSh 2,500–7,000 per year" },
  { name: "Training & Capacity Building", price: "From KSh 5,000 per session" },
  { name: "Communications Consultancy", price: "From KSh 15,000 per month (retainer)" },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "George Dralagar",
    role: "Founder & Lead Consultant",
    bio:
      "George leads client relationships, proposal and project management, and communications strategy for React Now Dev. He is also Director of Programs at Youth Voices Community (YVC) and a professional web developer with demonstrated experience designing and delivering websites for refugee-led and community-based organisations in Kenya, with particular expertise in responsive design, modern front-end architecture, SEO, and the humanitarian and development sector in East Africa.",
  },
  {
    name: "Humphrey Omondi",
    role: "Technical Lead",
    bio:
      "Humphrey leads the technical build for React Now Dev engagements, including platform architecture, WordPress theme development and configuration, SEO/GEO implementation, and hosting setup and management. He has hands-on experience building and deploying WordPress and Squarespace websites for organisations across Kenya.",
  },
];

export const whyUs = [
  {
    title: "Proven, efficient delivery",
    body: "Our build-once, replicate-and-reskin model delivers multi-site, multi-organisation projects in weeks, not months.",
  },
  {
    title: "Accessible and future-ready",
    body: "WCAG-aligned design, technical SEO, and Generative Engine Optimisation so clients are found on both search engines and AI-powered platforms.",
  },
  {
    title: "Ownership stays with the client",
    body: "Domains and hosting are registered in each client's own name, and every team is trained to manage their site independently.",
  },
  {
    title: "Transparent, tiered pricing",
    body: "Clear per-site and per-service pricing that scales with the size of the engagement.",
  },
  {
    title: "Deep sector fluency",
    body: "Genuine, first-hand experience working with refugee-led organisations, CBOs, and the wider humanitarian and development ecosystem in East Africa.",
  },
  {
    title: "Technical range",
    body: "Comfortable delivering both lean custom full-stack builds and WordPress sites, so the platform fits the client's budget and long-term management capacity.",
  },
];

export const audiences = [
  {
    title: "Businesses & Enterprises",
    body: "Professional, credible online presence and stronger digital marketing.",
  },
  {
    title: "Refugee-Led & Community-Based Organisations",
    body: "Donor-ready, accessible websites that translate grassroots impact into a credible digital presence.",
  },
  {
    title: "NGOs & Development Partners",
    body: "Multi-organisation digital capacity-building programmes, delivered on time and on budget.",
  },
  {
    title: "Grassroots & Youth-Led Initiatives",
    body: "Growing visibility, credibility, and reach — on a realistic budget.",
  },
];
