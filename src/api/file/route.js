import express from 'express';
import { getFile, getFiles, createFile, updateFile, deleteFile } from './controller';

const router = express.Router();

router.get('/files/:id', getFile);
router.get('/files', getFiles);
router.put('/files/:id', updateFile);
router.post('/files', createFile);
router.delete('/files/:id', deleteFile);

console.log('successfully parsed /api/file/route.js')

export default router;