"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Particles from "./components/particles";
import { Card } from "./components/card";
import Footer from "./components/Footer";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Shield,
  TrendingUp,
  Code,
  Database,
  Cloud
} from "lucide-react";

// Animated Counter Component
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative w-full min-h-screen scroll-smooth bg-gradient-to-tl from-white via-zinc-100/40 to-white text-zinc-800 dark:from-black dark:via-zinc-800/40 dark:to-black dark:text-zinc-200" id="home">
      {/* Background Particles */}
      <Particles className="absolute inset-0 -z-10" quantity={2000}  />



      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center pt-32 pb-24 text-center" id="hero">
        <div className="container mx-auto px-4 max-w-6xl">

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary drop-shadow-xl animate-fade-in-up animation-delay-200 leading-tight">
          Empowering Tomorrow's Distributed Ecosystems
        </h1>
          <p className="mt-8 max-w-4xl text-zinc-400 text-xl md:text-2xl px-4 font-sans animate-fade-in-up animation-delay-400 leading-relaxed">
          At Elyfe Innovations, we architect resilient, scalable distributed applications that drive transformation across Telecom and Finance—and beyond.
        </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
        <Link
          href="#services"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Discover Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary dark:hover:border-primary px-8 py-4 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
            >
              Get in Touch
        </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-800">
            <div className="text-center group">
              <div className="relative">
                <AnimatedCounter 
                  end={50} 
                  duration={2500} 
                  suffix="+" 
                  className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                />
                {/* <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div> */}
              </div>
              <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <AnimatedCounter 
                  end={15} 
                  duration={2000} 
                  suffix="+" 
                  className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                />
                {/* <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div> */}
              </div>
              <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <AnimatedCounter 
                  end={99} 
                  duration={3000} 
                  suffix=".9%" 
                  className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                />
                {/* <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div> */}
              </div>
              <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="inline-block animate-pulse">24</span>/<span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>7</span>
                </div>
                {/* <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div> */}
              </div>
              <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Elyfe</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">Our Mission</h2>
            <p className="text-zinc-400 text-xl md:text-2xl font-sans max-w-4xl mx-auto leading-relaxed">
          To bridge complex business needs with cutting-edge distributed architectures, delivering seamless, secure, and future-ready software solutions.
        </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-heading text-3xl md:text-4xl text-zinc-900 dark:text-white">Who We Are</h3>
                <p className="text-zinc-400 text-lg font-sans leading-relaxed">
          Elyfe Innovations is a global software consultancy specializing in distributed applications for the Telecom and Finance industries. With deep technical expertise and a collaborative mindset, we empower enterprises to unlock new opportunities and outpace market demands.
        </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 group hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <AnimatedCounter 
                      end={50} 
                      duration={2000} 
                      suffix="+" 
                      className="text-3xl font-bold text-primary mb-2"
                    />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                  <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Projects</div>
                </div>
                <div className="text-center p-6 bg-white/50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 group hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <AnimatedCounter 
                      end={15} 
                      duration={1800} 
                      suffix="+" 
                      className="text-3xl font-bold text-primary mb-2"
                    />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                  <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Years</div>
                </div>
                <div className="text-center p-6 bg-white/50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 group hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <AnimatedCounter 
                      end={99} 
                      duration={2500} 
                      suffix=".9%" 
                      className="text-3xl font-bold text-primary mb-2"
                    />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                  <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Success</div>
                </div>
                <div className="text-center p-6 bg-white/50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 group hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <div className="text-3xl font-bold text-primary mb-2">
                      <span className="inline-block animate-pulse">24</span>/<span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>7</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
                  </div>
                  <div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-200/50 dark:border-zinc-700/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-secondary to-primary">
                      <Globe size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Our Vision</h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    To be the leading force in distributed application development, creating ecosystems that 
                    empower businesses to scale, innovate, and thrive in an interconnected digital world.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Learn more about our approach</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl mb-6 text-zinc-900 dark:text-white">Our Values</h3>
            <p className="text-zinc-400 text-lg font-sans max-w-3xl mx-auto">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-2">Integrity</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">We build trust through transparency and accountability.</p>
            </Card>

            <Card className="group p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-r from-secondary to-primary w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-2">Innovation</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">We pioneer novel approaches to complex distributed challenges.</p>
            </Card>

            <Card className="group p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-2">Excellence</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">We deliver robust solutions that exceed expectations.</p>
            </Card>

            <Card className="group p-6 text-center hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-r from-secondary to-primary w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-2">Partnership</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">We partner with clients to solve their unique problems.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">What We Do</h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge distributed solutions that transform businesses and drive digital evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Database size={24} />}
              title="Distributed Application Engineering"
              bullets={[
                "Microservices & Event-Driven Architectures",
                "Cloud-Native Strategies",
                "Data Streaming & Real-Time Processing",
              ]}
            />
            <ServiceCard
              icon={<Cloud size={24} />}
              title="Telecom Solutions"
              bullets={[
                "5G & Edge Computing",
                "Network Function Virtualization (NFV)",
                "OSS/BSS Integration",
              ]}
            />
            <ServiceCard
              icon={<TrendingUp size={24} />}
              title="Finance Technology Consulting"
              bullets={[
                "High-Frequency Trading Platforms",
                "Blockchain & Distributed Ledger",
                "RegTech & Compliance Automation",
              ]}
            />
            <ServiceCard
              icon={<Zap size={24} />}
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
      <section id="why-choose" className="py-24 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">Why Choose Elyfe Innovations?</h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              We combine deep technical expertise with industry knowledge to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Expert Team</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                15+ years of combined team experience in Telecom and Finance industries.
              </p>
            </Card>

            <Card className="group p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-r from-secondary to-primary w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Proven Track Record</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Successfully delivered over 50 distributed application projects.
              </p>
            </Card>

            <Card className="group p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Holistic Partnership</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                From strategy workshops to post-deployment support, we stand by your side.
              </p>
            </Card>

            <Card className="group p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-r from-secondary to-primary w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Agile Mindset</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Rapid iterations and continuous feedback ensure your vision becomes reality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Case Studies</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">Success Stories</h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how we've transformed businesses through innovative distributed solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Telecom Edge Analytics"
              description="Enabled a leading carrier to process edge data in real time, reducing packet loss by 40% and improving customer experience across 5G hotspots."
              metrics={["40%", "Packet Loss Reduction"]}
            />
            <CaseStudyCard
              title="High-Frequency Trading Engine"
              description="Built a sub-millisecond trading platform that amplified transaction volume by 60% while maintaining regulatory compliance."
              metrics={["60%", "Volume Increase"]}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Testimonials</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">What Our Clients Say</h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              Hear from the businesses we've helped transform through innovative distributed solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-zinc-600 dark:text-zinc-400 italic text-lg leading-relaxed mb-6">
                "Elyfe's distributed architecture expertise transformed our back office—performance doubled, downtime halved."
        </blockquote>
              <footer className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CT</span>
                </div>
                <div>
                  <div className="font-medium text-zinc-900 dark:text-white">CTO</div>
                  <div className="text-sm text-zinc-500">Global Telecom Provider</div>
                </div>
              </footer>
            </Card>

            <Card className="p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-zinc-600 dark:text-zinc-400 italic text-lg leading-relaxed mb-6">
                "Their team delivered a bulletproof trading platform. We saw immediate gains in speed and reliability."
        </blockquote>
              <footer className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VP</span>
                </div>
                <div>
                  <div className="font-medium text-zinc-900 dark:text-white">VP Engineering</div>
                  <div className="text-sm text-zinc-500">FinTech Startup</div>
                </div>
              </footer>
            </Card>
          </div>
        </div>
      </section>

      {/* BLOG HIGHLIGHTS */}
      <section id="blog" className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Blog Highlights</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">Latest Insights</h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends and insights in distributed systems and enterprise architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group p-6 hover:scale-105 transition-all duration-300">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary w-fit">
                  <Database size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                  Top 5 Patterns for Scalable Microservices
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  Discover the essential patterns that make microservices architectures truly scalable and maintainable.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Card>

            <Card className="group p-6 hover:scale-105 transition-all duration-300">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-secondary to-primary w-fit">
                  <Cloud size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                  Harnessing Edge Computing in 5G Networks
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  Explore how edge computing is revolutionizing 5G networks and enabling new use cases.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Card>

            <Card className="group p-6 hover:scale-105 transition-all duration-300">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary w-fit">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                  Building Compliant FinTech Solutions with Blockchain
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  Learn how to build regulatory-compliant financial solutions using distributed ledger technology.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary dark:hover:border-primary px-8 py-4 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
          </Link>
          </div>
        </div>
      </section>

      {/* CTA CONTACT */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-12 border border-zinc-200/50 dark:border-zinc-700/50">
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">Ready to Innovate?</h2>
              <p className="text-zinc-400 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how distributed solutions can future-proof your business and drive digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary dark:hover:border-primary px-8 py-4 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
                >
                  View Services
        </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- Helper Components ---------- */
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}

function ServiceCard({ icon, title, bullets }: ServiceCardProps) {
  return (
    <Card className="group p-8 hover:scale-105 transition-all duration-300">
      <div className="space-y-6">
        <div className="p-4 rounded-xl bg-gradient-to-r from-primary to-secondary w-fit">
          {icon}
        </div>
        <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h4>
        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400 text-sm font-sans">
          {bullets.map((b, index) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{b}</span>
            </li>
        ))}
      </ul>
    </div>
    </Card>
  );
}

interface CaseStudyCardProps {
  title: string;
  description: string;
  metrics: string[];
}

function CaseStudyCard({ title, description, metrics }: CaseStudyCardProps) {
  return (
    <Card className="group p-8 hover:scale-105 transition-all duration-300">
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h4>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{metrics[0]}</div>
            <div className="text-xs text-zinc-500">{metrics[1]}</div>
          </div>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm font-sans leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-primary font-medium text-sm">
          <span>View Case Study</span>
          <ArrowRight className="w-3 h-3" />
        </div>
    </div>
    </Card>
  );
}
