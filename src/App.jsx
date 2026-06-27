import Navbar from "./components/Navbar";
// import Experiment from "./components/experiment";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ContactFooter from "./components/ContactFooter";
import { useEffect } from 'react'; // Memastikan useEffect sudah diimport

function App() {
  
  // 👇 1. TARUH FUNGSINYA DI SINI (Sebelum Return)
  useEffect(() => {
    // Memanggil API serverless yang sudah kita buat di folder api/projects.js
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        console.log("=== DATA DARI NOTION ===");
        console.log(data); // <--- Ini yang bakal kita intip di browser nanti
      })
      .catch((err) => console.error("Ada masalah koneksi API:", err));
  }, []); // Array kosong ini artinya fungsi hanya berjalan 1 kali pas web pertama dimuat

  // 👇 2. BATAS BAWAH LOGIKA, DI SINI BARU TAMPILAN VISUALNYA
  return (
    <div className="w-full min-h-screen bg-dark-bg text-white font-jakarta overflow-x-hidden">
      <Navbar />
      <main>
        {/* <Experiment /> */}
        <Hero />
        <Marquee />
        <About />
        <Toolkit />
        <Projects /> {/* Besok di Hari 2, data dari Notion akan kita oper ke sini */}
        <Certifications />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;