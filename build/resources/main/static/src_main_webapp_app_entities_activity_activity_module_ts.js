"use strict";
(self["webpackChunkdonorun"] = self["webpackChunkdonorun"] || []).push([["src_main_webapp_app_entities_activity_activity_module_ts"],{

/***/ 4424:
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity/activity.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityModule": () => (/* binding */ ActivityModule)
/* harmony export */ });
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var _list_activity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/activity.component */ 4440);
/* harmony import */ var _detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/activity-detail.component */ 8711);
/* harmony import */ var _update_activity_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/activity-update.component */ 7286);
/* harmony import */ var _delete_activity_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete/activity-delete-dialog.component */ 1526);
/* harmony import */ var _route_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route/activity-routing.module */ 6355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







class ActivityModule {
}
ActivityModule.ɵfac = function ActivityModule_Factory(t) { return new (t || ActivityModule)(); };
ActivityModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ActivityModule });
ActivityModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _route_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__.ActivityRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ActivityModule, { declarations: [_list_activity_component__WEBPACK_IMPORTED_MODULE_1__.ActivityComponent, _detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_2__.ActivityDetailComponent, _update_activity_update_component__WEBPACK_IMPORTED_MODULE_3__.ActivityUpdateComponent, _delete_activity_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ActivityDeleteDialogComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _route_activity_routing_module__WEBPACK_IMPORTED_MODULE_5__.ActivityRoutingModule] }); })();


/***/ }),

/***/ 1526:
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity/delete/activity-delete-dialog.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityDeleteDialogComponent": () => (/* binding */ ActivityDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_activity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/activity.service */ 6965);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);








const _c0 = function (a0) { return { id: a0 }; };
function ActivityDeleteDialogComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ActivityDeleteDialogComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.confirmDelete(ctx_r1.activity.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Confirm delete operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDeleteDialogComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.cancel(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n      Are you sure you want to delete this Activity?\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDeleteDialogComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.cancel(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r0.activity.id));
} }
class ActivityDeleteDialogComponent {
    constructor(activityService, activeModal) {
        this.activityService = activityService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.activityService.delete(id).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
ActivityDeleteDialogComponent.ɵfac = function ActivityDeleteDialogComponent_Factory(t) { return new (t || ActivityDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_activity_service__WEBPACK_IMPORTED_MODULE_0__.ActivityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal)); };
ActivityDeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ActivityDeleteDialogComponent, selectors: [["ng-component"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], ["data-cy", "activityDeleteDialogHeading", "jhiTranslate", "entity.delete.title", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "jhi-delete-activity-heading", "jhiTranslate", "donorunApp.activity.delete.question", 3, "translateValues"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["id", "jhi-confirm-delete-activity", "data-cy", "entityConfirmDeleteButton", "type", "submit", 1, "btn", "btn-danger"], ["icon", "times"], ["jhiTranslate", "entity.action.delete"]], template: function ActivityDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ActivityDeleteDialogComponent_form_0_Template, 38, 3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__.AlertErrorComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 8711:
/*!***********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity/detail/activity-detail.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityDetailComponent": () => (/* binding */ ActivityDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 9003);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _shared_date_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/date/duration.pipe */ 3733);
/* harmony import */ var _shared_date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/date/format-medium-date.pipe */ 8421);
/* harmony import */ var _shared_date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date/format-medium-datetime.pipe */ 329);










const _c0 = function (a1) { return ["/activity", a1, "edit"]; };
function ActivityDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "jhi-alert-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "jhi-alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "dl", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "dt")(15, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "dt")(25, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "dt")(35, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Distance");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "dt")(45, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Avg Pace");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "dt")(55, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Moving Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](62, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "dt")(66, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Calories");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "dt")(76, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Avg Heart Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "dt")(86, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Sport Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "dt")(96, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "dt")(106, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Public Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "dt")(116, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "Amount Of Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "dt")(126, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "Was Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "dt")(136, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "Activity Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](138, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](143, "formatMediumDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](145, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "dt")(147, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](154, "formatMediumDatetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "dt")(158, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, "Sportsman");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](167, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ActivityDetailComponent_div_4_Template_button_click_168_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r1.previousState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](170, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](177, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](178, "fa-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](182, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](183, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.distance);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.avgPace);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](62, 18, ctx_r0.activity.movingTime), " (", ctx_r0.activity.movingTime, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.calories);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.avgHeartRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("jhiTranslate", "donorunApp.SportType." + ctx_r0.activity.sportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.sportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.publicActivity);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.amountOfMoney);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.wasPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](143, 20, ctx_r0.activity.activityDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](154, 22, ctx_r0.activity.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.activity.sportsman == null ? null : ctx_r0.activity.sportsman.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](24, _c0, ctx_r0.activity.id));
} }
class ActivityDetailComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.activity = null;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ activity }) => {
            this.activity = activity;
        });
    }
    previousState() {
        window.history.back();
    }
}
ActivityDetailComponent.ɵfac = function ActivityDetailComponent_Factory(t) { return new (t || ActivityDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
ActivityDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ActivityDetailComponent, selectors: [["jhi-activity-detail"]], decls: 8, vars: 1, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], [4, "ngIf"], ["data-cy", "activityDetailsHeading"], ["jhiTranslate", "donorunApp.activity.detail.title"], [1, "row-md", "jh-entity-details"], ["jhiTranslate", "global.field.id"], ["jhiTranslate", "donorunApp.activity.title"], ["jhiTranslate", "donorunApp.activity.distance"], ["jhiTranslate", "donorunApp.activity.avgPace"], ["jhiTranslate", "donorunApp.activity.movingTime"], ["jhiTranslate", "donorunApp.activity.calories"], ["jhiTranslate", "donorunApp.activity.avgHeartRate"], ["jhiTranslate", "donorunApp.activity.sportType"], [3, "jhiTranslate"], ["jhiTranslate", "donorunApp.activity.valid"], ["jhiTranslate", "donorunApp.activity.publicActivity"], ["jhiTranslate", "donorunApp.activity.amountOfMoney"], ["jhiTranslate", "donorunApp.activity.wasPaid"], ["jhiTranslate", "donorunApp.activity.activityDate"], ["jhiTranslate", "donorunApp.activity.createdDate"], ["jhiTranslate", "donorunApp.activity.sportsman"], ["type", "submit", "data-cy", "entityDetailsBackButton", 1, "btn", "btn-info", 3, "click"], ["icon", "arrow-left"], ["jhiTranslate", "entity.action.back"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit"]], template: function ActivityDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ActivityDetailComponent_div_4_Template, 184, 26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__.AlertErrorComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink], pipes: [_shared_date_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.DurationPipe, _shared_date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_4__.FormatMediumDatePipe, _shared_date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_5__.FormatMediumDatetimePipe], encapsulation: 2 });


/***/ }),

/***/ 4440:
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity/list/activity.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityComponent": () => (/* binding */ ActivityComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/config/pagination.constants */ 4218);
/* harmony import */ var _delete_activity_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delete/activity-delete-dialog.component */ 1526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/activity.service */ 6965);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 9003);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sort/sort.directive */ 1427);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pagination/item-count.component */ 8133);
/* harmony import */ var _shared_date_duration_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/date/duration.pipe */ 3733);
/* harmony import */ var _shared_date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/date/format-medium-date.pipe */ 8421);
/* harmony import */ var _shared_date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/date/format-medium-datetime.pipe */ 329);


















function ActivityComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "No activities found");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/activity", a1, "view"]; };
const _c1 = function (a1) { return ["/activity", a1, "edit"]; };
function ActivityComponent_div_33_tr_128_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](44, "formatMediumDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](48, "formatMediumDatetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "fa-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](67, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ActivityComponent_div_33_tr_128_Template_button_click_73_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const activity_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r5.delete(activity_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](74, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](75, "fa-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](76, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](80, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](82, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](26, _c0, activity_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.distance);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.avgPace);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("title", activity_r4.movingTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 20, activity_r4.movingTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.calories);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.avgHeartRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("jhiTranslate", "donorunApp.SportType." + activity_r4.sportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.sportType);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.publicActivity);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.amountOfMoney);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](activity_r4.wasPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](44, 22, activity_r4.activityDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](48, 24, activity_r4.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n            ", activity_r4.sportsman == null ? null : activity_r4.sportsman.id, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](28, _c0, activity_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](30, _c1, activity_r4.id));
} }
function ActivityComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("predicateChange", function ActivityComponent_div_33_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r7.predicate = $event; })("ascendingChange", function ActivityComponent_div_33_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r9.ascending = $event; })("sortChange", function ActivityComponent_div_33_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r10.loadPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "th", 17)(9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "th", 20)(15, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Distance");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Avg Pace");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](33, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Moving Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](41, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "Calories");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](49, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, "Avg Heart Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](57, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "Sport Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](65, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "th", 34)(69, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "Valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](72, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "Public Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](79, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](80, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](85, "Amount Of Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](87, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](89, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93, "Was Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](95, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](96, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](101, "Activity Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](103, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](107, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](108, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](109, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](110, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](111, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](113, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](114, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](116, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](117, "Sportsman");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](118, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](119, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](120, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](121, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](122, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](123, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](124, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](125, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](127, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](128, ActivityComponent_div_33_tr_128_Template, 83, 32, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](129, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](130, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](131, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("predicate", ctx_r1.predicate)("ascending", ctx_r1.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.activities)("ngForTrackBy", ctx_r1.trackId);
} }
const _c2 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function ActivityComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "jhi-item-count", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "ngb-pagination", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function ActivityComponent_div_35_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r11.ngbPaginationPage = $event; })("pageChange", function ActivityComponent_div_35_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r13.loadPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](7, _c2, ctx_r2.page, ctx_r2.totalItems, ctx_r2.itemsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionSize", ctx_r2.totalItems)("page", ctx_r2.ngbPaginationPage)("pageSize", ctx_r2.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
const _c3 = function () { return ["/activity/new"]; };
class ActivityComponent {
    constructor(activityService, activatedRoute, router, modalService) {
        this.activityService = activityService;
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
        this.activityService
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
    delete(activity) {
        const modalRef = this.modalService.open(_delete_activity_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ActivityDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.activity = activity;
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
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
            this.router.navigate(['/activity'], {
                queryParams: {
                    page: this.page,
                    size: this.itemsPerPage,
                    sort: this.predicate + ',' + (this.ascending ? app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ASC : app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.DESC),
                },
            });
        }
        this.activities = data !== null && data !== void 0 ? data : [];
        this.ngbPaginationPage = this.page;
    }
    onError() {
        var _a;
        this.ngbPaginationPage = (_a = this.page) !== null && _a !== void 0 ? _a : 1;
    }
}
ActivityComponent.ɵfac = function ActivityComponent_Factory(t) { return new (t || ActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_activity_service__WEBPACK_IMPORTED_MODULE_2__.ActivityService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal)); };
ActivityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ActivityComponent, selectors: [["jhi-activity"]], decls: 38, vars: 7, consts: [["id", "page-heading", "data-cy", "ActivityHeading"], ["jhiTranslate", "donorunApp.activity.home.title"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "me-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], ["jhiTranslate", "donorunApp.activity.home.refreshListLabel"], ["id", "jh-create-entity", "data-cy", "entityCreateButton", 1, "btn", "btn-primary", "jh-create-entity", "create-activity", 3, "routerLink"], ["icon", "plus"], ["jhiTranslate", "donorunApp.activity.home.createLabel"], ["class", "alert alert-warning", "id", "no-result", 4, "ngIf"], ["class", "table-responsive", "id", "entities", 4, "ngIf"], [4, "ngIf"], ["id", "no-result", 1, "alert", "alert-warning"], ["jhiTranslate", "donorunApp.activity.home.notFound"], ["id", "entities", 1, "table-responsive"], ["aria-describedby", "page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["jhiTranslate", "global.field.id"], ["icon", "sort"], ["scope", "col", "jhiSortBy", "title"], ["jhiTranslate", "donorunApp.activity.title"], ["scope", "col", "jhiSortBy", "distance"], ["jhiTranslate", "donorunApp.activity.distance"], ["scope", "col", "jhiSortBy", "avgPace"], ["jhiTranslate", "donorunApp.activity.avgPace"], ["scope", "col", "jhiSortBy", "movingTime"], ["jhiTranslate", "donorunApp.activity.movingTime"], ["scope", "col", "jhiSortBy", "calories"], ["jhiTranslate", "donorunApp.activity.calories"], ["scope", "col", "jhiSortBy", "avgHeartRate"], ["jhiTranslate", "donorunApp.activity.avgHeartRate"], ["scope", "col", "jhiSortBy", "sportType"], ["jhiTranslate", "donorunApp.activity.sportType"], ["scope", "col", "jhiSortBy", "valid"], ["jhiTranslate", "donorunApp.activity.valid"], ["scope", "col", "jhiSortBy", "publicActivity"], ["jhiTranslate", "donorunApp.activity.publicActivity"], ["scope", "col", "jhiSortBy", "amountOfMoney"], ["jhiTranslate", "donorunApp.activity.amountOfMoney"], ["scope", "col", "jhiSortBy", "wasPaid"], ["jhiTranslate", "donorunApp.activity.wasPaid"], ["scope", "col", "jhiSortBy", "activityDate"], ["jhiTranslate", "donorunApp.activity.activityDate"], ["scope", "col", "jhiSortBy", "createdDate"], ["jhiTranslate", "donorunApp.activity.createdDate"], ["scope", "col", "jhiSortBy", "sportsman.id"], ["jhiTranslate", "donorunApp.activity.sportsman"], ["scope", "col"], ["data-cy", "entityTable", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["data-cy", "entityTable"], [3, "routerLink"], [3, "title"], [3, "jhiTranslate"], [1, "text-end"], [1, "btn-group"], ["type", "submit", "data-cy", "entityDetailsButton", 1, "btn", "btn-info", "btn-sm", 3, "routerLink"], ["icon", "eye"], ["jhiTranslate", "entity.action.view", 1, "d-none", "d-md-inline"], ["type", "submit", "data-cy", "entityEditButton", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit", 1, "d-none", "d-md-inline"], ["type", "submit", "data-cy", "entityDeleteButton", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["icon", "times"], ["jhiTranslate", "entity.action.delete", 1, "d-none", "d-md-inline"], [1, "d-flex", "justify-content-center"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"]], template: function ActivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ActivityComponent_Template_button_click_9_listener() { return ctx.loadPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Refresh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, " Create a new Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "jhi-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, ActivityComponent_div_31_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, ActivityComponent_div_33_Template, 132, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, ActivityComponent_div_35_Template, 12, 11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.activities == null ? null : ctx.activities.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.activities && ctx.activities.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.activities && ctx.activities.length > 0);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__.AlertErrorComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_6__.SortDirective, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__.SortByDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_8__.ItemCountComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbPagination], pipes: [_shared_date_duration_pipe__WEBPACK_IMPORTED_MODULE_9__.DurationPipe, _shared_date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_10__.FormatMediumDatePipe, _shared_date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_11__.FormatMediumDatetimePipe], encapsulation: 2 });


/***/ }),

/***/ 1620:
/*!*****************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity/route/activity-routing-resolve.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityRoutingResolveService": () => (/* binding */ ActivityRoutingResolveService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var _activity_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../activity.model */ 5972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/activity.service */ 6965);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);






class ActivityRoutingResolveService {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    resolve(route) {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((activity) => {
                if (activity.body) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(activity.body);
                }
                else {
                    this.router.navigate(['404']);
                    return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
                }
            }));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(new _activity_model__WEBPACK_IMPORTED_MODULE_0__.Activity());
    }
}
ActivityRoutingResolveService.ɵfac = function ActivityRoutingResolveService_Factory(t) { return new (t || ActivityRoutingResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_service_activity_service__WEBPACK_IMPORTED_MODULE_1__.ActivityService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ActivityRoutingResolveService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ActivityRoutingResolveService, factory: ActivityRoutingResolveService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6355:
/*!********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity/route/activity-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityRoutingModule": () => (/* binding */ ActivityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ 8059);
/* harmony import */ var _list_activity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list/activity.component */ 4440);
/* harmony import */ var _detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail/activity-detail.component */ 8711);
/* harmony import */ var _update_activity_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update/activity-update.component */ 7286);
/* harmony import */ var _activity_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity-routing-resolve.service */ 1620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const activityRoute = [
    {
        path: '',
        component: _list_activity_component__WEBPACK_IMPORTED_MODULE_1__.ActivityComponent,
        data: {
            defaultSort: 'id,asc',
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/view',
        component: _detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_2__.ActivityDetailComponent,
        resolve: {
            activity: _activity_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__.ActivityRoutingResolveService,
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: 'new',
        component: _update_activity_update_component__WEBPACK_IMPORTED_MODULE_3__.ActivityUpdateComponent,
        resolve: {
            activity: _activity_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__.ActivityRoutingResolveService,
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
    {
        path: ':id/edit',
        component: _update_activity_update_component__WEBPACK_IMPORTED_MODULE_3__.ActivityUpdateComponent,
        resolve: {
            activity: _activity_routing_resolve_service__WEBPACK_IMPORTED_MODULE_4__.ActivityRoutingResolveService,
        },
        canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
    },
];
class ActivityRoutingModule {
}
ActivityRoutingModule.ɵfac = function ActivityRoutingModule_Factory(t) { return new (t || ActivityRoutingModule)(); };
ActivityRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ActivityRoutingModule });
ActivityRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(activityRoute)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ActivityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 7286:
/*!***********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity/update/activity-update.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityUpdateComponent": () => (/* binding */ ActivityUpdateComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 1157);
/* harmony import */ var app_config_input_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/input.constants */ 1726);
/* harmony import */ var _activity_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activity.model */ 5972);
/* harmony import */ var app_entities_enumerations_sport_type_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/entities/enumerations/sport-type.model */ 119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/activity.service */ 6965);
/* harmony import */ var app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/entities/user/user.service */ 3202);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
















function ActivityUpdateComponent_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sportType_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", sportType_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\n              ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "donorunApp.SportType." + sportType_r3), "\n            ");
} }
function ActivityUpdateComponent_option_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userOption_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", userOption_r4.id === (ctx_r2.editForm.get("sportsman").value == null ? null : ctx_r2.editForm.get("sportsman").value.id) ? ctx_r2.editForm.get("sportsman").value : userOption_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\n              ", userOption_r4.id, "\n            ");
} }
class ActivityUpdateComponent {
    constructor(activityService, userService, activatedRoute, fb) {
        this.activityService = activityService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.sportTypeValues = Object.keys(app_entities_enumerations_sport_type_model__WEBPACK_IMPORTED_MODULE_3__.SportType);
        this.usersSharedCollection = [];
        this.editForm = this.fb.group({
            id: [],
            title: [],
            distance: [],
            avgPace: [],
            movingTime: [],
            calories: [],
            avgHeartRate: [],
            sportType: [],
            valid: [],
            publicActivity: [],
            amountOfMoney: [],
            wasPaid: [],
            activityDate: [],
            createdDate: [],
            sportsman: [],
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ activity }) => {
            if (activity.id === undefined) {
                const today = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])().startOf('day');
                activity.createdDate = today;
            }
            this.updateForm(activity);
            this.loadRelationshipsOptions();
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const activity = this.createFromForm();
        if (activity.id !== undefined) {
            this.subscribeToSaveResponse(this.activityService.update(activity));
        }
        else {
            this.subscribeToSaveResponse(this.activityService.create(activity));
        }
    }
    trackUserById(_index, item) {
        return item.id;
    }
    subscribeToSaveResponse(result) {
        result.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.onSaveFinalize())).subscribe({
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
    updateForm(activity) {
        this.editForm.patchValue({
            id: activity.id,
            title: activity.title,
            distance: activity.distance,
            avgPace: activity.avgPace,
            movingTime: activity.movingTime,
            calories: activity.calories,
            avgHeartRate: activity.avgHeartRate,
            sportType: activity.sportType,
            valid: activity.valid,
            publicActivity: activity.publicActivity,
            amountOfMoney: activity.amountOfMoney,
            wasPaid: activity.wasPaid,
            activityDate: activity.activityDate,
            createdDate: activity.createdDate ? activity.createdDate.format(app_config_input_constants__WEBPACK_IMPORTED_MODULE_1__.DATE_TIME_FORMAT) : null,
            sportsman: activity.sportsman,
        });
        this.usersSharedCollection = this.userService.addUserToCollectionIfMissing(this.usersSharedCollection, activity.sportsman);
    }
    loadRelationshipsOptions() {
        this.userService
            .query()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((res) => { var _a; return (_a = res.body) !== null && _a !== void 0 ? _a : []; }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((users) => this.userService.addUserToCollectionIfMissing(users, this.editForm.get('sportsman').value)))
            .subscribe((users) => (this.usersSharedCollection = users));
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new _activity_model__WEBPACK_IMPORTED_MODULE_2__.Activity()), { id: this.editForm.get(['id']).value, title: this.editForm.get(['title']).value, distance: this.editForm.get(['distance']).value, avgPace: this.editForm.get(['avgPace']).value, movingTime: this.editForm.get(['movingTime']).value, calories: this.editForm.get(['calories']).value, avgHeartRate: this.editForm.get(['avgHeartRate']).value, sportType: this.editForm.get(['sportType']).value, valid: this.editForm.get(['valid']).value, publicActivity: this.editForm.get(['publicActivity']).value, amountOfMoney: this.editForm.get(['amountOfMoney']).value, wasPaid: this.editForm.get(['wasPaid']).value, activityDate: this.editForm.get(['activityDate']).value, createdDate: this.editForm.get(['createdDate']).value
                ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(this.editForm.get(['createdDate']).value, app_config_input_constants__WEBPACK_IMPORTED_MODULE_1__.DATE_TIME_FORMAT)
                : undefined, sportsman: this.editForm.get(['sportsman']).value });
    }
}
ActivityUpdateComponent.ɵfac = function ActivityUpdateComponent_Factory(t) { return new (t || ActivityUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_activity_service__WEBPACK_IMPORTED_MODULE_4__.ActivityService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_entities_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder)); };
ActivityUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ActivityUpdateComponent, selectors: [["jhi-activity-update"]], decls: 180, vars: 12, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], ["name", "editForm", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "jhi-activity-heading", "data-cy", "ActivityCreateUpdateHeading", "jhiTranslate", "donorunApp.activity.home.createOrEditLabel"], [1, "row", "mb-3", 3, "hidden"], ["jhiTranslate", "global.field.id", "for", "field_id", 1, "form-label"], ["type", "text", "name", "id", "id", "field_id", "data-cy", "id", "formControlName", "id", 1, "form-control", 3, "readonly"], [1, "row", "mb-3"], ["jhiTranslate", "donorunApp.activity.title", "for", "field_title", 1, "form-label"], ["type", "text", "name", "title", "id", "field_title", "data-cy", "title", "formControlName", "title", 1, "form-control"], ["jhiTranslate", "donorunApp.activity.distance", "for", "field_distance", 1, "form-label"], ["type", "number", "name", "distance", "id", "field_distance", "data-cy", "distance", "formControlName", "distance", 1, "form-control"], ["jhiTranslate", "donorunApp.activity.avgPace", "for", "field_avgPace", 1, "form-label"], ["type", "number", "name", "avgPace", "id", "field_avgPace", "data-cy", "avgPace", "formControlName", "avgPace", 1, "form-control"], ["jhiTranslate", "donorunApp.activity.movingTime", "for", "field_movingTime", 1, "form-label"], ["type", "text", "name", "movingTime", "id", "field_movingTime", "data-cy", "movingTime", "formControlName", "movingTime", 1, "form-control"], ["jhiTranslate", "donorunApp.activity.calories", "for", "field_calories", 1, "form-label"], ["type", "number", "name", "calories", "id", "field_calories", "data-cy", "calories", "formControlName", "calories", 1, "form-control"], ["jhiTranslate", "donorunApp.activity.avgHeartRate", "for", "field_avgHeartRate", 1, "form-label"], ["type", "number", "name", "avgHeartRate", "id", "field_avgHeartRate", "data-cy", "avgHeartRate", "formControlName", "avgHeartRate", 1, "form-control"], ["jhiTranslate", "donorunApp.activity.sportType", "for", "field_sportType", 1, "form-label"], ["name", "sportType", "formControlName", "sportType", "id", "field_sportType", "data-cy", "sportType", 1, "form-control"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["jhiTranslate", "donorunApp.activity.valid", "for", "field_valid", 1, "form-label"], ["type", "checkbox", "name", "valid", "id", "field_valid", "data-cy", "valid", "formControlName", "valid", 1, "form-check"], ["jhiTranslate", "donorunApp.activity.publicActivity", "for", "field_publicActivity", 1, "form-label"], ["type", "checkbox", "name", "publicActivity", "id", "field_publicActivity", "data-cy", "publicActivity", "formControlName", "publicActivity", 1, "form-check"], ["jhiTranslate", "donorunApp.activity.amountOfMoney", "for", "field_amountOfMoney", 1, "form-label"], ["type", "number", "name", "amountOfMoney", "id", "field_amountOfMoney", "data-cy", "amountOfMoney", "formControlName", "amountOfMoney", 1, "form-control"], ["jhiTranslate", "donorunApp.activity.wasPaid", "for", "field_wasPaid", 1, "form-label"], ["type", "checkbox", "name", "wasPaid", "id", "field_wasPaid", "data-cy", "wasPaid", "formControlName", "wasPaid", 1, "form-check"], ["jhiTranslate", "donorunApp.activity.activityDate", "for", "field_activityDate", 1, "form-label"], [1, "input-group"], ["id", "field_activityDate", "data-cy", "activityDate", "type", "text", "name", "activityDate", "ngbDatepicker", "", "formControlName", "activityDate", 1, "form-control"], ["activityDateDp", "ngbDatepicker"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["icon", "calendar-alt"], ["jhiTranslate", "donorunApp.activity.createdDate", "for", "field_createdDate", 1, "form-label"], [1, "d-flex"], ["id", "field_createdDate", "data-cy", "createdDate", "type", "datetime-local", "name", "createdDate", "formControlName", "createdDate", "placeholder", "YYYY-MM-DD HH:mm", 1, "form-control"], ["jhiTranslate", "donorunApp.activity.sportsman", "for", "field_sportsman", 1, "form-label"], ["id", "field_sportsman", "data-cy", "sportsman", "name", "sportsman", "formControlName", "sportsman", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", "id", "cancel-save", "data-cy", "entityCreateCancelButton", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", "id", "save-entity", "data-cy", "entityCreateSaveButton", 1, "btn", "btn-primary", 3, "disabled"], ["icon", "save"], ["jhiTranslate", "entity.action.save"], [3, "value"]], template: function ActivityUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ActivityUpdateComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\n        Create or edit a Activity\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Avg Pace");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Moving Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Calories");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "Avg Heart Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "Sport Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, ActivityUpdateComponent_option_80_Template, 3, 4, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "Valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](89, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "Public Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](97, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, "Amount Of Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](105, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, "Was Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](113, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "Activity Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](123, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActivityUpdateComponent_Template_button_click_126_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](124); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](128, "fa-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](129, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](136, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](140, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](141, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](143, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "Sportsman");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](150, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](151, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](153, ActivityUpdateComponent_option_153_Template, 2, 2, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](156, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](157, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ActivityUpdateComponent_Template_button_click_160_listener() { return ctx.previousState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](162, "fa-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](165, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](167, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](169, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](170, "fa-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](173, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](174, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](176, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](177, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](178, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.editForm.get("id").value == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](78, 10, "donorunApp.SportType.null"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.sportTypeValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.usersSharedCollection)("ngForTrackBy", ctx.trackUserById);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.editForm.invalid || ctx.isSaving);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_7__.AlertErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbInputDatepicker, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 119:
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/entities/enumerations/sport-type.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SportType": () => (/* binding */ SportType)
/* harmony export */ });
var SportType;
(function (SportType) {
    SportType["RUN"] = "RUN";
    SportType["RIDE"] = "RIDE";
    SportType["SWIM"] = "SWIM";
})(SportType || (SportType = {}));


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_activity_activity_module_ts.js.map