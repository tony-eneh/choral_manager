import model from './model';
import { db } from '../../config';


console.log('entered /api/song/controller.js');

export const getSong = (req, res) => {
    console.log('SEE THE REQ PARAM HERE', req.params.id);
    res.send('we got it loud and clear!');
};

export const getSongs = (req, res) => {
    model.getSongs(JSON.parse(req.body), (err, data) => {
        if (err) console.log `${err}`;
        res.send(data);
        db.close();
    });

};

export const createSong = (req, res) => {

};

export const updateSong = (req, res) => {

};

export const deleteSong = (req, res) => {

};