function Button({ children, variant = "primary", href, onClick }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary: "bg-violet-500 text-white hover:bg-violet-600",
    secondary: "border border-zinc-700 text-white hover:bg-zinc-900", 
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
