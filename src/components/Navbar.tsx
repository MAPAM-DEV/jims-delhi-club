import { Instagram, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/config/site";

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMoreOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {siteConfig.nav.main.map((item) => (
        <button
          key={item.section}
          onClick={() => scrollToSection(item.section)}
          className="label-small link-hover"
        >
          {item.label}
        </button>
      ))}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setMoreOpen(!moreOpen)}
          className="label-small link-hover flex items-center gap-1"
        >
          More
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} 
            strokeWidth={1.5} 
          />
        </button>
        {moreOpen && (
          <div className={`absolute top-full mt-2 min-w-[160px] bg-background border border-border shadow-lg ${mobile ? 'left-1/2 -translate-x-1/2' : 'right-0'}`}>
            {siteConfig.nav.more.map((item, i) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`w-full text-left px-4 py-3 label-small hover:bg-muted transition-colors ${i < siteConfig.nav.more.length - 1 ? 'border-b border-border' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold tracking-[0.2em] hover:opacity-70 transition-opacity"
          >
            {siteConfig.name}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="social-icon" />
          </a>
        </div>

        <div className="flex md:hidden items-center justify-center gap-6 mt-3 pt-3 border-t border-border">
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
