// 타입스크립트를 노드 환경에서 사용할 때
// npm run start:dev <--- 코드가 바뀔 때마다 실시간 업데이트

import * as express from "express";


const app: express.Express = express();
const port: number = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({name: "dohyeon", age: 22,});
});

app.get('/test', (req: express.Request, res: express.Response) => {
    res.send({name: "dohyeon", age: 22,});
});

app.post('/test', (req: express.Request, res: express.Response) => {
    res.send({city: "Seoul"});
});

// 서버를 엶
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
