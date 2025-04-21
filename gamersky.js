var body = JSON.parse($response.body);
var listElements = body.listElements;
var channels = body.channels;

//频道
if (channels)
{
  for(let y = channels.length - 1; y >= 0; y--)
  {
    let channel = channels[y];
    if (channel.channelId !== 2 && channel.channelId !== 9 && channel.channelId !== 11 && channel.channelId !== 19)
    {
      channels.splice(y, 1);
      continue;
    }
  }
}

//新闻
if (listElements)
{
  var typeRegex = /huanDeng|hengFu|tieZi/;
  var titleRegex = /最后生还者|刘浩存|哪吒|张颂文|美末|宿命残响|走红|董宇辉|劳斯莱斯|羊蹄山|艾什莉体模|碍事梨体模|东北雨姐|小美人鱼|美人鱼哈莉|黑神话|周鸿祎|进击的巨人|三笠|尘白禁区|王冰冰|郭敬明|绝区零|哈莉*贝利|鸣潮|余承东|问界|鸿蒙|DNF|dnf|逆水寒|贾跃亭|侃爷|赞达亚|原神|星穹铁道/;
  for (let i = listElements.length - 1; i >= 0; i--)
  {
    let temp = listElements[i];
    //标题过滤
    if (temp.title && temp.title.match(titleRegex))
    {
      listElements.splice(i, 1);
      continue;
    }
    //广告ID过滤
    if (temp.adId && temp.adId != "0")
    {
      listElements.splice(i, 1);
      continue;
    }
    //屏蔽幻灯片与横幅
    if (temp.type.match(typeRegex))
    {
      listElements.splice(i, 1);
      continue;
    }
    //屏蔽热销推荐与专题
    if (temp.childElements)
    {
      listElements.splice(i, 1);
      continue;
    }
  }
}

$done({body: JSON.stringify(body)});
