import React from 'react';
import { Code, Database, Brain, Cloud, BarChart3, Activity, Settings } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const SkillsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);

  const skillCategories = [
    {
      title: "Programming & Data Foundations",
      icon: Code,
      skills: [
        "Languages: Python, SQL, R, Java, PL/SQL",
        "Data & Databases: PostgreSQL, MySQL, MongoDB, Neo4j, Apache Hive"
      ]
    },
    {
      title: "Data Engineering & Big Data",
      icon: Database,
      skills: [
        "Apache Spark, Hadoop, Kafka, MapReduce",
        "ETL/ELT Pipelines, Data Warehousing",
        "Pandas, NumPy"
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        "Classical ML: scikit-learn, Random Forest, PCA, DQN, Model Evaluation, CRISP-DM, TDSP",
        "Deep Learning: TensorFlow, PyTorch, Keras, CNN, LSTM, Model Deployment",
        "LLMs, Retrieval & Agents: Hugging Face Transformers, DeepSeek-R1, Llama 3.3, LlamaIndex, Embeddings, Chunking, RAG, n8n",
        "Computer Vision: OpenCV, YOLO, Medical Imaging, Object Detection, Feature Extraction"
      ]
    },
    {
      title: "MLOps, Cloud & DevOps",
      icon: Cloud,
      skills: [
        "MLflow, Docker, Docker Hub, Kubernetes",
        "GitHub Actions, CI/CD, Azure"
      ]
    },
    {
      title: "Business Intelligence & Visualization",
      icon: BarChart3,
      skills: [
        "Power BI, Tableau, RStudio"
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: Activity,
      skills: [
        "Prometheus, Grafana, ELK Stack"
      ]
    },
    {
      title: "Tools, Practices & Collaboration",
      icon: Settings,
      skills: [
        "Version Control: Git",
        "Project Management: Jira", 
        "IDE & Development: IntelliJ IDEA",
        "Methodologies: Agile, Scrum"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300">Technologies & Tools I Work With</p>
        </div>

        {/* Skills Matrix Visual */}
        <div 
          ref={cardsRef}
          className={`mb-16 transition-all duration-1000 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-700 hover:scale-105 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Matrix Visual */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills Proficiency Matrix
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Machine Learning & AI", skills: [
                { name: "TensorFlow", proficiency: 90 },
                { name: "PyTorch", proficiency: 85 },
                { name: "Computer Vision", proficiency: 88 },
                { name: "NLP", proficiency: 82 }
              ]},
              { category: "Data Science", skills: [
                { name: "Python", proficiency: 95 },
                { name: "Pandas", proficiency: 92 },
                { name: "Scikit-learn", proficiency: 88 },
                { name: "Data Visualization", proficiency: 85 }
              ]},
              { category: "Web Development", skills: [
                { name: "React", proficiency: 80 },
                { name: "Node.js", proficiency: 75 },
                { name: "Django", proficiency: 78 },
                { name: "TypeScript", proficiency: 82 }
              ]}
            ].map((category, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">{category.category}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400 font-medium">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
