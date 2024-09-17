/**
   * Representa la recuperación de contraseña de un usuario ya registrado en el sistema.
*/
export interface PasswordRecoveryInfo {
    /** Correo del usuario para la recuperación de la contraseña. */
    userEmail: string;
    /** Fecha y hora de expiración de la contraseña temporal. */
    temporalPasswordExpirationDate: Date;
    token: string;
    /** Fecha y hora de expiración del token de autenticación. */
    tokenExpirationDate: Date;
}
