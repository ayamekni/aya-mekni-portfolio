import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, GraduationCap, Code, Briefcase, Trophy, FolderOpen, Award, Globe, Mail } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'competencies', label: 'Competencies', icon: Trophy },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'languages', label: 'Languages', icon: Globe },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Line */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="fixed top-1 w-full z-50">
        <div className="flex justify-center px-2 sm:px-4">
          {/* Modern Floating Navigation */}
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl mt-4 shadow-2xl">
            <div className="flex items-center px-3 sm:px-6 py-4">
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-white/5 rounded-full p-1 xl:p-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-1 xl:space-x-2 px-2 xl:px-4 py-2 rounded-full transition-all duration-300 text-xs xl:text-sm font-medium whitespace-nowrap ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-400 shadow-lg'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <IconComponent size={14} className="xl:w-4 xl:h-4" />
                      <span className="hidden xl:block">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="lg:hidden border-t border-white/10 p-4 space-y-2 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-400'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
