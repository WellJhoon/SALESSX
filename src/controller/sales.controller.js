import { prisma } from "../db.js";



export const getSales = async (req, res) => {
    try {
      const sales = await prisma.sales.findMany();
  
      res.status(201).json(sales);
    } catch (e) {
      res.status(400).json({ error: "Error", message: e.message });
    }
  };


  export const createSale = async (req, res) => {
    try {
      const { stock, unitPrice, ...rest } = req.body;
  
      const total = stock * unitPrice;
  
      const sale = await prisma.sales.create({
        data: {
          ...rest,
          stock,
          unitPrice,
          total,
        },
      });
  
      res.status(201).json(sale);
    } catch (e) {
      res.status(400).json({ error: "Error POST method", message: e.message });
    }
  };