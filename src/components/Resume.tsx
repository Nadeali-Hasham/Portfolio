import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  const personalInfo = {
    name: "Nade Ali Hasham",
    title: "Frontend Developer & Shopify Specialist",
    email: "contact@nadealihasham.com",
    phone: "+1 (555) 123-4567",
    location: "Remote / Available Worldwide",
    website: "https://nadealihasham.com",
    github: "https://github.com/nadealihasham",
    linkedin: "https://linkedin.com/in/nadealihasham",
  };

  const summary =
    "Passionate Frontend Developer with 2+ years of experience in creating responsive, user-friendly web applications. Specialized in React, Shopify theme development, and AI assistant integrations. Proven track record of delivering high-quality projects on time and exceeding client expectations.";

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "Jan 2022 - Present",
      responsibilities: [
        "Lead development of responsive web applications using React and TypeScript",
        "Collaborate with design teams to implement pixel-perfect UI/UX designs",
        "Optimize application performance, achieving 40% improvement in load times",
        "Mentor junior developers and conduct code reviews",
        "Implement modern development practices including CI/CD pipelines",
      ],
    },
    {
      title: "Shopify Developer",
      company: "E-commerce Agency",
      location: "Remote",
      period: "Jun 2021 - Dec 2021",
      responsibilities: [
        "Developed custom Shopify themes for 20+ e-commerce stores",
        "Integrated third-party apps and payment gateways",
        "Optimized store performance and SEO, increasing conversion rates by 25%",
        "Provided ongoing maintenance and support for client stores",
        "Collaborated with marketing teams on A/B testing initiatives",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Studio",
      location: "Remote",
      period: "Mar 2020 - May 2021",
      responsibilities: [
        "Built responsive websites using HTML5, CSS3, and JavaScript",
        "Implemented modern CSS frameworks including Tailwind CSS and Bootstrap",
        "Developed interactive components using React and Vue.js",
        "Ensured cross-browser compatibility and mobile responsiveness",
        "Collaborated with backend developers on API integrations",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      details: "Graduated with Honors, GPA: 3.8/4.0",
    },
  ];

  const skills = {
    "Frontend Technologies": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Sass/SCSS",
      "Responsive Design",
    ],
    "Shopify Development": [
      "Liquid Templates",
      "Theme Customization",
      "Shopify API",
      "App Development",
      "Store Optimization",
      "Payment Integration",
      "SEO Implementation",
    ],
    "AI & Automation": [
      "Vapi AI",
      "Blind AI",
      "Bookly",
      "ChatGPT Integration",
      "Natural Language Processing",
      "Voice Assistants",
    ],
    "Tools & Technologies": [
      "Git/GitHub",
      "VS Code",
      "Figma",
      "Adobe XD",
      "Webpack",
      "Vite",
      "Chrome DevTools",
      "Postman",
      "Jira",
      "Slack",
    ],
  };

  const certifications = [
    {
      name: "Shopify Partner Certification",
      issuer: "Shopify",
      date: "2022",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
    },
    {
      name: "Frontend Web Development",
      issuer: "freeCodeCamp",
      date: "2020",
    },
  ];

  const projects = [
    {
      name: "E-Commerce Dashboard",
      description: "React-based admin dashboard with real-time analytics",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Shopify Fashion Store",
      description: "Custom theme for high-end fashion brand",
      technologies: ["Liquid", "JavaScript", "Shopify API"],
    },
    {
      name: "AI Chat Assistant",
      description: "Intelligent customer support chatbot",
      technologies: ["React", "Vapi AI", "WebSocket"],
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header with Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Resume</h1>
            <p className="text-muted-foreground">
              Download or view my professional CV
            </p>
          </div>
          <Button
            size="lg"
            className="mt-4 md:mt-0"
            onClick={() => {
              // Create a downloadable PDF content
              const resumeContent = `
NADE ALI HASHAM
Frontend Developer & Shopify Specialist

Contact Information:
Email: contact@nadealihasham.com
Phone: +1 (555) 123-4567
Location: Remote / Available Worldwide
Website: https://nadealihasham.com
GitHub: https://github.com/nadealihasham
LinkedIn: https://linkedin.com/in/nadealihasham

PROFESSIONAL SUMMARY
Passionate Frontend Developer with 2+ years of experience in creating responsive, user-friendly web applications. Specialized in React, Shopify theme development, and AI assistant integrations. Proven track record of delivering high-quality projects on time and exceeding client expectations.

PROFESSIONAL EXPERIENCE

Senior Frontend Developer | Tech Solutions Inc. | Jan 2022 - Present
• Lead development of responsive web applications using React and TypeScript
• Collaborate with design teams to implement pixel-perfect UI/UX designs
• Optimize application performance, achieving 40% improvement in load times
• Mentor junior developers and conduct code reviews
• Implement modern development practices including CI/CD pipelines

Shopify Developer | E-commerce Agency | Jun 2021 - Dec 2021
• Developed custom Shopify themes for 20+ e-commerce stores
• Integrated third-party apps and payment gateways
• Optimized store performance and SEO, increasing conversion rates by 25%
• Provided ongoing maintenance and support for client stores
• Collaborated with marketing teams on A/B testing initiatives

Frontend Developer | Digital Studio | Mar 2020 - May 2021
• Built responsive websites using HTML5, CSS3, and JavaScript
• Implemented modern CSS frameworks including Tailwind CSS and Bootstrap
• Developed interactive components using React and Vue.js
• Ensured cross-browser compatibility and mobile responsiveness
• Collaborated with backend developers on API integrations

EDUCATION
Bachelor of Science in Computer Science
University of Technology | 2016 - 2020
Graduated with Honors, GPA: 3.8/4.0

TECHNICAL SKILLS
Frontend Technologies: React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Sass/SCSS, Responsive Design
Shopify Development: Liquid Templates, Theme Customization, Shopify API, App Development, Store Optimization, Payment Integration, SEO Implementation
AI & Automation: Vapi AI, Blind AI, Bookly, ChatGPT Integration, Natural Language Processing, Voice Assistants
Tools & Technologies: Git/GitHub, VS Code, Figma, Adobe XD, Webpack, Vite, Chrome DevTools, Postman, Jira, Slack

CERTIFICATIONS
• Shopify Partner Certification - Shopify (2022)
• React Developer Certification - Meta (2021)
• Frontend Web Development - freeCodeCamp (2020)

KEY PROJECTS
• E-Commerce Dashboard - React-based admin dashboard with real-time analytics
• Shopify Fashion Store - Custom theme for high-end fashion brand
• AI Chat Assistant - Intelligent customer support chatbot
              `;

              const blob = new Blob([resumeContent], { type: "text/plain" });
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = "Nade_Ali_Hasham_Resume.txt";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              window.URL.revokeObjectURL(url);
            }}
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-background border shadow-lg">
            <CardContent className="p-8">
              {/* Personal Information */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
                <h2 className="text-xl text-primary mb-4">
                  {personalInfo.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {personalInfo.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {personalInfo.phone}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {personalInfo.location}
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={personalInfo.website}
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Globe className="h-4 w-4" />
                    Website
                  </a>
                  <a
                    href={personalInfo.github}
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <Separator className="mb-8" />

              {/* Professional Summary */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {summary}
                </p>
              </div>

              <Separator className="mb-8" />

              {/* Experience */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h4 className="text-lg font-semibold">{exp.title}</h4>
                          <p className="text-primary font-medium">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.location}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 md:mt-0">
                          {exp.period}
                        </p>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                      {index < experience.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="mb-8" />

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="font-semibold mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="mb-8" />

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">Education</h3>
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:justify-between"
                  >
                    <div>
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.details}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-0">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="mb-8" />

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start"
                    >
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {cert.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="mb-8" />

              {/* Key Projects */}
              <div>
                <h3 className="text-xl font-bold mb-6">Key Projects</h3>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index}>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
