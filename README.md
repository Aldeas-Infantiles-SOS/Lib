# SOSLib

## Versión

1.5.0

## Notas de la versión

### Modelo para la información de routing creado

El nombre de la colección es ***RoutingData*** y los atributos agregados son:  

- Etiqueta que se muestra en el menú.
  - Nombre atributo: label.
  - Tipo: string.
- Enlace para el routing de la aplicación.
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
