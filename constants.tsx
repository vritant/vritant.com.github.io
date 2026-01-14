
import { Experience, Article, Hobby, Project } from './types';

// High-fidelity SVG recreation of the Swiggy AI Business Model Canvas UI
// This ensures the image shows up perfectly regardless of file system issues.
const BMC_SVG_DATA = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1200' viewBox='0 0 800 1200'%3E%3Crect width='800' height='1200' fill='%23f1f5f9'/%3E%3C!-- Header --%3E%3Crect width='800' height='120' fill='white'/%3E%3Ctext x='40' y='55' font-family='Montserrat, sans-serif' font-weight='900' font-size='28' fill='%231e293b'%3ESwiggy%3C/text%3E%3Ctext x='40' y='85' font-family='Lato, sans-serif' font-size='16' fill='%2364748b'%3EOn-Demand Food Delivery Platform%3C/text%3E%3Crect x='580' y='25' width='180' height='70' rx='12' fill='white' stroke='%2386efac' stroke-width='2'/%3E%3Ctext x='595' y='45' font-family='Lato, sans-serif' font-weight='bold' font-size='14' fill='%2394a3b8'%3EPROFIT%3C/text%3E%3Ctext x='595' y='78' font-family='Montserrat, sans-serif' font-weight='900' font-size='24' fill='%23059669'%3E282.7 M%3C/text%3E%3C!-- Navigation --%3E%3Ctext x='400' y='180' font-family='Lato, sans-serif' font-weight='bold' font-size='22' text-anchor='middle'%3E%3Ctspan fill='%234f46e5'%3E1. Ideate%3C/tspan%3E %3Ctspan fill='%2394a3b8'%3E %3E 2. Differentiate %3E 3. Validate%3C/tspan%3E%3C/text%3E%3C!-- Main Content Card --%3E%3Crect x='40' y='240' width='720' height='920' rx='24' fill='white' stroke='%23e2e8f0' stroke-width='2'/%3E%3C!-- Customer Segments --%3E%3Ccircle cx='85' cy='295' r='14' fill='none' stroke='%2394a3b8' stroke-width='2'/%3E%3Ccircle cx='85' cy='295' r='5' fill='%2394a3b8'/%3E%3Ctext x='115' y='290' font-family='Montserrat, sans-serif' font-weight='900' font-size='22' fill='%23475569'%3ECUSTOMER%3C/text%3E%3Ctext x='115' y='315' font-family='Montserrat, sans-serif' font-weight='900' font-size='22' fill='%23475569'%3ESEGMENTS%3C/text%3E%3Ctext x='380' y='305' font-family='Lato, sans-serif' font-size='18' fill='%2364748b'%3E3 segments • 556.8K users%3C/text%3E%3Cpath d='M680 280 l15 15 l-15 15' fill='none' stroke='%2394a3b8' stroke-width='3' stroke-linecap='round'/%3E%3Ctext x='40' y='390' font-family='Lato, sans-serif' font-style='italic' font-size='18' fill='%2394a3b8'%3EActive users per segment%3C/text%3E%3C!-- Segment 1 (Pink) --%3E%3Crect x='70' y='430' width='660' height='120' rx='16' fill='%23fff1f2' stroke='%23fecdd3' stroke-width='2'/%3E%3Ctext x='100' y='480' font-family='Montserrat, sans-serif' font-weight='900' font-size='24' fill='%23881337'%3EUrban Millennials %26 Young%3C/text%3E%3Ctext x='100' y='515' font-family='Montserrat, sans-serif' font-weight='900' font-size='24' fill='%23881337'%3EProfessionals%3C/text%3E%3Crect x='580' y='465' width='130' height='50' rx='25' fill='white'/%3E%3Ctext x='645' y='498' font-family='Montserrat, sans-serif' font-weight='900' font-size='20' fill='%23881337' text-anchor='middle'%3E390.0K%3C/text%3E%3Cpath d='M540 490 l10 10 l10 -10' fill='none' stroke='%23881337' stroke-width='2'/%3E%3C!-- Segment 2 (Blue) --%3E%3Crect x='70' y='570' width='660' height='80' rx='16' fill='%23eff6ff' stroke='%23bfdbfe' stroke-width='2'/%3E%3Ctext x='100' y='618' font-family='Montserrat, sans-serif' font-weight='900' font-size='24' fill='%231e3a8a'%3EFamilies %26 Households%3C/text%3E%3Crect x='580' y='585' width='130' height='50' rx='25' fill='white'/%3E%3Ctext x='645' y='618' font-family='Montserrat, sans-serif' font-weight='900' font-size='20' fill='%231e3a8a' text-anchor='middle'%3E162.0K%3C/text%3E%3Cpath d='M430 610 l10 10 l10 -10' fill='none' stroke='%231e3a8a' stroke-width='2'/%3E%3C!-- Segment 3 (Green) --%3E%3Crect x='70' y='670' width='660' height='80' rx='16' fill='%23f0fdf4' stroke='%23bbf7d0' stroke-width='2'/%3E%3Ctext x='100' y='718' font-family='Montserrat, sans-serif' font-weight='900' font-size='24' fill='%23064e3b'%3ERestaurants %26 Food Outlets%3C/text%3E%3Crect x='620' y='685' width='90' height='50' rx='25' fill='white'/%3E%3Ctext x='665' y='718' font-family='Montserrat, sans-serif' font-weight='900' font-size='20' fill='%23064e3b' text-anchor='middle'%3E4.8K%3C/text%3E%3Cpath d='M520 710 l10 10 l10 -10' fill='none' stroke='%23064e3b' stroke-width='2'/%3E%3C!-- Value Props --%3E%3Crect x='80' y='800' width='30' height='30' rx='4' fill='none' stroke='%2394a3b8' stroke-width='2'/%3E%3Cpath d='M88 810 l7 7 l7 -7' fill='none' stroke='%2394a3b8' stroke-width='2'/%3E%3Ctext x='125' y='815' font-family='Montserrat, sans-serif' font-weight='900' font-size='22' fill='%23475569'%3EVALUE%3C/text%3E%3Ctext x='125' y='840' font-family='Montserrat, sans-serif' font-weight='900' font-size='22' fill='%23475569'%3EPROPOSITIONS%3C/text%3E%3C!-- AI Button --%3E%3Crect x='600' y='850' width='220' height='80' rx='40' fill='white' stroke='%234f46e5' stroke-width='3'/%3E%3Ccircle cx='645' cy='890' r='25' fill='none' stroke='%234f46e5' stroke-width='2'/%3E%3Ctext x='645' y='898' font-family='Montserrat, sans-serif' font-weight='900' font-size='18' fill='%234f46e5' text-anchor='middle'%3EAI%3C/text%3E%3Ctext x='685' y='890' font-family='Montserrat, sans-serif' font-weight='900' font-size='20' fill='%234f46e5'%3Etry me%3C/text%3E%3Cpath d='M790 880 l10 10 l-10 10' fill='none' stroke='%234f46e5' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E`;

// Generic local asset patterns for other items
const LOCAL_ASSET_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231a1a1a'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23333'/%3E%3Cstop offset='1' stop-color='%23000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='400' cy='300' r='200' fill='url(%23a)' opacity='0.5'/%3E%3C/svg%3E";

export const BIO_MARKDOWN = `
# Hi, I'm Vritant Jain.

15 years of global experience building **Enterprise SaaS**. Ex Co-founder, ISB Valedictorian. 

I specialize in **0-1 journeys**, platform products, and AI-led competitive displacement. Currently focusing on multi-agent AI native systems.
`;

export const EXPERIENCES: Experience[] = [
  {
    role: "Principal Product Manager",
    company: "BrowserStack",
    period: "2023 - Present",
    oneLiner: "Scaling Test Management from $200K to $3M ARR, leading 5 PMs and 40+ developers."
  },
  {
    role: "Sr. Product Manager",
    company: "Gainsight",
    period: "2021 - 2023",
    oneLiner: "Launched Master Data Management platform; reduced onboarding from 3 weeks to 5 minutes."
  },
  {
    role: "Co-Founder",
    company: "Gaadiman.com",
    period: "2018 - 2021",
    oneLiner: "Built and scaled a two-sided marketplace for roadside assistance with 50% MoM growth."
  },
  {
    role: "Senior SW Engineer",
    company: "Red Hat",
    period: "2012 - 2018",
    oneLiner: "Led integration of Oracle & Salesforce; delivered 20+ releases across 40+ REST services."
  },
  {
    role: "Graduate Assistant",
    company: "UT Arlington",
    period: "2010 - 2012",
    oneLiner: "Conducted research on distributed systems and supported undergraduate CS coursework."
  }
];

export const EDUCATION = [
  {
    degree: "Executive MBA",
    school: "Indian School of Business (ISB)",
    period: "2018 - 2020",
    achievement: "Valedictorian, Scholar of Excellence"
  },
  {
    degree: "MSc. Computer Science",
    school: "University of Texas, Arlington",
    period: "2010 - 2012",
    achievement: "Gold Standard GPA (4.0/4.0)"
  },
  {
    degree: "BTech Computer Science",
    school: "SMEC @ JNTU",
    period: "2005 - 2009",
    achievement: "Cofounder Linux User Group"
  }
];

export const ACHIEVEMENTS = [
  "HULT Finalist @ ISB",
  "Published Master's Thesis @ UTA",
  "Teach For India Volunteer",
  "Incubated @ IIT Hyd"
];

export const FEATURED_PROJECT: Project = {
  name: "AI Business Model Canvas",
  description: "A multi-agent AI native product that helps founders systematically evaluate business ideas using the power of agentic workflows. As seen in the Swiggy case study analysis below.",
  link: "https://businessmodelcanvas.vritant.com",
  tags: ["Multi Agent", "LLM Fine-tuning", "Idea Evaluation", "Product Strategy"],
  imageUrl: BMC_SVG_DATA
};

export const ARTICLES: Article[] = [
  {
    title: "8 things I loved doing at my start-up",
    date: "March 2021",
    link: "https://www.linkedin.com/posts/vritant_8-things-i-loved-doing-at-my-start-up-ugcPost-6788854094833438721-eDbM",
    platform: "LinkedIn",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  },
  {
    title: "The transition from Engineer to Product Thinking",
    date: "Jan 2022",
    link: "https://www.linkedin.com/in/vritant/",
    platform: "LinkedIn",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  }
];

export const HOBBIES: Hobby[] = [
  {
    name: "Dungeons & Dragons",
    description: "I'm a long-time Dungeon Master, weaving complex narratives and managing 'stat blocks' for groups of 5+ players.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  },
  {
    name: "Data-Driven Coffee",
    description: "Applying engineering rigor to the morning ritual. I track extraction yields and TDS levels for the perfect cup.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  },
  {
    name: "Hydroponics Gardening",
    description: "Building automated nutrient delivery systems for indoor farming. Currently growing heirloom basil.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  },
  {
    name: "Brewing & Fermentation",
    description: "Managing biological state machines. I brew small batches of cider, water kefir, and kombucha.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  },
  {
    name: "Guitar",
    description: "Self-taught fingerstyle guitarist. Finding patterns in music theory similar to logic structures.",
    imageUrl: LOCAL_ASSET_PLACEHOLDER
  }
];
