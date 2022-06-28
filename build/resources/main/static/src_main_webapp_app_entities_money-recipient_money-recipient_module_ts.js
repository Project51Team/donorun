"use strict";
(self["webpackChunkdonorun"] = self["webpackChunkdonorun"] || []).push([["src_main_webapp_app_entities_money-recipient_money-recipient_module_ts"],{

/***/ 1654:
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/entities/enumerations/recipient-type.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipientType": () => (/* binding */ RecipientType)
/* harmony export */ });
var RecipientType;
(function (RecipientType) {
    RecipientType["DONATE"] = "DONATE";
    RecipientType["CHARITY"] = "CHARITY";
    RecipientType["WITHDRAW"] = "WITHDRAW";
})(RecipientType || (RecipientType = {}));


/***/ }),

/***/ 5600:
/*!********************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/money-recipient/delete/money-recipient-delete-dialog.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyRecipientDeleteDialogComponent": () => (/* binding */ MoneyRecipientDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_money_recipient_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/money-recipient.service */ 6293);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);








const _c0 = function (a0) { return { id: a0 }; };
function MoneyRecipientDeleteDialogComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MoneyRecipientDeleteDialogComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.confirmDelete(ctx_r1.moneyRecipient.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Confirm delete operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoneyRecipientDeleteDialogComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.cancel(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n      Are you sure you want to delete this Money Recipient?\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoneyRecipientDeleteDialogComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.cancel(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r0.moneyRecipient.id));
} }
class MoneyRecipientDeleteDialogComponent {
    constructor(moneyRecipientService, activeModal) {
        this.moneyRecipientService = moneyRecipientService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.moneyRecipientService.delete(id).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
MoneyRecipientDeleteDialogComponent.ɵfac = function MoneyRecipientDeleteDialogComponent_Factory(t) { return new (t || MoneyRecipientDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_money_recipient_service__WEBPACK_IMPORTED_MODULE_0__.MoneyRecipientService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal)); };
MoneyRecipientDeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MoneyRecipientDeleteDialogComponent, selectors: [["ng-component"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], ["data-cy", "moneyRecipientDeleteDialogHeading", "jhiTranslate", "entity.delete.title", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "jhi-delete-moneyRecipient-heading", "jhiTranslate", "donorunApp.moneyRecipient.delete.question", 3, "translateValues"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["id", "jhi-confirm-delete-moneyRecipient", "data-cy", "entityConfirmDeleteButton", "type", "submit", 1, "btn", "btn-danger"], ["icon", "times"], ["jhiTranslate", "entity.action.delete"]], template: function MoneyRecipientDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MoneyRecipientDeleteDialogComponent_form_0_Template, 38, 3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.moneyRecipient);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__.AlertErrorComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 2251:
/*!*************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/money-recipient/detail/money-recipient-detail.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyRecipientDetailComponent": () => (/* binding */ MoneyRecipientDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 9003);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);







const _c0 = function (a1) { return ["/money-recipient", a1, "edit"]; };
function MoneyRecipientDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Money Recipient");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Name");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Avatar Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "dt")(55, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Site Url");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "dt")(65, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Recipient Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "dt")(75, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Account Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MoneyRecipientDetailComponent_div_4_Template_button_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.previousState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.moneyRecipient.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.moneyRecipient.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.moneyRecipient.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.moneyRecipient.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.moneyRecipient.siteUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("jhiTranslate", "donorunApp.RecipientType." + ctx_r0.moneyRecipient.recipientType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.moneyRecipient.recipientType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.moneyRecipient.accountDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx_r0.moneyRecipient.id));
} }
class MoneyRecipientDetailComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.moneyRecipient = null;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ moneyRecipient }) => {
            this.moneyRecipient = moneyRecipient;
        });
    }
    previousState() {
        window.history.back();
    }
}
MoneyRecipientDetailComponent.ɵfac = function MoneyRecipientDetailComponent_Factory(t) { return new (t || MoneyRecipientDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
MoneyRecipientDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MoneyRecipientDetailComponent, selectors: [["jhi-money-recipient-detail"]], decls: 8, vars: 1, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], [4, "ngIf"], ["data-cy", "moneyRecipientDetailsHeading"], ["jhiTranslate", "donorunApp.moneyRecipient.detail.title"], [1, "row-md", "jh-entity-details"], ["jhiTranslate", "global.field.id"], ["jhiTranslate", "donorunApp.moneyRecipient.name"], ["jhiTranslate", "donorunApp.moneyRecipient.description"], ["jhiTranslate", "donorunApp.moneyRecipient.avatarUrl"], ["jhiTranslate", "donorunApp.moneyRecipient.siteUrl"], ["jhiTranslate", "donorunApp.moneyRecipient.recipientType"], [3, "jhiTranslate"], ["jhiTranslate", "donorunApp.moneyRecipient.accountDetails"], ["type", "submit", "data-cy", "entityDetailsBackButton", 1, "btn", "btn-info", 3, "click"], ["icon", "arrow-left"], ["jhiTranslate", "entity.action.back"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit"]], template: function MoneyRecipientDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MoneyRecipientDetailComponent_div_4_Template, 101, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.moneyRecipient);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__.AlertErrorComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 5046:
/*!****************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/money-recipient/list/money-recipient.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyRecipientComponent": () => (/* binding */ MoneyRecipientComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/config/pagination.constants */ 4218);
/* harmony import */ var _delete_money_recipient_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delete/money-recipient-delete-dialog.component */ 5600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_money_recipient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/money-recipient.service */ 6293);
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















function MoneyRecipientComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "No moneyRecipients found");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/money-recipient", a1, "view"]; };
const _c1 = function (a1) { return ["/money-recipient", a1, "edit"]; };
function MoneyRecipientComponent_div_33_tr_68_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "a", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "fa-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "fa-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MoneyRecipientComponent_div_33_tr_68_Template_button_click_46_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6); const moneyRecipient_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r5.delete(moneyRecipient_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "fa-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moneyRecipient_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c0, moneyRecipient_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](moneyRecipient_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](moneyRecipient_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](moneyRecipient_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](moneyRecipient_r4.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](moneyRecipient_r4.siteUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("jhiTranslate", "donorunApp.RecipientType." + moneyRecipient_r4.recipientType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](moneyRecipient_r4.recipientType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](moneyRecipient_r4.accountDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](13, _c0, moneyRecipient_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c1, moneyRecipient_r4.id));
} }
function MoneyRecipientComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("predicateChange", function MoneyRecipientComponent_div_33_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r7.predicate = $event; })("ascendingChange", function MoneyRecipientComponent_div_33_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r9.ascending = $event; })("sortChange", function MoneyRecipientComponent_div_33_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r10.loadPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 17)(9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Avatar Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Site Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Recipient Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Account Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](59, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, MoneyRecipientComponent_div_33_tr_68_Template, 56, 17, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("predicate", ctx_r1.predicate)("ascending", ctx_r1.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.moneyRecipients)("ngForTrackBy", ctx_r1.trackId);
} }
const _c2 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function MoneyRecipientComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "jhi-item-count", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ngb-pagination", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function MoneyRecipientComponent_div_35_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r11.ngbPaginationPage = $event; })("pageChange", function MoneyRecipientComponent_div_35_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r13.loadPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](7, _c2, ctx_r2.page, ctx_r2.totalItems, ctx_r2.itemsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx_r2.totalItems)("page", ctx_r2.ngbPaginationPage)("pageSize", ctx_r2.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
const _c3 = function () { return ["/money-recipient/new"]; };
class MoneyRecipientComponent {
    constructor(moneyRecipientService, activatedRoute, router, modalService) {
        this.moneyRecipientService = moneyRecipientService;
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
        this.moneyRecipientService
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
    delete(moneyRecipient) {
        const modalRef = this.modalService.open(_delete_money_recipient_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__.MoneyRecipientDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.moneyRecipient = moneyRecipient;
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
            this.router.navigate(['/money-recipient'], {
                queryParams: {
                    page: this.page,
                    size: this.itemsPerPage,
                    sort: this.predicate + ',' + (this.ascending ? app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ASC : app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.DESC),
                },
            });
        }
        this.moneyRecipients = data !== null && data !== void 0 ? data : [];
        this.ngbPaginationPage = this.page;
    }
    onError() {
        var _a;
        this.ngbPaginationPage = (_a = this.page) !== null && _a !== void 0 ? _a : 1;
    }
}
MoneyRecipientComponent.ɵfac = function MoneyRecipientComponent_Factory(t) { return new (t || MoneyRecipientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_money_recipient_service__WEBPACK_IMPORTED_MODULE_2__.MoneyRecipientService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal)); };
MoneyRecipientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: MoneyRecipientComponent, selectors: [["jhi-money-recipient"]], decls: 38, vars: 7, consts: [["id", "page-heading", "data-cy", "MoneyRecipientHeading"], ["jhiTranslate", "donorunApp.moneyRecipient.home.title"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "me-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], ["jhiTranslate", "donorunApp.moneyRecipient.home.refreshListLabel"], ["id", "jh-create-entity", "data-cy", "entityCreateButton", 1, "btn", "btn-primary", "jh-create-entity", "create-money-recipient", 3, "routerLink"], ["icon", "plus"], ["jhiTranslate", "donorunApp.moneyRecipient.home.createLabel"], ["class", "alert alert-warning", "id", "no-result", 4, "ngIf"], ["class", "table-responsive", "id", "entities", 4, "ngIf"], [4, "ngIf"], ["id", "no-result", 1, "alert", "alert-warning"], ["jhiTranslate", "donorunApp.moneyRecipient.home.notFound"], ["id", "entities", 1, "table-responsive"], ["aria-describedby", "page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["jhiTranslate", "global.field.id"], ["icon", "sort"], ["scope", "col", "jhiSortBy", "name"], ["jhiTranslate", "donorunApp.moneyRecipient.name"], ["scope", "col", "jhiSortBy", "description"], ["jhiTranslate", "donorunApp.moneyRecipient.description"], ["scope", "col", "jhiSortBy", "avatarUrl"], ["jhiTranslate", "donorunApp.moneyRecipient.avatarUrl"], ["scope", "col", "jhiSortBy", "siteUrl"], ["jhiTranslate", "donorunApp.moneyRecipient.siteUrl"], ["scope", "col", "jhiSortBy", "recipientType"], ["jhiTranslate", "donorunApp.moneyRecipient.recipientType"], ["scope", "col", "jhiSortBy", "accountDetails"], ["jhiTranslate", "donorunApp.moneyRecipient.accountDetails"], ["scope", "col"], ["data-cy", "entityTable", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["data-cy", "entityTable"], [3, "routerLink"], [3, "jhiTranslate"], [1, "text-end"], [1, "btn-group"], ["type", "submit", "data-cy", "entityDetailsButton", 1, "btn", "btn-info", "btn-sm", 3, "routerLink"], ["icon", "eye"], ["jhiTranslate", "entity.action.view", 1, "d-none", "d-md-inline"], ["type", "submit", "data-cy", "entityEditButton", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit", 1, "d-none", "d-md-inline"], ["type", "submit", "data-cy", "entityDeleteButton", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["icon", "times"], ["jhiTranslate", "entity.action.delete", 1, "d-none", "d-md-inline"], [1, "d-flex", "justify-content-center"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"]], template: function MoneyRecipientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Money Recipients");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MoneyRecipientComponent_Template_button_click_9_listener() { return ctx.loadPage(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " Create a new Money Recipient ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, MoneyRecipientComponent_div_31_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, MoneyRecipientComponent_div_33_Template, 72, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, MoneyRecipientComponent_div_35_Template, 12, 11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.moneyRecipients == null ? null : ctx.moneyRecipients.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.moneyRecipients && ctx.moneyRecipients.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.moneyRecipients && ctx.moneyRecipients.length > 0);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__.AlertErrorComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_6__.SortDirective, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__.SortByDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_8__.ItemCountComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPagination], encapsulation: 2 });


/***/ }),

/***/ 6819:
/*!********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/money-recipient/money-recipient.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyRecipientModule": () => (/* binding */ MoneyRecipientModule)
/* harmony export */ });
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var _list_money_recipient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/money-recipient.component */ 5046);
/* harmony import */ var _detail_money_recipient_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/money-recipient-detail.component */ 2251);
/* harmony import */ var _update_money_recipient_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/money-recipient-update.component */ 9586);
/* harmony import */ var _delete_money_recipient_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete/money-recipient-delete-dialog.component */ 5600);
/* harmony import */ var _route_money_recipient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route/money-recipient-routing.module */ 2860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







class MoneyRecipientModule {
}
MoneyRecipientModule.ɵfac = function MoneyRecipientModule_Factory(t) { return new (t || MoneyRecipientModule)(); };
MoneyRecipientModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: MoneyRecipientModule });
MoneyRecipientModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _route_money_recipient_routing_module__WEBPACK_IMPORTED_MODULE_5__.MoneyRecipientRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MoneyRecipientModule, { declarations: [_list_money_recipient_component__WEBPACK_IMPORTED_MODULE_1__.MoneyRecipientComponent,
        _detail_money_recipient_detail_component__WEBPACK_IMPORTED_MODULE_2__.MoneyRecipientDetailComponent,
        _update_money_recipient_update_component__WEBPACK_IMPORTED_MODULE_3__.MoneyRecipientUpdateComponent,
        _delete_money_recipient_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__.MoneyRecipientDeleteDialogComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _route_money_recipient_routing_module__WEBPACK_IMPORTED_MODULE_5__.MoneyRecipientRoutingModule] }); })();


/***/ }),

/***/ 8929:
/*!*******************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/money-recipient/route/money-recipient-routing-resolve.service.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyRecipientRoutingResolveService": () => (/* binding */ MoneyRecipientRoutingResolveService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var _money_recipient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../money-recipient.model */ 8662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_money_recipient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/money-recipient.service */ 6293);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);






class MoneyRecipientRoutingResolveService {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    resolve(route) {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((moneyRecipient) => {
                if (moneyRecipient.body) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(moneyRecipient.body);
                }
                else {
                    this.router.navigate(['404']);
                    return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
                }
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(new _money_recipient_model__WEBPACK_IMPORTED_MODULE_0__.MoneyRecipient());
    }
}
MoneyRecipientRoutingResolveService.ɵfac = function MoneyRecipientRoutingResolveService_Factory(t) { return new (t || MoneyRecipientRoutingResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_service_money_recipient_service__WEBPACK_IMPORTED_MODULE_1__.MoneyRecipientService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
MoneyRecipientRoutingResolveService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: MoneyRecipientRoutingResolveService, factory: MoneyRecipientRoutingResolveService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2860:
/*!**********************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/money-recipient/route/money-recipient-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyRecipientRoutingModule": () => (/* binding */ MoneyRecipientRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ 8059);
/* harmony import */ var _list_money_recipient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list/money-recipient.component */ 5046);
/* harmony import */ var _detail_money_recipient_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail/money-recipient-detail.component */ 2251);
/* harmony import */ var _update_money_recipient_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update/money-recipient-update.component */ 9586);
/* harmony import */ var _money_recipient_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./money-recipient-routing-resolve.service */ 8929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const moneyRecipientRoute = [
    {
        path: '',
        component: _list_money_recipient_component__WEBPACK_IMPORTED_MODULE_1__.MoneyRecipientComponent,
        data: {
            defaultSort: 'id,asc',
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/view',
        component: _detail_money_recipient_detail_component__WEBPACK_IMPORTED_MODULE_2__.MoneyRecipientDetailComponent,
        resolve: {
            moneyRecipient: _money_recipient_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__.MoneyRecipientRoutingResolveService,
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: 'new',
        component: _update_money_recipient_update_component__WEBPACK_IMPORTED_MODULE_3__.MoneyRecipientUpdateComponent,
        resolve: {
            moneyRecipient: _money_recipient_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__.MoneyRecipientRoutingResolveService,
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/edit',
        component: _update_money_recipient_update_component__WEBPACK_IMPORTED_MODULE_3__.MoneyRecipientUpdateComponent,
        resolve: {
            moneyRecipient: _money_recipient_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__.MoneyRecipientRoutingResolveService,
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
class MoneyRecipientRoutingModule {
}
MoneyRecipientRoutingModule.ɵfac = function MoneyRecipientRoutingModule_Factory(t) { return new (t || MoneyRecipientRoutingModule)(); };
MoneyRecipientRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MoneyRecipientRoutingModule });
MoneyRecipientRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(moneyRecipientRoute)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MoneyRecipientRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 9586:
/*!*************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/money-recipient/update/money-recipient-update.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyRecipientUpdateComponent": () => (/* binding */ MoneyRecipientUpdateComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _money_recipient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../money-recipient.model */ 8662);
/* harmony import */ var app_entities_enumerations_recipient_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/entities/enumerations/recipient-type.model */ 1654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_money_recipient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/money-recipient.service */ 6293);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 7514);












function MoneyRecipientUpdateComponent_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipientType_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", recipientType_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n              ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "donorunApp.RecipientType." + recipientType_r1), "\n            ");
} }
class MoneyRecipientUpdateComponent {
    constructor(moneyRecipientService, activatedRoute, fb) {
        this.moneyRecipientService = moneyRecipientService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.recipientTypeValues = Object.keys(app_entities_enumerations_recipient_type_model__WEBPACK_IMPORTED_MODULE_1__.RecipientType);
        this.editForm = this.fb.group({
            id: [],
            name: [],
            description: [],
            avatarUrl: [],
            siteUrl: [],
            recipientType: [],
            accountDetails: [],
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ moneyRecipient }) => {
            this.updateForm(moneyRecipient);
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const moneyRecipient = this.createFromForm();
        if (moneyRecipient.id !== undefined) {
            this.subscribeToSaveResponse(this.moneyRecipientService.update(moneyRecipient));
        }
        else {
            this.subscribeToSaveResponse(this.moneyRecipientService.create(moneyRecipient));
        }
    }
    subscribeToSaveResponse(result) {
        result.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => this.onSaveFinalize())).subscribe({
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
    updateForm(moneyRecipient) {
        this.editForm.patchValue({
            id: moneyRecipient.id,
            name: moneyRecipient.name,
            description: moneyRecipient.description,
            avatarUrl: moneyRecipient.avatarUrl,
            siteUrl: moneyRecipient.siteUrl,
            recipientType: moneyRecipient.recipientType,
            accountDetails: moneyRecipient.accountDetails,
        });
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _money_recipient_model__WEBPACK_IMPORTED_MODULE_0__.MoneyRecipient()), { id: this.editForm.get(['id']).value, name: this.editForm.get(['name']).value, description: this.editForm.get(['description']).value, avatarUrl: this.editForm.get(['avatarUrl']).value, siteUrl: this.editForm.get(['siteUrl']).value, recipientType: this.editForm.get(['recipientType']).value, accountDetails: this.editForm.get(['accountDetails']).value });
    }
}
MoneyRecipientUpdateComponent.ɵfac = function MoneyRecipientUpdateComponent_Factory(t) { return new (t || MoneyRecipientUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_money_recipient_service__WEBPACK_IMPORTED_MODULE_2__.MoneyRecipientService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
MoneyRecipientUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MoneyRecipientUpdateComponent, selectors: [["jhi-money-recipient-update"]], decls: 99, vars: 9, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], ["name", "editForm", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "jhi-money-recipient-heading", "data-cy", "MoneyRecipientCreateUpdateHeading", "jhiTranslate", "donorunApp.moneyRecipient.home.createOrEditLabel"], [1, "row", "mb-3", 3, "hidden"], ["jhiTranslate", "global.field.id", "for", "field_id", 1, "form-label"], ["type", "text", "name", "id", "id", "field_id", "data-cy", "id", "formControlName", "id", 1, "form-control", 3, "readonly"], [1, "row", "mb-3"], ["jhiTranslate", "donorunApp.moneyRecipient.name", "for", "field_name", 1, "form-label"], ["type", "text", "name", "name", "id", "field_name", "data-cy", "name", "formControlName", "name", 1, "form-control"], ["jhiTranslate", "donorunApp.moneyRecipient.description", "for", "field_description", 1, "form-label"], ["type", "text", "name", "description", "id", "field_description", "data-cy", "description", "formControlName", "description", 1, "form-control"], ["jhiTranslate", "donorunApp.moneyRecipient.avatarUrl", "for", "field_avatarUrl", 1, "form-label"], ["type", "text", "name", "avatarUrl", "id", "field_avatarUrl", "data-cy", "avatarUrl", "formControlName", "avatarUrl", 1, "form-control"], ["jhiTranslate", "donorunApp.moneyRecipient.siteUrl", "for", "field_siteUrl", 1, "form-label"], ["type", "text", "name", "siteUrl", "id", "field_siteUrl", "data-cy", "siteUrl", "formControlName", "siteUrl", 1, "form-control"], ["jhiTranslate", "donorunApp.moneyRecipient.recipientType", "for", "field_recipientType", 1, "form-label"], ["name", "recipientType", "formControlName", "recipientType", "id", "field_recipientType", "data-cy", "recipientType", 1, "form-control"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["jhiTranslate", "donorunApp.moneyRecipient.accountDetails", "for", "field_accountDetails", 1, "form-label"], ["type", "text", "name", "accountDetails", "id", "field_accountDetails", "data-cy", "accountDetails", "formControlName", "accountDetails", 1, "form-control"], ["type", "button", "id", "cancel-save", "data-cy", "entityCreateCancelButton", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", "id", "save-entity", "data-cy", "entityCreateSaveButton", 1, "btn", "btn-primary", 3, "disabled"], ["icon", "save"], ["jhiTranslate", "entity.action.save"], [3, "value"]], template: function MoneyRecipientUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function MoneyRecipientUpdateComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n        Create or edit a Money Recipient\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Avatar Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Site Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Recipient Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, MoneyRecipientUpdateComponent_option_64_Template, 3, 4, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Account Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MoneyRecipientUpdateComponent_Template_button_click_79_listener() { return ctx.previousState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "fa-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "fa-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.editForm.get("id").value == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](62, 7, "donorunApp.RecipientType.null"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.recipientTypeValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.editForm.invalid || ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__.AlertErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_money-recipient_money-recipient_module_ts.js.map