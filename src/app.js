import apiRouter from './api';
// import { dbConnection } from './config';

import express from 'express';
import bodyParser from 'body-parser';


// eslint-disable-next-line no-undef
//.then(port=>console.log`successful connected to database on port ${port}`)
// eslint-disable-next-line no-undef
//.catch(err=>console.log`error: ${err}`);

const app = express();

//intergrate middlewares
app.use(bodyParser());

// console.log(apiRouter);
app.use('/api', apiRouter);

// app.use('/', (req, res) => { res.send('yesso! you got our static page') });

app.listen(3000, console.log `server successfully started. Listening on port 3000`);