import express from 'express'
// import * as http from 'http'
// import * as bodyparser from 'body-parser'

import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import cors from 'cors'
import debug from 'debug'

import {CommonRoutesConfig} from './common/common.routes.config'
import {UsersRoutes} from './users/users.routes.config'

const app: express.Application = express()
// const server: http.Server = http.createServer(app)
const port: Number = 3000
const routes: Array<CommonRoutesConfig> = []
const debugLog: debug.IDebugger = debug('app')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//TODO expressWinston logger
// Will automatically log all HTTP requests handled by Express.js
app.use(expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}))
// Add usersRoutes to our app
routes.push(new UsersRoutes(app))

//TODO expressWinston errorLogger
//! Need to be after the express router and before any of custom error handlers
// Will log the errors occured in http requests handled by Express.js
app.use(expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}))

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('Server up and running!')
})

app.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`)
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`)
    })
})