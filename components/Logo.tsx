import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'light' | 'small';
  showTagline?: boolean;
}

export default function Logo({ variant = 'default', showTagline = true }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className="flex items-center gap-3">
      <svg 
        width={variant === 'small' ? 28 : 36} 
        height={variant === 'small' ? 28 : 36} 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          cx="18" 
          cy="18" 
          r="17" 
          stroke={isLight ? "#F5F1E9" : "#0F3D2E"} 
          strokeWidth="2" 
        />
        <path 
          d="M12 24V12L18 16L24 12V24" 
          stroke={isLight ? "#F5F1E9" : "#0F3D2E"} 
          strokeWidth="2.25" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <circle 
          cx="18" 
          cy="21" 
          r="2.25" 
          fill={isLight ? "#F5F1E9" : "#B87333"} 
        />
      </svg>
      <div>
        <div className={`font-semibold tracking-[-0.5px] ${variant === 'small' ? 'text-lg' : 'text-2xl'} serif ${isLight ? 'text-[#F5F1E9]' : 'text-[#0F3D2E]'}`}>
          Restaurador
        </div>
        {showTagline && (
          <div className={`text-[10px] -mt-1 ${isLight ? 'text-[#F5F1E9]/70' : 'text-[#6B665F]'}`}>
            CARDANO • CIP-0113
          </div>
        )}
      </div>
    </Link>
  );
}
