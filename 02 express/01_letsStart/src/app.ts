// 타입스크립트를 노드 환경에서 사용할 때
// npm run start:dev <--- 코드가 바뀔 때마다 실시간 업데이트

import * as express from "express";
import { Cat } from './app.model';

const app: express.Express = express();
const port: number = 8000;

// app.get('/', (req: express.Request, res: express.Response) => {
//   res.send({name: "dohyeon", age: 22,});
// });

// app.get('/test', (req: express.Request, res: express.Response) => {
//     res.send({name: "dohyeon", age: 22,});
// });

// app.post('/test', (req: express.Request, res: express.Response) => {
//     res.send({city: "Seoul"});
// });

// 서버를 엶
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// middleWare
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is logging middle ware');
  next();
});

// router
app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ Cat });
});

// middleWare
app.use('/cats', (req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is cats middle ware');
  next();
});

// router
app.get('/cats/blue', (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[0] });
});

// router
app.get('/cats/som', (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ som: Cat[1] });
});

// middleWare
app.use((req, res, next) => {
  console.log('this is error middle ware');
  res.send({error: '404 not found error'});
});