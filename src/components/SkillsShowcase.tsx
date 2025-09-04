import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  proficiency: number; // 1-5
  icon?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillsShowcaseProps {
  categories?: SkillCategory[];
  className?: string;
}

const defaultCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", proficiency: 5 },
      { name: "Next.js", proficiency: 4 },
      { name: "JavaScript", proficiency: 5 },
      { name: "Tailwind CSS", proficiency: 5 },
      { name: "HTML", proficiency: 5 },
      { name: "CSS", proficiency: 4 },
    ],
  },
  {
    name: "Shopify",
    skills: [
      { name: "Theme Customization", proficiency: 5 },
      { name: "Liquid", proficiency: 4 },
      { name: "Shopify Apps", proficiency: 3 },
    ],
  },
  {
    name: "AI Assistants",
    skills: [
      { name: "Vapi AI", proficiency: 4 },
      { name: "Blind AI", proficiency: 4 },
      { name: "Bookly", proficiency: 5 },
    ],
  },
  {
    name: "Others",
    skills: [
      { name: "REST APIs", proficiency: 4 },
      { name: "Git", proficiency: 4 },
      { name: "Responsive Design", proficiency: 5 },
    ],
  },
];

const SkillsShowcase: React.FC<SkillsShowcaseProps> = ({
  categories = defaultCategories,
  className,
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className={cn("w-full bg-background", className)}>
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <Tabs defaultValue={categories[0].name} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className="px-4 py-2"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-medium">{skill.name}</h3>
                          <Badge variant="secondary">
                            {skill.proficiency}/5
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{
                              width: `${(skill.proficiency / 5) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default SkillsShowcase;
