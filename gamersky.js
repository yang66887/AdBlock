var body = JSON.parse($response.body);
var listElements = body.listElements;
var channels = body.channels;

//新闻
if(listElements){
  for (let i = listElements.length - 1; i >= 0; i--) {
    let temp = listElements[i]
    if(temp.type == "huanDeng_Ai" || temp.type == "huanDeng" || temp.type == "hengFu"){
      listElements.splice(i, 1)
      continue
    }
    if(temp.adId && temp.adId != "0"){
      listElements.splice(i, 1)
      continue
    }
  }
}

//频道
if(channels){
  for(let y = channels.length - 1; y >= 0; y--) {
    let channel = channels[y]
    if(channel.channelId != 2 && channel.channelId != 9 && channel.channelId != 11 && channel.channelId != 19){
      channels.splice(y, 1)
      continue
    }
  }
}

$done({body: JSON.stringify(body)});
