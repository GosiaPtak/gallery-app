(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Galeria</h1>\n    <app-gallery></app-gallery>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 700px;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NpYXB0YWsvRGVza3RvcC9NYXN0ZXJjbGFzcy9nYWxsZXJ5LWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLFlBQVk7RUFBRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHt3aWR0aDogNzAwcHg7IG1hcmdpbjogYXV0bzsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery/gallery.service */ "./src/app/gallery/gallery.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gallery-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_gallery_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _gallery_thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/thumbnails/thumbnails.component */ "./src/app/gallery/thumbnails/thumbnails.component.ts");
/* harmony import */ var _gallery_images_images_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/images/images.component */ "./src/app/gallery/images/images.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                _gallery_thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_5__["ThumbnailsComponent"],
                _gallery_images_images_component__WEBPACK_IMPORTED_MODULE_6__["ImagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-thumbnails [className]=\"'section-thumb'\"></app-thumbnails>\n<app-images [className]=\"'section-image'\"></app-images>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-thumb {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px; }\n\n.section-image {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NpYXB0YWsvRGVza3RvcC9NYXN0ZXJjbGFzcy9nYWxsZXJ5LWFwcC9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNlY3Rpb24tdGh1bWJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zZWN0aW9uLWltYWdle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.service */ "./src/app/gallery/gallery.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(galleryService) {
        this.galleryService = galleryService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.service.ts":
/*!********************************************!*\
  !*** ./src/app/gallery/gallery.service.ts ***!
  \********************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var _assets_images_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images.json */ "./src/assets/images.json");
var _assets_images_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/images.json */ "./src/assets/images.json", 1);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var GalleryService = /** @class */ (function () {
    function GalleryService() {
        var _this = this;
        this.thumbsDomain = _assets_images_json__WEBPACK_IMPORTED_MODULE_0__.properties.photos.items.properties.image.chance.url.domain.replace('/300/150', '/200/133');
        this.thumbsUrls = [];
        this.imagesDomain = _assets_images_json__WEBPACK_IMPORTED_MODULE_0__.properties.photos.items.properties.image.chance.url.domain.replace('/300/150', '/600/400');
        this.imagesNumber = ['?image=1001', '?image=1002', '?image=1003'];
        this.displayedImage = this.imagesDomain + this.imagesNumber[0];
        this.activeImage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getUrls = function () {
            _this.imagesNumber.forEach(function (value) { return _this.thumbsUrls.push(_this.thumbsDomain + value); });
            //
        };
        this.onDislayImage = function (i) {
            _this.activeImage.next(_this.displayedImage = _this.imagesDomain + _this.imagesNumber[i]);
        };
    }
    return GalleryService;
}());



/***/ }),

/***/ "./src/app/gallery/images/images.component.html":
/*!******************************************************!*\
  !*** ./src/app/gallery/images/images.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"{{ fullImage }}\">\n"

/***/ }),

/***/ "./src/app/gallery/images/images.component.scss":
/*!******************************************************!*\
  !*** ./src/app/gallery/images/images.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvaW1hZ2VzL2ltYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gallery/images/images.component.ts":
/*!****************************************************!*\
  !*** ./src/app/gallery/images/images.component.ts ***!
  \****************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gallery.service */ "./src/app/gallery/gallery.service.ts");



var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(imagesService) {
        this.imagesService = imagesService;
    }
    ImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fullImage = this.imagesService.displayedImage;
        this.subscription = this.imagesService.activeImage.subscribe(function (res) { _this.fullImage = res; });
    };
    ImagesComponent.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/gallery/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.scss */ "./src/app/gallery/images/images.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/gallery/thumbnails/thumbnails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/gallery/thumbnails/thumbnails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"thumb\" \n*ngFor=\"let thumb of thumbnails, let i = index\" \n(click)=\"onSetDislayedImage(i)\" \n[ngClass]=\"{'active': i === activeThumb}\"\n[className]=\"'item-thumb'\">"

/***/ }),

/***/ "./src/app/gallery/thumbnails/thumbnails.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/gallery/thumbnails/thumbnails.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  border: 5px solid yellow; }\n\nimg {\n  border: 5px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3NpYXB0YWsvRGVza3RvcC9NYXN0ZXJjbGFzcy9nYWxsZXJ5LWFwcC9zcmMvYXBwL2dhbGxlcnkvdGh1bWJuYWlscy90aHVtYm5haWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsd0JBQXdCLEVBQUE7O0FBQ2xDO0VBQU0sdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUgeyBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3c7fVxuaW1nIHsgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7fSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/thumbnails/thumbnails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/gallery/thumbnails/thumbnails.component.ts ***!
  \************************************************************/
/*! exports provided: ThumbnailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsComponent", function() { return ThumbnailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gallery.service */ "./src/app/gallery/gallery.service.ts");



var ThumbnailsComponent = /** @class */ (function () {
    function ThumbnailsComponent(thumbsService) {
        this.thumbsService = thumbsService;
    }
    ThumbnailsComponent.prototype.ngOnInit = function () {
        this.thumbsService.getUrls();
        this.thumbnails = this.thumbsService.thumbsUrls;
    };
    ThumbnailsComponent.prototype.onSetDislayedImage = function (id) {
        this.thumbsService.onDislayImage(id);
        this.activeThumb = id;
    };
    ThumbnailsComponent.prototype.ngOnDestroy = function () { };
    ThumbnailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thumbnails',
            template: __webpack_require__(/*! ./thumbnails.component.html */ "./src/app/gallery/thumbnails/thumbnails.component.html"),
            styles: [__webpack_require__(/*! ./thumbnails.component.scss */ "./src/app/gallery/thumbnails/thumbnails.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], ThumbnailsComponent);
    return ThumbnailsComponent;
}());



/***/ }),

/***/ "./src/assets/images.json":
/*!********************************!*\
  !*** ./src/assets/images.json ***!
  \********************************/
/*! exports provided: id, type, required, properties, default */
/***/ (function(module) {

module.exports = {"id":"photos","type":"object","required":["photos"],"properties":{"photos":{"type":"array","minItems":20,"items":{"type":"object","required":["id","title","description","image"],"properties":{"id":{"chance":{"guid":{}}},"title":{"type":"string","faker":"commerce.product"},"description":{"chance":{"paragraph":{"sentences":1}}},"image":{"chance":{"url":{"domain":"https://picsum.photos/300/150","extensions":["gif","jpg","png"]}}}}}}}};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gosiaptak/Desktop/Masterclass/gallery-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map