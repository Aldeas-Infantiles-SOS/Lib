"use strict";
// ! Friendly remind: Exportar cada interface 
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreCollections = exports.STORAGE_KEY = exports.SedeType = void 0;
var program_1 = require("./src/program/program");
Object.defineProperty(exports, "SedeType", { enumerable: true, get: function () { return program_1.SedeType; } });
var routeConfig_1 = require("./src/route/routeConfig");
Object.defineProperty(exports, "STORAGE_KEY", { enumerable: true, get: function () { return routeConfig_1.STORAGE_KEY; } });
/**
 * Colecciones de Firestore
 */
var FirestoreCollections;
(function (FirestoreCollections) {
    /** Colección de {@link ErrorLogInfo}. */
    FirestoreCollections["ErrorLogInfo"] = "errorLogInfo";
    /** Colección de {@link PasswordRecoveryInfo}. */
    FirestoreCollections["PasswordRecoveryInfo"] = "passwordRecoveryInfo";
    /** Colección de {@link ProgramInfo}. */
    FirestoreCollections["ProgramInfo"] = "programInfo";
    /** Colección de {@link RoutingData}. */
    FirestoreCollections["RoutingData"] = "routingData";
    /** Colección de {@link RouteConfig}. */
    FirestoreCollections["RouteConfig"] = "routeConfig";
    /** Colección de {@link SessionInfo}. */
    FirestoreCollections["SessionInfo"] = "sessionInfo";
    /** Colección de {@link TimeOffRequest}. */
    FirestoreCollections["TimeOffRequest"] = "sessionInfo";
    /** Colección de {@link UserInfo}. */
    FirestoreCollections["userInfo"] = "userInfo";
})(FirestoreCollections = exports.FirestoreCollections || (exports.FirestoreCollections = {}));
//# sourceMappingURL=index.js.map