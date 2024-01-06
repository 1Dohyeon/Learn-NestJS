// 타입스크립트를 노드 환경에서 사용할 때
// npm run start:dev <--- 코드가 바뀔 때마다 실시간 업데이트

import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

