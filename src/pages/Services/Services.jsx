import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Frontend Development",
    description:
      "Building modern, responsive and interactive web interfaces using React, JavaScript and modern frontend technologies.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Server,
    number: "02",
    title: "Backend Development",
    description:
      "Developing reliable backend systems, APIs and server-side applications with clean and maintainable architecture.",
    skills: ["Node.js", "REST APIs", "Express"],
  },
  {
    icon: Layout,
    number: "04",
    title: "UI Development",
    description:
      "Turning designs and ideas into polished user interfaces with strong attention to spacing, responsiveness and usability.",
    skills: ["Responsive UI", "Tailwind CSS", "Components"],
  },
  {
    icon: Smartphone,
    number: "05",
    title: "Responsive Web Design",
    description:
      "Creating websites that provide a consistent experience across desktops, tablets and mobile devices.",
    skills: ["Mobile First", "Responsive Design", "Accessibility"],
  },
  {
    icon: Wrench,
    number: "06",
    title: "Maintenance & Improvements",
    description:
      "Improving existing applications, fixing issues, refactoring code and adding new functionality when required.",
    skills: ["Bug Fixing", "Optimization", "Refactoring"],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            What I do
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Services
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build clean, scalable and user-focused digital experiences, from
            frontend interfaces to complete web applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-zinc-900/70"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-violet-400 transition-colors duration-300 group-hover:border-violet-500/30">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-medium text-zinc-700">
                    {service.number}
                  </span>
                </div>

                <h2 className="mt-7 text-xl font-semibold text-white">
                  {service.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-500 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
