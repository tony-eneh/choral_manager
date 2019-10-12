import * as model from './model';


console.log('entered /api/file/controller.js');

export const getFile = (req, res) => {

    //create query object
    let query = { _id: req.params.id };

    model.getFile(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        res.send(data);
    });
};

export const getFiles = (req, res) => {

    //create query object
    let query = req.body ? req.body : req.query || {};
    model.getFiles(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        res.send(data);
    });
};

export const createFile = (req, res) => {

    //create query object
    let query = req.body ? req.body : req.query || {};

    model.createFile(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL CREATING: ${err}`;
        res.send(data.insertedId);
    })
};

export const updateFile = (req, res) => {

    //create query object
    let object = req.body ? req.body : req.query || {};
    let query = { _id: req.params.id };
    // console.log `object in controller ${object}`;
    // console.log `req.body ${req.body}`;
    delete object._id;
    model.updateFile(query, object, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL UPDATING: ${err}`;
        res.send(data);
    })
};

export const deleteFile = (req, res) => {

    //create query object
    let query = { _id: req.params.id };

    model.deleteFile(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL DELETING: ${err}`;
        res.send(data);
    })
};