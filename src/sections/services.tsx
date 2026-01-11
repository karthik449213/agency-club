"use client";

import { motion } from "framer-motion";
import {PhoneCall,Linkedin,MessageSquare,Zap, CalendarCheck, BarChart3 } from "lucide-react";
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
  icon: PhoneCall,
  title: "AI Voice Call Receptionist",
  description: "24/7 AI-powered voice agent that answers calls, qualifies leads, books appointments, and never misses a customer.",
  features: ["24/7 Call Handling", "Lead Qualification", "Appointment Booking"],
  details: {
    title: "AI Voice Call Receptionist",
    pricing: "₹8,000 setup + ₹2,000/month (API cost extra)",
    attraction: "Never miss a call again — 24/7 AI call handling.",
    includes: [
      "AI answers incoming calls",
      "Collects caller details & intent",
      "Routes calls or logs enquiries",
      "Call summary sent to your team"
    ],
    freebies: [
      "Custom greeting script",
      "Business hours logic",
      "Call summary template"
    ],
    benefits: [
      "No missed enquiries",
      "Reduced staff load",
      "Professional first impression"
    ],
    outcomes: [
      "Higher enquiry capture",
      "Faster response",
      "Better customer experience"
    ]
  }
},
{
  icon: Linkedin,
  title: "LinkedIn Outreach Agent",
  description: "Automated LinkedIn AI agent that finds ideal prospects, sends personalized messages, follows up, and books meetings.",
  features: ["Prospect Discovery", "Personalized Outreach", "Auto Follow-ups"],
  details: {
  title: "LinkedIn Outreach Agent",
  pricing: "₹10,000 setup + ₹3,000/month",
  attraction: "Automated LinkedIn outreach that feels personal, not spammy.",
  includes: [
    "Targeted profile outreach",
    "Connection request automation",
    "Multi-step follow-up messages",
    "Response tracking & lead tagging"
  ],
  freebies: [
    "Message copywriting",
    "Ideal customer profile setup",
    "Lead tracking sheet"
  ],
  benefits: [
    "Saves manual effort",
    "Consistent daily outreach",
    "Improved response rates"
  ],
  outcomes: [
    "More sales conversations",
    "Qualified B2B leads",
    "Predictable lead pipeline"
  ]
}

},
{
  icon: MessageSquare,
  title: "AI Customer Support Agent",
  description: "Omni-channel AI support agent that handles customer queries across chat, WhatsApp, and email instantly.",
  features: ["Instant Responses", "Multi-Channel Support", "Human Escalation"],
  details: {
  title: "AI Customer Support Agent",
  pricing: "₹12,000 setup + ₹3,000/month (platform cost extra)",
  attraction: "Instant customer support replies, 24/7.",
  includes: [
    "Website or WhatsApp chat support",
    "FAQ handling",
    "Basic issue resolution",
    "Human handoff when required"
  ],
  freebies: [
    "FAQ setup (up to 30 questions)",
    "Brand tone customization",
    "Chat escalation rules"
  ],
  benefits: [
    "Faster customer support",
    "Reduced support tickets",
    "Always-available assistance"
  ],
  outcomes: [
    "Higher customer satisfaction",
    "Lower support workload",
    "Improved customer retention"
  ]
}

},
{
  icon: BarChart3,
  title: "AI Sales & CRM Assistant",
  description: "AI agent that automates CRM updates, follow-ups, lead scoring, and provides actionable sales insights.",
  features: ["CRM Automation", "Lead Scoring", "Sales Insights"],
  details: {
  title: "AI Sales & CRM Assistant",
  pricing: "₹15,000 setup + ₹4,000/month",
  attraction: "Your AI assistant that tracks, organizes, and follows up on every lead.",
  includes: [
    "Lead capture and tagging",
    "CRM pipeline automation",
    "Automated follow-up reminders",
    "Sales status tracking"
  ],
  freebies: [
    "CRM structure design",
    "Sales pipeline setup",
    "Lead status dashboard"
  ],
  benefits: [
    "No lead leakage",
    "Clear sales visibility",
    "Organized follow-ups"
  ],
  outcomes: [
    "Higher conversion rates",
    "Faster deal movement",
    "Better sales accountability"
  ]
}

},
{
  icon: CalendarCheck,
  title: "AI Appointment & Follow-Up Agent",
  description: "Smart AI agent that manages bookings, reminders, no-show follow-ups, and re-engagement automatically.",
  features: ["Automated Scheduling", "Reminder Notifications", "No-Show Recovery"],
  details: {
  title: "AI Appointment & Follow-Up Agent",
  pricing: "₹10,000 setup + ₹3,000/month",
  attraction: "Automated appointment booking and reminders without manual work.",
  includes: [
    "Appointment scheduling automation",
    "Confirmation messages",
    "Reminder and follow-up messages",
    "Calendar integration"
  ],
  freebies: [
    "Reminder message templates",
    "Rescheduling logic",
    "Booking flow optimization"
  ],
  benefits: [
    "Reduced no-shows",
    "Saves admin time",
    "Smooth booking experience"
  ],
  outcomes: [
    "Higher appointment attendance",
    "Better time utilization",
    "Improved customer trust"
  ]
}

},
{
  icon: Zap,
  title: "AI Workflow & Operations Automation",
  description: "End-to-end AI automation that connects tools, eliminates manual work, and optimizes business operations.",
  features: ["Tool Integrations", "Process Automation", "Real-Time Monitoring"],
  details: {
  title: "AI Workflow & Operations Automation",
  pricing: "₹20,000+ setup + ₹5,000/month (depends on complexity)",
  attraction: "Automate repetitive tasks and streamline daily operations.",
  includes: [
    "Workflow automation setup",
    "Tool and system integrations",
    "Data synchronization",
    "Process optimization"
  ],
  freebies: [
    "Workflow audit",
    "Automation roadmap",
    "Process documentation"
  ],
  benefits: [
    "Reduced manual effort",
    "Fewer operational errors",
    "Faster execution"
  ],
  outcomes: [
    "Improved efficiency",
    "Lower operational costs",
    "Scalable business operations"
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
