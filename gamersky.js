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
}

$done({body: JSON.stringify(body)});
