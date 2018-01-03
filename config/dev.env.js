'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CID_BASE_URL:'"http://10.10.10.140:8080/cid-development/"'
})
