import { DocumentData, DocumentReference } from "firebase/firestore";
import { DayOfWeek } from "../group/shiftInGroup";

/**
 * Representa un rol del sistema.
 */
export interface RoleInfo {
    /** Nombre del cuidador asociado al rol. */
    caregiverName: string;

    /** Fecha asociada al rol. */
    date: Date;

    /** Nombre del grupo asociado al rol. */
    groupName: string;

    /** Identificador de evento. */
    eventId?: DocumentReference<DocumentData>[];
    
    /** Color en hexadecimal para representar al rol. */
    color: string;
    
    /** Nomenclatura del rol. */
    nomenclature: string;
    
    /** Hora de inicio. */
    startTime: string;
    
    /** Hora en que finaliza. */
    endTime: string;
    
    /** Nombre del turno asociado al rol. */
    shiftName: string;
    
    /** Día de la semana associado al rol. */
    dayOfWeek: DayOfWeek;
    
    /** Índice de fila asociado al rol. */
    rowIndex: number;
}