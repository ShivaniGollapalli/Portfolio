import { Link } from "react-router-dom";
import profile from "../../data/profile";
import skills from "../../data/skills";
import Container from "../Container/Container";
import { FaGithub } from "react-icons/fa";

function Hero() {
  const technologies = [
    ...(skills.frontend || []),
    ...(skills.backend || []),
    ...(skills.databaseAndTools || []),
  ];

  const featuredTechnologies = technologies.slice(0, 6);

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 background-grid opacity-30" />

      <div className="pointer-events-none absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[160px]" />

      <Container className="relative flex min-h-[calc(100vh-80px)] items-center py-20 lg:py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* ================= LEFT ================= */}
          <div className="animate-fade-up">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-400">
                {profile.shortRole || profile.role}
              </span>
            </div>

            {/* Name */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {profile.name}
              <span className="text-violet-500">.</span>
            </h1>

            {/* Role */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_18px_rgba(139,92,246,0.8)]" />

              <h2 className="text-xl font-medium tracking-tight text-zinc-300 sm:text-2xl">
                {profile.role}
              </h2>
            </div>

            {/* Tagline */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg md:text-xl">
              {profile.tagline}
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(139,92,246,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-[0_12px_45px_rgba(139,92,246,0.30)]"
              >
                View Projects
                <span className="text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950/50 px-7 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/5"
              >
                Let's Talk
                <span className="text-violet-400 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>

            {/* Social / Contact Links */}
            <div className="mt-8 flex items-center gap-3 sm:mt-10">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/60 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white sm:h-auto sm:w-auto sm:justify-start sm:gap-3 sm:px-3 sm:py-2.5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm text-violet-400 transition-colors duration-300 group-hover:bg-violet-500/15">
                  @
                </span>

                <span className="hidden font-medium sm:inline">Email me</span>

                <span className="hidden text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-400 sm:inline">
                  ↗
                </span>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/60 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white sm:h-auto sm:w-auto sm:justify-start sm:gap-3 sm:px-3 sm:py-2.5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 transition-all duration-300 group-hover:bg-violet-500/15 group-hover:text-violet-400">
                  <FaGithub className="h-[17px] w-[17px]" aria-hidden="true" />
                </span>

                <span className="hidden font-medium sm:inline">GitHub</span>

                <span className="hidden text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-400 sm:inline">
                  ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/60 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white sm:h-auto sm:w-auto sm:justify-start sm:gap-3 sm:px-3 sm:py-2.5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 transition-colors duration-300 group-hover:bg-violet-500/15 group-hover:text-violet-400">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99h-3.57v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0Z" />
                  </svg>
                </span>

                <span className="hidden font-medium sm:inline">LinkedIn</span>

                <span className="hidden text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-400 sm:inline">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative hidden min-h-[560px] lg:block">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

            {/* Decorative rings */}
            <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/[0.07]" />

            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-800/60" />

            {/* Large background number */}
            <div className="absolute right-[-20px] top-[-20px] select-none text-[190px] font-bold leading-none tracking-[-0.1em] text-white/[0.025]">
              01
            </div>

            {/* Floating top badge */}
            <div className="absolute right-8 top-8 z-20 flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                System Online
              </span>
            </div>

            {/* Main browser/code card */}
            <div className="absolute left-1/2 top-1/2 w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
              <div className="overflow-hidden rounded-[28px] border border-zinc-800 bg-[#09090b] shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/70 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  </div>

                  <div className="rounded-md border border-zinc-800 bg-zinc-950 px-4 py-1.5 text-[10px] text-zinc-600">
                    portfolio.dev
                  </div>

                  <span className="text-xs text-zinc-700">⋯</span>
                </div>

                {/* Code */}
                <div className="p-7">
                  <div className="mb-7 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-violet-400">
                        Developer
                      </p>

                      <p className="mt-2 text-xl font-semibold text-white">
                        Building digital experiences
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                      &lt;/&gt;
                    </div>
                  </div>

                  {/* Fake code editor */}
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-xs leading-7">
                    <div className="flex">
                      <span className="mr-5 select-none text-zinc-700">01</span>

                      <span className="text-violet-400">const</span>

                      <span className="ml-2 text-zinc-300">developer</span>

                      <span className="ml-2 text-zinc-600">=</span>
                    </div>

                    <div className="flex">
                      <span className="mr-5 select-none text-zinc-700">02</span>

                      <span className="ml-3 text-zinc-500">{"{"}</span>
                    </div>

                    <div className="flex">
                      <span className="mr-5 select-none text-zinc-700">03</span>

                      <span className="ml-6 text-zinc-500">name:</span>

                      <span className="ml-2 text-green-400">
                        "{profile.name}"
                      </span>
                    </div>

                    <div className="flex">
                      <span className="mr-5 select-none text-zinc-700">04</span>

                      <span className="ml-6 text-zinc-500">stack:</span>

                      <span className="ml-2 text-yellow-400">"Full Stack"</span>
                    </div>

                    <div className="flex">
                      <span className="mr-5 select-none text-zinc-700">05</span>

                      <span className="ml-6 text-zinc-500">focus:</span>

                      <span className="ml-2 text-blue-400">"Modern Web"</span>
                    </div>

                    <div className="flex">
                      <span className="mr-5 select-none text-zinc-700">06</span>

                      <span className="ml-3 text-zinc-500">{"}"}</span>
                    </div>

                    <div className="mt-4 flex">
                      <span className="mr-5 select-none text-zinc-700">07</span>

                      <span className="text-violet-400">export</span>

                      <span className="ml-2 text-zinc-300">default</span>

                      <span className="ml-2 text-zinc-300">developer</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featuredTechnologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-[10px] font-medium text-zinc-400 transition-colors hover:border-violet-500/30 hover:text-violet-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-900/40 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                      Available
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-zinc-700">
                    v2.0.26
                  </span>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-2 left-0 z-30 w-[190px] rounded-2xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Experience
                </span>

                <span className="text-violet-400">✦</span>
              </div>

              <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                03+
              </p>

              <p className="mt-1 text-xs text-zinc-600">Years building</p>
            </div>

            {/* Floating code icon */}
            <div className="absolute -right-2 bottom-20 z-30 flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.12)] backdrop-blur-xl">
              <span className="font-mono text-lg text-violet-400">{"</>"}</span>
            </div>

            {/* Tiny decorative dots */}
            <div className="absolute left-16 top-24 grid grid-cols-3 gap-2 opacity-40">
              {Array.from({ length: 9 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1 w-1 rounded-full bg-violet-400"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}

export default Hero;
