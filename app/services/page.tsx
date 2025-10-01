"use client";
import React, { useEffect, useState, useRef } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";
import { 
  Microscope, 
  Cloud, 
  Zap, 
  Shield, 
  Smartphone, 
  Network, 
  TrendingUp, 
  Code, 
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Users,
  Target,
  BarChart3,
  Database,
  Globe
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

export default function ServicesPage() {
  const services = [
    {
      title: "Distributed Application Engineering",
      icon: Microscope,
      description: "Build scalable, resilient distributed systems that can handle massive scale and complexity.",
      features: [
        "Microservices & Event-Driven Architectures",
        "Cloud-Native Strategies",
        "Data Streaming & Real-Time Processing",
        "Container Orchestration",
        "Service Mesh Implementation"
      ]
    },
    {
      title: "Telecom Solutions",
      icon: Smartphone,
      description: "Specialized solutions for telecommunications companies looking to modernize their infrastructure.",
      features: [
        "5G & Edge Computing",
        "Network Function Virtualization (NFV)",
        "OSS/BSS Integration",
        "Real-time Network Monitoring",
        "IoT Platform Development"
      ]
    },
    {
      title: "Finance Technology Consulting",
      icon: TrendingUp,
      description: "High-performance financial systems that meet the demanding requirements of modern finance.",
      features: [
        "High-Frequency Trading Platforms",
        "Blockchain & Distributed Ledger",
        "RegTech & Compliance Automation",
        "Risk Management Systems",
        "Payment Processing Solutions"
      ]
    },
    {
      title: "General Software Consultancy",
      icon: Code,
      description: "Comprehensive software development and consulting services for businesses of all sizes.",
      features: [
        "Custom Application Development",
        "DevOps & CI/CD Pipelines",
        "Architecture Reviews & Modernization",
        "Performance Optimization",
        "Technical Due Diligence"
      ]
    }
  ];

  const technologies = [
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Docker", category: "Containerization" },
    { name: "Apache Kafka", category: "Streaming" },
    { name: "Redis", category: "Caching" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Go", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" }
  ];

  return (
    <div className="relative w-full min-h-screen scroll-smooth bg-gradient-to-tl from-white via-zinc-100/40 to-white text-zinc-800 dark:from-black dark:via-zinc-800/40 dark:to-black dark:text-zinc-200">
      {/* Background Particles */}
      <Particles className="absolute inset-0 -z-10" quantity={2000} />
      
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary drop-shadow-xl animate-fade-in-up animation-delay-200 leading-tight">
            Our Services
          </h1>
          <p className="mt-8 max-w-4xl text-zinc-400 text-xl md:text-2xl px-4 font-sans animate-fade-in-up animation-delay-400 leading-relaxed mx-auto">
            Comprehensive distributed application solutions tailored to your business needs
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary dark:hover:border-primary px-8 py-4 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              What We Do
            </h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge distributed solutions that transform businesses and drive digital evolution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="group p-8 hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      <span className="text-zinc-600 dark:text-zinc-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-700 mt-6">
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              How We Work
            </h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and challenges", icon: Users },
              { step: "02", title: "Design", description: "Architecting the optimal solution", icon: Code },
              { step: "03", title: "Development", description: "Building with agile methodologies", icon: Settings },
              { step: "04", title: "Deployment", description: "Launching and supporting your solution", icon: Globe }
            ].map((process, index) => (
              <Card key={process.step} className="group p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <process.icon size={24} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border-2 border-primary flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">{process.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {process.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {process.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Technologies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              Cutting-edge tools and frameworks for modern distributed applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className="group p-6 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="text-sm font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {tech.name}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500">
                  {tech.category}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-12 border border-zinc-200/50 dark:border-zinc-700/50">
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">Ready to Start Your Project?</h2>
              <p className="text-zinc-400 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our services can help you achieve your goals with innovative distributed solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary dark:hover:border-primary px-8 py-4 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
