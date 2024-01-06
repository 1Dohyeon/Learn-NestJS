// 타입스크립트를 노드 환경에서 사용할 때
// npm run start:dev <--- 코드가 바뀔 때마다 실시간 업데이트

import * as express from "express";
import { Cat } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// CRUD
// Create Read

// logging middleWare
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is logging middle ware');
  next();
});

// READ 고양이 전체 데이터 다 조회
app.get('/cats', (req, res) => {
  try{
    const cats = Cat;
    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});


// READ 특정 고양이 데이터 조회
app.get('/cats/:id', (req, res) => {
  try{
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });

    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });

  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// json middleware
app.use(express.json());

// CREATE 새로운 고양이 추가 API ( like sign up )
app.post('/cats', (req, res) => {
  try{
    const cats = Cat;

    const data = req.body;
    console.log(data);
    cats.push(data)  // create

    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: { cats },
    });

  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});


// 404 middleWare
app.use((req, res, next) => {
  console.log('this is error middle ware');
  res.send({error: '404 not found error'});
});
