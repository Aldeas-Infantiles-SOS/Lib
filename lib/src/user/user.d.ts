import { SedeType } from "../program/program";
/**
 * Tipo de usuario en el sistema.
 */
export type UserRole = 'SuperAdmin' | 'Admin' | 'Operador' | 'Cuidador';
/**
 * Representa un usuario del sistema.
 */
export interface UserInfo {
    /** Id de firebase auth */
    firebaseUserId: string;
    /** Nombre. */
    firstName: string;
    /** Apellidos. */
    lastName: string;
    /** Correo electrónico. */
    email: string;
    /** Documento de indentidad. */
    identityCard: string;
    /** URL de la foto de perfil (almacenada en Firebase Storage). */
    profilePhoto: string;
    /** Tipo de usuario - ver {@link UserRole}. */
    userType: UserRole;
    /** Puesto de trabajo. */
    jobPosition: string;
    /** Fecha y hora de creacion. */
    created: number;
    /** Fecha y hora de ultima actualizacion. */
    lastUpdate: number;
    /** Indíca si el usuario tiene una contraseña temporal. */
    tempPass: boolean;
    /** Indíca si el usuario está habilitado o deshabilitado. */
    enabled: boolean;
    /** Sede a la que pertenece el usuario  - ver {@link SedeType}. */
    office: SedeType;
    /** Programa asignado al usuario (no requerido para administradosres). */
    programName?: string;
}
