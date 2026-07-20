import CompanyLogos from "./components/layout/Homepage/CompanyLogos/CompanyLogos";
import CTA from "./components/layout/Homepage/CTA/CTA";
import Hero from "./components/layout/Homepage/Hero/Hero";
import Navbar from "./components/layout/Navbar/Navbar";
import Services from "./components/layout/Homepage/Services/Services";
import CaseStudies from "./components/layout/Homepage/CaseStudies/CaseStudies";
import WorkingProcess from "./components/layout/Homepage/WorkingProcess/WorkingProcess";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogos />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkingProcess />
    </>
  );
}

export default App;
