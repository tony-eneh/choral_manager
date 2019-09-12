import apiRouter from './api';
import { dbConnection } from './config';

import express from 'express';

//connect to database
dbConnection.connect()
// eslint-disable-next-line no-undef
.then(port=>console.log`successful connected to database on port ${port}`)
// eslint-disable-next-line no-undef
.catch(err=>console.log`error: ${err}`);

const app = express();

app.use('/', apiRouter);

app.listen(3000, console.log`server successfully started. Listening on port 3000`);