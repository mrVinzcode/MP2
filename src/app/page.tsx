import Image from "next/image";
import Hero from "./components/hero";
import Feature from "./components/Feature";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Survey from "./components/Survey";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Services />
      <Menu />
      <Survey />
      <Footer />
    </main>
  );
}
