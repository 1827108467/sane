fetch('https://admin.xiaoyinka.com/wxapp/material/index').then(function (response) {
    console.log("存在一个问题，状态码为：" + response.status);
}).catch(function (err) {
  console.log("Fetch错误:" + err);
})