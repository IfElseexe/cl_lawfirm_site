export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-3xl font-light leading-tight sm:text-4xl ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-16 bg-gold ${align === "center" ? "mx-auto" : ""}`}
      />
      {intro && (
        <p
          className={`mt-6 leading-relaxed ${
            light ? "text-white/75" : "text-slate"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
