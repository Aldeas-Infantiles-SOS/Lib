# SOSLib

## Versión

1.13.0

## Notas de la versión

### Enum con las collecciones usadas creado

`enum UserCollections {
  errorLogInfo,
  groups,
  professionInfo,
  programInfo,
  request,
  role,
  routingData,
  sessionInfo,
  shift,
  shifts,
  shiftInGroup,
  userInfo
}`

### Modelo para la colección de Usuario actualizado

Nombre del modelo ***UserInfo***.  

Atributo agregado:

- Llave secreta encriptada usada para el doble factor de autenticación.
  - Atributo opcional.
  - Nombre atributo: secretKey.
  - Tipo: string.
