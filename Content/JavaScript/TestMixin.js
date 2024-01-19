"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoMixin = exports.BP_Base_ts = void 0;
const puerts_1 = require("puerts");
const UE = require("ue");
class BP_Base_ts {
    ReceiveBeginPlay() {
        console.warn(`BP_Base_ts ReceiveBeginPlay`);
    }
    ReceiveTick(dt) {
        console.warn(`BP_Base_ts ReceiveTick`);
    }
}
exports.BP_Base_ts = BP_Base_ts;
function DoMixin() {
    let uecls = UE.Class.Load("/Game/StarterContent/BP_Base.BP_Base_C");
    let jscls = puerts_1.blueprint.tojs(uecls);
    // :{ objectTakeByNative?:boolean, inherit?:boolean, generatedClass?: UE.Class, noMixinedWarning?:boolean} 
    let cfg = { objectTakeByNative: true };
    let outcls = puerts_1.blueprint.mixin(jscls, BP_Base_ts, cfg);
    console.warn(`DoMixin outcls=${outcls.StaticClass().GetName()}`);
}
exports.DoMixin = DoMixin;
//# sourceMappingURL=TestMixin.js.map