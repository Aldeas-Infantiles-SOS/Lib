/**
 * Tipo de usuario en el sistema.
 */
enum UserType {
    Admin,
    Operador,
    Cuidador,
  }
  
  /**
   * Representa un usuario del sistema.
   */
  export interface User {
    /** Id de firebase auth */
    firebaseUserId: string;
  
    /** Nombre */
    firstName: string;
  
    /** Apellidos */
    lastName: string;
  
    /** Correo electronico */
    email: string;
  
    /** URL de la foto de perfil (almacenada en Firebase Storage) */
    profilePhoto: string;
  
    /** Tipo de usuario - ver {@link UserType} */
    userType: UserType;
  
    /** Puesto de trabajo */
    jobPosition: string;
  
    /** Fecha y hora de creacion */
    created: number;
  
    /** Fecha y hora de ultima actualizacion */
    lastUpdate: number;
  }
