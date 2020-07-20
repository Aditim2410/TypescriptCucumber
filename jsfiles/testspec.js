"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe('locators demo', () => {
    it('Open Angular js website', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        yield protractor_2.element(protractor_2.by.model("first")).sendKeys("3");
        yield protractor_2.element(protractor_2.by.model("second")).sendKeys("5");
        yield protractor_2.element(protractor_2.by.id("gobutton")).click();
        protractor_2.element(protractor_2.by.repeater("result in memory")).element(protractor_2.by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(text);
        });
    }));
});
//# sourceMappingURL=testspec.js.map