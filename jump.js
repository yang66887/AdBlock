var body = JSON.parse($response.body);

body = {"success": true, "code": 0, "data": {}, "msg": "success"}

$done({body: JSON.stringify(body)});
