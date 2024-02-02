"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
console.log((0, math_1.add)(1, 2));
const calculator_1 = __importDefault(require("./calculator"));
const calc = new calculator_1.default();
console.log(calc.add(10, 5));
