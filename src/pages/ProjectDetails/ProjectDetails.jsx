import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import projects from "../../data/projects";
import Container from "../../components/Container/Container";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  // 404
  if (!project) {
    return (
      <main className="min-h-[70vh] bg-zinc-950 text-white">
        <Container>
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Error 404
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Project not found
            </h1>

            <p className="mt-3 max-w-md text-sm leading-7 text-zinc-500">
              The project you're looking for doesn't exist or may have been
              moved.
            </p>

            <Link
              to="/projects"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to projects
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="bg-zinc-950 text-white">
      {/* =====================================================
          PROJECT HERO
      ====================================================== */}
      <section className="border-b border-zinc-900 py-10 sm:py-14">
        <Container>
          {/* Back Button */}
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to projects
          </Link>

          {/* Main Split Layout */}
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* =================================================
                PROJECT IMAGE
            ================================================== */}
            {project.image && (
              <div className="order-2 lg:order-1">
                <div className="flex h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:h-[320px]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            )}

            {/* =================================================
                PROJECT CONTENT
            ================================================== */}
            <div className="order-1 lg:order-2">
              {/* Category */}
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-violet-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              {project.technologies?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-xs font-medium text-zinc-400 transition-colors duration-300 hover:border-zinc-700 hover:text-zinc-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="mt-7 flex flex-wrap gap-3">
                {/* Live Project */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold !text-zinc-950 opacity-100 transition-all duration-300 hover:bg-zinc-200"
                  >
                    <span>View project</span>

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 hover:-translate-y-0.5 hover:translate-x-0.5"
                    />
                  </a>
                )}

                {/* Contact */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* =====================================================
    PROJECT HIGHLIGHTS
====================================================== */}
      <section className="border-b border-zinc-900">
        <Container>
          <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[280px_1fr] lg:gap-20">
            {/* Left Intro */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-violet-500" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-400">
                  Highlights
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                What I worked on
              </h2>

              <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-500">
                Key contributions, technical decisions, and improvements
                delivered throughout the project.
              </p>
            </div>

            {/* Highlights Grid */}
            {/* Highlights Grid */}
            {project.highlights?.length > 0 && (
              <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="group border-t border-zinc-800 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600"
                  >
                    {/* Number + Accent */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium tabular-nums text-zinc-600 transition-colors duration-300 group-hover:text-violet-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-5 bg-zinc-800 transition-all duration-300 group-hover:w-10 group-hover:bg-violet-500" />
                    </div>

                    {/* Highlight */}
                    <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500 transition-all duration-300 group-hover:text-white">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="py-10 sm:py-12">
        <Container>
          <div className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7 md:flex-row md:items-center md:justify-between">
            {/* CTA Text */}
            <div>
              <h3 className="text-base font-semibold text-white sm:text-lg">
                Have a similar project in mind?
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Let's talk about how I can help.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-zinc-200"
            >
              Get in touch
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ProjectDetails;
