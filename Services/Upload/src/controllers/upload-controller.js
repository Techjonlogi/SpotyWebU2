var express = require('express');
var app = express();
const conversion = require ('./conversionLibrary')


const uploadsong = async(req, res) =>{
   console.log('Cancion recibida: ' + req.file.originalname);
   res.json({message: 'Cancion recibida: ' + req.file.originalname});
   conversion.createSong(req, req.file.originalname)
};

const uploadimage = async(req, res) =>{
   console.log('Imagen recibida: ' + req.file.originalname);
   res.json({message: 'Imagen recibida: ' + req.file.originalname});
};


module.exports = {uploadsong, uploadimage};

