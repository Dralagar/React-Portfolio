import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Web Developer Connect Podcast",
  description:
    "The ReactNowDev Web Developer Connect Podcast interviews web developers about their journeys, skills, and first-gig experiences.",
};

const TOPICS = [
  "Front-End, Back-End, or Full Stack — your area of focus",
  "How long you've been a web developer",
  "Your first-gig story, if you've landed one",
  "What technology or project you're currently working on",
];

export default function PodcastPage() {
  return (
    <>
      <section className="bg-navy text-white section-y">
        <Container className="max-w-3xl">
          <p className="text-blue-light font-semibold uppercase tracking-wide text-sm mb-3">
            ReactNowDev Web Developer Connect Podcast
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Real stories from working web developers</h1>
          <p className="mt-5 text-white/80 leading-relaxed">
            We&apos;re building a community of web developers across the region — sharing journeys,
            challenges, and successes, and building the freelance network we call on as our project
            pipeline grows. If you&apos;re a web developer with a story to tell, we&apos;d love to hear it.
          </p>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-navy">What we talk about</h2>
            <ul className="mt-4 space-y-3">
              {TOPICS.map((t) => (
                <li key={t} className="flex items-start gap-2 text-gray leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border p-6 bg-light">
            <h2 className="text-xl font-bold text-navy">Join the conversation</h2>
            <p className="mt-3 text-gray leading-relaxed">
              Register your interest and we&apos;ll be in touch about featuring you on the podcast —
              and about freelance opportunities with React Now Dev.
            </p>
            <div className="mt-6">
              <Button href="/contact?subject=podcast">Register your interest</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
