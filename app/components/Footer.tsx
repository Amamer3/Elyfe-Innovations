import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900/90 border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Elyfe Innovations</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Empowering tomorrow's distributed ecosystems through innovative software solutions.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Distributed Applications</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Telecom Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Finance Technology</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Software Consultancy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="mailto:info@elyfe.net" className="hover:text-white transition-colors">info@elyfe.net</Link></li>
              <li><Link href="https://twitter.com/elyfegh" className="hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="https://github.com/Elyfe-innovations" className="hover:text-white transition-colors">GitHub</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          <p>© 2025 Elyfe Innovations. All rights reserved. | 
          <Link href="#" className="hover:text-white ml-2">Privacy Policy</Link> | 
          <Link href="#" className="hover:text-white ml-2">Terms of Service</Link> | 
          <Link href="#" className="hover:text-white ml-2">Careers</Link></p>
        </div>
      </div>
    </footer>
  );
}


