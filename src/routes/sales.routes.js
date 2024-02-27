import { Router } from 'express';
import {getSALES, createSALES, updateSALES, deleteSALES, getSingleSale} from '../controller/sales.controller.js';



const router = Router();

router.get("/sales", getSALES);
router.post("/sales", createSALES);
router.put("/sales/:id", updateSALES);
router.delete("/sales/:id", deleteSALES);
router.get("/sales/:id", getSingleSale);

export default router;
