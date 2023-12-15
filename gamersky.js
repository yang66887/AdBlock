var body = JSON.parse($response.body);
var listElements = body.listElements;

for (let i in listElements) {
  let temp = listElements[i]
  if(!temp.adId){
    listElements.splice(i, 1)
  }
  if(temp.adId != "0"){
    listElements.splice(i, 1)
  }
  if(temp.title == "EPIC游戏商城假日特卖"){
    listElements.splice(i, 1)
  }
  if(temp.title == "推荐专题"){
    listElements.splice(i, 1)
  }
}

$done({body: JSON.stringify(body)});
