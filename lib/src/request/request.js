"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestStatus = exports.RequestType = void 0;
/**
 * Tipos de solicitud del sistema.
 */
var RequestType;
(function (RequestType) {
    RequestType["Vacaciones"] = "Vacaciones";
    RequestType["Cumpleanos"] = "Cumplea\u00F1os";
    RequestType["Incapacidad"] = "Incapacidad";
    RequestType["PermisoSinGoceDeSalario"] = "Permiso sin goce de salario";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
/**
 * Estados de una solicitud del sistema.
 */
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["Pendiente"] = "Pendiente";
    RequestStatus["Aprobada"] = "Aprobada";
    RequestStatus["Rechazada"] = "Rechazada";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
//# sourceMappingURL=request.js.map