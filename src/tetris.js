function createTetris(container) {
    let app = setupApp(container);

    let model = createModel();

    setupPresentation(app, model);
}

function setupApp(container){
    const app = new PIXI.Application(getSize(container));
    container.appendChild(app.view);
    window.onresize = () => app.renderer.resize(...Object.values(getSize(container)));
    return app;
}

function getSize(container) {
    let height = Math.min(container.clientHeight, container.clientWidth * 2);
    let width = height / 2;
    return {width, height};
}
