import mongodb from 'mongodb';

const DB_URL_STRING = 'mongodb://localhost:27017/choir-file';
let db;
const mongoClient = mongodb.MongoClient;

// mongoClient.on('connect', console.log);

export const dbConnection = {
    connect: (done) => {
        mongoClient.connect(DB_URL_STRING, (err, db) => {
            if (err) done(err);
            db = db;
        });
    }
};

export db;

export const DB_NAME = 'choir-file';