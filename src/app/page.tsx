import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Feature from "@/components/Feature";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import MenuTabs from "@/components/MenuTab";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Services />
      <MenuTabs />
      <Testimonials />
      <Contact />
      <GoogleMapComponent />
    </main>
  );
}
