import Hero from "../components/hero";
import Feature from "../components/Feature";
import Services from "../components/Services";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Services />
      <Menu />
      <Testimonials />
      <Footer />
    </main>
  );
}
