var request = require('sync-request');

var res = request('GET', 'http://sane.xiaoyinka.com/wxapp/vote/banner');
console.log(res.getBody());