import { DocumentData, DocumentReference } from "firebase/firestore";
import { DayOfWeek } from "../group/shiftInGroup";
import { SedeType } from "../program/program";
/**
 * Representa un rol del sistema.
 */
export interface RoleInfo {
    /** Identificar único del del rol. */
    id: string;
    /** Nombre del cuidador asociado al rol. */
    caregiverName?: string;
    /** Identificador del cuidador asociado al rol. */
    caregiverId?: string;
    /** Fecha asociada al rol. */
    date?: Date;
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
    /** Día de la semana asociado al rol. */
    dayOfWeek: DayOfWeek;
    /** Índice de fila asociado al rol. */
    rowIndex: number;
    /** Nombre del programa asociado al rol. */
    programName?: string;
    /** Sede asociada al rol  - ver {@link SedeType}. */
    office?: SedeType;
}
