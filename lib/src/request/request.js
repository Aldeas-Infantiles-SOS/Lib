"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestStatus = exports.ResquestType = void 0;
/**
 * Tipos de solicitud del sistema.
 */
var ResquestType;
(function (ResquestType) {
    ResquestType["Vacaciones"] = "Vacaciones";
    ResquestType["Cumplea\u00F1os"] = "Cumplea\u00F1os";
    ResquestType["Incapacidad"] = "Incapacidad";
    ResquestType["PermisoSinGoceDeSalario"] = "Permiso sin goce de salario";
})(ResquestType = exports.ResquestType || (exports.ResquestType = {}));
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