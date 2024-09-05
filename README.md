# SOSLib

## Version

1.0.0

## Nuevas características

### Modelo de usuario creado

Atributos agregados:  

- Id de firebase auth.
  - Nombre atributo: firebaseUserId.
  - Tipo: string.
- Nombre usuario.
  - Nombre atributo: firstName.
  - Tipo: string.
- Apellidos usuario.
  - Nombre atributo: lastName.
  - Tipo: string.
- Correo electrónico usuario.
  - Nombre atributo: email.
  - Tipo: string.
- URL de la foto de perfil.
  - Nombre atributo: profilePhoto.
  - Tipo: string.
- Tipo de usuario.
  - Nombre atributo: userType.
  - Tipo: UserRole.
- Puesto de trabajo.
  - Nombre atributo: jobPosition.
  - Tipo: string.
- Fecha y hora de creación.
  - Nombre atributo: created
  - Tipo: number.
- Fecha y hora de última actualización.
  - Nombre atributo: lastUpdate
  - Tipo: number.

### Roles de usuario creados

El ***userType*** de un usuario puede ser un **UserRole** de **Admin**, **Operador** o **Cuidador**.
