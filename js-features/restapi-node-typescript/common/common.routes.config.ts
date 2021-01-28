import express from 'express';

export abstract class CommonRoutesConfig {
    app: express.Application
    name: string

    constructor(app: express.Application, name: string) {
        this.app = app
        this.name = name
        this.configureRoutes()
    }

    getName() {
        return this.name
    }
    //TODO abstract typescript feature
    // With abstract All class extend this must have a function named configureRoutes()
    abstract configureRoutes(): express.Application
}