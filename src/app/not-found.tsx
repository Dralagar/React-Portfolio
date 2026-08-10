import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="section-y">
      <Container className="text-center max-w-md mx-auto">
        <p className="text-blue font-semibold uppercase tracking-wide text-sm mb-3">404</p>
        <h1 className="text-2xl font-bold text-navy">Page not found</h1>
        <p className="mt-3 text-gray">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-6">
          <Button href="/">Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
