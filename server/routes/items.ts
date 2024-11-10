import { Router } from "express";
import {
  getItemById,
  getItemLocation,
  getItemsByQuery,
} from "../controllers/items";

const router: Router = Router();

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Get item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Item ID
 *     responses:
 *       200:
 *         description: Item details
 *       404:
 *         description: Item not found
 *       500:
 *         description: Server error
 */
router.get("/:id", getItemById);
/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Search items by query
 *     tags: [Items]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of items
 *       400:
 *         description: Missing search parameter
 *       500:
 *         description: Server error
 */
router.get("/location/:id", getItemLocation);
/**
 * @swagger
 * /api/items/location/{id}:
 *   get:
 *     summary: Get item location
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Item ID
 *     responses:
 *       200:
 *         description: Item location
 *       404:
 *         description: Item not found
 *       500:
 *         description: Server error
 */
router.get("", getItemsByQuery);

export default router;
