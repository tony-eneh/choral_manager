import model from './model';
import { db } from '../../config';


console.log('entered /api/selections/controller.js');

export const getSelection = (req, res) => {
    console.log('SEE THE REQ PARAM HERE', req.params.id);
    res.send('we got it loud and clear!');
};

export const getSelections = (req, res) => {
    model.getSelections(JSON.parse(req.body), (err, data) => {
        if (err) console.log `${err}`;
        res.send(data);
        db.close();
    });

};

export const createSelection = (req, res) => {

};

export const updateSelection = (req, res) => {

};

export const deleteSelection = (req, res) => {

};