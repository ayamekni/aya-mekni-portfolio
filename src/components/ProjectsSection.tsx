
import React, { useState } from 'react';
import { Search, ExternalLink, Github, ImageIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ProjectGalleryModal } from './ProjectGalleryModal';

export const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: searchRef, isVisible: searchVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  const projects = [
    {
      title: 'Speech Emotion Recognition (SER) with EMO-DB and RAVDESS',
      description: 'Designed and trained a CNN on log-mel spectrograms using TensorFlow and Keras for SER on EMO-DB and RAVDESS, achieving 85% weighted-F1 with SpecAugment augmentation. Preprocessed data with Librosa, Pandas, NumPy, and Scikit-learn, optimized hyperparameters with MEALPY, and evaluated with weighted-F1 and confusion matrices.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Librosa', 'Scikit-learn', 'Pandas', 'NumPy', 'MEALPY', 'Matplotlib', 'Seaborn', 'SpecAugment', 'CNN', 'GroupKFold', 'StandardScaler', 'OneHotEncoder'],
      category: 'AI/ML',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop' },
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1461749280684/dccba630e2f6?w=800&h=600&fit=crop' },
        { type: 'video' as const, url: '/demo-video.mp4', thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'Lung Cancer Prediction — End-to-End MLOps Pipeline',
      description: 'Built a modular ML pipeline for lung cancer prediction using an SVM classifier, with clean separation of preprocessing, training, evaluation, and deployment steps. Implemented CI/CD workflows via Makefile, integrated MLflow for experiment tracking, and deployed a production-ready FastAPI REST service with Docker and monitoring via MLflow, Elasticsearch, and Kibana.',
      technologies: ['Python', 'Scikit-learn', 'SVM', 'MLflow', 'FastAPI', 'Docker', 'Makefile', 'Pandas', 'NumPy', 'Elasticsearch', 'Kibana', 'CI/CD', 'REST API', 'Swagger UI'],
      category: 'AI/ML',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'Trash to Cash — AI-Powered Recycling Ecosystem',
      description: 'Developed a web-based AI application using EfficientNet (CNN) to classify bottles and assign eco-points, redeemable in an eco-store or convertible to Bitcoin. Built Rebottle, an autonomous robot with YOLOv5 for recycling logo detection, QR codes for eco-points tracking, and Reinforcement Learning for navigation. Enhanced with Semi-Supervised Learning and integrated into a full-stack platform.',
      technologies: ['Python', 'TensorFlow/Keras', 'EfficientNet', 'PyTorch', 'YOLOv5', 'Reinforcement Learning', 'Semi-Supervised Learning', 'OpenCV', 'Django REST', 'React.js', 'MongoDB', 'Android', 'JWT', 'Unity ML-Agents', 'CNNs'],
      category: 'AI/ML',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop' },
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1461749280684/dccba630e2f6?w=800&h=600&fit=crop' },
        { type: 'video' as const, url: '/demo-video.mp4', thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'Traffic Prediction Model for Smart Cities',
      description: 'Developed a predictive traffic model based on IoT data from urban intersections using time series models (SARIMA, seasonal regressions). Hourly urban traffic forecasting for 4 intersections from IoT sensors. Data cleaning and temporal data preparation with missing value and anomaly management. Hybrid modeling combining regression (trend + seasonality) with ARIMA/SARIMA. Statistical validation via ACF/PACF and residual analysis. Contribution to smart cities and sustainable urban planning challenges.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statsmodels', 'Scikit-learn', 'ARIMA', 'SARIMA', 'Seasonal Regression', 'Time Series Analysis', 'IoT', 'Smart Cities'],
      category: 'AI/ML',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'Real-Time Facial Emotion Detection System',
      description: 'Built a real-time facial emotion detection system using webcam input and computer vision. Integrated pretrained deep learning models (Keras CNN & DeepFace) for recognition of 7 emotions. Applied OpenCV Haar Cascades for face detection and real-time video overlays. Implemented logging pipelines (TXT/CSV), snapshot saving, and an alert system (pygame) for negative emotions. Designed the system with multi-face detection and real-time annotation. Deployed the model on a website, enabling real-time emotion detection through a browser interface.',
      technologies: ['Python', 'JavaScript', 'OpenCV', 'TensorFlow', 'Keras', 'DeepFace', 'NumPy', 'Pandas', 'Pygame', 'Flask', 'FastAPI', 'React.js', 'Computer Vision', 'Deep Learning', 'Real-time Processing'],
      category: 'AI/ML',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop' },
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1461749280684/dccba630e2f6?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'Personal Chatbot (In Progress)',
      description: 'Currently designing and developing a personal chatbot to showcase conversational AI skills directly in my portfolio. Planned integration with a web-based interface for interactive recruiter demos. Will implement NLP/NLU capabilities (intent recognition, entity extraction, dialogue flow). Chatbot will be connected to portfolio data (projects, experience, contact info) to provide an engaging Q&A experience. Building a modular architecture for future extensions (APIs, external services). Final deployment will make the chatbot available on this portfolio.',
      technologies: ['Python', 'JavaScript', 'spaCy', 'Hugging Face Transformers', 'NLTK', 'Rasa', 'Flask', 'FastAPI', 'React', 'HTML/CSS', 'Bootstrap', 'OpenAI API', 'Dialogflow', 'REST APIs', 'WebSockets', 'NLP', 'NLU'],
      category: 'AI/ML',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'JobNest',
      description: 'Developed a Flask web app integrating MongoDB for user and application data storage. Implemented web scraping pipelines with BeautifulSoup and Selenium for real-time job listings. Designed a responsive UI with Bootstrap, enabling dynamic filters and streamlined navigation. Built user authentication and session management for secure access. Implemented an application tracking system to manage submissions and statuses.',
      technologies: ['Flask', 'Python', 'Selenium', 'Beautiful Soup', 'MongoDB', 'Bootstrap', 'Authentication', 'Web Scraping', 'User Management', 'Application Tracking'],
      category: 'Web Development',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop' },
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1461749280684/dccba630e2f6?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'FocusFlow - Productivity App',
      description: 'Task Tracking and Top 3 Goals management with due times and key priorities. Pomodoro Timer and Stats Dashboard for focused work-break cycles, tracking streaks, tasks, and productivity hours. Spotify Integration and Lo-Fi Themes for seamless study music and Day, Night, and Rainy vibes. Responsive UI and Accessible Design for desktop and mobile with WCAG 2.2 AA compliance.',
      technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'date-fns', 'Lucide Icons', 'Bootstrap', 'Authentication'],
      category: 'Web Development',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop' },
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1461749280684/dccba630e2f6?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'Sales Trend Analysis',
      description: 'Interactive Power BI dashboard showing sales trends. Used DAX, Power Query, and storytelling visuals.',
      technologies: ['Power BI', 'DAX', 'Data Cleaning', 'Storytelling'],
      category: 'Data Science',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'University Housing System',
      description: 'Spring Boot web app for managing room assignments. REST APIs with full CRUD.',
      technologies: ['Spring Boot', 'Java', 'Spring Data JPA', 'MySQL', 'Swagger'],
      category: 'Web Development',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop' },
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop' }
      ]
    },
    {
      title: 'Gestion des Présentateurs',
      description: 'Web app to manage circus presenters and roles with secure role-based authentication, CRUD operations, and dashboards.',
      technologies: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Razor', 'Bootstrap', 'Authentication'],
      category: 'Web Development',
      media: [
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop' },
        { type: 'image' as const, url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop' }
      ]
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">
            Explore my portfolio of AI, machine learning, and software development projects
          </p>
        </div>

        {/* Search Bar */}
        <div 
          ref={searchRef}
          className={`relative max-w-md mx-auto mb-12 transition-all duration-1000 ${
            searchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by name or tech..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 backdrop-blur-lg border border-cyan-500/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-all duration-300"
          />
        </div>

        {/* Projects Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-700 hover:scale-105 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <button className="text-yellow-400 hover:text-yellow-300 transition-all duration-300 hover:scale-110">
                      <Github size={18} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description.split('.').filter(sentence => sentence.trim()).map((sentence, index) => (
                    <span key={index} className="block mb-2">
                      <span className="text-yellow-400 mr-2">•</span>
                      {sentence.trim()}.
                    </span>
                  ))}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-purple-400 font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Project Gallery Modal */}
        {selectedProject && (
          <ProjectGalleryModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            projectTitle={selectedProject}
            media={projects.find(p => p.title === selectedProject)?.media || []}
          />
        )}
      </div>
    </section>
  );
};
