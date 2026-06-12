import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
// import TechStack from "../components/sections/TechStack";
import Services from "../components/sections/Services";
// import WhyChooseUs from "../components/sections/WhyChooseUs";
// import Projects from "../components/sections/Projects";
// import Process from "../components/sections/Process";
// import Stats from "../components/sections/Stats";
// import Testimonials from "../components/sections/Testimonials";
// import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <div className="bg-[#070A12] text-white overflow-hidden">
      <Navbar />

      <Hero />
      {/* <TechStack /> */}
      <Services />
      {/* <WhyChooseUs /> */}
      {/* <Projects /> */}
      {/* <Process /> */}
      {/* <Stats /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      <CTA />

      <Footer />
    </div>
  );
}