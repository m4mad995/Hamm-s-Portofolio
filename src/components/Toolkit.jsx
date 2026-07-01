import { useEffect, useRef, useState } from "react";

export default function Toolkit() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Mengaktifkan Intersection Observer untuk menangkap scroll masuk & keluar secara berulang
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mengubah state visibility secara berkala untuk memicu trigger animasi bolak-balik
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12, // Animasi aktif jika minimal 12% area section memasuki viewport
        rootMargin: "0px 0px -40px 0px" // Batas toleransi ruang potong di bagian bawah layar
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="toolkit" 
      ref={sectionRef}
      className="py-20 bg-dark-bg relative overflow-hidden"
    >
      {/* Style Block Khusus untuk Transisi Bernuansa Organik/Springy (Cubic-Bezier Kustom) */}
      <style>{`
        .ease-spring {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Atas Kiri: Tag Kapsul Berwarna Cyan Kompleks */}
        <div className="flex justify-start mb-6">
          <div 
            className={`px-4 py-1.5 rounded-full border border-cyan-neon bg-cyan-neon/10 text-cyan-neon text-xs font-bold tracking-widest flex items-center gap-2 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span>✦</span> TOOL KIT
          </div>
        </div>

        {/* 1. BARIS HEADING & SUB-HEADING: Animasi 'Reveal from Side' (Kiri & Kanan Berlawanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10 overflow-hidden">
          {/* Heading Utama - Muncul dari Kiri */}
          <div 
            className={`lg:col-span-7 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <h2 className="font-unbounded text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              TOOLS OF THE <span className="bg-gradient-to-r from-cyan-neon to-purple-neon bg-clip-text text-transparent">TRADE</span>
            </h2>
          </div>
          
          {/* Sub-heading/Deskripsi - Muncul dari Kanan */}
          <div 
            className={`lg:col-span-5 flex items-center transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <p className="text-xs md:text-sm text-text-muted leading-relaxed font-light border-l border-white/10 lg:pl-6">
              A curated stack I reach for daily — bridging the gap between pixel-perfect user interface design and structural back-end logic.
            </p>
          </div>
        </div>

        {/* 2. DUA CONTAINER UTAMA: Efek 'Fade-In Scale' Sinkron Bersama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6 max-w-[80%] lg:max-w-full mx-auto">
          
          {/* KONTAINER 1: UI & Front End */}
          <div 
            className={`rounded-3xl p-8 md:p-10 border border-white/10 bg-gradient-to-br from-cyan-neon/20 via-dark-card/95 to-purple-neon/20 shadow-2xl transition-all duration-700 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Judul Kontainer di Tengah + Garis Pendek Ungu Rounded */}
            <div className="flex flex-col items-center mb-8">
              <h3 className="text-sm font-bold text-cyan-neon uppercase tracking-widest text-center">
                UI & Front End
              </h3>
              <div className="w-10 h-1 bg-purple-neon rounded-full mt-2.5"></div>
            </div>

            {/* 3. TOOL CARDS: Efek 'Staggered Pop-up' Organik */}
            <div className="grid grid-cols-2 gap-4">
              <div 
                className={`bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-spring ${
                  isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-4 opacity-0"
                } delay-100 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo figma.png" alt="Figma" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Figma</span>
              </div>

              {/* Canva — Delay 200ms */}
              <div 
                className={`bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-spring ${
                  isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-4 opacity-0"
                } delay-200 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo canva.png" alt="Canva" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Canva</span>
              </div>

              {/* HTML-5 — Delay 300ms */}
              <div 
                className={`bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-spring ${
                  isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-4 opacity-0"
                } delay-300 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo html.png" alt="Html-5" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Html-5</span>
              </div>

              {/* Tailwind — Delay 400ms */}
              <div 
                className={`bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-spring ${
                  isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-4 opacity-0"
                } delay-400 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo tailwind.png" alt="Tailwind" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Tailwind</span>
              </div>
            </div>
          </div>

          {/* KONTAINER 2: Development Stack */}
          <div 
            className={`rounded-3xl p-8 md:p-10 border border-white/10 bg-gradient-to-br from-cyan-neon/20 via-dark-card/95 to-purple-neon/20 shadow-2xl transition-all duration-700 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Judul Kontainer di Tengah + Garis Pendek Ungu Rounded */}
            <div className="flex flex-col items-center mb-8">
              <h3 className="text-sm font-bold text-cyan-neon uppercase tracking-widest text-center">
                Development Stack
              </h3>
              <div className="w-10 h-1 bg-purple-neon rounded-full mt-2.5"></div>
            </div>

            {/* 3. TOOL CARDS: Efek 'Staggered Pop-up' Organik */}
            <div className="grid grid-cols-2 gap-4">
              <div 
                className={`bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-spring ${
                  isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-4 opacity-0"
                } delay-100 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo js.png" alt="Javascript" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Javascript</span>
              </div>

              {/* PHP — Delay 200ms */}
              <div 
                className={`bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-spring ${
                  isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-4 opacity-0"
                } delay-200 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo php.png" alt="PHP" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">PHP</span>
              </div>

              {/* Laravel — Delay 300ms */}
              <div 
                className={`bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-spring ${
                  isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-4 opacity-0"
                } delay-300 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/loho laravel.png" alt="Laravel" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Laravel</span>
              </div>

              {/* VSC — Delay 400ms */}
              <div 
                className={`bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-spring ${
                  isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-4 opacity-0"
                } delay-400 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo vsc.png" alt="VSC" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">VSC</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4. SECTION 'ALSO FLUENT IN': Animasi 'Slide-Up Staggered' Berurutan Cepat */}
        <div className="flex flex-col lg:flex-row items-start justify-start gap-6 mt-8 overflow-hidden">
          <span 
            className={`font-unbounded text-sm md:text-base font-black text-white tracking-wider uppercase whitespace-nowrap pt-1 transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-[450ms]`}
          >
            ALSO FLUENT IN
          </span>
          
          {/* Wrapper Kapsul dengan Transisi Cascading Bertahap */}
          <div className="flex flex-wrap gap-3">
            {['Team Collaboration', 'Adaptive Problem Solving', 'Deadline-Driven', 'Agile Learner'].map((label, idx) => (
              <span 
                key={idx} 
                className={`px-5 py-2.5 border-2 border-white/15 bg-white/[0.02] rounded-full text-xs md:text-sm text-text-muted font-medium tracking-wide shadow-inner transition-all duration-500 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{
                  // Kalkulasi delay bertingkat dinamis (berjalan tepat setelah semua tool cards selesai muncul)
                  transitionDelay: `${500 + idx * 75}ms`
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}