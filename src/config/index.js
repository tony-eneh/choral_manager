import mongodb from 'mongodb';

const DB_URL_STRING = process.env.DB_URL_STRING;
console.log('DB_URL_STRING: '+process.env.DB_URL_STRING);
console.log`process.env ${process.env}`;
let connectedDB;
const mongoClient = mongodb.MongoClient;

// mongoClient.on('connect', console.log);

export const dbConnection = {
    connect: (done) => {
        mongoClient.connect(DB_URL_STRING, (err, db) => {
            // if (err) done(err);
            // connectedDB = db;
            return done(err, db.db(DB_NAME));
        });
    }
};

// export const db = connectedDB;

export const DB_NAME = 'choir-file';