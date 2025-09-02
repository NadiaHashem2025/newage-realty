import { Facebook, Instagram, Calendar } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-50 shadow-lg">
      <div className="container-width">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left Side */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">New Age Realty</h1>
            <h2 className="text-xl">Nadia Hashem</h2>
            <p className="text-lg italic opacity-90">
              Guiding you through life's transitions into spaces that nurture and inspire.
            </p>
            
            {/* Navigation */}
            <nav className="flex flex-wrap gap-6 pt-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-accent transition-colors duration-300"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="hover:text-accent transition-colors duration-300"
              >
                Client Reviews
              </button>
              <button 
                onClick={() => scrollToSection('guides')}
                className="hover:text-accent transition-colors duration-300"
              >
                Helpful Guides
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-accent transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex gap-4 lg:flex-col lg:items-end">
            <a 
              href="https://www.facebook.com/nadia.hashem.7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/nadia_hashem3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://calendly.com/nadia-hashem/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              aria-label="Calendly"
            >
              <Calendar size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;