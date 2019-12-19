import mongodb from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
console.log('MONGODB_URI: '+process.env.MONGODB_URI);
console.log`process.env ${process.env}`;
let connectedDB;
const mongoClient = mongodb.MongoClient;

// mongoClient.on('connect', console.log);

export const dbConnection = {
    connect: (done) => {
        mongoClient.connect(MONGODB_URI, { useNewUrlParser: true }, (err, db) => {
            // if (err) done(err);
            // connectedDB = db;s
            return done(err, db.db(DB_NAME));
        });
    }
};

// export const db = connectedDB;

export const DB_NAME = 'choir-file';