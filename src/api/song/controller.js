import * as model from './model';
import { db } from '../../config';


console.log('entered /api/song/controller.js');

export const getSong = (req, res) => {
    console.log('SEE THE REQ PARAM HERE', req.params.id);
    res.send('we got it loud and clear!');
};

export const getSongs = (req, res) => {
    console.log(req.body);
    model.getSongs(req.body ? JSON.parse(req.body) : req.query || {}, (err, data) => {
        if (err) console.log ` ERROR FROM MODEL ${err}`;
        console.log ` DATA FETCHED ${data}`;
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