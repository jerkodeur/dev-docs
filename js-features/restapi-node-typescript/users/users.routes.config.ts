import express from 'express'
import {CommonRoutesConfig} from '../common/common.routes.config'

export class UsersRoutes extends CommonRoutesConfig {

    constructor (app: express.Application) {
        // send app and name route to the CommonRoutesConfig constructor
        super(app, 'UsersRoutes')
    }

    configureRoutes() {

        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List of users')
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send('Post to users')
            })

        this.app.route('/users/userId')
            // middleware will be run before any other request
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next()
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.userId}`)
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.userId}`)
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.userId}`)
            })

        return this.app
    }
}