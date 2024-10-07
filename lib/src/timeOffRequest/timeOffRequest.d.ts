import { SedeType } from "../program/program";
/**
 * Representa la solicitud de vacaciones de un cuidador.
 */
export interface TimeOffRequest {
    /** Nombre del cuidador. */
    caregiverName: string;
    /** Fecha y hora de inicio. */
    startTime: Date;
    /** Fecha y hora en que finaliza. */
    endTime: Date;
    /** Tipo de solicitud. */
    resquestType: string;
    /** Sede a la que pertenece el cuidador - ver {@link SedeType}. */
    office: SedeType;
    /** Nombre del programa. */
    programName: string;
    /** Estado de la solicitud. */
    status: string;
}
