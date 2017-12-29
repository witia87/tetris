import {BlockComponent} from "./block.component.js";
import {Controller} from "./controller.js";

export function setupPresentation(app, model){
    setupResources().load(() => setupBlocks(app, model.board));
    new Controller(model);
}

function setupResources() {
    return PIXI.loader
        .add(["images/background.png",
            "images/block_blue.png",
            "images/block_cyan.png",
            "images/block_green.png",
            "images/block_orange.png",
            "images/block_purple.png",
            "images/block_red.png",
            "images/block_yellow.png"]);
}

function createSprites() {
    return [
        new PIXI.Sprite(
            PIXI.loader.resources["images/background.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["images/block_blue.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["images/block_cyan.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["images/block_green.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["images/block_orange.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["images/block_purple.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["images/block_red.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["images/block_yellow.png"].texture)
    ]
}

function setupBlocks(app, model) {
    for (let y = 0; y < model.height; y++) {
        for (let x = 0; x < model.width; x++) {
            new BlockComponent(x,y, app, model, createSprites());
        }
    }
}