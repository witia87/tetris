import {BaseState} from "./base.state.js";
import {ShapeCreationState} from "./shape-creation.state.js";

export class BoardEvaluationState extends BaseState
{
    update(){
        return new ShapeCreationState(this.board);
    }
}