import express from 'express';
import { getElements, getElement, createElement, deleteElement, updateElement } from '../controllers/elementController.js';
import { getElementMiddleware } from '../middlewares/getElementMiddleware.js';

const router = express.Router();

router.get('/', getElements);
router.get('/:id', getElementMiddleware, getElement);
router.post('/', createElement);
router.delete('/:id', getElementMiddleware, deleteElement);
router.patch('/:id', getElementMiddleware, updateElement);

export default router;