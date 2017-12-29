import { Engine } from './engine.js';

export class GameObject {
	constructor() {
        Engine.registerGameObject(this);
    }
}