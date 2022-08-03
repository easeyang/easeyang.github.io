import{_ as n,o as e,c as i,a as d}from"./app.821e2fee.js";const c={},a=d(`<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u51C6\u5907nginx.conf \u548C default.conf \u653E\u5230\u5BF9\u5E94\u7684\u4F4D\u7F6E
// \u8FD9\u4E24\u4E2A\u6587\u4EF6\u53EF\u4EE5\u5148\u542F\u52A8\u4E00\u4E2Anginx\u5BB9\u5668\u5145\u5BB9\u5668\u4E2D\u7528docker cp \u62F7\u8D1D\u5230\u5BBF\u4E3B\u673A\u4E0A
docker run -d --name n1 nginx:alpine
docker cp n1:/etc/nginx/nginx.conf /app/nginx/nginx.conf
docker cp n1:/etc/nginx/conf.d/default.conf /app/nginx/conf
dcoker rm -f n1

// \u542F\u52A8\u5BB9\u5668
docker run -d --name n1 \\
-v /app/nginx/nginx.conf:/etc/nginx/nginx.conf \\
-v /app/nginx/logs:/var/log/nginx \\
-v /app/nginx/conf:/etc/nginx/conf.d \\
-v /data/blog:/data/blog \\
-p 80:80 \\
nginx:alpine

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[a];function s(r,v){return e(),i("div",null,l)}var t=n(c,[["render",s],["__file","02\u5E38\u7528\u8F6F\u4EF6\u5B89\u88C5.html.vue"]]);export{t as default};
