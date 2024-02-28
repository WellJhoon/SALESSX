import { prisma } from "../db.js";


//Get sales Met
export const getSALES = async (req, res) => {
  try {
    const sales = await prisma.sales.findMany();
    res.status(200).json(sales);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener las ventas", message: error.message });
  }
};

  export const getSingleSale =  async (req, res) => {
    try {
      const { id } = req.params;
      const sale = await prisma.sales.findUnique({
        where: { id },
      });
      if (!sale) {
        return res.status(404).json({ error: "Venta no encontrada" });
      }
      res.status(200).json(sale);
    } catch (error) {
      res.status(400).json({ error: "Error al obtener la venta", message: error.message });
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
    } catch (error) {
      res.status(400).json({ error: "Error al crear la venta", message: error.message });
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
        return res.status(404).json({ error: "Venta no encontrada" });
      }
      const updatedSale = await prisma.sales.update({
        where: { id },
        data: updateData,
      });
      res.status(200).json(updatedSale);
    } catch (error) {
      res.status(400).json({ error: "Error al actualizar la venta", message: error.message });
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
        return res.status(404).json({ error: "Venta no encontrada" });
      }
      const deletedSale = await prisma.sales.update({
        where: { id },
        data: { deleted: true },
      });
      res.status(200).json(deletedSale);
    } catch (error) {
      res.status(400).json({ error: "Error al eliminar la venta", message: error.message });
    }
  };