import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import HomeTuition from "./pages/HomeTuition"
import BecomeTutor from "./pages/BecomeTutor"
import Contact from "./pages/Contact"
import AboutUS from "./pages/AboutUs"
import Services from "./pages/Services"
import ServiceDetails from "./pages/ServiceDetails"
import Gallery from "./pages/Gallery"
import Student from "./pages/Student"
import FloatingActions from "./components/FloatingActions"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/student" element={<Student/>} />
        <Route path="/become-tutor" element={<BecomeTutor />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
      <FloatingActions/>
    </>
  )
}

export default App
