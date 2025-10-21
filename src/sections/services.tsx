"use client";

import { motion } from "framer-motion";
import { Bot, Database, Workflow, Zap, Shield, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Leverage machine learning and AI to automate complex decision-making processes and intelligent workflows.",
    features: ["Machine Learning Integration", "Intelligent Decision Making", "Predictive Analytics"],
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "Streamline your business processes with automated workflows that eliminate bottlenecks and reduce manual effort.",
    features: ["Workflow Automation", "Process Mapping", "Efficiency Analysis"],
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Connect disparate systems and databases to create a unified data ecosystem for better insights and automation.",
    features: ["API Integration", "Data Synchronization", "Real-time Sync"],
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get your automation solutions up and running quickly with our agile development and deployment processes.",
    features: ["Quick Setup", "Scalable Solutions", "24/7 Support"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Ensure your automated systems are secure with enterprise-grade security measures and compliance standards.",
    features: ["Data Encryption", "Compliance Ready", "Access Control"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Gain valuable insights from your automated processes with comprehensive analytics and reporting dashboards.",
    features: ["Real-time Metrics", "Custom Dashboards", "Performance Tracking"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Automation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation solutions designed to transform your business
            operations and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border hover:border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
