import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sangam Dhital — Flutter Developer, Kathmandu" },
      { name: "description", content: "Flutter developer building clean-architecture mobile apps with real backends. Projects: JobGuard, Bus Tracking, ChatterBox." },
      { property: "og:title", content: "Sangam Dhital — Flutter Developer" },
      { property: "og:description", content: "Clean-architecture Flutter apps with real backends, from Kathmandu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GH = "https://github.com/Sangam208";

const projects = [
  {
    name: "JobGuard",
    tag: "Foreign employment scam verification",
    year: "2026",
    stack: ["Flutter", "BLoC", "Node.js", "MongoDB", "Google OAuth", "NLP"],
    text: "Helps Nepali job seekers avoid fraud: verifies agencies against the government registry and flags scam language in job postings using a TF‑IDF + logistic regression classifier.",
  },
  {
    name: "Real‑Time Bus Tracking",
    tag: "Final year project",
    year: "2025",
    stack: ["Flutter", "Supabase", "OpenStreetMap", "KNN"],
    text: "Passenger app with live map simulation, OTP phone sign‑in, real‑time ETA and crowd levels predicted with a K‑Nearest Neighbors model.",
    link: `${GH}/final-year-project`,
  },
  {
    name: "ChatterBox",
    tag: "Real‑time chat",
    year: "2025",
    stack: ["Flutter", "Socket.IO", "Express", "MongoDB"],
    text: "Two‑way live messaging with image sharing, powered by Socket.IO.",
    link: `${GH}/ChatterBox--chatapp`,
  },
  {
    name: "Clean‑Arch Blog",
    tag: "Architecture study",
    year: "2025",
    stack: ["Flutter", "Clean Architecture", "get_it"],
    text: "A blog app refactored into layered clean architecture with dependency injection.",
    link: `${GH}/flutter-blog-refactored-clean-arch`,
  },
];

const skills: [string, string[]][] = [
  ["Mobile", ["Flutter", "Dart", "Clean Architecture", "BLoC", "Riverpod", "Provider", "get_it", "Hive", "Dio"]],
  ["Backend", ["Node.js", "Express", "MongoDB", "Firebase", "Supabase", "JWT", "Google Sign‑In"]],
  ["Languages", ["Dart", "Java", "JavaScript"]],
  ["Tools", ["Git", "GitHub", "Postman", "Thunder Client"]],
];

function Index() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <nav className="flex items-center justify-between py-6 font-mono text-sm text-muted-foreground">
        <span className="text-foreground">sangam.dart</span>
        <div className="flex gap-6">
          <a href="#work" className="hover:text-primary">work</a>
          <a href="#skills" className="hover:text-primary">skills</a>
          <a href="#contact" className="hover:text-primary">contact</a>
        </div>
      </nav>

      <section className="relative py-24 md:py-36">
        <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <p className="animate-rise font-mono text-sm text-primary">// Flutter developer · Kathmandu, Nepal</p>
        <h1 className="animate-rise mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
          Hi, I'm Sangam.<br />
          I build <em className="text-accent">mobile apps</em><br /> that talk to real backends.
        </h1>
        <p className="animate-rise mt-8 max-w-xl text-lg text-muted-foreground">
          1.5 years deep in Flutter. Final‑year BSc. CSIT student focused on Clean Architecture, solid state management and full‑stack apps — from auth to databases to ML models.
        </p>
        <div className="animate-rise mt-10 flex flex-wrap gap-3">
          <a href="#work" className="rounded-sm bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90">See my work</a>
          <a href={GH} target="_blank" rel="noreferrer" className="rounded-sm border border-border px-5 py-3 font-medium transition hover:border-primary hover:text-primary">GitHub ↗</a>
        </div>
      </section>

      <section id="work" className="py-20">
        <h2 className="font-mono text-sm text-muted-foreground">01 — Selected work</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {projects.map((p) => (
            <article key={p.name} className="group grid gap-4 py-10 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="font-mono text-xs text-muted-foreground">{p.year}</p>
                <h3 className="mt-2 font-display text-3xl transition group-hover:text-primary">{p.name}</h3>
                <p className="mt-1 text-sm text-accent">{p.tag}</p>
              </div>
              <div>
                <p className="text-muted-foreground">{p.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-sm bg-secondary px-2 py-1 font-mono text-xs">{s}</span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-block font-mono text-sm text-primary hover:underline">view code ↗</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="py-20">
        <h2 className="font-mono text-sm text-muted-foreground">02 — Toolkit</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {skills.map(([k, v]) => (
            <div key={k} className="bg-card p-6">
              <h3 className="font-display text-xl">{k}</h3>
              <p className="mt-3 text-muted-foreground">{v.join(" · ")}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs text-muted-foreground">EDUCATION</p>
            <p className="mt-2">BSc. CSIT — Asian School of Management & Technology</p>
            <p className="text-sm text-muted-foreground">Final semester · completing early 2027</p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground">CERTIFICATION</p>
            <p className="mt-2">Flutter Workshop (3‑day), Jagadish Poudel</p>
            <p className="text-sm text-muted-foreground">July 2026</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 text-center">
        <h2 className="font-mono text-sm text-muted-foreground">03 — Contact</h2>
        <p className="mt-6 font-display text-4xl md:text-6xl">Let's build something.</p>
        <a href="mailto:sangam.dhital72@gmail.com" className="mt-8 inline-block font-display text-2xl italic text-primary hover:underline">sangam.dhital72@gmail.com</a>
        <div className="mt-8 flex justify-center gap-6 font-mono text-sm text-muted-foreground">
          <a href={GH} target="_blank" rel="noreferrer" className="hover:text-primary">github</a>
          <a href="https://linkedin.com/in/sangamdh50" target="_blank" rel="noreferrer" className="hover:text-primary">linkedin</a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © 2026 Sangam Dhital
      </footer>
    </main>
  );
}
