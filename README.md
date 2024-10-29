# SOSLib

## Versión

1.14.0

## Notas de la versión

### Modelo para la colección de Rol actualizado

Nombre del modelo: ***RoleInfo***.
Se eliminaron los anteriores atributos.
Atributos agregados:

- Nombre del cuidador asociado al rol.
  - Nombre atributo: caregiverName.
  - Tipo: string.
- Fecha asociada al rol.
  - Nombre atributo: date.
  - Tipo: Date.
- Nombre del grupo asociado al rol.
  - Nombre atributo: groupName.
  - Tipo: string.
- Identificador de evento.
  - Atributo opcional.
  - Nombre atributo: eventId.
  - Tipo: `DocumentReference<DocumentData>[]`.
- Color en hexadecimal para representar al rol.
  - Nombre atributo: color.
  - Tipo: string.
- Nomenclatura del rol.
  - Nombre atributo: nomenclature.
  - Tipo: string.
- Hora de inicio.
  - Nombre atributo: startTime.
  - Tipo: string.
- Hora en que finaliza.
  - Nombre atributo: endTime.
  - Tipo: string.
- Nombre del turno asociado al rol.
  - Nombre atributo: shiftName.
  - Tipo: string.
- Día de la semana asociado al rol.
  - Nombre atributo: dayOfWeek.
  - Tipo: DayOfWeek.
- Índice de fila asociado al rol.
  - Nombre atributo: rowIndex.
  - Tipo: number.

### Modelo para la colección de Evento creado

Nombre del modelo: ***EventInfo***.
Atributos agregados:

- Nombre del cuidador asociado al evento.
  - Nombre atributo: caregiverName.
  - Tipo: string.
- Fecha asociada al evento.
  - Nombre atributo: date.
  - Tipo: Date.
- Nombre del grupo asociado al evento.
  - Nombre atributo: groupName.
  - Tipo: string.
- Descripción del evento.
  - Nombre atributo: description.
  - Tipo: string.
