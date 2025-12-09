import React from 'react';
import { ImageCard } from './components/ImageCard';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gray-950">
      {/* Subtle ambient glow behind the image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <main className="z-10 w-full max-w-6xl px-4 flex justify-center">
        <ImageCard />
      </main>
    </div>
  );
};

export default App;