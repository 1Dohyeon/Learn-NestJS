import { Router } from "express";
import { Cat } from './cats.model';

const router = Router();

//* READ 고양이 전체 데이터 다 조회 -> GET
router.get('/cats', (req, res) => {
  try {
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

//* READ 특정 고양이 데이터 조회 -> GET
router.get('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
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

// CREATE 새로운 고양이 추가 API ( like sign up )
router.post('/cats', (req, res) => {
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

export default router;