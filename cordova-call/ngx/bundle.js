'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var CordovaCall = /** @class */ (function (_super) {
    tslib.__extends(CordovaCall, _super);
    function CordovaCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CordovaCall.prototype.receiveCall = function (from, id, success, error) { return core.cordova(this, "receiveCall", {}, arguments); };
    CordovaCall.prototype.sendCall = function (to, id, success, error) { return core.cordova(this, "sendCall", {}, arguments); };
    CordovaCall.prototype.connectCall = function (success, error) { return core.cordova(this, "connectCall", {}, arguments); };
    CordovaCall.prototype.endCall = function (success, error) { return core.cordova(this, "endCall", {}, arguments); };
    CordovaCall.prototype.mute = function (success, error) { return core.cordova(this, "mute", {}, arguments); };
    CordovaCall.prototype.unmute = function (success, error) { return core.cordova(this, "unmute", {}, arguments); };
    CordovaCall.prototype.speakerOn = function (success, error) { return core.cordova(this, "speakerOn", {}, arguments); };
    CordovaCall.prototype.speakerOff = function (success, error) { return core.cordova(this, "speakerOff", {}, arguments); };
    CordovaCall.prototype.setAppName = function (appName, success, error) { return core.cordova(this, "setAppName", {}, arguments); };
    CordovaCall.prototype.setIcon = function (iconName, success, error) { return core.cordova(this, "setIcon", {}, arguments); };
    CordovaCall.prototype.setVideo = function (value, success, error) { return core.cordova(this, "setVideo", {}, arguments); };
    CordovaCall.prototype.setRingtone = function (ringtoneName, success, error) { return core.cordova(this, "setRingtone", {}, arguments); };
    CordovaCall.prototype.setIncludeInRecents = function (value, success, error) { return core.cordova(this, "setIncludeInRecents", {}, arguments); };
    CordovaCall.prototype.on = function (event, handler) { return core.cordova(this, "on", {}, arguments); };
    CordovaCall.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CordovaCall, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CordovaCall.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CordovaCall });
    CordovaCall.pluginName = "CordovaCall";
    CordovaCall.plugin = "cordova-call";
    CordovaCall.pluginRef = "cordova.call";
    CordovaCall.repo = "https://github.com/WebsiteBeaver/CordovaCall";
    CordovaCall.install = "";
    CordovaCall.installVariables = [];
    CordovaCall.platforms = ["Android", "iOS"];
    CordovaCall = tslib.__decorate([], CordovaCall);
    return CordovaCall;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CordovaCall, decorators: [{
            type: i0.Injectable
        }], propDecorators: { receiveCall: [], sendCall: [], connectCall: [], endCall: [], mute: [], unmute: [], speakerOn: [], speakerOff: [], setAppName: [], setIcon: [], setVideo: [], setRingtone: [], setIncludeInRecents: [], on: [] } });

exports.CordovaCall = CordovaCall;
