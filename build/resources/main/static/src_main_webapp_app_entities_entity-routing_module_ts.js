"use strict";
(self["webpackChunkdonorun"] = self["webpackChunkdonorun"] || []).push([["src_main_webapp_app_entities_entity-routing_module_ts"],{

/***/ 1094:
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/entities/entity-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityRoutingModule": () => (/* binding */ EntityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class EntityRoutingModule {
}
EntityRoutingModule.ɵfac = function EntityRoutingModule_Factory(t) { return new (t || EntityRoutingModule)(); };
EntityRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EntityRoutingModule });
EntityRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([
                {
                    path: 'company',
                    data: { pageTitle: 'donorunApp.company.home.title' },
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_company_company_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./company/company.module */ 3126)).then(m => m.CompanyModule),
                },
                {
                    path: 'activity',
                    data: { pageTitle: 'donorunApp.activity.home.title' },
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_activity_activity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./activity/activity.module */ 4424)).then(m => m.ActivityModule),
                },
                {
                    path: 'transaction',
                    data: { pageTitle: 'donorunApp.transaction.home.title' },
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_transaction_transaction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./transaction/transaction.module */ 6053)).then(m => m.TransactionModule),
                },
                {
                    path: 'money-recipient',
                    data: { pageTitle: 'donorunApp.moneyRecipient.home.title' },
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_money-recipient_money-recipient_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./money-recipient/money-recipient.module */ 6819)).then(m => m.MoneyRecipientModule),
                },
                {
                    path: 'setting',
                    data: { pageTitle: 'donorunApp.setting.home.title' },
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_setting_setting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./setting/setting.module */ 8899)).then(m => m.SettingModule),
                },
                /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EntityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_entity-routing_module_ts.js.map