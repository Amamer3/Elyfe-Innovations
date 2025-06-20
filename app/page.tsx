import React from "react";
import Link from "next/link";
import Particles from "./components/particles";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative w-full min-h-screen scroll-smooth bg-gradient-to-tl from-white via-zinc-100/40 to-white text-zinc-800 dark:from-black dark:via-zinc-800/40 dark:to-black dark:text-zinc-200" id="home">
      {/* Background Particles */}
      <Particles className="absolute inset-0 -z-10" quantity={120} />

      {/* Site Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-white/60 dark:bg-black/40 border-b border-zinc-200 dark:border-zinc-700">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          <span className="font-display text-lg md:text-xl text-zinc-900 dark:text-white">Elyfe Innovations</span>
          <ul className="hidden md:flex gap-6 text-sm">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white duration-150">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center pt-32 pb-24 text-center" id="hero">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary drop-shadow-xl">
          Empowering Tomorrow's Distributed Ecosystems
        </h1>
        <p className="mt-6 max-w-3xl text-zinc-400 text-lg md:text-xl px-4">
          At Elyfe Innovations, we architect resilient, scalable distributed applications that drive transformation across Telecom and Finance—and beyond.
        </p>
        <Link
          href="#services"
          className="mt-8 inline-block rounded-md bg-primary hover:bg-secondary dark:bg-primary-dark dark:hover:bg-secondary-dark px-6 py-3 text-sm font-medium text-white dark:text-black shadow-lg transition-colors"
        >
          Discover Our Services →
        </Link>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="container mx-auto px-4 py-24 md:py-32 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl mb-6 text-zinc-900 dark:text-white">Our Mission</h2>
        <p className="text-zinc-400 text-base md:text-lg">
          To bridge complex business needs with cutting-edge distributed architectures, delivering seamless, secure, and future-ready software solutions.
        </p>

        <h3 className="font-display text-2xl md:text-3xl mt-12 mb-4 text-zinc-900 dark:text-white">Who We Are</h3>
        <p className="text-zinc-400">
          Elyfe Innovations is a global software consultancy specializing in distributed applications for the Telecom and Finance industries. With deep technical expertise and a collaborative mindset, we empower enterprises to unlock new opportunities and outpace market demands.
        </p>

        <h3 className="font-display text-2xl md:text-3xl mt-12 mb-4 text-zinc-900 dark:text-white">Our Values</h3>
        <ul className="grid sm:grid-cols-2 gap-6 list-disc list-inside text-zinc-400">
          <li><span className="text-zinc-900 dark:text-white font-medium">Integrity:</span> We build trust through transparency and accountability.</li>
          <li><span className="text-zinc-900 dark:text-white font-medium">Innovation:</span> We pioneer novel approaches to complex distributed challenges.</li>
          <li><span className="text-zinc-900 dark:text-white font-medium">Excellence:</span> We deliver robust solutions that exceed expectations.</li>
          <li><span className="text-zinc-900 dark:text-white font-medium">Customer-Centricity:</span> We partner with clients to understand and solve their unique problems.</li>
        </ul>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-zinc-100 dark:bg-zinc-900/50 py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-zinc-900 dark:text-white text-center">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Distributed Application Engineering */}
            <ServiceCard
              title="Distributed Application Engineering"
              bullets={[
                "Microservices & Event-Driven Architectures",
                "Cloud-Native Strategies",
                "Data Streaming & Real-Time Processing",
              ]}
            />
            {/* Telecom Solutions */}
            <ServiceCard
              title="Telecom Solutions"
              bullets={[
                "5G & Edge Computing",
                "Network Function Virtualization (NFV)",
                "OSS/BSS Integration",
              ]}
            />
            {/* Finance Technology Consulting */}
            <ServiceCard
              title="Finance Technology Consulting"
              bullets={[
                "High-Frequency Trading Platforms",
                "Blockchain & Distributed Ledger",
                "RegTech & Compliance Automation",
              ]}
            />
            {/* General Software Consultancy */}
            <ServiceCard
              title="General Software Consultancy"
              bullets={[
                "Custom Application Development",
                "DevOps & CI/CD Pipelines",
                "Architecture Reviews & Modernization",
              ]}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose" className="container mx-auto px-4 py-24 md:py-32 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl mb-8 text-zinc-900 dark:text-white text-center">Why Choose Elyfe Innovations?</h2>
        <ul className="space-y-4 text-zinc-400 text-base md:text-lg">
          <li>• <span className="text-zinc-900 dark:text-white font-medium">Depth of Expertise:</span> 15+ years of combined team experience in Telecom and Finance.</li>
          <li>• <span className="text-zinc-900 dark:text-white font-medium">Proven Track Record:</span> Successfully delivered over 50 distributed application projects.</li>
          <li>• <span className="text-zinc-900 dark:text-white font-medium">Holistic Partnership:</span> From strategy workshops to post-deployment support, we stand by your side.</li>
          <li>• <span className="text-zinc-900 dark:text-white font-medium">Agile Mindset:</span> Rapid iterations and continuous feedback ensure your vision becomes reality.</li>
        </ul>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="bg-zinc-100 dark:bg-zinc-900/50 py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-zinc-900 dark:text-white text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Telecom Edge Analytics"
              description="Enabled a leading carrier to process edge data in real time, reducing packet loss by 40% and improving customer experience across 5G hotspots."
            />
            <CaseStudyCard
              title="High-Frequency Trading Engine"
              description="Built a sub-millisecond trading platform that amplified transaction volume by 60% while maintaining regulatory compliance."
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl mb-12 text-zinc-900 dark:text-white text-center">Testimonials</h2>
        <blockquote className="border-l-4 border-primary dark:border-primary-dark pl-4 italic text-zinc-300 mb-8">
          “Elyfe’s distributed architecture expertise transformed our back office—performance doubled, downtime halved.”
          <footer className="mt-2 font-medium text-secondary dark:text-secondary-dark">— CTO, Global Telecom Provider</footer>
        </blockquote>
        <blockquote className="border-l-4 border-primary dark:border-primary-dark pl-4 italic text-zinc-300">
          “Their team delivered a bulletproof trading platform. We saw immediate gains in speed and reliability.”
          <footer className="mt-2 font-medium text-secondary dark:text-secondary-dark">— VP Engineering, FinTech Startup</footer>
        </blockquote>
      </section>

      {/* BLOG HIGHLIGHTS */}
      <section id="blog" className="bg-zinc-100 dark:bg-zinc-900/50 py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-8 text-zinc-900 dark:text-white">Blog Highlights</h2>
          <ul className="space-y-4 text-secondary dark:text-secondary-dark text-lg">
            <li>Top 5 Patterns for Scalable Microservices</li>
            <li>Harnessing Edge Computing in 5G Networks</li>
            <li>Building Compliant FinTech Solutions with Blockchain</li>
          </ul>
          <Link href="#" className="mt-8 inline-block text-zinc-900 dark:text-white hover:text-secondary dark:hover:text-secondary-dark duration-150">
            Read More →
          </Link>
        </div>
      </section>

      {/* CTA CONTACT */}
      <section className="container mx-auto px-4 py-24 md:py-32 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl mb-6 text-zinc-900 dark:text-white">Ready to Innovate?</h2>
        <p className="text-zinc-400 mb-8">
          Let’s discuss how distributed solutions can future-proof your business.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-primary hover:bg-secondary dark:bg-primary-dark dark:hover:bg-secondary-dark px-8 py-4 text-base font-medium text-white dark:text-black shadow-lg transition-colors"
        >
          Get in Touch
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/70 border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        2025 Elyfe Innovations. All rights reserved. | 
        <Link href="#" className="hover:text-white">Privacy Policy</Link> | 
        <Link href="#" className="hover:text-white">Terms of Service</Link> | 
        <Link href="#" className="hover:text-white">Careers</Link>
      </footer>
    </div>
  );
}

/* ---------- Helper Components ---------- */
interface ServiceCardProps {
  title: string;
  bullets: string[];
}

function ServiceCard({ title, bullets }: ServiceCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-lg transition-shadow bg-white dark:bg-zinc-800/30 border-zinc-200 dark:border-zinc-700 hover:shadow-primary/20 dark:hover:shadow-secondary/30">
      <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">{title}</h4>
      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

interface CaseStudyCardProps {
  title: string;
  description: string;
}

function CaseStudyCard({ title, description }: CaseStudyCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-lg transition-shadow bg-white dark:bg-zinc-800/30 border-zinc-200 dark:border-zinc-700 hover:shadow-primary/20 dark:hover:shadow-secondary/30">
      <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{title}</h4>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>
    </div>
  );
}
