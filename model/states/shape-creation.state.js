import {BaseState} from "./base.state.js";
import {GameOverState} from "./game-over.state.js";
import {ShapeFallingState} from "./shape-falling.state.js";
import {createShape} from "../shapes/shapes.factory.js";

export class ShapeCreationState extends BaseState{
    update() {
        var shape = createShape();
        shape.reset();
        var pattern = shape.currentPattern;
        var yPatternStartIndex = this.findFirstNonEmptyLineIndex(pattern);
        var xOnBoard = this.findXStartPosition(pattern, yPatternStartIndex);
        var yOnBoard = -yPatternStartIndex;
        if(!this.checkIfPatternFits(pattern, xOnBoard, yOnBoard))
        {
            return new GameOverState(this.board);
        }
        this.emplaceShape(shape, xOnBoard, yOnBoard);
        return new ShapeFallingState(this.board, shape, xOnBoard, yOnBoard);
    }

    findFirstNonEmptyLineIndex(pattern) {
        return pattern.findIndex((line) => line.some(block => block === true));
    }

    findXStartPosition(pattern)
    {
        return Math.max(0, this.board.width / 2 - pattern[0].length / 2);
    }
}