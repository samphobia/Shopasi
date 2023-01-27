const express = require('express')

const Data = require('../models/data')

const scrapeController = require('../controllers/scrape')

const router = express.Router()

router.post('/search', scrapeController)
