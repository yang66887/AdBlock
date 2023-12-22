//获取响应数据
var requestUrl = $request.url;
var body = JSON.parse($response.body);
var requestParams = requestUrl.split('?')[1].split('&');
//匹配请求接口
var resetApi = /resetvip/;
var infoApi = /myinfo/;
var addApi = /addsecond/;
var configApi = /config\d+/;
//格式化请求uri参数
var params = {};
for(let i in requestParams){
  let paramKey = requestParams[i].split('=')[0]
  let paramValue = requestParams[i].split('=')[1]
  params[paramKey] = paramValue
}
//预设vip数据
var temp = {"uuid":null,"banned":"9","headimgurl":null,"type":null,"wxunionid":null,"token":null,"vipto":null,"wxopenid":null,"nickname":null,"email":null,"appleid":null,"device":null}
temp.type = "9" //普通会员：0-7，无法绑定Apple ID | 年费会员：8 | 终身会员：9 | 普通会员：10+，可绑定Apple ID
temp.vipto = "2099-01-01 00:00:00"
temp.email = "for_example@gmail.com"
temp.appleid = "for_example@gmail.com"
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
  body.type = "9"
  body.token = params.token
  body.email = temp.email
  body.appleid = temp.appleid
  body.device = params.device
  body.uuid = params.uid
}

if(requestUrl.match(configApi)){
  var keyRegex = /ONLINE_REWARDAD_CONFIG_V558|ONLINE_INTERAD_DOWNLOAD_CONFIG_V558|ONLINE_ENABLE_REWARDAD_V558|ONLINE_SHOWFULLFUNC_V558|PARAV2_SPLASHADS_CONFIG|ONLINE_IAP_VERSION/
  let data = body.data
  for(let i = data.length - 1; i >= 0; i--){
    let cokey = data[i].cokey
    if(!cokey.match(keyRegex)){
      data.splice(i, 1)
      continue
    }
  }
}

$done({body: JSON.stringify(body)})
