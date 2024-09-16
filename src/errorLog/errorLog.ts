/**
   * Representa un registro de error del sistema.
*/

export interface ErrorLogInfo {
    /** Descripción del mensaje de error. */
    message: string;

    /** Stack trace, lista de las llamadas a funciones que llevaron a el error. */
    stack: string;

    /** Stack trace de los componentes en React, jerarquía de los componentes implicados en el error. */
    componentStack: string;

    /** Correo del usuario registrado con el error. */
    userEmail: string;

    /** Información adicinal del error. */
    additionalData: string;

    /** Fecha y hora en que se registra el error. */
    timestamp: Date;
}