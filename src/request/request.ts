import { SedeType } from "../program/program";

/**
 * Tipos de solicitud del sistema.
 */
export enum RequestType {
    Vacaciones = 'Vacaciones',
    Cumpleanos = 'Cumpleaños',
    Incapacidad = 'Incapacidad',
    PermisoSinGoceDeSalario = 'Permiso sin goce de salario'
}

/**
 * Estados de una solicitud del sistema.
 */
export enum RequestStatus {
    Pendiente = 'Pendiente',
    Aprobada = 'Aprobada',
    Rechazada = 'Rechazada'
}

/**
 * Representa la solicitud de vacaciones de un cuidador.
 */
export interface Request {
    /** Identificador único de la solicitud. */
    id: string;

    /** Nombre del cuidador solicitante. */
    caregiverName: string;

    /** Correo del cuidador solicitante. */
    email: string;

    /** Nombre del programa. */
    programName: string;

    /** Tipo de solicitud - ver {@link RequestType}. */
    requestType: RequestType;

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
    
    /** Motivo de rechazo o aprobación de la solicitud. */
    observation: string;
}