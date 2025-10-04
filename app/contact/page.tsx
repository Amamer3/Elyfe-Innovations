"use client";
import { Github, Mail, Twitter, ArrowRight, Star, CheckCircle, Award, Users, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";
import Footer from "../components/Footer";

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
    <div className="relative w-full min-h-screen scroll-smooth bg-gradient-to-tl from-white via-zinc-100/40 to-white text-zinc-800 dark:from-black dark:via-zinc-800/40 dark:to-black dark:text-zinc-200">
      {/* Background Particles */}
      <Particles className="absolute inset-0 -z-10" quantity={2000} />
      
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary drop-shadow-xl animate-fade-in-up animation-delay-200 leading-tight">
            Get in Touch
          </h1>
          <p className="mt-8 max-w-4xl text-zinc-400 text-xl md:text-2xl px-4 font-sans animate-fade-in-up animation-delay-400 leading-relaxed mx-auto">
            Ready to transform your business with innovative distributed solutions? Let's start the conversation.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24 grid gap-16 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Contact Information</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Reach out to us through any of these channels. We're here to help you succeed.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <Link href="mailto:info@elyfe.net">
              <Card className="group p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                      Email Us
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      info@elyfe.net
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="https://twitter.com/elyfegh">
              <Card className="group p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-secondary to-primary group-hover:scale-110 transition-transform duration-300">
                    <Twitter size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                      Follow Us
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      @elyfegh
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">
                      Latest updates and insights
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="https://github.com/Elyfe-innovations">
              <Card className="group p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                    <Github size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                      Our Code
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      Elyfe-Innovations
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">
                      Open source contributions
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          {/* Office Hours */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-secondary to-primary">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white">
                Office Hours
              </h3>
            </div>
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM GMT</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM GMT</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-8 animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Contact Form</span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Send Us a Message</h2>
            <p className="text-zinc-400 text-sm">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {status === "sent" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-zinc-400">Thank you! Your message has been received. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field: hidden from users */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="name">Name *</label>
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="email">Email *</label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2" htmlFor="message">Message *</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-3 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project or how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary disabled:opacity-50 px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg font-sans flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === "error" && (
                <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">
                    Sorry, something went wrong. Please try again later.
                  </p>
                </div>
              )}
            </form>
          )}
        </Card>
      </div>

      <Footer />
    </div>
  );
}