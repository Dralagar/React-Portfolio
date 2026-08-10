import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected engagements delivered by React Now Dev, including Ashden Climate Solutions, Refugee Women in Nairobi (RWIN), and Pamoja Twaweza CBO.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-navy text-white section-y">
        <Container className="max-w-3xl">
          <p className="text-blue-light font-semibold uppercase tracking-wide text-sm mb-3">Portfolio</p>
          <h1 className="text-3xl md:text-4xl font-bold">Real organisations, real outcomes</h1>
          <p className="mt-5 text-white/80 leading-relaxed">
            A sample of the work we&apos;ve delivered across Kenya&apos;s business, refugee-led, and
            community-organisation ecosystem. Full supporting documents — terms of reference,
            contracts, and content drafts — are available on request.
          </p>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/portfolio/${c.slug}`}
                className="group rounded-lg border border-border overflow-hidden bg-white flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="h-2 bg-blue" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue">{c.category}</p>
                    <span
                      className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${
                        c.status === "Ongoing" ? "bg-pink/10 text-pink" : "bg-blue/10 text-blue"
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-navy group-hover:text-blue">{c.client}</h2>
                  <p className="mt-2 text-sm text-gray leading-relaxed flex-1">{c.summary}</p>
                  <p className="mt-4 text-sm font-medium text-navy">Read the case study →</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
