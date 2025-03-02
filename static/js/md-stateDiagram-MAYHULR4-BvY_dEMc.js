import{s as W,a as N,b as P}from"./md-chunk-7U56Z5CX-DjfTtCId.js";import{_ as u,d as t,j as H,l as S,k as C,e as z,K as U,Q as F,u as O}from"./md-index-aZoA3MBI.js";import{G as J}from"./md-graph-BGPfUT8a.js";import{l as X}from"./md-layout-XTJ94A6I.js";import"./md-chunk-5HRBRIJM-CEON2thp.js";import"./md-_baseUniq-BId0yKIp.js";import"./md-_basePickBy-RvXSWsYo.js";var L={},D=u((e,i)=>{L[e]=i},"set"),Y=u(e=>L[e],"get"),G=u(()=>Object.keys(L),"keys"),I=u(()=>G().length,"size"),$={get:Y,set:D,keys:G,size:I},j=u(e=>e.append("circle").attr("class","start-state").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit).attr("cy",t().state.padding+t().state.sizeUnit),"drawStartState"),q=u(e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",t().state.textHeight).attr("class","divider").attr("x2",t().state.textHeight*2).attr("y1",0).attr("y2",0),"drawDivider"),K=u((e,i)=>{const d=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+2*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),o=d.node().getBBox();return e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",o.width+2*t().state.padding).attr("height",o.height+2*t().state.padding).attr("rx",t().state.radius),d},"drawSimpleState"),Q=u((e,i)=>{const d=u(function(l,B,m){const v=l.append("tspan").attr("x",2*t().state.padding).text(B);m||v.attr("dy",t().state.textHeight)},"addTspan"),r=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+1.3*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.descriptions[0]).node().getBBox(),g=r.height,p=e.append("text").attr("x",t().state.padding).attr("y",g+t().state.padding*.4+t().state.dividerMargin+t().state.textHeight).attr("class","state-description");let a=!0,s=!0;i.descriptions.forEach(function(l){a||(d(p,l,s),s=!1),a=!1});const y=e.append("line").attr("x1",t().state.padding).attr("y1",t().state.padding+g+t().state.dividerMargin/2).attr("y2",t().state.padding+g+t().state.dividerMargin/2).attr("class","descr-divider"),x=p.node().getBBox(),c=Math.max(x.width,r.width);return y.attr("x2",c+3*t().state.padding),e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",c+2*t().state.padding).attr("height",x.height+g+2*t().state.padding).attr("rx",t().state.radius),e},"drawDescrState"),Z=u((e,i,d)=>{const o=t().state.padding,r=2*t().state.padding,g=e.node().getBBox(),p=g.width,a=g.x,s=e.append("text").attr("x",0).attr("y",t().state.titleShift).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),x=s.node().getBBox().width+r;let c=Math.max(x,p);c===p&&(c=c+r);let l;const B=e.node().getBBox();i.doc,l=a-o,x>p&&(l=(p-c)/2+o),Math.abs(a-B.x)<o&&x>p&&(l=a-(x-p)/2);const m=1-t().state.textHeight;return e.insert("rect",":first-child").attr("x",l).attr("y",m).attr("class",d?"alt-composit":"composit").attr("width",c).attr("height",B.height+t().state.textHeight+t().state.titleShift+1).attr("rx","0"),s.attr("x",l+o),x<=p&&s.attr("x",a+(c-r)/2-x/2+o),e.insert("rect",":first-child").attr("x",l).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",t().state.textHeight*3).attr("rx",t().state.radius),e.insert("rect",":first-child").attr("x",l).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",B.height+3+2*t().state.textHeight).attr("rx",t().state.radius),e},"addTitleAndBox"),V=u(e=>(e.append("circle").attr("class","end-state-outer").attr("r",t().state.sizeUnit+t().state.miniPadding).attr("cx",t().state.padding+t().state.sizeUnit+t().state.miniPadding).attr("cy",t().state.padding+t().state.sizeUnit+t().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit+2).attr("cy",t().state.padding+t().state.sizeUnit+2)),"drawEndState"),tt=u((e,i)=>{let d=t().state.forkWidth,o=t().state.forkHeight;if(i.parentId){let r=d;d=o,o=r}return e.append("rect").style("stroke","black").style("fill","black").attr("width",d).attr("height",o).attr("x",t().state.padding).attr("y",t().state.padding)},"drawForkJoinState"),et=u((e,i,d,o)=>{let r=0;const g=o.append("text");g.style("text-anchor","start"),g.attr("class","noteText");let p=e.replace(/\r\n/g,"<br/>");p=p.replace(/\n/g,"<br/>");const a=p.split(z.lineBreakRegex);let s=1.25*t().state.noteMargin;for(const y of a){const x=y.trim();if(x.length>0){const c=g.append("tspan");if(c.text(x),s===0){const l=c.node().getBBox();s+=l.height}r+=s,c.attr("x",i+t().state.noteMargin),c.attr("y",d+r+1.25*t().state.noteMargin)}}return{textWidth:g.node().getBBox().width,textHeight:r}},"_drawLongText"),at=u((e,i)=>{i.attr("class","state-note");const d=i.append("rect").attr("x",0).attr("y",t().state.padding),o=i.append("g"),{textWidth:r,textHeight:g}=et(e,0,0,o);return d.attr("height",g+2*t().state.noteMargin),d.attr("width",r+t().state.noteMargin*2),d},"drawNote"),_=u(function(e,i){const d=i.id,o={id:d,label:i.id,width:0,height:0},r=e.append("g").attr("id",d).attr("class","stateGroup");i.type==="start"&&j(r),i.type==="end"&&V(r),(i.type==="fork"||i.type==="join")&&tt(r,i),i.type==="note"&&at(i.note.text,r),i.type==="divider"&&q(r),i.type==="default"&&i.descriptions.length===0&&K(r,i),i.type==="default"&&i.descriptions.length>0&&Q(r,i);const g=r.node().getBBox();return o.width=g.width+2*t().state.padding,o.height=g.height+2*t().state.padding,$.set(d,o),o},"drawState"),A=0,it=u(function(e,i,d){const o=u(function(s){switch(s){case N.relationType.AGGREGATION:return"aggregation";case N.relationType.EXTENSION:return"extension";case N.relationType.COMPOSITION:return"composition";case N.relationType.DEPENDENCY:return"dependency"}},"getRelationType");i.points=i.points.filter(s=>!Number.isNaN(s.y));const r=i.points,g=U().x(function(s){return s.x}).y(function(s){return s.y}).curve(F),p=e.append("path").attr("d",g(r)).attr("id","edge"+A).attr("class","transition");let a="";if(t().state.arrowMarkerAbsolute&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),p.attr("marker-end","url("+a+"#"+o(N.relationType.DEPENDENCY)+"End)"),d.title!==void 0){const s=e.append("g").attr("class","stateLabel"),{x:y,y:x}=O.calcLabelPosition(i.points),c=z.getRows(d.title);let l=0;const B=[];let m=0,v=0;for(let f=0;f<=c.length;f++){const h=s.append("text").attr("text-anchor","middle").text(c[f]).attr("x",y).attr("y",x+l),w=h.node().getBBox();m=Math.max(m,w.width),v=Math.min(v,w.x),S.info(w.x,y,x+l),l===0&&(l=h.node().getBBox().height,S.info("Title height",l,x)),B.push(h)}let E=l*c.length;if(c.length>1){const f=(c.length-1)*l*.5;B.forEach((h,w)=>h.attr("y",x+w*l-f)),E=l*c.length}const n=s.node().getBBox();s.insert("rect",":first-child").attr("class","box").attr("x",y-m/2-t().state.padding/2).attr("y",x-E/2-t().state.padding/2-3.5).attr("width",m+t().state.padding).attr("height",E+t().state.padding),S.info(n)}A++},"drawEdge"),b,T={},nt=u(function(){},"setConf"),rt=u(function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"insertMarkers"),st=u(function(e,i,d,o){b=t().state;const r=t().securityLevel;let g;r==="sandbox"&&(g=H("#i"+i));const p=r==="sandbox"?H(g.nodes()[0].contentDocument.body):H("body"),a=r==="sandbox"?g.nodes()[0].contentDocument:document;S.debug("Rendering diagram "+e);const s=p.select(`[id='${i}']`);rt(s);const y=o.db.getRootDoc();R(y,s,void 0,!1,p,a,o);const x=b.padding,c=s.node().getBBox(),l=c.width+x*2,B=c.height+x*2,m=l*1.75;C(s,B,m,b.useMaxWidth),s.attr("viewBox",`${c.x-b.padding}  ${c.y-b.padding} `+l+" "+B)},"draw"),dt=u(e=>e?e.length*b.fontSizeFactor:1,"getLabelWidth"),R=u((e,i,d,o,r,g,p)=>{const a=new J({compound:!0,multigraph:!0});let s,y=!0;for(s=0;s<e.length;s++)if(e[s].stmt==="relation"){y=!1;break}d?a.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:y?1:b.edgeLengthFactor,nodeSep:y?1:50,isMultiGraph:!0}):a.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:y?1:b.edgeLengthFactor,nodeSep:y?1:50,ranker:"tight-tree",isMultiGraph:!0}),a.setDefaultEdgeLabel(function(){return{}}),p.db.extract(e);const x=p.db.getStates(),c=p.db.getRelations(),l=Object.keys(x);for(const n of l){const f=x[n];d&&(f.parentId=d);let h;if(f.doc){let w=i.append("g").attr("id",f.id).attr("class","stateGroup");h=R(f.doc,w,f.id,!o,r,g,p);{w=Z(w,f,o);let k=w.node().getBBox();h.width=k.width,h.height=k.height+b.padding/2,T[f.id]={y:b.compositTitleSize}}}else h=_(i,f,a);if(f.note){const w={descriptions:[],id:f.id+"-note",note:f.note,type:"note"},k=_(i,w,a);f.note.position==="left of"?(a.setNode(h.id+"-note",k),a.setNode(h.id,h)):(a.setNode(h.id,h),a.setNode(h.id+"-note",k)),a.setParent(h.id,h.id+"-group"),a.setParent(h.id+"-note",h.id+"-group")}else a.setNode(h.id,h)}S.debug("Count=",a.nodeCount(),a);let B=0;c.forEach(function(n){B++,S.debug("Setting edge",n),a.setEdge(n.id1,n.id2,{relation:n,width:dt(n.title),height:b.labelHeight*z.getRows(n.title).length,labelpos:"c"},"id"+B)}),X(a),S.debug("Graph after layout",a.nodes());const m=i.node();a.nodes().forEach(function(n){n!==void 0&&a.node(n)!==void 0?(S.warn("Node "+n+": "+JSON.stringify(a.node(n))),r.select("#"+m.id+" #"+n).attr("transform","translate("+(a.node(n).x-a.node(n).width/2)+","+(a.node(n).y+(T[n]?T[n].y:0)-a.node(n).height/2)+" )"),r.select("#"+m.id+" #"+n).attr("data-x-shift",a.node(n).x-a.node(n).width/2),g.querySelectorAll("#"+m.id+" #"+n+" .divider").forEach(h=>{const w=h.parentElement;let k=0,M=0;w&&(w.parentElement&&(k=w.parentElement.getBBox().width),M=parseInt(w.getAttribute("data-x-shift"),10),Number.isNaN(M)&&(M=0)),h.setAttribute("x1",0-M+8),h.setAttribute("x2",k-M-8)})):S.debug("No Node "+n+": "+JSON.stringify(a.node(n)))});let v=m.getBBox();a.edges().forEach(function(n){n!==void 0&&a.edge(n)!==void 0&&(S.debug("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(a.edge(n))),it(i,a.edge(n),a.edge(n).relation))}),v=m.getBBox();const E={id:d||"root",label:d||"root",width:0,height:0};return E.width=v.width+2*b.padding,E.height=v.height+2*b.padding,S.debug("Doc rendered",E,a),E},"renderDoc"),ot={setConf:nt,draw:st},ft={parser:W,db:N,renderer:ot,styles:P,init:u(e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,N.clear()},"init")};export{ft as diagram};
