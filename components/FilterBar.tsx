import React from 'react';
import { SearchIcon } from './icons/SearchIcon';

interface FilterOptions {
  tipos: string[];
  vias: string[];
  destinos: string[];
}

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  tipoFilter: string;
  setTipoFilter: (value: string) => void;
  viaFilter: string;
  setViaFilter: (value: string) => void;
  destinoFilter: string;
  setDestinoFilter: (value: string) => void;
  gesFilter: string;
  setGesFilter: (value: string) => void;
  filterOptions: FilterOptions;
  resetFilters: () => void;
  resultCount: number;
}

const selectStyles = "w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light text-textPrimary";
const inputStyles = "w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light text-textPrimary placeholder-gray-400";


export const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  tipoFilter,
  setTipoFilter,
  viaFilter,
  setViaFilter,
  destinoFilter,
  setDestinoFilter,
  gesFilter,
  setGesFilter,
  filterOptions,
  resetFilters,
  resultCount,
}) => {
  return (
    <div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Buscar por cualquier campo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={inputStyles}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <select value={tipoFilter} onChange={(e) => setTipoFilter(e.target.value)} className={selectStyles}>
          <option value="all">Todo Tipo de Solicitud</option>
          {filterOptions.tipos.map(option => <option key={option} value={option}>{option}</option>)}
        </select>

        <select value={viaFilter} onChange={(e) => setViaFilter(e.target.value)} className={selectStyles}>
          <option value="all">Toda Vía de Solicitud</option>
          {filterOptions.vias.map(option => <option key={option} value={option}>{option}</option>)}
        </select>

        <select value={destinoFilter} onChange={(e) => setDestinoFilter(e.target.value)} className={selectStyles}>
          <option value="all">Todo Destino de Solicitud</option>
          {filterOptions.destinos.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        
        <select value={gesFilter} onChange={(e) => setGesFilter(e.target.value)} className={selectStyles}>
          <option value="all">Todo GES</option>
          <option value="si">GES: Sí</option>
          <option value="no">GES: No</option>
        </select>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-textSecondary">
        <p className="mb-2 sm:mb-0">
          <span className="font-semibold text-textPrimary">{resultCount}</span> {resultCount === 1 ? 'resultado encontrado' : 'resultados encontrados'}
        </p>
        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-textPrimary rounded-lg transition-colors"
        >
          Limpiar Filtros
        </button>
      </div>

    </div>
  );
};