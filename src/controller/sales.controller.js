import { prisma } from "../db.js";


//Get sales Met
export const getSALES = async (req, res) => {
    try {
      const sales = await prisma.sales.findMany();
  
      res.status(201).json(sales);
    } catch (e) {
      res.status(400).json({ error: "Error", message: e.message });
    }
  };


  //crete sale met
  export const createSALES = async (req, res) => {
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
      res.status(400).json({ error: "Error en el metodo", message: e.message });
    }
  };


  //update SAlE
  export const updateSALES = async (req, res) => {
    try {
      const { id, ...updateData } = req.body;
  
      const existingSale = await prisma.sales.findUnique({
        where: { id },
      });
  
      if (!existingSale) {
        return res.status(404).json({ error: "Sale not found" });
      }
  
      const updateSale = await prisma.sales.update({
        where: { id },
        data: updateData,
      });
      res.status(200).json(updateSale);
    } catch (e) {
      res.status(400).json({ error: "Error PUT method", message: e.message });
    }
  };


  //DeleteSale
  export const deleteSALES = async (req, res) => {
    try {
      const { id } = req.params;
  
      const existingSale = await prisma.sales.findUnique({
        where: { id },
      });
  
      if (!existingSale) {
        return res.status(404).json({ error: "Sale not found" });
      }
  
      const deletedSale = await prisma.sales.update({
        where: { id },
        data: { deleted: true },
      });
  
      res.status(200).json(deletedSale);
    } catch (e) {
      res.status(400).json({ error: "Error DELETE method", message: e.message });
    }
  };
  