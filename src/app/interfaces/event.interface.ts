export interface Event {
    id: string;
    nombre: string;
    fecha: string;
    lugar: string;
    image: string;
    headliners?: string[];
    performers?: string[];
    categoria_id: string;
    descripcion: string;
    map: string;
    estadio_id: string;
}