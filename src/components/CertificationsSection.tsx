
import React from 'react';
import { Award, Calendar, Hash } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const CertificationsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  const certifications = [
    {
      title: 'Introduction to Transformer-Based Natural Language Processing',
      platform: 'NVIDIA',
      date: 'Aug 2025',
      id: 'He2KfYSaRj28w6FgPx1-aA'
    },
    {
      title: 'Generative AI with Diffusion Models',
      platform: 'NVIDIA',
      date: 'Jun 2025',
      id: 'FodSKs02T6mAQGmyPZNQbg'
    },
    {
      title: 'Applications of AI for Predictive Maintenance',
      platform: 'NVIDIA',
      date: 'Apr 2025',
      id: '38XtOjStR1qLXwTBdn0PuA'
    },
    {
      title: 'Fundamentals of Deep Learning',
      platform: 'NVIDIA',
      date: 'Mar 2025',
      id: '1tO0Ys3ITkGJkXM3sgBKrQ'
    },
    {
      title: 'Introduction to MLflow',
      platform: 'DataCamp',
      date: 'Aug 2025',
      id: null
    },
    {
      title: 'Retrieval Augmented Generation (RAG) with LangChain',
      platform: 'DataCamp',
      date: 'Aug 2025',
      id: null
    },
    {
      title: 'Working with Llama 3',
      platform: 'DataCamp',
      date: 'Aug 2025',
      id: null
    },
    {
      title: 'Introduction to Power BI',
      platform: 'DataCamp',
      date: 'May 2025',
      id: null
    },
    {
      title: '12 Factor App',
      platform: 'KodeKloud',
      date: 'Feb 2025',
      id: '83c58871-73fc-4356-8661-157c73781f7c'
    },
    {
      title: 'AI-900: Microsoft Certified Azure AI Fundamentals',
      platform: 'KodeKloud',
      date: 'Feb 2025',
      id: 'e0025655-a0cc-43c2-95ef-7a3f7158ea09'
    },
    {
      title: 'Docker Training Course for the Absolute Beginner',
      platform: 'KodeKloud',
      date: 'Feb 2025',
      id: '7b53b38f-2e3a-4a55-931f-9dbb5ea97523'
    },
    {
      title: 'Fundamentals of DevOps',
      platform: 'KodeKloud',
      date: 'Feb 2025',
      id: '204c9f91-57a6-4116-82c6-1f32db477ccf'
    },
    {
      title: 'Shell Scripts for Beginners',
      platform: 'KodeKloud',
      date: 'Feb 2025',
      id: 'd97ec4c1-c8a9-4867-8c3e-f65393899d30'
    },
    {
      title: 'Scrum Fundamentals Certified (SFC™)',
      platform: 'Vabro.ai / VMEdu',
      date: 'Apr 2024',
      id: '1025380'
    },
    {
      title: 'AWS Cloud Practitioner Track',
      platform: 'DataCamp',
      date: 'In Progress',
      id: null
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">
            Proud Milestones in My Learning Journey
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-700 hover:scale-105 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 50}ms` : '0ms'
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <Award size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30 font-medium">
                      {cert.platform}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={14} className="text-purple-400" />
                    <span className="text-pink-300 font-medium">{cert.date}</span>
                  </div>

                  {cert.id && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Hash size={14} className="text-cyan-400" />
                      <span className="text-xs font-mono bg-gradient-to-r from-slate-700/50 to-slate-600/50 px-2 py-1 rounded border border-cyan-500/20 text-cyan-300">
                        {cert.id}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating accent elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
