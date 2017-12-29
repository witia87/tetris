import {GameObject} from "../engine/game-object.js";

export class BlockComponent extends GameObject {
    constructor(x, y, app, board, sprites) {
        super();
        this.x = x;
        this.y = y;
        this.app = app;
        this.board = board;
        this.currentlyDisplayedBlock = this.board.blocks[this.y][this.x];
        this.sprites = sprites;
        this.group = new PIXI.Container();
        sprites.forEach((sprite) => {
            this.group.addChild(sprite);
            sprite.visible = false;
        });
        app.stage.addChild(this.group);
    }

    update(time) {
        //Change the sprite's size
        this.group.width = this.app.renderer.width / this.board.width;
        this.group.height = this.app.renderer.height / this.board.height;

        //Change the sprite's position
        this.group.x = this.x * this.group.width;
        this.group.y = this.y * this.group.height;

        let newBlockType = this.board.blocks[this.y][this.x]
        this.sprites[this.currentlyDisplayedBlock].visible = false;
        this.sprites[newBlockType].visible = true;
        this.currentlyDisplayedBlock = newBlockType;
    }
}