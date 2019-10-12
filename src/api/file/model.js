import mongodb from 'mongodb';
import { DB_NAME, dbConnection } from '../../config';
import { normalize } from 'path';

let dbo;
let ObjectID = mongodb.ObjectID;
console.log(ObjectID)
    //connect to database



let normalizeID = (idString) => ObjectID(idString);

//CRUD operations

export const getFiles = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir file database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        db.collection('files').find(query).toArray(done);
    });

};

export const getFile = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir file database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('files').findOne(query, done);
    });

};

export const createFile = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir file database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('files').insertOne(query, done);
    });
};

export const updateFile = (query, object, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir file database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        //prevent whole document replacing
        object = { $set: object };
        console.log(object);
        return db.collection('files').updateOne(query, object, done);
    })
};

export const deleteFile = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir file database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('files').deleteOne(query, done);
    })
};