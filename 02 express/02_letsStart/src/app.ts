// 타입스크립트를 노드 환경에서 사용할 때
// npm run start:dev <--- 코드가 바뀔 때마다 실시간 업데이트

import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server{
  public app: express.Application;

  constructor(){
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleWare
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('this is logging middle ware');
      next();
    });

    // json middleware
    this.app.use(express.json());

    this.setRoute();

    // 404 middleWare
    this.app.use((req, res, next) => {
      console.log('this is error middle ware');
      res.send({error: '404 not found error'});
    });
  }

  public listen(){
    this.setMiddleware();

    const port: number = 8000;
    this.app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();