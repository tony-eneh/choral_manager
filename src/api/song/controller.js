import model from './model';


console.log('entered /api/song/controller.js');

export const fetchSong = (req, res) => {
    console.log('SEE THE REQ PARAM HERE', req.params.id);
    res.send('we got it loud and clear!');
};

export const fetchAllSongs = (req, res) => {

};

export const createSong = (req, res) => {

};

export const updateSong = (req, res) => {

};

export const deleteSong = (req, res) => {

};