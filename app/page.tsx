import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />

      <div>
        <Products />
        <Story />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </div>

      <WhatsAppButton />
    </div>
  );
}
