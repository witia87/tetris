class Model {
    constructor(board, scoring) {
        this.board = board;
        this.scoring = scoring;
        this.currentState = new ShapeCreationState(board, scoring);
        this.lastUpdateTime = new Date();
        window.requestAnimationFrame(()=> this.update())
    }

    update(){
        let timeElapsed = new Date().getTime() - this.lastUpdateTime;
        if(timeElapsed >= this.scoring.delay) {
            this.currentState = this.currentState.update();
            this.lastUpdateTime = new Date().getTime();
        }
        window.requestAnimationFrame(()=> this.update())
    }

    get state(){
        return this.currentState.type;
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
        this.scoring.reset();
    }
}