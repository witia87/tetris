export class PlayerController
{
    constructor(model)
    {
        this.model = model;
        document.onkeydown = (e) => this.onKeyDown(e);
    }

    onKeyDown(e)
    {
        if (e.keyCode == '38') {
            // up arrow
            this.model.rotate();
        }
        else if (e.keyCode == '40') {
            // down arrow
            this.model.moveDown();
        }
        else if (e.keyCode == '37') {
            // left arrow
            this.model.moveLeft();
        }
        else if (e.keyCode == '39') {
            // right arrow
            this.model.moveRight();
        }
        else if (e.keyCode == '32') {
            // space
            this.model.restart();
        }
    }
}