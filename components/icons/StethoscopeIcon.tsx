import React from 'react';

export const StethoscopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75L18 18m-8.25-8.25L5.25 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h.008v.008H9.75v-.008z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 6H3.75v1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18v1.5h-1.5" />
    </svg>
);