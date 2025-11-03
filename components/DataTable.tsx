import React from 'react';
import { Solicitud } from '../types';
import { FileLinkIcon } from './icons/FileLinkIcon';
import { GesBadge } from './GesBadge';

interface DataTableProps {
  solicitudes: Solicitud[];
}

export const DataTable: React.FC<DataTableProps> = ({ solicitudes }) => {
  if (solicitudes.length === 0) {
    return <div className="text-center py-16 text-textSecondary">
        <h3 className="text-lg font-semibold text-textPrimary">No se encontraron resultados</h3>
        <p className="mt-1">Intenta ajustar tus filtros de búsqueda.</p>
    </div>;
  }

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="py-3 px-6">Tipo</th>
            <th scope="col" className="py-3 px-6">Vía</th>
            <th scope="col" className="py-3 px-6">Destino</th>
            <th scope="col" className="py-3 px-6">Descripción</th>
            <th scope="col" className="py-3 px-6 text-center">GES</th>
            <th scope="col" className="py-3 px-6 text-center">Documento</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => (
            <tr key={solicitud.id} className="bg-white border-b hover:bg-gray-50">
              <td className="py-4 px-6 font-medium text-gray-900">{solicitud['Tipo de Solicitud'] || 'N/A'}</td>
              <td className="py-4 px-6">{solicitud['Via Solicitud'] || 'N/A'}</td>
              <td className="py-4 px-6">{solicitud['Destino Solicitud'] || 'N/A'}</td>
              <td className="py-4 px-6 max-w-md">{solicitud['Descripcion Solicitud']}</td>
              <td className="py-4 px-6 text-center">
                <GesBadge ges={solicitud.GES} />
              </td>
              <td className="py-4 px-6 text-center">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};