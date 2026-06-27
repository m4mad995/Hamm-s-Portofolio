export default function Toolkit() {
  return (
    <section id="toolkit" className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Atas Kiri: Tag Kapsul Berwarna Cyan Kompleks */}
        <div className="flex justify-start mb-6">
          <div className="px-4 py-1.5 rounded-full border border-cyan-neon bg-cyan-neon/10 text-cyan-neon text-xs font-bold tracking-widest flex items-center gap-2">
            <span>✦</span> TOOL KIT
          </div>
        </div>

        {/* Baris Heading & Deskripsi yang Saling Menyesuaikan Tinggi (Sesuai image_1b5a13.jpg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10">
          <div className="lg:col-span-7">
            <h2 className="font-unbounded text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-none">
              TOOLS OF THE <span className="bg-gradient-to-r from-cyan-neon to-purple-neon bg-clip-text text-transparent">TRADE</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center">
            <p className="text-xs md:text-sm text-text-muted leading-relaxed font-light border-l border-white/10 lg:pl-6">
              A curated stack I reach for daily — bridging the gap between pixel-perfect user interface design and structural back-end logic.
            </p>
          </div>
        </div>

        {/* 2 Kontainer Utama: Kombinasi Gradasi Diagonal Cyan & Ungu Neon Opacity ~20% */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          
          {/* KONTAINER 1: UI & Front End */}
          <div className="rounded-3xl p-8 md:p-10 border border-white/10 bg-gradient-to-br from-cyan-neon/20 via-dark-card/95 to-purple-neon/20 shadow-2xl">
            {/* Judul Kontainer di Tengah + Garis Pendek Ungu Rounded */}
            <div className="flex flex-col items-center mb-8">
              <h3 className="text-sm font-bold text-cyan-neon uppercase tracking-widest text-center">
                UI & Front End
              </h3>
              <div className="w-10 h-1 bg-purple-neon rounded-full mt-2.5"></div>
            </div>

            {/* Grid Item Software */}
            <div className="grid grid-cols-2 gap-4">
              {/* Figma */}
              <div className="bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo figma.png" alt="Figma" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Figma</span>
              </div>

              {/* Canva */}
              <div className="bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo canva.png" alt="Canva" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Canva</span>
              </div>

              {/* HTML-5 */}
              <div className="bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo html.png" alt="Html-5" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Html-5</span>
              </div>

              {/* Tailwind */}
              <div className="bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo tailwind.png" alt="Tailwind" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Tailwind</span>
              </div>
            </div>
          </div>

          {/* KONTAINER 2: Development Stack */}
          <div className="rounded-3xl p-8 md:p-10 border border-white/10 bg-gradient-to-br from-cyan-neon/20 via-dark-card/95 to-purple-neon/20 shadow-2xl">
            {/* Judul Kontainer di Tengah + Garis Pendek Ungu Rounded */}
            <div className="flex flex-col items-center mb-8">
              <h3 className="text-sm font-bold text-cyan-neon uppercase tracking-widest text-center">
                Development Stack
              </h3>
              <div className="w-10 h-1 bg-purple-neon rounded-full mt-2.5"></div>
            </div>

            {/* Grid Item Stack */}
            <div className="grid grid-cols-2 gap-4">
              {/* Javascript */}
              <div className="bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo js.png" alt="Javascript" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Javascript</span>
              </div>

              {/* PHP */}
              <div className="bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo php.png" alt="PHP" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">PHP</span>
              </div>

              {/* Laravel */}
              <div className="bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/loho laravel.png" alt="Laravel" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">Laravel</span>
              </div>

              {/* VSC */}
              <div className="bg-[#090a0f] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/[0.03] rounded-xl flex items-center justify-center p-3">
                  <img src="/icons/logo vsc.png" alt="VSC" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">VSC</span>
              </div>
            </div>
          </div>

        </div>

        {/* BARIS ALSO FLUENT IN: Jarak Lebih Rapat (mt-8), Teks Lebih Besar & Tebal, Label Kapsul Lebih Tebal */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mt-8">
          <span className="font-unbounded text-sm md:text-base font-black text-white tracking-wider uppercase whitespace-nowrap pt-1">
            ALSO FLUENT IN
          </span>
          
          {/* Wrapper Kapsul dengan Border Stroke Lebih Tebal (border-2) & Ukuran Lebih Mantap */}
          <div className="flex flex-wrap gap-3">
            {['Team Collaboration', 'Adaptive Problem Solving', 'Deadline-Driven', 'Agile Learner'].map((label, idx) => (
              <span 
                key={idx} 
                className="px-5 py-2.5 border-2 border-white/15 bg-white/[0.02] rounded-full text-xs md:text-sm text-text-muted font-medium tracking-wide shadow-inner"
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