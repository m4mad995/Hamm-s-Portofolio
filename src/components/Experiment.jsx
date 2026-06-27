import React from 'react';

const ProjectCard = ({ title, tag, description, tech, children, conceptName, hoverEffectClass }) => {
  return (
    <div className={`flex flex-col gap-4 w-full max-w-sm transition-all duration-500 ${hoverEffectClass}`}>
      <span className="text-slate-500 text-xs font-mono uppercase tracking-widest">{conceptName}</span>
      
      {/* KONTEN KARTU UTAMA (Sudah diperbaiki dari error children.props) */}
      <div className="relative flex flex-col rounded-2xl overflow-hidden bg-slate-950/60 border border-white/10 group cursor-pointer shadow-xl">
        
        {/* Image / Mock Window Container */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-900">
          {children}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 to-purple-950/20 pointer-events-none" />
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col gap-3 bg-slate-950/40 backdrop-blur-sm">
          <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase">{tag}</span>
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
          
          <div className="flex gap-2 mt-2">
            {tech.map((t) => (
              <span key={t} className="px-2 py-1 rounded-md bg-slate-950 text-[10px] font-medium text-slate-400 border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioGrid = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-12 flex flex-col items-center justify-center gap-12">
      <h1 className="text-white text-2xl font-light tracking-tighter border-b border-white/10 pb-4 w-full max-w-6xl text-center">
        Hover Interaction Sandbox
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-start">
        
        {/* CARD 1: GLASS BORDER */}
        <ProjectCard 
          conceptName="Concept 1: Glass-Border"
          title="SMART E-LIBRARY"
          tag="Automated System"
          description="A sophisticated digital retrieval system using AI vision to catalog physical archives in real-time."
          tech={['Python', 'OpenCV', 'RFID']}
          hoverEffectClass="hover:-translate-y-2 hover:border-transparent group"
        >
          {/* Efek Garis Menyala Gradasi */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-500 p-[1px] rounded-t-2xl z-20 pointer-events-none opacity-0 group-hover:opacity-100" />
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Project" 
          />
        </ProjectCard>

        {/* CARD 2: BENTO AMBIENT GLOW */}
        <ProjectCard 
          conceptName="Concept 2: Ambient Glow"
          title="SMART E-LIBRARY"
          tag="Automated System"
          description="A sophisticated digital retrieval system using AI vision to catalog physical archives in real-time."
          tech={['Python', 'OpenCV', 'RFID']}
          hoverEffectClass="hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(6,182,212,0.25),_0_0_50px_rgba(168,85,247,0.25)]"
        >
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Project" 
          />
        </ProjectCard>

        {/* CARD 3: DARK OVERLAY LIFT */}
        <ProjectCard 
          conceptName="Concept 3: Dark Overlay"
          title="SMART E-LIBRARY"
          tag="Automated System"
          description="A sophisticated digital retrieval system using AI vision to catalog physical archives in real-time."
          tech={['Python', 'OpenCV', 'RFID']}
          hoverEffectClass="hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/80"
        >
          {/* Efek Gelap yang Menghilang saat Hover */}
          <div className="absolute inset-0 z-10 bg-slate-950/60 transition-all duration-500 group-hover:bg-transparent backdrop-blur-[1px] group-hover:backdrop-blur-none" />
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Project" 
          />
        </ProjectCard>

      </div>
    </div>
  );
};

export default PortfolioGrid;