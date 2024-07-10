import "./App.css";
import Download from "./components/Download";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StepByStep from "./components/StepByStep";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StepByStep />
        <Feature />
        <Testimonial />
        <Download />
        <Pricing />
        <Faq />
        <Footer />
      </main>
    </>
  );
}

export default App;
