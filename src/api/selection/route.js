import express from 'express';
import { fetchSelection, fetchAllSelections, createSelection, updateSelection, deleteSelection } from './controller';

const router = express.Router();

router.get('/selections/:id', fetchSelection);
router.get('/selections', fetchAllSelections);
router.put('/selections', createSelection);
router.post('/selections', updateSelection);
router.delete('/selections', deleteSelection);

console.log('successfully parsed /api/selection/route.js')

export default router;