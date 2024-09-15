// ! Friendly remind: Exportar cada interface 

export {SessionInfo} from './src/session/session';
export {UserRole, UserInfo} from './src/user/user';

/**
 * Colecciones de Firestore
 */
export enum FirestoreCollections {
 /** Colección de {@link UserInfo} */
 userInfo = 'userInfo',

 /** Colección de {@link SessionInfo} */
 SessionInfo = 'sessionInfo'
}