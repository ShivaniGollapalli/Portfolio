import profile from "../../data/profile";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { BriefcaseBusiness, Code2, Layers3, Server } from "lucide-react";

function About() {
  return (
    <section className="border-t border-zinc-900 py-14 sm:py-16">
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionTitle
            eyebrow="About Me"
            title="Building with purpose, not just code."
          />

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Shivani Gollapalli
            </h2>

            <p className="mt-2 text-sm font-medium text-violet-400">
              Full Stack Developer
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              {profile.summary}
            </p>

            <p className="mt-4 text-base leading-8 text-zinc-500">
              {profile.additionalSummary}
            </p>
          </div>
        </div>

        {/* Stats */}
<div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
  {/* Experience */}
  <div className="group rounded-xl border border-zinc-800 bg-zinc-950/80 p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/60 sm:rounded-2xl sm:p-5">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-400 sm:h-11 sm:w-11 sm:rounded-xl">
        <BriefcaseBusiness size={17} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          2+
        </p>
        <p className="mt-0.5 truncate text-[11px] text-zinc-500 sm:text-sm">
          Years experience
        </p>
      </div>
    </div>
  </div>

  {/* Features */}
  <div className="group rounded-xl border border-zinc-800 bg-zinc-950/80 p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/60 sm:rounded-2xl sm:p-5">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-400 sm:h-11 sm:w-11 sm:rounded-xl">
        <Layers3 size={17} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          10+
        </p>
        <p className="mt-0.5 truncate text-[11px] text-zinc-500 sm:text-sm">
          Production features
        </p>
      </div>
    </div>
  </div>

  {/* APIs */}
  <div className="group rounded-xl border border-zinc-800 bg-zinc-950/80 p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/60 sm:rounded-2xl sm:p-5">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-400 sm:h-11 sm:w-11 sm:rounded-xl">
        <Server size={17} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          100+
        </p>
        <p className="mt-0.5 truncate text-[11px] text-zinc-500 sm:text-sm">
          REST APIs delivered
        </p>
      </div>
    </div>
  </div>

  {/* Applications */}
  <div className="group rounded-xl border border-zinc-800 bg-zinc-950/80 p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/60 sm:rounded-2xl sm:p-5">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/10 text-violet-400 sm:h-11 sm:w-11 sm:rounded-xl">
        <Code2 size={17} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          3
        </p>
        <p className="mt-0.5 truncate text-[11px] text-zinc-500 sm:text-sm">
          Production apps
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Education */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Education Heading */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Education
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Academic background
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-500">
              A strong foundation in computer science, with a focus on software
              development and modern web technologies.
            </p>
          </div>

          {/* Education Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7 sm:p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
                  Bachelor of Technology
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  Computer Science and Engineering
                </h3>
              </div>

              <span className="shrink-0 text-sm font-medium text-zinc-600">
                2024
              </span>
            </div>

            <div className="mt-6 border-t border-zinc-800 pt-5">
              <p className="text-sm font-medium text-violet-400">
                Rajiv Gandhi University of Knowledge Technologies
              </p>

              <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                Andhra Pradesh
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
