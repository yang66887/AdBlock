//获取响应数据
var requestUrl = $request.url;
var body = JSON.parse($response.body);
var requestParams = requestUrl.split('?')[1].split('&');
//匹配请求
var resetApi = /resetvip/;
var infoApi = /myinfo/;
var addApi = /addsecond/;
var configApi = /config2020/;
//格式化请求uri参数
var params = {};
for(let i in requestParams){
  let paramKey = requestParams[i].split('=')[0];
  let paramValue = requestParams[i].split('=')[1];
  params[paramKey] = paramValue;
}
//预设vip数据
var temp = {"uuid":null,"banned":"0","headimgurl":null,"type":null,"wxunionid":null,"token":null,"vipto":null,"wxopenid":null,"nickname":null,"email":null,"appleid":null,"device":null};
temp.email = "9527";
temp.appleid = "9527";
temp.wxopenid = "9527";
temp.nickname = "南通男同男童";
temp.token = params.token;
temp.device = params.device;
temp.uuid = params.uid;

if(requestUrl.match(infoApi)){
  body.status = "1";
  temp.type = "9"; //普通会员：0-7，无法绑定Apple ID | 年费会员：8 | 终身会员：9 | 普通会员：10+，可绑定Apple ID
  temp.vipto = "2099-12-31 00:00:00";
  body.data[0] = temp;
}

//if(requestUrl.match(resetApi)

if(requestUrl.match(addApi)){
  body.status = "1";
  body.data = "绑定成功";
  }

if(requestUrl.match(configApi)){
  var temp_data = [
    {"cokey":"/ONLINE_REWARDAD_CONFIG/","covalue":"0"},
    {"cokey":"/ONLINE_INTERAD_DOWNLOAD_CONFIG/","covalue":"0"},
    {"cokey":"/ONLINE_ENABLE_REWARDAD/","covalue":"disable"},
    {"cokey":"/ONLINE_WEBSEARCHSITE_URL/","covalue":"https://www.google.com/ncr"},
    {"cokey":"/ONLINE_TXTSITES/","covalue":"演示样例"},
    {"cokey":"/ONLINE_WANGPANSEARCHSITE_URL/","covalue":"https://www.jiumodiary.com/"},
    {"cokey":"/ONLINE_SHOWFULLFUNC/","covalue":"0"},
    {"cokey":"/ONLINE_MY_SPECIAL_SITES/","covalue":"留言反馈||vip/upgrade.php?iinnffoo"},
    {"cokey":"/ONLINE_SAVECOVERSITESV2/","covalue":"0"},
    {"cokey":"/ONLINE_ADWORDS/","covalue":"0"},
    {"cokey":"/PARAV2_SPLASHADS_CONFIG/","covalue":"0"},
    {"cokey":"/ONLINE_JS_RULES/","covalue":null},
    {"cokey":"/ONLINE_WANGPAN_SEARCHSITE_URL/","covalue":"https://www.jiumodiary.com/"},
    {"cokey":"/ONLINE_WEB_SEARCHSITE_URL/","covalue":"https://www.google.com/search?q=%@"},
    {"cokey":"/ONLINE_NEW_REQUESTINFO_FORURL/","covalue":"0"},
    {"cokey":"/ONLINE_ADAWAY_STRING/","covalue":null},
    {"cokey":"/ONLINE_TXTNOVEL_CHECKIN_URL/","covalue":"http://www.txtnovel.vip/plugin.php?id=dsu_paulsign:sign&mobile=yes"},
    {"cokey":"/ONLINE_IAP_VERSION/","covalue":"230510"},
    {"cokey":"/ONLINE_TXTNOVEL_URL/","covalue":"http://www.txtnovel.vip"}
  ];
  var data = body.data;
  var replaceKeys = ["1","2","3","4","5","7","9","10","11","12","14","15","16"];
  for(let i in replaceKeys){
    let replaceKey = replaceKey[i];
    let cokey = data[replaceKey].cokey;
    let temp_cokey = temp_data[replaceKey].cokey;
    if(cokey.match(temp_cokey)){
      data[replaceKey].covalue = temp_data[replaceKey].covalue;
    }
  }
  //data.length = 0;
}

$done({body: JSON.stringify(body)})
