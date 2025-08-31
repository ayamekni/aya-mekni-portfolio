import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const EducationSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation(0.2);

  const education = [
    {
      degree: "National Engineering Diploma in Computer Science",
      specialization: "DataScience & AI",
      institution: "ESPRIM — Monastir, Tunisia",
      period: "Sep 2023 – Jun 2026 (expected)",
      coursework: [
        "Machine Learning",
        "Deep Learning", 
        "Big Data Analytics (Apache Spark, Hadoop)",
        "MLOps",
        "Data Engineering",
        "Natural Language Processing",
        "Computer Vision"
      ]
    },
    {
      degree: "Pre-Engineering Diploma",
      specialization: "Preparatory Cycle — Math–Physics–Informatics",
      institution: "FSM — Monastir, Tunisia",
      period: "Sep 2021 – Jun 2023",
      coursework: [
        "Calculus",
        "Linear Algebra",
        "Probability & Statistics",
        "Data Structures",
        "Algorithms",
        "Python Programming",
        "SQL",
        "Big-O Complexity Analysis"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">My Learning Adventure</p>
        </div>

        <div className="relative" ref={timelineRef}>
          {/* Central Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600 transform -translate-x-1/2"></div>
          
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`relative mb-16 transition-all duration-700 ${
                timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: timelineVisible ? `${index * 200}ms` : '0ms' 
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center z-10">
                <GraduationCap size={16} className="text-white" />
              </div>

              {/* Education Card - Alternating sides */}
              <div className={`flex ${index % 2 === 0 ? 'justify-start pr-8' : 'justify-end pl-8'}`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-700 hover:scale-105 group">
                    {/* Period Badge */}
                    <div className="flex items-center gap-2 text-cyan-400 mb-4">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                    
                    {/* Degree Title */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    
                    {/* Specialization */}
                    <p className="text-lg font-semibold text-cyan-400 mb-4">
                      {edu.specialization}
                    </p>
                    
                    {/* Institution */}
                    <div className="flex items-center gap-2 text-gray-300 mb-6">
                      <MapPin size={16} className="text-cyan-400" />
                      <span>{edu.institution}</span>
                    </div>

                    {/* Coursework */}
                    <div>
                      <div className="flex items-center gap-2 text-white font-semibold mb-3">
                        <BookOpen size={16} className="text-cyan-400" />
                        <span>Relevant Coursework:</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <div key={courseIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};