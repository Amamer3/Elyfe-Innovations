"use client";
import React, { useEffect, useRef } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";
import Footer from "../components/Footer";
import { Users, Target, Award, Globe, ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 } 
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const ref = useRef(null);
  const teamSectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // Scroll-based parallax for team section
  const { scrollYProgress } = useScroll({
    target: teamSectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="relative w-full min-h-screen scroll-smooth bg-gradient-to-tl from-white via-zinc-100/40 to-white text-zinc-800 dark:from-black dark:via-zinc-800/40 dark:to-black dark:text-zinc-200">
      {/* Background Particles */}
      <Particles className="absolute inset-0 -z-10" quantity={2000} />
      
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary mb-8"
            >
              About Elyfe
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering tomorrow's distributed ecosystems through innovative software solutions that transform businesses and drive digital evolution.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center gap-4 mt-12"
            >
              <div className="flex items-center gap-2 text-zinc-500">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm">Trusted by 50+ Companies</span>
              </div>
              <div className="w-1 h-1 bg-zinc-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-zinc-500">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white">
                  Bridging Innovation with Excellence
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We bridge complex business needs with cutting-edge distributed architectures, delivering seamless, 
                  secure, and future-ready software solutions that drive transformation across industries.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Projects Delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Client Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Support Available</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-zinc-100/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
                The Team Behind Innovation
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Elyfe Innovations is a global software consultancy specializing in distributed applications 
                for the Telecom and Finance industries. Our team combines deep technical expertise with 
                industry knowledge to deliver exceptional results.
              </p>
            </motion.div>

            {/* Team Image Section with Parallax */}
            <motion.div 
              ref={teamSectionRef}
              variants={fadeInUp} 
              className="relative overflow-hidden rounded-3xl min-h-[600px]"
            >
              {/* Background with subtle texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
              </div>

              {/* Team Image with Parallax - No Overlay */}
              <motion.div 
                style={{ y, opacity, scale }}
                className="absolute inset-0 z-0"
              >
                <div className="w-full h-full bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 relative overflow-hidden">
                  {/* Team Members */}
                  <div className="absolute inset-0 flex items-center justify-start pl-8 lg:pl-16">
                    <div className="grid grid-cols-2 gap-6 lg:gap-8">
                      {/* Team Member 1 */}
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg lg:text-xl">E</span>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm lg:text-base">Engineer</div>
                          <div className="text-xs lg:text-sm text-zinc-600 dark:text-zinc-400">Backend</div>
                        </div>
                      </div>
                      
                      {/* Team Member 2 */}
                      <div className="flex flex-col items-center space-y-3 mt-8">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg lg:text-xl">L</span>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm lg:text-base">Lead</div>
                          <div className="text-xs lg:text-sm text-zinc-600 dark:text-zinc-400">Architecture</div>
                        </div>
                      </div>
                      
                      {/* Team Member 3 */}
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg lg:text-xl">Y</span>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm lg:text-base">DevOps</div>
                          <div className="text-xs lg:text-sm text-zinc-600 dark:text-zinc-400">Infrastructure</div>
                        </div>
                      </div>
                      
                      {/* Team Member 4 */}
                      <div className="flex flex-col items-center space-y-3 mt-8">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg lg:text-xl">+</span>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm lg:text-base">More</div>
                          <div className="text-xs lg:text-sm text-zinc-600 dark:text-zinc-400">Team Members</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Overlay */}
              <div className="relative z-20 p-8 lg:p-16 h-full flex items-center">
                <div className="max-w-2xl ml-auto">
                  <h3 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                    Agile, Scalable Talent Driving Your Software Project Goals
                  </h3>
                  
                  <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-zinc-200 leading-relaxed">
                    <p>
                      Your business can improve our world. Therefore, let's handle the complexities of technology 
                      in your brilliant ideas and concentrate on your core business. We believe in the potential 
                      and resources regarding technology solutions to local and global business challenges.
                    </p>
                    
                    <p>
                      We provide our customers with business application development and integration services such as 
                      new solutions, customizations and integrations of line-of-business applications and packaged software. 
                      This frees our clients to concentrate on their core business of making the world a better, 
                      safer and more equitable place for humankind.
                    </p>
                  </div>

                  {/* Statistics */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <span className="text-white font-bold text-sm">15+</span>
                      </div>
                      <span className="text-white text-sm font-medium">Years</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center">
                        <span className="text-white font-bold text-sm">50+</span>
                      </div>
                      <span className="text-white text-sm font-medium">Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <span className="text-white font-bold text-sm">99%</span>
                      </div>
                      <span className="text-white text-sm font-medium">Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-primary/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary w-16 h-16 mb-6 flex items-center justify-center">
                      <Users size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Expert Team</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      15+ years of combined team experience in Telecom and Finance industries, 
                      bringing deep domain knowledge and technical expertise to every project.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 p-8 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="p-4 rounded-full bg-gradient-to-r from-secondary to-primary w-16 h-16 mb-6 flex items-center justify-center">
                      <Award size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Proven Track Record</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Successfully delivered over 50 distributed application projects with 
                      a 99.9% client satisfaction rate and zero critical failures.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-primary/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary w-16 h-16 mb-6 flex items-center justify-center">
                      <Globe size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Global Reach</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Serving clients worldwide with innovative distributed solutions, 
                      from startups to Fortune 500 companies across multiple continents.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Values</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our core values shape every decision we make and every solution we deliver, 
                ensuring consistent excellence and meaningful impact.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid lg:grid-cols-2 gap-8">
              <motion.div variants={fadeInLeft} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-primary/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                        <CheckCircle size={20} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Integrity</h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      We build trust through transparency and accountability in every project we undertake, 
                      ensuring honest communication and ethical practices.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 to-primary/5 p-8 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-secondary to-primary">
                        <Target size={20} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Innovation</h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      We pioneer novel approaches to complex distributed challenges, pushing the boundaries 
                      of what's possible with cutting-edge technology.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInLeft} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-primary/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                        <Award size={20} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Excellence</h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      We deliver robust solutions that exceed expectations, maintaining the highest 
                      standards of quality and performance in everything we do.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 to-primary/5 p-8 border border-zinc-200/50 dark:border-zinc-700/50 hover:border-secondary/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-secondary to-primary">
                        <Users size={20} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Customer-Centricity</h3>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      We partner with clients to understand and solve their unique problems with 
                      tailored solutions that drive real business value.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how our distributed solutions can future-proof your business 
                and drive digital transformation across your organization.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary dark:hover:border-primary px-8 py-4 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
              >
                View Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
