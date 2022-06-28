"use strict";
(self["webpackChunkdonorun"] = self["webpackChunkdonorun"] || []).push([["src_main_webapp_app_entities_setting_setting_module_ts"],{

/***/ 7987:
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/entities/enumerations/value-type.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueType": () => (/* binding */ ValueType)
/* harmony export */ });
var ValueType;
(function (ValueType) {
    ValueType["INT"] = "INT";
    ValueType["DOUBLE"] = "DOUBLE";
    ValueType["BOOLEAN"] = "BOOLEAN";
    ValueType["STRING"] = "STRING";
})(ValueType || (ValueType = {}));


/***/ }),

/***/ 8727:
/*!****************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/setting/delete/setting-delete-dialog.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingDeleteDialogComponent": () => (/* binding */ SettingDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/setting.service */ 215);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);








const _c0 = function (a0) { return { id: a0 }; };
function SettingDeleteDialogComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SettingDeleteDialogComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.confirmDelete(ctx_r1.setting.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Confirm delete operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingDeleteDialogComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "jhi-alert-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n      Are you sure you want to delete this Setting?\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingDeleteDialogComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r0.setting.id));
} }
class SettingDeleteDialogComponent {
    constructor(settingService, activeModal) {
        this.settingService = settingService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.settingService.delete(id).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
SettingDeleteDialogComponent.ɵfac = function SettingDeleteDialogComponent_Factory(t) { return new (t || SettingDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_setting_service__WEBPACK_IMPORTED_MODULE_0__.SettingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal)); };
SettingDeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SettingDeleteDialogComponent, selectors: [["ng-component"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], ["data-cy", "settingDeleteDialogHeading", "jhiTranslate", "entity.delete.title", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "jhi-delete-setting-heading", "jhiTranslate", "donorunApp.setting.delete.question", 3, "translateValues"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["id", "jhi-confirm-delete-setting", "data-cy", "entityConfirmDeleteButton", "type", "submit", 1, "btn", "btn-danger"], ["icon", "times"], ["jhiTranslate", "entity.action.delete"]], template: function SettingDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SettingDeleteDialogComponent_form_0_Template, 38, 3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.setting);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__.AlertErrorComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 1775:
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/setting/detail/setting-detail.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingDetailComponent": () => (/* binding */ SettingDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 9003);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);







const _c0 = function (a1) { return ["/company", a1, "view"]; };
function SettingDetailComponent_div_4_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r1.setting.company == null ? null : ctx_r1.setting.company.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.setting.company == null ? null : ctx_r1.setting.company.id);
} }
const _c1 = function (a1) { return ["/setting", a1, "edit"]; };
function SettingDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "jhi-alert-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "jhi-alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "dl", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "dt")(15, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "dt")(25, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "dt")(35, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "dt")(45, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "dt")(55, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "dt")(65, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, SettingDetailComponent_div_4_div_70_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingDetailComponent_div_4_Template_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.previousState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.setting.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.setting.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.setting.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("jhiTranslate", "donorunApp.ValueType." + ctx_r0.setting.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.setting.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.setting.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.setting.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx_r0.setting.id));
} }
class SettingDetailComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.setting = null;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ setting }) => {
            this.setting = setting;
        });
    }
    previousState() {
        window.history.back();
    }
}
SettingDetailComponent.ɵfac = function SettingDetailComponent_Factory(t) { return new (t || SettingDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
SettingDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SettingDetailComponent, selectors: [["jhi-setting-detail"]], decls: 8, vars: 1, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], [4, "ngIf"], ["data-cy", "settingDetailsHeading"], ["jhiTranslate", "donorunApp.setting.detail.title"], [1, "row-md", "jh-entity-details"], ["jhiTranslate", "global.field.id"], ["jhiTranslate", "donorunApp.setting.code"], ["jhiTranslate", "donorunApp.setting.description"], ["jhiTranslate", "donorunApp.setting.type"], [3, "jhiTranslate"], ["jhiTranslate", "donorunApp.setting.value"], ["jhiTranslate", "donorunApp.setting.company"], ["type", "submit", "data-cy", "entityDetailsBackButton", 1, "btn", "btn-info", 3, "click"], ["icon", "arrow-left"], ["jhiTranslate", "entity.action.back"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit"], [3, "routerLink"]], template: function SettingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SettingDetailComponent_div_4_Template, 90, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.setting);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__.AlertErrorComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 1921:
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/entities/setting/list/setting.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingComponent": () => (/* binding */ SettingComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/config/pagination.constants */ 4218);
/* harmony import */ var _delete_setting_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delete/setting-delete-dialog.component */ 8727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/setting.service */ 215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 9003);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sort/sort.directive */ 1427);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pagination/item-count.component */ 8133);















function SettingComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "No settings found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/company", a1, "view"]; };
function SettingComponent_div_33_tr_54_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const setting_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, setting_r4.company == null ? null : setting_r4.company.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](setting_r4.company == null ? null : setting_r4.company.id);
} }
const _c1 = function (a1) { return ["/setting", a1, "view"]; };
const _c2 = function (a1) { return ["/setting", a1, "edit"]; };
function SettingComponent_div_33_tr_54_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, SettingComponent_div_33_tr_54_div_22_Template, 5, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](31, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "fa-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingComponent_div_33_tr_54_Template_button_click_45_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const setting_r4 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r7.delete(setting_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](47, "fa-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const setting_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c1, setting_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](setting_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](setting_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](setting_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("jhiTranslate", "donorunApp.ValueType." + setting_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](setting_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](setting_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", setting_r4.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](12, _c1, setting_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](14, _c2, setting_r4.id));
} }
function SettingComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("predicateChange", function SettingComponent_div_33_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r9.predicate = $event; })("ascendingChange", function SettingComponent_div_33_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r11.ascending = $event; })("sortChange", function SettingComponent_div_33_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r12.loadPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 17)(9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 20)(15, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "th", 24)(29, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "th", 26)(35, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](45, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, SettingComponent_div_33_tr_54_Template, 55, 16, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("predicate", ctx_r1.predicate)("ascending", ctx_r1.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.settings)("ngForTrackBy", ctx_r1.trackId);
} }
const _c3 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function SettingComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "jhi-item-count", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ngb-pagination", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function SettingComponent_div_35_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r13.ngbPaginationPage = $event; })("pageChange", function SettingComponent_div_35_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r15.loadPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](7, _c3, ctx_r2.page, ctx_r2.totalItems, ctx_r2.itemsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx_r2.totalItems)("page", ctx_r2.ngbPaginationPage)("pageSize", ctx_r2.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
const _c4 = function () { return ["/setting/new"]; };
class SettingComponent {
    constructor(settingService, activatedRoute, router, modalService) {
        this.settingService = settingService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.isLoading = false;
        this.totalItems = 0;
        this.itemsPerPage = app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ITEMS_PER_PAGE;
        this.ngbPaginationPage = 1;
    }
    loadPage(page, dontNavigate) {
        var _a;
        this.isLoading = true;
        const pageToLoad = (_a = page !== null && page !== void 0 ? page : this.page) !== null && _a !== void 0 ? _a : 1;
        this.settingService
            .query({
            page: pageToLoad - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
        })
            .subscribe({
            next: (res) => {
                this.isLoading = false;
                this.onSuccess(res.body, res.headers, pageToLoad, !dontNavigate);
            },
            error: () => {
                this.isLoading = false;
                this.onError();
            },
        });
    }
    ngOnInit() {
        this.handleNavigation();
    }
    trackId(_index, item) {
        return item.id;
    }
    delete(setting) {
        const modalRef = this.modalService.open(_delete_setting_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__.SettingDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.setting = setting;
        // unsubscribe not needed because closed completes on modal close
        modalRef.closed.subscribe(reason => {
            if (reason === 'deleted') {
                this.loadPage();
            }
        });
    }
    sort() {
        const result = [this.predicate + ',' + (this.ascending ? app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ASC : app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.DESC)];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    handleNavigation() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
            var _a;
            const page = params.get('page');
            const pageNumber = +(page !== null && page !== void 0 ? page : 1);
            const sort = ((_a = params.get(app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.SORT)) !== null && _a !== void 0 ? _a : data['defaultSort']).split(',');
            const predicate = sort[0];
            const ascending = sort[1] === app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ASC;
            if (pageNumber !== this.page || predicate !== this.predicate || ascending !== this.ascending) {
                this.predicate = predicate;
                this.ascending = ascending;
                this.loadPage(pageNumber, true);
            }
        });
    }
    onSuccess(data, headers, page, navigate) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.page = page;
        if (navigate) {
            this.router.navigate(['/setting'], {
                queryParams: {
                    page: this.page,
                    size: this.itemsPerPage,
                    sort: this.predicate + ',' + (this.ascending ? app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ASC : app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.DESC),
                },
            });
        }
        this.settings = data !== null && data !== void 0 ? data : [];
        this.ngbPaginationPage = this.page;
    }
    onError() {
        var _a;
        this.ngbPaginationPage = (_a = this.page) !== null && _a !== void 0 ? _a : 1;
    }
}
SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_setting_service__WEBPACK_IMPORTED_MODULE_2__.SettingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal)); };
SettingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["jhi-setting"]], decls: 38, vars: 7, consts: [["id", "page-heading", "data-cy", "SettingHeading"], ["jhiTranslate", "donorunApp.setting.home.title"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "me-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], ["jhiTranslate", "donorunApp.setting.home.refreshListLabel"], ["id", "jh-create-entity", "data-cy", "entityCreateButton", 1, "btn", "btn-primary", "jh-create-entity", "create-setting", 3, "routerLink"], ["icon", "plus"], ["jhiTranslate", "donorunApp.setting.home.createLabel"], ["class", "alert alert-warning", "id", "no-result", 4, "ngIf"], ["class", "table-responsive", "id", "entities", 4, "ngIf"], [4, "ngIf"], ["id", "no-result", 1, "alert", "alert-warning"], ["jhiTranslate", "donorunApp.setting.home.notFound"], ["id", "entities", 1, "table-responsive"], ["aria-describedby", "page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["jhiTranslate", "global.field.id"], ["icon", "sort"], ["scope", "col", "jhiSortBy", "code"], ["jhiTranslate", "donorunApp.setting.code"], ["scope", "col", "jhiSortBy", "description"], ["jhiTranslate", "donorunApp.setting.description"], ["scope", "col", "jhiSortBy", "type"], ["jhiTranslate", "donorunApp.setting.type"], ["scope", "col", "jhiSortBy", "value"], ["jhiTranslate", "donorunApp.setting.value"], ["scope", "col", "jhiSortBy", "company.id"], ["jhiTranslate", "donorunApp.setting.company"], ["scope", "col"], ["data-cy", "entityTable", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["data-cy", "entityTable"], [3, "routerLink"], [3, "jhiTranslate"], [1, "text-end"], [1, "btn-group"], ["type", "submit", "data-cy", "entityDetailsButton", 1, "btn", "btn-info", "btn-sm", 3, "routerLink"], ["icon", "eye"], ["jhiTranslate", "entity.action.view", 1, "d-none", "d-md-inline"], ["type", "submit", "data-cy", "entityEditButton", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit", 1, "d-none", "d-md-inline"], ["type", "submit", "data-cy", "entityDeleteButton", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["icon", "times"], ["jhiTranslate", "entity.action.delete", 1, "d-none", "d-md-inline"], [1, "d-flex", "justify-content-center"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_9_listener() { return ctx.loadPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Refresh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " Create a new Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "jhi-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, SettingComponent_div_31_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, SettingComponent_div_33_Template, 58, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, SettingComponent_div_35_Template, 12, 11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](6, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.settings == null ? null : ctx.settings.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.settings && ctx.settings.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.settings && ctx.settings.length > 0);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__.AlertErrorComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_6__.SortDirective, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__.SortByDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_8__.ItemCountComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPagination], encapsulation: 2 });


/***/ }),

/***/ 6897:
/*!***************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/setting/route/setting-routing-resolve.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingRoutingResolveService": () => (/* binding */ SettingRoutingResolveService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var _setting_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setting.model */ 9077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/setting.service */ 215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);






class SettingRoutingResolveService {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    resolve(route) {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((setting) => {
                if (setting.body) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(setting.body);
                }
                else {
                    this.router.navigate(['404']);
                    return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
                }
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(new _setting_model__WEBPACK_IMPORTED_MODULE_0__.Setting());
    }
}
SettingRoutingResolveService.ɵfac = function SettingRoutingResolveService_Factory(t) { return new (t || SettingRoutingResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_service_setting_service__WEBPACK_IMPORTED_MODULE_1__.SettingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
SettingRoutingResolveService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SettingRoutingResolveService, factory: SettingRoutingResolveService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9235:
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/entities/setting/route/setting-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingRoutingModule": () => (/* binding */ SettingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ 8059);
/* harmony import */ var _list_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list/setting.component */ 1921);
/* harmony import */ var _detail_setting_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail/setting-detail.component */ 1775);
/* harmony import */ var _update_setting_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update/setting-update.component */ 2720);
/* harmony import */ var _setting_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting-routing-resolve.service */ 6897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const settingRoute = [
    {
        path: '',
        component: _list_setting_component__WEBPACK_IMPORTED_MODULE_1__.SettingComponent,
        data: {
            defaultSort: 'id,asc',
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/view',
        component: _detail_setting_detail_component__WEBPACK_IMPORTED_MODULE_2__.SettingDetailComponent,
        resolve: {
            setting: _setting_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__.SettingRoutingResolveService,
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: 'new',
        component: _update_setting_update_component__WEBPACK_IMPORTED_MODULE_3__.SettingUpdateComponent,
        resolve: {
            setting: _setting_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__.SettingRoutingResolveService,
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/edit',
        component: _update_setting_update_component__WEBPACK_IMPORTED_MODULE_3__.SettingUpdateComponent,
        resolve: {
            setting: _setting_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__.SettingRoutingResolveService,
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
class SettingRoutingModule {
}
SettingRoutingModule.ɵfac = function SettingRoutingModule_Factory(t) { return new (t || SettingRoutingModule)(); };
SettingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SettingRoutingModule });
SettingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(settingRoute)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 215:
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/entities/setting/service/setting.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingService": () => (/* binding */ SettingService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 6037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 5929);
/* harmony import */ var _setting_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setting.model */ 9077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);






class SettingService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/settings');
    }
    create(setting) {
        return this.http.post(this.resourceUrl, setting, { observe: 'response' });
    }
    update(setting) {
        return this.http.put(`${this.resourceUrl}/${(0,_setting_model__WEBPACK_IMPORTED_MODULE_2__.getSettingIdentifier)(setting)}`, setting, { observe: 'response' });
    }
    partialUpdate(setting) {
        return this.http.patch(`${this.resourceUrl}/${(0,_setting_model__WEBPACK_IMPORTED_MODULE_2__.getSettingIdentifier)(setting)}`, setting, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    addSettingToCollectionIfMissing(settingCollection, ...settingsToCheck) {
        const settings = settingsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (settings.length > 0) {
            const settingCollectionIdentifiers = settingCollection.map(settingItem => (0,_setting_model__WEBPACK_IMPORTED_MODULE_2__.getSettingIdentifier)(settingItem));
            const settingsToAdd = settings.filter(settingItem => {
                const settingIdentifier = (0,_setting_model__WEBPACK_IMPORTED_MODULE_2__.getSettingIdentifier)(settingItem);
                if (settingIdentifier == null || settingCollectionIdentifiers.includes(settingIdentifier)) {
                    return false;
                }
                settingCollectionIdentifiers.push(settingIdentifier);
                return true;
            });
            return [...settingsToAdd, ...settingCollection];
        }
        return settingCollection;
    }
}
SettingService.ɵfac = function SettingService_Factory(t) { return new (t || SettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
SettingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SettingService, factory: SettingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9077:
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/entities/setting/setting.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Setting": () => (/* binding */ Setting),
/* harmony export */   "getSettingIdentifier": () => (/* binding */ getSettingIdentifier)
/* harmony export */ });
class Setting {
    constructor(id, code, description, type, value, company) {
        this.id = id;
        this.code = code;
        this.description = description;
        this.type = type;
        this.value = value;
        this.company = company;
    }
}
function getSettingIdentifier(setting) {
    return setting.id;
}


/***/ }),

/***/ 8899:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/entities/setting/setting.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingModule": () => (/* binding */ SettingModule)
/* harmony export */ });
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var _list_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/setting.component */ 1921);
/* harmony import */ var _detail_setting_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/setting-detail.component */ 1775);
/* harmony import */ var _update_setting_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/setting-update.component */ 2720);
/* harmony import */ var _delete_setting_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete/setting-delete-dialog.component */ 8727);
/* harmony import */ var _route_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route/setting-routing.module */ 9235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







class SettingModule {
}
SettingModule.ɵfac = function SettingModule_Factory(t) { return new (t || SettingModule)(); };
SettingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SettingModule });
SettingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _route_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__.SettingRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SettingModule, { declarations: [_list_setting_component__WEBPACK_IMPORTED_MODULE_1__.SettingComponent, _detail_setting_detail_component__WEBPACK_IMPORTED_MODULE_2__.SettingDetailComponent, _update_setting_update_component__WEBPACK_IMPORTED_MODULE_3__.SettingUpdateComponent, _delete_setting_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__.SettingDeleteDialogComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _route_setting_routing_module__WEBPACK_IMPORTED_MODULE_5__.SettingRoutingModule] }); })();


/***/ }),

/***/ 2720:
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/setting/update/setting-update.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingUpdateComponent": () => (/* binding */ SettingUpdateComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _setting_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../setting.model */ 9077);
/* harmony import */ var app_entities_enumerations_value_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/entities/enumerations/value-type.model */ 7987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/setting.service */ 215);
/* harmony import */ var app_entities_company_service_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/entities/company/service/company.service */ 4630);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 7514);













function SettingUpdateComponent_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const valueType_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", valueType_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\n              ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "donorunApp.ValueType." + valueType_r2), "\n            ");
} }
function SettingUpdateComponent_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const companyOption_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", companyOption_r3.id === (ctx_r1.editForm.get("company").value == null ? null : ctx_r1.editForm.get("company").value.id) ? ctx_r1.editForm.get("company").value : companyOption_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\n              ", companyOption_r3.id, "\n            ");
} }
class SettingUpdateComponent {
    constructor(settingService, companyService, activatedRoute, fb) {
        this.settingService = settingService;
        this.companyService = companyService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.valueTypeValues = Object.keys(app_entities_enumerations_value_type_model__WEBPACK_IMPORTED_MODULE_1__.ValueType);
        this.companiesSharedCollection = [];
        this.editForm = this.fb.group({
            id: [],
            code: [],
            description: [],
            type: [],
            value: [],
            company: [],
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ setting }) => {
            this.updateForm(setting);
            this.loadRelationshipsOptions();
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const setting = this.createFromForm();
        if (setting.id !== undefined) {
            this.subscribeToSaveResponse(this.settingService.update(setting));
        }
        else {
            this.subscribeToSaveResponse(this.settingService.create(setting));
        }
    }
    trackCompanyById(_index, item) {
        return item.id;
    }
    subscribeToSaveResponse(result) {
        result.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.onSaveFinalize())).subscribe({
            next: () => this.onSaveSuccess(),
            error: () => this.onSaveError(),
        });
    }
    onSaveSuccess() {
        this.previousState();
    }
    onSaveError() {
        // Api for inheritance.
    }
    onSaveFinalize() {
        this.isSaving = false;
    }
    updateForm(setting) {
        this.editForm.patchValue({
            id: setting.id,
            code: setting.code,
            description: setting.description,
            type: setting.type,
            value: setting.value,
            company: setting.company,
        });
        this.companiesSharedCollection = this.companyService.addCompanyToCollectionIfMissing(this.companiesSharedCollection, setting.company);
    }
    loadRelationshipsOptions() {
        this.companyService
            .query()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((res) => { var _a; return (_a = res.body) !== null && _a !== void 0 ? _a : []; }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((companies) => this.companyService.addCompanyToCollectionIfMissing(companies, this.editForm.get('company').value)))
            .subscribe((companies) => (this.companiesSharedCollection = companies));
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _setting_model__WEBPACK_IMPORTED_MODULE_0__.Setting()), { id: this.editForm.get(['id']).value, code: this.editForm.get(['code']).value, description: this.editForm.get(['description']).value, type: this.editForm.get(['type']).value, value: this.editForm.get(['value']).value, company: this.editForm.get(['company']).value });
    }
}
SettingUpdateComponent.ɵfac = function SettingUpdateComponent_Factory(t) { return new (t || SettingUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_setting_service__WEBPACK_IMPORTED_MODULE_2__.SettingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_entities_company_service_company_service__WEBPACK_IMPORTED_MODULE_3__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder)); };
SettingUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SettingUpdateComponent, selectors: [["jhi-setting-update"]], decls: 96, vars: 12, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], ["name", "editForm", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "jhi-setting-heading", "data-cy", "SettingCreateUpdateHeading", "jhiTranslate", "donorunApp.setting.home.createOrEditLabel"], [1, "row", "mb-3", 3, "hidden"], ["jhiTranslate", "global.field.id", "for", "field_id", 1, "form-label"], ["type", "text", "name", "id", "id", "field_id", "data-cy", "id", "formControlName", "id", 1, "form-control", 3, "readonly"], [1, "row", "mb-3"], ["jhiTranslate", "donorunApp.setting.code", "for", "field_code", 1, "form-label"], ["type", "text", "name", "code", "id", "field_code", "data-cy", "code", "formControlName", "code", 1, "form-control"], ["jhiTranslate", "donorunApp.setting.description", "for", "field_description", 1, "form-label"], ["type", "text", "name", "description", "id", "field_description", "data-cy", "description", "formControlName", "description", 1, "form-control"], ["jhiTranslate", "donorunApp.setting.type", "for", "field_type", 1, "form-label"], ["name", "type", "formControlName", "type", "id", "field_type", "data-cy", "type", 1, "form-control"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["jhiTranslate", "donorunApp.setting.value", "for", "field_value", 1, "form-label"], ["type", "text", "name", "value", "id", "field_value", "data-cy", "value", "formControlName", "value", 1, "form-control"], ["jhiTranslate", "donorunApp.setting.company", "for", "field_company", 1, "form-label"], ["id", "field_company", "data-cy", "company", "name", "company", "formControlName", "company", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", "id", "cancel-save", "data-cy", "entityCreateCancelButton", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", "id", "save-entity", "data-cy", "entityCreateSaveButton", 1, "btn", "btn-primary", 3, "disabled"], ["icon", "save"], ["jhiTranslate", "entity.action.save"], [3, "value"]], template: function SettingUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SettingUpdateComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n        Create or edit a Setting\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, SettingUpdateComponent_option_48_Template, 3, 4, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, SettingUpdateComponent_option_69_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingUpdateComponent_Template_button_click_76_listener() { return ctx.previousState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.editForm.get("id").value == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 10, "donorunApp.ValueType.null"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.valueTypeValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.companiesSharedCollection)("ngForTrackBy", ctx.trackCompanyById);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.editForm.invalid || ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_5__.AlertErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_setting_setting_module_ts.js.map