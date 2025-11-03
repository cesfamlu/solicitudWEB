import React from 'react';
import { TableIcon } from './icons/TableIcon';
import { CardIcon } from './icons/CardIcon';

type ViewMode = 'table' | 'card';

interface ViewSwitcherProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const baseButtonClass = "p-2 rounded-md transition-colors duration-200";
const activeButtonClass = "bg-primary-dark text-white shadow";
const inactiveButtonClass = "text-gray-500 hover:bg-gray-200";

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className="flex justify-end items-center mb-4">
        <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
                onClick={() => setViewMode('card')}
                className={`${baseButtonClass} ${viewMode === 'card' ? activeButtonClass : inactiveButtonClass}`}
                aria-label="Vista de tarjetas"
                title="Vista de tarjetas"
            >
                <CardIcon className="w-5 h-5" />
            </button>
            <button
                onClick={() => setViewMode('table')}
                className={`${baseButtonClass} ${viewMode === 'table' ? activeButtonClass : inactiveButtonClass}`}
                aria-label="Vista de tabla"
                title="Vista de tabla"
            >
                <TableIcon className="w-5 h-5" />
            </button>
        </div>
    </div>
  );
};