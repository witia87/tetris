import {Shape} from "./shape.js";
import {BlockType} from "./block-type.js";

export function createShape(){
    let shapeType = Math.floor(Math.random() * 2);
    switch(shapeType){
        case 0:
            // Square
            return new Shape([[
                [true, true],
                [true, true]
            ]], BlockType.YELLOW)
        case 1:
            // Stick
            return new Shape([[
                [false, false, false, false],
                [true, true, true, true],
                [false, false, false, false],
                [false, false, false, false]
            ], [
                [false, false, true, false],
                [false, false, true, false],
                [false, false, true, false],
                [false, false, true, false]
            ]], BlockType.CYAN)
    }
}