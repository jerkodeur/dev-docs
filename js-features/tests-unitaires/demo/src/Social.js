const request = require('request')

module.exports = {
  twitter_url: 'https://api.twitter.com/1/urls/count.json?callback=?&url=',
  facebook_url: 'http://graph.facebook.com/',
  getTwitterCount: function (url) {
    const self = this
    return new Promise((resolve, reject) => {
      self.callAPI(self.twitter_url + url, (err, result) => {
        if (err) return reject(err)
        return resolve(result.count)
      })
    })
  },
  getFacebookShares: function (url) {
    return new Promise((resolve, reject) => {
      const self = this
      self.callAPI(self.facebook_url + url, (err, result) => {
        if (err) return reject(err)
        return resolve(result.shares)
      })
    })
  },
  callAPI: function(url) {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if(error) return reject(error)
        return resolve(console.log(body))
      })
    })
  }
}