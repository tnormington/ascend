"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/ascend/index.html","bf0e85df5db3c223fe77871ca4884a58"],["/ascend/static/css/main.3706a4e6.css","371a38a3c6d70835a335d3028696cc42"],["/ascend/static/js/main.68e5086f.js","8a27ff832f4c9825bd76e6989109413d"],["/ascend/static/media/arrow_left.6201ce41.svg","6201ce41c87df2f0c10bc257a9d41e61"],["/ascend/static/media/arrow_right.1bcd9808.svg","1bcd9808307701e079740b38f89cfdb3"],["/ascend/static/media/ascend_logo.a35f57b4.svg","a35f57b44a80367010af0473060d2bc0"],["/ascend/static/media/dashboard.73d4e38c.png","73d4e38caaa913799dc9d8954ca63758"],["/ascend/static/media/github.d225a93b.svg","d225a93bd8fdbcb4cca4a5dac931be19"],["/ascend/static/media/hero_bg.ff8c8752.jpg","ff8c87520e6249f6ab4bb91cbf32c927"],["/ascend/static/media/instagram.f22e8919.svg","f22e891969c6b0cdd5e3d232f5b7ab65"],["/ascend/static/media/leaderboards.1d024916.png","1d02491614cb14aec1a827c97b6f3c1f"],["/ascend/static/media/logo_letter.1902f20d.svg","1902f20db84f7098ba3d5783a20e4ab9"],["/ascend/static/media/progress.1fae17b2.png","1fae17b2067ddbaba148dfb2ff1305f1"],["/ascend/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/ascend/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/ascend/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/ascend/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/ascend/static/media/twitter.e5ffe5fa.svg","e5ffe5facb5ae56630f75a1f6c6fea94"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));var n="/ascend/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});