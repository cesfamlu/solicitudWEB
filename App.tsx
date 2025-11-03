import React, { useState, useMemo, useEffect } from 'react';
import { SOLICITUDES_DATA } from './constants';
import { Solicitud } from './types';
import { FilterBar } from './components/FilterBar';
import { DataTable } from './components/DataTable';
import { Dashboard } from './components/Dashboard';
import { CardView } from './components/CardView';
import { ViewSwitcher } from './components/ViewSwitcher';

const App: React.FC = () => {
  const [solicitudes] = useState<Solicitud[]>(SOLICITUDES_DATA);
  const [filteredSolicitudes, setFilteredSolicitudes] = useState<Solicitud[]>(solicitudes);
  const [viewMode, setViewMode] = useState<'table' | 'card'>('card');

  const [searchTerm, setSearchTerm] = useState('');
  const [tipoFilter, setTipoFilter] = useState('all');
  const [viaFilter, setViaFilter] = useState('all');
  const [destinoFilter, setDestinoFilter] = useState('all');
  const [gesFilter, setGesFilter] = useState('all');

  const filterOptions = useMemo(() => {
    const getUniqueValues = (key: keyof Solicitud) => {
      const values = new Set(solicitudes.map(s => s[key]).filter(Boolean));
      return Array.from(values).sort() as string[];
    };

    return {
      tipos: getUniqueValues('Tipo de Solicitud'),
      vias: getUniqueValues('Via Solicitud'),
      destinos: getUniqueValues('Destino Solicitud'),
    };
  }, [solicitudes]);
  
  useEffect(() => {
    let result = solicitudes;

    if (searchTerm) {
      result = result.filter(s =>
        Object.values(s).some(val =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (tipoFilter !== 'all') {
      result = result.filter(s => s['Tipo de Solicitud'] === tipoFilter);
    }

    if (viaFilter !== 'all') {
      result = result.filter(s => s['Via Solicitud'] === viaFilter);
    }

    if (destinoFilter !== 'all') {
      result = result.filter(s => s['Destino Solicitud'] === destinoFilter);
    }
    
    if (gesFilter !== 'all') {
        const gesValue = gesFilter.toLowerCase();
        result = result.filter(s => String(s['GES']).toLowerCase().trim() === gesValue);
    }

    setFilteredSolicitudes(result);
  }, [searchTerm, tipoFilter, viaFilter, destinoFilter, gesFilter, solicitudes]);

  const resetFilters = () => {
    setSearchTerm('');
    setTipoFilter('all');
    setViaFilter('all');
    setDestinoFilter('all');
    setGesFilter('all');
  };

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <header className="bg-surface shadow-md border-b-4 border-primary-dark">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
           <div className="flex items-center space-x-4">
             <img src="/logo.png" alt="Logo CESFAM La Unión" className="h-12 w-auto"/>
             <div>
                <h1 className="text-xl font-bold text-primary-dark tracking-tight">
                    CESFAM La Unión
                </h1>
                <p className="text-sm text-textSecondary">
                    Gestor de Solicitudes Clínicas
                </p>
             </div>
           </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        <div className="bg-surface rounded-lg shadow-lg p-4 md:p-6">
          <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            tipoFilter={tipoFilter}
            setTipoFilter={setTipoFilter}
            viaFilter={viaFilter}
            setViaFilter={setViaFilter}
            destinoFilter={destinoFilter}
            setDestinoFilter={setDestinoFilter}
            gesFilter={gesFilter}
            setGesFilter={setGesFilter}
            filterOptions={filterOptions}
            resetFilters={resetFilters}
            resultCount={filteredSolicitudes.length}
          />

          <Dashboard 
            solicitudes={solicitudes}
            setGesFilter={setGesFilter}
            setTipoFilter={setTipoFilter}
            setDestinoFilter={setDestinoFilter}
          />

          <div className="mt-8">
            <ViewSwitcher viewMode={viewMode} setViewMode={setViewMode} />
            {viewMode === 'table' ? (
              <DataTable solicitudes={filteredSolicitudes} />
            ) : (
              <CardView solicitudes={filteredSolicitudes} />
            )}
          </div>
        </div>
      </main>

       <footer className="text-center py-4 text-textSecondary text-sm">
          <p>&copy; {new Date().getFullYear()} CESFAM La Unión Area de Informatica - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;