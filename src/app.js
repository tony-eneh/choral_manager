import apiRouter from './api';
import { dbConnection } from './config';

import express from 'express';

//connect to database
dbConnection.connect((err) => {
    if (err) {
        console.log('error connecting to choir file database', err);
        return;
    }
    console.log('successfully connected to db');
});
// eslint-disable-next-line no-undef
//.then(port=>console.log`successful connected to database on port ${port}`)
// eslint-disable-next-line no-undef
//.catch(err=>console.log`error: ${err}`);

const app = express();

// console.log(apiRouter);
app.use('/api', apiRouter);

// app.use('/', (req, res) => { res.send('yesso! you got our static page') });

app.listen(3000, console.log `server successfully started. Listening on port 3000`);