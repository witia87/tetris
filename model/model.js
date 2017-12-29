import {GameObject} from "../engine/game-object.js";
import {ShapeCreationState} from "./states/shape-creation.state.js";

export class Model extends GameObject {
    constructor(board, scoring) {
        super();
        this.board = board;
        this.scoring = scoring;
        this.currentState = new ShapeCreationState(board, scoring);
        this.lastUpdateTime = new Date();
    }

    update(){
        let timeElapsed = new Date().getTime() - this.lastUpdateTime;
        if(timeElapsed >= this.scoring.delay) {
            this.currentState = this.currentState.update();
            this.lastUpdateTime = new Date().getTime();
        }
    }

    moveLeft()
    {
        this.currentState = this.currentState.moveShape(-1, 0);
    }

    moveRight()
    {
        this.currentState = this.currentState.moveShape(1, 0);
    }

    moveDown()
    {
        this.currentState = this.currentState.moveShape(0, 1);
    }

    rotate()
    {
        this.currentState = this.currentState.rotate();
    }

    restart()
    {
        this.currentState = this.currentState.restart();
    }
}