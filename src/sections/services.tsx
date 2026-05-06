"use client";

import { motion } from "framer-motion";
import { MessageCircle, MessageSquare, Calendar, Mail, Headphones, Building, Users, Share2, DollarSign, TrendingUp, Zap, Star, Shield, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceDetailsModal } from "@/components/service-details-modal";
import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  includes: string[];
}

interface ServiceDetail {
  title: string;
  pricing: PricingTier[];
  attraction: string;
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
  icon: MessageCircle,
  title: "Lead Capture & Auto-Qualifier Bot",
  description: "Capture leads from website, WhatsApp, and forms then automatically qualify and score them in real-time.",
  features: ["Multi-channel lead capture", "Instant qualification scoring", "Auto-route hot leads", "Lead intelligence dashboard"],
  details: {
    title: "Lead Capture & Auto-Qualifier Bot",
    pricing: [
      {
        name: "Starter",
        price: "$299",
        period: "/month",
        description: "Perfect for small businesses",
        includes: ["Website chat widget", "Basic qualification", "Google Sheets sync", "Email support"]
      },
      {
        name: "Professional",
        price: "$599",
        period: "/month",
        description: "For growing teams",
        includes: ["All Starter features", "WhatsApp integration", "Custom workflows", "CRM integration", "Priority support", "Weekly reports"]
      },
      {
        name: "Enterprise",
        price: "$1,299",
        period: "/month",
        description: "Full-featured solution",
        includes: ["All Professional features", "Multi-channel capture", "Advanced AI scoring", "API access", "24/7 support", "Custom integrations"]
      }
    ],
    attraction: "Stop losing leads. Capture and qualify every prospect automatically 24/7.",
    freebies: [
      "3 months of lead source analysis",
      "Free qualification script creation"
    ],
    benefits: [
      "Capture 3-5x more leads without hiring",
      "Pre-qualified leads only → higher close rates",
      "24/7 availability (no more missed calls)",
      "Save 10+ hours/week on manual qualification"
    ],
    outcomes: [
      "Expected 40-60% increase in qualified leads",
      "Average response time: < 2 minutes",
      "Lead quality improvement by 50%"
    ]
  }
},
{
  icon: MessageSquare,
  title: "WhatsApp Sales Automation Engine",
  description: "Send personalized WhatsApp sequences to leads follow-ups, reminders, and upsells on autopilot.",
  features: ["Personalized multi-message sequences", "Trigger-based automation", "Product catalog integration", "Performance analytics"],
  details: {
    title: "WhatsApp Sales Automation Engine",
    pricing: [
      {
        name: "Starter",
        price: "$399",
        period: "/month",
        description: "Getting started",
        includes: ["3 pre-built sequences", "Basic templates", "Contact management", "Email support"]
      },
      {
        name: "Professional",
        price: "$799",
        period: "/month",
        description: "Growing sales team",
        includes: ["All Starter features", "Unlimited sequences", "Advanced templates", "Click tracking", "CRM sync", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$1,599",
        period: "/month",
        description: "High-volume campaigns",
        includes: ["All Professional features", "Custom templates", "API access", "Advanced analytics", "Dedicated support"]
      }
    ],
    attraction: "Send the right message at the right time. WhatsApp, not email 10x higher engagement.",
    freebies: [
      "First 30 days of free message credits",
      "Sales copy templates for your industry"
    ],
    benefits: [
      "WhatsApp gets 10x higher open rates than email",
      "Reduce follow-up time by 70%",
      "Close deals faster with automated reminders",
      "Save 15+ hours/week on manual follow-ups"
    ],
    outcomes: [
      "Expected 25-35% conversion rate improvement",
      "Average deal velocity: 40% faster",
      "Customer engagement: +200%"
    ]
  }
},
{
  icon: Calendar,
  title: "Smart Appointment Booking & Reminders",
  description: "Auto-book appointments, send reminders, and reduce no-shows with AI-powered scheduling.",
  features: ["Calendar sync integration", "Automated confirmations", "No-show prevention", "Rescheduling automation"],
  details: {
    title: "Smart Appointment Booking & Reminders",
    pricing: [
      {
        name: "Starter",
        price: "$199",
        period: "/month",
        description: "Small practices",
        includes: ["Booking widget", "Basic reminders", "Email support"]
      },
      {
        name: "Professional",
        price: "$499",
        period: "/month",
        description: "Growing businesses",
        includes: ["All Starter features", "Calendar sync", "Multi-reminder sequences", "SMS + WhatsApp", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$999",
        period: "/month",
        description: "Large operations",
        includes: ["All Professional features", "Custom workflows", "Advanced analytics", "API access", "24/7 support"]
      }
    ],
    attraction: "Stop chasing clients for appointment confirmations. Automate bookings and cut no-shows by 50%.",
    freebies: [
      "Reminder message templates",
      "No-show recovery script"
    ],
    benefits: [
      "Cut no-shows by 40-50%",
      "Eliminate manual booking confirmations",
      "More bookings = predictable revenue",
      "Save 5+ hours/week"
    ],
    outcomes: [
      "No-show rate reduction: 40-50%",
      "Booking confirmation rate: 95%+",
      "Recovery calls automated: 100%"
    ]
  }
},
{
  icon: Mail,
  title: "Automated Email & SMS Nurture Campaigns",
  description: "Send personalized email and SMS sequences based on customer behavior convert leads to customers on autopilot.",
  features: ["Behavioral trigger automation", "A/B testing", "Personalization tokens", "Compliance management"],
  details: {
    title: "Automated Email & SMS Nurture Campaigns",
    pricing: [
      {
        name: "Starter",
        price: "$349",
        period: "/month",
        description: "Getting started",
        includes: ["3 pre-built sequences", "Basic analytics", "Email support"]
      },
      {
        name: "Professional",
        price: "$799",
        period: "/month",
        description: "Growing businesses",
        includes: ["All Starter features", "Unlimited sequences", "A/B testing", "Advanced segmentation", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$1,699",
        period: "/month",
        description: "Large-scale operations",
        includes: ["All Professional features", "Custom workflows", "API access", "Advanced analytics", "Dedicated support"]
      }
    ],
    attraction: "Stop sending generic emails. Deliver the right message to the right person at the right time automatically.",
    freebies: [
      "90-day content calendar template",
      "Email copywriting workshop (1 session)"
    ],
    benefits: [
      "Increase customer lifetime value by 30-50%",
      "Higher open rates (email: 25-35%, SMS: 40-60%)",
      "Personalization → 3x more conversions",
      "Save 20+ hours/week on manual campaigns"
    ],
    outcomes: [
      "Expected email conversion rate: 5-8%",
      "SMS conversion rate: 15-25%",
      "Customer retention improvement: 35%"
    ]
  }
},
{
  icon: Headphones,
  title: "AI Customer Support Chatbot",
  description: "Handle 80% of customer support questions automatically with an AI chatbot 24/7, no humans needed.",
  features: ["Natural language AI", "Multi-channel support", "Seamless handoff", "Knowledge base learning"],
  details: {
    title: "AI Customer Support Chatbot",
    pricing: [
      {
        name: "Starter",
        price: "$499",
        period: "/month",
        description: "Small business",
        includes: ["Website chatbot", "100+ FAQs", "Basic analytics", "Email support"]
      },
      {
        name: "Professional",
        price: "$999",
        period: "/month",
        description: "Growing companies",
        includes: ["All Starter features", "WhatsApp + Telegram", "Unlimited FAQs", "Sentiment analysis", "Agent handoff", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$1,999",
        period: "/month",
        description: "Large organizations",
        includes: ["All Professional features", "Multi-language support", "Custom training", "Advanced analytics", "API access", "24/7 support"]
      }
    ],
    attraction: "Handle customer questions 24/7 without hiring support staff. Reduce support costs by 60%.",
    freebies: [
      "FAQ documentation template",
      "Customer service script optimization"
    ],
    benefits: [
      "Handle 80% of questions without humans",
      "Response time: instant (vs 2-24 hours)",
      "Reduce support costs by 60%",
      "Customer satisfaction improves with 24/7 availability"
    ],
    outcomes: [
      "Support ticket resolution: 80% automated",
      "Average response time: < 30 seconds",
      "Customer satisfaction score: +40%",
      "Support cost reduction: $5-10k/month saved"
    ]
  }
},
{
  icon: Building,
  title: "Real Estate Lead Pipeline Automator",
  description: "Capture property inquiries, auto-qualify buyers, send property details, and track deal status fully automated.",
  features: ["Multi-source lead capture", "Buyer profile qualification", "Property recommendations", "Deal pipeline tracking"],
  details: {
    title: "Real Estate Lead Pipeline Automator",
    pricing: [
      {
        name: "Starter",
        price: "$699",
        period: "/month",
        description: "Single agent",
        includes: ["Multi-source capture", "Basic qualification", "Lead tracking", "Email support"]
      },
      {
        name: "Professional",
        price: "$1,499",
        period: "/month",
        description: "Small team",
        includes: ["All Starter features", "AI buyer profiling", "Property recommendations", "CRM pipeline", "Follow-up automation", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$2,999",
        period: "/month",
        description: "Large teams",
        includes: ["All Professional features", "Advanced analytics", "Custom integrations", "API access", "White-label options", "24/7 support"]
      }
    ],
    attraction: "Never lose a property inquiry again. Auto-qualify buyers, send relevant properties, and close faster.",
    freebies: [
      "Property photography optimization guide",
      "Sales follow-up script for real estate"
    ],
    benefits: [
      "Capture leads from all sources in one place",
      "Auto-qualify serious buyers (save 10+ hours/week)",
      "Faster follow-up = faster deals",
      "Track every deal from inquiry to close",
      "Increase deal velocity by 40%"
    ],
    outcomes: [
      "Lead response time: < 5 minutes",
      "Deal qualification speed: 50% faster",
      "Close rate improvement: 25-35%",
      "Average deal velocity: 20 days faster"
    ]
  }
},
{
  icon: Users,
  title: "Coaching Client Onboarding Automation",
  description: "Welcome new coaching clients with automated sequences, assignments, payment reminders, and progress tracking.",
  features: ["Personalized onboarding sequences", "Automated assignments", "Payment reminders", "Progress tracking dashboard"],
  details: {
    title: "Coaching Client Onboarding Automation",
    pricing: [
      {
        name: "Starter",
        price: "$349",
        period: "/month",
        description: "New coaches",
        includes: ["Onboarding sequences", "Assignment automation", "Email support"]
      },
      {
        name: "Professional",
        price: "$749",
        period: "/month",
        description: "Established coaches",
        includes: ["All Starter features", "Payment automation", "Progress tracking", "Client dashboard", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$1,499",
        period: "/month",
        description: "Coaching agencies",
        includes: ["All Professional features", "Multi-coach support", "Advanced analytics", "Custom workflows", "API access", "24/7 support"]
      }
    ],
    attraction: "Deliver a premium client experience automatically. Reduce admin work by 70% while keeping clients engaged.",
    freebies: [
      "Client journey mapping template",
      "Coaching assessment question library"
    ],
    benefits: [
      "Premium client experience = higher retention",
      "Save 15+ hours/week on admin",
      "Never chase clients for payments again",
      "Track client progress automatically"
    ],
    outcomes: [
      "Client onboarding time: 50% faster",
      "Payment collection rate: 98%+",
      "Client retention improvement: 40%",
      "Admin time saved: 15+ hours/week"
    ]
  }
},
{
  icon: Share2,
  title: "Social Media Content Calendar & Auto-Posting",
  description: "Plan, schedule, and auto-post social media content across all platforms consistency without effort.",
  features: ["Multi-platform scheduling", "AI content calendar", "Auto-repurposing", "Performance analytics"],
  details: {
    title: "Social Media Content Calendar & Auto-Posting",
    pricing: [
      {
        name: "Starter",
        price: "$249",
        period: "/month",
        description: "Solo creators",
        includes: ["Multi-platform scheduling", "Content calendar", "Basic analytics", "Email support"]
      },
      {
        name: "Professional",
        price: "$549",
        period: "/month",
        description: "Growing brands",
        includes: ["All Starter features", "Content repurposing", "Advanced scheduling", "Team collaboration", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$1,199",
        period: "/month",
        description: "Agencies",
        includes: ["All Professional features", "Multi-client management", "Advanced analytics", "API access", "Custom templates", "24/7 support"]
      }
    ],
    attraction: "Stop scrolling. Stay consistent on social media without spending hours creating and posting daily.",
    freebies: [
      "Content idea list for your industry (50+ ideas)",
      "Social media graphics template pack"
    ],
    benefits: [
      "Post consistently without daily effort",
      "20x better reach with optimal timing",
      "Repurpose content across 5+ platforms instantly",
      "Save 8+ hours/week on posting"
    ],
    outcomes: [
      "Post consistency: 100% (no missed days)",
      "Engagement rate improvement: 3-5x",
      "Follower growth: +30-50%/month",
      "Time saved: 8+ hours/week"
    ]
  }
},
{
  icon: DollarSign,
  title: "Invoice & Payment Follow-up Automation",
  description: "Auto-send invoices, payment reminders, and late payment alerts reduce invoice cycle time by 50%.",
  features: ["Automatic invoice generation", "Escalating reminders", "Late payment alerts", "Payment tracking"],
  details: {
    title: "Invoice & Payment Follow-up Automation",
    pricing: [
      {
        name: "Starter",
        price: "$199",
        period: "/month",
        description: "Freelancers",
        includes: ["Invoice automation", "Basic reminders", "Payment tracking", "Email support"]
      },
      {
        name: "Professional",
        price: "$499",
        period: "/month",
        description: "Small businesses",
        includes: ["All Starter features", "Multi-touch reminders", "Late payment alerts", "Payment gateway integration", "Analytics", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$999",
        period: "/month",
        description: "Large companies",
        includes: ["All Professional features", "Custom workflows", "Advanced reporting", "API access", "White-label options", "24/7 support"]
      }
    ],
    attraction: "Stop chasing unpaid invoices. Get paid faster with automated reminders and clear payment tracking.",
    freebies: [
      "Invoice template customization",
      "Payment terms optimization guide"
    ],
    benefits: [
      "Get paid 20-30 days faster",
      "Reduce unpaid invoices by 40%",
      "Stop manual payment chasing",
      "Clear payment status visibility",
      "Improve cash flow by 25%"
    ],
    outcomes: [
      "Invoice payment time: 20-30 days faster",
      "Unpaid invoice rate reduction: 40%",
      "Cash collection rate: 95%+",
      "DSO (Days Sales Outstanding): -25 days"
    ]
  }
},
{
  icon: TrendingUp,
  title: "Lead Scoring & Sales Pipeline Builder",
  description: "Automatically score leads by likelihood to buy, build a transparent sales pipeline, and forecast revenue.",
  features: ["AI-powered lead scoring", "Real-time pipeline visualization", "Predictive close dates", "Win/loss analysis"],
  details: {
    title: "Lead Scoring & Sales Pipeline Builder",
    pricing: [
      {
        name: "Starter",
        price: "$599",
        period: "/month",
        description: "Sales teams",
        includes: ["Lead scoring", "Pipeline tracking", "Basic analytics", "Email support"]
      },
      {
        name: "Professional",
        price: "$1,299",
        period: "/month",
        description: "Growing sales organizations",
        includes: ["All Starter features", "Predictive close dates", "Revenue forecasting", "Deal alerts", "Win/loss analysis", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$2,499",
        period: "/month",
        description: "Large enterprises",
        includes: ["All Professional features", "Custom scoring models", "Advanced analytics", "API access", "Team management", "24/7 support"]
      }
    ],
    attraction: "Know exactly which leads to chase and when they'll close. Build a predictable, data-driven sales machine.",
    freebies: [
      "Sales training workshop (2 sessions)",
      "Deal-closing script library"
    ],
    benefits: [
      "Focus sales effort on high-probability deals",
      "Forecast revenue accurately (within 10%)",
      "Identify deal bottlenecks automatically",
      "Increase sales productivity by 30-40%"
    ],
    outcomes: [
      "Lead scoring accuracy: 85-90%",
      "Sales forecast accuracy: 90%+",
      "Deal close rate improvement: 20-30%",
      "Sales productivity increase: +35%",
      "Pipeline visibility: 100% transparent"
    ]
  }
},
{
  icon: Zap,
  title: "Form Submission to CRM Instant Sync",
  description: "Auto-sync form responses, survey answers, and contact info directly to your CRM no manual data entry.",
  features: ["Multi-form integration", "Smart field mapping", "Real-time sync", "Automatic tagging"],
  details: {
    title: "Form Submission to CRM Instant Sync",
    pricing: [
      {
        name: "Starter",
        price: "$149",
        period: "/month",
        description: "Getting started",
        includes: ["Form integration", "Basic sync", "Email support"]
      },
      {
        name: "Professional",
        price: "$349",
        period: "/month",
        description: "Growing businesses",
        includes: ["All Starter features", "Multi-form support", "Smart mapping", "Auto-tagging", "Duplicate detection", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$749",
        period: "/month",
        description: "Large operations",
        includes: ["All Professional features", "Unlimited forms", "Custom workflows", "Advanced analytics", "API access", "24/7 support"]
      }
    ],
    attraction: "Every form response lands in your CRM instantly. No more copy-paste, no more missed data.",
    freebies: [
      "Contact form optimization recommendations",
      "CRM field structure optimization"
    ],
    benefits: [
      "Zero manual data entry (100% automated)",
      "No data loss from form submissions",
      "Instant lead data availability",
      "Save 5+ hours/week on data entry"
    ],
    outcomes: [
      "Data sync latency: < 1 minute",
      "Data accuracy: 99.9%",
      "Manual data entry time: 0 hours",
      "CRM data freshness: 100%"
    ]
  }
},
{
  icon: Star,
  title: "Automated Review & Reputation Management",
  description: "Collect customer reviews automatically, respond to negative reviews, and monitor your online reputation 24/7.",
  features: ["Automated review requests", "Multi-platform monitoring", "AI-suggested responses", "Reputation tracking"],
  details: {
    title: "Automated Review & Reputation Management",
    pricing: [
      {
        name: "Starter",
        price: "$299",
        period: "/month",
        description: "Small businesses",
        includes: ["Review requests", "Google monitoring", "Basic alerts", "Email support"]
      },
      {
        name: "Professional",
        price: "$699",
        period: "/month",
        description: "Growing businesses",
        includes: ["All Starter features", "Multi-platform monitoring", "AI responses", "Reputation tracking", "Monthly reports", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$1,399",
        period: "/month",
        description: "Large organizations",
        includes: ["All Professional features", "Advanced analytics", "Team management", "Custom workflows", "API access", "24/7 support"]
      }
    ],
    attraction: "Turn satisfied customers into advocates. Automate review collection and protect your reputation online.",
    freebies: [
      "Review response template library",
      "Reputation management strategy guide"
    ],
    benefits: [
      "50% more 5-star reviews (vs manual requests)",
      "Respond faster to negative reviews",
      "Build trust with potential customers",
      "Improve local SEO rankings significantly"
    ],
    outcomes: [
      "Review collection rate: +50%",
      "Average rating improvement: +0.5 stars",
      "Review response rate: 95%+",
      "Negative review resolution: 70%"
    ]
  }
},
{
  icon: Megaphone,
  title: "Bulk SMS & Email Campaign Broadcaster",
  description: "Send personalized SMS or email campaigns to thousands of customers in seconds track opens and clicks.",
  features: ["Segmented targeting", "Template builder", "Personalization at scale", "Real-time tracking"],
  details: {
    title: "Bulk SMS & Email Campaign Broadcaster",
    pricing: [
      {
        name: "Starter",
        price: "$249",
        period: "/month",
        description: "Small campaigns",
        includes: ["Email campaigns", "Basic templates", "List management", "Email support"]
      },
      {
        name: "Professional",
        price: "$599",
        period: "/month",
        description: "Growing campaigns",
        includes: ["All Starter features", "SMS + Email", "Advanced templates", "Segmentation", "Analytics", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$1,199",
        period: "/month",
        description: "Large-scale campaigns",
        includes: ["All Professional features", "Unlimited contacts", "Advanced analytics", "API access", "Custom integrations", "24/7 support"]
      }
    ],
    attraction: "Launch campaigns to 1,000+ customers instantly. Direct channel to customer inboxes and phones.",
    freebies: [
      "SMS copywriting best practices guide",
      "Campaign template starter pack"
    ],
    benefits: [
      "Reach customers directly (phones + inboxes)",
      "SMS: 40-60% open rate (vs email: 25-35%)",
      "Send to 10,000 in < 10 minutes",
      "Track every click and conversion"
    ],
    outcomes: [
      "Campaign delivery: 99%+ success rate",
      "SMS open rate: 40-60%",
      "Email open rate: 25-35%",
      "Click-through rate: 5-15%"
    ]
  }
},
{
  icon: Shield,
  title: "Cancellation & Churn Recovery Automation",
  description: "Automatically detect cancellation intent, offer incentives, and recover lost customers before they leave.",
  features: ["Churn prediction AI", "Prevention workflows", "Win-back campaigns", "Retention metrics"],
  details: {
    title: "Cancellation & Churn Recovery Automation",
    pricing: [
      {
        name: "Starter",
        price: "$399",
        period: "/month",
        description: "Growing SaaS",
        includes: ["Churn alerts", "Basic prevention", "Email sequences", "Email support"]
      },
      {
        name: "Professional",
        price: "$899",
        period: "/month",
        description: "Mid-market",
        includes: ["All Starter features", "AI prediction", "Multi-touch workflows", "Personalized offers", "Analytics", "Priority support"]
      },
      {
        name: "Enterprise",
        price: "$1,799",
        period: "/month",
        description: "Large enterprises",
        includes: ["All Professional features", "Advanced AI", "Win-back campaigns", "Custom workflows", "API access", "24/7 support"]
      }
    ],
    attraction: "Save 20% of customers before they cancel. Recover lost revenue automatically with smart retention.",
    freebies: [
      "Retention script library",
      "Customer lifecycle analysis"
    ],
    benefits: [
      "Prevent 15-25% of cancellations",
      "Recover 5-10% of churned customers",
      "Reduce churn rate by 20%",
      "Increase customer lifetime value by 30%"
    ],
    outcomes: [
      "Cancellation prevention rate: 20%",
      "Win-back conversion rate: 5-10%",
      "Churn rate reduction: 20%",
      "LTV improvement: +30%",
      "Revenue retention: +$10-20k/month (avg)"
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
            Our AI Automation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Outcome-driven automation services designed to increase revenue, reduce costs, and eliminate manual work.
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
