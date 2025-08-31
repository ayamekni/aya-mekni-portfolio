import React, { useState, useEffect } from 'react';

export const AnimatedLaptop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const codeLines = [
    "import pandas as pd",
    "import numpy as np",
    "from sklearn.model_selection import train_test_split",
    "from sklearn.ensemble import RandomForestClassifier",
    "",
    "# Loading dataset",
    "data = pd.read_csv('dataset.csv')",
    "X = data.drop('target', axis=1)",
    "y = data['target']",
    "",
    "# Training AI model",
    "model = RandomForestClassifier()",
    "model.fit(X_train, y_train)",
    "accuracy = model.score(X_test, y_test)",
    "print(f'Model accuracy: {accuracy:.2%}')",
  ];

  useEffect(() => {
    // Open laptop animation
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const typeCode = () => {
      if (currentIndex < codeLines.length) {
        const line = codeLines[currentIndex];
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
          if (charIndex <= line.length) {
            setCurrentCode(prev => {
              const lines = prev.split('\n');
              lines[currentIndex] = line.substring(0, charIndex);
              return lines.join('\n');
            });
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setTimeout(() => {
              setCurrentIndex(prev => prev + 1);
            }, 300);
          }
        }, 50);

        return () => clearInterval(typeInterval);
      }
    };

    const timer = setTimeout(typeCode, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex, isOpen]);

  return (
    <div className="relative w-80 h-60 mx-auto">
      {/* Laptop Base */}
      <div className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg transform perspective-1000 rotateX-75">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent rounded-lg"></div>
      </div>

      {/* Laptop Screen */}
      <div 
        className={`absolute bottom-4 w-full h-52 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-2 border-slate-600 transition-all duration-1000 transform-gpu ${
          isOpen ? 'rotateX-0' : 'rotateX-95'
        }`}
        style={{
          transformOrigin: 'bottom center',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Screen Bezel */}
        <div className="absolute inset-2 bg-black rounded-md overflow-hidden">
          {/* Screen Content */}
          <div className="p-3 h-full bg-gradient-to-br from-slate-900 to-black text-green-400 font-mono text-xs overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-green-400/30">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-green-400/70">AI_Development.py</span>
            </div>
            
            {/* Code Content */}
            <div className="space-y-1">
              <pre className="whitespace-pre-wrap">
                {currentCode}
                <span className="animate-pulse text-green-400">|</span>
              </pre>
            </div>
          </div>

          {/* Screen Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-purple-500/5 pointer-events-none"></div>
        </div>

        {/* Screen Reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg pointer-events-none"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Keyboard Typing Indicator */}
      {isOpen && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};