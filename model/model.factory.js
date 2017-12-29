import {Board} from "./board.js";
import {Scoring} from "./scoring.js";
import {Model} from "./model.js";

export function createModel()
{
    var scoring = new Scoring(1000);
    var board = new Board(10, 20, scoring);
    return new Model(board, scoring);
}