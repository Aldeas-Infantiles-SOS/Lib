# SOSLib

## Versión

1.7.0

## Notas de la versión

### Modelo para la colección de solicitud creado

Nombre de la colección: **Request**.  
Se agregaron los siguientes atributos:

- Nombre del cuidador solicitante.
  - Nombre atributo: caregiverName.
  - Tipo: string.
- Nombre del programa.
  - Nombre atributo: programName.
  - Tipo: string.
- Tipo de solicitud.
  - Nombre atributo: resquestType.
  - Tipo: ResquestType.
- Fecha y hora de inicio.
  - Nombre atributo: startTime.
  - Tipo: Date.
- Fecha y hora en que finaliza.
  - Nombre atributo: endTime.
  - Tipo: Date.
- Descripción de la solicitud.
  - Nombre atributo: description.
  - Tipo: string.
- Sede a la que pertenece el cuidador.
  - Nombre atributo: office.
  - Tipo: SedeType.
- Estado de la solicitud.
  - Nombre atributo: status.
  - Tipo: RequestStatus.

### Enum con los tipos de solicitud creado

`enum ResquestType {
  Vacaciones = 'Vacaciones',
  Cumpleaños = 'Cumpleaños',
  Incapacidad = 'Incapacidad',
  PermisoSinGoceDeSalario = 'Permiso sin goce de salario'
}`

### Enum con los tipos de estado de la solicitud creado

`enum SedeType {
  Pendiente = 'Pendiente',
  Aprobada = 'Aprobada',
  Rechazada = 'Rechazada'
}`
