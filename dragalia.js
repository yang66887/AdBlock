var body = JSON.parse($request.body);

var presents = body.presents

presents.length = 0

presents[0] = {"type":"Material","quantity":1,"item":"104001013"}

$done({body: JSON.stringify(body)})
