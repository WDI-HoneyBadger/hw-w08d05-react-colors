const express = require('express');
const router = express.Router();

const show = require('../models/color');

const sendColors = (req, res) => res.json(res.locals.shows);
const sendColor = (req, res) => res.json(res.locals.show);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/colors', color.getAll, sendColors);
router.post('/colors', color.create, sendColor);
router.put('/colors/:id', color.update, sendColor);
router.delete('/colors/:id', color.delete, sendSuccess);

module.exports = router;