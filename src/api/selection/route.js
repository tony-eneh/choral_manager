import express from 'express';
import { getSelection, getSelections, createSelection, updateSelection, deleteSelection } from './controller';

const router = express.Router();

router.get('/selections/:id', getSelection);
router.get('/selections', getSelections);
router.put('/selections/:id', updateSelection);
router.post('/selections', createSelection);
router.delete('/selections/:id', deleteSelection);

console.log('successfully parsed /api/selection/route.js')

export default router;