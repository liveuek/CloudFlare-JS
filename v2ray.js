addEventListener(
"fetch", event => {
let url = new URL(event.request.url);
url.hostname = "自己配置的域名";
url.protocol = "http或者https";
let request = new Request(url, event.request);
event.respondWith(
fetch(request)
)
}
)