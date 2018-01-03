import {BlockType} from "../shapes/block-type.js";
import {ShapeCreationState} from "./shape-creation.state.js";

export class BaseState
{
    constructor(board){
        this.board = board;
    }

    checkIfPatternFits(pattern, xOnBoard, yOnBoard) {
        for(let y = 0; y < pattern.length; y++) {
            for(let x = 0; x < pattern[y].length; x++) {
                if(pattern[y][x] &&
                    (xOnBoard + x < 0 || xOnBoard + x >= this.board.width
                    || yOnBoard + y >= this.board.height // no yOnBoard + y < 0 checking
                    || this.board.blocks[Math.max(0,yOnBoard + y)][xOnBoard + x] !== BlockType.BACKGROUND))
                {
                    return false;
                }
            }
        }
        return true;
    }

    emplaceShape(shape, xOnBoard, yOnBoard)
    {
        let pattern = shape.currentPattern;
        let type = shape.type;
        this.manipulateBoard(pattern, xOnBoard, yOnBoard,
            (xOnBoard, yOnBoard) => {
                if(this.board.blocks[yOnBoard][xOnBoard] !== BlockType.BACKGROUND) {
                    throw "Incorrect use of pattern emplacement";
                }
                this.board.blocks[yOnBoard][xOnBoard] = type;
        });
    }

    removeShape(shape, xOnBoard, yOnBoard)
    {
        let pattern = shape.currentPattern;
        this.manipulateBoard(pattern, xOnBoard, yOnBoard,
            (xOnBoard, yOnBoard) => {
                if(this.board.blocks[yOnBoard][xOnBoard] === BlockType.BACKGROUND) {
                    throw "Incorrect use of pattern removal";
                }
                this.board.blocks[yOnBoard][xOnBoard] = BlockType.BACKGROUND;
            })
    }

    /// Manipulation will be invoked for every field present on pattern within board ranges
    manipulateBoard(pattern, xOnBoard, yOnBoard, manipulation)
    {
        let yStart = Math.max(yOnBoard, 0);
        let yStop = Math.min(this.board.height, yOnBoard + pattern.length);
        for(let y = yStart; y < yStop; y++) {
            let xStart = Math.max(xOnBoard, 0)
            let xStop = Math.min(this.board.width, xOnBoard + pattern[y-yOnBoard].length);
            for(let x = xStart; x < xStop; x++) {
                if(pattern[y - yOnBoard][x - xOnBoard]) {
                    manipulation(x, y);
                }
            }
        }
    }

    update() {
        return this;
    }

    moveShape(xOffset, yOffset)
    {
        return this;
    }

    rotate()
    {
        return this;
    }

    restart()
    {
        this.board.restart();
        return new ShapeCreationState(this.board);
    }
}