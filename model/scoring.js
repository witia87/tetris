export class Scoring {
    constructor() {
        this.score = 0;
        this.initialDelayInMiliseconds = 500;
        this.delay = this.initialDelayInMiliseconds;
    }

    scoreLines(linesCount) {
        this.score += Math.pow(linesCount * this.initialDelayInMiliseconds / this.delay, 2);
        this.delay
        = this.initialDelayInMiliseconds *
            (1 - (this.score/(this.score + this.initialDelayInMiliseconds/10)));

    }
}