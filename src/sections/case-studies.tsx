"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "E-commerce Order Processing Automation",
    company: "RetailMax",
    industry: "E-commerce",
    challenge: "Manual order processing causing delays and errors",
    solution: "Automated order fulfillment system with AI-powered routing",
    results: {
      efficiency: "85% reduction in processing time",
      accuracy: "99.9% order accuracy",
      cost: "$500K annual savings",
    },
    image: "/case-studies/retailmax.jpg",
    metrics: [
      { icon: Clock, value: "85%", label: "Faster Processing" },
      { icon: TrendingUp, value: "$500K", label: "Annual Savings" },
      { icon: Users, value: "99.9%", label: "Accuracy Rate" },
    ],
  },
  {
    title: "Financial Data Reconciliation System",
    company: "FinanceCorp",
    industry: "Financial Services",
    challenge: "Complex manual reconciliation across multiple systems",
    solution: "Intelligent data matching and automated reconciliation platform",
    results: {
      efficiency: "90% reduction in reconciliation time",
      accuracy: "100% match accuracy",
      cost: "$2M annual savings",
    },
    image: "/case-studies/financecorp.jpg",
    metrics: [
      { icon: Clock, value: "90%", label: "Time Reduction" },
      { icon: TrendingUp, value: "$2M", label: "Annual Savings" },
      { icon: Users, value: "100%", label: "Match Accuracy" },
    ],
  },
  {
    title: "Customer Support Ticket Automation",
    company: "TechSupport Inc",
    industry: "Technology",
    challenge: "Overwhelmed support team with repetitive queries",
    solution: "AI-powered ticket classification and automated responses",
    results: {
      efficiency: "70% reduction in response time",
      accuracy: "95% first-contact resolution",
      cost: "$300K annual savings",
    },
    image: "/case-studies/techsupport.jpg",
    metrics: [
      { icon: Clock, value: "70%", label: "Faster Response" },
      { icon: TrendingUp, value: "$300K", label: "Annual Savings" },
      { icon: Users, value: "95%", label: "Resolution Rate" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real companies. See how our automation solutions
            have transformed businesses across industries.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {study.industry}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {study.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {study.company}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <metric.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative">
                <Card className="overflow-hidden border-border">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <ArrowUpRight className="w-8 h-8 text-primary" />
                      </div>
                      <p className="font-medium">{study.company}</p>
                      <p className="text-sm">Case Study Preview</p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
