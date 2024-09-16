# SOSLib

## Versión

1.2.0

## Notas de la versión

### Modelo de registro de error creado

Atributos agregados:  

- Descripción del mensaje de error.
  - Nombre atributo: message.
  - Tipo: string.
- Stack trace, lista de las llamadas a funciones que llevaron a el error.
  - Nombre atributo: stack.
  - Tipo: string.
- Stack trace de los componentes en React, jerarquía de los componentes implicados en el error.
  - Nombre atributo: componentStack.
  - Tipo: string.
- Correo del usuario registrado con el error.
  - Nombre atributo: userEmail.
  - Tipo: string.
- Información adicional del error.
  - Nombre atributo: additionalData.
  - Tipo: string.
- Fecha y hora en que se registra el error.
  - Nombre atributo: errorDate.
  - Tipo: Date.
