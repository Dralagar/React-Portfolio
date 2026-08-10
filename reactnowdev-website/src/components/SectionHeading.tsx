export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass} mb-10`}>
      {eyebrow ? (
        <p className="text-blue font-semibold uppercase tracking-wide text-sm mb-2">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-bold text-navy">{title}</h2>
      {description ? <p className="text-gray mt-3 leading-relaxed">{description}</p> : null}
    </div>
  );
}
