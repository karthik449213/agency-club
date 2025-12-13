"use client";

import { motion } from "framer-motion";
import {PhoneCall,Linkedin,MessageSquare,Zap, CalendarCheck, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
 {
  icon: PhoneCall,
  title: "AI Voice Call Receptionist",
  description: "24/7 AI-powered voice agent that answers calls, qualifies leads, books appointments, and never misses a customer.",
  features: ["24/7 Call Handling", "Lead Qualification", "Appointment Booking"],
},
{
  icon: Linkedin,
  title: "LinkedIn Outreach Agent",
  description: "Automated LinkedIn AI agent that finds ideal prospects, sends personalized messages, follows up, and books meetings.",
  features: ["Prospect Discovery", "Personalized Outreach", "Auto Follow-ups"],
},
{
  icon: MessageSquare,
  title: "AI Customer Support Agent",
  description: "Omni-channel AI support agent that handles customer queries across chat, WhatsApp, and email instantly.",
  features: ["Instant Responses", "Multi-Channel Support", "Human Escalation"],
},
{
  icon: BarChart3,
  title: "AI Sales & CRM Assistant",
  description: "AI agent that automates CRM updates, follow-ups, lead scoring, and provides actionable sales insights.",
  features: ["CRM Automation", "Lead Scoring", "Sales Insights"],
},
{
  icon: CalendarCheck,
  title: "AI Appointment & Follow-Up Agent",
  description: "Smart AI agent that manages bookings, reminders, no-show follow-ups, and re-engagement automatically.",
  features: ["Automated Scheduling", "Reminder Notifications", "No-Show Recovery"],
},
{
  icon: Zap,
  title: "AI Workflow & Operations Automation",
  description: "End-to-end AI automation that connects tools, eliminates manual work, and optimizes business operations.",
  features: ["Tool Integrations", "Process Automation", "Real-Time Monitoring"],
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
