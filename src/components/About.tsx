import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, Award, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const skills = {
    frontend: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
      "Responsive Design",
    ],
    shopify: [
      "Liquid Templates",
      "Theme Customization",
      "Store Setup",
      "App Integration",
      "Payment Gateway",
      "SEO Optimization",
    ],
    aiAssistants: [
      "Vapi AI",
      "Blind AI",
      "Bookly",
      "ChatGPT Integration",
      "Voice Assistants",
      "Natural Language Processing",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Adobe XD",
      "Chrome DevTools",
      "Postman",
      "Webpack",
      "Vite",
    ],
  };

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading frontend development projects, mentoring junior developers, and implementing modern web technologies.",
    },
    {
      title: "Shopify Developer",
      company: "E-commerce Agency",
      period: "2021 - 2022",
      description:
        "Specialized in Shopify theme customization and store optimization for various clients.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Studio",
      period: "2020 - 2021",
      description:
        "Developed responsive websites and web applications using React and modern CSS frameworks.",
    },
  ];

  const achievements = [
    "Completed 50+ successful projects",
    "Improved website performance by 40% on average",
    "Certified Shopify Partner",
    "React Developer Certification",
    "Contributed to 10+ open source projects",
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with over 2 years of experience
            creating beautiful, functional, and user-friendly web experiences. I
            specialize in React, Shopify development, and AI assistant
            integrations.
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <Card className="bg-background border shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Full Name</h3>
                <p className="text-muted-foreground">Nade Ali Hasham</p>
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">
                  Remote / Available Worldwide
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">
                  contact@nadealihasham.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Languages</h3>
                <p className="text-muted-foreground">
                  English (Fluent), Urdu (Native)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                What I Do
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Building responsive and interactive web applications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Palette className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">Shopify Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom theme development and store optimization
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold">AI Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Implementing AI assistants and automation tools
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background border shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Shopify</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.shopify.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">AI Assistants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.aiAssistants.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-background border shadow-md">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
          <Card className="bg-background border shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Key Accomplishments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
