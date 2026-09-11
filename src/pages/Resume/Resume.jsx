import React from "react";
import {
  ArrowDownToLine,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

import profile from "../../data/profile";
import experience from "../../data/experience";

function Resume() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* ========================================
            HEADER
        ======================================== */}
        <section className="border-b border-zinc-800 pb-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                My background
              </p>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Resume
              </h1>

              <p className="mt-4 text-lg text-zinc-400">
                {profile.role}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-500">
                <span className="flex items-center gap-2">
                  <MapPin size={15} />
                  {profile.location}
                </span>

                <span>{profile.email}</span>

                <span>{profile.phone}</span>
              </div>
            </div>

            {/* Download */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-violet-400"
            >
              <ArrowDownToLine size={17} />
              Download Resume
            </a>
          </div>
        </section>

        {/* ========================================
            PROFESSIONAL SUMMARY
        ======================================== */}
        <section className="mt-14">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Profile
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Professional Summary
          </h2>

          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-zinc-400">
            <p>{profile.summary}</p>

            <p>{profile.additionalSummary}</p>
          </div>
        </section>

        {/* ========================================
            EXPERIENCE
        ======================================== */}
        <section className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-violet-400">
              <BriefcaseBusiness size={18} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Career
              </p>

              <h2 className="text-2xl font-semibold">
                Experience
              </h2>
            </div>
          </div>

          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={item.id}
                className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-violet-500/30 md:grid-cols-[180px_1fr]"
              >
                {/* Date */}
                <div>
                  <p className="text-sm text-zinc-500">
                    {item.period}
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-violet-400">
                    {item.company}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  {item.technologies && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400"
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
        </section>

        {/* ========================================
            EDUCATION
        ======================================== */}
        <section className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-violet-400">
              <GraduationCap size={18} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Academic
              </p>

              <h2 className="text-2xl font-semibold">
                Education
              </h2>
            </div>
          </div>

          <div className="space-y-5">
            {profile.education.map((item) => (
              <article
                key={item.id}
                className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:grid-cols-[180px_1fr]"
              >
                <p className="text-sm text-zinc-500">
                  {item.period}
                </p>

                <div>
                  <h3 className="text-lg font-semibold">
                    {item.degree}
                  </h3>

                  <p className="mt-1 text-sm text-violet-400">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-sm text-zinc-600">
                    {item.location}
                  </p>

                  {item.description && (
                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================
            SKILLS
        ======================================== */}
        <section className="mt-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Expertise
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Technical Skills
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            {/* Frontend */}
            <SkillCard
              icon={Code2}
              title="Frontend"
              skills={profile.skills.frontend}
            />

            {/* Backend */}
            <SkillCard
              icon={Server}
              title="Backend"
              skills={profile.skills.backend}
            />

            {/* Database */}
            <SkillCard
              icon={Database}
              title="Database"
              skills={profile.skills.database}
            />

            {/* Tools */}
            <SkillCard
              icon={Wrench}
              title="Tools & Technologies"
              skills={profile.skills.tools}
            />
          </div>
        </section>

        {/* ========================================
            LANGUAGES
        ======================================== */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">
            Languages
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {profile.languages.map((language) => (
              <span
                key={language}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
              >
                {language}
              </span>
            ))}
          </div>
        </section>

        {/* ========================================
            LINKS
        ======================================== */}
        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-5 text-sm">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="text-zinc-500 transition hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}


/* ========================================
   SKILL CARD
======================================== */

function SkillCard({ icon: Icon, title, skills }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-violet-400">
          <Icon size={18} />
        </div>

        <h3 className="font-medium">
          {title}
        </h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Resume;