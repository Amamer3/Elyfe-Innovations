"use client";
import React, { useEffect, useState, useRef } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";
import Footer from "../components/Footer";
import { 
  TrendingUp, 
  Smartphone, 
  Shield, 
  Zap, 
  Users, 
  Clock,
  ArrowRight, 
  ExternalLink,
  Star,
  CheckCircle,
  Award,
  Globe,
  Target,
  BarChart3
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

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Telecom Edge Analytics Platform",
      industry: "Telecommunications",
      challenge: "A leading carrier needed to process edge data in real-time to reduce packet loss and improve customer experience across 5G hotspots.",
      solution: "We built a distributed edge analytics platform using microservices architecture with real-time data streaming capabilities.",
      results: [
        "40% reduction in packet loss",
        "60% improvement in network performance",
        "Real-time monitoring across 5G hotspots",
        "Enhanced customer experience"
      ],
      technologies: ["Kubernetes", "Apache Kafka", "Redis", "Python", "React"],
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "High-Frequency Trading Engine",
      industry: "Financial Services",
      challenge: "A fintech startup required a sub-millisecond trading platform that could handle massive transaction volumes while maintaining regulatory compliance.",
      solution: "We developed a high-performance trading engine with distributed architecture, real-time risk management, and compliance automation.",
      results: [
        "60% increase in transaction volume",
        "Sub-millisecond latency",
        "Full regulatory compliance",
        "99.99% uptime achieved"
      ],
      technologies: ["Go", "Redis", "PostgreSQL", "Docker", "AWS"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Distributed Banking System",
      industry: "Banking",
      challenge: "A regional bank needed to modernize their legacy systems while ensuring zero downtime and maintaining security standards.",
      solution: "We implemented a distributed banking platform with microservices architecture, ensuring seamless migration and enhanced security.",
      results: [
        "Zero downtime migration",
        "50% reduction in processing time",
        "Enhanced security measures",
        "Improved customer satisfaction"
      ],
      technologies: ["Java", "Spring Boot", "MongoDB", "Kubernetes", "Azure"],
      icon: Shield,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "IoT Data Processing Platform",
      industry: "Manufacturing",
      challenge: "A manufacturing company needed to process data from thousands of IoT sensors in real-time to optimize production efficiency.",
      solution: "We built a scalable IoT data processing platform with edge computing capabilities and real-time analytics.",
      results: [
        "Real-time data processing",
        "30% improvement in production efficiency",
        "Predictive maintenance capabilities",
        "Reduced operational costs"
      ],
      technologies: ["Node.js", "Apache Kafka", "InfluxDB", "Docker", "Edge Computing"],
      icon: Zap,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
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
            Case Studies
          </h1>
          <p className="mt-8 max-w-4xl text-zinc-400 text-xl md:text-2xl px-4 font-sans animate-fade-in-up animation-delay-400 leading-relaxed mx-auto">
            Real-world solutions that drive business transformation across industries
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary dark:hover:border-primary px-8 py-4 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              Proven Results
            </h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              Numbers that speak to our commitment to delivering exceptional value
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative">
                  {stat.number.includes('+') ? (
                    <AnimatedCounter 
                      end={parseInt(stat.number)} 
                      duration={2000 + index * 200} 
                      suffix="+" 
                      className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : stat.number.includes('%') ? (
                    <AnimatedCounter 
                      end={parseFloat(stat.number)} 
                      duration={2500} 
                      suffix="%" 
                      className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="inline-block animate-pulse">24</span>/<span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>7</span>
                    </div>
                  )}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${index * 0.3}s` }}></div>
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 text-sm group-hover:text-zinc-500 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              Featured Case Studies
            </h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses transform their operations with innovative distributed solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="group p-8 hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${study.color} group-hover:scale-110 transition-transform duration-300`}>
                    <study.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      {study.industry}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      Challenge
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      Solution
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Results
                    </h3>
                    <ul className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-3">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          <span className="text-zinc-600 dark:text-zinc-400 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-200">
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              Hear from the businesses we've helped transform through innovative distributed solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-zinc-600 dark:text-zinc-400 italic text-lg leading-relaxed mb-6">
                "Elyfe's distributed architecture expertise transformed our back office—performance doubled, downtime halved."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CT</span>
                </div>
                <div>
                  <div className="font-medium text-zinc-900 dark:text-white">CTO</div>
                  <div className="text-sm text-zinc-500">Global Telecom Provider</div>
                </div>
              </div>
            </Card>

            <Card className="group p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-zinc-600 dark:text-zinc-400 italic text-lg leading-relaxed mb-6">
                "Their team delivered a bulletproof trading platform. We saw immediate gains in speed and reliability."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VP</span>
                </div>
                <div>
                  <div className="font-medium text-zinc-900 dark:text-white">VP Engineering</div>
                  <div className="text-sm text-zinc-500">FinTech Startup</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-12 border border-zinc-200/50 dark:border-zinc-700/50">
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">Ready to Start Your Success Story?</h2>
              <p className="text-zinc-400 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can help you achieve similar results for your business with innovative distributed solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary dark:hover:border-primary px-8 py-4 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
