import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Code, Zap } from "lucide-react";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Nade Ali Hasham
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="text-foreground hover:text-primary transition-colors"
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 container mx-auto px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src="/Profile.jpeg"
                    alt="Nade Ali Hasham - Frontend Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Code className="h-8 w-8 text-primary-foreground" />
                </div>
                {/* Floating elements */}
                <div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute top-8 -right-8 w-6 h-6 bg-secondary/20 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
                  Nade Ali Hasham
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                  Frontend Developer | Shopify Theme Customizer
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-lg mb-8">
                  With over 2 years of experience in frontend development, I
                  specialize in creating responsive, user-friendly web
                  experiences using modern technologies. I'm passionate about
                  clean code, intuitive design, and building solutions that make
                  a difference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-primary/30 hover:bg-primary/5"
                  >
                    Get In Touch
                    <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-gradient-to-br from-muted/30 via-primary/5 to-secondary/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Dashboard",
                description:
                  "A comprehensive admin dashboard with real-time analytics and inventory management.",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
                tech: ["React", "TypeScript", "Tailwind"],
              },
              {
                title: "Shopify Fashion Store",
                description:
                  "Custom theme for a high-end fashion brand with advanced filtering.",
                image:
                  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
                tech: ["Liquid", "JavaScript", "Shopify"],
              },
              {
                title: "AI Chat Assistant",
                description:
                  "Intelligent chatbot with natural language processing capabilities.",
                image:
                  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
                tech: ["React", "Vapi AI", "WebSocket"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group">
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 border-primary/10 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Frontend
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                React
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Next.js
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                JavaScript
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Tailwind CSS
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                HTML & CSS
              </li>
            </ul>
          </motion.div>

          {/* Shopify */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 border-primary/10 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.8 2.21c-.68-.34-1.48-.2-2 .36L8.8 8.7c-.5.53-.5 1.37 0 1.9l5 5.4c.52.56 1.32.7 2 .36.68-.34 1.2-1.08 1.2-1.86V4.07c0-.78-.52-1.52-1.2-1.86z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Shopify
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Theme Customization
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Liquid Templates
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Store Setup
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                App Integration
              </li>
            </ul>
          </motion.div>

          {/* AI Assistants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 border-primary/10 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              AI Assistants
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Vapi AI
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Blind AI
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Bookly
              </li>
            </ul>
          </motion.div>

          {/* Others */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 border-primary/10 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Tools & More
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                REST APIs
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Git & GitHub
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Responsive Design
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Performance
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/about">
            <Button variant="outline">
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              I'm currently available for freelance projects, full-time
              positions, or just a friendly chat about web development. Let's
              create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg group"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/5 group"
                >
                  View Portfolio
                  <Github className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Nade Ali Hasham. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nadealihasham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/nadealihasham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Code, Zap } from "lucide-react";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Nade Ali Hasham
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="text-foreground hover:text-primary transition-colors"
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 container mx-auto px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80"
                    alt="Nade Ali Hasham - Frontend Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Code className="h-8 w-8 text-primary-foreground" />
                </div>
                {/* Floating elements */}
                <div
                  className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute top-8 -right-8 w-6 h-6 bg-secondary/20 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
                  Nade Ali Hasham
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                  Frontend Developer | Shopify Theme Customizer
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-lg mb-8">
                  With over 2 years of experience in frontend development, I
                  specialize in creating responsive, user-friendly web
                  experiences using modern technologies. I'm passionate about
                  clean code, intuitive design, and building solutions that make
                  a difference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-primary/30 hover:bg-primary/5"
                  >
                    Get In Touch
                    <Mail className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-gradient-to-br from-muted/30 via-primary/5 to-secondary/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Dashboard",
                description:
                  "A comprehensive admin dashboard with real-time analytics and inventory management.",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
                tech: ["React", "TypeScript", "Tailwind"],
              },
              {
                title: "Shopify Fashion Store",
                description:
                  "Custom theme for a high-end fashion brand with advanced filtering.",
                image:
                  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
                tech: ["Liquid", "JavaScript", "Shopify"],
              },
              {
                title: "AI Chat Assistant",
                description:
                  "Intelligent chatbot with natural language processing capabilities.",
                image:
                  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
                tech: ["React", "Vapi AI", "WebSocket"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group">
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 border-primary/10 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Frontend
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                React
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Next.js
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                JavaScript
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Tailwind CSS
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                HTML & CSS
              </li>
            </ul>
          </motion.div>

          {/* Shopify */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 border-primary/10 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.8 2.21c-.68-.34-1.48-.2-2 .36L8.8 8.7c-.5.53-.5 1.37 0 1.9l5 5.4c.52.56 1.32.7 2 .36.68-.34 1.2-1.08 1.2-1.86V4.07c0-.78-.52-1.52-1.2-1.86z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Shopify
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Theme Customization
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Liquid Templates
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Store Setup
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                App Integration
              </li>
            </ul>
          </motion.div>

          {/* AI Assistants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 border-primary/10 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              AI Assistants
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Vapi AI
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Blind AI
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Bookly
              </li>
            </ul>
          </motion.div>

          {/* Others */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 border-primary/10 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Tools & More
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                REST APIs
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Git & GitHub
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Responsive Design
              </li>
              <li className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Performance
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/about">
            <Button variant="outline">
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              I'm currently available for freelance projects, full-time
              positions, or just a friendly chat about web development. Let's
              create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg group"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/5 group"
                >
                  View Portfolio
                  <Github className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Nade Ali Hasham. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nadealihasham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/nadealihasham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
