import express from 'express';
import { listElements, createElement } from '../controllers/elementController.js';

const router = express.Router();

router.get('/', listElements);
router.post('/', createElement)

export default router;