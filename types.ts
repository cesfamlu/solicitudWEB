
export interface Solicitud {
  'id': number;
  'Tipo de Solicitud': string | null;
  'Via Solicitud': string | null;
  'Detalle Solicitud': string | null;
  'Destino Solicitud': string | null;
  'GES': string | null;
  'Descripcion Solicitud': string;
  'Documento Fisico'?: string; // Campo opcional para el enlace al documento
}
