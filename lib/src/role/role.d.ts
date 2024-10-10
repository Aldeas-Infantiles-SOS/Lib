import { Shift } from "../shift/shift";
/** Representa un rol del sistema. */
export interface RoleInfo {
    /** Grupo asociado al rol. */
    group: string;
    /** Fecha asociada al rol. */
    date: Date;
    /** Turno plantilla asociada. */
    shift: Shift;
    /** Nombre de evento. */
    event: string;
    /** Nombre del cuidador asociado. */
    caregiverName: string;
    /** Id de firebase del cuidador. */
    firebaseCaregiverId: string;
}
