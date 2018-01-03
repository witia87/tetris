import {Component} from "./component.js";

export class ScoreComponent extends Component {
    constructor(app, scoring) {
        super(app);
        this.app = app;
        this.scoring = scoring;

        let style = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 16,
            fill: "white",
            stroke: '#000000',
            strokeThickness: 3,
        });

        this.text =
            new PIXI.Text('SCORE: 0', style);
        this.text.position.set(5, 3);
        app.stage.addChild(this.text);
    }

    update(delta) {
        this.text.setText('SCORE: ' + Math.round(this.scoring.score));
    }
}