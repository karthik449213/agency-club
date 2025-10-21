import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/sections/hero";
import { TrustedBy } from "@/sections/trusted-by";
import { Services } from "@/sections/services";
import { HowItWorks } from "@/sections/how-it-works";
import { CaseStudies } from "@/sections/case-studies";
import { Testimonials } from "@/sections/testimonials";
import { Pricing } from "@/sections/pricing";
import { Contact } from "@/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
