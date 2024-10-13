import { DocumentReference, DocumentData } from "firebase/firestore";
export declare enum DayOfWeek {
    Sunday = "Domingo",
    Monday = "Lunes",
    Tuesday = "Martes",
    Wednesday = "Mi\u00E9rcoles",
    Thursday = "Jueves",
    Friday = "Viernes",
    Saturday = "S\u00E1bado"
}
/**
 * Representa la asociación de turnos con los grupos del sistema.
 */
export interface ShiftInGroupInfo {
}
/** Representa la información de turno de un día en específico. */
export interface ShiftDayInfo extends ShiftInGroupInfo {
    /** Referencia al turno. */
    shiftId: DocumentReference<DocumentData>;
    /** Día de la semana asociado al turno - ver {@link DayOfWeek}.*/
    day: DayOfWeek;
}
