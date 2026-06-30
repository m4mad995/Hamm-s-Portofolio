import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectsData, setProjectsData] = useState([]);

  // Reference & State untuk animasi scroll area atas (Header, Filter, Grid)
  const topSectionRef = useRef(null);
  const [isTopVisible, setIsTopVisible] = useState(false);

  // Reference & State untuk animasi scroll area bawah (Playground / Archive Table)
  const archiveSectionRef = useRef(null);
  const [isArchiveVisible, setIsArchiveVisible] = useState(false);

  // 1. Fetching data dari API bawaan
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Gagal mengambil data project:", error);
      }
    };
    fetchProjects();
  }, []);

  // 2. Mengaktifkan Intersection Observer untuk pendeteksian scroll bolak-balik (once: false)
  useEffect(() => {
    // Observer untuk bagian atas
    const topObserver = new IntersectionObserver(
      ([entry]) => {
        setIsTopVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observer untuk bagian bawah (Playground Archive)
    const archiveObserver = new IntersectionObserver(
      ([entry]) => {
        setIsArchiveVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    if (topSectionRef.current) topObserver.observe(topSectionRef.current);
    if (archiveSectionRef.current) archiveObserver.observe(archiveSectionRef.current);

    return () => {
      if (topSectionRef.current) topObserver.unobserve(topSectionRef.current);
      if (archiveSectionRef.current) archiveObserver.unobserve(archiveSectionRef.current);
    };
  }, []);

  // 3. Pemisahan data berdasarkan projectType (case-insensitive)
  const mainProjects = projectsData.filter(p => p.projectType?.toLowerCase() !== "playground");
  const playgroundItems = projectsData.filter(p => p.projectType?.toLowerCase() === "playground");

  // 4. Logika Tombol Filter
  const filteredProjects = mainProjects.filter((project) => {
    if (activeFilter === "All") return true;
    const groups = project.filterGroup || [];
    const hasUIUX = groups.some(g => g === "UI/UX Design" || g === "UI / UX Design");
    const hasWebDev = groups.some(g => g === "Web Development");

    if (activeFilter === "UI / UX Design") return hasUIUX;
    if (activeFilter === "Web Development") return hasWebDev;
    if (activeFilter === "Others") return !hasUIUX && !hasWebDev;
    return false;
  });

  return (
    <section id="projects" className="py-25 bg-dark-bg text-white relative overflow-hidden">
      
      {/* AREA UTAMA (ATAS & GRID) */}
      <div ref={topSectionRef} className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. TAG SECTION */}
        <div className="flex justify-start mb-6">
          <div 
            className={`px-4 py-1.5 rounded-full border border-cyan-neon bg-cyan-neon/10 text-cyan-neon text-xs font-bold tracking-widest flex items-center gap-2 transition-all duration-500 ease-out ${
              isTopVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span>+</span> SELECTED WORK
          </div>
        </div>

        {/* 2. HEADING & CTA HEADER */}
        <div 
          className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 transition-all duration-500 ease-out ${
            isTopVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="font-unbounded text-4xl md:text-5xl font-black uppercase tracking-tight">
            RECENT <span className="bg-gradient-to-r from-cyan-neon to-purple-neon bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          
          <a 
            href="#contact" 
            className="text-gray-400 hover:text-white font-medium text-sm flex items-center gap-1.5 transition-colors duration-300"
          >
            <span>Start a Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>

        {/* 3. TOMBOL FILTER */}
        <div 
          className={`flex flex-wrap gap-3 mb-12 transition-opacity duration-500 ease-out ${
            isTopVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {["All", "UI / UX Design", "Web Development", "Others"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-white text-dark-bg border-white font-bold"
                  : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 4. MAIN PROJECT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredProjects.map((project, idx) => {
            const staggerDelay = isTopVisible ? `${(idx % 3 + 1) * 100}ms` : "0ms";

            return (
              <div 
                key={project.id} 
                className="group relative z-0 bg-dark-card px-2.5 py-2.5 rounded-3xl border border-white/5 flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-all duration-700 ease-out"
                style={{
                  transform: isTopVisible ? "translateY(0px)" : "translateY(32px)",
                  opacity: isTopVisible ? 1 : 0,
                  transitionDelay: staggerDelay
                }}
              >
                <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-[-1]">
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px]" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-[60px]" />
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/40">
                  <img 
                    src={project.imageLink || 'https://via.placeholder.com/600x450/090a0f/ffffff?text=No+Image'} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider pl-1">
                        {project.capsuleText || "Others"}
                      </span>
                    </div>

                    <div>
                      {project.status?.toUpperCase() === "DONE" ? (
                        <span className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest bg-green-500/50 text-green-100 border border-green-500/60 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> DONE
                        </span>
                      ) : (
                        <span className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest bg-amber-500/50 text-amber-100 border border-amber-500/40 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span> ON-GOING
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-[#090a0f] p-4 py-4 rounded-2xl mt-2 border border-white/[0.02] flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-cyan-neon block mb-2 uppercase">
                      {project.projectTag}
                    </span>
                    
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="text-xl font-extrabold text-white uppercase tracking-tight flex-grow" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 flex-shrink-0 pt-1">
                        {project.repoLink && (
                          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-neon transition-colors duration-300" title="View Repository">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                          </a>
                        )}

                        {project.designLink && (
                          <a href={project.designLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-neon transition-colors duration-300" title="View Figma Design">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
                              <path d="M12 2h3.5a3.5 3.5 0 0 1 0 7H12V2z"/>
                              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
                              <path d="M12 9h3.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5H12V9z"/>
                              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 5 19.5z"/>
                            </svg>
                          </a>
                        )}

                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-neon transition-colors duration-300" title="View Live Site">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed font-light mb-4 text-justify">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <hr className="border-white/10 my-4" />
                    <div className="flex flex-wrap gap-2">
                      {(project.techStack || []).map((tag, index) => (
                        <span key={index} className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] text-gray-400 font-medium tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* 5. PLAYGROUND SECTION (PROJECT ARCHIVE) */}
      <div ref={archiveSectionRef} className="w-full max-w-7xl mx-auto px-6 relative mt-12">
        
        {/* PERBAIKAN: Struktur Garis Kiri & Kanan Sesuai Kode Awal Anda dengan Animasi Halus */}
        <div className="flex items-center gap-4 mb-8 w-full overflow-hidden">
          <div 
            className="w-12 h-[1px] bg-white/10 origin-left transition-transform duration-700 ease-out"
            style={{ transform: isArchiveVisible ? "scaleX(1)" : "scaleX(0)" }}
          ></div>
          <span 
            className={`font-unbounded text-xs font-black tracking-[0.2em] text-gray-500 whitespace-nowrap uppercase transition-all duration-700 ease-out ${
              isArchiveVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } delay-100`}
          >
            PROJECT ARCHIVE / PLAYGROUND
          </span>
          <div 
            className="flex-grow h-[1px] bg-white/10 origin-left transition-transform duration-700 ease-out delay-200"
            style={{ transform: isArchiveVisible ? "scaleX(1)" : "scaleX(0)" }}
          />
        </div>

        {/* 6. AREA TABEL: Diberikan overflow-y-hidden agar scrollbar vertikal default tidak berkedip saat animasi */}
        <div className="w-full overflow-x-auto" style={{ overflowY: "hidden" }}>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr 
                className="border-b border-white/10 transition-all duration-500 ease-out"
                style={{
                  transform: isArchiveVisible ? "translateY(0)" : "translateY(12px)",
                  opacity: isArchiveVisible ? 1 : 0,
                  transitionDelay: "250ms"
                }}
              >
                <th className="py-4 text-[11px] font-bold uppercase tracking-widest text-gray-600 w-16">No.</th>
                <th className="py-4 text-[11px] font-bold uppercase tracking-widest text-gray-600">Project Name</th>
                <th className="py-4 text-[11px] font-bold uppercase tracking-widest text-gray-600">Type</th>
                <th className="py-4 text-[11px] font-bold uppercase tracking-widest text-gray-600">Stack</th>
                <th className="py-4 text-[11px] font-bold uppercase tracking-widest text-gray-600 text-right w-24">Links</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {playgroundItems.map((item, idx) => {
                const rowDelay = isArchiveVisible ? `${300 + idx * 60}ms` : "0ms";

                return (
                  <tr 
                    key={item.id || idx} 
                    className="group hover:bg-white/[0.01] transition-colors duration-200"
                    style={{
                      transform: isArchiveVisible ? "translateY(0)" : "translateY(16px)",
                      opacity: isArchiveVisible ? 1 : 0,
                      transitionProperty: "transform, opacity, background-color",
                      transitionDuration: "500ms",
                      transitionTimingFunction: "ease-out",
                      transitionDelay: rowDelay
                    }}
                  >
                    <td className="py-5 text-sm font-medium text-gray-500">
                      {(idx + 1).toString().padStart(2, '0')}
                    </td>
                    
                    <td className="py-5 text-sm font-semibold text-gray-300 tracking-wide group-hover:text-white transition-colors">
                      {item.title}
                    </td>
                    
                    <td className="py-5 text-sm font-light text-gray-400">
                      {item.capsuleText || "Mini Project"}
                    </td>
                    
                    <td className="py-5">
                      <div className="flex gap-2">
                        {(item.techStack || []).map((tech, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-gray-500 font-medium bg-transparent">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                    
                    <td className="py-5 text-right">
                      <div className="flex gap-3 items-center justify-end">
                        {item.repoLink && (
                          <a href={item.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-neon inline-block transition-colors duration-300">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                          </a>
                        )}
                        {item.designLink && (
                          <a href={item.designLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-neon inline-block transition-colors duration-300">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
                              <path d="M12 2h3.5a3.5 3.5 0 0 1 0 7H12V2z"/>
                              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
                              <path d="M12 9h3.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5H12V9z"/>
                              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 5 19.5z"/>
                            </svg>
                          </a>
                        )}
                        {item.liveLink && (
                          <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-neon inline-block transition-colors duration-300">
                            <svg className="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}