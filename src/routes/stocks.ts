import { Router } from "express";
import { getStocks, getStockById } from "../handlers/stocks";

const router = Router();

// /api/stocks
router.get("/", getStocks);

// /api/stocks/:id
router.get("/:id", getStockById);

export default router;
