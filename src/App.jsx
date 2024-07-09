import "./App.css";
import Download from "./components/Download";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StepByStep from "./components/StepByStep";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
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
      </main>
    </>
  );
}

export default App;
