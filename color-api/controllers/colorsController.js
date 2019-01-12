const express = require('express');
const router = express.Router();

const color = require('../models/color');

const sendColors = (req, res) => res.json(res.locals.colors);
const sendColor = (req, res) => res.json(res.locals.color);
const sendSuccess = (req, res) => res.json({message: 'Success'});

router.get('/', color.getAll, sendColors);
router.post('/', color.create, sendColor);
router.put('/:id', color.update, sendColor);
router.delete('/:id', color.delete, sendSuccess);

module.exports = router;