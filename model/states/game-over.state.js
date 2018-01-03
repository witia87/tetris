import {BaseState} from "./base.state.js";
import {GameStates} from "./game-states.js";

export class GameOverState extends BaseState{
    constructor(board){
        super(board);
        this.type = GameStates.GAME_OVER;
    }
}