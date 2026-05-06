import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Github } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Lead Capture & Auto-Qualifier Bot", href: "#services" },
    { name: "WhatsApp Sales Automation Engine", href: "#services" },
    { name: "AI Customer Support Agent", href: "#services" },
    { name: "Reputation Management & Review Automation", href: "#services" },
    { name: "Bulk SMS & Email Campaign Broadcaster", href: "#services" },
    { name: "Workflow & Operations Automation", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Documentation", href: "#" },
    { name: "Support", href: "#contact" },
  ],
};

/*const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];*/

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Align Berg
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Transforming businesses through intelligent automation solutions.
              We help companies streamline operations, reduce costs, and scale
              efficiently with AI-powered tools.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="mr-3" />
                <a href="mailto:karthikpiinasi@gmail.com">karthikpiinasi@gmail.com</a>
              </div>
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone size={18} className="mr-3" />
                <a href="tel:+917075543886">+91 7075543886</a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin size={18} className="mr-3" />
                Andhra Pradesh, India
              </div>
            </div>

            {/* Social Links 
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            */}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Align Berg. All rights reserved.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
