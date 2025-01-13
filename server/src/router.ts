import express from "express";
const router = express.Router();

/* ************************************************************************* */
// Routes liées aux items
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
// Route de bienvenue

/* ************************************************************************* */
// Routes liées aux programmes
import programsActions from "./modules/item/programs/programActions";

router.get("/api/programs", programsActions.browse);

/* ************************************************************************* */
export default router;
