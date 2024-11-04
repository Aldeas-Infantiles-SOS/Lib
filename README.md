# SOSLib

## Versión

1.15.0

## Notas de la versión

### Modelo para la colección de Rol actualizado

Nombre del modelo: ***RolInfo***.  
Atributos agregados:

- Nombre del programa asociado rol.
  - Nombre atributo: programName.
  - Tipo: string.
- Sede asociada rol.
  - Nombre atributo: office.
  - Tipo: SedeType.

### Modelo para la colección de Evento actualizado

Nombre del modelo: ***EventInfo***.  
Atributos agregados:

- Nombre del programa asociado al evento.
  - Nombre atributo: programName.
  - Tipo: string.
- Sede asociada al evento.
  - Nombre atributo: office.
  - Tipo: SedeType.

### Enum que contiene las colecciones utilziadas actualizado

Ahora cada constante tiene asignado un valor.

`enum UsedCollections {`  
    `errorLogInfo = 'errorLogInfo',`  
    `groups = 'groups',`  
    `professionInfo = 'professionInfo',`  
    `programInfo = 'programInfo',`  
    `request = 'request',`  
    `role = 'role',`  
    `routingData = 'routingData',`  
    `sessionInfo = 'sessionInfo',`  
    `shift = 'shift',`  
    `shifts = 'shifts',`  
    `shiftInGroup = 'shiftInGroup',`  
    `userInfo = 'userInfo'`  
`};`

### Type para la configuración de correo creado

Nombre del type MailConfigFormValues.
Atributos agregados:

- Servidor smtp utilizado.
  - Nombre atributo: smtpServer.
  - Tipo: string.
- Puerto utilizado.
  - Nombre atributo: port.
  - Tipo: number.
- Correo asociado a la configuración.
  - Nombre atributo: email.
  - Tipo: string.
- Contraseña asociada a la configuración.
  - Nombre atributo: password.
  - Tipo: string.
