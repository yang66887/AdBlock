//获取响应数据
var requestUrl = $request.url;
var body = JSON.parse($response.body);
var requestParams = requestUrl.split('?')[1].split('&');
//匹配请求
var domainRegex = /815616\.xyz/;
var resetApi = /resetvip/;
var infoApi = /myinfo/;
var addApi = /addsecond/;
var configApi = /config2020/;
//格式化请求uri参数
var params = {};
for(let i in requestParams){
  let paramKey = requestParams[i].split('=')[0]
  let paramValue = requestParams[i].split('=')[1]
  params[paramKey] = paramValue
}
//预设vip数据
var temp = {"uuid":null,"banned":"0","headimgurl":null,"type":null,"wxunionid":null,"token":null,"vipto":null,"wxopenid":null,"nickname":null,"email":null,"appleid":null,"device":null}
temp.type = "9" //普通会员：0-7，无法绑定Apple ID | 年费会员：8 | 终身会员：9 | 普通会员：10+，可绑定Apple ID
temp.vipto = "2099-01-01 00:00:00"
temp.email = "9527"
temp.appleid = "9527"
temp.wxopenid = "9527"
temp.nickname = "南通男同男童"
temp.token = params.token
temp.device = params.device
temp.uuid = params.uid

if(requestUrl.match(infoApi)){
  body.status = "1"
  body.data[0] = temp
}

if(requestUrl.match(resetApi) || requestUrl.match(addApi)){
  body.status = "1"
  body.data = "登录成功"
  body.type = temp.type
  body.token = params.token
  body.email = temp.email
  body.appleid = temp.appleid
  body.nickname = temp.nickname
  body.device = params.device
  body.uuid = params.uid
}

if(requestUrl.match(configApi)){
  var keyRegex = /ONLINE_REWARDAD_CONFIG|ONLINE_INTERAD_DOWNLOAD|ONLINE_ENABLE_REWARDAD|ONLINE_SHOWFULLFUNC|PARAV2_SPLASHADS_CONFIG|ONLINE_IAP_VERSION/
  var data = body.data
  for(let i = data.length - 1; i >= 0; i--){
    let cokey = data[i].cokey
    if(!cokey.match(keyRegex)){
      data.splice(i, 1)
      continue
    }
  }
  //data.length = 0
}

$done({body: JSON.stringify(body)})
