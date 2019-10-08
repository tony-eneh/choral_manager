import mongodb from 'mongodb';

const DB_URL_STRING = 'mongodb://localhost:27017/choir-file';
let connectedDB;
const mongoClient = mongodb.MongoClient;

// mongoClient.on('connect', console.log);

export const dbConnection = {
    connect: (done) => {
        mongoClient.connect(DB_URL_STRING, (err, db) => {
            if (err) done(err);
            connectedDB = db;
        });
    }
};

export const db = connectedDB;

export const DB_NAME = 'choir-file';