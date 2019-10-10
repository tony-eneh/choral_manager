import express from 'express';
import { getSong, getSongs, createSong, updateSong, deleteSong } from './controller';

const router = express.Router();

router.get('/songs/:id', getSong);
router.get('/songs', getSongs);
router.put('/songs', createSong);
router.post('/songs', updateSong);
router.delete('/songs', deleteSong);

console.log('successfully parsed /api/song/route.js')

export default router;