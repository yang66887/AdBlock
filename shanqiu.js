var requestUrl = $request.url;
var resetApi = /resetvip/;
var infoApi = /myinfo/;
var addApi = /addsecond/;
var requestParams = requestUrl.split('?')[1].split('&');
var params = {};
var temp = {"uuid":null,"banned":"9","headimgurl":null,"type":null,"wxunionid":null,"token":null,"vipto":null,"wxopenid":null,"nickname":null,"email":null,"appleid":null,"device":null}

for(let i in requestParams){
  let paramKey = requestParams[i].split('=')[0]
  let paramValue = requestParams[i].split('=')[1]
  params[paramKey] = paramValue
}

//普通会员：0-7，无法绑定Apple ID
//年费会员：8
//终身会员：9
//普通会员：10+，可绑定Apple ID
temp.type = "9"
temp.vipto = "2099-01-01 00:00:00"
temp.email = "for_example@gmail.com"
temp.appleid = "for_example@gmail.com"
temp.wxunionid = "原神大王"
temp.nickname = "原神大王"
temp.token = params.token
temp.device = params.device
temp.uuid = params.uid

if(requestUrl.match(resetApi) || requestUrl.match(addApi)){
  var body = JSON.parse($response.body);
  body.status = "1"
  body.data = "登录成功"
  body.type = "9"
  body.token = params.token
  body.email = temp.email
  body.appleid = temp.appleid
  body.wxunionid = temp.wxunionid
  body.nickname = temp.nickname
  body.device = params.device
  body.uuid = params.uid
  $done({body: JSON.stringify(body)});
}

if(requestUrl.match(infoApi)){
  var body = JSON.parse($response.body);
  body.status = "1"
  body.data[0] = temp
  $done({body: JSON.stringify(body)});
}
