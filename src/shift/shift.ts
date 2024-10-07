/**
   * Representa un turno en el sistema.
*/
export interface Shift {
    /** Nombre del turno. */
    shiftName: string;

    /** Nomenclatura del turno. */
    nomenclature: string;

    /** Hora de inicio. */
    startTime: string;

    /** Hora en que finaliza. */
    endTime: string;

    /** Programa del turno. */
    program: string;

    /** Color en hexadecimal para representar el turno. */
    color: string;

    /** Estado del turno. */
    state: boolean;
}