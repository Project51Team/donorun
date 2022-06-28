"use strict";
(self["webpackChunkdonorun"] = self["webpackChunkdonorun"] || []).push([["common"],{

/***/ 1726:
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/config/input.constants.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_FORMAT": () => (/* binding */ DATE_FORMAT),
/* harmony export */   "DATE_TIME_FORMAT": () => (/* binding */ DATE_TIME_FORMAT)
/* harmony export */ });
const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';


/***/ }),

/***/ 4218:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/config/pagination.constants.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASC": () => (/* binding */ ASC),
/* harmony export */   "DESC": () => (/* binding */ DESC),
/* harmony export */   "ITEMS_PER_PAGE": () => (/* binding */ ITEMS_PER_PAGE),
/* harmony export */   "SORT": () => (/* binding */ SORT)
/* harmony export */ });
const ITEMS_PER_PAGE = 20;
const ASC = 'asc';
const DESC = 'desc';
const SORT = 'sort';


/***/ }),

/***/ 5929:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/core/request/request-util.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestOption": () => (/* binding */ createRequestOption)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);

const createRequestOption = (req) => {
    let options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach((val) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


/***/ }),

/***/ 6037:
/*!****************************************************!*\
  !*** ./src/main/webapp/app/core/util/operators.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterNaN": () => (/* binding */ filterNaN),
/* harmony export */   "isPresent": () => (/* binding */ isPresent)
/* harmony export */ });
/*
 * Function used to workaround https://github.com/microsoft/TypeScript/issues/16069
 * es2019 alternative `const filteredArr = myArr.flatMap((x) => x ? x : []);`
 */
function isPresent(t) {
    return t !== undefined && t !== null;
}
const filterNaN = (input) => (isNaN(input) ? 0 : input);


/***/ }),

/***/ 5972:
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity/activity.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Activity": () => (/* binding */ Activity),
/* harmony export */   "getActivityIdentifier": () => (/* binding */ getActivityIdentifier)
/* harmony export */ });
class Activity {
    constructor(id, title, distance, avgPace, movingTime, calories, avgHeartRate, sportType, valid, publicActivity, amountOfMoney, wasPaid, activityDate, createdDate, sportsman, transactions) {
        var _a, _b, _c;
        this.id = id;
        this.title = title;
        this.distance = distance;
        this.avgPace = avgPace;
        this.movingTime = movingTime;
        this.calories = calories;
        this.avgHeartRate = avgHeartRate;
        this.sportType = sportType;
        this.valid = valid;
        this.publicActivity = publicActivity;
        this.amountOfMoney = amountOfMoney;
        this.wasPaid = wasPaid;
        this.activityDate = activityDate;
        this.createdDate = createdDate;
        this.sportsman = sportsman;
        this.transactions = transactions;
        this.valid = (_a = this.valid) !== null && _a !== void 0 ? _a : false;
        this.publicActivity = (_b = this.publicActivity) !== null && _b !== void 0 ? _b : false;
        this.wasPaid = (_c = this.wasPaid) !== null && _c !== void 0 ? _c : false;
    }
}
function getActivityIdentifier(activity) {
    return activity.id;
}


/***/ }),

/***/ 6965:
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity/service/activity.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityService": () => (/* binding */ ActivityService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 1157);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/operators */ 6037);
/* harmony import */ var app_config_input_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/input.constants */ 1726);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/request/request-util */ 5929);
/* harmony import */ var _activity_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../activity.model */ 5972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);









class ActivityService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/activities');
    }
    create(activity) {
        const copy = this.convertDateFromClient(activity);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((res) => this.convertDateFromServer(res)));
    }
    update(activity) {
        const copy = this.convertDateFromClient(activity);
        return this.http
            .put(`${this.resourceUrl}/${(0,_activity_model__WEBPACK_IMPORTED_MODULE_4__.getActivityIdentifier)(activity)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((res) => this.convertDateFromServer(res)));
    }
    partialUpdate(activity) {
        const copy = this.convertDateFromClient(activity);
        return this.http
            .patch(`${this.resourceUrl}/${(0,_activity_model__WEBPACK_IMPORTED_MODULE_4__.getActivityIdentifier)(activity)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((res) => this.convertDateFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((res) => this.convertDateFromServer(res)));
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_3__.createRequestOption)(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((res) => this.convertDateArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    addActivityToCollectionIfMissing(activityCollection, ...activitiesToCheck) {
        const activities = activitiesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__.isPresent);
        if (activities.length > 0) {
            const activityCollectionIdentifiers = activityCollection.map(activityItem => (0,_activity_model__WEBPACK_IMPORTED_MODULE_4__.getActivityIdentifier)(activityItem));
            const activitiesToAdd = activities.filter(activityItem => {
                const activityIdentifier = (0,_activity_model__WEBPACK_IMPORTED_MODULE_4__.getActivityIdentifier)(activityItem);
                if (activityIdentifier == null || activityCollectionIdentifiers.includes(activityIdentifier)) {
                    return false;
                }
                activityCollectionIdentifiers.push(activityIdentifier);
                return true;
            });
            return [...activitiesToAdd, ...activityCollection];
        }
        return activityCollection;
    }
    convertDateFromClient(activity) {
        var _a, _b;
        return Object.assign({}, activity, {
            activityDate: ((_a = activity.activityDate) === null || _a === void 0 ? void 0 : _a.isValid()) ? activity.activityDate.format(app_config_input_constants__WEBPACK_IMPORTED_MODULE_2__.DATE_FORMAT) : undefined,
            createdDate: ((_b = activity.createdDate) === null || _b === void 0 ? void 0 : _b.isValid()) ? activity.createdDate.toJSON() : undefined,
        });
    }
    convertDateFromServer(res) {
        if (res.body) {
            res.body.activityDate = res.body.activityDate ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(res.body.activityDate) : undefined;
            res.body.createdDate = res.body.createdDate ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(res.body.createdDate) : undefined;
        }
        return res;
    }
    convertDateArrayFromServer(res) {
        if (res.body) {
            res.body.forEach((activity) => {
                activity.activityDate = activity.activityDate ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(activity.activityDate) : undefined;
                activity.createdDate = activity.createdDate ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(activity.createdDate) : undefined;
            });
        }
        return res;
    }
}
ActivityService.ɵfac = function ActivityService_Factory(t) { return new (t || ActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_5__.ApplicationConfigService)); };
ActivityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ActivityService, factory: ActivityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 204:
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/entities/company/company.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Company": () => (/* binding */ Company),
/* harmony export */   "getCompanyIdentifier": () => (/* binding */ getCompanyIdentifier)
/* harmony export */ });
class Company {
    constructor(id, name, description, imageUrl, siteUrl, publicActivities, employees) {
        var _a;
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.siteUrl = siteUrl;
        this.publicActivities = publicActivities;
        this.employees = employees;
        this.publicActivities = (_a = this.publicActivities) !== null && _a !== void 0 ? _a : false;
    }
}
function getCompanyIdentifier(company) {
    return company.id;
}


/***/ }),

/***/ 4630:
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/entities/company/service/company.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyService": () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 6037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 5929);
/* harmony import */ var _company_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.model */ 204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);






class CompanyService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/companies');
    }
    create(company) {
        return this.http.post(this.resourceUrl, company, { observe: 'response' });
    }
    update(company) {
        return this.http.put(`${this.resourceUrl}/${(0,_company_model__WEBPACK_IMPORTED_MODULE_2__.getCompanyIdentifier)(company)}`, company, { observe: 'response' });
    }
    partialUpdate(company) {
        return this.http.patch(`${this.resourceUrl}/${(0,_company_model__WEBPACK_IMPORTED_MODULE_2__.getCompanyIdentifier)(company)}`, company, { observe: 'response' });
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
    addCompanyToCollectionIfMissing(companyCollection, ...companiesToCheck) {
        const companies = companiesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (companies.length > 0) {
            const companyCollectionIdentifiers = companyCollection.map(companyItem => (0,_company_model__WEBPACK_IMPORTED_MODULE_2__.getCompanyIdentifier)(companyItem));
            const companiesToAdd = companies.filter(companyItem => {
                const companyIdentifier = (0,_company_model__WEBPACK_IMPORTED_MODULE_2__.getCompanyIdentifier)(companyItem);
                if (companyIdentifier == null || companyCollectionIdentifiers.includes(companyIdentifier)) {
                    return false;
                }
                companyCollectionIdentifiers.push(companyIdentifier);
                return true;
            });
            return [...companiesToAdd, ...companyCollection];
        }
        return companyCollection;
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
CompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8662:
/*!*******************************************************************************!*\
  !*** ./src/main/webapp/app/entities/money-recipient/money-recipient.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyRecipient": () => (/* binding */ MoneyRecipient),
/* harmony export */   "getMoneyRecipientIdentifier": () => (/* binding */ getMoneyRecipientIdentifier)
/* harmony export */ });
class MoneyRecipient {
    constructor(id, name, description, avatarUrl, siteUrl, recipientType, accountDetails) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.avatarUrl = avatarUrl;
        this.siteUrl = siteUrl;
        this.recipientType = recipientType;
        this.accountDetails = accountDetails;
    }
}
function getMoneyRecipientIdentifier(moneyRecipient) {
    return moneyRecipient.id;
}


/***/ }),

/***/ 6293:
/*!*****************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/money-recipient/service/money-recipient.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyRecipientService": () => (/* binding */ MoneyRecipientService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 6037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 5929);
/* harmony import */ var _money_recipient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../money-recipient.model */ 8662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);






class MoneyRecipientService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/money-recipients');
    }
    create(moneyRecipient) {
        return this.http.post(this.resourceUrl, moneyRecipient, { observe: 'response' });
    }
    update(moneyRecipient) {
        return this.http.put(`${this.resourceUrl}/${(0,_money_recipient_model__WEBPACK_IMPORTED_MODULE_2__.getMoneyRecipientIdentifier)(moneyRecipient)}`, moneyRecipient, {
            observe: 'response',
        });
    }
    partialUpdate(moneyRecipient) {
        return this.http.patch(`${this.resourceUrl}/${(0,_money_recipient_model__WEBPACK_IMPORTED_MODULE_2__.getMoneyRecipientIdentifier)(moneyRecipient)}`, moneyRecipient, { observe: 'response' });
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
    addMoneyRecipientToCollectionIfMissing(moneyRecipientCollection, ...moneyRecipientsToCheck) {
        const moneyRecipients = moneyRecipientsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (moneyRecipients.length > 0) {
            const moneyRecipientCollectionIdentifiers = moneyRecipientCollection.map(moneyRecipientItem => (0,_money_recipient_model__WEBPACK_IMPORTED_MODULE_2__.getMoneyRecipientIdentifier)(moneyRecipientItem));
            const moneyRecipientsToAdd = moneyRecipients.filter(moneyRecipientItem => {
                const moneyRecipientIdentifier = (0,_money_recipient_model__WEBPACK_IMPORTED_MODULE_2__.getMoneyRecipientIdentifier)(moneyRecipientItem);
                if (moneyRecipientIdentifier == null || moneyRecipientCollectionIdentifiers.includes(moneyRecipientIdentifier)) {
                    return false;
                }
                moneyRecipientCollectionIdentifiers.push(moneyRecipientIdentifier);
                return true;
            });
            return [...moneyRecipientsToAdd, ...moneyRecipientCollection];
        }
        return moneyRecipientCollection;
    }
}
MoneyRecipientService.ɵfac = function MoneyRecipientService_Factory(t) { return new (t || MoneyRecipientService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
MoneyRecipientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MoneyRecipientService, factory: MoneyRecipientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5244:
/*!*********************************************************!*\
  !*** ./src/main/webapp/app/entities/user/user.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "getUserIdentifier": () => (/* binding */ getUserIdentifier)
/* harmony export */ });
class User {
    constructor(id, login) {
        this.id = id;
        this.login = login;
    }
}
function getUserIdentifier(user) {
    return user.id;
}


/***/ }),

/***/ 3202:
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/entities/user/user.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/request/request-util */ 5929);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/operators */ 6037);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.model */ 5244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);






class UserService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/users');
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    addUserToCollectionIfMissing(userCollection, ...usersToCheck) {
        const users = usersToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__.isPresent);
        if (users.length > 0) {
            const userCollectionIdentifiers = userCollection.map(userItem => (0,_user_model__WEBPACK_IMPORTED_MODULE_2__.getUserIdentifier)(userItem));
            const usersToAdd = users.filter(userItem => {
                const userIdentifier = (0,_user_model__WEBPACK_IMPORTED_MODULE_2__.getUserIdentifier)(userItem);
                if (userIdentifier == null || userCollectionIdentifiers.includes(userIdentifier)) {
                    return false;
                }
                userCollectionIdentifiers.push(userIdentifier);
                return true;
            });
            return [...usersToAdd, ...userCollection];
        }
        return userCollection;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map