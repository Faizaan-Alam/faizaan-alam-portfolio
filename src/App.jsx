import About from "./components/About"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Hobbies from "./components/Hobbies"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Sports from "./components/Sports"

export default function App() {
  return (
    <>
      <a href="#about" className="skip-link btn btn-primary btn-sm">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hobbies />
        <Sports />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
