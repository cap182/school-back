import { Router } from "express";
import {
    createPercentage,
    getPercentage,
    updatePercentage,
    deletePercentage
} from "../controllers/percentage.controller.js";

const router = Router()

router.get('/percentages/:course', getPercentage)

router.post('/percentages', createPercentage)

router.put('/percentages/:id', updatePercentage)

router.delete('/percentages/:id', deletePercentage)

export default router