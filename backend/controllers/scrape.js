const express = require('express')
const request = require('request')
const cheerio = require('cheerio')
const Data = require('../models/data')

exports.scrape = (req, res, next) => {
  const siteUrl = req.body.siteUrl
  request(siteUrl, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html)
      $('.product-name').each((i, element) => {
        const name = $(element).text()
        const price = $(element).parent().find('.product-price').text()

        const data = new Data({
          name: name,
          price: price
        })

        data.save()
      })
    }
  })
}