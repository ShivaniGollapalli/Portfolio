import skills from "../../data/skills";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function formatGroupName(name) {
  return name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (character) => character.toUpperCase());
}

function SkillsPreview() {
  const skillGroups = Object.entries(skills);

  return (
    <section className="border-t border-zinc-900 py-14 sm:py-16">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Tools I use to build."
          description="A practical toolkit shaped by real-world application development."
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
          {skillGroups.map(([groupName, groupSkills]) => (
            <div
              key={groupName}
              className="bg-zinc-950 p-7 transition-colors duration-300 hover:bg-zinc-900/70 md:p-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
                  {formatGroupName(groupName)}
                </h3>

                <span className="text-xs text-zinc-600">
                  {String(groupSkills.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {groupSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-800 px-3.5 py-2 text-sm text-zinc-400 transition hover:border-violet-500/40 hover:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SkillsPreview;
