/**
 * Tipo de usuario en el sistema.
 */
export type UserRole = 'Admin' | 'Operador' | 'Cuidador';
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
    /** URL de la foto de perfil (almacenada en Firebase Storage). */
    profilePhoto: string;
    /** Tipo de usuario - ver {@link UserType}. */
    userType: UserRole;
    /** Puesto de trabajo. */
    jobPosition: string;
    /** Fecha y hora de creacion. */
    created: number;
    /** Fecha y hora de ultima actualizacion. */
    lastUpdate: number;
    /** Indíca si el usuario tiene una contraseña temporal. */
    tempPass: boolean;
}
