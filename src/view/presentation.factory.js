function setupPresentation(app, model){
    setupResources().load(() => {
        setupBlocks(app, model.board);
        new ScoreComponent(app, model.scoring);
        new GameOverComponent(app, model);
        new PlayerController(model);
    });
}

function setupResources() {
    return PIXI.loader
        .add(["view/images/background.png",
            "view/images/block_blue.png",
            "view/images/block_cyan.png",
            "view/images/block_green.png",
            "view/images/block_orange.png",
            "view/images/block_purple.png",
            "view/images/block_red.png",
            "view/images/block_yellow.png"]);
}

function createSprites() {
    return [
        new PIXI.Sprite(
            PIXI.loader.resources["view/images/background.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["view/images/block_blue.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["view/images/block_cyan.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["view/images/block_green.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["view/images/block_orange.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["view/images/block_purple.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["view/images/block_red.png"].texture),
        new PIXI.Sprite(
            PIXI.loader.resources["view/images/block_yellow.png"].texture)
    ]
}

function setupBlocks(app, model) {
    for (let y = 0; y < model.height; y++) {
        for (let x = 0; x < model.width; x++) {
            new BlockComponent(x,y, app, model, createSprites());
        }
    }
}