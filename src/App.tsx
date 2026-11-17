import { Navbar } from './components/Navbar';
import { RadialNav } from './components/RadialNav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ThrongletSmartPet } from './components/ThrongletSmartPet';
function App() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] dark:bg-[#0a0a0c] text-slate-900 dark:text-gray-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <Navbar />
      <RadialNav />
      <main className="w-full">
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Contact />
      </main>
      <ThrongletSmartPet />
    </div>
  );
}

export default App;