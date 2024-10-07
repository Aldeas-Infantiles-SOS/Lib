/**
   * Representa una sesión del sistema.
*/
export interface SessionInfo {
    /** Fecha y hora de inicio de la sesión. */
    startTime: Date;

    /** Fecha y hora en que finaliza la sesión. */
    endTime: Date | null;

    /** Id de usuario. */
    userId: string;

    /** Id de sesión. */
    sessionId: string;
}