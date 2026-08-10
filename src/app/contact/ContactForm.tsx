"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    // Reads the `?subject=` query param (set by the podcast page's CTA link)
    // to pre-fill the subject field. This syncs from a browser-only API
    // (the URL) that isn't available during server rendering, so it has
    // to happen on mount rather than during render.
    const params = new URLSearchParams(window.location.search);
    const s = params.get("subject");
    if (s === "podcast") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSubject("Podcast: I'd like to be featured / join the freelance network");
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    // Capture the form element now — `e.currentTarget` is only valid
    // during the synchronous part of the event dispatch and becomes
    // null after an `await`, so grab what we need before the fetch.
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      organisation: String(formData.get("organisation") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Could not reach the server. Please email us directly instead.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-light p-6 text-center">
        <p className="font-semibold text-navy">Thanks — your message is in.</p>
        <p className="mt-2 text-sm text-gray">
          We&apos;ll get back to you shortly. In the meantime, you can also reach us directly at{" "}
          <a href={`mailto:${site.email}`} className="text-blue underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organisation" className="block text-sm font-medium text-navy mb-1">
          Organisation / business
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          className="w-full rounded-md border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Website for our organisation"
          className="w-full rounded-md border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
        />
      </div>

      {error ? <p className="text-sm text-pink">{error}</p> : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-dark disabled:opacity-60 w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
