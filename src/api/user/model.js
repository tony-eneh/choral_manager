import mongodb from 'mongodb';
import { DB_NAME, dbConnection } from '../../config';
import { normalize } from 'path';

let dbo;
let ObjectID = mongodb.ObjectID;
console.log(ObjectID)
    //connect to database



let normalizeID = (idString) => ObjectID(idString);

//CRUD operations

export const getUsers = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir user database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        db.collection('users').find(query).toArray(done);
    });

};

export const getUser = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir user database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('users').findOne(query, done);
    });

};

export const createUser = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir user database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('users').insertOne(query, done);
    });
};

export const updateUser = (query, object, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir user database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        //prevent whole document replacing
        object = { $set: object };
        console.log(object);
        return db.collection('users').updateOne(query, object, done);
    })
};

export const deleteUser = (query, done) => {
    dbConnection.connect((err, db) => {
        if (err) {
            console.log('error connecting to choir user database', err);
            return;
        }
        console.log('successfully connected to db');

        //normalize ID if present in query
        if (query._id) { query._id = normalizeID(query._id) }

        return db.collection('users').deleteOne(query, done);
    })
};