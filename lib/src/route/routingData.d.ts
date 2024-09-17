import { RouteConfig } from "./routeConfig";
import { UserRole } from "../user/user";
/**
 * Representa la información de Routing.
 */
export interface RoutingData {
    /** Etiqueta que se muestra en el menú. */
    label: string;
    /** Enlace para el routing de la aplicación. */
    link: string;
    /** Atributo opcional. String que se utiliza para hacer match con el ícono que se utiliza dentro del menú. */
    icon?: string;
    /** String que se utiliza para hacer match con la página que se utiliza en la aplicación. */
    page: string;
    /** Lista de roles de usuario permitidos para acceder a la página. */
    allowedRoles: UserRole[];
    /** Atributo opcional. Lista de las páginas hijas (submenús). */
    children?: RouteConfig[];
}
