/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var VideoCapture = /** @class */ (function () {
    /**
     * 构造方法
     * @param uri 可以是一个视频链接，也可以是一个视频文件对象
     */
    function VideoCapture(uri) {
        this.video = document.createElement("video");
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.videoDuration = 0;
        if ("string" == typeof uri) {
            this.video.src = uri;
            //允许跨域
            this.video.setAttribute('crossOrigin', 'anonymous');
        }
        else if (uri instanceof File) {
            if (!/.*\.mp4$/.test(uri.name))
                throw new Error("视频格式只能为.mp4");
            this.video.src = this.objectURL = URL.createObjectURL(uri);
        }
        else
            throw new Error("uri可以是一个远程连接，或是一个视频文件对象");
        this.video.muted = true;
    }
    /**获取视频时长 */
    VideoCapture.prototype.getVideoDuration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.videoDuration > 0)
                    return [2 /*return*/, Promise.resolve(this.videoDuration)];
                return [2 /*return*/, new Promise(function (resolve) {
                        var video = _this.video;
                        //当媒介能够开始播放
                        video.addEventListener("canplay", function timeupdate() {
                            video.removeEventListener("canplay", timeupdate);
                            resolve(video.duration);
                        });
                    })];
            });
        });
    };
    /**
     * 捕获视频的一个画面
     * @param time 指定时间，可以是秒数，如10，也可以是以%结尾的百分数，如'50%'
     * @param img 可以是img的id，或img对象，如果有指定，那么会将捕获的画面dataURL赋值给img.src
     * @return 一个Promise对象 可通过await取得内容 { dataURL: 捕获的画面的base64, width: 画面的宽度, height: 画面的高度 }>
     */
    VideoCapture.prototype.capture = function (time, img) {
        if (time === void 0) { time = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var number, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!("string" == typeof time && /^\d+%$/.test(time))) return [3 /*break*/, 2];
                        this.video.preload = 'metadata';
                        number = parseInt(time.substring(0, time.length - 1));
                        _a = this;
                        return [4 /*yield*/, this.getVideoDuration()];
                    case 1:
                        _a.videoDuration = _b.sent();
                        this.video.currentTime = (number / 100) * this.videoDuration;
                        return [3 /*break*/, 3];
                    case 2:
                        if (("string" == typeof time && /^\d+$/.test(time)) || ("number" == typeof time && time > 0)) {
                            this.video.currentTime = time;
                        }
                        else {
                            throw new Error("time是大于0的数字，或是一个以%结尾的百分数");
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/, new Promise(function (resolve) {
                            var _a = _this, video = _a.video, canvas = _a.canvas, ctx = _a.ctx;
                            video.addEventListener("timeupdate", function timeupdate() {
                                video.removeEventListener("timeupdate", timeupdate);
                                var width = canvas.width = video.videoWidth;
                                var height = canvas.height = video.videoHeight;
                                ctx.drawImage(video, 0, 0);
                                var dataURL = canvas.toDataURL();
                                if ("string" == typeof img) {
                                    var imgDom = document.getElementById(img);
                                    if (imgDom instanceof HTMLImageElement)
                                        imgDom.src = dataURL;
                                }
                                else if (img instanceof HTMLImageElement) {
                                    if (img)
                                        img.src = dataURL;
                                }
                                resolve({ dataURL: dataURL, width: width, height: height });
                            });
                        })];
                }
            });
        });
    };
    /**释放资源 */
    VideoCapture.prototype.revoke = function () {
        if (this.objectURL) {
            URL.revokeObjectURL(this.objectURL);
            this.objectURL = undefined;
        }
    };
    return VideoCapture;
}());
exports.default = VideoCapture;
window.VideoCapture = VideoCapture;


/***/ })
/******/ ]);