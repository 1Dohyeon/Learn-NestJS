import { Router } from "express";
import { deleteCat, putCat, readAllcat, readcat, updateCat, updateCatPart } from "./cats.service";

const router = Router();

// CRUD
// Create Read

//* READ 고양이 전체 데이터 다 조회 -> GET
router.get('/cats', readAllcat);

//* READ 특정 고양이 데이터 조회 -> GET
router.get('/cats/:id', readcat);

// CREATE 새로운 고양이 추가 API ( like sign up )
router.post('/cats', putCat);

// UPDATE 고양이 데이터 업데이트 -> PUT
router.put('/cats/:id', updateCat);

// UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
router.patch('/cats/:id', updateCatPart);

// DELETE 고양이 데이터 삭제 -> DELETE
router.delete('/cats/:id', deleteCat);

export default router;