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
    let query = req.body ? JSON.parse(req.body) : req.query || {};

    model.getSongs(query, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        // console.log ` DATA FETCHED ${data}`;
        res.send(data);
        // db.close();
    });
};

export const createSong = (req, res) => {

};

export const updateSong = (req, res) => {

};

export const deleteSong = (req, res) => {

};