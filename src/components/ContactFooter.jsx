export default function ContactFooter() {
  const socials = [
    { 
      name: "GitHub", handle: "@m4mad995", link: "https://github.com/m4mad995",
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
    },
    { 
      name: "LinkedIn", handle: "in/achmad-hamdani", link: "https://www.linkedin.com/in/achmad-hamdani-99a0b138a/",
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    { 
      name: "Instagram", handle: "@hamdani19_", link: "https://instagram.com/hamdani19_",
      svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    },
    { 
      name: "View Resume", handle: "CV Achmad Hamdani Hilman.pdf", link: "/images/CV Achmad Hamdani Hilman.pdf", isPdf: true,
      svg: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
  ];

  return (
    <footer id="contact" className="pt-32 bg-dark-bg border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Centered CTA Block */}
        <div className="flex flex-col items-center text-center mb-16 w-full">
          <div className="px-4 py-1.5 rounded-full border border-cyan-neon bg-cyan-neon/10 text-cyan-neon text-xs font-bold tracking-widest mb-8">
            ✦ AVAILABLE FOR OPPORTUNITIES
          </div>

          <h2 className="font-unbounded text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 uppercase">
            BRINGING IDEAS <br />
            INTO <span className="bg-gradient-to-r from-cyan-neon to-purple-neon bg-clip-text text-transparent">REALITY</span>
          </h2>

          <p className="max-w-xl text-text-muted text-sm md:text-base mb-10 leading-relaxed">
            Whether it's a completely new system build, strategic component engineering, or layout consultation, my inbox is open.
          </p>
          
          <a 
            href="mailto:hamdaniachmad480@gmail.com" 
            className="inline-block bg-white text-dark-bg rounded-full px-10 py-5 text-xl font-bold hover:bg-gray-200 transition-colors shadow-[0_0_40px_-5px_#ffffff]"
          >
            hamdaniachmad480@gmail.com
          </a>

          {/* Location Badge: Perfectly Centered Directly Beneath White Email Button */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted bg-dark-card px-4 py-2 rounded-full border border-white/5 mt-8 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Surabaya, ID — Available for Remote
          </div>
        </div>

        {/* Social Cards Component Row with Raw SVG Icons */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-24">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-dark-card hover:border-cyan-neon transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-dark-bg border border-white/10 flex items-center justify-center text-text-muted group-hover:text-white transition-colors">
                  {social.svg}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{social.name}</h4>
                  <p className="text-xs text-text-muted mt-0.5">{social.handle}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-text-muted group-hover:text-cyan-neon transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          ))}
        </div>

      </div>

      {/* FOOTER: Strict 3-Part Architecture Layout */}
      <div className="border-t border-white/5 py-10 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Left Block: Bold tall logo styling */}
          <div className="text-2xl font-black font-unbounded text-white tracking-widest uppercase">
            HAMM<span className="text-purple-neon">.</span>
          </div>

          {/* Center Block: Navbar navigation mirror routing link structure */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-cyan-neon transition-colors">Home</a>
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-cyan-neon transition-colors">About</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-cyan-neon transition-colors">Project</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-cyan-neon transition-colors">Contact</a>
          </div>

          {/* Right Block: Standardized production alignment requirements */}
          <div className="text-xs text-text-muted md:text-right flex flex-col gap-1.5 font-medium">
            <p>© 2026 Achmad Hamdani Hilman. All rights reserved.</p>
            <p>Designed & Built with React + Tailwind v4.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}