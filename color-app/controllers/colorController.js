const express = require('express');
const router = express.Router();


const colors = require('../models/color');

const sendColors = (req, res) => res.json(res.locals.colors);
const sendColor= (req, res) => res.json(res.locals.colors);
const sendSuccess = (req, res) => res.json({message: "success"});

router.get('/colors', colors.getAll, sendColors);
router.post('/colors', colors.create, sendColor);
router.put('/colors/:id', colors.update, sendColor);
router.delete('/colors/:id', colors.delete, sendSuccess);


module.exports = router;