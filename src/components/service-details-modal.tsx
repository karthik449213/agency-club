"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  includes: string[];
}

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    pricing: PricingTier[];
    attraction: string;
    freebies: string[];
    benefits: string[];
    outcomes: string[];
  };
}

export function ServiceDetailsModal({
  isOpen,
  onClose,
  service,
}: ServiceDetailsProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div className="pointer-events-auto max-w-2xl w-full bg-card rounded-2xl border border-border shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-card border-b border-border px-6 py-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {service.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-8 space-y-8">
            {/* Pricing */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                Pricing Plans
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.pricing.map((tier, index) => (
                  <a
                    key={index}
                    href={`https://wa.me/917075543886?text=Hi! I'm interested in the ${encodeURIComponent(tier.name)} plan for ${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                      <div className="text-sm font-medium text-primary mb-2">{tier.name}</div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {tier.price}
                        <span className="text-sm text-muted-foreground font-normal">{tier.period}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{tier.description}</p>
                      <ul className="space-y-2">
                        {tier.includes.slice(0, 3).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-xs">
                            <Check className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {tier.includes.length > 3 && (
                        <p className="text-xs text-primary mt-2">+{tier.includes.length - 3} more features</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Attraction */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                Why This Service?
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                {service.attraction}
              </p>
            </div>

            {/* Includes */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                What's Included (varies by plan)
              </h3>
              <p className="text-sm text-muted-foreground">
                Each pricing tier includes core features plus additional capabilities. Click on any plan above to get started with your preferred option.
              </p>
            </div>

            {/* Freebies */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                Freebies (No Extra Cost)
              </h3>
              <div className="space-y-2 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-lg p-4">
                {service.freebies.map((freebie, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm md:text-base text-foreground">
                      {freebie}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                Key Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-muted/20"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                    <span className="text-sm md:text-base text-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                Expected Outcomes
              </h3>
              <div className="space-y-3">
                {service.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10"
                  >
                    <div className="text-primary font-bold text-sm mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-sm md:text-base text-foreground">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border bg-primary/5 p-4 rounded-lg">
              <p className="text-sm text-foreground text-center">
                Ready to get started? Select your preferred plan above to connect with our team via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
