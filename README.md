# SOSLib

## Versión

1.6.1

## Notas de la versión

### Modelo para user actualizado

Se agregaron los siguientes atributos:

- Indíca si el usuario está habilitado o deshabilitado.
  - Nombre atributo: enabled.
  - Tipo: boolean.
- Documento de indentidad.
  - Nombre atributo: identityCard.
  - Tipo: string.
- Sede a la que pertenece el usuario.
  - Nombre atributo: office.
  - Tipo: SedeType.
- Atributo opcional. Programa asignado al usuario (no requerido para administradosres).
  - Nombre atributo: programName.
  - Tipo: string.

Se agregó el rol ***SuperAdmin*** a **UserRole**.
