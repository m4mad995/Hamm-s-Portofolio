export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-bg/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-15 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold font-unbounded text-white tracking-widest hover:text-cyan-neon transition-colors">
          HAMM<span className="text-purple-neon">.</span>
        </a>
        
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-cyan-neon transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href="/images/CV Achmad Hamdani Hilman.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:border-cyan-neon hover:text-cyan-neon hover:shadow-[0_0_15px_-3px_var(--color-cyan-neon)] transition-all duration-300"
        >
          View CV
        </a>
      </div>
    </header>
  );
}