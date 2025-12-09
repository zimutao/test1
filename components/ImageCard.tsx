import React, { useState } from 'react';

export const ImageCard: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // A high-quality, serene landscape image from Unsplash
  const imageUrl = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-2xl shadow-black/90 ring-1 ring-white/10 bg-gray-900">
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={imageUrl}
        alt="Serene Landscape"
        className={`w-full h-full object-cover transition-all duration-1000 ease-out 
          ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} 
          hover:scale-[1.01]`}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Very subtle inner shadow for depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
    </div>
  );
};