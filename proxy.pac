function FindProxyForURL(url, host) {
	var PROXY_URL = "147.185.221.21:20490; DIRECT"	
	
	if (isNetflixLoginWebAPI(url)) 
		return PROXY_URL
	
	if (isNetflixVideoHost(host)) return 'DIRECT'
	
	if (isNetflixHost(host)) return PROXY_URL
	
    if (url.substring(0, 4) == "ftp:")
        return "DIRECT";

//    if (
//        isInNet(host, "127.0.0.0", "255.0.0.0") ||
//        isInNet(host, "10.0.0.0", "255.0.0.0") ||
//        isInNet(host, "172.16.0.0", "255.240.0.0") ||
//        isInNet(host, "192.168.0.0", "255.255.0.0") ||
//        isInNet(host, "169.254.0.0", "255.255.0.0")
//    )
//        return "DIRECT";

    return "DIRECT";
}

function isNetflixLoginWebAPI(url) {
	return shExpMatch(url, 'https://www.netflix.com/api/aui/pathEvaluator/web*')
}

function isNetflixHost(host) {
	return shExpMatch(host, '*.netflix.com*')
}

function isNetflixVideoHost(host) {
	return shExpMatch(host, '*.nflxvideo.net*')
}