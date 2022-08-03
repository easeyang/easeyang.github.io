import{_ as e,o as i,c as n,a as d}from"./app.821e2fee.js";const s={},r=d(`<h2 id="\u5B98\u7F51\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u5B98\u7F51\u5730\u5740" aria-hidden="true">#</a> \u5B98\u7F51\u5730\u5740</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://docs.docker.com/engine/
https://hub.docker.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5B89\u88C5
curl -fsSL https://get.docker.com -o get-docker.sh
./get-docker.sh
// \u8BBE\u7F6E\u7EC4
sudo groupadd docker
sudo usermod -aG docker $USER
// \u6CE8\u518C\u5F00\u673A\u542F\u52A8docker
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker version
docker info
docker ps  \u52A0 -a\u53C2\u6570\u5217\u51FA\u6240\u6709\u5BB9\u5668\u5305\u62EC\u5DF2\u7ECF\u505C\u6B62\u7684\u5BB9\u5668
docker images
docker pull [id] \u62C9\u53D6\u955C\u50CF 
docker run [id] \u8FD0\u884C\u955C\u50CF 
docker run \u5E38\u7528\u53C2\u6570\uFF1A
  -it \u8FDB\u5165\u5BB9\u5668\u5F00\u542F\u4E00\u4E2A\u4EA4\u4E92\u5F0F\u64CD\u4F5C\u7684shell
  -d \u8BA9\u5BB9\u5668\u5728\u540E\u53F0\u8FD0\u884C
  --name \u4E3A\u5BB9\u5668\u8D77\u4E00\u4E2A\u540D\u5B57
  --rm \u4E0D\u4FDD\u5B58\u5BB9\u5668\u8FD0\u884C\u5B8C\u6BD5\u540E\u81EA\u52A8\u6E05\u9664
docker rmi [\u955C\u50CF\u540D\u79F0] \u79FB\u9664\u955C\u50CF
docker exec -it [id] bash \u5728\u5BB9\u5668\u5185\u6267\u884C\u4E00\u4E2A\u7A0B\u5E8F\u548Cdocker run\u5DEE\u4E0D\u591A\u53EA\u4E0D\u8FC7\u524D\u8005\u4E0D\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5BB9\u5668
docker stop \u5F3A\u5236\u505C\u6B62\u5BB9\u5668
docker start \u518D\u6B21\u542F\u52A8\u5DF2\u7ECF\u505C\u6B62\u7684\u5BB9\u5668
docker rm \u5F7B\u5E95\u5220\u9664\u5BB9\u5668\uFF0C\u4F46\u662F\u4E0D\u79FB\u9664\u955C\u50CF
docker logs [id] \u67E5\u770B\u5BB9\u5668\u65E5\u5FD7
docker inspect [id] \u67E5\u770B\u5BB9\u5668\u4FE1\u606F


// \u8FD4\u56DE\u5BBF\u4E3B\u673A\u4E0D\u9000\u51FA\u5BB9\u5668
exit \u9000\u51FA\u5BB9\u5668
ctrl + p + q 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u64CD\u4F5C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u62F7\u8D1D\u5BB9\u5668\u6570\u636E\u5230\u5BBF\u4E3B\u673A
docker cp [id]:[path] path 
// \u62F7\u8D1D\u5BBF\u4E3B\u673A\u6570\u636E\u5230\u5BB9\u5668
docker cp path [id]:[path]  
// \u4FDD\u5B58\u955C\u50CF
docker export [id] &gt; [filename].tar
eg: docker export ubuntu easeyang.ubuntu.tar
// \u6062\u590D\u955C\u50CF
docker import file|URL|- [REPOSITORY[:TAG]]
eg: docker import easeyang.ubuntu.tar easeyang/ubuntu:1.0
// commit \u955C\u50CF
docker commit [OPTIONS] [id][REPOSITORY[:TAG]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),a=[r];function l(c,v){return i(),n("div",null,a)}var u=e(s,[["render",l],["__file","01\u5E38\u7528\u547D\u4EE4.html.vue"]]);export{u as default};
