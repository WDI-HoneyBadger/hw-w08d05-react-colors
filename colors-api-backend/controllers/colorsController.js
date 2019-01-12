const express = require('express');
const router = express.Router();

const colors= require('../models/colors');

const sendColors = (req,res,) => res.json(res.locals.colors);
const sendColor = (req,res) => res.json(res.locals.color);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/', colors.getAll, sendColors);
router.post('/', colors.create, sendColor);
router.put('/:id', colors.update, sendColor);
router.delete('/:id', colors.delete, sendSuccess);

module.exports = router;