# SOSLib

## Versión

1.3.0

## Notas de la versión

### Modelo de recuperación de contraseña creado

Atributos agregados:  

- Correo del usuario para la recuperación de la contraseña.
  - Nombre atributo: userEmail.
  - Tipo: string.
- Contraseña temporal asignada.
  - Nombre atributo: temporalPassword.
  - Tipo: string.
- Fecha y hora de expiración de la contraseña temporal.
  - Nombre atributo: temporalPasswordExpirationDate.
  - Tipo: Date.
- Token de autenticación asignado.
  - Nombre atributo: token.
  - Tipo: string.
- Fecha y hora de expiración del token de autenticación.
  - Nombre atributo: tokenExpirationDate.
  - Tipo: Date.
