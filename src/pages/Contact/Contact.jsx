import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

function Contact() {
  const contacts = [
    {
      title: "GitHub",
      description: "Check out my projects and code",
      href: "https://github.com/yourusername",
      icon: FaGithub,
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      href: "https://www.linkedin.com/in/yourusername",
      icon: FaLinkedinIn,
    },
    {
      title: "Email",
      description: "Drop me a message directly",
      href: "mailto:yourmail@example.com",
      icon: FiMail,
    },
  ];

  return (
    <main className="bg-zinc-950 px-6 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Get in touch
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Let's connect.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Whether you want to discuss a project, an opportunity, or simply
            connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
       <div className="mt-12 grid gap-3 md:grid-cols-3 md:gap-5">
  {contacts.map((contact) => {
    const Icon = contact.icon;

    return (
      <a
        key={contact.title}
        href={contact.href}
        target={contact.title === "Email" ? undefined : "_blank"}
        rel={contact.title === "Email" ? undefined : "noreferrer"}
        className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-zinc-900/70 md:block md:rounded-2xl md:p-7"
      >
        {/* Icon + Content */}
        <div className="flex items-center gap-3 md:block">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-300 transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-violet-500/10 group-hover:text-violet-400 md:h-12 md:w-12 md:rounded-xl">
            <Icon size={20} />
          </div>

          {/* Mobile: Name beside icon */}
          <h2 className="text-base font-semibold text-white md:mt-7 md:text-xl">
            {contact.title}
          </h2>
        </div>

        {/* Desktop Description */}
        <p className="mt-3 hidden text-sm leading-6 text-zinc-500 md:block">
          {contact.description}
        </p>

        {/* Arrow */}
        <FiArrowUpRight
          size={18}
          className="shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400 md:absolute md:right-7 md:top-7"
        />

        {/* Bottom hover line */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-500 transition-all duration-500 group-hover:w-full" />
      </a>
    );
  })}
</div>

        {/* Bottom */}
        <div className="mt-14 border-t border-zinc-800 pt-7">
          <p className="text-sm text-zinc-600">
            I'm always open to interesting conversations and opportunities.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;
