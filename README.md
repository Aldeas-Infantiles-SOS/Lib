# SOSLib

## Versión

1.4.0

## Notas de la versión

### Modelo para la configuración de rutas de navegación creado

El nombre de la colección es ***RouteConfig*** y los atributos agregados son:  

- Etiqueta que se muestra en el menú.
  - Nombre atributo: label.
  - Tipo: string.
- Enlace útil para el enlace de la aplicación.
  - Nombre atributo: link.
  - Tipo: string.
- String que se utiliza para hacer match con el ícono que se utiliza dentro del menú.
  - Nombre atributo: icon.
  - Tipo: string.
  - Atributo opcional.
- String que se utiliza para hacer match con la página que se utiliza en la aplicación.
  - Nombre atributo: page.
  - Tipo: string.
- Lista de roles de usuario permitidos para acceder a la página.
  - Nombre atributo: allowedRoles.
  - Tipo: UserRole[].
- Lista de las páginas hijas (submenús).
  - Nombre atributo: children.
  - Tipo: RouteConfig[].
  - Atributo opcional.
- Posición con la que se desplegará en el menú, con respecto a las páginas del mismo nivel (hermanos).
  - Nombre atributo: order.
  - Tipo: number.

### Constante para la caché de del navegador creado

`const STORAGE_KEY = {
  USER_INFO: 'userInfo',
  ROUTES: 'routes',
}`

### Type para los items de navegación del menú creado

El nombre del type es ***NavigationItem*** y los atributos agregados son:

- Etiqueta que se muestra en el menú.
  - Nombre atributo: label.
  - Tipo: string.
- Ícono de React asociado.
  - Nombre atributo: icon.
  - Tipo: ReactNode.
  - Atributo opcional.
- Enlace asociado al menú.
  - Nombre atributo: link.
  - Tipo: string.
  - Atributo opcional.
- Lista de menús hijos.
  - Nombre atributo: children.
  - Tipo: NavigationItem[].
  - Atributo opcional.
- Indica si el item de navegación está seleccionado.
  - Nombre atributo: selected.
  - Tipo: boolean.
  - Atributo opcional.
- Indica si el menú está desplegado o no (en caso de tener páginas hijas).
  - Nombre atributo: expanded.
  - Tipo: boolean.
  - Atributo opcional.
- Posición respecto a las páginas del mismo nivel.
  - Nombre atributo: order.
  - Tipo: number.
  