var requestUrl = $request.url;
var body = JSON.parse($response.body);
var resetApi = /resetvip/;
var infoApi = /myinfo/;
var addApi = /addsecond/;
var requestParams = requestUrl.split('?')[1].split('&');
var params = {};
var temp = {"uuid":null,"banned":"0","headimgurl":null,"type":null,"wxunionid":null,"token":null,"vipto":null,"wxopenid":null,"nickname":null,"email":null,"appleid":null,"device":null}

for(let i in requestParams){
  let paramKey = requestParams[i].split('=')[0]
  let paramValue = requestParams[i].split('=')[1]
  params[paramKey] = paramValue
}

temp.type = "9"
temp.vipto = "9999-12-31 23:59:59"
temp.email = "for_example@gmail.com"
temp.appleid = "for_example@gmail.com"
temp.token = params.token
temp.device = params.device
temp.uuid = params.uid

if(requestUrl.match(resetApi) || requestUrl.match(addApi)){
  body.status = "1"
  body.data = "登录成功"
  body.type = "999"
  body.token = params.token
  body.email = temp.email
  body.appleid = temp.appleid
  body.device = params.device
  body.uuid = params.uid
}

if(requestUrl.match(infoApi)){
  body.status = "1"
  body.data[0] = temp
}

$done({body: JSON.stringify(body)});
