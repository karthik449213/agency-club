"use client";

import { motion } from "framer-motion";
import {PhoneCall,Linkedin,MessageSquare,Zap, CalendarCheck,Megaphone,Users, BarChart3,TrendingUp,Search,PenTool,Calendar,Database,Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceDetailsModal } from "@/components/service-details-modal";
import { useState } from "react";

interface ServiceDetail {
  title: string;
  pricing: string;
  attraction: string;
  includes: string[];
  freebies: string[];
  benefits: string[];
  outcomes: string[];
}

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
  details?: ServiceDetail;
}

const services: Service[] = [
{
  icon: TrendingUp,
  title: "AI Sales Agent System",
  description: "Autonomous AI agent that captures, qualifies, and follows up with leads to drive conversions.",
  features: ["Lead Qualification", "Automated Follow-ups", "Appointment Booking"],
  details: {
    title: "AI Sales Agent System",
    pricing: "₹25,000 setup + ₹8,000/month",
    attraction: "Turn every lead into a conversation without hiring more sales reps.",
    includes: [
      "Lead capture automation",
      "AI qualification logic",
      "Automated email/WhatsApp follow-ups",
      "Meeting scheduling system"
    ],
    freebies: [
      "Lead funnel design",
      "CRM integration",
      "Basic sales scripts"
    ],
    benefits: [
      "Instant lead response",
      "Reduced manual work",
      "Higher engagement rates"
    ],
    outcomes: [
      "More booked calls",
      "Increased conversions",
      "Faster sales cycles"
    ]
  }
},
{
  icon: MessageSquare,
  title: "AI Customer Support Agent",
  description: "24/7 AI support agent that resolves queries, reduces tickets, and improves customer experience.",
  features: ["24/7 Support", "Ticket Automation", "Multi-channel"],
  details: {
    title: "AI Customer Support Agent",
    pricing: "₹20,000 setup + ₹6,000/month",
    attraction: "Handle 80% of support queries automatically.",
    includes: [
      "Website chatbot",
      "FAQ automation",
      "Ticket routing system",
      "WhatsApp/email integration"
    ],
    freebies: [
      "Knowledge base setup",
      "Conversation design",
      "Support flow mapping"
    ],
    benefits: [
      "Reduced workload",
      "Faster response time",
      "Consistent support quality"
    ],
    outcomes: [
      "Lower support costs",
      "Higher customer satisfaction",
      "Scalable support system"
    ]
  }
},
{
  icon: Users,
  title: "AI Lead Generation Engine",
  description: "Automated system that finds, enriches, and reaches out to potential customers.",
  features: ["Data Scraping", "Cold Outreach", "Lead Enrichment"],
  details: {
    title: "AI Lead Generation Engine",
    pricing: "₹30,000 setup + ₹10,000/month",
    attraction: "A continuous pipeline of qualified leads without manual effort.",
    includes: [
      "Target audience scraping",
      "Email personalization AI",
      "Outreach automation",
      "Lead database management"
    ],
    freebies: [
      "ICP definition",
      "Cold email templates",
      "Lead tracking dashboard"
    ],
    benefits: [
      "Consistent lead flow",
      "Reduced prospecting time",
      "Better targeting"
    ],
    outcomes: [
      "More opportunities",
      "Improved outreach response rates",
      "Predictable pipeline"
    ]
  }
},
{
  icon: Megaphone,
  title: "AI Marketing Automation System",
  description: "End-to-end automation for email campaigns, nurturing, and customer engagement.",
  features: ["Email Automation", "Campaign Management", "Segmentation"],
  details: {
    title: "AI Marketing Automation System",
    pricing: "₹18,000 setup + ₹5,000/month",
    attraction: "Automatically nurture and convert your audience.",
    includes: [
      "Email workflows",
      "Customer segmentation",
      "Campaign scheduling",
      "Behavior-based triggers"
    ],
    freebies: [
      "Campaign templates",
      "Customer journey mapping",
      "Email copy setup"
    ],
    benefits: [
      "Better engagement",
      "Consistent communication",
      "Reduced manual work"
    ],
    outcomes: [
      "Higher open rates",
      "Improved retention",
      "More conversions"
    ]
  }
},
{
  icon: Workflow,
  title: "AI Workflow Automation System",
  description: "Automates repetitive business processes across tools and teams.",
  features: ["Process Automation", "Tool Integration", "Task Elimination"],
  details: {
    title: "AI Workflow Automation System",
    pricing: "₹35,000 setup + ₹12,000/month",
    attraction: "Eliminate repetitive work and run operations on autopilot.",
    includes: [
      "Custom workflow design",
      "Tool integrations",
      "Trigger-based automation",
      "Process monitoring"
    ],
    freebies: [
      "Process audit",
      "Automation blueprint",
      "Efficiency report"
    ],
    benefits: [
      "Time savings",
      "Reduced errors",
      "Operational efficiency"
    ],
    outcomes: [
      "Lower costs",
      "Faster processes",
      "Scalable operations"
    ]
  }
},
{
  icon: Database,
  title: "AI Knowledge Base System",
  description: "Chat with your company data using an AI-powered knowledge system.",
  features: ["Document Search", "Internal Chatbot", "Data Retrieval"],
  details: {
    title: "AI Knowledge Base System",
    pricing: "₹22,000 setup + ₹7,000/month",
    attraction: "Your entire business knowledge in one AI assistant.",
    includes: [
      "Document ingestion",
      "Searchable knowledge base",
      "Internal chatbot",
      "Secure access control"
    ],
    freebies: [
      "Data structuring",
      "Knowledge organization",
      "Search optimization"
    ],
    benefits: [
      "Instant information access",
      "Reduced dependency on teams",
      "Better decision-making"
    ],
    outcomes: [
      "Faster workflows",
      "Improved productivity",
      "Knowledge centralization"
    ]
  }
},
{
  icon: BarChart3,
  title: "AI Data Analytics Agent",
  description: "AI agent that analyzes business data and provides actionable insights.",
  features: ["Data Analysis", "KPI Tracking", "Forecasting"],
  details: {
    title: "AI Data Analytics Agent",
    pricing: "₹28,000 setup + ₹9,000/month",
    attraction: "Make smarter decisions with real-time AI insights.",
    includes: [
      "Dashboard creation",
      "KPI tracking",
      "Predictive analytics",
      "Automated reports"
    ],
    freebies: [
      "Data cleanup",
      "Metric definition",
      "Visualization setup"
    ],
    benefits: [
      "Data-driven decisions",
      "Real-time visibility",
      "Improved planning"
    ],
    outcomes: [
      "Higher efficiency",
      "Better forecasting",
      "Improved performance"
    ]
  }
},
{
  icon: Calendar,
  title: "AI Appointment Booking Agent",
  description: "Automates scheduling, reminders, and calendar management.",
  features: ["Auto Scheduling", "Reminders", "Calendar Sync"],
  details: {
    title: "AI Appointment Booking Agent",
    pricing: "₹12,000 setup + ₹3,000/month",
    attraction: "Never miss a meeting or follow-up again.",
    includes: [
      "Calendar integration",
      "Booking system",
      "Automated reminders",
      "Rescheduling automation"
    ],
    freebies: [
      "Calendar setup",
      "Booking page design",
      "Reminder templates"
    ],
    benefits: [
      "No scheduling conflicts",
      "Reduced no-shows",
      "Time savings"
    ],
    outcomes: [
      "Better time management",
      "Higher attendance rates",
      "Improved efficiency"
    ]
  }
},
{
  icon: PenTool,
  title: "AI Content Creation Engine",
  description: "Automated system for generating blogs, ads, and social media content.",
  features: ["Content Generation", "SEO Optimization", "Bulk Creation"],
  details: {
    title: "AI Content Creation Engine",
    pricing: "₹15,000 setup + ₹5,000/month",
    attraction: "Create high-quality content at scale without a full team.",
    includes: [
      "Content pipelines",
      "SEO optimization",
      "Social media posts",
      "Ad copy generation"
    ],
    freebies: [
      "Content strategy",
      "Keyword research",
      "Templates"
    ],
    benefits: [
      "Faster content creation",
      "Consistency",
      "Cost savings"
    ],
    outcomes: [
      "Increased traffic",
      "Better engagement",
      "Stronger brand presence"
    ]
  }
},
{
  icon: Search,
  title: "AI Business Process Audit",
  description: "Identify automation opportunities and build a roadmap for AI implementation.",
  features: ["Process Audit", "ROI Analysis", "Strategy"],
  details: {
    title: "AI Business Process Audit",
    pricing: "₹10,000 one-time",
    attraction: "Discover exactly where AI can save you time and money.",
    includes: [
      "Workflow analysis",
      "Automation opportunities",
      "ROI estimation",
      "Implementation roadmap"
    ],
    freebies: [
      "Consultation call",
      "Priority roadmap",
      "Tool recommendations"
    ],
    benefits: [
      "Clarity",
      "Better planning",
      "Risk reduction"
    ],
    outcomes: [
      "Clear action plan",
      "Faster adoption",
      "Higher ROI"
    ]
  }
},


];

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
              onClick={() => setSelectedService(service)}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border hover:border-primary/20 cursor-pointer">
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

        {selectedService && selectedService.details && (
          <ServiceDetailsModal
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
            service={selectedService.details}
          />
        )}
      </div>
    </section>
  );
}
