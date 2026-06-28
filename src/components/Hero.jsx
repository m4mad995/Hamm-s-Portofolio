export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-20 md:pt-27 md:pb-32 min-h-screen flex items-center relative overflow-hidden">
      {/* Custom Style Block untuk Animasi Putar & Efek Glassmorphic Kapsul */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .glass-capsule {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            0 12px 32px 0 rgba(0, 0, 0, 0.6);
        }
        /* Animasi Kustom Scroll: Charge Up -> Release Down */
        @keyframes charge-snap {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-8px); opacity: 0.3; }  /* Charge up lambat */
          48% { transform: translateY(14px); opacity: 1; }     /* Release/snap down cepat */
          64% { transform: translateY(-2px); opacity: 0.8; }
          75% { transform: translateY(0); opacity: 0.4; }
        }
        .animate-scroll-physics {
          animation: charge-snap 2.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">
        
        {/* Left Column: Teks Utama & Kapsul Lokasi */}
        <div className="flex flex-col items-start z-10">
          
          {/* Tag Status yang Diperbarui: Border Putih-Abu, Background Gelap, Simbol Hijau */}
          <div className="px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-text-muted text-xs font-bold tracking-widest mb-8 flex items-center gap-2">
            <span className="text-green-500 font-black">✦</span> AVAILABLE FOR INTERNSHIP
          </div>
          
          <h1 className="font-unbounded text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 uppercase">
            SHAPING <span className="font-black text-transparent block" style={{ WebkitTextStroke: "1px white" }}>DIGITAL</span>
            <span className="bg-gradient-to-r from-cyan-neon to-purple-neon bg-clip-text text-transparent">
              SYSTEM
            </span>
          </h1>

          <p className="text-sm md:text-base text-text-muted max-w-lg mb-10 leading-relaxed">
            I'm <span className="text-white font-semibold">  Hamdani</span> - an end-to-end web creator with a strong passion for seamless user experience. I design intuitive interfaces and bring them to life with clean, resilient code.
          </p>

          {/* CTA Buttons dengan SVG Icons Premium */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-neon to-purple-neon text-white font-bold hover:opacity-90 transition-opacity flex items-center gap-2.5 shadow-[0_0_20px_-5px_rgba(0,243,255,0.5)]"
            >
              {/* Monitor/Screen Icon Vector */}
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect width="20" height="14" x="2" y="3" rx="2" />
                <path d="M12 17v4M8 21h8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>View Project</span>
            </a>
            
            <a 
              href="/images/CV Achmad Hamdani Hilman.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border-[2px] border-white/20 font-bold hover:border-cyan-neon hover:text-cyan-neon transition-colors flex items-center gap-2.5"
            >
              {/* Download/Arrow Down Icon Vector */}
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Tag Lokasi Kapsul */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted bg-dark-card px-4 py-2 rounded-full border border-white/5 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Surabaya, ID — Available for Remote
          </div>
        </div>

        {/* Right Column: Premium Card Setup dengan Shadow Proporsional Muter */}
        <div className="relative flex justify-center items-center isolate">
          <div className="relative w-full max-w-md aspect-[4/5]">
            
            {/* Efek Shadow Berputar: Sebangun, Radius Sama, 10% Lebih Besar (scale-110) */}
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#00f3ff,#9d00ff,#00f3ff)] rounded-3xl blur-[20px] scale-110 opacity-75 animate-spin-slow pointer-events-none z-0"></div>
            
            {/* Card Utama (Diam) */}
            <div className="absolute inset-0 z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-dark-card transition-transform duration-700 ease-out hover:scale-[1.03]">
              
              <img 
                src="/images/foto-hero.jpg" 
                alt="Achmad Hamdani Hilman" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.05]" 
              />
              
              {/* Overlay Nama Kapsul Glassmorphism */}
              <div className="glass-capsule absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] rounded-full py-2 px-6 text-center z-20">
                <h3 className="text-white font-bold text-base md:text-lg tracking-wide">
                  Achmad Hamdani Hilman
                </h3>
                <p className="text-text-muted text-xs font-medium mt-0.5 tracking-wider">
                  Junior Web Design & Dev
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20">
        <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-[0.25em] select-none">
          Scroll
        </span>
        <div className="animate-scroll-physics">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}