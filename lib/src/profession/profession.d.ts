import { SedeType } from "../program/program";
/**
   * Representa una profesión en el sistema.
*/
export interface ProfessionInfo {
    /** Identificador único de la profesión. */
    id: string;
    /** Nombre de la profesión. */
    name: string;
    /** Hora de inicio. */
    startTime: string;
    /** Hora en que finaliza. */
    endTime: string;
    /** Descripción de la profesión. */
    description: string;
    /** Estado de la profesión. */
    state: boolean;
    /** Sede asociada a la profesión del usuario. */
    office: SedeType;
}
