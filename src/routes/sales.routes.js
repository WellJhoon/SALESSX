import express, { Router } from 'express';
import {} from 'module';



const router = Router();

router.get("/sales", getSale);
router.post("/sales", createSale);
router.put("/sales/:id", updateSale);
router.delete("/sales/:id", deleteSale);

export default router;
