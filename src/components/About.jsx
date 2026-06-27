export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Style Block Khusus Animasi - Diperbaiki agar Terkunci di Pusat Objek */}
      <style>{`
        @keyframes float-short {
          0%, 100% { transform: translateY(-100px) scale(1.6); } /* Memperbesar subjek foto 40% tanpa merusak layout luar */
          50% { transform: translateY(-110px) scale(1.6); }   /* Efek melayang naik-turun tetap seimbang */
        }
        @keyframes glow-breath {
          0%, 100% { 
            transform: translate(-5%, 1%) scale(1.2); 
            opacity: 1; 
            filter: blur(40px); 
          }
          50% { 
            transform: translate(-5%, 1%) scale(1.35); /* Membesar seirama dengan lekukan foto */
            opacity: 0.45; 
            filter: blur(55px); 
          }
        }
        .animate-float-avatar {
          animation: float-short 4s ease-in-out infinite;
          transform-origin: center center;
        }
        .animate-glow-breath {
          animation: glow-breath 4s ease-in-out infinite;
          transform-origin: center center;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Atas: Komponen Tag & Heading Utama */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Tag Kapsul: Full Cyan */}
          <div className="px-4 py-1.5 rounded-full border border-cyan-neon bg-cyan-neon/10 text-cyan-neon text-xs font-bold tracking-widest mb-6 flex items-center gap-2">
            <span>✦</span> ABOUT ME
          </div>
          
          <h2 className="font-unbounded text-4xl md:text-5xl font-black leading-tight uppercase max-w-4xl tracking-tight text-white">
            DESIGN WITH INTENTION, <br />
            BUILD WITH <span className="bg-gradient-to-r from-cyan-neon to-purple-neon bg-clip-text text-transparent">SOUL</span>.
          </h2>
        </div>

        {/* Arsitektur Utama: Grid 3 Kolom Proposional */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* KOLOM KIRI: Sub-heading Tebal & Deskripsi Tipis */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug tracking-wide">
              I bridge system logic with design intuition — turning complex structures into adaptive interfaces people <span className="text-cyan-neon">enjoy.</span>
            </h3>
            <p className="text-sm text-text-muted leading-relaxed font-light text-justify md:text-left">
              Navigating through technical bottlenecks independently has shaped me into an agile learner. I don't just design or code; I engineer resilient digital experiences from the ground up.
            </p>
          </div>

          {/* KOLOM TENGAH: Pembungkus Dioptimalkan Agar Kompak & Presisi */}
          <div className="relative flex justify-center items-center h-[400px]">
            
            {/* SHADOW UNGU NEON: Terkunci Sempurna di Tengah Menggunakan translate-x/y asli */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-60 bg-purple-neon rounded-full opacity-80 pointer-events-none z-0 animate-glow-breath"></div>
            
            {/* FOTO UTAMA: Subjek membesar maksimal & noda transparan terkompensasi lewat CSS scale */}
            <img 
              src="/images/foto-about-cutout.png" 
              alt="Achmad Hamdani Hilman Portrait" 
              className="relative z-10 w-full max-w-none h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] animate-float-avatar"
            />
          </div>

          {/* KOLOM KANAN: 3 Poin Keunggulan */}
          <div className="flex flex-col gap-4">
            
            {/* Pembungkus Poin 01 */}
            <div className="border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-5 flex flex-col gap-2 transition-colors duration-300 hover:border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-unbounded font-bold text-text-muted/40 tracking-wider">01</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Adaptive Mindset</h4>
              </div>
              <p className="text-xs text-text-muted pl-7 leading-relaxed font-light">
                Thrive in ambiguity. I treat technical bottlenecks as milestones to research and learn independently.
              </p>
            </div>

            {/* Pembungkus Poin 02 */}
            <div className="border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-5 flex flex-col gap-2 transition-colors duration-300 hover:border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-unbounded font-bold text-text-muted/40 tracking-wider">02</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">End-to-End Process</h4>
              </div>
              <p className="text-xs text-text-muted pl-7 leading-relaxed font-light">
                From system analysis blueprints and Figma wireframes to clean frontend execution.
              </p>
            </div>

            {/* Pembungkus Poin 03 */}
            <div className="border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-5 flex flex-col gap-2 transition-colors duration-300 hover:border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-unbounded font-bold text-text-muted/40 tracking-wider">03</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product-Minded</h4>
              </div>
              <p className="text-xs text-text-muted pl-7 leading-relaxed font-light">
                Obsessed with details that turn a good interface into a functional, user-friendly digital product.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}