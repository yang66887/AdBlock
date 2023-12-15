var body = JSON.parse($response.body);
var listElements = body.listElements;
var tempList = [];
for (var i in listElements) {
  if(listElements[i].adId == "0")
  {
    tempList.push(listElements[i]);
  }
}
listElements = tempList;
$done({body: JSON.stringify(body)});
