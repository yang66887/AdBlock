var body = JSON.parse($response.body);
var result = body.result;
var data = result.data;

// 主题帖名
const subjectRegex = /女拳|女权|小土豆|女.*pua|pua.*女|女.*觉醒|厌女|小仙女|小红书|彩礼|xxn|XXN|XxN|xXn|Xxn|xxN|ghg|xhs|董宇辉|南.*北|北.*南|华为/;

// 楼层内容关键字
const contentRegex = /xxxx示例关键字XXXX/;

// 子版块
const forumnameRegex = /弱智吧吧主|二手交易|NGATOYS|优惠信息.*|影音讨论区|小窗视界|青玉巫婆|游戏综合|生命之杯|汽车俱乐部|篮球|萌萌宠物|狼人杀|娱乐吃瓜|晴风村|桌游讨论|剧本杀|永歌森林|国际新闻|视频与主播|鹅鸭杀/;

// 用户名
const authorRegex = /我的胳膊惨兮兮|一只uu|不可磨灭的坚韧一指|沙比杠精是我孙|從白到黑|送行者yagami|Yingzib|起源之火|卡多雷之见|ekgda|新城梦想v5|广汇股份风格|没人在意的小人物1419|pipikukuku|绝望如此美好|随便你吧好不好|暗区突1灭2打3|去南极吃鲶鱼|用户7193779023|恁真中|你还是太连青了|十万の瞬间|hfhc20|.*河南.*|努力努力再放弃.*|hshdbdkwnc|独角丘比猫|左行右灯的背后|背锅师哥|洪逸超自行宫刑|小猪佩奇与乔治|jx372225411|绝无此种可能|a3844169|liu27a2|问很多问题|PookaPooka|Linkle123|你可能小赚我永远不亏|w17640330020|日炎之星索拉卡|fy3211895|快乐小啊啊|萌萌哒苹果|白月光萧容鱼|苏门答腊群岛|黄河鬼棺急|Zhalsan|河南猎手|接济阶级|hotsava33|芽吹|各凭本事吧|蚂蚁哥哥牛牛牛|ailcx|你说你上班吧几年级|试试雾岛|猜火鸡|永不复归o|alexwd|心之所向心之所往|Kopitee|新手流量密码|无昼无夜无边|lora棒球侠|com4911edu|醉清风（求撩）|学材料的单身汪|那你等吧呢好吧|锌锌坐提|wvmwg|比格沃斯233|法斯菲鲁|光闇萌抚子|兰亭集势/

// 主题帖过滤
if(data){
  for(let i = data.length - 1; i >= 0; i--){
    let subject = data[i].subject
    let forumname = data[i].forumname
    let author = data[i].author
    // 屏蔽黑名单主题帖
    if(subject.match(subjectRegex)){
      data.splice(i, 1)
      continue
    }
    // 屏蔽黑名单子版块
    if(forumname.match(forumnameRegex)){
      data.splice(i, 1)
      continue
    }
    // 屏蔽黑名单用户发布的主题帖
    if(author.match(authorRegex)){
      data.splice(i, 1)
      continue
    }
  }
}

// 楼层过滤
if(body.tsubject){
  for(let y = result.length - 1; y >= 0; y--){
    let username = result[y].author.username
    let content = result[y].content
    // 屏蔽黑名单用户楼层
    if(username.match(authorRegex)){
      result.splice(y, 1)
      continue
    }
    // 屏蔽包含特定关键字的楼层
    if(content.match(contentRegex)){
      result.splice(y, 1)
      continue
    }
  }
}

$done({body: JSON.stringify(body)});
