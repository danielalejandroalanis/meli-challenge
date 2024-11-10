import { Request, Response } from "express";
import axios from "axios";

export const getCategoryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await axios.get(
            `https://api.mercadolibre.com/categories/${id}`
        );
        const categories = response.data.path_from_root.map(
            (catVal: { name: string }) => catVal.name
        );
        
        res.json({ categories });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener las categorías'
        });
    }
};