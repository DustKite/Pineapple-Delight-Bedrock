var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { world } from "@minecraft/server";
import { methodEventSub } from "../lib/eventHelper";
export class FoodRegister {
    eat(args) {
        const itemStack = args.itemStack;
        const player = args.source;
        const useDuration = args.useDuration;
        if (itemStack && useDuration == 0) {
            switch (itemStack.typeId) {
                case "pineapple_delight:pineapple_milkshake":
                    player.addEffect('health_boost', 30 * 20, { amplifier: 1 });
                    break;
                case "pineapple_delight:pineapple_ice_cream":
                    player.addEffect('speed', 30 * 20, { amplifier: 1 });
                    break;
                case "pineapple_delight:pineapple_juice":
                    player.addEffect('jump_boost', 30 * 20, { amplifier: 1 });
                    break;
                case "pineapple_delight:golden_pineapple":
                    player.addEffect('fire_resistance', 150 * 20, { amplifier: 0 });
                    player.addEffect('speed', 45 * 20, { amplifier: 0 });
                    player.addEffect('health_boost', 30 * 20, { amplifier: 0 });
                    player.addEffect('night_vision', 30 * 20, { amplifier: 0 });
                    break;
            }
        }
    }
}
__decorate([
    methodEventSub(world.afterEvents.itemStopUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FoodRegister.prototype, "eat", null);