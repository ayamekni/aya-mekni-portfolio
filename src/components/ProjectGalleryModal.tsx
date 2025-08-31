import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, ImageIcon } from 'lucide-react';

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  }[];
}

export const ProjectGalleryModal: React.FC<ProjectGalleryModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  media
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  if (!isOpen || !media.length) return null;

  const currentMedia = media[currentIndex];
  const hasMultipleItems = media.length > 1;

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsVideoPlaying(false);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsVideoPlaying(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight' && hasMultipleItems) nextMedia();
    if (e.key === 'ArrowLeft' && hasMultipleItems) prevMedia();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div 
        className="relative bg-background/95 backdrop-blur-xl rounded-xl border border-border shadow-2xl max-w-6xl max-h-[90vh] w-full animate-scale-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <ImageIcon className="text-primary" size={20} />
            <h3 className="text-lg font-semibold text-foreground">{projectTitle}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground rounded-lg transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Media Content */}
        <div className="relative">
          {currentMedia.type === 'image' ? (
            <img
              src={currentMedia.url}
              alt={`${projectTitle} screenshot ${currentIndex + 1}`}
              className="w-full h-auto max-h-[70vh] object-contain rounded-b-2xl"
            />
          ) : (
            <div className="relative">
              <video
                src={currentMedia.url}
                className="w-full h-auto max-h-[70vh] object-contain rounded-b-2xl"
                controls={isVideoPlaying}
                autoPlay={isVideoPlaying}
                poster={currentMedia.thumbnail}
              />
              {!isVideoPlaying && (
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors duration-200"
                >
                  <div className="bg-cyan-500/90 hover:bg-cyan-400 rounded-full p-4 transition-colors duration-200">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </button>
              )}
            </div>
          )}

          {/* Navigation Arrows for Multiple Items */}
          {hasMultipleItems && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background text-muted-foreground hover:text-primary rounded-lg border border-border transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background text-muted-foreground hover:text-primary rounded-lg border border-border transition-all duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Media Counter */}
          {hasMultipleItems && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-lg border border-border text-sm">
              {currentIndex + 1} of {media.length}
            </div>
          )}
        </div>

        {/* Thumbnail Navigation for Multiple Items */}
        {hasMultipleItems && (
          <div className="p-4 border-t border-border">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {media.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsVideoPlaying(false);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex 
                      ? 'border-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Play className="text-primary" size={16} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};