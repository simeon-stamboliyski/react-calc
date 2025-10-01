import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-semibold hover:text-primary transition-colors"
          >
            Portfolio
          </button>
          
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm hover:text-primary transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="hover:text-primary transition-colors"
            aria-label="Email Contact"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
