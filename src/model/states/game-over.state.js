class GameOverState extends BaseState{
    constructor(board){
        super(board);
        this.type = GameStates.GAME_OVER;
    }
}