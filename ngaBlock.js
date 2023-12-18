var body = JSON.parse($response.body);
var data = body.result.data;
const subjectExp = /董宇辉|南方.*北方.*冷|华为|屏蔽黑名单/;
const forumnameExp = /二手交易|NGATOYS|优惠信息.*/;

if(data){
  for(let i in data){
    let subject = data[i].subject
    let forumname = data[i].forumname
    if(subject.match(subjectExp)){
      data.splice(i, 1)
    }
    if(forumname.match(forumnameExp)){
      data.splice(i, 1)
    }
  }
}

$done({body: JSON.stringify(body)});
