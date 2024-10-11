export enum DayOfWeek {
    Sunday = 'Domingo',
    Monday = 'Lunes',
    Tuesday = 'Martes',
    Wednesday = 'Miércoles',
    Thursday = 'Jueves',
    Friday = 'Viernes',
    Saturday = 'Sábado'
}

/**
 * Representa la asociación de turnos con los grupos del sistema.
 */
export interface ShiftInGroupInfo {
    /** Id de firebase del grupo al cual está vinculado el turno. */
    firebaseGroupId: string;
  
    /** Nombre del turno. */
    name: string;
  
    /** Nomenclatura del turno. */
    nomenclature: string;
  
    /** Día de la semana asociado al turno - ver {@link DayOfWeek}.*/
    day: DayOfWeek;
  
    /** Indica si el turno se encuentra activo o no. */
    state: boolean;
}