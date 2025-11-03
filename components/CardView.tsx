import React from 'react';
import { Solicitud } from '../types';
import { FileLinkIcon } from './icons/FileLinkIcon';
import { GesBadge } from './GesBadge';

interface CardViewProps {
  solicitudes: Solicitud[];
}

const DataRow: React.FC<{ label: string; value: string | null }> = ({ label, value }) => (
  <div>
    <p className="text-xs text-textSecondary">{label}</p>
    <p className="text-sm font-medium text-textPrimary">{value || 'N/A'}</p>
  </div>
);


export const CardView: React.FC<CardViewProps> = ({ solicitudes }) => {
  if (solicitudes.length === 0) {
    return <div className="text-center py-16 text-textSecondary">
        <h3 className="text-lg font-semibold text-textPrimary">No se encontraron resultados</h3>
        <p className="mt-1">Intenta ajustar tus filtros de búsqueda.</p>
    </div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {solicitudes.map((solicitud) => (
        <div key={solicitud.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="p-5 flex-grow">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-primary-dark">{solicitud['Tipo de Solicitud'] || 'Sin Tipo'}</h5>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <DataRow label="Vía de Solicitud" value={solicitud['Via Solicitud']} />
              <DataRow label="Destino" value={solicitud['Destino Solicitud']} />
            </div>

            <p className="mb-3 font-normal text-sm text-gray-700">{solicitud['Descripcion Solicitud']}</p>
          </div>
          <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center rounded-b-lg">
            <GesBadge ges={solicitud.GES} />
            {solicitud['Documento Fisico'] !== undefined && (
              <a
                href={solicitud['Documento Fisico']}
                target="_blank"
                rel="noopener noreferrer"
                title="Ver documento físico"
                className="inline-block text-primary-light hover:text-primary-dark transition-colors"
              >
                <FileLinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};