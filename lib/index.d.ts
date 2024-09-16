export { ErrorLogInfo } from './src/errorLog/errorLog';
export { SessionInfo } from './src/session/session';
export { UserRole, UserInfo } from './src/user/user';
/**
 * Colecciones de Firestore
 */
export declare enum FirestoreCollections {
    /** Colección de {@link ErrorLogInfo}. */
    ErrorLogInfo = "errorLogInfo",
    /** Colección de {@link SessionInfo}. */
    SessionInfo = "sessionInfo",
    /** Colección de {@link UserInfo}. */
    userInfo = "userInfo"
}
