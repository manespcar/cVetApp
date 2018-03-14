webpackJsonp([4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AvisosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvisosPage = (function () {
    function AvisosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AvisosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvisosPage');
    };
    AvisosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avisos',template:/*ion-inline-start:"C:\Git\cVetApp\src\pages\avisos\avisos.html"*/'<ion-header>\n	<app-header></app-header>\n</ion-header>\n\n\n<ion-content padding>\n<h2>No existen avisos</h2>\n</ion-content>\n'/*ion-inline-end:"C:\Git\cVetApp\src\pages\avisos\avisos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AvisosPage);
    return AvisosPage;
}());

//# sourceMappingURL=avisos.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_singleton_service_singleton_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatosUsuarioPage = (function () {
    function DatosUsuarioPage(usuarioProvider, singleton, camera) {
        this.usuarioProvider = usuarioProvider;
        this.singleton = singleton;
        this.camera = camera;
        this.usuario = { id: null, nombreCompleto: "", direccion: "", email: "", telefono: "", imagen: "" };
    }
    DatosUsuarioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.singleton.showLoading('');
        console.log("Recuperando datos de usuario");
        this.usuarioProvider.getUserById(this.singleton.userid)
            .subscribe(function (data) {
            _this.usuario.nombreCompleto = data.nombreCompleto;
            _this.usuario.direccion = data.direccion;
            _this.usuario.email = data.email;
            _this.usuario.telefono = data.telefono;
            _this.usuario.id = _this.singleton.userid;
            _this.foto = (data.imagen != null || data.imagen != "") ? data.imagen : "assets/imgs/default-image.jpg";
        }, function (error) {
            console.log(error);
        });
    };
    DatosUsuarioPage.prototype.guardarDatos = function () {
        var _this = this;
        this.singleton.showLoading('');
        console.log("Guardando datos de usuario");
        this.usuario.imagen = this.foto;
        this.usuarioProvider.saveDataUser(this.usuario)
            .subscribe(function (data) {
            _this.singleton.loading.dismiss().then(function () {
                _this.singleton.showAlert("", "Datos actualizados correctamente");
            });
        }, function (error) {
            console.log(error);
        });
    };
    DatosUsuarioPage.prototype.tomarFoto = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imageData) {
            _this.foto = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    DatosUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datosusuario',template:/*ion-inline-start:"C:\Git\cVetApp\src\pages\datosusuario\datosusuario.html"*/'<ion-header>\n\n	<app-header></app-header>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n		<ion-card>\n\n		  <img [src]="foto" (click)="tomarFoto()"/>\n\n		  <ion-card-content>\n\n		    <ion-card-title>\n\n		      {{ usuario.nombreCompleto }}\n\n		    </ion-card-title>\n\n\n\n			    <ion-list inset>\n\n				    <ion-item>\n\n					    <ion-label stacked>Dirección</ion-label>\n\n					    <ion-input type="text" [(ngModel)]="usuario.direccion"></ion-input>\n\n					</ion-item>\n\n\n\n					<ion-item>\n\n					    <ion-label stacked>Teléfono</ion-label>\n\n					    <ion-input type="number" [(ngModel)]="usuario.telefono"></ion-input>\n\n					</ion-item>\n\n\n\n					<ion-item>\n\n					    <ion-label stacked>Email</ion-label>\n\n					    <ion-input type="text" [(ngModel)]="usuario.email"></ion-input>\n\n					</ion-item>\n\n				</ion-list>\n\n\n\n		  </ion-card-content>\n\n		</ion-card>\n\n\n\n		<button ion-button color="primary" full type="button" (click)="guardarDatos()" >Guardar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Git\cVetApp\src\pages\datosusuario\datosusuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], DatosUsuarioPage);
    return DatosUsuarioPage;
}());

//# sourceMappingURL=datosusuario.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MascotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_mascotas_mascotas__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_singleton_service_singleton_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MascotasPage = (function () {
    function MascotasPage(mascotasProvider, singleton) {
        this.mascotasProvider = mascotasProvider;
        this.singleton = singleton;
    }
    MascotasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.singleton.showLoading('');
        console.log("Recuperando mascotas de usuario");
        //this.mascotasProvider.recuperarMascotasByUsuarioId(this.singleton.userid)
        this.mascotasProvider.recuperarMascotasByUsuarioId(490)
            .subscribe(function (data) {
            _this.mascotas = data;
        }, function (error) {
            console.log(error);
        });
    };
    MascotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mascotas',template:/*ion-inline-start:"C:\Git\cVetApp\src\pages\mascotas\mascotas.html"*/'<ion-header>\n\n	<app-header></app-header>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-card *ngFor="let mascota of mascotas">\n\n      <ion-avatar>\n\n				<img src="{{ mascota.imagen }}"/>\n\n			</ion-avatar>\n\n			<ion-card-content>\n\n				<ion-card-title>\n\n					{{ mascota.nombre }}\n\n				</ion-card-title>\n\n				<h5><b>Chip: </b> {{ mascota.chip }} </h5>\n\n				<h5><b>Fecha nacimiento: </b> {{ mascota.fechaNacimiento }} </h5>\n\n				<h5><b>Sexo: </b> {{ mascota.sexo }} </h5>\n\n				<h5><b>Raza: </b> {{ mascota.raza }} </h5>\n\n				<h5><b>Capa: </b> {{ mascota.capa }} </h5>\n\n			</ion-card-content>\n\n		</ion-card>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Git\cVetApp\src\pages\mascotas\mascotas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_mascotas_mascotas__["a" /* MascotasProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */]])
    ], MascotasPage);
    return MascotasPage;
}());

//# sourceMappingURL=mascotas.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/avisos/avisos.module": [
		317,
		3
	],
	"../pages/datosusuario/datosusuario.module": [
		318,
		2
	],
	"../pages/login/login.module": [
		319,
		1
	],
	"../pages/mascotas/mascotas.module": [
		320,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_singleton_service_singleton_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioProvider = (function () {
    function UsuarioProvider(http, singleton) {
        this.http = http;
        this.singleton = singleton;
    }
    UsuarioProvider.prototype.getUserById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.singleton.apiUrl + "usuario/" + id, options)
            .map(function (res) { return res.json(); });
    };
    UsuarioProvider.prototype.saveDataUser = function (usuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = JSON.stringify(usuario);
        return this.http.post(this.singleton.apiUrl + "usuario/save", data, options)
            .map(function (res) { return res.json(); });
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_singleton_service_singleton_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginProvider = (function () {
    function LoginProvider(http, singleton) {
        this.http = http;
        this.singleton = singleton;
    }
    LoginProvider.prototype.login = function (usuario, password) {
        var pass = __WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.SHA1(password).toString();
        var data = JSON.stringify({ usuario: usuario, password: pass });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.singleton.apiUrl + "login/check", data, options)
            .map(function (res) { return res.json(); });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datosusuario_datosusuario__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mascotas_mascotas__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__avisos_avisos__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__avisos_avisos__["a" /* AvisosPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__datosusuario_datosusuario__["a" /* DatosUsuarioPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__mascotas_mascotas__["a" /* MascotasPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Git\cVetApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Avisos" tabIcon="alert"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Mis datos" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Mascotas" tabIcon="paw"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Configuración" tabIcon="construct"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Git\cVetApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MascotasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_singleton_service_singleton_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the MascotasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MascotasProvider = (function () {
    function MascotasProvider(http, singleton) {
        this.http = http;
        this.singleton = singleton;
    }
    MascotasProvider.prototype.recuperarMascotasByUsuarioId = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.singleton.apiUrl + "/mascotas/usuario/" + id, options)
            .map(function (res) { return res.json(); });
    };
    MascotasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */]])
    ], MascotasProvider);
    return MascotasProvider;
}());

//# sourceMappingURL=mascotas.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_datosusuario_datosusuario__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mascotas_mascotas__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_avisos_avisos__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_singleton_service_singleton_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_usuario_usuario__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_mascotas_mascotas__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_datosusuario_datosusuario__["a" /* DatosUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mascotas_mascotas__["a" /* MascotasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_avisos_avisos__["a" /* AvisosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__components_header_header__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/avisos/avisos.module#AvisosPageModule', name: 'AvisosPage', segment: 'avisos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datosusuario/datosusuario.module#DatosUsuarioPageModule', name: 'DatosUsuarioPage', segment: 'datosusuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mascotas/mascotas.module#MascotasPageModule', name: 'MascotasPage', segment: 'mascotas', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_datosusuario_datosusuario__["a" /* DatosUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mascotas_mascotas__["a" /* MascotasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_avisos_avisos__["a" /* AvisosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_mascotas_mascotas__["a" /* MascotasProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingletonServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingletonServiceProvider = (function () {
    function SingletonServiceProvider(alertCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        //this.apiUrl = 'http://192.168.0.162:8088/';
        this.apiUrl = '/localhost/';
    }
    SingletonServiceProvider.prototype.showLoading = function (text) {
        this.loading = this.loadingCtrl.create({
            content: text,
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    SingletonServiceProvider.prototype.showAlert = function (title, text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    SingletonServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SingletonServiceProvider);
    return SingletonServiceProvider;
}());

//# sourceMappingURL=singleton-service.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Git\cVetApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Git\cVetApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_singleton_service_singleton_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(alertCtrl, singleton, app) {
        this.alertCtrl = alertCtrl;
        this.singleton = singleton;
        this.app = app;
        this.text = "Hola " + this.singleton.username;
    }
    HeaderComponent.prototype.salir = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: '¿Estás seguro que deseas salir?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sí',
                    handler: function () {
                        _this.singleton.userid = null;
                        _this.singleton.username = null;
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',template:/*ion-inline-start:"C:\Git\cVetApp\src\components\header\header.html"*/'<ion-navbar>\n\n  <p>{{ text }}</p>\n\n  <ion-buttons end>\n\n    <button ion-button icon-only (click)="salir()">\n\n      <ion-icon name="log-out"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n</ion-navbar>'/*ion-inline-end:"C:\Git\cVetApp\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _c || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_singleton_service_singleton_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, loginProvider, singleton) {
        this.navCtrl = navCtrl;
        this.loginProvider = loginProvider;
        this.singleton = singleton;
        this.registerCredentials = { usuario: '', password: '' };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.singleton.showLoading('Accediendo...');
        this.loginProvider.login(this.registerCredentials.usuario, this.registerCredentials.password)
            .subscribe(function (data) {
            _this.loadVariablesInSession(data);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            _this.singleton.showAlert("Error", "Usuario o contraseña incorrectos");
        });
    };
    LoginPage.prototype.loadVariablesInSession = function (data) {
        this.singleton.userid = data.id;
        this.singleton.username = data.usuario;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Git\cVetApp\src\pages\login\login.html"*/'<ion-content padding>\n\n  <img src="assets/imgs/logo.jpg" class="logo"/>\n\n  <br/>\n\n  <form (ngSubmit)="login()" #registerForm="ngForm">\n\n      <ion-list inset>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Usuario</ion-label>\n\n          <ion-input type="text" name="usuario" [(ngModel)]="registerCredentials.usuario"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Contraseña</ion-label>\n\n          <ion-input type="password" name="password" [(ngModel)]="registerCredentials.password"></ion-input>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n\n\n      <div padding>\n\n        <button ion-button color="primary" full type="submit">Acceder</button>\n\n      </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Git\cVetApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_singleton_service_singleton_service__["a" /* SingletonServiceProvider */]) === "function" && _c || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map