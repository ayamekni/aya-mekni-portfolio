
import React from 'react';
import { Brain, Code, Database, Palette, Cloud, Bot, Eye, MessageSquare, Cpu } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CompetenciesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  const competencies = [
    { icon: <Bot size={32} />, label: 'AI', description: 'Artificial Intelligence' },
    { icon: <Brain size={32} />, label: 'ML', description: 'Machine Learning' },
    { icon: <Eye size={32} />, label: 'Computer Vision', description: 'Image & Video Analysis' },
    { icon: <MessageSquare size={32} />, label: 'NLP', description: 'Natural Language Processing' },
    { icon: <Cpu size={32} />, label: 'AI Agents', description: 'Intelligent Systems' },
    { icon: <Code size={32} />, label: 'Dev', description: 'Software Development' },
    { icon: <Palette size={32} />, label: 'UX', description: 'User Experience' },
    { icon: <Database size={32} />, label: 'Data', description: 'Data Science' },
    { icon: <Cloud size={32} />, label: 'Cloud', description: 'Cloud Computing' },
  ];

  return (
    <section id="competencies" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Core Competencies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">
            My Key Strengths & Expertise in Action
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {competencies.map((competency, index) => (
            <div
              key={competency.label}
              className={`group relative bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-700 hover:scale-110 cursor-pointer ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 mb-4 flex justify-center">
                  {competency.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{competency.label}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {competency.description}
                </p>
              </div>

              {/* Floating particles */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
