import { Router } from "express";
import { getCategoryById } from "../controllers/categories";

const router: Router = Router();

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Get category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category details
 *       500:
 *         description: Server error
 */
router.get("/:id", getCategoryById);

export default router;
