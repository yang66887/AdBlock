var body = JSON.parse($response.body);
var listElements = body.listElements;
var channels = body.channels

if(listElements){
  for (let i = listElements.length - 1; i >= 0; i--) {
    let temp = listElements[i]
    if(temp.type == "huanDeng" || temp.type == "hengFu"){
      listElements.splice(i, 1)
      continue
    }
  }
}

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
