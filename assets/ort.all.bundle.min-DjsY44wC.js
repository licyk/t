import{i as __require}from"./rolldown-runtime-Bhmf7a9N.js";import{t as __vitePreload}from"./preload-helper-DCPuqS1u.js";var Q2=Object.create,li=Object.defineProperty,eI=Object.getOwnPropertyDescriptor,tI=Object.getOwnPropertyNames,nI=Object.getPrototypeOf,rI=Object.prototype.hasOwnProperty,Ps=(e=>typeof __require<`u`?__require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof __require<`u`?__require:e)[t]}):e)(function(e){if(typeof __require<`u`)return __require.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),N=(e,t)=>()=>(e&&(t=e(e=0)),t),re=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Sr=(e,t)=>{for(var n in t)li(e,n,{get:t[n],enumerable:!0})},Bp=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of tI(t))!rI.call(e,i)&&i!==n&&li(e,i,{get:()=>t[i],enumerable:!(r=eI(t,i))||r.enumerable});return e},ye=(e,t,n)=>(n=e==null?{}:Q2(nI(e)),Bp(t||!e||!e.__esModule?li(n,`default`,{value:e,enumerable:!0}):n,e)),Xr=e=>Bp(li({},`__esModule`,{value:!0}),e),ci,$r,ar,oI,Fp,Es=N(()=>{ci=new Map,$r=[],ar=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=ci.get(e);if(r===void 0)ci.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=$r.indexOf(e);t!==-1&&$r.splice(t,1);for(let t=0;t<$r.length;t++)if(ci.get($r[t]).priority<=n){$r.splice(t,0,e);return}$r.push(e)}return}throw TypeError(`not a valid backend`)},oI=async e=>{let t=ci.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Fp=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?$r:n,i,a=[],o=new Set;for(let e of r){let t=await oI(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),Vp=N(()=>{Es()}),Gp,Up=N(()=>{Gp=`1.26.0`}),Wp,st,Cs=N(()=>{Up(),Wp=`warning`,st={wasm:{},webgl:{},webgpu:{},versions:{common:Gp},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);Wp=e}},get logLevel(){return Wp}},Object.defineProperty(st,`logLevel`,{enumerable:!0})}),ce,Hp=N(()=>{Cs(),ce=st}),qp,jp,Kp=N(()=>{qp=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}else throw Error(`Can not access image data`)},jp=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=4,p=0,m=1,h=2,g=3,_=0,v=d,y=d*2,b=-1;s===`RGBA`?(_=0,v=d,y=d*2,b=d*3):s===`RGB`?(_=0,v=d,y=d*2):s===`RBG`&&(_=0,y=d,v=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;p+=4,m+=4,h+=4,g+=4,t++)r.data[p]=(e.data[_++]-u[0])*l[0],r.data[m]=(e.data[v++]-u[1])*l[1],r.data[h]=(e.data[y++]-u[2])*l[2],r.data[g]=b===-1?255:(e.data[b++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),Ds,Xp,Zp,Jp,Yp,Qp,ef=N(()=>{di(),Ds=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new pt(`float32`,u,[1,4,n,r]):new pt(`float32`,u,[1,3,n,r])},Xp=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,Ds(o,s)}else throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(Ds(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return Ds(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},Zp=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new pt({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},Jp=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new pt({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},Yp=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new pt({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},Qp=(e,t,n)=>new pt({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),Ar,wo,tf,nf,rf=N(()=>{Ar=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),wo=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),tf=!1,nf=()=>{if(!tf){tf=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(Ar.set(`int64`,BigInt64Array),wo.set(BigInt64Array,`int64`)),t&&(Ar.set(`uint64`,BigUint64Array),wo.set(BigUint64Array,`uint64`)),r?(Ar.set(`float16`,n),wo.set(n,`float16`)):Ar.set(`float16`,Uint16Array)}}}),of,af,sf=N(()=>{di(),of=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},af=(e,t)=>{switch(e.location){case`cpu`:return new pt(e.type,e.data,t);case`cpu-pinned`:return new pt({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new pt({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new pt({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new pt({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),pt,di=N(()=>{Kp(),ef(),rf(),sf(),pt=class{constructor(e,t,n){nf();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=Ar.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=Ar.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=wo.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=of(i);if(this.cpuData&&a!==this.cpuData.length&&!((r===`uint4`||r===`int4`)&&Math.ceil(a/2)===this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Xp(e,t)}static fromTexture(e,t){return Zp(e,t)}static fromGpuBuffer(e,t){return Jp(e,t)}static fromMLTensor(e,t){return Yp(e,t)}static fromPinnedBuffer(e,t,n){return Qp(e,t,n)}toDataURL(e){return qp(this,e)}toImageData(e){return jp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return af(this,e)}}}),$t,ks=N(()=>{di(),$t=pt}),pi,uf,At,_t,sr,ur,Ns=N(()=>{Cs(),pi=(e,t)=>{(typeof st.trace>`u`?!st.wasm.trace:!st.trace)||console.timeStamp(`${e}::ORT::${t}`)},uf=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),pi(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},At=e=>{(typeof st.trace>`u`?!st.wasm.trace:!st.trace)||uf(`BEGIN`,e)},_t=e=>{(typeof st.trace>`u`?!st.wasm.trace:!st.trace)||uf(`END`,e)},sr=e=>{(typeof st.trace>`u`?!st.wasm.trace:!st.trace)||console.time(`ORT::${e}`)},ur=e=>{(typeof st.trace>`u`?!st.wasm.trace:!st.trace)||console.timeEnd(`ORT::${e}`)}}),fi,lf=N(()=>{Es(),ks(),Ns(),fi=class e{constructor(e){this.handler=e}async run(e,t,n){At(),sr(`InferenceSession.run`);let r={},i={};if(typeof e!=`object`||!e||e instanceof $t||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof $t)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof $t)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];t instanceof $t?s[e]=t:s[e]=new $t(t.type,t.data,t.dims)}return ur(`InferenceSession.run`),_t(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){At(),sr(`InferenceSession.create`);let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await Fp(o),l=await s.createInferenceSessionHandler(a,c);return ur(`InferenceSession.create`),_t(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),iI,cf=N(()=>{lf(),iI=fi}),df=N(()=>{}),pf=N(()=>{}),ff=N(()=>{}),hf=N(()=>{}),Ls={};Sr(Ls,{InferenceSession:()=>iI,TRACE:()=>pi,TRACE_EVENT_BEGIN:()=>sr,TRACE_EVENT_END:()=>ur,TRACE_FUNC_BEGIN:()=>At,TRACE_FUNC_END:()=>_t,Tensor:()=>$t,env:()=>ce,registerBackend:()=>ar});var ft=N(()=>{Vp(),Hp(),cf(),ks(),df(),pf(),Ns(),ff(),hf()});function lr(e,t,n,r){if(t===void 0)return sI(e);if(n===void 0)hi(e,t,1);else if(typeof n==`number`&&r===void 0)hi(e,t,n);else if(typeof n==`string`&&r===void 0)hi(e,n,1,t);else if(typeof n==`string`&&typeof r==`number`)hi(e,n,r,t);else throw TypeError(`input is valid`)}function sI(e){return{verbose:lr.verbose.bind(null,e),info:lr.info.bind(null,e),warning:lr.warning.bind(null,e),error:lr.error.bind(null,e),fatal:lr.fatal.bind(null,e)}}function hi(e,t,n,r){let i=vo[r||``]||vo[``];gf[e]<gf[i.minimalSeverity]||(i.logDateTime&&(t=`${new Date().toISOString()}|${t}`),i.logSourceLocation,aI[i.provider].log(e,t,r))}var Rs,zs,gf,aI,bf,vo,Be,gi,bi,yi,mi,Dt=N(()=>{Rs=class{log(e,t,n){}},zs=class{log(e,t,n){console.log(`${this.color(e)} ${n?`\x1B[35m`+n+`\x1B[0m `:``}${t}`)}color(e){switch(e){case`verbose`:return`\x1B[34;40mv\x1B[0m`;case`info`:return`\x1B[32mi\x1B[0m`;case`warning`:return`\x1B[30;43mw\x1B[0m`;case`error`:return`\x1B[31;40me\x1B[0m`;case`fatal`:return`\x1B[101mf\x1B[0m`;default:throw Error(`unsupported severity: ${e}`)}}},gf={verbose:1e3,info:2e3,warning:4e3,error:5e3,fatal:6e3},aI={none:new Rs,console:new zs},bf={provider:`console`,minimalSeverity:`warning`,logDateTime:!0,logSourceLocation:!1},vo={"":bf},(e=>{function t(t,n){e(`verbose`,t,n)}e.verbose=t;function n(t,n){e(`info`,t,n)}e.info=n;function r(t,n){e(`warning`,t,n)}e.warning=r;function i(t,n){e(`error`,t,n)}e.error=i;function a(t,n){e(`fatal`,t,n)}e.fatal=a;function o(e){vo={},s(``,e||{})}e.reset=o;function s(e,t){if(e===`*`)o(t);else{let n=vo[e]||bf;vo[e]={provider:t.provider||n.provider,minimalSeverity:t.minimalSeverity||n.minimalSeverity,logDateTime:t.logDateTime===void 0?n.logDateTime:t.logDateTime,logSourceLocation:t.logSourceLocation===void 0?n.logSourceLocation:t.logSourceLocation}}}e.set=s;function c(e){let t={};e.logLevel&&(t.minimalSeverity=e.logLevel),s(``,t)}e.setWithEnv=c})(lr||={}),Be=lr,gi=class{constructor(e,t,n,r,i,a){this.category=e,this.name=t,this.startTime=n,this.endCallback=r,this.timer=i,this.ctx=a}async end(){return this.endCallback(this)}async checkTimer(){if(this.ctx===void 0||this.timer===void 0)throw Error(`No webgl timer found`);return this.ctx.endTimer(),this.ctx.waitForQueryAndGetTime(this.timer)}},bi=class{constructor(e,t,n,r){this.category=e,this.name=t,this.startTime=n,this.endTime=r}},yi=class{constructor(e,t,n){this._started=!1,this._flushPointer=0,this._started=!1,this._maxNumberEvents=e===void 0?1e4:e,this._flushBatchSize=t===void 0?10:t,this._flushIntervalInMilliseconds=n===void 0?5e3:n}static create(e){return e===void 0?new this:new this(e.maxNumberEvents,e.flushBatchSize,e.flushIntervalInMilliseconds)}start(){this._started=!0,this._timingEvents=[],this._flushTime=mi(),this._flushPointer=0}stop(){for(this._started=!1;this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer])}event(e,t,n,r){let i=this._started?this.begin(e,t,r):void 0,a=!1,o=n();if(o&&typeof o.then==`function`)return a=!0,new Promise((e,t)=>{o.then(async t=>{i&&await i.end(),e(t)},async e=>{i&&await i.end(),t(e)})});if(!a&&i){let e=i.end();if(e&&typeof e.then==`function`)return new Promise((t,n)=>{e.then(()=>{t(o)},e=>{n(e)})})}return o}begin(e,t,n){if(!this._started)throw Error(`profiler is not started yet`);if(n===void 0){let n=mi();return this.flush(n),new gi(e,t,n,e=>this.endSync(e))}else{let r=n.beginTimer();return new gi(e,t,0,async e=>this.end(e),r,n)}}async end(e){let t=await e.checkTimer();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new bi(e.category,e.name,e.startTime,t)),this.flush(t))}endSync(e){let t=mi();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new bi(e.category,e.name,e.startTime,t)),this.flush(t))}logOneEvent(e){Be.verbose(`Profiler.${e.category}`,`${(e.endTime-e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`)}flush(e){if(this._timingEvents.length-this._flushPointer>=this._flushBatchSize||e-this._flushTime>=this._flushIntervalInMilliseconds){for(let e=this._flushPointer;this._flushPointer<e+this._flushBatchSize&&this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer]);this._flushTime=mi()}}get started(){return this._started}},mi=typeof performance<`u`&&performance.now?()=>performance.now():Date.now});function yf(e,t,n){for(let r of n){let n=r[0],i=r[1],a=r[2],o=r[3],s=r[4];if(e.opType===n){for(let e of t)if((e.domain===i||e.domain===`ai.onnx`&&i===``)&&uI(e.version,a))return{opImpl:o,opInit:s}}}throw TypeError(`cannot resolve operator '${e.opType}' with opsets: ${t.map(e=>`${e.domain||`ai.onnx`} v${e.version}`).join(`, `)}`)}function uI(e,t){if(t.endsWith(`+`)){let n=Number.parseInt(t.substring(0,t.length-1),10);return!isNaN(n)&&n<=e}else if(t.split(`-`).length===2){let n=t.split(`-`),r=Number.parseInt(n[0],10),i=Number.parseInt(n[1],10);return!isNaN(r)&&!isNaN(i)&&r<=e&&e<=i}else return Number.parseInt(t,10)===e}var _f=N(()=>{}),wf=re(e=>{e.__esModule=!0,e.Guid=function(){function e(t){if(!t)throw TypeError("Invalid argument; `value` has no value.");this.value=e.EMPTY,t&&e.isGuid(t)&&(this.value=t)}return e.isGuid=function(t){var n=t.toString();return t&&(t instanceof e||e.validator.test(n))},e.create=function(){return new e([e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join(`-`))},e.createEmpty=function(){return new e(`emptyguid`)},e.parse=function(t){return new e(t)},e.raw=function(){return[e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join(`-`)},e.gen=function(e){for(var t=``,n=0;n<e;n++)t+=((1+Math.random())*65536|0).toString(16).substring(1);return t},e.prototype.equals=function(t){return e.isGuid(t)&&this.value===t.toString()},e.prototype.isEmpty=function(){return this.value===e.EMPTY},e.prototype.toString=function(){return this.value},e.prototype.toJSON=function(){return{value:this.value}},e.validator=RegExp(`^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$`,`i`),e.EMPTY=`00000000-0000-0000-0000-000000000000`,e}()});function je(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}function gt(e){return(e&&e.__isLong__)===!0}function vf(e){var t=Math.clz32(e&-e);return e?31-t:t}function Or(e,t){var n,r,i;return t?(e>>>=0,(i=0<=e&&e<256)&&(r=Tf[e],r)?r:(n=Le(e,0,!0),i&&(Tf[e]=n),n)):(e|=0,(i=-128<=e&&e<128)&&(r=xf[e],r)?r:(n=Le(e,e<0?-1:0,!1),i&&(xf[e]=n),n))}function Nt(e,t){if(isNaN(e))return t?Jn:Wt;if(t){if(e<0)return Jn;if(e>=Af)return Ef}else{if(e<=-Sf)return wt;if(e+1>=Sf)return Pf}return e<0?Nt(-e,t).neg():Le(e%Jr|0,e/Jr|0,t)}function Le(e,t,n){return new je(e,t,n)}function Fs(e,t,n){if(e.length===0)throw Error(`empty string`);if(typeof t==`number`?(n=t,t=!1):t=!!t,e===`NaN`||e===`Infinity`||e===`+Infinity`||e===`-Infinity`)return t?Jn:Wt;if(n||=10,n<2||36<n)throw RangeError(`radix`);var r;if((r=e.indexOf(`-`))>0)throw Error(`interior hyphen`);if(r===0)return Fs(e.substring(1),t,n).neg();for(var i=Nt(_i(n,8)),a=Wt,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),c=parseInt(e.substring(o,o+s),n);if(s<8){var l=Nt(_i(n,s));a=a.mul(l).add(Nt(c))}else a=a.mul(i),a=a.add(Nt(c))}return a.unsigned=t,a}function Ht(e,t){return typeof e==`number`?Nt(e,t):typeof e==`string`?Fs(e,t):Le(e.low,e.high,typeof t==`boolean`?t:e.unsigned)}var kt,xf,Tf,_i,If,cI,Jr,Af,Sf,$f,Wt,Jn,Zr,Of,Bs,Pf,Ef,wt,H,cr,Vs=N(()=>{kt=null;try{kt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}je.prototype.__isLong__,Object.defineProperty(je.prototype,`__isLong__`,{value:!0}),je.isLong=gt,xf={},Tf={},je.fromInt=Or,je.fromNumber=Nt,je.fromBits=Le,_i=Math.pow,je.fromString=Fs,je.fromValue=Ht,If=65536,cI=1<<24,Jr=If*If,Af=Jr*Jr,Sf=Af/2,$f=Or(cI),Wt=Or(0),je.ZERO=Wt,Jn=Or(0,!0),je.UZERO=Jn,Zr=Or(1),je.ONE=Zr,Of=Or(1,!0),je.UONE=Of,Bs=Or(-1),je.NEG_ONE=Bs,Pf=Le(-1,2147483647,!1),je.MAX_VALUE=Pf,Ef=Le(-1,-1,!0),je.MAX_UNSIGNED_VALUE=Ef,wt=Le(0,-2147483648,!1),je.MIN_VALUE=wt,H=je.prototype,H.toInt=function(){return this.unsigned?this.low>>>0:this.low},H.toNumber=function(){return this.unsigned?(this.high>>>0)*Jr+(this.low>>>0):this.high*Jr+(this.low>>>0)},H.toString=function(e){if(e||=10,e<2||36<e)throw RangeError(`radix`);if(this.isZero())return`0`;if(this.isNegative())if(this.eq(wt)){var t=Nt(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}else return`-`+this.neg().toString(e);for(var i=Nt(_i(e,6),this.unsigned),a=this,o=``;;){var s=a.div(i),c=(a.sub(s.mul(i)).toInt()>>>0).toString(e);if(a=s,a.isZero())return c+o;for(;c.length<6;)c=`0`+c;o=``+c+o}},H.getHighBits=function(){return this.high},H.getHighBitsUnsigned=function(){return this.high>>>0},H.getLowBits=function(){return this.low},H.getLowBitsUnsigned=function(){return this.low>>>0},H.getNumBitsAbs=function(){if(this.isNegative())return this.eq(wt)?64:this.neg().getNumBitsAbs();for(var e=this.high==0?this.low:this.high,t=31;t>0&&!(e&1<<t);t--);return this.high==0?t+1:t+33},H.isZero=function(){return this.high===0&&this.low===0},H.eqz=H.isZero,H.isNegative=function(){return!this.unsigned&&this.high<0},H.isPositive=function(){return this.unsigned||this.high>=0},H.isOdd=function(){return(this.low&1)==1},H.isEven=function(){return(this.low&1)==0},H.equals=function(e){return gt(e)||(e=Ht(e)),this.unsigned!==e.unsigned&&this.high>>>31==1&&e.high>>>31==1?!1:this.high===e.high&&this.low===e.low},H.eq=H.equals,H.notEquals=function(e){return!this.eq(e)},H.neq=H.notEquals,H.ne=H.notEquals,H.lessThan=function(e){return this.comp(e)<0},H.lt=H.lessThan,H.lessThanOrEqual=function(e){return this.comp(e)<=0},H.lte=H.lessThanOrEqual,H.le=H.lessThanOrEqual,H.greaterThan=function(e){return this.comp(e)>0},H.gt=H.greaterThan,H.greaterThanOrEqual=function(e){return this.comp(e)>=0},H.gte=H.greaterThanOrEqual,H.ge=H.greaterThanOrEqual,H.compare=function(e){if(gt(e)||(e=Ht(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},H.comp=H.compare,H.negate=function(){return!this.unsigned&&this.eq(wt)?wt:this.not().add(Zr)},H.neg=H.negate,H.add=function(e){gt(e)||(e=Ht(e));var t=this.high>>>16,n=this.high&65535,r=this.low>>>16,i=this.low&65535,a=e.high>>>16,o=e.high&65535,s=e.low>>>16,c=e.low&65535,l=0,u=0,d=0,f=0;return f+=i+c,d+=f>>>16,f&=65535,d+=r+s,u+=d>>>16,d&=65535,u+=n+o,l+=u>>>16,u&=65535,l+=t+a,l&=65535,Le(d<<16|f,l<<16|u,this.unsigned)},H.subtract=function(e){return gt(e)||(e=Ht(e)),this.add(e.neg())},H.sub=H.subtract,H.multiply=function(e){if(this.isZero())return this;if(gt(e)||(e=Ht(e)),kt)return Le(kt.mul(this.low,this.high,e.low,e.high),kt.get_high(),this.unsigned);if(e.isZero())return this.unsigned?Jn:Wt;if(this.eq(wt))return e.isOdd()?wt:Wt;if(e.eq(wt))return this.isOdd()?wt:Wt;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt($f)&&e.lt($f))return Nt(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,n=this.high&65535,r=this.low>>>16,i=this.low&65535,a=e.high>>>16,o=e.high&65535,s=e.low>>>16,c=e.low&65535,l=0,u=0,d=0,f=0;return f+=i*c,d+=f>>>16,f&=65535,d+=r*c,u+=d>>>16,d&=65535,d+=i*s,u+=d>>>16,d&=65535,u+=n*c,l+=u>>>16,u&=65535,u+=r*s,l+=u>>>16,u&=65535,u+=i*o,l+=u>>>16,u&=65535,l+=t*c+n*s+r*o+i*a,l&=65535,Le(d<<16|f,l<<16|u,this.unsigned)},H.mul=H.multiply,H.divide=function(e){if(gt(e)||(e=Ht(e)),e.isZero())throw Error(`division by zero`);if(kt)return!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1?this:Le((this.unsigned?kt.div_u:kt.div_s)(this.low,this.high,e.low,e.high),kt.get_high(),this.unsigned);if(this.isZero())return this.unsigned?Jn:Wt;var t,n,r;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return Jn;if(e.gt(this.shru(1)))return Of;r=Jn}else{if(this.eq(wt))return e.eq(Zr)||e.eq(Bs)?wt:e.eq(wt)?Zr:(t=this.shr(1).div(e).shl(1),t.eq(Wt)?e.isNegative()?Zr:Bs:(n=this.sub(e.mul(t)),r=t.add(n.div(e)),r));if(e.eq(wt))return this.unsigned?Jn:Wt;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();r=Wt}for(n=this;n.gte(e);){t=Math.max(1,Math.floor(n.toNumber()/e.toNumber()));for(var i=Math.ceil(Math.log(t)/Math.LN2),a=i<=48?1:_i(2,i-48),o=Nt(t),s=o.mul(e);s.isNegative()||s.gt(n);)t-=a,o=Nt(t,this.unsigned),s=o.mul(e);o.isZero()&&(o=Zr),r=r.add(o),n=n.sub(s)}return r},H.div=H.divide,H.modulo=function(e){return gt(e)||(e=Ht(e)),kt?Le((this.unsigned?kt.rem_u:kt.rem_s)(this.low,this.high,e.low,e.high),kt.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},H.mod=H.modulo,H.rem=H.modulo,H.not=function(){return Le(~this.low,~this.high,this.unsigned)},H.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},H.clz=H.countLeadingZeros,H.countTrailingZeros=function(){return this.low?vf(this.low):vf(this.high)+32},H.ctz=H.countTrailingZeros,H.and=function(e){return gt(e)||(e=Ht(e)),Le(this.low&e.low,this.high&e.high,this.unsigned)},H.or=function(e){return gt(e)||(e=Ht(e)),Le(this.low|e.low,this.high|e.high,this.unsigned)},H.xor=function(e){return gt(e)||(e=Ht(e)),Le(this.low^e.low,this.high^e.high,this.unsigned)},H.shiftLeft=function(e){return gt(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?Le(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):Le(0,this.low<<e-32,this.unsigned)},H.shl=H.shiftLeft,H.shiftRight=function(e){return gt(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?Le(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):Le(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},H.shr=H.shiftRight,H.shiftRightUnsigned=function(e){return gt(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?Le(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):Le(e===32?this.high:this.high>>>e-32,0,this.unsigned)},H.shru=H.shiftRightUnsigned,H.shr_u=H.shiftRightUnsigned,H.rotateLeft=function(e){var t;return gt(e)&&(e=e.toInt()),(e&=63)==0?this:e===32?Le(this.high,this.low,this.unsigned):e<32?(t=32-e,Le(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned)):(e-=32,t=32-e,Le(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned))},H.rotl=H.rotateLeft,H.rotateRight=function(e){var t;return gt(e)&&(e=e.toInt()),(e&=63)==0?this:e===32?Le(this.high,this.low,this.unsigned):e<32?(t=32-e,Le(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned)):(e-=32,t=32-e,Le(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned))},H.rotr=H.rotateRight,H.toSigned=function(){return this.unsigned?Le(this.low,this.high,!1):this},H.toUnsigned=function(){return this.unsigned?this:Le(this.low,this.high,!0)},H.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},H.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},H.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},je.fromBytes=function(e,t,n){return n?je.fromBytesLE(e,t):je.fromBytesBE(e,t)},je.fromBytesLE=function(e,t){return new je(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},je.fromBytesBE=function(e,t){return new je(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)},cr=je}),Gs=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.ArgType=void 0;var t;(function(e){e[e.INPUT=0]=`INPUT`,e[e.OUTPUT=1]=`OUTPUT`})(t||(e.ArgType=t={}))}),Pr=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.SIZE_PREFIX_LENGTH=e.FILE_IDENTIFIER_LENGTH=e.SIZEOF_INT=e.SIZEOF_SHORT=void 0,e.SIZEOF_SHORT=2,e.SIZEOF_INT=4,e.FILE_IDENTIFIER_LENGTH=4,e.SIZE_PREFIX_LENGTH=4}),Us=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.isLittleEndian=e.float64=e.float32=e.int32=void 0,e.int32=new Int32Array(2),e.float32=new Float32Array(e.int32.buffer),e.float64=new Float64Array(e.int32.buffer),e.isLittleEndian=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1}),Ws=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.Encoding=void 0;var t;(function(e){e[e.UTF8_BYTES=1]=`UTF8_BYTES`,e[e.UTF16_STRING=2]=`UTF16_STRING`})(t||(e.Encoding=t={}))}),qs=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.ByteBuffer=void 0;var t=Pr(),n=Us(),r=Ws();e.ByteBuffer=class e{constructor(e){this.bytes_=e,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new e(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(e){this.position_=e}capacity(){return this.bytes_.length}readInt8(e){return this.readUint8(e)<<24>>24}readUint8(e){return this.bytes_[e]}readInt16(e){return this.readUint16(e)<<16>>16}readUint16(e){return this.bytes_[e]|this.bytes_[e+1]<<8}readInt32(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24}readUint32(e){return this.readInt32(e)>>>0}readInt64(e){return BigInt.asIntN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readUint64(e){return BigInt.asUintN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readFloat32(e){return n.int32[0]=this.readInt32(e),n.float32[0]}readFloat64(e){return n.int32[+!n.isLittleEndian]=this.readInt32(e),n.int32[+!!n.isLittleEndian]=this.readInt32(e+4),n.float64[0]}writeInt8(e,t){this.bytes_[e]=t}writeUint8(e,t){this.bytes_[e]=t}writeInt16(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8}writeUint16(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8}writeInt32(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24}writeUint32(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24}writeInt64(e,t){this.writeInt32(e,Number(BigInt.asIntN(32,t))),this.writeInt32(e+4,Number(BigInt.asIntN(32,t>>BigInt(32))))}writeUint64(e,t){this.writeUint32(e,Number(BigInt.asUintN(32,t))),this.writeUint32(e+4,Number(BigInt.asUintN(32,t>>BigInt(32))))}writeFloat32(e,t){n.float32[0]=t,this.writeInt32(e,n.int32[0])}writeFloat64(e,t){n.float64[0]=t,this.writeInt32(e,n.int32[+!n.isLittleEndian]),this.writeInt32(e+4,n.int32[+!!n.isLittleEndian])}getBufferIdentifier(){if(this.bytes_.length<this.position_+t.SIZEOF_INT+t.FILE_IDENTIFIER_LENGTH)throw Error(`FlatBuffers: ByteBuffer is too short to contain an identifier.`);let e=``;for(let n=0;n<t.FILE_IDENTIFIER_LENGTH;n++)e+=String.fromCharCode(this.readInt8(this.position_+t.SIZEOF_INT+n));return e}__offset(e,t){let n=e-this.readInt32(e);return t<this.readInt16(n)?this.readInt16(n+t):0}__union(e,t){return e.bb_pos=t+this.readInt32(t),e.bb=this,e}__string(e,n){e+=this.readInt32(e);let i=this.readInt32(e);e+=t.SIZEOF_INT;let a=this.bytes_.subarray(e,e+i);return n===r.Encoding.UTF8_BYTES?a:this.text_decoder_.decode(a)}__union_with_string(e,t){return typeof e==`string`?this.__string(t):this.__union(e,t)}__indirect(e){return e+this.readInt32(e)}__vector(e){return e+this.readInt32(e)+t.SIZEOF_INT}__vector_len(e){return this.readInt32(e+this.readInt32(e))}__has_identifier(e){if(e.length!=t.FILE_IDENTIFIER_LENGTH)throw Error(`FlatBuffers: file identifier must be length `+t.FILE_IDENTIFIER_LENGTH);for(let n=0;n<t.FILE_IDENTIFIER_LENGTH;n++)if(e.charCodeAt(n)!=this.readInt8(this.position()+t.SIZEOF_INT+n))return!1;return!0}createScalarList(e,t){let n=[];for(let r=0;r<t;++r){let t=e(r);t!==null&&n.push(t)}return n}createObjList(e,t){let n=[];for(let r=0;r<t;++r){let t=e(r);t!==null&&n.push(t.unpack())}return n}}}),Nf=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.Builder=void 0;var t=qs(),n=Pr();e.Builder=class e{constructor(e){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let n;n=e||1024,this.bb=t.ByteBuffer.allocate(n),this.space=n}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(e){this.force_defaults=e}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,n){t>this.minalign&&(this.minalign=t);let r=~(this.bb.capacity()-this.space+n)+1&t-1;for(;this.space<r+t+n;){let t=this.bb.capacity();this.bb=e.growByteBuffer(this.bb),this.space+=this.bb.capacity()-t}this.pad(r)}pad(e){for(let t=0;t<e;t++)this.bb.writeInt8(--this.space,0)}writeInt8(e){this.bb.writeInt8(--this.space,e)}writeInt16(e){this.bb.writeInt16(this.space-=2,e)}writeInt32(e){this.bb.writeInt32(this.space-=4,e)}writeInt64(e){this.bb.writeInt64(this.space-=8,e)}writeFloat32(e){this.bb.writeFloat32(this.space-=4,e)}writeFloat64(e){this.bb.writeFloat64(this.space-=8,e)}addInt8(e){this.prep(1,0),this.writeInt8(e)}addInt16(e){this.prep(2,0),this.writeInt16(e)}addInt32(e){this.prep(4,0),this.writeInt32(e)}addInt64(e){this.prep(8,0),this.writeInt64(e)}addFloat32(e){this.prep(4,0),this.writeFloat32(e)}addFloat64(e){this.prep(8,0),this.writeFloat64(e)}addFieldInt8(e,t,n){(this.force_defaults||t!=n)&&(this.addInt8(t),this.slot(e))}addFieldInt16(e,t,n){(this.force_defaults||t!=n)&&(this.addInt16(t),this.slot(e))}addFieldInt32(e,t,n){(this.force_defaults||t!=n)&&(this.addInt32(t),this.slot(e))}addFieldInt64(e,t,n){(this.force_defaults||t!==n)&&(this.addInt64(t),this.slot(e))}addFieldFloat32(e,t,n){(this.force_defaults||t!=n)&&(this.addFloat32(t),this.slot(e))}addFieldFloat64(e,t,n){(this.force_defaults||t!=n)&&(this.addFloat64(t),this.slot(e))}addFieldOffset(e,t,n){(this.force_defaults||t!=n)&&(this.addOffset(t),this.slot(e))}addFieldStruct(e,t,n){t!=n&&(this.nested(t),this.slot(e))}nested(e){if(e!=this.offset())throw TypeError(`FlatBuffers: struct must be serialized inline.`)}notNested(){if(this.isNested)throw TypeError(`FlatBuffers: object serialization must not be nested.`)}slot(e){this.vtable!==null&&(this.vtable[e]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(e){let n=e.capacity();if(n&3221225472)throw Error(`FlatBuffers: cannot grow buffer beyond 2 gigabytes.`);let r=n<<1,i=t.ByteBuffer.allocate(r);return i.setPosition(r-n),i.bytes().set(e.bytes(),r-n),i}addOffset(e){this.prep(n.SIZEOF_INT,0),this.writeInt32(this.offset()-e+n.SIZEOF_INT)}startObject(e){this.notNested(),this.vtable??=[],this.vtable_in_use=e;for(let t=0;t<e;t++)this.vtable[t]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw Error(`FlatBuffers: endObject called without startObject`);this.addInt32(0);let e=this.offset(),t=this.vtable_in_use-1;for(;t>=0&&this.vtable[t]==0;t--);let r=t+1;for(;t>=0;t--)this.addInt16(this.vtable[t]==0?0:e-this.vtable[t]);let i=2;this.addInt16(e-this.object_start);let a=(r+2)*n.SIZEOF_SHORT;this.addInt16(a);let o=0,s=this.space;e:for(t=0;t<this.vtables.length;t++){let e=this.bb.capacity()-this.vtables[t];if(a==this.bb.readInt16(e)){for(let t=n.SIZEOF_SHORT;t<a;t+=n.SIZEOF_SHORT)if(this.bb.readInt16(s+t)!=this.bb.readInt16(e+t))continue e;o=this.vtables[t];break}}return o?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,o-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e}finish(e,t,r){let i=r?n.SIZE_PREFIX_LENGTH:0;if(t){let e=t;if(this.prep(this.minalign,n.SIZEOF_INT+n.FILE_IDENTIFIER_LENGTH+i),e.length!=n.FILE_IDENTIFIER_LENGTH)throw TypeError(`FlatBuffers: file identifier must be length `+n.FILE_IDENTIFIER_LENGTH);for(let t=n.FILE_IDENTIFIER_LENGTH-1;t>=0;t--)this.writeInt8(e.charCodeAt(t))}this.prep(this.minalign,n.SIZEOF_INT+i),this.addOffset(e),i&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(e,t){this.finish(e,t,!0)}requiredField(e,t){let n=this.bb.capacity()-e,r=n-this.bb.readInt32(n);if(!(t<this.bb.readInt16(r)&&this.bb.readInt16(r+t)!=0))throw TypeError(`FlatBuffers: field `+t+` must be set`)}startVector(e,t,r){this.notNested(),this.vector_num_elems=t,this.prep(n.SIZEOF_INT,e*t),this.prep(r,e*t)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(e){if(!e)return 0;if(this.string_maps||=new Map,this.string_maps.has(e))return this.string_maps.get(e);let t=this.createString(e);return this.string_maps.set(e,t),t}createString(e){if(e==null)return 0;let t;return t=e instanceof Uint8Array?e:this.text_encoder.encode(e),this.addInt8(0),this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector()}createByteVector(e){return e==null?0:(this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector())}createObjectOffset(e){return e===null?0:typeof e==`string`?this.createString(e):e.pack(this)}createObjectOffsetList(e){let t=[];for(let n=0;n<e.length;++n){let r=e[n];if(r!==null)t.push(this.createObjectOffset(r));else throw TypeError(`FlatBuffers: Argument for createObjectOffsetList cannot contain null.`)}return t}createStructOffsetList(e,t){return t(this,e.length),this.createObjectOffsetList(e.slice().reverse()),this.endVector()}}}),Re=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.ByteBuffer=e.Builder=e.Encoding=e.isLittleEndian=e.float64=e.float32=e.int32=e.SIZE_PREFIX_LENGTH=e.FILE_IDENTIFIER_LENGTH=e.SIZEOF_INT=e.SIZEOF_SHORT=void 0;var t=Pr();Object.defineProperty(e,`SIZEOF_SHORT`,{enumerable:!0,get:function(){return t.SIZEOF_SHORT}});var n=Pr();Object.defineProperty(e,`SIZEOF_INT`,{enumerable:!0,get:function(){return n.SIZEOF_INT}});var r=Pr();Object.defineProperty(e,`FILE_IDENTIFIER_LENGTH`,{enumerable:!0,get:function(){return r.FILE_IDENTIFIER_LENGTH}});var i=Pr();Object.defineProperty(e,`SIZE_PREFIX_LENGTH`,{enumerable:!0,get:function(){return i.SIZE_PREFIX_LENGTH}});var a=Us();Object.defineProperty(e,`int32`,{enumerable:!0,get:function(){return a.int32}}),Object.defineProperty(e,`float32`,{enumerable:!0,get:function(){return a.float32}}),Object.defineProperty(e,`float64`,{enumerable:!0,get:function(){return a.float64}}),Object.defineProperty(e,`isLittleEndian`,{enumerable:!0,get:function(){return a.isLittleEndian}});var o=Ws();Object.defineProperty(e,`Encoding`,{enumerable:!0,get:function(){return o.Encoding}});var s=Nf();Object.defineProperty(e,`Builder`,{enumerable:!0,get:function(){return s.Builder}});var c=qs();Object.defineProperty(e,`ByteBuffer`,{enumerable:!0,get:function(){return c.ByteBuffer}})}),Xs=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.ArgTypeAndIndex=void 0;var i=r(Re()),a=Gs();e.ArgTypeAndIndex=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsArgTypeAndIndex(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsArgTypeAndIndex(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}argType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt8(this.bb_pos+e):a.ArgType.INPUT}index(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint32(this.bb_pos+e):0}static startArgTypeAndIndex(e){e.startObject(2)}static addArgType(e,t){e.addFieldInt8(0,t,a.ArgType.INPUT)}static addIndex(e,t){e.addFieldInt32(1,t,0)}static endArgTypeAndIndex(e){return e.endObject()}static createArgTypeAndIndex(t,n,r){return e.startArgTypeAndIndex(t),e.addArgType(t,n),e.addIndex(t,r),e.endArgTypeAndIndex(t)}}}),Zs=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.AttributeType=void 0;var t;(function(e){e[e.UNDEFINED=0]=`UNDEFINED`,e[e.FLOAT=1]=`FLOAT`,e[e.INT=2]=`INT`,e[e.STRING=3]=`STRING`,e[e.TENSOR=4]=`TENSOR`,e[e.GRAPH=5]=`GRAPH`,e[e.FLOATS=6]=`FLOATS`,e[e.INTS=7]=`INTS`,e[e.STRINGS=8]=`STRINGS`,e[e.TENSORS=9]=`TENSORS`,e[e.GRAPHS=10]=`GRAPHS`,e[e.SPARSE_TENSOR=11]=`SPARSE_TENSOR`,e[e.SPARSE_TENSORS=12]=`SPARSE_TENSORS`})(t||(e.AttributeType=t={}))}),Js=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.NodeType=void 0;var t;(function(e){e[e.Primitive=0]=`Primitive`,e[e.Fused=1]=`Fused`})(t||(e.NodeType=t={}))}),Qs=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.Node=void 0;var i=r(Re()),a=eu(),o=Js();e.Node=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsNode(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNode(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}domain(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,e):null}sinceVersion(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):0}index(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readUint32(this.bb_pos+e):0}opType(e){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb_pos+t,e):null}type(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt32(this.bb_pos+e):o.NodeType.Primitive}executionProviderType(e){let t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__string(this.bb_pos+t,e):null}inputs(e,t){let n=this.bb.__offset(this.bb_pos,20);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,t){let n=this.bb.__offset(this.bb_pos,22);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}attributes(e,t){let n=this.bb.__offset(this.bb_pos,24);return n?(t||new a.Attribute).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}attributesLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCounts(e){let t=this.bb.__offset(this.bb_pos,26);return t?this.bb.readInt32(this.bb.__vector(this.bb_pos+t)+e*4):0}inputArgCountsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCountsArray(){let e=this.bb.__offset(this.bb_pos,26);return e?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}implicitInputs(e,t){let n=this.bb.__offset(this.bb_pos,28);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}implicitInputsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNode(e){e.startObject(13)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addDomain(e,t){e.addFieldOffset(2,t,0)}static addSinceVersion(e,t){e.addFieldInt32(3,t,0)}static addIndex(e,t){e.addFieldInt32(4,t,0)}static addOpType(e,t){e.addFieldOffset(5,t,0)}static addType(e,t){e.addFieldInt32(6,t,o.NodeType.Primitive)}static addExecutionProviderType(e,t){e.addFieldOffset(7,t,0)}static addInputs(e,t){e.addFieldOffset(8,t,0)}static createInputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startInputsVector(e,t){e.startVector(4,t,4)}static addOutputs(e,t){e.addFieldOffset(9,t,0)}static createOutputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOutputsVector(e,t){e.startVector(4,t,4)}static addAttributes(e,t){e.addFieldOffset(10,t,0)}static createAttributesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startAttributesVector(e,t){e.startVector(4,t,4)}static addInputArgCounts(e,t){e.addFieldOffset(11,t,0)}static createInputArgCountsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addInt32(t[n]);return e.endVector()}static startInputArgCountsVector(e,t){e.startVector(4,t,4)}static addImplicitInputs(e,t){e.addFieldOffset(12,t,0)}static createImplicitInputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startImplicitInputsVector(e,t){e.startVector(4,t,4)}static endNode(e){return e.endObject()}static createNode(t,n,r,i,a,o,s,c,l,u,d,f,p,m){return e.startNode(t),e.addName(t,n),e.addDocString(t,r),e.addDomain(t,i),e.addSinceVersion(t,a),e.addIndex(t,o),e.addOpType(t,s),e.addType(t,c),e.addExecutionProviderType(t,l),e.addInputs(t,u),e.addOutputs(t,d),e.addAttributes(t,f),e.addInputArgCounts(t,p),e.addImplicitInputs(t,m),e.endNode(t)}}}),nu=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.EdgeEnd=void 0,e.EdgeEnd=class{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}nodeIndex(){return this.bb.readUint32(this.bb_pos)}srcArgIndex(){return this.bb.readInt32(this.bb_pos+4)}dstArgIndex(){return this.bb.readInt32(this.bb_pos+8)}static sizeOf(){return 12}static createEdgeEnd(e,t,n,r){return e.prep(4,12),e.writeInt32(r),e.writeInt32(n),e.writeInt32(t),e.offset()}}}),ou=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.NodeEdge=void 0;var i=r(Re()),a=nu();e.NodeEdge=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsNodeEdge(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNodeEdge(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}nodeIndex(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb_pos+e):0}inputEdges(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new a.EdgeEnd).__init(this.bb.__vector(this.bb_pos+n)+e*12,this.bb):null}inputEdgesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}outputEdges(e,t){let n=this.bb.__offset(this.bb_pos,8);return n?(t||new a.EdgeEnd).__init(this.bb.__vector(this.bb_pos+n)+e*12,this.bb):null}outputEdgesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNodeEdge(e){e.startObject(3)}static addNodeIndex(e,t){e.addFieldInt32(0,t,0)}static addInputEdges(e,t){e.addFieldOffset(1,t,0)}static startInputEdgesVector(e,t){e.startVector(12,t,4)}static addOutputEdges(e,t){e.addFieldOffset(2,t,0)}static startOutputEdgesVector(e,t){e.startVector(12,t,4)}static endNodeEdge(e){return e.endObject()}static createNodeEdge(t,n,r,i){return e.startNodeEdge(t),e.addNodeIndex(t,n),e.addInputEdges(t,r),e.addOutputEdges(t,i),e.endNodeEdge(t)}}}),au=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.NodesToOptimizeIndices=void 0;var i=r(Re());e.NodesToOptimizeIndices=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsNodesToOptimizeIndices(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNodesToOptimizeIndices(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}nodeIndices(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readUint32(this.bb.__vector(this.bb_pos+t)+e*4):0}nodeIndicesLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeIndicesArray(){let e=this.bb.__offset(this.bb_pos,4);return e?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}numInputs(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint32(this.bb_pos+e):0}numOutputs(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readUint32(this.bb_pos+e):0}hasVariadicInput(){let e=this.bb.__offset(this.bb_pos,10);return e?!!this.bb.readInt8(this.bb_pos+e):!1}hasVariadicOutput(){let e=this.bb.__offset(this.bb_pos,12);return e?!!this.bb.readInt8(this.bb_pos+e):!1}numVariadicInputs(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readUint32(this.bb_pos+e):0}numVariadicOutputs(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readUint32(this.bb_pos+e):0}static startNodesToOptimizeIndices(e){e.startObject(7)}static addNodeIndices(e,t){e.addFieldOffset(0,t,0)}static createNodeIndicesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addInt32(t[n]);return e.endVector()}static startNodeIndicesVector(e,t){e.startVector(4,t,4)}static addNumInputs(e,t){e.addFieldInt32(1,t,0)}static addNumOutputs(e,t){e.addFieldInt32(2,t,0)}static addHasVariadicInput(e,t){e.addFieldInt8(3,+t,0)}static addHasVariadicOutput(e,t){e.addFieldInt8(4,+t,0)}static addNumVariadicInputs(e,t){e.addFieldInt32(5,t,0)}static addNumVariadicOutputs(e,t){e.addFieldInt32(6,t,0)}static endNodesToOptimizeIndices(e){return e.endObject()}static createNodesToOptimizeIndices(t,n,r,i,a,o,s,c){return e.startNodesToOptimizeIndices(t),e.addNodeIndices(t,n),e.addNumInputs(t,r),e.addNumOutputs(t,i),e.addHasVariadicInput(t,a),e.addHasVariadicOutput(t,o),e.addNumVariadicInputs(t,s),e.addNumVariadicOutputs(t,c),e.endNodesToOptimizeIndices(t)}}}),uu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.RuntimeOptimizationRecord=void 0;var i=r(Re()),a=au();e.RuntimeOptimizationRecord=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsRuntimeOptimizationRecord(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRuntimeOptimizationRecord(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}actionId(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}nodesToOptimizeIndices(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new a.NodesToOptimizeIndices).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}producedOpIds(e,t){let n=this.bb.__offset(this.bb_pos,10);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}producedOpIdsLength(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizationRecord(e){e.startObject(4)}static addActionId(e,t){e.addFieldOffset(0,t,0)}static addNodesToOptimizeIndices(e,t){e.addFieldOffset(1,t,0)}static addProducedOpIds(e,t){e.addFieldOffset(3,t,0)}static createProducedOpIdsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startProducedOpIdsVector(e,t){e.startVector(4,t,4)}static endRuntimeOptimizationRecord(e){return e.endObject()}}}),cu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.RuntimeOptimizationRecordContainerEntry=void 0;var i=r(Re()),a=uu();e.RuntimeOptimizationRecordContainerEntry=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsRuntimeOptimizationRecordContainerEntry(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRuntimeOptimizationRecordContainerEntry(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}optimizerName(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}runtimeOptimizationRecords(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new a.RuntimeOptimizationRecord).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}runtimeOptimizationRecordsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizationRecordContainerEntry(e){e.startObject(2)}static addOptimizerName(e,t){e.addFieldOffset(0,t,0)}static addRuntimeOptimizationRecords(e,t){e.addFieldOffset(1,t,0)}static createRuntimeOptimizationRecordsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startRuntimeOptimizationRecordsVector(e,t){e.startVector(4,t,4)}static endRuntimeOptimizationRecordContainerEntry(e){let t=e.endObject();return e.requiredField(t,4),t}static createRuntimeOptimizationRecordContainerEntry(t,n,r){return e.startRuntimeOptimizationRecordContainerEntry(t),e.addOptimizerName(t,n),e.addRuntimeOptimizationRecords(t,r),e.endRuntimeOptimizationRecordContainerEntry(t)}}}),pu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.RuntimeOptimizations=void 0;var i=r(Re()),a=cu();e.RuntimeOptimizations=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsRuntimeOptimizations(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRuntimeOptimizations(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}records(e,t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new a.RuntimeOptimizationRecordContainerEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}recordsLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizations(e){e.startObject(1)}static addRecords(e,t){e.addFieldOffset(0,t,0)}static createRecordsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startRecordsVector(e,t){e.startVector(4,t,4)}static endRuntimeOptimizations(e){return e.endObject()}static createRuntimeOptimizations(t,n){return e.startRuntimeOptimizations(t),e.addRecords(t,n),e.endRuntimeOptimizations(t)}}}),xo=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.TensorDataType=void 0;var t;(function(e){e[e.UNDEFINED=0]=`UNDEFINED`,e[e.FLOAT=1]=`FLOAT`,e[e.UINT8=2]=`UINT8`,e[e.INT8=3]=`INT8`,e[e.UINT16=4]=`UINT16`,e[e.INT16=5]=`INT16`,e[e.INT32=6]=`INT32`,e[e.INT64=7]=`INT64`,e[e.STRING=8]=`STRING`,e[e.BOOL=9]=`BOOL`,e[e.FLOAT16=10]=`FLOAT16`,e[e.DOUBLE=11]=`DOUBLE`,e[e.UINT32=12]=`UINT32`,e[e.UINT64=13]=`UINT64`,e[e.COMPLEX64=14]=`COMPLEX64`,e[e.COMPLEX128=15]=`COMPLEX128`,e[e.BFLOAT16=16]=`BFLOAT16`,e[e.FLOAT8E4M3FN=17]=`FLOAT8E4M3FN`,e[e.FLOAT8E4M3FNUZ=18]=`FLOAT8E4M3FNUZ`,e[e.FLOAT8E5M2=19]=`FLOAT8E5M2`,e[e.FLOAT8E5M2FNUZ=20]=`FLOAT8E5M2FNUZ`})(t||(e.TensorDataType=t={}))}),To=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.Tensor=void 0;var i=r(Re()),a=xo();e.Tensor=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTensor(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTensor(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}dims(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+e*8):BigInt(0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}dataType(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):a.TensorDataType.UNDEFINED}rawData(e){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.readUint8(this.bb.__vector(this.bb_pos+t)+e):0}rawDataLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}rawDataArray(){let e=this.bb.__offset(this.bb_pos,12);return e?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}stringData(e,t){let n=this.bb.__offset(this.bb_pos,14);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}stringDataLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}externalDataOffset(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt64(this.bb_pos+e):BigInt(`-1`)}static startTensor(e){e.startObject(7)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addDims(e,t){e.addFieldOffset(2,t,0)}static createDimsVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startDimsVector(e,t){e.startVector(8,t,8)}static addDataType(e,t){e.addFieldInt32(3,t,a.TensorDataType.UNDEFINED)}static addRawData(e,t){e.addFieldOffset(4,t,0)}static createRawDataVector(e,t){e.startVector(1,t.length,1);for(let n=t.length-1;n>=0;n--)e.addInt8(t[n]);return e.endVector()}static startRawDataVector(e,t){e.startVector(1,t,1)}static addStringData(e,t){e.addFieldOffset(5,t,0)}static createStringDataVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startStringDataVector(e,t){e.startVector(4,t,4)}static addExternalDataOffset(e,t){e.addFieldInt64(6,t,BigInt(`-1`))}static endTensor(e){return e.endObject()}static createTensor(t,n,r,i,a,o,s,c){return e.startTensor(t),e.addName(t,n),e.addDocString(t,r),e.addDims(t,i),e.addDataType(t,a),e.addRawData(t,o),e.addStringData(t,s),e.addExternalDataOffset(t,c),e.endTensor(t)}}}),mu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.SparseTensor=void 0;var i=r(Re()),a=To();e.SparseTensor=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsSparseTensor(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSparseTensor(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}values(e){let t=this.bb.__offset(this.bb_pos,4);return t?(e||new a.Tensor).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}indices(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new a.Tensor).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}dims(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+e*8):BigInt(0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startSparseTensor(e){e.startObject(3)}static addValues(e,t){e.addFieldOffset(0,t,0)}static addIndices(e,t){e.addFieldOffset(1,t,0)}static addDims(e,t){e.addFieldOffset(2,t,0)}static createDimsVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startDimsVector(e,t){e.startVector(8,t,8)}static endSparseTensor(e){return e.endObject()}}}),bu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.MapType=void 0;var i=r(Re()),a=xo(),o=Io();e.MapType=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsMapType(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMapType(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}keyType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):a.TensorDataType.UNDEFINED}valueType(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new o.TypeInfo).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startMapType(e){e.startObject(2)}static addKeyType(e,t){e.addFieldInt32(0,t,a.TensorDataType.UNDEFINED)}static addValueType(e,t){e.addFieldOffset(1,t,0)}static endMapType(e){return e.endObject()}}}),_u=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.SequenceType=void 0;var i=r(Re()),a=Io();e.SequenceType=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsSequenceType(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSequenceType(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}elemType(e){let t=this.bb.__offset(this.bb_pos,4);return t?(e||new a.TypeInfo).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startSequenceType(e){e.startObject(1)}static addElemType(e,t){e.addFieldOffset(0,t,0)}static endSequenceType(e){return e.endObject()}static createSequenceType(t,n){return e.startSequenceType(t),e.addElemType(t,n),e.endSequenceType(t)}}}),wu=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.DimensionValueType=void 0;var t;(function(e){e[e.UNKNOWN=0]=`UNKNOWN`,e[e.VALUE=1]=`VALUE`,e[e.PARAM=2]=`PARAM`})(t||(e.DimensionValueType=t={}))}),xu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.DimensionValue=void 0;var i=r(Re()),a=wu();e.DimensionValue=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDimensionValue(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDimensionValue(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}dimType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt8(this.bb_pos+e):a.DimensionValueType.UNKNOWN}dimValue(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt(`0`)}dimParam(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,e):null}static startDimensionValue(e){e.startObject(3)}static addDimType(e,t){e.addFieldInt8(0,t,a.DimensionValueType.UNKNOWN)}static addDimValue(e,t){e.addFieldInt64(1,t,BigInt(`0`))}static addDimParam(e,t){e.addFieldOffset(2,t,0)}static endDimensionValue(e){return e.endObject()}static createDimensionValue(t,n,r,i){return e.startDimensionValue(t),e.addDimType(t,n),e.addDimValue(t,r),e.addDimParam(t,i),e.endDimensionValue(t)}}}),Iu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.Dimension=void 0;var i=r(Re()),a=xu();e.Dimension=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDimension(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDimension(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}value(e){let t=this.bb.__offset(this.bb_pos,4);return t?(e||new a.DimensionValue).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}denotation(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}static startDimension(e){e.startObject(2)}static addValue(e,t){e.addFieldOffset(0,t,0)}static addDenotation(e,t){e.addFieldOffset(1,t,0)}static endDimension(e){return e.endObject()}static createDimension(t,n,r){return e.startDimension(t),e.addValue(t,n),e.addDenotation(t,r),e.endDimension(t)}}}),$u=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.Shape=void 0;var i=r(Re()),a=Iu();e.Shape=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsShape(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsShape(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}dim(e,t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new a.Dimension).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}dimLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startShape(e){e.startObject(1)}static addDim(e,t){e.addFieldOffset(0,t,0)}static createDimVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startDimVector(e,t){e.startVector(4,t,4)}static endShape(e){return e.endObject()}static createShape(t,n){return e.startShape(t),e.addDim(t,n),e.endShape(t)}}}),Ou=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.TensorTypeAndShape=void 0;var i=r(Re()),a=$u(),o=xo();e.TensorTypeAndShape=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTensorTypeAndShape(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTensorTypeAndShape(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}elemType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):o.TensorDataType.UNDEFINED}shape(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new a.Shape).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startTensorTypeAndShape(e){e.startObject(2)}static addElemType(e,t){e.addFieldInt32(0,t,o.TensorDataType.UNDEFINED)}static addShape(e,t){e.addFieldOffset(1,t,0)}static endTensorTypeAndShape(e){return e.endObject()}}}),Pu=re(e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.unionListToTypeInfoValue=e.unionToTypeInfoValue=e.TypeInfoValue=void 0;var t=bu(),n=_u(),r=Ou(),i;(function(e){e[e.NONE=0]=`NONE`,e[e.tensor_type=1]=`tensor_type`,e[e.sequence_type=2]=`sequence_type`,e[e.map_type=3]=`map_type`})(i||(e.TypeInfoValue=i={}));function a(e,a){switch(i[e]){case`NONE`:return null;case`tensor_type`:return a(new r.TensorTypeAndShape);case`sequence_type`:return a(new n.SequenceType);case`map_type`:return a(new t.MapType);default:return null}}e.unionToTypeInfoValue=a;function o(e,a,o){switch(i[e]){case`NONE`:return null;case`tensor_type`:return a(o,new r.TensorTypeAndShape);case`sequence_type`:return a(o,new n.SequenceType);case`map_type`:return a(o,new t.MapType);default:return null}}e.unionListToTypeInfoValue=o}),Io=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.TypeInfo=void 0;var i=r(Re()),a=Pu();e.TypeInfo=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTypeInfo(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTypeInfo(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}denotation(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}valueType(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint8(this.bb_pos+e):a.TypeInfoValue.NONE}value(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__union(e,this.bb_pos+t):null}static startTypeInfo(e){e.startObject(3)}static addDenotation(e,t){e.addFieldOffset(0,t,0)}static addValueType(e,t){e.addFieldInt8(1,t,a.TypeInfoValue.NONE)}static addValue(e,t){e.addFieldOffset(2,t,0)}static endTypeInfo(e){return e.endObject()}static createTypeInfo(t,n,r,i){return e.startTypeInfo(t),e.addDenotation(t,n),e.addValueType(t,r),e.addValue(t,i),e.endTypeInfo(t)}}}),Du=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.ValueInfo=void 0;var i=r(Re()),a=Io();e.ValueInfo=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsValueInfo(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsValueInfo(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}type(e){let t=this.bb.__offset(this.bb_pos,8);return t?(e||new a.TypeInfo).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startValueInfo(e){e.startObject(3)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addType(e,t){e.addFieldOffset(2,t,0)}static endValueInfo(e){return e.endObject()}}}),Ci=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.Graph=void 0;var i=r(Re()),a=Qs(),o=ou(),s=pu(),c=mu(),l=To(),u=Du();e.Graph=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsGraph(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsGraph(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}initializers(e,t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new l.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}initializersLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeArgs(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new u.ValueInfo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}nodeArgsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}nodes(e,t){let n=this.bb.__offset(this.bb_pos,8);return n?(t||new a.Node).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}nodesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}maxNodeIndex(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readUint32(this.bb_pos+e):0}nodeEdges(e,t){let n=this.bb.__offset(this.bb_pos,12);return n?(t||new o.NodeEdge).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}nodeEdgesLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}inputs(e,t){let n=this.bb.__offset(this.bb_pos,14);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,t){let n=this.bb.__offset(this.bb_pos,16);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.__vector_len(this.bb_pos+e):0}sparseInitializers(e,t){let n=this.bb.__offset(this.bb_pos,18);return n?(t||new c.SparseTensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}sparseInitializersLength(){let e=this.bb.__offset(this.bb_pos,18);return e?this.bb.__vector_len(this.bb_pos+e):0}runtimeOptimizations(e){let t=this.bb.__offset(this.bb_pos,20);return t?(e||new s.RuntimeOptimizations).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startGraph(e){e.startObject(9)}static addInitializers(e,t){e.addFieldOffset(0,t,0)}static createInitializersVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startInitializersVector(e,t){e.startVector(4,t,4)}static addNodeArgs(e,t){e.addFieldOffset(1,t,0)}static createNodeArgsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startNodeArgsVector(e,t){e.startVector(4,t,4)}static addNodes(e,t){e.addFieldOffset(2,t,0)}static createNodesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startNodesVector(e,t){e.startVector(4,t,4)}static addMaxNodeIndex(e,t){e.addFieldInt32(3,t,0)}static addNodeEdges(e,t){e.addFieldOffset(4,t,0)}static createNodeEdgesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startNodeEdgesVector(e,t){e.startVector(4,t,4)}static addInputs(e,t){e.addFieldOffset(5,t,0)}static createInputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startInputsVector(e,t){e.startVector(4,t,4)}static addOutputs(e,t){e.addFieldOffset(6,t,0)}static createOutputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOutputsVector(e,t){e.startVector(4,t,4)}static addSparseInitializers(e,t){e.addFieldOffset(7,t,0)}static createSparseInitializersVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startSparseInitializersVector(e,t){e.startVector(4,t,4)}static addRuntimeOptimizations(e,t){e.addFieldOffset(8,t,0)}static endGraph(e){return e.endObject()}}}),eu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.Attribute=void 0;var i=r(Re()),a=Zs(),o=Ci(),s=To();e.Attribute=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsAttribute(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsAttribute(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}type(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readInt32(this.bb_pos+e):a.AttributeType.UNDEFINED}f(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat32(this.bb_pos+e):0}i(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readInt64(this.bb_pos+e):BigInt(`0`)}s(e){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb_pos+t,e):null}t(e){let t=this.bb.__offset(this.bb_pos,16);return t?(e||new s.Tensor).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}g(e){let t=this.bb.__offset(this.bb_pos,18);return t?(e||new o.Graph).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}floats(e){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.readFloat32(this.bb.__vector(this.bb_pos+t)+e*4):0}floatsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}floatsArray(){let e=this.bb.__offset(this.bb_pos,20);return e?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}ints(e){let t=this.bb.__offset(this.bb_pos,22);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+e*8):BigInt(0)}intsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}strings(e,t){let n=this.bb.__offset(this.bb_pos,24);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}stringsLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}tensors(e,t){let n=this.bb.__offset(this.bb_pos,26);return n?(t||new s.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}tensorsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}graphs(e,t){let n=this.bb.__offset(this.bb_pos,28);return n?(t||new o.Graph).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}graphsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startAttribute(e){e.startObject(13)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addType(e,t){e.addFieldInt32(2,t,a.AttributeType.UNDEFINED)}static addF(e,t){e.addFieldFloat32(3,t,0)}static addI(e,t){e.addFieldInt64(4,t,BigInt(`0`))}static addS(e,t){e.addFieldOffset(5,t,0)}static addT(e,t){e.addFieldOffset(6,t,0)}static addG(e,t){e.addFieldOffset(7,t,0)}static addFloats(e,t){e.addFieldOffset(8,t,0)}static createFloatsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addFloat32(t[n]);return e.endVector()}static startFloatsVector(e,t){e.startVector(4,t,4)}static addInts(e,t){e.addFieldOffset(9,t,0)}static createIntsVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startIntsVector(e,t){e.startVector(8,t,8)}static addStrings(e,t){e.addFieldOffset(10,t,0)}static createStringsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startStringsVector(e,t){e.startVector(4,t,4)}static addTensors(e,t){e.addFieldOffset(11,t,0)}static createTensorsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startTensorsVector(e,t){e.startVector(4,t,4)}static addGraphs(e,t){e.addFieldOffset(12,t,0)}static createGraphsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startGraphsVector(e,t){e.startVector(4,t,4)}static endAttribute(e){return e.endObject()}}}),Ru=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.DeprecatedKernelCreateInfos=void 0;var i=r(Re());e.DeprecatedKernelCreateInfos=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDeprecatedKernelCreateInfos(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDeprecatedKernelCreateInfos(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}nodeIndices(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readUint32(this.bb.__vector(this.bb_pos+t)+e*4):0}nodeIndicesLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeIndicesArray(){let e=this.bb.__offset(this.bb_pos,4);return e?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}kernelDefHashes(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint64(this.bb.__vector(this.bb_pos+t)+e*8):BigInt(0)}kernelDefHashesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startDeprecatedKernelCreateInfos(e){e.startObject(2)}static addNodeIndices(e,t){e.addFieldOffset(0,t,0)}static createNodeIndicesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addInt32(t[n]);return e.endVector()}static startNodeIndicesVector(e,t){e.startVector(4,t,4)}static addKernelDefHashes(e,t){e.addFieldOffset(1,t,0)}static createKernelDefHashesVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startKernelDefHashesVector(e,t){e.startVector(8,t,8)}static endDeprecatedKernelCreateInfos(e){return e.endObject()}static createDeprecatedKernelCreateInfos(t,n,r){return e.startDeprecatedKernelCreateInfos(t),e.addNodeIndices(t,n),e.addKernelDefHashes(t,r),e.endDeprecatedKernelCreateInfos(t)}}}),eh=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.DeprecatedNodeIndexAndKernelDefHash=void 0;var i=r(Re());e.DeprecatedNodeIndexAndKernelDefHash=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDeprecatedNodeIndexAndKernelDefHash(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDeprecatedNodeIndexAndKernelDefHash(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}nodeIndex(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb_pos+e):0}kernelDefHash(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint64(this.bb_pos+e):BigInt(`0`)}static startDeprecatedNodeIndexAndKernelDefHash(e){e.startObject(2)}static addNodeIndex(e,t){e.addFieldInt32(0,t,0)}static addKernelDefHash(e,t){e.addFieldInt64(1,t,BigInt(`0`))}static endDeprecatedNodeIndexAndKernelDefHash(e){return e.endObject()}static createDeprecatedNodeIndexAndKernelDefHash(t,n,r){return e.startDeprecatedNodeIndexAndKernelDefHash(t),e.addNodeIndex(t,n),e.addKernelDefHash(t,r),e.endDeprecatedNodeIndexAndKernelDefHash(t)}}}),Bu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.DeprecatedSubGraphSessionState=void 0;var i=r(Re()),a=Fu();e.DeprecatedSubGraphSessionState=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDeprecatedSubGraphSessionState(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDeprecatedSubGraphSessionState(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}graphId(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}sessionState(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new a.DeprecatedSessionState).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startDeprecatedSubGraphSessionState(e){e.startObject(2)}static addGraphId(e,t){e.addFieldOffset(0,t,0)}static addSessionState(e,t){e.addFieldOffset(1,t,0)}static endDeprecatedSubGraphSessionState(e){let t=e.endObject();return e.requiredField(t,4),t}}}),Fu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.DeprecatedSessionState=void 0;var i=r(Re()),a=Ru(),o=Bu();e.DeprecatedSessionState=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDeprecatedSessionState(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDeprecatedSessionState(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}kernels(e){let t=this.bb.__offset(this.bb_pos,4);return t?(e||new a.DeprecatedKernelCreateInfos).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}subGraphSessionStates(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new o.DeprecatedSubGraphSessionState).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}subGraphSessionStatesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startDeprecatedSessionState(e){e.startObject(2)}static addKernels(e,t){e.addFieldOffset(0,t,0)}static addSubGraphSessionStates(e,t){e.addFieldOffset(1,t,0)}static createSubGraphSessionStatesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startSubGraphSessionStatesVector(e,t){e.startVector(4,t,4)}static endDeprecatedSessionState(e){return e.endObject()}static createDeprecatedSessionState(t,n,r){return e.startDeprecatedSessionState(t),e.addKernels(t,n),e.addSubGraphSessionStates(t,r),e.endDeprecatedSessionState(t)}}}),Uu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.KernelTypeStrArgsEntry=void 0;var i=r(Re()),a=Xs();e.KernelTypeStrArgsEntry=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsKernelTypeStrArgsEntry(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKernelTypeStrArgsEntry(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}kernelTypeStr(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}args(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new a.ArgTypeAndIndex).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}argsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startKernelTypeStrArgsEntry(e){e.startObject(2)}static addKernelTypeStr(e,t){e.addFieldOffset(0,t,0)}static addArgs(e,t){e.addFieldOffset(1,t,0)}static createArgsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startArgsVector(e,t){e.startVector(4,t,4)}static endKernelTypeStrArgsEntry(e){let t=e.endObject();return e.requiredField(t,4),t}static createKernelTypeStrArgsEntry(t,n,r){return e.startKernelTypeStrArgsEntry(t),e.addKernelTypeStr(t,n),e.addArgs(t,r),e.endKernelTypeStrArgsEntry(t)}}}),Hu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.OpIdKernelTypeStrArgsEntry=void 0;var i=r(Re()),a=Uu();e.OpIdKernelTypeStrArgsEntry=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsOpIdKernelTypeStrArgsEntry(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsOpIdKernelTypeStrArgsEntry(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}opId(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}kernelTypeStrArgs(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new a.KernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}kernelTypeStrArgsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startOpIdKernelTypeStrArgsEntry(e){e.startObject(2)}static addOpId(e,t){e.addFieldOffset(0,t,0)}static addKernelTypeStrArgs(e,t){e.addFieldOffset(1,t,0)}static createKernelTypeStrArgsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startKernelTypeStrArgsVector(e,t){e.startVector(4,t,4)}static endOpIdKernelTypeStrArgsEntry(e){let t=e.endObject();return e.requiredField(t,4),t}static createOpIdKernelTypeStrArgsEntry(t,n,r){return e.startOpIdKernelTypeStrArgsEntry(t),e.addOpId(t,n),e.addKernelTypeStrArgs(t,r),e.endOpIdKernelTypeStrArgsEntry(t)}}}),ju=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.KernelTypeStrResolver=void 0;var i=r(Re()),a=Hu();e.KernelTypeStrResolver=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsKernelTypeStrResolver(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKernelTypeStrResolver(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}opKernelTypeStrArgs(e,t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new a.OpIdKernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}opKernelTypeStrArgsLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startKernelTypeStrResolver(e){e.startObject(1)}static addOpKernelTypeStrArgs(e,t){e.addFieldOffset(0,t,0)}static createOpKernelTypeStrArgsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOpKernelTypeStrArgsVector(e,t){e.startVector(4,t,4)}static endKernelTypeStrResolver(e){return e.endObject()}static createKernelTypeStrResolver(t,n){return e.startKernelTypeStrResolver(t),e.addOpKernelTypeStrArgs(t,n),e.endKernelTypeStrResolver(t)}}}),Xu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.OperatorSetId=void 0;var i=r(Re());e.OperatorSetId=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsOperatorSetId(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsOperatorSetId(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}domain(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}version(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt(`0`)}static startOperatorSetId(e){e.startObject(2)}static addDomain(e,t){e.addFieldOffset(0,t,0)}static addVersion(e,t){e.addFieldInt64(1,t,BigInt(`0`))}static endOperatorSetId(e){return e.endObject()}static createOperatorSetId(t,n,r){return e.startOperatorSetId(t),e.addDomain(t,n),e.addVersion(t,r),e.endOperatorSetId(t)}}}),Ju=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.StringStringEntry=void 0;var i=r(Re());e.StringStringEntry=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsStringStringEntry(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStringStringEntry(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}key(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}value(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}static startStringStringEntry(e){e.startObject(2)}static addKey(e,t){e.addFieldOffset(0,t,0)}static addValue(e,t){e.addFieldOffset(1,t,0)}static endStringStringEntry(e){return e.endObject()}static createStringStringEntry(t,n,r){return e.startStringStringEntry(t),e.addKey(t,n),e.addValue(t,r),e.endStringStringEntry(t)}}}),Qu=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.Model=void 0;var i=r(Re()),a=Ci(),o=Xu(),s=Ju();e.Model=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsModel(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsModel(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}irVersion(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt64(this.bb_pos+e):BigInt(`0`)}opsetImport(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new o.OperatorSetId).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}opsetImportLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}producerName(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,e):null}producerVersion(e){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__string(this.bb_pos+t,e):null}domain(e){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__string(this.bb_pos+t,e):null}modelVersion(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readInt64(this.bb_pos+e):BigInt(`0`)}docString(e){let t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__string(this.bb_pos+t,e):null}graph(e){let t=this.bb.__offset(this.bb_pos,18);return t?(e||new a.Graph).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}graphDocString(e){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.__string(this.bb_pos+t,e):null}metadataProps(e,t){let n=this.bb.__offset(this.bb_pos,22);return n?(t||new s.StringStringEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}metadataPropsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}static startModel(e){e.startObject(10)}static addIrVersion(e,t){e.addFieldInt64(0,t,BigInt(`0`))}static addOpsetImport(e,t){e.addFieldOffset(1,t,0)}static createOpsetImportVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOpsetImportVector(e,t){e.startVector(4,t,4)}static addProducerName(e,t){e.addFieldOffset(2,t,0)}static addProducerVersion(e,t){e.addFieldOffset(3,t,0)}static addDomain(e,t){e.addFieldOffset(4,t,0)}static addModelVersion(e,t){e.addFieldInt64(5,t,BigInt(`0`))}static addDocString(e,t){e.addFieldOffset(6,t,0)}static addGraph(e,t){e.addFieldOffset(7,t,0)}static addGraphDocString(e,t){e.addFieldOffset(8,t,0)}static addMetadataProps(e,t){e.addFieldOffset(9,t,0)}static createMetadataPropsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startMetadataPropsVector(e,t){e.startVector(4,t,4)}static endModel(e){return e.endObject()}}}),th=re(e=>{var t=e&&e.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),n=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,`default`,{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var i in e)i!==`default`&&Object.prototype.hasOwnProperty.call(e,i)&&t(r,e,i);return n(r,e),r};Object.defineProperty(e,`__esModule`,{value:!0}),e.InferenceSession=void 0;var i=r(Re()),a=ju(),o=Qu();e.InferenceSession=class e{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsInferenceSession(t,n){return(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInferenceSession(t,n){return t.setPosition(t.position()+i.SIZE_PREFIX_LENGTH),(n||new e).__init(t.readInt32(t.position())+t.position(),t)}static bufferHasIdentifier(e){return e.__has_identifier(`ORTM`)}ortVersion(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}model(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new o.Model).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}kernelTypeStrResolver(e){let t=this.bb.__offset(this.bb_pos,10);return t?(e||new a.KernelTypeStrResolver).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startInferenceSession(e){e.startObject(4)}static addOrtVersion(e,t){e.addFieldOffset(0,t,0)}static addModel(e,t){e.addFieldOffset(1,t,0)}static addKernelTypeStrResolver(e,t){e.addFieldOffset(3,t,0)}static endInferenceSession(e){return e.endObject()}static finishInferenceSessionBuffer(e,t){e.finish(t,`ORTM`)}static finishSizePrefixedInferenceSessionBuffer(e,t){e.finish(t,`ORTM`,!0)}}}),a$,s$,Di,Rt,u$,l$,c$,d$,p$,f$,h$,m$,tl,nl,g$,b$,y$,_$,rl,w$,v$,x$,T$,I$,S$,$$,A$,O$,P$,E$,C$,D$,So,ol,k$,il,N$,nh=N(()=>{ye(Gs()),ye(Xs()),Di=ye(eu()),Rt=ye(Zs()),ye(Ru()),ye(eh()),ye(Fu()),ye(Bu()),ye(Iu()),ye(xu()),ye(wu()),ye(nu()),tl=ye(Ci()),nl=ye(th()),ye(Uu()),ye(ju()),ye(bu()),ye(Qu()),rl=ye(Qs()),ye(ou()),ye(Js()),ye(au()),ye(Hu()),ye(Xu()),ye(uu()),ye(cu()),ye(pu()),ye(_u()),ye($u()),ye(mu()),ye(Ju()),ye(To()),So=ye(xo()),ol=ye(Ou()),ye(Io()),il=ye(Pu()),ye(Du())}),$o=N(()=>{nh()}),oh=re((e,t)=>{t.exports=n;function n(e,t){for(var n=Array(arguments.length-1),r=0,i=2,a=!0;i<arguments.length;)n[r++]=arguments[i++];return new Promise(function(i,o){n[r]=function(e){if(a)if(a=!1,e)o(e);else{for(var t=Array(arguments.length-1),n=0;n<t.length;)t[n++]=arguments[n];i.apply(null,t)}};try{e.apply(t||null,n)}catch(e){a&&(a=!1,o(e))}})}}),uh=re(e=>{var t=e;t.length=function(e){var t=e.length;if(!t)return 0;for(var n=0;--t%4>1&&e.charAt(t)===`=`;)++n;return Math.ceil(e.length*3)/4-n};var n=Array(64),r=Array(123);for(i=0;i<64;)r[n[i]=i<26?i+65:i<52?i+71:i<62?i-4:i-59|43]=i++;var i;t.encode=function(e,t,r){for(var i=null,a=[],o=0,s=0,c;t<r;){var l=e[t++];switch(s){case 0:a[o++]=n[l>>2],c=(l&3)<<4,s=1;break;case 1:a[o++]=n[c|l>>4],c=(l&15)<<2,s=2;break;case 2:a[o++]=n[c|l>>6],a[o++]=n[l&63],s=0;break}o>8191&&((i||=[]).push(String.fromCharCode.apply(String,a)),o=0)}return s&&(a[o++]=n[c],a[o++]=61,s===1&&(a[o++]=61)),i?(o&&i.push(String.fromCharCode.apply(String,a.slice(0,o))),i.join(``)):String.fromCharCode.apply(String,a.slice(0,o))};var a=`invalid encoding`;t.decode=function(e,t,n){for(var i=n,o=0,s,c=0;c<e.length;){var l=e.charCodeAt(c++);if(l===61&&o>1)break;if((l=r[l])===void 0)throw Error(a);switch(o){case 0:s=l,o=1;break;case 1:t[n++]=s<<2|(l&48)>>4,s=l,o=2;break;case 2:t[n++]=(s&15)<<4|(l&60)>>2,s=l,o=3;break;case 3:t[n++]=(s&3)<<6|l,o=0;break}}if(o===1)throw Error(a);return n-i},t.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}}),ch=re((e,t)=>{t.exports=n;function n(){this._listeners={}}n.prototype.on=function(e,t,n){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:t,ctx:n||this}),this},n.prototype.off=function(e,t){if(e===void 0)this._listeners={};else if(t===void 0)this._listeners[e]=[];else for(var n=this._listeners[e],r=0;r<n.length;)n[r].fn===t?n.splice(r,1):++r;return this},n.prototype.emit=function(e){var t=this._listeners[e];if(t){for(var n=[],r=1;r<arguments.length;)n.push(arguments[r++]);for(r=0;r<t.length;)t[r].fn.apply(t[r++].ctx,n)}return this}}),bh=re((e,t)=>{t.exports=n(n);function n(e){return typeof Float32Array<`u`?function(){var t=new Float32Array([-0]),n=new Uint8Array(t.buffer),r=n[3]===128;function i(e,r,i){t[0]=e,r[i]=n[0],r[i+1]=n[1],r[i+2]=n[2],r[i+3]=n[3]}function a(e,r,i){t[0]=e,r[i]=n[3],r[i+1]=n[2],r[i+2]=n[1],r[i+3]=n[0]}e.writeFloatLE=r?i:a,e.writeFloatBE=r?a:i;function o(e,r){return n[0]=e[r],n[1]=e[r+1],n[2]=e[r+2],n[3]=e[r+3],t[0]}function s(e,r){return n[3]=e[r],n[2]=e[r+1],n[1]=e[r+2],n[0]=e[r+3],t[0]}e.readFloatLE=r?o:s,e.readFloatBE=r?s:o}():function(){function t(e,t,n,r){var i=+(t<0);if(i&&(t=-t),t===0)e(1/t>0?0:2147483648,n,r);else if(isNaN(t))e(2143289344,n,r);else if(t>34028234663852886e22)e((i<<31|2139095040)>>>0,n,r);else if(t<11754943508222875e-54)e((i<<31|Math.round(t/1401298464324817e-60))>>>0,n,r);else{var a=Math.floor(Math.log(t)/Math.LN2),o=Math.round(t*2**-a*8388608)&8388607;e((i<<31|a+127<<23|o)>>>0,n,r)}}e.writeFloatLE=t.bind(null,r),e.writeFloatBE=t.bind(null,i);function n(e,t,n){var r=e(t,n),i=(r>>31)*2+1,a=r>>>23&255,o=r&8388607;return a===255?o?NaN:i*(1/0):a===0?i*1401298464324817e-60*o:i*2**(a-150)*(o+8388608)}e.readFloatLE=n.bind(null,a),e.readFloatBE=n.bind(null,o)}(),typeof Float64Array<`u`?function(){var t=new Float64Array([-0]),n=new Uint8Array(t.buffer),r=n[7]===128;function i(e,r,i){t[0]=e,r[i]=n[0],r[i+1]=n[1],r[i+2]=n[2],r[i+3]=n[3],r[i+4]=n[4],r[i+5]=n[5],r[i+6]=n[6],r[i+7]=n[7]}function a(e,r,i){t[0]=e,r[i]=n[7],r[i+1]=n[6],r[i+2]=n[5],r[i+3]=n[4],r[i+4]=n[3],r[i+5]=n[2],r[i+6]=n[1],r[i+7]=n[0]}e.writeDoubleLE=r?i:a,e.writeDoubleBE=r?a:i;function o(e,r){return n[0]=e[r],n[1]=e[r+1],n[2]=e[r+2],n[3]=e[r+3],n[4]=e[r+4],n[5]=e[r+5],n[6]=e[r+6],n[7]=e[r+7],t[0]}function s(e,r){return n[7]=e[r],n[6]=e[r+1],n[5]=e[r+2],n[4]=e[r+3],n[3]=e[r+4],n[2]=e[r+5],n[1]=e[r+6],n[0]=e[r+7],t[0]}e.readDoubleLE=r?o:s,e.readDoubleBE=r?s:o}():function(){function t(e,t,n,r,i,a){var o=+(r<0);if(o&&(r=-r),r===0)e(0,i,a+t),e(1/r>0?0:2147483648,i,a+n);else if(isNaN(r))e(0,i,a+t),e(2146959360,i,a+n);else if(r>17976931348623157e292)e(0,i,a+t),e((o<<31|2146435072)>>>0,i,a+n);else{var s;if(r<22250738585072014e-324)s=r/5e-324,e(s>>>0,i,a+t),e((o<<31|s/4294967296)>>>0,i,a+n);else{var c=Math.floor(Math.log(r)/Math.LN2);c===1024&&(c=1023),s=r*2**-c,e(s*4503599627370496>>>0,i,a+t),e((o<<31|c+1023<<20|s*1048576&1048575)>>>0,i,a+n)}}}e.writeDoubleLE=t.bind(null,r,0,4),e.writeDoubleBE=t.bind(null,i,4,0);function n(e,t,n,r,i){var a=e(r,i+t),o=e(r,i+n),s=(o>>31)*2+1,c=o>>>20&2047,l=4294967296*(o&1048575)+a;return c===2047?l?NaN:s*(1/0):c===0?s*5e-324*l:s*2**(c-1075)*(l+4503599627370496)}e.readDoubleLE=n.bind(null,a,0,4),e.readDoubleBE=n.bind(null,o,4,0)}(),e}function r(e,t,n){t[n]=e&255,t[n+1]=e>>>8&255,t[n+2]=e>>>16&255,t[n+3]=e>>>24}function i(e,t,n){t[n]=e>>>24,t[n+1]=e>>>16&255,t[n+2]=e>>>8&255,t[n+3]=e&255}function a(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0}function o(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}}),yh=re((exports,module)=>{module.exports=inquire;function inquire(moduleName){try{var mod=eval(`quire`.replace(/^/,`re`))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch{}return null}}),wh=re(e=>{var t=e;t.length=function(e){for(var t=0,n=0,r=0;r<e.length;++r)n=e.charCodeAt(r),n<128?t+=1:n<2048?t+=2:(n&64512)==55296&&(e.charCodeAt(r+1)&64512)==56320?(++r,t+=4):t+=3;return t},t.read=function(e,t,n){if(n-t<1)return``;for(var r=null,i=[],a=0,o;t<n;)o=e[t++],o<128?i[a++]=o:o>191&&o<224?i[a++]=(o&31)<<6|e[t++]&63:o>239&&o<365?(o=((o&7)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,i[a++]=55296+(o>>10),i[a++]=56320+(o&1023)):i[a++]=(o&15)<<12|(e[t++]&63)<<6|e[t++]&63,a>8191&&((r||=[]).push(String.fromCharCode.apply(String,i)),a=0);return r?(a&&r.push(String.fromCharCode.apply(String,i.slice(0,a))),r.join(``)):String.fromCharCode.apply(String,i.slice(0,a))},t.write=function(e,t,n){for(var r=n,i,a,o=0;o<e.length;++o)i=e.charCodeAt(o),i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&((a=e.charCodeAt(o+1))&64512)==56320?(i=65536+((i&1023)<<10)+(a&1023),++o,t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128);return n-r}}),xh=re((e,t)=>{t.exports=n;function n(e,t,n){var r=n||8192,i=r>>>1,a=null,o=r;return function(n){if(n<1||n>i)return e(n);o+n>r&&(a=e(r),o=0);var s=t.call(a,o,o+=n);return o&7&&(o=(o|7)+1),s}}}),Ih=re((e,t)=>{t.exports=r;var n=fr();function r(e,t){this.lo=e>>>0,this.hi=t>>>0}var i=r.zero=new r(0,0);i.toNumber=function(){return 0},i.zzEncode=i.zzDecode=function(){return this},i.length=function(){return 1};var a=r.zeroHash=`\0\0\0\0\0\0\0\0`;r.fromNumber=function(e){if(e===0)return i;var t=e<0;t&&(e=-e);var n=e>>>0,a=(e-n)/4294967296>>>0;return t&&(a=~a>>>0,n=~n>>>0,++n>4294967295&&(n=0,++a>4294967295&&(a=0))),new r(n,a)},r.from=function(e){if(typeof e==`number`)return r.fromNumber(e);if(n.isString(e))if(n.Long)e=n.Long.fromString(e);else return r.fromNumber(parseInt(e,10));return e.low||e.high?new r(e.low>>>0,e.high>>>0):i},r.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var t=~this.lo+1>>>0,n=~this.hi>>>0;return t||(n=n+1>>>0),-(t+n*4294967296)}return this.lo+this.hi*4294967296},r.prototype.toLong=function(e){return n.Long?new n.Long(this.lo|0,this.hi|0,!!e):{low:this.lo|0,high:this.hi|0,unsigned:!!e}};var o=String.prototype.charCodeAt;r.fromHash=function(e){return e===a?i:new r((o.call(e,0)|o.call(e,1)<<8|o.call(e,2)<<16|o.call(e,3)<<24)>>>0,(o.call(e,4)|o.call(e,5)<<8|o.call(e,6)<<16|o.call(e,7)<<24)>>>0)},r.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},r.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this},r.prototype.zzDecode=function(){var e=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this},r.prototype.length=function(){var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return n===0?t===0?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:n<128?9:10}}),fr=re(e=>{var t=e;t.asPromise=oh(),t.base64=uh(),t.EventEmitter=ch(),t.float=bh(),t.inquire=yh(),t.utf8=wh(),t.pool=xh(),t.LongBits=Ih(),t.isNode=!!(typeof global<`u`&&global&&global.process&&global.process.versions&&global.process.versions.node),t.global=t.isNode&&global||typeof window<`u`&&window||typeof self<`u`&&self||e,t.emptyArray=Object.freeze?Object.freeze([]):[],t.emptyObject=Object.freeze?Object.freeze({}):{},t.isInteger=Number.isInteger||function(e){return typeof e==`number`&&isFinite(e)&&Math.floor(e)===e},t.isString=function(e){return typeof e==`string`||e instanceof String},t.isObject=function(e){return e&&typeof e==`object`},t.isset=t.isSet=function(e,t){var n=e[t];return n!=null&&e.hasOwnProperty(t)?typeof n!=`object`||(Array.isArray(n)?n.length:Object.keys(n).length)>0:!1},t.Buffer=function(){try{var e=t.inquire(`buffer`).Buffer;return e.prototype.utf8Write?e:null}catch{return null}}(),t._Buffer_from=null,t._Buffer_allocUnsafe=null,t.newBuffer=function(e){return typeof e==`number`?t.Buffer?t._Buffer_allocUnsafe(e):new t.Array(e):t.Buffer?t._Buffer_from(e):typeof Uint8Array>`u`?e:new Uint8Array(e)},t.Array=typeof Uint8Array<`u`?Uint8Array:Array,t.Long=t.global.dcodeIO&&t.global.dcodeIO.Long||t.global.Long||t.inquire(`long`),t.key2Re=/^true|false|0|1$/,t.key32Re=/^-?(?:0|[1-9][0-9]*)$/,t.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,t.longToHash=function(e){return e?t.LongBits.from(e).toHash():t.LongBits.zeroHash},t.longFromHash=function(e,n){var r=t.LongBits.fromHash(e);return t.Long?t.Long.fromBits(r.lo,r.hi,n):r.toNumber(!!n)};function n(e,t,n){for(var r=Object.keys(t),i=0;i<r.length;++i)(e[r[i]]===void 0||!n)&&(e[r[i]]=t[r[i]]);return e}t.merge=n,t.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)};function r(e){function t(e,r){if(!(this instanceof t))return new t(e,r);Object.defineProperty(this,`message`,{get:function(){return e}}),Error.captureStackTrace?Error.captureStackTrace(this,t):Object.defineProperty(this,`stack`,{value:Error().stack||``}),r&&n(this,r)}return t.prototype=Object.create(Error.prototype,{constructor:{value:t,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return e},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+`: `+this.message},writable:!0,enumerable:!1,configurable:!0}}),t}t.newError=r,t.ProtocolError=r(`ProtocolError`),t.oneOfGetter=function(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=1;return function(){for(var e=Object.keys(this),n=e.length-1;n>-1;--n)if(t[e[n]]===1&&this[e[n]]!==void 0&&this[e[n]]!==null)return e[n]}},t.oneOfSetter=function(e){return function(t){for(var n=0;n<e.length;++n)e[n]!==t&&delete this[e[n]]}},t.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},t._configure=function(){var e=t.Buffer;if(!e){t._Buffer_from=t._Buffer_allocUnsafe=null;return}t._Buffer_from=e.from!==Uint8Array.from&&e.from||function(t,n){return new e(t,n)},t._Buffer_allocUnsafe=e.allocUnsafe||function(t){return new e(t)}}}),hl=re((e,t)=>{t.exports=u;var n=fr(),r,i=n.LongBits,a=n.base64,o=n.utf8;function s(e,t,n){this.fn=e,this.len=t,this.next=void 0,this.val=n}function c(){}function l(e){this.head=e.head,this.tail=e.tail,this.len=e.len,this.next=e.states}function u(){this.len=0,this.head=new s(c,0,0),this.tail=this.head,this.states=null}var d=function(){return n.Buffer?function(){return(u.create=function(){return new r})()}:function(){return new u}};u.create=d(),u.alloc=function(e){return new n.Array(e)},n.Array!==Array&&(u.alloc=n.pool(u.alloc,n.Array.prototype.subarray)),u.prototype._push=function(e,t,n){return this.tail=this.tail.next=new s(e,t,n),this.len+=t,this};function f(e,t,n){t[n]=e&255}function p(e,t,n){for(;e>127;)t[n++]=e&127|128,e>>>=7;t[n]=e}function m(e,t){this.len=e,this.next=void 0,this.val=t}m.prototype=Object.create(s.prototype),m.prototype.fn=p,u.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new m((e>>>=0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,this},u.prototype.int32=function(e){return e<0?this._push(h,10,i.fromNumber(e)):this.uint32(e)},u.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)};function h(e,t,n){for(;e.hi;)t[n++]=e.lo&127|128,e.lo=(e.lo>>>7|e.hi<<25)>>>0,e.hi>>>=7;for(;e.lo>127;)t[n++]=e.lo&127|128,e.lo>>>=7;t[n++]=e.lo}u.prototype.uint64=function(e){var t=i.from(e);return this._push(h,t.length(),t)},u.prototype.int64=u.prototype.uint64,u.prototype.sint64=function(e){var t=i.from(e).zzEncode();return this._push(h,t.length(),t)},u.prototype.bool=function(e){return this._push(f,1,+!!e)};function g(e,t,n){t[n]=e&255,t[n+1]=e>>>8&255,t[n+2]=e>>>16&255,t[n+3]=e>>>24}u.prototype.fixed32=function(e){return this._push(g,4,e>>>0)},u.prototype.sfixed32=u.prototype.fixed32,u.prototype.fixed64=function(e){var t=i.from(e);return this._push(g,4,t.lo)._push(g,4,t.hi)},u.prototype.sfixed64=u.prototype.fixed64,u.prototype.float=function(e){return this._push(n.float.writeFloatLE,4,e)},u.prototype.double=function(e){return this._push(n.float.writeDoubleLE,8,e)};var _=n.Array.prototype.set?function(e,t,n){t.set(e,n)}:function(e,t,n){for(var r=0;r<e.length;++r)t[n+r]=e[r]};u.prototype.bytes=function(e){var t=e.length>>>0;if(!t)return this._push(f,1,0);if(n.isString(e)){var r=u.alloc(t=a.length(e));a.decode(e,r,0),e=r}return this.uint32(t)._push(_,t,e)},u.prototype.string=function(e){var t=o.length(e);return t?this.uint32(t)._push(o.write,t,e):this._push(f,1,0)},u.prototype.fork=function(){return this.states=new l(this),this.head=this.tail=new s(c,0,0),this.len=0,this},u.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new s(c,0,0),this.len=0),this},u.prototype.ldelim=function(){var e=this.head,t=this.tail,n=this.len;return this.reset().uint32(n),n&&(this.tail.next=e.next,this.tail=t,this.len+=n),this},u.prototype.finish=function(){for(var e=this.head.next,t=this.constructor.alloc(this.len),n=0;e;)e.fn(e.val,t,n),n+=e.len,e=e.next;return t},u._configure=function(e){r=e,u.create=d(),r._configure()}}),kh=re((e,t)=>{t.exports=i;var n=hl();(i.prototype=Object.create(n.prototype)).constructor=i;var r=fr();function i(){n.call(this)}i._configure=function(){i.alloc=r._Buffer_allocUnsafe,i.writeBytesBuffer=r.Buffer&&r.Buffer.prototype instanceof Uint8Array&&r.Buffer.prototype.set.name===`set`?function(e,t,n){t.set(e,n)}:function(e,t,n){if(e.copy)e.copy(t,n,0,e.length);else for(var r=0;r<e.length;)t[n++]=e[r++]}},i.prototype.bytes=function(e){r.isString(e)&&(e=r._Buffer_from(e,`base64`));var t=e.length>>>0;return this.uint32(t),t&&this._push(i.writeBytesBuffer,t,e),this};function a(e,t,n){e.length<40?r.utf8.write(e,t,n):t.utf8Write?t.utf8Write(e,n):t.write(e,n)}i.prototype.string=function(e){var t=r.Buffer.byteLength(e);return this.uint32(t),t&&this._push(a,t,e),this},i._configure()}),bl=re((e,t)=>{t.exports=s;var n=fr(),r,i=n.LongBits,a=n.utf8;function o(e,t){return RangeError(`index out of range: `+e.pos+` + `+(t||1)+` > `+e.len)}function s(e){this.buf=e,this.pos=0,this.len=e.length}var c=typeof Uint8Array<`u`?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new s(e);throw Error(`illegal buffer`)}:function(e){if(Array.isArray(e))return new s(e);throw Error(`illegal buffer`)},l=function(){return n.Buffer?function(e){return(s.create=function(e){return n.Buffer.isBuffer(e)?new r(e):c(e)})(e)}:c};s.create=l(),s.prototype._slice=n.Array.prototype.subarray||n.Array.prototype.slice,s.prototype.uint32=function(){var e=4294967295;return function(){if(e=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(e=(e|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return e;if((this.pos+=5)>this.len)throw this.pos=this.len,o(this,10);return e}}(),s.prototype.int32=function(){return this.uint32()|0},s.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(e&1)|0};function u(){var e=new i(0,0),t=0;if(this.len-this.pos>4){for(;t<4;++t)if(e.lo=(e.lo|(this.buf[this.pos]&127)<<t*7)>>>0,this.buf[this.pos++]<128)return e;if(e.lo=(e.lo|(this.buf[this.pos]&127)<<28)>>>0,e.hi=(e.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return e;t=0}else{for(;t<3;++t){if(this.pos>=this.len)throw o(this);if(e.lo=(e.lo|(this.buf[this.pos]&127)<<t*7)>>>0,this.buf[this.pos++]<128)return e}return e.lo=(e.lo|(this.buf[this.pos++]&127)<<t*7)>>>0,e}if(this.len-this.pos>4){for(;t<5;++t)if(e.hi=(e.hi|(this.buf[this.pos]&127)<<t*7+3)>>>0,this.buf[this.pos++]<128)return e}else for(;t<5;++t){if(this.pos>=this.len)throw o(this);if(e.hi=(e.hi|(this.buf[this.pos]&127)<<t*7+3)>>>0,this.buf[this.pos++]<128)return e}throw Error(`invalid varint encoding`)}s.prototype.bool=function(){return this.uint32()!==0};function d(e,t){return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0}s.prototype.fixed32=function(){if(this.pos+4>this.len)throw o(this,4);return d(this.buf,this.pos+=4)},s.prototype.sfixed32=function(){if(this.pos+4>this.len)throw o(this,4);return d(this.buf,this.pos+=4)|0};function f(){if(this.pos+8>this.len)throw o(this,8);return new i(d(this.buf,this.pos+=4),d(this.buf,this.pos+=4))}s.prototype.float=function(){if(this.pos+4>this.len)throw o(this,4);var e=n.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e},s.prototype.double=function(){if(this.pos+8>this.len)throw o(this,4);var e=n.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e},s.prototype.bytes=function(){var e=this.uint32(),t=this.pos,r=this.pos+e;if(r>this.len)throw o(this,e);if(this.pos+=e,Array.isArray(this.buf))return this.buf.slice(t,r);if(t===r){var i=n.Buffer;return i?i.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,t,r)},s.prototype.string=function(){var e=this.bytes();return a.read(e,0,e.length)},s.prototype.skip=function(e){if(typeof e==`number`){if(this.pos+e>this.len)throw o(this,e);this.pos+=e}else do if(this.pos>=this.len)throw o(this);while(this.buf[this.pos++]&128);return this},s.prototype.skipType=function(e){switch(e){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(e=this.uint32()&7)!=4;)this.skipType(e);break;case 5:this.skip(4);break;default:throw Error(`invalid wire type `+e+` at offset `+this.pos)}return this},s._configure=function(e){r=e,s.create=l(),r._configure();var t=n.Long?`toLong`:`toNumber`;n.merge(s.prototype,{int64:function(){return u.call(this)[t](!1)},uint64:function(){return u.call(this)[t](!0)},sint64:function(){return u.call(this).zzDecode()[t](!1)},fixed64:function(){return f.call(this)[t](!0)},sfixed64:function(){return f.call(this)[t](!1)}})}}),Gh=re((e,t)=>{t.exports=i;var n=bl();(i.prototype=Object.create(n.prototype)).constructor=i;var r=fr();function i(e){n.call(this,e)}i._configure=function(){r.Buffer&&(i.prototype._slice=r.Buffer.prototype.slice)},i.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len)):this.buf.toString(`utf-8`,this.pos,this.pos=Math.min(this.pos+e,this.len))},i._configure()}),Wh=re((e,t)=>{t.exports=r;var n=fr();(r.prototype=Object.create(n.EventEmitter.prototype)).constructor=r;function r(e,t,r){if(typeof e!=`function`)throw TypeError(`rpcImpl must be a function`);n.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=!!t,this.responseDelimited=!!r}r.prototype.rpcCall=function e(t,r,i,a,o){if(!a)throw TypeError(`request must be specified`);var s=this;if(!o)return n.asPromise(e,s,t,r,i,a);if(!s.rpcImpl){setTimeout(function(){o(Error(`already ended`))},0);return}try{return s.rpcImpl(t,r[s.requestDelimited?`encodeDelimited`:`encode`](a).finish(),function(e,n){if(e)return s.emit(`error`,e,t),o(e);if(n===null){s.end(!0);return}if(!(n instanceof i))try{n=i[s.responseDelimited?`decodeDelimited`:`decode`](n)}catch(e){return s.emit(`error`,e,t),o(e)}return s.emit(`data`,n,t),o(null,n)})}catch(e){s.emit(`error`,e,t),setTimeout(function(){o(e)},0);return}},r.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit(`end`).off()),this}}),qh=re(e=>{var t=e;t.Service=Wh()}),Kh=re((e,t)=>{t.exports={}}),Jh=re(e=>{var t=e;t.build=`minimal`,t.Writer=hl(),t.BufferWriter=kh(),t.Reader=bl(),t.BufferReader=Gh(),t.util=fr(),t.rpc=qh(),t.roots=Kh(),t.configure=n;function n(){t.util._configure(),t.Writer._configure(t.BufferWriter),t.Reader._configure(t.BufferReader)}n()}),Qh=re((e,t)=>{t.exports=Jh()}),Qr=re((e,t)=>{var n=Qh(),r=n.Reader,i=n.Writer,a=n.util,o=n.roots.default||(n.roots.default={});o.onnx=function(){var e={};return e.Version=function(){var e={},t=Object.create(e);return t[e[0]=`_START_VERSION`]=0,t[e[1]=`IR_VERSION_2017_10_10`]=1,t[e[2]=`IR_VERSION_2017_10_30`]=2,t[e[3]=`IR_VERSION_2017_11_3`]=3,t[e[4]=`IR_VERSION_2019_1_22`]=4,t[e[5]=`IR_VERSION_2019_3_18`]=5,t[e[6]=`IR_VERSION_2019_9_19`]=6,t[e[7]=`IR_VERSION_2020_5_8`]=7,t[e[8]=`IR_VERSION_2021_7_30`]=8,t[e[9]=`IR_VERSION`]=9,t}(),e.AttributeProto=function(){function e(e){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],this.sparseTensors=[],this.typeProtos=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.name=``,e.prototype.refAttrName=``,e.prototype.docString=``,e.prototype.type=0,e.prototype.f=0,e.prototype.i=a.Long?a.Long.fromBits(0,0,!1):0,e.prototype.s=a.newBuffer([]),e.prototype.t=null,e.prototype.g=null,e.prototype.sparseTensor=null,e.prototype.tp=null,e.prototype.floats=a.emptyArray,e.prototype.ints=a.emptyArray,e.prototype.strings=a.emptyArray,e.prototype.tensors=a.emptyArray,e.prototype.graphs=a.emptyArray,e.prototype.sparseTensors=a.emptyArray,e.prototype.typeProtos=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.name!=null&&Object.hasOwnProperty.call(e,`name`)&&t.uint32(10).string(e.name),e.f!=null&&Object.hasOwnProperty.call(e,`f`)&&t.uint32(21).float(e.f),e.i!=null&&Object.hasOwnProperty.call(e,`i`)&&t.uint32(24).int64(e.i),e.s!=null&&Object.hasOwnProperty.call(e,`s`)&&t.uint32(34).bytes(e.s),e.t!=null&&Object.hasOwnProperty.call(e,`t`)&&o.onnx.TensorProto.encode(e.t,t.uint32(42).fork()).ldelim(),e.g!=null&&Object.hasOwnProperty.call(e,`g`)&&o.onnx.GraphProto.encode(e.g,t.uint32(50).fork()).ldelim(),e.floats!=null&&e.floats.length){t.uint32(58).fork();for(var n=0;n<e.floats.length;++n)t.float(e.floats[n]);t.ldelim()}if(e.ints!=null&&e.ints.length){t.uint32(66).fork();for(var n=0;n<e.ints.length;++n)t.int64(e.ints[n]);t.ldelim()}if(e.strings!=null&&e.strings.length)for(var n=0;n<e.strings.length;++n)t.uint32(74).bytes(e.strings[n]);if(e.tensors!=null&&e.tensors.length)for(var n=0;n<e.tensors.length;++n)o.onnx.TensorProto.encode(e.tensors[n],t.uint32(82).fork()).ldelim();if(e.graphs!=null&&e.graphs.length)for(var n=0;n<e.graphs.length;++n)o.onnx.GraphProto.encode(e.graphs[n],t.uint32(90).fork()).ldelim();if(e.docString!=null&&Object.hasOwnProperty.call(e,`docString`)&&t.uint32(106).string(e.docString),e.tp!=null&&Object.hasOwnProperty.call(e,`tp`)&&o.onnx.TypeProto.encode(e.tp,t.uint32(114).fork()).ldelim(),e.typeProtos!=null&&e.typeProtos.length)for(var n=0;n<e.typeProtos.length;++n)o.onnx.TypeProto.encode(e.typeProtos[n],t.uint32(122).fork()).ldelim();if(e.type!=null&&Object.hasOwnProperty.call(e,`type`)&&t.uint32(160).int32(e.type),e.refAttrName!=null&&Object.hasOwnProperty.call(e,`refAttrName`)&&t.uint32(170).string(e.refAttrName),e.sparseTensor!=null&&Object.hasOwnProperty.call(e,`sparseTensor`)&&o.onnx.SparseTensorProto.encode(e.sparseTensor,t.uint32(178).fork()).ldelim(),e.sparseTensors!=null&&e.sparseTensors.length)for(var n=0;n<e.sparseTensors.length;++n)o.onnx.SparseTensorProto.encode(e.sparseTensors[n],t.uint32(186).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.AttributeProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.name=e.string();break;case 21:i.refAttrName=e.string();break;case 13:i.docString=e.string();break;case 20:i.type=e.int32();break;case 2:i.f=e.float();break;case 3:i.i=e.int64();break;case 4:i.s=e.bytes();break;case 5:i.t=o.onnx.TensorProto.decode(e,e.uint32());break;case 6:i.g=o.onnx.GraphProto.decode(e,e.uint32());break;case 22:i.sparseTensor=o.onnx.SparseTensorProto.decode(e,e.uint32());break;case 14:i.tp=o.onnx.TypeProto.decode(e,e.uint32());break;case 7:if(i.floats&&i.floats.length||(i.floats=[]),(a&7)==2)for(var s=e.uint32()+e.pos;e.pos<s;)i.floats.push(e.float());else i.floats.push(e.float());break;case 8:if(i.ints&&i.ints.length||(i.ints=[]),(a&7)==2)for(var s=e.uint32()+e.pos;e.pos<s;)i.ints.push(e.int64());else i.ints.push(e.int64());break;case 9:i.strings&&i.strings.length||(i.strings=[]),i.strings.push(e.bytes());break;case 10:i.tensors&&i.tensors.length||(i.tensors=[]),i.tensors.push(o.onnx.TensorProto.decode(e,e.uint32()));break;case 11:i.graphs&&i.graphs.length||(i.graphs=[]),i.graphs.push(o.onnx.GraphProto.decode(e,e.uint32()));break;case 23:i.sparseTensors&&i.sparseTensors.length||(i.sparseTensors=[]),i.sparseTensors.push(o.onnx.SparseTensorProto.decode(e,e.uint32()));break;case 15:i.typeProtos&&i.typeProtos.length||(i.typeProtos=[]),i.typeProtos.push(o.onnx.TypeProto.decode(e,e.uint32()));break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.name!=null&&e.hasOwnProperty(`name`)&&!a.isString(e.name))return`name: string expected`;if(e.refAttrName!=null&&e.hasOwnProperty(`refAttrName`)&&!a.isString(e.refAttrName))return`refAttrName: string expected`;if(e.docString!=null&&e.hasOwnProperty(`docString`)&&!a.isString(e.docString))return`docString: string expected`;if(e.type!=null&&e.hasOwnProperty(`type`))switch(e.type){default:return`type: enum value expected`;case 0:case 1:case 2:case 3:case 4:case 5:case 11:case 13:case 6:case 7:case 8:case 9:case 10:case 12:case 14:break}if(e.f!=null&&e.hasOwnProperty(`f`)&&typeof e.f!=`number`)return`f: number expected`;if(e.i!=null&&e.hasOwnProperty(`i`)&&!a.isInteger(e.i)&&!(e.i&&a.isInteger(e.i.low)&&a.isInteger(e.i.high)))return`i: integer|Long expected`;if(e.s!=null&&e.hasOwnProperty(`s`)&&!(e.s&&typeof e.s.length==`number`||a.isString(e.s)))return`s: buffer expected`;if(e.t!=null&&e.hasOwnProperty(`t`)){var t=o.onnx.TensorProto.verify(e.t);if(t)return`t.`+t}if(e.g!=null&&e.hasOwnProperty(`g`)){var t=o.onnx.GraphProto.verify(e.g);if(t)return`g.`+t}if(e.sparseTensor!=null&&e.hasOwnProperty(`sparseTensor`)){var t=o.onnx.SparseTensorProto.verify(e.sparseTensor);if(t)return`sparseTensor.`+t}if(e.tp!=null&&e.hasOwnProperty(`tp`)){var t=o.onnx.TypeProto.verify(e.tp);if(t)return`tp.`+t}if(e.floats!=null&&e.hasOwnProperty(`floats`)){if(!Array.isArray(e.floats))return`floats: array expected`;for(var n=0;n<e.floats.length;++n)if(typeof e.floats[n]!=`number`)return`floats: number[] expected`}if(e.ints!=null&&e.hasOwnProperty(`ints`)){if(!Array.isArray(e.ints))return`ints: array expected`;for(var n=0;n<e.ints.length;++n)if(!a.isInteger(e.ints[n])&&!(e.ints[n]&&a.isInteger(e.ints[n].low)&&a.isInteger(e.ints[n].high)))return`ints: integer|Long[] expected`}if(e.strings!=null&&e.hasOwnProperty(`strings`)){if(!Array.isArray(e.strings))return`strings: array expected`;for(var n=0;n<e.strings.length;++n)if(!(e.strings[n]&&typeof e.strings[n].length==`number`||a.isString(e.strings[n])))return`strings: buffer[] expected`}if(e.tensors!=null&&e.hasOwnProperty(`tensors`)){if(!Array.isArray(e.tensors))return`tensors: array expected`;for(var n=0;n<e.tensors.length;++n){var t=o.onnx.TensorProto.verify(e.tensors[n]);if(t)return`tensors.`+t}}if(e.graphs!=null&&e.hasOwnProperty(`graphs`)){if(!Array.isArray(e.graphs))return`graphs: array expected`;for(var n=0;n<e.graphs.length;++n){var t=o.onnx.GraphProto.verify(e.graphs[n]);if(t)return`graphs.`+t}}if(e.sparseTensors!=null&&e.hasOwnProperty(`sparseTensors`)){if(!Array.isArray(e.sparseTensors))return`sparseTensors: array expected`;for(var n=0;n<e.sparseTensors.length;++n){var t=o.onnx.SparseTensorProto.verify(e.sparseTensors[n]);if(t)return`sparseTensors.`+t}}if(e.typeProtos!=null&&e.hasOwnProperty(`typeProtos`)){if(!Array.isArray(e.typeProtos))return`typeProtos: array expected`;for(var n=0;n<e.typeProtos.length;++n){var t=o.onnx.TypeProto.verify(e.typeProtos[n]);if(t)return`typeProtos.`+t}}return null},e.fromObject=function(e){if(e instanceof o.onnx.AttributeProto)return e;var t=new o.onnx.AttributeProto;switch(e.name!=null&&(t.name=String(e.name)),e.refAttrName!=null&&(t.refAttrName=String(e.refAttrName)),e.docString!=null&&(t.docString=String(e.docString)),e.type){default:if(typeof e.type==`number`){t.type=e.type;break}break;case`UNDEFINED`:case 0:t.type=0;break;case`FLOAT`:case 1:t.type=1;break;case`INT`:case 2:t.type=2;break;case`STRING`:case 3:t.type=3;break;case`TENSOR`:case 4:t.type=4;break;case`GRAPH`:case 5:t.type=5;break;case`SPARSE_TENSOR`:case 11:t.type=11;break;case`TYPE_PROTO`:case 13:t.type=13;break;case`FLOATS`:case 6:t.type=6;break;case`INTS`:case 7:t.type=7;break;case`STRINGS`:case 8:t.type=8;break;case`TENSORS`:case 9:t.type=9;break;case`GRAPHS`:case 10:t.type=10;break;case`SPARSE_TENSORS`:case 12:t.type=12;break;case`TYPE_PROTOS`:case 14:t.type=14;break}if(e.f!=null&&(t.f=Number(e.f)),e.i!=null&&(a.Long?(t.i=a.Long.fromValue(e.i)).unsigned=!1:typeof e.i==`string`?t.i=parseInt(e.i,10):typeof e.i==`number`?t.i=e.i:typeof e.i==`object`&&(t.i=new a.LongBits(e.i.low>>>0,e.i.high>>>0).toNumber())),e.s!=null&&(typeof e.s==`string`?a.base64.decode(e.s,t.s=a.newBuffer(a.base64.length(e.s)),0):e.s.length>=0&&(t.s=e.s)),e.t!=null){if(typeof e.t!=`object`)throw TypeError(`.onnx.AttributeProto.t: object expected`);t.t=o.onnx.TensorProto.fromObject(e.t)}if(e.g!=null){if(typeof e.g!=`object`)throw TypeError(`.onnx.AttributeProto.g: object expected`);t.g=o.onnx.GraphProto.fromObject(e.g)}if(e.sparseTensor!=null){if(typeof e.sparseTensor!=`object`)throw TypeError(`.onnx.AttributeProto.sparseTensor: object expected`);t.sparseTensor=o.onnx.SparseTensorProto.fromObject(e.sparseTensor)}if(e.tp!=null){if(typeof e.tp!=`object`)throw TypeError(`.onnx.AttributeProto.tp: object expected`);t.tp=o.onnx.TypeProto.fromObject(e.tp)}if(e.floats){if(!Array.isArray(e.floats))throw TypeError(`.onnx.AttributeProto.floats: array expected`);t.floats=[];for(var n=0;n<e.floats.length;++n)t.floats[n]=Number(e.floats[n])}if(e.ints){if(!Array.isArray(e.ints))throw TypeError(`.onnx.AttributeProto.ints: array expected`);t.ints=[];for(var n=0;n<e.ints.length;++n)a.Long?(t.ints[n]=a.Long.fromValue(e.ints[n])).unsigned=!1:typeof e.ints[n]==`string`?t.ints[n]=parseInt(e.ints[n],10):typeof e.ints[n]==`number`?t.ints[n]=e.ints[n]:typeof e.ints[n]==`object`&&(t.ints[n]=new a.LongBits(e.ints[n].low>>>0,e.ints[n].high>>>0).toNumber())}if(e.strings){if(!Array.isArray(e.strings))throw TypeError(`.onnx.AttributeProto.strings: array expected`);t.strings=[];for(var n=0;n<e.strings.length;++n)typeof e.strings[n]==`string`?a.base64.decode(e.strings[n],t.strings[n]=a.newBuffer(a.base64.length(e.strings[n])),0):e.strings[n].length>=0&&(t.strings[n]=e.strings[n])}if(e.tensors){if(!Array.isArray(e.tensors))throw TypeError(`.onnx.AttributeProto.tensors: array expected`);t.tensors=[];for(var n=0;n<e.tensors.length;++n){if(typeof e.tensors[n]!=`object`)throw TypeError(`.onnx.AttributeProto.tensors: object expected`);t.tensors[n]=o.onnx.TensorProto.fromObject(e.tensors[n])}}if(e.graphs){if(!Array.isArray(e.graphs))throw TypeError(`.onnx.AttributeProto.graphs: array expected`);t.graphs=[];for(var n=0;n<e.graphs.length;++n){if(typeof e.graphs[n]!=`object`)throw TypeError(`.onnx.AttributeProto.graphs: object expected`);t.graphs[n]=o.onnx.GraphProto.fromObject(e.graphs[n])}}if(e.sparseTensors){if(!Array.isArray(e.sparseTensors))throw TypeError(`.onnx.AttributeProto.sparseTensors: array expected`);t.sparseTensors=[];for(var n=0;n<e.sparseTensors.length;++n){if(typeof e.sparseTensors[n]!=`object`)throw TypeError(`.onnx.AttributeProto.sparseTensors: object expected`);t.sparseTensors[n]=o.onnx.SparseTensorProto.fromObject(e.sparseTensors[n])}}if(e.typeProtos){if(!Array.isArray(e.typeProtos))throw TypeError(`.onnx.AttributeProto.typeProtos: array expected`);t.typeProtos=[];for(var n=0;n<e.typeProtos.length;++n){if(typeof e.typeProtos[n]!=`object`)throw TypeError(`.onnx.AttributeProto.typeProtos: object expected`);t.typeProtos[n]=o.onnx.TypeProto.fromObject(e.typeProtos[n])}}return t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.floats=[],n.ints=[],n.strings=[],n.tensors=[],n.graphs=[],n.typeProtos=[],n.sparseTensors=[]),t.defaults){if(n.name=``,n.f=0,a.Long){var r=new a.Long(0,0,!1);n.i=t.longs===String?r.toString():t.longs===Number?r.toNumber():r}else n.i=t.longs===String?`0`:0;t.bytes===String?n.s=``:(n.s=[],t.bytes!==Array&&(n.s=a.newBuffer(n.s))),n.t=null,n.g=null,n.docString=``,n.tp=null,n.type=t.enums===String?`UNDEFINED`:0,n.refAttrName=``,n.sparseTensor=null}if(e.name!=null&&e.hasOwnProperty(`name`)&&(n.name=e.name),e.f!=null&&e.hasOwnProperty(`f`)&&(n.f=t.json&&!isFinite(e.f)?String(e.f):e.f),e.i!=null&&e.hasOwnProperty(`i`)&&(typeof e.i==`number`?n.i=t.longs===String?String(e.i):e.i:n.i=t.longs===String?a.Long.prototype.toString.call(e.i):t.longs===Number?new a.LongBits(e.i.low>>>0,e.i.high>>>0).toNumber():e.i),e.s!=null&&e.hasOwnProperty(`s`)&&(n.s=t.bytes===String?a.base64.encode(e.s,0,e.s.length):t.bytes===Array?Array.prototype.slice.call(e.s):e.s),e.t!=null&&e.hasOwnProperty(`t`)&&(n.t=o.onnx.TensorProto.toObject(e.t,t)),e.g!=null&&e.hasOwnProperty(`g`)&&(n.g=o.onnx.GraphProto.toObject(e.g,t)),e.floats&&e.floats.length){n.floats=[];for(var i=0;i<e.floats.length;++i)n.floats[i]=t.json&&!isFinite(e.floats[i])?String(e.floats[i]):e.floats[i]}if(e.ints&&e.ints.length){n.ints=[];for(var i=0;i<e.ints.length;++i)typeof e.ints[i]==`number`?n.ints[i]=t.longs===String?String(e.ints[i]):e.ints[i]:n.ints[i]=t.longs===String?a.Long.prototype.toString.call(e.ints[i]):t.longs===Number?new a.LongBits(e.ints[i].low>>>0,e.ints[i].high>>>0).toNumber():e.ints[i]}if(e.strings&&e.strings.length){n.strings=[];for(var i=0;i<e.strings.length;++i)n.strings[i]=t.bytes===String?a.base64.encode(e.strings[i],0,e.strings[i].length):t.bytes===Array?Array.prototype.slice.call(e.strings[i]):e.strings[i]}if(e.tensors&&e.tensors.length){n.tensors=[];for(var i=0;i<e.tensors.length;++i)n.tensors[i]=o.onnx.TensorProto.toObject(e.tensors[i],t)}if(e.graphs&&e.graphs.length){n.graphs=[];for(var i=0;i<e.graphs.length;++i)n.graphs[i]=o.onnx.GraphProto.toObject(e.graphs[i],t)}if(e.docString!=null&&e.hasOwnProperty(`docString`)&&(n.docString=e.docString),e.tp!=null&&e.hasOwnProperty(`tp`)&&(n.tp=o.onnx.TypeProto.toObject(e.tp,t)),e.typeProtos&&e.typeProtos.length){n.typeProtos=[];for(var i=0;i<e.typeProtos.length;++i)n.typeProtos[i]=o.onnx.TypeProto.toObject(e.typeProtos[i],t)}if(e.type!=null&&e.hasOwnProperty(`type`)&&(n.type=t.enums===String?o.onnx.AttributeProto.AttributeType[e.type]===void 0?e.type:o.onnx.AttributeProto.AttributeType[e.type]:e.type),e.refAttrName!=null&&e.hasOwnProperty(`refAttrName`)&&(n.refAttrName=e.refAttrName),e.sparseTensor!=null&&e.hasOwnProperty(`sparseTensor`)&&(n.sparseTensor=o.onnx.SparseTensorProto.toObject(e.sparseTensor,t)),e.sparseTensors&&e.sparseTensors.length){n.sparseTensors=[];for(var i=0;i<e.sparseTensors.length;++i)n.sparseTensors[i]=o.onnx.SparseTensorProto.toObject(e.sparseTensors[i],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.AttributeProto`},e.AttributeType=function(){var e={},t=Object.create(e);return t[e[0]=`UNDEFINED`]=0,t[e[1]=`FLOAT`]=1,t[e[2]=`INT`]=2,t[e[3]=`STRING`]=3,t[e[4]=`TENSOR`]=4,t[e[5]=`GRAPH`]=5,t[e[11]=`SPARSE_TENSOR`]=11,t[e[13]=`TYPE_PROTO`]=13,t[e[6]=`FLOATS`]=6,t[e[7]=`INTS`]=7,t[e[8]=`STRINGS`]=8,t[e[9]=`TENSORS`]=9,t[e[10]=`GRAPHS`]=10,t[e[12]=`SPARSE_TENSORS`]=12,t[e[14]=`TYPE_PROTOS`]=14,t}(),e}(),e.ValueInfoProto=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.name=``,e.prototype.type=null,e.prototype.docString=``,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.name!=null&&Object.hasOwnProperty.call(e,`name`)&&t.uint32(10).string(e.name),e.type!=null&&Object.hasOwnProperty.call(e,`type`)&&o.onnx.TypeProto.encode(e.type,t.uint32(18).fork()).ldelim(),e.docString!=null&&Object.hasOwnProperty.call(e,`docString`)&&t.uint32(26).string(e.docString),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.ValueInfoProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.name=e.string();break;case 2:i.type=o.onnx.TypeProto.decode(e,e.uint32());break;case 3:i.docString=e.string();break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.name!=null&&e.hasOwnProperty(`name`)&&!a.isString(e.name))return`name: string expected`;if(e.type!=null&&e.hasOwnProperty(`type`)){var t=o.onnx.TypeProto.verify(e.type);if(t)return`type.`+t}return e.docString!=null&&e.hasOwnProperty(`docString`)&&!a.isString(e.docString)?`docString: string expected`:null},e.fromObject=function(e){if(e instanceof o.onnx.ValueInfoProto)return e;var t=new o.onnx.ValueInfoProto;if(e.name!=null&&(t.name=String(e.name)),e.type!=null){if(typeof e.type!=`object`)throw TypeError(`.onnx.ValueInfoProto.type: object expected`);t.type=o.onnx.TypeProto.fromObject(e.type)}return e.docString!=null&&(t.docString=String(e.docString)),t},e.toObject=function(e,t){t||={};var n={};return t.defaults&&(n.name=``,n.type=null,n.docString=``),e.name!=null&&e.hasOwnProperty(`name`)&&(n.name=e.name),e.type!=null&&e.hasOwnProperty(`type`)&&(n.type=o.onnx.TypeProto.toObject(e.type,t)),e.docString!=null&&e.hasOwnProperty(`docString`)&&(n.docString=e.docString),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.ValueInfoProto`},e}(),e.NodeProto=function(){function e(e){if(this.input=[],this.output=[],this.attribute=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.input=a.emptyArray,e.prototype.output=a.emptyArray,e.prototype.name=``,e.prototype.opType=``,e.prototype.domain=``,e.prototype.attribute=a.emptyArray,e.prototype.docString=``,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.input!=null&&e.input.length)for(var n=0;n<e.input.length;++n)t.uint32(10).string(e.input[n]);if(e.output!=null&&e.output.length)for(var n=0;n<e.output.length;++n)t.uint32(18).string(e.output[n]);if(e.name!=null&&Object.hasOwnProperty.call(e,`name`)&&t.uint32(26).string(e.name),e.opType!=null&&Object.hasOwnProperty.call(e,`opType`)&&t.uint32(34).string(e.opType),e.attribute!=null&&e.attribute.length)for(var n=0;n<e.attribute.length;++n)o.onnx.AttributeProto.encode(e.attribute[n],t.uint32(42).fork()).ldelim();return e.docString!=null&&Object.hasOwnProperty.call(e,`docString`)&&t.uint32(50).string(e.docString),e.domain!=null&&Object.hasOwnProperty.call(e,`domain`)&&t.uint32(58).string(e.domain),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.NodeProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.input&&i.input.length||(i.input=[]),i.input.push(e.string());break;case 2:i.output&&i.output.length||(i.output=[]),i.output.push(e.string());break;case 3:i.name=e.string();break;case 4:i.opType=e.string();break;case 7:i.domain=e.string();break;case 5:i.attribute&&i.attribute.length||(i.attribute=[]),i.attribute.push(o.onnx.AttributeProto.decode(e,e.uint32()));break;case 6:i.docString=e.string();break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.input!=null&&e.hasOwnProperty(`input`)){if(!Array.isArray(e.input))return`input: array expected`;for(var t=0;t<e.input.length;++t)if(!a.isString(e.input[t]))return`input: string[] expected`}if(e.output!=null&&e.hasOwnProperty(`output`)){if(!Array.isArray(e.output))return`output: array expected`;for(var t=0;t<e.output.length;++t)if(!a.isString(e.output[t]))return`output: string[] expected`}if(e.name!=null&&e.hasOwnProperty(`name`)&&!a.isString(e.name))return`name: string expected`;if(e.opType!=null&&e.hasOwnProperty(`opType`)&&!a.isString(e.opType))return`opType: string expected`;if(e.domain!=null&&e.hasOwnProperty(`domain`)&&!a.isString(e.domain))return`domain: string expected`;if(e.attribute!=null&&e.hasOwnProperty(`attribute`)){if(!Array.isArray(e.attribute))return`attribute: array expected`;for(var t=0;t<e.attribute.length;++t){var n=o.onnx.AttributeProto.verify(e.attribute[t]);if(n)return`attribute.`+n}}return e.docString!=null&&e.hasOwnProperty(`docString`)&&!a.isString(e.docString)?`docString: string expected`:null},e.fromObject=function(e){if(e instanceof o.onnx.NodeProto)return e;var t=new o.onnx.NodeProto;if(e.input){if(!Array.isArray(e.input))throw TypeError(`.onnx.NodeProto.input: array expected`);t.input=[];for(var n=0;n<e.input.length;++n)t.input[n]=String(e.input[n])}if(e.output){if(!Array.isArray(e.output))throw TypeError(`.onnx.NodeProto.output: array expected`);t.output=[];for(var n=0;n<e.output.length;++n)t.output[n]=String(e.output[n])}if(e.name!=null&&(t.name=String(e.name)),e.opType!=null&&(t.opType=String(e.opType)),e.domain!=null&&(t.domain=String(e.domain)),e.attribute){if(!Array.isArray(e.attribute))throw TypeError(`.onnx.NodeProto.attribute: array expected`);t.attribute=[];for(var n=0;n<e.attribute.length;++n){if(typeof e.attribute[n]!=`object`)throw TypeError(`.onnx.NodeProto.attribute: object expected`);t.attribute[n]=o.onnx.AttributeProto.fromObject(e.attribute[n])}}return e.docString!=null&&(t.docString=String(e.docString)),t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.input=[],n.output=[],n.attribute=[]),t.defaults&&(n.name=``,n.opType=``,n.docString=``,n.domain=``),e.input&&e.input.length){n.input=[];for(var r=0;r<e.input.length;++r)n.input[r]=e.input[r]}if(e.output&&e.output.length){n.output=[];for(var r=0;r<e.output.length;++r)n.output[r]=e.output[r]}if(e.name!=null&&e.hasOwnProperty(`name`)&&(n.name=e.name),e.opType!=null&&e.hasOwnProperty(`opType`)&&(n.opType=e.opType),e.attribute&&e.attribute.length){n.attribute=[];for(var r=0;r<e.attribute.length;++r)n.attribute[r]=o.onnx.AttributeProto.toObject(e.attribute[r],t)}return e.docString!=null&&e.hasOwnProperty(`docString`)&&(n.docString=e.docString),e.domain!=null&&e.hasOwnProperty(`domain`)&&(n.domain=e.domain),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.NodeProto`},e}(),e.TrainingInfoProto=function(){function e(e){if(this.initializationBinding=[],this.updateBinding=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.initialization=null,e.prototype.algorithm=null,e.prototype.initializationBinding=a.emptyArray,e.prototype.updateBinding=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.initialization!=null&&Object.hasOwnProperty.call(e,`initialization`)&&o.onnx.GraphProto.encode(e.initialization,t.uint32(10).fork()).ldelim(),e.algorithm!=null&&Object.hasOwnProperty.call(e,`algorithm`)&&o.onnx.GraphProto.encode(e.algorithm,t.uint32(18).fork()).ldelim(),e.initializationBinding!=null&&e.initializationBinding.length)for(var n=0;n<e.initializationBinding.length;++n)o.onnx.StringStringEntryProto.encode(e.initializationBinding[n],t.uint32(26).fork()).ldelim();if(e.updateBinding!=null&&e.updateBinding.length)for(var n=0;n<e.updateBinding.length;++n)o.onnx.StringStringEntryProto.encode(e.updateBinding[n],t.uint32(34).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TrainingInfoProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.initialization=o.onnx.GraphProto.decode(e,e.uint32());break;case 2:i.algorithm=o.onnx.GraphProto.decode(e,e.uint32());break;case 3:i.initializationBinding&&i.initializationBinding.length||(i.initializationBinding=[]),i.initializationBinding.push(o.onnx.StringStringEntryProto.decode(e,e.uint32()));break;case 4:i.updateBinding&&i.updateBinding.length||(i.updateBinding=[]),i.updateBinding.push(o.onnx.StringStringEntryProto.decode(e,e.uint32()));break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.initialization!=null&&e.hasOwnProperty(`initialization`)){var t=o.onnx.GraphProto.verify(e.initialization);if(t)return`initialization.`+t}if(e.algorithm!=null&&e.hasOwnProperty(`algorithm`)){var t=o.onnx.GraphProto.verify(e.algorithm);if(t)return`algorithm.`+t}if(e.initializationBinding!=null&&e.hasOwnProperty(`initializationBinding`)){if(!Array.isArray(e.initializationBinding))return`initializationBinding: array expected`;for(var n=0;n<e.initializationBinding.length;++n){var t=o.onnx.StringStringEntryProto.verify(e.initializationBinding[n]);if(t)return`initializationBinding.`+t}}if(e.updateBinding!=null&&e.hasOwnProperty(`updateBinding`)){if(!Array.isArray(e.updateBinding))return`updateBinding: array expected`;for(var n=0;n<e.updateBinding.length;++n){var t=o.onnx.StringStringEntryProto.verify(e.updateBinding[n]);if(t)return`updateBinding.`+t}}return null},e.fromObject=function(e){if(e instanceof o.onnx.TrainingInfoProto)return e;var t=new o.onnx.TrainingInfoProto;if(e.initialization!=null){if(typeof e.initialization!=`object`)throw TypeError(`.onnx.TrainingInfoProto.initialization: object expected`);t.initialization=o.onnx.GraphProto.fromObject(e.initialization)}if(e.algorithm!=null){if(typeof e.algorithm!=`object`)throw TypeError(`.onnx.TrainingInfoProto.algorithm: object expected`);t.algorithm=o.onnx.GraphProto.fromObject(e.algorithm)}if(e.initializationBinding){if(!Array.isArray(e.initializationBinding))throw TypeError(`.onnx.TrainingInfoProto.initializationBinding: array expected`);t.initializationBinding=[];for(var n=0;n<e.initializationBinding.length;++n){if(typeof e.initializationBinding[n]!=`object`)throw TypeError(`.onnx.TrainingInfoProto.initializationBinding: object expected`);t.initializationBinding[n]=o.onnx.StringStringEntryProto.fromObject(e.initializationBinding[n])}}if(e.updateBinding){if(!Array.isArray(e.updateBinding))throw TypeError(`.onnx.TrainingInfoProto.updateBinding: array expected`);t.updateBinding=[];for(var n=0;n<e.updateBinding.length;++n){if(typeof e.updateBinding[n]!=`object`)throw TypeError(`.onnx.TrainingInfoProto.updateBinding: object expected`);t.updateBinding[n]=o.onnx.StringStringEntryProto.fromObject(e.updateBinding[n])}}return t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.initializationBinding=[],n.updateBinding=[]),t.defaults&&(n.initialization=null,n.algorithm=null),e.initialization!=null&&e.hasOwnProperty(`initialization`)&&(n.initialization=o.onnx.GraphProto.toObject(e.initialization,t)),e.algorithm!=null&&e.hasOwnProperty(`algorithm`)&&(n.algorithm=o.onnx.GraphProto.toObject(e.algorithm,t)),e.initializationBinding&&e.initializationBinding.length){n.initializationBinding=[];for(var r=0;r<e.initializationBinding.length;++r)n.initializationBinding[r]=o.onnx.StringStringEntryProto.toObject(e.initializationBinding[r],t)}if(e.updateBinding&&e.updateBinding.length){n.updateBinding=[];for(var r=0;r<e.updateBinding.length;++r)n.updateBinding[r]=o.onnx.StringStringEntryProto.toObject(e.updateBinding[r],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TrainingInfoProto`},e}(),e.ModelProto=function(){function e(e){if(this.opsetImport=[],this.metadataProps=[],this.trainingInfo=[],this.functions=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.irVersion=a.Long?a.Long.fromBits(0,0,!1):0,e.prototype.opsetImport=a.emptyArray,e.prototype.producerName=``,e.prototype.producerVersion=``,e.prototype.domain=``,e.prototype.modelVersion=a.Long?a.Long.fromBits(0,0,!1):0,e.prototype.docString=``,e.prototype.graph=null,e.prototype.metadataProps=a.emptyArray,e.prototype.trainingInfo=a.emptyArray,e.prototype.functions=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.irVersion!=null&&Object.hasOwnProperty.call(e,`irVersion`)&&t.uint32(8).int64(e.irVersion),e.producerName!=null&&Object.hasOwnProperty.call(e,`producerName`)&&t.uint32(18).string(e.producerName),e.producerVersion!=null&&Object.hasOwnProperty.call(e,`producerVersion`)&&t.uint32(26).string(e.producerVersion),e.domain!=null&&Object.hasOwnProperty.call(e,`domain`)&&t.uint32(34).string(e.domain),e.modelVersion!=null&&Object.hasOwnProperty.call(e,`modelVersion`)&&t.uint32(40).int64(e.modelVersion),e.docString!=null&&Object.hasOwnProperty.call(e,`docString`)&&t.uint32(50).string(e.docString),e.graph!=null&&Object.hasOwnProperty.call(e,`graph`)&&o.onnx.GraphProto.encode(e.graph,t.uint32(58).fork()).ldelim(),e.opsetImport!=null&&e.opsetImport.length)for(var n=0;n<e.opsetImport.length;++n)o.onnx.OperatorSetIdProto.encode(e.opsetImport[n],t.uint32(66).fork()).ldelim();if(e.metadataProps!=null&&e.metadataProps.length)for(var n=0;n<e.metadataProps.length;++n)o.onnx.StringStringEntryProto.encode(e.metadataProps[n],t.uint32(114).fork()).ldelim();if(e.trainingInfo!=null&&e.trainingInfo.length)for(var n=0;n<e.trainingInfo.length;++n)o.onnx.TrainingInfoProto.encode(e.trainingInfo[n],t.uint32(162).fork()).ldelim();if(e.functions!=null&&e.functions.length)for(var n=0;n<e.functions.length;++n)o.onnx.FunctionProto.encode(e.functions[n],t.uint32(202).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.ModelProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.irVersion=e.int64();break;case 8:i.opsetImport&&i.opsetImport.length||(i.opsetImport=[]),i.opsetImport.push(o.onnx.OperatorSetIdProto.decode(e,e.uint32()));break;case 2:i.producerName=e.string();break;case 3:i.producerVersion=e.string();break;case 4:i.domain=e.string();break;case 5:i.modelVersion=e.int64();break;case 6:i.docString=e.string();break;case 7:i.graph=o.onnx.GraphProto.decode(e,e.uint32());break;case 14:i.metadataProps&&i.metadataProps.length||(i.metadataProps=[]),i.metadataProps.push(o.onnx.StringStringEntryProto.decode(e,e.uint32()));break;case 20:i.trainingInfo&&i.trainingInfo.length||(i.trainingInfo=[]),i.trainingInfo.push(o.onnx.TrainingInfoProto.decode(e,e.uint32()));break;case 25:i.functions&&i.functions.length||(i.functions=[]),i.functions.push(o.onnx.FunctionProto.decode(e,e.uint32()));break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.irVersion!=null&&e.hasOwnProperty(`irVersion`)&&!a.isInteger(e.irVersion)&&!(e.irVersion&&a.isInteger(e.irVersion.low)&&a.isInteger(e.irVersion.high)))return`irVersion: integer|Long expected`;if(e.opsetImport!=null&&e.hasOwnProperty(`opsetImport`)){if(!Array.isArray(e.opsetImport))return`opsetImport: array expected`;for(var t=0;t<e.opsetImport.length;++t){var n=o.onnx.OperatorSetIdProto.verify(e.opsetImport[t]);if(n)return`opsetImport.`+n}}if(e.producerName!=null&&e.hasOwnProperty(`producerName`)&&!a.isString(e.producerName))return`producerName: string expected`;if(e.producerVersion!=null&&e.hasOwnProperty(`producerVersion`)&&!a.isString(e.producerVersion))return`producerVersion: string expected`;if(e.domain!=null&&e.hasOwnProperty(`domain`)&&!a.isString(e.domain))return`domain: string expected`;if(e.modelVersion!=null&&e.hasOwnProperty(`modelVersion`)&&!a.isInteger(e.modelVersion)&&!(e.modelVersion&&a.isInteger(e.modelVersion.low)&&a.isInteger(e.modelVersion.high)))return`modelVersion: integer|Long expected`;if(e.docString!=null&&e.hasOwnProperty(`docString`)&&!a.isString(e.docString))return`docString: string expected`;if(e.graph!=null&&e.hasOwnProperty(`graph`)){var n=o.onnx.GraphProto.verify(e.graph);if(n)return`graph.`+n}if(e.metadataProps!=null&&e.hasOwnProperty(`metadataProps`)){if(!Array.isArray(e.metadataProps))return`metadataProps: array expected`;for(var t=0;t<e.metadataProps.length;++t){var n=o.onnx.StringStringEntryProto.verify(e.metadataProps[t]);if(n)return`metadataProps.`+n}}if(e.trainingInfo!=null&&e.hasOwnProperty(`trainingInfo`)){if(!Array.isArray(e.trainingInfo))return`trainingInfo: array expected`;for(var t=0;t<e.trainingInfo.length;++t){var n=o.onnx.TrainingInfoProto.verify(e.trainingInfo[t]);if(n)return`trainingInfo.`+n}}if(e.functions!=null&&e.hasOwnProperty(`functions`)){if(!Array.isArray(e.functions))return`functions: array expected`;for(var t=0;t<e.functions.length;++t){var n=o.onnx.FunctionProto.verify(e.functions[t]);if(n)return`functions.`+n}}return null},e.fromObject=function(e){if(e instanceof o.onnx.ModelProto)return e;var t=new o.onnx.ModelProto;if(e.irVersion!=null&&(a.Long?(t.irVersion=a.Long.fromValue(e.irVersion)).unsigned=!1:typeof e.irVersion==`string`?t.irVersion=parseInt(e.irVersion,10):typeof e.irVersion==`number`?t.irVersion=e.irVersion:typeof e.irVersion==`object`&&(t.irVersion=new a.LongBits(e.irVersion.low>>>0,e.irVersion.high>>>0).toNumber())),e.opsetImport){if(!Array.isArray(e.opsetImport))throw TypeError(`.onnx.ModelProto.opsetImport: array expected`);t.opsetImport=[];for(var n=0;n<e.opsetImport.length;++n){if(typeof e.opsetImport[n]!=`object`)throw TypeError(`.onnx.ModelProto.opsetImport: object expected`);t.opsetImport[n]=o.onnx.OperatorSetIdProto.fromObject(e.opsetImport[n])}}if(e.producerName!=null&&(t.producerName=String(e.producerName)),e.producerVersion!=null&&(t.producerVersion=String(e.producerVersion)),e.domain!=null&&(t.domain=String(e.domain)),e.modelVersion!=null&&(a.Long?(t.modelVersion=a.Long.fromValue(e.modelVersion)).unsigned=!1:typeof e.modelVersion==`string`?t.modelVersion=parseInt(e.modelVersion,10):typeof e.modelVersion==`number`?t.modelVersion=e.modelVersion:typeof e.modelVersion==`object`&&(t.modelVersion=new a.LongBits(e.modelVersion.low>>>0,e.modelVersion.high>>>0).toNumber())),e.docString!=null&&(t.docString=String(e.docString)),e.graph!=null){if(typeof e.graph!=`object`)throw TypeError(`.onnx.ModelProto.graph: object expected`);t.graph=o.onnx.GraphProto.fromObject(e.graph)}if(e.metadataProps){if(!Array.isArray(e.metadataProps))throw TypeError(`.onnx.ModelProto.metadataProps: array expected`);t.metadataProps=[];for(var n=0;n<e.metadataProps.length;++n){if(typeof e.metadataProps[n]!=`object`)throw TypeError(`.onnx.ModelProto.metadataProps: object expected`);t.metadataProps[n]=o.onnx.StringStringEntryProto.fromObject(e.metadataProps[n])}}if(e.trainingInfo){if(!Array.isArray(e.trainingInfo))throw TypeError(`.onnx.ModelProto.trainingInfo: array expected`);t.trainingInfo=[];for(var n=0;n<e.trainingInfo.length;++n){if(typeof e.trainingInfo[n]!=`object`)throw TypeError(`.onnx.ModelProto.trainingInfo: object expected`);t.trainingInfo[n]=o.onnx.TrainingInfoProto.fromObject(e.trainingInfo[n])}}if(e.functions){if(!Array.isArray(e.functions))throw TypeError(`.onnx.ModelProto.functions: array expected`);t.functions=[];for(var n=0;n<e.functions.length;++n){if(typeof e.functions[n]!=`object`)throw TypeError(`.onnx.ModelProto.functions: object expected`);t.functions[n]=o.onnx.FunctionProto.fromObject(e.functions[n])}}return t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.opsetImport=[],n.metadataProps=[],n.trainingInfo=[],n.functions=[]),t.defaults){if(a.Long){var r=new a.Long(0,0,!1);n.irVersion=t.longs===String?r.toString():t.longs===Number?r.toNumber():r}else n.irVersion=t.longs===String?`0`:0;if(n.producerName=``,n.producerVersion=``,n.domain=``,a.Long){var r=new a.Long(0,0,!1);n.modelVersion=t.longs===String?r.toString():t.longs===Number?r.toNumber():r}else n.modelVersion=t.longs===String?`0`:0;n.docString=``,n.graph=null}if(e.irVersion!=null&&e.hasOwnProperty(`irVersion`)&&(typeof e.irVersion==`number`?n.irVersion=t.longs===String?String(e.irVersion):e.irVersion:n.irVersion=t.longs===String?a.Long.prototype.toString.call(e.irVersion):t.longs===Number?new a.LongBits(e.irVersion.low>>>0,e.irVersion.high>>>0).toNumber():e.irVersion),e.producerName!=null&&e.hasOwnProperty(`producerName`)&&(n.producerName=e.producerName),e.producerVersion!=null&&e.hasOwnProperty(`producerVersion`)&&(n.producerVersion=e.producerVersion),e.domain!=null&&e.hasOwnProperty(`domain`)&&(n.domain=e.domain),e.modelVersion!=null&&e.hasOwnProperty(`modelVersion`)&&(typeof e.modelVersion==`number`?n.modelVersion=t.longs===String?String(e.modelVersion):e.modelVersion:n.modelVersion=t.longs===String?a.Long.prototype.toString.call(e.modelVersion):t.longs===Number?new a.LongBits(e.modelVersion.low>>>0,e.modelVersion.high>>>0).toNumber():e.modelVersion),e.docString!=null&&e.hasOwnProperty(`docString`)&&(n.docString=e.docString),e.graph!=null&&e.hasOwnProperty(`graph`)&&(n.graph=o.onnx.GraphProto.toObject(e.graph,t)),e.opsetImport&&e.opsetImport.length){n.opsetImport=[];for(var i=0;i<e.opsetImport.length;++i)n.opsetImport[i]=o.onnx.OperatorSetIdProto.toObject(e.opsetImport[i],t)}if(e.metadataProps&&e.metadataProps.length){n.metadataProps=[];for(var i=0;i<e.metadataProps.length;++i)n.metadataProps[i]=o.onnx.StringStringEntryProto.toObject(e.metadataProps[i],t)}if(e.trainingInfo&&e.trainingInfo.length){n.trainingInfo=[];for(var i=0;i<e.trainingInfo.length;++i)n.trainingInfo[i]=o.onnx.TrainingInfoProto.toObject(e.trainingInfo[i],t)}if(e.functions&&e.functions.length){n.functions=[];for(var i=0;i<e.functions.length;++i)n.functions[i]=o.onnx.FunctionProto.toObject(e.functions[i],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.ModelProto`},e}(),e.StringStringEntryProto=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.key=``,e.prototype.value=``,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.key!=null&&Object.hasOwnProperty.call(e,`key`)&&t.uint32(10).string(e.key),e.value!=null&&Object.hasOwnProperty.call(e,`value`)&&t.uint32(18).string(e.value),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.StringStringEntryProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.key=e.string();break;case 2:i.value=e.string();break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){return typeof e!=`object`||!e?`object expected`:e.key!=null&&e.hasOwnProperty(`key`)&&!a.isString(e.key)?`key: string expected`:e.value!=null&&e.hasOwnProperty(`value`)&&!a.isString(e.value)?`value: string expected`:null},e.fromObject=function(e){if(e instanceof o.onnx.StringStringEntryProto)return e;var t=new o.onnx.StringStringEntryProto;return e.key!=null&&(t.key=String(e.key)),e.value!=null&&(t.value=String(e.value)),t},e.toObject=function(e,t){t||={};var n={};return t.defaults&&(n.key=``,n.value=``),e.key!=null&&e.hasOwnProperty(`key`)&&(n.key=e.key),e.value!=null&&e.hasOwnProperty(`value`)&&(n.value=e.value),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.StringStringEntryProto`},e}(),e.TensorAnnotation=function(){function e(e){if(this.quantParameterTensorNames=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.tensorName=``,e.prototype.quantParameterTensorNames=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.tensorName!=null&&Object.hasOwnProperty.call(e,`tensorName`)&&t.uint32(10).string(e.tensorName),e.quantParameterTensorNames!=null&&e.quantParameterTensorNames.length)for(var n=0;n<e.quantParameterTensorNames.length;++n)o.onnx.StringStringEntryProto.encode(e.quantParameterTensorNames[n],t.uint32(18).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TensorAnnotation;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.tensorName=e.string();break;case 2:i.quantParameterTensorNames&&i.quantParameterTensorNames.length||(i.quantParameterTensorNames=[]),i.quantParameterTensorNames.push(o.onnx.StringStringEntryProto.decode(e,e.uint32()));break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.tensorName!=null&&e.hasOwnProperty(`tensorName`)&&!a.isString(e.tensorName))return`tensorName: string expected`;if(e.quantParameterTensorNames!=null&&e.hasOwnProperty(`quantParameterTensorNames`)){if(!Array.isArray(e.quantParameterTensorNames))return`quantParameterTensorNames: array expected`;for(var t=0;t<e.quantParameterTensorNames.length;++t){var n=o.onnx.StringStringEntryProto.verify(e.quantParameterTensorNames[t]);if(n)return`quantParameterTensorNames.`+n}}return null},e.fromObject=function(e){if(e instanceof o.onnx.TensorAnnotation)return e;var t=new o.onnx.TensorAnnotation;if(e.tensorName!=null&&(t.tensorName=String(e.tensorName)),e.quantParameterTensorNames){if(!Array.isArray(e.quantParameterTensorNames))throw TypeError(`.onnx.TensorAnnotation.quantParameterTensorNames: array expected`);t.quantParameterTensorNames=[];for(var n=0;n<e.quantParameterTensorNames.length;++n){if(typeof e.quantParameterTensorNames[n]!=`object`)throw TypeError(`.onnx.TensorAnnotation.quantParameterTensorNames: object expected`);t.quantParameterTensorNames[n]=o.onnx.StringStringEntryProto.fromObject(e.quantParameterTensorNames[n])}}return t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.quantParameterTensorNames=[]),t.defaults&&(n.tensorName=``),e.tensorName!=null&&e.hasOwnProperty(`tensorName`)&&(n.tensorName=e.tensorName),e.quantParameterTensorNames&&e.quantParameterTensorNames.length){n.quantParameterTensorNames=[];for(var r=0;r<e.quantParameterTensorNames.length;++r)n.quantParameterTensorNames[r]=o.onnx.StringStringEntryProto.toObject(e.quantParameterTensorNames[r],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TensorAnnotation`},e}(),e.GraphProto=function(){function e(e){if(this.node=[],this.initializer=[],this.sparseInitializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.node=a.emptyArray,e.prototype.name=``,e.prototype.initializer=a.emptyArray,e.prototype.sparseInitializer=a.emptyArray,e.prototype.docString=``,e.prototype.input=a.emptyArray,e.prototype.output=a.emptyArray,e.prototype.valueInfo=a.emptyArray,e.prototype.quantizationAnnotation=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.node!=null&&e.node.length)for(var n=0;n<e.node.length;++n)o.onnx.NodeProto.encode(e.node[n],t.uint32(10).fork()).ldelim();if(e.name!=null&&Object.hasOwnProperty.call(e,`name`)&&t.uint32(18).string(e.name),e.initializer!=null&&e.initializer.length)for(var n=0;n<e.initializer.length;++n)o.onnx.TensorProto.encode(e.initializer[n],t.uint32(42).fork()).ldelim();if(e.docString!=null&&Object.hasOwnProperty.call(e,`docString`)&&t.uint32(82).string(e.docString),e.input!=null&&e.input.length)for(var n=0;n<e.input.length;++n)o.onnx.ValueInfoProto.encode(e.input[n],t.uint32(90).fork()).ldelim();if(e.output!=null&&e.output.length)for(var n=0;n<e.output.length;++n)o.onnx.ValueInfoProto.encode(e.output[n],t.uint32(98).fork()).ldelim();if(e.valueInfo!=null&&e.valueInfo.length)for(var n=0;n<e.valueInfo.length;++n)o.onnx.ValueInfoProto.encode(e.valueInfo[n],t.uint32(106).fork()).ldelim();if(e.quantizationAnnotation!=null&&e.quantizationAnnotation.length)for(var n=0;n<e.quantizationAnnotation.length;++n)o.onnx.TensorAnnotation.encode(e.quantizationAnnotation[n],t.uint32(114).fork()).ldelim();if(e.sparseInitializer!=null&&e.sparseInitializer.length)for(var n=0;n<e.sparseInitializer.length;++n)o.onnx.SparseTensorProto.encode(e.sparseInitializer[n],t.uint32(122).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.GraphProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.node&&i.node.length||(i.node=[]),i.node.push(o.onnx.NodeProto.decode(e,e.uint32()));break;case 2:i.name=e.string();break;case 5:i.initializer&&i.initializer.length||(i.initializer=[]),i.initializer.push(o.onnx.TensorProto.decode(e,e.uint32()));break;case 15:i.sparseInitializer&&i.sparseInitializer.length||(i.sparseInitializer=[]),i.sparseInitializer.push(o.onnx.SparseTensorProto.decode(e,e.uint32()));break;case 10:i.docString=e.string();break;case 11:i.input&&i.input.length||(i.input=[]),i.input.push(o.onnx.ValueInfoProto.decode(e,e.uint32()));break;case 12:i.output&&i.output.length||(i.output=[]),i.output.push(o.onnx.ValueInfoProto.decode(e,e.uint32()));break;case 13:i.valueInfo&&i.valueInfo.length||(i.valueInfo=[]),i.valueInfo.push(o.onnx.ValueInfoProto.decode(e,e.uint32()));break;case 14:i.quantizationAnnotation&&i.quantizationAnnotation.length||(i.quantizationAnnotation=[]),i.quantizationAnnotation.push(o.onnx.TensorAnnotation.decode(e,e.uint32()));break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.node!=null&&e.hasOwnProperty(`node`)){if(!Array.isArray(e.node))return`node: array expected`;for(var t=0;t<e.node.length;++t){var n=o.onnx.NodeProto.verify(e.node[t]);if(n)return`node.`+n}}if(e.name!=null&&e.hasOwnProperty(`name`)&&!a.isString(e.name))return`name: string expected`;if(e.initializer!=null&&e.hasOwnProperty(`initializer`)){if(!Array.isArray(e.initializer))return`initializer: array expected`;for(var t=0;t<e.initializer.length;++t){var n=o.onnx.TensorProto.verify(e.initializer[t]);if(n)return`initializer.`+n}}if(e.sparseInitializer!=null&&e.hasOwnProperty(`sparseInitializer`)){if(!Array.isArray(e.sparseInitializer))return`sparseInitializer: array expected`;for(var t=0;t<e.sparseInitializer.length;++t){var n=o.onnx.SparseTensorProto.verify(e.sparseInitializer[t]);if(n)return`sparseInitializer.`+n}}if(e.docString!=null&&e.hasOwnProperty(`docString`)&&!a.isString(e.docString))return`docString: string expected`;if(e.input!=null&&e.hasOwnProperty(`input`)){if(!Array.isArray(e.input))return`input: array expected`;for(var t=0;t<e.input.length;++t){var n=o.onnx.ValueInfoProto.verify(e.input[t]);if(n)return`input.`+n}}if(e.output!=null&&e.hasOwnProperty(`output`)){if(!Array.isArray(e.output))return`output: array expected`;for(var t=0;t<e.output.length;++t){var n=o.onnx.ValueInfoProto.verify(e.output[t]);if(n)return`output.`+n}}if(e.valueInfo!=null&&e.hasOwnProperty(`valueInfo`)){if(!Array.isArray(e.valueInfo))return`valueInfo: array expected`;for(var t=0;t<e.valueInfo.length;++t){var n=o.onnx.ValueInfoProto.verify(e.valueInfo[t]);if(n)return`valueInfo.`+n}}if(e.quantizationAnnotation!=null&&e.hasOwnProperty(`quantizationAnnotation`)){if(!Array.isArray(e.quantizationAnnotation))return`quantizationAnnotation: array expected`;for(var t=0;t<e.quantizationAnnotation.length;++t){var n=o.onnx.TensorAnnotation.verify(e.quantizationAnnotation[t]);if(n)return`quantizationAnnotation.`+n}}return null},e.fromObject=function(e){if(e instanceof o.onnx.GraphProto)return e;var t=new o.onnx.GraphProto;if(e.node){if(!Array.isArray(e.node))throw TypeError(`.onnx.GraphProto.node: array expected`);t.node=[];for(var n=0;n<e.node.length;++n){if(typeof e.node[n]!=`object`)throw TypeError(`.onnx.GraphProto.node: object expected`);t.node[n]=o.onnx.NodeProto.fromObject(e.node[n])}}if(e.name!=null&&(t.name=String(e.name)),e.initializer){if(!Array.isArray(e.initializer))throw TypeError(`.onnx.GraphProto.initializer: array expected`);t.initializer=[];for(var n=0;n<e.initializer.length;++n){if(typeof e.initializer[n]!=`object`)throw TypeError(`.onnx.GraphProto.initializer: object expected`);t.initializer[n]=o.onnx.TensorProto.fromObject(e.initializer[n])}}if(e.sparseInitializer){if(!Array.isArray(e.sparseInitializer))throw TypeError(`.onnx.GraphProto.sparseInitializer: array expected`);t.sparseInitializer=[];for(var n=0;n<e.sparseInitializer.length;++n){if(typeof e.sparseInitializer[n]!=`object`)throw TypeError(`.onnx.GraphProto.sparseInitializer: object expected`);t.sparseInitializer[n]=o.onnx.SparseTensorProto.fromObject(e.sparseInitializer[n])}}if(e.docString!=null&&(t.docString=String(e.docString)),e.input){if(!Array.isArray(e.input))throw TypeError(`.onnx.GraphProto.input: array expected`);t.input=[];for(var n=0;n<e.input.length;++n){if(typeof e.input[n]!=`object`)throw TypeError(`.onnx.GraphProto.input: object expected`);t.input[n]=o.onnx.ValueInfoProto.fromObject(e.input[n])}}if(e.output){if(!Array.isArray(e.output))throw TypeError(`.onnx.GraphProto.output: array expected`);t.output=[];for(var n=0;n<e.output.length;++n){if(typeof e.output[n]!=`object`)throw TypeError(`.onnx.GraphProto.output: object expected`);t.output[n]=o.onnx.ValueInfoProto.fromObject(e.output[n])}}if(e.valueInfo){if(!Array.isArray(e.valueInfo))throw TypeError(`.onnx.GraphProto.valueInfo: array expected`);t.valueInfo=[];for(var n=0;n<e.valueInfo.length;++n){if(typeof e.valueInfo[n]!=`object`)throw TypeError(`.onnx.GraphProto.valueInfo: object expected`);t.valueInfo[n]=o.onnx.ValueInfoProto.fromObject(e.valueInfo[n])}}if(e.quantizationAnnotation){if(!Array.isArray(e.quantizationAnnotation))throw TypeError(`.onnx.GraphProto.quantizationAnnotation: array expected`);t.quantizationAnnotation=[];for(var n=0;n<e.quantizationAnnotation.length;++n){if(typeof e.quantizationAnnotation[n]!=`object`)throw TypeError(`.onnx.GraphProto.quantizationAnnotation: object expected`);t.quantizationAnnotation[n]=o.onnx.TensorAnnotation.fromObject(e.quantizationAnnotation[n])}}return t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.node=[],n.initializer=[],n.input=[],n.output=[],n.valueInfo=[],n.quantizationAnnotation=[],n.sparseInitializer=[]),t.defaults&&(n.name=``,n.docString=``),e.node&&e.node.length){n.node=[];for(var r=0;r<e.node.length;++r)n.node[r]=o.onnx.NodeProto.toObject(e.node[r],t)}if(e.name!=null&&e.hasOwnProperty(`name`)&&(n.name=e.name),e.initializer&&e.initializer.length){n.initializer=[];for(var r=0;r<e.initializer.length;++r)n.initializer[r]=o.onnx.TensorProto.toObject(e.initializer[r],t)}if(e.docString!=null&&e.hasOwnProperty(`docString`)&&(n.docString=e.docString),e.input&&e.input.length){n.input=[];for(var r=0;r<e.input.length;++r)n.input[r]=o.onnx.ValueInfoProto.toObject(e.input[r],t)}if(e.output&&e.output.length){n.output=[];for(var r=0;r<e.output.length;++r)n.output[r]=o.onnx.ValueInfoProto.toObject(e.output[r],t)}if(e.valueInfo&&e.valueInfo.length){n.valueInfo=[];for(var r=0;r<e.valueInfo.length;++r)n.valueInfo[r]=o.onnx.ValueInfoProto.toObject(e.valueInfo[r],t)}if(e.quantizationAnnotation&&e.quantizationAnnotation.length){n.quantizationAnnotation=[];for(var r=0;r<e.quantizationAnnotation.length;++r)n.quantizationAnnotation[r]=o.onnx.TensorAnnotation.toObject(e.quantizationAnnotation[r],t)}if(e.sparseInitializer&&e.sparseInitializer.length){n.sparseInitializer=[];for(var r=0;r<e.sparseInitializer.length;++r)n.sparseInitializer[r]=o.onnx.SparseTensorProto.toObject(e.sparseInitializer[r],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.GraphProto`},e}(),e.TensorProto=function(){function e(e){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.dims=a.emptyArray,e.prototype.dataType=0,e.prototype.segment=null,e.prototype.floatData=a.emptyArray,e.prototype.int32Data=a.emptyArray,e.prototype.stringData=a.emptyArray,e.prototype.int64Data=a.emptyArray,e.prototype.name=``,e.prototype.docString=``,e.prototype.rawData=a.newBuffer([]),e.prototype.externalData=a.emptyArray,e.prototype.dataLocation=0,e.prototype.doubleData=a.emptyArray,e.prototype.uint64Data=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.dims!=null&&e.dims.length){t.uint32(10).fork();for(var n=0;n<e.dims.length;++n)t.int64(e.dims[n]);t.ldelim()}if(e.dataType!=null&&Object.hasOwnProperty.call(e,`dataType`)&&t.uint32(16).int32(e.dataType),e.segment!=null&&Object.hasOwnProperty.call(e,`segment`)&&o.onnx.TensorProto.Segment.encode(e.segment,t.uint32(26).fork()).ldelim(),e.floatData!=null&&e.floatData.length){t.uint32(34).fork();for(var n=0;n<e.floatData.length;++n)t.float(e.floatData[n]);t.ldelim()}if(e.int32Data!=null&&e.int32Data.length){t.uint32(42).fork();for(var n=0;n<e.int32Data.length;++n)t.int32(e.int32Data[n]);t.ldelim()}if(e.stringData!=null&&e.stringData.length)for(var n=0;n<e.stringData.length;++n)t.uint32(50).bytes(e.stringData[n]);if(e.int64Data!=null&&e.int64Data.length){t.uint32(58).fork();for(var n=0;n<e.int64Data.length;++n)t.int64(e.int64Data[n]);t.ldelim()}if(e.name!=null&&Object.hasOwnProperty.call(e,`name`)&&t.uint32(66).string(e.name),e.rawData!=null&&Object.hasOwnProperty.call(e,`rawData`)&&t.uint32(74).bytes(e.rawData),e.doubleData!=null&&e.doubleData.length){t.uint32(82).fork();for(var n=0;n<e.doubleData.length;++n)t.double(e.doubleData[n]);t.ldelim()}if(e.uint64Data!=null&&e.uint64Data.length){t.uint32(90).fork();for(var n=0;n<e.uint64Data.length;++n)t.uint64(e.uint64Data[n]);t.ldelim()}if(e.docString!=null&&Object.hasOwnProperty.call(e,`docString`)&&t.uint32(98).string(e.docString),e.externalData!=null&&e.externalData.length)for(var n=0;n<e.externalData.length;++n)o.onnx.StringStringEntryProto.encode(e.externalData[n],t.uint32(106).fork()).ldelim();return e.dataLocation!=null&&Object.hasOwnProperty.call(e,`dataLocation`)&&t.uint32(112).int32(e.dataLocation),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TensorProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:if(i.dims&&i.dims.length||(i.dims=[]),(a&7)==2)for(var s=e.uint32()+e.pos;e.pos<s;)i.dims.push(e.int64());else i.dims.push(e.int64());break;case 2:i.dataType=e.int32();break;case 3:i.segment=o.onnx.TensorProto.Segment.decode(e,e.uint32());break;case 4:if(i.floatData&&i.floatData.length||(i.floatData=[]),(a&7)==2)for(var s=e.uint32()+e.pos;e.pos<s;)i.floatData.push(e.float());else i.floatData.push(e.float());break;case 5:if(i.int32Data&&i.int32Data.length||(i.int32Data=[]),(a&7)==2)for(var s=e.uint32()+e.pos;e.pos<s;)i.int32Data.push(e.int32());else i.int32Data.push(e.int32());break;case 6:i.stringData&&i.stringData.length||(i.stringData=[]),i.stringData.push(e.bytes());break;case 7:if(i.int64Data&&i.int64Data.length||(i.int64Data=[]),(a&7)==2)for(var s=e.uint32()+e.pos;e.pos<s;)i.int64Data.push(e.int64());else i.int64Data.push(e.int64());break;case 8:i.name=e.string();break;case 12:i.docString=e.string();break;case 9:i.rawData=e.bytes();break;case 13:i.externalData&&i.externalData.length||(i.externalData=[]),i.externalData.push(o.onnx.StringStringEntryProto.decode(e,e.uint32()));break;case 14:i.dataLocation=e.int32();break;case 10:if(i.doubleData&&i.doubleData.length||(i.doubleData=[]),(a&7)==2)for(var s=e.uint32()+e.pos;e.pos<s;)i.doubleData.push(e.double());else i.doubleData.push(e.double());break;case 11:if(i.uint64Data&&i.uint64Data.length||(i.uint64Data=[]),(a&7)==2)for(var s=e.uint32()+e.pos;e.pos<s;)i.uint64Data.push(e.uint64());else i.uint64Data.push(e.uint64());break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.dims!=null&&e.hasOwnProperty(`dims`)){if(!Array.isArray(e.dims))return`dims: array expected`;for(var t=0;t<e.dims.length;++t)if(!a.isInteger(e.dims[t])&&!(e.dims[t]&&a.isInteger(e.dims[t].low)&&a.isInteger(e.dims[t].high)))return`dims: integer|Long[] expected`}if(e.dataType!=null&&e.hasOwnProperty(`dataType`)&&!a.isInteger(e.dataType))return`dataType: integer expected`;if(e.segment!=null&&e.hasOwnProperty(`segment`)){var n=o.onnx.TensorProto.Segment.verify(e.segment);if(n)return`segment.`+n}if(e.floatData!=null&&e.hasOwnProperty(`floatData`)){if(!Array.isArray(e.floatData))return`floatData: array expected`;for(var t=0;t<e.floatData.length;++t)if(typeof e.floatData[t]!=`number`)return`floatData: number[] expected`}if(e.int32Data!=null&&e.hasOwnProperty(`int32Data`)){if(!Array.isArray(e.int32Data))return`int32Data: array expected`;for(var t=0;t<e.int32Data.length;++t)if(!a.isInteger(e.int32Data[t]))return`int32Data: integer[] expected`}if(e.stringData!=null&&e.hasOwnProperty(`stringData`)){if(!Array.isArray(e.stringData))return`stringData: array expected`;for(var t=0;t<e.stringData.length;++t)if(!(e.stringData[t]&&typeof e.stringData[t].length==`number`||a.isString(e.stringData[t])))return`stringData: buffer[] expected`}if(e.int64Data!=null&&e.hasOwnProperty(`int64Data`)){if(!Array.isArray(e.int64Data))return`int64Data: array expected`;for(var t=0;t<e.int64Data.length;++t)if(!a.isInteger(e.int64Data[t])&&!(e.int64Data[t]&&a.isInteger(e.int64Data[t].low)&&a.isInteger(e.int64Data[t].high)))return`int64Data: integer|Long[] expected`}if(e.name!=null&&e.hasOwnProperty(`name`)&&!a.isString(e.name))return`name: string expected`;if(e.docString!=null&&e.hasOwnProperty(`docString`)&&!a.isString(e.docString))return`docString: string expected`;if(e.rawData!=null&&e.hasOwnProperty(`rawData`)&&!(e.rawData&&typeof e.rawData.length==`number`||a.isString(e.rawData)))return`rawData: buffer expected`;if(e.externalData!=null&&e.hasOwnProperty(`externalData`)){if(!Array.isArray(e.externalData))return`externalData: array expected`;for(var t=0;t<e.externalData.length;++t){var n=o.onnx.StringStringEntryProto.verify(e.externalData[t]);if(n)return`externalData.`+n}}if(e.dataLocation!=null&&e.hasOwnProperty(`dataLocation`))switch(e.dataLocation){default:return`dataLocation: enum value expected`;case 0:case 1:break}if(e.doubleData!=null&&e.hasOwnProperty(`doubleData`)){if(!Array.isArray(e.doubleData))return`doubleData: array expected`;for(var t=0;t<e.doubleData.length;++t)if(typeof e.doubleData[t]!=`number`)return`doubleData: number[] expected`}if(e.uint64Data!=null&&e.hasOwnProperty(`uint64Data`)){if(!Array.isArray(e.uint64Data))return`uint64Data: array expected`;for(var t=0;t<e.uint64Data.length;++t)if(!a.isInteger(e.uint64Data[t])&&!(e.uint64Data[t]&&a.isInteger(e.uint64Data[t].low)&&a.isInteger(e.uint64Data[t].high)))return`uint64Data: integer|Long[] expected`}return null},e.fromObject=function(e){if(e instanceof o.onnx.TensorProto)return e;var t=new o.onnx.TensorProto;if(e.dims){if(!Array.isArray(e.dims))throw TypeError(`.onnx.TensorProto.dims: array expected`);t.dims=[];for(var n=0;n<e.dims.length;++n)a.Long?(t.dims[n]=a.Long.fromValue(e.dims[n])).unsigned=!1:typeof e.dims[n]==`string`?t.dims[n]=parseInt(e.dims[n],10):typeof e.dims[n]==`number`?t.dims[n]=e.dims[n]:typeof e.dims[n]==`object`&&(t.dims[n]=new a.LongBits(e.dims[n].low>>>0,e.dims[n].high>>>0).toNumber())}if(e.dataType!=null&&(t.dataType=e.dataType|0),e.segment!=null){if(typeof e.segment!=`object`)throw TypeError(`.onnx.TensorProto.segment: object expected`);t.segment=o.onnx.TensorProto.Segment.fromObject(e.segment)}if(e.floatData){if(!Array.isArray(e.floatData))throw TypeError(`.onnx.TensorProto.floatData: array expected`);t.floatData=[];for(var n=0;n<e.floatData.length;++n)t.floatData[n]=Number(e.floatData[n])}if(e.int32Data){if(!Array.isArray(e.int32Data))throw TypeError(`.onnx.TensorProto.int32Data: array expected`);t.int32Data=[];for(var n=0;n<e.int32Data.length;++n)t.int32Data[n]=e.int32Data[n]|0}if(e.stringData){if(!Array.isArray(e.stringData))throw TypeError(`.onnx.TensorProto.stringData: array expected`);t.stringData=[];for(var n=0;n<e.stringData.length;++n)typeof e.stringData[n]==`string`?a.base64.decode(e.stringData[n],t.stringData[n]=a.newBuffer(a.base64.length(e.stringData[n])),0):e.stringData[n].length>=0&&(t.stringData[n]=e.stringData[n])}if(e.int64Data){if(!Array.isArray(e.int64Data))throw TypeError(`.onnx.TensorProto.int64Data: array expected`);t.int64Data=[];for(var n=0;n<e.int64Data.length;++n)a.Long?(t.int64Data[n]=a.Long.fromValue(e.int64Data[n])).unsigned=!1:typeof e.int64Data[n]==`string`?t.int64Data[n]=parseInt(e.int64Data[n],10):typeof e.int64Data[n]==`number`?t.int64Data[n]=e.int64Data[n]:typeof e.int64Data[n]==`object`&&(t.int64Data[n]=new a.LongBits(e.int64Data[n].low>>>0,e.int64Data[n].high>>>0).toNumber())}if(e.name!=null&&(t.name=String(e.name)),e.docString!=null&&(t.docString=String(e.docString)),e.rawData!=null&&(typeof e.rawData==`string`?a.base64.decode(e.rawData,t.rawData=a.newBuffer(a.base64.length(e.rawData)),0):e.rawData.length>=0&&(t.rawData=e.rawData)),e.externalData){if(!Array.isArray(e.externalData))throw TypeError(`.onnx.TensorProto.externalData: array expected`);t.externalData=[];for(var n=0;n<e.externalData.length;++n){if(typeof e.externalData[n]!=`object`)throw TypeError(`.onnx.TensorProto.externalData: object expected`);t.externalData[n]=o.onnx.StringStringEntryProto.fromObject(e.externalData[n])}}switch(e.dataLocation){default:if(typeof e.dataLocation==`number`){t.dataLocation=e.dataLocation;break}break;case`DEFAULT`:case 0:t.dataLocation=0;break;case`EXTERNAL`:case 1:t.dataLocation=1;break}if(e.doubleData){if(!Array.isArray(e.doubleData))throw TypeError(`.onnx.TensorProto.doubleData: array expected`);t.doubleData=[];for(var n=0;n<e.doubleData.length;++n)t.doubleData[n]=Number(e.doubleData[n])}if(e.uint64Data){if(!Array.isArray(e.uint64Data))throw TypeError(`.onnx.TensorProto.uint64Data: array expected`);t.uint64Data=[];for(var n=0;n<e.uint64Data.length;++n)a.Long?(t.uint64Data[n]=a.Long.fromValue(e.uint64Data[n])).unsigned=!0:typeof e.uint64Data[n]==`string`?t.uint64Data[n]=parseInt(e.uint64Data[n],10):typeof e.uint64Data[n]==`number`?t.uint64Data[n]=e.uint64Data[n]:typeof e.uint64Data[n]==`object`&&(t.uint64Data[n]=new a.LongBits(e.uint64Data[n].low>>>0,e.uint64Data[n].high>>>0).toNumber(!0))}return t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.dims=[],n.floatData=[],n.int32Data=[],n.stringData=[],n.int64Data=[],n.doubleData=[],n.uint64Data=[],n.externalData=[]),t.defaults&&(n.dataType=0,n.segment=null,n.name=``,t.bytes===String?n.rawData=``:(n.rawData=[],t.bytes!==Array&&(n.rawData=a.newBuffer(n.rawData))),n.docString=``,n.dataLocation=t.enums===String?`DEFAULT`:0),e.dims&&e.dims.length){n.dims=[];for(var r=0;r<e.dims.length;++r)typeof e.dims[r]==`number`?n.dims[r]=t.longs===String?String(e.dims[r]):e.dims[r]:n.dims[r]=t.longs===String?a.Long.prototype.toString.call(e.dims[r]):t.longs===Number?new a.LongBits(e.dims[r].low>>>0,e.dims[r].high>>>0).toNumber():e.dims[r]}if(e.dataType!=null&&e.hasOwnProperty(`dataType`)&&(n.dataType=e.dataType),e.segment!=null&&e.hasOwnProperty(`segment`)&&(n.segment=o.onnx.TensorProto.Segment.toObject(e.segment,t)),e.floatData&&e.floatData.length){n.floatData=[];for(var r=0;r<e.floatData.length;++r)n.floatData[r]=t.json&&!isFinite(e.floatData[r])?String(e.floatData[r]):e.floatData[r]}if(e.int32Data&&e.int32Data.length){n.int32Data=[];for(var r=0;r<e.int32Data.length;++r)n.int32Data[r]=e.int32Data[r]}if(e.stringData&&e.stringData.length){n.stringData=[];for(var r=0;r<e.stringData.length;++r)n.stringData[r]=t.bytes===String?a.base64.encode(e.stringData[r],0,e.stringData[r].length):t.bytes===Array?Array.prototype.slice.call(e.stringData[r]):e.stringData[r]}if(e.int64Data&&e.int64Data.length){n.int64Data=[];for(var r=0;r<e.int64Data.length;++r)typeof e.int64Data[r]==`number`?n.int64Data[r]=t.longs===String?String(e.int64Data[r]):e.int64Data[r]:n.int64Data[r]=t.longs===String?a.Long.prototype.toString.call(e.int64Data[r]):t.longs===Number?new a.LongBits(e.int64Data[r].low>>>0,e.int64Data[r].high>>>0).toNumber():e.int64Data[r]}if(e.name!=null&&e.hasOwnProperty(`name`)&&(n.name=e.name),e.rawData!=null&&e.hasOwnProperty(`rawData`)&&(n.rawData=t.bytes===String?a.base64.encode(e.rawData,0,e.rawData.length):t.bytes===Array?Array.prototype.slice.call(e.rawData):e.rawData),e.doubleData&&e.doubleData.length){n.doubleData=[];for(var r=0;r<e.doubleData.length;++r)n.doubleData[r]=t.json&&!isFinite(e.doubleData[r])?String(e.doubleData[r]):e.doubleData[r]}if(e.uint64Data&&e.uint64Data.length){n.uint64Data=[];for(var r=0;r<e.uint64Data.length;++r)typeof e.uint64Data[r]==`number`?n.uint64Data[r]=t.longs===String?String(e.uint64Data[r]):e.uint64Data[r]:n.uint64Data[r]=t.longs===String?a.Long.prototype.toString.call(e.uint64Data[r]):t.longs===Number?new a.LongBits(e.uint64Data[r].low>>>0,e.uint64Data[r].high>>>0).toNumber(!0):e.uint64Data[r]}if(e.docString!=null&&e.hasOwnProperty(`docString`)&&(n.docString=e.docString),e.externalData&&e.externalData.length){n.externalData=[];for(var r=0;r<e.externalData.length;++r)n.externalData[r]=o.onnx.StringStringEntryProto.toObject(e.externalData[r],t)}return e.dataLocation!=null&&e.hasOwnProperty(`dataLocation`)&&(n.dataLocation=t.enums===String?o.onnx.TensorProto.DataLocation[e.dataLocation]===void 0?e.dataLocation:o.onnx.TensorProto.DataLocation[e.dataLocation]:e.dataLocation),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TensorProto`},e.DataType=function(){var e={},t=Object.create(e);return t[e[0]=`UNDEFINED`]=0,t[e[1]=`FLOAT`]=1,t[e[2]=`UINT8`]=2,t[e[3]=`INT8`]=3,t[e[4]=`UINT16`]=4,t[e[5]=`INT16`]=5,t[e[6]=`INT32`]=6,t[e[7]=`INT64`]=7,t[e[8]=`STRING`]=8,t[e[9]=`BOOL`]=9,t[e[10]=`FLOAT16`]=10,t[e[11]=`DOUBLE`]=11,t[e[12]=`UINT32`]=12,t[e[13]=`UINT64`]=13,t[e[14]=`COMPLEX64`]=14,t[e[15]=`COMPLEX128`]=15,t[e[16]=`BFLOAT16`]=16,t[e[17]=`FLOAT8E4M3FN`]=17,t[e[18]=`FLOAT8E4M3FNUZ`]=18,t[e[19]=`FLOAT8E5M2`]=19,t[e[20]=`FLOAT8E5M2FNUZ`]=20,t}(),e.Segment=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.begin=a.Long?a.Long.fromBits(0,0,!1):0,e.prototype.end=a.Long?a.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.begin!=null&&Object.hasOwnProperty.call(e,`begin`)&&t.uint32(8).int64(e.begin),e.end!=null&&Object.hasOwnProperty.call(e,`end`)&&t.uint32(16).int64(e.end),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TensorProto.Segment;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.begin=e.int64();break;case 2:i.end=e.int64();break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){return typeof e!=`object`||!e?`object expected`:e.begin!=null&&e.hasOwnProperty(`begin`)&&!a.isInteger(e.begin)&&!(e.begin&&a.isInteger(e.begin.low)&&a.isInteger(e.begin.high))?`begin: integer|Long expected`:e.end!=null&&e.hasOwnProperty(`end`)&&!a.isInteger(e.end)&&!(e.end&&a.isInteger(e.end.low)&&a.isInteger(e.end.high))?`end: integer|Long expected`:null},e.fromObject=function(e){if(e instanceof o.onnx.TensorProto.Segment)return e;var t=new o.onnx.TensorProto.Segment;return e.begin!=null&&(a.Long?(t.begin=a.Long.fromValue(e.begin)).unsigned=!1:typeof e.begin==`string`?t.begin=parseInt(e.begin,10):typeof e.begin==`number`?t.begin=e.begin:typeof e.begin==`object`&&(t.begin=new a.LongBits(e.begin.low>>>0,e.begin.high>>>0).toNumber())),e.end!=null&&(a.Long?(t.end=a.Long.fromValue(e.end)).unsigned=!1:typeof e.end==`string`?t.end=parseInt(e.end,10):typeof e.end==`number`?t.end=e.end:typeof e.end==`object`&&(t.end=new a.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber())),t},e.toObject=function(e,t){t||={};var n={};if(t.defaults){if(a.Long){var r=new a.Long(0,0,!1);n.begin=t.longs===String?r.toString():t.longs===Number?r.toNumber():r}else n.begin=t.longs===String?`0`:0;if(a.Long){var r=new a.Long(0,0,!1);n.end=t.longs===String?r.toString():t.longs===Number?r.toNumber():r}else n.end=t.longs===String?`0`:0}return e.begin!=null&&e.hasOwnProperty(`begin`)&&(typeof e.begin==`number`?n.begin=t.longs===String?String(e.begin):e.begin:n.begin=t.longs===String?a.Long.prototype.toString.call(e.begin):t.longs===Number?new a.LongBits(e.begin.low>>>0,e.begin.high>>>0).toNumber():e.begin),e.end!=null&&e.hasOwnProperty(`end`)&&(typeof e.end==`number`?n.end=t.longs===String?String(e.end):e.end:n.end=t.longs===String?a.Long.prototype.toString.call(e.end):t.longs===Number?new a.LongBits(e.end.low>>>0,e.end.high>>>0).toNumber():e.end),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TensorProto.Segment`},e}(),e.DataLocation=function(){var e={},t=Object.create(e);return t[e[0]=`DEFAULT`]=0,t[e[1]=`EXTERNAL`]=1,t}(),e}(),e.SparseTensorProto=function(){function e(e){if(this.dims=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.values=null,e.prototype.indices=null,e.prototype.dims=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.values!=null&&Object.hasOwnProperty.call(e,`values`)&&o.onnx.TensorProto.encode(e.values,t.uint32(10).fork()).ldelim(),e.indices!=null&&Object.hasOwnProperty.call(e,`indices`)&&o.onnx.TensorProto.encode(e.indices,t.uint32(18).fork()).ldelim(),e.dims!=null&&e.dims.length){t.uint32(26).fork();for(var n=0;n<e.dims.length;++n)t.int64(e.dims[n]);t.ldelim()}return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.SparseTensorProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.values=o.onnx.TensorProto.decode(e,e.uint32());break;case 2:i.indices=o.onnx.TensorProto.decode(e,e.uint32());break;case 3:if(i.dims&&i.dims.length||(i.dims=[]),(a&7)==2)for(var s=e.uint32()+e.pos;e.pos<s;)i.dims.push(e.int64());else i.dims.push(e.int64());break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.values!=null&&e.hasOwnProperty(`values`)){var t=o.onnx.TensorProto.verify(e.values);if(t)return`values.`+t}if(e.indices!=null&&e.hasOwnProperty(`indices`)){var t=o.onnx.TensorProto.verify(e.indices);if(t)return`indices.`+t}if(e.dims!=null&&e.hasOwnProperty(`dims`)){if(!Array.isArray(e.dims))return`dims: array expected`;for(var n=0;n<e.dims.length;++n)if(!a.isInteger(e.dims[n])&&!(e.dims[n]&&a.isInteger(e.dims[n].low)&&a.isInteger(e.dims[n].high)))return`dims: integer|Long[] expected`}return null},e.fromObject=function(e){if(e instanceof o.onnx.SparseTensorProto)return e;var t=new o.onnx.SparseTensorProto;if(e.values!=null){if(typeof e.values!=`object`)throw TypeError(`.onnx.SparseTensorProto.values: object expected`);t.values=o.onnx.TensorProto.fromObject(e.values)}if(e.indices!=null){if(typeof e.indices!=`object`)throw TypeError(`.onnx.SparseTensorProto.indices: object expected`);t.indices=o.onnx.TensorProto.fromObject(e.indices)}if(e.dims){if(!Array.isArray(e.dims))throw TypeError(`.onnx.SparseTensorProto.dims: array expected`);t.dims=[];for(var n=0;n<e.dims.length;++n)a.Long?(t.dims[n]=a.Long.fromValue(e.dims[n])).unsigned=!1:typeof e.dims[n]==`string`?t.dims[n]=parseInt(e.dims[n],10):typeof e.dims[n]==`number`?t.dims[n]=e.dims[n]:typeof e.dims[n]==`object`&&(t.dims[n]=new a.LongBits(e.dims[n].low>>>0,e.dims[n].high>>>0).toNumber())}return t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.dims=[]),t.defaults&&(n.values=null,n.indices=null),e.values!=null&&e.hasOwnProperty(`values`)&&(n.values=o.onnx.TensorProto.toObject(e.values,t)),e.indices!=null&&e.hasOwnProperty(`indices`)&&(n.indices=o.onnx.TensorProto.toObject(e.indices,t)),e.dims&&e.dims.length){n.dims=[];for(var r=0;r<e.dims.length;++r)typeof e.dims[r]==`number`?n.dims[r]=t.longs===String?String(e.dims[r]):e.dims[r]:n.dims[r]=t.longs===String?a.Long.prototype.toString.call(e.dims[r]):t.longs===Number?new a.LongBits(e.dims[r].low>>>0,e.dims[r].high>>>0).toNumber():e.dims[r]}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.SparseTensorProto`},e}(),e.TensorShapeProto=function(){function e(e){if(this.dim=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.dim=a.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.dim!=null&&e.dim.length)for(var n=0;n<e.dim.length;++n)o.onnx.TensorShapeProto.Dimension.encode(e.dim[n],t.uint32(10).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TensorShapeProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.dim&&i.dim.length||(i.dim=[]),i.dim.push(o.onnx.TensorShapeProto.Dimension.decode(e,e.uint32()));break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.dim!=null&&e.hasOwnProperty(`dim`)){if(!Array.isArray(e.dim))return`dim: array expected`;for(var t=0;t<e.dim.length;++t){var n=o.onnx.TensorShapeProto.Dimension.verify(e.dim[t]);if(n)return`dim.`+n}}return null},e.fromObject=function(e){if(e instanceof o.onnx.TensorShapeProto)return e;var t=new o.onnx.TensorShapeProto;if(e.dim){if(!Array.isArray(e.dim))throw TypeError(`.onnx.TensorShapeProto.dim: array expected`);t.dim=[];for(var n=0;n<e.dim.length;++n){if(typeof e.dim[n]!=`object`)throw TypeError(`.onnx.TensorShapeProto.dim: object expected`);t.dim[n]=o.onnx.TensorShapeProto.Dimension.fromObject(e.dim[n])}}return t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.dim=[]),e.dim&&e.dim.length){n.dim=[];for(var r=0;r<e.dim.length;++r)n.dim[r]=o.onnx.TensorShapeProto.Dimension.toObject(e.dim[r],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TensorShapeProto`},e.Dimension=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}e.prototype.dimValue=null,e.prototype.dimParam=null,e.prototype.denotation=``;var t;return Object.defineProperty(e.prototype,`value`,{get:a.oneOfGetter(t=[`dimValue`,`dimParam`]),set:a.oneOfSetter(t)}),e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.dimValue!=null&&Object.hasOwnProperty.call(e,`dimValue`)&&t.uint32(8).int64(e.dimValue),e.dimParam!=null&&Object.hasOwnProperty.call(e,`dimParam`)&&t.uint32(18).string(e.dimParam),e.denotation!=null&&Object.hasOwnProperty.call(e,`denotation`)&&t.uint32(26).string(e.denotation),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TensorShapeProto.Dimension;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.dimValue=e.int64();break;case 2:i.dimParam=e.string();break;case 3:i.denotation=e.string();break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;var t={};if(e.dimValue!=null&&e.hasOwnProperty(`dimValue`)&&(t.value=1,!a.isInteger(e.dimValue)&&!(e.dimValue&&a.isInteger(e.dimValue.low)&&a.isInteger(e.dimValue.high))))return`dimValue: integer|Long expected`;if(e.dimParam!=null&&e.hasOwnProperty(`dimParam`)){if(t.value===1)return`value: multiple values`;if(t.value=1,!a.isString(e.dimParam))return`dimParam: string expected`}return e.denotation!=null&&e.hasOwnProperty(`denotation`)&&!a.isString(e.denotation)?`denotation: string expected`:null},e.fromObject=function(e){if(e instanceof o.onnx.TensorShapeProto.Dimension)return e;var t=new o.onnx.TensorShapeProto.Dimension;return e.dimValue!=null&&(a.Long?(t.dimValue=a.Long.fromValue(e.dimValue)).unsigned=!1:typeof e.dimValue==`string`?t.dimValue=parseInt(e.dimValue,10):typeof e.dimValue==`number`?t.dimValue=e.dimValue:typeof e.dimValue==`object`&&(t.dimValue=new a.LongBits(e.dimValue.low>>>0,e.dimValue.high>>>0).toNumber())),e.dimParam!=null&&(t.dimParam=String(e.dimParam)),e.denotation!=null&&(t.denotation=String(e.denotation)),t},e.toObject=function(e,t){t||={};var n={};return t.defaults&&(n.denotation=``),e.dimValue!=null&&e.hasOwnProperty(`dimValue`)&&(typeof e.dimValue==`number`?n.dimValue=t.longs===String?String(e.dimValue):e.dimValue:n.dimValue=t.longs===String?a.Long.prototype.toString.call(e.dimValue):t.longs===Number?new a.LongBits(e.dimValue.low>>>0,e.dimValue.high>>>0).toNumber():e.dimValue,t.oneofs&&(n.value=`dimValue`)),e.dimParam!=null&&e.hasOwnProperty(`dimParam`)&&(n.dimParam=e.dimParam,t.oneofs&&(n.value=`dimParam`)),e.denotation!=null&&e.hasOwnProperty(`denotation`)&&(n.denotation=e.denotation),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TensorShapeProto.Dimension`},e}(),e}(),e.TypeProto=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}e.prototype.tensorType=null,e.prototype.sequenceType=null,e.prototype.mapType=null,e.prototype.optionalType=null,e.prototype.sparseTensorType=null,e.prototype.denotation=``;var t;return Object.defineProperty(e.prototype,`value`,{get:a.oneOfGetter(t=[`tensorType`,`sequenceType`,`mapType`,`optionalType`,`sparseTensorType`]),set:a.oneOfSetter(t)}),e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.tensorType!=null&&Object.hasOwnProperty.call(e,`tensorType`)&&o.onnx.TypeProto.Tensor.encode(e.tensorType,t.uint32(10).fork()).ldelim(),e.sequenceType!=null&&Object.hasOwnProperty.call(e,`sequenceType`)&&o.onnx.TypeProto.Sequence.encode(e.sequenceType,t.uint32(34).fork()).ldelim(),e.mapType!=null&&Object.hasOwnProperty.call(e,`mapType`)&&o.onnx.TypeProto.Map.encode(e.mapType,t.uint32(42).fork()).ldelim(),e.denotation!=null&&Object.hasOwnProperty.call(e,`denotation`)&&t.uint32(50).string(e.denotation),e.sparseTensorType!=null&&Object.hasOwnProperty.call(e,`sparseTensorType`)&&o.onnx.TypeProto.SparseTensor.encode(e.sparseTensorType,t.uint32(66).fork()).ldelim(),e.optionalType!=null&&Object.hasOwnProperty.call(e,`optionalType`)&&o.onnx.TypeProto.Optional.encode(e.optionalType,t.uint32(74).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TypeProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.tensorType=o.onnx.TypeProto.Tensor.decode(e,e.uint32());break;case 4:i.sequenceType=o.onnx.TypeProto.Sequence.decode(e,e.uint32());break;case 5:i.mapType=o.onnx.TypeProto.Map.decode(e,e.uint32());break;case 9:i.optionalType=o.onnx.TypeProto.Optional.decode(e,e.uint32());break;case 8:i.sparseTensorType=o.onnx.TypeProto.SparseTensor.decode(e,e.uint32());break;case 6:i.denotation=e.string();break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;var t={};if(e.tensorType!=null&&e.hasOwnProperty(`tensorType`)){t.value=1;var n=o.onnx.TypeProto.Tensor.verify(e.tensorType);if(n)return`tensorType.`+n}if(e.sequenceType!=null&&e.hasOwnProperty(`sequenceType`)){if(t.value===1)return`value: multiple values`;t.value=1;var n=o.onnx.TypeProto.Sequence.verify(e.sequenceType);if(n)return`sequenceType.`+n}if(e.mapType!=null&&e.hasOwnProperty(`mapType`)){if(t.value===1)return`value: multiple values`;t.value=1;var n=o.onnx.TypeProto.Map.verify(e.mapType);if(n)return`mapType.`+n}if(e.optionalType!=null&&e.hasOwnProperty(`optionalType`)){if(t.value===1)return`value: multiple values`;t.value=1;var n=o.onnx.TypeProto.Optional.verify(e.optionalType);if(n)return`optionalType.`+n}if(e.sparseTensorType!=null&&e.hasOwnProperty(`sparseTensorType`)){if(t.value===1)return`value: multiple values`;t.value=1;var n=o.onnx.TypeProto.SparseTensor.verify(e.sparseTensorType);if(n)return`sparseTensorType.`+n}return e.denotation!=null&&e.hasOwnProperty(`denotation`)&&!a.isString(e.denotation)?`denotation: string expected`:null},e.fromObject=function(e){if(e instanceof o.onnx.TypeProto)return e;var t=new o.onnx.TypeProto;if(e.tensorType!=null){if(typeof e.tensorType!=`object`)throw TypeError(`.onnx.TypeProto.tensorType: object expected`);t.tensorType=o.onnx.TypeProto.Tensor.fromObject(e.tensorType)}if(e.sequenceType!=null){if(typeof e.sequenceType!=`object`)throw TypeError(`.onnx.TypeProto.sequenceType: object expected`);t.sequenceType=o.onnx.TypeProto.Sequence.fromObject(e.sequenceType)}if(e.mapType!=null){if(typeof e.mapType!=`object`)throw TypeError(`.onnx.TypeProto.mapType: object expected`);t.mapType=o.onnx.TypeProto.Map.fromObject(e.mapType)}if(e.optionalType!=null){if(typeof e.optionalType!=`object`)throw TypeError(`.onnx.TypeProto.optionalType: object expected`);t.optionalType=o.onnx.TypeProto.Optional.fromObject(e.optionalType)}if(e.sparseTensorType!=null){if(typeof e.sparseTensorType!=`object`)throw TypeError(`.onnx.TypeProto.sparseTensorType: object expected`);t.sparseTensorType=o.onnx.TypeProto.SparseTensor.fromObject(e.sparseTensorType)}return e.denotation!=null&&(t.denotation=String(e.denotation)),t},e.toObject=function(e,t){t||={};var n={};return t.defaults&&(n.denotation=``),e.tensorType!=null&&e.hasOwnProperty(`tensorType`)&&(n.tensorType=o.onnx.TypeProto.Tensor.toObject(e.tensorType,t),t.oneofs&&(n.value=`tensorType`)),e.sequenceType!=null&&e.hasOwnProperty(`sequenceType`)&&(n.sequenceType=o.onnx.TypeProto.Sequence.toObject(e.sequenceType,t),t.oneofs&&(n.value=`sequenceType`)),e.mapType!=null&&e.hasOwnProperty(`mapType`)&&(n.mapType=o.onnx.TypeProto.Map.toObject(e.mapType,t),t.oneofs&&(n.value=`mapType`)),e.denotation!=null&&e.hasOwnProperty(`denotation`)&&(n.denotation=e.denotation),e.sparseTensorType!=null&&e.hasOwnProperty(`sparseTensorType`)&&(n.sparseTensorType=o.onnx.TypeProto.SparseTensor.toObject(e.sparseTensorType,t),t.oneofs&&(n.value=`sparseTensorType`)),e.optionalType!=null&&e.hasOwnProperty(`optionalType`)&&(n.optionalType=o.onnx.TypeProto.Optional.toObject(e.optionalType,t),t.oneofs&&(n.value=`optionalType`)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TypeProto`},e.Tensor=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.elemType=0,e.prototype.shape=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.elemType!=null&&Object.hasOwnProperty.call(e,`elemType`)&&t.uint32(8).int32(e.elemType),e.shape!=null&&Object.hasOwnProperty.call(e,`shape`)&&o.onnx.TensorShapeProto.encode(e.shape,t.uint32(18).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TypeProto.Tensor;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.elemType=e.int32();break;case 2:i.shape=o.onnx.TensorShapeProto.decode(e,e.uint32());break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.elemType!=null&&e.hasOwnProperty(`elemType`)&&!a.isInteger(e.elemType))return`elemType: integer expected`;if(e.shape!=null&&e.hasOwnProperty(`shape`)){var t=o.onnx.TensorShapeProto.verify(e.shape);if(t)return`shape.`+t}return null},e.fromObject=function(e){if(e instanceof o.onnx.TypeProto.Tensor)return e;var t=new o.onnx.TypeProto.Tensor;if(e.elemType!=null&&(t.elemType=e.elemType|0),e.shape!=null){if(typeof e.shape!=`object`)throw TypeError(`.onnx.TypeProto.Tensor.shape: object expected`);t.shape=o.onnx.TensorShapeProto.fromObject(e.shape)}return t},e.toObject=function(e,t){t||={};var n={};return t.defaults&&(n.elemType=0,n.shape=null),e.elemType!=null&&e.hasOwnProperty(`elemType`)&&(n.elemType=e.elemType),e.shape!=null&&e.hasOwnProperty(`shape`)&&(n.shape=o.onnx.TensorShapeProto.toObject(e.shape,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TypeProto.Tensor`},e}(),e.Sequence=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.elemType=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.elemType!=null&&Object.hasOwnProperty.call(e,`elemType`)&&o.onnx.TypeProto.encode(e.elemType,t.uint32(10).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TypeProto.Sequence;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.elemType=o.onnx.TypeProto.decode(e,e.uint32());break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.elemType!=null&&e.hasOwnProperty(`elemType`)){var t=o.onnx.TypeProto.verify(e.elemType);if(t)return`elemType.`+t}return null},e.fromObject=function(e){if(e instanceof o.onnx.TypeProto.Sequence)return e;var t=new o.onnx.TypeProto.Sequence;if(e.elemType!=null){if(typeof e.elemType!=`object`)throw TypeError(`.onnx.TypeProto.Sequence.elemType: object expected`);t.elemType=o.onnx.TypeProto.fromObject(e.elemType)}return t},e.toObject=function(e,t){t||={};var n={};return t.defaults&&(n.elemType=null),e.elemType!=null&&e.hasOwnProperty(`elemType`)&&(n.elemType=o.onnx.TypeProto.toObject(e.elemType,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TypeProto.Sequence`},e}(),e.Map=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.keyType=0,e.prototype.valueType=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.keyType!=null&&Object.hasOwnProperty.call(e,`keyType`)&&t.uint32(8).int32(e.keyType),e.valueType!=null&&Object.hasOwnProperty.call(e,`valueType`)&&o.onnx.TypeProto.encode(e.valueType,t.uint32(18).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TypeProto.Map;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.keyType=e.int32();break;case 2:i.valueType=o.onnx.TypeProto.decode(e,e.uint32());break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.keyType!=null&&e.hasOwnProperty(`keyType`)&&!a.isInteger(e.keyType))return`keyType: integer expected`;if(e.valueType!=null&&e.hasOwnProperty(`valueType`)){var t=o.onnx.TypeProto.verify(e.valueType);if(t)return`valueType.`+t}return null},e.fromObject=function(e){if(e instanceof o.onnx.TypeProto.Map)return e;var t=new o.onnx.TypeProto.Map;if(e.keyType!=null&&(t.keyType=e.keyType|0),e.valueType!=null){if(typeof e.valueType!=`object`)throw TypeError(`.onnx.TypeProto.Map.valueType: object expected`);t.valueType=o.onnx.TypeProto.fromObject(e.valueType)}return t},e.toObject=function(e,t){t||={};var n={};return t.defaults&&(n.keyType=0,n.valueType=null),e.keyType!=null&&e.hasOwnProperty(`keyType`)&&(n.keyType=e.keyType),e.valueType!=null&&e.hasOwnProperty(`valueType`)&&(n.valueType=o.onnx.TypeProto.toObject(e.valueType,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TypeProto.Map`},e}(),e.Optional=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.elemType=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.elemType!=null&&Object.hasOwnProperty.call(e,`elemType`)&&o.onnx.TypeProto.encode(e.elemType,t.uint32(10).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TypeProto.Optional;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.elemType=o.onnx.TypeProto.decode(e,e.uint32());break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.elemType!=null&&e.hasOwnProperty(`elemType`)){var t=o.onnx.TypeProto.verify(e.elemType);if(t)return`elemType.`+t}return null},e.fromObject=function(e){if(e instanceof o.onnx.TypeProto.Optional)return e;var t=new o.onnx.TypeProto.Optional;if(e.elemType!=null){if(typeof e.elemType!=`object`)throw TypeError(`.onnx.TypeProto.Optional.elemType: object expected`);t.elemType=o.onnx.TypeProto.fromObject(e.elemType)}return t},e.toObject=function(e,t){t||={};var n={};return t.defaults&&(n.elemType=null),e.elemType!=null&&e.hasOwnProperty(`elemType`)&&(n.elemType=o.onnx.TypeProto.toObject(e.elemType,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TypeProto.Optional`},e}(),e.SparseTensor=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.elemType=0,e.prototype.shape=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.elemType!=null&&Object.hasOwnProperty.call(e,`elemType`)&&t.uint32(8).int32(e.elemType),e.shape!=null&&Object.hasOwnProperty.call(e,`shape`)&&o.onnx.TensorShapeProto.encode(e.shape,t.uint32(18).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.TypeProto.SparseTensor;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.elemType=e.int32();break;case 2:i.shape=o.onnx.TensorShapeProto.decode(e,e.uint32());break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.elemType!=null&&e.hasOwnProperty(`elemType`)&&!a.isInteger(e.elemType))return`elemType: integer expected`;if(e.shape!=null&&e.hasOwnProperty(`shape`)){var t=o.onnx.TensorShapeProto.verify(e.shape);if(t)return`shape.`+t}return null},e.fromObject=function(e){if(e instanceof o.onnx.TypeProto.SparseTensor)return e;var t=new o.onnx.TypeProto.SparseTensor;if(e.elemType!=null&&(t.elemType=e.elemType|0),e.shape!=null){if(typeof e.shape!=`object`)throw TypeError(`.onnx.TypeProto.SparseTensor.shape: object expected`);t.shape=o.onnx.TensorShapeProto.fromObject(e.shape)}return t},e.toObject=function(e,t){t||={};var n={};return t.defaults&&(n.elemType=0,n.shape=null),e.elemType!=null&&e.hasOwnProperty(`elemType`)&&(n.elemType=e.elemType),e.shape!=null&&e.hasOwnProperty(`shape`)&&(n.shape=o.onnx.TensorShapeProto.toObject(e.shape,t)),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.TypeProto.SparseTensor`},e}(),e}(),e.OperatorSetIdProto=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.domain=``,e.prototype.version=a.Long?a.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||=i.create(),e.domain!=null&&Object.hasOwnProperty.call(e,`domain`)&&t.uint32(10).string(e.domain),e.version!=null&&Object.hasOwnProperty.call(e,`version`)&&t.uint32(16).int64(e.version),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.OperatorSetIdProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.domain=e.string();break;case 2:i.version=e.int64();break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){return typeof e!=`object`||!e?`object expected`:e.domain!=null&&e.hasOwnProperty(`domain`)&&!a.isString(e.domain)?`domain: string expected`:e.version!=null&&e.hasOwnProperty(`version`)&&!a.isInteger(e.version)&&!(e.version&&a.isInteger(e.version.low)&&a.isInteger(e.version.high))?`version: integer|Long expected`:null},e.fromObject=function(e){if(e instanceof o.onnx.OperatorSetIdProto)return e;var t=new o.onnx.OperatorSetIdProto;return e.domain!=null&&(t.domain=String(e.domain)),e.version!=null&&(a.Long?(t.version=a.Long.fromValue(e.version)).unsigned=!1:typeof e.version==`string`?t.version=parseInt(e.version,10):typeof e.version==`number`?t.version=e.version:typeof e.version==`object`&&(t.version=new a.LongBits(e.version.low>>>0,e.version.high>>>0).toNumber())),t},e.toObject=function(e,t){t||={};var n={};if(t.defaults)if(n.domain=``,a.Long){var r=new a.Long(0,0,!1);n.version=t.longs===String?r.toString():t.longs===Number?r.toNumber():r}else n.version=t.longs===String?`0`:0;return e.domain!=null&&e.hasOwnProperty(`domain`)&&(n.domain=e.domain),e.version!=null&&e.hasOwnProperty(`version`)&&(typeof e.version==`number`?n.version=t.longs===String?String(e.version):e.version:n.version=t.longs===String?a.Long.prototype.toString.call(e.version):t.longs===Number?new a.LongBits(e.version.low>>>0,e.version.high>>>0).toNumber():e.version),n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.OperatorSetIdProto`},e}(),e.OperatorStatus=function(){var e={},t=Object.create(e);return t[e[0]=`EXPERIMENTAL`]=0,t[e[1]=`STABLE`]=1,t}(),e.FunctionProto=function(){function e(e){if(this.input=[],this.output=[],this.attribute=[],this.attributeProto=[],this.node=[],this.opsetImport=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)e[t[n]]!=null&&(this[t[n]]=e[t[n]])}return e.prototype.name=``,e.prototype.input=a.emptyArray,e.prototype.output=a.emptyArray,e.prototype.attribute=a.emptyArray,e.prototype.attributeProto=a.emptyArray,e.prototype.node=a.emptyArray,e.prototype.docString=``,e.prototype.opsetImport=a.emptyArray,e.prototype.domain=``,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||=i.create(),e.name!=null&&Object.hasOwnProperty.call(e,`name`)&&t.uint32(10).string(e.name),e.input!=null&&e.input.length)for(var n=0;n<e.input.length;++n)t.uint32(34).string(e.input[n]);if(e.output!=null&&e.output.length)for(var n=0;n<e.output.length;++n)t.uint32(42).string(e.output[n]);if(e.attribute!=null&&e.attribute.length)for(var n=0;n<e.attribute.length;++n)t.uint32(50).string(e.attribute[n]);if(e.node!=null&&e.node.length)for(var n=0;n<e.node.length;++n)o.onnx.NodeProto.encode(e.node[n],t.uint32(58).fork()).ldelim();if(e.docString!=null&&Object.hasOwnProperty.call(e,`docString`)&&t.uint32(66).string(e.docString),e.opsetImport!=null&&e.opsetImport.length)for(var n=0;n<e.opsetImport.length;++n)o.onnx.OperatorSetIdProto.encode(e.opsetImport[n],t.uint32(74).fork()).ldelim();if(e.domain!=null&&Object.hasOwnProperty.call(e,`domain`)&&t.uint32(82).string(e.domain),e.attributeProto!=null&&e.attributeProto.length)for(var n=0;n<e.attributeProto.length;++n)o.onnx.AttributeProto.encode(e.attributeProto[n],t.uint32(90).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=t===void 0?e.len:e.pos+t,i=new o.onnx.FunctionProto;e.pos<n;){var a=e.uint32();switch(a>>>3){case 1:i.name=e.string();break;case 4:i.input&&i.input.length||(i.input=[]),i.input.push(e.string());break;case 5:i.output&&i.output.length||(i.output=[]),i.output.push(e.string());break;case 6:i.attribute&&i.attribute.length||(i.attribute=[]),i.attribute.push(e.string());break;case 11:i.attributeProto&&i.attributeProto.length||(i.attributeProto=[]),i.attributeProto.push(o.onnx.AttributeProto.decode(e,e.uint32()));break;case 7:i.node&&i.node.length||(i.node=[]),i.node.push(o.onnx.NodeProto.decode(e,e.uint32()));break;case 8:i.docString=e.string();break;case 9:i.opsetImport&&i.opsetImport.length||(i.opsetImport=[]),i.opsetImport.push(o.onnx.OperatorSetIdProto.decode(e,e.uint32()));break;case 10:i.domain=e.string();break;default:e.skipType(a&7);break}}return i},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.verify=function(e){if(typeof e!=`object`||!e)return`object expected`;if(e.name!=null&&e.hasOwnProperty(`name`)&&!a.isString(e.name))return`name: string expected`;if(e.input!=null&&e.hasOwnProperty(`input`)){if(!Array.isArray(e.input))return`input: array expected`;for(var t=0;t<e.input.length;++t)if(!a.isString(e.input[t]))return`input: string[] expected`}if(e.output!=null&&e.hasOwnProperty(`output`)){if(!Array.isArray(e.output))return`output: array expected`;for(var t=0;t<e.output.length;++t)if(!a.isString(e.output[t]))return`output: string[] expected`}if(e.attribute!=null&&e.hasOwnProperty(`attribute`)){if(!Array.isArray(e.attribute))return`attribute: array expected`;for(var t=0;t<e.attribute.length;++t)if(!a.isString(e.attribute[t]))return`attribute: string[] expected`}if(e.attributeProto!=null&&e.hasOwnProperty(`attributeProto`)){if(!Array.isArray(e.attributeProto))return`attributeProto: array expected`;for(var t=0;t<e.attributeProto.length;++t){var n=o.onnx.AttributeProto.verify(e.attributeProto[t]);if(n)return`attributeProto.`+n}}if(e.node!=null&&e.hasOwnProperty(`node`)){if(!Array.isArray(e.node))return`node: array expected`;for(var t=0;t<e.node.length;++t){var n=o.onnx.NodeProto.verify(e.node[t]);if(n)return`node.`+n}}if(e.docString!=null&&e.hasOwnProperty(`docString`)&&!a.isString(e.docString))return`docString: string expected`;if(e.opsetImport!=null&&e.hasOwnProperty(`opsetImport`)){if(!Array.isArray(e.opsetImport))return`opsetImport: array expected`;for(var t=0;t<e.opsetImport.length;++t){var n=o.onnx.OperatorSetIdProto.verify(e.opsetImport[t]);if(n)return`opsetImport.`+n}}return e.domain!=null&&e.hasOwnProperty(`domain`)&&!a.isString(e.domain)?`domain: string expected`:null},e.fromObject=function(e){if(e instanceof o.onnx.FunctionProto)return e;var t=new o.onnx.FunctionProto;if(e.name!=null&&(t.name=String(e.name)),e.input){if(!Array.isArray(e.input))throw TypeError(`.onnx.FunctionProto.input: array expected`);t.input=[];for(var n=0;n<e.input.length;++n)t.input[n]=String(e.input[n])}if(e.output){if(!Array.isArray(e.output))throw TypeError(`.onnx.FunctionProto.output: array expected`);t.output=[];for(var n=0;n<e.output.length;++n)t.output[n]=String(e.output[n])}if(e.attribute){if(!Array.isArray(e.attribute))throw TypeError(`.onnx.FunctionProto.attribute: array expected`);t.attribute=[];for(var n=0;n<e.attribute.length;++n)t.attribute[n]=String(e.attribute[n])}if(e.attributeProto){if(!Array.isArray(e.attributeProto))throw TypeError(`.onnx.FunctionProto.attributeProto: array expected`);t.attributeProto=[];for(var n=0;n<e.attributeProto.length;++n){if(typeof e.attributeProto[n]!=`object`)throw TypeError(`.onnx.FunctionProto.attributeProto: object expected`);t.attributeProto[n]=o.onnx.AttributeProto.fromObject(e.attributeProto[n])}}if(e.node){if(!Array.isArray(e.node))throw TypeError(`.onnx.FunctionProto.node: array expected`);t.node=[];for(var n=0;n<e.node.length;++n){if(typeof e.node[n]!=`object`)throw TypeError(`.onnx.FunctionProto.node: object expected`);t.node[n]=o.onnx.NodeProto.fromObject(e.node[n])}}if(e.docString!=null&&(t.docString=String(e.docString)),e.opsetImport){if(!Array.isArray(e.opsetImport))throw TypeError(`.onnx.FunctionProto.opsetImport: array expected`);t.opsetImport=[];for(var n=0;n<e.opsetImport.length;++n){if(typeof e.opsetImport[n]!=`object`)throw TypeError(`.onnx.FunctionProto.opsetImport: object expected`);t.opsetImport[n]=o.onnx.OperatorSetIdProto.fromObject(e.opsetImport[n])}}return e.domain!=null&&(t.domain=String(e.domain)),t},e.toObject=function(e,t){t||={};var n={};if((t.arrays||t.defaults)&&(n.input=[],n.output=[],n.attribute=[],n.node=[],n.opsetImport=[],n.attributeProto=[]),t.defaults&&(n.name=``,n.docString=``,n.domain=``),e.name!=null&&e.hasOwnProperty(`name`)&&(n.name=e.name),e.input&&e.input.length){n.input=[];for(var r=0;r<e.input.length;++r)n.input[r]=e.input[r]}if(e.output&&e.output.length){n.output=[];for(var r=0;r<e.output.length;++r)n.output[r]=e.output[r]}if(e.attribute&&e.attribute.length){n.attribute=[];for(var r=0;r<e.attribute.length;++r)n.attribute[r]=e.attribute[r]}if(e.node&&e.node.length){n.node=[];for(var r=0;r<e.node.length;++r)n.node[r]=o.onnx.NodeProto.toObject(e.node[r],t)}if(e.docString!=null&&e.hasOwnProperty(`docString`)&&(n.docString=e.docString),e.opsetImport&&e.opsetImport.length){n.opsetImport=[];for(var r=0;r<e.opsetImport.length;++r)n.opsetImport[r]=o.onnx.OperatorSetIdProto.toObject(e.opsetImport[r],t)}if(e.domain!=null&&e.hasOwnProperty(`domain`)&&(n.domain=e.domain),e.attributeProto&&e.attributeProto.length){n.attributeProto=[];for(var r=0;r<e.attributeProto.length;++r)n.attributeProto[r]=o.onnx.AttributeProto.toObject(e.attributeProto[r],t)}return n},e.prototype.toJSON=function(){return this.constructor.toObject(this,n.util.toJSONOptions)},e.getTypeUrl=function(e){return e===void 0&&(e=`type.googleapis.com`),e+`/onnx.FunctionProto`},e}(),e}(),t.exports=o});function eo(e,t){if(!e)throw Error(typeof t==`string`?t:t())}function Co(e){return new TextDecoder().decode(e)}var Xe,Dr,_l,bt,Mi,ht,Tt,ne,Eo,kr,Nr,Lr,ze=N(()=>{Vs(),Xe=ye(Qr()),Rr(),Dr=class{static arraysEqual(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}},_l=class{static preprocessInputShapes(e,t){return[e.length===1?[1,e[0]]:e,t.length===1?[t[0],1]:t]}static postprocessOutputShape(e,t,n){t===1&&e.splice(e.length-2,1),n===1&&e.pop()}static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},bt=class e{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=_l.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;o[a-s]=Math.max(n,c)}return o}static index(t,n){let r=Array(n.length);return e.fillIndex(t,n,r),r}static fillIndex(e,t,n){let r=e.length-t.length;for(let i=0;i<t.length;i++)n[i]=e[r+i]%t[i]}static calc(t,n,r,i,a){let o=e.calcShape(t.dims,n.dims);if(o){if(i&&!ne.areEqual(o,t.dims))return;let s=ne.size(o),c=i?t:new ot(o,a||t.type);if(o.length===0)c.set([],r(t.get([]),n.get([])));else{let i=Array(o.length),a=Array(t.dims.length),l=Array(n.dims.length),u=0,d=0,f=!1,p=!1;t.dims.length===0&&(u=t.get([]),f=!0),n.dims.length===0&&(d=n.get([]),p=!0);let m;for(let h=0;h<s;h++){m=h;for(let e=o.length-1;e>=0;e--)i[e]=m%o[e],m=Math.floor(m/o[e]);f||(e.fillIndex(i,t.dims,a),u=t.get(a)),p||(e.fillIndex(i,n.dims,l),d=n.get(l)),c.set(i,r(u,d))}}return c}}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}static getBroadcastDims(e,t){let n=e.length,r=[];for(let i=0;i<n;i++){let a=n-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&o===1&&r.unshift(a)}return r}},Mi=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!bt.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},ht=class e{static tensorDataTypeFromProto(e){switch(e){case Xe.onnx.TensorProto.DataType.INT8:return`int8`;case Xe.onnx.TensorProto.DataType.UINT8:return`uint8`;case Xe.onnx.TensorProto.DataType.BOOL:return`bool`;case Xe.onnx.TensorProto.DataType.INT16:return`int16`;case Xe.onnx.TensorProto.DataType.UINT16:return`uint16`;case Xe.onnx.TensorProto.DataType.INT32:return`int32`;case Xe.onnx.TensorProto.DataType.UINT32:return`uint32`;case Xe.onnx.TensorProto.DataType.FLOAT:return`float32`;case Xe.onnx.TensorProto.DataType.DOUBLE:return`float64`;case Xe.onnx.TensorProto.DataType.STRING:return`string`;case Xe.onnx.TensorProto.DataType.INT64:return`int32`;case Xe.onnx.TensorProto.DataType.UINT64:return`uint32`;default:throw Error(`unsupported data type: ${Xe.onnx.TensorProto.DataType[e]}`)}}static tensorDataTypeStringToEnum(e){switch(e){case`int8`:return Xe.onnx.TensorProto.DataType.INT8;case`uint8`:return Xe.onnx.TensorProto.DataType.UINT8;case`bool`:return Xe.onnx.TensorProto.DataType.BOOL;case`int16`:return Xe.onnx.TensorProto.DataType.INT16;case`uint16`:return Xe.onnx.TensorProto.DataType.UINT16;case`int32`:return Xe.onnx.TensorProto.DataType.INT32;case`uint32`:return Xe.onnx.TensorProto.DataType.UINT32;case`float32`:return Xe.onnx.TensorProto.DataType.FLOAT;case`float64`:return Xe.onnx.TensorProto.DataType.DOUBLE;case`string`:return Xe.onnx.TensorProto.DataType.STRING;case`int64`:return Xe.onnx.TensorProto.DataType.INT64;case`uint64`:return Xe.onnx.TensorProto.DataType.UINT64;default:throw Error(`unsupported data type: ${e}`)}}static tensorDimsFromProto(e){return e.map(e=>cr.isLong(e)?e.toNumber():e)}static tensorValueTypeFromProto(t){return{tensorType:e.tensorDataTypeFromProto(t.elemType),shape:{dims:e.tensorDimsFromProto(t.shape.dim.map(e=>e.dimValue))}}}static tensorDimsFromORTFormat(e){let t=[];for(let n=0;n<e.dimsLength();n++)t.push(Tt.longToNumber(e.dims(n)));return t}static tensorAttributesFromORTFormat(e){let t=[];for(let n=0;n<e.attributesLength();n++)t.push(e.attributes(n));return t}},Tt=class{static longToNumber(e){return cr.isLong(e)?e.toNumber():typeof e==`bigint`?Number(e):e}static isLong(e){return cr.isLong(e)||typeof e==`bigint`}},ne=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<=0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.`);r*=e[i]}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static transpose(e){return e.slice().reverse()}static indicesToOffset(e,t,n){n===void 0&&(n=e.length);let r=0;for(let i=0;i<n;++i)r+=t[i]*e[i];return r}static offsetToIndices(e,t){let n=t.length;if(n===0)return[];if(n===1)return[e*t[0]];let r=Array(t.length);for(let n=0;n<r.length-1;++n)r[n]=Math.floor(e/t[n]),e-=r[n]*t[n];return r[r.length-1]=e,r}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(e=>this.normalizeAxis(e,t))}static incrementIndex(e,t,n){if(t.length===0||e.length===0)throw Error(`Index incrementing unsupported for scalar Tensor`);if(n===void 0)n=t.length;else if(n<=0||n>t.length)throw Error(`Incorrect axis to increment on`);for(let r=n-1;r>=0&&(e[r]++,!(e[r]<t[r]));--r)e[r]=0}static calculateReshapedDims(t,n){if(n.length===0){if(t.length===0||e.size(t)===1)return[];throw Error(`cannot reshape to a scalar Tensor`)}let r=n.length,i=Array(r),a=-1,o=1;for(let e=0;e<r;e++){if(n[e]<-1)throw Error(`a dimension in shape hints cannot be less than -1`);if(n[e]===-1){if(a!==-1)throw Error(`at most one dimension in shape hints can be -1`);a=e}else{if(n[e]===0){if(e>=t.length)throw Error(`the dimension with value zero exceeds the dimension size of the input tensor`);i[e]=t[e]}else i[e]=n[e];o*=i[e]}}let s=e.size(t);if(a!==-1){if(s%o!==0)throw Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${t}] Output shape: [${n}]`);i[a]=s/o}else if(o!==s)throw Error(`reshapedDims and originalDims don't have matching sizes`);return i}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length?e.every((e,n)=>e===t[n]):!1}static validateDimsAndCalcSize(e){if(e.length>6)throw TypeError(`Only rank 0 to 6 is supported for tensor shape.`);let t=1;for(let n of e){if(!Number.isInteger(n))throw TypeError(`Invalid shape: ${n} is not an integer`);if(n<0||n>2147483647)throw TypeError(`Invalid shape: length ${n} is not allowed`);t*=n}return t}static flattenShape(e,t){t<0&&(t+=e.length);let n=e.reduce((e,t)=>e*t,1),r=e.slice(t).reduce((e,t)=>e*t,1);return[n/r,r]}static squeezeShape(t,n){let r=[];n=e.normalizeAxes(n,t.length);for(let e=0;e<t.length;e++){let i=n.indexOf(e)>=0;if(i&&t[e]!==1)throw Error(`squeeze an axis of size different than 1`);(n.length===0&&t[e]>1||n.length>0&&!i)&&r.push(t[e])}return r}static unsqueezeShape(t,n){let r=Array(t.length+n.length);r.fill(0);for(let t=0;t<n.length;t++){let i=e.normalizeAxis(n[t],r.length);if(i>=r.length)throw Error(`'axes' has an out of range axis`);if(r[i]!==0)throw Error(`'axes' has a duplicate axis`);r[i]=1}let i=0;for(let e=0;e<r.length;e++)r[e]===0&&(r[e]=t[i++]);if(i!==t.length)throw Error(`the unsqueezed dimension could not be established`);return r}},Eo=class e{static splitShape(t,n,r,i){if(r.length===0){if(!i)throw Error(`need to know number of outputs when the 'split' attribute is not specified`);e.determineSplit(t[n],i,r)}let a=[],o=[0];for(let e=0;e<r.length;++e){e!==0&&o.push(o[e-1]+r[e-1]);let i=t.slice();i[n]=r[e],a.push(i)}return[a,o]}static determineSplit(e,t,n){if(e%t!==0)throw Error(`cannot split tensor to equal sized parts`);for(let r=0;r<t;++r)n.push(e/t)}},kr=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o){if(o){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let s=0;s<t.length-2;s++)e.adjustPadAndReturnShape(t[s+2],n[s],r[s],i[s],a,s,s+t.length-2,o)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},Nr=-34028234663852886e22,Lr=34028234663852886e22});function W$(e){switch(e){case`bool`:case`int8`:case`uint8`:return 1;case`int16`:case`uint16`:return 2;case`int32`:case`uint32`:case`float32`:return 4;case`float64`:return 8;default:throw Error(`cannot calculate sizeof() on type ${e}`)}}function tm(e){switch(e){case xe.onnx.TensorProto.DataType.UINT8:case xe.onnx.TensorProto.DataType.INT8:case xe.onnx.TensorProto.DataType.BOOL:return 1;case xe.onnx.TensorProto.DataType.UINT16:case xe.onnx.TensorProto.DataType.INT16:return 2;case xe.onnx.TensorProto.DataType.FLOAT:case xe.onnx.TensorProto.DataType.INT32:case xe.onnx.TensorProto.DataType.UINT32:return 4;case xe.onnx.TensorProto.DataType.INT64:case xe.onnx.TensorProto.DataType.DOUBLE:case xe.onnx.TensorProto.DataType.UINT64:return 8;default:throw Error(`cannot calculate sizeof() on type ${xe.onnx.TensorProto.DataType[e]}`)}}function H$(e,t){return new(om(t))(e)}function om(e){switch(e){case`bool`:case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`int16`:return Int16Array;case`uint16`:return Uint16Array;case`int32`:return Int32Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`float32`:return Float32Array;case`float64`:return Float64Array;default:throw Error(`unspecified error`)}}function wl(e,t){if(t===xe.onnx.TensorProto.DataType.INT64||t===So.TensorDataType.INT64){if(e.greaterThanOrEqual(2147483648)||e.lessThan(-2147483648))throw TypeError(`int64 is not supported`)}else if(t===xe.onnx.TensorProto.DataType.UINT32||t===So.TensorDataType.UINT32||t===xe.onnx.TensorProto.DataType.UINT64||t===So.TensorDataType.UINT64){if(e.greaterThanOrEqual(4294967296)||e.lessThan(0))throw TypeError(`uint64 is not supported`)}else throw TypeError(`not a LONG type: ${xe.onnx.TensorProto.DataType[t]}`);return e.toNumber()}function nm(e,t,n){switch(t){case xe.onnx.TensorProto.DataType.BOOL:case xe.onnx.TensorProto.DataType.UINT8:return e.getUint8(n);case xe.onnx.TensorProto.DataType.INT8:return e.getInt8(n);case xe.onnx.TensorProto.DataType.UINT16:return e.getUint16(n,!0);case xe.onnx.TensorProto.DataType.INT16:return e.getInt16(n,!0);case xe.onnx.TensorProto.DataType.FLOAT:return e.getFloat32(n,!0);case xe.onnx.TensorProto.DataType.INT32:return e.getInt32(n,!0);case xe.onnx.TensorProto.DataType.UINT32:return e.getUint32(n,!0);case xe.onnx.TensorProto.DataType.INT64:return wl(cr.fromBits(e.getUint32(n,!0),e.getUint32(n+4,!0),!1),t);case xe.onnx.TensorProto.DataType.DOUBLE:return e.getFloat64(n,!0);case xe.onnx.TensorProto.DataType.UINT64:return wl(cr.fromBits(e.getUint32(n,!0),e.getUint32(n+4,!0),!0),t);default:throw Error(`cannot read from DataView for type ${xe.onnx.TensorProto.DataType[t]}`)}}var rm,xe,ot,Rr=N(()=>{rm=ye(wf()),Vs(),$o(),xe=ye(Qr()),ze(),ot=class e{constructor(e,t,n,r,i,a=rm.Guid.create()){this.dims=e,this.type=t,this.dataProvider=n,this.asyncDataProvider=r,this.cache=i,this.dataId=a,this.size=ne.validateDimsAndCalcSize(e);let o=this.size,s=n===void 0&&r===void 0&&i===void 0;if(i!==void 0&&i.length!==o)throw RangeError(`Input dims doesn't match data length.`);if(t===`string`){if(i!==void 0&&(!Array.isArray(i)||!i.every(e=>typeof e==`string`)))throw TypeError(`cache should be a string array`);s&&(this.cache=Array(o))}else{if(i!==void 0){let e=om(t);if(!(i instanceof e))throw TypeError(`cache should be type ${e.name}`)}s&&(this.cache=H$(new ArrayBuffer(o*W$(t)),t))}}get data(){if(this.cache===void 0){let e=this.dataProvider(this.dataId);if(e.length!==this.size)throw Error(`Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.`);this.cache=e}return this.cache}get stringData(){if(this.type!==`string`)throw TypeError(`data type is not string`);return this.data}get integerData(){switch(this.type){case`uint8`:case`int8`:case`uint16`:case`int16`:case`int32`:case`uint32`:case`bool`:return this.data;default:throw TypeError(`data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)`)}}get floatData(){switch(this.type){case`float32`:case`float64`:return this.data;default:throw TypeError(`data type is not float (float32, float64)`)}}get numberData(){if(this.type!==`string`)return this.data;throw TypeError(`type cannot be non-number (string)`)}get(e){return this.data[ne.indicesToOffset(e,this.strides)]}set(e,t){this.data[ne.indicesToOffset(e,this.strides)]=t}async getData(){return this.cache===void 0&&(this.cache=await this.asyncDataProvider(this.dataId)),this.cache}get strides(){return this._strides||=ne.computeStrides(this.dims),this._strides}static fromProto(t){if(!t)throw Error(`cannot construct Value from an empty tensor`);let n=ht.tensorDataTypeFromProto(t.dataType),r=new e(ht.tensorDimsFromProto(t.dims),n);if(n===`string`)t.stringData.forEach((e,t)=>{r.data[t]=Co(e)});else if(t.rawData&&typeof t.rawData.byteLength==`number`&&t.rawData.byteLength>0){let e=r.data,n=new DataView(t.rawData.buffer,t.rawData.byteOffset,t.rawData.byteLength),i=tm(t.dataType),a=t.rawData.byteLength/i;if(t.rawData.byteLength%i!==0)throw Error(`invalid buffer length`);if(e.length!==a)throw Error(`buffer length mismatch`);for(let r=0;r<a;r++)e[r]=nm(n,t.dataType,r*i)}else{let e;switch(t.dataType){case xe.onnx.TensorProto.DataType.FLOAT:e=t.floatData;break;case xe.onnx.TensorProto.DataType.INT32:case xe.onnx.TensorProto.DataType.INT16:case xe.onnx.TensorProto.DataType.UINT16:case xe.onnx.TensorProto.DataType.INT8:case xe.onnx.TensorProto.DataType.UINT8:case xe.onnx.TensorProto.DataType.BOOL:e=t.int32Data;break;case xe.onnx.TensorProto.DataType.INT64:e=t.int64Data;break;case xe.onnx.TensorProto.DataType.DOUBLE:e=t.doubleData;break;case xe.onnx.TensorProto.DataType.UINT32:case xe.onnx.TensorProto.DataType.UINT64:e=t.uint64Data;break;default:throw Error(`unspecific error`)}if(e==null)throw Error(`failed to populate data from a tensorproto value`);let n=r.data;if(n.length!==e.length)throw Error(`array length mismatch`);for(let r=0;r<e.length;r++){let i=e[r];cr.isLong(i)?n[r]=wl(i,t.dataType):n[r]=i}}return r}static fromData(t,n,r){return new e(n,r,void 0,void 0,t)}static fromOrtTensor(t){if(!t)throw Error(`cannot construct Value from an empty tensor`);let n=ht.tensorDimsFromORTFormat(t),r=ht.tensorDataTypeFromProto(t.dataType()),i=new e(n,r);if(r===`string`)for(let e=0;e<t.stringDataLength();e++)i.data[e]=t.stringData(e);else if(t.rawDataArray()&&typeof t.rawDataLength()==`number`&&t.rawDataLength()>0){let e=i.data,n=new DataView(t.rawDataArray().buffer,t.rawDataArray().byteOffset,t.rawDataLength()),r=tm(t.dataType()),a=t.rawDataLength()/r;if(t.rawDataLength()%r!==0)throw Error(`invalid buffer length`);if(e.length!==a)throw Error(`buffer length mismatch`);for(let i=0;i<a;i++)e[i]=nm(n,t.dataType(),i*r)}return i}}});function se(e){return e===1?q$:j$}function im(e){let t=se(e);return`${t.version}
      precision highp float;
      ${t.attribute} vec3 position;
      ${t.attribute} vec2 textureCoord;

      ${t.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`}function am(e){let t=se(e);return`${t.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${t.varyingFrag} vec2 TexCoords;
    ${t.outputDeclaration}
    const vec2 halfCR = vec2(0.5, 0.5);

    // Custom vector types to handle higher dimenalities.
    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    `}function sm(e,t){return`
  void main() {
    int indices[${t}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${se(e).output} = result;
  }
  `}var q$,j$,Je=N(()=>{q$={version:``,attribute:`attribute`,varyingVertex:`varying`,varyingFrag:`varying`,texture2D:`texture2D`,output:`gl_FragColor`,outputDeclaration:``},j$={version:`#version 300 es`,attribute:`in`,varyingVertex:`out`,varyingFrag:`in`,texture2D:`texture`,output:`outputColor`,outputDeclaration:`out vec4 outputColor;`}}),Ae=N(()=>{});async function vl(e,t=e=>0,n){return new Promise((r,i)=>{let a=0,o=()=>{if(e()){r();return}a++;let s=t(a);if(n!=null&&a>=n){i();return}setTimeout(o,s)};o()})}function Bi(e){return eo(typeof e<`u`&&e.length!==0,()=>`empty string found for sampler name`),`get`+e.charAt(0).toUpperCase()+e.slice(1)}function um(e){return eo(typeof e<`u`&&e.length!==0,()=>`empty string found for sampler name`),`get`+e.charAt(0).toUpperCase()+e.slice(1)+`AtOutCoords`}function to(e,t){let n=JSON.parse(JSON.stringify(e));return n=t,n}function no(e,t){return t.map(t=>e[t]).join(`, `)}function yt(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank ${e} is not yet supported`)}function Xt(e=6){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,e)}var zn=N(()=>{ze()});function K$(e,t){return Xt(t).map(t=>`${e}.${t}`)}function ro(e,t){return t===1?[e]:K$(e,t)}function Mn(){return`
    float getChannel(vec4 frag, int dim) {
      int modCoord = imod(dim, 2);
      return modCoord == 0 ? frag.r : frag.g;
    }

    float getChannel(vec4 frag, vec2 innerDims) {
      vec2 modCoord = mod(innerDims, 2.);
      return modCoord.x == 0. ?
        (modCoord.y == 0. ? frag.r : frag.g) :
        (modCoord.y == 0. ? frag.b : frag.a);
    }
  `}var zr=N(()=>{zn()});function Z$(e,t,n){if(e===0)return`false`;if(e===1)return`rc > ${t[0]}`;let r=``;for(let i=e-2;i<e;i++)r+=`${n[i]} >= ${t[i-e+2]}`,i<e-1&&(r+=`||`);return r}function J$(e,t){let n=e.length;if(n===0)return`getA(), 0, 0, 0`;if(n===1)return`getA(rc),
            rc + 1 >= ${e[0]} ? 0. : getA(rc + 1),
            0, 0`;let r=`r, c`,i=`r, cp1`,a=`rp1, c`,o=`rp1, cp1`,s=``;if(n>2)for(let e=0;e<n-2;++e)s+=`${t[e]},`;return`getA(${s}r, c),
          rEdge ? 0. : getA(${s}rp1, c),
          cEdge ? 0. : getA(${s}r, cp1),
          rEdge || cEdge ? 0. : getA(${s}rp1, cp1)`}function Y$(e,t,n,r){return e===0||e===1?``:`
    int r = ${t[e-2]};
    int c = ${t[e-1]};
    int rp1 = ${t[e-2]} + 1;
    int cp1 = ${t[e-1]} + 1;
    bool rEdge = rp1 >= ${r};
    bool cEdge = cp1 >= ${n};
    `}var lm,X$,cm,dm=N(()=>{Je(),Ae(),zn(),zr(),lm={name:`pack`,inputNames:[`A`],inputTypes:[1]},X$=(e,t)=>{let n=se(e.session.backend.glContext.version),r=t.dims,i=r.length,a=t.dims.length,o=yt(a),s=ro(`rc`,a),c=Y$(a,s,r[r.length-2],r[r.length-1]),l;l=i===0?[1,1]:i===1?[r[0],1]:[r[a-1],r[a-2]];let u=Z$(a,l,s),d=J$(r,s),f=`
        void main() {
          ${o} rc = getOutputCoords();

          if(${u}) {
            ${n.output} = vec4(0);
          } else {
            ${c}

            ${n.output} = vec4(${d});
          }
        }
      `;return{...lm,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:2},shaderSource:f}},cm=(e,t)=>({...lm,get:()=>X$(e,t)})});function xl(e){if(e.length===0)return[1,1,1];let t=1;for(let n=0;n<e.length-2;++n)t*=e[n];return[t,e.length>1?e[e.length-2]:1,e[e.length-1]]}function fm(e,t){let n=!1;return n=e.length===0||t.length===0?!0:e.length<2||t.length<2?e[e.length-1]===t[t.length-1]:e[e.length-1]===t[t.length-1]&&e[e.length-2]===t[t.length-2],n}function tA(e){let t=ne.computeStrides(e),n=[`b`,`r`,`c`],r=`index`;return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t.map((e,i)=>`${`int ${n[i]} = ${r} / ${e}`}; ${i===t.length-1?`int ${n[i+1]} = ${r} - ${n[i]} * ${e}`:`index -= ${n[i]} * ${e}`};`).join(``)}
      return ivec3(b, r, c);
    }
  `}function nA(e){let t=ne.computeStrides(e);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${t[0]} + coords.z * ${t[1]} + coords.y;
  }
`}var Q$,eA,pm,hm=N(()=>{ze(),Je(),Ae(),zr(),Q$=e=>({name:`Reshape (packed)`,inputTypes:[2],inputNames:[`A`],cacheHint:`${e}`}),eA=(e,t,n,r)=>{let i=t.dims,a=r,o=``;for(let e=0;e<4;e++){let t=``;switch(e){case 0:t=`outputCoords = rc;`;break;case 1:t=`outputCoords = ivec3(rc.x, rc.y+1, rc.z);`;break;case 2:t=`outputCoords = ivec3(rc.x, rc.y, rc.z+1);`;break;case 3:t=`outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);`;break;default:throw Error()}o+=`
        ${t}
        ${e>0?`if(outputCoords.y < rows && outputCoords.z < cols){`:``}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${e>0?`}`:``}
      `}let s=se(e.session.backend.glContext.version),c=`
      ${tA(i)}
      ${nA(a)}
      ${Mn()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${a[2]};
        int cols = ${a[1]};

        ${o}
        ${s.output} = result;
      }
    `;return{...n,output:{dims:a,type:t.type,textureType:2},shaderSource:c,hasMain:!0}},pm=(e,t,n)=>{let r=Q$(n);return{...r,get:()=>eA(e,t,r,n)}}}),Tl,mm=N(()=>{Je(),Ae(),Tl=(e,t)=>{let n=t.shape,r=se(e.session.backend.glContext.version),i=`
    const float FLOAT_MAX = 1.70141184e38;
    const float FLOAT_MIN = 1.17549435e-38;

    bool isNaN(float val) {
      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;
    }

    highp vec4 encodeAsUint8(highp float v) {
      if (isNaN(v)) {
        return vec4(255, 255, 255, 255);
      }

      highp float av = abs(v);

      if(av < FLOAT_MIN) {
        return vec4(0.0, 0.0, 0.0, 0.0);
      } else if(v > FLOAT_MAX) {
        return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
      } else if(v < -FLOAT_MAX) {
        return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
      }

      highp vec4 c = vec4(0,0,0,0);

      highp float e = floor(log2(av));
      highp float m = exp2(fract(log2(av))) - 1.0;

      c[2] = floor(128.0 * m);
      m -= c[2] / 128.0;
      c[1] = floor(32768.0 * m);
      m -= c[1] / 32768.0;
      c[0] = floor(8388608.0 * m);

      highp float ebias = e + 127.0;
      c[3] = floor(ebias / 2.0);
      ebias -= c[3] * 2.0;
      c[2] += floor(ebias) * 128.0;

      c[3] += 128.0 * step(0.0, -v);

      return c / 255.0;
    }

    void main() {
      float value = ${r.texture2D}(X,TexCoords).r;
      ${r.output} = encodeAsUint8(value);
    }`,a={name:`Uint8Encode`,inputTypes:[0],inputNames:[`X`],output:{dims:n,type:t.tensor.type,textureType:3},shaderSource:i,hasMain:!0};return e.executeProgram(a,[t.tensor])}});function oA(e,t){if(e===1)return`rc`;let n=``;for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}var gm,rA,bm,ym=N(()=>{Je(),Ae(),zn(),zr(),gm={name:`unpack`,inputNames:[`A`],inputTypes:[2]},rA=(e,t)=>{let n=t.dims.length,r=ro(`rc`,n),i=r.slice(-2),a=yt(n),o=Mn(),s=t.dims.length===0?``:oA(n,r),c=n<=1?`rc`:`vec2(${i.join(`,`)})`,l=`
    ${o}
    void main() {
      ${a} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${s});

       ${se(e.session.backend.glContext.version).output} = vec4(getChannel(packedInput, ${c}), 0, 0, 0);
     }
   `;return{...gm,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:l}},bm=(e,t)=>({...gm,get:()=>rA(e,t)})}),Fi,Do,Vi,ko=N(()=>{Dt(),Fi=class{constructor(e,t=1){if(t===1)this.internalFormat=e.R32F,this.format=e.RED,this.textureType=e.FLOAT,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA32F,this.format=e.RGBA,this.textureType=e.FLOAT,this.channelSize=t;else throw Error(`Invalid number of channels: ${t}`)}encode(e,t){let n,r;return e.constructor!==Float32Array&&(Be.warning(`Encoder`,`data was not of type Float32; creating new Float32Array`),r=new Float32Array(e)),t*this.channelSize>e.length?(Be.warning(`Encoder`,`Source data too small. Allocating larger array`),r=e,n=this.allocate(t*this.channelSize),r.forEach((e,t)=>n[t]=e)):(r=e,n=r),n}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((e,t)=>t%4==0).subarray(0,t):e.subarray(0,t)}},Do=class{constructor(e,t=1,n){if(t!==1&&t!==4)throw Error(`Invalid number of channels: ${t}`);this.internalFormat=e.RGBA,this.format=e.RGBA,this.channelSize=t,this.textureType=n||e.FLOAT}encode(e,t){let n=e;return this.channelSize===1&&(Be.verbose(`Encoder`,`Exploding into a larger array`),n=this.allocate(t),e.forEach((e,t)=>n[t*4]=e)),n}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((e,t)=>t%4==0).subarray(0,t):e.subarray(0,t)}},Vi=class{constructor(e,t=1){if(this.channelSize=4,t===1)this.internalFormat=e.ALPHA,this.format=e.ALPHA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA,this.format=e.RGBA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else throw Error(`Invalid number of channels: ${t}`)}encode(e,t){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}allocate(e){return new Uint8Array(e*this.channelSize)}decode(e,t){if(e instanceof Uint8Array)return e.subarray(0,t);throw Error(`Invalid array type: ${e.constructor}`)}}}),No,_m,Il,wm=N(()=>{ze(),Ae(),No=(e,t,n)=>{let r=n===0||n===1?1:4,i=n===2,a=n===1||n===2,o=n===4?t.length-1:void 0,s=n===4?t.map((e,n)=>n===t.length-1?e*4:e):void 0;return Il(e,t,r,s,{isPacked:i,reverseWH:a,breakAxis:o})},_m=(e,t,n)=>{let r=No(e,t,n);return[r.width,r.height]},Il=(e,t,n=1,r,i)=>{let a=!!(i&&i.isPacked),[o,s]=e.computeTextureWH(a&&r||t,i),c=t.length,l=t.slice(0);if(c===0&&(l=[1]),n===1)r=t;else if(a){if(n!==4)throw Error(`a packed texture must be 4-channel`);r=t,c>0&&(l[c-1]=Math.ceil(l[c-1]/2)),c>1&&(l[c-2]=Math.ceil(l[c-2]/2))}else if(!r)throw Error(`Unpacked shape is needed when using channels > 1`);return{width:o,height:s,channels:n,isPacked:a,shape:l,strides:ne.computeStrides(l),unpackedShape:r,reversedWH:i&&i.reverseWH}}}),aA,Gi,xm=N(()=>{Dt(),Rr(),ze(),dm(),hm(),mm(),ym(),ko(),wm(),Ae(),aA=(e,t)=>{let n=t.map(e=>`${e.unpackedShape.join(`,`)};${e.width}x${e.height}`).join(`_`),r=e.name;return e.cacheHint&&(r+=`[`+e.cacheHint+`]`),r+=`:`+n,r},Gi=class{constructor(e){this.session=e,this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(e,t){return _m(this.session.layoutStrategy,e,t)}executeProgram(e,t){if(t.length<e.inputNames.length)throw Error(`Input size mustn't be less than ${e.inputNames.length}.`);if(e.inputNames.length!==e.inputTypes.length)throw Error(`input names size does not match input types`);let n=[];for(let r=0;r<e.inputNames.length;++r)n[r]=this.getOrCreateTextureData(t[r],e.inputTypes[r]);let r=aA(e,n),i=this.session.programManager.getArtifact(r),a=i?i.programInfo:typeof e.get==`function`?e.get():e,o=No(this.session.layoutStrategy,a.output.dims,a.output.textureType),s=this.createTextureData(o,a.output.type);return i||(i=this.session.programManager.build(a,n,s),this.session.programManager.setArtifact(r,i)),this.runProgram(i,n,s),s}run(e,t){return this.executeProgram(e,t).tensor}runProgram(e,t,n){for(let n=0;n<t.length;++n)if(!!t[n].isPacked!=(e.programInfo.inputTypes[n]===2))throw Error(`input[${n}] property packed inconsistent`);if(!!n.isPacked!=(e.programInfo.output.textureType===2))throw Error(`output property packed inconsistent`);this.session.programManager.run(e,t,n)}getOrCreateTextureData(e,t){let n=this.getTextureData(e.dataId,t===2);if(!n&&(n=this.getTextureData(e.dataId,t!==2),n))return t===2?this.pack(n):this.unpack(n);if(!n){let r=No(this.session.layoutStrategy,e.dims,t);if(t===4){let n=e.dims;if(n.length===4){let r=[n[0],Math.ceil(n[1]*n[2]*n[3]/4)],i=No(this.session.layoutStrategy,r,t),a=e.numberData;if(n[1]*n[2]*n[3]%4!=0){let t=n[0],r=n[1]*n[2]*n[3],i=Math.ceil(r*1/4)*4,o=t*i;a=new Float32Array(o);for(let n=0;n<t;++n){let t=n*r,o=n*i+n%1*r;a.set(e.numberData.subarray(t,t+r),o)}}return this.createTextureData(i,e.type,a,e,1)}}if(t===2){let t=Il(this.session.layoutStrategy,e.dims,1,[],{reverseWH:!0}),r=this.createTextureData(t,e.type,e.numberData,e,1);n=this.pack(r)}else n=this.createTextureData(r,e.type,e.numberData,e,1)}return n}createTextureDataFromLayoutBindTensor(e,t,n,r){return this.createTextureData(e,t,n,r,1)}createTextureData(e,t,n,r,i){Be.verbose(`InferenceHandler`,`Creating TextureData: layout:[${JSON.stringify(e)}]`);let a=this.session.textureManager.createTextureFromLayout(t,e,n,i);return this.createTextureDataFromTexture(e,t,a,r)}reshapeUnpacked(e,t){let n=this.getOrCreateTextureData(e,0),r={channels:n.channels,height:n.height,width:n.width,shape:t.length===0?[1]:t,strides:ne.computeStrides(t),unpackedShape:t};return this.createTextureDataFromTexture(r,e.type,n.texture).tensor}reshapePacked(e,t){let n=this.getOrCreateTextureData(e,2);if(fm(e.dims,t)){let r={channels:n.channels,height:n.height,width:n.width,shape:t.length===0?[1]:t,strides:ne.computeStrides(t),unpackedShape:t,isPacked:!0};return this.createTextureDataFromTexture(r,e.type,n.texture).tensor}let r=xl(e.dims),i=xl(t),a=this.reshapePacked(e,r),o=this.run(pm(this,a,i),[a]);return this.reshapePacked(o,t)}cast(e,t){let n=this.getOrCreateTextureData(e,0);return this.createTextureDataFromTexture(n,t,n.texture).tensor}createTextureDataFromTexture(e,t,n,r,i){let a={...e,tensor:r||new ot(e.unpackedShape,t,e=>this.readTexture(a),async e=>this.readTextureAsync(a),void 0,i),texture:n};return this.setTextureData(a.tensor.dataId,a,e.isPacked),a}getTextureData(e,t=!1){return this.session.isInitializer(e)?this.session.getTextureData(e,t):t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,n=!1){this.session.isInitializer(e)?this.session.setTextureData(e,t,n):(n?this.packedTextureDataCache:this.unpackedTextureDataCache).set(e,t)}isTextureLayoutCached(e,t=!1){return!!this.getTextureData(e.dataId,t)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.unpackedTextureDataCache=new Map}readTexture(e){return e.isPacked?this.readTexture(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(Tl(this,e))}async readTextureAsync(e){return e.isPacked?this.readTextureAsync(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(Tl(this,e))}pack(e){return this.executeProgram(cm(this,e.tensor),[e.tensor])}unpack(e){return this.executeProgram(bm(this,e.tensor),[e.tensor])}}}),Sl,_e,dt=N(()=>{Sl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},_e=e=>new Sl(e)}),Tm,Im,Sm,sA,uA,$m=N(()=>{dt(),Je(),Ae(),Tm={name:`BatchNormalization`,inputNames:[`A`,`Scale`,`B`,`Mean`,`Variance`],inputTypes:[0,0,0,0,0]},Im=(e,t,n)=>(uA(t),[e.run({...Tm,cacheHint:n.cacheKey,get:()=>sA(e,t,n)},t)]),Sm=e=>{let t=e.attributes.getFloat(`epsilon`,1e-5),n=e.attributes.getFloat(`momentum`,.9),r=e.attributes.getInt(`spatial`,1);return _e({epsilon:t,momentum:n,spatial:r})},sA=(e,t,n)=>{let r=se(e.session.backend.glContext.version),i=t[0].dims.length,[a,o]=e.calculateTextureWidthAndHeight(t[1].dims,0),s=`
  float process(int[${i}] indices) {
    vec2 position = offsetToCoords(indices[1], ${a}, ${o});
    float scale = getColorAsFloat(${r.texture2D}(Scale, position));
    float mean = getColorAsFloat(${r.texture2D}(Mean, position));
    float variance = getColorAsFloat(${r.texture2D}(Variance, position));
    float b = getColorAsFloat(${r.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${n.epsilon})) ) + b;
  }`;return{...Tm,output:{dims:t[0].dims,type:t[0].type,textureType:0},shaderSource:s}},uA=e=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs.`);let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4];if(t.dims.length<3||n.dims.length!==1||r.dims.length!==1||i.dims.length!==1||a.dims.length!==1||n.dims[0]!==t.dims[1]||r.dims[0]!==t.dims[1]||i.dims[0]!==t.dims[1]||a.dims[0]!==t.dims[1])throw Error(`invalid input shape.`);if(t.type!==`float32`&&t.type!==`float64`||n.type!==`float32`&&n.type!==`float64`||r.type!==`float32`&&r.type!==`float64`||i.type!==`float32`&&i.type!==`float64`||a.type!==`float32`&&a.type!==`float64`)throw Error(`invalid input tensor types.`)}}),Ui,Mt,X,Lo,Wi,Yn=N(()=>{Ui=class{constructor(e,t,n,r){this.glContext=e,this.programInfo=t,this.inputTextureLayouts=n,this.outputTextureLayout=r}},Mt=class{constructor(e){this.context=e}},X=class{constructor(e,t){this.routineBody=e,this.dependencies=t}},Lo=class{constructor(e,t,n){this.name=e,n?this.dependencies=n:this.dependencies=[],t&&(this.routineBody=t)}addDependency(e){e&&this.dependencies.push(e)}},Wi=class{static returnOrderedNodes(e){if(!e||e.length===0)return[];if(e.length===1)return e;let t=new Set,n=new Set,r=[];return this.createOrderedNodes(e,t,n,r),r}static createOrderedNodes(e,t,n,r){for(let i=0;i<e.length;++i)this.dfsTraverse(e[i],t,n,r)}static dfsTraverse(e,t,n,r){if(!e||n.has(e.name))return;if(t.has(e.name))throw Error(`Cyclic dependency detected. Can't topologically sort routines needed for shader.`);t.add(e.name);let i=e.dependencies;if(i&&i.length>0)for(let e=0;e<i.length;++e)this.dfsTraverse(i[e],t,n,r);r.push(e),n.add(e.name),t.delete(e.name)}}});function cA(){let e=`add_`;return{body:`
  float ${e}(float a, float b) {
    return a + b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:e,type:0}}function dA(){let e=`div_`;return{body:`
  float ${e}(float a, float b) {
    return a / b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:e,type:0}}function pA(){let e=`mul_`;return{body:`
  float ${e}(float a, float b) {
    return a * b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:e,type:0}}function fA(){let e=`sub_`;return{body:`
  float ${e}(float a, float b) {
    return a - b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:e,type:0}}function hA(){let e=`equal_`;return{body:`
  float ${e}(float a, float b) {
    return float(a == b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:e,type:0}}function mA(){let e=`greater_`;return{body:`
  float ${e}(float a, float b) {
    return float(a > b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:e,type:0}}function gA(){let e=`less_`;return{body:`
  float ${e}(float a, float b) {
    return float(a < b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,name:e,type:0}}function bA(){let e=`and_`;return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `,name:e,type:0}}function yA(){let e=`or_`;return{body:`
  float or_(float a, float b) {
    return float( bool(a) || bool(b) );
  }
  vec4 or_(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r || b2.r ,
                b1.g || b2.g,
                b1.b || b2.b,
                b1.a || b2.a );
  }
  `,name:`or_`,type:0}}function _A(){let e=`xor_`;return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `,name:e,type:0}}function wA(){return xA(`pow`)}function vA(){let e=`prelu_`;return{body:`
  float ${e}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `,name:e,type:0}}function xA(e){let t=`${e}_`;return{body:`
  float ${t}(float a, float b) {
    return ${e}(a, b);
  }
  vec4 ${t}(vec4 v1, vec4 v2) {
    return ${e}(v1, v2);
  }
  `,name:t,type:0}}var Bt,TA,Am,Om,Pm,Em,Cm,Dm,km,Nm,Lm,Rm,zm,Mm,Bm=N(()=>{ze(),Yn(),Je(),Ae(),Bt=(e,t,n,r=t[0].type,i)=>{let a=e.session.pack?2:0;return{name:n.name,inputNames:[`A`,`B`],inputTypes:[a,a],cacheHint:i,get:()=>TA(e,t,n,r)}},TA=(e,t,n,r=t[0].type)=>{let i=e.session.pack?2:0,a=!ne.areEqual(t[0].dims,t[1].dims),o=t[0].dims,s=e.session.pack;if(a){let a=bt.calcShape(t[0].dims,t[1].dims,!1);if(!a)throw Error(`Can't perform binary op on the given tensors`);o=a;let c=o.length,l=t[0].dims.length===0?1:t[0].dims.length,u=t[1].dims.length===0?1:t[1].dims.length,d=t[0].dims.length===0?`aindices[0] = 0;`:`bcastIndices_A(indices, aindices);`,f=t[1].dims.length===0?`bindices[0] = 0;`:`bcastIndices_B(indices, bindices);`,p=se(e.session.backend.glContext.version),m=s?`
      ${n.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${n.name}(a, b);
        ${p.output} = result;
      }`:`
      ${n.body}
      float process(int indices[${c}]) {
        int aindices[${l}];
        int bindices[${u}];
        ${d}
        ${f}
        return ${n.name}(_A(aindices), _B(bindices));
      }`;return{name:n.name,inputNames:[`A`,`B`],inputTypes:[i,i],output:{dims:o,type:r,textureType:i},shaderSource:m,hasMain:s}}let c=se(e.session.backend.glContext.version),l=`
    ${n.body}
    void main() {
      vec4 v1 = ${c.texture2D}(A, TexCoords);
      vec4 v2 = ${c.texture2D}(B, TexCoords);
      vec4 result = ${n.name}(v1, v2);
      ${c.output} = result;
    }
    `;return{name:n.name,inputNames:[`A`,`B`],inputTypes:[i,i],output:{dims:t[0].dims,type:r,textureType:i},shaderSource:l,hasMain:!0}},Am=(e,t)=>[e.run(Bt(e,t,cA()),t)],Om=(e,t)=>[e.run(Bt(e,t,bA(),`bool`),t)],Pm=(e,t)=>[e.run(Bt(e,t,dA()),t)],Em=(e,t)=>[e.run(Bt(e,t,hA(),`bool`),t)],Cm=(e,t)=>[e.run(Bt(e,t,mA(),`bool`),t)],Dm=(e,t)=>[e.run(Bt(e,t,gA(),`bool`),t)],km=(e,t)=>[e.run(Bt(e,t,pA()),t)],Nm=(e,t)=>[e.run(Bt(e,t,yA(),`bool`),t)],Lm=(e,t)=>[e.run(Bt(e,t,wA()),t)],Rm=(e,t)=>[e.run(Bt(e,t,vA()),t)],zm=(e,t)=>[e.run(Bt(e,t,fA()),t)],Mm=(e,t)=>[e.run(Bt(e,t,_A(),`bool`),t)]}),Fm,Vm,SA,Gm=N(()=>{ze(),Fm=(e,t,n)=>(SA(t),[e.cast(t[0],n)]),Vm=e=>ht.tensorDataTypeFromProto(e.attributes.getInt(`to`)),SA=e=>{if(!e||e.length!==1)throw Error(`Cast requires 1 input.`);if(e[0].type===`string`)throw Error(`Invalid input type.`)}}),$A,AA,Um,Hi,Wm=N(()=>{Je(),Ae(),zn(),zr(),$A=(e,t)=>({name:`Concat (packed)`,inputNames:Array.from({length:e},(e,t)=>`X${t}`),inputTypes:Array(e).fill(2),cacheHint:t}),AA=(e,t,n,r)=>{let i=n[0].dims.slice();if(r>=i.length||r<-1*i.length)throw Error(`axis specified for concat doesn't match input dimensionality`);r<0&&(r=i.length+r);let a=i.slice(0);for(let e=1;e<n.length;e++){let t=n[e].dims.slice();for(let e=0;e<i.length;e++)if(e===r)a[r]+=t[e];else if(i[e]!==t[e])throw Error(`non concat dimensions must match`)}let o=a.length,s=ro(`coords`,o),c=yt(o),l=Mn(),u=n.map(e=>e.dims),d=Xt(o),f=Array(u.length-1);f[0]=u[0][r];for(let e=1;e<f.length;e++)f[e]=f[e-1]+u[e][r];let p=d[r],m=d.slice(-2),h=d.join(),g=`if (${p} < ${f[0]}) {
        return getChannel(
            getX0(${h}), vec2(${m.join()}));
        }`;for(let e=1;e<f.length;e++){let t=f[e-1];g+=`
            if (${p} < ${f[e]}  && ${p} >= ${f[e-1]}) {
              return getChannel(
                getX${e}(${Hi(d,p,t)}),
                vec2(${Hi(m,p,t)}));
            }`}let _=f.length,v=f[f.length-1];g+=`
            return getChannel(
              getX${_}(${Hi(d,p,v)}),
              vec2(${Hi(m,p,v)}));`;let y=se(e.session.backend.glContext.version),b=`
          ${l}
          float getValue(${d.map(e=>`int `+e)}) {
            ${g}
          }

          void main() {
            ${c} coords = getOutputCoords();
            int lastDim = coords.${d[o-1]};
            coords.${d[o-1]} = coords.${d[o-2]};
            coords.${d[o-2]} = lastDim;

            vec4 result = vec4(getValue(${s}), 0., 0., 0.);

            ${s[o-1]} = ${s[o-1]} + 1;
            if (${s[o-1]} < ${a[o-1]}) {
              result.g = getValue(${s});
            }

            ${s[o-2]} = ${s[o-2]} + 1;
            if (${s[o-2]} < ${a[o-2]}) {
              result.a = getValue(${s});
            }

            ${s[o-1]} = ${s[o-1]} - 1;
            if (${s[o-2]} < ${a[o-2]} &&
                ${s[o-1]} < ${a[o-1]}) {
              result.b = getValue(${s});
            }
            ${y.output} = result;
          }
        `;return{...t,output:{dims:a,type:n[0].type,textureType:2},shaderSource:b,hasMain:!0}},Um=(e,t,n)=>{let r=$A(t.length,n.cacheKey);return{...r,get:()=>AA(e,r,t,n.axis)}},Hi=(e,t,n)=>{let r=e.indexOf(t);return e.map((e,t)=>t===r?`${e} - ${n}`:e).join()}}),Hm,OA,PA,EA,qm,CA,DA,kA,jm,NA,Km=N(()=>{dt(),Ae(),Wm(),Hm=(e,t,n)=>(NA(t),e.session.pack&&t[0].dims.length>1?[e.run(Um(e,t,n),t)]:[e.run(EA(e,t,n),t)]),OA=(e,t)=>({name:`Concat`,inputNames:Array.from({length:e},(e,t)=>`X${t}`),inputTypes:Array(e).fill(0),cacheHint:t}),PA=(e,t,n,r)=>{let i=n[0].dims.slice();if(r>=i.length||r<-1*i.length)throw Error(`axis specified for concat doesn't match input dimensionality`);r<0&&(r=i.length+r);let a=i.slice(0);for(let e=1;e<n.length;e++){let t=n[e].dims.slice();for(let e=0;e<i.length;e++)if(e===r)a[r]+=t[e];else if(i[e]!==t[e])throw Error(`non concat dimensions must match`)}let o=a.length,s=Array(n.length),c=0;for(let e=0;e<s.length;++e)c+=n[e].dims[r],s[e]=c;let l=``;l=n.length<5?qm(s):CA(s);let u=`
        ${DA(n.length,o)}
        ${kA(s)}
        ${l}
        float process(int indices[${o}]) {
          int textureIndex = getTextureWhereDataResides (indices[${r}]);

          if(textureIndex != 0) {
            indices[${r}] = indices[${r}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return{...t,output:{dims:a,type:n[0].type,textureType:0},shaderSource:u}},EA=(e,t,n)=>{let r=OA(t.length,n.cacheKey);return{...r,get:()=>PA(e,r,t,n.axis)}},qm=e=>`int getTextureWhereDataResides(int index) {
      ${e.map((e,t)=>`if(index<${e}) {return ${t};}
`).join(``)}
    }`,CA=e=>qm(e),DA=(e,t)=>{let n=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${t}]) {`];for(let t=0;t<e;++t)t===0?n.push(`	if (textureIndex == ${t}) { return _X${t}(indices); }`):t===e-1?n.push(`	else { return _X${t}(indices); }`):n.push(`	else if (textureIndex == ${t}) { return _X${t}(indices); }`);return n.push(`	}`),n.join(`
`)},kA=e=>{let t=[`int getSizeInConcatAxisValueFromIndex(int index) {`];for(let n=0;n<e.length;++n)n===0?t.push(`	if (index == ${n}) { return ${e[n]}; }`):n===e.length-1?t.push(`	else { return ${e[n]}; }`):t.push(`	else if (index == ${n}) { return ${e[n]}; }`);return t.push(`	}`),t.join(`
`)},jm=e=>_e({axis:e.attributes.getInt(`axis`)}),NA=e=>{if(!e||e.length<1)throw Error(`too few inputs`);let t=e[0].type,n=e[0].dims.length;if(t===`string`)throw Error(`string tensor is not supported yet`);for(let r of e){if(r.type!==t)throw Error(`input tensors should be one type`);if(r.dims.length!==n)throw Error(`input tensors should have the same shape`)}}});function LA(){return Ft(`abs`)}function RA(){return Ft(`acos`)}function zA(){return Ft(`asin`)}function MA(){return Ft(`atan`)}function BA(){return Ft(`ceil`)}function FA(){return Ft(`cos`)}function VA(e){let t=`elu`;return{body:`
  const float alpha = float(${e});

  float elu_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 elu_(vec4 v) {
    return vec4(elu_(v.x), elu_(v.y), elu_(v.z), elu_(v.w));
  }
  `,name:`elu`,type:0}}function GA(){return Ft(`exp`)}function UA(){return Ft(`floor`)}function $l(e,t){let n=`clip`;return{body:`
  const float min = float(${e});
  const float max = float(${t});

  float ${n}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${n}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:n,type:0}}function WA(){let e=`indentity`;return{body:`
  float ${e}_(float a) {
    return a;
  }
  vec4 ${e}_(vec4 v) {
    return v;
  }
  `,name:e,type:0}}function HA(e){let t=`leakyRelu`;return{body:`
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,name:t,type:0}}function qA(){return Ft(`log`)}function jA(){let e=`neg`;return{body:`
  float neg_(float a) {
    return -a;
  }
  vec4 neg_(vec4 v) {
    return -v;
  }
  `,name:`neg`,type:0}}function KA(){let e=`not`;return{body:`
  float not_(float a) {
    return float( ! bool(a) );
  }
  bool not_(bool a) {
    return !a;
  }
  vec4 not_(vec4 v) {
    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));
  }
  bvec4 not_(bvec4 v) {
    return bvec4(!v.x, !v.y, !v.z, !v.w);
  }
  `,name:`not`,type:0}}function XA(){return Ft(`sin`)}function Al(){let e=`relu`;return{body:`
  float ${e}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${e}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,name:e,type:0}}function Ol(){let e=`sigmoid`;return{body:`
  float ${e}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${e}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,name:e,type:0}}function ZA(){return Ft(`sqrt`)}function JA(){return Ft(`tan`)}function YA(){let e=`tanh`;return{body:`
  float ${e}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${e}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `,name:e,type:0}}function Ft(e){return{body:`
  float ${e}_(float a) {
    return ${e}(a);
  }
  vec4 ${e}_(vec4 v) {
    return ${e}(v);
  }
  `,name:e,type:0}}var QA,nt,Xm,Zm,Jm,Ym,Pl,Qm,eg,eO,tg,ng,rg,og,ig,ag,El,sg,ug,lg,cg,dg,pg,fg,hg,mg,gg,bg,Cl=N(()=>{dt(),ze(),Yn(),Je(),Ae(),QA=(e,t,n,r)=>{let i=e.session.pack?2:0,a=se(e.session.backend.glContext.version);return{...t,output:{dims:n.dims,type:n.type,textureType:i},shaderSource:`
     ${r.body}
     void main() {
       vec4 v = ${a.texture2D}(A, TexCoords);
       v = ${r.name}_(v);
       ${a.output} = v;
     }
     `,hasMain:!0}},nt=(e,t,n,r)=>{let i=e.session.pack?2:0,a={name:n.name,inputTypes:[i],inputNames:[`A`],cacheHint:r};return{...a,get:()=>QA(e,a,t,n)}},Xm=(e,t)=>[e.run(nt(e,t[0],LA()),t)],Zm=(e,t)=>[e.run(nt(e,t[0],RA()),t)],Jm=(e,t)=>[e.run(nt(e,t[0],zA()),t)],Ym=(e,t)=>[e.run(nt(e,t[0],MA()),t)],Pl=(e,t,n)=>[e.run(nt(e,t[0],$l(n.min,n.max),n.cacheKey),t)],Qm=e=>_e({min:e.attributes.getFloat(`min`,Nr),max:e.attributes.getFloat(`max`,Lr)}),eg=(e,t)=>{let n=eO(e,t);return Pl(e,[t[0]],n)},eO=(e,t)=>{if(t.length>=3&&(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)))throw Error(`dynamic clip attributes are not allowed`);let n=t.length>=3?t[1].numberData[0]:Nr,r=t.length>=3?t[2].numberData[0]:Lr;return _e({min:n,max:r})},tg=(e,t)=>[e.run(nt(e,t[0],BA()),t)],ng=(e,t)=>[e.run(nt(e,t[0],FA()),t)],rg=(e,t,n)=>[e.run(nt(e,t[0],VA(n.alpha),n.cacheKey),t)],og=e=>_e({alpha:e.attributes.getFloat(`alpha`,1)}),ig=(e,t)=>[e.run(nt(e,t[0],GA()),t)],ag=(e,t)=>[e.run(nt(e,t[0],UA()),t)],El=(e,t)=>[e.run(nt(e,t[0],WA()),t)],sg=(e,t,n)=>[e.run(nt(e,t[0],HA(n.alpha),n.cacheKey),t)],ug=e=>_e({alpha:e.attributes.getFloat(`alpha`,.01)}),lg=(e,t)=>[e.run(nt(e,t[0],qA()),t)],cg=(e,t)=>[e.run(nt(e,t[0],jA()),t)],dg=(e,t)=>[e.run(nt(e,t[0],KA()),t)],pg=(e,t)=>[e.run(nt(e,t[0],Al()),t)],fg=(e,t)=>[e.run(nt(e,t[0],Ol()),t)],hg=(e,t)=>[e.run(nt(e,t[0],XA()),t)],mg=(e,t)=>[e.run(nt(e,t[0],ZA()),t)],gg=(e,t)=>[e.run(nt(e,t[0],JA()),t)],bg=(e,t)=>[e.run(nt(e,t[0],YA()),t)]});function Bn(e){let t;switch(e.activation){case`Relu`:t=Al();break;case`Sigmoid`:t=Ol();break;case`Clip`:t=$l(e.clipMin,e.clipMax);break;default:return{activationFunction:``,applyActivation:``}}let n=t.name;return{activationFunction:t.body,applyActivation:`value = ${n}_(value);`}}var oo,Mr=N(()=>{ze(),Cl(),oo=e=>{let t=e.getString(`activation`,``);if(t===`Clip`){let[n,r]=e.getFloats(`activation_params`,[Nr,Lr]);return{activation:t,clipMax:r,clipMin:n,activationCacheKey:`${t}:${n},${r}`}}return{activation:t,activationCacheKey:t}}}),nO,rO,yg,_g=N(()=>{Dt(),Je(),Ae(),qi(),Mr(),nO=(e,t)=>({name:`GroupedConv`,inputNames:e?[`X`,`W`,`Bias`]:[`X`,`W`],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),rO=(e,t,n,r)=>{let i=t.length>2?`value += getBias(output_channel);`:``,a=t[0].dims.slice(),o=t[1].dims.slice(),s=o[0]/r.group;Be.verbose(`GroupedConv`,`autpPad:${r.autoPad}, dilations:${r.dilations}, group:${r.group}, kernelShape:${r.kernelShape}, pads:${r.pads}, strides:${r.strides}`);let c=io(a,o,r.dilations,r.pads,r.strides),l=se(e.session.backend.glContext.version),{activationFunction:u,applyActivation:d}=Bn(r),f=`
  const ivec2 strides = ivec2(${r.strides[0]}, ${r.strides[1]});
  const ivec2 pads = ivec2(${r.pads[0]}, ${r.pads[1]});
  ${u}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${s};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${o[1]}; wInChannel++) {
      int input_channel = group_id * ${o[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${o[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${r.dilations[0]};

        if (xHeight < 0 || xHeight >= ${a[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${o[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${r.dilations[1]};
          if (xWidth < 0 || xWidth >= ${a[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${i}
    ${d}
    ${l.output} = vec4(value, .0, .0, .0);
  }
`;return{...n,output:{dims:c,type:t[0].type,textureType:0},shaderSource:f,hasMain:!0}},yg=(e,t,n)=>{let r=nO(t.length>2,n.cacheKey);return{...r,get:()=>rO(e,t,r,n)}}}),oO,iO,wg,vg=N(()=>{Je(),Ae(),zr(),oO=e=>({name:`Im2Col (packed)`,inputNames:[`A`],inputTypes:[2],cacheHint:e}),iO=(e,t,n,r,i,a)=>{let o=n.dims,s=r.dims,c=2,l=3,u=i.length,d=[s[1]*s[2]*s[3],i[2]*i[3]],f=s[2]*s[3],p=Mn(),m=se(e.session.backend.glContext.version),h=``;for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)h+=`
            blockIndex = rc.x + ${t};
            pos = rc.y + ${e};

            if(blockIndex < ${d[1]} && pos < ${d[0]}) {
              offsetY = int(blockIndex / (${i[u-1]})) * ${a.strides[0]} -
                ${a.pads[0]};
              d0 = offsetY + ${a.dilations[0]} * (imod(pos, ${f}) / ${s[2]});

              if(d0 < ${o[2]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${i[u-1]}) * ${a.strides[1]} -
                  ${a.pads[1]};
                d1 = offsetX + ${a.dilations[1]} * imod(imod(pos, ${f}), ${s[2]});

                if(d1 < ${o[3]} && d1 >= 0) {

                  ch = int(float(pos)/ ${f}.);
                    innerDims = vec2(d0, d1);
                    result[${e*2+t}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;let g=`
      ${p}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${h}
          ${m.output} = result;
      }
            `;return{...t,output:{dims:d,type:n.type,textureType:2},shaderSource:g,hasMain:!0}},wg=(e,t,n,r,i)=>{let a=oO(i.cacheKey);return{...a,get:()=>iO(e,a,t,n,r,i)}}});function sO(e,t,n){let r=t[0].dims,i=t[1].dims,a=bt.calcShape(r,i,!0);if(!a)throw Error(`Can't use matmul on the given tensors`);let o=yt(a.length),s=Xt(),{activationFunction:c,applyActivation:l}=Bn(n),u=t.length>2,d=u?`value += getBiasForMatmul();`:``,f=u?`${kl(o,s,t[2].dims,a,!1)}`:``,p=a.length,m=r.length,h=i.length,g=`
    ${c}
    ${f}
    float process(int indices[${p}]) {
        int a[${m}];
        int b[${h}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${r[r.length-1]}; ++k) {
            a[${m-1}] = k;
            b[${h-2}] = k;
            value += _A(a) * _B(b);
        }
        ${d}
        ${l}
        return value;
    }`;return{...e,output:{dims:a,type:t[0].type,textureType:0},shaderSource:g}}function Dl(e,t){let n=aO(e.length>2,t.activationCacheKey);return{...n,get:()=>sO(n,e,t)}}function kl(e,t,n,r,i){let a=``,o=n.length,s=r.length,c=s-o;a=s<2&&o>0?`coords`:n.map((e,n)=>`coords.${t[n+c]}`).join(`, `);let l=bt.getBroadcastDims(n,r).map(e=>`coords.${t[e+c]} = 0;`).join(`
`),u=ne.size(n)===1,d=`vec4(outputValue.xx, outputValue.yy)`;return u&&(d=`vec4(outputValue.x)`),i?`
vec4 getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${l}
  vec4 outputValue = getBias(${a});
  return ${d};
}`:`
float getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${l}
  return getBias(coords.x);
}`}var xg,Tg,aO,uO,ji=N(()=>{ze(),Ae(),zn(),Mr(),Nl(),xg=(e,t,n)=>(uO(t),e.session.pack?[e.run(Ki(e,t,n),t)]:[e.run(Dl(t,n),t)]),Tg=e=>oo(e.attributes),aO=(e,t)=>({name:`MatMul`,inputNames:e?[`A`,`B`,`Bias`]:[`A`,`B`],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),uO=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`);if(e[0].type!==`float32`&&e[0].type!==`float64`||e[1].type!==`float32`&&e[1].type!==`float64`)throw Error(`inputs should be float type`);if(e[0].type!==e[1].type)throw Error(`inputs types should match`)}});function dO(e,t,n,r){let i=[],a=[],o=n[0].dims,s=n[1].dims,c=o.length,l=s.length,u=r.length,d=u-c,f=u-l;i=o.map((e,n)=>`coords.${t[n+d]}`),i[c-1]=`i*2`,i.join(`, `),a=s.map((e,n)=>`coords.${t[n+f]}`),a[l-2]=`i*2`,a.join(`, `);let p=bt.getBroadcastDims(o,r),m=bt.getBroadcastDims(s,r),h=p.map(e=>`coords.${t[e+d]} = 0;`).join(`
`),g=m.map(e=>`coords.${t[e+f]} = 0;`).join(`
`),_=`int lastDim = coords.${t[u-1]};
  coords.${t[u-1]} = coords.${t[u-2]};
  coords.${t[u-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${_}
  ${h}
  vec4 outputValue = getA(${i});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${_}
  ${g}
  vec4 outputValue = getB(${a});
  return outputValue;
}`}function pO(e,t){let n=``;for(let r=0;r<t-2;r++)n+=`rc.${e[r]}, `;return n+=`rc.${e[t-2]}, i*2`,n}function fO(e,t){let n=``;for(let r=0;r<t-2;r++)n+=`rc.${e[r]}, `;return n+=`i*2, rc.${e[t-1]}`,n}var lO,cO,Ki,Nl=N(()=>{ze(),Je(),Ae(),zn(),Mr(),ji(),lO=(e,t)=>({name:`MatMul (packed)`,inputNames:e?[`A`,`B`,`Bias`]:[`A`,`B`],inputTypes:e?[2,2,2]:[2,2],cacheHint:t}),cO=(e,t,n,r)=>{let i=n.length>2,a=i?`value += getBiasForMatmul();`:``,o=n[0].dims,s=n[1].dims,c=bt.calcShape(o,s,!0),l=!ne.areEqual(n[0].dims,n[1].dims);if(!c)throw Error(`Can't use matmul on the given tensors`);let u=o[o.length-1],d=Math.ceil(u/2),f=o.length,p=s.length,m=se(e.session.backend.glContext.version),h=yt(c.length),g=c.length,_=Xt(),{activationFunction:v,applyActivation:y}=Bn(r),b=i?`${kl(h,_,n[2].dims,c,!0)}`:``,x=l?`${dO(h,_,n,c)}`:``,S=l?`getAAtOutCoordsMatmul(i)`:`getA(${pO(_,f)})`,C=l?`getBAtOutCoordsMatmul(i)`:`getB(${fO(_,p)})`,w=`
            ${x}
            ${b}
            ${v}
            void main() {
              ${l?``:`${h} rc =
          getOutputCoords(); int lastDim = rc.${_[g-1]}; rc.${_[g-1]} =
          rc.${_[g-2]}; rc.${_[g-2]} = lastDim;
      `}

              vec4 value = vec4(0);
              for (int i = 0; i < ${d}; i++) {
                vec4 a = ${S};
                vec4 b = ${C};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${a}
              ${y}
              ${m.output} = value;
            }`;return{...t,output:{dims:c,type:n[0].type,textureType:2},shaderSource:w,hasMain:!0}},Ki=(e,t,n)=>{let r=lO(t.length>2,n.activationCacheKey);return{...r,get:()=>cO(e,r,t,n)}}}),Ig,Sg=N(()=>{qi(),vg(),Nl(),Ig=(e,t,n)=>{let r=t[0].dims,i=t[1].dims,a=io(r,i,n.dilations,n.pads,n.strides),o=e.run(wg(e,t[0],t[1],a,n),[t[0]]),s=e.reshapePacked(t[1],[i[0],i[1]*i[2]*i[3]]),c=t.length===3?[s,o,t[2]]:[s,o],l=e.run(Ki(e,c,n),c);return e.reshapePacked(l,a)}}),hO,mO,$g,Ll,Rl=N(()=>{Ae(),hO=e=>({name:`Im2Col`,inputNames:[`X`],inputTypes:[0],cacheHint:e}),mO=(e,t,n,r,i,a)=>{let o=n.dims,s=r.dims,c=i.length,l=Ll(o,s,i,4),u=`
        const int XC = ${o[1]};
        const int XH = ${o[2]};
        const int XW = ${o[3]};
        const int KH = ${a.kernelShape[0]};
        const int KW = ${a.kernelShape[1]};
        const int dilationH = ${a.dilations[0]};
        const int dilationW = ${a.dilations[1]};
        const int strideH = ${a.strides[0]};
        const int strideW = ${a.strides[1]};
        const int padH = ${a.pads[0]};
        const int padW = ${a.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${c}]) {
          int b  = indices[0]; // batch size
          int oh = indices[1] * strideH - padH; //output height
          int ow = indices[2] * strideW - padW; //output width
          int p = indices[3] * outputChannels; //patch
          vec4 value = vec4(0.0);
          for(int i=0; i < outputChannels; ++i) {
            if(p < XCKHKW) {
              int patchC = p / KHKW;
              int patchH = (p - patchC*KHKW) / KW;
              int patchW = (p - patchC*KHKW) - patchH * KW;
              int xh2 = oh + patchH * dilationH;
              int xw2 = ow + patchW * dilationW;
              int x[${o.length}];
              x[0] = b;
              x[1] = patchC;
              x[2] = xh2;
              x[3] = xw2;
              if(xh2 >= 0 &&
                  xh2 < XH &&
                  xw2 >= 0 &&
                  xw2 < XW) {
                value[i] = _X(x);
              }
            }
            ++p;
          }
          return value;
        }
        `;return{...t,output:{dims:l,type:n.type,textureType:4},shaderSource:u}},$g=(e,t,n,r,i)=>{let a=hO(i.cacheKey);return{...a,get:()=>mO(e,a,t,n,r,i)}},Ll=(e,t,n,r=4)=>[n[0],n[2],n[3],Math.ceil(e[1]*t[2]*t[3]/r)]}),gO,bO,Ag,Og=N(()=>{ze(),Je(),Ae(),Mr(),Rl(),gO=(e,t)=>({name:`ConvDotProduct`,inputNames:e?[`Im2Col`,`K`,`B`]:[`Im2Col`,`K`],inputTypes:e?[0,4,0]:[0,4],cacheKey:t.activationCacheKey}),bO=(e,t,n,r,i)=>{let a=n[0].dims,o=n[1].dims,s=[o[0],Math.ceil(a[1]*o[2]*o[3]/4)],c=Ll(a,o,r),[l,u]=e.calculateTextureWidthAndHeight(s,4),d=ne.computeStrides(c),[f,p]=e.calculateTextureWidthAndHeight(c,4),m=r.length,h=n.length<3?`0.0`:`_B(b)`,g=Math.ceil(a[1]*o[2]*o[3]/4),{activationFunction:_,applyActivation:v}=Bn(i),y=se(e.session.backend.glContext.version),b=`
${_}
float process(int indices[${m}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${d[0]} + im2col[1] * ${d[1]} + im2col[2] * ${d[2]};
  int kernelOffset = indices[1] * ${s[1]};
  float value = ${h};
  for (int i = 0; i < ${g}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${f}, ${p});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${l}, ${u});
    value += dot(${y.texture2D}(Im2Col, im2colCoords), ${y.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${v}
  return value;
}`;return{...t,output:{dims:r,type:n[0].type,textureType:0},shaderSource:b}},Ag=(e,t,n,r)=>{let i=gO(t.length>2,r);return{...i,get:()=>bO(e,i,t,n,r)}}}),io,zl,yO,_O,wO,vO,Ml,xO,qi=N(()=>{dt(),ze(),_g(),Sg(),Og(),Mr(),Rl(),ji(),io=(e,t,n,r,i)=>{let a=e[0],o=e.slice(2),s=o.length,c=t[0],l=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),u=o.map((e,t)=>e+r[t]+r[t+s]).map((e,t)=>Math.floor((e-l[t]+i[t])/i[t]));return[a,c].concat(...u)},zl=(e,t,n)=>(xO(t,n),yO(e,t,n)),yO=(e,t,n)=>{let r=vO(n,t),i=e.session.pack,a=r.kernelShape[0]===1&&r.kernelShape[1]===1;return r.group>1?[e.run(yg(e,t,r),t)]:a&&i?[_O(e,t,r)]:i&&t[0].dims.length===4&&t[0].dims[0]===1&&!a?[Ig(e,t,r)]:[wO(e,t,r)]},_O=(e,t,n)=>{let r=t[0].dims,i=t[1].dims,a=io(r,i,n.dilations,n.pads,n.strides),o=e.reshapeUnpacked(t[0],[r[1],r[2]*r[3]]),s=e.reshapeUnpacked(t[1],[i[0],i[1]]),c=t.length>2?[s,o,t[2]]:[s,o],l=e.run(Dl(c,n),c);return e.reshapeUnpacked(l,a)},wO=(e,t,n)=>{let r=t[0].dims,i=t[1].dims,a=io(r,i,n.dilations,n.pads,n.strides),o=e.run($g(e,t[0],t[1],a,n),[t[0]]),s=t.length===3?[o,t[1],t[2]]:[o,t[1]];return e.run(Ag(e,t,a,n),s)},vO=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0)for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e]);let r=e.pads.slice();kr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r,cacheKey:e.cacheKey}),i},Ml=e=>{let t=e.attributes,n=oo(t),r=t.getString(`auto_pad`,`NOTSET`),i=t.getInts(`dilations`,[1,1]),a=t.getInt(`group`,1),o=t.getInts(`kernel_shape`,[]),s=t.getInts(`pads`,[0,0,0,0]),c=t.getInts(`strides`,[1,1]);return _e({autoPad:r,dilations:i,group:a,kernelShape:o,pads:s,strides:c,...n})},xO=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4||e[1].dims.length!==4)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims[1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(e[0].type!==`float32`||e[1].type!==`float32`)throw Error(`Conv input(X,W) should be float tensor`);if(e.length===3&&e[2].type!==`float32`)throw Error(`Conv input(bias) should be float tensor`)}}),TO,IO,SO,Pg,$O,AO,OO,PO,EO,CO,Eg,DO,Cg=N(()=>{dt(),Je(),Ae(),Mr(),TO=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,IO=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},SO=(e,t,n,r,i,a,o,s)=>{let c=e.length-2,l=s.length===0;for(let u=0;u<c;++u){let d=l?e[u+2]*a[u]:s[u],f=TO(e[u+2],a[u],i[u],t[u],n[u],d);IO(f,r,i,u,u+c),l&&s.push(a[u]*(e[u+2]-1)+o[u]+(t[u]-1)*n[u]+1-i[u]-i[u+c])}},Pg=(e,t,n)=>(DO(t,n),$O(e,t,n)),$O=(e,t,n)=>{let r=CO(n,t);return[EO(e,t,r)]},AO=(e,t)=>({name:`ConvTranspose`,inputNames:e?[`X`,`W`,`B`]:[`X`,`W`],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),OO=(e,t,n,r)=>{let i=t.length>2?`getB(output_channel)`:`0.0`,a=t[0].dims,o=t[1].dims,s=o[1],c=o[0]/r.group,l=[t[0].dims[0],t[1].dims[1]*r.group,...r.outputShape],u=se(e.session.backend.glContext.version),{activationFunction:d,applyActivation:f}=Bn(r),p=`
  const ivec2 strides = ivec2(${r.strides[0]}, ${r.strides[1]});
  const ivec2 pads = ivec2(${r.pads[0]}, ${r.pads[1]});
  ${d}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${s};
    int wOutChannel = output_channel - group_id * ${s};

    float value = ${i};
    for (int inChannelOffset = 0; inChannelOffset < ${c}; inChannelOffset++) {
      int input_channel = group_id * ${c} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${o[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${o[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${r.dilations[0]}, wHOff * ${r.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${a[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${a[3]}
          ) {
            float xVal = getX(batch, input_channel, wLocIn.y, wLocIn.x);
            float wVal = getW(input_channel, wOutChannel, wHOff, wWOff);
            value += xVal * wVal;
          }
        }
      }
    }
    ${f}
    ${u.output} = vec4(value, .0, .0, .0);
  }
`;return{...n,output:{dims:l,type:t[0].type,textureType:0},shaderSource:p,hasMain:!0}},PO=(e,t,n)=>{let r=AO(t.length>2,n.cacheKey);return{...r,get:()=>OO(e,t,r,n)}},EO=(e,t,n)=>e.run(PO(e,t,n),t),CO=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0)for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e]);let r=e.pads.slice(),i=e.outputShape.slice(),a=t[0].dims;SO(a,n,e.dilations,e.autoPad,r,e.strides,e.outputPadding,i);let o=Object.assign({},e);return Object.assign(o,{kernelShape:n,pads:r,outputShape:i,cacheKey:e.cacheKey}),o},Eg=e=>{let t=e.attributes,n=oo(t),r=t.getString(`auto_pad`,`NOTSET`),i=t.getInts(`dilations`,[1,1]),a=t.getInt(`group`,1),o=t.getInts(`kernel_shape`,[]),s=t.getInts(`output_padding`,[0,0]),c=t.getInts(`output_shape`,[]),l=t.getInts(`pads`,[0,0,0,0]),u=t.getInts(`strides`,[1,1]);return _e({autoPad:r,dilations:i,group:a,kernelShape:o,outputPadding:s,outputShape:c,pads:l,strides:u,...n})},DO=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4||e[1].dims.length!==4)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims[1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`);if(e[0].type!==`float32`||e[1].type!==`float32`)throw Error(`ConvTranspose input(X,W) should be float tensor`);if(e.length===3&&e[2].type!==`float32`)throw Error(`ConvTranspose input(bias) should be float tensor`)}}),Dg,Br,kg,kO,Ng,NO,LO,RO,Xi=N(()=>{dt(),ze(),Ae(),Dg={name:`Transpose`,inputNames:[`A`],inputTypes:[0]},Br=(e,t,n)=>(RO(t),[e.run({...Dg,cacheHint:n.cacheKey,get:()=>kO(e,t[0],n.perm)},t)]),kg=e=>_e({perm:e.attributes.getInts(`perm`,[])}),kO=(e,t,n)=>{let r=t.dims;n=Ng(r,n);let i=NO(r,n),a=r.length,o=`
      ${LO(`perm`,n,a)}
      float process(int indices[${a}]) {
        int a[${a}];
        perm(a, indices);
        return _A(a);
      }`;return{...Dg,output:{dims:i,type:t.type,textureType:0},shaderSource:o}},Ng=(e,t)=>(t&&t.length!==e.length&&(t=[...e.keys()].reverse()),t),NO=(e,t)=>(t=Ng(e,t),ne.sortBasedOnPerm(e,t)),LO=(e,t,n)=>{let r=[];r.push(`void ${e}(out int a[${n}], int src[${n}]) {`);for(let e=0;e<n;++e)r.push(`	a[${t[e]}]=src[${e}];`);return r.push(`	}`),r.join(`
`)},RO=e=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(e[0].type!==`float32`&&e[0].type!==`float64`)throw Error(`input should be float tensor`)}}),Lg,Rg,zO,zg=N(()=>{Xi(),Lg=(e,t,n)=>{zO(t);let r=n.blocksize,i=r*r,a=n.mode===`DCR`?[0,3,4,1,5,2]:[0,1,4,2,5,3],o=n.mode===`DCR`?[t[0].dims[0],r,r,t[0].dims[1]/i,t[0].dims[2],t[0].dims[3]]:[t[0].dims[0],t[0].dims[1]/i,r,r,t[0].dims[2],t[0].dims[3]],s=e.reshapeUnpacked(t[0],o),c={perm:a,cacheKey:`${a}`},[l]=Br(e,[s],c),u=[t[0].dims[0],t[0].dims[1]/i,t[0].dims[2]*r,t[0].dims[3]*r];return[e.reshapeUnpacked(l,u)]},Rg=e=>{let t=e.attributes.getInt(`blocksize`);if(t<1)throw Error(`blocksize must be >= 1, but got : ${t} for DepthToSpace`);let n=e.attributes.getString(`mode`,`DCR`);if(n!==`DCR`&&n!==`CRD`)throw Error(`unrecognized mode: ${n} for DepthToSpace`);return{mode:n,blocksize:t}},zO=e=>{if(e.length!==1)throw Error(`DepthToSpace expect 1 inputs, but got ${e.length}`);if(e[0].type===`string`||e[0].dims.length!==4)throw TypeError(`DepthToSpace input should be a 4-D numeric tensor`)}}),Mg,Bg,MO,Fg=N(()=>{ze(),Mg=(e,t,n)=>{MO(t,n);let r=ne.flattenShape(t[0].dims,n);return[e.reshapeUnpacked(t[0],r)]},Bg=e=>e.attributes.getInt(`axis`,1),MO=(e,t)=>{if(!e||e.length!==1)throw Error(`Flatten requires 1 input.`);let n=e[0].dims.length;if(n===0)throw Error(`scalar tensor is not supported.`);if(t<-n||t>n)throw Error(`Invalid axis`);if(e[0].type===`string`)throw Error(`string tensor is not supported.`)}}),mr,Ro=N(()=>{mr=[`float32`,`float64`,`int32`,`int16`,`int8`,`uint16`,`uint32`,`uint8`]}),Vg,Gg,BO,FO,VO,GO,Ug=N(()=>{dt(),Ro(),ze(),Ae(),Vg=(e,t,n)=>(GO(t,n.axis),[e.run(VO(e,t,n),t)]),Gg=e=>_e({axis:e.attributes.getInt(`axis`,0)}),BO={name:`Gather`,inputNames:[`A`,`B`],inputTypes:[0,0]},FO=(e,t,n,r)=>{let i=n[0].dims.slice(),a=n[1].dims.slice(),o=Array(i.length+a.length-1);r=ne.normalizeAxis(r,i.length);let s=[];for(let e=0;e<o.length;e++)e<r?(o[e]=i[e],s.push(`inputIdx[${e}] = outputIdx[${e}];`)):e<r+a.length?(o[e]=a[e-r],s.push(`indexDataIdx[${e-r}] = outputIdx[${e}];`)):(o[e]=i[e-a.length+1],s.push(`inputIdx[${e-a.length+1}] = outputIdx[${e}];`));let c=`
      float process(int outputIdx[${o.length||1}]) {
        int inputIdx[${i.length}];
        int indexDataIdx[${a.length||1}];
        indexDataIdx[0] = 0;
        ${s.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${r}] = idx < 0 ? idx + ${i[r]} : idx;
        return _A(inputIdx);
      }`;return{...t,output:{dims:o,type:n[0].type,textureType:0},shaderSource:c}},VO=(e,t,n)=>{let r={...BO,cacheHint:n.cacheKey};return{...r,get:()=>FO(e,r,t,n.axis)}},GO=(e,t)=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`);let n=e[0].dims.length;if(n<1)throw Error(`Invalid input shape.`);if(t<-n||t>n-1)throw Error(`Invalid axis.`);if(mr.indexOf(e[0].type)===-1||e[1].type!==`int32`&&e[1].type!==`int16`)throw Error(`Invaid input type.`)}}),Bl,Wg,Hg,qg,UO,WO,HO,jg=N(()=>{dt(),ze(),Ae(),Bl=(e,t,n)=>(HO(t,n),[e.run(UO(t,n),t)]),Wg=(e,t)=>{let n=e.attributes.getInt(`transA`,0)!==0,r=e.attributes.getInt(`transB`,0)!==0,i=e.attributes.getFloat(`alpha`,1),a=e.attributes.getFloat(`beta`,1);return _e({transA:n,transB:r,alpha:i,beta:a,isOptionalC:t})},Hg=e=>Wg(e,!1),qg=e=>Wg(e,!0),UO=(e,t)=>{let n={name:`Gemm`,inputNames:e.length===3?[`A`,`B`,`C`]:[`A`,`B`],inputTypes:e.length===3?[0,0,0]:[0,0],key:t.cacheKey};return{...n,get:()=>WO(n,e,t)}},WO=(e,t,n)=>{let r=t[0].dims.slice(),i=t[1].dims.slice(),[a,o]=Mi.getShapeOfGemmResult(r,n.transA,i,n.transB,t.length===3?t[2].dims:void 0),s=[a,o];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=r[r.length-1],l=``;n.transA&&(c=r[0]),n.transA&&n.transB?l=`value += _A_T(a) * _B_T(b);`:n.transA&&!n.transB?l=`value += _A_T(a) * _B(b);`:!n.transA&&n.transB?l=`value += _A(a) * _B_T(b);`:!n.transA&&!n.transB&&(l=`value += _A(a) * _B(b);`);let u=s.length,d=t.length===3?`int c[${t[2].dims.length}];`:``,f=t.length===3?`bcastIndices_C(indices, c);`:``,p=t.length===3?`value += beta * _C(c);`:``,m=`
      float process(int indices[${u}]) {
          int a[${u}];
          int b[${u}];
          ${d}

          copyVec(indices, a);
          copyVec(indices, b);
          ${f}

          float value = 0.0;
          for (int k=0; k<${c}; ++k) {
              a[${u-1}] = k;
              b[${u-2}] = k;
              ${l}
          }

          value = value * alpha;
          ${p}
          return value;
      }`;return{...e,output:{dims:s,type:t[0].type,textureType:0},variables:[{name:`alpha`,type:`float`,data:n.alpha},{name:`beta`,type:`float`,data:n.beta}],shaderSource:m}},HO=(e,t)=>{if(!e)throw Error(`Input is missing`);if(t.isOptionalC&&(e.length<2||e.length>3))throw Error(`Invaid input shape.`);if(!t.isOptionalC&&e.length!==3)throw Error(`Gemm requires 3 inputs`);if(e.length===3&&e[2].dims.length!==1&&e[2].dims.length!==2)throw Error(`Invalid input shape of C`);if(e[0].type!==`float32`&&e[0].type!==`float64`||e[1].type!==`float32`&&e[1].type!==`float64`||e.length===3&&e[2].type!==`float32`&&e[2].type!==`float64`)throw Error(`Invalid input type.`);if(e[0].type!==e[1].type||e.length===3&&e[0].type!==e[2].type)throw Error(`Input types are mismatched`)}}),Kg,Xg,qO,jO,KO,XO,ZO,Zg=N(()=>{dt(),Ae(),Kg=(e,t,n)=>(ZO(t),[e.run(KO(e,t,n),t)]),Xg=e=>{let t=e.attributes.getFloat(`scale`),n=e.attributes.getFloats(`bias`);return _e({scale:t,bias:n})},qO={name:`ImageScaler`,inputNames:[`X`],inputTypes:[0]},jO=(e,t,n,r)=>{let i=n[0].dims.slice(),a=i.length,o=`
      ${XO(r.bias.length)}
      float process(int indices[${a}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return{...t,output:{dims:i,type:n[0].type,textureType:0},variables:[{name:`bias`,type:`float`,arrayLength:r.bias.length,data:r.bias},{name:`scale`,type:`float`,data:r.scale}],shaderSource:o}},KO=(e,t,n)=>{let r={...qO,cacheHint:n.cacheKey};return{...r,get:()=>jO(e,r,t,n)}},XO=e=>{let t=[`float getBias(float bias[${e}], int channel) {`];for(let n=0;n<e;++n)n===0?t.push(`	if (channel == ${n}) { return bias[${n}]; }`):n===e-1?t.push(`	else { return bias[${n}]; }`):t.push(`	else if (channel == ${n}) { return bias[${n}]; }`);return t.push(`	}`),t.join(`
`)},ZO=e=>{if(!e||e.length!==1)throw Error(`ImageScaler requires 1 input.`);if(e[0].dims.length!==4)throw Error(`Invalid input shape.`);if(e[0].type!==`float32`&&e[0].type!==`float64`)throw Error(`Invalid input type.`)}}),Yg,Qg,Jg,JO,YO,QO,eP,tP,nP,eb=N(()=>{Je(),Ae(),Yg=(e,t,n)=>{nP(t);let r=e.run(YO(t[0]),t);return[e.run(tP(e,t[0],n,r.dims),[t[0],r,t[1],t[2]])]},Qg=e=>e.attributes.getFloat(`epsilon`,1e-5),Jg={name:`InstanceNormalization_MeanAndVariance`,inputNames:[`X`],inputTypes:[0]},JO=(e,t)=>{let n=t.dims.slice(),r=n[1],i=n[2]*n[3],a=[n[0],r],o=`
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${n[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${i});
        temp = 0.0;
        for(int a2=0; a2<${n[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${i});

        return v;
      }`;return{...e,output:{dims:a,type:t.type,textureType:4},shaderSource:o}},YO=e=>({...Jg,get:()=>JO(Jg,e)}),QO={name:`InstanceNormalization_ComputeOutput`,inputNames:[`X`,`MeanAndVariance`,`Scale`,`B`],inputTypes:[0,4,0,0]},eP=(e,t,n,r,i)=>{let a=se(e.session.backend.glContext.version),[o,s]=e.calculateTextureWidthAndHeight(i,4),[c,l]=[o/4,s],u=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${c}, ${l});
        return ${a.texture2D}(MeanAndVariance, coords);
      }

      float process(int[4] indices) {
        int mv[2];
        mv[0] = indices[0];
        mv[1] = indices[1];
        vec4 mean_and_variance = get_MeanAndVariance(mv);
        float mean = mean_and_variance.r;
        float variance = mean_and_variance.g;

        int sb[1];
        sb[0] = indices[1];
        float scale = _Scale(sb);
        float b = _B(sb);

        return scale * (_X(indices) - mean) / sqrt(variance + epsilon) + b;
      }`;return{...t,output:{dims:n.dims,type:n.type,textureType:0},variables:[{name:`epsilon`,type:`float`,data:r}],shaderSource:u}},tP=(e,t,n,r)=>{let i={...QO,cacheHint:`${n}`};return{...i,get:()=>eP(e,i,t,n,r)}},nP=e=>{if(!e||e.length!==3)throw Error(`InstanceNormalization requires 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dims.length<3||n.dims.length!==1||r.dims.length!==1)throw Error(`Invalid input shape.`);if(n.dims[0]!==t.dims[1]||r.dims[0]!==t.dims[1])throw Error(`Input shapes are mismatched.`);if(t.type!==`float32`&&t.type!==`float64`||n.type!==`float32`&&n.type!==`float64`||r.type!==`float32`&&r.type!==`float64`)throw Error(`Invalid input type.`);if(e[0].dims.length!==4)throw Error(`Only support 4-D input shape.`)}});function rP(e,t){let n=e[0].dims[1],r=e[0].dims.length,i=-Math.floor((t.size-1)/2),a=Math.ceil((t.size-1)/2),o=`float(${t.alpha}) / float(${t.size})`,s=`
    float process(int indices[${r}]) {
        int c = indices[1];
        float x = _X(indices);
        float square_sum = 0.0;

        for (int i = ${i}; i <= ${a}; i++) {
          int idx = c + i;
          if (c >= 0 && c < ${n}) {
            indices[1] = idx;
            float j = _X(indices);
            square_sum += j * j;
          }
        }
        return x / pow(${`float(${t.bias})`} + ${o} * square_sum, ${`float(${t.beta})`});
    }`;return{...rb,cacheHint:t.cacheKey,output:{dims:e[0].dims,type:e[0].type,textureType:0},shaderSource:s}}function oP(e,t){return{...rb,cacheHint:t.cacheKey,get:()=>rP(e,t)}}var tb,nb,rb,iP,ob=N(()=>{dt(),Ae(),tb=(e,t,n)=>(iP(t),[e.run(oP(t,n),t)]),nb=e=>{let t=e.attributes.getFloat(`alpha`,1e-4),n=e.attributes.getFloat(`beta`,.75),r=e.attributes.getFloat(`bias`,1),i=e.attributes.getInt(`size`);return _e({alpha:t,beta:n,bias:r,size:i})},rb={name:`LRN`,inputNames:[`X`],inputTypes:[0]},iP=e=>{if(!e||e.length!==1)throw Error(`LRN requires 1 input.`);if(e[0].dims.length!==4)throw Error(`currently only support LRN for input with "NCHW" format`);if(e[0].type!==`float32`)throw Error(`input should be float type`)}}),aP,Fl,ib,ab,sb,sP,uP,lP,cP,dP,pP,fP,hP,ub=N(()=>{dt(),ze(),Je(),Ae(),aP={name:`Pad`,inputNames:[`A`],inputTypes:[0]},Fl=(e,t,n)=>(lP(t),[e.run({...aP,cacheHint:n.cacheKey,get:()=>uP(e,t[0],n)},t)]),ib=e=>{let t=e.attributes.getString(`mode`,`constant`),n=e.attributes.getFloat(`value`,0),r=e.attributes.getInts(`pads`);return _e({mode:t,value:n,pads:r})},ab=(e,t,n)=>{cP(t);let r=sP(e,t,n);return Fl(e,[t[0]],r)},sb=e=>e.attributes.getString(`mode`,`constant`),sP=(e,t,n)=>{if(!e.session.isInitializer(t[1].dataId)||t.length>=3&&!e.session.isInitializer(t[2].dataId))throw Error(`dynamic pad attributes are not allowed`);let r=Array.from(t[1].integerData),i=t.length>=3?t[2].floatData[0]:0;return _e({mode:n,pads:r,value:i})},uP=(e,t,n)=>{let r=ne.padShape(t.dims.slice(),n.pads),i=r.length,a=`
      ${dP(e,t,n)}
      float process(int[${i}] indices) {
          return padA(indices);
      }`;return{name:`Pad`,inputNames:[`A`],inputTypes:[0],output:{dims:r,type:t.type,textureType:0},shaderSource:a}},lP=e=>{if(!e||e.length!==1)throw Error(`Pad requires 1 input`);if(e[0].type!==`float32`&&e[0].type!==`float64`)throw Error(`Invalid input type.`)},cP=e=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Pad requires 2 or 3 inputs`);if(e[1].type!==`int32`||e.length>=3&&e[2].type===`string`)throw Error(`Invalid input type.`)},dP=(e,t,n)=>{let r=se(e.session.backend.glContext.version),[i,a]=e.calculateTextureWidthAndHeight(t.dims,0),o=ne.computeStrides(t.dims);switch(n.mode){case`constant`:return pP(r,t.dims,o,i,a,n.pads,n.value);case`reflect`:return fP(r,t.dims,o,i,a,n.pads);case`edge`:return hP(r,t.dims,o,i,a,n.pads);default:throw Error(`Invalid mode`)}},pP=(e,t,n,r,i,a,o)=>{let s=t.length,c=``;for(let e=s-1;e>=0;--e)c+=`
        k = m[${e}] - ${a[e]};
        if (k < 0)  return constant;
        if (k >= ${t[e]}) return constant;
        offset += k * ${n[e]};
        `;return`
      float padA(int m[${s}]) {
        const float constant = float(${o});
        int offset = 0;
        int k = 0;
        ${c}
        vec2 coords = offsetToCoords(offset, ${r}, ${i});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},fP=(e,t,n,r,i,a)=>{let o=t.length,s=``;for(let e=o-1;e>=0;--e)s+=`
        k = m[${e}] - ${a[e]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2*(t[e]-1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${t[e]}) { k = _2n_1 - k; }
        }
        offset += k * ${n[e]};
        `;return`
      float padA(int m[${o}]) {
        int offset = 0;
        int k = 0;
        ${s}
        vec2 coords = offsetToCoords(offset, ${r}, ${i});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},hP=(e,t,n,r,i,a)=>{let o=t.length,s=``;for(let e=o-1;e>=0;--e)s+=`
        k = m[${e}] - ${a[e]};
        if (k < 0)  k = 0;
        if (k >= ${t[e]}) k = ${t[e]-1};
        offset += k * ${n[e]};
      `;return`
      float padA(int m[${o}]) {
        int offset = 0;
        int k = 0;
        ${s}
        vec2 coords = offsetToCoords(offset, ${r}, ${i});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `}}),cb,db,pb,fb,hb,mb,gb,bb,yb,mP,lb,_b,Ji,wb,Zi,gP,vb=N(()=>{dt(),ze(),Ae(),cb=(e,t,n)=>{Ji(t);let r={name:`AveragePool`,inputNames:[`X`],inputTypes:[0],cacheHint:n.cacheKey};return[e.run({...r,get:()=>pb(t,r,!1,n)},t)]},db=e=>{let t=e.attributes.getString(`auto_pad`,`NOTSET`),n=e.attributes.getInt(`ceil_mode`,0),r=e.attributes.getInt(`count_include_pad`,0)!==0,i=e.attributes.getInts(`kernel_shape`),a=e.attributes.getInts(`strides`,[]),o=e.attributes.getInts(`pads`,[]);if(n!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);return _e({autoPad:t,ceilMode:n,countIncludePad:r,kernelShape:i,strides:a,pads:o})},pb=(e,t,n,r)=>{let[i,a]=yb(e,r,n),o=ne.size(i.kernelShape),s=`value += _X(x);`,c=``;i.countIncludePad?c+=`value /= float(${o});`:c+=`value /= float(${o} - pad);`;let l=`
        ${wb(e[0].dims,i,`value += _X(x);`,c,`0.0`)}
      `;return{...t,output:{dims:a,type:e[0].type,textureType:0},shaderSource:l}},fb=(e,t,n)=>{Ji(t);let r={name:`GlobalAveragePool`,inputNames:[`X`],inputTypes:[0],cacheHint:`${n.countIncludePad}`};return[e.run({...r,get:()=>pb(t,r,!0,n)},t)]},hb=e=>{let t=e.attributes.getInt(`count_include_pad`,0)!==0;return _e({autoPad:``,ceilMode:0,countIncludePad:t,kernelShape:[],strides:[],pads:[]})},mb=(e,t,n)=>{Ji(t);let r={name:`MaxPool`,inputNames:[`X`],inputTypes:[0],cacheHint:n.cacheKey};return[e.run({...r,get:()=>bb(t,r,!1,n)},t)]},gb=e=>{let t=e.attributes.getString(`auto_pad`,`NOTSET`),n=e.attributes.getInt(`ceil_mode`,0),r=e.attributes.getInts(`kernel_shape`),i=e.attributes.getInts(`strides`,[]),a=e.attributes.getInts(`pads`,[]),o=e.attributes.getInt(`storage_order`,0),s=e.attributes.getInts(`dilations`,[]);if(o!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(n!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);return _e({autoPad:t,ceilMode:n,countIncludePad:!1,kernelShape:r,strides:i,pads:a,storageOrder:o,dilations:s})},bb=(e,t,n,r)=>{let[i,a]=yb(e,r,n),o=`
      ${wb(e[0].dims,i,`
      value = max(_X(x), value);
    `,``,`-1e5`)}
    `;return{...t,output:{dims:a,type:e[0].type,textureType:0},shaderSource:o}},yb=(e,t,n)=>{let r=e[0].dims.slice(),i=Object.hasOwnProperty.call(t,`dilations`),a=t.kernelShape.slice(),o=t.strides.slice(),s=i?t.dilations.slice():[],c=t.pads.slice();kr.adjustPoolAttributes(n,r,a,o,s,c);let l=kr.computePoolOutputShape(n,r,o,s,a,c,t.autoPad),u=Object.assign({},t);return i?Object.assign(u,{kernelShape:a,strides:o,pads:c,dilations:s,cacheKey:t.cacheKey}):Object.assign(u,{kernelShape:a,strides:o,pads:c,cacheKey:t.cacheKey}),[u,l]},mP={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:``},lb={name:`GlobalMaxPool`,inputNames:[`X`],inputTypes:[0]},_b=(e,t)=>(Ji(t),[e.run({...lb,get:()=>bb(t,lb,!0,mP)},t)]),Ji=e=>{if(!e||e.length!==1)throw Error(`Pool ops requires 1 input.`);if(e[0].type!==`float32`&&e[0].type!==`float64`)throw Error(`Invalid input type.`)},wb=(e,t,n,r,i)=>{let a=e.length;if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],s=t.strides[t.strides.length-1],c=t.pads[t.pads.length/2-1],l=t.pads[t.pads.length-1],u=e[a-1],d=``,f=``,p=``;if(d=c+l===0?`
          for (int i = 0; i < ${o}; i++) {
            x[${a} - 1] = indices[${a} - 1] * ${s} - ${c} + i;
            ${n}
          }`:`
          for (int i = 0; i < ${o}; i++) {
            x[${a} - 1] = indices[${a} - 1] * ${s} - ${c} + i;
            if (x[${a} - 1] < 0 || x[${a} - 1] >= ${u}) {
              pad++;
              continue;
            }
            ${n}
          }`,t.kernelShape.length===2){let n=t.kernelShape[t.kernelShape.length-2],r=t.strides[t.strides.length-2],i=t.pads[t.pads.length/2-2],s=t.pads[t.pads.length-2],c=e[a-2];f=i+s===0?`
            for (int j = 0; j < ${n}; j++) {
              x[${a} - 2] = indices[${a} - 2] * ${r} - ${i} + j;
            `:`
            for (int j = 0; j < ${n}; j++) {
              x[${a} - 2] = indices[${a} - 2] * ${r} - ${i} + j;
              if (x[${a} - 2] < 0 || x[${a} - 2] >= ${c}) {
                pad+= ${o};
                continue;
              }
          `,p=`
          }
        `}return`
        float process(int indices[${a}]) {
          int x[${a}];
          copyVec(indices, x);

          float value = ${i};
          int pad = 0;
          ${f}
          ${d}
          ${p}
          ${r}
          return value;
        }
      `}else{let o=ne.size(t.kernelShape),s=ne.computeStrides(t.kernelShape),c=s.length,l=t.pads.length,u=gP(c),d=Zi(e,`inputDims`),f=Zi(t.pads,`pads`),p=Zi(s,`kernelStrides`),m=Zi(t.strides,`strides`),h=t.pads.reduce((e,t)=>e+t),g=``;return g=h?`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${n}
          }`:`
          }
          ${n}
        `,`
        ${u}
        float process(int indices[${a}]) {
          int x[${a}];
          copyVec(indices, x);
          int offset[${c}];
          int pads[${l}];
          int inputDims[${a}];
          int kernelStrides[${c}];
          int strides[${c}];
          ${f}
          ${d}
          ${m}
          ${p}

          float value = ${i};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${o}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${a} - ${c}; j < ${a}; j++) {
              x[j] = indices[j] * strides[j - ${a} + ${c}]
                + offset[j - ${a} + ${c}] - pads[j - 2];
              ${g}
          }
          ${r}

          return value;
        }
      `}},Zi=(e,t)=>{let n=``;for(let r=0;r<e.length;r++)n+=`
      ${t}[${r}] = ${e[r]};
    `;return n},gP=e=>`
  void offsetToIndices(int offset, int[${e}] strides, out int[${e}] indices) {
    if (${e} == 0) {
      return;
    }
    for (int i = 0; i < ${e} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${e} - 1] = offset;
  }`}),Fr,gr,bP,yP,xb,Tb,Ib,Sb,$b,Ab,Ob,Pb=N(()=>{dt(),Ro(),ze(),Ae(),Fr=(e,t,n,r,i)=>{yP(t);let a={name:r,inputNames:[`A`],inputTypes:[0]};return[e.run({...a,cacheHint:n.cacheKey,get:()=>bP(e,t,n,r,i,a)},t)]},gr=e=>{let t=e.attributes.getInts(`axes`,[]),n=e.attributes.getInt(`keepdims`,1)===1;return _e({axes:t,keepDims:n})},bP=(e,t,n,r,i,a)=>{let o=[],s=t[0].dims.length||1,c=[],l=ne.normalizeAxes(n.axes,t[0].dims.length),u=i(t,l),d=u[1];for(let e=0;e<t[0].dims.length;e++)l.indexOf(e)>=0||l.length===0?(n.keepDims&&o.push(1),d=`
          for(int j${e} = 0; j${e} < ${t[0].dims[e]}; j${e}++) {
            inputIdx[${e}] = j${e};
            ${d}
          }`):(c.push(`inputIdx[${e}] = outputIdx[${o.length}];`),o.push(t[0].dims[e]));let f=`
      float process(int outputIdx[${o.length||1}]) {
        float value;                 // final result
        int inputIdx[${s}];      // addressing input data
        ${c.join(`
`)}
        ${u[0]}       // init ops for reduce max/min
        ${d}
        ${u[2]}       // final computation for reduce mean
        return value;
      }`;return{...a,output:{dims:o,type:t[0].type,textureType:0},shaderSource:f}},yP=e=>{if(!e||e.length!==1)throw Error(`Reduce op requires 1 input.`);if(mr.indexOf(e[0].type)===-1)throw Error(`Invalid input type.`)},xb=(e,t,n)=>Fr(e,t,n,`ReduceSum`,()=>[`value = 0.0;`,`value += _A(inputIdx);`,``]),Tb=(e,t,n)=>Fr(e,t,n,`ReduceMean`,(e,t)=>{let n=1;for(let r=0;r<e[0].dims.length;r++)(t.indexOf(r)>=0||t.length===0)&&(n*=e[0].dims[r]);return[`value = 0.0;`,`value += _A(inputIdx);`,`value /= ${n}.;`]}),Ib=(e,t,n)=>Fr(e,t,n,`ReduceMax`,(e,t)=>{let n=[];for(let r=0;r<e[0].dims.length;r++)(t.indexOf(r)>=0||t.length===0)&&n.push(`inputIdx[${r}] = 0;`);return[`${n.join(`
`)}
value = _A(inputIdx);`,`value = max(value, _A(inputIdx));`,``]}),Sb=(e,t,n)=>Fr(e,t,n,`ReduceMin`,(e,t)=>{let n=[];for(let r=0;r<e[0].dims.length;r++)(t.indexOf(r)>=0||t.length===0)&&n.push(`inputIdx[${r}] = 0;`);return[`${n.join(`
`)}
value = _A(inputIdx);`,`value = min(value, _A(inputIdx));`,``]}),$b=(e,t,n)=>Fr(e,t,n,`ReduceProd`,()=>[`value = 1.0;`,`value *= _A(inputIdx);`,``]),Ab=(e,t,n)=>Fr(e,t,n,`ReduceLogSum`,()=>[`value = 0.0;`,`value += _A(inputIdx);`,`value = log(value);`]),Ob=(e,t,n)=>Fr(e,t,n,`ReduceLogSumSquare`,()=>[`float t; value = 0.0;`,`t = _A(inputIdx); value += t * t;`,``])}),Eb,Cb=N(()=>{ze(),Eb=(e,t)=>{let n=ne.calculateReshapedDims(t[0].dims,t[1].integerData);return e.session.pack?[e.reshapePacked(t[0],n)]:[e.reshapeUnpacked(t[0],n)]}}),Db,Vl,kb,Nb,zo,_P,Gl,Yi,Ul=N(()=>{dt(),Je(),Ae(),Db={name:`Upsample`,inputNames:[`X`],inputTypes:[0]},Vl=(e,t,n)=>(Gl(t,n),[e.run({...Db,cacheHint:n.cacheKey,get:()=>_P(e,t,n)},t)]),kb=e=>zo(e,7),Nb=e=>zo(e,9),zo=(e,t)=>{let n=t>=10,r=e.attributes.getString(`mode`,`nearest`);if(r!==`nearest`&&r!==`linear`&&(t<11||r!==`cubic`))throw Error(`unrecognized mode: ${r}`);let i=[];t<9&&(i=e.attributes.getFloats(`scales`),Yi(i,r,n));let a=e.attributes.getFloat(`extrapolation_value`,0),o=t>10?e.attributes.getString(`coordinate_transformation_mode`,`half_pixel`):`asymmetric`;if([`asymmetric`,`pytorch_half_pixel`,`tf_half_pixel_for_nn`,`align_corners`,`tf_crop_and_resize`,`half_pixel`].indexOf(o)===-1)throw Error(`coordinate_transform_mode '${o}' is not supported`);let s=o===`tf_crop_and_resize`,c=s,l=r===`nearest`&&t>=11?e.attributes.getString(`nearest_mode`,`round_prefer_floor`):``;if([`round_prefer_floor`,`round_prefer_ceil`,`floor`,`ceil`,``].indexOf(l)===-1)throw Error(`nearest_mode '${l}' is not supported`);let u=e.attributes.getFloat(`cubic_coeff_a`,-.75),d=e.attributes.getInt(`exclude_outside`,0)!==0;if(d&&r!==`cubic`)throw Error(`exclude_outside can be set to 1 only when mode is CUBIC.`);let f=t<11?!0:r===`nearest`&&o===`asymmetric`&&l===`floor`,p=0,m=0,h=0;return t>10?e.inputs.length>2?(p=1,m=2,h=3):(m=1,h=2):t===9&&(m=1),_e({opset:t,isResize:n,mode:r,scales:i,extrapolationValue:a,coordinateTransformMode:o,useExtrapolation:c,needRoiInput:s,nearestMode:l,cubicCoefficientA:u,excludeOutside:d,useNearest2xOptimization:f,roiInputIdx:p,scalesInputIdx:m,sizesInputIdx:h})},_P=(e,t,n)=>{let r=se(e.session.backend.glContext.version),[i,a]=e.calculateTextureWidthAndHeight(t[0].dims,0),o=t[0].dims.map((e,t)=>Math.floor(e*n.scales[t])),[s,c]=e.calculateTextureWidthAndHeight(o,0),l=o.length,u=Array(l),d=Array(l),f=`
      int output_pitches[${l}];
      int input_pitches[${l}];
      `;for(let e=l-1;e>=0;e--)u[e]=e===l-1?1:u[e+1]*o[e+1],d[e]=e===l-1?1:d[e+1]*t[0].dims[e+1],f+=`
        output_pitches[${e}] = ${u[e]};
        input_pitches[${e}] = ${d[e]};
        `;let p=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${i}, ${a});
        float value = getColorAsFloat(${r.texture2D}(X, coords));
        return value;
      }
      `,m=n.mode===`nearest`?`
    ${p}
    float process(int indices[${l}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${s}, ${c});

      ${f}

      int d, m;
      for (int dim = 0; dim < ${l}; ++dim) {
        d = output_index / output_pitches[dim];
        m = output_index - d * output_pitches[dim];
        output_index = m;

        if (scales[dim] != 1 && d > 0) {
          int d2 = d / scales[dim];
          m = d - d2 * scales[dim];
          d = d2;
        }
        input_index += input_pitches[dim] * d;
      }

      return getInputFloat(input_index);
    }`:l===4?`
    ${p}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${s}, ${c});

      ${f}

      int m;
      int index_of_dim0, index_of_dim1, index_of_dim2, index_of_dim3;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m / output_pitches[1];
      m = m - index_of_dim1 * output_pitches[1];
      index_of_dim2 = m / output_pitches[2];
      m = m - index_of_dim2 * output_pitches[2];
      index_of_dim3 = m;

      int index_of_input_dim2, index_of_input_dim3, x_offset, y_offset;
      index_of_input_dim2 = index_of_dim2 / scales[2];
      y_offset = index_of_dim2 - index_of_input_dim2 * scales[2];
      index_of_input_dim3 = index_of_dim3 / scales[3];
      x_offset = index_of_dim3 - index_of_input_dim3 * scales[3];

      input_index = index_of_dim0 * input_pitches[0] +
            index_of_dim1 * input_pitches[1] +
            index_of_input_dim2 * input_pitches[2] +
            index_of_input_dim3;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim2 = false;
      if (index_of_input_dim2 == (${t[0].dims[2]} - 1)) {
        // It's the end in dimension 2
        x01 = x00;
        end_of_dim2 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[2]);
      }

      if (index_of_input_dim3 == (input_pitches[2] - 1)) {
        // It's the end in dimension 3
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim2 ? x10 : getInputFloat(input_index + input_pitches[2] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[2]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[2]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[3]);
    }`:`
    ${p}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${s}, ${c});

      ${f}

      int m;
      int index_of_dim0, index_of_dim1;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m;

      int index_of_input_dim0, index_of_input_dim1, x_offset, y_offset;
      index_of_input_dim0 = index_of_dim0 / scales[0];
      y_offset = index_of_dim0 - index_of_input_dim0 * scales[0];
      index_of_input_dim1 = index_of_dim1 / scales[1];
      x_offset = index_of_dim1 - index_of_input_dim1 * scales[1];

      input_index = index_of_input_dim0 * input_pitches[0] + index_of_input_dim1;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim0 = false;
      if (index_of_input_dim0 == (${t[0].dims[0]} - 1)) {
        // It's the end in dimension 0
        x01 = x00;
        end_of_dim0 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[0]);
      }

      if (index_of_input_dim1 == (input_pitches[0] - 1)) {
        // It's the end in dimension 1
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim0 ? x10 : getInputFloat(input_index + input_pitches[0] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[0]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[0]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[1]);
    }`;return{...Db,output:{dims:o,type:t[0].type,textureType:0},shaderSource:m,variables:[{name:`scales`,type:`int`,arrayLength:n.scales.length,data:n.scales.map(e=>Math.ceil(e))}]}},Gl=(e,t)=>{if(!e||t.opset<9&&e.length!==1||t.opset>=9&&t.opset<11&&e.length!==2||t.opset>=11&&e.length<2)throw Error(`invalid inputs.`);if(t.scales.length>0&&e[0].dims.length!==t.scales.length)throw Error(`Invalid input shape.`);if(e[0].type===`string`)throw Error(`Invalid input tensor types.`)},Yi=(e,t,n)=>{if(n){for(let t of e)if(t<=0)throw Error(`Scale value should be greater than 0.`)}else for(let t of e)if(t<1)throw Error(`Scale value should be greater than or equal to 1.`);if((t===`linear`||t===`cubic`)&&e.length!==2&&(e.length!==4||e[0]!==1||e[1]!==1))throw Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${n?`Resize`:`Upsample`} opeartor.`)}}),Wl,Hl,Lb,Rb,wP,vP,xP,TP,zb=N(()=>{Je(),Ae(),zn(),zr(),Ul(),Wl={name:`Resize`,inputNames:[`A`],inputTypes:[2]},Hl=(e,t,n)=>(Gl(t,n),[e.run({...Wl,cacheHint:n.cacheKey,get:()=>wP(e,t,n)},t)]),Lb=e=>zo(e,10),Rb=e=>zo(e,11),wP=(e,t,n)=>{let r=se(e.session.backend.glContext.version),[i,a]=vP(t,n);if(i.every(e=>e===1)&&n.coordinateTransformMode!==`tf_crop_and_resize`)return{...Wl,output:{dims:a,type:t[0].type,textureType:2},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${r.texture2D}(X, TexCoords);
                    ${r.output} = v;
                }`};let o=a.length;if(o<2)throw Error(`output dimension should be at least 2, but got ${o}`);let s=a[o-2],c=a[o-1],l=t[0].dims;if(o!==l.length)throw Error(`output dimension should match input ${l.length}, but got ${o}`);let u=l[o-2],d=l[o-1],f=i[o-2],p=i[o-1],m=``;if(n.mode!==`linear`)throw Error(`resize (packed) does not support mode: '${n.mode}'`);switch(n.coordinateTransformMode){case`asymmetric`:m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return vec4(coords) / scaleWHWH;
                    }
                `;break;case`half_pixel`:m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;
                    }
                `;break;case`pytorch_half_pixel`:m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${c}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${s}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${c}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${s}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case`align_corners`:m=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${c}.0 - 1.0, ${s}.0 - 1.0, ${c}.0 - 1.0,
                            ${s}.0 - 1.0);
                        vec4 original = vec4(${d}.0 - 1.0, ${u}.0 - 1.0, ${d}.0 - 1.0,
                            ${u}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw Error(`resize (packed) does not support coordinateTransformMode:                                 '${n.coordinateTransformMode}'`)}let h=yt(o),g=`
            const vec2 inputWH = vec2(${u}.0, ${d}.0);
            const vec4 scaleWHWH = vec4(float(${f}), float(${p}), float(${f}), float(${p}));
            ${Mn()}
            ${m}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${h} rc = getOutputCoords();

                int batch = rc[0];
                int depth = rc[1];

                // retrieve the 4 coordinates that is used in the 4 packed output values.
                ivec4 coords = ivec4(rc.wz, rc.w + 1, rc.z + 1);

                // calculate the source index in fraction
                vec4 sourceFrac = getSourceFracIndex(coords);

                // get the lower and upper bound of the 4 values that will be packed into one texel.
                ivec4 x00 = ivec4(max(sourceFrac.xy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xy)));
                ivec4 x01 = ivec4(max(sourceFrac.xw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xw)));
                ivec4 x10 = ivec4(max(sourceFrac.zy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zy)));
                ivec4 x11 = ivec4(max(sourceFrac.zw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zw)));

                bool hasNextRow = rc.w < ${s-1};
                bool hasNextCol = rc.z < ${c-1};

                // pack x00, x01, x10, x11's top-left corner into one vec4 structure
                vec4 topLeft = vec4(
                    getAValue(batch, depth, x00.x, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.y) : 0.0);

                // pack x00, x01, x10, x11's top-right corner into one vec4 structure
                vec4 topRight = vec4(
                    getAValue(batch, depth, x00.x, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.w) : 0.0);

                // pack x00, x01, x10, x11's bottom-left corner into one vec4 structure
                vec4 bottomLeft = vec4(
                    getAValue(batch, depth, x00.z, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.y) : 0.0);

                // pack x00, x01, x10, x11's bottom-right corner into one vec4 structure
                vec4 bottomRight = vec4(
                    getAValue(batch, depth, x00.z, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.w) : 0.0);

                // calculate the interpolation fraction on u and v direction
                vec4 frac = vec4(sourceFrac) - floor(sourceFrac);
                vec4 clampFrac = clamp(frac, vec4(0.0), vec4(1.0));

                vec4 top = mix(topLeft, topRight, clampFrac.ywyw);
                vec4 bottom = mix(bottomLeft, bottomRight, clampFrac.ywyw);
                vec4 newValue = mix(top, bottom, clampFrac.xxzz);

                ${r.output} = vec4(newValue);
            }
        `;return{...Wl,output:{dims:a,type:t[0].type,textureType:2},hasMain:!0,shaderSource:g}},vP=(e,t)=>{let n=e[0].dims,r=t.scales,i;if(r.length===0){let a=e[t.scalesInputIdx];if(a&&a.size!==0){if(e[t.sizesInputIdx])throw Error(`Only one of scales or sizes must be provided as input.`);r=xP(a,t.mode,t.isResize)}else{let a=e[t.sizesInputIdx];if(!a||a.size===0)throw Error(`Either scales or sizes MUST be provided as input.`);i=Array.from(a.integerData),r=TP(i,n,t.mode,t.isResize)}}else if(e[t.sizesInputIdx])throw Error(`Only one of scales or sizes must be provided as input.`);let a=i||n.map((e,t)=>Math.floor(e*r[t]));return[r,a]},xP=(e,t,n)=>{let r=Array.from(e.floatData);return Yi(r,t,n),r},TP=(e,t,n,r)=>{let i=t.length,a=Array(i);for(let n=0,r=i;n<r;n++)if(t[n]===0){if(e[n]!==0)throw Error(`Input dim is zero but required output dim is non-zero.`);a[n]=1}else a[n]=e[n]/t[n];return Yi(a,n,r),a}}),Mb,IP,Bb=N(()=>{Rr(),Mb=(e,t)=>(IP(t),[new ot([t[0].dims.length],`int32`,void 0,void 0,new Int32Array(t[0].dims))]),IP=e=>{if(!e||e.length!==1)throw Error(`Shape requires 1 input.`)}}),ql,Fb,Vb,Gb,SP,Ub,$P,AP,Wb=N(()=>{dt(),Ro(),ze(),Ae(),ql={name:`Slice`,inputNames:[`A`],inputTypes:[0]},Fb=(e,t,n)=>(SP(t),[e.run({...ql,cacheHint:n.cacheKey,get:()=>Gb(e,t[0],n)},t)]),Vb=e=>{let t=e.attributes.getInts(`starts`),n=e.attributes.getInts(`ends`),r=e.attributes.getInts(`axes`,[]);return _e({starts:t,ends:n,axes:r})},Gb=(e,t,n)=>{let r=n.axes.length===0?t.dims.slice(0).map((e,t)=>t):n.axes,i=ne.normalizeAxes(r,t.dims.length),a=n.starts.map((e,n)=>e>t.dims[i[n]]-1?t.dims[i[n]]:ne.normalizeAxis(e,t.dims[i[n]])),o=n.ends.map((e,n)=>e>t.dims[i[n]]-1?t.dims[i[n]]:ne.normalizeAxis(e,t.dims[i[n]])),s=t.dims.slice(),c=[];for(let e=0;e<i.length;e++)s[i[e]]=o[e]-a[e],a[e]>0&&c.push(`outputIdx[${i[e]}] += ${a[e]};`);let l=`
      float process(int outputIdx[${s.length}]) {
        ${c.join(`
      `)}
        return _A(outputIdx);
      }`;return{...ql,output:{dims:s,type:t.type,textureType:0},shaderSource:l}},SP=e=>{if(!e||e.length!==1)throw Error(`Slice requires 1 input.`);if(mr.indexOf(e[0].type)===-1)throw Error(`Invalid input type.`)},Ub=(e,t)=>{AP(t);let n=$P(e,t);return[e.run({...ql,cacheHint:n.cacheKey,get:()=>Gb(e,t[0],n)},[t[0]])]},$P=(e,t)=>{if(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)||t.length>=4&&!e.session.isInitializer(t[3].dataId)||t.length>=5&&!e.session.isInitializer(t[4].dataId))throw Error(`dynamic slice attributes are not allowed`);if(t.length>=5&&t[4].integerData.some(e=>e!==1))throw Error(`currently non-1 steps is not supported for Slice`);let n=Array.from(t[1].integerData),r=Array.from(t[2].integerData),i=t.length>=4?Array.from(t[3].integerData):[];return{starts:n,ends:r,axes:i,cacheKey:`${i};${n};${r}`}},AP=e=>{if(!e||e.length<3||e.length>5)throw Error(`Invalid input number.`);if(e[1].type!==`int32`||e[1].dims.length!==1||e[2].type!==`int32`||e[2].dims.length!==1||e.length>=4&&(e[3].type!==`int32`||e[3].dims.length!==1)||e.length>=5&&(e[4].type!==`int32`||e[4].dims.length!==1))throw Error(`Invalid input type.`)}}),Hb,qb,jb,Kb,Xb,Zb,Jb,Yb,OP,PP,EP,Qb,ey=N(()=>{dt(),ze(),Je(),Ae(),Xi(),Hb={name:`SoftmaxComputeMax`,inputNames:[`A`],inputTypes:[0]},qb={name:`SoftmaxComputeScale`,inputNames:[`A`,`Max`],inputTypes:[0,0]},jb={name:`SoftMax`,inputNames:[`A`,`Max`,`Norm`],inputTypes:[0,0,0]},Kb=(e,t,n)=>{Qb(t);let r=t[0].dims.slice(),i=ne.normalizeAxis(n.axis,r.length),a=ne.sizeToDimension(r,i),o=ne.sizeFromDimension(r,i);return Yb(e,t,n,a,o)},Xb=e=>_e({axis:e.attributes.getInt(`axis`,1)}),Zb=e=>_e({axis:e.attributes.getInt(`axis`,-1)}),Jb=(e,t,n)=>{Qb(t);let r=t[0].dims.slice(),i=ne.normalizeAxis(n.axis,r.length),a=r.length,o=i!==a-1,s=[],c=[],l=[],u;o&&(c=Array.from({length:a}).map((e,t)=>t),c[i]=a-1,c[a-1]=i,c.map(e=>s.push(r[e])),u=_e({perm:c}),l=Br(e,t,u));let d=o?ne.sizeToDimension(s,a-1):ne.sizeToDimension(r,a-1),f=o?ne.sizeFromDimension(s,a-1):ne.sizeFromDimension(r,a-1),p=Yb(e,o?l:t,n,d,f);return o?Br(e,p,u):p},Yb=(e,t,n,r,i)=>{let a=OP(e,t[0],r,i,[r]),o=e.run({...Hb,cacheHint:n.cacheKey,get:()=>a},t),s=PP(e,t[0],r,i,a.output.dims,[r]),c=e.run({...qb,cacheHint:n.cacheKey,get:()=>s},[t[0],o]),l=EP(e,t[0],r,i,a.output.dims,s.output.dims);return[e.run({...jb,cacheHint:n.cacheKey,get:()=>l},[t[0],o,c])]},OP=(e,t,n,r,i)=>{let[a,o]=e.calculateTextureWidthAndHeight(t.dims,0),s=i.length;if(n<1||r<1)throw Error(`Logical row count N and feature count D must be greater than or equal to 1`);if(i.length!==1)throw Error(`Dimensionality of the output should be 1`);if(i[0]!==n)throw Error(`Shape of the output should be equal to logical row count`);let c=se(e.session.backend.glContext.version),l=`
      float process(int[${s}] indices) {
        int logical_row_start_offset = indices[0] * ${r};

        float max = getColorAsFloat(${c.texture2D}(A, offsetToCoords(logical_row_start_offset, ${a},
        ${o} )));
        for(int i=1; i<${r}; ++i)
        {
          float current = getColorAsFloat(${c.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${a}, ${o})));
          if(current > max)
          max = current;
        }

        return max;
      }`;return{...Hb,output:{dims:i,type:t.type,textureType:0},shaderSource:l}},PP=(e,t,n,r,i,a)=>{let[o,s]=e.calculateTextureWidthAndHeight(t.dims,0),c=a.length;if(n<1||r<1)throw Error(`Logical row count N and feature count D must be greater than or equal to 1`);if(a.length!==1)throw Error(`Dimensionality of the output should be 1`);if(a[0]!==n)throw Error(`Shape of the output should be equal to logical row count`);if(i.length!==1)throw Error(`Dimensionality of the intermediate results should be 1`);if(i[0]!==n)throw Error(`Shape of the intermediate results should be equal to logical row count`);let l=`
      float process(int[${c}] indices) {
        int logical_row_start_offset = indices[0] * ${r};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${r}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${se(e.session.backend.glContext.version).texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${o}, ${s}))) - max);
        }

        return norm_factor;
      }`;return{...qb,output:{dims:a,type:t.type,textureType:0},shaderSource:l}},EP=(e,t,n,r,i,a)=>{let[o,s]=e.calculateTextureWidthAndHeight(t.dims,0),c=t.dims.length;if(n<1||r<1)throw Error(`Logical row count N and feature count D must be greater than or equal to 1`);if(i.length!==1||a.length!==1)throw Error(`Dimensionality of the intermediate results should be 1`);if(i[0]!==n||a[0]!==n)throw Error(`Shape of the intermediate results should be equal to logical row count`);let l=`
      float process(int[${c}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${o}, ${s});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${r};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;return{...jb,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:l}},Qb=e=>{if(!e||e.length!==1)throw Error(`Softmax requires 1 input.`);if(e[0].type!==`float32`&&e[0].type!==`float64`)throw Error(`Invalid input type`)}}),ty,ny,ry,CP,DP,kP,oy=N(()=>{dt(),ze(),Ae(),ty={name:`Split`,inputNames:[`A`],inputTypes:[0]},ny=(e,t,n)=>{kP(t);let r=ne.normalizeAxis(n.axis,t[0].dims.length),i=CP(e,t,r,n),a=[];for(let o=0;o<i;++o)a.push(e.run({...ty,cacheHint:`${n.cacheKey};${o}`,get:()=>DP(e,t[0],n,r,o)},t));return a},ry=e=>{let t=e.attributes.getInt(`axis`,0),n=e.attributes.getInts(`split`,[]),r=e.outputs.length;return _e({axis:t,split:n,numOutputs:r})},CP=(e,t,n,r)=>{let[,i]=Eo.splitShape(t[0].dims,n,r.split,r.numOutputs);return i.length},DP=(e,t,n,r,i)=>{let[a,o]=Eo.splitShape(t.dims,r,n.split,n.numOutputs),s=o[i],c=a[i],l=`
      float process(int indices[${c.length}]) {
        indices[${r}] += ${s};
        return _A(indices);
      }
    `;return{...ty,cacheHint:`${n.cacheKey}:${i}`,output:{dims:c,type:t.type,textureType:0},shaderSource:l}},kP=e=>{if(!e||e.length!==1)throw Error(`Split requires one input.`);if(e[0].type!==`int8`&&e[0].type!==`uint8`&&e[0].type!==`int16`&&e[0].type!==`uint16`&&e[0].type!==`int32`&&e[0].type!==`uint32`&&e[0].type!==`float32`&&e[0].type!==`float64`&&e[0].type!==`bool`)throw Error(`Invalid input type.`)}}),jl,iy,ay,NP,LP,sy=N(()=>{ze(),jl=(e,t,n)=>{NP(t);let r=ne.squeezeShape(t[0].dims,n);return[e.reshapeUnpacked(t[0],r)]},iy=(e,t)=>(LP(t),jl(e,[t[0]],Array.from(t[1].integerData))),ay=e=>e.attributes.getInts(`axes`),NP=e=>{if(!e||e.length!==1)throw Error(`Squeeze requires 1 input.`);if(e[0].type===`string`)throw Error(`invalid input tensor types.`)},LP=e=>{if(!e||e.length!==2)throw Error(`Squeeze requires 2 inputs.`);if(e[1].type!==`int32`)throw Error(`Invalid input type.`)}}),uy,RP,zP,ly=N(()=>{Je(),Ae(),uy=(e,t)=>{zP(t);let n={name:`Sum`,inputNames:t.map((e,t)=>`X${t}`),inputTypes:Array(t.length).fill(0)};return[e.run({...n,get:()=>RP(e,t,n)},t)]},RP=(e,t,n)=>{let r=se(e.session.backend.glContext.version),i=t[0].dims.slice(),a=`
      void main() {
        vec4 result = ${t.map((e,t)=>`${r.texture2D}(X${t},TexCoords)`).join(` + `)};
        ${r.output} = result;
      }
    `;return{...n,output:{dims:i,type:t[0].type,textureType:0},hasMain:!0,shaderSource:a}},zP=e=>{if(!e||e.length===0)throw Error(`Sum requires inputs.`);let t=e[0].dims.length;for(let n=1;n<e.length;n++){if(t!==e[n].dims.length)throw Error(`Input shapes are mismatched.`);for(let r=0;r<t;r++)if(e[0].dims[r]!==e[n].dims[r])throw Error(`Input shapes are not matched.`)}if(e[0].type!==`float32`&&e[0].type!==`float64`)throw Error(`Invalid input type.`);for(let t=1;t<e.length;t++)if(e[0].type!==e[t].type)throw Error(`Input types are not matched.`)}}),cy,MP,BP,dy=N(()=>{Ro(),Ae(),cy=(e,t)=>{BP(t);let n={name:`Tile`,inputNames:[`A`],inputTypes:[0]};return[e.run({...n,get:()=>MP(e,t,n)},t)]},MP=(e,t,n)=>{let r=t[0].dims.slice(),i=Array(r.length),a=[];for(let e=0;e<r.length;e++)i[e]=r[e]*t[1].numberData[e],a.push(`inputIdx[${e}] = int(mod(float(outputIdx[${e}]), ${r[e]}.));`);let o=i.length,s=`
      float process(int outputIdx[${o}]) {
        int inputIdx[${o}];
        ${a.join(`
`)}
        return _A(inputIdx);
      }
    `;return{...n,output:{dims:i,type:t[0].type,textureType:0},shaderSource:s}},BP=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 input.`);if(e[1].dims.length!==1)throw Error(`The second input shape must 1 dimension.`);if(e[1].dims[0]!==e[0].dims.length)throw Error(`Invalid input shape.`);if(mr.indexOf(e[0].type)===-1)throw Error(`Invalid input type.`);if(e[1].type!==`int32`&&e[1].type!==`int16`)throw Error(`Invalid repeat type.`)}}),Kl,py,fy,FP,VP,hy=N(()=>{ze(),Kl=(e,t,n)=>{FP(t);let r=ne.unsqueezeShape(t[0].dims,n);return[e.reshapeUnpacked(t[0],r)]},py=(e,t)=>(VP(t),Kl(e,[t[0]],Array.from(t[1].integerData))),fy=e=>e.attributes.getInts(`axes`),FP=e=>{if(!e||e.length!==1)throw Error(`Unsqueeze requires 1 input.`);if(e[0].type===`string`)throw Error(`invalid input tensor types.`)},VP=e=>{if(!e||e.length!==2)throw Error(`Unsqueeze requires 2 inputs.`);if(e[1].type!==`int32`)throw Error(`Invalid input type.`)}}),my,gy=N(()=>{$m(),Bm(),Gm(),Km(),qi(),Cg(),zg(),Fg(),Ug(),jg(),Zg(),eb(),ob(),ji(),ub(),vb(),Pb(),Cb(),zb(),Bb(),Wb(),ey(),oy(),sy(),ly(),dy(),Xi(),Cl(),hy(),Ul(),my=[[`Abs`,``,`6+`,Xm],[`Acos`,``,`7+`,Zm],[`Add`,``,`7+`,Am],[`And`,``,`7+`,Om],[`Asin`,``,`7+`,Jm],[`Atan`,``,`7+`,Ym],[`AveragePool`,``,`7+`,cb,db],[`BatchNormalization`,``,`7+`,Im,Sm],[`Cast`,``,`6+`,Fm,Vm],[`Ceil`,``,`6+`,tg],[`Clip`,``,`6-10`,Pl,Qm],[`Clip`,``,`11+`,eg],[`Concat`,``,`4+`,Hm,jm],[`Conv`,``,`1+`,zl,Ml],[`ConvTranspose`,``,`1+`,Pg,Eg],[`Cos`,``,`7+`,ng],[`Div`,``,`7+`,Pm],[`Dropout`,``,`7+`,El],[`DepthToSpace`,``,`1+`,Lg,Rg],[`Equal`,``,`7+`,Em],[`Elu`,``,`6+`,rg,og],[`Exp`,``,`6+`,ig],[`Flatten`,``,`1+`,Mg,Bg],[`Floor`,``,`6+`,ag],[`FusedConv`,`com.microsoft`,`1+`,zl,Ml],[`Gather`,``,`1+`,Vg,Gg],[`Gemm`,``,`7-10`,Bl,Hg],[`Gemm`,``,`11+`,Bl,qg],[`GlobalAveragePool`,``,`1+`,fb,hb],[`GlobalMaxPool`,``,`1+`,_b],[`Greater`,``,`7+`,Cm],[`Identity`,``,`1+`,El],[`ImageScaler`,``,`1+`,Kg,Xg],[`InstanceNormalization`,``,`6+`,Yg,Qg],[`LeakyRelu`,``,`6+`,sg,ug],[`Less`,``,`7+`,Dm],[`LRN`,``,`1+`,tb,nb],[`Log`,``,`6+`,lg],[`MatMul`,``,`1+`,xg,Tg],[`MaxPool`,``,`1+`,mb,gb],[`Mul`,``,`7+`,km],[`Neg`,``,`6+`,cg],[`Not`,``,`1+`,dg],[`Or`,``,`7+`,Nm],[`Pad`,``,`2-10`,Fl,ib],[`Pad`,``,`11+`,ab,sb],[`Pow`,``,`7+`,Lm],[`PRelu`,``,`7+`,Rm],[`ReduceLogSum`,``,`1+`,Ab,gr],[`ReduceMax`,``,`1+`,Ib,gr],[`ReduceMean`,``,`1+`,Tb,gr],[`ReduceMin`,``,`1+`,Sb,gr],[`ReduceProd`,``,`1+`,$b,gr],[`ReduceSum`,``,`1-12`,xb,gr],[`ReduceSumSquare`,``,`1+`,Ob,gr],[`Relu`,``,`6+`,pg],[`Reshape`,``,`5+`,Eb],[`Resize`,``,`10`,Hl,Lb],[`Resize`,``,`11+`,Hl,Rb],[`Shape`,``,`1+`,Mb],[`Sigmoid`,``,`6+`,fg],[`Sin`,``,`7+`,hg],[`Slice`,``,`10+`,Ub],[`Slice`,``,`1-9`,Fb,Vb],[`Softmax`,``,`1-12`,Kb,Xb],[`Softmax`,``,`13+`,Jb,Zb],[`Split`,``,`2-12`,ny,ry],[`Sqrt`,``,`6+`,mg],[`Squeeze`,``,`1-12`,jl,ay],[`Squeeze`,``,`13+`,iy],[`Sub`,``,`7+`,zm],[`Sum`,``,`6+`,uy],[`Tan`,``,`7+`,gg],[`Tanh`,``,`6+`,bg],[`Tile`,``,`6+`,cy],[`Transpose`,``,`1+`,Br,kg],[`Upsample`,``,`7-8`,Vl,kb],[`Upsample`,``,`9`,Vl,Nb],[`Unsqueeze`,``,`1-12`,Kl,fy],[`Unsqueeze`,``,`13+`,py],[`Xor`,``,`7+`,Mm]]});function yy(e){let t={},n;for(;(n=by.exec(e))!==null;){let e=n[3].split(`,`).map(e=>{let t=e.trim().split(` `);return t&&t.length===2?{type:t[0],name:t[1]}:null}).filter(e=>e!==null);t[n[2]]={params:e,body:n[4]}}for(let r in t){let i=GP.replace(`__FUNC__`,r),a=new RegExp(i,`gm`);for(;(n=a.exec(e))!==null;){let i=n[1],a=n[2],o=n[3].split(`,`),s=i?`${i} ${a};`:``,c=t[r].body,l=``;t[r].params.forEach((e,t)=>{e&&(l+=`${e.type} ${e.name} = ${o[t]};
`)}),c=`${l}
 ${c}`,c=c.replace(`return`,`${a} = `);let u=`
      ${s}
      {
        ${c}
      }
      `;e=e.replace(n[0],u)}}return e=e.replace(by,``),e}var by,GP,_y=N(()=>{by=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm,GP=`(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;`});function ao(e,t){let n=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||i?null:UP(t,e).sort(),o=0;for(let t=0;t<e.length;++t){if(a!=null){if(a[o]===t&&e[t]!==1)throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(a[o]==null||a[o]>t)&&e[t]===1&&(n.push(e[t]),r.push(t)),a[o]<=t&&o++}e[t]!==1&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function UP(e,t){let n=t.length;return e=e==null?t.map((e,t)=>t):[].concat(e),eo(e.every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),eo(e.every(WP),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function WP(e){return e%1==0}function HP(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function wy(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}var Qi,Xl=N(()=>{Dt(),ze(),Qi=class{constructor(e){this.maxTextureSize=e}computeTextureWH(e,t){let n=this.computeTexture(e,t);return t&&t.isPacked&&(n[0]/=2,n[1]/=2),t&&t.reverseWH?[n[1],n[0]]:n}computeTexture(e,t){let n=t&&t.isPacked;if(e.length===0)return n?[2,2]:[1,1];let r=this.maxTextureSize;if(t&&t.breakAxis!==void 0){let n=t.breakAxis>=e.length?1:e.slice(t.breakAxis).reduce((e,t)=>e*t),i=t.breakAxis<=0?1:e.slice(0,t.breakAxis).reduce((e,t)=>e*t);if(n>r||i>r)Be.verbose(`TextureLayout`,`Given width/height preferences were unattainable: shape:${e}, breakAxis:${t.breakAxis}`);else return[n,i]}let i=e.slice(0);n&&(r*=2,i=i.map((e,t)=>t>=i.length-2?i[t]%2==0?i[t]:i[t]+1:i[t]),i.length===1&&(i=[2,i[0]])),i.length!==2&&(i=ao(i).newShape);let a=HP(i);return i.length<=1&&a<=r?[1,a]:i.length===2&&i[0]<=r&&i[1]<=r?i:i.length===3&&i[0]*i[1]<=r&&i[2]<=r?[i[0]*i[1],i[2]]:i.length===3&&i[0]<=r&&i[1]*i[2]<=r?[i[0],i[1]*i[2]]:i.length===4&&i[0]*i[1]*i[2]<=r&&i[3]<=r?[i[0]*i[1]*i[2],i[3]]:i.length===4&&i[0]<=r&&i[1]*i[2]*i[3]<=r?[i[0],i[1]*i[2]*i[3]]:n?wy(a/4).map(e=>e*2):wy(a)}}}),ea,vy=N(()=>{ze(),Yn(),Je(),Xl(),zn(),ea=class extends Mt{constructor(e){super(e)}getFunctions(){return{...this.offsetToCoords(),...this.coordsToOffset(),...this.toVec(),...this.valueFrom(),...this.getCommonUtilFuncs(),...this.getInputsSamplingSnippets(),...this.getOutputSamplingSnippet()}}getCustomTypes(){return{}}offsetToCoords(){return{offsetToCoords:new X(`
      vec2 offsetToCoords(int offset, int width, int height) {
        int t = offset / width;
        int s = offset - t*width;
        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);
        return coords;
      }
      `)}}coordsToOffset(){return{coordsToOffset:new X(`
      int coordsToOffset(vec2 coords, int width, int height) {
        float s = coords.s * float(width);
        float t = coords.t * float(height);
        int offset = int(t) * width + int(s);
        return offset;
      }
      `)}}getOutputSamplingSnippet(){let e=this.context.outputTextureLayout;return e.isPacked?this.getPackedOutputSamplingSnippet(e):this.getUnpackedOutputSamplingSnippet(e)}getPackedOutputSamplingSnippet(e){let t=e.unpackedShape,n=[e.width,e.height],r={},i=`getOutputCoords`;switch(t.length){case 0:r[i]=this.getOutputScalarCoords();break;case 1:r[i]=this.getOutputPacked1DCoords(t,n);break;case 2:r[i]=this.getOutputPacked2DCoords(t,n);break;case 3:r[i]=this.getOutputPacked3DCoords(t,n);break;default:r[i]=this.getOutputPackedNDCoords(t,n)}let a=`
      void setOutput(vec4 val) {
        ${se(this.context.glContext.version).output} = val;
      }
    `,o=`floatTextureSetRGBA`;return r.floatTextureSetRGBA=new X(a),r}getUnpackedOutputSamplingSnippet(e){let t=e.unpackedShape,n=[e.width,e.height],r={},i=`getOutputCoords`;switch(t.length){case 0:r[i]=this.getOutputScalarCoords();break;case 1:r[i]=this.getOutputUnpacked1DCoords(t,n);break;case 2:r[i]=this.getOutputUnpacked2DCoords(t,n);break;case 3:r[i]=this.getOutputUnpacked3DCoords(t,n);break;case 4:r[i]=this.getOutputUnpacked4DCoords(t,n);break;case 5:r[i]=this.getOutputUnpacked5DCoords(t,n);break;case 6:r[i]=this.getOutputUnpacked6DCoords(t,n);break;default:throw Error(`Unsupported output dimensionality: ${t.length}`)}let a=`
        void setOutput(float val) {
          ${se(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `,o=`floatTextureSetR`;return r.floatTextureSetR=new X(a),r}getOutputScalarCoords(){return new X(`
      int getOutputCoords() {
        return 0;
      }
    `)}getOutputPacked1DCoords(e,t){let n=t,r=``;return n[0]===1?(r=`
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${n[1]}.0);
          }
        `,new X(r)):n[1]===1?(r=`
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${n[0]}.0);
          }
        `,new X(r)):(r=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${n[0]}, ${n[1]}));
          return 2 * (resTexRC.y * ${n[0]} + resTexRC.x);
        }
      `,new X(r))}getOutputPacked2DCoords(e,t){let n=``;if(Dr.arraysEqual(e,t))return n=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${t[0]}, ${t[1]}));
        }
      `,new X(n);let r=t,i=Math.ceil(e[1]/2);return n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));

          int index = resTexRC.y * ${r[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${i}) * 2;
          int c = 2 * (index / ${i});

          return ivec2(r, c);
        }
      `,new X(n)}getOutputPacked3DCoords(e,t){let n=[t[0],t[1]],r=Math.ceil(e[2]/2),i=r*Math.ceil(e[1]/2),a=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${n[0]}, ${n[1]}));
          int index = resTexRC.y * ${n[0]} + resTexRC.x;

          int b = index / ${i};
          index -= b * ${i};

          // reverse r and c order for packed texture
          int r = imod(index, ${r}) * 2;
          int c = 2 * (index / ${r});

          return ivec3(b, r, c);
        }
      `;return new X(a)}getOutputPackedNDCoords(e,t){let n=[t[0],t[1]],r=Math.ceil(e[e.length-1]/2),i=r*Math.ceil(e[e.length-2]/2),a=i,o=``,s=`b, r, c`;for(let t=2;t<e.length-1;t++)a*=e[e.length-t-1],o=`
      int b${t} = index / ${a};
      index -= b${t} * ${a};
    `+o,s=`b${t}, `+s;let c=`
      ivec${e.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${n[0]}, ${n[1]}));
        int index = resTexRC.y * ${n[0]} + resTexRC.x;

        ${o}

        int b = index / ${i};
        index -= b * ${i};

        // reverse r and c order for packed texture
        int r = imod(index, ${r}) * 2;
        int c = 2 * (index / ${r});

        return ivec${e.length}(${s});
      }
    `;return new X(c)}getOutputUnpacked1DCoords(e,t){let n=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          return resTexRC.y * ${t[0]} + resTexRC.x;
        }
      `;return new X(n)}getOutputUnpacked2DCoords(e,t){let n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          int r = index / ${e[1]};
          int c = index - r * ${e[1]};
          return ivec2(r, c);
        }
      `;return new X(n)}getOutputUnpacked3DCoords(e,t){let n=``,r=e.length,i=null;r<2&&(i=[]),i=Array(r-1),i[r-2]=e[r-1];for(let t=r-3;t>=0;--t)i[t]=i[t+1]*e[t+1];let a=[`r`,`c`,`d`],o=i.map((e,t)=>`${`int ${a[t]} = index / ${e}`}; ${t===i.length-1?`int ${a[t+1]} = index - ${a[t]} * ${e}`:`index -= ${a[t]} * ${e}`};`).join(``);return n=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${o}
          return ivec3(r, c, d);
        }
      `,new X(n)}getOutputUnpacked4DCoords(e,t){let n=``,r=e.length,i=null;r<2&&(i=[]),i=Array(r-1),i[r-2]=e[r-1];for(let t=r-3;t>=0;--t)i[t]=i[t+1]*e[t+1];let a=[`r`,`c`,`d`,`d2`],o=i.map((e,t)=>`${`int ${a[t]} = index / ${e}`}; ${t===i.length-1?`int ${a[t+1]} = index - ${a[t]} * ${e}`:`index -= ${a[t]} * ${e}`};`).join(``);return n=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${o}
          return ivec4(r, c, d, d2);
        }
      `,new X(n)}getOutputUnpacked5DCoords(e,t){let n=``,r=e.length,i=null;r<2&&(i=[]),i=Array(r-1),i[r-2]=e[r-1];for(let t=r-3;t>=0;--t)i[t]=i[t+1]*e[t+1];let a=[`r`,`c`,`d`,`d2`,`d3`],o=i.map((e,t)=>`${`int ${a[t]} = index / ${e}`}; ${t===i.length-1?`int ${a[t+1]} = index - ${a[t]} * ${e}`:`index -= ${a[t]} * ${e}`};`).join(``);return n=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${o}
          return ivec5(r, c, d, d2, d3);
        }
      `,new X(n)}getOutputUnpacked6DCoords(e,t){let n=``,r=e.length,i=null;r<2&&(i=[]),i=Array(r-1),i[r-2]=e[r-1];for(let t=r-3;t>=0;--t)i[t]=i[t+1]*e[t+1];let a=[`r`,`c`,`d`,`d2`,`d3`,`d4`],o=i.map((e,t)=>`${`int ${a[t]} = index / ${e}`}; ${t===i.length-1?`int ${a[t+1]} = index - ${a[t]} * ${e}`:`index -= ${a[t]} * ${e}`};`).join(``);return n=`
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${t[0]}, ${t[1]}));
         int index = resTexRC.y * ${t[0]} + resTexRC.x;
         ${o}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `,new X(n)}getCommonUtilFuncs(){let e={},t=`uvFromFlat`;e[t]=new X(`
    vec2 uvFromFlat(int texNumR, int texNumC, int index) {
      int texC = index / texNumR;
      int texR = index - texC * texNumR;
      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to
      //       v.
      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);
    }
    `),t=`packedUVfrom1D`,e[t]=new X(`
      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
        int texelIndex = index / 2;
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t=`packedUVfrom2D`,e[t]=new X(`
      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {
        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t=`packedUVfrom3D`,e[t]=new X(`
      vec2 packedUVfrom3D(int texNumR, int texNumC,
          int texelsInBatch, int texelsInLogicalRow, int b,
          int row, int col) {
        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = index / texNumC;
        int texC = index - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t=`sampleTexture`;let n=se(this.context.glContext.version);return e[t]=new X(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${n.texture2D}(textureSampler, uv).r;
        }`),e}getInputsSamplingSnippets(){let e={},t=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((n,r)=>{let i=this.context.inputTextureLayouts[r],a=Bi(n);i.isPacked?e[a]=this.getPackedSamplerFromInput(a,n,i):e[a]=this.getUnpackedSamplerFromInput(a,n,i);let o=um(n);i.unpackedShape.length<=t.unpackedShape.length&&(i.isPacked?e[o]=this.getPackedSamplerAtOutputCoords(o,i,t,n):e[o]=this.getUnpackedSamplerAtOutputCoords(o,i,t,n))}),e}getPackedSamplerAtOutputCoords(e,t,n,r){let i=t.unpackedShape,a=n.unpackedShape,o=Bi(r),s=i.length,c=a.length,l=bt.getBroadcastDims(i,a),u=yt(c),d=c-s,f,p=Xt();f=s===0?``:c<2&&l.length>=1?`coords = 0;`:l.map(e=>`coords.${p[e+d]} = 0;`).join(`
`);let m=``;m=c<2&&s>0?`coords`:i.map((e,t)=>`coords.${p[t+d]}`).join(`, `);let h=`return outputValue;`,g=ne.size(i)===1,_=ne.size(a)===1;if(s===1&&!g&&!_)h=`
        return vec4(outputValue.xy, outputValue.xy);
      `;else if(g&&!_)h=c===1?`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:`
          return vec4(outputValue.x);
        `;else if(l.length){let e=s-2,t=s-1;l.indexOf(e)>-1&&l.indexOf(t)>-1?h=`return vec4(outputValue.x);`:l.indexOf(e)>-1?h=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:l.indexOf(t)>-1&&(h=`return vec4(outputValue.xx, outputValue.zz);`)}let v=`
      vec4 ${e}() {
        ${u} coords = getOutputCoords();
        ${`
        int lastDim = coords.${p[c-1]};
        coords.${p[c-1]} = coords.${p[c-2]};
        coords.${p[c-2]} = lastDim;
      `}
        ${f}
        vec4 outputValue = ${o}(${m});
        ${h}
      }
    `;return new X(v,[`coordinates.getOutputCoords`])}getUnpackedSamplerAtOutputCoords(e,t,n,r){let i=[n.width,n.height],a=[t.width,t.height],o=t.unpackedShape.length,s=n.unpackedShape.length,c=t.unpackedShape,l=n.unpackedShape,u=Bi(r);if(o===s&&Dr.arraysEqual(a,i)){let t=`
          float ${e}() {
            return sampleTexture(${r}, TexCoords);
          }
        `;return new X(t,[`coordinates.sampleTexture`])}let d=yt(s),f=bt.getBroadcastDims(c,l),p=s-o,m,h=Xt();m=o===0?``:s<2&&f.length>=1?`coords = 0;`:f.map(e=>`coords.${h[e+p]} = 0;`).join(`
`);let g=``;g=s<2&&o>0?`coords`:t.unpackedShape.map((e,t)=>`coords.${h[t+p]}`).join(`, `);let _=`
        float ${e}() {
          ${d} coords = getOutputCoords();
          ${m}
          return ${u}(${g});
        }
      `;return new X(_,[`coordinates.getOutputCoords`])}getPackedSamplerFromInput(e,t,n){switch(n.unpackedShape.length){case 0:return this.getPackedSamplerScalar(e,t);case 1:return this.getPackedSampler1D(e,t,n);case 2:return this.getPackedSampler2D(e,t,n);case 3:return this.getPackedSampler3D(e,t,n);default:return this.getPackedSamplerND(e,t,n)}}getUnpackedSamplerFromInput(e,t,n){let r=n.unpackedShape;switch(r.length){case 0:return this.getUnpackedSamplerScalar(e,t,n);case 1:return this.getUnpackedSampler1D(e,t,n);case 2:return this.getUnpackedSampler2D(e,t,n);case 3:return this.getUnpackedSampler3D(e,t,n);case 4:return this.getUnpackedSampler4D(e,t,n);case 5:return this.getUnpackedSampler5D(e,t,n);case 6:return this.getUnpackedSampler6D(e,t,n);default:throw Error(`Unsupported dimension ${r.length}-D`)}}getPackedSamplerScalar(e,t){let n=`
          vec4 ${e}() {
            return ${se(this.context.glContext.version).texture2D}(${t}, halfCR);
          }
        `;return new X(n)}getPackedSampler1D(e,t,n){let r=[n.width,n.height],i=[r[1],r[0]],a=se(this.context.glContext.version),o=`vec4 ${e}(int index) {
      vec2 uv = packedUVfrom1D(
      ${i[0]}, ${i[1]}, index);
      return ${a.texture2D}(${t}, uv);
    }`;return new X(o,[`coordinates.packedUVfrom1D`])}getPackedSampler2D(e,t,n){let r=n.unpackedShape,i=[n.width,n.height],a=se(this.context.glContext.version),o=i[0],s=i[1];if(i!=null&&Dr.arraysEqual(r,i)){let n=`vec4 ${e}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);
        return ${a.texture2D}(${t}, uv);
      }`;return new X(n)}let c=i,l=Math.ceil(r[1]/2),u=`vec4 ${e}(int row, int col) {
      vec2 uv = packedUVfrom2D(${c[1]}, ${c[0]}, ${l}, row, col);
      return ${a.texture2D}(${t}, uv);
    }`;return new X(u,[`coordinates.packedUVfrom2D`])}getPackedSampler3D(e,t,n){let r=n.unpackedShape,i=[n.width,n.height],a=[i[0],i[1]],o=se(this.context.glContext.version);if(r[0]===1){let i=r.slice(1),a=[1,2],o=to(r,i),s=[`b`,`row`,`col`],c=JSON.parse(JSON.stringify(n));c.unpackedShape=o;let l=this.getPackedSamplerFromInput(e,t,c),u=`${l.routineBody}
      vec4 ${e}(int b, int row, int col) {
        return ${e}(${no(s,a)});
      } `;return new X(u,l.dependencies)}let s=a[0],c=a[1],l=Math.ceil(r[2]/2),u=`vec4 ${e}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${s}, ${l*Math.ceil(r[1]/2)}, ${l}, b, row, col);
      return ${o.texture2D}(${t}, uv);}`;return new X(u,[`coordinates.packedUVfrom3D`])}getPackedSamplerND(e,t,n){let r=n.unpackedShape,i=r.length,a=[n.width,n.height],o=se(this.context.glContext.version),s=[a[0],a[1]],c=s[1],l=s[0],u=Math.ceil(r[i-1]/2),d=u*Math.ceil(r[i-2]/2),f=`int b, int row, int col`,p=`b * ${d} + (row / 2) * ${u} + (col / 2)`;for(let e=2;e<i-1;e++)f=`int b${e}, `+f,d*=r[i-e-1],p=`b${e} * ${d} + `+p;let m=`vec4 ${e}(${f}) {
      int index = ${p};
      int texR = index / ${l};
      int texC = index - texR * ${l};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${l}, ${c});
      return ${o.texture2D}(${t}, uv);
    }`;return new X(m)}getUnpackedSamplerScalar(e,t,n){let[r,i]=[n.width,n.height];if(r===1&&i===1){let n=`
          float ${e}() {
            return sampleTexture(${t}, halfCR);
          }
        `;return new X(n,[`coordinates.sampleTexture`])}let a=`
        float ${e}() {
          int offset_${t} = coordsToOffset(TexCoords, ${r}, ${i});
          vec2 uv = uvFromFlat(${r}, ${i}, offset_${t});
          return sampleTexture(${t}, uv);
        }
      `;return new X(a,[`coordinates.uvFromFlat`,`coordinates.sampleTexture`,`coordinates.coordsToOffset`])}getUnpackedSampler1D(e,t,n){let r=n.width,i=n.height;if(i===1&&r===1){let n=`
        float ${e}(int index) {
          return sampleTexture(${t}, halfCR);
        }
      `;return new X(n,[`coordinates.sampleTexture`])}if(i===1){let n=`
          float ${e}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${r}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new X(n,[`coordinates.sampleTexture`])}if(r===1){let n=`
          float ${e}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${i}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new X(n,[`coordinates.sampleTexture`])}let a=`
        float ${e}(int index) {
          vec2 uv = uvFromFlat(${r}, ${i}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new X(a,[`coordinates.uvFromFlat`,`coordinates.sampleTexture`])}getUnpackedSampler2D(e,t,n){let r=n.unpackedShape,i=[n.height,n.width];if(i!=null&&Dr.arraysEqual(r,i)){let n=`
          float ${e}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${i[1]}.0, ${i[0]}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new X(n,[`coordinates.sampleTexture`])}let{newShape:a,keptDims:o}=ao(r),s=a;if(s.length<r.length){let i=to(r,s),a=JSON.parse(JSON.stringify(n));a.unpackedShape=i;let c=`
          ${this.getUnpackedSamplerFromInput(e,t,a).routineBody}
          float ${e}(int row, int col) {
            return ${e}(${no([`col`,`row`],o)});
          }
        `;return new X(c,[`coordinates.sampleTexture`])}let c=i[1],l=i[0];if(l===1){let n=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${c}, ${l});
            float index = dot(vec3(row, col, offset_${t}), vec3(${r[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new X(n,[`coordinates.sampleTexture`,`coordinates.coordsToOffset`])}if(c===1){let n=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${c}, ${l});
            float index = dot(vec3(row, col, offset_${t}), vec3(${r[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${l}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new X(n,[`coordinates.sampleTexture`,`coordinates.coordsToOffset`])}let u=`
        float ${e}(int row, int col) {
          int index = col * ${r[1]} + row;
          vec2 uv = uvFromFlat(${c}, ${l}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new X(u,[`coordinates.uvFromFlat`,`coordinates.sampleTexture`,`coordinates.coordsToOffset`])}getUnpackedSampler3D(e,t,n){let r=n.unpackedShape,i=r[1]*r[2],a=r[2],{newShape:o,keptDims:s}=ao(r),c=o;if(c.length<r.length){let i=to(r,c),a=[`batch`,`col`,`row`],o=JSON.parse(JSON.stringify(n));o.unpackedShape=i;let l=this.getUnpackedSamplerFromInput(e,t,o),u=s.reverse(),d=`
          ${l.routineBody}
          float ${e}(int batch, int row, int col) {
            return ${e}(${no(a,u)});
          }
        `;return new X(d,l.dependencies)}let l=`
          float ${e}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${i} + col * ${a} + row;
            vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
            return sampleTexture(${t}, uv);
          }
      `;return new X(l,[`coordinates.uvFromFlat`,`coordinates.sampleTexture`,`coordinates.coordsToOffset`])}getUnpackedSampler4D(e,t,n){let r=n.unpackedShape,i=r[3],a=r[2]*i,o=`
        float ${e}(int row, int col, int depth, int depth2) {
          int index = row * ${r[1]*a} + col * ${a} +
              depth2 * ${i} + depth;
          vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new X(o,[`coordinates.uvFromFlat`,`coordinates.sampleTexture`])}getUnpackedSampler5D(e,t,n){let r=n.unpackedShape,i=r[4],a=r[3]*i,o=r[2]*a,s=r[1]*o,{newShape:c,keptDims:l}=ao(r);if(c.length<r.length){let i=to(r,c),a=[`row`,`col`,`depth`,`depth2`,`depth3`],o=JSON.parse(JSON.stringify(n));o.unpackedShape=i;let s=`
          ${this.getUnpackedSamplerFromInput(e,t,o).routineBody}
          float ${e}(int row, int col, int depth, int depth2, int depth3) {
            return ${e}(${no(a,l)});
          }
        `;return new X(s,[`coordinates.sampleTexture`,`coordinates.uvFromFlat`])}let u=`
        float ${e}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${s} + col * ${o} + depth * ${a} +
          depth3 * ${i} + depth2;
          vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new X(u,[`coordinates.sampleTexture`,`coordinates.uvFromFlat`])}getUnpackedSampler6D(e,t,n){let r=n.unpackedShape,i=r[5],a=r[4]*i,o=r[3]*a,s=r[2]*o,c=r[1]*s,{newShape:l,keptDims:u}=ao(r);if(l.length<r.length){let i=to(r,l),a=[`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],o=JSON.parse(JSON.stringify(n));o.unpackedShape=i;let s=`
            ${this.getUnpackedSamplerFromInput(e,t,o).routineBody}
            float ${e}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${e}(${no(a,u)});
            }
          `;return new X(s,[`coordinates.sampleTexture`,`coordinates.uvFromFlat`])}let d=`
          float ${e}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${c} + col * ${s} + depth * ${o} +
            depth2 * ${a} + depth3 * ${i} + depth4;
            vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
            return sampleTexture(${t}, uv);
          }
        `;return new X(d,[`coordinates.uvFromFlat`,`coordinates.sampleTexture`,`coordinates.coordsToOffset`])}toVec(){let e=this.context.outputTextureLayout,t=e.shape.length,n=e.strides,r=e.width,i=e.height,a=[];for(let e=0;e<t-1;++e)a.push(`
        c[${e}] = offset / ${n[e]};`),a.push(`
        offset -= c[${e}] * ${n[e]};`);a.push(`
        c[${t-1}] = offset;`);let o=`
      void toVec(vec2 texCoords, out int c[${t}]) {
        int offset = coordsToOffset(texCoords, ${r}, ${i});
        ${a.join(``)}
      }
      void toVec(int offset, out int c[${t}]) {
        ${a.join(``)}
      }
    `;return{toVec:new X(o,[`coordinates.coordsToOffset`])}}valueFrom(){let e={};return this.context.programInfo.inputNames.forEach((t,n)=>{let r=this.context.inputTextureLayouts[n],i=(r.unpackedShape.length>0?r.unpackedShape:r.shape).length,a=`_${t}`;e[a]=new X(this.getValueFromSingle(t,i,r.width,r.height,!1),[`shapeUtils.indicesToOffset${a}`,`coordinates.offsetToCoords`,`fragcolor.getColorAsFloat`]),a+=`_T`,e[a]=new X(this.getValueFromSingle(t,i,r.width,r.height,!0),[`shapeUtils.indicesToOffset${a}`,`coordinates.offsetToCoords`,`fragcolor.getColorAsFloat`])}),e}getValueFromSingle(e,t,n,r,i){let a=`_${e}`;i&&(a+=`_T`);let o=se(this.context.glContext.version);return`
        float ${a}(int m[${t}]) {
          int offset = indicesToOffset${a}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${r});
          float value = getColorAsFloat(${o.texture2D}(${e}, coords));
          return value;
        }
        `}getPackedValueFrom(e,t,n,r,i){let a=`_${e}_Pack`;i&&(a+=`_T`);let o=se(this.context.glContext.version);return`
        vec4 ${a}(int m[${t}]) {
          int offset = indicesToOffset_${e}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${r});
          return ${o.texture2D}(${e}, coords);
        }
        `}}}),ta,xy=N(()=>{Yn(),ta=class e extends Mt{constructor(e){super(e)}getFunctions(){return{...this.encodeFloat32(),...this.decodeFloat32()}}getCustomTypes(){return{}}encodeFloat32(){return{encode:new X(`highp vec4 encode(highp float f) {
        return vec4(f, 0.0, 0.0, 0.0);
      }
        `)}}decodeFloat32(){return{decode:new X(`highp float decode(highp vec4 rgba) {
        return rgba.r;
      }
        `)}}encodeUint8(){let t=e.isLittleEndian()?`rgba.rgba=rgba.abgr;`:``;return{encode:new X(`
      highp vec4 encode(highp float f) {
        highp float F = abs(f);
        highp float Sign = step(0.0,-f);
        highp float Exponent = floor(log2(F));
        highp float Mantissa = (exp2(- Exponent) * F);
        Exponent = floor(log2(F) + 127.0) + floor(log2(Mantissa));
        highp vec4 rgba;
        rgba[0] = 128.0 * Sign  + floor(Exponent*exp2(-1.0));
        rgba[1] = 128.0 * mod(Exponent,2.0) + mod(floor(Mantissa*128.0),128.0);
        rgba[2] = floor(mod(floor(Mantissa*exp2(23.0 -8.0)),exp2(8.0)));
        rgba[3] = floor(exp2(23.0)*mod(Mantissa,exp2(-15.0)));
        ${t}
        rgba = rgba / 255.0; // values need to be normalized to [0,1]
        return rgba;
    }
        `)}}decodeUint8(){let t=e.isLittleEndian()?`rgba.rgba=rgba.abgr;`:``;return{decode:new X(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${t}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `)}}static isLittleEndian(){let e=new ArrayBuffer(4),t=new Uint32Array(e),n=new Uint8Array(e);if(t[0]=3735928559,n[0]===239)return!0;if(n[0]===222)return!1;throw Error(`unknown endianness`)}}}),na,Ty=N(()=>{Yn(),Je(),na=class extends Mt{constructor(e){super(e)}getFunctions(){return{...this.setFragColor(),...this.getColorAsFloat()}}getCustomTypes(){return{}}setFragColor(){let e=se(this.context.glContext.version);return{setFragColor:new X(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `,[`encoding.encode`])}}getColorAsFloat(){return{getColorAsFloat:new X(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,[`encoding.decode`])}}}}),ra,Iy=N(()=>{Yn(),ra=class e extends Mt{constructor(e){super(e)}getFunctions(){return{...this.bcastIndex(),...this.bcastMatmulIndex(),...this.offsetToIndices(),...this.indicesToOffset(),...this.incrementIndices()}}getCustomTypes(){return{}}bcastIndex(){let e=this.context.outputTextureLayout.shape.length,t={};return this.context.programInfo.inputNames.forEach((n,r)=>{let i=this.context.inputTextureLayouts[r].unpackedShape;if(i.length<=e){let r=i.length,a=e-r,o=`bcastIndices_${n}`,s=``;for(let e=0;e<r;++e)s+=`
          realIndices[${e}] = int( mod(float(bcastedIndices[${a+e}]), ${i[e]}.0) );
          `;let c=`
        void ${o} (int bcastedIndices[${e}], out int realIndices[${r}]) {
          ${s}
        }
        `;t[o]=new X(c)}}),t}bcastMatmulIndex(){let e=this.context.outputTextureLayout.shape.length,t={};return this.context.programInfo.inputNames.forEach((n,r)=>{let i=this.context.inputTextureLayouts[r].shape;if(!(i.length<2||i.length>e)){let r=i.length,a=e-r,o=`bcastMatmulIndices_${n}`,s=``;for(let e=0;e<r-2;++e)s+=`
          realIndices[${e}] = int( mod(float(bcastedIndices[${a+e}]), ${i[e]}.0) );
          `;let c=`
        void ${o}(int bcastedIndices[${e}], out int realIndices[${r}]) {
          ${s}
          realIndices[${r-1}] = bcastedIndices[${e-1}];
          realIndices[${r-2}] = bcastedIndices[${e-2}];
        }
        `;t[o]=new X(c)}}),t}indicesToOffset(){let t={};return this.context.programInfo.inputNames.forEach((n,r)=>{let i=this.context.inputTextureLayouts[r].shape,a=this.context.inputTextureLayouts[r].strides,o=i.length,s=`indicesToOffset_${n}`;t[s]=new X(e.indexToOffsetSingle(s,o,a)),s=`indicesToOffset_${n}_T`,t[s]=new X(e.indexToOffsetSingle(s,o,a.slice().reverse()))}),t}static indexToOffsetSingle(e,t,n){let r=``;for(let e=t-1;e>=0;--e)r+=`
        offset += indices[${e}] * ${n[e]};
        `;return`
      int ${e}(int indices[${t}]) {
        int offset = 0;
        ${r}
        return offset;
      }
      `}offsetToIndices(){let t={};return this.context.programInfo.inputNames.forEach((n,r)=>{let i=this.context.inputTextureLayouts[r].shape,a=this.context.inputTextureLayouts[r].strides,o=i.length,s=`offsetToIndices_${n}`;t[s]=new X(e.offsetToIndicesSingle(s,o,a)),s=`offsetToIndices_${n}_T`,t[s]=new X(e.offsetToIndicesSingle(s,o,a.slice().reverse()))}),t}static offsetToIndicesSingle(e,t,n){let r=[];for(let e=0;e<t-1;++e)r.push(`
      indices[${e}] = offset / ${n[e]};`),r.push(`
        offset -= indices[${e}] * ${n[e]};`);return r.push(`
      indices[${t-1}] = offset;`),`
      void ${e}(int offset, out int indices[${t}]) {
        ${r.join(``)}
      }
      `}incrementIndices(){let e={};return this.context.programInfo.inputNames.forEach((t,n)=>{let r=this.context.inputTextureLayouts[n].shape,i=r.length,a=`incrementIndices_${t}`,o=``;for(let e=0;e<i;++e)o+=`
        shape[${e}] = ${r[e]};`;let s=`
        void ${a}(int axis, out int indices[${i}]) {
          int shape[${i}];
          ${o};
          for(int i = ${i} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;e[a]=new X(s)}),e}}}),oa,Sy=N(()=>{Yn(),oa=class extends Mt{constructor(e){super(e)}getCustomTypes(){return{}}getFunctions(){return{...this.binaryVecFunctions(),...this.copyVec(),...this.setVecItem(),...this.getVecItem()}}binaryVecFunctions(){let e=this.context.outputTextureLayout.shape.length,t={add:`+=`,sub:`-=`,mul:`*=`,div:`/=`},n={};for(let r in t){let i=`${r}Vec`,a=``;for(let n=0;n<e;++n)a+=`
          dest[${n}] ${t[r]} src[${n}];
          `;let o=`
        void ${i}(int src[${e}], out int dest[${e}]) {
          ${a}
        }
        `;n[i]=new X(o)}return n}copyVec(){let e=this.context.outputTextureLayout.shape.length,t=``;for(let n=0;n<e;++n)t+=`
        dest[${n}] = src[${n}];
        `;let n=`
      void copyVec(int src[${e}], out int dest[${e}]) {
        ${t}
      }
      `;return{copyVec:new X(n)}}setVecItem(){let e=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index =${e} + index;
        if (index == 0)
            m[0] = value;
        `;for(let n=1;n<e-1;++n)t+=`
        else if (index == ${n})
            m[${n}] = value;
            `;t+=`
        else
            m[${e-1}] = value;
        `;let n=`
      void setVecItem(out int m[${e}], int index, int value) {
        ${t}
      }
        `;return{setVecItem:new X(n)}}getVecItem(){let e=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index = ${e} + index;
        if (index == 0)
            return m[0];
      `;for(let n=1;n<e-1;++n)t+=`
        else if (index == ${n})
            return m[${n}];
      `;t+=`
        else
            return m[${e-1}];
        `;let n=`
      int getVecItem(int m[${e}], int index) {
        ${t}
      }
    `;return{getVecItem:new X(n)}}}}),Zl,$y=N(()=>{vy(),xy(),Ty(),Iy(),Sy(),Zl={encoding:ta,fragcolor:na,vec:oa,shapeUtils:ra,coordinates:ea}}),ia,Ay=N(()=>{Yn(),_y(),$y(),Je(),ia=class{constructor(e,t,n,r){this.libs={},this.glslLibRoutineDependencyGraph={},this.context=new Ui(e,t,n,r),Object.keys(Zl).forEach(e=>{let t=new Zl[e](this.context);this.libs[e]=t});let i=this.glslLibRoutineDependencyGraph;for(let e in this.libs){let t=this.libs[e].getFunctions();for(let n in t){let r=e+`.`+n,a;i[r]?(a=i[r],a.routineBody=t[n].routineBody):(a=new Lo(r,t[n].routineBody),i[r]=a);let o=t[n].dependencies;if(o)for(let e=0;e<o.length;++e)if(i[o[e]])a.addDependency(i[o[e]]);else{let t=new Lo(o[e]);i[o[e]]=t,a.addDependency(t)}}}}preprocess(){let e=this.context.programInfo,t=e.shaderSource;return this.context.programInfo.hasMain||(t=`${t}
      ${sm(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),t=yy(t),`${am(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames,e.variables)}
    ${this.getImports(t)}
    ${t}`}getImports(e){let t=this.selectGlslLibRoutinesToBeIncluded(e);if(t.length===0)return``;let n=``;for(let e=0;e<t.length;++e)if(t[e].routineBody)n+=t[e].routineBody+`
`;else throw Error(`Missing body for the Glsl Library routine: ${t[e].name}`);return n}selectGlslLibRoutinesToBeIncluded(e){let t=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(n=>{let r=n.split(`.`)[1];e.indexOf(r)!==-1&&t.push(this.glslLibRoutineDependencyGraph[n])}),Wi.returnOrderedNodes(t)}getUniforms(e,t){let n=[];if(e)for(let t of e)n.push(`uniform sampler2D ${t};`);if(t)for(let e of t)n.push(`uniform ${e.type} ${e.name}${e.arrayLength?`[${e.arrayLength}]`:``};`);return n.join(`
`)}}}),aa,Oy=N(()=>{ft(),Dt(),Ay(),Je(),aa=class{constructor(e,t,n){this.profiler=e,this.glContext=t,this.textureLayoutStrategy=n,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n){this.profiler.event(`op`,`ProgramManager.run ${e.programInfo.name??`unknown kernel`}`,()=>{let r=this.glContext.gl,i=e.program;r.useProgram(i);try{this.bindOutput(n),this.attributesBound||this.bindAttributes(e.attribLocations),this.bindUniforms(e.uniformLocations,e.programInfo.variables??[],t)}catch(t){throw Be.error(`ProgramManager`,e.programInfo.shaderSource),t}this.profiler.event(`backend`,`GlContext.draw()`,()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(e=>this.glContext.deleteProgram(e.program))}build(e,t,n){return this.profiler.event(`backend`,`ProgramManager.build`,()=>{let r=new ia(this.glContext,e,t,n),i=r.preprocess(),a=this.compile(i);return{programInfo:e,program:a,uniformLocations:this.getUniformLocations(a,r.context.programInfo.inputNames,r.context.programInfo.variables),attribLocations:this.getAttribLocations(a)}})}compile(e){if(!this.vertexShader){Be.verbose(`ProrgramManager`,`Compiling and caching Vertex shader for the first time`);let e=im(this.glContext.version);this.vertexShader=this.glContext.compileShader(e,this.glContext.gl.VERTEX_SHADER)}ce.debug&&Be.verbose(`ProrgramManager`,`FragShader:
${e}
`);let t=this.glContext.compileShader(e,this.glContext.gl.FRAGMENT_SHADER),n=this.glContext.createProgram(this.vertexShader,t);return this.glContext.deleteShader(t),n}bindOutput(e){let t=e.width,n=e.height;Be.verbose(`ProrgramManager`,`Binding output texture to Framebuffer: w/h=${t}/${n}, shape=${e.shape}, type=${e.tensor.type}`),this.glContext.attachFramebuffer(e.texture,t,n)}bindAttributes(e){let t=e.position,n=e.textureCoord;this.glContext.setVertexAttributes(t,n),this.attributesBound=!0}bindUniforms(e,t,n){let r=this.glContext.gl,i=0;for(let{name:a,type:o,location:s,arrayLength:c}of e){let e=t.find(e=>e.name===a)?.data;if(o!==`sampler2D`&&!e)throw Error(`variable '${a}' does not have data defined in program info`);switch(o){case`sampler2D`:this.bindTexture(n[i],s,i),i++;break;case`float`:c?r.uniform1fv(s,e):r.uniform1f(s,e);break;case`int`:c?r.uniform1iv(s,e):r.uniform1i(s,e);break;default:throw Error(`Uniform not implemented: ${o}`)}}}bindTexture(e,t,n){this.glContext.bindTextureToUniform(e.texture,n,t)}getAttribLocations(e){return{position:this.getAttribLocation(e,`position`),textureCoord:this.getAttribLocation(e,`textureCoord`)}}getUniformLocations(e,t,n){let r=[];if(t)for(let n of t)r.push({name:n,type:`sampler2D`,location:this.getUniformLocation(e,n)});if(n)for(let t of n)r.push({...t,location:this.getUniformLocation(e,t.name)});return r}getUniformLocation(e,t){let n=this.glContext.gl.getUniformLocation(e,t);if(n===null)throw Error(`Uniform ${t} not found.`);return n}getAttribLocation(e,t){return this.glContext.gl.getAttribLocation(e,t)}}}),sa,Py=N(()=>{Dt(),ko(),sa=class{constructor(e,t,n,r){this.glContext=e,this.layoutStrategy=t,this.profiler=n,this.config=r,this.pendingRead=new Map,r.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(e,t,n,r){let i=this.toEncoderType(e),a=this.glContext.getEncoder(i,t.channels||1,r);if(t.isPacked&&r===1)throw Error(`not implemented`);let o=t.width,s=t.height,c,l;if(this.config.reuseTextures){c=`${o}x${s}_${a.format}_${a.internalFormat}_${a.textureType}`,l=this.inUseTextures.get(c),l||(l=[],this.inUseTextures.set(c,l));let t=this.idleTextures.get(c);if(t&&t.length>0){let i=t.pop();return l.push(i),r===1&&this.glContext.updateTexture(i,o,s,a,this.toTextureData(e,n)),i}}Be.verbose(`TextureManager`,`Creating new texture of size ${t.width}x${t.height}`);let u=this.glContext.allocateTexture(o,s,a,this.toTextureData(e,n));return this.config.reuseTextures&&(l.push(u),this.textureLookup.set(u,c)),u}readTexture(e,t,n){return n||=1,this.profiler.event(`backend`,`TextureManager.readTexture`,()=>{let r=e.shape.reduce((e,t)=>e*t)*n,i=this.glContext.readTexture(e.texture,e.width,e.height,r,this.toEncoderType(t),n);return this.toTensorData(t,i)})}async readTextureAsync(e,t,n){let r=e.tensor.dataId;if(n||=1,this.pendingRead.has(r)){let e=this.pendingRead.get(r);return new Promise(t=>e?.push(t))}return this.profiler.event(`backend`,`TextureManager.readTextureAsync`,async()=>{this.pendingRead.set(r,[]);let i=e.shape.reduce((e,t)=>e*t)*n;await this.glContext.createAndWaitForFence();let a=this.glContext.readTexture(e.texture,e.width,e.height,i,this.toEncoderType(t),n),o=this.toTensorData(t,a),s=this.pendingRead.get(r);return this.pendingRead.delete(r),s?.forEach(e=>e(o)),o})}readUint8TextureAsFloat(e){return this.profiler.event(`backend`,`TextureManager.readUint8TextureAsFloat`,()=>{let t=e.shape.reduce((e,t)=>e*t),n=this.glContext.readTexture(e.texture,e.width,e.height,t*4,`byte`,4);return new Float32Array(n.buffer,n.byteOffset,t)})}releaseTexture(e,t){let n;if(this.config.reuseTextures&&(n=this.textureLookup.get(e.texture),n)){t&&this.textureLookup.delete(n);let r=this.inUseTextures.get(n);if(r){let t=r.indexOf(e.texture);if(t!==-1){r.splice(t,1);let i=this.idleTextures.get(n);i||(i=[],this.idleTextures.set(n,i)),i.push(e.texture)}}}(!n||t)&&(Be.verbose(`TextureManager`,`Deleting texture of size ${e.width}x${e.height}`),this.glContext.deleteTexture(e.texture))}toTensorData(e,t){switch(e){case`int16`:return t instanceof Int16Array?t:Int16Array.from(t);case`int32`:return t instanceof Int32Array?t:Int32Array.from(t);case`int8`:return t instanceof Int8Array?t:Int8Array.from(t);case`uint16`:return t instanceof Uint16Array?t:Uint16Array.from(t);case`uint32`:return t instanceof Uint32Array?t:Uint32Array.from(t);case`uint8`:case`bool`:return t instanceof Uint8Array?t:Uint8Array.from(t);case`float32`:return t instanceof Float32Array?t:Float32Array.from(t);case`float64`:return t instanceof Float64Array?t:Float64Array.from(t);default:throw Error(`TensorData type ${e} is not supported`)}}toTextureData(e,t){if(t)return t instanceof Float32Array?t:new Float32Array(t)}toEncoderType(e){return`float`}clearActiveTextures(){this.glContext.clearActiveTextures()}}}),ua,Ey=N(()=>{Dt(),_f(),xm(),gy(),Oy(),Xl(),Py(),ua=class{constructor(e,t){this.backend=e,this.context=t,this.layoutStrategy=new Qi(e.glContext.maxTextureSize),this.programManager=new aa(this.context.profiler,e.glContext,this.layoutStrategy),this.textureManager=new sa(e.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:e.textureCacheMode===`full`}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=e.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new Gi(this)}onGraphInitialized(e){let t=e.getValues().filter(e=>e.from===-1&&e.tensor).map(e=>e.tensor.dataId);this.initializers=new Set(t)}isInitializer(e){return this.initializers?this.initializers.has(e):!1}addInitializer(e){this.initializers.add(e)}getTextureData(e,t){return t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,n=!1){Be.verbose(`WebGLSessionHandler`,`Storing Texture data in cache`),n?this.packedTextureDataCache.set(e,t):this.unpackedTextureDataCache.set(e,t)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.unpackedTextureDataCache=new Map}resolve(e,t,n){let r=yf(e,t,my);return{impl:r.opImpl,context:r.opInit?r.opInit(e,n):e}}}});function qP(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var Mo,Cy=N(()=>{ft(),ko(),ko(),zn(),Mo=class{constructor(e,t){this.frameBufferBound=!1,this.itemsToPoll=[],this.gl=e,this.version=t,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(e,t,n,r){let i=this.gl,a=i.createTexture();i.bindTexture(i.TEXTURE_2D,a),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);let o=r?n.encode(r,e*t):null;return i.texImage2D(i.TEXTURE_2D,0,n.internalFormat,e,t,0,n.format,n.textureType,o),this.checkError(),a}updateTexture(e,t,n,r,i){let a=this.gl;a.bindTexture(a.TEXTURE_2D,e);let o=r.encode(i,t*n);a.texSubImage2D(a.TEXTURE_2D,0,0,0,t,n,r.format,r.textureType,o),this.checkError()}attachFramebuffer(e,t,n){let r=this.gl;r.bindTexture(r.TEXTURE_2D,e),r.bindFramebuffer(r.FRAMEBUFFER,this.framebuffer),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0),this.checkError(),r.viewport(0,0,t,n),r.scissor(0,0,t,n)}readTexture(e,t,n,r,i,a){let o=this.gl;a||=1,this.frameBufferBound||this.attachFramebuffer(e,t,n);let s=this.getEncoder(i,a),c=s.allocate(t*n);return o.bindTexture(o.TEXTURE_2D,e),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),o.readPixels(0,0,t,n,o.RGBA,s.textureType,c),this.checkError(),s.decode(c,r)}isFramebufferReady(){return!0}getActiveTexture(){let e=this.gl;return`TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE)-e.TEXTURE0}`}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(e,t){let n=this.gl;n.vertexAttribPointer(e,3,n.FLOAT,!1,20,0),n.enableVertexAttribArray(e),t!==-1&&(n.vertexAttribPointer(t,2,n.FLOAT,!1,20,12),n.enableVertexAttribArray(t)),this.checkError()}createProgram(e,t){let n=this.gl,r=n.createProgram();return n.attachShader(r,e),n.attachShader(r,t),n.linkProgram(r),r}compileShader(e,t){let n=this.gl,r=n.createShader(t);if(!r)throw Error(`createShader() returned null with type ${t}`);if(n.shaderSource(r,e),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw Error(`Failed to compile shader: ${n.getShaderInfoLog(r)}
Shader source:
${e}`);return r}deleteShader(e){this.gl.deleteShader(e)}bindTextureToUniform(e,t,n){let r=this.gl;r.activeTexture(r.TEXTURE0+t),this.checkError(),r.bindTexture(r.TEXTURE_2D,e),this.checkError(),r.uniform1i(n,t),this.checkError()}draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.checkError()}checkError(){if(ce.debug){let e=this.gl,t=e.getError(),n=``;switch(t){case e.NO_ERROR:return;case e.INVALID_ENUM:n=`INVALID_ENUM`;break;case e.INVALID_VALUE:n=`INVALID_VALUE`;break;case e.INVALID_OPERATION:n=`INVALID_OPERATION`;break;case e.INVALID_FRAMEBUFFER_OPERATION:n=`INVALID_FRAMEBUFFER_OPERATION`;break;case e.OUT_OF_MEMORY:n=`OUT_OF_MEMORY`;break;case e.CONTEXT_LOST_WEBGL:n=`CONTEXT_LOST_WEBGL`;break;default:n=`Unknown WebGL Error: ${t.toString(16)}`}throw Error(n)}}deleteTexture(e){this.gl.deleteTexture(e)}deleteProgram(e){this.gl.deleteProgram(e)}getEncoder(e,t,n=0){if(this.version===2)return new Fi(this.gl,t);switch(e){case`float`:return n===1||this.isRenderFloat32Supported?new Do(this.gl,t):new Do(this.gl,t,this.textureHalfFloatExtension.HALF_FLOAT_OES);case`int`:throw Error(`not implemented`);case`byte`:return new Vi(this.gl,t);default:throw Error(`Invalid dataType: ${e}`)}}clearActiveTextures(){let e=this.gl;for(let t=0;t<this.maxTextureImageUnits;++t)e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,null)}dispose(){if(this.disposed)return;let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(this.framebuffer),e.bindBuffer(e.ARRAY_BUFFER,null),e.deleteBuffer(this.vertexbuffer),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.finish(),this.disposed=!0}createDefaultGeometry(){return new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0])}createVertexbuffer(){let e=this.gl,t=e.createBuffer();if(!t)throw Error(`createBuffer() returned null`);let n=this.createDefaultGeometry();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),this.checkError(),t}createFramebuffer(){let e=this.gl.createFramebuffer();if(!e)throw Error(`createFramebuffer returned null`);return e}queryVitalParameters(){let e=this.gl;if(this.isFloatTextureAttachableToFrameBuffer=this.checkFloatTextureAttachableToFrameBuffer(),this.isRenderFloat32Supported=this.checkRenderFloat32(),this.isFloat32DownloadSupported=this.checkFloat32Download(),this.version===1&&!this.textureHalfFloatExtension&&!this.isRenderFloat32Supported)throw Error(`both float32 and float16 TextureType are not supported`);this.isBlendSupported=!this.isRenderFloat32Supported||this.checkFloat32Blend(),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxTextureImageUnits=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.version}getExtensions(){this.version===2?(this.colorBufferFloatExtension=this.gl.getExtension(`EXT_color_buffer_float`),this.disjointTimerQueryWebgl2Extension=this.gl.getExtension(`EXT_disjoint_timer_query_webgl2`)):(this.textureFloatExtension=this.gl.getExtension(`OES_texture_float`),this.textureHalfFloatExtension=this.gl.getExtension(`OES_texture_half_float`))}checkFloatTextureAttachableToFrameBuffer(){let e=this.gl,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t);let n=this.version===2?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,n,1,1,0,e.RGBA,e.FLOAT,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(t),e.deleteFramebuffer(r),i}checkRenderFloat32(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension)return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Download(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension||!this.gl.getExtension(`WEBGL_color_buffer_float`))return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Blend(){let e=this.gl,t,n,r,i,a;try{t=e.createTexture(),n=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,t);let o=this.version===2?e.RGBA32F:e.RGBA;return e.texImage2D(e.TEXTURE_2D,0,o,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),e.enable(e.BLEND),r=e.createShader(e.VERTEX_SHADER),!r||(e.shaderSource(r,`void main(){}`),e.compileShader(r),i=e.createShader(e.FRAGMENT_SHADER),!i)||(e.shaderSource(i,`precision highp float;void main(){gl_FragColor=vec4(0.5);}`),e.compileShader(i),a=e.createProgram(),!a)?!1:(e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),e.useProgram(a),e.drawArrays(e.POINTS,0,1),e.getError()===e.NO_ERROR)}finally{e.disable(e.BLEND),a&&e.deleteProgram(a),r&&e.deleteShader(r),i&&e.deleteShader(i),n&&(e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(n)),t&&(e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(t))}}beginTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension,n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}else throw Error(`WebGL1 profiling currently not supported.`)}endTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension;e.endQuery(t.TIME_ELAPSED_EXT);return}else throw Error(`WebGL1 profiling currently not supported`)}isTimerResultAvailable(e){let t=!1,n=!1;if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let r=this.gl,i=this.disjointTimerQueryWebgl2Extension;t=r.getQueryParameter(e,r.QUERY_RESULT_AVAILABLE),n=r.getParameter(i.GPU_DISJOINT_EXT)}else throw Error(`WebGL1 profiling currently not supported`);return t&&!n}getTimerResult(e){let t=0;if(this.version===2){let n=this.gl;t=n.getQueryParameter(e,n.QUERY_RESULT),n.deleteQuery(e)}else throw Error(`WebGL1 profiling currently not supported`);return t/1e6}async waitForQueryAndGetTime(e){return await vl(()=>this.isTimerResultAvailable(e)),this.getTimerResult(e)}async createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n=e,r=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),t=r===null?()=>!0:()=>{let e=n.clientWaitSync(r,0,0);return e===n.ALREADY_SIGNALED||e===n.CONDITION_SATISFIED},{query:r,isFencePassed:t}}async pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=qP(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}async addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),!(this.itemsToPoll.length>1)&&await vl(()=>(this.pollItems(),this.itemsToPoll.length===0))}}});function Jl(e){let t;if((!e||e===`webgl2`)&&`webgl2`in so?t=so.webgl2:(!e||e===`webgl`)&&`webgl`in so&&(t=so.webgl),!t)try{t=Dy(KP(),e)}catch{t=Dy(jP(),e)}e=e||t.version===1?`webgl`:`webgl2`;let n=t.gl;return so[e]=t,n.isContextLost()?(delete so[e],Jl(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),t)}function Dy(e,t){let n={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1},r,i=n;if((!t||t===`webgl2`)&&(r=e.getContext(`webgl2`,i),r))try{return new Mo(r,2)}catch(e){Be.warning(`GlContextFactory`,`failed to create WebGLContext using contextId 'webgl2'. Error: ${e}`)}if((!t||t===`webgl`)&&(r=e.getContext(`webgl`,i)||e.getContext(`experimental-webgl`,i),r))try{return new Mo(r,1)}catch(e){Be.warning(`GlContextFactory`,`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${e}`)}throw Error(`WebGL is not supported`)}function jP(){if(typeof document>`u`)throw TypeError(`failed to create canvas: document is not supported`);let e=document.createElement(`canvas`);return e.width=1,e.height=1,e}function KP(){if(typeof OffscreenCanvas>`u`)throw TypeError(`failed to create offscreen canvas: OffscreenCanvas is not supported`);return new OffscreenCanvas(1,1)}var so,ky=N(()=>{Dt(),Cy(),so={}}),la,Ny=N(()=>{ft(),Dt(),Ey(),ky(),la=class{get contextId(){return ce.webgl.contextId}set contextId(e){ce.webgl.contextId=e}get matmulMaxBatchSize(){return ce.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(e){ce.webgl.matmulMaxBatchSize=e}get textureCacheMode(){return ce.webgl.textureCacheMode}set textureCacheMode(e){ce.webgl.textureCacheMode=e}get pack(){return ce.webgl.pack}set pack(e){ce.webgl.pack=e}get async(){return ce.webgl.async}set async(e){ce.webgl.async=e}initialize(){try{return this.glContext=Jl(this.contextId),typeof this.matmulMaxBatchSize!=`number`&&(this.matmulMaxBatchSize=16),typeof this.textureCacheMode!=`string`&&(this.textureCacheMode=`full`),typeof this.pack!=`boolean`&&(this.pack=!1),typeof this.async!=`boolean`&&(this.async=!1),Be.setWithEnv(ce),ce.webgl.context||Object.defineProperty(ce.webgl,`context`,{value:this.glContext.gl}),Be.verbose(`WebGLBackend`,`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(e){return Be.warning(`WebGLBackend`,`Unable to initialize WebGLBackend. ${e}`),!1}}createSessionHandler(e){return new ua(this,e)}dispose(){this.glContext.dispose()}}});async function Yl(e){if(e){let t=typeof e==`string`?[e]:e;for(let e of t){let t=Ly.get(e);if(t)return t;let n=await ZP(e);if(n)return n}}else return Yl([`webgl`]);throw Error(`no available backend to use`)}async function ZP(e){let t=XP;if(typeof t[e]<`u`&&JP(t[e])){let n=t[e],r=n.initialize();if(typeof r==`object`&&`then`in r&&(r=await r),r)return Ly.set(e,n),n}}function JP(e){let t=e;return`initialize`in t&&typeof t.initialize==`function`&&`createSessionHandler`in t&&typeof t.createSessionHandler==`function`&&`dispose`in t&&typeof t.dispose==`function`}var Ly,XP,Ry=N(()=>{Ny(),Ly=new Map,XP={webgl:new la}}),Ql,ca,zy=N(()=>{Dt(),Ql=class{constructor(e,t){this.op=e,this.node=t}},ca=class{constructor(e,t,n){this.graph=e,this.profiler=n,this.initialize(t)}initialize(e){this.profiler.event(`session`,`ExecutionPlan.initialize`,()=>{let t=this.graph.getNodes();if(t.length!==e.length)throw Error(`The size of nodes and OPs do not match.`);this._ops=e.map((e,n)=>new Ql(e,t[n])),this.reset(),this._starter=[],this._ops.forEach((e,t)=>{let n=!0;for(let t of e.node.inputs)if(!this._values[t]&&this.graph.getInputIndices().indexOf(t)===-1){n=!1;break}n&&this._starter.push(t)})})}reset(){this._values=this.graph.getValues().map(e=>e.tensor)}async execute(e,t){return this.profiler.event(`session`,`ExecutionPlan.execute`,async()=>{this.reset();let n=e.createInferenceHandler(),r=this.graph.getInputIndices();if(t.length!==r.length)throw Error(`number of input tensors don't match the number of inputs to the model: actual: ${t.length} expected: ${r.length}`);t.forEach((e,t)=>{let n=r[t];this._values[n]=e});let i=this._starter.slice(0),a=this.graph.getValues(),o=this.graph.getNodes(),s=0;for(;s<i.length;){let e=i[s++],t=this._ops[e],r=t.node.inputs.map(e=>this._values[e]);if(r.indexOf(void 0)!==-1)throw Error(`unresolved input detected: op: ${t.node}`);let c=r;Be.verbose(`ExecPlan`,`Running op:${t.node.name} (${c.map((e,n)=>`'${t.node.inputs[n]}': ${e.type}[${e.dims.join(`,`)}]`).join(`, `)})`);let l=await this.profiler.event(`node`,t.node.name,async()=>t.op.impl(n,c,t.op.context));if(l.length!==t.node.outputs.length)throw Error(`the size of output does not match model definition.`);l.forEach((e,n)=>{let r=t.node.outputs[n];if(this._values[r])throw Error(`output [${r}] already has value: op:${t.node.name}`);this._values[r]=e});let u=new Set;l.forEach((e,n)=>{let r=t.node.outputs[n];for(let e of a[r].to){let t=o[e],n=!0;for(let e of t.inputs)if(!this._values[e]){n=!1;break}n&&u.add(e)}}),i.push(...u)}let c=[];for(let e=0;e<this.graph.getOutputIndices().length;e++){let t=this.graph.getOutputIndices()[e],n=this._values[t];if(n===void 0)throw Error(`required output [${t}] does not have value`);t===0?await n.getData():n.data,c.push(n)}return Be.verbose(`ExecPlan`,`disposing of inferenceHandler`),n.dispose(),c})}}}),Se,Bo,My=N(()=>{$o(),Se=ye(Qr()),Rr(),ze(),Bo=class e{constructor(t){if(this._attributes=new Map,t!=null){for(let n of t)n instanceof Se.onnx.AttributeProto?this._attributes.set(n.name,[e.getValue(n),e.getType(n)]):n instanceof Di.Attribute&&this._attributes.set(n.name(),[e.getValue(n),e.getType(n)]);if(this._attributes.size<t.length)throw Error(`duplicated attribute names`)}}set(e,t,n){this._attributes.set(e,[n,t])}delete(e){this._attributes.delete(e)}getFloat(e,t){return this.get(e,`float`,t)}getInt(e,t){return this.get(e,`int`,t)}getString(e,t){return this.get(e,`string`,t)}getTensor(e,t){return this.get(e,`tensor`,t)}getFloats(e,t){return this.get(e,`floats`,t)}getInts(e,t){return this.get(e,`ints`,t)}getStrings(e,t){return this.get(e,`strings`,t)}getTensors(e,t){return this.get(e,`tensors`,t)}get(e,t,n){let r=this._attributes.get(e);if(r===void 0){if(n!==void 0)return n;throw Error(`required attribute not found: ${e}`)}if(r[1]!==t)throw Error(`type mismatch: expected ${t} but got ${r[1]}`);return r[0]}static getType(e){let t=e instanceof Se.onnx.AttributeProto?e.type:e.type();switch(t){case Se.onnx.AttributeProto.AttributeType.FLOAT:return`float`;case Se.onnx.AttributeProto.AttributeType.INT:return`int`;case Se.onnx.AttributeProto.AttributeType.STRING:return`string`;case Se.onnx.AttributeProto.AttributeType.TENSOR:return`tensor`;case Se.onnx.AttributeProto.AttributeType.FLOATS:return`floats`;case Se.onnx.AttributeProto.AttributeType.INTS:return`ints`;case Se.onnx.AttributeProto.AttributeType.STRINGS:return`strings`;case Se.onnx.AttributeProto.AttributeType.TENSORS:return`tensors`;default:throw Error(`attribute type is not supported yet: ${Se.onnx.AttributeProto.AttributeType[t]}`)}}static getValue(e){let t=e instanceof Se.onnx.AttributeProto?e.type:e.type();if(t===Se.onnx.AttributeProto.AttributeType.GRAPH||t===Se.onnx.AttributeProto.AttributeType.GRAPHS)throw Error(`graph attribute is not supported yet`);let n=this.getValueNoCheck(e);if(t===Se.onnx.AttributeProto.AttributeType.INT&&Tt.isLong(n))return Tt.longToNumber(n);if(t===Se.onnx.AttributeProto.AttributeType.INTS){let e=n,t=Array(e.length);for(let n=0;n<e.length;n++){let r=e[n];t[n]=Tt.longToNumber(r)}return t}if(t===Se.onnx.AttributeProto.AttributeType.TENSOR)return e instanceof Se.onnx.AttributeProto?ot.fromProto(n):ot.fromOrtTensor(n);if(t===Se.onnx.AttributeProto.AttributeType.TENSORS){if(e instanceof Se.onnx.AttributeProto)return n.map(e=>ot.fromProto(e));if(e instanceof Di.Attribute)return n.map(e=>ot.fromOrtTensor(e))}return t===Se.onnx.AttributeProto.AttributeType.STRING&&e instanceof Se.onnx.AttributeProto?Co(n):t===Se.onnx.AttributeProto.AttributeType.STRINGS&&e instanceof Se.onnx.AttributeProto?n.map(Co):n}static getValueNoCheck(e){return e instanceof Se.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(e):this.getValueNoCheckFromOrtFormat(e)}static getValueNoCheckFromOnnxFormat(e){switch(e.type){case Se.onnx.AttributeProto.AttributeType.FLOAT:return e.f;case Se.onnx.AttributeProto.AttributeType.INT:return e.i;case Se.onnx.AttributeProto.AttributeType.STRING:return e.s;case Se.onnx.AttributeProto.AttributeType.TENSOR:return e.t;case Se.onnx.AttributeProto.AttributeType.GRAPH:return e.g;case Se.onnx.AttributeProto.AttributeType.FLOATS:return e.floats;case Se.onnx.AttributeProto.AttributeType.INTS:return e.ints;case Se.onnx.AttributeProto.AttributeType.STRINGS:return e.strings;case Se.onnx.AttributeProto.AttributeType.TENSORS:return e.tensors;case Se.onnx.AttributeProto.AttributeType.GRAPHS:return e.graphs;default:throw Error(`unsupported attribute type: ${Se.onnx.AttributeProto.AttributeType[e.type]}`)}}static getValueNoCheckFromOrtFormat(e){switch(e.type()){case Rt.AttributeType.FLOAT:return e.f();case Rt.AttributeType.INT:return e.i();case Rt.AttributeType.STRING:return e.s();case Rt.AttributeType.TENSOR:return e.t();case Rt.AttributeType.GRAPH:return e.g();case Rt.AttributeType.FLOATS:return e.floatsArray();case Rt.AttributeType.INTS:{let t=[];for(let n=0;n<e.intsLength();n++)t.push(e.ints(n));return t}case Rt.AttributeType.STRINGS:{let t=[];for(let n=0;n<e.stringsLength();n++)t.push(e.strings(n));return t}case Rt.AttributeType.TENSORS:{let t=[];for(let n=0;n<e.tensorsLength();n++)t.push(e.tensors(n));return t}default:throw Error(`unsupported attribute type: ${Rt.AttributeType[e.type()]}`)}}}}),tc,nc,Fn,da,ec,By=N(()=>{My(),$o(),tc=ye(Qr()),Rr(),ze(),nc={from:(e,t)=>new ec(e,t)},Fn=class{constructor(e){this._from=void 0,this._to=[],this.tensor=void 0,this.type=void 0,e&&(this.type=ht.tensorValueTypeFromProto(e.type.tensorType))}get from(){return this._from}get to(){return this._to}},da=class{constructor(e,t){e instanceof tc.onnx.NodeProto?(this.name=e.name,this.opType=e.opType,this.attributes=new Bo(e.attribute)):e instanceof rl.Node&&(this.name=t??e.name(),this.opType=e.opType(),this.attributes=new Bo(ht.tensorAttributesFromORTFormat(e))),this.inputs=[],this.outputs=[],this.executeNode=!0}},ec=class{constructor(e,t){if(!e)throw TypeError(`graph is empty`);this.buildGraph(e),this.transformGraph(t),this.checkIsAcyclic()}getInputIndices(){return this._allInputIndices}getInputNames(){return this._allInputNames}getOutputIndices(){return this._allOutputIndices}getOutputNames(){return this._allOutputNames}getValues(){return this._allData}getNodes(){return this._nodes}buildGraph(e){if(e instanceof tc.onnx.GraphProto)this.buildGraphFromOnnxFormat(e);else if(e instanceof tl.Graph)this.buildGraphFromOrtFormat(e);else throw TypeError(`Graph type is not supported.`)}buildGraphFromOnnxFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let n=new Map;if(!e.input)throw Error(`missing information in graph: input`);let r=[];for(let n of e.input){if(t.has(n.name))throw Error(`duplicated input name: ${n.name}`);let e=this._allData.push(new Fn(n))-1;t.set(n.name,e),r.push(n.name)}if(!e.initializer)throw Error(`missing information in graph: initializer`);for(let n of e.initializer){let e=t.get(n.name);if(e===void 0){let r=new Fn;r.type={shape:{dims:ht.tensorDimsFromProto(n.dims)},tensorType:ht.tensorDataTypeFromProto(n.dataType)},e=this._allData.push(r)-1,t.set(n.name,e)}this._allData[e]._from=-1,this._allData[e].tensor=ot.fromProto(n)}for(let e=0;e<this._allData.length;e++)this._allData[e].tensor||(this._allInputIndices.push(e),this._allInputNames.push(r[e]));if(!e.output)throw Error(`missing information in graph: output`);for(let n of e.output){if(t.has(n.name))throw Error(`duplicated output name: ${n.name}`);let e=this._allData.push(new Fn(n))-1;t.set(n.name,e),this._allOutputIndices.push(e),this._allOutputNames.push(n.name)}if(!e.node)throw Error(`missing information in graph: node`);for(let t of e.node){if(!t.name)for(let e=0;;e++){let r=`unnamed_${t.opType}_${e}`;if(!n.has(r)){t.name=r;break}}if(n.has(t.name))throw Error(`duplicated node name: ${t.name}`);let e=this._nodes.push(new da(t))-1;n.set(t.name,e)}for(let n=0;n<this._nodes.length;n++){let r=this._nodes[n],i=e.node[n];if(!i.output)throw Error(`missing output for node: ${i.name}`);for(let e of i.output){let a=t.get(e);if(typeof a>`u`&&(a=this._allData.push(new Fn)-1,t.set(e,a)),r.outputs.push(a),this._allData[a]._from!==void 0)throw Error(`multiple nodes output to one data value: ${a}`);if(this._allData[a]._from=n,i.opType===`Constant`){if(!i.attribute||i.attribute.length!==1||!i.attribute[0].t)throw Error(`missing attributes or missing tensor value in attributes for this Constant operator`);if(!i.output||i.output.length!==1)throw Error(`missing output or incorrect number of outputs for this Constant operator`);r.outputs.pop(),r.executeNode=!1,this._allData[a]._from=-1,this._allData[a].tensor=ot.fromProto(i.attribute[0].t)}}}for(let n=0;n<this._nodes.length;n++){let r=this._nodes[n],i=e.node[n];if(!i.input)throw Error(`missing input for node: ${i.name}`);for(let e of i.input){let a=t.get(e);if(typeof a>`u`){if(e===``&&(i.input.length===3||i.input.length===4)&&i.opType===`Resize`)continue;throw Error(`unrecognized input '${e}' for node: ${i.name}`)}r.inputs.push(a),this._allData[a]._to.push(n)}}return!0}buildGraphFromOrtFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let n=new Map,r=[];for(let n=0;n<e.inputsLength();n++){let i=e.inputs(n);if(t.has(i))throw Error(`duplicated input name: ${i}`);for(let n=0;n<e.nodeArgsLength();n++)if(e.nodeArgs(n)?.name()===i){let a=new Fn;if(e.nodeArgs(n)?.type()?.valueType()!==il.TypeInfoValue.tensor_type)throw Error(`Unexpected value type for the nodeArg.`);let o=e.nodeArgs(n).type().value(new ol.TensorTypeAndShape),s=ht.tensorDataTypeFromProto(o.elemType()),c=o.shape(),l=[];for(let e=0;e<c.dimLength();e++)l.push(Tt.longToNumber(c.dim(e).value().dimValue()));a.type={shape:{dims:l},tensorType:s};let u=this._allData.push(a)-1;t.set(i,u),r.push(i)}}for(let n=0;n<e.initializersLength();n++){let r=e.initializers(n),i=t.get(r.name());if(i===void 0){let e=new Fn,n=ht.tensorDimsFromORTFormat(r),a=ht.tensorDataTypeFromProto(r.dataType());e.type={shape:{dims:n},tensorType:a},i=this._allData.push(e)-1,t.set(r.name(),i)}this._allData[i]._from=-1,this._allData[i].tensor=ot.fromOrtTensor(r)}for(let e=0;e<this._allData.length;e++)this._allData[e].tensor||(this._allInputIndices.push(e),this._allInputNames.push(r[e]));for(let n=0;n<e.outputsLength();n++){let r=e.outputs(n);if(t.has(r))throw Error(`duplicated output name: ${r}`);let i=this._allData.push(new Fn)-1;t.set(r,i),this._allOutputIndices.push(i),this._allOutputNames.push(r)}if(!e.nodes)throw Error(`missing information in graph: node`);for(let t=0;t<e.nodesLength();t++){let r=e.nodes(t),i=r.name();if(!i)for(let e=0;i=`unnamed_${r.opType()}_${e}`,n.has(i);e++);if(n.has(i))throw Error(`duplicated node name: ${i}`);let a=this._nodes.push(new da(r,i))-1;n.set(i,a)}for(let n=0;n<this._nodes.length;n++){let r=this._nodes[n],i=e.nodes(n);if(i==null)throw Error(`No node exists at index ${n}`);if(i?.outputsLength()===0)throw Error(`missing output for node: ${i.name}`);for(let e=0;e<i?.outputsLength();e++){let a=i?.outputs(e),o=t.get(a);if(typeof o>`u`&&(o=this._allData.push(new Fn)-1,t.set(a,o)),r.outputs.push(o),this._allData[o]._from!==void 0)throw Error(`multiple nodes output to one data value: ${o}`);if(this._allData[o]._from=n,i.opType()===`Constant`){if(i.attributesLength()!==1||!i.attributes(0).t())throw Error(`missing attributes or missing tensor value in attributes for this Constant operator`);if(i.outputsLength()!==1)throw Error(`missing output or incorrect number of outputs for this Constant operator`);r.outputs.pop(),r.executeNode=!1,this._allData[o]._from=-1,this._allData[o].tensor=ot.fromOrtTensor(i.attributes(0).t())}}}for(let n=0;n<this._nodes.length;n++){let r=this._nodes[n],i=e.nodes(n);if(i.inputsLength()===0)throw Error(`missing input for node: ${i.name}`);for(let e=0;e<i.inputsLength();e++){let a=i.inputs(e),o=t.get(a);if(typeof o>`u`)throw Error(`unrecognized input '${a}' for node: ${i.name()}`);r.inputs.push(o),this._allData[o]._to.push(n)}}}checkIsAcyclic(){let e=new Set;this._allInputIndices.forEach(t=>{this._allData[t]._to.forEach(t=>{e.add(t)})});let t=Array.from(e),n=Array(this._nodes.length).fill(`white`);for(;t.length>0;){let e=t.pop();n[e]===`gray`?n[e]=`black`:(t.push(e),n[e]=`gray`,this._nodes[e].outputs.forEach(r=>{let i=this._allData[r];if(typeof i.tensor<`u`)throw Error(`node outputs should not be initialized`);if(i._from!==e)throw Error(`from property of the Value object doesn't match index of Node being processed`);i._to.forEach(e=>{if(n[e]===`gray`)throw Error(`model graph is cyclic`);n[e]===`white`&&t.push(e)})}))}}transformGraph(e){this.removeAllIdentityNodes(),this.removeAllDropoutNodes(),this.fuseConvActivationNodes(),e&&e.transformGraph(this),this.finalizeGraph()}finalizeGraph(){let e=0,t=[this._nodes.length,0],n=0;for(let e=0;e<this._nodes.length;e++)t[e]=n,this._nodes[e].executeNode?(n!==e&&(this._nodes[n]=this._nodes[e]),n++):this._nodes[e].outputs.forEach(e=>{this._allData[e]._from=-2});this._nodes.splice(n,this._nodes.length-n);for(let e=0;e<this._allData.length;e++){let n=this._allData[e];n._from!==void 0&&n._from!==-1&&n._from!==-2&&(n._from=t[n._from]);for(let e=0;e<n._to.length;e++)if(n._to[e]>=0)n._to[e]=t[n._to[e]];else throw Error(`Trying to update a removed node`)}e=0;for(let t=0;t<this._allData.length;t++){if(this._allData[t].from===-2&&this._allOutputIndices.indexOf(t+e)===-1){e++,this._allData.splice(t,1),t--;continue}if(e>0){let n=-1;this._allData[t].from!==void 0&&this._allData[t].from!==-1?(n=this._nodes[this._allData[t].from].outputs.indexOf(t+e),n!==-1&&(this._nodes[this._allData[t].from].outputs[n]=t)):(n=this._allInputIndices.indexOf(t+e),n!==-1&&(this._allInputIndices[n]=t)),this._allData[t].to.forEach(r=>{n=this._nodes[r].inputs.indexOf(t+e),n!==-1&&(this._nodes[r].inputs[n]=t)}),this._allData[t].to.length===0&&(n=this._allOutputIndices.indexOf(t+e),n!==-1&&(this._allOutputIndices[n]=t))}}}deleteNode(e){let t=this._nodes[e];if(t.outputs.length>1){for(let e=1;e<t.outputs.length;e++)if(this._allData[t.outputs[e]].to.length>0)throw Error(`Node deletion with more than one output connected to other nodes is not supported. `)}t.executeNode=!1;let n=t.inputs[0],r=t.outputs[0],i=this._allData[r].to;for(let n=0;n<t.inputs.length;n++){let r=this._allData[t.inputs[n]].to.indexOf(e);if(r===-1)throw Error(`The Value object doesn't have the current Node in it's 'to' property `);this._allData[t.inputs[n]].to.splice(r,1)}this._allData[r]._to=[];let a=this._allOutputIndices.indexOf(r);if(a!==-1&&(this._allOutputIndices[a]=n),i&&i.length>0)for(let e of i){let t=this._nodes[e].inputs.indexOf(r);if(t===-1)throw Error(`The Node object doesn't have the output Value in it's 'inputs' property `);this._nodes[e].inputs[t]=n,this._allData[n].to.push(e)}}removeAllDropoutNodes(){let e=0;for(let t of this._nodes){if(t.opType===`Dropout`){if(t.inputs.length!==1)throw Error(`Dropout nodes should only contain one input. `);if(t.outputs.length!==1&&t.outputs.length!==2)throw Error(`Dropout nodes should contain either 1 or 2 output(s)`);if(t.outputs.length===2&&this._allData[t.outputs[1]]._to.length!==0)throw Error(`Dropout nodes's second output should not be referenced by other nodes`);this.deleteNode(e)}e++}}removeAllIdentityNodes(){let e=0;for(let t of this._nodes)t.opType===`Identity`&&this.deleteNode(e),e++}isActivation(e){switch(e.opType){case`Relu`:case`Sigmoid`:case`Clip`:return!0;default:return!1}}fuseConvActivationNodes(){for(let e of this._nodes)if(e.opType===`Conv`){let t=this._allData[e.outputs[0]]._to;if(t.length===1&&this.isActivation(this._nodes[t[0]])){let n=this._nodes[t[0]];if(n.opType===`Clip`)if(n.inputs.length===1)try{e.attributes.set(`activation_params`,`floats`,[n.attributes.getFloat(`min`),n.attributes.getFloat(`max`)])}catch{e.attributes.set(`activation_params`,`floats`,[Nr,Lr])}else if(n.inputs.length>=3&&this._allData[n.inputs[1]].tensor!==void 0&&this._allData[n.inputs[2]].tensor!==void 0)e.attributes.set(`activation_params`,`floats`,[this._allData[n.inputs[1]].tensor.floatData[0],this._allData[n.inputs[2]].tensor.floatData[0]]);else continue;e.attributes.set(`activation`,`string`,n.opType),this.deleteNode(t[0])}}}}}),Fy,Vy,pa,Gy=N(()=>{Fy=ye(Re()),By(),$o(),Vy=ye(Qr()),ze(),pa=class{constructor(){}load(e,t,n){let r;if(!n)try{this.loadFromOnnxFormat(e,t);return}catch(e){if(n!==void 0)throw e;r=e}try{this.loadFromOrtFormat(e,t)}catch(e){throw n===void 0?Error(`Failed to load model as ONNX format: ${r}
as ORT format: ${e}`):e}}loadFromOnnxFormat(e,t){let n=Vy.onnx.ModelProto.decode(e);if(Tt.longToNumber(n.irVersion)<3)throw Error(`only support ONNX model with IR_VERSION>=3`);this._opsets=n.opsetImport.map(e=>({domain:e.domain,version:Tt.longToNumber(e.version)})),this._graph=nc.from(n.graph,t)}loadFromOrtFormat(e,t){let n=new Fy.ByteBuffer(e),r=nl.InferenceSession.getRootAsInferenceSession(n).model();if(Tt.longToNumber(r.irVersion())<3)throw Error(`only support ONNX model with IR_VERSION>=3`);this._opsets=[];for(let e=0;e<r.opsetImportLength();e++){let t=r.opsetImport(e);this._opsets.push({domain:t?.domain(),version:Tt.longToNumber(t.version())})}this._graph=nc.from(r.graph(),t)}get graph(){return this._graph}get opsets(){return this._opsets}}}),fa,Uy=N(()=>{Ry(),zy(),Dt(),Gy(),fa=class{constructor(e={}){this._initialized=!1,this.backendHint=e.backendHint,this.profiler=yi.create(e.profiler),this.context={profiler:this.profiler,graphInputTypes:[],graphInputDims:[]}}get inputNames(){return this._model.graph.getInputNames()}get outputNames(){return this._model.graph.getOutputNames()}startProfiling(){this.profiler.start()}endProfiling(){this.profiler.stop()}async loadModel(e,t,n){await this.profiler.event(`session`,`Session.loadModel`,async()=>{if(this.sessionHandler=(await Yl(this.backendHint)).createSessionHandler(this.context),this._model=new pa,typeof e==`string`){let t=e.endsWith(`.ort`);{let n=await(await fetch(e)).arrayBuffer();this.initialize(new Uint8Array(n),t)}}else if(ArrayBuffer.isView(e))this.initialize(e);else{let r=new Uint8Array(e,t||0,n||e.byteLength);this.initialize(r)}})}initialize(e,t){if(this._initialized)throw Error(`already initialized`);this.profiler.event(`session`,`Session.initialize`,()=>{let n=this.sessionHandler.transformGraph?this.sessionHandler:void 0;this._model.load(e,n,t),this.sessionHandler.onGraphInitialized&&this.sessionHandler.onGraphInitialized(this._model.graph),this.initializeOps(this._model.graph),this._executionPlan=new ca(this._model.graph,this._ops,this.profiler)}),this._initialized=!0}async run(e){if(!this._initialized)throw Error(`session not initialized yet`);return this.profiler.event(`session`,`Session.run`,async()=>{let t=this.normalizeAndValidateInputs(e),n=await this._executionPlan.execute(this.sessionHandler,t);return this.createOutput(n)})}normalizeAndValidateInputs(e){let t=this._model.graph.getInputNames();if(Array.isArray(e)){if(e.length!==t.length)throw Error(`incorrect input array length: expected ${t.length} but got ${e.length}`)}else{if(e.size!==t.length)throw Error(`incorrect input map size: expected ${t.length} but got ${e.size}`);let n=Array(e.size),r=0;for(let i=0;i<t.length;++i){let a=e.get(t[i]);if(!a)throw Error(`missing input tensor for: '${name}'`);n[r++]=a}e=n}if(!this.context.graphInputTypes||this.context.graphInputTypes.length===0||!this.context.graphInputDims||this.context.graphInputDims.length===0){let t=this._model.graph.getInputIndices(),n=this._model.graph.getValues(),r=Array(t.length);for(let i=0;i<t.length;++i){let a=n[t[i]];r[i]=a.type.shape.dims,this.context.graphInputTypes.push(a.type.tensorType),this.context.graphInputDims.push(e[i].dims)}this.validateInputTensorDims(r,e,!0)}else this.validateInputTensorDims(this.context.graphInputDims,e,!1);return this.validateInputTensorTypes(this.context.graphInputTypes,e),e}validateInputTensorTypes(e,t){for(let n=0;n<t.length;n++){let r=e[n],i=t[n].type;if(r!==i)throw Error(`input tensor[${n}] check failed: expected type '${r}' but got ${i}`)}}validateInputTensorDims(e,t,n){for(let r=0;r<t.length;r++){let i=e[r],a=t[r].dims;if(!this.compareTensorDims(i,a,n))throw Error(`input tensor[${r}] check failed: expected shape '[${i.join(`,`)}]' but got [${a.join(`,`)}]`)}}compareTensorDims(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r]&&(!n||e[r]!==0))return!1;return!0}createOutput(e){let t=this._model.graph.getOutputNames();if(e.length!==t.length)throw Error(`expected number of outputs do not match number of generated outputs`);let n=new Map;for(let r=0;r<t.length;++r)n.set(t[r],e[r]);return n}initializeOps(e){let t=e.getNodes();this._ops=Array(t.length);for(let n=0;n<t.length;n++)this._ops[n]=this.sessionHandler.resolve(t[n],this._model.opsets,e)}}}),ha,Wy=N(()=>{ft(),Rr(),ha=class{constructor(e){this.session=e,this.inputNames=this.session.inputNames,this.outputNames=this.session.outputNames}get inputMetadata(){throw Error(`Getting model metadata is not supported in webgl backend.`)}get outputMetadata(){throw Error(`Getting model metadata is not supported in webgl backend.`)}async dispose(){}async run(e,t,n){let r=new Map;for(let t in e)if(Object.hasOwnProperty.call(e,t)){let n=e[t];r.set(t,new ot(n.dims,n.type,void 0,void 0,n.data))}let i=await this.session.run(r),a={};return i.forEach((e,t)=>{a[t]=new $t(e.type,e.data,e.dims)}),a}startProfiling(){this.session.startProfiling()}endProfiling(){this.session.endProfiling()}}}),Hy={};Sr(Hy,{onnxjsBackend:()=>YP});var rc,YP,qy=N(()=>{Uy(),Wy(),rc=class{async init(){}async createInferenceSessionHandler(e,t){let n=new fa(t);return await n.loadModel(e),new ha(n)}},YP=new rc}),ma=N(()=>{}),Xy={};Sr(Xy,{default:()=>QP});var jy,Ky,QP,Zy=N(()=>{oc(),br(),ga(),jy=`ort-wasm-proxy-worker`,Ky=globalThis.self?.name===jy,Ky&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:ba(n.wasm).then(()=>{ya(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;_a(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=Fo(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;wa(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:va(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;xa(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},Ia([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:Ta(n),postMessage({type:t});break;default:}}catch(e){postMessage({type:t,err:e})}}),QP=Ky?null:e=>new Worker(e??Pt,{type:`module`,name:jy})}),Yy={};Sr(Yy,{default:()=>e3});async function Jy(e={}){var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&self.name?.startsWith(`em-pthread`);t.mountExternalData=(e,n)=>{e.startsWith(`./`)&&(e=e.substring(2)),(t.Xc||=new Map).set(e,n)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=e=>async(...n)=>{try{if(t.Yc)throw Error(`Session already started`);let r=t.Yc={Kd:n[0],errors:[]},i=await e(...n);if(t.Yc!==r)throw Error(`Session mismatch`);t.dd?.flush();let a=r.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{t.Yc=null}};t.jsepInit=(e,n)=>{if(e===`webgpu`){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=n;let e=t.dd;t.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),t.jsepGetBuffer=t=>e.getBuffer(t),t.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),t.jsepOnCreateSession=t=>{e.onCreateSession(t)},t.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},t.jsepOnRunStart=t=>e.onRunStart(t),t.Id=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){let e=n[0];[t.Wd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=n.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=t=>e.onRunStart(t),t.webnnOnRunEnd=e.onRunEnd.bind(e),t.webnnOnReleaseSession=t=>{e.onReleaseSession(t)},t.webnnCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),t.webnnRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),t.webnnCreateMLContext=t=>e.createMLContext(t),t.webnnRegisterMLConstant=(n,r,i,a,o,s)=>e.registerMLConstant(n,r,i,a,o,t.Xc,s),t.webnnRegisterGraphInput=e.registerGraphInput.bind(e),t.webnnIsGraphInput=e.isGraphInput.bind(e),t.webnnRegisterGraphOutput=e.registerGraphOutput.bind(e),t.webnnIsGraphOutput=e.isGraphOutput.bind(e),t.webnnCreateTemporaryTensor=e.createTemporaryTensor.bind(e),t.webnnIsGraphInputOutputTypeSupported=e.isGraphInputOutputTypeSupported.bind(e)}};let o=()=>{let e=e=>(...t)=>{let n=K;return t=e(...t),K==n?t:new Promise((e,t)=>{Ei={resolve:e,reject:t}})};(()=>{for(let n of[`_OrtAppendExecutionProvider`,`_OrtCreateSession`,`_OrtRun`,`_OrtRunWithBinding`,`_OrtBindInput`])t[n]=e(t[n])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o?.()};var s,c,l=(e,t)=>{throw t},u=import.meta.url,d=``;if(n||r){try{d=new URL(`.`,u).href}catch{}r&&(c=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),s=async e=>{if(C(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)}}var f,p,m,h,g,_,v=console.log.bind(console),y=console.error.bind(console),b=v,x=y,S=!1,C=e=>e.startsWith(`file://`);function w(){tt.buffer!=O.buffer&&de()}if(i){let e=function(n){try{var r=n.data,i=r.Sc;if(i===`load`){let n=[];self.onmessage=e=>n.push(e),_=()=>{postMessage({Sc:`loaded`});for(let t of n)e(t);self.onmessage=e};for(let e of r.xd)t[e]&&!t[e].proxy||(t[e]=(...t)=>{postMessage({Sc:`callHandler`,wd:e,args:t})},e==`print`&&(b=t[e]),e==`printErr`&&(x=t[e]));tt=r.Od,de(),p=r.Pd,be(),Kf()}else if(i===`run`){(function(e){var t=(w(),P)[e+52>>>2>>>0];e=(w(),P)[e+56>>>2>>>0],vu(t,t-e),Y(t)})(r.Rc),ru(r.Rc,0,0,1,0,0),Qe(),Vr(r.Rc),E||=(gl(),!0);try{rt(r.Md,r.bd)}catch(e){if(e!=`unwind`)throw e}}else r.target!==`setimmediate`&&(i===`checkMailbox`?E&&Kr():i&&(x(`worker: received unknown command ${i}`),x(r)))}catch(e){throw iu(),e}};var T=e,E=!1;self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}var O,k,A,j,M,P,ee,te,F,ie,ae,oe=!1;function de(){var e=tt.buffer;t.HEAP8=O=new Int8Array(e),A=new Int16Array(e),t.HEAPU8=k=new Uint8Array(e),j=new Uint16Array(e),t.HEAP32=M=new Int32Array(e),t.HEAPU32=P=new Uint32Array(e),ee=new Float32Array(e),te=new Float64Array(e),F=new BigInt64Array(e),ie=new BigUint64Array(e)}function fe(){oe=!0,i?_():$.sb()}function ge(e){throw x(e=`Aborted(`+e+`)`),S=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),g?.(e),e}function ve(){return{a:{ma:jd,gb:Ad,g:mt,J:xt,f:Lt,o:zt,h:Ut,ha:Gt,b:Kt,T:qt,Ha:tn,n:nn,$:sn,Xa:cn,Da:ln,Fa:un,Ya:dn,Va:fn,Oa:pn,Ua:mn,ka:hn,Ea:gn,Ba:_n,Wa:vn,Ca:yn,bb:bn,ea:En,wa:Dn,ua:In,da:Rn,O:Xn,H:Zn,va:nr,_:Cr,xa:Tr,Ra:Er,za:Yr,Ia:ti,sa:ni,fa:ri,Qa:Vr,_a:ii,R:Ai,r:$i,c:An,hb:go,y:_o,M:yo,D:bo,l:Oo,s:Ao,ib:Po,I:Jo,S:Yo,j:Zo,u:Qo,q:as,k:ss,La:cs,Ma:fs,Na:ps,Ja:ms,Ka:hs,ta:vs,db:ys,ab:Ss,v:Os,aa:As,ga:js,$a:bs,W:Ms,Za:Is,Aa:Hs,F:_s,U:Ks,la:Jc,ya:Yc,fb:Kc,eb:Xc,Sa:al,Ta:sl,Ga:Ue,V:cl,ja:ll,Pa:ul,ia:fl,kb:Wf,na:zf,lb:Uf,oa:Rf,G:Qd,d:Fd,t:Nd,w:Md,A:Gd,mb:Mf,K:Yd,x:Rd,pa:Ff,Y:Bf,ba:jf,nb:kf,ob:Df,P:Kd,qa:Cf,pb:$d,N:Xd,Z:Lf,e:Pd,B:Ld,m:Id,jb:Gf,p:Bd,z:Vd,C:zd,E:Hd,L:qd,qb:Zd,Q:Vf,ca:Jd,X:Hf,rb:Wd,ra:Ud,i:pl,a:tt,cb:Ve}}}async function be(){function e(e,n){var r=$=e.exports;e={};for(let[t,n]of Object.entries(r))typeof n==`function`?(r=oi(n),e[t]=r):e[t]=n;return $=e,$=function(){var e=$,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).tb=t(e.tb),e.Xb=n(e.Xb),e.Zb=t(e.Zb),e.lc=t(e.lc),e.mc=n(e.mc),e.qc=t(e.qc),e}(),Ke.push($._b),ml=(e=$).tb,gl=e.ub,t._OrtInit=e.vb,t._OrtGetLastError=e.wb,t._OrtCreateSessionOptions=e.xb,t._OrtAppendExecutionProvider=e.yb,t._OrtAddFreeDimensionOverride=e.zb,t._OrtAddSessionConfigEntry=e.Ab,t._OrtReleaseSessionOptions=e.Bb,t._OrtCreateSession=e.Cb,t._OrtReleaseSession=e.Db,t._OrtGetInputOutputCount=e.Eb,t._OrtGetInputOutputMetadata=e.Fb,t._OrtFree=e.Gb,t._OrtCreateTensor=e.Hb,t._OrtGetTensorData=e.Ib,t._OrtReleaseTensor=e.Jb,t._OrtCreateRunOptions=e.Kb,t._OrtAddRunConfigEntry=e.Lb,t._OrtReleaseRunOptions=e.Mb,t._OrtCreateBinding=e.Nb,t._OrtBindInput=e.Ob,t._OrtBindOutput=e.Pb,t._OrtClearBoundOutputs=e.Qb,t._OrtReleaseBinding=e.Rb,t._OrtRunWithBinding=e.Sb,t._OrtRun=e.Tb,t._OrtEndProfiling=e.Ub,t._JsepOutput=e.Vb,t._JsepGetNodeName=e.Wb,yl=e.Xb,q=t._free=e.Yb,tu=t._malloc=e.Zb,ru=e.ac,iu=e.bc,su=e.cc,lu=e.dc,du=e.ec,fu=e.fc,hu=e.gc,J=e.hc,gu=e.ic,vu=e.jc,Y=e.kc,yu=e.lc,Z=e.mc,Su=e.nc,Cu=e.oc,Tu=e.pc,Eu=e.qc,ku=e.rc,Au=e.sc,Mu=e.tc,Nu=e.uc,Lu=e.vc,zu=e.wc,Vu=e.xc,Wu=e.yc,Gu=e.zc,Ku=e.Ac,qu=e.Bc,Yu=e.Cc,Zu=e.Dc,ed=e.Ec,td=e.Fc,nd=e.Gc,rd=e.Hc,id=e.Ic,ad=e.Jc,od=e.Kc,sd=e.Lc,cd=e.Mc,ld=e.Nc,ud=e.Pc,dd=e.Qc,fd=e.$c,pd=e.ad,md=e.fd,hd=e.jd,gd=e.kd,_d=e.ld,vd=e.md,yd=e.nd,bd=e.od,xd=e.pd,Sd=e.qd,Cd=e.vd,wd=e.Sd,Td=e.Td,Ed=e.Ud,Dd=e.Vd,p=n,$}var n,r=ve();return t.instantiateWasm?new Promise(n=>{t.instantiateWasm(r,(t,r)=>{n(e(t,r))})}):i?e(new WebAssembly.Instance(p,ve()),p):(ae??=t.locateFile?t.locateFile?t.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,d):d+`ort-wasm-simd-threaded.jsep.wasm`:new URL(`/t/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm`,``+import.meta.url).href,n=await async function(e){var t=ae;if(!f&&!C(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){x(`wasm streaming compile failed: ${e}`),x(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!f)try{var t=await s(e);return new Uint8Array(t)}catch{}if(e==ae&&f)e=new Uint8Array(f);else{if(!c)throw`both async and sync fetching of the wasm failed`;e=c(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){x(`failed to asynchronously prepare wasm: ${e}`),ge(e)}}(t,e)}(r),e(n.instance,n.module))}class Ce{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var we=e=>{e.terminate(),e.onmessage=()=>{}},Te=[],Ee=0,De=null,Ne=e=>{We.length==0&&(et(),$e(We[0]));var t=We.pop();if(!t)return 6;Ge.push(t),qe[e.Rc]=t,t.Rc=e.Rc;var n={Sc:`run`,Md:e.Ld,bd:e.bd,Rc:e.Rc};return t.postMessage(n,e.rd),0},Ie=0,I=(e,t,...n)=>{var r,i=16*n.length,a=Z(),o=yu(i),s=o>>>3;for(r of n)typeof r==`bigint`?((w(),F)[s++>>>0]=1n,(w(),F)[s++>>>0]=r):((w(),F)[s++>>>0]=0n,(w(),te)[s++>>>0]=r);return e=su(e,0,i,o,t),Y(a),e};function Ve(e){if(i)return I(0,1,e);if(m=e,!(0<Ie)){for(var t of Ge)we(t);for(t of We)we(t);We=[],Ge=[],qe={},S=!0}l(0,new Ce(e))}function He(e){if(i)return I(1,0,e);Ue(e)}var Ue=e=>{if(m=e,i)throw He(e),`unwind`;Ve(e)},We=[],Ge=[],Ke=[],qe={},Ze=e=>{var t=e.Rc;delete qe[t],We.push(e),Ge.splice(Ge.indexOf(e),1),e.Rc=0,lu(t)};function Qe(){Ke.forEach(e=>e())}var $e=e=>new Promise(n=>{e.onmessage=r=>{var i=r.data;if(r=i.Sc,i.Zc&&i.Zc!=yl()){var a=qe[i.Zc];a?a.postMessage(i,i.rd):x(`Internal error! Worker sent a message "${r}" to target pthread ${i.Zc}, but that thread no longer exists!`)}else r===`checkMailbox`?Kr():r===`spawnThread`?Ne(i):r===`cleanupThread`?jr(()=>{Ze(qe[i.Nd])}):r===`loaded`?(e.loaded=!0,n(e)):i.target===`setimmediate`?e.postMessage(i):r===`uncaughtException`?e.onerror(i.error):r===`callHandler`?t[i.wd](...i.args):r&&x(`worker sent an unknown command ${r}`)},e.onerror=e=>{throw x(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var r,i=[];for(r of[])t.propertyIsEnumerable(r)&&i.push(r);e.postMessage({Sc:`load`,xd:i,Od:tt,Pd:p})});function et(){var e=new Worker((()=>{let e=URL;return import.meta.url>`file:`&&import.meta.url<`file;`?new e(`ort.all.bundle.min.mjs`,import.meta.url):new URL(import.meta.url)})(),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});We.push(e)}var tt,rt=(e,t)=>{Ie=0,e=Au(e,t),0<Ie?m=e:du(e)},at=[],ct=0;function mt(e){var t=new Ot(e>>>=0);return(w(),O)[t.Tc+12>>>0]==0&&(St(t,!0),ct--),Ct(t,!1),at.push(t),Eu(e)}var vt=0,xt=()=>{J(0,0);var e=at.pop();Su(e.cd),vt=0};function St(e,t){t=+!!t,(w(),O)[e.Tc+12>>>0]=t}function Ct(e,t){t=+!!t,(w(),O)[e.Tc+13>>>0]=t}class Ot{constructor(e){this.cd=e,this.Tc=e-24}}var jt=e=>{var t=vt;if(!t)return gu(0),0;var n=new Ot(t);(w(),P)[n.Tc+16>>>2>>>0]=t;var r=(w(),P)[n.Tc+4>>>2>>>0];if(!r)return gu(0),t;for(var i of e){if(i===0||i===r)break;if(Tu(i,r,n.Tc+16))return gu(i),t}return gu(r),t};function Lt(){return jt([])}function zt(e){return jt([e>>>0])}function Ut(e,t,n,r){return jt([e>>>0,t>>>0,n>>>0,r>>>0])}var Gt=()=>{var e=at.pop();e||ge(`no exception to throw`);var t=e.cd;throw(w(),O)[e.Tc+13>>>0]==0&&(at.push(e),Ct(e,!0),St(e,!1),ct++),Cu(t),vt=t};function Kt(e,t,n){var r=new Ot(e>>>=0);throw t>>>=0,n>>>=0,(w(),P)[r.Tc+16>>>2>>>0]=0,(w(),P)[r.Tc+4>>>2>>>0]=t,(w(),P)[r.Tc+8>>>2>>>0]=n,Cu(e),ct++,vt=e}var qt=()=>ct;function en(e,t,n,r){return i?I(2,1,e,t,n,r):tn(e,t,n,r)}function tn(e,t,n,r){if(e>>>=0,t>>>=0,n>>>=0,r>>>=0,!globalThis.SharedArrayBuffer)return 6;var a=[];return i&&a.length===0?en(e,t,n,r):(e={Ld:n,Rc:e,bd:r,rd:a},i?(e.Sc=`spawnThread`,postMessage(e,a),0):Ne(e))}function nn(e){throw vt||=e>>>0,vt}var rn=globalThis.TextDecoder&&new TextDecoder,an=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},on=(e,t=0,n,r)=>{if(16<(n=an(e,t>>>=0,n,r))-t&&e.buffer&&rn)return rn.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},R=(e,t,n)=>(e>>>=0)?on((w(),k),e,t,n):``;function sn(e,t,n){return i?I(3,1,e,t,n):0}function cn(e,t){if(i)return I(4,1,e,t)}function ln(e,t){if(i)return I(5,1,e,t)}function un(e,t,n){if(i)return I(6,1,e,t,n)}function dn(e,t,n){return i?I(7,1,e,t,n):0}function fn(e,t){if(i)return I(8,1,e,t)}function pn(e,t,n){if(i)return I(9,1,e,t,n)}function mn(e,t,n,r){if(i)return I(10,1,e,t,n,r)}function hn(e,t,n,r){if(i)return I(11,1,e,t,n,r)}function gn(e,t,n,r){if(i)return I(12,1,e,t,n,r)}function _n(e){if(i)return I(13,1,e)}function vn(e,t){if(i)return I(14,1,e,t)}function yn(e,t,n){if(i)return I(15,1,e,t,n)}var bn=()=>ge(``),z=e=>{e>>>=0;for(var t=``;;){var n=(w(),k)[e++>>>0];if(!n)return t;t+=String.fromCharCode(n)}},xn={},Sn={},Cn={},wn=class extends Error{constructor(e){super(e),this.name=`BindingError`}};function B(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new wn(`type "${r}" must have a positive integer typeid pointer`);if(Sn.hasOwnProperty(e)){if(n.yd)return;throw new wn(`Cannot register type '${r}' twice`)}Sn[e]=t,delete Cn[e],xn.hasOwnProperty(e)&&(t=xn[e],delete xn[e],t.forEach(e=>e()))}(e,t,n)}var Tn=(e,t,n)=>{switch(t){case 1:return n?e=>(w(),O)[e>>>0]:e=>(w(),k)[e>>>0];case 2:return n?e=>(w(),A)[e>>>1>>>0]:e=>(w(),j)[e>>>1>>>0];case 4:return n?e=>(w(),M)[e>>>2>>>0]:e=>(w(),P)[e>>>2>>>0];case 8:return n?e=>(w(),F)[e>>>3>>>0]:e=>(w(),ie)[e>>>3>>>0];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function En(e,t,n,r,i){e>>>=0,n>>>=0,t=z(t>>>0);let a=e=>e;if(r=r===0n){let e=8*n;a=t=>BigInt.asUintN(e,t),i=a(i)}B(e,{name:t,Oc:a,Vc:(e,t)=>(typeof t==`number`&&(t=BigInt(t)),t),Uc:Tn(t,n,!r),Wc:null})}function Dn(e,t,n,r){B(e>>>=0,{name:t=z(t>>>0),Oc:function(e){return!!e},Vc:function(e,t){return t?n:r},Uc:function(e){return this.Oc((w(),k)[e>>>0])},Wc:null})}var On=[],kn=[0,1,,1,null,1,!0,1,!1,1];function An(e){9<(e>>>=0)&&--kn[e+1]==0&&(kn[e]=void 0,On.push(e))}var U=e=>{if(!e)throw new wn(`Cannot use deleted val. handle = ${e}`);return kn[e]},G=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=On.pop()||kn.length;return kn[t]=e,kn[t+1]=1,t}};function Nn(e){return this.Oc((w(),P)[e>>>2>>>0])}var Pn={name:`emscripten::val`,Oc:e=>{var t=U(e);return An(e),t},Vc:(e,t)=>G(t),Uc:Nn,Wc:null};function In(e){return B(e>>>0,Pn)}var Ln=(e,t)=>{switch(t){case 4:return function(e){return this.Oc((w(),ee)[e>>>2>>>0])};case 8:return function(e){return this.Oc((w(),te)[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function Rn(e,t,n){n>>>=0,B(e>>>=0,{name:t=z(t>>>0),Oc:e=>e,Vc:(e,t)=>t,Uc:Ln(t,n),Wc:null})}function Xn(e,t,n,r,i){e>>>=0,n>>>=0,t=z(t>>>0);let a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o,i=a(i)}B(e,{name:t,Oc:a,Vc:(e,t)=>t,Uc:Tn(t,n,r!==0),Wc:null})}function Zn(e,t,n){function r(e){var t=(w(),P)[e>>>2>>>0];return e=(w(),P)[e+4>>>2>>>0],new i((w(),O).buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];B(e>>>=0,{name:n=z(n>>>0),Oc:r,Uc:r},{yd:!0})}var $n=(e,t,n)=>{var r=(w(),k);if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(t>=n)break;r[t++>>>0]=o}else if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6,r[t++>>>0]=128|63&o}else if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o,a++}}r[t>>>0]=0,e=t-i}else e=0;return e},tr=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t};function nr(e,t){B(e>>>=0,{name:t=z(t>>>0),Oc(e){var t=(w(),P)[e>>>2>>>0];return t=R(e+4,t,!0),q(e),t},Vc(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1))throw new wn(`Cannot pass non-string to std::string`);var r=n?tr(t):t.length,i=tu(4+r+1),a=i+4;return(w(),P)[i>>>2>>>0]=r,n?$n(t,a,r+1):(w(),k).set(t,a>>>0),e!==null&&e.push(q,i),i},Uc:Nn,Wc(e){q(e)}})}var rr=globalThis.TextDecoder?new TextDecoder(`utf-16le`):void 0,ir=(e,t,n)=>{if(e>>>=1,16<(t=an((w(),j),e,t/2,n))-e&&rr)return rr.decode((w(),j).slice(e,t));for(n=``;e<t;++e){var r=(w(),j)[e>>>0];n+=String.fromCharCode(r)}return n},or=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);(w(),A)[t>>>1>>>0]=a,t+=2}return(w(),A)[t>>>1>>>0]=0,t-r},dr=e=>2*e.length,pr=(e,t,n)=>{var r=``;e>>>=2;for(var i=0;!(i>=t/4);i++){var a=(w(),P)[e+i>>>0];if(!a&&!n)break;r+=String.fromCodePoint(a)}return r},hr=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.codePointAt(i);if(65535<a&&i++,(w(),M)[t>>>2>>>0]=a,(t+=4)+4>n)break}return(w(),M)[t>>>2>>>0]=0,t-r},xr=e=>{for(var t=0,n=0;n<e.length;++n)65535<e.codePointAt(n)&&n++,t+=4;return t};function Cr(e,t,n){if(e>>>=0,t>>>=0,n=z(n>>>=0),t===2)var r=ir,i=or,a=dr;else r=pr,i=hr,a=xr;B(e,{name:n,Oc:e=>{var n=(w(),P)[e>>>2>>>0];return n=r(e+4,n*t,!0),q(e),n},Vc:(e,r)=>{if(typeof r!=`string`)throw new wn(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=tu(4+o+t);return(w(),P)[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(q,s),s},Uc:Nn,Wc(e){q(e)}})}function Tr(e,t){B(e>>>=0,{zd:!0,name:t=z(t>>>0),Oc:()=>{},Vc:()=>{}})}function Er(e){ru(e>>>0,!r,1,!n,131072,!1),Qe()}var jr=e=>{if(!S)try{if(e(),!(0<Ie))try{i?yl()&&du(m):Ue(m)}catch(e){e instanceof Ce||e==`unwind`||l(0,e)}}catch(e){e instanceof Ce||e==`unwind`||l(0,e)}},Ir=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Vr(e){e>>>=0,Ir||(Atomics.waitAsync((w(),M),e>>>2,e).value.then(Kr),e+=128,Atomics.store((w(),M),e>>>2,1))}var Kr=()=>jr(()=>{var e=yl();e&&(Vr(e),hu())});function Yr(e,t){(e>>>=0)==t>>>0?setTimeout(Kr):i?postMessage({Zc:e,Sc:`checkMailbox`}):(e=qe[e])&&e.postMessage({Sc:`checkMailbox`})}var ei=[];function ti(e,t,n,r,i){for(t>>>=0,i>>>=0,ei.length=0,n=i>>>3,r=i+r>>>3;n<r;){var a=(w(),F)[n++>>>0]?(w(),F)[n++>>>0]:(w(),te)[n++>>>0];ei.push(a)}return(t?kd[t]:Od[e])(...ei)}var ni=()=>{Ie=0};function ri(e){e>>>=0,i?postMessage({Sc:`cleanupThread`,Nd:e}):Ze(qe[e])}function ii(e){}var ai=e=>{try{e()}catch(e){ge(e)}};function oi(e){var t=(...t)=>{vi.push(e);try{return e(...t)}finally{S||(vi.pop(),K&&si===1&&vi.length===0&&(si=0,Ie+=1,ai(Td),typeof Fibers<`u`&&Fibers.Zd()))}};return wi.set(e,t),t}var si=0,K=null,ui=0,vi=[],xi=new Map,Si=new Map,wi=new Map,Ti=0,Ei=null,Oi=[],ki=e=>function(e){if(!S){if(si===0){var t=!1,n=!1;e((e=0)=>{if(!S&&(ui=e,t=!0,n)){si=2,ai(()=>Ed(K)),typeof MainLoop<`u`&&MainLoop.ud&&MainLoop.resume(),e=!1;try{var r=function(){var e=(w(),M)[K+8>>>2>>>0];return e=Si.get(e),e=wi.get(e),--Ie,e()}()}catch(t){r=t,e=!0}var i=!1;if(!K){var a=Ei;a&&(Ei=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(si=1,K=function(){var e=tu(65548),t=e+12;if((w(),P)[e>>>2>>>0]=t,(w(),P)[e+4>>>2>>>0]=t+65536,t=vi[0],!xi.has(t)){var n=Ti++;xi.set(t,n),Si.set(n,t)}return t=xi.get(t),(w(),M)[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.ud&&MainLoop.pause(),ai(()=>wd(K)))}else si===2?(si=0,ai(Dd),q(K),K=null,Oi.forEach(jr)):ge(`invalid state: ${si}`);return ui}}(t=>{e().then(t)});function Ai(e){return e>>>=0,ki(async()=>G(await U(e)))}var Ni=[],Pi=e=>{var t=Ni.length;return Ni.push(e),t},Ii=(e,t)=>{for(var n=Array(e),r=0;r<e;++r){var i=r,a=(w(),P)[t+4*r>>>2>>>0],o=Sn[a];if(o===void 0)throw e=`parameter ${r}`,a=ml(a),t=z(a),q(a),new wn(`${e} has unknown type ${t}`);n[i]=o}return n},Li=(e,t,n)=>{var r=[];return e=e(r,n),r.length&&((w(),P)[t>>>2>>>0]=G(r)),e},Ri={},zi=e=>{var t=Ri[e];return t===void 0?z(e):t};function $i(e,t,n){var[r,...i]=Ii(e,t>>>0);t=r.Vc.bind(r);var a=i.map(e=>e.Uc.bind(e));e--;var o={toValue:U};switch(e=a.map((e,t)=>{var n=`argFromPtr${t}`;return o[n]=e,`${n}(args${t?`+`+8*t:``})`}),n){case 0:var s=`toValue(handle)`;break;case 2:s=`new (toValue(handle))`;break;case 3:s=``;break;case 1:o.getStringOrSymbol=zi,s=`toValue(handle)[getStringOrSymbol(methodName)]`}return s+=`(${e})`,r.zd||(o.toReturnWire=t,o.emval_returnValue=Li,s=`return emval_returnValue(toReturnWire, destructorsRef, ${s})`),s=`return function (handle, methodName, destructorsRef, args) {
  ${s}
  }`,n=Function(Object.keys(o),s)(...Object.values(o)),s=`methodCaller<(${i.map(e=>e.name)}) => ${r.name}>`,Pi(Object.defineProperty(n,`name`,{value:s}))}function go(e,t){return t>>>=0,(e=U(e>>>0))==U(t)}function _o(e){return(e>>>=0)?(e=zi(e),G(globalThis[e])):G(globalThis)}function yo(e){return e=zi(e>>>0),G(t[e])}function bo(e,t){return t>>>=0,e=U(e>>>0),t=U(t),G(e[t])}function Oo(e){9<(e>>>=0)&&(kn[e+1]+=1)}function Ao(e,t,n,r,i){return Ni[e>>>0](t>>>0,n>>>0,r>>>0,i>>>0)}function Po(e,t,n,r,i){return Ao(e>>>0,t>>>0,n>>>0,r>>>0,i>>>0)}function Jo(){return G([])}function Yo(e){e=U(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return G(t)}function Zo(e){return G(zi(e>>>0))}function Qo(){return G({})}function as(e){for(var t=U(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}An(e)}function ss(e,t,n){t>>>=0,n>>>=0,e=U(e>>>0),t=U(t),n=U(n),e[t]=n}function cs(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),M)[t>>>2>>>0]=e.getUTCSeconds(),(w(),M)[t+4>>>2>>>0]=e.getUTCMinutes(),(w(),M)[t+8>>>2>>>0]=e.getUTCHours(),(w(),M)[t+12>>>2>>>0]=e.getUTCDate(),(w(),M)[t+16>>>2>>>0]=e.getUTCMonth(),(w(),M)[t+20>>>2>>>0]=e.getUTCFullYear()-1900,(w(),M)[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),M)[t+28>>>2>>>0]=e}var ls=e=>e%4==0&&(e%100!=0||e%400==0),us=[0,31,60,91,121,152,182,213,244,274,305,335],ds=[0,31,59,90,120,151,181,212,243,273,304,334];function fs(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),M)[t>>>2>>>0]=e.getSeconds(),(w(),M)[t+4>>>2>>>0]=e.getMinutes(),(w(),M)[t+8>>>2>>>0]=e.getHours(),(w(),M)[t+12>>>2>>>0]=e.getDate(),(w(),M)[t+16>>>2>>>0]=e.getMonth(),(w(),M)[t+20>>>2>>>0]=e.getFullYear()-1900,(w(),M)[t+24>>>2>>>0]=e.getDay();var n=(ls(e.getFullYear())?us:ds)[e.getMonth()]+e.getDate()-1|0;(w(),M)[t+28>>>2>>>0]=n,(w(),M)[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),(w(),M)[t+32>>>2>>>0]=e}function ps(e){e>>>=0;var t=new Date((w(),M)[e+20>>>2>>>0]+1900,(w(),M)[e+16>>>2>>>0],(w(),M)[e+12>>>2>>>0],(w(),M)[e+8>>>2>>>0],(w(),M)[e+4>>>2>>>0],(w(),M)[e>>>2>>>0],0),n=(w(),M)[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?(w(),M)[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),(w(),M)[e+24>>>2>>>0]=t.getDay(),n=(ls(t.getFullYear())?us:ds)[t.getMonth()]+t.getDate()-1|0,(w(),M)[e+28>>>2>>>0]=n,(w(),M)[e>>>2>>>0]=t.getSeconds(),(w(),M)[e+4>>>2>>>0]=t.getMinutes(),(w(),M)[e+8>>>2>>>0]=t.getHours(),(w(),M)[e+12>>>2>>>0]=t.getDate(),(w(),M)[e+16>>>2>>>0]=t.getMonth(),(w(),M)[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function ms(e,t,n,r,a,o,s){return i?I(16,1,e,t,n,r,a,o,s):-52}function hs(e,t,n,r,a,o){if(i)return I(17,1,e,t,n,r,a,o)}var gs={},_s=()=>performance.timeOrigin+performance.now();function vs(e,t){return i?I(18,1,e,t):(gs[e]&&(clearTimeout(gs[e].id),delete gs[e]),t&&(gs[e]={id:setTimeout(()=>{delete gs[e],jr(()=>fu(e,performance.timeOrigin+performance.now()))},t),Yd:t}),0)}function ys(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);(w(),P)[e>>>2>>>0]=60*o,(w(),M)[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?($n(e,n,17),$n(t,r,17)):($n(e,r,17),$n(t,n,17))}var bs=()=>Date.now(),xs=1;function Ss(e,t,n){if(n>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!xs)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(w(),F)[n>>>3>>>0]=BigInt(e),0}var ws=[],Ts=(e,t)=>{ws.length=0;for(var n;n=(w(),k)[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,ws.push(n==112?(w(),P)[t>>>2>>>0]:n==106?(w(),F)[t>>>3>>>0]:n==105?(w(),M)[t>>>2>>>0]:(w(),te)[t>>>3>>>0]),t+=r?8:4}return ws};function Os(e,t,n){return e>>>=0,t=Ts(t>>>0,n>>>0),kd[e](...t)}function As(e,t,n){return e>>>=0,t=Ts(t>>>0,n>>>0),kd[e](...t)}var js=()=>{};function Ms(e,t){return x(R(e>>>0,t>>>0))}var Is=()=>{throw Ie+=1,`unwind`};function Hs(){return 4294901760}var Ks=()=>navigator.hardwareConcurrency,Ys={},$s=e=>{var t;return(t=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(e))?+t[1]:(t=/:(\d+):\d+(?:\)|$)/.exec(e))?2147483648|t[1]:0},jc=e=>{for(var t of e)(e=$s(t))&&(Ys[e]=t)};function Kc(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),jc(e),Ys.gd=$s(e[3]),Ys.Jd=e,Ys.gd}function Jc(e){if(!(e=Ys[e>>>0]))return 0;var t;if(t=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(e))e=t[1];else if(t=/^\s+at (.*) \(.*\)$/.exec(e))e=t[1];else{if(!(t=/^(.+?)@/.exec(e)))return 0;e=t[1]}q(Jc.hd??0),t=tr(e)+1;var n=tu(t);return n&&$n(e,n,t),Jc.hd=n,Jc.hd}function Yc(e){e>>>=0;var t=(w(),k).length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-tt.buffer.byteLength+65535)/65536|0;try{tt.grow(r),de();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}function Xc(e,t,n){if(e>>>=0,t>>>=0,Ys.gd==e)var r=Ys.Jd;else (r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),jc(r);for(var i=3;r[i]&&$s(r[i])!=e;)++i;for(e=0;e<n&&r[e+i];++e)(w(),M)[t+4*e>>>2>>>0]=$s(r[e+i]);return e}var Zc,Qc={},el=()=>{if(!Zc){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in Qc)Qc[e]===void 0?delete t[e]:t[e]=Qc[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);Zc=n}return Zc};function al(e,t){if(i)return I(19,1,e,t);e>>>=0,t>>>=0;var n,r=0,a=0;for(n of el()){var o=t+r;(w(),P)[e+a>>>2>>>0]=o,r+=$n(n,o,1/0)+1,a+=4}return 0}function sl(e,t){if(i)return I(20,1,e,t);e>>>=0,t>>>=0;var n=el();for(var r of((w(),P)[e>>>2>>>0]=n.length,e=0,n))e+=tr(r)+1;return(w(),P)[t>>>2>>>0]=e,0}function cl(e){return i?I(21,1,e):52}function ll(e,t,n,r){return i?I(22,1,e,t,n,r):52}function ul(e,t,n,r){return i?I(23,1,e,t,n,r):70}var dl=[null,[],[]];function fl(e,t,n,r){if(i)return I(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var a=0,o=0;o<n;o++){var s=(w(),P)[t>>>2>>>0],c=(w(),P)[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=e,d=(w(),k)[s+l>>>0],f=dl[u];d===0||d===10?((u===1?b:x)(on(f)),f.length=0):f.push(d)}a+=c}return(w(),P)[r>>>2>>>0]=a,0}function pl(e){return e>>>0}i||function(){for(var e=t.numThreads-1;e--;)et();Te.push(async()=>{var e=async function(){if(!i)return Promise.all(We.map($e))}();Ee++,await e,--Ee==0&&De&&(e=De,De=null,e())})}(),i||(tt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),de()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>Z(),t.stackRestore=e=>Y(e),t.stackAlloc=e=>yu(e),t.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:(w(),O)[e>>>0]=t;break;case`i16`:(w(),A)[e>>>1>>>0]=t;break;case`i32`:(w(),M)[e>>>2>>>0]=t;break;case`i64`:(w(),F)[e>>>3>>>0]=BigInt(t);break;case`float`:(w(),ee)[e>>>2>>>0]=t;break;case`double`:(w(),te)[e>>>3>>>0]=t;break;case`*`:(w(),P)[e>>>2>>>0]=t;break;default:ge(`invalid type for setValue: ${n}`)}},t.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return(w(),O)[e>>>0];case`i16`:return(w(),A)[e>>>1>>>0];case`i32`:return(w(),M)[e>>>2>>>0];case`i64`:return(w(),F)[e>>>3>>>0];case`float`:return(w(),ee)[e>>>2>>>0];case`double`:return(w(),te)[e>>>3>>>0];case`*`:return(w(),P)[e>>>2>>>0];default:ge(`invalid type for getValue: ${t}`)}},t.UTF8ToString=R,t.stringToUTF8=$n,t.lengthBytesUTF8=tr;var ml,gl,yl,q,tu,ru,iu,su,lu,du,fu,hu,J,gu,vu,Y,yu,Z,Su,Cu,Tu,Eu,ku,Au,Mu,Nu,Lu,zu,Vu,Wu,Gu,Ku,qu,Yu,Zu,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,$,Od=[Ve,He,en,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,ms,hs,vs,al,sl,cl,ll,ul,fl],kd={973212:(e,n,r,i,a)=>{if(t===void 0||!t.Xc)return 1;if((e=R(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=t.Xc.get(e)))return 2;if(n=Number(n>>>0),r=Number(r>>>0),i=Number(i>>>0),n+r>e.byteLength)return 3;try{let o=e.subarray(n,n+r);switch(a){case 0:(w(),k).set(o,i>>>0);break;case 1:t.Qd?t.Qd(i,o):t.Id(i,o);break;default:return 4}return 0}catch{return 4}},974036:(e,n,r)=>{t.td(e,(w(),k).subarray(n>>>0,n+r>>>0))},974100:()=>t.Wd(),974142:e=>{t.sd(e)},974179:()=>{t.Bd()},974210:()=>{t.Cd()},974239:()=>{t.Gd()},974264:e=>t.Ad(e),974297:e=>t.Ed(e),974329:(e,n,r)=>{t.ed(Number(e),Number(n),Number(r),!0)},974392:(e,n,r)=>{t.ed(Number(e),Number(n),Number(r))},974449:()=>typeof wasmOffsetConverter<`u`,974506:e=>{t.$b(`Abs`,e,void 0)},974557:e=>{t.$b(`Neg`,e,void 0)},974608:e=>{t.$b(`Floor`,e,void 0)},974661:e=>{t.$b(`Ceil`,e,void 0)},974713:e=>{t.$b(`Reciprocal`,e,void 0)},974771:e=>{t.$b(`Sqrt`,e,void 0)},974823:e=>{t.$b(`Exp`,e,void 0)},974874:e=>{t.$b(`Erf`,e,void 0)},974925:e=>{t.$b(`Sigmoid`,e,void 0)},974980:(e,n,r)=>{t.$b(`HardSigmoid`,e,{alpha:n,beta:r})},975059:e=>{t.$b(`Log`,e,void 0)},975110:e=>{t.$b(`Sin`,e,void 0)},975161:e=>{t.$b(`Cos`,e,void 0)},975212:e=>{t.$b(`Tan`,e,void 0)},975263:e=>{t.$b(`Asin`,e,void 0)},975315:e=>{t.$b(`Acos`,e,void 0)},975367:e=>{t.$b(`Atan`,e,void 0)},975419:e=>{t.$b(`Sinh`,e,void 0)},975471:e=>{t.$b(`Cosh`,e,void 0)},975523:e=>{t.$b(`Asinh`,e,void 0)},975576:e=>{t.$b(`Acosh`,e,void 0)},975629:e=>{t.$b(`Atanh`,e,void 0)},975682:e=>{t.$b(`Tanh`,e,void 0)},975734:e=>{t.$b(`Not`,e,void 0)},975785:(e,n,r)=>{t.$b(`Clip`,e,{min:n,max:r})},975854:e=>{t.$b(`Clip`,e,void 0)},975906:(e,n)=>{t.$b(`Elu`,e,{alpha:n})},975964:e=>{t.$b(`Gelu`,e,void 0)},976016:e=>{t.$b(`Relu`,e,void 0)},976068:(e,n)=>{t.$b(`LeakyRelu`,e,{alpha:n})},976132:(e,n)=>{t.$b(`ThresholdedRelu`,e,{alpha:n})},976202:(e,n)=>{t.$b(`Cast`,e,{to:n})},976260:e=>{t.$b(`Add`,e,void 0)},976311:e=>{t.$b(`Sub`,e,void 0)},976362:e=>{t.$b(`Mul`,e,void 0)},976413:e=>{t.$b(`Div`,e,void 0)},976464:e=>{t.$b(`Pow`,e,void 0)},976515:e=>{t.$b(`Equal`,e,void 0)},976568:e=>{t.$b(`Greater`,e,void 0)},976623:e=>{t.$b(`GreaterOrEqual`,e,void 0)},976685:e=>{t.$b(`Less`,e,void 0)},976737:e=>{t.$b(`LessOrEqual`,e,void 0)},976796:(e,n,r,i,a)=>{t.$b(`ReduceMean`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},976971:(e,n,r,i,a)=>{t.$b(`ReduceMax`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977145:(e,n,r,i,a)=>{t.$b(`ReduceMin`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977319:(e,n,r,i,a)=>{t.$b(`ReduceProd`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977494:(e,n,r,i,a)=>{t.$b(`ReduceSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977668:(e,n,r,i,a)=>{t.$b(`ReduceL1`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977841:(e,n,r,i,a)=>{t.$b(`ReduceL2`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978014:(e,n,r,i,a)=>{t.$b(`ReduceLogSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978191:(e,n,r,i,a)=>{t.$b(`ReduceSumSquare`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978371:(e,n,r,i,a)=>{t.$b(`ReduceLogSumExp`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978551:e=>{t.$b(`Where`,e,void 0)},978604:(e,n,r)=>{t.$b(`Transpose`,e,{perm:n?Array.from((w(),M).subarray(Number(n)>>>0,Number(r)>>>0)):[]})},978728:(e,n,r,i)=>{t.$b(`DepthToSpace`,e,{blocksize:n,mode:R(r),format:i?`NHWC`:`NCHW`})},978861:(e,n,r,i)=>{t.$b(`DepthToSpace`,e,{blocksize:n,mode:R(r),format:i?`NHWC`:`NCHW`})},978994:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.$b(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),O)[u>>>0],outputPadding:d?Array.from((w(),M).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),M).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:R(h)})},979427:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),M).subarray(Number(r)>>>0,2+(Number(r)>>>0)>>>0)),group:i,kernelShape:Array.from((w(),M).subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from((w(),M).subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from((w(),M).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!(w(),O)[l>>>0],outputPadding:u?Array.from((w(),M).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),M).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:R(m)})},980088:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.$b(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),O)[u>>>0],outputPadding:d?Array.from((w(),M).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),M).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:R(h)})},980521:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),M).subarray(Number(r)>>>0,2+(Number(r)>>>0)>>>0)),group:i,kernelShape:Array.from((w(),M).subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from((w(),M).subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from((w(),M).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!(w(),O)[l>>>0],outputPadding:u?Array.from((w(),M).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),M).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:R(m)})},981182:(e,n)=>{t.$b(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},981273:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),M).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),M).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),M).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),M).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},981752:(e,n)=>{t.$b(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},981843:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),M).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),M).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),M).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),M).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},982322:(e,n)=>{t.$b(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},982409:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),M).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),M).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),M).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),M).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},982884:(e,n)=>{t.$b(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},982971:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),M).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),M).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),M).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),M).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},983446:(e,n,r,i,a)=>{t.$b(`Gemm`,e,{alpha:n,beta:r,transA:i,transB:a})},983550:e=>{t.$b(`MatMul`,e,void 0)},983604:(e,n,r,i)=>{t.$b(`ArgMax`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},983712:(e,n,r,i)=>{t.$b(`ArgMin`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},983820:(e,n)=>{t.$b(`Softmax`,e,{axis:n})},983883:(e,n)=>{t.$b(`Concat`,e,{axis:n})},983943:(e,n,r,i,a)=>{t.$b(`Split`,e,{axis:n,numOutputs:r,splitSizes:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},984099:e=>{t.$b(`Expand`,e,void 0)},984153:(e,n)=>{t.$b(`Gather`,e,{axis:Number(n)})},984224:(e,n)=>{t.$b(`GatherElements`,e,{axis:Number(n)})},984303:(e,n)=>{t.$b(`GatherND`,e,{batch_dims:Number(n)})},984382:(e,n,r,i,a,o,s,c,l,u,d)=>{t.$b(`Resize`,e,{antialias:n,axes:r?Array.from((w(),M).subarray(Number(r)>>>0,Number(i)>>>0)):[],coordinateTransformMode:R(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:R(l),mode:R(u),nearestMode:R(d)})},984744:(e,n,r,i,a,o,s)=>{t.$b(`Slice`,e,{starts:n?Array.from((w(),M).subarray(Number(n)>>>0,Number(r)>>>0)):[],ends:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from((w(),M).subarray(Number(o)>>>0,Number(s)>>>0)):[]})},985008:e=>{t.$b(`Tile`,e,void 0)},985060:(e,n,r)=>{t.$b(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},985174:(e,n,r)=>{t.$b(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},985288:e=>{t.$b(`Range`,e,void 0)},985341:(e,n)=>{t.$b(`Einsum`,e,{equation:R(n)})},985422:(e,n,r,i,a)=>{t.$b(`Pad`,e,{mode:n,value:r,pads:i?Array.from((w(),M).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},985565:(e,n,r,i,a,o)=>{t.$b(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},985734:(e,n,r,i,a,o)=>{t.$b(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},985903:(e,n,r)=>{t.$b(`CumSum`,e,{exclusive:Number(n),reverse:Number(r)})},986e3:(e,n,r)=>{t.$b(`DequantizeLinear`,e,{axis:n,blockSize:r})},986090:(e,n,r,i,a)=>{t.$b(`GridSample`,e,{align_corners:n,mode:R(r),padding_mode:R(i),format:a?`NHWC`:`NCHW`})},986260:(e,n,r,i,a)=>{t.$b(`GridSample`,e,{align_corners:n,mode:R(r),padding_mode:R(i),format:a?`NHWC`:`NCHW`})},986430:(e,n)=>{t.$b(`ScatterND`,e,{reduction:R(n)})},986515:(e,n,r,i,a,o,s,c,l)=>{t.$b(`Attention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from((w(),M).subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},986787:e=>{t.$b(`BiasAdd`,e,void 0)},986842:e=>{t.$b(`BiasSplitGelu`,e,void 0)},986903:e=>{t.$b(`FastGelu`,e,void 0)},986959:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{t.$b(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:n,dilations:r?Array.from((w(),M).subarray(Number(r)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from((w(),M).subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from((w(),M).subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from((w(),M).subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!(w(),O)[Number(p)>>>0],activation:R(m),activation_params:h?Array.from((w(),ee).subarray(Number(h)>>>0,Number(g)>>>0)):[]})},987543:e=>{t.$b(`Gelu`,e,void 0)},987595:(e,n,r,i,a,o,s,c,l)=>{t.$b(`GroupQueryAttention`,e,{numHeads:n,kvNumHeads:r,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},987812:(e,n,r,i)=>{t.$b(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},987923:(e,n,r,i)=>{t.$b(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},988034:(e,n,r,i,a,o)=>{t.$b(`MatMulNBits`,e,{k:n,n:r,accuracyLevel:i,bits:a,blockSize:o})},988161:(e,n,r,i,a,o)=>{t.$b(`MultiHeadAttention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o})},988320:(e,n)=>{t.$b(`QuickGelu`,e,{alpha:n})},988384:(e,n,r,i,a)=>{t.$b(`RotaryEmbedding`,e,{interleaved:!!n,numHeads:r,rotaryEmbeddingDim:i,scale:a})},988523:(e,n,r)=>{t.$b(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},988625:(e,n,r)=>{t.$b(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},988727:(e,n,r,i)=>{t.$b(`GatherBlockQuantized`,e,{gatherAxis:n,quantizeAxis:r,blockSize:i})},988848:e=>{t.Fd(e)},988882:(e,n)=>t.Hd(Number(e),Number(n),t.Yc.Kd,t.Yc.errors)};function Ad(e,n,r){return ki(async()=>{await t.Dd(Number(e),Number(n),Number(r))})}function jd(){return typeof wasmOffsetConverter<`u`}function Md(e,t,n,r){var i=Z();try{return Ku(e,t,n,r)}catch(e){if(Y(i),e!==e+0)throw e;J(1,0)}}function Nd(e,t,n){var r=Z();try{return zu(e,t,n)}catch(e){if(Y(r),e!==e+0)throw e;J(1,0)}}function Pd(e){var t=Z();try{Mu(e)}catch(e){if(Y(t),e!==e+0)throw e;J(1,0)}}function Fd(e,t){var n=Z();try{return Au(e,t)}catch(e){if(Y(n),e!==e+0)throw e;J(1,0)}}function Id(e,t,n){var r=Z();try{ku(e,t,n)}catch(e){if(Y(r),e!==e+0)throw e;J(1,0)}}function Ld(e,t){var n=Z();try{qu(e,t)}catch(e){if(Y(n),e!==e+0)throw e;J(1,0)}}function Rd(e,t,n,r,i,a,o){var s=Z();try{return Wu(e,t,n,r,i,a,o)}catch(e){if(Y(s),e!==e+0)throw e;J(1,0)}}function zd(e,t,n,r,i,a){var o=Z();try{Nu(e,t,n,r,i,a)}catch(e){if(Y(o),e!==e+0)throw e;J(1,0)}}function Bd(e,t,n,r){var i=Z();try{Gu(e,t,n,r)}catch(e){if(Y(i),e!==e+0)throw e;J(1,0)}}function Vd(e,t,n,r,i){var a=Z();try{Lu(e,t,n,r,i)}catch(e){if(Y(a),e!==e+0)throw e;J(1,0)}}function Hd(e,t,n,r,i,a,o){var s=Z();try{Zu(e,t,n,r,i,a,o)}catch(e){if(Y(s),e!==e+0)throw e;J(1,0)}}function Ud(e,t,n,r,i,a,o){var s=Z();try{ed(e,t,n,r,i,a,o)}catch(e){if(Y(s),e!==e+0)throw e;J(1,0)}}function Wd(e,t,n,r,i,a,o,s){var c=Z();try{id(e,t,n,r,i,a,o,s)}catch(e){if(Y(c),e!==e+0)throw e;J(1,0)}}function Gd(e,t,n,r,i){var a=Z();try{return Yu(e,t,n,r,i)}catch(e){if(Y(a),e!==e+0)throw e;J(1,0)}}function Kd(e,t,n){var r=Z();try{return ad(e,t,n)}catch(e){if(Y(r),e!==e+0)throw e;J(1,0)}}function qd(e,t,n,r,i,a,o,s){var c=Z();try{od(e,t,n,r,i,a,o,s)}catch(e){if(Y(c),e!==e+0)throw e;J(1,0)}}function Jd(e,t,n,r,i,a,o,s,c,l,u,d){var f=Z();try{td(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(Y(f),e!==e+0)throw e;J(1,0)}}function Yd(e,t,n,r,i,a){var o=Z();try{return nd(e,t,n,r,i,a)}catch(e){if(Y(o),e!==e+0)throw e;J(1,0)}}function Xd(e,t,n){var r=Z();try{return sd(e,t,n)}catch(e){if(Y(r),e!==e+0)throw e;return J(1,0),0n}}function Zd(e,t,n,r,i,a,o,s,c){var l=Z();try{Vu(e,t,n,r,i,a,o,s,c)}catch(e){if(Y(l),e!==e+0)throw e;J(1,0)}}function Qd(e){var t=Z();try{return cd(e)}catch(e){if(Y(t),e!==e+0)throw e;J(1,0)}}function $d(e,t){var n=Z();try{return Cd(e,t)}catch(e){if(Y(n),e!==e+0)throw e;return J(1,0),0n}}function Cf(e){var t=Z();try{return ld(e)}catch(e){if(Y(t),e!==e+0)throw e;return J(1,0),0n}}function Df(e,t,n,r){var i=Z();try{return hd(e,t,n,r)}catch(e){if(Y(i),e!==e+0)throw e;J(1,0)}}function kf(e,t,n,r,i){var a=Z();try{return gd(e,t,n,r,i)}catch(e){if(Y(a),e!==e+0)throw e;J(1,0)}}function jf(e,t,n,r,i,a){var o=Z();try{return _d(e,t,n,r,i,a)}catch(e){if(Y(o),e!==e+0)throw e;J(1,0)}}function Mf(e,t,n,r,i,a){var o=Z();try{return vd(e,t,n,r,i,a)}catch(e){if(Y(o),e!==e+0)throw e;J(1,0)}}function Ff(e,t,n,r,i,a,o,s){var c=Z();try{return rd(e,t,n,r,i,a,o,s)}catch(e){if(Y(c),e!==e+0)throw e;J(1,0)}}function Lf(e,t,n,r,i){var a=Z();try{return yd(e,t,n,r,i)}catch(e){if(Y(a),e!==e+0)throw e;return J(1,0),0n}}function Rf(e,t,n,r){var i=Z();try{return bd(e,t,n,r)}catch(e){if(Y(i),e!==e+0)throw e;J(1,0)}}function zf(e,t,n,r){var i=Z();try{return xd(e,t,n,r)}catch(e){if(Y(i),e!==e+0)throw e;J(1,0)}}function Bf(e,t,n,r,i,a,o,s,c,l,u,d){var f=Z();try{return Sd(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(Y(f),e!==e+0)throw e;J(1,0)}}function Vf(e,t,n,r,i,a,o,s,c,l,u){var d=Z();try{pd(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(Y(d),e!==e+0)throw e;J(1,0)}}function Hf(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=Z();try{md(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if(Y(g),e!==e+0)throw e;J(1,0)}}function Uf(e,t,n){var r=Z();try{return ud(e,t,n)}catch(e){if(Y(r),e!==e+0)throw e;J(1,0)}}function Wf(e,t,n){var r=Z();try{return dd(e,t,n)}catch(e){if(Y(r),e!==e+0)throw e;J(1,0)}}function Gf(e,t,n,r){var i=Z();try{fd(e,t,n,r)}catch(e){if(Y(i),e!==e+0)throw e;J(1,0)}}function Kf(){if(0<Ee)De=Kf;else if(i)h?.(t),fe();else{for(var e=Te;0<e.length;)e.shift()(t);0<Ee?De=Kf:(t.calledRun=!0,S||(fe(),h?.(t)))}}return i||($=await be(),Kf()),t.PTR_SIZE=4,oe?t:new Promise((e,t)=>{h=e,g=t})}var e3,t3,Qy=N(()=>{e3=Jy,t3=globalThis.self?.name?.startsWith(`em-pthread`),t3&&Jy()}),n_,ac,n3,Pt,r_,ic,r3,o3,o_,i3,e_,i_,t_,a_,ga=N(()=>{ma(),n_=typeof location>`u`?void 0:location.origin,ac=import.meta.url>`file:`&&import.meta.url<`file;`,n3=()=>ac?new URL(new URL(`ort.all.bundle.min.mjs`,import.meta.url).href,n_).href:import.meta.url,Pt=n3(),r_=()=>{if(Pt&&!Pt.startsWith(`blob:`))return Pt.substring(0,Pt.lastIndexOf(`/`)+1)},ic=(e,t)=>{try{let n=t??Pt;return(n?new URL(e,n):new URL(e)).origin===n_}catch{return!1}},r3=(e,t)=>{let n=t??Pt;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},o3=(e,t)=>`${t??`./`}${e}`,o_=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},i3=async e=>(await __vitePreload(async()=>{let{default:t}=await import(e);return{default:t}},[])).default,e_=(Zy(),Xr(Xy)).default,i_=async()=>{if(!Pt)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(ic(Pt))return[void 0,e_()];let e=await o_(Pt);return[e,e_(e)]},t_=(Qy(),Xr(Yy)).default,a_=async(e,t,n,r)=>{let i=t_&&!(e||t);if(i)if(Pt)i=ic(Pt)||r&&!n;else if(r&&!n)i=!0;else throw Error(`cannot determine the script source URL.`);if(i)return[void 0,t_];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??r3(r,t),a=n&&i&&!ic(i,t),o=a?await o_(i):i??o3(r,t);return[a?o:void 0,await i3(o)]}}}),sc,uc,Sa,s_,a3,s3,u3,ba,Me,br=N(()=>{ga(),uc=!1,Sa=!1,s_=!1,a3=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},s3=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},u3=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ba=async e=>{if(uc)return Promise.resolve();if(Sa)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(s_)throw Error(`previous call to 'initializeWebAssembly()' failed.`);Sa=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd===`relaxed`){if(!u3())throw Error(`Relaxed WebAssembly SIMD is not supported in the current environment.`)}else if(!s3())throw Error(`WebAssembly SIMD is not supported in the current environment.`)}let r=a3();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await a_(s,a,n>1,!!u||!!l),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u,r.locateFile=e=>e;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=r_();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{Sa=!1,uc=!0,sc=t,e(),d&&URL.revokeObjectURL(d)},e=>{Sa=!1,s_=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Me=()=>{if(uc&&sc)return sc;throw Error(`WebAssembly is not initialized yet.`)}}),Et,Vo,Oe,$a=N(()=>{br(),Et=(e,t)=>{let n=Me(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Vo=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)Vo(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},Oe=e=>{let t=Me(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),u_,l_=N(()=>{br(),$a(),u_=e=>{let t=Me(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Et(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Oe(`Can't create run options.`),e?.extra!==void 0&&Vo(e.extra,``,new WeakSet,(e,i)=>{let a=Et(e,r),o=Et(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&Oe(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),l3,c3,d3,uo,p3,c_,d_=N(()=>{br(),$a(),l3=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`layout`:return 3;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},c3=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},d3=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},uo=(e,t,n,r)=>{let i=Et(t,r),a=Et(n,r);Me()._OrtAddSessionConfigEntry(e,i,a)!==0&&Oe(`Can't set a session config entry: ${t} - ${n}.`)},p3=async(e,t,n)=>{let r=t.executionProviders;for(let t of r){let r=typeof t==`string`?t:t.name,i=[];switch(r){case`webnn`:if(r=`WEBNN`,uo(e,`session.disable_quant_qdq`,`1`,n),uo(e,`session.disable_qdq_constant_folding`,`1`,n),typeof t!=`string`){let r=t?.deviceType;r&&uo(e,`deviceType`,r,n)}break;case`webgpu`:if(r=`JS`,typeof t!=`string`){let r=t;if(r?.preferredLayout){if(r.preferredLayout!==`NCHW`&&r.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${r.preferredLayout}`);uo(e,`preferredLayout`,r.preferredLayout,n)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${r}`)}let a=Et(r,n),o=i.length,s=0,c=0;if(o>0){s=Me()._malloc(o*Me().PTR_SIZE),n.push(s),c=Me()._malloc(o*Me().PTR_SIZE),n.push(c);for(let e=0;e<o;e++)Me().setValue(s+e*Me().PTR_SIZE,i[e][0],`*`),Me().setValue(c+e*Me().PTR_SIZE,i[e][1],`*`)}await Me()._OrtAppendExecutionProvider(e,a,s,c,o)!==0&&Oe(`Can't append execution provider: ${r}.`)}},c_=async e=>{let t=Me(),n=0,r=[],i=e||{};d3(i);try{let e=l3(i.graphOptimizationLevel??`all`),a=c3(i.executionMode??`sequential`),o=typeof i.logId==`string`?Et(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log severity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?Et(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&Oe(`Can't create session options.`),i.executionProviders&&await p3(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);uo(n,`enableGraphCapture`,i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=Et(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&Oe(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&Vo(i.extra,``,new WeakSet,(e,t)=>{uo(n,e,t,r)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Oe(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),yr,Vn,_r,lo,Go,Aa,Oa,lc,ue=N(()=>{yr=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Vn=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},_r=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},lo=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Go=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Aa=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Oa=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,lc=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Uo,cc=N(()=>{ma(),Uo=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),f3,h3,p_,f_,Pa,m3,me,Gn=N(()=>{ue(),f3=[`V`,`I`,`W`,`E`,`F`],h3=(e,t)=>{console.log(`[${f3[e]},${new Date().toISOString()}]${t}`)},Pa=(e,t)=>{p_=e,f_=t},m3=(e,t)=>{let n=Go(e);n>=Go(p_)&&h3(n,typeof t==`function`?t():t)},me=(...e)=>{f_&&m3(...e)}}),dc,Un,D,Gr,Ea,h_,m_,pe=N(()=>{dc=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},Un=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=dc.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},D=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length?e.every((e,n)=>e===t[n]):!1}},Gr=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},Ea=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!Un.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},h_=-34028234663852886e22,m_=34028234663852886e22}),Ca,pc=N(()=>{ue(),Ca=(e,t)=>new(lo(t))(e)}),b_,hc,y_,g3,g_,b3,__,Da,ka,fc,w_,v_=N(()=>{ue(),Gn(),b_=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),hc=(e,t)=>{if(t===`int32`)return e;let n=b_.get(t);if(!n)throw Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(lo(t))(e.buffer,e.byteOffset,i);switch(t){case`int64`:case`uint64`:{let e=new Int32Array(i);for(let t=0;t<i;t++){let n=a[t];if(n>2147483647n||n<-2147483648n)throw Error(`Can not convert int64 data to int32 - value out of range.`);e[t]=Number(n)}return new Uint8Array(e.buffer)}case`int8`:case`uint8`:case`uint32`:{if(t===`uint32`&&a.some(e=>e>2147483647))throw Error(`Can not convert uint32 data to int32 - value out of range.`);let e=Int32Array.from(a,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from ${t} to 'int32'`)}},y_=(e,t)=>{if(t===`int32`)return e;if(e.byteLength%4!=0)throw Error(`Invalid Uint8Array length - must be a multiple of 4 (int32).`);let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case`int64`:{let e=BigInt64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`uint64`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uin64 - negative value found.`);let e=BigUint64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`int8`:{if(r.some(e=>e<-128||e>127))throw Error(`Can not convert int32 data to int8 - value out of range.`);let e=Int8Array.from(r,Number);return new Uint8Array(e.buffer)}case`uint8`:if(r.some(e=>e<0||e>255))throw Error(`Can not convert int32 data to uint8 - value out of range.`);return Uint8Array.from(r,Number);case`uint32`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uint32 - negative value found.`);let e=Uint32Array.from(r,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from 'int32' to ${t}`)}},g3=1,g_=()=>g3++,b3=new Map([[`int8`,`int32`],[`uint8`,`int32`],[`uint32`,`int32`],[`int64`,`int32`]]),__=(e,t)=>{let n=b_.get(e);if(!n)throw Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},Da=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return __(this.dataType,this.tensorShape)}destroy(){me(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=y_(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return n.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}setIsDataConverted(e){this.isDataConverted=e}},ka=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!a?.input.dataTypes.includes(t)){if(o=b3.get(t),!o||a?.input.dataTypes.includes(o))throw Error(`WebNN backend does not support data type: ${t}`);me(`verbose`,()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==__(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType===`int32`)t=hc(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else me(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?y_(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},fc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=g_();return this.tensorTrackersById.set(e,new ka(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){me(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){me(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=g_(),o=new Da({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new ka(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(s,t,n)){me(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}me(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}}`);let c=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Da({sessionId:e,context:s,tensor:c,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},w_=(...e)=>new fc(...e)}),Na,y3,La,x_=N(()=>{ue(),br(),pc(),v_(),Gn(),Na=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),y3=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},La=class{constructor(e){this.tensorManager=w_(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Pa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){me(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){me(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)me(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}else if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>y3(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){me(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Na.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){me(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Na.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Me().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);me(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Ca(n,t)}}registerMLTensor(e,t,n,r){let i=Na.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return me(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw Error(`External mounted files are not available.`);let s=e;e.startsWith(`./`)&&(s=e.substring(2));let c=a.get(s);if(!c)throw Error(`File with name ${s} not found in preloaded files.`);if(t+n>c.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let l=c.slice(t,t+n).buffer,u;switch(i.dataType){case`float32`:u=new Float32Array(l);break;case`float16`:u=typeof Float16Array<`u`&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case`int32`:u=new Int32Array(l);break;case`uint32`:u=new Uint32Array(l);break;case`int64`:if(o){let e=hc(new Uint8Array(l),`int64`);u=new Int32Array(e.buffer),i.dataType=`int32`}else u=new BigInt64Array(l);break;case`uint64`:u=new BigUint64Array(l);break;case`int8`:u=new Int8Array(l);break;case`int4`:case`uint4`:case`uint8`:u=new Uint8Array(l);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return me(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?`(Note: it was int64 data type and registered to int32 as workaround)`:``}`),r.constant(i,u)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Na.get(yr(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>`u`?!1:n?!!i?.input.dataTypes.includes(r):!!i?.output.dataTypes.includes(r)}flush(){}}}),Ra=N(()=>{}),T_,mc,gc,_3,w3,I_,yc,bc,$_,A_=N(()=>{Gn(),Ra(),T_=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),mc=[],gc=e=>Math.ceil(Number(e)/16)*16,_3=e=>{for(let t=0;t<mc.length;t++){let n=mc[t];if(e<=n)return n}return Math.ceil(e/16)*16},w3=1,I_=()=>w3++,yc=async(e,t,n,r)=>{let i=gc(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},bc=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of T_)mc.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=gc(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),me(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=gc(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return me(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=I_();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),me(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),me(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=_3(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:I_(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),me(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return me(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await yc(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus===`default`){for(let e of this.buffersPending){let t=T_.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(me(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},$_=(...e)=>new bc(...e)}),_c,le,Ye=N(()=>{_c=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},le=e=>new _c(e)}),Ur,vc,Fe,ut,W,Pe,xc,Wr,Zt,Q,za,L,V,O_,Ma,wc,P_,he=N(()=>{ue(),pe(),Ur=64,vc=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},Fe=(e,t=1)=>{let n=vc(e,t);return typeof n==`string`?n:n[0]},ut=(e,t=1)=>{let n=vc(e,t);return typeof n==`string`?n:n[1]},W=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:D.computeStrides(e)})}),t},Pe=e=>e%4==0?4:e%2==0?2:1,xc=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Wr=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Zt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Q=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,za=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=vc(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${Q(g,e,o)};
    let rest${e} = current % ${Q(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${Q(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),C=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,w=(e,t)=>o<2?`${e}`:`${Q(e,t,o)}`,T=(e,t,n)=>o<2?`${e}=${n};`:`${Q(e,t,o)}=${n};`,E={},O=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in E)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${w(g,e)} * (${t} % ${w(h,e)})`)}return E[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},k=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),A=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),j=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${A(`i2o_${e}(indices)`)};
  }`,M=o<2?``:`
  fn get_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}) -> ${u} {
    return get_${e}ByIndices(${C(s.map(e=>`d${e}`).join(`, `))});
  }`,P=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?A(`0u`):o===1?A(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},ee=t=>o<2?A(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),te=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${k(`i2o_${e}(indices)`,`value`)}
  }`,F=o<2?``:`
  fn set_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}, value: ${u}) {
    set_${e}ByIndices(${C(s.map(e=>`d${e}`).join(`, `))}, value);
  }`;return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(E).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(F),t=!0),p.setByIndices&&(e.push(te),t=!0),p.get&&(e.push(M),t=!0),p.getByIndices&&(e.push(j),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${D.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:O,indices:C,indicesGet:w,indicesSet:T,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?k(`0u`,n):o===1?k(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:k,setByIndices:(t,n)=>o<2?k(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:P,getByOffset:A,getByIndices:ee,usage:r,name:e,strides:g,shape:h,rank:o}},L=(e,t,n,r=1)=>za(e,t,n,`input`,r),V=(e,t,n,r=1)=>za(e,t,n,`output`,r),O_=(e,t,n)=>za(e,t,n,`atomicOutput`,1),Ma=(e,t,n,r=1)=>za(e,t,n,`internal`,r),wc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=Ur){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},P_=(e,t)=>new wc(e,t)}),v3,E_,x3,T3,I3,S3,lt,C_,D_,Qn=N(()=>{ue(),pe(),Ye(),he(),v3=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},E_=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,x3=(e,t)=>D.sortBasedOnPerm(e,E_(e.length,t)),T3=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},I3=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},S3=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},lt=(e,t)=>{let n=e.dataType,r=e.dims.length,i=E_(r,t),a=x3(e.dims,i),o=e.dims,s=a,c=r<2||S3(i,e.dims),l;if(c)return l=e=>{let t=L(`input`,n,o,4),r=V(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=I3(e.dims,i),f=D.areEqual(d,[2,3,1]),p=D.areEqual(d,[3,1,2]);if(u.length===2||f||p){o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]];let t=16;return l=e=>{let t=L(`a`,n,o.length),r=V(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...W(o,s)]}},getShaderSource:l}}return l=e=>{let t=L(`a`,n,o.length),a=V(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${T3(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=D.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...W(o,s)]}},getShaderSource:l}},C_=(e,t)=>{v3(e.inputs,t.perm),e.compute(lt(e.inputs[0],t.perm))},D_=e=>le({perm:e.perm})}),$3,A3,O3,P3,E3,C3,D3,k3,N3,L3,Wn,k_,N_,L_,R_,z_,M_,B_,F_,V_,G_,U_=N(()=>{ue(),pe(),he(),Ba(),Qn(),$3={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},A3={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},O3={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},P3={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},E3=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},C3=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},D3=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},k3=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},N3=(e,t)=>{let n=[];if(!k3(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},L3=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=D.size(a),l=D.size(o),u=L(`_A`,n[0].dataType,s),d=V(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${O3[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${$3[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${A3[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${P3[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},Wn=(e,t,n,r)=>{let i=e.inputs.length===1?n:Tc(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=D.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=N3(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(lt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=E3(s.length,c.dims.length));let[u,d]=C3(c.dims,s),f=u;i.keepDims&&(f=D3(u,o)),e.compute(L3(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},k_=(e,t)=>{Wn(e,`ReduceMeanShared`,t,`mean`)},N_=(e,t)=>{Wn(e,`ReduceL1Shared`,t,`l1`)},L_=(e,t)=>{Wn(e,`ReduceL2Shared`,t,`l2`)},R_=(e,t)=>{Wn(e,`ReduceLogSumExpShared`,t,`logSumExp`)},z_=(e,t)=>{Wn(e,`ReduceMaxShared`,t,`max`)},M_=(e,t)=>{Wn(e,`ReduceMinShared`,t,`min`)},B_=(e,t)=>{Wn(e,`ReduceProdShared`,t,`prod`)},F_=(e,t)=>{Wn(e,`ReduceSumShared`,t,`sum`)},V_=(e,t)=>{Wn(e,`ReduceSumSquareShared`,t,`sumSquare`)},G_=(e,t)=>{Wn(e,`ReduceLogSumShared`,t,`logSum`)}}),Hn,R3,Fa,Tc,qn,z3,M3,B3,F3,V3,G3,U3,W3,H3,q3,jn,W_,H_,q_,j_,K_,X_,Z_,J_,Y_,Q_,Ba=N(()=>{ue(),pe(),Ye(),he(),U_(),Hn=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},R3=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],Fa=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=D.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=D.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=L(`_A`,n[0].dataType,u),s=V(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...W(l,c)]})}},Tc=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),le({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},qn=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:Tc(i,n);e.compute(Fa(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?R3:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},z3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},M3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},B3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},F3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},V3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},G3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},U3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},W3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},H3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},q3=(e,t)=>{Hn(e.inputs),qn(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},jn=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},W_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?G3(e,t):k_(e,t)},H_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?M3(e,t):N_(e,t)},q_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?B3(e,t):L_(e,t)},j_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?F3(e,t):R_(e,t)},K_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?V3(e,t):z_(e,t)},X_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?U3(e,t):M_(e,t)},Z_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?W3(e,t):B_(e,t)},J_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?H3(e,t):F_(e,t)},Y_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?q3(e,t):V_(e,t)},Q_=(e,t)=>{jn(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?z3(e,t):G_(e,t)}}),e0,t0,n0,Ic,r0=N(()=>{ue(),Ye(),Ba(),e0=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},t0=(e,t)=>{e0(e.inputs),e.compute(Fa(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},n0=(e,t)=>{e0(e.inputs),e.compute(Fa(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Ic=e=>le(e)}),j3,Sc,K3,X3,Z3,co,J3,o0,Va=N(()=>{ue(),pe(),Ra(),he(),j3=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h,_=-1,v=0;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Sc=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,K3=(e,t,n,r,i,a,o,s)=>{let c=Pe(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=Fe(e.dataType,c),m=ut(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=V(`x`,e.dataType,e.dims,c),r=[n],i=o?L(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?L(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=ut(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Sc(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},X3=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=Pe(a.headSize),_=a.headSize/g,v=12,y={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},b=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],x=d&&r&&D.size(r.dims)>0,S=[`type`,`type`];x&&S.push(`type`),i&&S.push(`type`),s&&S.push(`type`),c&&S.push(`type`);let C=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&C.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:C,dispatchGroup:y,programUniforms:b}),getShaderSource:e=>{let a=L(`q`,t.dataType,t.dims,g),o=[a,L(`key`,n.dataType,n.dims,g)];if(x){let e=L(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(L(`attention_bias`,i.dataType,i.dims));let l=s?L(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?L(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=V(`output`,t.dataType,u),_=[h];d&&_.push(V(`present_key`,t.dataType,p,g));let v=ut(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Sc(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${x&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${x&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},Z3=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h=12,g={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},_=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],v=d&&r&&D.size(r.dims)>0,y=[`type`,`type`];v&&y.push(`type`),o&&y.push(`type`),s&&y.push(`type`);let b=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&b.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:y},getRunData:()=>({outputs:b,dispatchGroup:g,programUniforms:_}),getShaderSource:e=>{let i=L(`probs`,t.dataType,t.dims),a=[i,L(`v`,n.dataType,n.dims)];v&&a.push(L(`past_value`,r.dataType,r.dims));let c=o?L(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?L(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[V(`output`,t.dataType,m)];return d&&f.push(V(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Sc(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${v&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${v&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},co=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?o:void 0,m=f>1?s:void 0,h=f>1?l.pastSequenceLength:0,g=h+l.kvSequenceLength,_=c&&D.size(c.dims)>0?c:void 0,v=[t,n];p&&D.size(p.dims)>0&&v.push(p),_&&v.push(_),u&&v.push(u),d&&v.push(d);let y=e.compute(X3(f,t,n,p,_,l,h,u,d),{inputs:v,outputs:f>1?[-1,1]:[-1]})[0];e.compute(K3(y,l.batchSize,l.numHeads,h,l.sequenceLength,g,u,d),{inputs:u&&d?[y,u,d]:[y],outputs:[]});let b=[y,r];m&&D.size(m.dims)>0&&b.push(m),u&&b.push(u),d&&b.push(d),e.compute(Z3(f,y,r,m,l,h,u,d),{inputs:b,outputs:f>1?[0,2]:[0]})},J3=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o=12,s={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},c=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:l}),getShaderSource:e=>{let t=V(`output_q`,c[0].dataType,n),r=V(`output_k`,c[0].dataType,n),i=V(`output_v`,c[0].dataType,n),a=L(`input`,c[0].dataType,c[0].dims),o=L(`weight`,c[1].dataType,c[1].dims),s=L(`bias`,c[2].dataType,c[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,s,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:c,outputs:[-1,-1,-1]})},o0=(e,t)=>{let n=j3(e.inputs,t),[r,i,a]=J3(e,n);return co(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Y3,Q3,eE,i0,a0=N(()=>{ft(),ue(),pe(),Ye(),he(),Y3=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},Q3=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?Pe(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=D.size(a)/o,l=r,u=l?a.length:a,d=L(`x`,e[0].dataType,e[0].dims,o),f=L(`scale`,e[1].dataType,e[1].dims,s),p=L(`bias`,e[2].dataType,e[2].dims,s),m=L(`inputMean`,e[3].dataType,e[3].dims,s),h=L(`inputVar`,e[4].dataType,e[4].dims,s),g=V(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...W(a)]:[{type:12,data:c}]})}},eE=e=>le(e),i0=(e,t)=>{let{inputs:n,outputCount:r}=e,i=eE({...t,outputCount:r});if(ce.webgpu.validateInputContent&&Y3(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(Q3(n,i))}}),tE,nE,s0,u0=N(()=>{pe(),he(),tE=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},nE=e=>{let t=e[0].dims,n=e[0].dims[2],r=D.size(t)/4,i=e[0].dataType,a=L(`input`,i,t,4),o=L(`bias`,i,[n],4),s=L(`residual`,i,t,4),c=V(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},s0=e=>{tE(e.inputs),e.compute(nE(e.inputs))}}),rE,ke,l0,c0,d0,p0,f0,h0,m0,g0,b0,oE,y0,_0,w0,v0,Wo,x0,Ga,T0,I0,S0,$0,A0,O0,P0,E0,C0,D0,k0,N0,L0,R0,z0,M0,B0,F0,$c,Ac,V0,G0,U0,iE,aE,W0,Ua=N(()=>{ue(),pe(),Ye(),he(),rE=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=L(`inputData`,n,[s],4),u=V(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},ke=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(D.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>rE(t,D.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(D.size(t[0].dims)/64/4)},programUniforms:c})}},l0=e=>{e.compute(ke(e.inputs[0],`Abs`,`abs`))},c0=e=>{e.compute(ke(e.inputs[0],`Acos`,`acos`))},d0=e=>{e.compute(ke(e.inputs[0],`Acosh`,`acosh`))},p0=e=>{e.compute(ke(e.inputs[0],`Asin`,`asin`))},f0=e=>{e.compute(ke(e.inputs[0],`Asinh`,`asinh`))},h0=e=>{e.compute(ke(e.inputs[0],`Atan`,`atan`))},m0=e=>{e.compute(ke(e.inputs[0],`Atanh`,`atanh`))},g0=e=>le(e),b0=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ke(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},oE=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return le({min:t,max:n})},y0=(e,t)=>{let n=t||oE(e.inputs),r=ut(e.inputs[0].dataType);e.compute(ke(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},_0=e=>{e.compute(ke(e.inputs[0],`Ceil`,`ceil`))},w0=e=>{e.compute(ke(e.inputs[0],`Cos`,`cos`))},v0=e=>{e.compute(ke(e.inputs[0],`Cosh`,`cosh`))},Wo=e=>le(e),x0=(e,t)=>{let n=ut(e.inputs[0].dataType);e.compute(ke(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ga=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,T0=e=>{let t=ut(e.inputs[0].dataType);e.compute(ke(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,Ga(t)))},I0=e=>{e.compute(ke(e.inputs[0],`Exp`,`exp`))},S0=e=>{e.compute(ke(e.inputs[0],`Floor`,`floor`))},$0=e=>{let t=ut(e.inputs[0].dataType);e.compute(ke(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Ga(t)))},A0=(e,t)=>{let n=ut(e.inputs[0].dataType);e.compute(ke(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},O0=e=>{e.compute(ke(e.inputs[0],`Not`,e=>`!${e}`))},P0=e=>{e.compute(ke(e.inputs[0],`Neg`,e=>`-${e}`))},E0=e=>{e.compute(ke(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},C0=e=>{let t=ut(e.inputs[0].dataType);e.compute(ke(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},D0=e=>{e.compute(ke(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},k0=e=>le(e),N0=(e,t)=>{let n=ut(e.inputs[0].dataType);e.compute(ke(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},L0=e=>{e.compute(ke(e.inputs[0],`Sin`,`sin`))},R0=e=>{e.compute(ke(e.inputs[0],`Sinh`,`sinh`))},z0=e=>{e.compute(ke(e.inputs[0],`Sqrt`,`sqrt`))},M0=e=>{e.compute(ke(e.inputs[0],`Tan`,`tan`))},B0=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,F0=e=>{e.compute(ke(e.inputs[0],`Tanh`,B0))},$c=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${B0(`v`)};
}
`,Ac=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,V0=e=>{let t=ut(e.inputs[0].dataType);e.compute(ke(e.inputs[0],`FastGelu`,Ac,$c(t),void 0,e.inputs[0].dataType))},G0=(e,t)=>{let n=ut(e.inputs[0].dataType);return e.compute(ke(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},U0=e=>{e.compute(ke(e.inputs[0],`Log`,`log`))},iE=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,aE=e=>`quick_gelu_impl(${e})`,W0=(e,t)=>{let n=ut(e.inputs[0].dataType);e.compute(ke(e.inputs[0],`QuickGelu`,aE,iE(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),sE,uE,q0,j0=N(()=>{pe(),he(),Ua(),sE=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},uE=e=>{let t=e[0].dims.slice();t[2]/=2;let n=L(`input`,e[0].dataType,e[0].dims,4),r=L(`bias`,e[0].dataType,[e[0].dims[2]],4),i=V(`output`,e[0].dataType,t,4),a=D.size(t)/4,o=Fe(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${Ga(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},q0=e=>{sE(e.inputs),e.compute(uE(e.inputs))}}),lE,cE,Kn,K0,X0,Z0,J0,Y0,Q0,ew,tw,nw,rw,ow=N(()=>{ue(),pe(),he(),lE=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=V(`outputData`,u,r.length,4),h=L(`aData`,c,t.length,4),g=L(`bData`,l,n.length,4),_;if(i)if(a){let e=D.size(t)===1,r=D.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)));else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},cE=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),c=r.dims.map(Number),l=!D.areEqual(s,c),u=s,d=D.size(s),f=!1,p=!1,m=[l];if(l){let e=Un.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=D.size(u);let t=D.size(s)===1,n=D.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>lE(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(D.size(u)/4)},...W(s,c,u)]})}},Kn=(e,t,n,r,i,a)=>{e.compute(cE(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},K0=e=>{Kn(e,`Add`,(e,t)=>`${e}+${t}`)},X0=e=>{Kn(e,`Div`,(e,t)=>`${e}/${t}`)},Z0=e=>{Kn(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},J0=e=>{Kn(e,`Mul`,(e,t)=>`${e}*${t}`)},Y0=e=>{let t=L(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;Kn(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Q0=e=>{Kn(e,`Sub`,(e,t)=>`${e}-${t}`)},ew=e=>{Kn(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},tw=e=>{Kn(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},nw=e=>{Kn(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},rw=e=>{Kn(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),pE,fE,hE,mE,iw,aw,sw=N(()=>{ue(),pe(),Ye(),he(),pE=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=0,r=e[0],i=r.dataType,a=r.dims.length;e.forEach((e,n)=>{if(n!==0){if(e.dataType!==i)throw Error(`input tensors should be one type`);if(e.dims.length!==a)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,n)=>{if(n!==t&&e!==r.dims[n])throw Error(`non concat dimensions must match`)})}})},fE=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,hE=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},mE=(e,t,n,r)=>{let i=D.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=L(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...W(e[t].dims));u.push(...W(n));let d=V(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${fE(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${hE(o,d)}
  }`}},iw=(e,t)=>{let n=e.inputs,r=n[0].dims,i=D.normalizeAxis(t.axis,r.length);pE(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>D.size(e.dims)>0);e.compute(mE(o,i,a,n[0].dataType),{inputs:o})},aw=e=>le({axis:e.axis})}),Jt,Yt,Qt,Wa,wr=N(()=>{ue(),pe(),Jt=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},Yt=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},Qt=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},Wa=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t===`Clip`){let[n,r]=e?.activation_params||[h_,m_];return{activation:t,clipMax:r,clipMin:n}}else if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),it,uw,Ha=N(()=>{it=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},uw=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),lw,cw=N(()=>{lw=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ho,qa,ja=N(()=>{ue(),pe(),he(),wr(),Ho=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${Q(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Q(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},qa=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=Pe(l),f=Pe(u),p=Pe(c),m=D.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[D.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return Yt(t,v),v.push(...W(g,o,s)),h&&v.push(...W(e[2].dims)),v.push(...W(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Ma(`batch_dims`,e[0].dataType,g.length),c=L(`a`,e[0].dataType,o.length,f),l=L(`b`,e[1].dataType,s.length,d),u=V(`output`,e[0].dataType,_.length,d),m=Fe(u.type.tensor),v=Jt(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(L(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];Qt(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${Ho(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${Ho(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),gE,bE,Oc,dw,yE,Pc,_E,qo,Ka=N(()=>{ue(),pe(),he(),wr(),ja(),Ha(),gE=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,bE=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,Oc=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&u%t[0]===0&&a%t[1]===0&&e[0]===4))throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${gE(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${bE(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},dw=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,yE=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,Pc=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(!(f%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${dw(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${dw(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${yE(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},_E=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=Fe(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${it(e,l)} {
      var value = ${it(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Ho(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${it(e,l)} {
      var value = ${it(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Ho(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${it(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${it(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},qo=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=D.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],C=S.length,w=[d,f,m/y],T=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];Yt(t,T),T.push(...W(u,b,S));let E=[`rank`,`rank`],O=e.length>2;return O&&(T.push(...W(e[2].dims)),E.push(`rank`)),T.push(...W(w)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:T}),getShaderSource:n=>{let r=u.length,a=Ma(`batchDims`,e[0].dataType,r,1),o=Fe(e[0].dataType),s=L(`a`,e[0].dataType,x,y),c=L(`b`,e[1].dataType,C,y),l=V(`result`,e[0].dataType,w.length,y),d=[s,c];if(O){let t=i?y:1;d.push(L(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];Qt(t,f);let p=Fe(l.type.tensor),m=Jt(t,l.type.value,p),v=_E(y,O,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?Oc(g,_,o,a):Pc(g,_,o,a)}
                   `}}}}),wE,pw,fw=N(()=>{ue(),Gn(),he(),wr(),Ha(),cw(),Ka(),wE=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${it(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${it(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${it(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${it(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${it(s,l)}(0.0);`,x=it(c,l),S=it(e?o:s,l),C=it(e?s:o,l),w=Jt(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${uw(i)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},pw=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];me(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],C=v[0]*y[0],w=Math.max(v[0]*x,v[1]),T=r%S===0,E=i%C===0,O=a%w===0,k=h?[x,4,4]:[1,1,1],A=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Yt(t,A),A.push(...W(e[0].dims,e[1].dims));let j=[`rank`,`rank`];return o&&(A.push(...W(e[2].dims)),j.push(`rank`)),A.push(...W(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${T};${E};${O};${S};${C};${w}`,inputDependencies:j},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:A}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];Qt(t,i);let a=h?4:1,c=Fe(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[L(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),L(`w`,e[1].dataType,e[1].dims.length,a)],f=V(`result`,e[0].dataType,n.length,a);if(o){let t=L(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${lw(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${wE(l,T,E,O,o,t,k[0],k[1],k[2],c)}
        ${h?Oc(y,v,c,void 0,!l,w):Pc(y,v,c,void 0,!l,w,!1,void 0,s)}`}}}}),vE,hw,Xa,xE,mw,TE,gw,bw,yw=N(()=>{ue(),Gn(),pe(),he(),wr(),Ha(),vE=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},hw=e=>typeof e==`number`?[e,e,e]:e,Xa=(e,t)=>t<=1?e:e+(e-1)*(t-1),xE=(e,t,n,r=1)=>{let i=Xa(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},mw=(e,t,n,r,i)=>{i??=xE(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},TE=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=mw([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=mw([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},gw=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=hw(n),[y,b,x]=hw(r),S=Xa(p,y),C=Xa(m,b),w=Xa(h,x),{padInfo:T,outDepth:E,outHeight:O,outWidth:k}=TE(i,c,l,u,g,_,v,S,C,w),A=a?f*d:f,j=[0,0,0,0,0];return o===`channelsFirst`?j=[s,A,E,O,k]:o===`channelsLast`&&(j=[s,E,O,k,A]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:E,outHeight:O,outWidth:k,outChannels:A,padInfo:T,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:C,effectiveFilterWidth:w,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:j,filterShape:t}},bw=(e,t,n,r,i,a)=>{let o=a===`channelsLast`,s=o?e[0].dims[3]:e[0].dims[1],c=!1,l=[64,1,1],u={x:n.map((e,t)=>t)},d=[Math.ceil(vE(u.x.map(e=>n[e]))/l[0]),1,1];me(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let f=1,p=[{type:12,data:D.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Yt(t,p),p.push(...W(e[0].dims,e[1].dims));let m=[`rank`,`rank`],h=e.length===3;return h&&(p.push(...W(e[2].dims)),m.push(`rank`)),p.push(...W(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${h}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:p}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];Qt(t,s);let c=1,l=Fe(e[0].dataType),u=L(`x`,e[0].dataType,e[0].dims.length,1),d=L(`W`,e[1].dataType,e[1].dims.length,1),f=[u,d],p=V(`result`,e[0].dataType,n.length,1),m=``;if(h){let t=L(`bias`,e[2].dataType,e[2].dims.length,1);f.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l} {
          return bias[${o?Q(`coords`,4,5):Q(`coords`,1,5)}];
        }`}let g=it(1,l),_=Jt(t,g,l);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${d.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...f,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${Q(`coords`,0,u.rank)};
              let d2 = ${o?Q(`coords`,u.rank-1,u.rank):Q(`coords`,1,u.rank)};
              let xFRCCorner = vec3<u32>(${o?Q(`coords`,1,u.rank):Q(`coords`,2,u.rank)},
              ${o?Q(`coords`,2,u.rank):Q(`coords`,3,u.rank)},
              ${o?Q(`coords`,3,u.rank):Q(`coords`,4,u.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?Q(`uniforms.x_shape`,1,u.rank):Q(`uniforms.x_shape`,2,u.rank)};
              let xShapeZ = ${o?Q(`uniforms.x_shape`,2,u.rank):Q(`uniforms.x_shape`,3,u.rank)};
              let xShapeW = ${o?Q(`uniforms.x_shape`,3,u.rank):Q(`uniforms.x_shape`,4,u.rank)};
              let xShapeU = ${o?Q(`uniforms.x_shape`,4,u.rank):Q(`uniforms.x_shape`,1,u.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${h?`value = value + getBiasByOutputCoords(coords)`:``};
              ${_}
              result[global_idx] = f32(value);
          }`}}}}),_w,ww,vw=N(()=>{ue(),pe(),he(),wr(),_w=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?Pe(l):1,f=D.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];Yt(t,p),p.push(...W(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...W([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=V(`output`,e[0].dataType,n.length,d),u=Fe(l.type.tensor),f=Jt(t,l.type.value,u),p=L(`x`,e[0].dataType,o.length),m=L(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(L(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];Qt(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},ww=(e,t,n,r)=>{let i=e.length>2,a=Pe(n[3]),o=Pe(n[2]),s=D.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Yt(t,d),d.push(...W(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=V(`output`,e[0].dataType,u.length,a),s=Fe(r.type.tensor),d=Jt(t,r.type.value,s),p=L(`x`,e[0].dataType,c.length,a),m=L(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(L(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return Qt(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),IE,Ec,SE,Cc,Dc,xw,$E,AE,kc,Tw=N(()=>{pe(),fw(),yw(),Ka(),vw(),wr(),ja(),Qn(),IE=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},Ec=[2,3,1,0],SE=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},Cc=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();Gr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Dc=e=>{let t=Wa(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},xw=(e,t,n,r)=>{let i=n.format===`NHWC`,a=IE(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(lt(t[1],Ec),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(ww(o,n,a,r),{inputs:o}):e.compute(_w(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(lt(t[1],Ec),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(qa(v,n,a,_,i,r),{inputs:v}):e.compute(qo(v,n,a,_,i,r),{inputs:v});return}let g=!0,_=e.kernelCustomData.wT??e.compute(lt(t[1],Ec),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let v=[t[0],_];o&&v.push(t[2]);let y=i?f*p:m,b=i?m:f*p,x=u*d*l;e.compute(pw(v,n,a,y,b,x,o,!0,r),{inputs:v})},$E=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=Cc({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);xw(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},AE=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=Cc(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=gw(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(bw(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},kc=(e,t)=>{if(SE(e.inputs,t),e.inputs[0].dims.length===3)$E(e,t);else if(e.inputs[0].dims.length===5)AE(e,e.inputs,t);else{let n=Cc(t,e.inputs);xw(e,e.inputs,n)}}}),Iw,Sw=N(()=>{ue(),Gn(),pe(),he(),Iw=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?Pe(c):1,d=a&&l===1&&c>=4,f=d?Math.floor(c/4)*4:Math.floor(c/u)*u,p=c-f,m=a?Pe(l):1,h=a?l===1?u:m:1,g=D.size(i)/m,_=[Math.ceil(g/64),1,1];me(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let v=[`rank`,`rank`],y=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],x=[t.dilations[0],t.dilations[1]],S=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],w=[{type:12,data:g},{type:12,data:y},{type:12,data:b},{type:12,data:x},{type:12,data:S},{type:6,data:C},{type:12,data:f},{type:12,data:c},{type:12,data:l},...W(e[0].dims,e[1].dims)];return r&&(w.push(...W(e[2].dims)),v.push(`rank`)),w.push(...W(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${h}${m}${d}${p}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:w}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:y.length},{name:`filter_dims`,type:`u32`,length:b.length},{name:`dilations`,type:`u32`,length:b.length},{name:`effective_filter_dims`,type:`u32`,length:S.length},{name:`pads`,type:`i32`,length:C.length},{name:`input_channels_per_group_int`,type:`u32`},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=Fe(e[0].dataType),s=a?1:2,c=a?2:3,l=a?3:1,f=L(`W`,e[1].dataType,e[1].dims.length,h),g=L(`Dy`,e[0].dataType,e[0].dims.length,u),_=[g,f];r&&_.push(L(`bias`,e[2].dataType,[i[l]].length,m));let v=V(`result`,e[0].dataType,i.length,m),x=`
            let outputIndices = ${v.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${v.indicesGet(`outputIndices`,0)};
            let d1 = ${v.indicesGet(`outputIndices`,l)};
            let r = ${v.indicesGet(`outputIndices`,s)};
            let c = ${v.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${v.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u};
                var w_offset = ${f.indicesToOffset(`${f.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${h};
                  `:``}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:u}) {
                  ${(()=>{let e=``;if(d)u===4?e+=`
        let xValue = ${g.getByOffset(`x_offset`)};
        let wValue = ${f.getByOffset(`w_offset`)};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:u===2?e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}));
          x_offset += 2u;
          w_offset += 2u;`:u===1&&(e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}, ${g.getByOffset(`x_offset + 2u`)}, ${g.getByOffset(`x_offset + 3u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}, ${f.getByOffset(`w_offset + 2u`)}, ${f.getByOffset(`w_offset + 3u`)}));
          x_offset += 4u;
          w_offset += 4u;`);else if(e+=`
                  let xValue = ${a?g.getByOffset(`${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):g.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
        `,u===1)e+=`
          let w_offset = ${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${f.getByOffset(`w_offset / ${h}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${f.getByOffset(`${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${d?4:u};
                }
                ${(()=>{if(p===0)return``;if(!d)throw Error(`packInputAs4 ${d} is not true.`);let e=``;if(u===1){e+=`dotProd = dotProd`;for(let t=0;t<p;t++)e+=`
            + ${g.getByOffset(`x_offset + ${t}`)} * ${f.getByOffset(`w_offset + ${t}`)}`;e+=`;`}else if(u===2){if(p!==2)throw Error(`Invalid inputChannelsRemainder ${p}.`);e+=`
          let xValue = ${g.getByOffset(`x_offset`)};
          let wValue = ${f.getByOffset(`w_offset`)};
          dotProd = dotProd + dot(xValue, wValue);`}return e})()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:``};
            ${v.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(..._,v)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${x}}`}}}}),OE,PE,EE,$w,Aw,CE,Ow,DE,Pw,Ew=N(()=>{Sw(),wr(),Qn(),OE=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,PE=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},EE=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=OE(s,o[i],a[i],t[f],n[i],p);PE(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},$w=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}EE(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},Aw=e=>{let t=Wa(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},CE=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},Ow=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(lt(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Iw(a,n,r),{inputs:a})},DE=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=$w({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);Ow(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Pw=(e,t)=>{if(CE(e.inputs,t),e.inputs[0].dims.length===3)DE(e,t);else{let n=$w(t,e.inputs);Ow(e,e.inputs,n)}}}),kE,Cw,Dw,kw=N(()=>{ue(),pe(),Ye(),he(),kE=(e,t,n,r)=>{let i=D.size(t),a=t.length,o=L(`input`,e,a),s=V(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=D.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...W(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=Q(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},Cw=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(kE(r,n,i,t),{inputs:[0]})},Dw=e=>{let t=e.exclusive===1,n=e.reverse===1;return le({exclusive:t,reverse:n})}}),NE,LE,RE,Nw,Lw,Rw=N(()=>{ue(),pe(),Ye(),he(),NE=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},LE=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},RE=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=L(`a`,p,f),h=V(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=D.size(t),u=d.dims,f=D.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...W(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${LE(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},Nw=(e,t)=>{NE(e.inputs),e.compute(RE(e.inputs[0],t))},Lw=e=>le({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Nc,Za,zw,zE,ME,Lc,Rc,Mw,BE,Bw,Fw,Vw=N(()=>{ue(),pe(),Ye(),he(),Nc=`[a-zA-Z]|\\.\\.\\.`,Za=`(`+Nc+`)+`,zw=`^`+Za+`$`,zE=`(`+Za+`,)*`+Za,ME=`^`+zE+`$`,Lc=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Rc=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(ME)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(zw)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(Za)))throw Error(`Invalid RHS`);r.match(RegExp(Nc,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(zw))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(Nc,`g`)),l=new Lc(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},Mw=e=>e+`_max`,BE=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>L(`input${n}`,t,e)),a=D.size(r),o=V(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...W(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...W(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=`var prod = 1.0;`,a=`var sum = 0.0;`,c=`sum += prod;`,l=[],u=[],d=[],f=[],p=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,r)=>{if(n.rhs.symbolToIndices.has(r)){let a=n.rhs.symbolToIndices.get(r)?.[0];a!==void 0&&n.lhs.forEach((n,s)=>{if(e.inputIndices.includes(s)){let e=n.symbolToIndices.get(r);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[s].indicesSet(`input${s}Indices`,e,o.indicesGet(`outputIndices`,a))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(r);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{l.push(`${i[n].indicesSet(`input${n}Indices`,e,`${r}`)}`)}),f.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),u.push(`for(var ${r}: u32 = 0; ${r} < uniforms.${Mw(r)}; ${r}++) {`),d.push(`}`)});let m=p?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...u,...l,`var prod = 1.0;`,...f,`sum += prod;`,...d];return`
            ${e.registerUniforms(s.map(e=>({name:`${Mw(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${m.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Bw=(e,t)=>{let n=new Rc(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(BE(i,e.inputs[0].dataType,n,r))},Fw=e=>{let t=e.equation.replace(/\s+/g,``);return le({equation:t})}}),FE,Gw,VE,GE,Uw,Ww=N(()=>{ue(),pe(),he(),FE=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},Gw=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},VE=(e,t)=>e.length>t.length?Gw(e,t):Gw(t,e),GE=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=VE(t,n),i=e[0].dataType,a=i===9||D.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(D.size(r)/s),l=e=>{let n=L(`input`,i,t.length,o),a=V(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...W(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},Uw=e=>{FE(e.inputs),e.compute(GE(e.inputs),{inputs:[0]})}}),UE,Hw,qw=N(()=>{ue(),pe(),he(),Ua(),UE=e=>{let t=e[0].dataType,n=D.size(e[0].dims),r=D.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=L(`x`,t,[1],4),r=L(`bias`,t,[1],4),a=V(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${$c(ut(t))}

    ${e.mainStart(Ur)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,Ac(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Ur/4)}})}},Hw=e=>{e.inputs.length<2||D.size(e.inputs[1].dims)===0?V0(e):e.compute(UE(e.inputs))}}),WE,HE,jw,Kw,Xw=N(()=>{ue(),pe(),Ye(),he(),WE=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},HE=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(D.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...W(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=L(`data`,e[0].dataType,e[0].dims.length,c),s=L(`inputIndices`,e[1].dataType,e[1].dims.length),l=V(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},jw=e=>le({axis:e.axis}),Kw=(e,t)=>{let n=e.inputs;WE(n),e.compute(HE(e.inputs,t))}}),qE,Zw,Jw,Yw=N(()=>{ue(),pe(),he(),qE=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...W(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[L(`indices_data`,t.dataType,t.dims.length),V(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},Zw=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=D.sizeToDimension(a,a.length-1),c=D.sizeFromDimension(r,t.batchDims+o),l=D.sizeToDimension(r,t.batchDims),u=D.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=qE(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=D.size(g),v=[{type:12,data:_},{type:12,data:c},...W(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=L(`data`,n[0].dataType,n[0].dims.length),r=L(`slice_offsets`,12,m.dims.length),i=V(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},Jw=e=>({batchDims:e.batch_dims,cacheKey:``})}),jE,KE,Qw,ev,tv=N(()=>{ue(),pe(),Ye(),he(),jE=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=D.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},KE=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=D.normalizeAxis(t.gatherAxis,i),o=D.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=D.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...W(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=L(`data`,e[0].dataType,e[0].dims.length),o=L(`inputIndices`,e[1].dataType,e[1].dims.length),c=L(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?L(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=V(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${ut(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},Qw=(e,t)=>{let n=e.inputs;jE(n,t),e.compute(KE(e.inputs,t))},ev=e=>le({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),XE,ZE,nv,rv,ov=N(()=>{ue(),pe(),Ye(),he(),XE=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ZE=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=D.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=D.size(l),d=L(`input`,r,i),f=L(`indicesInput`,o,a.length),p=V(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...W(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},nv=e=>le({axis:e.axis}),rv=(e,t)=>{let n=e.inputs;XE(n),e.compute(ZE(e.inputs,t))}}),JE,YE,iv,av,sv=N(()=>{ue(),pe(),he(),JE=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},YE=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=Ea.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=16,l=Math.ceil(a/16),u=Math.ceil(i/16),d=!0,f=D.size(s),p=[{type:12,data:l},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],m=[`type`,`type`];e.length===3&&(p.push(...W(e[2].dims)),m.push(`rank`)),p.push(...W(s));let h=n=>{let r=``;t.transA&&t.transB?r=`value += a[k * uniforms.M + m] * b[n * uniforms.K + k];`:t.transA&&!t.transB?r=`value += a[k * uniforms.M + m] * b[k * uniforms.N + n];`:!t.transA&&t.transB?r=`value += a[m * uniforms.K + k] * b[n * uniforms.K + k];`:!t.transA&&!t.transB&&(r=`value += a[m * uniforms.K + k] * b[k * uniforms.N + n];`);let i=t.alpha===1?``:`value *= uniforms.alpha;`,a=L(`a`,e[0].dataType,e[0].dims),o=L(`b`,e[1].dataType,e[1].dims),c=a.type.value,l=null,u=[a,o];e.length===3&&(l=L(`c`,e[2].dataType,e[2].dims.length),u.push(l));let d=V(`output`,e[0].dataType,s.length);return u.push(d),`
  ${n.registerUniforms([{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}]).declareVariables(...u)}

  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${c}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${r}
    }

    ${i}
    ${l==null?``:`let cOffset = ${l.broadcastedIndicesToOffset(`vec2(m, n)`,d)}; value += ${c}(uniforms.beta) * ${l.getByOffset(`cOffset`)};`}
    output[global_idx] = value;
  }`};return{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:l*u},programUniforms:p}),getShaderSource:n=>{let r=L(`a`,e[0].dataType,e[0].dims),i=L(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=L(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=V(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},iv=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),av=(e,t)=>{JE(e.inputs),e.compute(YE(e.inputs,t))}}),er,vr,po,fo,QE,eC,tC,nC,rC,oC,iC,aC,uv,lv,cv=N(()=>{ue(),pe(),Ye(),he(),[er,vr,po,fo]=[0,1,2,3],QE=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},eC=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,tC=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,nC=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,rC=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,oC=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${er}] = batch;
     indices[${vr}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${po}] = u32(r);
            indices[${fo}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case`border`:return`
          indices[${po}] = u32(clamp(r, 0, H - 1));
          indices[${fo}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${po}] = gs_reflect(r, border[1], border[3]);
          indices[${fo}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,iC=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${er}], indices[${vr}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${er}], indices[${vr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${er}], indices[${vr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${er}], indices[${vr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${er}], indices[${vr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${er}], indices[${vr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,aC=(e,t)=>{let n=L(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=L(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[er,vr,po,fo]=[0,3,1,2]);let o=V(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:D.size(a)},...W(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=D.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${eC}
  ${tC(s)}
  ${nC(t)}
  ${rC(t)}
  ${oC(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${po}]);
      let W_in = i32(uniforms.x_shape[${fo}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${er}], indices[${po}], indices[${fo}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${iC(o,s,t)}
  }`}},uv=(e,t)=>{QE(e.inputs),e.compute(aC(e.inputs,t))},lv=e=>le({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),It,lC,pv,dv,cC,jo,fv,zc=N(()=>{ue(),pe(),Ye(),Ra(),Va(),he(),Qn(),It=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,lC=(e,t)=>{let n=e[0],r=It(e,1),i=It(e,2),a=It(e,3),o=It(e,4),s=It(e,5),c=It(e,6),l=It(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&D.size(c.dims)&&D.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&D.size(c.dims)||l&&D.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&D.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&D.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&D.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&D.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}let S=!1;if(o&&D.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&D.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},pv=e=>le({...e}),dv=le({perm:[0,2,1,3]}),cC=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=D.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=V(`qkv_with_bias`,t.dataType,s),i=L(`qkv`,t.dataType,s),a=L(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},jo=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&D.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=cC(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(lt(c,dv.perm),{inputs:[c],outputs:[-1]})[0]}else return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(lt(c,dv.perm),{inputs:[c],outputs:[-1]})[0]},fv=(e,t)=>{let n=lC(e.inputs,t),r=e.inputs[0],i=It(e.inputs,1),a=It(e.inputs,2),o=It(e.inputs,3),s=It(e.inputs,4),c=It(e.inputs,5),l=It(e.inputs,6),u=It(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=jo(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return co(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=jo(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=jo(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);co(e,f,p,m,s,void 0,l,u,c,n)}}),dC,pC,fC,hC,Mc,hv,mv,Bc=N(()=>{ue(),pe(),Ye(),he(),dC=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},pC=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),le({numOutputs:r,axis:t.axis,splitSizes:n})},fC=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Q(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,hC=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Mc=(e,t)=>{let n=e[0].dims,r=D.size(n),i=e[0].dataType,a=D.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=L(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=V(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...W(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${fC(c.length)}
  ${hC(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Q(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},hv=(e,t)=>{dC(e.inputs);let n=e.inputs.length===1?t:pC(e.inputs,t);e.compute(Mc(e.inputs,n),{inputs:[0]})},mv=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes length must be equal`);return le({axis:t,numOutputs:r,splitSizes:n})}}),mC,Ja,gv,Fc=N(()=>{ue(),pe(),Ye(),he(),mC=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!D.areEqual(r.dims,[])&&!D.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!D.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=D.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`);if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Ja=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=D.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=D.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...W(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:le({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=L(`input`,e[0].dataType,e[0].dims.length),i=L(`position_ids`,e[1].dataType,e[1].dims.length),a=L(`cos_cache`,e[2].dataType,e[2].dims.length),o=L(`sin_cache`,e[3].dataType,e[3].dims.length),s=V(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(Ur)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,V(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(f)/Ur)},programUniforms:m})}},gv=(e,t)=>{mC(e.inputs,t),e.compute(Ja(e.inputs,t))}}),gC,bC,bv,yC,yv,_v=N(()=>{Ye(),ue(),Va(),zc(),Bc(),Qn(),Fc(),he(),gC=(e,t)=>{if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw Error(`cos_cast and sin_cache are expected if do_rotary attribute is non-zero`);if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=!1,c=n.dims[0],l=n.dims[1],u=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],d=l,f=0,p=!r||r.dims.length===0,m=Math.floor(p?u/(t.numHeads+2*t.kvNumHeads):u/t.numHeads);p&&(u=m*t.numHeads);let h=a&&a.dims.length!==0,g=o&&o.dims.length!==0;if(h&&a.dims.length===4&&a.dims[0]===c&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===m)throw Error(`BSNH pastKey/pastValue is not supported`);if(h&&g){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);f=a.dims[2]}else if(h||g)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);d=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==m)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);d=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==m)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);d=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}let v=0,y=!1,b=t.kvNumHeads?m*t.kvNumHeads:u;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(d!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);b=i.dims[2]}else{if(d!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);b=i.dims[1]*i.dims[3],y=!0}}let x=e.length>4?e[5]:void 0;if(x){if(x.dims.length===0)throw Error(`seqlens_k must be at least 1D, got scalar.`);let e=x.dims.reduce((e,t)=>e*t,1);if(e!==c)throw Error(`seqlens_k must have batch_size (${c}) elements, got ${e}.`);for(let e=0;e<x.dims.length;e++)if(x.dims[e]!==1&&x.dims[e]!==c)throw Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${c}), got dims[${e}] = ${x.dims[e]}.`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:f,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:u,vHiddenSize:b,headSize:m,vHeadSize:Math.floor(b/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:y,qkvFormat:_}},bC=le({perm:[0,2,1,3]}),bv=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(lt(r,bC.perm),{inputs:[r],outputs:[-1]})[0]),r},yC=(e,t,n,r)=>{let i=7,a=[`type`,`type`],o=[e*t],s=e*t,c=[{type:12,data:s},{type:12,data:t},{type:12,data:e}];return{name:`GeneratePositionIds`,shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:o,dataType:7}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:e=>{let t=L(`seq_lens`,n.dataType,n.dims),i=L(`total_seq_lens`,r.dataType,r.dims),a=V(`pos_ids`,7,o);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`batch_size`,type:`u32`}]).declareVariables(t,i,a)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let total_sequence_length = u32(${i.getByOffset(`0`)});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${t.getByOffset(`batch_idx`)};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${a.setByOffset(`global_idx`,`pos_id`)}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${a.setByOffset(`global_idx`,`pos_id`)}
    } else if (global_idx < uniforms.batch_size) {
      ${a.setByOffset(`global_idx`,`seqlen`)}
    };
  }
  `}}},yv=(e,t)=>{let n=gC(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=le({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(Mc([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h,g;if(t.doRotary){let r=e.compute(yC(n.batchSize,n.sequenceLength,c,l),{inputs:[c,l],outputs:[-1]})[0],i=e.inputs[7],a=e.inputs[8],o=le({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),s=[f,r,i,a],u=[-1];h=e.compute(Ja(s,o),{inputs:s,outputs:u})[0],s.splice(0,1,p);let d=le({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});g=e.compute(Ja(s,d),{inputs:s,outputs:u})[0]}let _=jo(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?h:f,void 0,0),v=bv(e,t.doRotary?g:p,n),y=bv(e,m,n);co(e,_,v,y,void 0,void 0,o,s,void 0,n,c,l)}}),wv,_C,wC,vv,xv=N(()=>{ue(),pe(),Qn(),he(),wv=(e,t,n,r,i,a,o,s)=>{let c=Pe(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...W(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=L(`x`,t.dataType,3,c),a=[i,L(`scale`,n.dataType,n.dims),L(`bias`,r.dataType,r.dims),V(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Zt(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${Zt(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},_C=(e,t,n)=>{let r=t[0].dims,i=r,a=2,o=r[0],s=r[1],c=D.sizeFromDimension(r,2),l=Pe(c),u=D.size(i)/l,d=wv(e,t[0],t[1],t[2],o,c,s,n.epsilon),f=[o,s,c/l],p=[o,s];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${l}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},...W(f,p,f)]}),getShaderSource:e=>{let n=L(`x`,t[0].dataType,f.length,l),r=L(`scale_shift`,1,p.length,2),i=V(`output`,t[0].dataType,f.length,l),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],d]})},wC=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=D.sizeFromDimension(r,1)/o,c=Pe(o),l=D.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(lt(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=wv(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=Fe(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=L(`input`,t[0].dataType,t[0].dims,c),s=V(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},vv=(e,t)=>{t.format===`NHWC`?wC(e,e.inputs,t):_C(e,e.inputs,t)}}),vC,xC,Tv,Iv=N(()=>{ue(),pe(),he(),vC=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},xC=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=D.normalizeAxis(t.axis,i.length),l=D.sizeToDimension(i,c),u=D.sizeFromDimension(i,c),d=D.size(a.dims),f=o?D.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=Pe(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=Fe(e[0].dataType),i=[L(`x`,e[0].dataType,e[0].dims,m),L(`scale`,a.dataType,a.dims,m)];return o&&i.push(L(`bias`,o.dataType,o.dims,m)),i.push(V(`output`,e[0].dataType,s,m)),_&&i.push(V(`mean_data_output`,1,p)),v&&i.push(V(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${xc(`f32`,m)};
    var mean_square_vector = ${xc(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Wr(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Zt(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Zt(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Wr(n,m,`x[j + offset]`)};
      let f32scale = ${Wr(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${Wr(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},Tv=(e,t)=>{vC(e.inputs),e.compute(xC(e.inputs,t,e.outputCount))}}),TC,Sv,$v=N(()=>{pe(),ja(),Ka(),TC=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},Sv=e=>{TC(e.inputs);let t=Un.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(qa(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=D.size(e.inputs[0].dims.slice(0,-2)),o=D.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(qo(c,{activation:``},t,s),{inputs:c})}else e.compute(qo(e.inputs,{activation:``},t))}}}),IC,SC,$C,Av,Ov,Pv=N(()=>{ue(),pe(),Ye(),he(),IC=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!D.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(D.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(D.size(n)!==r)throw Error(`zeroPoints input size error.`)}},SC=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=D.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Pe(t.k),f=Pe(l),p=Pe(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=D.size(m)/p/h,_=64,v=[],y=[c,i,a/d],b=D.convertShape(e[1].dims).slice();b.splice(-1,1,l/f),v.push(...W(y)),v.push(...W(b)),v.push(...W(e[2].dims)),e.length===4&&v.push(...W(D.convertShape(e[3].dims)));let x=[c,i,o/p];return v.push(...W(x)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:v}),getShaderSource:n=>{let r=y.length,i=L(`a`,e[0].dataType,r,d),a=L(`b`,12,b.length,f),o=L(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?L(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=x.length,m=V(`output`,e[0].dataType,u,p),g=Fe(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),v=Math.floor(32/t.bits),S=Math.floor(v/8),C=()=>{let e=``;for(let n=0;n<S;n++){let r=n*t.bits*4,a=r+t.bits;e+=`
          // reuse a data (pass ${n})
            var input_offset${n>0?n:``} = ${n===0?i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`):`input_offset`};
            var a_data${n>0?n:``}: ${_};
            for (var j${n>0?n:``}: u32 = 0; j${n>0?n:``} < ${8/d}; j${n>0?n:``}++) {
              a_data${n>0?n:``}[j${n>0?n:``}] = ${i.getByOffset(`input_offset${n>0?n:``}`)};
              input_offset${n>0?n:``}++;
            }
          `;for(let i=0;i<p*h;i++)e+=`
            b_value = ${f===1?`b${i}_data`:`b${i}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${n*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${r}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${a}u) & b_mask);`}
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,t)=>`(b_quantized_values[${t}] - ${c?`zero_point${i}`:`zero_point`}) * scale${i}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${i}`:`zero_point`}`).join(`,`)})) * scale${i};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(i/p)}]${p>1?`[${i%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data${n>0?n:``}[${t}] * b_dequantized_values[${t}]`:`dot(a_data${n>0?n:``}[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `}return e},w=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${g}(${(2**(t.bits-1)).toFixed(1)});`}
            `;for(let n=0;n<p*h;n++)e+=`
            let scale${n} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${n} = ${g}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:``}
            col_index += 1;`;return e},T=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?`0x03030303u`:`0x0F0F0F0Fu`};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${w()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${T()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${C()}
                word_offset += ${v/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},$C=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=D.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=Pe(t.k),f=Pe(l),p=s.concat([i,o]),m=128,h=o%8==0?8:o%4==0?4:1,g=128/h,_=Math.floor(32/t.bits),v=g*f*_,y=v/d,b=v/t.blockSize,x=D.size(p)/h,S=[],C=[c,i,a/d],w=D.convertShape(e[1].dims).slice();w.splice(-1,1,l/f),S.push(...W(C)),S.push(...W(w)),S.push(...W(e[2].dims)),e.length===4&&S.push(...W(D.convertShape(e[3].dims)));let T=[c,i,o];return S.push(...W(T)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${g};${h}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x},programUniforms:S}),getShaderSource:n=>{let r=C.length,i=L(`a`,e[0].dataType,r,d),a=L(`b`,12,w.length,f),o=L(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?L(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=T.length,u=V(`output`,e[0].dataType,l),p=Fe(e[0].dataType),m=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${y}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${g}>, ${h}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([g,h,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${b} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${y};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${y}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${b} + local_id.x;
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${p}(${(2**(t.bits-1)).toFixed(1)});`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              ${(()=>{let e=Math.floor(_/8),n=``;for(let r=0;r<e;r++){let e=r*t.bits*4,i=e+t.bits;n+=`
              ${m()}
              {${t.bits===2?`
                let half_word = b_value >> ${r*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${e}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${i}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
                let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              }
              word_offset += ${8/d};`}return n})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${h}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${g}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},Av=(e,t)=>{IC(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute($C(e.inputs,t)):e.compute(SC(e.inputs,t))},Ov=e=>le(e)}),AC,OC,PC,EC,CC,DC,kC,NC,Ev,Cv=N(()=>{ue(),pe(),he(),AC=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},OC=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${Q(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Q(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${Q(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},PC=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${Q(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Q(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Q(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Q(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},EC=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${Q(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Q(`uniforms.x_shape`,i,t)})) {
                  k = i32(${Q(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${Q(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},CC=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${Q(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${Q(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${Q(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${Q(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${Q(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},DC=(e,t,n)=>{switch(n.mode){case 0:return OC(e,t,n.pads.length);case 1:return PC(e,t,n.pads.length);case 2:return EC(e,t,n.pads.length);case 3:return CC(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},kC=(e,t)=>{let n=D.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:D.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...W(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(D.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=V(`output`,e[0].dataType,n.length),s=L(`x`,e[0].dataType,r.length),c=s.type.value,l=DC(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},NC=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}else return t},Ev=(e,t)=>{AC(e.inputs);let n=NC(e.inputs,t);e.compute(kC(e.inputs,n),{inputs:[0]})}}),Ya,Dv,kv,Nv,Lv,LC,RC,Rv,zv,Mv,Bv,Fv,Vv,Gv,Uv,Wv,Hv,qv,jv,Kv=N(()=>{ft(),ue(),pe(),he(),Ya=e=>{if(ce.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},Dv=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();Gr.adjustPoolAttributes(n,i,o,s,c,l);let u=Gr.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},kv=(e,t)=>{let n=t.format===`NHWC`,r=D.size(e),i=D.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}else{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=D.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},Nv=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=V(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}else{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${Q(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${Q(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${Q(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${Q(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},Lv=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,LC=e=>`${Lv(e)};${e.countIncludePad}`,RC=e=>`${Lv(e)};${e.storageOrder};${e.dilations}`,Rv=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),zv=(e,t,n,r)=>{let[i,a]=Dv(t,r,n),o=L(`x`,t.dataType,t.dims.length),s=o.type.value,c=`value += x_val;`,l=``;i.countIncludePad?l+=`value /= ${s}(uniforms.kernelSize);`:l+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[u,d,f,p,m]=kv(a,i);return u.push(...W(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${p};${m}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:u}),getShaderSource:e=>Nv(e,o,t.dims.length,a.length,i,`value += x_val;`,l,0,d,f,p,m)}},Mv=e=>{let t=e.count_include_pad!==0,n=Rv(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:LC(r)}},Bv=(e,t)=>{Ya(e.inputs),e.compute(zv(`AveragePool`,e.inputs[0],!1,t))},Fv={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Vv=e=>{let t=e.format;return{format:t,...Fv,cacheKey:t}},Gv=(e,t)=>{Ya(e.inputs),e.compute(zv(`GlobalAveragePool`,e.inputs[0],!0,t))},Uv=(e,t,n,r)=>{let[i,a]=Dv(t,r,n),o=`
      value = max(x_val, value);
    `,s=``,c=L(`x`,t.dataType,t.dims.length),l=[`rank`],[u,d,f,p,m]=kv(a,i);return u.push(...W(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${f};${p};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(D.size(a)/64)},programUniforms:u}),getShaderSource:e=>Nv(e,c,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,d,f,p,m)}},Wv=(e,t)=>{Ya(e.inputs),e.compute(Uv(`MaxPool`,e.inputs[0],!1,t))},Hv=e=>{let t=e.storage_order,n=e.dilations,r=Rv(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:RC(i)}},qv=e=>{let t=e.format;return{format:t,...Fv,cacheKey:t}},jv=(e,t)=>{Ya(e.inputs),e.compute(Uv(`GlobalMaxPool`,e.inputs[0],!0,t))}}),MC,BC,Xv,Zv,Jv=N(()=>{ue(),pe(),Ye(),he(),MC=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},BC=(e,t)=>{let n=D.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=D.size(a),c=r===3||r===2,l=c?[Math.ceil(D.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(D.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=Pe(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=L(`input`,c?12:r,l.length,v),b=L(`scale`,o,u.length),x=d?L(`zero_point`,c?12:r,f.length):void 0,S=V(`output`,o,a.length,_),C=[y,b];x&&C.push(x);let w=[l,u];d&&w.push(f);let T=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...W(...w,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...C,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:T})}},Xv=(e,t)=>{MC(e.inputs,t),e.compute(BC(e.inputs,t))},Zv=e=>le({axis:e.axis,blockSize:e.blockSize})}),FC,VC,Yv,Qv=N(()=>{ft(),ue(),he(),FC=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},VC=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...W(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=V(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},Yv=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ce.webgpu.validateInputContent&&FC(t,n,r),e.compute(VC(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),GC,UC,ex,tx,nx=N(()=>{ue(),pe(),Ye(),he(),GC=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},UC=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=1,o=Math.ceil(D.sizeToDimension(r,r.length-1)/1),s=r[r.length-1],c=D.sizeFromDimension(n,s),l=[{type:12,data:o},{type:12,data:s},{type:12,data:c},...W(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:n=>{let r=L(`indices`,e[1].dataType,e[1].dims.length),a=L(`updates`,e[2].dataType,e[2].dims.length,1),o=t.reduction!==`none`&&t.reduction!==``?O_(`output`,e[0].dataType,i.length):V(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(r,a,o)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${GC(t.reduction,`output[data_offset + i]`,`value`,o.type.value)}
  }

      }`}}},ex=e=>le({reduction:e.reduction}),tx=(e,t)=>{e.compute(UC(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),WC,HC,qC,rx,jC,KC,XC,ZC,JC,YC,QC,eD,ox,tD,nD,rD,oD,iD,ix,ax,sx=N(()=>{ue(),pe(),Ye(),he(),WC=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},HC=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},qC=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);WC(r,t),t.axes.length>0&&HC(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},rx=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,jC=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${rx(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${rx(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,KC=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,XC=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},ZC=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e));else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},JC=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},YC=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${Q(`uniforms.scales`,`i`,r)};
        var roi_low = ${Q(`uniforms.roi`,`i`,i)};
        var roi_hi = ${Q(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Q(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${Q(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,QC=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${Q(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Q(`uniforms.roi`,`i`,a)};
          var roi_hi = ${Q(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${Q(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${Q(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,eD=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${Q(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,ox=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,tD=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${ox(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},nD=(e,t,n,r,i,a,o,s,c,l)=>{let u=n.length===2,d=!0,[f,p]=u?[0,1]:[2,3],m=e.type.value,h=o=>{let u=o===f?`row`:`col`;return`
      fn ${u}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${u}: ${m} = originalIdx + ${m}(i);
          if (${u} < 0 || ${u} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${u} = max(0, min(${u}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${u})`)};
          data[i + 1] = ${o===f?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${h(f)};
    ${h(p)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},rD=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${ox(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},oD=(e,t,n,r,i,a)=>{let o=e.dims,s=XC(a,t.axes,o.length),c=ZC(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=JC(o,l,t)));let u=V(`output`,e.dataType,c.length),d=L(`input`,e.dataType,o.length),f=D.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${jC(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${eD(d,o)};
              ${KC(t.nearestMode,n,g)};
              ${QC(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${YC(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${tD(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${rD(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${nD(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...W(o,c)]})}},iD=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},ix=(e,t)=>{let n=[],r=[],i=[],a=iD(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);qC(e.inputs,t,a,n,r,i),e.compute(oD(e.inputs[0],t,a,n,r,i),{inputs:[0]})},ax=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return le({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),aD,sD,ux,lx=N(()=>{ue(),pe(),he(),aD=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},sD=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=D.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=64,_=Pe(l),v=[{type:12,data:c},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],y=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[L(`x`,e[0].dataType,e[0].dims,_),L(`skip`,e[1].dataType,e[1].dims,_),L(`gamma`,e[2].dataType,e[2].dims,_)];d&&r.push(L(`beta`,e[3].dataType,e[3].dims,_)),f&&r.push(L(`bias`,e[4].dataType,e[4].dims,_)),r.push(V(`output`,e[0].dataType,s,_)),p&&r.push(V(`mean_output`,1,u)),m&&r.push(V(`inv_std_output`,1,u)),h&&r.push(V(`input_skip_bias_sum`,e[0].dataType,s,_));let a=Fe(e[0].dataType),o=Fe(1,_);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${Wr(a,_,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Zt(`sum`,_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Zt(`square_sum`,_)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},b=[{dims:s,dataType:e[0].dataType}];return n>1&&b.push({dims:u,dataType:1}),n>2&&b.push({dims:u,dataType:1}),n>3&&b.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${_};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:y,getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:v})}},ux=(e,t)=>{aD(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(sD(e.inputs,t,e.outputCount,!1),{outputs:n})}}),uD,Qa,lD,cx,cD,dD,dx,px,fx=N(()=>{ue(),pe(),Ye(),he(),uD=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},Qa=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`);return n},lD=(e,t)=>{if(e.length>1){let t=Qa(e,1),n=Qa(e,2),r=Qa(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),le({starts:t,ends:n,axes:r})}else return t},cx=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},cD=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${Q(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${Q(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${Q(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${Q(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,dD=(e,t)=>{let n=e[0].dims,r=D.size(n),i=t.axes.length>0?D.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Qa(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>cx(e,t,n,i,a)),s=t.ends.map((e,t)=>cx(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t];o[t]=i+r*a[t],s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=V(`output`,e[0].dataType,l.length),f=L(`input`,e[0].dataType,e[0].dims.length),p=D.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...W(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${cD(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},dx=(e,t)=>{uD(e.inputs,t);let n=lD(e.inputs,t);e.compute(dD(e.inputs,n),{inputs:[0]})},px=e=>{let t=e.starts,n=e.ends,r=e.axes;return le({starts:t,ends:n,axes:r})}}),pD,fD,hx,mx,gx=N(()=>{ue(),pe(),Ye(),Qn(),he(),pD=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},fD=(e,t)=>{let n=e.inputs[0],r=n.dims,i=D.size(r),a=r.length,o=D.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(lt(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=Pe(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=L(`x`,c.dataType,c.dims,p),v=V(`result`,c.dataType,c.dims,p),y=_.type.value,b=Fe(c.dataType)===`f32`?`var threadMax = ${y}(-3.4028234663852886e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${Zt(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${y}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(lt(x,l),{inputs:[x]})},hx=(e,t)=>{pD(e.inputs),fD(e,t)},mx=e=>le({axis:e.axis})}),bx,hD,mD,gD,yx,_x=N(()=>{ue(),pe(),he(),bx=e=>Array.from(e.getBigInt64Array(),Number),hD=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(bx(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},mD=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},gD=(e,t)=>{let n=e[0].dims,r=t??bx(e[1]),i=mD(n,r),a=D.size(i),o=e[0].dataType,s=L(`input`,o,n.length),c=V(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...W(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},yx=e=>{hD(e.inputs),e.compute(gD(e.inputs),{inputs:[0]})}}),bD,yD,wx,vx=N(()=>{ue(),pe(),he(),bD=(e,t,n,r,i)=>{let a=V(`output_data`,i,n.length,4),o=L(`a_data`,t[1].dataType,t[1].dims.length,4),s=L(`b_data`,t[2].dataType,t[2].dims.length,4),c=L(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},yD=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(D.areEqual(t,n)&&D.areEqual(n,r)),o=t,s=D.size(t);if(a){let e=Un.calcShape(Un.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=D.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>bD(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...W(r,t,n,o)]})}},wx=e=>{e.compute(yD(e.inputs))}}),xx,Tx=N(()=>{r0(),Va(),a0(),u0(),j0(),ow(),sw(),Tw(),Ew(),kw(),Rw(),Vw(),Ww(),qw(),Xw(),Yw(),tv(),ov(),sv(),cv(),_v(),xv(),Iv(),$v(),Pv(),zc(),Cv(),Kv(),Jv(),Qv(),nx(),Ba(),sx(),Fc(),lx(),fx(),gx(),Bc(),_x(),Qn(),Ua(),vx(),xx=new Map([[`Abs`,[l0]],[`Acos`,[c0]],[`Acosh`,[d0]],[`Add`,[K0]],[`ArgMax`,[n0,Ic]],[`ArgMin`,[t0,Ic]],[`Asin`,[p0]],[`Asinh`,[f0]],[`Atan`,[h0]],[`Atanh`,[m0]],[`Attention`,[o0]],[`AveragePool`,[Bv,Mv]],[`BatchNormalization`,[i0]],[`BiasAdd`,[s0]],[`BiasSplitGelu`,[q0]],[`Cast`,[b0,g0]],[`Ceil`,[_0]],[`Clip`,[y0]],[`Concat`,[iw,aw]],[`Conv`,[kc,Dc]],[`ConvTranspose`,[Pw,Aw]],[`Cos`,[w0]],[`Cosh`,[v0]],[`CumSum`,[Cw,Dw]],[`DepthToSpace`,[Nw,Lw]],[`DequantizeLinear`,[Xv,Zv]],[`Div`,[X0]],[`Einsum`,[Bw,Fw]],[`Elu`,[x0,Wo]],[`Equal`,[Z0]],[`Erf`,[T0]],[`Exp`,[I0]],[`Expand`,[Uw]],[`FastGelu`,[Hw]],[`Floor`,[S0]],[`FusedConv`,[kc,Dc]],[`Gather`,[Kw,jw]],[`GatherElements`,[rv,nv]],[`GatherBlockQuantized`,[Qw,ev]],[`GatherND`,[Zw,Jw]],[`Gelu`,[$0]],[`Gemm`,[av,iv]],[`GlobalAveragePool`,[Gv,Vv]],[`GlobalMaxPool`,[jv,qv]],[`Greater`,[ew]],[`GreaterOrEqual`,[nw]],[`GridSample`,[uv,lv]],[`GroupQueryAttention`,[yv]],[`HardSigmoid`,[N0,k0]],[`InstanceNormalization`,[vv]],[`LayerNormalization`,[Tv]],[`LeakyRelu`,[A0,Wo]],[`Less`,[tw]],[`LessOrEqual`,[rw]],[`Log`,[U0]],[`MatMul`,[Sv]],[`MatMulNBits`,[Av,Ov]],[`MaxPool`,[Wv,Hv]],[`Mul`,[J0]],[`MultiHeadAttention`,[fv,pv]],[`Neg`,[P0]],[`Not`,[O0]],[`Pad`,[Ev]],[`Pow`,[Y0]],[`QuickGelu`,[W0,Wo]],[`Range`,[Yv]],[`Reciprocal`,[E0]],[`ReduceMin`,[X_]],[`ReduceMean`,[W_]],[`ReduceMax`,[K_]],[`ReduceSum`,[J_]],[`ReduceProd`,[Z_]],[`ReduceL1`,[H_]],[`ReduceL2`,[q_]],[`ReduceLogSum`,[Q_]],[`ReduceLogSumExp`,[j_]],[`ReduceSumSquare`,[Y_]],[`Relu`,[C0]],[`Resize`,[ix,ax]],[`RotaryEmbedding`,[gv]],[`ScatterND`,[tx,ex]],[`Sigmoid`,[D0]],[`Sin`,[L0]],[`Sinh`,[R0]],[`Slice`,[dx,px]],[`SkipLayerNormalization`,[ux]],[`Split`,[hv,mv]],[`Sqrt`,[z0]],[`Softmax`,[hx,mx]],[`Sub`,[Q0]],[`Tan`,[M0]],[`Tanh`,[F0]],[`ThresholdedRelu`,[G0,Wo]],[`Tile`,[yx]],[`Transpose`,[C_,D_]],[`Where`,[wx]]])}),es,Ix=N(()=>{ft(),Gn(),he(),es=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){At(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),_t(e.programInfo.name)}dispose(){}build(e,t){At(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=P_(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});me(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return _t(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}else return[o,o,1]}}}),Sx={};Sr(Sx,{WebGpuBackend:()=>Gc});var _D,wD,Vc,Gc,$x=N(()=>{ft(),ue(),Gn(),pc(),A_(),Tx(),Ix(),_D=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},wD=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${_D(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},Vc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Gc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`),this.device=await t.requestDevice(r),this.adapterInfo=new Vc(t.info||await t.requestAdapterInfo()),this.gpuDataManager=$_(this),this.programManager=new es(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Pa(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,`device`,{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,`adapter`,{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;At(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:Vn(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:Vn(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Vn(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Vn(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}start time: ${p} ns, execution time: ${m-p} ns`)}pi(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),_t()}run(e,t,n,r,i,a){At(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return _t(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i});let n=16;e=Math.ceil(e/16)*16;let r=new ArrayBuffer(e);l.forEach((e,n)=>{let i=t[n],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(r,i,a.length).set(a);else if(e.type===12)new Uint32Array(r,i,a.length).set(a);else if(e.type===10)new Uint16Array(r,i,a.length).set(a);else if(e.type===1)new Float32Array(r,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${Vn(e.type)}`)});let i=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(i.buffer,0,r,0,e),this.gpuDataManager.release(i.id),p={offset:0,size:e,buffer:i.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=wD(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),me(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(me(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),_t(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=xx.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),me(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await yc(this,e,t);return Ca(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode===`default`||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){me(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){me(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){me(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ax={};Sr(Ax,{init:()=>vD});var Ko,Uc,vD,Ox=N(()=>{ue(),Gn(),pe(),x_(),Ko=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=D.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=D.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=D.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=D.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(D.size(t)!==D.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},Uc=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new Ko(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new Ko(this.module,t,this.output(e,n),n),(e,t)=>{let n=_r(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new Ko(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},vD=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=($x(),Xr(Sx)).WebGpuBackend,a=new e;await a.initialize(n,r),i(`webgpu`,[a,e=>a.alloc(Number(e)),e=>a.free(e),(e,n,r,i=!1)=>{if(i)me(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(e)}, dst=${Number(n)}, size=${Number(r)}`),a.memcpy(Number(e),Number(n));else{me(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(e)}, gpuDataId=${Number(n)}, size=${Number(r)}`);let i=t.HEAPU8.subarray(Number(e>>>0),Number(e>>>0)+Number(r));a.upload(Number(n),i)}},async(e,n,r)=>{me(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${e}, dataOffset=${n}, size=${r}`),await a.download(Number(e),()=>t.HEAPU8.subarray(Number(n)>>>0,Number(n+r)>>>0))},(e,n,r)=>a.createKernel(e,Number(n),r,t.UTF8ToString(t._JsepGetNodeName(Number(n)))),e=>a.releaseKernel(e),(e,n,r,i)=>{me(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${r}, kernel=${e}, contextDataOffset=${n}`);let o=new Uc(t,a,Number(n));return a.computeKernel(Number(e),o,i)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let e=new La(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n),(t,n)=>e.registerMLContext(t,n),!!n.trace])}}}),xD,ya,_a,Hr,TD,Px,Fo,wa,va,Ex,xa,Ta,Ia,oc=N(()=>{ft(),l_(),d_(),ue(),br(),$a(),cc(),xD=(e,t)=>{Me()._OrtInit(e,t)!==0&&Oe(`Can't initialize onnxruntime.`)},ya=async e=>{xD(e.wasm.numThreads,Go(e.logLevel))},_a=async(e,t)=>{Me().asyncInit?.();let n=e.webgpu.adapter;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);if(n){if(typeof n.limits!=`object`||typeof n.features!=`object`||typeof n.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let t=e.webgpu.powerPreference;if(t!==void 0&&t!==`low-power`&&t!==`high-performance`)throw Error(`Invalid powerPreference setting: "${t}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:t,forceFallbackAdapter:r}),!n)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}}if(t===`webnn`&&(typeof navigator>`u`||!navigator.ml))throw Error(`WebNN is not supported in current environment`);{let r=(Ox(),Xr(Ax)).init;t===`webgpu`&&await r(`webgpu`,Me(),e,n),t===`webnn`&&await r(`webnn`,Me(),e)}},Hr=new Map,TD=e=>{let t=Me(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&Oe(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},Px=(e,t)=>{let n=Me(),r=n.stackSave(),i=0;try{let r=n.PTR_SIZE,a=n.stackAlloc(2*r);n._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&Oe(`Can't get session input/output metadata.`);let o=Number(n.getValue(a,`*`));i=Number(n.getValue(a+r,`*`));let s=n.HEAP32[i/4];if(s===0)return[o,0];let c=n.HEAPU32[i/4+1],l=[];for(let e=0;e<c;e++){let t=Number(n.getValue(i+8+e*r,`*`));l.push(t===0?Number(n.getValue(i+8+(e+c)*r,`*`)):n.UTF8ToString(t))}return[o,s,l]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Fo=e=>{let t=Me(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},wa=async(e,t)=>{let n,r,i=Me();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Fo(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=await c_(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(Uo(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;n?i.currentContext=n:r?i.currentContext=await i.webnnCreateMLContext(r):i.currentContext=await i.webnnCreateMLContext({deviceType:a,powerPreference:o})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),i.webgpuOnCreateSession?.(a),a===0&&Oe(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=TD(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[],g=[],_=[];for(let t=0;t<e;t++){let[e,n,r]=Px(a,t);e===0&&Oe(`Can't get an input name.`),l.push(e);let o=i.UTF8ToString(e);p.push(o),h.push(n===0?{name:o,isTensor:!1}:{name:o,isTensor:!0,type:Vn(n),shape:r})}for(let n=0;n<d;n++){let[r,o,s]=Px(a,n+e);r===0&&Oe(`Can't get an output name.`),u.push(r);let c=i.UTF8ToString(r);m.push(c),g.push(o===0?{name:c,isTensor:!1}:{name:c,isTensor:!0,type:Vn(o),shape:s});{if(f&&t?.preferredOutputLocation===void 0){_.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[c]??`cpu`,n=i.webnnIsGraphOutput;if(e===`cpu`&&n&&n(a,c)){_.push(`ml-tensor-cpu-output`);continue}if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(e)}}let v=null;return _.some(e=>e===`gpu-buffer`||e===`ml-tensor`||e===`ml-tensor-cpu-output`)&&(s=i._OrtCreateBinding(a),s===0&&Oe(`Can't create IO binding.`),v={handle:s,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(e=>e===`ml-tensor-cpu-output`?`ml-tensor`:e).map(e=>lc(e))}),Hr.set(a,[a,l,u,v,f,!1]),[a,p,m,h,g]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&Oe(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&Oe(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Oe(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},va=e=>{let t=Me(),n=Hr.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Oe(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&Oe(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&Oe(`Can't release session.`),Hr.delete(e)},Ex=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Me(),c=s.PTR_SIZE,l=e[0],u=e[1],d=e[3],f=d,p,m;if(l===`string`&&(d===`gpu-buffer`||d===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(o&&d!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d===`gpu-buffer`){let t=e[2].gpuBuffer;m=_r(yr(l),u);{let e=s.jsepRegisterBuffer;if(!e)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);p=e(r,a,t,m)}}else if(d===`ml-tensor`){let t=e[2].mlTensor;m=_r(yr(l),u);let n=s.webnnRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);p=n(r,t,yr(l),u)}else{let t=e[2];if(Array.isArray(t)){m=c*t.length,p=s._malloc(m),n.push(p);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);s.setValue(p+e*c,Et(t[e],n),`*`)}}else{let e=s.webnnIsGraphInput,a=s.webnnIsGraphOutput;if(l!==`string`&&e&&a){let o=s.UTF8ToString(i);if(e(r,o)||a(r,o)){let e=yr(l);m=_r(e,u),f=`ml-tensor`;let n=s.webnnCreateTemporaryTensor,i=s.webnnUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,u);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),p=a}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}}let h=s.stackSave(),g=s.stackAlloc(4*u.length);try{u.forEach((e,t)=>s.setValue(g+t*c,e,c===4?`i32`:`i64`));let e=s._OrtCreateTensor(yr(l),p,m,g,u.length,lc(f));e===0&&Oe(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(e)}finally{s.stackRestore(h)}},xa=async(e,t,n,r,i,a)=>{let o=Me(),s=o.PTR_SIZE,c=Hr.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=[],C=o.stackSave(),w=o.stackAlloc(h*s),T=o.stackAlloc(h*s),E=o.stackAlloc(g*s),O=o.stackAlloc(g*s);try{[_,v]=u_(a),sr(`wasm prepareInputOutputTensor`);for(let r=0;r<h;r++)await Ex(n[r],y,x,e,u[t[r]],t[r],p);for(let t=0;t<g;t++)await Ex(i[t],b,x,e,d[r[t]],h+r[t],p);ur(`wasm prepareInputOutputTensor`);for(let e=0;e<h;e++)o.setValue(w+e*s,y[e],`*`),o.setValue(T+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(E+e*s,b[e],`*`),o.setValue(O+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);sr(`wasm bindInputsOutputs`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&Oe(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?(S.push(b[t]),o._OrtBindOutput(n,d[c],b[t],0)!==0&&Oe(`Can't bind pre-allocated output[${t}] for session=${e}.`)):o._OrtBindOutput(n,d[c],0,s[c])!==0&&Oe(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}ur(`wasm bindInputsOutputs`),Hr.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l),o.webnnOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,E,_):await o._OrtRun(l,T,w,h,O,g,E,_),c!==0&&Oe(`failed to call OrtRun().`);let C=[],k=[];sr(`wasm ProcessOutputTensor`);for(let t=0;t<g;t++){let n=Number(o.getValue(E+t*s,`*`));if(n===b[t]||S.includes(b[t])){C.push(i[t]),n!==b[t]&&o._OrtReleaseTensor(n)!==0&&Oe(`Can't release tensor.`);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),l=!1,u,d=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&Oe(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));d=o.getValue(c+s,`*`);let p=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(p+e*s,i)));o._OrtFree(p)!==0&&Oe(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);u=Vn(a);let _=f?.outputPreferredLocations[r[t]];if(u===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(d+t*s,`*`),r=o.getValue(d+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}C.push([u,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(d),r=_r(a,g);if(r===void 0||!Aa(u))throw Error(`Unsupported data type: ${u}`);l=!0,C.push([u,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,u),dispose:()=>{o._OrtReleaseTensor(n)!==0&&Oe(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.webnnEnsureTensor,r=o.webnnIsGraphInputOutputTypeSupported;if(!t||!r)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(_r(a,g)===void 0||!Oa(u))throw Error(`Unsupported data type: ${u}`);if(!r(e,u,!1))throw Error(`preferredLocation "ml-tensor" for ${u} output is not supported by current WebNN Context.`);let i=await t(e,d,a,h,!1);l=!0,C.push([u,h,{mlTensor:i,download:o.webnnCreateMLTensorDownloader(d,u),dispose:()=>{o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n)}},`ml-tensor`])}else if(_===`ml-tensor-cpu-output`&&g>0){let e=o.webnnCreateMLTensorDownloader(d,u)(),t=C.length;l=!0,k.push((async()=>{let r=[t,await e];return o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n),r})()),C.push([u,h,[],`cpu`])}else{let e=new(lo(u))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(d,d+e.byteLength)),C.push([u,h,e,`cpu`])}}finally{o.stackRestore(a),u===`string`&&d&&o._free(d),l||o._OrtReleaseTensor(n)}}f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&Oe(`Can't clear bound outputs.`),Hr.set(e,[l,u,d,f,p,!1]));for(let[e,t]of await Promise.all(k))C[e][2]=t;return ur(`wasm ProcessOutputTensor`),C}finally{o.webnnOnRunEnd?.(l),o.stackRestore(C),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},Ta=e=>{let t=Me(),n=Hr.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&Oe(`Can't get an profile file name.`),t._OrtFree(i)},Ia=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),qr,Vt,Xo,ns,rs,ts,Wc,Hc,ho,mo,SD,Cx,Dx,kx,Nx,Lx,Rx,zx,qc=N(()=>{ft(),oc(),br(),ga(),qr=()=>!!ce.wasm.proxy&&typeof document<`u`,Xo=!1,ns=!1,rs=!1,Hc=new Map,ho=(e,t)=>{let n=Hc.get(e);n?n.push(t):Hc.set(e,[t])},mo=()=>{if(Xo||!ns||rs||!Vt)throw Error(`worker not ready`)},SD=e=>{switch(e.data.type){case`init-wasm`:Xo=!1,e.data.err?(rs=!0,Wc[1](e.data.err)):(ns=!0,Wc[0]()),ts&&=(URL.revokeObjectURL(ts),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=Hc.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Cx=async()=>{if(!ns){if(Xo)throw Error(`multiple calls to 'initWasm()' detected.`);if(rs)throw Error(`previous call to 'initWasm()' failed.`);if(Xo=!0,qr())return new Promise((e,t)=>{Vt?.terminate(),i_().then(([n,r])=>{try{Vt=r,Vt.onerror=e=>t(e),Vt.onmessage=SD,Wc=[e,t];let i={type:`init-wasm`,in:ce};!i.in.wasm.wasmPaths&&(n||ac)&&(i.in.wasm.wasmPaths={wasm:new URL(`/t/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm`,``+import.meta.url).href}),Vt.postMessage(i),ts=n}catch(e){t(e)}},t)});try{await ba(ce.wasm),await ya(ce),ns=!0}catch(e){throw rs=!0,e}finally{Xo=!1}}},Dx=async e=>{if(qr())return mo(),new Promise((t,n)=>{ho(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:ce}};Vt.postMessage(r)});await _a(ce,e)},kx=async e=>qr()?(mo(),new Promise((t,n)=>{ho(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};Vt.postMessage(r,[e.buffer])})):Fo(e),Nx=async(e,t)=>{if(qr()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return mo(),new Promise((n,r)=>{ho(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Vt.postMessage(i,a)})}else return wa(e,t)},Lx=async e=>{if(qr())return mo(),new Promise((t,n)=>{ho(`release`,[t,n]);let r={type:`release`,in:e};Vt.postMessage(r)});va(e)},Rx=async(e,t,n,r,i,a)=>{if(qr()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return mo(),new Promise((i,o)=>{ho(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};Vt.postMessage(c,Ia(s))})}else return xa(e,t,n,r,i,a)},zx=async e=>{if(qr())return mo(),new Promise((t,n)=>{ho(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};Vt.postMessage(r)});Ta(e)}}),Mx,$D,os,Bx=N(()=>{ft(),qc(),ue(),ma(),cc(),Mx=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},$D=e=>{switch(e[3]){case`cpu`:return new $t(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Aa(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return $t.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Oa(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return $t.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},os=class{async fetchModelAndCopyToWasmMemory(e){return kx(await Uo(e))}async loadModel(e,t){At();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Nx(n,t),_t()}async dispose(){return Lx(this.sessionId)}async run(e,t,n){At();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>Mx(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?Mx(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await Rx(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??$D(l[e]);return _t(),u}startProfiling(){}endProfiling(){zx(this.sessionId)}}}),Vx={};Sr(Vx,{OnnxruntimeWebAssemblyBackend:()=>is,initializeFlags:()=>Fx,wasmBackend:()=>AD});var Fx,is,AD,Gx=N(()=>{ft(),qc(),Bx(),Fx=()=>{(typeof ce.wasm.initTimeout!=`number`||ce.wasm.initTimeout<0)&&(ce.wasm.initTimeout=0);let e=ce.wasm.simd;if(typeof e!=`boolean`&&e!==void 0&&e!==`fixed`&&e!==`relaxed`&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ce.wasm.simd=!1),typeof ce.wasm.proxy!=`boolean`&&(ce.wasm.proxy=!1),typeof ce.wasm.trace!=`boolean`&&(ce.wasm.trace=!1),typeof ce.wasm.numThreads!=`number`||!Number.isInteger(ce.wasm.numThreads)||ce.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)ce.wasm.numThreads=1;else{let e=typeof navigator>`u`?Ps(`node:os`).cpus().length:navigator.hardwareConcurrency;ce.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},is=class{async init(e){Fx(),await Cx(),await Dx(e)}async createInferenceSessionHandler(e,t){let n=new os;return await n.loadModel(e,t),n}},AD=new is});ft(),ft(),ft();var mf=`1.26.0`,sK=Ls;{let e=(qy(),Xr(Hy)).onnxjsBackend;ar(`webgl`,e,-10)}{let e=(Gx(),Xr(Vx)).wasmBackend;ar(`webgpu`,e,5),ar(`webnn`,e,5),ar(`cpu`,e,10),ar(`wasm`,e,10)}Object.defineProperty(ce.versions,`web`,{value:mf,enumerable:!0});export{iI as InferenceSession,pi as TRACE,sr as TRACE_EVENT_BEGIN,ur as TRACE_EVENT_END,At as TRACE_FUNC_BEGIN,_t as TRACE_FUNC_END,$t as Tensor,sK as default,ce as env,ar as registerBackend};