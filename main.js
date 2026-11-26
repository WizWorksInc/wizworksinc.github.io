/*!
culori

MIT License

Copyright (c) 2018 Dan Burzo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

prando

The MIT License (MIT)

Copyright (c) 2016 Zeh Fernando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

simplex-noise

MIT License

Copyright (c) 2018 Jonas Wagner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

three

The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var S5={wide:{box:{left:0,top:-470,width:3200,height:1450},baseline:444,wiz:"#a66bff",sea:{pitch:15,depth:440,length:450,grit:1},mirror:{image:"cdn/logo-mirror.png",west:261,east:2939,cap:864.9},starFloor:405,roofs:[{from:1153,to:2899,top:405},{from:301,to:453.7,top:688.9},{from:453.7,to:606.4,top:460.9},{from:606.4,to:759,top:478.9},{from:759,to:911.7,top:650.9},{from:911.7,to:1064.4,top:812.9},{from:1064.4,to:1217,top:864.9},{from:2916.9,to:2943.4,top:26.4}]},narrow:{box:{left:0,top:-212,width:1600,height:1472},baseline:800,wiz:"#a66bff",sea:{pitch:21,depth:330,length:390,grit:1.5},mirror:{image:"cdn/logo-narrow-mirror.png",west:222.6,east:1570,cap:294},starFloor:294,roofs:[{from:262.6,to:1530,top:294},{from:40,to:150.8,top:840.5},{from:150.8,to:261.6,top:674.5},{from:261.6,to:372.5,top:688.5},{from:372.5,to:483.3,top:812.5},{from:483.3,to:594.1,top:930.5},{from:594.1,to:704.9,top:968.5},{from:1543,to:1562.2,top:19.2}]}};var j5={...S5.wide,moon:{x:1497.55,altitude:586.95}},QQ={...S5.narrow,moon:{x:300.48,altitude:758.3}};var VK=({l:J,a:$,b:Q,alpha:Z})=>{if(J===void 0)J=0;if($===void 0)$=0;if(Q===void 0)Q=0;let W=Math.pow(J+0.3963377773761749*$+0.2158037573099136*Q,3),K=Math.pow(J-0.1055613458156586*$-0.0638541728258133*Q,3),H=Math.pow(J-0.0894841775298119*$-1.2914855480194092*Q,3),Y={mode:"lrgb",r:4.076741636075957*W-3.3077115392580616*K+0.2309699031821044*H,g:-1.2684379732850317*W+2.6097573492876887*K-0.3413193760026573*H,b:-0.0041960761386756*W-0.7034186179359362*K+1.7076146940746117*H};if(Z!==void 0)Y.alpha=Z;return Y},q8=VK;var BK=({r:J,g:$,b:Q,alpha:Z})=>{if(J===void 0)J=0;if($===void 0)$=0;if(Q===void 0)Q=0;let W=Math.cbrt(0.412221469470763*J+0.5363325372617348*$+0.0514459932675022*Q),K=Math.cbrt(0.2119034958178252*J+0.6806995506452344*$+0.1073969535369406*Q),H=Math.cbrt(0.0883024591900564*J+0.2817188391361215*$+0.6299787016738222*Q),Y={mode:"oklab",l:0.210454268309314*W+0.7936177747023054*K-0.0040720430116193*H,a:1.9779985324311684*W-2.42859224204858*K+0.450593709617411*H,b:0.0259040424655478*W+0.7827717124575296*K-0.8086757549230774*H};if(Z!==void 0)Y.alpha=Z;return Y},F8=BK;var f5=(J=0)=>{let $=Math.abs(J);if($<=0.04045)return J/12.92;return(Math.sign(J)||1)*Math.pow(($+0.055)/1.055,2.4)},kK=({r:J,g:$,b:Q,alpha:Z})=>{let W={mode:"lrgb",r:f5(J),g:f5($),b:f5(Q)};if(Z!==void 0)W.alpha=Z;return W},D8=kK;var IK=(J)=>{let $=F8(D8(J));if(J.r===J.b&&J.b===J.g)$.a=$.b=0;return $},ZQ=IK;var v5=(J=0)=>{let $=Math.abs(J);if($>0.0031308)return(Math.sign(J)||1)*(1.055*Math.pow($,0.4166666666666667)-0.055);return J*12.92},AK=({r:J,g:$,b:Q,alpha:Z},W="rgb")=>{let K={mode:W,r:v5(J),g:v5($),b:v5(Q)};if(Z!==void 0)K.alpha=Z;return K},R8=AK;var zK=(J)=>R8(q8(J)),WQ=zK;var wK=(J,$)=>J===void 0?void 0:typeof J!=="object"?HQ(J):J.mode!==void 0?J:$?{...J,mode:$}:void 0,KQ=wK;var CK=(J="rgb")=>($)=>($=KQ($,J))!==void 0?$.mode===J?$:a9[$.mode][J]?a9[$.mode][J]($):J==="rgb"?a9[$.mode].rgb($):a9.rgb[J](a9[$.mode].rgb($)):void 0,YQ=CK;var a9={},XQ={},h6=[],y5={},PK=(J)=>J,x6=(J)=>{if(a9[J.mode]={...a9[J.mode],...J.toMode},Object.keys(J.fromMode||{}).forEach(($)=>{if(!a9[$])a9[$]={};a9[$][J.mode]=J.fromMode[$]}),!J.ranges)J.ranges={};if(!J.difference)J.difference={};return J.channels.forEach(($)=>{if(J.ranges[$]===void 0)J.ranges[$]=[0,1];if(!J.interpolate[$])throw Error(`Missing interpolator for: ${$}`);if(typeof J.interpolate[$]==="function")J.interpolate[$]={use:J.interpolate[$]};if(!J.interpolate[$].fixup)J.interpolate[$].fixup=PK}),XQ[J.mode]=J,(J.parse||[]).forEach(($)=>{UQ($,J.mode)}),YQ(J.mode)},b5=(J)=>XQ[J],UQ=(J,$)=>{if(typeof J==="string"){if(!$)throw Error("'mode' required when 'parser' is a string");y5[J]=$}else if(typeof J==="function"){if(h6.indexOf(J)<0)h6.push(J)}};var h5=/[^\x00-\x7F]|[a-zA-Z_]/,_K=/[^\x00-\x7F]|[-\w]/,k0={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"},T0=0;function O8(J){let $=J[T0],Q=J[T0+1];if($==="-"||$==="+")return/\d/.test(Q)||Q==="."&&/\d/.test(J[T0+2]);if($===".")return/\d/.test(Q);return/\d/.test($)}function x5(J){if(T0>=J.length)return!1;let $=J[T0];if(h5.test($))return!0;if($==="-"){if(J.length-T0<2)return!1;let Q=J[T0+1];if(Q==="-"||h5.test(Q))return!0;return!1}return!1}var TK={deg:1,rad:180/Math.PI,grad:0.9,turn:360};function g6(J){let $="";if(J[T0]==="-"||J[T0]==="+")$+=J[T0++];if($+=M8(J),J[T0]==="."&&/\d/.test(J[T0+1]))$+=J[T0++]+M8(J);if(J[T0]==="e"||J[T0]==="E"){if((J[T0+1]==="-"||J[T0+1]==="+")&&/\d/.test(J[T0+2]))$+=J[T0++]+J[T0++]+M8(J);else if(/\d/.test(J[T0+1]))$+=J[T0++]+M8(J)}if(x5(J)){let Q=L8(J);if(Q==="deg"||Q==="rad"||Q==="turn"||Q==="grad")return{type:k0.Hue,value:$*TK[Q]};return}if(J[T0]==="%")return T0++,{type:k0.Percentage,value:+$};return{type:k0.Number,value:+$}}function M8(J){let $="";while(/\d/.test(J[T0]))$+=J[T0++];return $}function L8(J){let $="";while(T0<J.length&&_K.test(J[T0]))$+=J[T0++];return $}function SK(J){let $=L8(J);if(J[T0]==="(")return T0++,{type:k0.Function,value:$};if($==="none")return{type:k0.None,value:void 0};return{type:k0.Ident,value:$}}function jK(J=""){let $=J.trim(),Q=[],Z;T0=0;while(T0<$.length){if(Z=$[T0++],Z===`
`||Z==="\t"||Z===" "){while(T0<$.length&&($[T0]===`
`||$[T0]==="\t"||$[T0]===" "))T0++;continue}if(Z===",")return;if(Z===")"){Q.push({type:k0.ParenClose});continue}if(Z==="+"){if(T0--,O8($)){Q.push(g6($));continue}return}if(Z==="-"){if(T0--,O8($)){Q.push(g6($));continue}if(x5($)){Q.push({type:k0.Ident,value:L8($)});continue}return}if(Z==="."){if(T0--,O8($)){Q.push(g6($));continue}return}if(Z==="/"){while(T0<$.length&&($[T0]===`
`||$[T0]==="\t"||$[T0]===" "))T0++;let W;if(O8($)){if(W=g6($),W.type!==k0.Hue){Q.push({type:k0.Alpha,value:W});continue}}if(x5($)){if(L8($)==="none"){Q.push({type:k0.Alpha,value:{type:k0.None,value:void 0}});continue}}return}if(/\d/.test(Z)){T0--,Q.push(g6($));continue}if(h5.test(Z)){T0--,Q.push(SK($));continue}return}return Q}function fK(J){J._i=0;let $=J[J._i++];if(!$||$.type!==k0.Function||$.value!=="color")return;if($=J[J._i++],$.type!==k0.Ident)return;let Q=y5[$.value];if(!Q)return;let Z={mode:Q},W=NQ(J,!1);if(!W)return;let K=b5(Q).channels;for(let H=0,Y,X;H<K.length;H++)if(Y=W[H],X=K[H],Y.type!==k0.None){if(Z[X]=Y.type===k0.Number?Y.value:Y.value/100,X==="alpha")Z[X]=Math.max(0,Math.min(1,Z[X]))}return Z}function NQ(J,$){let Q=[],Z;while(J._i<J.length){if(Z=J[J._i++],Z.type===k0.None||Z.type===k0.Number||Z.type===k0.Alpha||Z.type===k0.Percentage||$&&Z.type===k0.Hue){Q.push(Z);continue}if(Z.type===k0.ParenClose){if(J._i<J.length)return;continue}return}if(Q.length<3||Q.length>4)return;if(Q.length===4){if(Q[3].type!==k0.Alpha)return;Q[3]=Q[3].value}if(Q.length===3)Q.push({type:k0.None,value:void 0});return Q.every((W)=>W.type!==k0.Alpha)?Q:void 0}function vK(J,$){J._i=0;let Q=J[J._i++];if(!Q||Q.type!==k0.Function)return;let Z=NQ(J,$);if(!Z)return;return Z.unshift(Q.value),Z}var yK=(J)=>{if(typeof J!=="string")return;let $=jK(J),Q=$?vK($,!0):void 0,Z=void 0,W=0,K=h6.length;while(W<K)if((Z=h6[W++](J,Q))!==void 0)return Z;return $?fK($):void 0},HQ=yK;function bK(J,$){if(!$||$[0]!=="oklab")return;let Q={mode:"oklab"},[,Z,W,K,H]=$;if(Z.type===k0.Hue||W.type===k0.Hue||K.type===k0.Hue)return;if(Z.type!==k0.None)Q.l=Math.min(Math.max(0,Z.type===k0.Number?Z.value:Z.value/100),1);if(W.type!==k0.None)Q.a=W.type===k0.Number?W.value:W.value*0.4/100;if(K.type!==k0.None)Q.b=K.type===k0.Number?K.value:K.value*0.4/100;if(H.type!==k0.None)Q.alpha=Math.min(1,Math.max(0,H.type===k0.Number?H.value:H.value/100));return Q}var EQ=bK;var V8=Math.pow(29,3)/Math.pow(3,3),B8=Math.pow(6,3)/Math.pow(29,3);var P7={X:0.9642956764295677,Y:1,Z:0.8251046025104602};var pE=Math.pow(29,3)/Math.pow(3,3),mE=Math.pow(6,3)/Math.pow(29,3);var g5=(J)=>Math.pow(J,3)>B8?Math.pow(J,3):(116*J-16)/V8,hK=({l:J,a:$,b:Q,alpha:Z})=>{if(J===void 0)J=0;if($===void 0)$=0;if(Q===void 0)Q=0;let W=(J+16)/116,K=$/500+W,H=W-Q/200,Y={mode:"xyz50",x:g5(K)*P7.X,y:g5(W)*P7.Y,z:g5(H)*P7.Z};if(Z!==void 0)Y.alpha=Z;return Y},k8=hK;var xK=({x:J,y:$,z:Q,alpha:Z})=>{if(J===void 0)J=0;if($===void 0)$=0;if(Q===void 0)Q=0;let W=R8({r:J*3.1341359569958707-$*1.6173863321612538-0.4906619460083532*Q,g:J*-0.978795502912089+$*1.916254567259524+0.03344273116131949*Q,b:J*0.07195537988411677-$*0.2289768264158322+1.405386058324125*Q});if(Z!==void 0)W.alpha=Z;return W},GQ=xK;var gK=(J)=>GQ(k8(J)),qQ=gK;var pK=(J)=>{let{r:$,g:Q,b:Z,alpha:W}=D8(J),K={mode:"xyz50",x:0.436065742824811*$+0.3851514688337912*Q+0.14307845442264197*Z,y:0.22249319175623702*$+0.7168870538238823*Q+0.06061979053616537*Z,z:0.013923904500943465*$+0.09708128566574634*Q+0.7140993584005155*Z};if(W!==void 0)K.alpha=W;return K},FQ=pK;var p5=(J)=>J>B8?Math.cbrt(J):(V8*J+16)/116,mK=({x:J,y:$,z:Q,alpha:Z})=>{if(J===void 0)J=0;if($===void 0)$=0;if(Q===void 0)Q=0;let W=p5(J/P7.X),K=p5($/P7.Y),H=p5(Q/P7.Z),Y={mode:"lab",l:116*K-16,a:500*(W-K),b:200*(K-H)};if(Z!==void 0)Y.alpha=Z;return Y},I8=mK;var lK=(J)=>{let $=I8(FQ(J));if(J.r===J.b&&J.b===J.g)$.a=$.b=0;return $},DQ=lK;function dK(J,$){if(!$||$[0]!=="lab")return;let Q={mode:"lab"},[,Z,W,K,H]=$;if(Z.type===k0.Hue||W.type===k0.Hue||K.type===k0.Hue)return;if(Z.type!==k0.None)Q.l=Math.min(Math.max(0,Z.value),100);if(W.type!==k0.None)Q.a=W.type===k0.Number?W.value:W.value*125/100;if(K.type!==k0.None)Q.b=K.type===k0.Number?K.value:K.value*125/100;if(H.type!==k0.None)Q.alpha=Math.min(1,Math.max(0,H.type===k0.Number?H.value:H.value/100));return Q}var RQ=dK;var OQ=(J,$,Q)=>J+Q*($-J);var uK=(J)=>{let $=[];for(let Q=0;Q<J.length-1;Q++){let Z=J[Q],W=J[Q+1];if(Z===void 0&&W===void 0)$.push(void 0);else if(Z!==void 0&&W!==void 0)$.push([Z,W]);else $.push(Z!==void 0?[Z,Z]:[W,W])}return $},MQ=(J)=>($)=>{let Q=uK($);return(Z)=>{let W=Z*Q.length,K=Z>=1?Q.length-1:Math.max(Math.floor(W),0),H=Q[K];return H===void 0?void 0:J(H[0],H[1],W-K)}};var Z7=MQ(OQ);var A8=(J)=>{let $=!1,Q=J.map((Z)=>{if(Z!==void 0)return $=!0,Z;return 1});return $?Q:J};var cK={mode:"lab",toMode:{xyz50:k8,rgb:qQ},fromMode:{xyz50:I8,rgb:DQ},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[RQ],serialize:(J)=>`lab(${J.l!==void 0?J.l:"none"} ${J.a!==void 0?J.a:"none"} ${J.b!==void 0?J.b:"none"}${J.alpha<1?` / ${J.alpha}`:""})`,interpolate:{l:Z7,a:Z7,b:Z7,alpha:{use:Z7,fixup:A8}}},LQ=cK;var nK={...LQ,mode:"oklab",toMode:{lrgb:q8,rgb:WQ},fromMode:{lrgb:F8,rgb:ZQ},ranges:{l:[0,1],a:[-0.4,0.4],b:[-0.4,0.4]},parse:[EQ],serialize:(J)=>`oklab(${J.l!==void 0?J.l:"none"} ${J.a!==void 0?J.a:"none"} ${J.b!==void 0?J.b:"none"}${J.alpha<1?` / ${J.alpha}`:""})`},m5=nK;var sK=(J,$)=>{if(typeof J!=="number")return;if($===3)return{mode:"rgb",r:(J>>8&15|J>>4&240)/255,g:(J>>4&15|J&240)/255,b:(J&15|J<<4&240)/255};if($===4)return{mode:"rgb",r:(J>>12&15|J>>8&240)/255,g:(J>>8&15|J>>4&240)/255,b:(J>>4&15|J&240)/255,alpha:(J&15|J<<4&240)/255};if($===6)return{mode:"rgb",r:(J>>16&255)/255,g:(J>>8&255)/255,b:(J&255)/255};if($===8)return{mode:"rgb",r:(J>>24&255)/255,g:(J>>16&255)/255,b:(J>>8&255)/255,alpha:(J&255)/255}},z8=sK;var iK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},VQ=iK;var oK=(J)=>{return z8(VQ[J.toLowerCase()],6)},BQ=oK;var aK=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,rK=(J)=>{let $;return($=J.match(aK))?z8(parseInt($[1],16),$[1].length):void 0},kQ=rK;var w8="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";var C8="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%";var l5="(?:([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%|([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?))";var p6="\\s*,\\s*";var yG=new RegExp("^(?:([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%|([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)|none)$");var tK=new RegExp(`^rgba?\\(\\s*${w8}${p6}${w8}${p6}${w8}\\s*(?:,\\s*${l5}\\s*)?\\)$`),eK=new RegExp(`^rgba?\\(\\s*${C8}${p6}${C8}${p6}${C8}\\s*(?:,\\s*${l5}\\s*)?\\)$`),J1=(J)=>{let $={mode:"rgb"},Q;if(Q=J.match(tK)){if(Q[1]!==void 0)$.r=Q[1]/255;if(Q[2]!==void 0)$.g=Q[2]/255;if(Q[3]!==void 0)$.b=Q[3]/255}else if(Q=J.match(eK)){if(Q[1]!==void 0)$.r=Q[1]/100;if(Q[2]!==void 0)$.g=Q[2]/100;if(Q[3]!==void 0)$.b=Q[3]/100}else return;if(Q[4]!==void 0)$.alpha=Math.max(0,Math.min(1,Q[4]/100));else if(Q[5]!==void 0)$.alpha=Math.max(0,Math.min(1,+Q[5]));return $},IQ=J1;function $1(J,$){if(!$||$[0]!=="rgb"&&$[0]!=="rgba")return;let Q={mode:"rgb"},[,Z,W,K,H]=$;if(Z.type===k0.Hue||W.type===k0.Hue||K.type===k0.Hue)return;if(Z.type!==k0.None)Q.r=Z.type===k0.Number?Z.value/255:Z.value/100;if(W.type!==k0.None)Q.g=W.type===k0.Number?W.value/255:W.value/100;if(K.type!==k0.None)Q.b=K.type===k0.Number?K.value/255:K.value/100;if(H.type!==k0.None)Q.alpha=Math.min(1,Math.max(0,H.type===k0.Number?H.value:H.value/100));return Q}var AQ=$1;var Q1=(J)=>J==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,zQ=Q1;var Z1={mode:"rgb",channels:["r","g","b","alpha"],parse:[AQ,kQ,IQ,BQ,zQ,"srgb"],serialize:"srgb",interpolate:{r:Z7,g:Z7,b:Z7,alpha:{use:Z7,fixup:A8}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},d5=Z1;var iQ="187";var oQ=0,EJ=1,aQ=2;var n6=1,rQ=2,I6=3,A6=0,y9=1,u9=2,k7=0,s6=1,GJ=2,qJ=3,FJ=4,a8=5;var v7=100,tQ=101,eQ=102,JZ=103,$Z=104,QZ=200,i7=201,ZZ=202,WZ=203,KZ=204,HZ=205,YZ=206,XZ=207,UZ=208,NZ=209,EZ=210,GZ=211,qZ=212,FZ=213,DZ=214,RZ=0,OZ=1,MZ=2,DJ=3,LZ=4,VZ=5,BZ=6,kZ=7,IZ=0,AZ=1,zZ=2,Y7=0,RJ=1,OJ=2,MJ=3,LJ=4,VJ=5,i6=6,BJ=7;var o6=301,z6=302,r8=303,t8=304,wZ=1000,e8=1001,CZ=1002,y7=1003,PZ=1004;var a6=1005;var P9=1006,J5=1007;var b7=1008;var $7=1009,_Z=1010,TZ=1011,r6=1012,kJ=1013,h7=1014,I7=1015,p9=1016,IJ=1017,AJ=1018,o7=1020,SZ=35902,jZ=35899,fZ=1021,vZ=1022,Q7=1023,w6=1026,x7=1027,yZ=1028,zJ=1029,a7=1030,wJ=1031;var CJ=1033,$5=33776,Q5=33777,Z5=33778,W5=33779,PJ=35840,_J=35841,TJ=35842,SJ=35843,jJ=36196,fJ=37492,vJ=37496,yJ=37488,bJ=37489,K5=37490,hJ=37491,xJ=37808,gJ=37809,pJ=37810,mJ=37811,lJ=37812,dJ=37813,uJ=37814,cJ=37815,nJ=37816,sJ=37817,iJ=37818,oJ=37819,aJ=37820,rJ=37821,tJ=36492,eJ=36494,J$=36495,$$=36283,Q$=36284,H5=36285,Z$=36286;var W$=0,bZ=1,r7="",hZ="srgb",K$="srgb-linear",H$="linear",Z9="srgb";var xZ=512,gZ=513,pZ=514,Y$=515,mZ=516,lZ=517,X$=518,U$=519;var N$=35048;var E$="300 es",G$=2000;function W1(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function K1(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function V6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function dZ(){let J=V6("canvas");return J.style.display="block",J}var wQ={},B6=null;function q$(...J){let $="THREE."+J.shift();if(B6)B6("log",$,...J);else console.log($,...J)}function uZ(J){let $=J[0];if(typeof $==="string"&&$.startsWith("TSL:")){let Q=J[1];if(Q&&Q.isStackTrace)J[0]+=" "+Q.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function S0(...J){J=uZ(J);let $="THREE."+J.shift();if(B6)B6("warn",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.warn(Q.getError($));else console.warn($,...J)}}function f0(...J){J=uZ(J);let $="THREE."+J.shift();if(B6)B6("error",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.error(Q.getError($));else console.error($,...J)}}function c6(...J){let $=J.join(" ");if($ in wQ)return;wQ[$]=!0,S0(...J)}function cZ(J,$,Q){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,Q);break;default:Z()}}setTimeout(K,Q)})}var nZ={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class A7{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf($)===-1)Q[J].push($)}hasEventListener(J,$){let Q=this._listeners;if(Q===void 0)return!1;return Q[J]!==void 0&&Q[J].indexOf($)!==-1}removeEventListener(J,$){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J];if(Z!==void 0){let W=Z.indexOf($);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let $=this._listeners;if($===void 0)return;let Q=$[J.type];if(Q!==void 0){J.target=this;let Z=Q.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var w9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var u5=Math.PI/180,o8=180/Math.PI;function t6(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(w9[J&255]+w9[J>>8&255]+w9[J>>16&255]+w9[J>>24&255]+"-"+w9[$&255]+w9[$>>8&255]+"-"+w9[$>>16&15|64]+w9[$>>24&255]+"-"+w9[Q&63|128]+w9[Q>>8&255]+"-"+w9[Q>>16&255]+w9[Q>>24&255]+w9[Z&255]+w9[Z>>8&255]+w9[Z>>16&255]+w9[Z>>24&255]).toLowerCase()}function c0(J,$,Q){return Math.max($,Math.min(Q,J))}function H1(J,$){return(J%$+$)%$}function c5(J,$,Q){return(1-Q)*J+Q*$}function sZ(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function F$(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Y1(J,$){if($.constructor===Float32Array)return J;let Q=F$($);if(Q===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/Q,-1)}function X1(J,$){if($.constructor===Float32Array)return J;let Q=F$($);if(Q===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*Q)}class m0{static{this.prototype.isVector2=!0}constructor(J=0,$=0){this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Q=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*Q+Z[6],this.y=Z[1]*$+Z[4]*Q+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=c0(this.x,J.x,$.x),this.y=c0(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=c0(this.x,J,$),this.y=c0(this.y,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(c0(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y;return $*$+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Q=Math.cos($),Z=Math.sin($),W=this.x-J.x,K=this.y-J.y;return this.x=W*Q-K*Z+J.x,this.y=W*Z+K*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class z7{constructor(J=0,$=0,Q=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Q,this._w=Z}static slerpFlat(J,$,Q,Z,W,K,H){let Y=Q[Z+0],X=Q[Z+1],U=Q[Z+2],N=Q[Z+3],E=W[K+0],G=W[K+1],R=W[K+2],L=W[K+3];if(N!==L||Y!==E||X!==G||U!==R){let I=Y*E+X*G+U*R+N*L;if(I<0)E=-E,G=-G,R=-R,L=-L,I=-I;let q=1-H;if(I<0.9995){let F=Math.acos(I),A=Math.sin(F);q=Math.sin(q*F)/A,H=Math.sin(H*F)/A,Y=Y*q+E*H,X=X*q+G*H,U=U*q+R*H,N=N*q+L*H}else{Y=Y*q+E*H,X=X*q+G*H,U=U*q+R*H,N=N*q+L*H;let F=1/Math.sqrt(Y*Y+X*X+U*U+N*N);Y*=F,X*=F,U*=F,N*=F}}J[$]=Y,J[$+1]=X,J[$+2]=U,J[$+3]=N}static multiplyQuaternionsFlat(J,$,Q,Z,W,K){let H=Q[Z],Y=Q[Z+1],X=Q[Z+2],U=Q[Z+3],N=W[K],E=W[K+1],G=W[K+2],R=W[K+3];return J[$]=H*R+U*N+Y*G-X*E,J[$+1]=Y*R+U*E+X*N-H*G,J[$+2]=X*R+U*G+H*E-Y*N,J[$+3]=U*R-H*N-Y*E-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Q,Z){return this._x=J,this._y=$,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:Q,_y:Z,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,X=H(Q/2),U=H(Z/2),N=H(W/2),E=Y(Q/2),G=Y(Z/2),R=Y(W/2);switch(K){case"XYZ":this._x=E*U*N+X*G*R,this._y=X*G*N-E*U*R,this._z=X*U*R+E*G*N,this._w=X*U*N-E*G*R;break;case"YXZ":this._x=E*U*N+X*G*R,this._y=X*G*N-E*U*R,this._z=X*U*R-E*G*N,this._w=X*U*N+E*G*R;break;case"ZXY":this._x=E*U*N-X*G*R,this._y=X*G*N+E*U*R,this._z=X*U*R+E*G*N,this._w=X*U*N-E*G*R;break;case"ZYX":this._x=E*U*N-X*G*R,this._y=X*G*N+E*U*R,this._z=X*U*R-E*G*N,this._w=X*U*N+E*G*R;break;case"YZX":this._x=E*U*N+X*G*R,this._y=X*G*N+E*U*R,this._z=X*U*R-E*G*N,this._w=X*U*N-E*G*R;break;case"XZY":this._x=E*U*N-X*G*R,this._y=X*G*N-E*U*R,this._z=X*U*R+E*G*N,this._w=X*U*N+E*G*R;break;default:S0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Q=$/2,Z=Math.sin(Q);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Q=$[0],Z=$[4],W=$[8],K=$[1],H=$[5],Y=$[9],X=$[2],U=$[6],N=$[10],E=Q+H+N;if(E>0){let G=0.5/Math.sqrt(E+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(W-X)*G,this._z=(K-Z)*G}else if(Q>H&&Q>N){let G=2*Math.sqrt(1+Q-H-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(Z+K)/G,this._z=(W+X)/G}else if(H>N){let G=2*Math.sqrt(1+H-Q-N);this._w=(W-X)/G,this._x=(Z+K)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-Q-H);this._w=(K-Z)/G,this._x=(W+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Q=J.dot($)+1;if(Q<0.00000001)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(c0(this.dot(J),-1,1)))}rotateTowards(J,$){let Q=this.angleTo(J);if(Q===0)return this;let Z=Math.min(1,$/Q);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Q,_y:Z,_z:W,_w:K}=J,H=$._x,Y=$._y,X=$._z,U=$._w;return this._x=Q*U+K*H+Z*X-W*Y,this._y=Z*U+K*Y+W*H-Q*X,this._z=W*U+K*X+Q*Y-Z*H,this._w=K*U-Q*H-Z*Y-W*X,this._onChangeCallback(),this}slerp(J,$){let{_x:Q,_y:Z,_z:W,_w:K}=J,H=this.dot(J);if(H<0)Q=-Q,Z=-Z,W=-W,K=-K,H=-H;let Y=1-$;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,$=Math.sin($*X)/U,this._x=this._x*Y+Q*$,this._y=this._y*Y+Z*$,this._z=this._z*Y+W*$,this._w=this._w*Y+K*$,this._onChangeCallback()}else this._x=this._x*Y+Q*$,this._y=this._y*Y+Z*$,this._z=this._z*Y+W*$,this._w=this._w*Y+K*$,this.normalize();return this}slerpQuaternions(J,$,Q){return this.copy(J).slerp($,Q)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),W=Math.sqrt(Q);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin($),W*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class p{static{this.prototype.isVector3=!0}constructor(J=0,$=0,Q=0){this.x=J,this.y=$,this.z=Q}set(J,$,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=$,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion(CQ.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion(CQ.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Q=this.y,Z=this.z,W=J.elements;return this.x=W[0]*$+W[3]*Q+W[6]*Z,this.y=W[1]*$+W[4]*Q+W[7]*Z,this.z=W[2]*$+W[5]*Q+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,W=J.elements,K=1/(W[3]*$+W[7]*Q+W[11]*Z+W[15]);return this.x=(W[0]*$+W[4]*Q+W[8]*Z+W[12])*K,this.y=(W[1]*$+W[5]*Q+W[9]*Z+W[13])*K,this.z=(W[2]*$+W[6]*Q+W[10]*Z+W[14])*K,this}applyQuaternion(J){let $=this.x,Q=this.y,Z=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*Z-H*Q),U=2*(H*$-W*Z),N=2*(W*Q-K*$);return this.x=$+Y*X+K*N-H*U,this.y=Q+Y*U+H*X-W*N,this.z=Z+Y*N+W*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Q=this.y,Z=this.z,W=J.elements;return this.x=W[0]*$+W[4]*Q+W[8]*Z,this.y=W[1]*$+W[5]*Q+W[9]*Z,this.z=W[2]*$+W[6]*Q+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=c0(this.x,J.x,$.x),this.y=c0(this.y,J.y,$.y),this.z=c0(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=c0(this.x,J,$),this.y=c0(this.y,J,$),this.z=c0(this.z,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Q,y:Z,z:W}=J,K=$.x,H=$.y,Y=$.z;return this.x=Z*Y-W*H,this.y=W*K-Q*Y,this.z=Q*H-Z*K,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Q=J.dot(this)/$;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return n5.copy(this).projectOnVector(J),this.sub(n5)}reflect(J){return this.sub(n5.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(c0(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y,Z=this.z-J.z;return $*$+Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Q){let Z=Math.sin($)*J;return this.x=Z*Math.sin(Q),this.y=Math.cos($)*J,this.z=Z*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Q){return this.x=J*Math.sin($),this.y=Q,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Q,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,Q=Math.sqrt(1-$*$);return this.x=Q*Math.cos(J),this.y=$,this.z=Q*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var n5=new p,CQ=new z7;class y0{static{this.prototype.isMatrix3=!0}constructor(J,$,Q,Z,W,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,W,K,H,Y,X)}set(J,$,Q,Z,W,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=$,U[4]=W,U[5]=Y,U[6]=Q,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],this}extractBasis(J,$,Q){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,W=this.elements,K=Q[0],H=Q[3],Y=Q[6],X=Q[1],U=Q[4],N=Q[7],E=Q[2],G=Q[5],R=Q[8],L=Z[0],I=Z[3],q=Z[6],F=Z[1],A=Z[4],w=Z[7],B=Z[2],z=Z[5],P=Z[8];return W[0]=K*L+H*F+Y*B,W[3]=K*I+H*A+Y*z,W[6]=K*q+H*w+Y*P,W[1]=X*L+U*F+N*B,W[4]=X*I+U*A+N*z,W[7]=X*q+U*w+N*P,W[2]=E*L+G*F+R*B,W[5]=E*I+G*A+R*z,W[8]=E*q+G*w+R*P,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return $*K*U-$*H*X-Q*W*U+Q*H*Y+Z*W*X-Z*K*Y}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=U*K-H*X,E=H*Y-U*W,G=X*W-K*Y,R=$*N+Q*E+Z*G;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/R;return J[0]=N*L,J[1]=(Z*X-U*Q)*L,J[2]=(H*Q-Z*K)*L,J[3]=E*L,J[4]=(U*$-Z*Y)*L,J[5]=(Z*W-H*$)*L,J[6]=G*L,J[7]=(Q*Y-X*$)*L,J[8]=(K*$-Q*W)*L,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Q,Z,W,K,H){let Y=Math.cos(W),X=Math.sin(W);return this.set(Q*Y,Q*X,-Q*(Y*K+X*H)+K+J,-Z*X,Z*Y,-Z*(-X*K+Y*H)+H+$,0,0,1),this}scale(J,$){return c6("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(s5.makeScale(J,$)),this}rotate(J){return c6("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(s5.makeRotation(-J)),this}translate(J,$){return c6("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(s5.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,Q,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var s5=new y0,PQ=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),_Q=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function U1(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=B7(W.r),W.g=B7(W.g),W.b=B7(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=L6(W.r),W.g=L6(W.g),W.b=L6(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[H].fromXYZ).multiply(this.spaces[K].toXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace}},$=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:Z,transfer:"linear",toXYZ:PQ,fromXYZ:_Q,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Z,transfer:"srgb",toXYZ:PQ,fromXYZ:_Q,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var u0=U1();function B7(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function L6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var W6;class D${static getDataURL(J,$="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(W6===void 0)W6=V6("canvas");W6.width=J.width,W6.height=J.height;let Z=W6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=W6}return Q.toDataURL($)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=V6("canvas");$.width=J.width,$.height=J.height;let Q=$.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let Z=Q.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=B7(W[K]/255)*255;return Q.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Q=0;Q<$.length;Q++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Q]=Math.floor(B7($[Q]/255)*255);else $[Q]=B7($[Q]);return{data:$,width:J.width,height:J.height}}else return S0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var N1=0;class e6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=t6(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let $=this.data;if(typeof HTMLVideoElement<"u"&&$ instanceof HTMLVideoElement)J.set($.videoWidth,$.videoHeight,0);else if(typeof VideoFrame<"u"&&$ instanceof VideoFrame)J.set($.displayWidth,$.displayHeight,0);else if($!==null)J.set($.width||0,$.height||0,$.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++)if(Z[K].isDataTexture)W.push(i5(Z[K].image));else W.push(i5(Z[K]))}else W=i5(Z);Q.url=W}if(!$)J.images[this.uuid]=Q;return Q}}function i5(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return D$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return S0("Texture: Unable to serialize Texture."),{}}var E1=0,o5=new p;class V9 extends A7{constructor(J=V9.DEFAULT_IMAGE,$=V9.DEFAULT_MAPPING,Q=1001,Z=1001,W=1006,K=1008,H=1023,Y=1009,X=V9.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=t6(),this.name="",this.source=new e6(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new m0(0,0),this.repeat=new m0(1,1),this.center=new m0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(o5).x}get height(){return this.source.getSize(o5).y}get depth(){return this.source.getSize(o5).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let $ in J){let Q=J[$];if(Q===void 0){S0(`Texture.setValues(): parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){S0(`Texture.setValues(): property '${$}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!$)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}V9.DEFAULT_IMAGE=null;V9.DEFAULT_MAPPING=300;V9.DEFAULT_ANISOTROPY=1;class U9{static{this.prototype.isVector4=!0}constructor(J=0,$=0,Q=0,Z=1){this.x=J,this.y=$,this.z=Q,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Q,Z){return this.x=J,this.y=$,this.z=Q,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*$+K[4]*Q+K[8]*Z+K[12]*W,this.y=K[1]*$+K[5]*Q+K[9]*Z+K[13]*W,this.z=K[2]*$+K[6]*Q+K[10]*Z+K[14]*W,this.w=K[3]*$+K[7]*Q+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Q,Z,W,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],N=Y[8],E=Y[1],G=Y[5],R=Y[9],L=Y[2],I=Y[6],q=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(N-L)<0.01&&Math.abs(R-I)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(N+L)<0.1&&Math.abs(R+I)<0.1&&Math.abs(X+G+q-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let A=(X+1)/2,w=(G+1)/2,B=(q+1)/2,z=(U+E)/4,P=(N+L)/4,D=(R+I)/4;if(A>w&&A>B)if(A<0.01)Q=0,Z=0.707106781,W=0.707106781;else Q=Math.sqrt(A),Z=z/Q,W=P/Q;else if(w>B)if(w<0.01)Q=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(w),Q=z/Z,W=D/Z;else if(B<0.01)Q=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(B),Q=P/W,Z=D/W;return this.set(Q,Z,W,$),this}let F=Math.sqrt((I-R)*(I-R)+(N-L)*(N-L)+(E-U)*(E-U));if(Math.abs(F)<0.001)F=1;return this.x=(I-R)/F,this.y=(N-L)/F,this.z=(E-U)/F,this.w=Math.acos((X+G+q-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=c0(this.x,J.x,$.x),this.y=c0(this.y,J.y,$.y),this.z=c0(this.z,J.z,$.z),this.w=c0(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=c0(this.x,J,$),this.y=c0(this.y,J,$),this.z=c0(this.z,J,$),this.w=c0(this.w,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(c0(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this.w=J.w+($.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R$ extends A7{constructor(J=1,$=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Q),this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=Q.depth,this.scissor=new U9(0,0,J,$),this.scissorTest=!1,this.viewport=new U9(0,0,J,$),this.textures=[];let Z=Q.count;for(let W=0;W<Z;W++)this.textures[W]=new V9({width:J,height:$,depth:Q.depth}),this.textures[W].isRenderTargetTexture=!0,this.textures[W].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveColorBuffer=Q.resolveColorBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this.storeMultisampledColorBuffer=Q.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Q.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Q.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview,this.useArrayDepthTexture=Q.useArrayDepthTexture}_setTextureOptions(J={}){let $={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)$.mapping=J.mapping;if(J.wrapS!==void 0)$.wrapS=J.wrapS;if(J.wrapT!==void 0)$.wrapT=J.wrapT;if(J.wrapR!==void 0)$.wrapR=J.wrapR;if(J.magFilter!==void 0)$.magFilter=J.magFilter;if(J.minFilter!==void 0)$.minFilter=J.minFilter;if(J.format!==void 0)$.format=J.format;if(J.type!==void 0)$.type=J.type;if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)$.colorSpace=J.colorSpace;if(J.flipY!==void 0)$.flipY=J.flipY;if(J.generateMipmaps!==void 0)$.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)$.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)$.internalFormat=J.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues($)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,Q=1){if(this.width!==J||this.height!==$||this.depth!==Q){this.width=J,this.height=$,this.depth=Q;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=$,this.textures[Z].image.depth=Q,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Q=J.textures.length;$<Q;$++){this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;let Z=Object.assign({},J.textures[$].image);this.textures[$].source=new e6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let $=J.depthTexture.clone();$.renderTarget=null,this.depthTexture=$}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class b9 extends R${constructor(J=1,$=1,Q={}){super(J,$,Q);this.isWebGLRenderTarget=!0}}class Y5 extends V9{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class J8 extends V9{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class X9{static{this.prototype.isMatrix4=!0}constructor(J,$,Q,Z,W,K,H,Y,X,U,N,E,G,R,L,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,W,K,H,Y,X,U,N,E,G,R,L,I)}set(J,$,Q,Z,W,K,H,Y,X,U,N,E,G,R,L,I){let q=this.elements;return q[0]=J,q[4]=$,q[8]=Q,q[12]=Z,q[1]=W,q[5]=K,q[9]=H,q[13]=Y,q[2]=X,q[6]=U,q[10]=N,q[14]=E,q[3]=G,q[7]=R,q[11]=L,q[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new X9().fromArray(this.elements)}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],$[9]=Q[9],$[10]=Q[10],$[11]=Q[11],$[12]=Q[12],$[13]=Q[13],$[14]=Q[14],$[15]=Q[15],this}copyPosition(J){let $=this.elements,Q=J.elements;return $[12]=Q[12],$[13]=Q[13],$[14]=Q[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Q){if(this.determinantAffine()===0)return J.set(1,0,0),$.set(0,1,0),Q.set(0,0,1),this;return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,$,Q){return this.set(J.x,$.x,Q.x,0,J.y,$.y,Q.y,0,J.z,$.z,Q.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let $=this.elements,Q=J.elements,Z=1/K6.setFromMatrixColumn(J,0).length(),W=1/K6.setFromMatrixColumn(J,1).length(),K=1/K6.setFromMatrixColumn(J,2).length();return $[0]=Q[0]*Z,$[1]=Q[1]*Z,$[2]=Q[2]*Z,$[3]=0,$[4]=Q[4]*W,$[5]=Q[5]*W,$[6]=Q[6]*W,$[7]=0,$[8]=Q[8]*K,$[9]=Q[9]*K,$[10]=Q[10]*K,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Q=J.x,Z=J.y,W=J.z,K=Math.cos(Q),H=Math.sin(Q),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(W),N=Math.sin(W);if(J.order==="XYZ"){let E=K*U,G=K*N,R=H*U,L=H*N;$[0]=Y*U,$[4]=-Y*N,$[8]=X,$[1]=G+R*X,$[5]=E-L*X,$[9]=-H*Y,$[2]=L-E*X,$[6]=R+G*X,$[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,G=Y*N,R=X*U,L=X*N;$[0]=E+L*H,$[4]=R*H-G,$[8]=K*X,$[1]=K*N,$[5]=K*U,$[9]=-H,$[2]=G*H-R,$[6]=L+E*H,$[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,G=Y*N,R=X*U,L=X*N;$[0]=E-L*H,$[4]=-K*N,$[8]=R+G*H,$[1]=G+R*H,$[5]=K*U,$[9]=L-E*H,$[2]=-K*X,$[6]=H,$[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,G=K*N,R=H*U,L=H*N;$[0]=Y*U,$[4]=R*X-G,$[8]=E*X+L,$[1]=Y*N,$[5]=L*X+E,$[9]=G*X-R,$[2]=-X,$[6]=H*Y,$[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,G=K*X,R=H*Y,L=H*X;$[0]=Y*U,$[4]=L-E*N,$[8]=R*N+G,$[1]=N,$[5]=K*U,$[9]=-H*U,$[2]=-X*U,$[6]=G*N+R,$[10]=E-L*N}else if(J.order==="XZY"){let E=K*Y,G=K*X,R=H*Y,L=H*X;$[0]=Y*U,$[4]=-N,$[8]=X*U,$[1]=E*N+L,$[5]=K*U,$[9]=G*N-R,$[2]=R*N-G,$[6]=H*U,$[10]=L*N+E}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(G1,J,q1)}lookAt(J,$,Q){let Z=this.elements;if(h9.subVectors(J,$),h9.lengthSq()===0)h9.z=1;if(h9.normalize(),_7.crossVectors(Q,h9),_7.lengthSq()===0){if(Math.abs(Q.z)===1)h9.x+=0.0001;else h9.z+=0.0001;h9.normalize(),_7.crossVectors(Q,h9)}return _7.normalize(),P8.crossVectors(h9,_7),Z[0]=_7.x,Z[4]=P8.x,Z[8]=h9.x,Z[1]=_7.y,Z[5]=P8.y,Z[9]=h9.y,Z[2]=_7.z,Z[6]=P8.z,Z[10]=h9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,W=this.elements,K=Q[0],H=Q[4],Y=Q[8],X=Q[12],U=Q[1],N=Q[5],E=Q[9],G=Q[13],R=Q[2],L=Q[6],I=Q[10],q=Q[14],F=Q[3],A=Q[7],w=Q[11],B=Q[15],z=Z[0],P=Z[4],D=Z[8],V=Z[12],j=Z[1],x=Z[5],S=Z[9],g=Z[13],r=Z[2],C=Z[6],c=Z[10],o=Z[14],v=Z[3],Z0=Z[7],d=Z[11],a=Z[15];return W[0]=K*z+H*j+Y*r+X*v,W[4]=K*P+H*x+Y*C+X*Z0,W[8]=K*D+H*S+Y*c+X*d,W[12]=K*V+H*g+Y*o+X*a,W[1]=U*z+N*j+E*r+G*v,W[5]=U*P+N*x+E*C+G*Z0,W[9]=U*D+N*S+E*c+G*d,W[13]=U*V+N*g+E*o+G*a,W[2]=R*z+L*j+I*r+q*v,W[6]=R*P+L*x+I*C+q*Z0,W[10]=R*D+L*S+I*c+q*d,W[14]=R*V+L*g+I*o+q*a,W[3]=F*z+A*j+w*r+B*v,W[7]=F*P+A*x+w*C+B*Z0,W[11]=F*D+A*S+w*c+B*d,W[15]=F*V+A*g+w*o+B*a,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],N=J[6],E=J[10],G=J[14],R=J[3],L=J[7],I=J[11],q=J[15],F=Y*G-X*E,A=H*G-X*N,w=H*E-Y*N,B=K*G-X*U,z=K*E-Y*U,P=K*N-H*U;return $*(L*F-I*A+q*w)-Q*(R*F-I*B+q*z)+Z*(R*A-L*B+q*P)-W*(R*w-L*z+I*P)}determinantAffine(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],W=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return $*(K*U-H*X)-Q*(W*U-H*Y)+Z*(W*X-K*Y)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Q){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=Q;return this}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=J[9],E=J[10],G=J[11],R=J[12],L=J[13],I=J[14],q=J[15],F=$*H-Q*K,A=$*Y-Z*K,w=$*X-W*K,B=Q*Y-Z*H,z=Q*X-W*H,P=Z*X-W*Y,D=U*L-N*R,V=U*I-E*R,j=U*q-G*R,x=N*I-E*L,S=N*q-G*L,g=E*q-G*I,r=F*g-A*S+w*x+B*j-z*V+P*D;if(r===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/r;return J[0]=(H*g-Y*S+X*x)*C,J[1]=(Z*S-Q*g-W*x)*C,J[2]=(L*P-I*z+q*B)*C,J[3]=(E*z-N*P-G*B)*C,J[4]=(Y*j-K*g-X*V)*C,J[5]=($*g-Z*j+W*V)*C,J[6]=(I*w-R*P-q*A)*C,J[7]=(U*P-E*w+G*A)*C,J[8]=(K*S-H*j+X*D)*C,J[9]=(Q*j-$*S-W*D)*C,J[10]=(R*z-L*w+q*F)*C,J[11]=(N*w-U*z-G*F)*C,J[12]=(H*V-K*x-Y*D)*C,J[13]=($*x-Q*V+Z*D)*C,J[14]=(L*A-R*B-I*F)*C,J[15]=(U*B-N*A+E*F)*C,this}scale(J){let $=this.elements,Q=J.x,Z=J.y,W=J.z;return $[0]*=Q,$[4]*=Z,$[8]*=W,$[1]*=Q,$[5]*=Z,$[9]*=W,$[2]*=Q,$[6]*=Z,$[10]*=W,$[3]*=Q,$[7]*=Z,$[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Q,Z))}makeTranslation(J,$,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,$,-Q,0,0,Q,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,0,Q,0,0,1,0,0,-Q,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,0,Q,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Q=Math.cos($),Z=Math.sin($),W=1-Q,K=J.x,H=J.y,Y=J.z,X=W*K,U=W*H;return this.set(X*K+Q,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+Q,U*Y-Z*K,0,X*Y-Z*H,U*Y+Z*K,W*Y*Y+Q,0,0,0,0,1),this}makeScale(J,$,Q){return this.set(J,0,0,0,0,$,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,$,Q,Z,W,K){return this.set(1,Q,W,0,J,1,K,0,$,Z,1,0,0,0,0,1),this}compose(J,$,Q){let Z=this.elements,W=$._x,K=$._y,H=$._z,Y=$._w,X=W+W,U=K+K,N=H+H,E=W*X,G=W*U,R=W*N,L=K*U,I=K*N,q=H*N,F=Y*X,A=Y*U,w=Y*N,B=Q.x,z=Q.y,P=Q.z;return Z[0]=(1-(L+q))*B,Z[1]=(G+w)*B,Z[2]=(R-A)*B,Z[3]=0,Z[4]=(G-w)*z,Z[5]=(1-(E+q))*z,Z[6]=(I+F)*z,Z[7]=0,Z[8]=(R+A)*P,Z[9]=(I-F)*P,Z[10]=(1-(E+L))*P,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,Q){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinantAffine();if(W===0)return Q.set(1,1,1),$.identity(),this;let K=K6.set(Z[0],Z[1],Z[2]).length(),H=K6.set(Z[4],Z[5],Z[6]).length(),Y=K6.set(Z[8],Z[9],Z[10]).length();if(W<0)K=-K;r9.copy(this);let X=1/K,U=1/H,N=1/Y;return r9.elements[0]*=X,r9.elements[1]*=X,r9.elements[2]*=X,r9.elements[4]*=U,r9.elements[5]*=U,r9.elements[6]*=U,r9.elements[8]*=N,r9.elements[9]*=N,r9.elements[10]*=N,$.setFromRotationMatrix(r9),Q.x=K,Q.y=H,Q.z=Y,this}makePerspective(J,$,Q,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2*W/($-J),N=2*W/(Q-Z),E=($+J)/($-J),G=(Q+Z)/(Q-Z),R,L;if(Y)R=W/(K-W),L=K*W/(K-W);else if(H===2000)R=-(K+W)/(K-W),L=-2*K*W/(K-W);else if(H===2001)R=-K/(K-W),L=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=N,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=R,X[14]=L,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,$,Q,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2/($-J),N=2/(Q-Z),E=-($+J)/($-J),G=-(Q+Z)/(Q-Z),R,L;if(Y)R=1/(K-W),L=K/(K-W);else if(H===2000)R=-2/(K-W),L=-(K+W)/(K-W);else if(H===2001)R=-1/(K-W),L=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=N,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=R,X[14]=L,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J[$+9]=Q[9],J[$+10]=Q[10],J[$+11]=Q[11],J[$+12]=Q[12],J[$+13]=Q[13],J[$+14]=Q[14],J[$+15]=Q[15],J}}var K6=new p,r9=new X9,G1=new p(0,0,0),q1=new p(1,1,1),_7=new p,P8=new p,h9=new p,TQ=new X9,SQ=new z7;class C6{constructor(J=0,$=0,Q=0,Z=C6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Q,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Q,Z=this._order){return this._x=J,this._y=$,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Q=!0){let Z=J.elements,W=Z[0],K=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],N=Z[2],E=Z[6],G=Z[10];switch($){case"XYZ":if(this._y=Math.asin(c0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-K,W);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-c0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-N,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(c0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-c0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(E,G),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(c0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-N,W);else this._x=0,this._y=Math.atan2(H,G);break;case"XZY":if(this._z=Math.asin(-c0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,G),this._y=0;break;default:S0("Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Q){return TQ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(TQ,$,Q)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return SQ.setFromEuler(this),this.setFromQuaternion(SQ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}C6.DEFAULT_ORDER="XYZ";class X5{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var F1=0,jQ=new p,H6=new z7,R7=new X9,_8=new p,m6=new p,D1=new p,R1=new z7,fQ=new p(1,0,0),vQ=new p(0,1,0),yQ=new p(0,0,1),bQ={type:"added"},O1={type:"removed"},Y6={type:"childadded",child:null},a5={type:"childremoved",child:null};class g9 extends A7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=t6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=g9.DEFAULT_UP.clone();let J=new p,$=new C6,Q=new z7,Z=new p(1,1,1);function W(){Q.setFromEuler($,!1)}function K(){$.setFromQuaternion(Q,void 0,!1)}$._onChange(W),Q._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new X9},normalMatrix:{value:new y0}}),this.matrix=new X9,this.matrixWorld=new X9,this.matrixAutoUpdate=g9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=g9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X5,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return H6.setFromAxisAngle(J,$),this.quaternion.multiply(H6),this}rotateOnWorldAxis(J,$){return H6.setFromAxisAngle(J,$),this.quaternion.premultiply(H6),this}rotateX(J){return this.rotateOnAxis(fQ,J)}rotateY(J){return this.rotateOnAxis(vQ,J)}rotateZ(J){return this.rotateOnAxis(yQ,J)}translateOnAxis(J,$){return jQ.copy(J).applyQuaternion(this.quaternion),this.position.add(jQ.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(fQ,J)}translateY(J){return this.translateOnAxis(vQ,J)}translateZ(J){return this.translateOnAxis(yQ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(R7.copy(this.matrixWorld).invert())}lookAt(J,$,Q){if(J.isVector3)_8.copy(J);else _8.set(J,$,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),m6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)R7.lookAt(m6,_8,this.up);else R7.lookAt(_8,m6,this.up);if(this.quaternion.setFromRotationMatrix(R7),Z)R7.extractRotation(Z.matrixWorld),H6.setFromRotationMatrix(R7),this.quaternion.premultiply(H6.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return f0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(bQ),Y6.child=J,this.dispatchEvent(Y6),Y6.child=null;else f0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(O1),a5.child=J,this.dispatchEvent(a5),a5.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),R7.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),R7.multiply(J.parent.matrixWorld);return J.applyMatrix4(R7),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(bQ),Y6.child=J,this.dispatchEvent(Y6),Y6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let K=this.children[Q].getObjectByProperty(J,$);if(K!==void 0)return K}return}getObjectsByProperty(J,$,Q=[]){if(this[J]===$)Q.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,$,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(m6,J,D1),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(m6,R1,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:$,y:Q,z:Z}=J,W=this.matrix.elements;W[12]+=$-W[0]*$-W[4]*Q-W[8]*Z,W[13]+=Q-W[1]*$-W[5]*Q-W[9]*Z,W[14]+=Z-W[2]*$-W[6]*Q-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].updateMatrixWorld(J)}updateWorldMatrix(J,$,Q=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Q){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Q=!0}if($===!0){let W=this.children;for(let K=0,H=W.length;K<H;K++)W[K].updateWorldMatrix(!1,!0,Q)}}toJSON(J){let $=J===void 0||typeof J==="string",Q={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let N=Y[X];W(J.shapes,N)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(W(J.materials,this.material[Y]));Z.material=H}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(W(J.animations,Y))}}if($){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),N=K(J.shapes),E=K(J.skeletons),G=K(J.animations),R=K(J.nodes);if(H.length>0)Q.geometries=H;if(Y.length>0)Q.materials=Y;if(X.length>0)Q.textures=X;if(U.length>0)Q.images=U;if(N.length>0)Q.shapes=N;if(E.length>0)Q.skeletons=E;if(G.length>0)Q.animations=G;if(R.length>0)Q.nodes=R}return Q.object=Z,Q;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Q=0;Q<J.children.length;Q++){let Z=J.children[Q];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}g9.DEFAULT_UP=new p(0,1,0);g9.DEFAULT_MATRIX_AUTO_UPDATE=!0;g9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class M6 extends g9{constructor(){super();this.isGroup=!0,this.type="Group"}}var M1={type:"move"};class $8{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new M6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new M6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new p,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new p;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new M6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new p,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new p,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Q of J.hand.values())this._getHandJoint($,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Q){let Z=null,W=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let L of J.hand.values()){let I=$.getJointPose(L,Q),q=this._getHandJoint(X,L);if(I!==null)q.matrix.fromArray(I.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=I.radius;q.visible=I!==null}let U=X.joints["index-finger-tip"],N=X.joints["thumb-tip"],E=U.position.distanceTo(N.position),G=0.02,R=0.005;if(X.inputState.pinching&&E>G+R)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=G-R)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=$.getPose(J.gripSpace,Q),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=$.getPose(J.targetRaySpace,Q),Z===null&&W!==null)Z=W;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(M1)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Q=new M6;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[$.jointName]=Q,J.add(Q)}return J.joints[$.jointName]}}var iZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},T7={h:0,s:0,l:0},T8={h:0,s:0,l:0};function r5(J,$,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+($-J)*6*Q;if(Q<0.5)return $;if(Q<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Q);return J}class i0{constructor(J,$,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Q)}set(J,$,Q){if($===void 0&&Q===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,u0.colorSpaceToWorking(this,$),this}setRGB(J,$,Q,Z=u0.workingColorSpace){return this.r=J,this.g=$,this.b=Q,u0.colorSpaceToWorking(this,Z),this}setHSL(J,$,Q,Z=u0.workingColorSpace){if(J=H1(J,1),$=c0($,0,1),Q=c0(Q,0,1),$===0)this.r=this.g=this.b=Q;else{let W=Q<=0.5?Q*(1+$):Q+$-Q*$,K=2*Q-W;this.r=r5(K,W,J+0.3333333333333333),this.g=r5(K,W,J),this.b=r5(K,W,J-0.3333333333333333)}return u0.colorSpaceToWorking(this,Z),this}setStyle(J,$="srgb"){function Q(W){if(W===void 0)return;if(parseFloat(W)<1)S0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return Q(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,$);if(W=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return Q(W[4]),this.setRGB(Math.min(100,parseFloat(W[1]))/100,Math.min(100,parseFloat(W[2]))/100,Math.min(100,parseFloat(W[3]))/100,$);break;case"hsl":case"hsla":if(W=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return Q(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,$);break;default:S0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,$);else if(K===6)return this.setHex(parseInt(W,16),$);else S0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Q=iZ[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,$);else S0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=B7(J.r),this.g=B7(J.g),this.b=B7(J.b),this}copyLinearToSRGB(J){return this.r=L6(J.r),this.g=L6(J.g),this.b=L6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return u0.workingToColorSpace(C9.copy(this),J),Math.round(c0(C9.r*255,0,255))*65536+Math.round(c0(C9.g*255,0,255))*256+Math.round(c0(C9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=u0.workingColorSpace){u0.workingToColorSpace(C9.copy(this),$);let{r:Q,g:Z,b:W}=C9,K=Math.max(Q,Z,W),H=Math.min(Q,Z,W),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let N=K-H;switch(X=U<=0.5?N/(K+H):N/(2-K-H),K){case Q:Y=(Z-W)/N+(Z<W?6:0);break;case Z:Y=(W-Q)/N+2;break;case W:Y=(Q-Z)/N+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,$=u0.workingColorSpace){return u0.workingToColorSpace(C9.copy(this),$),J.r=C9.r,J.g=C9.g,J.b=C9.b,J}getStyle(J="srgb"){u0.workingToColorSpace(C9.copy(this),J);let{r:$,g:Q,b:Z}=C9;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL(J,$,Q){return this.getHSL(T7),this.setHSL(T7.h+J,T7.s+$,T7.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Q){return this.r=J.r+($.r-J.r)*Q,this.g=J.g+($.g-J.g)*Q,this.b=J.b+($.b-J.b)*Q,this}lerpHSL(J,$){this.getHSL(T7),J.getHSL(T8);let Q=c5(T7.h,T8.h,$),Z=c5(T7.s,T8.s,$),W=c5(T7.l,T8.l,$);return this.setHSL(Q,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Q=this.g,Z=this.b,W=J.elements;return this.r=W[0]*$+W[3]*Q+W[6]*Z,this.g=W[1]*$+W[4]*Q+W[7]*Z,this.b=W[2]*$+W[5]*Q+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var C9=new i0;i0.NAMES=iZ;var t9=new p,O7=new p,t5=new p,M7=new p,X6=new p,U6=new p,hQ=new p,e5=new p,JJ=new p,$J=new p,QJ=new U9,ZJ=new U9,WJ=new U9;class d9{constructor(J=new p,$=new p,Q=new p){this.a=J,this.b=$,this.c=Q}static getNormal(J,$,Q,Z){Z.subVectors(Q,$),t9.subVectors(J,$),Z.cross(t9);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,$,Q,Z,W){t9.subVectors(Z,$),O7.subVectors(Q,$),t5.subVectors(J,$);let K=t9.dot(t9),H=t9.dot(O7),Y=t9.dot(t5),X=O7.dot(O7),U=O7.dot(t5),N=K*X-H*H;if(N===0)return W.set(0,0,0),null;let E=1/N,G=(X*Y-H*U)*E,R=(K*U-H*Y)*E;return W.set(1-G-R,R,G)}static containsPoint(J,$,Q,Z){if(this.getBarycoord(J,$,Q,Z,M7)===null)return!1;return M7.x>=0&&M7.y>=0&&M7.x+M7.y<=1}static getInterpolation(J,$,Q,Z,W,K,H,Y){if(this.getBarycoord(J,$,Q,Z,M7)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,M7.x),Y.addScaledVector(K,M7.y),Y.addScaledVector(H,M7.z),Y}static getInterpolatedAttribute(J,$,Q,Z,W,K){return QJ.setScalar(0),ZJ.setScalar(0),WJ.setScalar(0),QJ.fromBufferAttribute(J,$),ZJ.fromBufferAttribute(J,Q),WJ.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(QJ,W.x),K.addScaledVector(ZJ,W.y),K.addScaledVector(WJ,W.z),K}static isFrontFacing(J,$,Q,Z){return t9.subVectors(Q,$),O7.subVectors(J,$),t9.cross(O7).dot(Z)<0}set(J,$,Q){return this.a.copy(J),this.b.copy($),this.c.copy(Q),this}setFromPointsAndIndices(J,$,Q,Z){return this.a.copy(J[$]),this.b.copy(J[Q]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,Q,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return t9.subVectors(this.c,this.b),O7.subVectors(this.a,this.b),t9.cross(O7).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return d9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return d9.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,Q,Z,W){return d9.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,W)}containsPoint(J){return d9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return d9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Q=this.a,Z=this.b,W=this.c,K,H;X6.subVectors(Z,Q),U6.subVectors(W,Q),e5.subVectors(J,Q);let Y=X6.dot(e5),X=U6.dot(e5);if(Y<=0&&X<=0)return $.copy(Q);JJ.subVectors(J,Z);let U=X6.dot(JJ),N=U6.dot(JJ);if(U>=0&&N<=U)return $.copy(Z);let E=Y*N-U*X;if(E<=0&&Y>=0&&U<=0&&Y-U>0)return K=Y/(Y-U),$.copy(Q).addScaledVector(X6,K);$J.subVectors(J,W);let G=X6.dot($J),R=U6.dot($J);if(R>=0&&G<=R)return $.copy(W);let L=G*X-Y*R;if(L<=0&&X>=0&&R<=0)return H=X/(X-R),$.copy(Q).addScaledVector(U6,H);let I=U*R-G*N;if(I<=0&&N-U>=0&&G-R>=0)return hQ.subVectors(W,Z),H=(N-U)/(N-U+(G-R)),$.copy(Z).addScaledVector(hQ,H);let q=1/(I+L+E);return K=L*q,H=E*q,$.copy(Q).addScaledVector(X6,K).addScaledVector(U6,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class t7{constructor(J=new p(1/0,1/0,1/0),$=new p(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$+=3)this.expandByPoint(e9.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Q=J.count;$<Q;$++)this.expandByPoint(e9.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Q=e9.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let W=Q.getAttribute("position");if($===!0&&W!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,e9);else e9.fromBufferAttribute(W,K);e9.applyMatrix4(J.matrixWorld),this.expandByPoint(e9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();S8.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();S8.copy(Q.boundingBox)}S8.applyMatrix4(J.matrixWorld),this.union(S8)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,e9),e9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Q;if(J.normal.x>0)$=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return $<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(l6),j8.subVectors(this.max,l6),N6.subVectors(J.a,l6),E6.subVectors(J.b,l6),G6.subVectors(J.c,l6),S7.subVectors(E6,N6),j7.subVectors(G6,E6),u7.subVectors(N6,G6);let $=[0,-S7.z,S7.y,0,-j7.z,j7.y,0,-u7.z,u7.y,S7.z,0,-S7.x,j7.z,0,-j7.x,u7.z,0,-u7.x,-S7.y,S7.x,0,-j7.y,j7.x,0,-u7.y,u7.x,0];if(!KJ($,N6,E6,G6,j8))return!1;if($=[1,0,0,0,1,0,0,0,1],!KJ($,N6,E6,G6,j8))return!1;return f8.crossVectors(S7,j7),$=[f8.x,f8.y,f8.z],KJ($,N6,E6,G6,j8)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,e9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(e9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return L7[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),L7[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),L7[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),L7[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),L7[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),L7[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),L7[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),L7[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(L7),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var L7=[new p,new p,new p,new p,new p,new p,new p,new p],e9=new p,S8=new t7,N6=new p,E6=new p,G6=new p,S7=new p,j7=new p,u7=new p,l6=new p,j8=new p,f8=new p,c7=new p;function KJ(J,$,Q,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){c7.fromArray(J,K);let Y=W.x*Math.abs(c7.x)+W.y*Math.abs(c7.y)+W.z*Math.abs(c7.z),X=$.dot(c7),U=Q.dot(c7),N=Z.dot(c7);if(Math.max(-Math.max(X,U,N),Math.min(X,U,N))>Y)return!1}return!0}var G9=new p,v8=new m0,L1=0;class H7 extends A7{constructor(J,$,Q=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L1++}),this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?F$(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,$,Q){J*=this.itemSize,Q*=$.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=$.array[Q+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Q=this.count;$<Q;$++)v8.fromBufferAttribute(this,$),v8.applyMatrix3(J),this.setXY($,v8.x,v8.y);else if(this.itemSize===3)for(let $=0,Q=this.count;$<Q;$++)G9.fromBufferAttribute(this,$),G9.applyMatrix3(J),this.setXYZ($,G9.x,G9.y,G9.z);return this}applyMatrix4(J){for(let $=0,Q=this.count;$<Q;$++)G9.fromBufferAttribute(this,$),G9.applyMatrix4(J),this.setXYZ($,G9.x,G9.y,G9.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)G9.fromBufferAttribute(this,$),G9.applyNormalMatrix(J),this.setXYZ($,G9.x,G9.y,G9.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)G9.fromBufferAttribute(this,$),G9.transformDirection(J),this.setXYZ($,G9.x,G9.y,G9.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Q=this.array[J*this.itemSize+$];if(this.normalized)Q=this._denormalize(Q);return Q}setComponent(J,$,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+$]=Q,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=this._denormalize($);return $}setX(J,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=this._denormalize($);return $}setY(J,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=this._denormalize($);return $}setZ(J,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=this._denormalize($);return $}setW(J,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Q){if(J*=this.itemSize,this.normalized)$=this._normalize($),Q=this._normalize(Q);return this.array[J+0]=$,this.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J*=this.itemSize,this.normalized)$=this._normalize($),Q=this._normalize(Q),Z=this._normalize(Z);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this}setXYZW(J,$,Q,Z,W){if(J*=this.itemSize,this.normalized)$=this._normalize($),Q=this._normalize(Q),Z=this._normalize(Z),W=this._normalize(W);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let $=this._normalizationScale;return $!==void 0?Math.max(J/$,-1):Y1(J,this.array)}_normalize(J){let $=this._normalizationScale;return $!==void 0?Math.round(J*$):X1(J,this.array)}}class U5 extends H7{constructor(J,$,Q){super(new Uint16Array(J),$,Q)}}class N5 extends H7{constructor(J,$,Q){super(new Uint32Array(J),$,Q)}}class J7 extends H7{constructor(J,$,Q){super(new Float32Array(J),$,Q)}}var V1=new t7,d6=new p,HJ=new p;class Q8{constructor(J=new p,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Q=this.center;if($!==void 0)Q.copy($);else V1.setFromPoints(J).getCenter(Q);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,Q.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Q=this.center.distanceToSquared(J);if($.copy(J),Q>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;d6.subVectors(J,this.center);let $=d6.lengthSq();if($>this.radius*this.radius){let Q=Math.sqrt($),Z=(Q-this.radius)*0.5;this.center.addScaledVector(d6,Z/Q),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else HJ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(d6.copy(J.center).add(HJ)),this.expandByPoint(d6.copy(J.center).sub(HJ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var B1=0,m9=new X9,YJ=new g9,q6=new p,x9=new t7,u6=new t7,M9=new p;class w7 extends A7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=t6(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((W1(J))?N5:U5)(J,1);else this.index=J;return this}setIndirect(J,$=0){return this.indirect=J,this.indirectOffset=$,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Q=0){this.groups.push({start:J,count:$,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let W=new y0().getNormalMatrix(J);Q.applyNormalMatrix(W),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return m9.makeRotationFromQuaternion(J),this.applyMatrix4(m9),this}rotateX(J){return m9.makeRotationX(J),this.applyMatrix4(m9),this}rotateY(J){return m9.makeRotationY(J),this.applyMatrix4(m9),this}rotateZ(J){return m9.makeRotationZ(J),this.applyMatrix4(m9),this}translate(J,$,Q){return m9.makeTranslation(J,$,Q),this.applyMatrix4(m9),this}scale(J,$,Q){return m9.makeScale(J,$,Q),this.applyMatrix4(m9),this}lookAt(J){return YJ.lookAt(J),YJ.updateMatrix(),this.applyMatrix4(YJ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(q6).negate(),this.translate(q6.x,q6.y,q6.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let Q=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];Q.push(K.x,K.y,K.z||0)}this.setAttribute("position",new J7(Q,3))}else{let Q=Math.min(J.length,$.count);for(let Z=0;Z<Q;Z++){let W=J[Z];$.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>$.count)S0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new t7;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new p(-1/0,-1/0,-1/0),new p(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Q=0,Z=$.length;Q<Z;Q++){let W=$[Q];if(x9.setFromBufferAttribute(W),this.morphTargetsRelative)M9.addVectors(this.boundingBox.min,x9.min),this.boundingBox.expandByPoint(M9),M9.addVectors(this.boundingBox.max,x9.max),this.boundingBox.expandByPoint(M9);else this.boundingBox.expandByPoint(x9.min),this.boundingBox.expandByPoint(x9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))f0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Q8;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new p,1/0);return}if(J){let Q=this.boundingSphere.center;if(x9.setFromBufferAttribute(J),$)for(let W=0,K=$.length;W<K;W++){let H=$[W];if(u6.setFromBufferAttribute(H),this.morphTargetsRelative)M9.addVectors(x9.min,u6.min),x9.expandByPoint(M9),M9.addVectors(x9.max,u6.max),x9.expandByPoint(M9);else x9.expandByPoint(u6.min),x9.expandByPoint(u6.max)}x9.getCenter(Q);let Z=0;for(let W=0,K=J.count;W<K;W++)M9.fromBufferAttribute(J,W),Z=Math.max(Z,Q.distanceToSquared(M9));if($)for(let W=0,K=$.length;W<K;W++){let H=$[W],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(M9.fromBufferAttribute(H,X),Y)q6.fromBufferAttribute(J,X),M9.add(q6);Z=Math.max(Z,Q.distanceToSquared(M9))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))f0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){f0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:W}=$,K=this.getAttribute("tangent");if(K===void 0||K.count!==Q.count)K=new H7(new Float32Array(4*Q.count),4),this.setAttribute("tangent",K);let H=[],Y=[],X=new Uint8Array(Q.count);for(let V=0;V<Q.count;V++)H[V]=new p,Y[V]=new p;let U=new p,N=new p,E=new p,G=new m0,R=new m0,L=new m0,I=new p,q=new p;function F(V,j,x){X[V]=X[j]=X[x]=1,U.fromBufferAttribute(Q,V),N.fromBufferAttribute(Q,j),E.fromBufferAttribute(Q,x),G.fromBufferAttribute(W,V),R.fromBufferAttribute(W,j),L.fromBufferAttribute(W,x),N.sub(U),E.sub(U),R.sub(G),L.sub(G);let S=1/(R.x*L.y-L.x*R.y);if(!isFinite(S))return;I.copy(N).multiplyScalar(L.y).addScaledVector(E,-R.y).multiplyScalar(S),q.copy(E).multiplyScalar(R.x).addScaledVector(N,-L.x).multiplyScalar(S),H[V].add(I),H[j].add(I),H[x].add(I),Y[V].add(q),Y[j].add(q),Y[x].add(q)}let A=this.groups;if(A.length===0)A=[{start:0,count:J.count}];for(let V=0,j=A.length;V<j;++V){let x=A[V],S=x.start,g=x.count;for(let r=S,C=S+g;r<C;r+=3)F(J.getX(r+0),J.getX(r+1),J.getX(r+2))}let w=new p,B=new p,z=new p,P=new p;function D(V){z.fromBufferAttribute(Z,V),P.copy(z);let j=H[V];w.copy(j),w.sub(z.multiplyScalar(z.dot(j))).normalize(),B.crossVectors(P,j);let S=B.dot(Y[V])<0?-1:1;K.setXYZW(V,w.x,w.y,w.z,S)}for(let V=0,j=Q.count;V<j;++V)if(X[V])D(V);this._transformed=!0}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Q=this.getAttribute("normal");if(Q===void 0||Q.count!==$.count)Q=new H7(new Float32Array($.count*3),3),this.setAttribute("normal",Q);else for(let E=0,G=Q.count;E<G;E++)Q.setXYZ(E,0,0,0);let Z=new p,W=new p,K=new p,H=new p,Y=new p,X=new p,U=new p,N=new p;if(J)for(let E=0,G=J.count;E<G;E+=3){let R=J.getX(E+0),L=J.getX(E+1),I=J.getX(E+2);Z.fromBufferAttribute($,R),W.fromBufferAttribute($,L),K.fromBufferAttribute($,I),U.subVectors(K,W),N.subVectors(Z,W),U.cross(N),H.fromBufferAttribute(Q,R),Y.fromBufferAttribute(Q,L),X.fromBufferAttribute(Q,I),H.add(U),Y.add(U),X.add(U),Q.setXYZ(R,H.x,H.y,H.z),Q.setXYZ(L,Y.x,Y.y,Y.z),Q.setXYZ(I,X.x,X.y,X.z)}else for(let E=0,G=$.count;E<G;E+=3)Z.fromBufferAttribute($,E+0),W.fromBufferAttribute($,E+1),K.fromBufferAttribute($,E+2),U.subVectors(K,W),N.subVectors(Z,W),U.cross(N),Q.setXYZ(E+0,U.x,U.y,U.z),Q.setXYZ(E+1,U.x,U.y,U.z),Q.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Q=J.count;$<Q;$++)M9.fromBufferAttribute(J,$),M9.normalize(),J.setXYZ($,M9.x,M9.y,M9.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:N}=H,E=new X.constructor(Y.length*U),G=0,R=0;for(let L=0,I=Y.length;L<I;L++){if(H.isInterleavedBufferAttribute)G=Y[L]*H.data.stride+H.offset;else G=Y[L]*U;for(let q=0;q<U;q++)E[R++]=X[G++]}return new H7(E,U,N)}if(this.index===null)return S0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new w7,Q=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,Q);$.setAttribute(H,X)}let W=this.morphAttributes;for(let H in W){let Y=[],X=W[H];for(let U=0,N=X.length;U<N;U++){let E=X[U],G=J(E,Q);Y.push(G)}$.morphAttributes[H]=Y}$.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];$.addGroup(X.start,X.count,X.materialIndex)}return $}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Q=this.attributes;for(let Y in Q){let X=Q[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let N=0,E=X.length;N<E;N++){let G=X[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[Y]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone($))}let W=J.morphAttributes;for(let X in W){let U=[],N=W[X];for(let E=0,G=N.length;E<G;E++)U.push(N[E].clone($));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let N=K[X];this.addGroup(N.start,N.count,N.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var XJ=new p,k1=new p,I1=new y0;class K7{constructor(J=new p(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Q,Z){return this.normal.set(J,$,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Q){let Z=XJ.subVectors(Q,$).cross(k1.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$,Q=!0){let Z=J.delta(XJ),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/W;if(Q===!0&&(K<0||K>1))return null;return $.copy(J.start).addScaledVector(Z,K)}intersectsLine(J){let $=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return $<0&&Q>0||Q<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Q=$||I1.getNormalMatrix(J),Z=this.coplanarPoint(XJ).applyMatrix4(J),W=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var A1=0;class P6 extends A7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=t6(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new i0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Q=J[$];if(Q===void 0){S0(`Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){S0(`Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector2&&(Q&&Q.isVector2)||Z&&Z.isEuler&&(Q&&Q.isEuler)||Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,Q.blending=this.blending,Q.side=this.side,Q.shadowSide=this.shadowSide,Q.vertexColors=this.vertexColors,Q.opacity=this.opacity,Q.transparent=this.transparent,Q.blendSrc=this.blendSrc,Q.blendDst=this.blendDst,Q.blendEquation=this.blendEquation,Q.blendSrcAlpha=this.blendSrcAlpha,Q.blendDstAlpha=this.blendDstAlpha,Q.blendEquationAlpha=this.blendEquationAlpha,Q.blendColor=this.blendColor.getHex(),Q.blendAlpha=this.blendAlpha,Q.depthFunc=this.depthFunc,Q.depthTest=this.depthTest,Q.depthWrite=this.depthWrite,Q.colorWrite=this.colorWrite,Q.clipIntersection=this.clipIntersection,Q.clipShadows=this.clipShadows,Q.stencilWriteMask=this.stencilWriteMask,Q.stencilFunc=this.stencilFunc,Q.stencilRef=this.stencilRef,Q.stencilFuncMask=this.stencilFuncMask,Q.stencilFail=this.stencilFail,Q.stencilZFail=this.stencilZFail,Q.stencilZPass=this.stencilZPass,Q.stencilWrite=this.stencilWrite,Q.polygonOffset=this.polygonOffset,Q.polygonOffsetFactor=this.polygonOffsetFactor,Q.polygonOffsetUnits=this.polygonOffsetUnits,Q.dithering=this.dithering,Q.alphaTest=this.alphaTest,Q.alphaHash=this.alphaHash,Q.alphaToCoverage=this.alphaToCoverage,Q.premultipliedAlpha=this.premultipliedAlpha,Q.forceSinglePass=this.forceSinglePass,Q.allowOverride=this.allowOverride,Q.visible=this.visible,Q.toneMapped=this.toneMapped,Q.name=this.name,this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)Q.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)Q.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Q.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Q.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Q.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Q.clippingPlanes=this.clippingPlanes.map((W)=>W.toJSON());if(this.rotation!==void 0)Q.rotation=this.rotation;if(this.depthPacking!==void 0)Q.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Q.linewidth=this.linewidth;if(this.linecap!==void 0)Q.linecap=this.linecap;if(this.linejoin!==void 0)Q.linejoin=this.linejoin;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.wireframe!==void 0)Q.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Q.flatShading=this.flatShading;if(this.fog!==void 0)Q.fog=this.fog;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if($){let W=Z(J.textures),K=Z(J.images);if(W.length>0)Q.textures=W;if(K.length>0)Q.images=K}return Q}fromJSON(J,$){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new i0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Q)=>new K7().fromJSON(Q));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=$[J.map]||null;if(J.matcap!==void 0)this.matcap=$[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=$[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=$[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=$[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Q=J.normalScale;if(Array.isArray(Q)===!1)Q=[Q,Q];this.normalScale=new m0().fromArray(Q)}if(J.displacementMap!==void 0)this.displacementMap=$[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=$[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=$[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=$[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=$[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=$[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=$[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=$[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=$[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=$[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=$[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=$[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=$[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=$[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new m0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=$[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=$[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=$[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=$[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=$[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=$[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=$[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=$[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Q=null;if($!==null){let Z=$.length;Q=Array(Z);for(let W=0;W!==Z;++W)Q[W]=$[W].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var V7=new p,UJ=new p,y8=new p,b8=new p;class O${constructor(J=new p,$=new p(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,V7)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Q=$.dot(this.direction);if(Q<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=V7.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return V7.copy(this.origin).addScaledVector(this.direction,$),V7.distanceToSquared(J)}distanceSqToSegment(J,$,Q,Z){UJ.copy(J).add($).multiplyScalar(0.5),y8.copy($).sub(J).normalize(),b8.copy(this.origin).sub(UJ);let W=J.distanceTo($)*0.5,K=-this.direction.dot(y8),H=b8.dot(this.direction),Y=-b8.dot(y8),X=b8.lengthSq(),U=Math.abs(1-K*K),N,E,G,R;if(U>0)if(N=K*Y-H,E=K*H-Y,R=W*U,N>=0)if(E>=-R)if(E<=R){let L=1/U;N*=L,E*=L,G=N*(N+K*E+2*H)+E*(K*N+E+2*Y)+X}else E=W,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else E=-W,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else if(E<=-R)N=Math.max(0,-(-K*W+H)),E=N>0?-W:Math.min(Math.max(-W,-Y),W),G=-N*N+E*(E+2*Y)+X;else if(E<=R)N=0,E=Math.min(Math.max(-W,-Y),W),G=E*(E+2*Y)+X;else N=Math.max(0,-(K*W+H)),E=N>0?W:Math.min(Math.max(-W,-Y),W),G=-N*N+E*(E+2*Y)+X;else E=K>0?-W:W,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;if(Q)Q.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(UJ).addScaledVector(y8,E);return G}intersectSphere(J,$){if(J.radius<0)return null;V7.subVectors(J.center,this.origin);let Q=V7.dot(this.direction),Z=V7.dot(V7)-Q*Q,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),H=Q-K,Y=Q+K;if(Y<0)return null;if(H<0)return this.at(Y,$);return this.at(H,$)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/$;return Q>=0?Q:null}intersectPlane(J,$){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Q,Z,W,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,E=this.origin;if(X>=0)Q=(J.min.x-E.x)*X,Z=(J.max.x-E.x)*X;else Q=(J.max.x-E.x)*X,Z=(J.min.x-E.x)*X;if(U>=0)W=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if(Q>K||W>Z)return null;if(W>Q||isNaN(Q))Q=W;if(K<Z||isNaN(Z))Z=K;if(N>=0)H=(J.min.z-E.z)*N,Y=(J.max.z-E.z)*N;else H=(J.max.z-E.z)*N,Y=(J.min.z-E.z)*N;if(Q>Y||H>Z)return null;if(H>Q||Q!==Q)Q=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at(Q>=0?Q:Z,$)}intersectsBox(J){return this.intersectBox(J,V7)!==null}intersectTriangle(J,$,Q,Z,W){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,N=J.x-K.x,E=J.y-K.y,G=J.z-K.z,R=$.x-K.x,L=$.y-K.y,I=$.z-K.z,q=Q.x-K.x,F=Q.y-K.y,A=Q.z-K.z,w=Math.abs(Y),B=Math.abs(X),z=Math.abs(U),P,D,V,j,x,S,g,r,C,c,o,v;if(w>=B&&w>=z)if(V=Y,S=N,C=R,v=q,Y>=0)P=X,D=U,j=E,x=G,g=L,r=I,c=F,o=A;else P=U,D=X,j=G,x=E,g=I,r=L,c=A,o=F;else if(B>=z)if(V=X,S=E,C=L,v=F,X>=0)P=U,D=Y,j=G,x=N,g=I,r=R,c=A,o=q;else P=Y,D=U,j=N,x=G,g=R,r=I,c=q,o=A;else if(V=U,S=G,C=I,v=A,U>=0)P=Y,D=X,j=N,x=E,g=R,r=L,c=q,o=F;else P=X,D=Y,j=E,x=N,g=L,r=R,c=F,o=q;if(V===0)return null;let Z0=P/V,d=D/V,a=1/V,J0=j-Z0*S,L0=x-d*S,n=g-Z0*C,$0=r-d*C,O0=c-Z0*v,w0=o-d*v,P0=O0*$0-w0*n,R0=J0*w0-L0*O0,s0=n*L0-$0*J0;if(Z){if(P0<0||R0<0||s0<0)return null}else if((P0<0||R0<0||s0<0)&&(P0>0||R0>0||s0>0))return null;let j0=P0+R0+s0;if(j0===0)return null;let v0=a*(P0*S+R0*C+s0*v);if(j0>0?v0<0:v0>0)return null;return this.at(v0/j0,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class M$ extends P6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new i0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new C6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var xQ=new X9,n7=new O$,h8=new Q8,gQ=new p,x8=new p,g8=new p,p8=new p,NJ=new p,m8=new p,pQ=new p,l8=new p;class _9 extends g9{constructor(J=new w7,$=new M$){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,$){let Q=this.geometry,Z=Q.attributes.position,W=Q.morphAttributes.position,K=Q.morphTargetsRelative;$.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(W&&H){m8.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=H[Y],N=W[Y];if(U===0)continue;if(NJ.fromBufferAttribute(N,J),K)m8.addScaledVector(NJ,U);else m8.addScaledVector(NJ.sub($),U)}$.add(m8)}return $}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(h8.copy(Q.boundingSphere),h8.applyMatrix4(W),n7.copy(J.ray).recast(J.near),h8.containsPoint(n7.origin)===!1){if(n7.intersectSphere(h8,gQ)===null)return;if(n7.origin.distanceToSquared(gQ)>(J.far-J.near)**2)return}if(xQ.copy(W).invert(),n7.copy(J.ray).applyMatrix4(xQ),Q.boundingBox!==null){if(n7.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,$,n7)}_computeIntersections(J,$,Q){let Z,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,N=W.attributes.normal,E=W.groups,G=W.drawRange;if(H!==null)if(Array.isArray(K))for(let R=0,L=E.length;R<L;R++){let I=E[R],q=K[I.materialIndex],F=Math.max(I.start,G.start),A=Math.min(H.count,Math.min(I.start+I.count,G.start+G.count));for(let w=F,B=A;w<B;w+=3){let z=H.getX(w),P=H.getX(w+1),D=H.getX(w+2);if(Z=d8(this,q,J,Q,X,U,N,z,P,D),Z)Z.faceIndex=Math.floor(w/3),Z.face.materialIndex=I.materialIndex,$.push(Z)}}else{let R=Math.max(0,G.start),L=Math.min(H.count,G.start+G.count);for(let I=R,q=L;I<q;I+=3){let F=H.getX(I),A=H.getX(I+1),w=H.getX(I+2);if(Z=d8(this,K,J,Q,X,U,N,F,A,w),Z)Z.faceIndex=Math.floor(I/3),$.push(Z)}}else if(Y!==void 0)if(Array.isArray(K))for(let R=0,L=E.length;R<L;R++){let I=E[R],q=K[I.materialIndex],F=Math.max(I.start,G.start),A=Math.min(Y.count,Math.min(I.start+I.count,G.start+G.count));for(let w=F,B=A;w<B;w+=3){let z=w,P=w+1,D=w+2;if(Z=d8(this,q,J,Q,X,U,N,z,P,D),Z)Z.faceIndex=Math.floor(w/3),Z.face.materialIndex=I.materialIndex,$.push(Z)}}else{let R=Math.max(0,G.start),L=Math.min(Y.count,G.start+G.count);for(let I=R,q=L;I<q;I+=3){let F=I,A=I+1,w=I+2;if(Z=d8(this,K,J,Q,X,U,N,F,A,w),Z)Z.faceIndex=Math.floor(I/3),$.push(Z)}}}}function z1(J,$,Q,Z,W,K,H,Y){let X;if($.side===1)X=Z.intersectTriangle(H,K,W,!0,Y);else X=Z.intersectTriangle(W,K,H,$.side===0,Y);if(X===null)return null;l8.copy(Y),l8.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(l8);if(U<Q.near||U>Q.far)return null;return{distance:U,point:l8.clone(),object:J}}function d8(J,$,Q,Z,W,K,H,Y,X,U){J.getVertexPosition(Y,x8),J.getVertexPosition(X,g8),J.getVertexPosition(U,p8);let N=z1(J,$,Q,Z,x8,g8,p8,pQ);if(N){let E=new p;if(d9.getBarycoord(pQ,x8,g8,p8,E),W)N.uv=d9.getInterpolatedAttribute(W,Y,X,U,E,new m0);if(K)N.uv1=d9.getInterpolatedAttribute(K,Y,X,U,E,new m0);if(H){if(N.normal=d9.getInterpolatedAttribute(H,Y,X,U,E,new p),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new p,materialIndex:0};d9.getNormal(x8,g8,p8,G.normal),N.face=G,N.barycoord=E}return N}class Z8 extends V9{constructor(J=null,$=1,Q=1,Z,W,K,H,Y,X=1003,U=1003,N,E){super(null,K,H,Y,X,U,Z,W,N,E);this.isDataTexture=!0,this.image={data:J,width:$,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _6 extends H7{constructor(J,$,Q,Z=1){super(J,$,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var s7=new Q8,w1=new m0(0.5,0.5),u8=new p;class k6{constructor(J=new K7,$=new K7,Q=new K7,Z=new K7,W=new K7,K=new K7){this.planes=[J,$,Q,Z,W,K]}set(J,$,Q,Z,W,K){let H=this.planes;return H[0].copy(J),H[1].copy($),H[2].copy(Q),H[3].copy(Z),H[4].copy(W),H[5].copy(K),this}copy(J){let $=this.planes;for(let Q=0;Q<6;Q++)$[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,$=2000,Q=!1){let Z=this.planes,W=J.elements,K=W[0],H=W[1],Y=W[2],X=W[3],U=W[4],N=W[5],E=W[6],G=W[7],R=W[8],L=W[9],I=W[10],q=W[11],F=W[12],A=W[13],w=W[14],B=W[15];if(Z[0].setComponents(X-K,G-U,q-R,B-F).normalize(),Z[1].setComponents(X+K,G+U,q+R,B+F).normalize(),Z[2].setComponents(X+H,G+N,q+L,B+A).normalize(),Z[3].setComponents(X-H,G-N,q-L,B-A).normalize(),Q)Z[4].setComponents(Y,E,I,w).normalize(),Z[5].setComponents(X-Y,G-E,q-I,B-w).normalize();else if(Z[4].setComponents(X-Y,G-E,q-I,B-w).normalize(),$===2000)Z[5].setComponents(X+Y,G+E,q+I,B+w).normalize();else if($===2001)Z[5].setComponents(Y,E,I,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();s7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();s7.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(s7)}intersectsSprite(J){s7.center.set(0,0,0);let $=w1.distanceTo(J.center);return s7.radius=0.7071067811865476+$,s7.applyMatrix4(J.matrixWorld),this.intersectsSphere(s7)}intersectsSphere(J){let $=this.planes,Q=J.center,Z=-J.radius;for(let W=0;W<6;W++)if($[W].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Q=0;Q<6;Q++){let Z=$[Q];if(u8.x=Z.normal.x>0?J.max.x:J.min.x,u8.y=Z.normal.y>0?J.max.y:J.min.y,u8.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(u8)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var mQ=new X9;class E5{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let $=J.cameras,Q=this._frustums;for(let Z=0;Z<$.length;Z++){let W=$[Z];if(mQ.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q[Z]===void 0)Q[Z]=new k6;Q[Z].setFromProjectionMatrix(mQ,W.coordinateSystem,W.reversedDepth)}return this._count=$.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let $=this._frustums;for(let Q=0;Q<this._count;Q++)if($[Q].intersectsObject(J))return!0;return!1}intersectsSprite(J){let $=this._frustums;for(let Q=0;Q<this._count;Q++)if($[Q].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let $=this._frustums;for(let Q=0;Q<this._count;Q++)if($[Q].intersectsSphere(J))return!0;return!1}intersectsBox(J){let $=this._frustums;for(let Q=0;Q<this._count;Q++)if($[Q].intersectsBox(J))return!0;return!1}containsPoint(J){let $=this._frustums;for(let Q=0;Q<this._count;Q++)if($[Q].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let $=this._frustums,Q=J._frustums;for(let Z=0;Z<J._count;Z++){if($[Z]===void 0)$[Z]=new k6;$[Z].copy(Q[Z])}return this._count=J._count,this}clone(){return new E5().copy(this)}}class G5 extends V9{constructor(J=[],$=301,Q,Z,W,K,H,Y,X,U){super(J,$,Q,Z,W,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class g7 extends V9{constructor(J,$,Q=1014,Z,W,K,H=1003,Y=1003,X,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:$,depth:N};super(E,Z,W,K,H,Y,U,Q,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new e6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);return $.compareFunction=this.compareFunction,$}}class q5 extends g7{constructor(J,$=1014,Q=301,Z,W,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,$,Q,Z,W,K,H,Y,X);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class F5 extends V9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class T6 extends w7{constructor(J=1,$=1,Q=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Q,widthSegments:Z,heightSegments:W,depthSegments:K};let H=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let Y=[],X=[],U=[],N=[],E=0,G=0;R("z","y","x",-1,-1,Q,$,J,K,W,0),R("z","y","x",1,-1,Q,$,-J,K,W,1),R("x","z","y",1,1,J,Q,$,Z,K,2),R("x","z","y",1,-1,J,Q,-$,Z,K,3),R("x","y","z",1,-1,J,$,Q,Z,W,4),R("x","y","z",-1,-1,J,$,-Q,Z,W,5),this.setIndex(Y),this.setAttribute("position",new J7(X,3)),this.setAttribute("normal",new J7(U,3)),this.setAttribute("uv",new J7(N,2));function R(L,I,q,F,A,w,B,z,P,D,V){let j=w/P,x=B/D,S=w/2,g=B/2,r=z/2,C=P+1,c=D+1,o=0,v=0,Z0=new p;for(let d=0;d<c;d++){let a=d*x-g;for(let J0=0;J0<C;J0++){let L0=J0*j-S;Z0[L]=L0*F,Z0[I]=a*A,Z0[q]=r,X.push(Z0.x,Z0.y,Z0.z),Z0[L]=0,Z0[I]=0,Z0[q]=z>0?1:-1,U.push(Z0.x,Z0.y,Z0.z),N.push(J0/P),N.push(1-d/D),o+=1}}for(let d=0;d<D;d++)for(let a=0;a<P;a++){let J0=E+a+C*d,L0=E+a+C*(d+1),n=E+(a+1)+C*(d+1),$0=E+(a+1)+C*d;Y.push(J0,L0,$0),Y.push(L0,n,$0),v+=6}H.addGroup(G,v,V),G+=v,E+=o}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new T6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class c9 extends w7{constructor(J=1,$=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Q,heightSegments:Z};let W=J/2,K=$/2,H=Math.floor(Q),Y=Math.floor(Z),X=H+1,U=Y+1,N=J/H,E=$/Y,G=[],R=[],L=[],I=[];for(let q=0;q<U;q++){let F=q*E-K;for(let A=0;A<X;A++){let w=A*N-W;R.push(w,-F,0),L.push(0,0,1),I.push(A/H),I.push(1-q/Y)}}for(let q=0;q<Y;q++)for(let F=0;F<H;F++){let A=F+X*q,w=F+X*(q+1),B=F+1+X*(q+1),z=F+1+X*q;G.push(A,w,z),G.push(w,B,z)}this.setIndex(G),this.setAttribute("position",new J7(R,3)),this.setAttribute("normal",new J7(L,3)),this.setAttribute("uv",new J7(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new c9(J.width,J.height,J.widthSegments,J.heightSegments)}}function e7(J){let $={};for(let Q in J){$[Q]={};for(let Z in J[Q]){let W=J[Q][Z];if(lQ(W))if(W.isRenderTargetTexture)S0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Q][Z]=null;else $[Q][Z]=W.clone();else if(Array.isArray(W))if(lQ(W[0])){let K=[];for(let H=0,Y=W.length;H<Y;H++)K[H]=W[H].clone();$[Q][Z]=K}else $[Q][Z]=W.slice();else $[Q][Z]=W}}return $}function T9(J){let $={};for(let Q=0;Q<J.length;Q++){let Z=e7(J[Q]);for(let W in Z)$[W]=Z[W]}return $}function lQ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function C1(J){let $=[];for(let Q=0;Q<J.length;Q++)$.push(J[Q].clone());return $}function L$(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return u0.workingColorSpace}var oZ={clone:e7,merge:T9},P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class S9 extends P6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=_1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=e7(J.uniforms),this.uniformsGroups=C1(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)$.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)$.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)$.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)$.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)$.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)$.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)$.uniforms[Z]={type:"m4",value:K.toArray()};else $.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)$.extensions=Q;return $}fromJSON(J,$){if(super.fromJSON(J,$),J.uniforms!==void 0)for(let Q in J.uniforms){let Z=J.uniforms[Q];switch(this.uniforms[Q]={},Z.type){case"t":this.uniforms[Q].value=$[Z.value]||null;break;case"c":this.uniforms[Q].value=new i0().setHex(Z.value);break;case"v2":this.uniforms[Q].value=new m0().fromArray(Z.value);break;case"v3":this.uniforms[Q].value=new p().fromArray(Z.value);break;case"v4":this.uniforms[Q].value=new U9().fromArray(Z.value);break;case"m3":this.uniforms[Q].value=new y0().fromArray(Z.value);break;case"m4":this.uniforms[Q].value=new X9().fromArray(Z.value);break;default:this.uniforms[Q].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Q in J.extensions)this.extensions[Q]=J.extensions[Q];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class V$ extends S9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class B$ extends P6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class k$ extends P6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function F6(J,$){if(!J||J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function c8(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class J6{constructor(J,$,Q,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(Q),this.sampleValues=$,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Q=this._cachedIndex,Z=$[Q],W=$[Q-1];Q:{J:{let K;$:{Z:if(!(J<Z)){for(let H=Q+2;;){if(Z===void 0){if(J<W)break Z;return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===H)break;if(W=Z,Z=$[++Q],J<Z)break J}K=$.length;break $}if(!(J>=W)){let H=$[1];if(J<H)Q=2,W=H;for(let Y=Q-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===Y)break;if(Z=W,W=$[--Q-1],J>=W)break J}K=Q,Q=0;break $}break Q}while(Q<K){let H=Q+K>>>1;if(J<$[H])K=H;else Q=H+1}if(Z=$[Q],W=$[Q-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,W,Z)}return this.interpolate_(Q,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)$[K]=Q[W+K];return $}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class I$ extends J6{constructor(J,$,Q,Z){super(J,$,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Q){let Z=this.parameterPositions,W=J-2,K=J+1,H=Z[W],Y=Z[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*$-Q;break;case 2402:W=Z.length-2,H=$+Z[W]-Z[W+1];break;default:W=J,H=Q}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*Q-$;break;case 2402:K=1,Y=Q+Z[1]-Z[0];break;default:K=J-1,Y=$}let X=(Q-$)*0.5,U=this.valueSize;this._weightPrev=X/($-H),this._weightNext=X/(Y-Q),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,$,Q,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,N=this._offsetNext,E=this._weightPrev,G=this._weightNext,R=(Q-$)/(Z-$),L=R*R,I=L*R,q=-E*I+2*E*L-E*R,F=(1+E)*I+(-1.5-2*E)*L+(-0.5+E)*R+1,A=(-1-G)*I+(1.5+G)*L+0.5*R,w=G*I-G*L;for(let B=0;B!==H;++B)W[B]=q*K[U+B]+F*K[X+B]+A*K[Y+B]+w*K[N+B];return W}}class A$ extends J6{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=(Q-$)/(Z-$),N=1-U;for(let E=0;E!==H;++E)W[E]=K[X+E]*N+K[Y+E]*U;return W}}class z$ extends J6{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class w$ extends J6{interpolate_(J,$,Q,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,N=this.outTangents;if(!U||!N){let R=(Q-$)/(Z-$),L=1-R;for(let I=0;I!==H;++I)W[I]=K[X+I]*L+K[Y+I]*R;return W}let E=H*2,G=J-1;for(let R=0;R!==H;++R){let L=K[X+R],I=K[Y+R],q=G*E+R*2,F=N[q],A=N[q+1],w=J*E+R*2,B=U[w],z=U[w+1],P=S1(Q,$,F,B,Z);W[R]=aZ(P,L,A,z,I)}return W}}function aZ(J,$,Q,Z,W){let K=1-J;return K*K*K*$+3*K*K*J*Q+3*K*J*J*Z+J*J*J*W}function T1(J,$,Q,Z,W){let K=1-J;return 3*K*K*(Q-$)+6*K*J*(Z-Q)+3*J*J*(W-Z)}function S1(J,$,Q,Z,W){let K=(J-$)/(W-$);for(let H=0;H<8;H++){let Y=aZ(K,$,Q,Z,W)-J;if(Math.abs(Y)<0.0000000001)break;let X=T1(K,$,Q,Z,W);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class n9{constructor(J,$,Q,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=F6($,this.TimeBufferType),this.values=F6(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Q;if($.toJSON!==this.toJSON)Q=$.toJSON(J);else{Q={name:J.name,times:F6(J.times,Array),values:F6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)Q.interpolation=Z;if(c8(J.settings))Q.settings={inTangents:F6(J.settings.inTangents,Array),outTangents:F6(J.settings.outTangents,Array)}}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new z$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new A$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new I$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let $=new w$(this.times,this.values,this.getValueSize(),J);if(this.settings)$.inTangents=this.settings.inTangents,$.outTangents=this.settings.outTangents;return $}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break;case 2303:$=this.InterpolantFactoryMethodBezier;break}if($===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return S0("KeyframeTrack:",Q),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]+=J;if(c8(this.settings))dQ(this.settings.inTangents,J),dQ(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]*=J;if(c8(this.settings))uQ(this.settings.inTangents,J),uQ(this.settings.outTangents,J)}return this}trim(J,$){let Q=this.times,Z=Q.length,W=0,K=Z-1;while(W!==Z&&Q[W]<J)++W;while(K!==-1&&Q[K]>$)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=Q.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)f0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,Z=this.values,W=Q.length;if(W===0)f0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=Q[H];if(typeof Y==="number"&&isNaN(Y)){f0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){f0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(Z!==void 0){if(K1(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){f0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let N=H*Q,E=N-Q,G=N+Q;for(let R=0;R!==Q;++R){let L=$[N+R];if(L!==$[E+R]||L!==$[G+R]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let N=H*Q,E=K*Q;for(let G=0;G!==Q;++G)$[E+G]=$[N+G]}++K}}if(W>0){J[K]=J[W];for(let H=W*Q,Y=K*Q,X=0;X!==Q;++X)$[Y+X]=$[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=$.slice(0,K*Q);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,J,$);if(Z.createInterpolant=this.createInterpolant,c8(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function dQ(J,$){for(let Q=0,Z=J.length;Q!==Z;Q+=2)J[Q]+=$}function uQ(J,$){for(let Q=0,Z=J.length;Q!==Z;Q+=2)J[Q]*=$}n9.prototype.ValueTypeName="";n9.prototype.TimeBufferType=Float32Array;n9.prototype.ValueBufferType=Float32Array;n9.prototype.DefaultInterpolation=2301;class $6 extends n9{constructor(J,$,Q){super(J,$,Q)}}$6.prototype.ValueTypeName="bool";$6.prototype.ValueBufferType=Array;$6.prototype.DefaultInterpolation=2300;$6.prototype.InterpolantFactoryMethodLinear=void 0;$6.prototype.InterpolantFactoryMethodSmooth=void 0;class C$ extends n9{constructor(J,$,Q,Z){super(J,$,Q,Z)}}C$.prototype.ValueTypeName="color";class P$ extends n9{constructor(J,$,Q,Z){super(J,$,Q,Z)}}P$.prototype.ValueTypeName="number";class _$ extends J6{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=(Q-$)/(Z-$),X=J*H;for(let U=X+H;X!==U;X+=4)z7.slerpFlat(W,0,K,X-H,K,X,Y);return W}}class D5 extends n9{constructor(J,$,Q,Z){super(J,$,Q,Z)}InterpolantFactoryMethodLinear(J){return new _$(this.times,this.values,this.getValueSize(),J)}}D5.prototype.ValueTypeName="quaternion";D5.prototype.InterpolantFactoryMethodSmooth=void 0;class Q6 extends n9{constructor(J,$,Q){super(J,$,Q)}}Q6.prototype.ValueTypeName="string";Q6.prototype.ValueBufferType=Array;Q6.prototype.DefaultInterpolation=2300;Q6.prototype.InterpolantFactoryMethodLinear=void 0;Q6.prototype.InterpolantFactoryMethodSmooth=void 0;class T$ extends n9{constructor(J,$,Q,Z){super(J,$,Q,Z)}}T$.prototype.ValueTypeName="vector";var i8={enabled:!1,files:{},add:function(J,$){if(this.enabled===!1)return;if(cQ(J))return;this.files[J]=$},get:function(J){if(this.enabled===!1)return;if(cQ(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function cQ(J){try{let $=J.slice(J.indexOf(":")+1);return new URL($).protocol==="blob:"}catch($){return!1}}class S${constructor(J,$,Q){let Z=this,W=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Q,this._abortController=null,this.itemStart=function(U){if(H++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,H);if(K===H){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return X.push(U,N),this},this.removeHandler=function(U){let N=X.indexOf(U);if(N!==-1)X.splice(N,2);return this},this.getHandler=function(U){for(let N=0,E=X.length;N<E;N+=2){let G=X[N],R=X[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var rZ=new S$;class W8{constructor(J){if(this.manager=J!==void 0?J:rZ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,$){let Q=this;return new Promise(function(Z,W){Q.load(J,Z,$,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}W8.DEFAULT_MATERIAL_NAME="__DEFAULT";var D6=new WeakMap;class j$ extends W8{constructor(J){super(J)}load(J,$,Q,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=i8.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart(J),setTimeout(function(){if($)$(K);W.manager.itemEnd(J)},0);else{let N=D6.get(K);if(N===void 0)N=[],D6.set(K,N);N.push({onLoad:$,onError:Z})}return K}let H=V6("img");function Y(){if(U(),$)$(this);let N=D6.get(this)||[];for(let E=0;E<N.length;E++){let G=N[E];if(G.onLoad)G.onLoad(this)}D6.delete(this),W.manager.itemEnd(J)}function X(N){if(U(),Z)Z(N);i8.remove(`image:${J}`);let E=D6.get(this)||[];for(let G=0;G<E.length;G++){let R=E[G];if(R.onError)R.onError(N)}D6.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return i8.add(`image:${J}`,H),W.manager.itemStart(J),H.fetchPriority=this.priority,H.src=J,H}}class R5 extends W8{constructor(J){super(J)}load(J,$,Q,Z){let W=new V9,K=new j$(this.manager);return K.setPriority(this.priority),K.setCache(this.cache),K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(W.image=H,W.needsUpdate=!0,$!==void 0)$(W)},Q,Z),W}}var n8=new p,s8=new z7,W7=new p;class O5 extends g9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new X9,this.projectionMatrix=new X9,this.projectionMatrixInverse=new X9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(n8,s8,W7),W7.x===1&&W7.y===1&&W7.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(n8,s8,W7.set(1,1,1)).invert()}updateWorldMatrix(J,$,Q=!1){if(super.updateWorldMatrix(J,$,Q),this.matrixWorld.decompose(n8,s8,W7),W7.x===1&&W7.y===1&&W7.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(n8,s8,W7.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var f7=new p,nQ=new m0,sQ=new m0;class l9 extends O5{constructor(J=50,$=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=o8*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(u5*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return o8*2*Math.atan(Math.tan(u5*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,Q){f7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(f7.x,f7.y).multiplyScalar(-J/f7.z),f7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(f7.x,f7.y).multiplyScalar(-J/f7.z)}getViewSize(J,$){return this.getViewBounds(J,nQ,sQ),$.subVectors(sQ,nQ)}setViewOffset(J,$,Q,Z,W,K){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(u5*0.5*this.fov)/this.zoom,Q=2*$,Z=this.aspect*Q,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*Z/Y,$-=K.offsetY*Q/X,Z*=K.width/Y,Q*=K.height/X}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,$,$-Q,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}class X7 extends O5{constructor(J=-1,$=1,Q=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Q,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Q,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=Q-J,K=Q+J,H=Z+$,Y=Z-$;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,K=W+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class Z6 extends w7{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var R6=-90,O6=1;class K8 extends g9{constructor(J,$,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new l9(R6,O6,J,$);Z.layers=this.layers,this.add(Z);let W=new l9(R6,O6,J,$);W.layers=this.layers,this.add(W);let K=new l9(R6,O6,J,$);K.layers=this.layers,this.add(K);let H=new l9(R6,O6,J,$);H.layers=this.layers,this.add(H);let Y=new l9(R6,O6,J,$);Y.layers=this.layers,this.add(Y);let X=new l9(R6,O6,J,$);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Q,Z,W,K,H,Y]=$;for(let X of $)this.remove(X);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of $)this.add(X),X.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,X,U]=this.children,N=J.getRenderTarget(),E=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let L=Q.texture.mipmapsAutoUpdate;Q.texture.mipmapsAutoUpdate=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget(Q,0,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render($,W),J.setRenderTarget(Q,1,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render($,K),J.setRenderTarget(Q,2,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render($,H),J.setRenderTarget(Q,3,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render($,Y),J.setRenderTarget(Q,4,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render($,X),Q.texture.mipmapsAutoUpdate=L,J.setRenderTarget(Q,5,Z),I&&J.autoClear===!1)J.clearDepth();J.render($,U),J.setRenderTarget(N,E,G),J.xr.enabled=R,Q.texture.needsPMREMUpdate=!0}}class f$ extends l9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var v$="\\[\\]\\.:\\/",j1=new RegExp("["+v$+"]","g"),y$="[^"+v$+"]",f1="[^"+v$.replace("\\.","")+"]",v1=/((?:WC+[\/:])*)/.source.replace("WC",y$),y1=/(WCOD+)?/.source.replace("WCOD",f1),b1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",y$),h1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",y$),x1=new RegExp("^"+v1+y1+b1+h1+"$"),g1=["material","materials","bones","map"];class tZ{constructor(J,$,Q){let Z=Q||r0.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=Q.length;Z!==W;++Z)Q[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].unbind()}}class r0{constructor(J,$,Q){this.path=$,this.parsedPath=Q||r0.parseTrackName($),this.node=r0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Q){if(!(J&&J.isAnimationObjectGroup))return new r0(J,$,Q);else return new r0.Composite(J,$,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(j1,"")}static parseTrackName(J){let $=x1.exec(J);if($===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=Q.nodeName.substring(Z+1);if(g1.indexOf(W)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=W}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName($);if(Q!==void 0)return Q}if(J.children){let Q=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===$||H.uuid===$)return H;let Y=Q(H.children);if(Y)return Y}return null},Z=Q(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)J[$++]=Q[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,W=Q.length;Z!==W;++Z)Q[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Q=$.objectName,Z=$.propertyName,W=$.propertyIndex;if(!J)J=r0.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){S0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let X=$.objectIndex;switch(Q){case"materials":if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){f0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){f0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){f0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){f0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(X!==void 0){if(J[X]===void 0){f0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[Z];if(K===void 0){let X=$.nodeName;f0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}r0.Composite=tZ;r0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};r0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};r0.prototype.GetterByBindingType=[r0.prototype._getValue_direct,r0.prototype._getValue_array,r0.prototype._getValue_arrayElement,r0.prototype._getValue_toArray];r0.prototype.SetterByBindingTypeAndVersioning=[[r0.prototype._setValue_direct,r0.prototype._setValue_direct_setNeedsUpdate,r0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_array,r0.prototype._setValue_array_setNeedsUpdate,r0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_arrayElement,r0.prototype._setValue_arrayElement_setNeedsUpdate,r0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_fromArray,r0.prototype._setValue_fromArray_setNeedsUpdate,r0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nM=new Float32Array(1);class eZ{static{this.prototype.isMatrix2=!0}constructor(J,$,Q,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,$,Q,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,$=0){for(let Q=0;Q<4;Q++)this.elements[Q]=J[Q+$];return this}set(J,$,Q,Z){let W=this.elements;return W[0]=J,W[2]=$,W[1]=Q,W[3]=Z,this}}function b$(J,$,Q,Z){let W=p1(Z);switch(Q){case 1021:return J*$;case 1028:return J*$/W.components*W.byteLength;case 1029:return J*$/W.components*W.byteLength;case 1030:return J*$*2/W.components*W.byteLength;case 1031:return J*$*2/W.components*W.byteLength;case 1022:return J*$*3/W.components*W.byteLength;case 1023:return J*$*4/W.components*W.byteLength;case 1033:return J*$*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function p1(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)S0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function BW(){let J=null,$=!1,Q=null,Z=null;function W(K,H){Z=J.requestAnimationFrame(W),Q(K,H)}return{start:function(){if($===!0)return;if(Q===null)return;if(J===null)return;Z=J.requestAnimationFrame(W),$=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);$=!1},setAnimationLoop:function(K){Q=K},setContext:function(K){J=K}}}function m1(J){let $=new WeakMap;function Q(Y,X){let{array:U,usage:N}=Y,E=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,N),Y.onUploadCallback();let R;if(U instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)R=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)R=J.SHORT;else if(U instanceof Uint32Array)R=J.UNSIGNED_INT;else if(U instanceof Int32Array)R=J.INT;else if(U instanceof Int8Array)R=J.BYTE;else if(U instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:R,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function Z(Y,X,U){let{array:N,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,N);else{E.sort((R,L)=>R.start-L.start);let G=0;for(let R=1;R<E.length;R++){let L=E[G],I=E[R];if(I.start<=L.start+L.count+1)L.count=Math.max(L.count,I.start+I.count-L.start);else++G,E[G]=I}E.length=G+1;for(let R=0,L=E.length;R<L;R++){let I=E[R];J.bufferSubData(U,I.start*N.BYTES_PER_ELEMENT,N,I.start,I.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return $.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=$.get(Y);if(X)J.deleteBuffer(X.buffer),$.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=$.get(Y);if(!N||N.version<Y.version)$.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=$.get(Y);if(U===void 0)$.set(Y,Q(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:K,update:H}}var l1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JH=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$H=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QH=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZH=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,EH=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GH=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OH="gl_FragColor = linearToOutputTexel( gl_FragColor );",MH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,VH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,BH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PH=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_H=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SH=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hH=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gH=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pH=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mH=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dH=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,uH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rH=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$Y=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZY=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HY=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NY=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RY=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,OY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IY=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,AY=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wY=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PY=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_Y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TY=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vY=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yY=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bY=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pY=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mY=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lY=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uY=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nY=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sY=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iY=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oY=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aY=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tY=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eY=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JX=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$X=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QX=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZX=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WX=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KX=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HX=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YX=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XX=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UX=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NX=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EX=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GX=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qX=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FX=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DX=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RX=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OX=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MX=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LX=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VX=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g0={alphahash_fragment:l1,alphahash_pars_fragment:d1,alphamap_fragment:u1,alphamap_pars_fragment:c1,alphatest_fragment:n1,alphatest_pars_fragment:s1,aomap_fragment:i1,aomap_pars_fragment:o1,batching_pars_vertex:a1,batching_vertex:r1,begin_vertex:t1,beginnormal_vertex:e1,bsdfs:JH,iridescence_fragment:$H,bumpmap_pars_fragment:QH,clipping_planes_fragment:ZH,clipping_planes_pars_fragment:WH,clipping_planes_pars_vertex:KH,clipping_planes_vertex:HH,color_fragment:YH,color_pars_fragment:XH,color_pars_vertex:UH,color_vertex:NH,common:EH,defaultnormal_vertex:GH,displacementmap_pars_vertex:qH,displacementmap_vertex:FH,emissivemap_fragment:DH,emissivemap_pars_fragment:RH,colorspace_fragment:OH,colorspace_pars_fragment:MH,envmap_fragment:LH,envmap_common_pars_fragment:VH,envmap_pars_fragment:BH,envmap_pars_vertex:kH,envmap_physical_pars_fragment:fH,envmap_vertex:IH,fog_vertex:AH,fog_pars_vertex:zH,fog_fragment:wH,fog_pars_fragment:CH,gradientmap_pars_fragment:PH,lightmap_pars_fragment:_H,lights_lambert_fragment:TH,lights_lambert_pars_fragment:SH,lights_pars_begin:jH,lights_toon_fragment:vH,lights_toon_pars_fragment:yH,lights_phong_fragment:bH,lights_phong_pars_fragment:hH,lights_physical_fragment:xH,lights_physical_pars_fragment:gH,lights_fragment_begin:pH,lights_fragment_maps:mH,lights_fragment_end:lH,lightprobes_pars_fragment:dH,logdepthbuf_fragment:uH,logdepthbuf_pars_fragment:cH,logdepthbuf_pars_vertex:nH,logdepthbuf_vertex:sH,map_fragment:iH,map_pars_fragment:oH,map_particle_fragment:aH,map_particle_pars_fragment:rH,metalnessmap_fragment:tH,metalnessmap_pars_fragment:eH,morphinstance_vertex:JY,morphcolor_vertex:$Y,morphnormal_vertex:QY,morphtarget_pars_vertex:ZY,morphtarget_vertex:WY,normal_fragment_begin:KY,normal_fragment_maps:HY,normal_pars_fragment:YY,normal_pars_vertex:XY,normal_vertex:UY,normalmap_pars_fragment:NY,clearcoat_normal_fragment_begin:EY,clearcoat_normal_fragment_maps:GY,clearcoat_pars_fragment:qY,iridescence_pars_fragment:FY,opaque_fragment:DY,packing:RY,premultiplied_alpha_fragment:OY,project_vertex:MY,dithering_fragment:LY,dithering_pars_fragment:VY,roughnessmap_fragment:BY,roughnessmap_pars_fragment:kY,shadowmap_pars_fragment:IY,shadowmap_pars_vertex:AY,shadowmap_vertex:zY,shadowmask_pars_fragment:wY,skinbase_vertex:CY,skinning_pars_vertex:PY,skinning_vertex:_Y,skinnormal_vertex:TY,specularmap_fragment:SY,specularmap_pars_fragment:jY,tonemapping_fragment:fY,tonemapping_pars_fragment:vY,transmission_fragment:yY,transmission_pars_fragment:bY,uv_pars_fragment:hY,uv_pars_vertex:xY,uv_vertex:gY,worldpos_vertex:pY,background_vert:mY,background_frag:lY,backgroundCube_vert:dY,backgroundCube_frag:uY,cube_vert:cY,cube_frag:nY,depth_vert:sY,depth_frag:iY,distance_vert:oY,distance_frag:aY,equirect_vert:rY,equirect_frag:tY,linedashed_vert:eY,linedashed_frag:JX,meshbasic_vert:$X,meshbasic_frag:QX,meshlambert_vert:ZX,meshlambert_frag:WX,meshmatcap_vert:KX,meshmatcap_frag:HX,meshnormal_vert:YX,meshnormal_frag:XX,meshphong_vert:UX,meshphong_frag:NX,meshphysical_vert:EX,meshphysical_frag:GX,meshtoon_vert:qX,meshtoon_frag:FX,points_vert:DX,points_frag:RX,shadow_vert:OX,shadow_frag:MX,sprite_vert:LX,sprite_frag:VX},G0={common:{diffuse:{value:new i0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new m0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new i0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new i0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new i0(16777215)},opacity:{value:1},center:{value:new m0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},N7={basic:{uniforms:T9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:g0.meshbasic_vert,fragmentShader:g0.meshbasic_frag},lambert:{uniforms:T9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new i0(0)},envMapIntensity:{value:1}}]),vertexShader:g0.meshlambert_vert,fragmentShader:g0.meshlambert_frag},phong:{uniforms:T9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new i0(0)},specular:{value:new i0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:g0.meshphong_vert,fragmentShader:g0.meshphong_frag},standard:{uniforms:T9([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new i0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:g0.meshphysical_vert,fragmentShader:g0.meshphysical_frag},toon:{uniforms:T9([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new i0(0)}}]),vertexShader:g0.meshtoon_vert,fragmentShader:g0.meshtoon_frag},matcap:{uniforms:T9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:g0.meshmatcap_vert,fragmentShader:g0.meshmatcap_frag},points:{uniforms:T9([G0.points,G0.fog]),vertexShader:g0.points_vert,fragmentShader:g0.points_frag},dashed:{uniforms:T9([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:g0.linedashed_vert,fragmentShader:g0.linedashed_frag},depth:{uniforms:T9([G0.common,G0.displacementmap]),vertexShader:g0.depth_vert,fragmentShader:g0.depth_frag},normal:{uniforms:T9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:g0.meshnormal_vert,fragmentShader:g0.meshnormal_frag},sprite:{uniforms:T9([G0.sprite,G0.fog]),vertexShader:g0.sprite_vert,fragmentShader:g0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:g0.background_vert,fragmentShader:g0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:g0.backgroundCube_vert,fragmentShader:g0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:g0.cube_vert,fragmentShader:g0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:g0.equirect_vert,fragmentShader:g0.equirect_frag},distance:{uniforms:T9([G0.common,G0.displacementmap,{referencePosition:{value:new p},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:g0.distance_vert,fragmentShader:g0.distance_frag},shadow:{uniforms:T9([G0.lights,G0.fog,{color:{value:new i0(0)},opacity:{value:1}}]),vertexShader:g0.shadow_vert,fragmentShader:g0.shadow_frag}};N7.physical={uniforms:T9([N7.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new m0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new y0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new i0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new m0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new i0(0)},specularColor:{value:new i0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new m0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:g0.meshphysical_vert,fragmentShader:g0.meshphysical_frag};var M5={r:0,b:0,g:0},BX=new X9,kW=new y0;kW.set(-1,0,0,0,1,0,0,0,1);function kX(J,$,Q,Z,W,K){let H=new i0(0),Y=W===!0?0:1,X,U,N=null,E=0,G=null;function R(A){let w=A.isScene===!0?A.background:null;if(w&&w.isTexture){let B=A.backgroundBlurriness>0;w=$.get(w,B)}return w}function L(A){let w=!1,B=R(A);if(B===null)q(H,Y);else if(B&&B.isColor)q(B,1),w=!0;let z=J.xr.getEnvironmentBlendMode();if(z==="additive")Q.buffers.color.setClear(0,0,0,1,K);else if(z==="alpha-blend")Q.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||w)Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(A,w){let B=R(w);if(B&&B.isCubeTexture){if(U===void 0)U=new _9(new T6(1,1,1),new S9({name:"BackgroundCubeMaterial",uniforms:e7(N7.backgroundCube.uniforms),vertexShader:N7.backgroundCube.vertexShader,fragmentShader:N7.backgroundCube.fragmentShader,side:y9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(z,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(BX.makeRotationFromEuler(w.backgroundRotation)).transpose(),B.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(kW);if(U.material.toneMapped=u0.getTransfer(B.colorSpace)!==Z9,N!==B||E!==B.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=B,E=B.version,G=J.toneMapping;U.layers.enableAll(),A.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(X===void 0)X=new _9(new c9(2,2),new S9({name:"BackgroundMaterial",uniforms:e7(N7.background.uniforms),vertexShader:N7.background.vertexShader,fragmentShader:N7.background.fragmentShader,side:A6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=B,X.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,X.material.toneMapped=u0.getTransfer(B.colorSpace)!==Z9,B.matrixAutoUpdate===!0)B.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(B.matrix),N!==B||E!==B.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=B,E=B.version,G=J.toneMapping;X.layers.enableAll(),A.unshift(X,X.geometry,X.material,0,0,null)}}function q(A,w){A.getRGB(M5,L$(J)),Q.buffers.color.setClear(M5.r,M5.g,M5.b,w,K)}function F(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(A,w=1){H.set(A),Y=w,q(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(A){Y=A,q(H,Y)},render:L,addToRenderList:I,dispose:F}}function IX(J,$){let Q=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=G(null),K=W,H=!1;function Y(S,g,r,C,c){let o=!1,v=E(S,C,r,g);if(K!==v)K=v,U(K.object);if(o=R(S,C,r,c),o)L(S,C,r,c);if(c!==null)$.update(c,J.ELEMENT_ARRAY_BUFFER);if(o||H){if(H=!1,B(S,g,r,C),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(c).buffer)}}function X(){return J.createVertexArray()}function U(S){return J.bindVertexArray(S)}function N(S){return J.deleteVertexArray(S)}function E(S,g,r,C){let c=C.wireframe===!0,o=Z[g.id];if(o===void 0)o={},Z[g.id]=o;let v=S.isInstancedMesh===!0?S.id:0,Z0=o[v];if(Z0===void 0)Z0={},o[v]=Z0;let d=Z0[r.id];if(d===void 0)d={},Z0[r.id]=d;let a=d[c];if(a===void 0)a=G(X()),d[c]=a;return a}function G(S){let g=[],r=[],C=[];for(let c=0;c<Q;c++)g[c]=0,r[c]=0,C[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:r,attributeDivisors:C,object:S,attributes:{},index:null}}function R(S,g,r,C){let c=K.attributes,o=g.attributes,v=0,Z0=r.getAttributes();for(let d in Z0)if(Z0[d].location>=0){let J0=c[d],L0=o[d];if(L0===void 0){if(d==="instanceMatrix"&&S.instanceMatrix)L0=S.instanceMatrix;if(d==="instanceColor"&&S.instanceColor)L0=S.instanceColor}if(J0===void 0)return!0;if(J0.attribute!==L0)return!0;if(L0&&J0.data!==L0.data)return!0;v++}if(K.attributesNum!==v)return!0;if(K.index!==C)return!0;return!1}function L(S,g,r,C){let c={},o=g.attributes,v=0,Z0=r.getAttributes();for(let d in Z0)if(Z0[d].location>=0){let J0=o[d];if(J0===void 0){if(d==="instanceMatrix"&&S.instanceMatrix)J0=S.instanceMatrix;if(d==="instanceColor"&&S.instanceColor)J0=S.instanceColor}let L0={};if(L0.attribute=J0,J0&&J0.data)L0.data=J0.data;c[d]=L0,v++}K.attributes=c,K.attributesNum=v,K.index=C}function I(){let S=K.newAttributes;for(let g=0,r=S.length;g<r;g++)S[g]=0}function q(S){F(S,0)}function F(S,g){let{newAttributes:r,enabledAttributes:C,attributeDivisors:c}=K;if(r[S]=1,C[S]===0)J.enableVertexAttribArray(S),C[S]=1;if(c[S]!==g)J.vertexAttribDivisor(S,g),c[S]=g}function A(){let{newAttributes:S,enabledAttributes:g}=K;for(let r=0,C=g.length;r<C;r++)if(g[r]!==S[r])J.disableVertexAttribArray(r),g[r]=0}function w(S,g,r,C,c,o,v){if(v===!0)J.vertexAttribIPointer(S,g,r,c,o);else J.vertexAttribPointer(S,g,r,C,c,o)}function B(S,g,r,C){I();let c=C.attributes,o=r.getAttributes(),v=g.defaultAttributeValues;for(let Z0 in o){let d=o[Z0];if(d.location>=0){let a=c[Z0];if(a===void 0){if(Z0==="instanceMatrix"&&S.instanceMatrix)a=S.instanceMatrix;if(Z0==="instanceColor"&&S.instanceColor)a=S.instanceColor}if(a!==void 0){let{normalized:J0,itemSize:L0}=a,n=$.get(a);if(n===void 0)continue;let{buffer:$0,type:O0,bytesPerElement:w0}=n,P0=O0===J.INT||O0===J.UNSIGNED_INT||a.gpuType===kJ;if(a.isInterleavedBufferAttribute){let R0=a.data,s0=R0.isInterleavedBuffer===!0?R0.stride:R0.itemSize,j0=a.offset;if(R0.isInstancedInterleavedBuffer||R0.isInstancedBufferAttribute){for(let v0=0;v0<d.locationSize;v0++)F(d.location+v0,R0.meshPerAttribute);if(S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=R0.meshPerAttribute*R0.count}else for(let v0=0;v0<d.locationSize;v0++)q(d.location+v0);J.bindBuffer(J.ARRAY_BUFFER,$0);for(let v0=0;v0<d.locationSize;v0++)w(d.location+v0,L0/d.locationSize,O0,J0,s0*w0,(j0+L0/d.locationSize*v0)*w0,P0)}else{if(a.isInstancedBufferAttribute){for(let R0=0;R0<d.locationSize;R0++)F(d.location+R0,a.meshPerAttribute);if(S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0)C._maxInstanceCount=a.meshPerAttribute*a.count}else for(let R0=0;R0<d.locationSize;R0++)q(d.location+R0);J.bindBuffer(J.ARRAY_BUFFER,$0);for(let R0=0;R0<d.locationSize;R0++)w(d.location+R0,L0/d.locationSize,O0,J0,L0*w0,L0/d.locationSize*R0*w0,P0)}}else if(v!==void 0){let J0=v[Z0];if(J0!==void 0)switch(J0.length){case 2:J.vertexAttrib2fv(d.location,J0);break;case 3:J.vertexAttrib3fv(d.location,J0);break;case 4:J.vertexAttrib4fv(d.location,J0);break;default:J.vertexAttrib1fv(d.location,J0)}}}}A()}function z(){j();for(let S in Z){let g=Z[S];for(let r in g){let C=g[r];for(let c in C){let o=C[c];for(let v in o)N(o[v].object),delete o[v];delete C[c]}}delete Z[S]}}function P(S){if(Z[S.id]===void 0)return;let g=Z[S.id];for(let r in g){let C=g[r];for(let c in C){let o=C[c];for(let v in o)N(o[v].object),delete o[v];delete C[c]}}delete Z[S.id]}function D(S){for(let g in Z){let r=Z[g];for(let C in r){let c=r[C];if(c[S.id]===void 0)continue;let o=c[S.id];for(let v in o)N(o[v].object),delete o[v];delete c[S.id]}}}function V(S){for(let g in Z){let r=Z[g],C=S.isInstancedMesh===!0?S.id:0,c=r[C];if(c===void 0)continue;for(let o in c){let v=c[o];for(let Z0 in v)N(v[Z0].object),delete v[Z0];delete c[o]}if(delete r[C],Object.keys(r).length===0)delete Z[g]}}function j(){if(x(),H=!0,K===W)return;K=W,U(K.object)}function x(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:j,resetDefaultState:x,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfObject:V,releaseStatesOfProgram:D,initAttributes:I,enableAttribute:q,disableUnusedAttributes:A}}function AX(J,$,Q){let Z;function W(X){Z=X}function K(X,U){J.drawArrays(Z,X,U),Q.update(U,Z,1)}function H(X,U,N){if(N===0)return;J.drawArraysInstanced(Z,X,U,N),Q.update(U,Z,N)}function Y(X,U,N){if(N===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,N);let G=0;for(let R=0;R<N;R++)G+=U[R];Q.update(G,Z,1)}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function zX(J,$,Q,Z){let W;function K(){if(W!==void 0)return W;if($.has("EXT_texture_filter_anisotropic")===!0){let D=$.get("EXT_texture_filter_anisotropic");W=J.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(D){if(D!==Q7&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(D){let V=D===p9&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(D!==$7&&D!==I7&&!V&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(D){if(D==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";D="mediump"}if(D==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Q.precision!==void 0?Q.precision:"highp",N=X(U);if(N!==U)S0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let E=Q.reversedDepthBuffer===!0&&$.has("EXT_clip_control"),G=Q.logarithmicDepthBuffer===!0&&E===!1;if(Q.reversedDepthBuffer===!0&&E===!1)S0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(Q.logarithmicDepthBuffer===!0&&E===!0)S0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),A=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),w=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),z=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:G,reversedDepthBuffer:E,maxTextures:R,maxVertexTextures:L,maxTextureSize:I,maxCubemapSize:q,maxAttributes:F,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:B,maxSamples:z,samples:P}}function wX(J){let $=this,Q=null,Z=0,W=!1,K=!1,H=new K7,Y=new y0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,G){let R=E.length!==0||G||Z!==0||W;return W=G,Z=E.length,R},this.beginShadows=function(){K=!0,N(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,G){Q=N(E,G,0)},this.setState=function(E,G,R){let{clippingPlanes:L,clipIntersection:I,clipShadows:q}=E,F=J.get(E);if(!W||L===null||L.length===0||K&&!q)if(K)N(null);else U();else{let A=K?0:Z,w=A*4,B=F.clippingState||null;X.value=B,B=N(L,G,w,R);for(let z=0;z!==w;++z)B[z]=Q[z];F.clippingState=B,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=A}};function U(){if(X.value!==Q)X.value=Q,X.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function N(E,G,R,L){let I=E!==null?E.length:0,q=null;if(I!==0){if(q=X.value,L!==!0||q===null){let F=R+I*4,A=G.matrixWorldInverse;if(Y.getNormalMatrix(A),q===null||q.length<F)q=new Float32Array(F);for(let w=0,B=R;w!==I;++w,B+=4)H.copy(E[w]).applyMatrix4(A,Y),H.normal.toArray(q,B),q[B+3]=H.constant}X.value=q,X.needsUpdate=!0}return $.numPlanes=I,$.numIntersection=0,q}}class B5 extends b9{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new G5(Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new T6(5,5,5),W=new S9({name:"CubemapFromEquirect",uniforms:e7(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:y9,blending:k7});W.uniforms.tEquirect.value=$;let K=new _9(Z,W),H=$.minFilter;if($.minFilter===b7)$.minFilter=P9;return new K8(1,10,this).update(J,K),$.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,$=!0,Q=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear($,Q,Z);J.setRenderTarget(W)}}var JW=256,CX=3,PX=20,IW=256,AW=16,_X=3,TX=new p,SX=new i0;class V5{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new K8(1,10,null),this._boxMesh=new _9(new T6(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,$=0,Q=0.1,Z=100,W={}){let{size:K=256,position:H=TX}=W,Y=this._renderer;this._setSize(K);let X=this._allocateTarget(),U=this._getSourceTarget(!0);if($>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:N,autoClearColor:E,autoClearDepth:G,autoClearStencil:R}=Y,L=J.background;if(Y.autoClear=!0,Y.autoClearColor=!0,Y.autoClearDepth=!0,Y.autoClearStencil=!0,L===null)J.background=Y.getClearColor(SX);let I=new K8(Q,Z,U);if(I.position.copy(H),I.update(Y,J),Y.autoClear=N,Y.autoClearColor=E,Y.autoClearDepth=G,Y.autoClearStencil=R,J.background=L,$>0)U.texture.mipmapsAutoUpdate=!0,this._blur(X,$);return this._applyPMREM(X),X}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=ZW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=QW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,$){return $>0?1-Math.sqrt(1-J/$):0}_setSize(J){this._cubeSize=Math.max(JW,sZ(J))}_fromTexture(J,$){if(J.mapping===o6||J.mapping===z6)this._setSize(J.image.length===0?JW:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let Q=$||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM(Q),Q}_allocateTarget(){let J=this._cubeSize,$=$W(J,!1,!1),Q=Math.log2(J)-CX;for(let Z=0;Z<=Q;Z++)$.texture.mipmaps.push({width:J>>Z,height:J>>Z});return $.texture.name="PMREM",$.texture.isPMREMTexture=!0,$}_getSourceTarget(J=!1){let $=this._cubeSize,Q=this._sourceTarget;if(Q===null||Q.width!==$||J&&Q.depthBuffer===!1){if(Q!==null)Q.dispose();this._sourceTarget=$W($,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,$,Q){let Z=this._boxMesh,W=this._cubeCamera;Z.material=Q,W.renderTarget=J,W.activeMipmapLevel=$;let K=J.width>>$;J.viewport.set(0,0,K,K),W.update(this._renderer,Z),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let $;if(J.mapping===o6||J.mapping===z6){if(this._cubemapMaterial===null)this._cubemapMaterial=ZW();$=this._cubemapMaterial,$.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=QW();$=this._equirectMaterial}$.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,$)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=jX(),this._integrationMaterial=fX();let $=this._cubeSize,Q=J.texture.mipmaps.length-1,Z=this._ggxMaterial.uniforms;Z.envMap.value=this._sourceTarget.texture;let W=this._integrationMaterial.uniforms;W.envMap.value=this._sourceTarget.texture,W.sourceLod.value=Math.log2($/AW);for(let K=0;K<=Q;K++){let H=V5.lodToRoughness(K,Q);if(K>Q-_X)W.roughness.value=H,this._renderCube(J,K,this._integrationMaterial);else{let Y=H>0?Math.log2($)+0.5*Math.log2(6/(IW*Math.pow(H,4)))+0.5:0;Z.roughness.value=H,Z.lodBias.value=Y,this._renderCube(J,K,this._ggxMaterial)}}}_blur(J,$){if(this._blurMaterial===null)this._blurMaterial=vX();let Q=this._blurMaterial,Z=Q.uniforms,W=this._sourceTarget;Z.sigma.value=Math.min($,Math.PI)/Math.SQRT2,Z.envMap.value=W.texture,this._renderCube(J,0,Q),Z.envMap.value=J.texture,this._renderCube(W,0,Q)}}function $W(J,$,Q){return new B5(J,{minFilter:b7,generateMipmaps:$,type:p9,colorSpace:K$,depthBuffer:Q})}function U8(J,$,Q){return new S9({name:J,uniforms:$,vertexShader:g0.cube_vert,fragmentShader:Q,side:y9,blending:k7,depthTest:!1,depthWrite:!1})}function jX(){return U8("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${IW}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fX(){return U8("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:AW}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vX(){return U8("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${PX}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function QW(){return U8("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ZW(){return U8("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function yX(J){let $=new WeakMap,Q=new WeakMap,Z=null;function W(G,R=!1){if(G===null||G===void 0)return null;if(R)return H(G);return K(G)}function K(G){if(G&&G.isTexture){let R=G.mapping;if(R===r8||R===t8)if($.has(G)){let L=$.get(G).texture;return Y(L,G.mapping)}else{let L=G.image;if(L&&L.height>0){let I=new B5(L.height);return I.fromEquirectangularTexture(J,G),$.set(G,I),G.addEventListener("dispose",U),Y(I.texture,G.mapping)}else return null}}return G}function H(G){if(G&&G.isTexture&&G.isPMREMTexture!==!0){let R=G.mapping,L=R===r8||R===t8,I=R===o6||R===z6;if(L||I){let q=Q.get(G),F=q!==void 0?q.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==F){if(Z===null)Z=new V5(J);return q=L?Z.fromEquirectangular(G,q):Z.fromCubemap(G,q),q.texture.pmremVersion=G.pmremVersion,Q.set(G,q),q.texture}else if(q!==void 0)return q.texture;else{let A=G.image;if(L&&A&&A.height>0||I&&A&&X(A)){if(Z===null)Z=new V5(J);return q=L?Z.fromEquirectangular(G):Z.fromCubemap(G),q.texture.pmremVersion=G.pmremVersion,Q.set(G,q),G.addEventListener("dispose",N),q.texture}else return null}}}return G}function Y(G,R){if(R===r8)G.mapping=o6;else if(R===t8)G.mapping=z6;return G}function X(G){let R=0,L=6;for(let I=0;I<L;I++)if(G[I]!==void 0)R++;return R===L}function U(G){let R=G.target;R.removeEventListener("dispose",U);let L=$.get(R);if(L!==void 0)$.delete(R),L.dispose()}function N(G){let R=G.target;R.removeEventListener("dispose",N);let L=Q.get(R);if(L!==void 0)Q.delete(R),L.dispose()}function E(){if($=new WeakMap,Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:E}}function bX(J){let $={};function Q(Z){if($[Z]!==void 0)return $[Z];let W=J.getExtension(Z);return $[Z]=W,W}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let W=Q(Z);if(W===null)c6("WebGLRenderer: "+Z+" extension not supported.");return W}}}function hX(J,$,Q,Z){let W={},K=new WeakMap,H=new FinalizationRegistry((L)=>delete W[L]);function Y(L){X(L.target)}function X(L){if(L.index!==null)$.remove(L.index);for(let q in L.attributes)$.remove(L.attributes[q]);L.removeEventListener("dispose",Y),delete W[L.id],H.unregister(L);let I=K.get(L);if(I)$.remove(I),K.delete(L);if(Z.releaseStatesOfGeometry(L),L.isInstancedBufferGeometry===!0)delete L._maxInstanceCount;Q.memory.geometries--}function U(L,I){if(W[I.id]!==void 0)return I;return I.addEventListener("dispose",Y),W[I.id]=new WeakRef(I),H.register(I,I.id,I),Q.memory.geometries++,I}function N(L){let I=L.attributes;for(let q in I)$.update(I[q],J.ARRAY_BUFFER)}function E(L){let I=L.index,q=L.attributes.position,F=0;if(q===void 0)return;let A=I!==null?I.array.length:q.array.length/3-1,B=new(q.count>=65535?N5:U5)(Math.ceil(A/3)*6,1),z=B.array;if(I!==null){let D=I.array;F=I.version;for(let V=0,j=0;V<A;V+=3){let x=D[V+0],S=D[V+1],g=D[V+2];z[j++]=x,z[j++]=S,z[j++]=S,z[j++]=g,z[j++]=g,z[j++]=x}}else{F=q.version;for(let D=0,V=0;D<A;D+=3){let j=D+0,x=D+1,S=D+2;z[V++]=j,z[V++]=x,z[V++]=x,z[V++]=S,z[V++]=S,z[V++]=j}}B.version=F;let P=K.get(L);if(P)$.remove(P);K.set(L,B)}function G(L){let I=K.get(L);if(I){let q=L.index;if(q!==null){if(I.version<q.version)E(L)}}else E(L);return K.get(L)}function R(){for(let L in W){let I=W[L].deref();if(I!==void 0)X(I)}}return{get:U,update:N,getWireframeAttribute:G,dispose:R}}function xX(J,$,Q){let Z;function W(E){Z=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,G){J.drawElements(Z,G,K,E*H),Q.update(G,Z,1)}function U(E,G,R){if(R===0)return;J.drawElementsInstanced(Z,G,K,E*H,R),Q.update(G,Z,R)}function N(E,G,R){if(R===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,K,E,0,R);let I=0;for(let q=0;q<R;q++)I+=G[q];Q.update(I,Z,1)}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=N}function gX(J){let $={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,Y){switch(Q.calls++,H){case J.TRIANGLES:Q.triangles+=Y*(K/3);break;case J.LINES:Q.lines+=Y*(K/2);break;case J.LINE_STRIP:Q.lines+=Y*(K-1);break;case J.LINE_LOOP:Q.lines+=Y*K;break;case J.POINTS:Q.points+=Y*K;break;default:f0("WebGLInfo: Unknown draw mode:",H);break}}function W(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:$,render:Q,programs:null,autoReset:!0,reset:W,update:Z}}function pX(J,$,Q){let Z=new WeakMap,W=new U9;function K(H,Y,X){let U=H.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=N!==void 0?N.length:0,G=Z.get(Y);if(G===void 0||G.count!==E){let j=function(){D.dispose(),Z.delete(Y),Y.removeEventListener("dispose",j)};if(G!==void 0)G.texture.dispose();let R=Y.morphAttributes.position!==void 0,L=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,q=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],A=Y.morphAttributes.color||[],w=0;if(R===!0)w=1;if(L===!0)w=2;if(I===!0)w=3;let B=Y.attributes.position.count*w,z=1;if(B>$.maxTextureSize)z=Math.ceil(B/$.maxTextureSize),B=$.maxTextureSize;let P=new Float32Array(B*z*4*E),D=new Y5(P,B,z,E);D.type=I7,D.needsUpdate=!0;let V=w*4;for(let x=0;x<E;x++){let S=q[x],g=F[x],r=A[x],C=B*z*4*x;for(let c=0;c<S.count;c++){let o=c*V;if(R===!0)W.fromBufferAttribute(S,c),P[C+o+0]=W.x,P[C+o+1]=W.y,P[C+o+2]=W.z,P[C+o+3]=0;if(L===!0)W.fromBufferAttribute(g,c),P[C+o+4]=W.x,P[C+o+5]=W.y,P[C+o+6]=W.z,P[C+o+7]=0;if(I===!0)W.fromBufferAttribute(r,c),P[C+o+8]=W.x,P[C+o+9]=W.y,P[C+o+10]=W.z,P[C+o+11]=r.itemSize===4?W.w:1}}G={count:E,texture:D,size:new m0(B,z)},Z.set(Y,G),Y.addEventListener("dispose",j)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,Q);else{let R=0;for(let I=0;I<U.length;I++)R+=U[I];let L=Y.morphTargetsRelative?1:1-R;X.getUniforms().setValue(J,"morphTargetBaseInfluence",L),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Q),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function mX(J,$,Q,Z,W){let K=new WeakMap;function H(U){let N=W.render.frame,E=U.geometry,G=$.get(U,E);if(K.get(G)!==N)$.update(G),K.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==N){if(Q.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Q.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,N)}}if(U.isSkinnedMesh){let R=U.skeleton;if(K.get(R)!==N)R.update(),K.set(R,N)}return G}function Y(){K=new WeakMap}function X(U){let N=U.target;if(N.removeEventListener("dispose",X),Z.releaseStatesOfObject(N),Q.remove(N.instanceMatrix),N.instanceColor!==null)Q.remove(N.instanceColor)}return{update:H,dispose:Y}}var lX={[RJ]:"LINEAR_TONE_MAPPING",[OJ]:"REINHARD_TONE_MAPPING",[MJ]:"CINEON_TONE_MAPPING",[LJ]:"ACES_FILMIC_TONE_MAPPING",[i6]:"AGX_TONE_MAPPING",[BJ]:"NEUTRAL_TONE_MAPPING",[VJ]:"CUSTOM_TONE_MAPPING"};function dX(J,$,Q,Z,W,K){let H=new b9($,Q,{type:J,depthBuffer:W,stencilBuffer:K,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=null,N=new w7;N.setAttribute("position",new J7([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new J7([0,2,0,0,2,0],2));let E=new V$({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),G=new _9(N,E),R=new X7(-1,1,1,-1,0,1),L=null,I=null,q=!1,F,A=null,w=[],B=!1;this.setSize=function(z,P){if(H.setSize(z,P),Y!==null)Y.setSize(z,P);if(X!==null)X.setSize(z,P);for(let D=0;D<w.length;D++){let V=w[D];if(V.setSize)V.setSize(z,P)}},this.setEffects=function(z){w=z,B=w.length>0&&w[0].isRenderPass===!0;let{width:P,height:D}=H;if(w.length>0&&Y===null)Y=new b9(P,D,{type:p9,depthBuffer:!1,stencilBuffer:!1}),X=new b9(P,D,{type:p9,depthBuffer:!1,stencilBuffer:!1});let V=W===!0&&w.some((j)=>j.needsDepthTexture===!0);if(V!==(H.depthTexture!==null)){if(V===!0&&U===null){if(U=new g7(P,D),K===!0)U.format=x7,U.type=o7}H.dispose(),H.depthTexture=V?U:null,H.resolveDepthBuffer=V,H.storeMultisampledDepthBuffer=V}for(let j=0;j<w.length;j++){let x=w[j];if(x.setSize)x.setSize(P,D);if(V&&x.needsDepthTexture===!0&&x.setDepthTexture)x.setDepthTexture(U)}},this.begin=function(z,P){if(q)return!1;if(z.toneMapping===Y7&&w.length===0)return!1;if(A=P,P!==null){let{width:D,height:V}=P;if(H.width!==D||H.height!==V)this.setSize(D,V)}if(B===!1)z.setRenderTarget(H);return F=z.toneMapping,z.toneMapping=Y7,!0},this.hasRenderPass=function(){return B},this.end=function(z,P){z.toneMapping=F,q=!0;let D=H,V=Y;for(let j=0;j<w.length;j++){let x=w[j];if(x.enabled===!1)continue;if(x.render(z,V,D,P),x.needsSwap!==!1)D=V,V=V===Y?X:Y}if(L!==z.outputColorSpace||I!==z.toneMapping){if(L=z.outputColorSpace,I=z.toneMapping,E.defines={},u0.getTransfer(L)===Z9)E.defines.SRGB_TRANSFER="";let j=lX[I];if(j)E.defines[j]="";E.needsUpdate=!0}E.uniforms.tDiffuse.value=D.texture,z.setRenderTarget(A),z.render(G,R),A=null,q=!1},this.isCompositing=function(){return q},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();N.dispose(),E.dispose()}}var zW=new V9,wW=new g7(1,1),CW=new q5(1),PW=new Y5,_W=new J8,TW=new G5,WW=[],KW=[],HW=new Float32Array(16),YW=new Float32Array(9),XW=new Float32Array(4);function S6(J,$,Q){let Z=J[0];if(Z<=0||Z>0)return J;let W=$*Q,K=WW[W];if(K===void 0)K=new Float32Array(W),WW[W]=K;if($!==0){Z.toArray(K,0);for(let H=1,Y=0;H!==$;++H)Y+=Q,J[H].toArray(K,Y)}return K}function q9(J,$){if(J.length!==$.length)return!1;for(let Q=0,Z=J.length;Q<Z;Q++)if(J[Q]!==$[Q])return!1;return!0}function F9(J,$){for(let Q=0,Z=$.length;Q<Z;Q++)J[Q]=$[Q]}function k5(J,$){let Q=KW[$];if(Q===void 0)Q=new Int32Array($),KW[$]=Q;for(let Z=0;Z!==$;++Z)Q[Z]=J.allocateTextureUnit();return Q}function uX(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1f(this.addr,$),Q[0]=$}function cX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(q9(Q,$))return;J.uniform2fv(this.addr,$),F9(Q,$)}}function nX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else if($.r!==void 0){if(Q[0]!==$.r||Q[1]!==$.g||Q[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Q[0]=$.r,Q[1]=$.g,Q[2]=$.b}else{if(q9(Q,$))return;J.uniform3fv(this.addr,$),F9(Q,$)}}function sX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(q9(Q,$))return;J.uniform4fv(this.addr,$),F9(Q,$)}}function iX(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(q9(Q,$))return;J.uniformMatrix2fv(this.addr,!1,$),F9(Q,$)}else{if(q9(Q,Z))return;XW.set(Z),J.uniformMatrix2fv(this.addr,!1,XW),F9(Q,Z)}}function oX(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(q9(Q,$))return;J.uniformMatrix3fv(this.addr,!1,$),F9(Q,$)}else{if(q9(Q,Z))return;YW.set(Z),J.uniformMatrix3fv(this.addr,!1,YW),F9(Q,Z)}}function aX(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(q9(Q,$))return;J.uniformMatrix4fv(this.addr,!1,$),F9(Q,$)}else{if(q9(Q,Z))return;HW.set(Z),J.uniformMatrix4fv(this.addr,!1,HW),F9(Q,Z)}}function rX(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1i(this.addr,$),Q[0]=$}function tX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(q9(Q,$))return;J.uniform2iv(this.addr,$),F9(Q,$)}}function eX(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(q9(Q,$))return;J.uniform3iv(this.addr,$),F9(Q,$)}}function JU(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(q9(Q,$))return;J.uniform4iv(this.addr,$),F9(Q,$)}}function $U(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1ui(this.addr,$),Q[0]=$}function QU(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(q9(Q,$))return;J.uniform2uiv(this.addr,$),F9(Q,$)}}function ZU(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(q9(Q,$))return;J.uniform3uiv(this.addr,$),F9(Q,$)}}function WU(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(q9(Q,$))return;J.uniform4uiv(this.addr,$),F9(Q,$)}}function I5(J){if(J.version===0)J.compareFunction=U$,J.needsUpdate=!0;return J}function KU(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)K=I5(wW);else K=zW;Q.setTexture2D($||K,W)}function HU(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;Q.setTexture3D($||_W,W)}function YU(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_CUBE_SHADOW)K=I5(CW);else K=TW;Q.setTextureCube($||K,W)}function XU(J,$,Q){let Z=this.cache,W=Q.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;Q.setTexture2DArray($||PW,W)}function UU(J){switch(J){case 5126:return uX;case 35664:return cX;case 35665:return nX;case 35666:return sX;case 35674:return iX;case 35675:return oX;case 35676:return aX;case 5124:case 35670:return rX;case 35667:case 35671:return tX;case 35668:case 35672:return eX;case 35669:case 35673:return JU;case 5125:return $U;case 36294:return QU;case 36295:return ZU;case 36296:return WU;case 35678:case 36198:case 36298:case 36306:case 35682:return KU;case 35679:case 36299:case 36307:return HU;case 35680:case 36300:case 36308:case 36293:return YU;case 36289:case 36303:case 36311:case 36292:return XU}}function NU(J,$){J.uniform1fv(this.addr,$)}function EU(J,$){let Q=S6($,this.size,2);J.uniform2fv(this.addr,Q)}function GU(J,$){let Q=S6($,this.size,3);J.uniform3fv(this.addr,Q)}function qU(J,$){let Q=S6($,this.size,4);J.uniform4fv(this.addr,Q)}function FU(J,$){let Q=S6($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function DU(J,$){let Q=S6($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function RU(J,$){let Q=S6($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function OU(J,$){J.uniform1iv(this.addr,$)}function MU(J,$){J.uniform2iv(this.addr,$)}function LU(J,$){J.uniform3iv(this.addr,$)}function VU(J,$){J.uniform4iv(this.addr,$)}function BU(J,$){J.uniform1uiv(this.addr,$)}function kU(J,$){J.uniform2uiv(this.addr,$)}function IU(J,$){J.uniform3uiv(this.addr,$)}function AU(J,$){J.uniform4uiv(this.addr,$)}function zU(J,$,Q){let Z=this.cache,W=$.length,K=k5(Q,W);if(!q9(Z,K))J.uniform1iv(this.addr,K),F9(Z,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=I5(wW);else H=zW;for(let Y=0;Y!==W;++Y)Q.setTexture2D($[Y]||H,K[Y])}function wU(J,$,Q){let Z=this.cache,W=$.length,K=k5(Q,W);if(!q9(Z,K))J.uniform1iv(this.addr,K),F9(Z,K);for(let H=0;H!==W;++H)Q.setTexture3D($[H]||_W,K[H])}function CU(J,$,Q){let Z=this.cache,W=$.length,K=k5(Q,W);if(!q9(Z,K))J.uniform1iv(this.addr,K),F9(Z,K);let H;if(this.type===J.SAMPLER_CUBE_SHADOW)H=I5(CW);else H=TW;for(let Y=0;Y!==W;++Y)Q.setTextureCube($[Y]||H,K[Y])}function PU(J,$,Q){let Z=this.cache,W=$.length,K=k5(Q,W);if(!q9(Z,K))J.uniform1iv(this.addr,K),F9(Z,K);for(let H=0;H!==W;++H)Q.setTexture2DArray($[H]||PW,K[H])}function _U(J){switch(J){case 5126:return NU;case 35664:return EU;case 35665:return GU;case 35666:return qU;case 35674:return FU;case 35675:return DU;case 35676:return RU;case 5124:case 35670:return OU;case 35667:case 35671:return MU;case 35668:case 35672:return LU;case 35669:case 35673:return VU;case 5125:return BU;case 36294:return kU;case 36295:return IU;case 36296:return AU;case 35678:case 36198:case 36298:case 36306:case 35682:return zU;case 35679:case 36299:case 36307:return wU;case 35680:case 36300:case 36308:case 36293:return CU;case 36289:case 36303:case 36311:case 36292:return PU}}class SW{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.setValue=UU($.type)}}class jW{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=_U($.type)}}class fW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Q){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let H=Z[W];H.setValue(J,$[H.id],Q)}}}var h$=/(\w+)(\])?(\[|\.)?/g;function UW(J,$){J.seq.push($),J.map[$.id]=$}function TU(J,$,Q){let Z=J.name,W=Z.length;h$.lastIndex=0;while(!0){let K=h$.exec(Z),H=h$.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===W){UW(Q,U===void 0?new SW(Y,J,$):new jW(Y,J,$));break}else{let E=Q.map[Y];if(E===void 0)E=new fW(Y),UW(Q,E);Q=E}}}class X8{constructor(J,$){this.seq=[],this.map={};let Q=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let K=0;K<Q;++K){let H=J.getActiveUniform($,K),Y=J.getUniformLocation($,H.name);TU(H,Y,this)}let Z=[],W=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(K);else W.push(K);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,$,Q,Z){let W=this.map[$];if(W!==void 0)W.setValue(J,Q,Z)}setOptional(J,$,Q){let Z=$[Q];if(Z!==void 0)this.setValue(J,Q,Z)}static upload(J,$,Q,Z){for(let W=0,K=$.length;W!==K;++W){let H=$[W],Y=Q[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,$){let Q=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in $)Q.push(K)}return Q}}function NW(J,$,Q){let Z=J.createShader($);return J.shaderSource(Z,Q),J.compileShader(Z),Z}var SU=37297,jU=0;function fU(J,$){let Q=J.split(`
`),Z=[],W=Math.max($-6,0),K=Math.min($+6,Q.length);for(let H=W;H<K;H++){let Y=H+1;Z.push(`${Y===$?">":" "} ${Y}: ${Q[H]}`)}return Z.join(`
`)}var EW=new y0;function vU(J){u0._getMatrix(EW,u0.workingColorSpace,J);let $=`mat3( ${EW.elements.map((Q)=>Q.toFixed(4))} )`;switch(u0.getTransfer(J)){case H$:return[$,"LinearTransferOETF"];case Z9:return[$,"sRGBTransferOETF"];default:return S0("WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function GW(J,$,Q){let Z=J.getShaderParameter($,J.COMPILE_STATUS),K=(J.getShaderInfoLog($)||"").trim();if(Z&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return Q.toUpperCase()+`

`+K+`

`+fU(J.getShaderSource($),Y)}else return K}function yU(J,$){let Q=vU($);return[`vec4 ${J}( vec4 value ) {`,`	return ${Q[1]}( vec4( ${Q[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var bU={[RJ]:"Linear",[OJ]:"Reinhard",[MJ]:"Cineon",[LJ]:"ACESFilmic",[i6]:"AgX",[BJ]:"Neutral",[VJ]:"Custom"};function hU(J,$){let Q=bU[$];if(Q===void 0)return S0("WebGLProgram: Unsupported toneMapping:",$),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var L5=new p;function xU(){u0.getLuminanceCoefficients(L5);let J=L5.x.toFixed(4),$=L5.y.toFixed(4),Q=L5.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function gU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Y8).join(`
`)}function pU(J){let $=[];for(let Q in J){let Z=J[Q];if(Z===!1)continue;$.push("#define "+Q+" "+Z)}return $.join(`
`)}function mU(J,$){let Q={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib($,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;Q[H]={type:K.type,location:J.getAttribLocation($,H),locationSize:Y}}return Q}function Y8(J){return J!==""}function qW(J,$){let Q=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,$.numSunLights).replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,$.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,$.numLightProbeGrids)}function FW(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var lU=/^[ \t]*#include +<([\w\d./]+)>/gm;function g$(J){return J.replace(lU,dU)}function dU(J,$){let Q=g0[$];if(Q===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+$+">");return g$(Q)}var uU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DW(J){return J.replace(uU,cU)}function cU(J,$,Q,Z){let W="";for(let K=parseInt($);K<parseInt(Q);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function RW(J){let $=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")$+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")$+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")$+=`
#define LOW_PRECISION`;return $}var nU={[n6]:"SHADOWMAP_TYPE_PCF",[I6]:"SHADOWMAP_TYPE_VSM"};function sU(J){return nU[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iU={[z6]:"ENVMAP_MODE_REFRACTION"};function oU(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return iU[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aU={[IZ]:"ENVMAP_BLENDING_MULTIPLY",[AZ]:"ENVMAP_BLENDING_MIX",[zZ]:"ENVMAP_BLENDING_ADD"};function rU(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return aU[J.combine]||"ENVMAP_BLENDING_NONE"}function tU(J,$,Q,Z){let W=J.getContext(),K=Q.defines,H=Q.vertexShader,Y=Q.fragmentShader,X=sU(Q),U=Q.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",N=oU(Q),E=rU(Q),G=gU(Q),R=pU(K),L=W.createProgram(),I,q,F=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(I=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R].filter(Y8).join(`
`),I.length>0)I+=`
`;if(q=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R].filter(Y8).join(`
`),q.length>0)q+=`
`}else I=[RW(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+N:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+Q.diffuseRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexNormals?"#define HAS_NORMAL":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+X:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Y8).join(`
`),q=[RW(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,R,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+U:"",Q.envMap?"#define "+N:"",Q.envMap?"#define "+E:"",Q.envMapPMREM?"#define ENVMAP_MAX_LOD "+Q.envMapMaxLod+".0":"",Q.envMapPMREM?"#define ENVMAP_SIZE "+Q.envMapSize+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",Q.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.retroreflection?"#define USE_RETROREFLECTION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor?"#define USE_COLOR":"",Q.vertexAlphas||Q.batchingColor?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+X:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==Y7?"#define TONE_MAPPING":"",Q.toneMapping!==Y7?g0.tonemapping_pars_fragment:"",Q.toneMapping!==Y7?hU("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",g0.colorspace_pars_fragment,yU("linearToOutputTexel",Q.outputColorSpace),xU(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(Y8).join(`
`);if(H=g$(H),H=qW(H,Q),H=FW(H,Q),Y=g$(Y),Y=qW(Y,Q),Y=FW(Y,Q),H=DW(H),Y=DW(Y),Q.isRawShaderMaterial!==!0)F=`#version 300 es
`,I=[G,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,q=["#define varying in",Q.glslVersion===E$?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===E$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let A=F+I+H,w=F+q+Y,B=NW(W,W.VERTEX_SHADER,A),z=NW(W,W.FRAGMENT_SHADER,w);if(W.attachShader(L,B),W.attachShader(L,z),Q.index0AttributeName!==void 0)W.bindAttribLocation(L,0,Q.index0AttributeName);else if(Q.hasPositionAttribute===!0)W.bindAttribLocation(L,0,"position");W.linkProgram(L);function P(x){if(J.debug.checkShaderErrors){let S=W.getProgramInfoLog(L)||"",g=W.getShaderInfoLog(B)||"",r=W.getShaderInfoLog(z)||"",C=S.trim(),c=g.trim(),o=r.trim(),v=!0,Z0=!0;if(W.getProgramParameter(L,W.LINK_STATUS)===!1)if(v=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,L,B,z);else{let d=GW(W,B,"vertex"),a=GW(W,z,"fragment");f0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(L,W.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+C+`
`+d+`
`+a)}else if(C!=="")S0("WebGLProgram: Program Info Log:",C);else if(c===""||o==="")Z0=!1;if(Z0)x.diagnostics={runnable:v,programLog:C,vertexShader:{log:c,prefix:I},fragmentShader:{log:o,prefix:q}}}W.deleteShader(B),W.deleteShader(z),D=new X8(W,L),V=mU(W,L)}let D;this.getUniforms=function(){if(D===void 0)P(this);return D};let V;this.getAttributes=function(){if(V===void 0)P(this);return V};let j=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(j===!1)j=W.getProgramParameter(L,SU);return j},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(L),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=jU++,this.cacheKey=$,this.usedTimes=1,this.program=L,this.vertexShader=B,this.fragmentShader=z,this}var eU=0;class vW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,$,Q){let Z=this._getShaderCacheForMaterial(J);if(Z.has($)===!1)Z.add($),$.usedTimes++;if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Q of $)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Q=$.get(J);if(Q===void 0)Q=new Set,$.set(J,Q);return Q}_getShaderStage(J){let $=this.shaderCache,Q=$.get(J);if(Q===void 0)Q=new yW(J),$.set(J,Q);return Q}}class yW{constructor(J){this.id=eU++,this.code=J,this.usedTimes=0}}function JN(J){return J===a7||J===K5||J===H5}function $N(J,$,Q,Z,W,K){let H=new X5,Y=new vW,X=new Set,U=[],N=new Map,E=Z.logarithmicDepthBuffer,G={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){if(X.add(D),D===0)return"uv";return`uv${D}`}function L(D,V,j,x,S,g){let r=x.fog,C=S.geometry,c=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?x.environment:null,o=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,v=$.get(D.envMap||c,o),Z0=G[D.type],d=Z.precision;if(D.precision!==null){if(d=Z.getMaxPrecision(D.precision),d!==D.precision)S0("WebGLProgram.getParameters:",D.precision,"not supported, using",d,"instead.")}let a=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,J0=a!==void 0?a.length:0,L0=0;if(C.morphAttributes.position!==void 0)L0=1;if(C.morphAttributes.normal!==void 0)L0=2;if(C.morphAttributes.color!==void 0)L0=3;let n,$0,O0,w0;if(Z0){let F0=N7[Z0];n=F0.vertexShader,$0=F0.fragmentShader}else{n=D.vertexShader,$0=D.fragmentShader;let F0=Y.getVertexShaderStage(D),J9=Y.getFragmentShaderStage(D);Y.update(D,F0,J9),O0=F0.id,w0=J9.id}let P0=J.getRenderTarget(),R0=J.state.buffers.depth.getReversed(),s0=S.isInstancedMesh===!0,j0=S.isBatchedMesh===!0,v0=!!D.map,a0=!!D.matcap,p0=!!v,$9=p0&&v.isPMREMTexture===!0,t0=!!D.aoMap,B9=!!D.lightMap,H9=!!D.bumpMap&&D.wireframe===!1,N9=!!D.normalMap,k9=!!D.displacementMap,f9=!!D.emissiveMap,v9=!!D.metalnessMap,s9=!!D.roughnessMap,f=D.anisotropy>0,i9=D.clearcoat>0,e0=D.diffuseRoughness>0,D9=D.dispersion>0,E0=D.retroreflectivity>0,W9=D.iridescence>0,_0=D.sheen>0,b0=D.transmission>0,I9=f&&!!D.anisotropyMap,k=i9&&!!D.clearcoatMap,O=i9&&!!D.clearcoatNormalMap,y=i9&&!!D.clearcoatRoughnessMap,e=e0&&!!D.diffuseRoughnessMap,t=W9&&!!D.iridescenceMap,K0=W9&&!!D.iridescenceThicknessMap,X0=_0&&!!D.sheenColorMap,l=_0&&!!D.sheenRoughnessMap,i=!!D.specularMap,H0=!!D.specularColorMap,_=!!D.specularIntensityMap,s=b0&&!!D.transmissionMap,u=b0&&!!D.thicknessMap,Q0=!!D.gradientMap,W0=!!D.alphaMap,N0=D.alphaTest>0,z0=!!D.alphaHash,A0=!!D.extensions,q0=Y7;if(D.toneMapped){if(P0===null||P0.isXRRenderTarget===!0)q0=J.toneMapping}let C0=$9?v.isCompressedCubeTexture?v.image[0].mipmaps:v.mipmaps:null,x0={shaderID:Z0,shaderType:D.type,shaderName:D.name,vertexShader:n,fragmentShader:$0,defines:D.defines,customVertexShaderID:O0,customFragmentShaderID:w0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:d,batching:j0,batchingColor:j0&&S._colorsTexture!==null,instancing:s0,instancingColor:s0&&S.instanceColor!==null,instancingMorph:s0&&S.morphTexture!==null,outputColorSpace:P0===null?J.outputColorSpace:P0.isXRRenderTarget===!0?P0.texture.colorSpace:u0.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:v0,matcap:a0,envMap:p0,envMapMode:p0&&v.mapping,envMapPMREM:$9,envMapMaxLod:$9?C0.length-1:null,envMapSize:$9?C0[0].width:null,aoMap:t0,lightMap:B9,bumpMap:H9,normalMap:N9,displacementMap:k9,emissiveMap:f9,normalMapObjectSpace:N9&&D.normalMapType===bZ,normalMapTangentSpace:N9&&D.normalMapType===W$,packedNormalMap:N9&&D.normalMapType===W$&&JN(D.normalMap.format),metalnessMap:v9,roughnessMap:s9,anisotropy:f,anisotropyMap:I9,clearcoat:i9,clearcoatMap:k,clearcoatNormalMap:O,clearcoatRoughnessMap:y,diffuseRoughness:e0,diffuseRoughnessMap:e,dispersion:D9,retroreflection:E0,iridescence:W9,iridescenceMap:t,iridescenceThicknessMap:K0,sheen:_0,sheenColorMap:X0,sheenRoughnessMap:l,specularMap:i,specularColorMap:H0,specularIntensityMap:_,transmission:b0,transmissionMap:s,thicknessMap:u,gradientMap:Q0,opaque:D.transparent===!1&&D.blending===s6&&D.alphaToCoverage===!1,alphaMap:W0,alphaTest:N0,alphaHash:z0,combine:D.combine,mapUv:v0&&R(D.map.channel),aoMapUv:t0&&R(D.aoMap.channel),lightMapUv:B9&&R(D.lightMap.channel),bumpMapUv:H9&&R(D.bumpMap.channel),normalMapUv:N9&&R(D.normalMap.channel),displacementMapUv:k9&&R(D.displacementMap.channel),emissiveMapUv:f9&&R(D.emissiveMap.channel),metalnessMapUv:v9&&R(D.metalnessMap.channel),roughnessMapUv:s9&&R(D.roughnessMap.channel),anisotropyMapUv:I9&&R(D.anisotropyMap.channel),clearcoatMapUv:k&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:O&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:y&&R(D.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:e&&R(D.diffuseRoughnessMap.channel),iridescenceMapUv:t&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:K0&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:X0&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:l&&R(D.sheenRoughnessMap.channel),specularMapUv:i&&R(D.specularMap.channel),specularColorMapUv:H0&&R(D.specularColorMap.channel),specularIntensityMapUv:_&&R(D.specularIntensityMap.channel),transmissionMapUv:s&&R(D.transmissionMap.channel),thicknessMapUv:u&&R(D.thicknessMap.channel),alphaMapUv:W0&&R(D.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(N9||f),vertexNormals:!!C.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!C.attributes.uv&&(v0||W0),fog:!!r,useFog:D.fog===!0,fogExp2:!!r&&r.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||C.attributes.normal===void 0&&N9===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:R0,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:J0,morphTextureStride:L0,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:g.filter((F0)=>F0.texture!==null).length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:q0,decodeVideoTexture:v0&&D.map.isVideoTexture===!0&&u0.getTransfer(D.map.colorSpace)===Z9,decodeVideoTextureEmissive:f9&&D.emissiveMap.isVideoTexture===!0&&u0.getTransfer(D.emissiveMap.colorSpace)===Z9,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===u9,flipSided:D.side===y9,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:A0&&D.extensions.clipCullDistance===!0&&Q.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(A0&&D.extensions.multiDraw===!0||j0)&&Q.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Q.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return x0.vertexUv1s=X.has(1),x0.vertexUv2s=X.has(2),x0.vertexUv3s=X.has(3),X.clear(),x0}function I(D){let V=[];if(D.shaderID)V.push(D.shaderID);else V.push(D.customVertexShaderID),V.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let j in D.defines)V.push(j),V.push(D.defines[j]);if(D.isRawShaderMaterial===!1)q(V,D),F(V,D),V.push(J.outputColorSpace);return V.push(D.customProgramCacheKey),V.join()}function q(D,V){D.push(V.precision),D.push(V.outputColorSpace),D.push(V.envMapMode),D.push(V.envMapPMREM),D.push(V.envMapMaxLod),D.push(V.envMapSize),D.push(V.mapUv),D.push(V.alphaMapUv),D.push(V.lightMapUv),D.push(V.aoMapUv),D.push(V.bumpMapUv),D.push(V.normalMapUv),D.push(V.displacementMapUv),D.push(V.emissiveMapUv),D.push(V.metalnessMapUv),D.push(V.roughnessMapUv),D.push(V.anisotropyMapUv),D.push(V.clearcoatMapUv),D.push(V.clearcoatNormalMapUv),D.push(V.clearcoatRoughnessMapUv),D.push(V.diffuseRoughnessMapUv),D.push(V.iridescenceMapUv),D.push(V.iridescenceThicknessMapUv),D.push(V.sheenColorMapUv),D.push(V.sheenRoughnessMapUv),D.push(V.specularMapUv),D.push(V.specularColorMapUv),D.push(V.specularIntensityMapUv),D.push(V.transmissionMapUv),D.push(V.thicknessMapUv),D.push(V.combine),D.push(V.fogExp2),D.push(V.sizeAttenuation),D.push(V.morphTargetsCount),D.push(V.numSunLights),D.push(V.numDirLights),D.push(V.numPointLights),D.push(V.numSpotLights),D.push(V.numSpotLightMaps),D.push(V.numHemiLights),D.push(V.numRectAreaLights),D.push(V.numSunLightShadows),D.push(V.numDirLightShadows),D.push(V.numPointLightShadows),D.push(V.numSpotLightShadows),D.push(V.numSpotLightShadowsWithMaps),D.push(V.numLightProbes),D.push(V.numLightProbeGrids),D.push(V.shadowMapType),D.push(V.toneMapping),D.push(V.numClippingPlanes),D.push(V.numClipIntersection),D.push(V.depthPacking)}function F(D,V){if(H.disableAll(),V.instancing)H.enable(0);if(V.instancingColor)H.enable(1);if(V.instancingMorph)H.enable(2);if(V.matcap)H.enable(3);if(V.envMap)H.enable(4);if(V.normalMapObjectSpace)H.enable(5);if(V.normalMapTangentSpace)H.enable(6);if(V.clearcoat)H.enable(7);if(V.iridescence)H.enable(8);if(V.alphaTest)H.enable(9);if(V.vertexColors)H.enable(10);if(V.vertexAlphas)H.enable(11);if(V.vertexUv1s)H.enable(12);if(V.vertexUv2s)H.enable(13);if(V.vertexUv3s)H.enable(14);if(V.vertexTangents)H.enable(15);if(V.anisotropy)H.enable(16);if(V.alphaHash)H.enable(17);if(V.batching)H.enable(18);if(V.dispersion)H.enable(19);if(V.retroreflection)H.enable(24);if(V.diffuseRoughness)H.enable(25);if(V.batchingColor)H.enable(20);if(V.gradientMap)H.enable(21);if(V.packedNormalMap)H.enable(22);if(V.vertexNormals)H.enable(23);if(D.push(H.mask),H.disableAll(),V.fog)H.enable(0);if(V.useFog)H.enable(1);if(V.flatShading)H.enable(2);if(V.logarithmicDepthBuffer)H.enable(3);if(V.reversedDepthBuffer)H.enable(4);if(V.skinning)H.enable(5);if(V.morphTargets)H.enable(6);if(V.morphNormals)H.enable(7);if(V.morphColors)H.enable(8);if(V.premultipliedAlpha)H.enable(9);if(V.shadowMapEnabled)H.enable(10);if(V.doubleSided)H.enable(11);if(V.flipSided)H.enable(12);if(V.useDepthPacking)H.enable(13);if(V.dithering)H.enable(14);if(V.transmission)H.enable(15);if(V.sheen)H.enable(16);if(V.opaque)H.enable(17);if(V.pointsUvs)H.enable(18);if(V.decodeVideoTexture)H.enable(19);if(V.decodeVideoTextureEmissive)H.enable(20);if(V.alphaToCoverage)H.enable(21);if(V.numLightProbeGrids>0)H.enable(22);if(V.hasPositionAttribute)H.enable(23);D.push(H.mask)}function A(D){let V=G[D.type],j;if(V){let x=N7[V];j=oZ.clone(x.uniforms)}else j=D.uniforms;return j}function w(D,V){let j=N.get(V);if(j!==void 0)++j.usedTimes;else j=new tU(J,V,D,W),U.push(j),N.set(V,j);return j}function B(D){if(--D.usedTimes===0){let V=U.indexOf(D);U[V]=U[U.length-1],U.pop(),N.delete(D.cacheKey),D.destroy()}}function z(D){Y.remove(D)}function P(){Y.dispose()}return{getParameters:L,getProgramCacheKey:I,getUniforms:A,acquireProgram:w,releaseProgram:B,releaseShaderCache:z,programs:U,dispose:P}}function QN(){let J=new WeakMap;function $(H){return J.has(H)}function Q(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:$,get:Q,remove:Z,update:W,dispose:K}}function ZN(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.materialVariant!==$.materialVariant)return J.materialVariant-$.materialVariant;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function OW(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function MW(){let J=[],$=0,Q=[],Z=[],W=[];function K(){$=0,Q.length=0,Z.length=0,W.length=0}function H(G){let R=0;if(G.isInstancedMesh)R+=2;if(G.isSkinnedMesh)R+=1;return R}function Y(G,R,L,I,q,F){let A=J[$];if(A===void 0)A={id:G.id,object:G,geometry:R,material:L,materialVariant:H(G),groupOrder:I,renderOrder:G.renderOrder,z:q,group:F},J[$]=A;else A.id=G.id,A.object=G,A.geometry=R,A.material=L,A.materialVariant=H(G),A.groupOrder=I,A.renderOrder=G.renderOrder,A.z=q,A.group=F;return $++,A}function X(G,R,L,I,q,F,A){if(A.reversedDepth===!0)q=-q;let w=Y(G,R,L,I,q,F);if(L.transmission>0)Z.push(w);else if(L.transparent===!0)W.push(w);else Q.push(w)}function U(G,R,L,I,q,F){let A=Y(G,R,L,I,q,F);if(L.transmission>0)Z.unshift(A);else if(L.transparent===!0)W.unshift(A);else Q.unshift(A)}function N(G,R){if(Q.length>1)Q.sort(G||ZN);if(Z.length>1)Z.sort(R||OW);if(W.length>1)W.sort(R||OW)}function E(){for(let G=$,R=J.length;G<R;G++){let L=J[G];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:Q,transmissive:Z,transparent:W,init:K,push:X,unshift:U,finish:E,sort:N}}function WN(){let J=new WeakMap;function $(Z,W){let K=J.get(Z),H;if(K===void 0)H=new MW,J.set(Z,[H]);else if(W>=K.length)H=new MW,K.push(H);else H=K[W];return H}function Q(){J=new WeakMap}return{get:$,dispose:Q}}function KN(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={direction:new p,color:new i0};break;case"SpotLight":Q={position:new p,direction:new p,color:new i0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new p,color:new i0,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new p,skyColor:new i0,groundColor:new i0};break;case"RectAreaLight":Q={color:new i0,position:new p,halfWidth:new p,halfHeight:new p};break}return J[$.id]=Q,Q}}}function HN(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Q,Q}}}var YN=0;function XN(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function UN(J){let $=new KN,Q=HN(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new p);let W=new p,K=new X9,H=new X9;function Y(U){let N=0,E=0,G=0;for(let g=0;g<9;g++)Z.probe[g].set(0,0,0);let R=0,L=0,I=0,q=0,F=0,A=0,w=0,B=0,z=0,P=0,D=0,V=0,j=0,x=0;U.sort(XN);for(let g=0,r=U.length;g<r;g++){let C=U[g],c=C.color,o=C.intensity,v=C.distance,Z0=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===a7)Z0=C.shadow.map.texture;else Z0=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)N+=c.r*o,E+=c.g*o,G+=c.b*o;else if(C.isLightProbe){for(let d=0;d<9;d++)Z.probe[d].addScaledVector(C.sh.coefficients[d],o);x++}else if(C.isSunLight){let d=$.get(C);if(d.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let a=C.shadow,J0=Q.get(C);J0.shadowIntensity=a.intensity,J0.shadowBias=a.bias,J0.shadowNormalBias=a.normalBias,J0.shadowRadius=a.radius,J0.shadowMapSize.copy(a.mapSize).multiply(a.getFrameExtents()),Z.sunShadow[L]=J0,Z.sunShadowMap[L]=Z0;let L0=a.getViewportCount();for(let n=0;n<L0;n++)Z.sunShadowMatrix[I+n]=a.getMatrix(n),Z.sunShadowCascade[I+n]=a._cascadeData[n];I+=L0,L++}Z.sun[R]=d,R++}else if(C.isDirectionalLight){let d=$.get(C);if(d.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let a=C.shadow,J0=Q.get(C);J0.shadowIntensity=a.intensity,J0.shadowBias=a.bias,J0.shadowNormalBias=a.normalBias,J0.shadowRadius=a.radius,J0.shadowMapSize=a.mapSize,Z.directionalShadow[q]=J0,Z.directionalShadowMap[q]=Z0,Z.directionalShadowMatrix[q]=C.shadow.matrix,z++}Z.directional[q]=d,q++}else if(C.isSpotLight){let d=$.get(C);d.position.setFromMatrixPosition(C.matrixWorld),d.color.copy(c).multiplyScalar(o),d.distance=v,d.coneCos=Math.cos(C.angle),d.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),d.decay=C.decay,Z.spot[A]=d;let a=C.shadow;if(C.map){if(Z.spotLightMap[V]=C.map,V++,a.updateMatrices(C),C.castShadow)j++}if(Z.spotLightMatrix[A]=a.matrix,C.castShadow){let J0=Q.get(C);J0.shadowIntensity=a.intensity,J0.shadowBias=a.bias,J0.shadowNormalBias=a.normalBias,J0.shadowRadius=a.radius,J0.shadowMapSize=a.mapSize,Z.spotShadow[A]=J0,Z.spotShadowMap[A]=Z0,D++}A++}else if(C.isRectAreaLight){let d=$.get(C);d.color.copy(c).multiplyScalar(o),d.halfWidth.set(C.width*0.5,0,0),d.halfHeight.set(0,C.height*0.5,0),Z.rectArea[w]=d,w++}else if(C.isPointLight){let d=$.get(C);if(d.color.copy(C.color).multiplyScalar(C.intensity),d.distance=C.distance,d.decay=C.decay,C.castShadow){let a=C.shadow,J0=Q.get(C);J0.shadowIntensity=a.intensity,J0.shadowBias=a.bias,J0.shadowNormalBias=a.normalBias,J0.shadowRadius=a.radius,J0.shadowMapSize=a.mapSize,J0.shadowCameraNear=a.camera.near,J0.shadowCameraFar=a.camera.far,Z.pointShadow[F]=J0,Z.pointShadowMap[F]=Z0,Z.pointShadowMatrix[F]=C.shadow.matrix,P++}Z.point[F]=d,F++}else if(C.isHemisphereLight){let d=$.get(C);d.skyColor.copy(C.color).multiplyScalar(o),d.groundColor.copy(C.groundColor).multiplyScalar(o),Z.hemi[B]=d,B++}}if(w>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=G0.LTC_FLOAT_1,Z.rectAreaLTC2=G0.LTC_FLOAT_2;else Z.rectAreaLTC1=G0.LTC_HALF_1,Z.rectAreaLTC2=G0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=E,Z.ambient[2]=G;let S=Z.hash;if(S.sunLength!==R||S.directionalLength!==q||S.pointLength!==F||S.spotLength!==A||S.rectAreaLength!==w||S.hemiLength!==B||S.numSunShadows!==L||S.numDirectionalShadows!==z||S.numPointShadows!==P||S.numSpotShadows!==D||S.numSpotMaps!==V||S.numLightProbes!==x)Z.sun.length=R,Z.directional.length=q,Z.spot.length=A,Z.rectArea.length=w,Z.point.length=F,Z.hemi.length=B,Z.sunShadow.length=L,Z.sunShadowMap.length=L,Z.sunShadowMatrix.length=I,Z.sunShadowCascade.length=I,Z.directionalShadow.length=z,Z.directionalShadowMap.length=z,Z.directionalShadowMatrix.length=z,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.pointShadowMatrix.length=P,Z.spotShadow.length=D,Z.spotShadowMap.length=D,Z.spotLightMatrix.length=D+V-j,Z.spotLightMap.length=V,Z.numSpotLightShadowsWithMaps=j,Z.numLightProbes=x,S.sunLength=R,S.directionalLength=q,S.pointLength=F,S.spotLength=A,S.rectAreaLength=w,S.hemiLength=B,S.numSunShadows=L,S.numDirectionalShadows=z,S.numPointShadows=P,S.numSpotShadows=D,S.numSpotMaps=V,S.numLightProbes=x,Z.version=YN++}function X(U,N){let E=0,G=0,R=0,L=0,I=0,q=0,F=N.matrixWorldInverse;for(let A=0,w=U.length;A<w;A++){let B=U[A];if(B.isSunLight){let z=Z.sun[E];z.direction.setFromMatrixPosition(B.matrixWorld),z.direction.transformDirection(F),E++}else if(B.isDirectionalLight){let z=Z.directional[G];z.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),z.direction.sub(W),z.direction.transformDirection(F),G++}else if(B.isSpotLight){let z=Z.spot[L];z.position.setFromMatrixPosition(B.matrixWorld),z.position.applyMatrix4(F),z.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),z.direction.sub(W),z.direction.transformDirection(F),L++}else if(B.isRectAreaLight){let z=Z.rectArea[I];z.position.setFromMatrixPosition(B.matrixWorld),z.position.applyMatrix4(F),H.identity(),K.copy(B.matrixWorld),K.premultiply(F),H.extractRotation(K),z.halfWidth.set(B.width*0.5,0,0),z.halfHeight.set(0,B.height*0.5,0),z.halfWidth.applyMatrix4(H),z.halfHeight.applyMatrix4(H),I++}else if(B.isPointLight){let z=Z.point[R];z.position.setFromMatrixPosition(B.matrixWorld),z.position.applyMatrix4(F),R++}else if(B.isHemisphereLight){let z=Z.hemi[q];z.direction.setFromMatrixPosition(B.matrixWorld),z.direction.transformDirection(F),q++}}}return{setup:Y,setupView:X,state:Z}}function LW(J){let $=new UN(J),Q=[],Z=[],W=[];function K(E){N.camera=E,Q.length=0,Z.length=0,W.length=0}function H(E){if(E.isLightProbeGrid)W.push(E);else Q.push(E)}function Y(E){Z.push(E)}function X(){$.setup(Q),W.sort((E,G)=>E.priority-G.priority||E.id-G.id)}function U(E){$.setupView(Q,E)}let N={lightsArray:Q,shadowsArray:Z,lightProbeGridArray:W,camera:null,lights:$,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:N,setupLights:X,setupLightsView:U,pushLight:H,pushShadow:Y}}function NN(J){let $=new WeakMap;function Q(W,K=0){let H=$.get(W),Y;if(H===void 0)Y=new LW(J),$.set(W,[Y]);else if(K>=H.length)Y=new LW(J),H.push(Y);else Y=H[K];return Y}function Z(){$=new WeakMap}return{get:Q,dispose:Z}}var EN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qN=[new p(1,0,0),new p(-1,0,0),new p(0,1,0),new p(0,-1,0),new p(0,0,1),new p(0,0,-1)],FN=[new p(0,-1,0),new p(0,-1,0),new p(0,0,1),new p(0,0,-1),new p(0,-1,0),new p(0,-1,0)],VW=new X9,H8=new p,x$=new p;function DN(J,$,Q){let Z=new k6,W=new m0,K=new m0,H=new U9,Y=new B$,X=new k$,U={},N=Q.maxTextureSize,E={[A6]:y9,[y9]:A6,[u9]:u9},G=new S9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new m0},radius:{value:4}},vertexShader:EN,fragmentShader:GN}),R=G.clone();R.defines.HORIZONTAL_PASS=1;let L=new w7;L.setAttribute("position",new H7(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new _9(L,G),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n6;let F=this.type;this.render=function(P,D,V){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(P.length===0)return;if(this.type===rQ)S0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=n6;let j=J.getRenderTarget(),x=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),g=J.state;if(g.setBlending(k7),g.buffers.depth.getReversed()===!0)g.buffers.color.setClear(0,0,0,0);else g.buffers.color.setClear(1,1,1,1);g.buffers.depth.setTest(!0),g.setScissorTest(!1);let r=F!==this.type;if(r)D.traverse(function(C){if(C.material)if(Array.isArray(C.material))C.material.forEach((c)=>c.needsUpdate=!0);else C.material.needsUpdate=!0});for(let C=0,c=P.length;C<c;C++){let o=P[C],v=o.shadow;if(v===void 0){S0("WebGLShadowMap:",o,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;W.copy(v.mapSize);let Z0=v.getFrameExtents();if(W.multiply(Z0),K.copy(v.mapSize),W.x>N||W.y>N){if(W.x>N)K.x=Math.floor(N/Z0.x),W.x=K.x*Z0.x,v.mapSize.x=K.x;if(W.y>N)K.y=Math.floor(N/Z0.y),W.y=K.y*Z0.y,v.mapSize.y=K.y}let d=J.state.buffers.depth.getReversed();if(v.camera._reversedDepth=d,v.map===null||r===!0){if(v.map!==null){if(v.map.depthTexture!==null)v.map.depthTexture.dispose(),v.map.depthTexture=null;v.map.dispose()}if(this.type===I6){if(o.isPointLight){S0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}v.map=new b9(W.x,W.y,{format:a7,type:p9,minFilter:P9,magFilter:P9,generateMipmaps:!1}),v.map.texture.name=o.name+".shadowMap",v.map.depthTexture=new g7(W.x,W.y,I7),v.map.depthTexture.name=o.name+".shadowMapDepth",v.map.depthTexture.format=w6,v.map.depthTexture.compareFunction=null,v.map.depthTexture.minFilter=y7,v.map.depthTexture.magFilter=y7}else{if(o.isPointLight)v.map=new B5(W.x),v.map.depthTexture=new q5(W.x,h7);else v.map=new b9(W.x,W.y),v.map.depthTexture=new g7(W.x,W.y,h7);if(v.map.depthTexture.name=o.name+".shadowMap",v.map.depthTexture.format=w6,this.type===n6)v.map.depthTexture.compareFunction=d?X$:Y$,v.map.depthTexture.minFilter=P9,v.map.depthTexture.magFilter=P9;else v.map.depthTexture.compareFunction=null,v.map.depthTexture.minFilter=y7,v.map.depthTexture.magFilter=y7}v.camera.updateProjectionMatrix()}if(v.map.isWebGLCubeRenderTarget!==!0&&(v.map.width!==W.x||v.map.height!==W.y))v.map.setSize(W.x,W.y);let a=v.map.isWebGLCubeRenderTarget?6:v.getViewportCount();if(o.isPointLight!==!0)v.updateMatrices(o,V);let J0=(v.camera.layers.mask&4294967294)!==0?v.camera.layers:V.layers;for(let L0=0;L0<a;L0++){let n=v.getCamera(L0);if(o.isPointLight){let{camera:$0,matrix:O0}=v,w0=o.distance||$0.far;if(w0!==$0.far)$0.far=w0,$0.updateProjectionMatrix();H8.setFromMatrixPosition(o.matrixWorld),$0.position.copy(H8),x$.copy($0.position),x$.add(qN[L0]),$0.up.copy(FN[L0]),$0.lookAt(x$),$0.updateMatrixWorld(),O0.makeTranslation(-H8.x,-H8.y,-H8.z),VW.multiplyMatrices($0.projectionMatrix,$0.matrixWorldInverse),v._frustum.setFromProjectionMatrix(VW,$0.coordinateSystem,$0.reversedDepth)}if(v.map.isWebGLCubeRenderTarget)J.setRenderTarget(v.map,L0),J.clear();else{if(L0===0)J.setRenderTarget(v.map),J.clear();let $0=v.getViewport(L0);H.set(K.x*$0.x,K.y*$0.y,K.x*$0.z,K.y*$0.w),g.viewport(H)}Z=v.getFrustum(L0),B(D,V,n,o,J0,this.type)}if(v.isPointLightShadow!==!0&&this.type===I6)A(v,V);v.needsUpdate=!1}F=this.type,q.needsUpdate=!1,J.setRenderTarget(j,x,S)};function A(P,D){let V=$.update(I);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,R.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,R.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new b9(W.x,W.y,{format:a7,type:p9});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(D,null,V,G,I,null),R.uniforms.shadow_pass.value=P.mapPass.texture,R.uniforms.resolution.value.set(P.map.width,P.map.height),R.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(D,null,V,R,I,null)}function w(P,D,V,j){let x=null,S=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)x=S;else if(x=V.isPointLight===!0?X:Y,J.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let g=x.uuid,r=D.uuid,C=U[g];if(C===void 0)C={},U[g]=C;let c=C[r];if(c===void 0)c=x.clone(),C[r]=c,D.addEventListener("dispose",z);x=c}if(x.visible=D.visible,x.wireframe=D.wireframe,j===I6)x.side=D.shadowSide!==null?D.shadowSide:D.side;else x.side=D.shadowSide!==null?D.shadowSide:E[D.side];if(x.alphaMap=D.alphaMap,x.alphaTest=D.alphaToCoverage===!0?0.5:D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,V.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let g=J.properties.get(x);g.light=V}return x}function B(P,D,V,j,x,S){if(P.visible===!1)return;if(P.layers.test(x)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&S===I6)&&(!P.frustumCulled||P.intersectsFrustum(Z))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);let C=$.update(P),c=P.material;if(Array.isArray(c)){let o=C.groups;for(let v=0,Z0=o.length;v<Z0;v++){let d=o[v],a=c[d.materialIndex];if(a&&a.visible){let J0=w(P,a,j,S);P.onBeforeShadow(J,P,D,V,C,J0,d),J.renderBufferDirect(V,null,C,J0,P,d),P.onAfterShadow(J,P,D,V,C,J0,d)}}}else if(c.visible){let o=w(P,c,j,S);P.onBeforeShadow(J,P,D,V,C,o,null),J.renderBufferDirect(V,null,C,o,P,null),P.onAfterShadow(J,P,D,V,C,o,null)}}}let r=P.children;for(let C=0,c=r.length;C<c;C++)B(r[C],D,V,j,x,S)}function z(P){P.target.removeEventListener("dispose",z);for(let V in U){let j=U[V],x=P.target.uuid;if(x in j)j[x].dispose(),delete j[x]}}}function RN(J,$){function Q(){let _=!1,s=new U9,u=null,Q0=new U9(0,0,0,0);return{setMask:function(W0){if(u!==W0&&!_)J.colorMask(W0,W0,W0,W0),u=W0},setLocked:function(W0){_=W0},setClear:function(W0,N0,z0,A0,q0){if(q0===!0)W0*=A0,N0*=A0,z0*=A0;if(s.set(W0,N0,z0,A0),Q0.equals(s)===!1)J.clearColor(W0,N0,z0,A0),Q0.copy(s)},reset:function(){_=!1,u=null,Q0.set(-1,0,0,0)}}}function Z(){let _=!1,s=!1,u=null,Q0=null,W0=null;return{setReversed:function(N0){if(s!==N0){let z0=$.get("EXT_clip_control");if(N0)z0.clipControlEXT(z0.LOWER_LEFT_EXT,z0.ZERO_TO_ONE_EXT);else z0.clipControlEXT(z0.LOWER_LEFT_EXT,z0.NEGATIVE_ONE_TO_ONE_EXT);s=N0;let A0=W0;W0=null,this.setClear(A0)}},getReversed:function(){return s},setTest:function(N0){if(N0)R0(J.DEPTH_TEST);else s0(J.DEPTH_TEST)},setMask:function(N0){if(u!==N0&&!_)J.depthMask(N0),u=N0},setFunc:function(N0){if(s)N0=nZ[N0];if(Q0!==N0){switch(N0){case RZ:J.depthFunc(J.NEVER);break;case OZ:J.depthFunc(J.ALWAYS);break;case MZ:J.depthFunc(J.LESS);break;case DJ:J.depthFunc(J.LEQUAL);break;case LZ:J.depthFunc(J.EQUAL);break;case VZ:J.depthFunc(J.GEQUAL);break;case BZ:J.depthFunc(J.GREATER);break;case kZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}Q0=N0}},setLocked:function(N0){_=N0},setClear:function(N0){if(W0!==N0){if(W0=N0,s)N0=1-N0;J.clearDepth(N0)}},reset:function(){_=!1,u=null,Q0=null,W0=null,s=!1}}}function W(){let _=!1,s=null,u=null,Q0=null,W0=null,N0=null,z0=null,A0=null,q0=null;return{setTest:function(C0){if(!_)if(C0)R0(J.STENCIL_TEST);else s0(J.STENCIL_TEST)},setMask:function(C0){if(s!==C0&&!_)J.stencilMask(C0),s=C0},setFunc:function(C0,x0,F0){if(u!==C0||Q0!==x0||W0!==F0)J.stencilFunc(C0,x0,F0),u=C0,Q0=x0,W0=F0},setOp:function(C0,x0,F0){if(N0!==C0||z0!==x0||A0!==F0)J.stencilOp(C0,x0,F0),N0=C0,z0=x0,A0=F0},setLocked:function(C0){_=C0},setClear:function(C0){if(q0!==C0)J.clearStencil(C0),q0=C0},reset:function(){_=!1,s=null,u=null,Q0=null,W0=null,N0=null,z0=null,A0=null,q0=null}}}let K=new Q,H=new Z,Y=new W,X={},U=new WeakMap,N={},E={},G={},R=new WeakMap,L=[],I=null,q=!1,F=null,A=null,w=null,B=null,z=null,P=null,D=null,V=new i0(0,0,0),j=0,x=!1,S=null,g=null,r=null,C=null,c=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),v=!1,Z0=0,d=J.getParameter(J.VERSION);if(d.indexOf("WebGL")!==-1)Z0=parseFloat(/^WebGL (\d)/.exec(d)[1]),v=Z0>=1;else if(d.indexOf("OpenGL ES")!==-1)Z0=parseFloat(/^OpenGL ES (\d)/.exec(d)[1]),v=Z0>=2;let a=null,J0={},L0=J.getParameter(J.SCISSOR_BOX),n=J.getParameter(J.VIEWPORT),$0=new U9().fromArray(L0),O0=new U9().fromArray(n);function w0(_,s,u,Q0){let W0=new Uint8Array(4),N0=J.createTexture();J.bindTexture(_,N0),J.texParameteri(_,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(_,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let z0=0;z0<u;z0++)if(_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texImage3D(s,0,J.RGBA,1,1,Q0,0,J.RGBA,J.UNSIGNED_BYTE,W0);else J.texImage2D(s+z0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,W0);return N0}let P0={};P0[J.TEXTURE_2D]=w0(J.TEXTURE_2D,J.TEXTURE_2D,1),P0[J.TEXTURE_CUBE_MAP]=w0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),P0[J.TEXTURE_2D_ARRAY]=w0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),P0[J.TEXTURE_3D]=w0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),R0(J.DEPTH_TEST),H.setFunc(DJ),H9(!1),N9(EJ),R0(J.CULL_FACE),t0(k7);function R0(_){if(N[_]!==!0)J.enable(_),N[_]=!0}function s0(_){if(N[_]!==!1)J.disable(_),N[_]=!1}function j0(_,s){if(G[_]!==s){if(J.bindFramebuffer(_,s),G[_]=s,_===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=s;if(_===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=s;return!0}return!1}function v0(_,s){let u=L,Q0=!1;if(_){if(u=R.get(s),u===void 0)u=[],R.set(s,u);let W0=_.textures;if(u.length!==W0.length||u[0]!==J.COLOR_ATTACHMENT0){for(let N0=0,z0=W0.length;N0<z0;N0++)u[N0]=J.COLOR_ATTACHMENT0+N0;u.length=W0.length,Q0=!0}}else if(u[0]!==J.BACK)u[0]=J.BACK,Q0=!0;if(Q0)J.drawBuffers(u)}function a0(_){if(I!==_)return J.useProgram(_),I=_,!0;return!1}let p0={[v7]:J.FUNC_ADD,[tQ]:J.FUNC_SUBTRACT,[eQ]:J.FUNC_REVERSE_SUBTRACT};p0[JZ]=J.MIN,p0[$Z]=J.MAX;let $9={[QZ]:J.ZERO,[i7]:J.ONE,[ZZ]:J.SRC_COLOR,[KZ]:J.SRC_ALPHA,[EZ]:J.SRC_ALPHA_SATURATE,[UZ]:J.DST_COLOR,[YZ]:J.DST_ALPHA,[WZ]:J.ONE_MINUS_SRC_COLOR,[HZ]:J.ONE_MINUS_SRC_ALPHA,[NZ]:J.ONE_MINUS_DST_COLOR,[XZ]:J.ONE_MINUS_DST_ALPHA,[GZ]:J.CONSTANT_COLOR,[qZ]:J.ONE_MINUS_CONSTANT_COLOR,[FZ]:J.CONSTANT_ALPHA,[DZ]:J.ONE_MINUS_CONSTANT_ALPHA};function t0(_,s,u,Q0,W0,N0,z0,A0,q0,C0){if(_===k7){if(q===!0)s0(J.BLEND),q=!1;return}if(q===!1)R0(J.BLEND),q=!0;if(_!==a8){if(_!==F||C0!==x){if(A!==v7||z!==v7)J.blendEquation(J.FUNC_ADD),A=v7,z=v7;if(C0)switch(_){case s6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case GJ:J.blendFunc(J.ONE,J.ONE);break;case qJ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case FJ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:f0("WebGLState: Invalid blending: ",_);break}else switch(_){case s6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case GJ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case qJ:f0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case FJ:f0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:f0("WebGLState: Invalid blending: ",_);break}w=null,B=null,P=null,D=null,V.set(0,0,0),j=0,F=_,x=C0}return}if(W0=W0||s,N0=N0||u,z0=z0||Q0,s!==A||W0!==z)J.blendEquationSeparate(p0[s],p0[W0]),A=s,z=W0;if(u!==w||Q0!==B||N0!==P||z0!==D)J.blendFuncSeparate($9[u],$9[Q0],$9[N0],$9[z0]),w=u,B=Q0,P=N0,D=z0;if(A0.equals(V)===!1||q0!==j)J.blendColor(A0.r,A0.g,A0.b,q0),V.copy(A0),j=q0;F=_,x=!1}function B9(_,s){_.side===u9?s0(J.CULL_FACE):R0(J.CULL_FACE);let u=_.side===y9;if(s)u=!u;H9(u),_.blending===s6&&_.transparent===!1?t0(k7):t0(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),H.setFunc(_.depthFunc),H.setTest(_.depthTest),H.setMask(_.depthWrite),K.setMask(_.colorWrite);let Q0=_.stencilWrite;if(Y.setTest(Q0),Q0)Y.setMask(_.stencilWriteMask),Y.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),Y.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass);f9(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?R0(J.SAMPLE_ALPHA_TO_COVERAGE):s0(J.SAMPLE_ALPHA_TO_COVERAGE)}function H9(_){if(S!==_){if(_)J.frontFace(J.CW);else J.frontFace(J.CCW);S=_}}function N9(_){if(_!==oQ){if(R0(J.CULL_FACE),_!==g)if(_===EJ)J.cullFace(J.BACK);else if(_===aQ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else s0(J.CULL_FACE);g=_}function k9(_){if(_!==r){if(v)J.lineWidth(_);r=_}}function f9(_,s,u){if(_){if(R0(J.POLYGON_OFFSET_FILL),C!==s||c!==u){if(C=s,c=u,H.getReversed())s=-s,u=-u;J.polygonOffset(s,u)}}else s0(J.POLYGON_OFFSET_FILL)}function v9(_){if(_)R0(J.SCISSOR_TEST);else s0(J.SCISSOR_TEST)}function s9(_){if(_===void 0)_=J.TEXTURE0+o-1;if(a!==_)J.activeTexture(_),a=_}function f(_,s,u){if(u===void 0)if(a===null)u=J.TEXTURE0+o-1;else u=a;let Q0=J0[u];if(Q0===void 0)Q0={type:void 0,texture:void 0},J0[u]=Q0;if(Q0.type!==_||Q0.texture!==s){if(a!==u)J.activeTexture(u),a=u;J.bindTexture(_,s||P0[_]),Q0.type=_,Q0.texture=s}}function i9(){let _=J0[a];if(_!==void 0&&_.type!==void 0)J.bindTexture(_.type,null),_.type=void 0,_.texture=void 0}function e0(){try{J.compressedTexImage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function D9(){try{J.compressedTexImage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function E0(){try{J.texSubImage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function W9(){try{J.texSubImage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function _0(){try{J.compressedTexSubImage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function b0(){try{J.compressedTexSubImage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function I9(){try{J.texStorage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function k(){try{J.texStorage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function O(){try{J.texImage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function y(){try{J.texImage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function e(_){if(E[_]!==void 0)return E[_];else return J.getParameter(_)}function t(_,s){if(E[_]!==s)J.pixelStorei(_,s),E[_]=s}function K0(_){if($0.equals(_)===!1)J.scissor(_.x,_.y,_.z,_.w),$0.copy(_)}function X0(_){if(O0.equals(_)===!1)J.viewport(_.x,_.y,_.z,_.w),O0.copy(_)}function l(_,s){let u=U.get(s);if(u===void 0)u=new WeakMap,U.set(s,u);let Q0=u.get(_);if(Q0===void 0)Q0=J.getUniformBlockIndex(s,_.name),J.uniformBlockBinding(s,Q0,Q0),u.set(_,Q0)}function i(_,s,u){let W0=U.get(s).get(_);if(X[W0]!==u)J.bindBufferBase(J.UNIFORM_BUFFER,W0,u),X[W0]=u}function H0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},E={},a=null,J0={},G={},X={},R=new WeakMap,L=[],I=null,q=!1,F=null,A=null,w=null,B=null,z=null,P=null,D=null,V=new i0(0,0,0),j=0,x=!1,S=null,g=null,r=null,C=null,c=null,$0.set(0,0,J.canvas.width,J.canvas.height),O0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:R0,disable:s0,bindFramebuffer:j0,drawBuffers:v0,useProgram:a0,setBlending:t0,setMaterial:B9,setFlipSided:H9,setCullFace:N9,setLineWidth:k9,setPolygonOffset:f9,setScissorTest:v9,activeTexture:s9,bindTexture:f,unbindTexture:i9,compressedTexImage2D:e0,compressedTexImage3D:D9,texImage2D:O,texImage3D:y,pixelStorei:t,getParameter:e,updateUBOMapping:l,uniformBlockBinding:i,texStorage2D:I9,texStorage3D:k,texSubImage2D:E0,texSubImage3D:W9,compressedTexSubImage2D:_0,compressedTexSubImage3D:b0,scissor:K0,viewport:X0,reset:H0}}function ON(J,$,Q,Z,W,K,H){let Y=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new m0,N=new WeakMap,E=new Set,G,R=new WeakMap,L=new Set,I=new FinalizationRegistry((k)=>L.delete(k)),q=!1;try{q=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(k){}function F(k,O){return q?new OffscreenCanvas(k,O):V6("canvas")}function A(k,O,y){let e=1,t=I9(k);if(t.width>y||t.height>y)e=y/Math.max(t.width,t.height);if(e<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let K0=Math.floor(e*t.width),X0=Math.floor(e*t.height);if(G===void 0)G=F(K0,X0);let l=O?F(K0,X0):G;return l.width=K0,l.height=X0,l.getContext("2d").drawImage(k,0,0,K0,X0),S0("WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+K0+"x"+X0+")."),l}else{if("data"in k)S0("WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+").");return k}return k}function w(k){return k.generateMipmaps}function B(k){J.generateMipmap(k)}function z(k){if(k.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(k.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function P(k,O,y,e,t,K0=!1){if(k!==null){if(J[k]!==void 0)return J[k];S0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let X0;if(e){if(X0=$.get("EXT_texture_norm16"),!X0)S0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let l=O;if(O===J.RED){if(y===J.FLOAT)l=J.R32F;if(y===J.HALF_FLOAT)l=J.R16F;if(y===J.UNSIGNED_BYTE)l=J.R8;if(y===J.UNSIGNED_SHORT&&X0)l=X0.R16_EXT;if(y===J.SHORT&&X0)l=X0.R16_SNORM_EXT}if(O===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.R8UI;if(y===J.UNSIGNED_SHORT)l=J.R16UI;if(y===J.UNSIGNED_INT)l=J.R32UI;if(y===J.BYTE)l=J.R8I;if(y===J.SHORT)l=J.R16I;if(y===J.INT)l=J.R32I}if(O===J.RG){if(y===J.FLOAT)l=J.RG32F;if(y===J.HALF_FLOAT)l=J.RG16F;if(y===J.UNSIGNED_BYTE)l=J.RG8;if(y===J.UNSIGNED_SHORT&&X0)l=X0.RG16_EXT;if(y===J.SHORT&&X0)l=X0.RG16_SNORM_EXT}if(O===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.RG8UI;if(y===J.UNSIGNED_SHORT)l=J.RG16UI;if(y===J.UNSIGNED_INT)l=J.RG32UI;if(y===J.BYTE)l=J.RG8I;if(y===J.SHORT)l=J.RG16I;if(y===J.INT)l=J.RG32I}if(O===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.RGB8UI;if(y===J.UNSIGNED_SHORT)l=J.RGB16UI;if(y===J.UNSIGNED_INT)l=J.RGB32UI;if(y===J.BYTE)l=J.RGB8I;if(y===J.SHORT)l=J.RGB16I;if(y===J.INT)l=J.RGB32I}if(O===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)l=J.RGBA16UI;if(y===J.UNSIGNED_INT)l=J.RGBA32UI;if(y===J.BYTE)l=J.RGBA8I;if(y===J.SHORT)l=J.RGBA16I;if(y===J.INT)l=J.RGBA32I}if(O===J.RGB){if(y===J.UNSIGNED_SHORT&&X0)l=X0.RGB16_EXT;if(y===J.SHORT&&X0)l=X0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)l=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)l=J.R11F_G11F_B10F}if(O===J.RGBA){let i=K0?H$:u0.getTransfer(t);if(y===J.FLOAT)l=J.RGBA32F;if(y===J.HALF_FLOAT)l=J.RGBA16F;if(y===J.UNSIGNED_BYTE)l=i===Z9?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&X0)l=X0.RGBA16_EXT;if(y===J.SHORT&&X0)l=X0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)l=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)l=J.RGB5_A1}if(l===J.R16F||l===J.R32F||l===J.RG16F||l===J.RG32F||l===J.RGBA16F||l===J.RGBA32F)$.get("EXT_color_buffer_float");return l}function D(k,O){let y;if(k){if(O===null||O===h7||O===o7)y=J.DEPTH24_STENCIL8;else if(O===I7)y=J.DEPTH32F_STENCIL8;else if(O===r6)y=J.DEPTH24_STENCIL8,S0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(O===null||O===h7||O===o7)y=J.DEPTH_COMPONENT24;else if(O===I7)y=J.DEPTH_COMPONENT32F;else if(O===r6)y=J.DEPTH_COMPONENT16;return y}function V(k,O){if(w(k)===!0||k.isFramebufferTexture&&k.minFilter!==y7&&k.minFilter!==P9)return Math.log2(Math.max(O.width,O.height))+1;else if(k.mipmaps.length>0)return k.mipmaps.length;else if(k.isCompressedTexture&&Array.isArray(k.image))return O.mipmaps.length;else return 1}function j(k){let O=new WeakRef(k);Z.get(k).__ref=O,L.add(O),I.register(k,O,O)}function x(k){let O=Z.get(k).__ref;if(O===void 0)return;L.delete(O),I.unregister(O)}function S(k){r(k.target)}function g(k){C(k.target)}function r(k){if(k.removeEventListener("dispose",S),x(k),o(k),k.isVideoTexture)N.delete(k);if(k.isHTMLTexture)E.delete(k)}function C(k){k.removeEventListener("dispose",g),x(k),Z0(k)}function c(){for(let k of L){let O=k.deref();if(O===void 0)continue;if(O.isRenderTarget===!0)C(O);else r(O)}L.clear(),E.clear()}function o(k){let O=Z.get(k);if(O.__webglInit===void 0)return;let y=k.source,e=R.get(y);if(e){let t=e[O.__cacheKey];if(t.usedTimes--,t.usedTimes===0)v(k);if(Object.keys(e).length===0)R.delete(y)}Z.remove(k)}function v(k){let O=Z.get(k);J.deleteTexture(O.__webglTexture);let y=k.source,e=R.get(y);delete e[O.__cacheKey],H.memory.textures--}function Z0(k){let O=Z.get(k);if(O.__depthDisposeCallback)O.__depthDisposeCallback();let y=k.depthTexture;if(y&&y.renderTarget===k)r(y);if(k.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(O.__webglFramebuffer[t]))for(let K0=0;K0<O.__webglFramebuffer[t].length;K0++)J.deleteFramebuffer(O.__webglFramebuffer[t][K0]);else J.deleteFramebuffer(O.__webglFramebuffer[t]);if(O.__webglDepthbuffer)J.deleteRenderbuffer(O.__webglDepthbuffer[t])}else{if(Array.isArray(O.__webglFramebuffer))for(let t=0;t<O.__webglFramebuffer.length;t++)J.deleteFramebuffer(O.__webglFramebuffer[t]);else J.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer)J.deleteRenderbuffer(O.__webglDepthbuffer);if(O.__webglMultisampledFramebuffer)J.deleteFramebuffer(O.__webglMultisampledFramebuffer);if(O.__webglColorRenderbuffer){for(let t=0;t<O.__webglColorRenderbuffer.length;t++)if(O.__webglColorRenderbuffer[t])J.deleteRenderbuffer(O.__webglColorRenderbuffer[t])}if(O.__webglDepthRenderbuffer)J.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let e=k.textures;for(let t=0,K0=e.length;t<K0;t++){let X0=Z.get(e[t]);if(X0.__webglTexture)J.deleteTexture(X0.__webglTexture),H.memory.textures--;Z.remove(e[t])}Z.remove(k)}let d=0;function a(){d=0}function J0(){return d}function L0(k){d=k}function n(){let k=d;if(k>=W.maxTextures)S0("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+W.maxTextures);return d+=1,k}function $0(k){let O=[];return O.push(k.wrapS),O.push(k.wrapT),O.push(k.wrapR||0),O.push(k.magFilter),O.push(k.minFilter),O.push(k.anisotropy),O.push(k.internalFormat),O.push(k.format),O.push(k.type),O.push(k.generateMipmaps),O.push(k.mipmapsAutoUpdate),O.push(k.premultiplyAlpha),O.push(k.flipY),O.push(k.unpackAlignment),O.push(k.colorSpace),O.join()}function O0(k,O){let y=Z.get(k);if(k.isVideoTexture)_0(k);if(k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&y.__version!==k.version){let e=k.image;if(e===null)S0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)S0("WebGLRenderer: Texture marked for update but image is incomplete");else{B9(y,k,O);return}}else if(k.isExternalTexture)y.__webglTexture=k.sourceTexture?k.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+O)}function w0(k,O){let y=Z.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&y.__version!==k.version){B9(y,k,O);return}else if(k.isExternalTexture)y.__webglTexture=k.sourceTexture?k.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+O)}function P0(k,O){let y=Z.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&y.__version!==k.version){B9(y,k,O);return}Q.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+O)}function R0(k,O){let y=Z.get(k);if(k.version>0&&y.__version!==k.version){H9(y,k,O);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+O)}let s0={[wZ]:J.REPEAT,[e8]:J.CLAMP_TO_EDGE,[CZ]:J.MIRRORED_REPEAT},j0={[y7]:J.NEAREST,[PZ]:J.NEAREST_MIPMAP_NEAREST,[a6]:J.NEAREST_MIPMAP_LINEAR,[P9]:J.LINEAR,[J5]:J.LINEAR_MIPMAP_NEAREST,[b7]:J.LINEAR_MIPMAP_LINEAR},v0={[xZ]:J.NEVER,[U$]:J.ALWAYS,[gZ]:J.LESS,[Y$]:J.LEQUAL,[pZ]:J.EQUAL,[X$]:J.GEQUAL,[mZ]:J.GREATER,[lZ]:J.NOTEQUAL};function a0(k,O){if(O.type===I7&&$.has("OES_texture_float_linear")===!1&&(O.magFilter===P9||O.magFilter===J5||O.magFilter===a6||O.magFilter===b7||O.minFilter===P9||O.minFilter===J5||O.minFilter===a6||O.minFilter===b7))S0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(k,J.TEXTURE_WRAP_S,s0[O.wrapS]),J.texParameteri(k,J.TEXTURE_WRAP_T,s0[O.wrapT]),k===J.TEXTURE_3D||k===J.TEXTURE_2D_ARRAY)J.texParameteri(k,J.TEXTURE_WRAP_R,s0[O.wrapR]);if(J.texParameteri(k,J.TEXTURE_MAG_FILTER,j0[O.magFilter]),J.texParameteri(k,J.TEXTURE_MIN_FILTER,j0[O.minFilter]),O.compareFunction)J.texParameteri(k,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(k,J.TEXTURE_COMPARE_FUNC,v0[O.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(O.magFilter===y7)return;if(O.minFilter!==a6&&O.minFilter!==b7)return;if(O.type===I7&&$.has("OES_texture_float_linear")===!1)return;if(O.anisotropy>1||Z.get(O).__currentAnisotropy){let y=$.get("EXT_texture_filter_anisotropic");J.texParameterf(k,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(O.anisotropy,W.getMaxAnisotropy())),Z.get(O).__currentAnisotropy=O.anisotropy}}}function p0(k,O){let y=!1;if(k.__webglInit===void 0)k.__webglInit=!0,O.addEventListener("dispose",S),j(O);let e=O.source,t=R.get(e);if(t===void 0)t={},R.set(e,t);let K0=$0(O);if(K0!==k.__cacheKey){if(t[K0]===void 0)t[K0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,y=!0;t[K0].usedTimes++;let X0=t[k.__cacheKey];if(X0!==void 0){if(t[k.__cacheKey].usedTimes--,X0.usedTimes===0)v(O)}k.__cacheKey=K0,k.__webglTexture=t[K0].texture}return y}function $9(k,O,y){return Math.floor(Math.floor(k/y)/O)}function t0(k,O,y,e){let K0=k.updateRanges;if(K0.length===0)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,O.width,O.height,y,e,O.data);else{K0.sort((_,s)=>_.start-s.start);let X0=0;for(let _=1;_<K0.length;_++){let s=K0[X0],u=K0[_],Q0=s.start+s.count,W0=$9(u.start,O.width,4),N0=$9(s.start,O.width,4);if(u.start<=Q0+1&&W0===N0&&$9(u.start+u.count-1,O.width,4)===W0)s.count=Math.max(s.count,u.start+u.count-s.start);else++X0,K0[X0]=u}K0.length=X0+1;let l=Q.getParameter(J.UNPACK_ROW_LENGTH),i=Q.getParameter(J.UNPACK_SKIP_PIXELS),H0=Q.getParameter(J.UNPACK_SKIP_ROWS);Q.pixelStorei(J.UNPACK_ROW_LENGTH,O.width);for(let _=0,s=K0.length;_<s;_++){let u=K0[_],Q0=Math.floor(u.start/4),W0=Math.ceil(u.count/4),N0=Q0%O.width,z0=Math.floor(Q0/O.width),A0=W0,q0=1;Q.pixelStorei(J.UNPACK_SKIP_PIXELS,N0),Q.pixelStorei(J.UNPACK_SKIP_ROWS,z0),Q.texSubImage2D(J.TEXTURE_2D,0,N0,z0,A0,1,y,e,O.data)}k.clearUpdateRanges(),Q.pixelStorei(J.UNPACK_ROW_LENGTH,l),Q.pixelStorei(J.UNPACK_SKIP_PIXELS,i),Q.pixelStorei(J.UNPACK_SKIP_ROWS,H0)}}function B9(k,O,y){let e=J.TEXTURE_2D;if(O.isDataArrayTexture||O.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(O.isData3DTexture)e=J.TEXTURE_3D;let t=p0(k,O),K0=O.source;Q.bindTexture(e,k.__webglTexture,J.TEXTURE0+y);let X0=Z.get(K0);if(K0.version!==X0.__version||t===!0){if(Q.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap<"u"&&O.image instanceof ImageBitmap)===!1){let q0=u0.getPrimaries(u0.workingColorSpace),C0=O.colorSpace===r7?null:u0.getPrimaries(O.colorSpace),x0=O.colorSpace===r7||q0===C0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,O.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,x0)}Q.pixelStorei(J.UNPACK_ALIGNMENT,O.unpackAlignment);let i=A(O.image,!1,W.maxTextureSize);i=b0(O,i);let H0=K.convert(O.format,O.colorSpace),_=K.convert(O.type),s=P(O.internalFormat,H0,_,O.normalized,O.colorSpace,O.isVideoTexture);a0(e,O);let u,Q0=O.mipmaps,W0=O.isVideoTexture!==!0,N0=X0.__version===void 0||t===!0,z0=K0.dataReady,A0=V(O,i);if(O.isDepthTexture){if(s=D(O.format===x7,O.type),N0)if(W0)Q.texStorage2D(J.TEXTURE_2D,1,s,i.width,i.height);else Q.texImage2D(J.TEXTURE_2D,0,s,i.width,i.height,0,H0,_,null)}else if(O.isDataTexture)if(Q0.length>0){if(W0&&N0)Q.texStorage2D(J.TEXTURE_2D,A0,s,Q0[0].width,Q0[0].height);for(let q0=0,C0=Q0.length;q0<C0;q0++)if(u=Q0[q0],W0){if(z0)Q.texSubImage2D(J.TEXTURE_2D,q0,0,0,u.width,u.height,H0,_,u.data)}else Q.texImage2D(J.TEXTURE_2D,q0,s,u.width,u.height,0,H0,_,u.data);O.generateMipmaps=!1}else if(W0){if(N0)Q.texStorage2D(J.TEXTURE_2D,A0,s,i.width,i.height);if(z0)t0(O,i,H0,_)}else Q.texImage2D(J.TEXTURE_2D,0,s,i.width,i.height,0,H0,_,i.data);else if(O.isCompressedTexture)if(O.isCompressedArrayTexture){if(W0&&N0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,A0,s,Q0[0].width,Q0[0].height,i.depth);for(let q0=0,C0=Q0.length;q0<C0;q0++)if(u=Q0[q0],O.format!==Q7)if(H0!==null)if(W0){if(z0)if(O.layerUpdates.size>0){let x0=b$(u.width,u.height,O.format,O.type);for(let F0 of O.layerUpdates){let J9=u.data.subarray(F0*x0/u.data.BYTES_PER_ELEMENT,(F0+1)*x0/u.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,F0,u.width,u.height,1,H0,J9)}}else Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,u.width,u.height,i.depth,H0,u.data)}else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,q0,s,u.width,u.height,i.depth,0,u.data,0,0);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(z0)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,u.width,u.height,i.depth,H0,_,u.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,q0,s,u.width,u.height,i.depth,0,H0,_,u.data);if(O.layerUpdates.size>0)O.clearLayerUpdates()}else{if(W0&&N0)Q.texStorage2D(J.TEXTURE_2D,A0,s,Q0[0].width,Q0[0].height);for(let q0=0,C0=Q0.length;q0<C0;q0++)if(u=Q0[q0],O.format!==Q7)if(H0!==null)if(W0){if(z0)Q.compressedTexSubImage2D(J.TEXTURE_2D,q0,0,0,u.width,u.height,H0,u.data)}else Q.compressedTexImage2D(J.TEXTURE_2D,q0,s,u.width,u.height,0,u.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(z0)Q.texSubImage2D(J.TEXTURE_2D,q0,0,0,u.width,u.height,H0,_,u.data)}else Q.texImage2D(J.TEXTURE_2D,q0,s,u.width,u.height,0,H0,_,u.data)}else if(O.isDataArrayTexture)if(W0){if(N0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,A0,s,i.width,i.height,i.depth);if(z0)if(O.layerUpdates.size>0){let q0=b$(i.width,i.height,O.format,O.type);for(let C0 of O.layerUpdates){let x0=i.data.subarray(C0*q0/i.data.BYTES_PER_ELEMENT,(C0+1)*q0/i.data.BYTES_PER_ELEMENT);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,C0,i.width,i.height,1,H0,_,x0)}O.clearLayerUpdates()}else Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,i.width,i.height,i.depth,H0,_,i.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,s,i.width,i.height,i.depth,0,H0,_,i.data);else if(O.isData3DTexture)if(W0){if(N0)Q.texStorage3D(J.TEXTURE_3D,A0,s,i.width,i.height,i.depth);if(z0)Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,i.width,i.height,i.depth,H0,_,i.data)}else Q.texImage3D(J.TEXTURE_3D,0,s,i.width,i.height,i.depth,0,H0,_,i.data);else if(O.isFramebufferTexture){if(N0)if(W0)Q.texStorage2D(J.TEXTURE_2D,A0,s,i.width,i.height);else{let{width:q0,height:C0}=i;for(let x0=0;x0<A0;x0++)Q.texImage2D(J.TEXTURE_2D,x0,s,q0,C0,0,H0,_,null),q0>>=1,C0>>=1}}else if(O.isHTMLTexture){if("texElementImage2D"in J){let q0=J.canvas;if(!q0.hasAttribute("layoutsubtree"))q0.setAttribute("layoutsubtree","true");if(i.parentNode!==q0){q0.appendChild(i),E.add(O),q0.onpaint=(C0)=>{let x0=C0.changedElements;for(let F0 of E)if(x0.includes(F0.image))F0.needsUpdate=!0},q0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,i);else{let{RGBA:x0,RGBA:F0,UNSIGNED_BYTE:J9}=J;J.texElementImage2D(J.TEXTURE_2D,0,x0,F0,J9,i)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(Q0.length>0){if(W0&&N0){let q0=I9(Q0[0]);Q.texStorage2D(J.TEXTURE_2D,A0,s,q0.width,q0.height)}for(let q0=0,C0=Q0.length;q0<C0;q0++)if(u=Q0[q0],W0){if(z0)Q.texSubImage2D(J.TEXTURE_2D,q0,0,0,H0,_,u)}else Q.texImage2D(J.TEXTURE_2D,q0,s,H0,_,u);O.generateMipmaps=!1}else if(W0){if(N0){let q0=I9(i);Q.texStorage2D(J.TEXTURE_2D,A0,s,q0.width,q0.height)}if(z0)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,H0,_,i)}else Q.texImage2D(J.TEXTURE_2D,0,s,H0,_,i);if(w(O)&&O.mipmapsAutoUpdate===!0)B(e);if(X0.__version=K0.version,O.onUpdate)O.onUpdate(O)}k.__version=O.version}function H9(k,O,y){if(O.image.length!==6)return;let e=p0(k,O),t=O.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,k.__webglTexture,J.TEXTURE0+y);let K0=Z.get(t);if(t.version!==K0.__version||e===!0){Q.activeTexture(J.TEXTURE0+y);let X0=u0.getPrimaries(u0.workingColorSpace),l=O.colorSpace===r7?null:u0.getPrimaries(O.colorSpace),i=O.colorSpace===r7||X0===l?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,O.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Q.pixelStorei(J.UNPACK_ALIGNMENT,O.unpackAlignment),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,i);let H0=O.isCompressedTexture||O.image[0].isCompressedTexture,_=O.image[0]&&O.image[0].isDataTexture,s=[];for(let F0=0;F0<6;F0++){if(!H0&&!_)s[F0]=A(O.image[F0],!0,W.maxCubemapSize);else s[F0]=_?O.image[F0].image:O.image[F0];s[F0]=b0(O,s[F0])}let u=s[0],Q0=K.convert(O.format,O.colorSpace),W0=K.convert(O.type),N0=P(O.internalFormat,Q0,W0,O.normalized,O.colorSpace),z0=O.isVideoTexture!==!0,A0=K0.__version===void 0||e===!0,q0=t.dataReady,C0=V(O,u);a0(J.TEXTURE_CUBE_MAP,O);let x0;if(O.isDepthTexture){if(N0=D(O.format===x7,O.type),A0)if(z0)Q.texStorage2D(J.TEXTURE_CUBE_MAP,1,N0,u.width,u.height);else for(let F0=0;F0<6;F0++)Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,N0,u.width,u.height,0,Q0,W0,null)}else if(H0){if(z0&&A0)Q.texStorage2D(J.TEXTURE_CUBE_MAP,C0,N0,u.width,u.height);for(let F0=0;F0<6;F0++){x0=s[F0].mipmaps;for(let J9=0;J9<x0.length;J9++){let R9=x0[J9];if(O.format!==Q7)if(Q0!==null)if(z0){if(q0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,J9,0,0,R9.width,R9.height,Q0,R9.data)}else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,J9,N0,R9.width,R9.height,0,R9.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(z0){if(q0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,J9,0,0,R9.width,R9.height,Q0,W0,R9.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,J9,N0,R9.width,R9.height,0,Q0,W0,R9.data)}}}else{if(x0=O.mipmaps,z0&&A0){if(x0.length>0)C0++;let F0=I9(s[0]);Q.texStorage2D(J.TEXTURE_CUBE_MAP,C0,N0,F0.width,F0.height)}for(let F0=0;F0<6;F0++)if(_){if(z0){if(q0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,s[F0].width,s[F0].height,Q0,W0,s[F0].data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,N0,s[F0].width,s[F0].height,0,Q0,W0,s[F0].data);for(let J9=0;J9<x0.length;J9++){let F7=x0[J9].image[F0].image;if(z0){if(q0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,J9+1,0,0,F7.width,F7.height,Q0,W0,F7.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,J9+1,N0,F7.width,F7.height,0,Q0,W0,F7.data)}}else{if(z0){if(q0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,Q0,W0,s[F0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,N0,Q0,W0,s[F0]);for(let J9=0;J9<x0.length;J9++){let R9=x0[J9];if(z0){if(q0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,J9+1,0,0,Q0,W0,R9.image[F0])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,J9+1,N0,Q0,W0,R9.image[F0])}}}if(w(O)&&O.mipmapsAutoUpdate===!0)B(J.TEXTURE_CUBE_MAP);if(K0.__version=t.version,O.onUpdate)O.onUpdate(O)}k.__version=O.version}function N9(k,O,y,e,t,K0){let X0=K.convert(y.format,y.colorSpace),l=K.convert(y.type),i=P(y.internalFormat,X0,l,y.normalized,y.colorSpace),H0=Z.get(O),_=Z.get(y);if(_.__renderTarget=O,!H0.__hasExternalTextures){let s=Math.max(1,O.width>>K0),u=Math.max(1,O.height>>K0);if(t===J.TEXTURE_3D||t===J.TEXTURE_2D_ARRAY)Q.texImage3D(t,K0,i,s,u,O.depth,0,X0,l,null);else Q.texImage2D(t,K0,i,s,u,0,X0,l,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,k),W9(O))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,t,_.__webglTexture,0,E0(O));else if(t===J.TEXTURE_2D||t>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&t<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,t,_.__webglTexture,K0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function k9(k,O,y){if(J.bindRenderbuffer(J.RENDERBUFFER,k),O.depthBuffer){let e=O.depthTexture,t=e&&e.isDepthTexture?e.type:null,K0=D(O.stencilBuffer,t),X0=O.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(W9(O))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(O),K0,O.width,O.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(O),K0,O.width,O.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,O.width,O.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,k)}else{let e=O.textures;for(let t=0;t<e.length;t++){let K0=e[t],X0=K.convert(K0.format,K0.colorSpace),l=K.convert(K0.type),i=P(K0.internalFormat,X0,l,K0.normalized,K0.colorSpace);if(W9(O))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(O),i,O.width,O.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(O),i,O.width,O.height);else J.renderbufferStorage(J.RENDERBUFFER,i,O.width,O.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function f9(k,O,y){let e=O.isWebGLCubeRenderTarget===!0;if(Q.bindFramebuffer(J.FRAMEBUFFER,k),!(O.depthTexture&&O.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let t=Z.get(O.depthTexture);t.__renderTarget=O;let K0=e?O.depthTexture.image[0]:O.depthTexture.image;if(!t.__webglTexture||K0.width!==O.width||K0.height!==O.height)K0.width=O.width,K0.height=O.height,O.depthTexture.needsUpdate=!0;if(e)R0(O.depthTexture,0);else O0(O.depthTexture,0);let X0=t.__webglTexture,l=E0(O),i=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,H0=O.depthTexture.format===x7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(O.depthTexture.format===w6)if(W9(O))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,i,X0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,i,X0,0);else if(O.depthTexture.format===x7)if(W9(O))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,i,X0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,i,X0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function v9(k){let O=Z.get(k),y=k.isWebGLCubeRenderTarget===!0;if(O.__boundDepthTexture!==k.depthTexture){let e=k.depthTexture;if(O.__depthDisposeCallback)O.__depthDisposeCallback();if(e){let t=()=>{delete O.__boundDepthTexture,delete O.__depthDisposeCallback,e.removeEventListener("dispose",t)};e.addEventListener("dispose",t),O.__depthDisposeCallback=t}O.__boundDepthTexture=e}if(k.depthTexture&&!O.__autoAllocateDepthBuffer)if(y)for(let e=0;e<6;e++)f9(O.__webglFramebuffer[e],k,e);else if(k.texture.mipmaps.length>0)f9(O.__webglFramebuffer[0],k,0);else f9(O.__webglFramebuffer,k,0);else if(y){O.__webglDepthbuffer=[];for(let e=0;e<6;e++)if(Q.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer[e]),O.__webglDepthbuffer[e]===void 0)O.__webglDepthbuffer[e]=J.createRenderbuffer(),k9(O.__webglDepthbuffer[e],k,!1);else{let t=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,K0=O.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,K0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,K0)}}else{if(k.texture.mipmaps.length>0)Q.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer[0]);else Q.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer);if(O.__webglDepthbuffer===void 0)O.__webglDepthbuffer=J.createRenderbuffer(),k9(O.__webglDepthbuffer,k,!1);else{let t=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,K0=O.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,K0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,K0)}}Q.bindFramebuffer(J.FRAMEBUFFER,null)}function s9(k,O,y){let e=Z.get(k);if(O!==void 0)N9(e.__webglFramebuffer,k,k.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)v9(k)}function f(k){let O=k.texture,y=Z.get(k),e=Z.get(O);k.addEventListener("dispose",g),j(k);let t=k.textures,K0=k.isWebGLCubeRenderTarget===!0,X0=t.length>1;if(!X0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=O.version,H.memory.textures++}if(K0){y.__webglFramebuffer=[];for(let l=0;l<6;l++)if(O.mipmaps.length>0){y.__webglFramebuffer[l]=[];for(let i=0;i<O.mipmaps.length;i++)y.__webglFramebuffer[l][i]=J.createFramebuffer()}else y.__webglFramebuffer[l]=J.createFramebuffer()}else{if(O.mipmaps.length>0){y.__webglFramebuffer=[];for(let l=0;l<O.mipmaps.length;l++)y.__webglFramebuffer[l]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(X0)for(let l=0,i=t.length;l<i;l++){let H0=Z.get(t[l]);if(H0.__webglTexture===void 0)H0.__webglTexture=J.createTexture(),H.memory.textures++}if(k.samples>0&&W9(k)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let l=0;l<t.length;l++){let i=t[l];y.__webglColorRenderbuffer[l]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[l]);let H0=K.convert(i.format,i.colorSpace),_=K.convert(i.type),s=P(i.internalFormat,H0,_,i.normalized,i.colorSpace,k.isXRRenderTarget===!0),u=E0(k);J.renderbufferStorageMultisample(J.RENDERBUFFER,u,s,k.width,k.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+l,J.RENDERBUFFER,y.__webglColorRenderbuffer[l])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),k.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),k9(y.__webglDepthRenderbuffer,k,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(K0){Q.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),a0(J.TEXTURE_CUBE_MAP,O);for(let l=0;l<6;l++)if(O.mipmaps.length>0)for(let i=0;i<O.mipmaps.length;i++)N9(y.__webglFramebuffer[l][i],k,O,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,i);else N9(y.__webglFramebuffer[l],k,O,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,0);if(w(O))B(J.TEXTURE_CUBE_MAP);else if(O.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,O.mipmaps.length-1);Q.unbindTexture()}else if(X0){for(let l=0,i=t.length;l<i;l++){let H0=t[l],_=Z.get(H0),s=J.TEXTURE_2D;if(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)s=k.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(s,_.__webglTexture),a0(s,H0),N9(y.__webglFramebuffer,k,H0,J.COLOR_ATTACHMENT0+l,s,0),w(H0))B(s)}Q.unbindTexture()}else{let l=J.TEXTURE_2D;if(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)l=k.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(l,e.__webglTexture),a0(l,O),O.mipmaps.length>0)for(let i=0;i<O.mipmaps.length;i++)N9(y.__webglFramebuffer[i],k,O,J.COLOR_ATTACHMENT0,l,i);else N9(y.__webglFramebuffer,k,O,J.COLOR_ATTACHMENT0,l,0);if(w(O))B(l);else if(O.mipmaps.length>0)J.texParameteri(l,J.TEXTURE_MAX_LEVEL,O.mipmaps.length-1);Q.unbindTexture()}if(k.depthBuffer)v9(k)}function i9(k){let O=k.textures;for(let y=0,e=O.length;y<e;y++){let t=O[y];if(w(t)&&t.mipmapsAutoUpdate===!0){let K0=z(k),X0=Z.get(t).__webglTexture;Q.bindTexture(K0,X0),B(K0),Q.unbindTexture()}}}let e0=[];function D9(k){if(k.samples>0){if(W9(k)===!1){let{textures:O,width:y,height:e}=k,t=J.COLOR_BUFFER_BIT,K0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=Z.get(k),l=O.length>1;if(l)for(let H0=0;H0<O.length;H0++)Q.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,null,0);if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,X0.__webglMultisampledFramebuffer),k.texture.mipmaps.length>0)Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer[0]);else Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer);for(let H0=0;H0<O.length;H0++){if(k.resolveDepthBuffer){if(k.depthBuffer)t|=J.DEPTH_BUFFER_BIT;if(k.stencilBuffer&&k.resolveStencilBuffer)t|=J.STENCIL_BUFFER_BIT}if(l){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let _=Z.get(O[H0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,_,0)}if(J.blitFramebuffer(0,0,y,e,0,0,y,e,t,J.NEAREST),X===!0){if(e0.length=0,e0.push(J.COLOR_ATTACHMENT0+H0),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1)e0.push(K0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,e0)}}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),l)for(let H0=0;H0<O.length;H0++){Q.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let _=Z.get(O[H0]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,_,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&X){let O=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[O])}}}function E0(k){return Math.min(W.maxSamples,k.samples)}function W9(k){let O=Z.get(k);return k.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&O.__useRenderToTexture!==!1}function _0(k){let O=H.render.frame;if(N.get(k)!==O)N.set(k,O),k.update()}function b0(k,O){let{colorSpace:y,format:e,type:t}=k;if(k.isCompressedTexture===!0||k.isVideoTexture===!0)return O;if(y!==K$&&y!==r7)if(u0.getTransfer(y)===Z9){if(e!==Q7||t!==$7)S0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else f0("WebGLTextures: Unsupported texture color space:",y);return O}function I9(k){if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement)U.width=k.naturalWidth||k.width,U.height=k.naturalHeight||k.height;else if(typeof VideoFrame<"u"&&k instanceof VideoFrame)U.width=k.displayWidth,U.height=k.displayHeight;else U.width=k.width,U.height=k.height;return U}this.allocateTextureUnit=n,this.resetTextureUnits=a,this.getTextureUnits=J0,this.setTextureUnits=L0,this.setTexture2D=O0,this.setTexture2DArray=w0,this.setTexture3D=P0,this.setTextureCube=R0,this.rebindTextures=s9,this.setupRenderTarget=f,this.updateRenderTargetMipmap=i9,this.updateMultisampleRenderTarget=D9,this.setupDepthRenderbuffer=v9,this.setupFrameBufferTexture=N9,this.useMultisampledRTT=W9,this.dispose=c}function MN(J,$){function Q(Z,W=r7){let K,H=u0.getTransfer(W);if(Z===$7)return J.UNSIGNED_BYTE;if(Z===IJ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===AJ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===SZ)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===jZ)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===_Z)return J.BYTE;if(Z===TZ)return J.SHORT;if(Z===r6)return J.UNSIGNED_SHORT;if(Z===kJ)return J.INT;if(Z===h7)return J.UNSIGNED_INT;if(Z===I7)return J.FLOAT;if(Z===p9)return J.HALF_FLOAT;if(Z===fZ)return J.ALPHA;if(Z===vZ)return J.RGB;if(Z===Q7)return J.RGBA;if(Z===w6)return J.DEPTH_COMPONENT;if(Z===x7)return J.DEPTH_STENCIL;if(Z===yZ)return J.RED;if(Z===zJ)return J.RED_INTEGER;if(Z===a7)return J.RG;if(Z===wJ)return J.RG_INTEGER;if(Z===CJ)return J.RGBA_INTEGER;if(Z===$5||Z===Q5||Z===Z5||Z===W5)if(H===Z9)if(K=$.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===$5)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===Q5)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===Z5)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===W5)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=$.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===$5)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===Q5)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===Z5)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===W5)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===PJ||Z===_J||Z===TJ||Z===SJ)if(K=$.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===PJ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===_J)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===TJ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===SJ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===jJ||Z===fJ||Z===vJ||Z===yJ||Z===bJ||Z===K5||Z===hJ)if(K=$.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===jJ||Z===fJ)return H===Z9?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===vJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===yJ)return K.COMPRESSED_R11_EAC;if(Z===bJ)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===K5)return K.COMPRESSED_RG11_EAC;if(Z===hJ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===xJ||Z===gJ||Z===pJ||Z===mJ||Z===lJ||Z===dJ||Z===uJ||Z===cJ||Z===nJ||Z===sJ||Z===iJ||Z===oJ||Z===aJ||Z===rJ)if(K=$.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===xJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===gJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===pJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===mJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===lJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===dJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===uJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===cJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===nJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===sJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===iJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===oJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===aJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===rJ)return H===Z9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===tJ||Z===eJ||Z===J$)if(K=$.get("EXT_texture_compression_bptc"),K!==null){if(Z===tJ)return H===Z9?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===eJ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===J$)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===$$||Z===Q$||Z===H5||Z===Z$)if(K=$.get("EXT_texture_compression_rgtc"),K!==null){if(Z===$$)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===Q$)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===H5)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===Z$)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===o7)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:Q}}var LN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$){if(this.texture===null){let Q=new F5(J.texture);if(J.depthNear!==$.depthNear||J.depthFar!==$.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Q}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,Q=new S9({vertexShader:LN,fragmentShader:VN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new _9(new c9(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hW extends A7{constructor(J,$){super();let Q=this,Z=null,W=1,K=null,H="local-floor",Y=1,X=null,U=null,N=null,E=null,G=null,R=null,L=typeof XRWebGLBinding<"u",I=new bW,q={},F=$.getContextAttributes(),A=null,w=null,B=[],z=[],P=new m0,D=null,V=null,j=new l9;j.viewport=new U9;let x=new l9;x.viewport=new U9;let S=[j,x],g=new f$,r=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let $0=B[n];if($0===void 0)$0=new $8,B[n]=$0;return $0.getTargetRaySpace()},this.getControllerGrip=function(n){let $0=B[n];if($0===void 0)$0=new $8,B[n]=$0;return $0.getGripSpace()},this.getHand=function(n){let $0=B[n];if($0===void 0)$0=new $8,B[n]=$0;return $0.getHandSpace()};function c(n){let $0=z.indexOf(n.inputSource);if($0===-1)return;let O0=B[$0];if(O0!==void 0)O0.update(n.inputSource,n.frame,X||K),O0.dispatchEvent({type:n.type,data:n.inputSource})}function o(){Z.removeEventListener("select",c),Z.removeEventListener("selectstart",c),Z.removeEventListener("selectend",c),Z.removeEventListener("squeeze",c),Z.removeEventListener("squeezestart",c),Z.removeEventListener("squeezeend",c),Z.removeEventListener("end",o),Z.removeEventListener("inputsourceschange",v);for(let n=0;n<B.length;n++){let $0=z[n];if($0===null)continue;z[n]=null,B[n].disconnect($0)}r=null,C=null,I.reset();for(let n in q)delete q[n];if(J.setRenderTarget(A),G=null,E=null,N=null,Z=null,w=null,L0.stop(),Q.isPresenting=!1,J.setPixelRatio(D),J.setSize(P.width,P.height,!1),V!==null){let n=V.camera;n.fov=V.fov,n.zoom=V.zoom,n.updateProjectionMatrix(),V=null}Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(W=n,Q.isPresenting===!0)S0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(H=n,Q.isPresenting===!0)S0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(n){X=n},this.getBaseLayer=function(){return E!==null?E:G},this.getBinding=function(){if(N===null&&L)N=new XRWebGLBinding(Z,$);return N},this.getFrame=function(){return R},this.getSession=function(){return Z},this.setSession=async function(n){if(Z=n,Z!==null){if(A=J.getRenderTarget(),Z.addEventListener("select",c),Z.addEventListener("selectstart",c),Z.addEventListener("selectend",c),Z.addEventListener("squeeze",c),Z.addEventListener("squeezestart",c),Z.addEventListener("squeezeend",c),Z.addEventListener("end",o),Z.addEventListener("inputsourceschange",v),F.xrCompatible!==!0)await $.makeXRCompatible();if(D=J.getPixelRatio(),J.getSize(P),!(L&&("createProjectionLayer"in XRWebGLBinding.prototype))){let O0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};G=new XRWebGLLayer(Z,$,O0),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),w=new b9(G.framebufferWidth,G.framebufferHeight,{format:Q7,type:$7,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let O0=null,w0=null,P0=null;if(F.depth)P0=F.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,O0=F.stencil?x7:w6,w0=F.stencil?o7:h7;let R0={colorFormat:$.RGBA8,depthFormat:P0,scaleFactor:W};N=this.getBinding(),E=N.createProjectionLayer(R0),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),w=new b9(E.textureWidth,E.textureHeight,{format:Q7,type:$7,depthTexture:new g7(E.textureWidth,E.textureHeight,w0,void 0,void 0,void 0,void 0,void 0,void 0,O0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await Z.requestReferenceSpace(H),L0.setContext(Z),L0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function v(n){for(let $0=0;$0<n.removed.length;$0++){let O0=n.removed[$0],w0=z.indexOf(O0);if(w0>=0)z[w0]=null,B[w0].disconnect(O0)}for(let $0=0;$0<n.added.length;$0++){let O0=n.added[$0],w0=z.indexOf(O0);if(w0===-1){for(let R0=0;R0<B.length;R0++)if(R0>=z.length){z.push(O0),w0=R0;break}else if(z[R0]===null){z[R0]=O0,w0=R0;break}if(w0===-1)break}let P0=B[w0];if(P0)P0.connect(O0)}}function Z0(n,$0){if($0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices($0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(Z===null)return;let{near:$0,far:O0}=n;if(I.texture!==null){if(I.depthNear>0)$0=I.depthNear;if(I.depthFar>0)O0=I.depthFar}if(g.near=x.near=j.near=$0,g.far=x.far=j.far=O0,r!==g.near||C!==g.far)Z.updateRenderState({depthNear:g.near,depthFar:g.far}),r=g.near,C=g.far;g.layers.mask=n.layers.mask|6,j.layers.mask=g.layers.mask&-5,x.layers.mask=g.layers.mask&-3;let w0=n.parent,P0=g.cameras;Z0(g,w0);for(let R0=0;R0<P0.length;R0++)Z0(P0[R0],w0);if(g.projectionMatrix.copy(j.projectionMatrix),g.projectionMatrixInverse.copy(j.projectionMatrixInverse),V===null&&n.isPerspectiveCamera)V={camera:n,fov:n.fov,zoom:n.zoom};d(n,g,w0)};function d(n,$0,O0){if(O0===null)n.matrix.copy($0.matrixWorld);else n.matrix.copy(O0.matrixWorld),n.matrix.invert(),n.matrix.multiply($0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy($0.projectionMatrix),n.projectionMatrixInverse.copy($0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=o8*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return g},this.getFoveation=function(){if(E===null&&G===null)return;return Y},this.setFoveation=function(n){if(Y=n,E!==null)E.fixedFoveation=n;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=n},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(g)},this.getCameraTexture=function(n){return q[n]};let a=null;function J0(n,$0){if(U=$0.getViewerPose(X||K),R=$0,U!==null){let O0=U.views;if(G!==null)J.setRenderTargetFramebuffer(w,G.framebuffer),J.setRenderTarget(w);let w0=!1;if(O0.length!==g.cameras.length)g.cameras.length=0,w0=!0;for(let j0=0;j0<O0.length;j0++){let v0=O0[j0],a0=null;if(G!==null)a0=G.getViewport(v0);else{let $9=N.getViewSubImage(E,v0);if(a0=$9.viewport,j0===0)J.setRenderTargetTextures(w,$9.colorTexture,$9.depthStencilTexture),J.setRenderTarget(w)}let p0=S[j0];if(p0===void 0)p0=new l9,p0.layers.enable(j0),p0.viewport=new U9,S[j0]=p0;if(p0.matrix.fromArray(v0.transform.matrix),p0.matrix.decompose(p0.position,p0.quaternion,p0.scale),p0.projectionMatrix.fromArray(v0.projectionMatrix),p0.projectionMatrixInverse.copy(p0.projectionMatrix).invert(),p0.viewport.set(a0.x,a0.y,a0.width,a0.height),j0===0)g.matrix.copy(p0.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale);if(w0===!0)g.cameras.push(p0)}let P0=Z.enabledFeatures;if(P0&&P0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&L){N=Q.getBinding();let j0=N.getDepthInformation(O0[0]);if(j0&&j0.isValid&&j0.texture)I.init(j0,Z.renderState)}if(P0&&P0.includes("camera-access")&&L){J.state.unbindTexture(),N=Q.getBinding();for(let j0=0;j0<O0.length;j0++){let v0=O0[j0].camera;if(v0){let a0=q[v0];if(!a0)a0=new F5,q[v0]=a0;let p0=N.getCameraImage(v0);a0.sourceTexture=p0}}}}for(let O0=0;O0<B.length;O0++){let w0=z[O0],P0=B[O0];if(w0!==null&&P0!==void 0)P0.update(w0,$0,X||K)}if(a)a(n,$0);if($0.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:$0});R=null}let L0=new BW;L0.setAnimationLoop(J0),this.setAnimationLoop=function(n){a=n},this.dispose=function(){}}}var BN=new X9,xW=new y0;xW.set(-1,0,0,0,1,0,0,0,1);function kN(J,$){function Q(q,F){if(q.matrixAutoUpdate===!0)q.updateMatrix();F.value.copy(q.matrix)}function Z(q,F){if(F.color.getRGB(q.fogColor.value,L$(J)),F.isFog)q.fogNear.value=F.near,q.fogFar.value=F.far;else if(F.isFogExp2)q.fogDensity.value=F.density}function W(q,F,A,w,B){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)K(q,F);else if(F.isMeshLambertMaterial){if(K(q,F),F.envMap)q.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)K(q,F),E(q,F);else if(F.isMeshPhongMaterial){if(K(q,F),N(q,F),F.envMap)q.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(K(q,F),G(q,F),F.isMeshPhysicalMaterial)R(q,F,B)}else if(F.isMeshMatcapMaterial)K(q,F),L(q,F);else if(F.isMeshDepthMaterial)K(q,F);else if(F.isMeshDistanceMaterial)K(q,F),I(q,F);else if(F.isMeshNormalMaterial)K(q,F);else if(F.isLineBasicMaterial){if(H(q,F),F.isLineDashedMaterial)Y(q,F)}else if(F.isPointsMaterial)X(q,F,A,w);else if(F.isSpriteMaterial)U(q,F);else if(F.isShadowMaterial)q.color.value.copy(F.color),q.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function K(q,F){if(q.opacity.value=F.opacity,F.color)q.diffuse.value.copy(F.color);if(F.emissive)q.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)q.map.value=F.map,Q(F.map,q.mapTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,Q(F.alphaMap,q.alphaMapTransform);if(F.bumpMap){if(q.bumpMap.value=F.bumpMap,Q(F.bumpMap,q.bumpMapTransform),q.bumpScale.value=F.bumpScale,F.side===y9)q.bumpScale.value*=-1}if(F.normalMap){if(q.normalMap.value=F.normalMap,Q(F.normalMap,q.normalMapTransform),q.normalScale.value.copy(F.normalScale),F.side===y9)q.normalScale.value.negate()}if(F.displacementMap)q.displacementMap.value=F.displacementMap,Q(F.displacementMap,q.displacementMapTransform),q.displacementScale.value=F.displacementScale,q.displacementBias.value=F.displacementBias;if(F.emissiveMap)q.emissiveMap.value=F.emissiveMap,Q(F.emissiveMap,q.emissiveMapTransform);if(F.specularMap)q.specularMap.value=F.specularMap,Q(F.specularMap,q.specularMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest;let A=$.get(F),w=A.envMap,B=A.envMapRotation;if(w){if(q.envMap.value=w,q.envMapRotation.value.setFromMatrix4(BN.makeRotationFromEuler(B)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)q.envMapRotation.value.premultiply(xW);q.reflectivity.value=F.reflectivity,q.ior.value=F.ior,q.refractionRatio.value=F.refractionRatio}if(F.lightMap)q.lightMap.value=F.lightMap,q.lightMapIntensity.value=F.lightMapIntensity,Q(F.lightMap,q.lightMapTransform);if(F.aoMap)q.aoMap.value=F.aoMap,q.aoMapIntensity.value=F.aoMapIntensity,Q(F.aoMap,q.aoMapTransform)}function H(q,F){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,F.map)q.map.value=F.map,Q(F.map,q.mapTransform)}function Y(q,F){q.dashSize.value=F.dashSize,q.totalSize.value=F.dashSize+F.gapSize,q.scale.value=F.scale}function X(q,F,A,w){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,q.size.value=F.size*A,q.scale.value=w*0.5,F.map)q.map.value=F.map,Q(F.map,q.uvTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,Q(F.alphaMap,q.alphaMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest}function U(q,F){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,q.rotation.value=F.rotation,F.map)q.map.value=F.map,Q(F.map,q.mapTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,Q(F.alphaMap,q.alphaMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest}function N(q,F){q.specular.value.copy(F.specular),q.shininess.value=Math.max(F.shininess,0.0001)}function E(q,F){if(F.gradientMap)q.gradientMap.value=F.gradientMap}function G(q,F){if(q.metalness.value=F.metalness,F.metalnessMap)q.metalnessMap.value=F.metalnessMap,Q(F.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=F.roughness,F.roughnessMap)q.roughnessMap.value=F.roughnessMap,Q(F.roughnessMap,q.roughnessMapTransform);if(F.envMap)q.envMapIntensity.value=F.envMapIntensity}function R(q,F,A){if(q.ior.value=F.ior,F.diffuseRoughness>0){if(q.diffuseRoughness.value=F.diffuseRoughness,F.diffuseRoughnessMap)q.diffuseRoughnessMap.value=F.diffuseRoughnessMap,Q(F.diffuseRoughnessMap,q.diffuseRoughnessMapTransform)}if(F.sheen>0){if(q.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),q.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)q.sheenColorMap.value=F.sheenColorMap,Q(F.sheenColorMap,q.sheenColorMapTransform);if(F.sheenRoughnessMap)q.sheenRoughnessMap.value=F.sheenRoughnessMap,Q(F.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(q.clearcoat.value=F.clearcoat,q.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)q.clearcoatMap.value=F.clearcoatMap,Q(F.clearcoatMap,q.clearcoatMapTransform);if(F.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,Q(F.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(q.clearcoatNormalMap.value=F.clearcoatNormalMap,Q(F.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===y9)q.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)q.dispersion.value=F.dispersion;if(F.retroreflectivity>0)q.retroreflectivity.value=F.retroreflectivity;if(F.iridescence>0){if(q.iridescence.value=F.iridescence,q.iridescenceIOR.value=F.iridescenceIOR,q.iridescenceThicknessMinimum.value=F.iridescenceThicknessMinimum,q.iridescenceThicknessMaximum.value=F.iridescenceThicknessMaximum,F.iridescenceMap)q.iridescenceMap.value=F.iridescenceMap,Q(F.iridescenceMap,q.iridescenceMapTransform);if(F.iridescenceThicknessMap)q.iridescenceThicknessMap.value=F.iridescenceThicknessMap,Q(F.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(F.transmission>0){if(q.transmission.value=F.transmission,q.transmissionSamplerMap.value=A.texture,q.transmissionSamplerSize.value.set(A.width,A.height),F.transmissionMap)q.transmissionMap.value=F.transmissionMap,Q(F.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=F.thickness,F.thicknessMap)q.thicknessMap.value=F.thicknessMap,Q(F.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=F.attenuationDistance,q.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(q.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)q.anisotropyMap.value=F.anisotropyMap,Q(F.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=F.specularIntensity,q.specularColor.value.copy(F.specularColor),F.specularColorMap)q.specularColorMap.value=F.specularColorMap,Q(F.specularColorMap,q.specularColorMapTransform);if(F.specularIntensityMap)q.specularIntensityMap.value=F.specularIntensityMap,Q(F.specularIntensityMap,q.specularIntensityMapTransform)}function L(q,F){if(F.matcap)q.matcap.value=F.matcap}function I(q,F){let A=$.get(F).light;q.referencePosition.value.setFromMatrixPosition(A.matrixWorld),q.nearDistance.value=A.shadow.camera.near,q.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function IN(J,$,Q,Z){let W={},K={};function H(A,w){let B=w.program;Z.uniformBlockBinding(A,B,W[A.id])}function Y(A,w){let B=W[A.id];if(B===void 0)L(A),B=X(A),W[A.id]=B,A.addEventListener("dispose",q);let z=w.program;Z.updateUBOMapping(A,z);let P=$.render.frame;if(K[A.id]!==P)U(A),K[A.id]=P}function X(A){let w=J.createBuffer(),B=A.__size,z=A.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,B,z),J.bindBuffer(J.UNIFORM_BUFFER,null),w}function U(A){let w=W[A.id],B=A.uniforms,z=A.__cache;J.bindBuffer(J.UNIFORM_BUFFER,w);for(let P=0,D=B.length;P<D;P++){let V=B[P];if(Array.isArray(V))for(let j=0,x=V.length;j<x;j++)N(V[j],P,j,z);else N(V,P,0,z)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(A,w,B,z){if(G(A,w,B,z)===!0){let{__offset:P,value:D}=A;if(Array.isArray(D)){let V=0;for(let j=0;j<D.length;j++){let x=D[j],S=I(x,!0);E(x,A.__data,V),V+=S.storage/Float32Array.BYTES_PER_ELEMENT}}else E(D,A.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,P,A.__data)}}function E(A,w,B){if(typeof A==="number"||typeof A==="boolean")w[B]=A;else if(A.isMatrix3)w[B]=A.elements[0],w[B+1]=A.elements[1],w[B+2]=A.elements[2],w[B+3]=0,w[B+4]=A.elements[3],w[B+5]=A.elements[4],w[B+6]=A.elements[5],w[B+7]=0,w[B+8]=A.elements[6],w[B+9]=A.elements[7],w[B+10]=A.elements[8],w[B+11]=0;else if(ArrayBuffer.isView(A))w.set(A.subarray(0,w.length-B),B);else A.toArray(w,B)}function G(A,w,B,z){let P=A.value,D=w+"_"+B;if(Array.isArray(P)){if(z[D]===void 0)z[D]=[];let V=z[D],j=!1;for(let x=0;x<P.length;x++)if(R(P[x],V,x)===!0)j=!0;return j}return R(P,z,D)}function R(A,w,B){if(w[B]===void 0){if(typeof A==="number"||typeof A==="boolean")w[B]=A;else if(ArrayBuffer.isView(A))w[B]=A.slice();else w[B]=A.clone();return!0}else{let z=w[B];if(typeof A==="number"||typeof A==="boolean"){if(z!==A)return w[B]=A,!0}else if(ArrayBuffer.isView(A))return!0;else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function L(A){let w=A.uniforms,B=0,z=16;for(let D=0,V=w.length;D<V;D++){let j=Array.isArray(w[D])?w[D]:[w[D]];for(let x=0,S=j.length;x<S;x++){let g=j[x],r=Array.isArray(g.value)?g.value:[g.value],C=Array.isArray(w[D])||Array.isArray(g.value),c=B;for(let v=0,Z0=r.length;v<Z0;v++){let d=r[v],a=I(d,C),J0=B%z,L0=J0%a.boundary,n=J0+L0;if(B+=L0,n!==0&&z-n<a.storage)B+=z-n;if(v===0)c=B;B+=a.storage}let o=g.type==="int"?Int32Array:g.type==="uint"?Uint32Array:Float32Array;g.__data=new o((B-c)/Float32Array.BYTES_PER_ELEMENT),g.__offset=c}}let P=B%z;if(P>0)B+=z-P;return A.__size=B,A.__cache={},this}function I(A,w){let B={boundary:0,storage:0};if(typeof A==="number"||typeof A==="boolean")B.boundary=4,B.storage=4;else if(A.isVector2)B.boundary=8,B.storage=8;else if(A.isVector3||A.isColor)B.boundary=16,B.storage=12;else if(A.isVector4)B.boundary=16,B.storage=16;else if(A.isMatrix3)B.boundary=16,B.storage=48;else if(A.isMatrix4)B.boundary=16,B.storage=64;else if(A.isTexture)S0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(A))B.boundary=16,B.storage=A.byteLength;else S0("WebGLRenderer: Unsupported uniform value type.",A);if(w===!0)B.boundary=16,B.storage=Math.ceil(B.storage/16)*16;return B}function q(A){let w=A.target;w.removeEventListener("dispose",q),J.deleteBuffer(W[w.id]),delete W[w.id],delete K[w.id]}function F(){for(let A in W)J.deleteBuffer(W[A]);W={},K={}}return{bind:H,update:Y,dispose:F}}var AN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),U7=null;function zN(){if(U7===null)U7=new Z8(AN,16,16,a7,p9),U7.name="DFG_LUT",U7.minFilter=P9,U7.magFilter=P9,U7.wrapS=e8,U7.wrapT=e8,U7.generateMipmaps=!1,U7.needsUpdate=!0;return U7}class p${constructor(J={}){let{canvas:$=dZ(),context:Q=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:E=!1,outputBufferType:G=$7}=J;this.isWebGLRenderer=!0;let R;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=Q.getContextAttributes().alpha}else R=K;let L=G,I=new Set([CJ,wJ,zJ]),q=new Set([$7,h7,r6,o7,IJ,AJ]),F=new Uint32Array(4),A=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},B=null,z=null,P=[],D=[],V=null;this.domElement=$,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Y7,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,x=!1,S=null,g=null,r=null,C=null;this._outputColorSpace=hZ;let c=0,o=0,v=null,Z0=-1,d=null,a=new U9,J0=new U9,L0=null,n=new i0(0),$0=0,O0=$.width,w0=$.height,P0=1,R0=null,s0=null,j0=new U9(0,0,O0,w0),v0=new U9(0,0,O0,w0),a0=!1,p0=new k6,$9=new E5,t0=!1,B9=!1,H9=new X9,N9=new p,k9=new U9,f9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},v9=!1;function s9(){return v===null?P0:1}let f=Q;function i9(M,T){return $.getContext(M,T)}let e0,D9,E0,W9,_0,b0,I9,k,O,y,e,t,K0,X0,l,i,H0,_,s,u,Q0,W0,N0;try{let M={alpha:!0,depth:Z,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${iQ}`);if($.addEventListener("webglcontextlost",q0,!1),$.addEventListener("webglcontextrestored",C0,!1),$.addEventListener("webglcontextcreationerror",x0,!1),f===null){if(f=i9("webgl2",M),f===null)if(i9("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}z0()}catch(M){throw $.removeEventListener("webglcontextlost",q0,!1),$.removeEventListener("webglcontextrestored",C0,!1),$.removeEventListener("webglcontextcreationerror",x0,!1),f0("WebGLRenderer: "+M.message),M}function z0(){if(e0=new bX(f),e0.init(),Q0=new MN(f,e0),D9=new zX(f,e0,J,Q0),E0=new RN(f,e0),D9.reversedDepthBuffer&&E)E0.buffers.depth.setReversed(!0);g=f.createFramebuffer(),r=f.createFramebuffer(),C=f.createFramebuffer(),W9=new gX(f),_0=new QN,b0=new ON(f,e0,E0,_0,D9,Q0,W9),I9=new yX(j),k=new m1(f),W0=new IX(f,k),O=new hX(f,k,W9,W0),y=new mX(f,O,k,W0,W9),_=new pX(f,D9,b0),l=new wX(_0),e=new $N(j,I9,e0,D9,W0,l),t=new kN(j,_0),K0=new WN,X0=new NN(e0),H0=new kX(j,I9,E0,y,R,Y),i=new DN(j,y,D9),N0=new IN(f,W9,D9,E0),s=new AX(f,e0,W9),u=new xX(f,e0,W9),W9.programs=e.programs,j.capabilities=D9,j.extensions=e0,j.properties=_0,j.renderLists=K0,j.shadowMap=i,j.state=E0,j.info=W9}if(L!==$7)V=new dX(L,$.width,$.height,H,Z,W);let A0=new hW(j,f);this.xr=A0,this.getContext=function(){return f},this.getContextAttributes=function(){return f.getContextAttributes()},this.forceContextLoss=function(){let M=e0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=e0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return P0},this.setPixelRatio=function(M){if(M===void 0)return;P0=M,this.setSize(O0,w0,!1)},this.getSize=function(M){return M.set(O0,w0)},this.setSize=function(M,T,m=!0){if(A0.isPresenting){S0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(O0=M,w0=T,$.width=Math.floor(M*P0),$.height=Math.floor(T*P0),m===!0)$.style.width=M+"px",$.style.height=T+"px";if(V!==null)V.setSize($.width,$.height);this.setViewport(0,0,M,T)},this.getDrawingBufferSize=function(M){return M.set(O0*P0,w0*P0).floor()},this.setDrawingBufferSize=function(M,T,m){O0=M,w0=T,P0=m,$.width=Math.floor(M*m),$.height=Math.floor(T*m),this.setViewport(0,0,M,T)},this.setEffects=function(M){if(L===$7){f0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let T=0;T<M.length;T++)if(M[T].isOutputPass===!0){S0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(a)},this.getViewport=function(M){return M.copy(j0)},this.setViewport=function(M,T,m,b){if(M.isVector4)j0.set(M.x,M.y,M.z,M.w);else j0.set(M,T,m,b);E0.viewport(a.copy(j0).multiplyScalar(s9()).round())},this.getScissor=function(M){return M.copy(v0)},this.setScissor=function(M,T,m,b){if(M.isVector4)v0.set(M.x,M.y,M.z,M.w);else v0.set(M,T,m,b);E0.scissor(J0.copy(v0).multiplyScalar(s9()).round())},this.getScissorTest=function(){return a0},this.setScissorTest=function(M){E0.setScissorTest(a0=M)},this.setOpaqueSort=function(M){R0=M},this.setTransparentSort=function(M){s0=M},this.getClearColor=function(M){return M.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor(...arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha(...arguments)},this.clear=function(M=!0,T=!0,m=!0){let b=0;if(M){let h=!1;if(v!==null){let U0=v.texture.format;h=I.has(U0)}if(h){let U0=v.texture.type,M0=q.has(U0),Y0=H0.getClearColor(),D0=H0.getClearAlpha(),I0=Y0.r,h0=Y0.g,l0=Y0.b;if(M0)F[0]=I0,F[1]=h0,F[2]=l0,F[3]=D0,f.clearBufferuiv(f.COLOR,0,F);else A[0]=I0,A[1]=h0,A[2]=l0,A[3]=D0,f.clearBufferiv(f.COLOR,0,A)}else b|=f.COLOR_BUFFER_BIT}if(T)b|=f.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)b|=f.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)f.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),S=M},this.dispose=function(){$.removeEventListener("webglcontextlost",q0,!1),$.removeEventListener("webglcontextrestored",C0,!1),$.removeEventListener("webglcontextcreationerror",x0,!1),H0.dispose(),K0.dispose(),X0.dispose(),b0.dispose(),_0.dispose(),I9.dispose(),y.dispose(),O.dispose(),W0.dispose(),N0.dispose(),e.dispose(),A0.dispose(),A0.removeEventListener("sessionstart",n$),A0.removeEventListener("sessionend",s$),m7.stop()};function q0(M){M.preventDefault(),q$("WebGLRenderer: Context Lost."),x=!0}function C0(){q$("WebGLRenderer: Context Restored."),x=!1;let M=W9.autoReset,T=i.enabled,m=i.autoUpdate,b=i.needsUpdate,h=i.type;z0(),W9.autoReset=M,i.enabled=T,i.autoUpdate=m,i.needsUpdate=b,i.type=h}function x0(M){f0("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function F0(M){let T=M.target;T.removeEventListener("dispose",F0),J9(T)}function J9(M){R9(M),_0.remove(M)}function R9(M){let T=_0.get(M).programs;if(T!==void 0){if(T.forEach(function(m){e.releaseProgram(m)}),M.isShaderMaterial)e.releaseShaderCache(M)}}this.renderBufferDirect=function(M,T,m,b,h,U0){if(T===null)T=f9;let M0=h.isMesh&&h.matrixWorld.determinantAffine()<0,Y0=RK(M,T,m,b,h);E0.setMaterial(b,M0);let D0=m.index,I0=1;if(b.wireframe===!0){if(D0=O.getWireframeAttribute(m),D0===void 0)return;I0=2}let h0=m.drawRange,l0=m.attributes.position,V0=h0.start*I0,d0=(h0.start+h0.count)*I0;if(U0!==null)V0=Math.max(V0,U0.start*I0),d0=Math.min(d0,(U0.start+U0.count)*I0);if(D0!==null)V0=Math.max(V0,0),d0=Math.min(d0,D0.count);else if(l0!==void 0&&l0!==null)V0=Math.max(V0,0),d0=Math.min(d0,l0.count);let E9=d0-V0;if(E9<0||E9===1/0)return;W0.setup(h,b,Y0,m,D0);let K9,Q9=s;if(D0!==null)K9=k.get(D0),Q9=u,Q9.setIndex(K9);if(h.isMesh)if(b.wireframe===!0)E0.setLineWidth(b.wireframeLinewidth*s9()),Q9.setMode(f.LINES);else Q9.setMode(f.TRIANGLES);else if(h.isLine){let A9=b.linewidth;if(A9===void 0)A9=1;if(E0.setLineWidth(A9*s9()),h.isLineSegments)Q9.setMode(f.LINES);else if(h.isLineLoop)Q9.setMode(f.LINE_LOOP);else Q9.setMode(f.LINE_STRIP)}else if(h.isPoints)Q9.setMode(f.POINTS);else if(h.isSprite)Q9.setMode(f.TRIANGLES);if(h.isBatchedMesh)if(!e0.get("WEBGL_multi_draw")){let{_multiDrawStarts:A9,_multiDrawCounts:B0,_multiDrawCount:j9}=h,o0=D0?k.get(D0).bytesPerElement:1,l7=_0.get(b).currentProgram.getUniforms();for(let z9=0;z9<j9;z9++)l7.setValue(f,"_gl_DrawID",z9),Q9.render(A9[z9]/o0,B0[z9])}else Q9.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)Q9.renderInstances(V0,E9,h.count);else if(m.isInstancedBufferGeometry){let A9=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,B0=Math.min(m.instanceCount,A9);Q9.renderInstances(V0,E9,B0)}else Q9.render(V0,E9)};function F7(M,T,m,b){if(S!==null&&M.isNodeMaterial)S.setObject(b,M);if(t0===!0)l.setState(M,m,!1);if(M.transparent===!0&&M.side===u9&&M.forceSinglePass===!1)M.side=y9,M.needsUpdate=!0,b6(M,T,b),M.side=A6,M.needsUpdate=!0,b6(M,T,b),M.side=u9;else b6(M,T,b)}this.compile=function(M,T,m=null){if(m===null)m=M;if(S!==null)S.renderStart(M,T,m);if(z=X0.get(m),z.init(T),D.push(z),m.traverseVisible(function(h){if(h.isLight&&h.layers.test(T.layers)){if(z.pushLight(h),h.castShadow)z.pushShadow(h)}}),M!==m)M.traverseVisible(function(h){if(h.isLight&&h.layers.test(T.layers)){if(z.pushLight(h),h.castShadow)z.pushShadow(h)}});if(z.setupLights(),S!==null)S.updateLights(z.state.lightsArray);if(B9=this.localClippingEnabled,t0=l.init(this.clippingPlanes,B9),t0===!0)l.setGlobalState(this.clippingPlanes,T);if(S!==null)i.render(z.state.shadowsArray,m,T);let b=new Set;if(M.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let U0=h.material;if(U0)if(Array.isArray(U0))for(let M0=0;M0<U0.length;M0++){let Y0=U0[M0];F7(Y0,m,T,h),b.add(Y0)}else F7(U0,m,T,h),b.add(U0)}),z=D.pop(),S!==null)S.renderEnd();return b},this.compileAsync=function(M,T,m=null){let b=this.compile(M,T,m);return new Promise((h)=>{function U0(){if(b.forEach(function(M0){let D0=_0.get(M0).currentProgram;if(D0===void 0||D0.isReady())b.delete(M0)}),b.size===0){h(M);return}setTimeout(U0,10)}if(e0.get("KHR_parallel_shader_compile")!==null)U0();else setTimeout(U0,10)})};let _5=null;function FK(M){if(_5)_5(M)}function n$(){m7.stop()}function s$(){m7.start()}let m7=new BW;if(m7.setAnimationLoop(FK),typeof self<"u")m7.setContext(self);this.setAnimationLoop=function(M){_5=M,A0.setAnimationLoop(M),M===null?m7.stop():m7.start()},A0.addEventListener("sessionstart",n$),A0.addEventListener("sessionend",s$),this.render=function(M,T){if(T!==void 0&&T.isCamera!==!0){f0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(S!==null)S.renderStart(M,T);let m=A0.enabled===!0&&A0.isPresenting===!0,b=V!==null&&(v===null||m)&&V.begin(j,v);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(T.parent===null&&T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(A0.enabled===!0&&A0.isPresenting===!0&&(V===null||V.isCompositing()===!1)){if(A0.cameraAutoUpdate===!0)A0.updateCamera(T);T=A0.getCamera()}if(M.isScene===!0)M.onBeforeRender(j,M,T,v);if(z=X0.get(M,D.length),z.init(T),z.state.textureUnits=b0.getTextureUnits(),D.push(z),H9.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera)$9.setFromArrayCamera(T);else p0.setFromProjectionMatrix(H9,G$,T.reversedDepth);if(B9=this.localClippingEnabled,t0=l.init(this.clippingPlanes,B9),B=K0.get(M,P.length),B.init(),P.push(B),this.info.render.frame++,A0.enabled===!0&&A0.isPresenting===!0){let M0=j.xr.getDepthSensingMesh();if(M0!==null)T5(M0,T,-1/0,j.sortObjects)}if(T5(M,T,0,j.sortObjects),B.finish(),S!==null)S.updateLights(z.state.lightsArray);if(j.sortObjects===!0)B.sort(R0,s0);if(v9=A0.enabled===!1||A0.isPresenting===!1||A0.hasDepthSensing()===!1,v9)H0.addToRenderList(B,M);if(this.info.autoReset===!0)this.info.reset();if(t0===!0)l.beginShadows();let h=z.state.shadowsArray;if(i.render(h,M,T),t0===!0)l.endShadows();if((b&&V.hasRenderPass())===!1){let{opaque:M0,transmissive:Y0}=B;if(z.setupLights(),T.isArrayCamera){let D0=T.cameras;if(Y0.length>0)for(let I0=0,h0=D0.length;I0<h0;I0++){let l0=D0[I0];o$(M0,Y0,M,l0)}if(v9)H0.render(M);for(let I0=0,h0=D0.length;I0<h0;I0++){let l0=D0[I0];i$(B,M,l0,l0.viewport)}}else{if(Y0.length>0)o$(M0,Y0,M,T);if(v9)H0.render(M);i$(B,M,T)}}if(v!==null&&o===0)b0.updateMultisampleRenderTarget(v),b0.updateRenderTargetMipmap(v);if(b)V.end(j);if(M.isScene===!0)M.onAfterRender(j,M,T);if(W0.resetDefaultState(),Z0=-1,d=null,D.pop(),D.length>0){if(z=D[D.length-1],b0.setTextureUnits(z.state.textureUnits),t0===!0)l.setGlobalState(j.clippingPlanes,z.state.camera)}else z=null;if(P.pop(),P.length>0)B=P[P.length-1];else B=null;if(S!==null)S.renderEnd()};function T5(M,T,m,b){if(M.visible===!1)return;if(M.layers.test(T.layers)){if(M.isGroup)m=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(T)}else if(M.isLight){if(z.pushLight(M),M.castShadow)z.pushShadow(M)}else if(M.isSprite){let M0=T.isArrayCamera?$9:p0;if(!M.frustumCulled||M.intersectsFrustum(M0)){if(b)k9.setFromMatrixPosition(M.matrixWorld).applyMatrix4(H9);let Y0=y.update(M),D0=M.material;if(D0.visible)B.push(M,Y0,D0,m,k9.z,null,T)}}else if(M.isMesh||M.isLine||M.isPoints){let M0=T.isArrayCamera?$9:p0;if(!M.frustumCulled||M.intersectsFrustum(M0)){let Y0=y.update(M),D0=M.material;if(b){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();k9.copy(M.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();k9.copy(Y0.boundingSphere.center)}k9.applyMatrix4(M.matrixWorld).applyMatrix4(H9)}if(Array.isArray(D0)){let I0=Y0.groups;for(let h0=0,l0=I0.length;h0<l0;h0++){let V0=I0[h0],d0=D0[V0.materialIndex];if(d0&&d0.visible)B.push(M,Y0,d0,m,k9.z,V0,T)}}else if(D0.visible)B.push(M,Y0,D0,m,k9.z,null,T)}}}let U0=M.children;for(let M0=0,Y0=U0.length;M0<Y0;M0++)T5(U0[M0],T,m,b)}function i$(M,T,m,b){let{opaque:h,transmissive:U0,transparent:M0}=M;if(z.setupLightsView(m),t0===!0)l.setGlobalState(j.clippingPlanes,m);if(b)E0.viewport(a.copy(b));if(h.length>0)E8(h,T,m);if(U0.length>0)E8(U0,T,m);if(M0.length>0)E8(M0,T,m);E0.buffers.depth.setTest(!0),E0.buffers.depth.setMask(!0),E0.buffers.color.setMask(!0),E0.setPolygonOffset(!1)}function o$(M,T,m,b){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[b.id]===void 0){let V0=e0.has("EXT_color_buffer_half_float")||e0.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[b.id]=new b9(1,1,{generateMipmaps:!0,type:V0?p9:$7,minFilter:b7,samples:Math.max(4,D9.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:u0.workingColorSpace})}let U0=z.state.transmissionRenderTarget[b.id],M0=b.viewport||a;U0.setSize(M0.z*j.transmissionResolutionScale,M0.w*j.transmissionResolutionScale);let Y0=j.getRenderTarget(),D0=j.getActiveCubeFace(),I0=j.getActiveMipmapLevel();if(j.setRenderTarget(U0),j.getClearColor(n),$0=j.getClearAlpha(),$0<1)j.setClearColor(16777215,0.5);if(j.clear(),v9)H0.render(m);let h0=j.toneMapping;j.toneMapping=Y7;let l0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(z.setupLightsView(b),t0===!0)l.setGlobalState(j.clippingPlanes,b);if(E8(M,m,b),b0.updateMultisampleRenderTarget(U0),b0.updateRenderTargetMipmap(U0),e0.has("WEBGL_multisampled_render_to_texture")===!1){let V0=!1;for(let d0=0,E9=T.length;d0<E9;d0++){let K9=T[d0],{object:Q9,geometry:A9,material:B0,group:j9}=K9;if(B0.side===u9&&Q9.layers.test(b.layers)){let o0=B0.side;B0.side=y9,B0.needsUpdate=!0,a$(Q9,m,b,A9,B0,j9),B0.side=o0,B0.needsUpdate=!0,V0=!0}}if(V0===!0)b0.updateMultisampleRenderTarget(U0),b0.updateRenderTargetMipmap(U0)}if(j.setRenderTarget(Y0,D0,I0),j.setClearColor(n,$0),l0!==void 0)b.viewport=l0;j.toneMapping=h0}function E8(M,T,m){let b=T.isScene===!0?T.overrideMaterial:null;for(let h=0,U0=M.length;h<U0;h++){let M0=M[h],{object:Y0,geometry:D0,group:I0}=M0,h0=M0.material;if(h0.allowOverride===!0&&b!==null)h0=b;if(Y0.layers.test(m.layers))a$(Y0,T,m,D0,h0,I0)}}function a$(M,T,m,b,h,U0){if(S!==null&&h.isNodeMaterial)S.setObject(M,h);if(M.onBeforeRender(j,T,m,b,h,U0),M.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),h.onBeforeRender(j,T,m,b,M,U0),h.transparent===!0&&h.side===u9&&h.forceSinglePass===!1)h.side=y9,h.needsUpdate=!0,j.renderBufferDirect(m,T,b,h,M,U0),h.side=A6,h.needsUpdate=!0,j.renderBufferDirect(m,T,b,h,M,U0),h.side=u9;else j.renderBufferDirect(m,T,b,h,M,U0);M.onAfterRender(j,T,m,b,h,U0)}function r$(M){let T=0;for(let m of M)if(m.texture!==null)T++;return T}function b6(M,T,m){if(T.isScene!==!0)T=f9;let b=_0.get(M),h=z.state.lights,U0=z.state.shadowsArray,M0=h.state.version,Y0=e.getParameters(M,h.state,U0,T,m,z.state.lightProbeGridArray),D0=e.getProgramCacheKey(Y0),I0=b.programs;b.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?T.environment:null,b.fog=T.fog;let h0=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(b.envMap=I9.get(M.envMap||b.environment,h0),b.envMapRotation=b.environment!==null&&M.envMap===null?T.environmentRotation:M.envMapRotation,I0===void 0)M.addEventListener("dispose",F0),I0=new Map,b.programs=I0,b.programVariants=new Map;let l0=I0.get(D0);if(l0!==void 0){if(b.currentProgram===l0&&b.lightsStateVersion===M0)return e$(M,Y0),l0}else{if(Y0.uniforms=e.getUniforms(M),S!==null&&M.isNodeMaterial)S.build(M,m,Y0);M.onBeforeCompile(Y0,j),l0=e.acquireProgram(Y0,D0),I0.set(D0,l0),b.uniforms=Y0.uniforms}let V0=b.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)V0.clippingPlanes=l.uniform;if(e$(M,Y0),b.needsLights=MK(M),b.lightsStateVersion=M0,b.needsLights)V0.ambientLightColor.value=h.state.ambient,V0.lightProbe.value=h.state.probe,V0.sunLights.value=h.state.sun,V0.sunLightShadows.value=h.state.sunShadow,V0.directionalLights.value=h.state.directional,V0.directionalLightShadows.value=h.state.directionalShadow,V0.spotLights.value=h.state.spot,V0.spotLightShadows.value=h.state.spotShadow,V0.rectAreaLights.value=h.state.rectArea,V0.ltc_1.value=h.state.rectAreaLTC1,V0.ltc_2.value=h.state.rectAreaLTC2,V0.pointLights.value=h.state.point,V0.pointLightShadows.value=h.state.pointShadow,V0.hemisphereLights.value=h.state.hemi,V0.sunShadowMatrix.value=h.state.sunShadowMatrix,V0.sunShadowCascade.value=h.state.sunShadowCascade,V0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,V0.spotLightMatrix.value=h.state.spotLightMatrix,V0.spotLightMap.value=h.state.spotLightMap,V0.pointShadowMatrix.value=h.state.pointShadowMatrix;return b.numLightProbeGrids=r$(z.state.lightProbeGridArray),b.currentProgram=l0,b.uniformsList=null,l0}function DK(M,T,m,b,h){let U0=_0.get(M),M0=U0.currentProgram.id+","+b+","+h,Y0=U0.programVariants.get(M0);if(Y0===void 0)Y0=b6(M,T,m),U0.programVariants.set(M0,Y0);else U0.currentProgram=Y0,U0.uniformsList=null,U0.outputColorSpace=b,U0.toneMapping=h;return Y0}function t$(M){if(M.uniformsList===null){let T=M.currentProgram.getUniforms();M.uniformsList=X8.seqWithValue(T.seq,M.uniforms)}return M.uniformsList}function e$(M,T){let m=_0.get(M);m.outputColorSpace=T.outputColorSpace,m.batching=T.batching,m.batchingColor=T.batchingColor,m.instancing=T.instancing,m.instancingColor=T.instancingColor,m.instancingMorph=T.instancingMorph,m.skinning=T.skinning,m.morphTargets=T.morphTargets,m.morphNormals=T.morphNormals,m.morphColors=T.morphColors,m.morphTargetsCount=T.morphTargetsCount,m.numClippingPlanes=T.numClippingPlanes,m.numIntersection=T.numClipIntersection,m.vertexAlphas=T.vertexAlphas,m.vertexTangents=T.vertexTangents,m.toneMapping=T.toneMapping}function RK(M,T,m,b,h){if(T.isScene!==!0)T=f9;b0.resetTextureUnits();let U0=T.fog,M0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?T.environment:null,Y0=v===null?j.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:u0.workingColorSpace,D0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,I0=I9.get(b.envMap||M0,D0),h0=b.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,l0=!!m.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),V0=!!m.morphAttributes.position,d0=!!m.morphAttributes.normal,E9=!!m.morphAttributes.color,K9=Y7;if(b.toneMapped){if(v===null||v.isXRRenderTarget===!0)K9=j.toneMapping}let Q9=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,A9=Q9!==void 0?Q9.length:0,B0=_0.get(b),j9=z.state.lights;if(t0===!0){if(B9===!0||M!==d){let Y9=M===d&&b.id===Z0;l.setState(b,M,Y9)}}let o0=!1,l7=!1;if(b.version===B0.__version){if(B0.needsLights&&B0.lightsStateVersion!==j9.state.version)o0=!0;else if(h.isBatchedMesh&&B0.batching===!1)o0=!0;else if(!h.isBatchedMesh&&B0.batching===!0)o0=!0;else if(h.isBatchedMesh&&B0.batchingColor===!0&&h._colorsTexture===null)o0=!0;else if(h.isBatchedMesh&&B0.batchingColor===!1&&h._colorsTexture!==null)o0=!0;else if(h.isInstancedMesh&&B0.instancing===!1)o0=!0;else if(!h.isInstancedMesh&&B0.instancing===!0)o0=!0;else if(h.isSkinnedMesh&&B0.skinning===!1)o0=!0;else if(!h.isSkinnedMesh&&B0.skinning===!0)o0=!0;else if(h.isInstancedMesh&&B0.instancingColor===!0&&h.instanceColor===null)o0=!0;else if(h.isInstancedMesh&&B0.instancingColor===!1&&h.instanceColor!==null)o0=!0;else if(h.isInstancedMesh&&B0.instancingMorph===!0&&h.morphTexture===null)o0=!0;else if(h.isInstancedMesh&&B0.instancingMorph===!1&&h.morphTexture!==null)o0=!0;else if(B0.envMap!==I0)o0=!0;else if(b.fog===!0&&B0.fog!==U0)o0=!0;else if(B0.numClippingPlanes!==void 0&&(B0.numClippingPlanes!==l.numPlanes||B0.numIntersection!==l.numIntersection))o0=!0;else if(B0.vertexAlphas!==h0)o0=!0;else if(B0.vertexTangents!==l0)o0=!0;else if(B0.morphTargets!==V0)o0=!0;else if(B0.morphNormals!==d0)o0=!0;else if(B0.morphColors!==E9)o0=!0;else if(B0.morphTargetsCount!==A9)o0=!0;else if(B0.numLightProbeGrids!==r$(z.state.lightProbeGridArray))o0=!0;else if(B0.outputColorSpace!==Y0||B0.toneMapping!==K9)l7=!0}else o0=!0,B0.__version=b.version;let z9=B0.currentProgram;if(o0===!0||l7===!0){if(z9=l7===!0?DK(b,T,h,Y0,K9):b6(b,T,h),S&&b.isNodeMaterial)S.onUpdateProgram(b,z9,B0)}let G8=!1,C7=!1,d7=!1,n0=z9.getUniforms(),L9=B0.uniforms;if(E0.useProgram(z9.program))G8=!0,C7=!0,d7=!0;if(b.id!==Z0)Z0=b.id,C7=!0;if(G8||d!==M){if(E0.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();n0.setValue(f,"projectionMatrix",M.projectionMatrix),n0.setValue(f,"viewMatrix",M.matrixWorldInverse);let O9=n0.map.cameraPosition;if(O9!==void 0)O9.setValue(f,N9.setFromMatrixPosition(M.matrixWorld));if(D9.logarithmicDepthBuffer)n0.setValue(f,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)n0.setValue(f,"isOrthographic",M.isOrthographicCamera===!0);if(d!==M)d=M,C7=!0,d7=!0}if(B0.needsLights){if(j9.state.sunShadowMap.length>0)n0.setValue(f,"sunShadowMap",j9.state.sunShadowMap,b0);if(j9.state.directionalShadowMap.length>0)n0.setValue(f,"directionalShadowMap",j9.state.directionalShadowMap,b0);if(j9.state.spotShadowMap.length>0)n0.setValue(f,"spotShadowMap",j9.state.spotShadowMap,b0);if(j9.state.pointShadowMap.length>0)n0.setValue(f,"pointShadowMap",j9.state.pointShadowMap,b0)}if(h.isSkinnedMesh){n0.setOptional(f,h,"bindMatrix"),n0.setOptional(f,h,"bindMatrixInverse");let Y9=h.skeleton;if(Y9){if(Y9.boneTexture===null)Y9.computeBoneTexture();n0.setValue(f,"boneTexture",Y9.boneTexture,b0)}}if(h.isBatchedMesh){if(n0.setOptional(f,h,"batchingTexture"),n0.setValue(f,"batchingTexture",h._matricesTexture,b0),n0.setOptional(f,h,"batchingIdTexture"),n0.setValue(f,"batchingIdTexture",h._indirectTexture,b0),n0.setOptional(f,h,"batchingColorTexture"),h._colorsTexture!==null)n0.setValue(f,"batchingColorTexture",h._colorsTexture,b0)}let o9=m.morphAttributes;if(o9.position!==void 0||o9.normal!==void 0||o9.color!==void 0)_.update(h,m,z9);if(C7||B0.receiveShadow!==h.receiveShadow)B0.receiveShadow=h.receiveShadow,n0.setValue(f,"receiveShadow",h.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&T.environment!==null)L9.envMapIntensity.value=T.environmentIntensity;if(L9.dfgLUT!==void 0)L9.dfgLUT.value=zN();if(C7){if(n0.setValue(f,"toneMappingExposure",j.toneMappingExposure),B0.needsLights)OK(L9,d7);if(U0&&b.fog===!0)t.refreshFogUniforms(L9,U0);if(t.refreshMaterialUniforms(L9,b,P0,w0,z.state.transmissionRenderTarget[M.id]),B0.needsLights&&B0.numLightProbeGrids>0){let Y9=w,O9=0;for(let D7 of z.state.lightProbeGridArray){if(D7.texture===null)continue;Y9.textures[O9]=D7.texture,Y9.min[O9]=D7.boundingBox.min,Y9.max[O9]=D7.boundingBox.max,Y9.resolution[O9]=D7.resolution,O9++}for(let D7 in Y9)Y9[D7].length=O9;L9.probesSH.value=Y9.textures,L9.probesMin.value=Y9.min,L9.probesMax.value=Y9.max,L9.probesResolution.value=Y9.resolution}X8.upload(f,t$(B0),L9,b0)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)X8.upload(f,t$(B0),L9,b0),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)n0.setValue(f,"center",h.center);if(n0.setValue(f,"modelViewMatrix",h.modelViewMatrix),n0.setValue(f,"normalMatrix",h.normalMatrix),n0.setValue(f,"modelMatrix",h.matrixWorld),b.uniformsGroups!==void 0){let Y9=b.uniformsGroups;for(let O9=0,D7=Y9.length;O9<D7;O9++){let $Q=Y9[O9];N0.update($Q,z9),N0.bind($Q,z9)}}return z9}function OK(M,T){M.ambientLightColor.needsUpdate=T,M.lightProbe.needsUpdate=T,M.sunLights.needsUpdate=T,M.sunLightShadows.needsUpdate=T,M.directionalLights.needsUpdate=T,M.directionalLightShadows.needsUpdate=T,M.pointLights.needsUpdate=T,M.pointLightShadows.needsUpdate=T,M.spotLights.needsUpdate=T,M.spotLightShadows.needsUpdate=T,M.rectAreaLights.needsUpdate=T,M.hemisphereLights.needsUpdate=T}function MK(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return o},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(M,T,m){let b=_0.get(M);if(b.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;_0.get(M.texture).__webglTexture=T,_0.get(M.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:m,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,T){let m=_0.get(M);m.__webglFramebuffer=T,m.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(M,T=0,m=0){v=M,c=T,o=m;let b=null,h=!1,U0=!1;if(M){let Y0=_0.get(M);if(Y0.__useDefaultFramebuffer!==void 0){E0.bindFramebuffer(f.FRAMEBUFFER,Y0.__webglFramebuffer),a.copy(M.viewport),J0.copy(M.scissor),L0=M.scissorTest,E0.viewport(a),E0.scissor(J0),E0.setScissorTest(L0),Z0=-1;return}else if(Y0.__webglFramebuffer===void 0)b0.setupRenderTarget(M);else if(Y0.__hasExternalTextures)b0.rebindTextures(M,_0.get(M.texture).__webglTexture,_0.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let h0=M.depthTexture;if(Y0.__boundDepthTexture!==h0){if(h0!==null&&_0.has(h0)&&(M.width!==h0.image.width||M.height!==h0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");b0.setupDepthRenderbuffer(M)}}let D0=M.texture;if(D0.isData3DTexture||D0.isDataArrayTexture||D0.isCompressedArrayTexture)U0=!0;let I0=_0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(I0[T]))b=I0[T][m];else b=I0[T];h=!0}else if(M.samples>0&&b0.useMultisampledRTT(M)===!1)b=_0.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(I0))b=I0[m];else b=I0;a.copy(M.viewport),J0.copy(M.scissor),L0=M.scissorTest}else a.copy(j0).multiplyScalar(P0).floor(),J0.copy(v0).multiplyScalar(P0).floor(),L0=a0;if(m!==0)b=g;if(E0.bindFramebuffer(f.FRAMEBUFFER,b))E0.drawBuffers(M,b);if(E0.viewport(a),E0.scissor(J0),E0.setScissorTest(L0),h){let Y0=_0.get(M.texture);f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y0.__webglTexture,m)}else if(U0){let Y0=T;for(let D0=0;D0<M.textures.length;D0++){let I0=_0.get(M.textures[D0]);f.framebufferTextureLayer(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0+D0,I0.__webglTexture,m,Y0)}}else if(M!==null&&m!==0){let Y0=_0.get(M.texture);f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,Y0.__webglTexture,m)}Z0=-1};function JQ(M){let T=_0.get(M);if(T.__readFormat!==M.format||T.__readType!==M.type)T.__readFormat=M.format,T.__readType=M.type,T.__formatReadable=D9.textureFormatReadable(M.format),T.__typeReadable=D9.textureTypeReadable(M.type);return T}if(this.readRenderTargetPixels=function(M,T,m,b,h,U0,M0,Y0=0){if(!(M&&M.isWebGLRenderTarget)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D0=_0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&M0!==void 0){if(D0=D0[M0],Array.isArray(D0))D0=D0[0]}if(D0){E0.bindFramebuffer(f.FRAMEBUFFER,D0);try{let I0=M.textures[Y0],h0=I0.format,l0=I0.type;if(M.textures.length>1)f.readBuffer(f.COLOR_ATTACHMENT0+Y0);let V0=JQ(I0);if(V0.__formatReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(V0.__typeReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(T>=0&&T<=M.width-b&&(m>=0&&m<=M.height-h))f.readPixels(T,m,b,h,Q0.convert(h0),Q0.convert(l0),U0)}finally{let I0=v!==null?_0.get(v).__webglFramebuffer:null;E0.bindFramebuffer(f.FRAMEBUFFER,I0)}}},this.readRenderTargetPixelsAsync=async function(M,T,m,b,h,U0,M0,Y0=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D0=_0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&M0!==void 0){if(D0=D0[M0],Array.isArray(D0))D0=D0[0]}if(D0)if(T>=0&&T<=M.width-b&&(m>=0&&m<=M.height-h)){E0.bindFramebuffer(f.FRAMEBUFFER,D0);let I0=M.textures[Y0],h0=I0.format,l0=I0.type;if(M.textures.length>1)f.readBuffer(f.COLOR_ATTACHMENT0+Y0);let V0=JQ(I0);if(V0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(V0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let d0=f.createBuffer();f.bindBuffer(f.PIXEL_PACK_BUFFER,d0),f.bufferData(f.PIXEL_PACK_BUFFER,U0.byteLength,f.STREAM_READ),f.readPixels(T,m,b,h,Q0.convert(h0),Q0.convert(l0),0),f.bindBuffer(f.PIXEL_PACK_BUFFER,null);let E9=v!==null?_0.get(v).__webglFramebuffer:null;E0.bindFramebuffer(f.FRAMEBUFFER,E9);let K9=f.fenceSync(f.SYNC_GPU_COMMANDS_COMPLETE,0);return f.flush(),await cZ(f,K9,4),f.bindBuffer(f.PIXEL_PACK_BUFFER,d0),f.getBufferSubData(f.PIXEL_PACK_BUFFER,0,U0),f.bindBuffer(f.PIXEL_PACK_BUFFER,null),f.deleteBuffer(d0),f.deleteSync(K9),U0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,T=null,m=0){let b=Math.pow(2,-m),h=Math.floor(M.image.width*b),U0=Math.floor(M.image.height*b),M0=T!==null?T.x:0,Y0=T!==null?T.y:0;b0.setTexture2D(M,0),f.copyTexSubImage2D(f.TEXTURE_2D,m,0,0,M0,Y0,h,U0),E0.unbindTexture()},this.copyTextureToTexture=function(M,T,m=null,b=null,h=0,U0=0){let M0,Y0,D0,I0,h0,l0,V0,d0,E9,K9=M.isCompressedTexture?M.mipmaps[U0]:M.image;if(m!==null)M0=m.max.x-m.min.x,Y0=m.max.y-m.min.y,D0=m.isBox3?m.max.z-m.min.z:1,I0=m.min.x,h0=m.min.y,l0=m.isBox3?m.min.z:0;else{let n0=Math.pow(2,-h);if(M0=Math.floor(K9.width*n0),Y0=Math.floor(K9.height*n0),M.isDataArrayTexture)D0=K9.depth;else if(M.isData3DTexture)D0=Math.floor(K9.depth*n0);else D0=1;I0=0,h0=0,l0=0}if(b!==null)V0=b.x,d0=b.y,E9=b.z;else V0=0,d0=0,E9=0;let Q9=Q0.convert(T.format),A9=Q0.convert(T.type),B0;if(T.isData3DTexture)b0.setTexture3D(T,0),B0=f.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)b0.setTexture2DArray(T,0),B0=f.TEXTURE_2D_ARRAY;else b0.setTexture2D(T,0),B0=f.TEXTURE_2D;E0.activeTexture(f.TEXTURE0),E0.pixelStorei(f.UNPACK_FLIP_Y_WEBGL,T.flipY),E0.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),E0.pixelStorei(f.UNPACK_ALIGNMENT,T.unpackAlignment);let j9=E0.getParameter(f.UNPACK_ROW_LENGTH),o0=E0.getParameter(f.UNPACK_IMAGE_HEIGHT),l7=E0.getParameter(f.UNPACK_SKIP_PIXELS),z9=E0.getParameter(f.UNPACK_SKIP_ROWS),G8=E0.getParameter(f.UNPACK_SKIP_IMAGES);E0.pixelStorei(f.UNPACK_ROW_LENGTH,K9.width),E0.pixelStorei(f.UNPACK_IMAGE_HEIGHT,K9.height),E0.pixelStorei(f.UNPACK_SKIP_PIXELS,I0),E0.pixelStorei(f.UNPACK_SKIP_ROWS,h0),E0.pixelStorei(f.UNPACK_SKIP_IMAGES,l0);let C7=M.isDataArrayTexture||M.isData3DTexture,d7=T.isDataArrayTexture||T.isData3DTexture;if(M.isDepthTexture){let n0=_0.get(M),L9=_0.get(T),o9=_0.get(n0.__renderTarget),Y9=_0.get(L9.__renderTarget);E0.bindFramebuffer(f.READ_FRAMEBUFFER,o9.__webglFramebuffer),E0.bindFramebuffer(f.DRAW_FRAMEBUFFER,Y9.__webglFramebuffer);for(let O9=0;O9<D0;O9++){if(C7)f.framebufferTextureLayer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,_0.get(M).__webglTexture,h,l0+O9),f.framebufferTextureLayer(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,_0.get(T).__webglTexture,U0,E9+O9);f.blitFramebuffer(I0,h0,I0+M0,h0+Y0,V0,d0,V0+M0,d0+Y0,f.DEPTH_BUFFER_BIT,f.NEAREST)}E0.bindFramebuffer(f.READ_FRAMEBUFFER,null),E0.bindFramebuffer(f.DRAW_FRAMEBUFFER,null)}else if(h!==0||M.isRenderTargetTexture||_0.has(M)){let n0=_0.get(M),L9=_0.get(T);E0.bindFramebuffer(f.READ_FRAMEBUFFER,r),E0.bindFramebuffer(f.DRAW_FRAMEBUFFER,C);for(let o9=0;o9<D0;o9++){if(C7)f.framebufferTextureLayer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,n0.__webglTexture,h,l0+o9);else f.framebufferTexture2D(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,n0.__webglTexture,h);if(d7)f.framebufferTextureLayer(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,L9.__webglTexture,U0,E9+o9);else f.framebufferTexture2D(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,L9.__webglTexture,U0);if(h!==0)f.blitFramebuffer(I0,h0,I0+M0,h0+Y0,V0,d0,V0+M0,d0+Y0,f.COLOR_BUFFER_BIT,f.NEAREST);else if(d7)f.copyTexSubImage3D(B0,U0,V0,d0,E9+o9,I0,h0,M0,Y0);else f.copyTexSubImage2D(B0,U0,V0,d0,I0,h0,M0,Y0)}E0.bindFramebuffer(f.READ_FRAMEBUFFER,null),E0.bindFramebuffer(f.DRAW_FRAMEBUFFER,null)}else if(d7)if(M.isDataTexture||M.isData3DTexture)f.texSubImage3D(B0,U0,V0,d0,E9,M0,Y0,D0,Q9,A9,K9.data);else if(T.isCompressedArrayTexture)f.compressedTexSubImage3D(B0,U0,V0,d0,E9,M0,Y0,D0,Q9,K9.data);else f.texSubImage3D(B0,U0,V0,d0,E9,M0,Y0,D0,Q9,A9,K9);else if(M.isDataTexture)f.texSubImage2D(f.TEXTURE_2D,U0,V0,d0,M0,Y0,Q9,A9,K9.data);else if(M.isCompressedTexture)f.compressedTexSubImage2D(f.TEXTURE_2D,U0,V0,d0,K9.width,K9.height,Q9,K9.data);else f.texSubImage2D(f.TEXTURE_2D,U0,V0,d0,M0,Y0,Q9,A9,K9);if(E0.pixelStorei(f.UNPACK_ROW_LENGTH,j9),E0.pixelStorei(f.UNPACK_IMAGE_HEIGHT,o0),E0.pixelStorei(f.UNPACK_SKIP_PIXELS,l7),E0.pixelStorei(f.UNPACK_SKIP_ROWS,z9),E0.pixelStorei(f.UNPACK_SKIP_IMAGES,G8),U0===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0)f.generateMipmap(B0);E0.unbindTexture()},this.initRenderTarget=function(M){if(_0.get(M).__webglFramebuffer===void 0)b0.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)b0.setTextureCube(M,0);else if(M.isData3DTexture)b0.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)b0.setTexture2DArray(M,0);else b0.setTexture2D(M,0);E0.unbindTexture()},this.resetState=function(){c=0,o=0,v=null,E0.reset(),W0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return G$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorSpace=u0._getDrawingBufferColorSpace(J),$.unpackColorSpace=u0._getUnpackColorSpace()}}class gW{static isWebGL2Available(){try{let J=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&J.getContext("webgl2"))}catch(J){return!1}}static isColorSpaceAvailable(J){try{let $=document.createElement("canvas"),Q=window.WebGL2RenderingContext&&$.getContext("webgl2");return Q.drawingBufferColorSpace=J,Q.drawingBufferColorSpace===J}catch($){return!1}}static getWebGL2ErrorMessage(){return this._getErrorMessage(2)}static _getErrorMessage(J){let $={1:"WebGL",2:"WebGL 2"},Q={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},Z='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',W=document.createElement("div");if(W.id="webglmessage",W.style.fontFamily="monospace",W.style.fontSize="13px",W.style.fontWeight="normal",W.style.textAlign="center",W.style.background="#fff",W.style.color="#000",W.style.padding="1.5em",W.style.width="400px",W.style.margin="5em auto 0",Q[J])Z=Z.replace("$0","graphics card");else Z=Z.replace("$0","browser");return Z=Z.replace("$1",$[J]),W.innerHTML=Z,W}}var pW=gW;var wN=pW.isWebGL2Available();function j6(J){if(!wN)return;let $;try{$=new p$({alpha:!0,depth:!1})}catch{return}let Q=$.domElement;return Q.style.display="",Q.className=J,Q.setAttribute("aria-hidden","true"),Q.addEventListener("webglcontextlost",()=>Q.remove()),$}function f6(J,$,Q){let Z=J.domElement;if(Z.width!==$||Z.height!==Q)J.setSize($,Q,!1)}var A5=`float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
`;var mW=`uniform vec3 top, bottom, glow;
uniform vec2 size, moon, light;
uniform float strength, scale;

const float RAKE = 1.6;

vec3 oklabToLinear(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.291485548 * c.z;

  vec3 k = vec3(l * l * l, m * m * m, s * s * s);

  return clamp(vec3(
    dot(k, vec3(4.0767416621, -3.3077115913, 0.2309699292)),
    dot(k, vec3(-1.2684380046, 2.6097574011, -0.3413193965)),
    dot(k, vec3(-0.0041960863, -0.7034186147, 1.707614701))), 0.0, 1.0);
}

float soft(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

float strands(vec2 p, float cell, float seed) {
  vec2 q = p / cell;
  vec2 i = floor(q);
  float sum = 0.0;
  for (int y = -1; y <= 1; ++y) {
    for (int x = -1; x <= 1; ++x) {
      vec2 c = i + vec2(x, y) + seed;
      vec2 center = vec2(x, y) + vec2(hash(c), hash(c + 41.7));
      float angle = hash(c + 17.3) * 6.2831853;
      vec2 along = vec2(cos(angle), sin(angle));
      vec2 d = q - i - center;
      float across = length(d - along * clamp(dot(d, along), -0.9, 0.9)) * cell;
      sum += exp(-across * across * 2.5);
    }
  }

  return min(sum, 1.5);
}

float sheet(vec2 p) {
  mat2 turn = mat2(0.8, 0.6, -0.6, 0.8);
  float formation = 0.6 * soft(turn * p / 7.0) + 0.4 * soft(turn * turn * p / 3.0 + 17.0);
  vec2 bend = vec2(soft(p * 0.15), soft(p * 0.15 + 9.0)) - 0.5;
  float fibers = strands(p + bend * 2.0, 4.0, 0.0) + strands(p - bend * 2.0, 5.5, 63.0);
  float fine = soft(turn * p * vec2(1.0, 0.5) + 53.0);
  return 0.25 * formation + 0.06 * fibers + 0.04 * fine;
}

void main() {
  vec2 at = vec2(gl_FragCoord.x, size.y - gl_FragCoord.y);
  vec2 pixel = at - size * 0.5 + 4096.0;
  // Grain stays in CSS pixels so it looks the same at every density.
  vec2 grain = (at - size * 0.5) / scale + 4096.0;

  float d = length(at - moon) / max(size.x, size.y);
  vec3 c = mix(mix(top, bottom, at.y / size.y), glow, strength * exp(-d * d * 3.2));

  float h = sheet(grain);
  vec2 slope = vec2(sheet(grain + vec2(0.5, 0.0)), sheet(grain + vec2(0.0, 0.5))) - h;
  float shade = -dot(slope / 0.5, light) * RAKE;

  float speck = smoothstep(0.86, 0.95, noise(grain * vec2(0.21, 0.5) + 70.0)) * step(0.76, noise(grain * 0.031 + 9.0));
  c.x += speck * (c.x > 0.5 ? -0.03 : 0.02);

  gl_FragColor = vec4(oklabToLinear(c) * (1.0 + shade), 1.0);
  #include <colorspace_fragment>

  // Dither hides banding in the dark gradient.
  gl_FragColor.rgb += (hash(pixel + 7.0) + hash(pixel + 91.0) - 1.0) / 255.0;
}
`;var z5=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;var TN=0.3,SN=new m0(-1,-1).normalize(),jN=x6(m5);function m$(J){let{l:$,a:Q,b:Z}=jN(J.trim());return new p($,Q,Z)}function lW(){let J=j6("paper");if(!J)return;let $=getComputedStyle(document.documentElement),Q={top:{value:m$($.getPropertyValue("--paper-top"))},bottom:{value:m$($.getPropertyValue("--paper-bottom"))},glow:{value:m$($.getPropertyValue("--paper-glow"))},strength:{value:TN},size:{value:new m0},moon:{value:new m0},scale:{value:1},light:{value:SN}},Z=new _9(new c9(2,2),new S9({uniforms:Q,vertexShader:z5,fragmentShader:A5+mW})),W=new X7(-1,1,1,-1,0,1),K=J.domElement;return document.body.prepend(K),(H,Y)=>{let X=Math.min(2,devicePixelRatio);f6(J,Math.round(K.clientWidth*X),Math.round(K.clientHeight*X)),Q.size.value.set(K.width,K.height),Q.moon.value.set(H*X,Y*X),Q.scale.value=X,J.render(Z,W)}}var dW=`uniform sampler2D light;
uniform float frame;

float hash(vec2 p) {
  vec3 q = fract(p.xyx * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

void main() {
  gl_FragColor = vec4(texelFetch(light, ivec2(gl_FragCoord.xy), 0).rgb, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>

  vec2 seed = gl_FragCoord.xy + frame * vec2(17.0, 59.0);
  float lit = step(1e-6, max(gl_FragColor.r, max(gl_FragColor.g, gl_FragColor.b)));
  vec3 seen = clamp(gl_FragColor.rgb + lit * (hash(seed) + hash(seed + 0.5) - 1.0) / 255.0, 0.0, 1.0);
  gl_FragColor = vec4(seen, max(seen.r, max(seen.g, seen.b)));
}
`;var uW=`uniform highp sampler3D profiles;
uniform float layer;
uniform float stride;
uniform float time;
uniform float ratio;
flat varying vec2 vCenter;
flat varying vec3 vEnergy;
flat varying vec4 vArms;
flat varying vec3 vGlint;

float hash(vec2 p) {
  vec3 q = fract(p.xyx * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float wobble(vec2 p) {
  vec2 cell = floor(p);
  vec2 f = fract(p);
  vec2 s = f * f * (3.0 - 2.0 * f);
  float bottom = mix(hash(cell), hash(cell + vec2(1.0, 0.0)), s.x);
  float top = mix(hash(cell + vec2(0.0, 1.0)), hash(cell + vec2(1.0, 1.0)), s.x);
  return (mix(bottom, top, s.y) * 2.0 - 1.0) / 0.43;
}

void main() {
  vec2 size = vec2(textureSize(profiles, 0).xy) * stride;
  vec2 offset = gl_FragCoord.xy - vCenter;
  vec2 turned = vec2(offset.x - offset.y, offset.x + offset.y) * 0.70710678;
  vec3 psf = texture(profiles, vec3(0.5 + offset / size, layer)).rgb;
  vec3 halo = min(psf, texture(profiles, vec3(0.5 + turned / size, layer)).rgb);

  int arm = (offset.x < 0.0 ? 1 : 0) + (offset.y < 0.0 ? 2 : 0);
  float along = length(offset) / ratio;
  float spread = vGlint.x;
  float ripple = wobble(vec2(along / 4.0 + vGlint.y + float(arm) * 31.0, time * vGlint.z));
  float boil = mix(1.0, vArms[arm] * exp(spread * ripple - 0.5 * spread * spread), smoothstep(1.0, 3.0, along));
  gl_FragColor = vec4(vEnergy * (halo + (psf - halo) * boil), 0.0);
}
`;var cW=`attribute vec2 spot;
attribute vec3 tint;
attribute float flux;
attribute vec4 arms;
attribute vec3 glint;
uniform vec2 viewport;
uniform float radius;
uniform float exposure;
flat varying vec2 vCenter;
flat varying vec3 vEnergy;
flat varying vec4 vArms;
flat varying vec3 vGlint;

void main() {
  vec4 center = projectionMatrix * modelViewMatrix * vec4(spot, 0.0, 1.0);
  vCenter = (center.xy * 0.5 + 0.5) * viewport;
  vEnergy = tint * flux * exposure;
  vArms = arms;
  vGlint = glint;
  gl_Position = vec4(center.xy + position.xy * 2.0 * radius / viewport, 0.0, 1.0);
}
`;var E7={model:"Pixel-integrated Fraunhofer intensity of an idealized Hubble pupil, visible light through sRGB matching functions",size:[157,157,13],format:"rgba16float",texelCssPixels:0.01875,radiusCssPixels:19.209374999999998,lambdaOverDiameterCssPixels:0.15,referenceWavelengthNm:656.66,pupilDiameterSamples:512,fftSize:4096,secondaryRadius:0.33,vaneWidth:0.022,mirrorPads:[[0.887,0,0.071],[-0.464,0.757,0.071],[-0.461,-0.763,0.071]],spectrum:{range:[400,700],stepNm:3,whitePointKelvin:6504},retainedEnergy:[0.9990963982456316,0.999296809178252,0.9996333861638396],maximumScale:4,scales:[0,0.5,1,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,4],maximumInterpolatedL1Error:0.013568552563303925,byteLength:2563496,sha256:"62e819b492852c580354d594322d698a667ae007577caa8b8b82d355cb73fbcc",sources:["https://github.com/spacetelescope/tinytim/blob/master/pupil.tab","https://github.com/spacetelescope/tinytim/blob/master/cpupil.c","https://roman-docs.stsci.edu/simulation-tools/stpsf-space-telescope-point-spread-functions-for-roman/overview-of-stpsf"]};var hN=function(){function J($){if(this._value=NaN,typeof $==="string")this._seed=this.hashCode($);else if(typeof $==="number")this._seed=this.getSafeSeed($);else this._seed=this.getSafeSeed(J.MIN+Math.floor((J.MAX-J.MIN)*Math.random()));this.reset()}return J.prototype.next=function($,Q){if($===void 0)$=0;if(Q===void 0)Q=1;return this.recalculate(),this.map(this._value,J.MIN,J.MAX,$,Q)},J.prototype.nextInt=function($,Q){if($===void 0)$=10;if(Q===void 0)Q=100;return this.recalculate(),Math.floor(this.map(this._value,J.MIN,J.MAX,$,Q+1))},J.prototype.nextString=function($,Q){if($===void 0)$=16;if(Q===void 0)Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";var Z="";while(Z.length<$)Z+=this.nextChar(Q);return Z},J.prototype.nextChar=function($){if($===void 0)$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return $.substr(this.nextInt(0,$.length-1),1)},J.prototype.nextArrayItem=function($){return $[this.nextInt(0,$.length-1)]},J.prototype.nextBoolean=function(){return this.recalculate(),this._value>0.5},J.prototype.skip=function($){if($===void 0)$=1;while($-- >0)this.recalculate()},J.prototype.reset=function(){this._value=this._seed},J.prototype.recalculate=function(){this._value=this.xorshift(this._value)},J.prototype.xorshift=function($){return $^=$<<13,$^=$>>17,$^=$<<5,$},J.prototype.map=function($,Q,Z,W,K){return($-Q)/(Z-Q)*(K-W)+W},J.prototype.hashCode=function($){var Q=0;if($){var Z=$.length;for(var W=0;W<Z;W++)Q=(Q<<5)-Q+$.charCodeAt(W),Q|=0,Q=this.xorshift(Q)}return this.getSafeSeed(Q)},J.prototype.getSafeSeed=function($){if($===0)return 1;return $},J.MIN=-2147483648,J.MAX=2147483647,J}(),l$=hN;var iW=Math.sqrt(3),oW=Math.sqrt(5),xN=0.5*(iW-1),N8=(3-iW)/6;var NI=(oW-1)/4,EI=(5-oW)/20,nW=(J)=>Math.floor(J)|0,sW=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function aW(J=Math.random){let $=gN(J),Q=new Float64Array($).map((W)=>sW[W%12*2]),Z=new Float64Array($).map((W)=>sW[W%12*2+1]);return function(K,H){let Y=0,X=0,U=0,N=(K+H)*xN,E=nW(K+N),G=nW(H+N),R=(E+G)*N8,L=E-R,I=G-R,q=K-L,F=H-I,A,w;if(q>F)A=1,w=0;else A=0,w=1;let B=q-A+N8,z=F-w+N8,P=q-1+2*N8,D=F-1+2*N8,V=E&255,j=G&255,x=0.5-q*q-F*F;if(x>=0){let r=V+$[j],C=Q[r],c=Z[r];x*=x,Y=x*x*(C*q+c*F)}let S=0.5-B*B-z*z;if(S>=0){let r=V+A+$[j+w],C=Q[r],c=Z[r];S*=S,X=S*S*(C*B+c*z)}let g=0.5-P*P-D*D;if(g>=0){let r=V+1+$[j+1],C=Q[r],c=Z[r];g*=g,U=g*g*(C*P+c*D)}return 70*(Y+X+U)}}function gN(J){let Q=new Uint8Array(512);for(let Z=0;Z<256;Z++)Q[Z]=Z;for(let Z=0;Z<255;Z++){let W=Z+~~(J()*(256-Z)),K=Q[Z];Q[Z]=Q[W],Q[W]=K}for(let Z=256;Z<512;Z++)Q[Z]=Q[Z-256];return Q}var eW=1887,pN=0.2,mN=0.9,lN=6.6,dN=0.32,rW=4,uN=[0.82,0.91,1],cN=[1,0.97,0.94],nN=[1,0.86,0.7],sN=50,tW=70,iN=0.1,oN=12,aN=[610,550,465],rN=0.75,tN=0.35,eN=0.08,d$=0.3,JE=0.5,G7=36,$E=new l$(eW),JK=aW(()=>$E.next()),$K=0;for(let J=0;J<4096;J++)$K+=JK(J*0.618,J*0.37)**2;var QE=Math.sqrt($K/4096);function QK(J,$,Q){let Z=[];for(let W=0;W<rW;W++){let K=W===rW-1,H=(K?1:0.75)*4**-W,Y=G7/Math.sqrt(pN*H);for(let X=Math.floor((J-G7)/Y);X<=Math.floor(($+G7)/Y);X++)for(let U=0;U*Y<=Q+G7;U++){let N=new l$(`${eW} ${W} ${X} ${U}`),E=(X+N.next())*Y,G=(U+N.next())*Y,R=4**-W*(K?1-N.next():1-0.75*N.next()),L=Math.max(mN,lN+Math.log10(R)/dN),I=N.next(-1,1),q=N.nextInt(0,9999),F=Math.sqrt(-2*Math.log(1-N.next()))*Math.cos(2*Math.PI*N.next()),A=Math.exp(tN*F),w=I<0?uN:nN,B=cN.map((z,P)=>z+(w[P]-z)*Math.abs(I));Z.push({x:E,y:G,magnitude:L,color:B,index:q,path:A})}}return Z}function ZK(J,$,Q,Z){let W=Math.max(1,sN*(1-Z)),K=1/Math.cos(Math.min(90-W,tW)*Math.PI/180),H=oN/Math.sqrt(K),Y=(L,I)=>JK(J*7.31+L*3.17,Q*I)/QE,X=Math.exp(d$*Y(9,eN)-d$*d$/2),U=iN*K**0.9166666666666666*$*X,N=rN*((K-1)/(1/Math.cos(tW*Math.PI/180)-1)),E=Y(0,H),G=aN.map((L,I)=>{let q=U*(L/550)**-0.5833333333333334,F=Math.sqrt(1-N*N)*E+N*Y(1+I,H);return Math.exp(q*F-q*q/2)}),R=JE*U;return{gain:G,arms:[0,1,2,3].map((L)=>Math.exp(R*Y(4+L*2,H)-R*R/2)),shimmer:U,rate:H,shift:[0.02*U*Y(20,H),0.02*U*Y(21,H)]}}var ZE=570;function WK(J){let $=G7*J/(E7.size[0]/2)*E7.maximumScale,Q=Math.max(1,Math.ceil($/E7.maximumScale)),Z=$/Q,{scales:W}=E7,K=0,H=W.length-1;while(H-K>1){let X=K+H>>1;if(W[X]<Z)K=X;else H=X}let Y=(Z-W[K])/(W[H]-W[K]);return{radius:E7.radiusCssPixels*W[H]*Q+Q,layer:(K+Y+0.5)/W.length,stride:Q,exposure:ZE*$*$/(Q*Q)}}var WE={gain:[1,1,1],arms:[1,1,1,1],shimmer:0,rate:0,shift:[0,0]},q7=(J,$)=>new _6(new Float32Array(J*$),$).setUsage(N$);async function KE(){let J=await fetch(`cdn/star-psf.bin.gz?v=${E7.sha256.slice(0,12)}`);if(!J.ok||!J.body)throw Error(`Could not load the star profiles: ${J.status}`);let $=J.headers.get("Content-Encoding")?.includes("gzip")?J.body:J.body.pipeThrough(new DecompressionStream("gzip")),Q=await new Response($).arrayBuffer();if(Q.byteLength!==E7.byteLength)throw Error("The star profiles have an unexpected size.");let[Z,W,K]=E7.size,H=new J8(new Uint16Array(Q),Z,W,K);return H.format=Q7,H.type=p9,H.minFilter=H.magFilter=P9,H.generateMipmaps=!1,H.needsUpdate=!0,H}function KK(J,$){let Q=j6("sky");if(!Q)return;if(!Q.extensions.has("EXT_color_buffer_float")&&!Q.extensions.has("EXT_color_buffer_half_float")){Q.dispose();return}Q.toneMapping=i6;let Z=q7(0,2),W=q7(0,3),K=q7(0,1),H=q7(0,4),Y=q7(0,3),X=new c9(2,2),U=new Z6;U.setIndex(X.index),U.setAttribute("position",X.getAttribute("position")),U.setAttribute("spot",Z),U.setAttribute("tint",W),U.setAttribute("flux",K),U.setAttribute("arms",H),U.setAttribute("glint",Y);let N=new b9(1,1,{type:p9,depthBuffer:!1}),E={profiles:{value:null},viewport:{value:[1,1]},radius:{value:0},layer:{value:0},stride:{value:1},exposure:{value:0},time:{value:0},ratio:{value:1}},G=new S9({uniforms:E,vertexShader:cW,fragmentShader:uW,blending:a8,blendEquation:v7,blendSrc:i7,blendDst:i7,blendSrcAlpha:i7,blendDstAlpha:i7,depthTest:!1,depthWrite:!1}),R=new _9(U,G);R.frustumCulled=!1,R.visible=!1;let L={light:{value:N.texture},frame:{value:0}},I=new _9(new c9(2,2),new S9({uniforms:L,vertexShader:z5,fragmentShader:dW,blending:k7,depthTest:!1,depthWrite:!1}));I.frustumCulled=!1;let q=new X7(-1,1,1,-1,0,1),F=new X7,A=Q.domElement;J.prepend(A),KE().then((V)=>{E.profiles.value=V,R.visible=!0,$()},()=>A.remove());let w,B=[],z="";return{fit:(V)=>{w=V,z=""},draw:(V,j=!0)=>{let{box:x,baseline:S,roofs:g,starFloor:r}=w,C=J.getBoundingClientRect();if(!A.isConnected||C.width===0)return;let c=x.width/C.width,o=C.top+scrollY,v=o+(S-x.top)/c;A.style.top=`${-o}px`,A.style.height=`${v}px`;let Z0=Math.min(2,devicePixelRatio),d=Math.round(A.clientWidth*Z0),a=Math.round(v*Z0);if(d<=0||a<=0)return;if(f6(Q,d,a),N.width!==d||N.height!==a)N.setSize(d,a);let J0=A.clientWidth,L0=A.getBoundingClientRect().left,n=document.documentElement.clientWidth/2-L0;F.left=0,F.right=J0,F.top=0,F.bottom=v,F.near=0,F.far=1,F.updateProjectionMatrix();let{radius:$0,layer:O0,stride:w0,exposure:P0}=WK(Z0);E.viewport.value=[d,a],E.radius.value=$0,E.layer.value=O0,E.stride.value=w0,E.exposure.value=P0,E.time.value=V,E.ratio.value=Z0,L.frame.value=(L.frame.value+1)%64;let R0=C.left-L0,s0=`${J0} ${v} ${n} ${R0} ${c}`;if(z!==s0){z=s0;let j0=G7*c;if(B=QK(-n,J0-n,v).filter(({x:v0,y:a0})=>{let p0=x.left+(n+v0-R0)*c,$9=g.filter((t0)=>p0>t0.from-j0&&p0<t0.to+j0).map((t0)=>t0.top);return(v-a0)*c>Math.max(r,...$9)+0.9*j0}),B.length>K.count)U.dispose(),Z=q7(B.length,2),W=q7(B.length,3),K=q7(B.length,1),H=q7(B.length,4),Y=q7(B.length,3),U.setAttribute("spot",Z).setAttribute("tint",W).setAttribute("flux",K).setAttribute("arms",H).setAttribute("glint",Y)}for(let[j0,{x:v0,y:a0,magnitude:p0,color:$9,index:t0,path:B9}]of B.entries()){let H9=j?ZK(t0,B9,V,a0/v):WE;Z.setXY(j0,n+v0+H9.shift[0]*G7,a0+H9.shift[1]*G7),W.setXYZ(j0,$9[0]*H9.gain[0],$9[1]*H9.gain[1],$9[2]*H9.gain[2]),K.setX(j0,10**(-0.4*p0)),H.setXYZW(j0,H9.arms[0],H9.arms[1],H9.arms[2],H9.arms[3]),Y.setXYZ(j0,H9.shimmer,t0*0.618,H9.rate)}Z.needsUpdate=W.needsUpdate=K.needsUpdate=H.needsUpdate=Y.needsUpdate=!0,U.instanceCount=B.length,Q.setRenderTarget(N),Q.render(R,F),Q.setRenderTarget(null),Q.render(I,q)}}}var HK=`uniform float baseline, time, pixel, grit, glass, spread, polarity, moonX;
uniform vec3 ink, wiz, moonlight, mirrored;
uniform sampler2D mirror;
varying vec2 at;
varying float across, slope, local;
flat varying float vChop, vRest, vRow, vPitch, vDepth;

vec2 letters(float x) {
  float level = (at.y - baseline) * 1.12;
  vec2 uv = vec2((x - mirrored.x) / (mirrored.y - mirrored.x), 1.0 - level / mirrored.z);
  return texture2D(mirror, uv).rg * step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
}

float face() {
  float swell = noise(vec2(at.x / (330.0 + 260.0 * vDepth) + 11.0, vDepth * 9.0 + 3.0));
  float chop = noise(vec2(at.x / (110.0 + 90.0 * vDepth) + 47.0, vDepth * 26.0 + 19.0));
  return 0.62 * swell + 0.38 * chop;
}

void main() {
  float dx = moonX - at.x;
  float near = exp(-dx * dx / (spread * spread));
  float lit = clamp(slope * dx / (abs(dx) + 200.0) * 2.6, -1.0, 1.0) * near;

  float weight = 0.0;
  float alpha = 1.0;
  vec3 color = ink;

  if (vChop < 0.5) {
    float ripple = vPitch * (0.2 + 2.6 * vDepth) * (noise(vec2(at.x / (vPitch * 9.0) + 400.0 + time * 0.08, vRest / (vPitch * 1.6) + time * 0.11)) - 0.5) * 2.0;

    // The reflection leans with the wave slope and softens away from the shore.
    float bend = clamp(0.3 * slope * (at.y - baseline), -2.5 * vPitch, 2.5 * vPitch);
    float spread = vPitch * (0.36 + 0.8 * vDepth);

    vec2 tone = vec2(0.0);
    for (int i = -2; i <= 2; i++) tone += letters(at.x + ripple + bend + float(i) * spread);
    tone *= 0.116 * glass * max(0.0, 1.0 - vDepth * 1.1);

    float swell = noise(vec2(at.x / 520.0 + 60.0, vRest / (vPitch * 7.0) + 40.0));
    float thin = (0.15 + 0.07 * swell) * (1.0 - 0.7 * vDepth);
    weight = vPitch * local * max(thin, tone.x) * (1.0 + polarity * 0.4 * lit);

    vec3 line = mix(ink, wiz, clamp(tone.y / max(thin, tone.x), 0.0, 1.0));
    color = mix(line, moonlight, clamp(0.5 * max(lit, 0.0) + 0.14 * near, 0.0, 0.5));
  } else {
    float x = at.x + time * 2.0;
    float run = (40.0 + 50.0 * vDepth) * grit;
    float dash = 0.66 * noise(vec2(x / run + vRow * 17.7, vRow * 3.1)) + 0.34 * noise(vec2(x / (run * 0.24) + vRow * 5.3, vRow * 7.9 + 60.0));
    weight = vPitch * 0.16 * clamp((face() - 0.12 - dash + polarity * 0.16 * lit) * 4.0, 0.0, 1.0);
    alpha = 0.75 * smoothstep(0.4, 1.0, weight / grit);
  }

  float halfWeight = weight * 0.5;
  float cover = clamp(min(across + pixel * 0.5, halfWeight) - max(across - pixel * 0.5, -halfWeight), 0.0, pixel) / pixel;
  gl_FragColor = vec4(color, 1.0) * cover * alpha;
}
`;var YK=`attribute float chop, rest, row, pitch, depth;
uniform float baseline, basePitch, seaDepth, wavelength, time, pixel;
uniform vec2 span;
varying vec2 at;
varying float across, slope, local;
flat varying float vChop, vRest, vRow, vPitch, vDepth;

float surface(float x, float r) {
  float d = (r - baseline) / seaDepth;
  float turn = x / wavelength * 6.2831853;
  float n = (r - baseline) / basePitch;
  float wave = 0.4 * sin(turn * 0.37 + n * 0.09 + 0.7 + time * 0.12)
    + 0.56 * sin(turn + n * 0.2 - time * 0.18)
    + 0.34 * sin(turn * 1.73 - n * 0.3 + 1.3 + time * 0.26);
  return r + basePitch * (1.0 + 0.95 * d) * (0.3 + 1.75 * d) * wave;
}

void main() {
  float x = mix(span.x, span.y, uv.x);
  float y = surface(x, rest);

  local = max(0.5, (surface(x, rest + pitch * 0.5) - surface(x, rest - pitch * 0.5)) / pitch);
  slope = (surface(x + 4.0, rest) - surface(x - 4.0, rest)) / 8.0;

  // Negated because logo units run downward. The other sign mirrors each quad and moves its diagonal.
  across = -position.y * (pitch * local * 0.5 + pixel * 2.0);
  at = vec2(x, y);

  vChop = chop;
  vRest = rest;
  vRow = row;
  vPitch = pitch;
  vDepth = depth;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y + across, 0.0, 1.0);
}
`;var XE="#e2d8b8",UE=3,NE=600,u$=x6(d5);function EE({baseline:J,sea:$}){let Q=[];for(let Z=J+$.pitch/2,W=0;Z<J+$.depth;W++){let K=(Z-J)/$.depth,H=$.pitch*(1+0.95*K);if(Q.push({chop:0,rest:Z,row:W,pitch:H,depth:K}),K<0.82)Q.push({chop:1,rest:Z+H/2,row:W,pitch:H,depth:(Z+H/2-J)/$.depth});Z+=H}return Q}function GE(J,$){let Q=new c9(1,2,J,1),Z=new Z6;Z.setIndex(Q.index),Z.setAttribute("position",Q.getAttribute("position")),Z.setAttribute("uv",Q.getAttribute("uv"));for(let W of["chop","rest","row","pitch","depth"])Z.setAttribute(W,new _6(Float32Array.from($,(K)=>K[W]),1));return Z.instanceCount=$.length,Z}function XK(J,$){let Q=j6("water");if(!Q)return;let Z=new Z8(new Uint8Array(4),1,1);Z.needsUpdate=!0;let W=u$(XE),K={baseline:{value:0},basePitch:{value:0},seaDepth:{value:0},wavelength:{value:0},grit:{value:0},time:{value:0},pixel:{value:0},glass:{value:0},spread:{value:0},polarity:{value:0},moonX:{value:0},span:{value:new m0},ink:{value:new p},wiz:{value:new p},moonlight:{value:new p(W.r,W.g,W.b)},mirrored:{value:new p},mirror:{value:Z}},H=new S9({uniforms:K,vertexShader:YK,fragmentShader:A5+HK,transparent:!0,premultipliedAlpha:!0,depthTest:!1,side:u9}),Y=new _9(new Z6,H);Y.frustumCulled=!1;let X=new X7,U=new R5,N=Q.domElement;N.addEventListener("webglcontextlost",()=>J.removeAttribute("data-water")),J.append(N),J.toggleAttribute("data-water",!0);let E,G=[],R=0,L=0,I=0,q=0;return{fit:(w)=>{E=w;let{box:B,baseline:z,sea:P,mirror:D,moon:V}=E;L=z-2*P.pitch,I=B.top+B.height,N.style.top=`${100*(L-B.top)/B.height}%`,N.style.height=`${100*(I-L)/B.height}%`;let j=u$(getComputedStyle(J).color),x=u$(E.wiz);K.baseline.value=z,K.basePitch.value=P.pitch,K.seaDepth.value=P.depth,K.wavelength.value=P.length,K.grit.value=P.grit,K.spread.value=B.width*0.3,K.polarity.value=2*(0.2126*j.r+0.7152*j.g+0.0722*j.b)-1,K.moonX.value=V.x,K.ink.value.set(j.r,j.g,j.b),K.wiz.value.set(x.r,x.g,x.b),K.mirrored.value.set(D.west,D.east,D.cap),G=EE(E),R=0,q=0,U.load(D.image,(S)=>{if(E!==w)return S.dispose();S.flipY=!1,S.generateMipmaps=!1,S.minFilter=P9,K.mirror.value.dispose(),K.mirror.value=S,q=performance.now(),$()})},draw:(w,B)=>{let z=Math.min(2,devicePixelRatio),P=Math.round(N.clientWidth*z),D=Math.round(N.clientHeight*z);if(P===0||D===0)return;f6(Q,P,D);let V=Math.ceil(N.clientWidth/UE);if(V!==R)R=V,Y.geometry.dispose(),Y.geometry=GE(R,G);let j=(I-L)/D,x=E.box.left+E.box.width/2;X.left=x-P*j/2,X.right=x+P*j/2,X.top=L,X.bottom=I,X.near=0,X.far=1,X.updateProjectionMatrix(),K.span.value.set(X.left,X.right),K.time.value=w,K.pixel.value=j,K.glass.value=q===0?0:B?Math.min(1,(performance.now()-q)/NE):1,Q.render(Y,X)}}}var qE=30,UK=document.querySelector(".year");if(UK)UK.textContent=String(new Date().getFullYear());var c$=document.querySelector(".azoth");c$?.addEventListener("pointerenter",({offsetX:J,offsetY:$})=>{c$.style.setProperty("--enter-x",`${J}px`),c$.style.setProperty("--enter-y",`${$}px`)});var v6=document.querySelector(".logo"),NK=matchMedia("(max-width: 760px) and (orientation: portrait)"),EK=matchMedia("(prefers-reduced-motion: reduce)"),FE=lW(),C5=v6?KK(v6,y6):void 0,P5=v6?XK(v6,y6):void 0,p7=j5,w5=0;function GK(){p7=NK.matches?QQ:j5,C5?.fit(p7),P5?.fit(p7),y6()}function y6(){let J=innerWidth/2,$=innerHeight/3;if(v6){let Z=v6.getBoundingClientRect(),W=Z.width/p7.box.width;J=Z.left+p7.moon.x*W,$=Z.top+(p7.baseline-p7.moon.altitude-p7.box.top)*W}FE?.(J,$);let Q=EK.matches;C5?.draw(Q?0:w5/1000,!Q),P5?.draw(Q?0:w5/1000,!Q)}function qK(J){if(requestAnimationFrame(qK),EK.matches||J-w5<qE)return;w5=J,C5?.draw(J/1000),P5?.draw(J/1000,!0)}GK();NK.addEventListener("change",GK);addEventListener("load",y6);addEventListener("resize",y6);addEventListener("scroll",y6,{passive:!0});if(C5||P5)requestAnimationFrame(qK);
