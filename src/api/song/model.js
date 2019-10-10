import mongodb from 'mongodb';
import { DB_NAME, dbConnection } from '../../config';
import { normalize } from 'path';

let dbo;
let ObjectID = mongodb.ObjectID;
console.log(ObjectID)
    //connect to database



let normalizeID = (idString) => ObjectID(idString);

//CRUD operations

export const getSongs = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir file database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        db.collection('songs').find(query).toArray(done);
    });

};

export const getSong = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir file database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('songs').findOne(query, done);
    });

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