# SOSLib

## Versión

1.11.0

## Notas de la versión

### Modelo para la colección de Grupo creado

Nombre del modelo ***GroupInfo***.
Atributos agregados:

- Id de firebase del grupo.
  - Nombre atributo: firebaseGroupId.
  - Tipo: string.
- Nombre del grupo.
  - Nombre atributo: name.
  - Tipo: string.
- Descripción del grupo.
  - Nombre atributo: description.
  - Tipo: string.
- Indica si el grupo se encuentra activo o no.
  - Nombre atributo: state.
  - Tipo: boolean.

### Modelo para la colección de Turno en Grupo creado

Nombre del modelo ***ShiftInGroupInfo***.
Atributos agregados:

- Id de firebase del grupo al cual está vinculado el turno.
  - Nombre atributo: firebaseGroupId.
  - Tipo: string.
- Nombre del turno.
  - Nombre atributo: name.
  - Tipo: string.
- Nomenclatura del turno.
  - Nombre atributo: nomenclature.
  - Tipo: string.
- Día de la semana asociado al turno.
  - Nombre atributo: day.
  - Tipo: DayOfWeek.
- Indica si el turno se encuentra activo o no.
  - Nombre atributo: state.
  - Tipo: boolean.

### Enum ***DayOfWeek*** creado

`enum DayOfWeek {
  Sunday = 'Domingo',
  Monday = 'Lunes',
  Tuesday = 'Martes',
  Wednesday = 'Miércoles',
  Thursday = 'Jueves',
  Friday = 'Viernes',
  Saturday = 'Sábado'
}`
