import React, { useMemo } from 'react';
import { Solicitud } from '../types';
import { DocumentIcon } from './icons/DocumentIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { StethoscopeIcon } from './icons/StethoscopeIcon';
import { BuildingIcon } from './icons/BuildingIcon';

interface DashboardProps {
    solicitudes: Solicitud[];
    setGesFilter: (value: string) => void;
    setTipoFilter: (value: string) => void;
    setDestinoFilter: (value: string) => void;
}

interface StatCardProps {
    icon: React.ReactNode;
    value: string | number;
    label: string;
    color: string;
    onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color, onClick }) => (
    <div
        className={`bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 transition-all duration-300 ${onClick ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1' : ''}`}
        onClick={onClick}
    >
        <div className={`rounded-full p-3 ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            <p className="text-sm text-gray-500">{label}</p>
        </div>
    </div>
);


export const Dashboard: React.FC<DashboardProps> = ({ solicitudes, setGesFilter, setTipoFilter, setDestinoFilter }) => {
    const stats = useMemo(() => {
        const total = solicitudes.length;
        const gesCount = solicitudes.filter(s => String(s.GES).toLowerCase().trim() === 'si' || String(s.GES).toLowerCase().trim() === 'sí').length;

        const getTopValue = (key: keyof Solicitud) => {
            if (solicitudes.length === 0) return { name: 'N/A', count: 0 };
            const counts = solicitudes.reduce((acc, s) => {
                const value = s[key];
                if (value) {
                    acc[value] = (acc[value] || 0) + 1;
                }
                return acc;
            }, {} as Record<string, number>);
            
            const topEntry = Object.entries(counts).sort(([, a], [, b]) => b - a)[0];
            return topEntry ? { name: topEntry[0], count: topEntry[1] } : { name: 'N/A', count: 0 };
        };

        const topTipo = getTopValue('Tipo de Solicitud');
        const topDestino = getTopValue('Destino Solicitud');

        return { total, gesCount, topTipo, topDestino };
    }, [solicitudes]);

    return (
        <div className="my-8 border-t border-b border-gray-200 py-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 ml-1">Vista Rápida</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <StatCard
                    icon={<DocumentIcon className="w-6 h-6 text-blue-800" />}
                    value={stats.total}
                    label="Solicitudes Totales"
                    color="bg-blue-100"
                />
                <StatCard
                    icon={<ShieldCheckIcon className="w-6 h-6 text-green-800" />}
                    value={stats.gesCount}
                    label="Solicitudes GES"
                    color="bg-green-100"
                    onClick={() => setGesFilter('si')}
                />
                <StatCard
                    icon={<StethoscopeIcon className="w-6 h-6 text-indigo-800" />}
                    value={stats.topTipo.count}
                    label={`Principal: ${stats.topTipo.name}`}
                    color="bg-indigo-100"
                    onClick={() => stats.topTipo.name !== 'N/A' && setTipoFilter(stats.topTipo.name)}
                />
                <StatCard
                    icon={<BuildingIcon className="w-6 h-6 text-amber-800" />}
                    value={stats.topDestino.count}
                    label={`Principal: ${stats.topDestino.name}`}
                    color="bg-amber-100"
                    onClick={() => stats.topDestino.name !== 'N/A' && setDestinoFilter(stats.topDestino.name)}
                />
            </div>
        </div>
    );
};