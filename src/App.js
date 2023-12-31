import About from "./components/about/About";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </div>
  );
}

export default App;
