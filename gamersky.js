var body = JSON.parse($response.body);
var listElements = body.listElements;
var channels = body.channels

if(listElements){
  for (let i = listElements.length - 1; i >= 0; i--) {
    let temp = listElements[i]
    if(!temp.adId && type != "pingLun"){
      listElements.splice(i, 1)
    }
    if(temp.adId != "0" && type != "pingLun"){
      listElements.splice(i, 1)
    }
    if(temp.title == "EPIC游戏商城假日特卖"){
      listElements.splice(i, 1)
    }
  }
}

if(channels){
  for(let y = channels.length - 1; y >= 0; y--) {
    let channel = channels[y]
    if(channel.channelId != 2 && channel.channelId != 9 && channel.channelId != 11 && channel.channelId != 19){
      channels.splice(y, 1)
    }
  }
}

$done({body: JSON.stringify(body)});
