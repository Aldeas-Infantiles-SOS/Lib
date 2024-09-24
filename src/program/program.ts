/**
 * Tipo de sede en el sistema.
 */
export enum SedeType {
  SantaAna = 'Santa Ana',
  TresRios = 'Tres Ríos',
  Limon = 'Limón'
}

/**
 * Representa la información de programa.
 */
export interface ProgramInfo {
  /** Nombre del programa. */
  name: string;

  /** Descripción del programa. */
  description: string;

  /** Estado del programa. */
  estate: string;

  /** Sede a la cual pertenece el programa. */
  sedeType: SedeType;
}