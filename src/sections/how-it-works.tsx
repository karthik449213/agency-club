"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your current processes, identify automation opportunities, and create a comprehensive strategy.",
    icon: CheckCircle,
    duration: "1-2 weeks",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Our experts design automated workflows, integrate systems, and plan the implementation roadmap.",
    icon: Clock,
    duration: "2-3 weeks",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build and rigorously test your automation solutions to ensure reliability and performance.",
    icon: Rocket,
    duration: "4-6 weeks",
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "Seamless deployment with comprehensive training for your team and ongoing support.",
    icon: ArrowRight,
    duration: "1-2 weeks",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures successful automation implementation
            with minimal disruption to your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full border-border hover:border-primary/20 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="text-sm text-primary font-medium">
                    {step.duration}
                  </div>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
            Average Implementation Time: 8-12 Weeks
          </div>
        </motion.div>
      </div>
    </section>
  );
}
