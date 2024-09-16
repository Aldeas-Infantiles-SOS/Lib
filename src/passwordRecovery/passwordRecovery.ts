/**
   * Representa la recuperación de contraseña de un usuario ya registrado en el sistema.
*/

export interface PasswordRecoveryInfo {
    /** Correo del usuario para la recuperación de la contraseña. */
    userEmail: string;

    /** Contraseña temporal asignada. */
    temporalPassword: string;

    /** Fecha y hora de expiración de la contraseña temporal. */
    temporalPasswordExpirationDate: Date;

    //** Token de autenticación asignado. */
    token: string;

    /** Fecha y hora de expiración del token de autenticación. */
    tokenExpirationDate: Date;
}