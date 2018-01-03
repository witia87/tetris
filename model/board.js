import {BlockType} from "./shapes/block-type.js";

export class Board {
    constructor(width, height, scoring) {
        this.width = width;
        this.height = height;
        this.scoring = scoring;
        this.blocks = [];
        for (let y = 0; y < height; y++) {
            this.blocks.push([]);
            for (let x = 0; x < width; x++) {
                this.blocks[y].push(BlockType.BACKGROUND);
            }
        }
    }

    restart(){
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.blocks[y][x] = BlockType.BACKGROUND;
            }
        }
    }

    evaluateBoard()
    {
        let linesToRemove =
            this.blocks.map((el, i) => i).filter(
                i => this.blocks[i].every(
                    block => block !== BlockType.BACKGROUND ));

        linesToRemove.reverse().forEach(i => this.blocks.splice(i, 1));
        linesToRemove.forEach(() => this.blocks.unshift(new Array(this.width).fill(BlockType.BACKGROUND)));
        this.scoring.scoreLines(linesToRemove.length);
    }
}