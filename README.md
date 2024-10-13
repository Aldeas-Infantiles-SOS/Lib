# SOSLib

## Versión

1.12.0

## Notas de la versión

### Modelo para la colección de Turno con los Grupos actualizado

Nombre del modelo ***ShiftInGroupInfo***.

Se eliminarón sus atributos.

### Modelo para la colección de Turnos en un día en específico creado

Nombre del modelo ***ShiftDayInfo***.  
Hereda a ***ShiftInGroupInfo***.

Atributos agregados:

- Referencia al turno.
  - Nombre atributo: shiftId.
  - Tipo: `DocumentReference<DocumentData>`.
- Día de la semana asociado al turno.
  - Nombre atributo: day.
  - Tipo: DayOfWeek.
