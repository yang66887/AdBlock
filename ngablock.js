var body = JSON.parse($response.body);
var result = body.result;
var data = result.data;

// 主题帖名
const subjectRegex = /labubu|LABUBU|泡泡玛特|Labubu|拉布布|王宁|哪吒|潘宏|潘虹|艾特|羽毛|黑神话|黑猴|余承东|余大嘴|鸿蒙|M9|m9|问界|M7|华为|m7|海狗|higo|已为你隐藏黑名单发布的内容|怎么样|假如|如果|吗|毒点|女拳|女权|小土豆|女.*pua|pua.*女|女.*觉醒|厌女|小仙女|小红书|彩礼|xxn|XXN|XxN|xXn|Xxn|xxN|ghg|xhs|董宇辉|南.*北|北.*南|华为/;

// 楼层内容关键字
const contentRegex = /余承东|余大嘴|问界|M7|华为|m7|海狗|higo|毒点|已为你隐藏黑名单发布的内容/;

// 子版块
const forumnameRegex = /弱智吧吧主|二手交易|NGATOYS|优惠信息.*|影音讨论区|小窗视界|青玉巫婆|游戏综合|生命之杯|汽车俱乐部|篮球|萌萌宠物|狼人杀|娱乐吃瓜|晴风村|桌游讨论|剧本杀|永歌森林|国际新闻|视频与主播|鹅鸭杀/;

// 用户名
const authorRegex = /一月三十|DysonSpherexz|你到底二不二|猫叔0518|泥潭是中专论坛|碰就痒|重生之冰冻罗非鱼9527|Enhanz|玉树独上|净松照思|初上天涯|大吹似黑|数千昼夜|BeNolas|暗区突1灭2打3|Sethvgjj|Myasder|关于郑州我想的全是你|人到三十常叹气|漂泊的兔子|合看3798|theapc|ailcx|殇物语ouo|小米是只白猫|大漠日色|哪里哪里呀|地煮的冬瓜|ggffhhjj|azpp57302|scandinac|macima0800|溶溶月光|navyooo|闻香识包子|炖煮红尘|都特么赢麻了|csharp工控教父|猜火鸡|悲伤的色调|热糖豆|两个老公|南方小菜|JIONGxi|星与星梦|奥迪A3暴打极氪X|雷音梵唱|爱的开始便是错|csharp工控教父|洛克撒血风|伞下一株小草|提灯老祖|LLF2019|女神丶为你而战|叮咚鸡叮咚鸡123|发条一条狗橙|光之惩戒英卡洛斯|许愿元|法丝菲鲁|68年的老中医|UID64544820|穷得掉渣子|北剑临威|如梦似幻2000|yfyf12|我查查我查查|枫舞艾萨拉|我的胳膊惨兮兮|一只uu|不可磨灭的坚韧一指|沙比杠精是我孙|從白到黑|送行者yagami|Yingzib|起源之火|卡多雷之见|ekgda|新城梦想v5|广汇股份风格|没人在意的小人物1419|pipikukuku|绝望如此美好|随便你吧好不好|暗区突1灭2打3|去南极吃鲶鱼|用户7193779023|恁真中|你还是太连青了|十万の瞬间|hfhc20|.*河南.*|努力努力再放弃.*|hshdbdkwnc|独角丘比猫|左行右灯的背后|背锅师哥|洪逸超自行宫刑|小猪佩奇与乔治|jx372225411|绝无此种可能|a3844169|liu27a2|问很多问题|PookaPooka|Linkle123|你可能小赚我永远不亏|w17640330020|日炎之星索拉卡|fy3211895|快乐小啊啊|萌萌哒苹果|白月光萧容鱼|苏门答腊群岛|黄河鬼棺急|Zhalsan|河南猎手|接济阶级|hotsava33|芽吹|各凭本事吧|蚂蚁哥哥牛牛牛|你说你上班吧几年级|试试雾岛|猜火鸡|永不复归o|alexwd|心之所向心之所往|Kopitee|新手流量密码|无昼无夜无边|lora棒球侠|com4911edu|醉清风（求撩）|学材料的单身汪|那你等吧呢好吧|锌锌坐提|wvmwg|比格沃斯233|光闇萌抚子|兰亭集势/

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
    //let voteGood = result[y].vote_good
    //点赞置空
    //if(voteGood >= 1){
    //  body.result[y].vote_good = 0
    //}
    // 屏蔽黑名单用户楼层
    if(username.match(authorRegex)){
      result.splice(y, 1)
      continue
    }
    // 屏蔽包含特定关键字的楼层
    if(content.match(contentRegex) || content.match(authorRegex)){
      result.splice(y, 1)
      continue
    }
  }
}

// 热评过滤
if(body.hot_post && body.hot_post.length >= 1){
  for(let x = body.hot_post.length - 1; x >= 0; x--){
    let username = body.hot_post[x].author.username
    let content = body.hot_post[x].content
    // 屏蔽黑名单用户楼层
    if(username.match(authorRegex)){
      body.hot_post.splice(x, 1)
      continue
    }
    // 屏蔽包含特定关键字的楼层
    if(content.match(contentRegex) || content.match(authorRegex)){
      body.hot_post.splice(x, 1)
      continue
    }
  }
}

$done({body: JSON.stringify(body)});
