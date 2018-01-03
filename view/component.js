export class Component {
    constructor(app) {
        app.ticker.add(delta => this.update(delta));
    }

    update(delta) {
    }
}