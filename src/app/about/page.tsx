import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { team, whyUs } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "React Now Dev is a Kenya-based digital consultancy helping businesses, refugee-led organisations, and enterprises across East Africa strengthen their digital presence.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white section-y">
        <Container className="max-w-3xl">
          <p className="text-blue-light font-semibold uppercase tracking-wide text-sm mb-3">About Us</p>
          <h1 className="text-3xl md:text-4xl font-bold">Who We Are</h1>
          <p className="mt-5 text-white/80 leading-relaxed">
            React Now Dev is a Kenya-based digital solutions consultancy helping businesses, refugee-led
            organisations, and enterprises across East Africa strengthen their online presence,
            communications, and digital capacity. We design and build websites, craft brand identities,
            optimise for search and AI-powered discovery, and coach teams to manage their own digital
            platforms long after our engagement ends.
          </p>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Our Mission</h2>
            <p className="text-gray leading-relaxed">
              To make professional, accessible, and search-optimised digital presence attainable for
              businesses, refugee-led and community-based organisations, and enterprises across East
              Africa — and to build the in-house capacity for them to sustain it.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Our Vision</h2>
            <p className="text-gray leading-relaxed">
              A digitally visible East Africa, where every credible organisation and business —
              regardless of size or resources — can be found, trusted, and engaged with online.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-y bg-light">
        <Container>
          <SectionHeading eyebrow="What Sets Us Apart" title="Sector fluency, technical range, and a build model that scales" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-lg bg-white border border-border p-6">
                <h3 className="font-semibold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-gray leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="Our Team" title="The people behind React Now Dev" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="rounded-lg border border-border p-6">
                <h3 className="font-semibold text-navy">{member.name}</h3>
                <p className="text-sm font-medium text-blue mt-1">{member.role}</p>
                <p className="mt-3 text-sm text-gray leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-border p-6 bg-light">
            <h3 className="font-semibold text-navy">Our Freelance Network</h3>
            <p className="mt-2 text-sm text-gray leading-relaxed">
              Beyond our core team, React Now Dev works with a curated network of freelance designers,
              developers, content specialists, and communications professionals. This lets us scale
              project teams to match each engagement&apos;s size and timeline, while keeping a single
              point of accountability through our lead consultants. We grow this network partly through
              the ReactNowDev Web Developer Connect Podcast, where we interview developers about their
              journeys, skills, and first-gig experiences.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
