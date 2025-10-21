"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "TechCorp", logo: "/logos/techcorp.svg" },
  { name: "DataFlow", logo: "/logos/dataflow.svg" },
  { name: "AutoSys", logo: "/logos/autosys.svg" },
  { name: "CloudTech", logo: "/logos/cloudtech.svg" },
  { name: "InnovateLab", logo: "/logos/innovatelab.svg" },
  { name: "NextGen", logo: "/logos/nextgen.svg" },
];

export function TrustedBy() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their operations
            with our automation solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 rounded-lg bg-background border border-border hover:border-primary/20 transition-colors duration-300"
            >
              <div className="text-lg font-semibold text-muted-foreground">
                {company.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
