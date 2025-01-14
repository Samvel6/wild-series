import express from "express";
import categoryActions from "./modules/item/category/categoryActions";
import itemActions from "./modules/item/itemActions";
import programActions from "./modules/item/programs/programActions";
import sayActions from "./modules/item/say/sayActions";

const router = express.Router();

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);

router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);

// Define say-related routes
router.get("/", sayActions.sayWelcome);

export default router;
