import mongodb from 'mongodb';
import { DB_NAME, db } from '../../config';

const dbo = db.db(DB_NAME);

//CRUD operations

export const getSelections = (query, done) => {
    dbo.getCollection('selections').find(query, done);
};

export const getSelection = (id, done) => {
    if (dbo) {
        return dbo.getCollection('selections').findOne({ _id: id }, done)
    }
};

export const createSelection = (query, done) => {
    dbo.getCollection('selections').insertOne(query, done);
};

export const updateSelection = (query, object, done) => {
    dbo.getCollection('selections').updateOne(query, object, done);
};

export const deleteSelection = (id, done) => {
    dbo.getCollection('Selections').deleteOne({ _id: id }, done);
};