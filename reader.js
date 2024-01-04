var headers = $request.headers

headers['X-Observer-Mode-Enabled'] = 'true'

$done({headers})
