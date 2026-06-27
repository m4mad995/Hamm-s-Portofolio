export default function Marquee() {
  return (
    <div className="w-full bg-dark-bg border-y border-white/10 py-8 overflow-hidden relative flex items-center">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      
      {/* Infinite Wrapper */}
      <div className="animate-marquee-infinite flex whitespace-nowrap min-w-max items-center gap-4">
        {/* Render 4x repetisi agar animasi looping berjalan mulus tanpa patah */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center gap-6 md:gap-10 pr-6 md:pr-10 select-none">
            
            {/* ANALYZE: Outline Putar Transparan */}
            <span 
              className="font-unbounded text-4xl md:text-6xl lg:text-7xl font-black uppercase text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Analyze
            </span>
            
            {/* Star Separator */}
            <span className="text-cyan-neon font-black text-2xl md:text-4xl">✦</span>

            {/* DESIGN: Gradasi Solid Cyan ke Purple */}
            <span className="font-unbounded text-4xl md:text-6xl lg:text-7xl font-black uppercase bg-gradient-to-r from-cyan-neon to-purple-neon bg-clip-text text-transparent">
              Design
            </span>

            {/* Star Separator */}
            <span className="text-cyan-neon font-black text-2xl md:text-4xl">✦</span>

            {/* CODE: Solid Bold Putih */}
            <span className="font-unbounded text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white">
              Code
            </span>

            {/* Star Separator */}
            <span className="text-cyan-neon font-black text-2xl md:text-4xl">✦</span>

            {/* ADAPT: Outline Putar Transparan */}
            <span 
              className="font-unbounded text-4xl md:text-6xl lg:text-7xl font-black uppercase text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Adapt
            </span>

            {/* Star Separator */}
            <span className="text-cyan-neon font-black text-2xl md:text-4xl">✦</span>

            {/* REPEAT: Gradasi Solid Terbalik Purple ke Cyan */}
            <span className="font-unbounded text-4xl md:text-6xl lg:text-7xl font-black uppercase bg-gradient-to-r from-purple-neon to-cyan-neon bg-clip-text text-transparent">
              Repeat
            </span>

            {/* Last Star Separator */}
            <span className="text-cyan-neon font-black text-2xl md:text-4xl">✦</span>
            
          </div>
        ))}
      </div>
    </div>
  );
}