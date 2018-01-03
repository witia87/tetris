class ShapeFallingState extends BaseState{
    constructor(board, shape, xOnBoard, yOnBoard){
        super(board);
        this.type = GameStates.SHAPE_FALLING;
        this.shape = shape;
        this.xOnBoard = xOnBoard;
        this.yOnBoard = yOnBoard;
    }

    update(){
        this.removeShape(this.shape, this.xOnBoard, this.yOnBoard);
        if(!this.checkIfPatternFits(this.shape.currentPattern, this.xOnBoard, this.yOnBoard + 1))
        {
            this.emplaceShape(this.shape, this.xOnBoard, this.yOnBoard);
            this.board.evaluateBoard();
            return new ShapeCreationState(this.board);
        }
        this.yOnBoard++;
        this.emplaceShape(this.shape, this.xOnBoard, this.yOnBoard);
        return this;
    }

    moveShape(offsetX, offsetY)
    {
        this.removeShape(this.shape, this.xOnBoard, this.yOnBoard);
        if(!this.checkIfPatternFits(this.shape.currentPattern, this.xOnBoard + offsetX, this.yOnBoard + offsetY))
        {
            this.emplaceShape(this.shape, this.xOnBoard, this.yOnBoard);
        }
        else {
            this.xOnBoard += offsetX;
            this.yOnBoard += offsetY;
            this.emplaceShape(this.shape, this.xOnBoard, this.yOnBoard);
        }
        return this;
    }

    rotate()
    {
        this.removeShape(this.shape, this.xOnBoard, this.yOnBoard);
        if(!this.checkIfPatternFits(this.shape.rotatedPattern, this.xOnBoard, this.yOnBoard))
        {
            this.emplaceShape(this.shape, this.xOnBoard, this.yOnBoard);
        }
        else {
            this.shape.rotatePattern();
            this.emplaceShape(this.shape, this.xOnBoard, this.yOnBoard);
        }
        return this;
    }
}