import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { services, caseStudies, whyUs, audiences, site } from "@/lib/content";

export default function Home() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-pink blur-3xl" />
        </div>
        <Container className="relative section-y">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-light mb-6">
              Nairobi, Kenya · Serving {site.regions.join(", ")}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Digital solutions for businesses, refugee-led organisations & enterprises across East Africa
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
              We design and build websites, optimise for search and AI-powered discovery, and train
              your team to manage it all — so your digital presence works as hard as you do.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="secondary">
                Start a project
              </Button>
              <Button href="/portfolio" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
                See our work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-light">
        <Container className="py-6 flex flex-wrap items-center gap-x-10 gap-y-2 text-sm text-gray">
          <span className="font-semibold text-navy">Trusted by:</span>
          {caseStudies.map((c) => (
            <span key={c.slug}>{c.client}</span>
          ))}
        </Container>
      </section>

      {/* Who we serve */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for organisations doing real work"
            description="Whether you're a growing business, a refugee-led organisation, or a development partner running a multi-organisation programme, we build for how your team actually operates."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-lg border border-border p-5 bg-white">
                <h3 className="font-semibold text-navy text-sm">{a.title}</h3>
                <p className="mt-2 text-sm text-gray leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="section-y bg-light">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="An integrated digital toolkit"
            description="From a lean single-page site to a full multi-organisation rollout, our services work together — or stand alone."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.slug} className="rounded-lg bg-white border border-border p-6">
                <h3 className="font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-gray leading-relaxed">{s.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/services" variant="ghost">
              View all services →
            </Button>
          </div>
        </Container>
      </section>

      {/* Case studies */}
      <section className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Selected Engagements"
            title="Real organisations, real outcomes"
            description="A sample of the work we've delivered across Kenya's business, refugee-led, and community-organisation ecosystem."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCaseStudies.map((c) => (
              <div key={c.slug} className="rounded-lg border border-border overflow-hidden bg-white flex flex-col">
                <div className="h-2 bg-blue" />
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue">{c.category}</p>
                  <h3 className="mt-2 font-semibold text-navy">{c.client}</h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed flex-1">{c.summary}</p>
                  <p className="mt-4 text-xs font-medium text-gray/80">
                    {c.status} · {c.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/portfolio" variant="ghost">
              View full portfolio →
            </Button>
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="section-y bg-navy text-white">
        <Container>
          <SectionHeading
            eyebrow="Why Work With Us"
            title="Built to be sustainable, not just delivered"
            description="We measure success by whether you can run your own digital presence after we're gone."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-lg bg-white/5 border border-white/10 p-6">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-y">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Let&apos;s build a digital presence that works as hard as your mission.
          </h2>
          <p className="mt-4 text-gray">
            Tell us about your organisation and we&apos;ll put together a clear scope and quote.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href="/pricing" variant="ghost">
              See pricing
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
