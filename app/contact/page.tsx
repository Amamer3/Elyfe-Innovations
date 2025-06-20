"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/elyfegh",
    label: "Twitter",
    handle: "@elyfegh",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:info@elyfe.net",
    label: "Email",
    handle: "info@elyfe.net",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Elyfe-Innovations",
    label: "Github",
    handle: "Elyfe-Innovations",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Honeypot check on client (optional)
    if (formData.get("website")) return; // likely bot

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (res.ok) {
        setStatus("sent");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-gradient-to-tl from-white via-zinc-100 to-white dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-24 grid gap-16 md:grid-cols-2">
        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 self-start">
          {socials.map((s) => (
            <Card key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                className="relative flex flex-col items-center gap-4 p-8 duration-700 group"
              >
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 border-zinc-300 dark:border-primary-dark">
                  {s.icon}
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="text-lg font-medium duration-150 text-zinc-900 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-2 text-sm duration-1000 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-100 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-700 rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl mb-6 font-display text-zinc-900 dark:text-white">Send Us a Message</h1>
          {status === "sent" ? (
            <p className="text-green-400">Thank you! Your message has been received.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field: hidden from users */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label className="block text-sm text-zinc-600 dark:text-zinc-400 mb-1" htmlFor="name">Name *</label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-600 dark:text-zinc-400 mb-1" htmlFor="email">Email *</label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-600 dark:text-zinc-400 mb-1" htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-600 dark:text-zinc-400 mb-1" htmlFor="message">Message *</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md px-3 py-2 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-primary dark:bg-primary-dark hover:bg-secondary dark:hover:bg-secondary-dark disabled:opacity-50 px-6 py-3 rounded-md text-white dark:text-black font-medium"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm">Sorry, something went wrong. Please try again later.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}