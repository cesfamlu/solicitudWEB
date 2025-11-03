import React from 'react';

export const BuildingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M6.75 21v-2.25a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V21m-8.25-18h8.25a2.25 2.25 0 012.25 2.25v3.75a2.25 2.25 0 01-2.25 2.25h-8.25A2.25 2.25 0 014.5 9.75V5.25A2.25 2.25 0 016.75 3z" 
    />
  </svg>
);