var body = JSON.parse($response.body);
var listElements = body.listElements;

function deleteListAd(list){
  let tempList = []
  for (let i in list) {
    let temp = list[i]
    if(temp.adId == "0" && temp.childElements == null)
    {
      tempList.push(temp)
    }
  }
  return tempList
}

listElements = deleteListAd(listElements)
$done({body: JSON.stringify(body)});
