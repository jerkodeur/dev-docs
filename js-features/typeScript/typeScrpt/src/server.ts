import express, { Request, Response } from 'express'

class Server {

  readonly port: number

  constructor (port: number = 7500) {
    this.port = port
  }

  start(port: number) {
    const app = express()
    app.get('/', (req: Request, res: express.Response) => {
      res.send(console.log('Hello every body'));
    })
    app.listen(this.port, (err: Error, result:Response) => {
      if(err) throw err
      console.log(`Server is listened to ${this.port}`);
    })
  }
}

module.exports = Server