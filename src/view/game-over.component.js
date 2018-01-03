class GameOverComponent extends Component {
    constructor(app, model) {
        super(app);
        this.app = app;
        this.model = model;

        let style = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 24,
            fill: "white",
            stroke: '#000000',
            strokeThickness: 4,
        });

        this.text =
            new PIXI.Text('GAME OVER', style);
        this.text.anchor.set(0.5, 0.5);
        this.text.position.set(app.renderer.width/2, app.renderer.height/2);
        app.stage.addChild(this.text);
    }

    update(delta) {
        this.text.visible = this.model.state === GameStates.GAME_OVER;
        this.text.position.set(this.app.renderer.width/2, this.app.renderer.height/2);
    }
}