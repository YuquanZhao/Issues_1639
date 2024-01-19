
import { blueprint } from 'puerts'
import * as UE from 'ue'

export interface BP_Base_ts extends UE.Game.StarterContent.BP_Base.BP_Base_C{}
export class BP_Base_ts{
    ReceiveBeginPlay(){
        console.warn(`BP_Base_ts ReceiveBeginPlay`)
    }
    ReceiveTick(dt:number){
        console.warn(`BP_Base_ts ReceiveTick`)
    }
}

export function DoMixin(){
    let uecls = UE.Class.Load("/Game/StarterContent/BP_Base.BP_Base_C")
    let jscls = blueprint.tojs(uecls);
    // :{ objectTakeByNative?:boolean, inherit?:boolean, generatedClass?: UE.Class, noMixinedWarning?:boolean} 
    let cfg = { objectTakeByNative:true};

    let outcls = blueprint.mixin(jscls, BP_Base_ts, cfg);
    console.warn(`DoMixin outcls=${outcls.StaticClass().GetName()}`)
}