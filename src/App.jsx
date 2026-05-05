import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import GitHubStats from './components/GitHubStats'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Experience />
        <Education />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
