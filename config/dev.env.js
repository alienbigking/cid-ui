'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VERSION: '"0.6.0-dev"',
  CID_BASE_URL: '"http://10.10.10.129:8080/cid-development/"'
})
