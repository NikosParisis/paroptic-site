import React from 'react';
import iconLogo from '/logo_colored.png'; // Προσαρμόστε τη διαδρομή αν είναι αλλού

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Διόρθωση του Logo για να μην είναι stretched */}
      <img src={iconLogo} alt="ParOptic Icon" className="h-8 w-auto" />

      {/* Text Logo */}
      <span className="text-2xl font-bold">
        <span className="text-gray-700">Par</span>
        <span className="text-blue-600">Optic</span>
      </span>
    </div>
  );
}

export default Logo;
