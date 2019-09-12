import mongodb from 'mongodb';

const DB_URL_STRING = 'mongodb://localhost:27017/choir-file';

export const dbConnection = {
    connect: (done) => mongodb.MongoClient.connect(DB_URL_STRING, done)
};