import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone, Download, Briefcase, Code2, GraduationCap } from "lucide-react";


// ====== MY DATA ======
const PROFILE = {
  name: "Jhosmeily Hernandez",
  title: "IT Support • Aspiring Data Analyst",
  summary:
    "I’m a recent graduate with a strong foundation in Information Technology and a growing passion for data analysis. I’m seeking opportunities to apply my technical skills in IT support, troubleshooting, and systems management while building real-world experience that will prepare me for a career in data analytics. My goal is to contribute to an organization’s technology needs today while developing the analytical expertise to solve tomorrow’s business challenges.",
  location: "New York, USA",
  phone: "2015620882",
  email: "jhosmeilyhernandez@gmail.com",
  github: "https://github.com/JhosmeilyH",
  linkedin: "https://www.linkedin.com/in/jhosmeily-hernandez",
  resume: "public/Jhosmeily_Hernandez_Resume.pdf", 

};

const SKILLS = [
  { group: "Languages", items: ["JavaScript", "Python", "SQL", "Kotlin"] },
  { group: "Frameworks & Libraries", items: ["React Native", "Flask", "Firebase", "Expo", "Tailwind CSS"] },
  { group: "Tools", items: ["Microsoft Office", "Adobe Acrobat", "Tableau", "VS Code", "Git/GitHub"] },
  { group: "Operating Systems", items: ["Windows", "macOS", "Linux"] },
  { group: "Cloud & Tools", items: ["Git/GitHub", "Figma"] },
];

const PROJECTS = [
  {
    name: "esTAP – Multiplayer Word Game",
    description:
      "Fast-paced word game built with React Native and Firebase. Includes multiplayer lobbies, timers, and category-based scoring.",
    tech: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
    links: {
      github: "https://github.com/JhosmeilyH/esTAP-mobile-app",  
    },
  },
  {
    name: "Juanito7UP – Product Website",
    description:
      "Custom product website built with HTML, CSS, JavaScript, and Python backend. Designed with responsive UI and styled with unique branding.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    links: {
      github: "https://github.com/JhosmeilyH/Juanito7UP", 
     
    },
  },
  {
    name: "Personal Portfolio Website",
    description:
      "This portfolio site, built with React and Tailwind CSS. Includes animations, responsive sections, and project showcase.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/yourhandle/portfolio", 
      
    },
  },
  {
    name: "Hawk Count Database",
    description:
      "Database system for recording and analyzing hawk migration counts. Built with SQL and Python for data entry, querying, and reporting.",
    tech: ["PostgreSQL", "SQLAlchemy", "Python"],
    links: {
      github: "https://github.com/JhosmeilyH/hawk-database",
     
    },
  },
];


const EXPERIENCE = [
  {
    role: "IT Support Associate",
    company: "Planet Fitness",
    period: "2024 – Present",
    bullets: [
      "Troubleshot camera/software connectivity; diagnosed network issue and restored service in ~10 minutes.",
      "Supported staff with hardware setup, printing, and account access; documented fixes for reuse.",
    ],
},
{

    role: "Bilingual Administrator",
    company:"DocGo- Zing Recruiting",
    period:"August 2023 - October 2023",
    bullets: [
        "Entered, tracked, and maintained confidential guest data.",
        "Supported scheduling, logistics, and relocation coordination.",
        "Ensured database accuracy and addressed client concerns promptly.",
    ],
},
{

    role: "Retail Supervisor",
    company:"Top of the Rock",
    period:"Febuary 2022 - December 2022",
    bullets: [
        "Supervised team members and trained new hires in sales operations.",
        "Managed inventory, returns, and exchanges with attention to detail.",
        "Resolved guest concerns and helped meet team sales goals.",
    ]

  },
];

const EDUCATION = [
  {
    school: "Pace University – Seidenberg School",
    degree: "B.S. in Information Technology (CIM)",
    period: "Dec 2024",
  },
];

// ====== ANIMATION HELPERS ======
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

// ====== UI ======
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold tracking-wide">JH.</a>
          <ul className="hidden gap-6 md:flex">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a className="text-sm text-neutral-300 hover:text-white" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 hover:bg-white/5"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 hover:bg-white/5"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={PROFILE.resume}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-20">
        <motion.div {...fadeUp}>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to full-time roles & freelance
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {PROFILE.name}
          </h1>
          <p className="mt-2 text-lg text-neutral-300">{PROFILE.title}</p>
          <p className="mt-4 max-w-2xl text-neutral-300">{PROFILE.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{PROFILE.location}</span>
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" />{PROFILE.phone}</span>
            <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${PROFILE.email}`}>
              <Mail className="h-4 w-4" />{PROFILE.email}
            </a>
          </div>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="rounded-xl bg-emerald-500 px-4 py-2 font-medium text-black hover:bg-emerald-400">View Projects</a>
            <a href="#contact" className="rounded-xl border border-white/15 px-4 py-2 font-medium hover:bg-white/5">Contact Me</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-3 text-2xl font-semibold">About</h2>
            <p className="leading-relaxed text-neutral-300">
              I love turning ideas into clean, fast apps. I’m currently focused on React for the web
              and Kotlin/Flutter for mobile. I also have strong fundamentals in troubleshooting,
              documentation, and customer support from IT roles.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp}>
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {SKILLS.map((s) => (
              <div key={s.group} className="rounded-2xl border border-white/10 p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-neutral-100">
                  {iconForGroup(s.group)} {s.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-lg bg-white/5 px-2 py-1 text-xs text-neutral-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp}>
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article key={p.name} className="group rounded-2xl border border-white/10 p-5 transition hover:bg-white/5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-lg bg-white/5 px-2 py-1 text-xs text-neutral-200">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {p.links?.demo && (
                    <a className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-1.5 text-sm font-medium text-black hover:bg-emerald-400" href={p.links.demo} target="_blank" rel="noreferrer">
                      Live <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {p.links?.github && (
                    <a className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-1.5 text-sm font-medium hover:bg-white/5" href={p.links.github} target="_blank" rel="noreferrer">
                      Code <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp}>
          <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
          <div className="space-y-4">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="rounded-2xl border border-white/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-lg font-semibold">{e.role} – {e.company}</p>
                  <span className="text-sm text-neutral-400">{e.period}</span>
                </div>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-neutral-300">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp}>
          <h2 className="mb-6 text-2xl font-semibold">Education</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {EDUCATION.map((ed) => (
              <div key={ed.school} className="rounded-2xl border border-white/10 p-5">
                <p className="text-lg font-semibold">{ed.school}</p>
                <p className="text-sm text-neutral-300">{ed.degree}</p>
                <p className="mt-1 text-xs text-neutral-400">{ed.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="rounded-2xl border border-white/10 p-6">
          <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
          <p className="text-neutral-300">Let’s build something great together. Email me or connect on LinkedIn.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 font-medium text-black hover:bg-emerald-400">
              <Mail className="h-5 w-5" /> Email
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 font-medium hover:bg-white/5">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.
        </div>
      </footer>
    </div>
  );
}

function iconForGroup(group) {
  if (group === "Languages") return <Code2 className="h-4 w-4" />;
  if (group === "Frontend") return <Code2 className="h-4 w-4" />;
  if (group === "Backend") return <ServerIcon />;
  if (group === "Databases") return <DatabaseIcon />;
  if (group === "Cloud & Tools") return <CloudIcon />;
  return <Briefcase className="h-4 w-4" />;
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" />
      <circle cx="8" cy="7" r="1" /><circle cx="8" cy="17" r="1" />
    </svg>
  );
}
function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
    </svg>
  );
}
function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 18a5 5 0 1 1 .9-9.9A6 6 0 1 1 17 18H7z" />
    </svg>
  );
}
