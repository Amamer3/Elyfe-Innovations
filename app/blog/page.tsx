"use client";
import React, { useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";
import Footer from "../components/Footer";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Tag,
  TrendingUp,
  Code,
  Database,
  Cloud,
  Shield,
  Star,
  CheckCircle,
  Award,
  Globe,
  BookOpen,
  Search,
  Filter,
  Mail
} from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      title: "Top 5 Patterns for Scalable Microservices",
      excerpt: "Discover the essential architectural patterns that enable microservices to scale effectively in distributed environments.",
      author: "Elyfe Team",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Architecture",
      tags: ["Microservices", "Scalability", "Patterns"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Harnessing Edge Computing in 5G Networks",
      excerpt: "Learn how edge computing is revolutionizing 5G networks and enabling new possibilities for real-time applications.",
      author: "Elyfe Team",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Telecom",
      tags: ["5G", "Edge Computing", "Networks"],
      icon: Cloud,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Building Compliant FinTech Solutions with Blockchain",
      excerpt: "A comprehensive guide to developing blockchain-based financial solutions that meet regulatory requirements.",
      author: "Elyfe Team",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "Finance",
      tags: ["Blockchain", "FinTech", "Compliance"],
      icon: Shield,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Real-time Data Streaming with Apache Kafka",
      excerpt: "Master the art of building real-time data pipelines using Apache Kafka for high-throughput applications.",
      author: "Elyfe Team",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Data",
      tags: ["Kafka", "Streaming", "Real-time"],
      icon: Database,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Kubernetes Best Practices for Production",
      excerpt: "Essential practices for running Kubernetes in production environments with high availability and security.",
      author: "Elyfe Team",
      date: "2023-12-20",
      readTime: "14 min read",
      category: "DevOps",
      tags: ["Kubernetes", "Production", "Best Practices"],
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Event-Driven Architecture Patterns",
      excerpt: "Explore different event-driven architecture patterns and when to use them in distributed systems.",
      author: "Elyfe Team",
      date: "2023-12-15",
      readTime: "11 min read",
      category: "Architecture",
      tags: ["Events", "Architecture", "Patterns"],
      icon: Code,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const categories = [
    { name: "All", count: 6 },
    { name: "Architecture", count: 2 },
    { name: "Telecom", count: 1 },
    { name: "Finance", count: 1 },
    { name: "Data", count: 1 },
    { name: "DevOps", count: 1 }
  ];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="relative w-full min-h-screen scroll-smooth bg-gradient-to-tl from-white via-zinc-100/40 to-white text-zinc-800 dark:from-black dark:via-zinc-800/40 dark:to-black dark:text-zinc-200">
      {/* Background Particles */}
      <Particles className="absolute inset-0 -z-10" quantity={2000} />
      
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-secondary to-primary drop-shadow-xl animate-fade-in-up animation-delay-200 leading-tight">
            Blog
          </h1>
          <p className="mt-8 max-w-4xl text-zinc-400 text-xl md:text-2xl px-4 font-sans animate-fade-in-up animation-delay-400 leading-relaxed mx-auto">
            Insights, tutorials, and best practices for distributed systems and modern architecture
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <a
              href="#featured"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Read Latest
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-300 dark:border-zinc-600 hover:border-primary dark:hover:border-primary px-8 py-4 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
            >
              Subscribe
            </a>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Categories</span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">
              Explore by Topic
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 animate-fade-in-up ${
                  activeCategory === category.name
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured" className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Article</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              Latest Insights
            </h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends and insights in distributed systems and enterprise architecture
            </p>
          </div>

          <Card className="group p-8 hover:scale-105 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                    <Code size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500 dark:text-zinc-500">Architecture</span>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-heading font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  Top 5 Patterns for Scalable Microservices
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-lg">
                  Discover the essential architectural patterns that enable microservices to scale effectively in distributed environments. 
                  Learn from real-world implementations and best practices.
                </p>
                <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Elyfe Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Jan 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>8 min read</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="group/link inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
                >
                  Read Full Article
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 text-center border border-zinc-200/50 dark:border-zinc-700/50">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                    <Code size={32} className="text-white" />
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Essential patterns for building scalable microservices architecture
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">All Articles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              More Articles
            </h2>
            <p className="text-zinc-400 text-xl font-sans max-w-3xl mx-auto leading-relaxed">
              Explore our collection of technical insights and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <Card key={post.title} className="group p-6 hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${post.color} group-hover:scale-110 transition-transform duration-300`}>
                    <post.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500 dark:text-zinc-500">{post.category}</span>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={10} className="text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-primary hover:gap-1 transition-all duration-200 inline-flex items-center gap-1 group/link"
                  >
                    Read
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 dark:from-primary/5 dark:via-secondary/5 dark:to-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-12 border border-zinc-200/50 dark:border-zinc-700/50">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Newsletter</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-zinc-900 dark:text-white">Stay Updated</h2>
              <p className="text-zinc-400 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Get the latest insights on distributed systems, microservices, and modern architecture delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                />
                <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
