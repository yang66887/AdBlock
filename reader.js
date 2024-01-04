var headers = $request.headers

headers['X-Observer-Mode-Enabled'] = 'true'

headers['X-Client-Build-Version'] = '0'

headers['X-Client-Version'] = '2.0.1'

//headers[''] = 

$done({headers})
