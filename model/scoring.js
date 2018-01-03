export class Scoring {
    constructor() {
        this.initialDelayInMiliseconds = 500;
        this.reset();
    }

    scoreLines(linesCount) {
        this.score += Math.pow(linesCount * this.modifier, 2);
        this.modifier *= Math.pow(1.1, linesCount);
    }

    get delay(){
        return this.initialDelayInMiliseconds / this.modifier;
    }

    reset(){
        this.score = 0;
        this.modifier = 1;
    }
}