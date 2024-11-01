/**
 * Representa los grupos del sistema.
 */
export interface GroupInfo {
  /** Id de firebase del grupo. */
  firebaseGroupId: string;

  /** Nombre del grupo. */
  name: string;

  /** Descripción del grupo. */
  description: string;

  /** Indica si el grupo se encuentra activo o no. */
  state: boolean;

  /** Programa al cual pertenece el grupo. */
  program: string
}