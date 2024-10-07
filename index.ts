// ! Friendly remind: Exportar cada interface 

export {ErrorLogInfo} from './src/errorLog/errorLog';
export {PasswordRecoveryInfo} from './src/passwordRecovery/passwordRecovery';
export {ProgramInfo, SedeType} from './src/program/program';
export {RoutingData} from './src/route/routingData';
export {RouteConfig, NavigationItem, STORAGE_KEY} from './src/route/routeConfig';
export {Shift} from './src/shift/shift';
export {SessionInfo} from './src/session/session';
export {Request, RequestStatus, ResquestType} from './src/request/request';
export {UserRole, UserInfo} from './src/user/user';

/**
 * Colecciones de Firestore
 */
export enum FirestoreCollections {
  /** Colección de {@link ErrorLogInfo}. */
  ErrorLogInfo = 'errorLogInfo',

  /** Colección de {@link PasswordRecoveryInfo}. */
  PasswordRecoveryInfo = 'passwordRecoveryInfo',

  /** Colección de {@link ProgramInfo}. */
  ProgramInfo = 'programInfo',

  /** Colección de {@link RoutingData}. */
  RoutingData = 'routingData',

  /** Colección de {@link RouteConfig}. */
  RouteConfig = 'routeConfig',

  /** Colección de {@link Shift}. */
  Shift = 'shift',

  /** Colección de {@link SessionInfo}. */
  SessionInfo = 'sessionInfo',

  /** Colección de {@link Request}. */
  Request = 'request',

  /** Colección de {@link UserInfo}. */
  userInfo = 'userInfo'
}