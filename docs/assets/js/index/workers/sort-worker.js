importScripts("wlog.js");const downloadStats=["https://bhackers.uber.space/srs/v1/download_counter"];onmessage=function(e){wLog("log","Sort worker started.");var o={apps:[],sort:null};"object"==typeof e.data.apps&&"string"==typeof e.data.sort||(wLog("error","Missing arguments for sort worker. Sending back empty data."),postMessage(o));var t=Object.entries(e.data.apps);switch(e.data.sort){case"alphabetical":t.sort((function(e,o){const t=e[1].name.toUpperCase(),r=o[1].name.toUpperCase();return t>r?1:t<r?-1:0}));break;case"popularity":for(const e of downloadStats){var r=new XMLHttpRequest;if(r.open("GET",e,!1),r.setRequestHeader("Content-Type","application/json"),r.send(),r.status>=200&&r.status<300){wLog("log",'Received successful response from "'+e+'".');try{wLog("log","Retrieved downloadCount list.");const e=JSON.parse(r.responseText);t.sort((function(o,t){const r=e[o[1].slug],s=e[t[1].slug];return r>s?1:r<s?-1:0}));break}catch(e){wLog("error","Error parsing response from download count server: "+e)}}else wLog("error","Error making request to download count server: "+xhr2.status)}break;case"categorical":t.sort((function(e,o){const t=e[1].meta.categories[0].toUpperCase(),r=o[1].meta.categories[0].toUpperCase();return t>r?1:t<r?-1:0}))}var s={};for(const e of t)s[e[0]]=e[1];o.apps=s,wLog("log","Sort worker completed!"),postMessage(o)};