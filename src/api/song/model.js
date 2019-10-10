import mongodb from 'mongodb';
import { DB_NAME, dbConnection } from '../../config';

let dbo;

//connect to database





//CRUD operations

export const getSongs = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir file database', err);
            return;
        }
        console.log('successfully connected to db', db);
        db.collection('songs').find(query).toArray(done);
    });

};

export const getSong = (id, done) => {
    if (dbo) {
        return dbo.getCollection('songs').findOne({ _id: id }, done)
    }
};

export const createSong = (query, done) => {
    dbo.getCollection('songs').insertOne(query, done);
};

export const updateSong = (query, object, done) => {
    dbo.getCollection('songs').updateOne(query, object, done);
};

export const deleteSong = (id, done) => {
    dbo.getCollection('songs').deleteOne({ _id: id }, done);
};