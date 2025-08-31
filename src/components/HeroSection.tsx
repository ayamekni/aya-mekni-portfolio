
import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Github, Linkedin } from 'lucide-react';
import { AnimatedLaptop } from './AnimatedLaptop';

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "AI Engineer in Training, Passionate About Deep Learning",
    "Software Engineer | Full Stack Developer",
    "Interested in AI and Machine Learning",
    "Ready to Tackle New Challenges!"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = phrases[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, phrases]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    try {
      // Create a temporary link to download the CV
      const link = document.createElement('a');
      link.href = '/Aya_Mekni_CV.pdf';
      link.download = 'Aya_Mekni_CV.pdf';
      link.target = '_blank';
      
      // Add the link to the DOM temporarily
      document.body.appendChild(link);
      
      // Trigger the download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      
      console.log('CV download initiated successfully');
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: open in new tab if download fails
      window.open('/Aya_Mekni_CV.pdf', '_blank');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10 max-w-7xl mx-auto animate-fade-in">
        {/* Left Content */}
        <div className="text-center lg:text-left animate-scale-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Aya Mekni
          </h1>
          
          <div className="h-12 mb-6">
            <p className="text-lg md:text-xl text-gray-300 font-mono">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-cyan-500/20">
            <p className="text-lg text-gray-300 leading-relaxed">
            Hey! I’m Aya Mekni, a final-year Computer Science Engineering student (graduating June 2026) with a passion for Data Science & AI. I love building complete solutions—like ETL pipelines, feature tweaks, and ML/DL wonders—backed by solid MLOps skills, while exploring Big Data, LLMs, Computer Vision, and AI Agents.
            </p>
            <span className="text-cyan-400 font-semibold mt-2 block">
              Right now, I'm on the hunt for an end of study internship (6 months) ,starting from january 2026, to roll up my sleeves on real-world projects, learn from pros, and bring my energy to your team. Let's chat about how I can contribute—I'm excited to connect!
              <br />
            </span>
          </div>

          {/* Quick Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center bg-slate-800/30 backdrop-blur-lg rounded-xl p-3 border border-cyan-500/20">
              <div className="text-xl font-bold text-cyan-400">9+</div>
              <div className="text-xs text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center bg-slate-800/30 backdrop-blur-lg rounded-xl p-3 border border-purple-500/20">
              <div className="text-xl font-bold text-purple-400">15+</div>
              <div className="text-xs text-gray-400">Technologies Mastered</div>
            </div>
            <div className="text-center bg-slate-800/30 backdrop-blur-lg rounded-xl p-3 border border-pink-500/20">
              <div className="text-xl font-bold text-pink-400">2+</div>
              <div className="text-xs text-gray-400">Years Experience</div>
            </div>
            <div className="text-center bg-slate-800/30 backdrop-blur-lg rounded-xl p-3 border border-cyan-500/20">
              <div className="text-xl font-bold text-cyan-400">3</div>
              <div className="text-xs text-gray-400">Internships</div>
            </div>
          </div>

        
          

          <div className="flex items-center gap-4">
            <button 
              onClick={handleDownloadCV}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download My CV
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/ayamekni" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 backdrop-blur-lg rounded-full border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aya-mekni/" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 backdrop-blur-lg rounded-full border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>

           
          </div>
        
        </div>

        {/* Right Content - Animated Laptop */}
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            <AnimatedLaptop />
            
            {/* Additional Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce hover:text-cyan-300 transition-colors"
      >
        <ChevronDown size={32} />
      </button>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};
