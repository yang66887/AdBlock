var headers = $request.headers

headers['Host'] = 'api.revenuecat.com'
headers['User-Agent'] = 'reader/9 CFNetwork/1410.0.3 Darwin/22.6.0'
headers['X-Platform-Flavor'] = 'flutter'
headers['X-RevenueCat-ETag'] = '7719503507852267'
headers['X-Client-Build-Version'] = '9'
headers['X-Apple-Device-Identifier'] = 'B77D795C-2A0E-493E-B284-380CBEC1A96F'
headers['X-Client-Bundle-ID'] = 'com.valo.reader'
headers['X-Version'] = '4.31.2'
headers['X-Client-Version'] = '2.0.7'
headers['X-Platform-Version'] = 'Version 16.7.2 (Build 20H115)'
headers['X-Observer-Mode-Enabled'] = 'false'
headers['X-Platform'] = 'iOS'
headers['X-Platform-Flavor-Version'] = '6.5.1'
headers['Authorization'] = 'Bearer appl_fiuUDJQdibvHIzRekbFYyghdvEL'
headers['X-Storefront'] = 'USA'
headers['Accept-Language'] = 'zh-CN,zh-Hans;q=0.9'
headers['X-RC-Last-Refresh-Time'] = Date.parse(new Date())
headers['Connection'] = 'keep-alive'
headers['Accept'] = '*/*'
headers['Content-Type'] = 'application/json'
headers['X-Is-Sandbox'] = 'true'
headers['X-StoreKit2-Enabled'] = 'false'
headers['Accept-Encoding'] = 'gzip, deflate, br'

$done({headers})
