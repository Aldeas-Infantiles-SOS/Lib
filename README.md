# SOSLib

## Versión

1.15.0

## Notas de la versión

### Modelo para la colección de Rol actualizado

Nombre del modelo: ***RolInfo***.  
Atributos actualizados:

- Nombre del programa asociado rol.
  - Atributo opcional.
  - Nombre atributo: programName.
  - Tipo: string.
- Sede asociada rol.
  - Atributo opcional.
  - Nombre atributo: office.
  - Tipo: SedeType.

### Modelo para la colección de Evento actualizado

Nombre del modelo: ***EventInfo***.  
Atributos actualizados:

- Nombre del programa asociado al evento.
  - Atributo opcional.
  - Nombre atributo: programName.
  - Tipo: string.
- Sede asociada al evento.
  - Atributo opcional.
  - Nombre atributo: office.
  - Tipo: SedeType.

### Enum que contiene las colecciones utilizadas actualizado

Constantes agregadas:

- mailConfigs = 'mailConfigs'
- globalConfig = 'globalConfig'
- event = 'event'
