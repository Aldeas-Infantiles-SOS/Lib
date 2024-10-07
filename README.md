# SOSLib

## Versión

1.8.0

## Notas de la versión

### Modelo para la colección de turno creado y agredo a la librería

Nombre de la colección ***Shift***.  
Atributos agregados:

- Nombre del turno.
  - Nombre atributo: shiftName.
  - Tipo: string.
- Nomenclatura del turno.
  - Nombre atributo: nomenclature.
  - Tipo: string.
- Fecha y hora de inicio.
  - Nombre atributo: startTime.
  - Tipo: Date.
- Fecha y hora en que finaliza.
  - Nombre atributo: endTime.
  - Tipo: Date.
- Programa del turno.
  - Nombre atributo: program.
  - Tipo: string.
- Color en hexadecimal para representar el turno.
  - Nombre atributo: color.
  - Tipo: string.
- Estado del turno.
  - Nombre atributo: state.
  - Tipo: ShiftState.

### Enum con los estados validos de un turno agregado

`enum ShiftState {
  Enaled = 'Habilitado',
  Disabled = 'Deshabilitado'
}`
