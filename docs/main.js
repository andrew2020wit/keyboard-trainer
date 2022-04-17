"use strict";
(self["webpackChunkkeyboard_trainer"] = self["webpackChunkkeyboard_trainer"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 8043);
/* harmony import */ var _pages_setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/setting-page/setting-page.component */ 1456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent },
    { path: 'settings', component: _pages_setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_1__.SettingPageComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_statistic_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/statistic-service.service */ 6853);
/* harmony import */ var _services_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/text.service */ 5313);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(statisticService, textService) {
        this.statisticService = statisticService;
        this.textService = textService;
        this.interval = 0;
        this.interval = setInterval(() => {
            this.statisticService.saveState();
            this.textService.saveState();
        }, 2000);
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_statistic_service_service__WEBPACK_IMPORTED_MODULE_0__.StatisticService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_text_service__WEBPACK_IMPORTED_MODULE_1__.TextService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 2, consts: [[1, "layout"], ["mat-button", "", "color", "primary", "routerLink", "/", "routerLinkActive", "routerLinkActive", 3, "routerLinkActiveOptions"], ["mat-button", "", "color", "primary", "routerLink", "/settings", "routerLinkActive", "routerLinkActive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header")(2, "mat-toolbar")(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Keyboard trainer, v1.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav")(6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Trainer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "footer")(13, "mat-toolbar")(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Keyboard trainer, https://github.com/andrew2020wit, MIT License. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: [".layout[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n\nheader[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n}\n\nfooter[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 0;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #e6ecff;\n}\n\n@media (max-width: 800px) {\n  .mat-toolbar[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLE9BQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFBRTtFQUZGO0lBR0ksZUFBQTtFQUdGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleDogMDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAwO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmVjZmY7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_home_page_trainer_char_span_char_span_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home-page/trainer/char-span/char-span.component */ 4718);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 8043);
/* harmony import */ var _pages_home_page_trainer_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-page/trainer/info-panel/info-panel.component */ 3246);
/* harmony import */ var _pages_setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/setting-page/setting-page.component */ 1456);
/* harmony import */ var _pages_home_page_trainer_trainer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home-page/trainer/trainer.component */ 651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent,
        _pages_home_page_trainer_trainer_component__WEBPACK_IMPORTED_MODULE_6__.TrainerComponent,
        _pages_home_page_trainer_char_span_char_span_component__WEBPACK_IMPORTED_MODULE_2__.CharSpanComponent,
        _pages_home_page_trainer_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_4__.InfoPanelComponent,
        _pages_setting_page_setting_page_component__WEBPACK_IMPORTED_MODULE_5__.SettingPageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule] }); })();


/***/ }),

/***/ 7169:
/*!**********************************************!*\
  !*** ./src/app/default-data/default-text.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultText": () => (/* binding */ defaultText)
/* harmony export */ });
const defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio explicabo quos iusto mollitia odit tempore quo distinctio, id cumque obcaecati asperiores quia alias suscipit repellendus est commodi quidem sit perferendis, veniam, vitae harum amet magnam minus? Ex minima maiores expedita est animi alias repellat! Obcaecati itaque ipsum consequatur. Hic velit in consectetur porro totam maiores ad odio harum architecto nam officia pariatur, labore dolorem veniam modi libero deserunt commodi. Suscipit architecto, doloribus ipsa deserunt inventore perspiciatis tempora at quis vel sequi unde voluptatibus maxime. Iusto adipisci velit ducimus? Voluptatem itaque doloribus ipsa explicabo, laudantium vero laborum placeat asperiores facere quod deleniti, molestias hic quas, fugiat sed deserunt incidunt autem. Quas saepe blanditiis at iure dicta velit aut, corrupti accusamus! Ducimus voluptas aliquid necessitatibus tenetur, obcaecati quaerat nemo laboriosam ipsa, iure eius illum, possimus amet consequatur voluptates voluptatum non quam temporibus mollitia a. Esse, saepe perspiciatis dolorum illo quo quod quia dolores omnis cupiditate repudiandae iste praesentium sequi nisi et maxime sed optio beatae temporibus corporis illum? Alias ut maiores nesciunt unde expedita odit voluptatibus ab, ullam eveniet corrupti tenetur. Ex nihil, eos quam officia tempora repudiandae provident deserunt aliquam consequuntur pariatur, sint tempore, dicta maiores quisquam ipsam deleniti. Facilis quidem deleniti veritatis cumque eveniet, beatae, quae tempore sunt explicabo vitae voluptatem necessitatibus a nam voluptate fuga velit culpa provident. Cumque quam quia eaque, nobis laboriosam placeat voluptate quis dolores rem amet ratione reiciendis esse iure est debitis sed, ab eligendi. Rerum harum ab, ullam voluptate, et facilis porro quod cum eveniet nemo quasi, animi illo veniam similique sapiente! Maxime soluta eaque reprehenderit, aut eligendi dicta eos commodi optio facilis non ratione ducimus maiores impedit modi officia consequuntur quae voluptas saepe! Ex eligendi repudiandae tempore. Quisquam vel fuga quo tenetur doloremque ullam alias dicta voluptatibus. Accusamus ad quibusdam deserunt dolore aliquid et reiciendis repudiandae ducimus eum iure. Ex quidem velit quibusdam obcaecati similique nam porro illo omnis neque fugit qui distinctio ea inventore id atque error sapiente odit facilis maxime, animi ratione fuga nihil voluptatum tempora. Blanditiis velit voluptatum quisquam est, accusamus quia animi minus impedit tenetur explicabo asperiores deleniti libero temporibus non illo officiis. Cumque, possimus animi, saepe dolores ea temporibus cum nobis illum labore doloremque eligendi eos minima neque. Et eveniet voluptatum explicabo mollitia, ex dolorum inventore ut libero ipsum aspernatur! Asperiores omnis eligendi numquam hic pariatur vitae quod soluta tempore nisi voluptatem, culpa inventore aperiam temporibus, reprehenderit optio nihil blanditiis itaque eum cum laborum atque, dolor quia vero? Iure, voluptatum vero hic reiciendis culpa nihil optio consequatur recusandae debitis porro voluptatibus nam mollitia explicabo facere animi nostrum et rerum dolorum suscipit tenetur praesentium nemo repudiandae sequi sint. A nam voluptates esse distinctio quod pariatur quas deleniti magni iusto repellat tempore ipsam ex soluta sint sit perferendis molestias beatae, doloremque facere cumque quisquam nulla quaerat. Inventore ducimus quas modi iure alias doloremque et. Veritatis optio tempora praesentium temporibus ab officiis odio aliquam inventore error alias quos, numquam, corrupti exercitationem non. Iure totam pariatur dolor nostrum ipsum nobis officia officiis a ducimus eius? Voluptate quam eligendi qui, quibusdam maxime quos ipsam amet nobis eius corrupti repellendus perferendis deserunt facere ipsa odit reiciendis quisquam non debitis error velit eveniet, et temporibus. Modi, fugiat! Autem voluptatum, exercitationem veniam eius totam ad, quidem dignissimos blanditiis officia veritatis, similique voluptatibus ratione! Dolorum aspernatur sunt non tempore consequatur, officia minima corrupti expedita delectus libero debitis id iusto autem modi voluptates natus labore sequi alias? Quod, facere sequi cum sunt, eum nobis voluptatem quia officia optio consequatur, eveniet totam aspernatur. Iure tempore quibusdam at, animi nobis eaque ab rem aperiam nisi deleniti laudantium minus enim veritatis veniam. Eum esse mollitia voluptatum neque cum placeat quam numquam repellendus possimus, consectetur unde autem tempore modi totam animi soluta ratione iusto porro, corporis in id, non ullam. Totam, hic rerum animi tenetur at neque labore enim, nostrum in, quae cum. Quam officia iure nulla in autem ullam pariatur rerum suscipit accusantium, aliquam soluta deleniti blanditiis modi voluptate perferendis corporis eligendi culpa perspiciatis aut. Provident quisquam facere nostrum odit rem illo minus, iusto, alias ducimus itaque sapiente, sit quidem quasi deserunt eveniet. Exercitationem enim at provident aspernatur. Quo, dignissimos magnam minima ab natus, eius vero distinctio perspiciatis voluptatibus sit et consectetur facilis tempore? At, doloribus fuga molestias, iste cupiditate laborum nobis quidem atque suscipit esse aut voluptate. Beatae voluptatum voluptas modi exercitationem? Temporibus inventore doloribus illum reprehenderit iure numquam distinctio provident nostrum delectus, explicabo enim rem natus harum cumque nam quas! Molestiae cum ea iusto, nam deleniti voluptates beatae esse. Vero, ad sequi. Totam ratione nemo sit dolorem, esse soluta hic maiores accusantium voluptas, consequuntur, tempora reiciendis eos repellat laboriosam natus voluptatibus perferendis sed eveniet amet optio rerum est? Nulla dolore sapiente architecto esse id impedit fuga aspernatur corrupti ea pariatur dolorem voluptas minus totam aperiam expedita quaerat culpa animi laboriosam molestias, ut quod et est! Dolorum harum, ut sunt, facere magni fugit sequi culpa porro esse saepe eos, ab eum error sapiente commodi at voluptatum accusamus temporibus molestiae corporis minus eligendi soluta a! Quam accusantium repudiandae nihil eaque perspiciatis rem numquam? Provident harum distinctio, quisquam repellendus, omnis blanditiis, nostrum necessitatibus maiores autem a odit deleniti vero expedita. Incidunt distinctio, doloribus nemo voluptatibus esse dolore iure voluptatem error quo numquam dicta. Inventore obcaecati itaque fuga hic, architecto repellendus odit ea sed ut accusantium laborum, non sit exercitationem voluptatibus provident deserunt esse, natus ad porro! Perspiciatis blanditiis ut illum eum hic autem et? Molestiae, sequi nemo beatae laudantium ipsa aut est cum blanditiis sit in quod? Saepe, incidunt recusandae architecto, iure similique dolores voluptatem nesciunt beatae repudiandae aperiam aliquid qui temporibus, omnis fugiat distinctio possimus harum. Excepturi, odio quisquam. Soluta optio facilis officia dicta sapiente veniam! Deserunt ratione mollitia iusto perferendis, accusamus maxime nobis ex explicabo molestiae hic rem asperiores aut, culpa cupiditate quas distinctio possimus enim tempore itaque aperiam sequi? Ab provident quibusdam aspernatur numquam! Consequatur minus, eligendi asperiores animi explicabo dignissimos nemo tempore eveniet fugit quae distinctio assumenda maxime tenetur dolor provident nobis laudantium ex et temporibus. Doloremque, earum!';


/***/ }),

/***/ 828:
/*!************************************************!*\
  !*** ./src/app/default-data/forbiden-chars.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeForbiddenChar": () => (/* binding */ removeForbiddenChar)
/* harmony export */ });
function removeForbiddenChar(text) {
    const text2 = text.replace(/\s/gu, ' ');
    return text2.replace(/\s\s+/gu, ' ');
}


/***/ }),

/***/ 8043:
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _trainer_trainer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainer/trainer.component */ 651);


class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 1, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-trainer");
    } }, directives: [_trainer_trainer_component__WEBPACK_IMPORTED_MODULE_0__.TrainerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4718:
/*!**************************************************************************!*\
  !*** ./src/app/pages/home-page/trainer/char-span/char-span.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharSpanComponent": () => (/* binding */ CharSpanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CharSpanComponent {
    constructor() {
        this.char = '';
        this.color = '';
    }
    ngOnInit() { }
}
CharSpanComponent.ɵfac = function CharSpanComponent_Factory(t) { return new (t || CharSpanComponent)(); };
CharSpanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharSpanComponent, selectors: [["app-char-span"]], inputs: { char: "char", color: "color" }, decls: 2, vars: 3, template: function CharSpanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.char);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyLXNwYW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3246:
/*!****************************************************************************!*\
  !*** ./src/app/pages/home-page/trainer/info-panel/info-panel.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPanelComponent": () => (/* binding */ InfoPanelComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_statistic_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/statistic-service.service */ 6853);




class InfoPanelComponent {
    constructor(generalService) {
        this.generalService = generalService;
        this.speed = 0;
        this.timeStr = '';
        this.presses = 0;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.generalService.speedPerMinute$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.unsubscribe$))
            .subscribe((speed) => {
            this.speed = Math.round(speed);
        });
        this.generalService.presses$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.unsubscribe$))
            .subscribe((presses) => {
            if (!presses) {
                this.presses = 0;
            }
            else {
                this.presses = presses + 1;
            }
        });
        this.generalService.times$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.unsubscribe$))
            .subscribe((times) => {
            this.timeStr = InfoPanelComponent.computeTimeStr(times);
        });
    }
    static computeTimeStr(time) {
        const timeSeconds = Math.floor(time / 1000);
        const hours = Math.floor(timeSeconds / (60 * 60));
        const timeSecondsWithoutHours = timeSeconds - hours * (60 * 60);
        const minutes = Math.floor(timeSecondsWithoutHours / 60);
        const seconds = timeSecondsWithoutHours - minutes * 60;
        return hours + ' hr, ' + minutes + ' m, ' + seconds + ' s.';
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
InfoPanelComponent.ɵfac = function InfoPanelComponent_Factory(t) { return new (t || InfoPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_statistic_service_service__WEBPACK_IMPORTED_MODULE_0__.StatisticService)); };
InfoPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InfoPanelComponent, selectors: [["app-info-panel"]], decls: 3, vars: 3, template: function InfoPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" Speed: ", ctx.speed, " symb/min; Symbols: ", ctx.presses, "; Time: ", ctx.timeStr, " ");
    } }, styles: ["span[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiaW5mby1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 651:
/*!**************************************************************!*\
  !*** ./src/app/pages/home-page/trainer/trainer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainerComponent": () => (/* binding */ TrainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_statistic_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/statistic-service.service */ 6853);
/* harmony import */ var _services_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/text.service */ 5313);
/* harmony import */ var _info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-panel/info-panel.component */ 3246);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _char_span_char_span_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./char-span/char-span.component */ 4718);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);









function TrainerComponent_app_char_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-char-span", 6);
} if (rf & 2) {
    const char_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("char", char_r2.char)("color", char_r2.color);
} }
function TrainerComponent_app_char_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-char-span", 6);
} if (rf & 2) {
    const char_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("char", char_r3.char)("color", char_r3.color);
} }
class ColorChar {
}
var CharColors;
(function (CharColors) {
    CharColors["true"] = "black";
    CharColors["wrong"] = "red";
    CharColors["wrong2"] = "yellow";
})(CharColors || (CharColors = {}));
class TrainerComponent {
    constructor(statisticService, textService) {
        this.statisticService = statisticService;
        this.textService = textService;
        this.futureStringArr = [];
        this.futureStringArrMaxLength = 30;
        this.pastStringArr = [];
        this.pastStringArrMaxLength = 30;
        this.inputValue = '';
        this.maxDeltaTime = 3000;
        this.time1 = 0;
        this.time2 = 0;
    }
    ngOnInit() {
        this.textService.resetCurrentTextPointer();
        this.fillFutureStringArr();
    }
    fillFutureStringArr() {
        while (this.futureStringArr.length < this.futureStringArrMaxLength) {
            const nextChar = this.textService.getNextChar();
            const colorChar = {
                char: nextChar,
                color: CharColors.true,
            };
            this.futureStringArr.push(colorChar);
        }
    }
    onKeyPress(event) {
        const key = event.key;
        const needKey = this.futureStringArr[0].char;
        if (this.futureStringArr[0].color === CharColors.true) {
            this.textService.setNextStartTextPoint();
        }
        if (needKey === key) {
            this.pushPastStringArr({
                char: needKey,
                color: CharColors.true,
            });
            // speed measuring
            this.time2 = Date.now();
            const deltaTime = this.time2 - this.time1;
            if (deltaTime < this.maxDeltaTime) {
                this.statisticService.takeSpeedData(deltaTime);
            }
            this.time1 = this.time2;
        }
        else {
            this.pushPastStringArr({
                char: `|${needKey}|`,
                color: CharColors.wrong,
            });
            this.pushPastStringArr({
                char: `|${key}|`,
                color: CharColors.wrong2,
            });
            this.addPenaltyChar(needKey);
        }
        this.futureStringArr.shift();
        this.fillFutureStringArr();
        this.inputValue = '';
    }
    pushPastStringArr(colorChar) {
        this.pastStringArr.push(colorChar);
        if (this.pastStringArr.length > this.pastStringArrMaxLength) {
            this.pastStringArr.shift();
        }
    }
    addPenaltyChar(char) {
        const newFutureStringArr = [];
        const wrongChar = { char, color: CharColors.wrong };
        const countOfPenaltyChar = 5;
        const penaltyCharInterval = 5;
        for (let j = 0; j < countOfPenaltyChar; j++) {
            for (let i = 0; i < penaltyCharInterval; i++) {
                if (this.futureStringArr.length === 0) {
                    break;
                }
                newFutureStringArr.push(this.futureStringArr.shift());
            }
            newFutureStringArr.push(wrongChar);
        }
        while (this.futureStringArr.length !== 0) {
            newFutureStringArr.push(this.futureStringArr.shift());
        }
        this.futureStringArr = newFutureStringArr;
    }
}
TrainerComponent.ɵfac = function TrainerComponent_Factory(t) { return new (t || TrainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_statistic_service_service__WEBPACK_IMPORTED_MODULE_0__.StatisticService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_text_service__WEBPACK_IMPORTED_MODULE_1__.TextService)); };
TrainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TrainerComponent, selectors: [["app-trainer"]], decls: 11, vars: 3, consts: [[1, "view-box"], [1, "past"], [3, "char", "color", 4, "ngFor", "ngForOf"], [1, "future"], [1, "input-div"], ["matInput", "", "placeholder", "Type here!", "autofocus", "", "autocomplete", "off", 3, "ngModel", "keypress", "ngModelChange"], [3, "char", "color"]], template: function TrainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-info-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TrainerComponent_app_char_span_3_Template, 1, 2, "app-char-span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TrainerComponent_app_char_span_5_Template, 1, 2, "app-char-span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Type here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function TrainerComponent_Template_input_keypress_10_listener($event) { return ctx.onKeyPress($event); })("ngModelChange", function TrainerComponent_Template_input_ngModelChange_10_listener($event) { return ctx.inputValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pastStringArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.futureStringArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.inputValue);
    } }, directives: [_info_panel_info_panel_component__WEBPACK_IMPORTED_MODULE_2__.InfoPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _char_span_char_span_component__WEBPACK_IMPORTED_MODULE_3__.CharSpanComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel], styles: [".view-box[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.past[_ngcontent-%COMP%], .future[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  max-width: 50%;\n  background-color: beige;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  white-space: pre;\n  font-family: \"Andika New Basic\", sans-serif;\n  font-size: 3rem;\n}\n\n@media (max-width: 1200px) {\n  .past[_ngcontent-%COMP%], .future[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n\n@media (max-width: 800px) {\n  .past[_ngcontent-%COMP%], .future[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n@media (max-width: 600px) {\n  .past[_ngcontent-%COMP%], .future[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n.past[_ngcontent-%COMP%] {\n  background-color: bisque;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.input-div[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  margin: auto;\n  background-color: beige;\n  min-height: 2rem;\n  border: 1px solid black;\n}\n\n.input-div[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFBRTtFQVhGOztJQVlJLGVBQUE7RUFJRjtBQUNGOztBQUhFO0VBZEY7O0lBZUksaUJBQUE7RUFPRjtBQUNGOztBQU5FO0VBakJGOztJQWtCSSxlQUFBO0VBVUY7QUFDRjs7QUFQQTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVVGOztBQVBBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVVGOztBQVRFO0VBQ0UsV0FBQTtBQVdKIiwiZmlsZSI6InRyYWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wYXN0LFxyXG4uZnV0dXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQW5kaWthIE5ldyBCYXNpY1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnBhc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gIG1pbi1oZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1456:
/*!**************************************************************!*\
  !*** ./src/app/pages/setting-page/setting-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageComponent": () => (/* binding */ SettingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_text_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/text.service */ 5313);
/* harmony import */ var _services_statistic_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/statistic-service.service */ 6853);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);







class SettingPageComponent {
    constructor(textService, statisticService) {
        this.textService = textService;
        this.statisticService = statisticService;
        this.text = '';
    }
    ngOnInit() {
        this.text = this.textService.getText();
    }
    saveText() {
        if (this.text.length < 100) {
            return;
        }
        this.textService.setNewText(this.text);
    }
    clearState() {
        this.statisticService.setNullState();
    }
    resetText() {
        this.textService.resetText();
        this.text = this.textService.getText();
    }
}
SettingPageComponent.ɵfac = function SettingPageComponent_Factory(t) { return new (t || SettingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_text_service__WEBPACK_IMPORTED_MODULE_0__.TextService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_statistic_service_service__WEBPACK_IMPORTED_MODULE_1__.StatisticService)); };
SettingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SettingPageComponent, selectors: [["app-setting-page"]], decls: 11, vars: 2, consts: [["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], ["matInput", "", "placeholder", "Text (max 10000 char)", "minlength", "100", "maxlength", "10000", 3, "ngModel", "ngModelChange"]], template: function SettingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingPageComponent_Template_button_click_0_listener() { return ctx.clearState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Reset Statistic/Text\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingPageComponent_Template_button_click_2_listener() { return ctx.resetText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " ResetText\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingPageComponent_Template_button_click_5_listener() { return ctx.saveText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " SaveText\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Text (min: 100 char, max: 10000 char)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SettingPageComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.text.length < 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.text);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJzZXR0aW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6853:
/*!*******************************************************!*\
  !*** ./src/app/services/statistic-service.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticService": () => (/* binding */ StatisticService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class StatisticState {
    constructor() {
        this.times = 0;
        this.presses = 0;
    }
}
class StatisticService {
    constructor() {
        this.statisticState = new StatisticState();
        this.speedPerMinute$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.times$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.presses$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
        this.localStorageStatisticStateKey = 'StatisticState';
        this.loadState();
    }
    loadState() {
        const statisticStateFromStore = JSON.parse(localStorage.getItem(this.localStorageStatisticStateKey));
        if (statisticStateFromStore === null || statisticStateFromStore === void 0 ? void 0 : statisticStateFromStore.times) {
            this.statisticState = statisticStateFromStore;
        }
        else {
            this.setNullState();
        }
        this.activateState();
    }
    setNullState() {
        this.statisticState = {
            times: 0,
            presses: 0,
        };
        this.activateState();
        this.saveState();
    }
    saveState() {
        localStorage.setItem(this.localStorageStatisticStateKey, JSON.stringify(this.statisticState));
    }
    takeSpeedData(time) {
        this.setTimes(this.statisticState.times + time);
        this.setPresses(this.statisticState.presses + 1);
        this.computeSpeed();
    }
    computeSpeed() {
        if (this.statisticState.times === 0) {
            this.speedPerMinute$.next(0);
            return;
        }
        const speed = this.statisticState.presses / (this.statisticState.times / 1000 / 60);
        this.speedPerMinute$.next(speed);
    }
    setTimes(time) {
        this.statisticState.times = time;
        this.times$.next(time);
    }
    setPresses(n) {
        this.statisticState.presses = n;
        this.presses$.next(n);
    }
    activateState() {
        this.setTimes(this.statisticState.times);
        this.setPresses(this.statisticState.presses);
        this.computeSpeed();
    }
}
StatisticService.ɵfac = function StatisticService_Factory(t) { return new (t || StatisticService)(); };
StatisticService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StatisticService, factory: StatisticService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5313:
/*!******************************************!*\
  !*** ./src/app/services/text.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextService": () => (/* binding */ TextService)
/* harmony export */ });
/* harmony import */ var _default_data_forbiden_chars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-data/forbiden-chars */ 828);
/* harmony import */ var _default_data_default_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default-data/default-text */ 7169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class TextState {
    constructor() {
        this.text = '';
        this.startTextPointer = 0;
    }
}
class TextService {
    constructor() {
        this.textState = new TextState();
        this.currentTextPointer = 0;
        this.localStorageTextStateKey = 'text-state';
        this.loadState();
    }
    loadState() {
        const textStateFromStorage = JSON.parse(localStorage.getItem(this.localStorageTextStateKey));
        if (textStateFromStorage === null || textStateFromStorage === void 0 ? void 0 : textStateFromStorage.text) {
            this.textState = textStateFromStorage;
        }
        else {
            this.textState = new TextState();
            this.textState.text = _default_data_default_text__WEBPACK_IMPORTED_MODULE_1__.defaultText;
        }
        this.currentTextPointer = this.textState.startTextPointer;
    }
    saveState() {
        localStorage.setItem(this.localStorageTextStateKey, JSON.stringify(this.textState));
    }
    setNewText(str) {
        this.textState.text = (0,_default_data_forbiden_chars__WEBPACK_IMPORTED_MODULE_0__.removeForbiddenChar)(str);
        this.textState.startTextPointer = 0;
        this.saveState();
        location.reload();
    }
    getNextChar() {
        if (this.currentTextPointer >= this.textState.text.length) {
            this.currentTextPointer = 0;
        }
        const char = this.textState.text.slice(this.currentTextPointer, this.currentTextPointer + 1);
        this.currentTextPointer = this.currentTextPointer + 1;
        return char;
    }
    resetText() {
        this.setNewText(_default_data_default_text__WEBPACK_IMPORTED_MODULE_1__.defaultText);
    }
    resetCurrentTextPointer() {
        this.currentTextPointer = this.textState.startTextPointer;
    }
    getText() {
        return this.textState.text;
    }
    setNextStartTextPoint() {
        this.textState.startTextPointer += 1;
        if (this.textState.startTextPointer >= this.textState.text.length) {
            this.textState.startTextPointer = 0;
        }
    }
}
TextService.ɵfac = function TextService_Factory(t) { return new (t || TextService)(); };
TextService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TextService, factory: TextService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map