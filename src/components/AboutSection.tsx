
import React from 'react';
import { MapPin, Mail, Calendar, GraduationCap, Code, Heart, Coffee, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const aboutItems = [
    { icon: <GraduationCap size={24} />, label: 'Name', value: 'Aya Mekni' },
    { icon: <Calendar size={24} />, label: 'Born', value: '2001' },
    { icon: <MapPin size={24} />, label: 'Location', value: 'Monastir, Tunisia 🇹🇳' },
    { icon: <Mail size={24} />, label: 'Email', value: 'aya.mekni@esprim.tn' },
  ];

  const highlights = [
    { icon: <Code size={32} />, title: 'AI Engineer', desc: 'Specializing in machine learning and data science' },
    { icon: <Heart size={32} />, title: 'Problem Solver', desc: 'Passionate about creating innovative solutions' },
    { icon: <Coffee size={32} />, title: 'Continuous Learner', desc: 'Always exploring new technologies' },
    { icon: <Target size={32} />, title: 'Goal Oriented', desc: 'Focused on delivering impactful results' },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Get to Know Me Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get to Know Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
           Get to know me !
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">
          {/* Profile Image */}
          <div 
            ref={ref}
            className={`lg:col-span-1 flex justify-center transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Animated background rings */}
              <div className="absolute -inset-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute inset-0 border border-cyan-500 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 border border-purple-500 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              </div>
              
              {/* Main image container with enhanced styling */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
                <img
                  src="/WhatsApp_Image_2025-04-16_at_10.43.03-removebg-preview.png"
                  alt="Aya Mekni"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ padding: '8px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
              </div>

              {/* Enhanced floating badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-500/30 text-cyan-400 px-8 py-3 rounded-full text-sm font-semibold shadow-xl backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  AI Engineer
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100 + 200}ms` : '0ms' 
                }}
              >
                <div className="relative overflow-hidden bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 group-hover:border-slate-600 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-cyan-500/5">
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative flex items-center gap-6">
                    <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/30 text-cyan-400 group-hover:bg-slate-700 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300 shadow-inner">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1 block">
                        {item.label}
                      </span>
                      <p className="text-white text-xl font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Enhanced Current Status Card */}
            <div 
              className={`group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? '600ms' : '0ms' 
              }}
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-slate-800/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 group-hover:border-slate-600 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-purple-500/5">
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/30 text-purple-400 group-hover:bg-slate-700 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1 block">
                      Current Status
                    </span>
                    <p className="text-white text-xl font-semibold leading-relaxed">
                      Final-year AI & Data Science engineering student at ESPRIM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Drives Me Section */}
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transitionDelay: isVisible ? '800ms' : '0ms' 
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            What Drives Me
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${1000 + index * 100}ms` : '0ms' 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl"></div>
                <div className="relative p-6 text-center border border-slate-700/50 group-hover:border-cyan-500/40 rounded-2xl transition-all duration-500">
                  <div className="text-cyan-400 group-hover:text-cyan-300 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{highlight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
