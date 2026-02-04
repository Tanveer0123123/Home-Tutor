import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Subjects from "./pages/Subjects"
import HomeTuition from "./pages/HomeTuition"
import BecomeTutor from "./pages/BecomeTutor"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/home-tuition" element={<HomeTuition />} />
        <Route path="/become-tutor" element={<BecomeTutor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
