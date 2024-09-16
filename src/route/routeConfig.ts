import { ReactNode } from 'react';
import { UserRole } from "../user/user";

/** Constantes para la caché del navegador. */
export const STORAGE_KEY = {
    USER_INFO: 'userInfo',
    ROUTES: 'routes',
};

/** Representa un item de menú de navegación. */
export type NavigationItem = {
    /** Etiqueta que se muestra en el menú. */
    label: string;
    
    /** Ícono de React asociado. */
    icon?: ReactNode;

    /** Atributo opcional. Enlace asociado al menú. */
    link?: string;

    /** Atributo opcional. Lista de menús hijos. */
    children?: NavigationItem[];

    /** Atributo opcional. Indica si el item de navegación está seleccionado. */
    selected?: boolean;

    /** Atributo opcional. Indica si el menú está desplegado o no (en caso de tener páginas hijas). */
    expanded?: boolean;

    /** Posición respecto a las páginas del mismo nivel. */
    order: number;
};

/** Representa la configuración de ruta del navegador. */
export interface RouteConfig {
    /** Etiqueta que se muestra en el menú. */
    label: string;

    /** Enlace útil para el enlace de la aplicación. */
    link: string;

    /** Atributo opcional. String que se utiliza para hacer match con el ícono que se utiliza dentro del menú. */
    icon?: string;

    /** String que se utiliza para hacer match con la página que se utiliza en la aplicación. */
    page: string;

    /** Lista de roles de usuario permitidos para acceder a la página. */
    allowedRoles: UserRole[];

    /** Atributo opcional. Lista de las páginas hijas (submenús). */
    children?: RouteConfig[];

    /** Posición con la que se desplegará en el menú, con respecto a las páginas del mismo nivel (hermanos). */
    order: number;
}