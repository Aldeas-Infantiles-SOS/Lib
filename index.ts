// ! Friendly remind: Exportar cada interface 

export {ErrorLogInfo} from './src/errorLog/errorLog';
export {PasswordRecoveryInfo} from './src/passwordRecovery/passwordRecovery';
export {SessionInfo} from './src/session/session';
export {UserRole, UserInfo} from './src/user/user';

/**
 * Colecciones de Firestore
 */
export enum FirestoreCollections {
  /** Colección de {@link ErrorLogInfo}. */
  ErrorLogInfo = 'errorLogInfo',

  /** Colección de {@link PasswordRecoveryInfo}. */
  PasswordRecoveryInfo = 'passwordRecoveryInfo',

  /** Colección de {@link SessionInfo}. */
  SessionInfo = 'sessionInfo',

  /** Colección de {@link UserInfo}. */
  userInfo = 'userInfo'
}