function FindProxyForURL(url, host) {
	var PROXY_URL = "147.185.221.21:20490; DIRECT"	
	if (isStreamFabEndpoint(url)) 
		return PROXY_URL;
	
	if (isNetflixLoginWebAPI(url)) 
		return PROXY_URL
	
	if (isNetflixVideoHost(host)) return 'DIRECT'
	
	if (isNetflixHost(host)) return PROXY_URL
	
    if (url.substring(0, 4) == "ftp:")
        return "DIRECT";

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

function isStreamFabEndpoint(url) {
	
	if(shExpMatch(url, "*.dvdfab.cn*")) return true
	if(shExpMatch(url, "https://*/auth/v*")) return true
	if(shExpMatch(url, "https://*/client/command*")) return true
	return false
	
}
