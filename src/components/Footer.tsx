import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { site } from "@/lib/content";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/podcast", label: "Web Developer Connect Podcast" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "What We Do" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Get a Quote" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/90">
      <Container className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Image
            src="/logo-white.png"
            alt="React Now Dev"
            width={140}
            height={75}
            className="h-9 w-auto"
          />
          <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-4 text-sm text-white/70">
            {site.location} &middot; Serving {site.regions.join(", ")}
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-white mb-3">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-white mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Nairobi, Kenya</p>
        </Container>
      </div>
    </footer>
  );
}
