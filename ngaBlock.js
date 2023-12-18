var body = JSON.parse($response.body);
var result = body.result
var data = result.data;
const subjectExp = /董宇辉|南方.*北方.*冷|华为/;
const forumnameExp = /二手交易|NGATOYS|优惠信息.*|影音讨论区|小窗视界|青玉巫婆|游戏综合|生命之杯|汽车俱乐部|篮球|萌萌宠物|狼人杀|娱乐吃瓜|晴风村|桌游讨论|剧本杀|永歌森林|国际新闻|视频与主播|鹅鸭杀/;
const authorExp = /背锅师哥|洪逸超自行宫刑|小猪佩奇与乔治|jx372225411|绝无此种可能|a3844169|liu27a2|问很多问题|PookaPooka|Linkle123|你可能小赚我永远不亏|w17640330020|日炎之星索拉卡|fy3211895|快乐小啊啊|萌萌哒苹果|白月光萧容鱼|苏门答腊群岛|黄河鬼棺急|Zhalsan|河南猎手|接济阶级|hotsava33|芽吹|各凭本事吧|蚂蚁哥哥牛牛牛|ailcx|你说你上班吧几年级|试试雾岛|猜火鸡|永不复归o|alexwd|心之所向心之所往|Kopitee|新手流量密码|无昼无夜无边|lora棒球侠|com4911edu|醉清风（求撩）|学材料的单身汪|那你等吧呢好吧|锌锌坐提|wvmwg|比格沃斯233|法斯菲鲁|光闇萌抚子|兰亭集势/

if(data){
  for(let i = data.length - 1; i >= 0; i--){
    let subject = data[i].subject
    let forumname = data[i].forumname
    let author = data[i].author
    if(subject.match(subjectExp)){
      data.splice(i, 1)
      continue
    }
    if(forumname.match(forumnameExp)){
      data.splice(i, 1)
      continue
    }
    if(author.match(authorExp)){
      data.splice(i, 1)
      continue
    }
  }
}

if(result.tsubject){
  for(let y = result.length - 1; y >= 0; y--){
    let username = result[y].author.username
    if(username.match(authorExp)){
      result.splice(y, 1)
      continue
    }
  }
}

$done({body: JSON.stringify(body)});
