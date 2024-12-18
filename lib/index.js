"use strict";
// ! Friendly remind: Exportar cada interface 
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreCollections = exports.UsedCollections = exports.RequestType = exports.RequestStatus = exports.STORAGE_KEY = exports.SedeType = void 0;
var program_1 = require("./src/program/program");
Object.defineProperty(exports, "SedeType", { enumerable: true, get: function () { return program_1.SedeType; } });
var routeConfig_1 = require("./src/route/routeConfig");
Object.defineProperty(exports, "STORAGE_KEY", { enumerable: true, get: function () { return routeConfig_1.STORAGE_KEY; } });
var request_1 = require("./src/request/request");
Object.defineProperty(exports, "RequestStatus", { enumerable: true, get: function () { return request_1.RequestStatus; } });
Object.defineProperty(exports, "RequestType", { enumerable: true, get: function () { return request_1.RequestType; } });
var usedCollections_1 = require("./src/usedCollections/usedCollections");
Object.defineProperty(exports, "UsedCollections", { enumerable: true, get: function () { return usedCollections_1.UsedCollections; } });
/**
 * Colecciones de Firestore.
 */
var FirestoreCollections;
(function (FirestoreCollections) {
    /** Colección de {@link ErrorLogInfo}. */
    FirestoreCollections["ErrorLogInfo"] = "errorLogInfo";
    /** Colección de {@link EventInfo}. */
    FirestoreCollections["EventInfo"] = "eventInfo";
    /** Colección de {@link GroupInfo}. */
    FirestoreCollections["GroupInfo"] = "groupInfo";
    /** Colección de {@link PasswordRecoveryInfo}. */
    FirestoreCollections["PasswordRecoveryInfo"] = "passwordRecoveryInfo";
    /** Colección de {@link ProfessionInfo}. */
    FirestoreCollections["ProfessionInfo"] = "professionInfo";
    /** Colección de {@link ProgramInfo}. */
    FirestoreCollections["ProgramInfo"] = "programInfo";
    /** Colección de {@link RoleInfo}. */
    FirestoreCollections["RoleInfo"] = "roleInfo";
    /** Colección de {@link RoutingData}. */
    FirestoreCollections["RoutingData"] = "routingData";
    /** Colección de {@link RouteConfig}. */
    FirestoreCollections["RouteConfig"] = "routeConfig";
    /** Colección de {@link Shift}. */
    FirestoreCollections["Shift"] = "shift";
    /** Colección de {@link ShiftInGroupInfo}. */
    FirestoreCollections["ShiftInGroupInfo"] = "shiftInGroupInfo";
    /** Colección de {@link SessionInfo}. */
    FirestoreCollections["SessionInfo"] = "sessionInfo";
    /** Colección de {@link Request}. */
    FirestoreCollections["Request"] = "request";
    /** Colección de {@link UserInfo}. */
    FirestoreCollections["userInfo"] = "userInfo";
})(FirestoreCollections = exports.FirestoreCollections || (exports.FirestoreCollections = {}));
//# sourceMappingURL=index.js.map