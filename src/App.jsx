import "./App.css";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StepByStep from "./components/StepByStep";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StepByStep />
        <Feature />
      </main>
    </>
  );
}

export default App;
