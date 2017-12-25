'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  CID_BASE_URL:'"http://10.10.10.140:8080/cid-development/"'
})
