import { Link } from "react-router-dom";
import experience from "../../data/experience";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function ExperiencePreview() {
  return (
    <section className="border-t border-zinc-900 py-14 sm:py-9">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Experience"
            title="Where I've been building."
            description="A look at my professional experience and the kind of problems I've worked on."
          />

          <Link
            to="/about"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            View full experience
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Experience List */}
        <div className="mt-10">
          {experience.map((item, index) => (
            <article
              key={item.id}
              className="group grid gap-5 border-t border-zinc-800 py-7 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-zinc-300">
                  {item.period}
                </p>

                <p className="mt-1.5 text-sm text-zinc-600">{item.type}</p>
              </div>

              <div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-violet-300">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {item.company}
                      {item.location && ` · ${item.location}`}
                    </p>
                  </div>

                  <span className="hidden text-sm text-zinc-700 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {item.responsibilities?.length > 0 && (
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
                    {item.responsibilities[0]}
                  </p>
                )}

                {item.technologies?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-500 transition group-hover:border-zinc-700 group-hover:text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ExperiencePreview;
