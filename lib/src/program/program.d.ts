/**
 * Tipo de sede en el sistema.
 */
export declare enum SedeType {
    SantaAna = "Santa Ana",
    TresRios = "Tres R\u00EDos",
    Limon = "Lim\u00F3n"
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
    /** Tipo de Sede a la cual pertenece el programa. */
    sedeType: SedeType;
}
