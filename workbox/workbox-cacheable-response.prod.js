this.workbox=this.workbox||{},this.workbox.cacheableResponse=function(s){"use strict";try{self["workbox:cacheable-response:6.5.0"]&&_()}catch(s){}class t{constructor(s={}){this.O=s.statuses,this._=s.headers}isResponseCacheable(s){let t=!0;return this.O&&(t=this.O.includes(s.status)),this._&&t&&(t=Object.keys(this._).some((t=>s.headers.get(t)===this._[t]))),t}}return s.CacheableResponse=t,s.CacheableResponsePlugin=class{constructor(s){this.cacheWillUpdate=async({response:s})=>this.G.isResponseCacheable(s)?s:null,this.G=new t(s)}},s}({});
//# sourceMappingURL=workbox-cacheable-response.prod.js.map
