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
  var typeRegex = /huanDeng|hengFu/;
  for (let i = listElements.length - 1; i >= 0; i--)
  {
    let temp = listElements[i];
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
