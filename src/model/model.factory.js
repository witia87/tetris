function createModel()
{
    var scoring = new Scoring(1000);
    var board = new Board(10, 20, scoring);
    return new Model(board, scoring);
}