import fileRouter from './file';
import songRouter from './song';
import userRouter from './user';
import express from 'express';

const apiRouter = express.Router();

apiRouter.use(fileRouter);
apiRouter.use(songRouter);
// apiRouter.use(userRouter);

console.log('successfully parsed /api/index.js')

export default apiRouter;