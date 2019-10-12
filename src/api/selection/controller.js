import * as model from './model';


console.log('entered /api/selection/controller.js');

export const getSelection = (req, res) => {

    //create query object
    let query = { _id: req.params.id };

    model.getSelection(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        res.send(data);
    });
};

export const getSelections = (req, res) => {

    //create query object
    let query = req.body ? req.body : req.query || {};
    model.getSelections(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        res.send(data);
    });
};

export const createSelection = (req, res) => {

    //create query object
    let query = req.body ? req.body : req.query || {};

    model.createSelection(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL CREATING: ${err}`;
        res.send(data.insertedId);
    })
};

export const updateSelection = (req, res) => {

    //create query object
    let object = req.body ? req.body : req.query || {};
    let query = { _id: req.params.id };
    // console.log `object in controller ${object}`;
    // console.log `req.body ${req.body}`;
    delete object._id;
    model.updateSelection(query, object, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL UPDATING: ${err}`;
        res.send(data);
    })
};

export const deleteSelection = (req, res) => {

    //create query object
    let query = { _id: req.params.id };

    model.deleteSelection(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL DELETING: ${err}`;
        res.send(data);
    })
};