export interface PlanoEstadio {
    id: string;
    nombre: string;
    seatRows: {
        row: string;
        seats: number;
        valor: number;
    }[];
    
}

