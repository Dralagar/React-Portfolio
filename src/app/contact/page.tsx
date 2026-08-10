import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "./ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with React Now Dev to discuss your website, SEO, or communications project.",
};

export default function ContactPage() {
  return (
    <section className="section-y">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-blue font-semibold uppercase tracking-wide text-sm mb-3">Get in Touch</p>
          <h1 className="text-3xl font-bold text-navy">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-4 text-gray leading-relaxed">
            We&apos;d welcome the opportunity to discuss how React Now Dev can support your
            organisation&apos;s digital presence and communications.
          </p>

          <dl className="mt-8 space-y-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-navy font-medium hover:text-blue">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray">Phone / WhatsApp</dt>
              <dd className="mt-1">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-navy font-medium hover:text-blue">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray">Location</dt>
              <dd className="mt-1 text-navy font-medium">{site.location}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray">Regions served</dt>
              <dd className="mt-1 text-navy font-medium">{site.regions.join(", ")}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-border p-6 md:p-8 bg-white">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
