import React from 'react';

const GraphBg = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Fine grid pattern */}
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(0,0,0,0.03)"
              strokeWidth="0.5"
            />
          </pattern>
          
          {/* Major grid pattern */}
          <pattern
            id="majorGrid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="1"
            />
          </pattern>
          
          {/* Gradient overlay */}
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.9)" />
          </linearGradient>
        </defs>
        
        {/* Apply patterns */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#majorGrid)" />
        <rect width="100%" height="100%" fill="url(#fadeGradient)" />
      </svg>
      
      {/* Floating graph elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <path
            d="M 0,80 Q 50,20 100,40 T 200,10"
            fill="none"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="2"
            className="animate-pulse"
          />
          <circle cx="0" cy="80" r="3" fill="rgba(59,130,246,0.3)" />
          <circle cx="100" cy="40" r="3" fill="rgba(16,185,129,0.3)" />
          <circle cx="200" cy="10" r="3" fill="rgba(249,115,22,0.3)" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-20 opacity-5">
        <svg width="150" height="80" viewBox="0 0 150 80">
          <path
            d="M 0,60 L 30,40 L 60,45 L 90,25 L 120,35 L 150,15"
            fill="none"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          {[0, 30, 60, 90, 120, 150].map((x, i) => {
            const y = [60, 40, 45, 25, 35, 15][i];
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2"
                fill="rgba(168,85,247,0.3)"
              />
            );
          })}
        </svg>
      </div>
      
      <div className="absolute top-1/2 left-1/4 opacity-5">
        <svg width="120" height="60" viewBox="0 0 120 60">
          <path
            d="M 0,50 Q 20,10 40,30 Q 60,5 80,25 Q 100,45 120,20"
            fill="none"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </svg>
      </div>
    </div>
  );
};

// Usage example with your Hero component
const WebsiteWithBackground = () => {
  return (
    <div className="relative min-h-screen">

      
      {/* Your existing content goes here */}
     
    </div>
  );
};

export default WebsiteWithBackground;