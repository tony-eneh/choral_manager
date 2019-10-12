import mongodb from 'mongodb';
import { DB_NAME, dbConnection } from '../../config';
import { normalize } from 'path';

let dbo;
let ObjectID = mongodb.ObjectID;
console.log(ObjectID)
    //connect to database



let normalizeID = (idString) => ObjectID(idString);

//CRUD operations

export const getSelections = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir selection database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        db.collection('selections').find(query).toArray(done);
    });

};

export const getSelection = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir selection database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('selections').findOne(query, done);
    });

};

export const createSelection = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir selection database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('selections').insertOne(query, done);
    });
};

export const updateSelection = (query, object, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir selection database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        //prevent whole document replacing
        object = { $set: object };
        console.log(object);
        return db.collection('selections').updateOne(query, object, done);
    })
};

export const deleteSelection = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir selection database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('selections').deleteOne(query, done);
    })
};