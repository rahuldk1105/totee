import React, { useEffect, useState } from 'react';
import logo from '../assets/about_img.png';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      // Remove preloader after fade out animation completes
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Match this with the CSS transition duration
      
      return () => clearTimeout(removeTimer);
    }, 2000); // Adjust loading time as needed
    
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-64 h-64 md:w-96 md:h-96 object-contain animate-pulse"
        />
      </div>
    </div>
  );
};

export default Preloader;