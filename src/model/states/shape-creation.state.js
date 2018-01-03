class ShapeCreationState extends BaseState{
    update() {
        this.type = GameStates.SHAPE_CREATION;
        var shape = createShape();
        shape.reset();
        var pattern = shape.currentPattern;
        var xOnBoard = this.findXStartPosition(pattern);
        var yOnBoard = this.findYStartPosition(pattern);
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
        return Math.floor(this.board.width / 2 - pattern[0].length / 2);
    }

    findYStartPosition(pattern)
    {
        return Math.floor(1 - pattern[0].length / 2);
    }
}