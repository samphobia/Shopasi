const express = require('express')

const Data = require('../models/data')

const scrapeController = require('../controllers/scrape')

const router = express.Router()

/**
 * @swagger
 * /scrape/search:
 *  post:
 *    summary: Searches keywords in a website
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              siteUrl:
 *                type: string
 *    tags: [Authentication]
 *    responses: 
 *      200:
 *        description: created new user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      400:
 *        description: There was an error creating the news user
 * 
 */

router.post('/search', scrapeController.scrape)

module.exports = router;
