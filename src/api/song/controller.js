import * as model from './model';


console.log('entered /api/song/controller.js');

export const getSong = (req, res) => {

    //create query object
    let query = { _id: req.params.id };

    model.getSong(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        res.send(data);
    });
};

export const getSongs = (req, res) => {

    //create query object
    let query = req.body ? req.body : req.query || {};
    model.getSongs(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        res.send(data);
    });
};

export const createSong = (req, res) => {

    //create query object
    let query = req.body ? req.body : req.query || {};

    model.createSong(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL CREATING: ${err}`;
        res.send(data.insertedId);
    })
};

export const updateSong = (req, res) => {

    //create query object
    let object = req.body ? req.body : req.query || {};
    let query = { _id: req.params.id };
    // console.log `object in controller ${object}`;
    // console.log `req.body ${req.body}`;
    delete object._id;
    model.updateSong(query, object, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL UPDATING: ${err}`;
        res.send(data);
    })
};

export const deleteSong = (req, res) => {

    //create query object
    let query = { _id: req.params.id };

    model.deleteSong(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL DELETING: ${err}`;
        res.send(data);
    })
};