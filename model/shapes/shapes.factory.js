import {Shape} from "./shape.js";
import {BlockType} from "./block-type.js";

let shapesCreationMethods =
    [
        // Square
        () => {
            return new Shape([[
                [true, true],
                [true, true]
            ]], BlockType.YELLOW);
        },
        // Stick
        () => {
            return new Shape([[
                [false, false, false, false],
                [true, true, true, true],
                [false, false, false, false],
                [false, false, false, false]
            ], [
                [false, true, false, false],
                [false, true, false, false],
                [false, true, false, false],
                [false, true, false, false]
            ], [
                [false, false, false, false],
                [false, false, false, false],
                [true, true, true, true],
                [false, false, false, false]
            ], [
                [false, false, true, false],
                [false, false, true, false],
                [false, false, true, false],
                [false, false, true, false]
            ]], BlockType.CYAN)
        },
        // L-Shape
        () => {
            return new Shape([[
                [false, true, false],
                [false, true, false],
                [false, true, true]
            ], [
                [false, false, true],
                [true, true, true],
                [false, false, false]
            ], [
                [true, true, false],
                [false, true, false],
                [false, true, false]
            ], [
                [false, false, false],
                [true, true, true],
                [true, false, false]
            ]], BlockType.ORANGE)
        },
        // L-Shape-Reversed
        () => {
            return new Shape([[
                [false, true, false],
                [false, true, false],
                [true, true, false]
            ], [
                [false, false, false],
                [true, true, true],
                [false, false, true]
            ], [
                [false, true, true],
                [false, true, false],
                [false, true, false]
            ], [
                [true, false, false],
                [true, true, true],
                [false, false, false]
            ]], BlockType.BLUE)
        },
        // Z-Shape
        () => {
            return new Shape([[
                [false, true, true],
                [true, true, false],
                [false, false, false]
            ], [
                [true, false, false],
                [true, true, false],
                [false, true, false]
            ], [
                [false, false, false],
                [false, true, true],
                [true, true, false]
            ], [
                [false, true, false],
                [false, true, true],
                [false, false, true]
            ]], BlockType.GREEN)
        },
        // Z-Shape-Reversed
        () => {
            return new Shape([[
                [true, true, false],
                [false, true, true],
                [false, false, false]
            ], [
                [false, true, false],
                [true, true, false],
                [true, false, false]
            ], [
                [false, false, false],
                [true, true, false],
                [false, true, true]
            ], [
                [false, false, true],
                [false, true, true],
                [false, true, false]
            ]], BlockType.RED)
        },
        // Spike
        () => {
            return new Shape([[
                [false, true, false],
                [true, true, true],
                [false, false, false]
            ], [
                [false, true, false],
                [true, true, false],
                [false, true, false]
            ], [
                [false, false, false],
                [true, true, true],
                [false, true, false]
            ], [
                [false, true, false],
                [false, true, true],
                [false, true, false]
            ]], BlockType.PURPLE)
        }
    ]

export function createShape(){
    let shapeType = Math.floor(Math.random() * shapesCreationMethods.length);
    return shapesCreationMethods[shapeType]();
}