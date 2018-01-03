class Shape {
    constructor(patterns, type) {
        this.patterns = patterns;
        this.type = type;
        this.currentPatternIndex = 0;
    }

    get currentPattern() {
        return this.patterns[this.currentPatternIndex];
    }

    get rotatedPattern() {
        return this.patterns[(this.currentPatternIndex + 1) % this.patterns.length];
    }

    rotatePattern() {
        this.currentPatternIndex = (this.currentPatternIndex + 1) % this.patterns.length;
    }

    reset() {
        this.currentPatternIndex = 0;
    }
}