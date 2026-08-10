import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { pricingPackages, addOns } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Indicative pricing for website, SEO/GEO, hosting, training, and communications services from React Now Dev.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy text-white section-y">
        <Container className="max-w-3xl">
          <p className="text-blue-light font-semibold uppercase tracking-wide text-sm mb-3">Pricing</p>
          <h1 className="text-3xl md:text-4xl font-bold">Transparent, tiered pricing</h1>
          <p className="mt-5 text-white/80 leading-relaxed">
            All prices are indicative starting points in Kenya Shillings (KES), based on our recent
            engagements. Every project is scoped individually — final quotes depend on pages, features,
            content readiness, timeline, and (for Uganda/South Sudan work) any in-country logistics.
          </p>
        </Container>
      </section>

      <section className="section-y">
        <Container className="space-y-8">
          {pricingPackages.map((pkg) => (
            <div key={pkg.name} className="rounded-lg border border-border overflow-hidden">
              <div className="bg-navy text-white p-6">
                <h2 className="font-semibold text-lg">{pkg.name}</h2>
                <p className="text-blue-light text-sm mt-1">{pkg.priceLabel}</p>
              </div>
              <div className="divide-y divide-border">
                {pkg.items.map((item, i) => (
                  <div key={item.label} className={`flex justify-between gap-4 p-4 ${i % 2 === 0 ? "bg-light" : "bg-white"}`}>
                    <p className="text-sm text-gray">{item.label}</p>
                    <p className="text-sm font-semibold text-navy whitespace-nowrap">{item.amount}</p>
                  </div>
                ))}
              </div>
              <p className="p-4 text-sm text-gray italic bg-white border-t border-border">{pkg.bestFor}</p>
              {pkg.note ? <p className="px-4 pb-4 text-sm text-gray italic bg-white">{pkg.note}</p> : null}
            </div>
          ))}
        </Container>
      </section>

      <section className="section-y bg-light">
        <Container>
          <SectionHeading eyebrow="Add-On Services" title="Extend any package" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((a) => (
              <div key={a.name} className="rounded-lg border border-border bg-white p-5 flex items-center justify-between gap-4">
                <p className="font-medium text-navy text-sm">{a.name}</p>
                <p className="text-sm text-gray whitespace-nowrap">{a.price}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="How We Price Programmes" title="Build-once, replicate-and-reskin" />
          <p className="max-w-2xl text-gray leading-relaxed">
            For programmes funding websites across several partner organisations, the first site
            carries the full design and structure cost, and each additional organisation&apos;s site
            reuses that structure — applying new branding, content, and training — at a reduced per-site
            rate. This keeps multi-site programmes fast and cost-efficient without cutting corners on
            quality.
          </p>
          <div className="mt-8 rounded-lg border border-border p-6 bg-light max-w-2xl">
            <h3 className="font-semibold text-navy mb-3">Payment Terms</h3>
            <ul className="space-y-2 text-sm text-gray">
              <li>• 50% upon contract signing / kick-off, 50% upon client sign-off prior to launch or delivery.</li>
              <li>• Accepted payment methods: Bank transfer or M-Pesa.</li>
              <li>• Multi-organisation programmes: payment schedules agreed per organisation or milestone.</li>
            </ul>
          </div>
          <div className="mt-8">
            <Button href="/contact">Request a custom quote</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
