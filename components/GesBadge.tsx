import React from 'react';

interface GesBadgeProps {
  ges: string | null;
}

export const GesBadge: React.FC<GesBadgeProps> = ({ ges }) => {
    if (!ges) return <span className="text-gray-400">N/A</span>;

    const lowerGes = String(ges).toLowerCase().trim();
    const isGes = lowerGes === 'si' || lowerGes === 'sí';
    const bgColor = isGes ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
            {isGes ? 'Sí' : 'No'}
        </span>
    );
};