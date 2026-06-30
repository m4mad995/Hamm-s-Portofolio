import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Toolkit from "./components/Toolkit";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ContactFooter from "./components/ContactFooter";
import { useEffect } from 'react';
// 1. IMPORT LIBRARY LENIS CORE
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Opsional: Memastikan stylesheet dasar Lenis terpasang jika diperlukan

function App() {
  
  useEffect(() => {
    // 2. INISIALISASI LENIS SMOOTH SCROLL
    const lenis = new Lenis({
      duration: 1.2,          // Mengatur durasi kelembutan scroll (dalam detik)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fungsi easing empuk ala Apple/Premium Web
      direction: 'vertical',  // Arah scroll vertikal
      gestureDirection: 'vertical',
      smoothHandheld: true,   // Mengaktifkan smooth scroll di perangkat mobile/touch
      touchMultiplier: 2,
    });

    // 3. LOGIKA ANIMASI FRAME BY FRAME (TICKER)
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // =========================================================================
    // TAMBAHAN: Logika Global Interseptor Tautan Klik untuk Smooth Scroll Lenis
    // =========================================================================
    const handleAnchorClick = (e) => {
      // Mengambil elemen terdekat yang berupa tag <a> jika ada klik
      const targetAnchor = e.target.closest('a');
      
      if (targetAnchor) {
        const href = targetAnchor.getAttribute('href');
        
        // Memastikan tautan diawali dengan '#' dan bukan hanya '#' kosong
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault(); // Mencegah lompatan/teleportasi instan bawaan browser
          
          const targetElement = document.querySelector(href);
          if (targetElement) {
            // Memerintahkan Lenis untuk bergulir mulus ke elemen tujuan
            lenis.scrollTo(targetElement, {
              offset: 0, // Sesuaikan angka ini jika ada navbar fixed yang menutupi konten (misal: -80)
              immediate: false,
              duration: 1.2
            });
          }
        }
      }
    };

    // Memasang listener secara global pada dokumen agar menangkap klik dari komponen Navbar/Hero/Footer
    document.addEventListener('click', handleAnchorClick);
    // =========================================================================

    // 4. FETCH DATA DARI NOTION (Kode Asli Anda)
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        console.log("=== DATA DARI NOTION ===");
        console.log(data);
      })
      .catch((err) => console.error("Ada masalah koneksi API:", err));

    // 5. CLEANUP FUNCTION: Menghancurkan instansiasi Lenis & melepas listener saat komponen unmount
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-dark-bg text-white font-jakarta overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Toolkit />
        <Projects />
        <Certifications />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;