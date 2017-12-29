class EngineSingleton {
	constructor() {
        if(instance){
            return instance;
        }

		this.gameObjects = [];
		this.time = {
			deltaTime: 0,
			timeSinceStart: 0
		};
		this.lastFrameTime = new Date();
		this.isBeingDisposed = false;

		instance = this;
        requestAnimationFrame((frameTime) => this.update(frameTime));
	}

	registerGameObject(gameObject) {
		this.gameObjects.push(gameObject);
	}

	dispose() {
		this.isBeingDisposed = true;
	}

	update(frameTime) {
		if (!this.isBeingDisposed) {
			this.lastFrameTime = frameTime;
			this.gameObjects.forEach(gameObject => gameObject.update(
				{deltaTime: frameTime - this.lastFrameTime, frameTime: frameTime}
			));

			requestAnimationFrame((frameTime) => this.update(frameTime));
		}
	}
}
let instance;
export let Engine = new EngineSingleton();