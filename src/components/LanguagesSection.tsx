import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Globe, Star } from 'lucide-react';

const languages = [
  {
    language: "Arabic",
    proficiency: "Native proficiency",
    level: "Native",
    stars: 5
  },
  {
    language: "English", 
    proficiency: "C1 — Full professional proficiency",
    level: "C1",
    stars: 4
  },
  {
    language: "French",
    proficiency: "C1 — Full professional proficiency", 
    level: "C1",
    stars: 4
  },
  {
    language: "German",
    proficiency: "A2 — Basic proficiency",
    level: "A2", 
    stars: 2
  }
];

export const LanguagesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="languages" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Languages
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Multilingual communication across different cultures and contexts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <div
              key={lang.language}
              className={`bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  lang.level === 'Native' 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : lang.level === 'C1'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {lang.level}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{lang.language}</h3>
              <p className="text-slate-300 text-sm mb-4">{lang.proficiency}</p>
              
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < lang.stars 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};