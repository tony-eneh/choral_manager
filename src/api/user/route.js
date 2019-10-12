import express from 'express';
import { getUser, getUsers, createUser, updateUser, deleteUser } from './controller';

const router = express.Router();

router.get('/users/:id', getUser);
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);

console.log('successfully parsed /api/user/route.js')

export default router;