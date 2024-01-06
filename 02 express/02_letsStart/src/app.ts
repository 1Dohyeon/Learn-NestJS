// 타입스크립트를 노드 환경에서 사용할 때
// npm run start:dev <--- 코드가 바뀔 때마다 실시간 업데이트

import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();
const port: number = 8000;

// CRUD
// Create Read

// logging middleWare
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is logging middle ware');
  next();
});

// json middleware
app.use(express.json());

app.use(catsRouter);

// 404 middleWare
app.use((req, res, next) => {
  console.log('this is error middle ware');
  res.send({error: '404 not found error'});
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
