"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState } from "react";

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    pricing: string;
    attraction: string;
    includes: string[];
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
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div className="pointer-events-auto max-w-2xl w-full bg-card rounded-2xl border border-border shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-primary/5 to-transparent border-b border-border px-6 py-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {service.title}
              </h2>
            </div>
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
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                💰 Pricing
              </h3>
              <p className="text-base md:text-lg text-foreground font-medium">
                {service.pricing}
              </p>
            </div>

            {/* Attraction */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                ✨ Why This Service?
              </h3>
              <p className="text-base text-foreground leading-relaxed">
                {service.attraction}
              </p>
            </div>

            {/* Includes */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                📦 What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border/50"
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Freebies */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                🎁 Freebies (No Extra Cost)
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
                🎯 Key Benefits
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
                🚀 Expected Outcomes
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
            <div className="pt-4 border-t border-border">
              <button className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
