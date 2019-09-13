import express from 'express';
import { fetchSong, fetchAllSongs, createSong, updateSong, deleteSong } from './controller';

const router = express.Router();

router.get('/songs/:id', fetchSong);
router.get('/songs', fetchAllSongs);
router.put('/songs', createSong);
router.post('/songs', updateSong);
router.delete('/songs', deleteSong);

console.log('successfully parsed /api/song/route.js')

export default router;