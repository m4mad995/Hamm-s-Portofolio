import { useRef, useState, useEffect } from "react";

export default function Certification() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 1. SUNTIKKAN STATE: Menampung data sertifikasi dari backend
  const [certData, setCertData] = useState([]);

  // 2. SUNTIKKAN EFFECT: Fetching data dari API /api/certifications saat komponen dimuat
  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch('/api/certifications');
        const data = await response.json();
        setCertData(data);
      } catch (error) {
        console.error("Gagal mengambil data sertifikasi:", error);
      }
    };
    fetchCertifications();
  }, []);

  // LOGIKA DETEKSI SCROLL: Memicu dan meriset animasi saat keluar-masuk viewport bolak-balik
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 } // Terpicu saat 15% area section masuk ke dalam viewport
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

  // Handler Fungsi Navigasi Tombol Slider Kanan-Kiri (Sesuai kode asli)
  const handleScroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      // Menghitung jarak geser berdasarkan lebar card + gap interior
      const scrollAmount = current.clientWidth >= 768 ? 460 : 340; 
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="certification" 
      ref={sectionRef}
      className="py-20 bg-dark-bg text-white relative overflow-hidden"
    >
      {/* Custom CSS Block untuk menghilangkan track scrollbar bawaan browser */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. TAG SECTION: Kapsul Cyan Sesuai Gambar Design */}
        <div className="flex justify-start mb-6">
          <div className={`px-4 py-1.5 rounded-full border border-cyan-neon bg-cyan-neon/10 text-cyan-neon text-xs font-bold tracking-widest flex items-center gap-2 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span>✦</span> VERIFICATIONS
          </div>
        </div>

        {/* 2. HEADER LINE: Title & Tombol Navigasi Kanan-Kiri */}
        <div className="flex justify-between items-center w-full mb-12">
          <h2 className={`font-unbounded text-3xl md:text-5xl font-black uppercase tracking-tight transition-all duration-500 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            CERTIFICAT<span className="bg-gradient-to-r from-cyan-neon to-purple-neon bg-clip-text text-transparent">IONS</span>
          </h2>
          
          {/* Slider Controls Circle Action Buttons */}
          <div className={`flex items-center gap-3 transition-all duration-500 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <button 
              onClick={() => handleScroll("left")}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 bg-transparent transition-all duration-300 active:scale-95"
              aria-label="Previous Certificate"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={() => handleScroll("right")}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 bg-transparent transition-all duration-300 active:scale-95"
              aria-label="Next Certificate"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3. CAROUSEL WRAPPER: Diperbaiki dengan pt-12 dan -mt-12 agar pergerakan hover naik & glow tidak terpotong */}
        <div 
          ref={sliderRef}
          className={`scrollbar-none flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-12 pb-12 -mt-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-2 translate-x-10"
          }`}
        >
          {/* 3. MAPPING DATA DINAMIS: Menggunakan array state certData dari API */}
          {certData.map((cert, index) => {
            // Logika stagger dinamis: kartu 1 delay-100, kartu 2 delay-200, kartu 3 delay-300, dan berulang seterusnya
            const delayInMs = ((index % 3) + 1) * 100;
            
            return (
              <div 
                key={cert.id || index} 
                style={{ transitionDelay: isVisible ? `${delayInMs}ms` : '0ms' }}
                className={`group relative z-0 w-[310px] md:w-[430px] flex-shrink-0 bg-dark-card p-2 py-2 rounded-3xl border border-white/5 flex flex-col justify-between shadow-2xl snap-start transition-all duration-500 ease-out hover:-translate-y-2 ${
                  isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
                }`}
              >
                
                {/* SUNTIKKAN EFEK BENTO AMBIENT GLOW (Tetap tebal sesuai keinginan Anda, dilapisi z-[-1] di belakang kartu) */}
                <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-[-1]">
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyan-500/25 rounded-full blur-[60px]" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/25 rounded-full blur-[60px]" />
                </div>

                {/* Inner Container Pembungkus Gambar dengan Padding Interior */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/30 p-1 flex items-center justify-center">
                  {/* MAPPING DINAMIS: Sumber Gambar dengan Fallback */}
                  <img 
                    src={cert.imageLink || '/placeholder-cert.png'} 
                    alt={cert.title} 
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* KONTAINER PEMBUNGKUS TEKS DESKRIPSI (Lebih Gelap & Eksklusif) */}
                <div className="bg-[#090a0f] px-2 py-2 rounded-2xl mt-2 border border-white/[0.02]">
                  {/* MAPPING DINAMIS: Sub Heading Cyan */}
                  <span className="text-[10px] font-bold tracking-widest text-cyan-neon block mt-1 mb-2 uppercase pl-2">
                    {cert.subHeading}
                  </span>

                  {/* Baris Judul & Tombol Eksternal Link */}
                  <div className="flex justify-between items-center gap-4">
                    {/* MAPPING DINAMIS: Judul Sertifikat */}
                    <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight leading-tight pl-2 mb-1">
                      {cert.title}
                    </h3>
                    
                    {/* Tombol Icon External Link */}
                    {/* MAPPING DINAMIS: Atribut href Kredensial URL */}
                    <a 
                      href={cert.credentialLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-neon p-1 transition-colors duration-300 flex-shrink-0"
                    >
                      <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}