import { Link } from "react-router-dom";
import projects from "../../data/projects";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function Projects() {
  return (
    <section className="section hide-scrollbar !py-1">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl">
          <SectionTitle
            eyebrow="Selected Work"
            title="Things I've built."
            description="A selection of products, applications, and solutions I've designed and developed."
          />
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/80 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/30"
            >
              <div className="grid lg:grid-cols-[1.05fr_1fr]">
                {/* Project Image */}
                <div className="relative min-h-[320px] overflow-hidden bg-zinc-900">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />

                      {/* Project Number */}
                      <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-xs font-semibold text-white backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Category */}
                      <div className="absolute bottom-6 left-6">
                        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full min-h-[320px] items-center justify-center">
                      <span className="text-sm text-zinc-600">
                        Project Preview
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                  <div>
                    {/* Small Label */}
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-violet-500" />

                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    {project.technologies?.length > 0 && (
                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="group/button inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold !text-zinc-950 transition-all duration-300 hover:bg-zinc-200"
                    >
                      <span className="!text-zinc-950">View Case Study</span>

                      <svg
                        className="h-4 w-4 !text-zinc-950 transition-transform duration-300 group-hover/button:translate-x-1"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 10h11M11 5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
                      >
                        Live Demo
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7 13L13 7M8 7h5v5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/50 px-6 py-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold text-white">
              Interested in working together?
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              I'm always open to discussing interesting projects and ideas.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
