import { SedeType } from "../program/program";
/**
 * Tipos de solicitud del sistema.
 */
export declare enum ResquestType {
    Vacaciones = "Vacaciones",
    Cumpleanos = "Cumplea\u00F1os",
    Incapacidad = "Incapacidad",
    PermisoSinGoceDeSalario = "Permiso sin goce de salario"
}
/**
 * Estados de una solicitud del sistema.
 */
export declare enum RequestStatus {
    Pendiente = "Pendiente",
    Aprobada = "Aprobada",
    Rechazada = "Rechazada"
}
/**
 * Representa la solicitud de vacaciones de un cuidador.
 */
export interface Request {
    /** Nombre del cuidador solicitante. */
    caregiverName: string;
    /** Nombre del programa. */
    programName: string;
    /** Tipo de solicitud - ver {@link ResquestType}. */
    resquestType: ResquestType;
    /** Fecha y hora de inicio. */
    startTime: Date;
    /** Fecha y hora en que finaliza. */
    endTime: Date;
    /** Descripción de la solicitud. */
    description: string;
    /** Sede a la que pertenece el cuidador - ver {@link SedeType}. */
    office: SedeType;
    /** Estado de la solicitud - ver {@link RequestStatus}. */
    status: RequestStatus;
}
