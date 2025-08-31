
import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ExperienceSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);

  const experiences = [
    {
      position: "Data Science & Machine Learning Intern",
      company: "CarthaPlay – Remote, Tunisia",
      period: "Jun 2025 – Aug 2025",
      project: "Student Behavior Analytics & Recommendation Engine (EdTech)",
      achievements: [
        "Analyzed 7000+ gameplay logs with Python and Pandas to identify student learning trends (timestamps, error rates, response times) and documented findings for stakeholder use.",
        "Developed hybrid models for activity recognition and anomaly detection using TensorFlow, PyTorch, LSTM, and Transformers.",
        "Built scalable data pipelines (ingestion → cleaning → pattern detection → aggregation) in Python.",
        "Engineered learner profiles and a recommendation engine leveraging semantic search (RAG), LangChain, LLMs (Ollama), and a Neo4j vector database to deliver personalized, evidence-based educational content.",
        "Integrated explainable AI (confidence scores, rationales) to enhance educator trust and transparency.",
        "Implemented a teacher-facing chatbot in Python, delivering actionable insights on student behaviors."
      ]
    },
    {
      position: "Data Science & AI Contributor",
      company: "AfriOffres – Panafrican Tender Platform",
      period: "Jun 2025 - Jul 2025",
      achievements: [
        "Built a recommendation system using TF-IDF and sentence embeddings, boosting tender matching accuracy and increasing user engagement by 20%.",
        "Developed a web scraping pipeline with Python, BeautifulSoup, and Selenium to collect and standardize tender data across 5 African countries.",
        "Created an AI assistant with RAG and LLMs to extract tender requirements and generate response outlines."
      ]
    },
    {
      position: "Software Engineer Intern",
      company: "Anypli – Monastir, Tunisia",
      period: "Jun 2024 – Aug 2024",
      achievements: [
        "Developed Eventify, an event management platform using Laravel (PHP), Tailwind CSS, and Blade templates for a responsive UI.",
        "Implemented multi-factor authentication (MFA), role-based access control (RBAC), and secure session management via Laravel middleware (OWASP best practices).",
        "Built real-time dashboards and live comments with Laravel Broadcasting and WebSockets, increasing user engagement.",
        "Optimized CRUD operations and database performance using Eloquent ORM.",
        "Enabled localization (i18n) and fast search with caching to enhance UX across regions.",
        "Collaborated in Agile sprints, contributing to code reviews, technical documentation, and secure coding practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">
            My Professional Journey & Impact Moments
          </p>
        </div>

        <div className="relative" ref={contentRef}>
          {/* Central Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-16 transition-all duration-700 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: contentVisible ? `${index * 200}ms` : '0ms' 
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center z-10">
                <Building size={16} className="text-white" />
              </div>

              {/* Experience Card - Alternating sides */}
              <div className={`flex ${index % 2 === 0 ? 'justify-start pr-8' : 'justify-end pl-8'}`}>
                <div className={`w-full max-w-2xl ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-700 hover:scale-105 group">
                    {/* Company and Position */}
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">
                      {exp.position}
                    </h3>
                    
                    {/* Company Info */}
                    <div className="grid md:grid-cols-1 gap-2 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Building size={16} className="text-cyan-400" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={16} className="text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.project && (
                        <div className="mt-2">
                          <span className="text-sm font-semibold text-purple-400">Project: </span>
                          <span className="text-sm text-white">{exp.project}</span>
                        </div>
                      )}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3 text-gray-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
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
