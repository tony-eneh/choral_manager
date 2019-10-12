import * as model from './model';


console.log('entered /api/user/controller.js');

export const getUser = (req, res) => {

    //create query object
    let query = { _id: req.params.id };

    model.getUser(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        res.send(data);
    });
};

export const getUsers = (req, res) => {

    //create query object
    let query = req.body ? req.body : req.query || {};
    model.getUsers(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        res.send(data);
    });
};

export const createUser = (req, res) => {

    //create query object
    let query = req.body ? req.body : req.query || {};

    model.createUser(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL CREATING: ${err}`;
        res.send(data.insertedId);
    })
};

export const updateUser = (req, res) => {

    //create query object
    let object = req.body ? req.body : req.query || {};
    let query = { _id: req.params.id };
    // console.log `object in controller ${object}`;
    // console.log `req.body ${req.body}`;
    delete object._id;
    model.updateUser(query, object, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL UPDATING: ${err}`;
        res.send(data);
    })
};

export const deleteUser = (req, res) => {

    //create query object
    let query = { _id: req.params.id };

    model.deleteUser(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL DELETING: ${err}`;
        res.send(data);
    })
};