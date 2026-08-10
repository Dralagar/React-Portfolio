import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { caseStudies } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: study.client,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <>
      <section className="bg-navy text-white section-y">
        <Container className="max-w-3xl">
          <Link href="/portfolio" className="text-sm text-blue-light hover:text-white">
            ← Back to portfolio
          </Link>
          <p className="text-blue-light font-semibold uppercase tracking-wide text-sm mt-4 mb-3">
            {study.category} · {study.year}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">{study.client}</h1>
          <p className="mt-5 text-white/80 leading-relaxed">{study.summary}</p>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-lg font-bold text-navy">The Challenge</h2>
              <p className="mt-2 text-gray leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy">Our Approach</h2>
              <ul className="mt-3 space-y-2">
                {study.approach.map((step) => (
                  <li key={step} className="flex items-start gap-2 text-gray leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-navy">The Outcome</h2>
              <p className="mt-2 text-gray leading-relaxed">{study.outcome}</p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-lg border border-border p-5 bg-light">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray">Status</p>
              <p className="mt-1 font-semibold text-navy">{study.status}</p>
            </div>
            <div className="rounded-lg border border-border p-5 bg-light">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray">Category</p>
              <p className="mt-1 font-semibold text-navy">{study.category}</p>
            </div>
            <Button href="/contact" className="w-full">
              Start a similar project
            </Button>
          </aside>
        </Container>
      </section>
    </>
  );
}
