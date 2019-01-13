const express = require('express');
const router = express.Router();

const show = require('../models/show');

const sendcolors = (req, res) => res.json(res.locals.shows);
const sendcolor = (req, res) => res.json(res.locals.show);
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/', show.getAll, sendcolors);
router.post('/', show.create, sendcolor);
router.put('/:id', show.update, sendcolor);
router.delete('/:id', show.delete, sendSuccess);

module.exports = router;