import { SedeType } from "../program/program";
/**
 * Representa un evento del sistema.
 */
export interface EventInfo {
    /** Nombre del cuidador asociado al evento. */
    caregiverName: string;
    /** Fecha asociada al evento. */
    date: Date;
    /** Nombre del grupo asociado al evento. */
    groupName: string;
    /** Descripción del evento. */
    description: string;
    /** Nombre del programa asociado al evento. */
    programName?: string;
    /** Sede asociada al evento  - ver {@link SedeType}. */
    office?: SedeType;
}
