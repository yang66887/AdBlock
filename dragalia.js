var body = JSON.parse($response.body);

var types = body.types

var a_items = body.availableItems

types[4] = {"type" : "rupies", "hasQuantity" : "True"}

a_items.rupies = [{"id" : 0}]

$done({body: JSON.stringify(body)})
