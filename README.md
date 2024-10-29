# SOSLib

## Versión

1.14.2

## Notas de la versión

### Modelo para la colección de Rol actualizado

Nombre del modelo: ***RolInfo***.  
Atributo actualizado:

- Nombre del cuidador asociado al rol.
  - Atributo opcional.
  - Nombre atributo: caregiverName.
  - Tipo: string.

### Enum ***RequestStatus*** actualizado

`export enum RequestStatus {`  
  `Pendiente = 'Pendiente',`  
  `Aprobada = 'Aprobada',`  
  `Rechazada = 'Rechazada',`  
  `Revision = 'En revisión',`  
  `Cancelada = 'Cancelada'`  
`}`
