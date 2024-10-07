/** Tipos de estado del turno */
export declare enum ShiftState {
    Enaled = "Habilitado",
    Disabled = "Deshabilitado"
}
/**
   * Representa una turno en el sistema.
*/
export interface Shift {
    /** Nombre del turno. */
    shiftName: string;
    /** Nomenclatura del turno. */
    nomenclature: string;
    /** Fecha y hora de inicio. */
    startTime: Date;
    /** Fecha y hora en que finaliza. */
    endTime: Date;
    /** Programa del turno. */
    program: string;
    /** Color en hexadecimal para representar el turno. */
    color: string;
    /** Estado del turno - ver {@link ShiftState}. */
    state: ShiftState;
}
