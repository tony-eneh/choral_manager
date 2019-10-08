import mongodb from 'mongodb';
import { DB_NAME, db } from '../../config';

const dbo = db.db(DB_NAME);

//CRUD operations

export const getSongs = (query, done) => {
    dbo.getCollection('songs').find(query, done);
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