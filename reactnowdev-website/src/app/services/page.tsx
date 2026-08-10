import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, web design, SEO & GEO optimisation, hosting, communications consultancy, and training — from React Now Dev.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-white section-y">
        <Container className="max-w-3xl">
          <p className="text-blue-light font-semibold uppercase tracking-wide text-sm mb-3">What We Do</p>
          <h1 className="text-3xl md:text-4xl font-bold">An integrated digital toolkit</h1>
          <p className="mt-5 text-white/80 leading-relaxed">
            We offer an integrated set of digital services, delivered individually or as part of a
            full digital presence package — scoped to your budget, timeline, and long-term management
            capacity.
          </p>
        </Container>
      </section>

      <section className="section-y">
        <Container className="space-y-10">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-border pb-10 ${
                i === services.length - 1 ? "border-b-0 pb-0" : ""
              }`}
            >
              <div>
                <h2 className="text-xl font-bold text-navy">{s.title}</h2>
                <p className="mt-2 text-sm text-gray">{s.summary}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray leading-relaxed">{s.description}</p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="section-y bg-light">
        <Container className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-navy">Not sure what you need?</h2>
          <p className="mt-3 text-gray">
            Tell us about your organisation and goals — we&apos;ll recommend the right mix of services.
          </p>
          <div className="mt-6">
            <Button href="/contact">Talk to us</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
