# SOSLib

## Versión

1.6.0

## Notas de la versión

### Modelo para el Programa creado

- El nombre de la colección es ***ProgramInfo*** y los atributos agregados son:

- Nombre del programa.
  - Nombre atributo: name.
  - Tipo: string.
- Descripción del programa.
  - Nombre atributo: description.
  - Tipo: string.
- Estado del programa.
  - Nombre atributo: estate.
  - Tipo: string.
- Tipo de sede a la cual pertenece el programa.
  - Nombre atributo: sedeType.
  - Tipo: SedeType.

### Enum con los tipos de sede creado

`enum SedeType {
  SantaAna = 'Santa Ana',
  TresRios = 'Tres Ríos',
  Limon = 'Limón'
}`
