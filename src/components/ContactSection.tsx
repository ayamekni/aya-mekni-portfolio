import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Download, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ContactSection = () => {
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Ask me something about Aya!' }
  ]);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const responses = {
    'who is aya?': "Aya is a passionate AI and Data Science student proficient in Python, TensorFlow, Computer Vision, NLP, and more!",
    'what can she do?': "She builds intelligent, user-focused applications by combining deep learning with modern web frameworks like Flask and React — turning complex AI models into impactful real-world solutions.",
    'what makes aya unique?': "Aya's unique blend of technical skills, creativity, and problem-solving mindset allows her to tackle complex challenges in AI and software development. She's always eager to learn and innovate!",
    'how can i hire her?': "You can reach out via email or LinkedIn — she's open to exciting collaborations!"
  };

  const presetQuestions = [
    'Who is Aya?',
    'What can she do?',
    'What makes Aya unique?',
    'How can I hire her?'
  ];

  const handleSendMessage = (message?: string) => {
    const messageToSend = message || userInput.trim();
    if (!messageToSend) return;

    setChatMessages(prev => [...prev, { type: 'user', message: messageToSend }]);
    
    const response = responses[messageToSend.toLowerCase()] || 
      "I'm not sure about that, but feel free to ask about Aya's skills, projects, or how to get in touch!";
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { type: 'bot', message: response }]);
    }, 500);

    setUserInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-aya-mekni.pdf';
    link.download = 'Aya_Mekni_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Contact Dock
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">
            Connect with me for collaborations or opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            className={`bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 transition-all duration-1000 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Communication Channels</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">aya.mekni@esprim.tn</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Linkedin size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                  <a href="https://linkedin.com/in/aya-mekni-0b0783283/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    linkedin.com/in/aya-mekni
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Github size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">GitHub</div>
                  <a href="https://github.com/ayamekni" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    github.com/ayamekni
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-300">Monastir, Tunisia</div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleDownloadCV}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          {/* Interactive Chatbot */}
          <div 
            className={`bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 transition-all duration-1000 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Who is Aya?</h3>
            
            {/* Chat Window */}
            <div className="bg-slate-900/50 rounded-xl p-4 h-64 overflow-y-auto mb-4 space-y-3">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-slate-700 text-cyan-400'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2 bg-slate-700/50 border border-cyan-500/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-all duration-300"
              />
              <button
                onClick={() => handleSendMessage()}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
              >
                <Send size={16} />
              </button>
            </div>

            {/* Preset Questions */}
            <div className="flex flex-wrap gap-2">
              {presetQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSendMessage(question)}
                  className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-cyan-500/30 hover:bg-slate-600/50 transition-all duration-300"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
