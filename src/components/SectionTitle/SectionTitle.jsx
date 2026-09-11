function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-violet-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
