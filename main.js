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
var S5={wide:{box:{left:0,top:-470,width:3200,height:1450},baseline:444,wiz:"#a66bff",sea:{pitch:15,depth:440,length:450,grit:1},mirror:{image:"cdn/logo-mirror.png",west:261,east:2939,cap:864.9},starFloor:405,roofs:[{from:1153,to:2899,top:405},{from:301,to:453.7,top:688.9},{from:453.7,to:606.4,top:460.9},{from:606.4,to:759,top:478.9},{from:759,to:911.7,top:650.9},{from:911.7,to:1064.4,top:812.9},{from:1064.4,to:1217,top:864.9},{from:2916.9,to:2943.4,top:26.4}]},narrow:{box:{left:0,top:-212,width:1600,height:1472},baseline:800,wiz:"#a66bff",sea:{pitch:21,depth:330,length:390,grit:1.5},mirror:{image:"cdn/logo-narrow-mirror.png",west:222.6,east:1570,cap:294},starFloor:294,roofs:[{from:262.6,to:1530,top:294},{from:40,to:150.8,top:840.5},{from:150.8,to:261.6,top:674.5},{from:261.6,to:372.5,top:688.5},{from:372.5,to:483.3,top:812.5},{from:483.3,to:594.1,top:930.5},{from:594.1,to:704.9,top:968.5},{from:1543,to:1562.2,top:19.2}]}};var j5={...S5.wide,moon:{x:1497.55,altitude:586.95}},QQ={...S5.narrow,moon:{x:300.48,altitude:758.3}};var OW=({l:J,a:Q,b:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=Math.pow(J+0.3963377773761749*Q+0.2158037573099136*$,3),K=Math.pow(J-0.1055613458156586*Q-0.0638541728258133*$,3),H=Math.pow(J-0.0894841775298119*Q-1.2914855480194092*$,3),X={mode:"lrgb",r:4.076741636075957*W-3.3077115392580616*K+0.2309699031821044*H,g:-1.2684379732850317*W+2.6097573492876887*K-0.3413193760026573*H,b:-0.0041960761386756*W-0.7034186179359362*K+1.7076146940746117*H};if(Z!==void 0)X.alpha=Z;return X},q8=OW;var MW=({r:J,g:Q,b:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=Math.cbrt(0.412221469470763*J+0.5363325372617348*Q+0.0514459932675022*$),K=Math.cbrt(0.2119034958178252*J+0.6806995506452344*Q+0.1073969535369406*$),H=Math.cbrt(0.0883024591900564*J+0.2817188391361215*Q+0.6299787016738222*$),X={mode:"oklab",l:0.210454268309314*W+0.7936177747023054*K-0.0040720430116193*H,a:1.9779985324311684*W-2.42859224204858*K+0.450593709617411*H,b:0.0259040424655478*W+0.7827717124575296*K-0.8086757549230774*H};if(Z!==void 0)X.alpha=Z;return X},F8=MW;var f5=(J=0)=>{let Q=Math.abs(J);if(Q<=0.04045)return J/12.92;return(Math.sign(J)||1)*Math.pow((Q+0.055)/1.055,2.4)},LW=({r:J,g:Q,b:$,alpha:Z})=>{let W={mode:"lrgb",r:f5(J),g:f5(Q),b:f5($)};if(Z!==void 0)W.alpha=Z;return W},D8=LW;var VW=(J)=>{let Q=F8(D8(J));if(J.r===J.b&&J.b===J.g)Q.a=Q.b=0;return Q},$Q=VW;var v5=(J=0)=>{let Q=Math.abs(J);if(Q>0.0031308)return(Math.sign(J)||1)*(1.055*Math.pow(Q,0.4166666666666667)-0.055);return J*12.92},BW=({r:J,g:Q,b:$,alpha:Z},W="rgb")=>{let K={mode:W,r:v5(J),g:v5(Q),b:v5($)};if(Z!==void 0)K.alpha=Z;return K},R8=BW;var kW=(J)=>R8(q8(J)),ZQ=kW;var IW=(J,Q)=>J===void 0?void 0:typeof J!=="object"?KQ(J):J.mode!==void 0?J:Q?{...J,mode:Q}:void 0,WQ=IW;var zW=(J="rgb")=>(Q)=>(Q=WQ(Q,J))!==void 0?Q.mode===J?Q:a9[Q.mode][J]?a9[Q.mode][J](Q):J==="rgb"?a9[Q.mode].rgb(Q):a9.rgb[J](a9[Q.mode].rgb(Q)):void 0,HQ=zW;var a9={},XQ={},h6=[],y5={},AW=(J)=>J,x6=(J)=>{if(a9[J.mode]={...a9[J.mode],...J.toMode},Object.keys(J.fromMode||{}).forEach((Q)=>{if(!a9[Q])a9[Q]={};a9[Q][J.mode]=J.fromMode[Q]}),!J.ranges)J.ranges={};if(!J.difference)J.difference={};return J.channels.forEach((Q)=>{if(J.ranges[Q]===void 0)J.ranges[Q]=[0,1];if(!J.interpolate[Q])throw Error(`Missing interpolator for: ${Q}`);if(typeof J.interpolate[Q]==="function")J.interpolate[Q]={use:J.interpolate[Q]};if(!J.interpolate[Q].fixup)J.interpolate[Q].fixup=AW}),XQ[J.mode]=J,(J.parse||[]).forEach((Q)=>{YQ(Q,J.mode)}),HQ(J.mode)},b5=(J)=>XQ[J],YQ=(J,Q)=>{if(typeof J==="string"){if(!Q)throw Error("'mode' required when 'parser' is a string");y5[J]=Q}else if(typeof J==="function"){if(h6.indexOf(J)<0)h6.push(J)}};var h5=/[^\x00-\x7F]|[a-zA-Z_]/,CW=/[^\x00-\x7F]|[-\w]/,k0={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"},T0=0;function O8(J){let Q=J[T0],$=J[T0+1];if(Q==="-"||Q==="+")return/\d/.test($)||$==="."&&/\d/.test(J[T0+2]);if(Q===".")return/\d/.test($);return/\d/.test(Q)}function x5(J){if(T0>=J.length)return!1;let Q=J[T0];if(h5.test(Q))return!0;if(Q==="-"){if(J.length-T0<2)return!1;let $=J[T0+1];if($==="-"||h5.test($))return!0;return!1}return!1}var wW={deg:1,rad:180/Math.PI,grad:0.9,turn:360};function g6(J){let Q="";if(J[T0]==="-"||J[T0]==="+")Q+=J[T0++];if(Q+=M8(J),J[T0]==="."&&/\d/.test(J[T0+1]))Q+=J[T0++]+M8(J);if(J[T0]==="e"||J[T0]==="E"){if((J[T0+1]==="-"||J[T0+1]==="+")&&/\d/.test(J[T0+2]))Q+=J[T0++]+J[T0++]+M8(J);else if(/\d/.test(J[T0+1]))Q+=J[T0++]+M8(J)}if(x5(J)){let $=L8(J);if($==="deg"||$==="rad"||$==="turn"||$==="grad")return{type:k0.Hue,value:Q*wW[$]};return}if(J[T0]==="%")return T0++,{type:k0.Percentage,value:+Q};return{type:k0.Number,value:+Q}}function M8(J){let Q="";while(/\d/.test(J[T0]))Q+=J[T0++];return Q}function L8(J){let Q="";while(T0<J.length&&CW.test(J[T0]))Q+=J[T0++];return Q}function PW(J){let Q=L8(J);if(J[T0]==="(")return T0++,{type:k0.Function,value:Q};if(Q==="none")return{type:k0.None,value:void 0};return{type:k0.Ident,value:Q}}function _W(J=""){let Q=J.trim(),$=[],Z;T0=0;while(T0<Q.length){if(Z=Q[T0++],Z===`
`||Z==="\t"||Z===" "){while(T0<Q.length&&(Q[T0]===`
`||Q[T0]==="\t"||Q[T0]===" "))T0++;continue}if(Z===",")return;if(Z===")"){$.push({type:k0.ParenClose});continue}if(Z==="+"){if(T0--,O8(Q)){$.push(g6(Q));continue}return}if(Z==="-"){if(T0--,O8(Q)){$.push(g6(Q));continue}if(x5(Q)){$.push({type:k0.Ident,value:L8(Q)});continue}return}if(Z==="."){if(T0--,O8(Q)){$.push(g6(Q));continue}return}if(Z==="/"){while(T0<Q.length&&(Q[T0]===`
`||Q[T0]==="\t"||Q[T0]===" "))T0++;let W;if(O8(Q)){if(W=g6(Q),W.type!==k0.Hue){$.push({type:k0.Alpha,value:W});continue}}if(x5(Q)){if(L8(Q)==="none"){$.push({type:k0.Alpha,value:{type:k0.None,value:void 0}});continue}}return}if(/\d/.test(Z)){T0--,$.push(g6(Q));continue}if(h5.test(Z)){T0--,$.push(PW(Q));continue}return}return $}function TW(J){J._i=0;let Q=J[J._i++];if(!Q||Q.type!==k0.Function||Q.value!=="color")return;if(Q=J[J._i++],Q.type!==k0.Ident)return;let $=y5[Q.value];if(!$)return;let Z={mode:$},W=UQ(J,!1);if(!W)return;let K=b5($).channels;for(let H=0,X,Y;H<K.length;H++)if(X=W[H],Y=K[H],X.type!==k0.None){if(Z[Y]=X.type===k0.Number?X.value:X.value/100,Y==="alpha")Z[Y]=Math.max(0,Math.min(1,Z[Y]))}return Z}function UQ(J,Q){let $=[],Z;while(J._i<J.length){if(Z=J[J._i++],Z.type===k0.None||Z.type===k0.Number||Z.type===k0.Alpha||Z.type===k0.Percentage||Q&&Z.type===k0.Hue){$.push(Z);continue}if(Z.type===k0.ParenClose){if(J._i<J.length)return;continue}return}if($.length<3||$.length>4)return;if($.length===4){if($[3].type!==k0.Alpha)return;$[3]=$[3].value}if($.length===3)$.push({type:k0.None,value:void 0});return $.every((W)=>W.type!==k0.Alpha)?$:void 0}function SW(J,Q){J._i=0;let $=J[J._i++];if(!$||$.type!==k0.Function)return;let Z=UQ(J,Q);if(!Z)return;return Z.unshift($.value),Z}var jW=(J)=>{if(typeof J!=="string")return;let Q=_W(J),$=Q?SW(Q,!0):void 0,Z=void 0,W=0,K=h6.length;while(W<K)if((Z=h6[W++](J,$))!==void 0)return Z;return Q?TW(Q):void 0},KQ=jW;function fW(J,Q){if(!Q||Q[0]!=="oklab")return;let $={mode:"oklab"},[,Z,W,K,H]=Q;if(Z.type===k0.Hue||W.type===k0.Hue||K.type===k0.Hue)return;if(Z.type!==k0.None)$.l=Math.min(Math.max(0,Z.type===k0.Number?Z.value:Z.value/100),1);if(W.type!==k0.None)$.a=W.type===k0.Number?W.value:W.value*0.4/100;if(K.type!==k0.None)$.b=K.type===k0.Number?K.value:K.value*0.4/100;if(H.type!==k0.None)$.alpha=Math.min(1,Math.max(0,H.type===k0.Number?H.value:H.value/100));return $}var NQ=fW;var V8=Math.pow(29,3)/Math.pow(3,3),B8=Math.pow(6,3)/Math.pow(29,3);var C7={X:0.9642956764295677,Y:1,Z:0.8251046025104602};var jE=Math.pow(29,3)/Math.pow(3,3),fE=Math.pow(6,3)/Math.pow(29,3);var g5=(J)=>Math.pow(J,3)>B8?Math.pow(J,3):(116*J-16)/V8,vW=({l:J,a:Q,b:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=(J+16)/116,K=Q/500+W,H=W-$/200,X={mode:"xyz50",x:g5(K)*C7.X,y:g5(W)*C7.Y,z:g5(H)*C7.Z};if(Z!==void 0)X.alpha=Z;return X},k8=vW;var yW=({x:J,y:Q,z:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=R8({r:J*3.1341359569958707-Q*1.6173863321612538-0.4906619460083532*$,g:J*-0.978795502912089+Q*1.916254567259524+0.03344273116131949*$,b:J*0.07195537988411677-Q*0.2289768264158322+1.405386058324125*$});if(Z!==void 0)W.alpha=Z;return W},EQ=yW;var bW=(J)=>EQ(k8(J)),GQ=bW;var hW=(J)=>{let{r:Q,g:$,b:Z,alpha:W}=D8(J),K={mode:"xyz50",x:0.436065742824811*Q+0.3851514688337912*$+0.14307845442264197*Z,y:0.22249319175623702*Q+0.7168870538238823*$+0.06061979053616537*Z,z:0.013923904500943465*Q+0.09708128566574634*$+0.7140993584005155*Z};if(W!==void 0)K.alpha=W;return K},qQ=hW;var p5=(J)=>J>B8?Math.cbrt(J):(V8*J+16)/116,xW=({x:J,y:Q,z:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=p5(J/C7.X),K=p5(Q/C7.Y),H=p5($/C7.Z),X={mode:"lab",l:116*K-16,a:500*(W-K),b:200*(K-H)};if(Z!==void 0)X.alpha=Z;return X},I8=xW;var gW=(J)=>{let Q=I8(qQ(J));if(J.r===J.b&&J.b===J.g)Q.a=Q.b=0;return Q},FQ=gW;function pW(J,Q){if(!Q||Q[0]!=="lab")return;let $={mode:"lab"},[,Z,W,K,H]=Q;if(Z.type===k0.Hue||W.type===k0.Hue||K.type===k0.Hue)return;if(Z.type!==k0.None)$.l=Math.min(Math.max(0,Z.value),100);if(W.type!==k0.None)$.a=W.type===k0.Number?W.value:W.value*125/100;if(K.type!==k0.None)$.b=K.type===k0.Number?K.value:K.value*125/100;if(H.type!==k0.None)$.alpha=Math.min(1,Math.max(0,H.type===k0.Number?H.value:H.value/100));return $}var DQ=pW;var RQ=(J,Q,$)=>J+$*(Q-J);var mW=(J)=>{let Q=[];for(let $=0;$<J.length-1;$++){let Z=J[$],W=J[$+1];if(Z===void 0&&W===void 0)Q.push(void 0);else if(Z!==void 0&&W!==void 0)Q.push([Z,W]);else Q.push(Z!==void 0?[Z,Z]:[W,W])}return Q},OQ=(J)=>(Q)=>{let $=mW(Q);return(Z)=>{let W=Z*$.length,K=Z>=1?$.length-1:Math.max(Math.floor(W),0),H=$[K];return H===void 0?void 0:J(H[0],H[1],W-K)}};var Z7=OQ(RQ);var z8=(J)=>{let Q=!1,$=J.map((Z)=>{if(Z!==void 0)return Q=!0,Z;return 1});return Q?$:J};var lW={mode:"lab",toMode:{xyz50:k8,rgb:GQ},fromMode:{xyz50:I8,rgb:FQ},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[DQ],serialize:(J)=>`lab(${J.l!==void 0?J.l:"none"} ${J.a!==void 0?J.a:"none"} ${J.b!==void 0?J.b:"none"}${J.alpha<1?` / ${J.alpha}`:""})`,interpolate:{l:Z7,a:Z7,b:Z7,alpha:{use:Z7,fixup:z8}}},MQ=lW;var dW={...MQ,mode:"oklab",toMode:{lrgb:q8,rgb:ZQ},fromMode:{lrgb:F8,rgb:$Q},ranges:{l:[0,1],a:[-0.4,0.4],b:[-0.4,0.4]},parse:[NQ],serialize:(J)=>`oklab(${J.l!==void 0?J.l:"none"} ${J.a!==void 0?J.a:"none"} ${J.b!==void 0?J.b:"none"}${J.alpha<1?` / ${J.alpha}`:""})`},m5=dW;var uW=(J,Q)=>{if(typeof J!=="number")return;if(Q===3)return{mode:"rgb",r:(J>>8&15|J>>4&240)/255,g:(J>>4&15|J&240)/255,b:(J&15|J<<4&240)/255};if(Q===4)return{mode:"rgb",r:(J>>12&15|J>>8&240)/255,g:(J>>8&15|J>>4&240)/255,b:(J>>4&15|J&240)/255,alpha:(J&15|J<<4&240)/255};if(Q===6)return{mode:"rgb",r:(J>>16&255)/255,g:(J>>8&255)/255,b:(J&255)/255};if(Q===8)return{mode:"rgb",r:(J>>24&255)/255,g:(J>>16&255)/255,b:(J>>8&255)/255,alpha:(J&255)/255}},A8=uW;var cW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},LQ=cW;var nW=(J)=>{return A8(LQ[J.toLowerCase()],6)},VQ=nW;var sW=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,iW=(J)=>{let Q;return(Q=J.match(sW))?A8(parseInt(Q[1],16),Q[1].length):void 0},BQ=iW;var C8="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";var w8="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%";var l5="(?:([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%|([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?))";var p6="\\s*,\\s*";var wG=new RegExp("^(?:([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%|([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)|none)$");var oW=new RegExp(`^rgba?\\(\\s*${C8}${p6}${C8}${p6}${C8}\\s*(?:,\\s*${l5}\\s*)?\\)$`),aW=new RegExp(`^rgba?\\(\\s*${w8}${p6}${w8}${p6}${w8}\\s*(?:,\\s*${l5}\\s*)?\\)$`),rW=(J)=>{let Q={mode:"rgb"},$;if($=J.match(oW)){if($[1]!==void 0)Q.r=$[1]/255;if($[2]!==void 0)Q.g=$[2]/255;if($[3]!==void 0)Q.b=$[3]/255}else if($=J.match(aW)){if($[1]!==void 0)Q.r=$[1]/100;if($[2]!==void 0)Q.g=$[2]/100;if($[3]!==void 0)Q.b=$[3]/100}else return;if($[4]!==void 0)Q.alpha=Math.max(0,Math.min(1,$[4]/100));else if($[5]!==void 0)Q.alpha=Math.max(0,Math.min(1,+$[5]));return Q},kQ=rW;function tW(J,Q){if(!Q||Q[0]!=="rgb"&&Q[0]!=="rgba")return;let $={mode:"rgb"},[,Z,W,K,H]=Q;if(Z.type===k0.Hue||W.type===k0.Hue||K.type===k0.Hue)return;if(Z.type!==k0.None)$.r=Z.type===k0.Number?Z.value/255:Z.value/100;if(W.type!==k0.None)$.g=W.type===k0.Number?W.value/255:W.value/100;if(K.type!==k0.None)$.b=K.type===k0.Number?K.value/255:K.value/100;if(H.type!==k0.None)$.alpha=Math.min(1,Math.max(0,H.type===k0.Number?H.value:H.value/100));return $}var IQ=tW;var eW=(J)=>J==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,zQ=eW;var JK={mode:"rgb",channels:["r","g","b","alpha"],parse:[IQ,BQ,kQ,VQ,zQ,"srgb"],serialize:"srgb",interpolate:{r:Z7,g:Z7,b:Z7,alpha:{use:Z7,fixup:z8}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},d5=JK;var sQ="187";var iQ=0,E1=1,oQ=2;var n6=1,aQ=2,k6=3,I6=0,v9=1,u9=2,L7=0,s6=1,G1=2,q1=3,F1=4,a8=5;var j7=100,rQ=101,tQ=102,eQ=103,J$=104,Q$=200,s7=201,$$=202,Z$=203,W$=204,K$=205,H$=206,X$=207,Y$=208,U$=209,N$=210,E$=211,G$=212,q$=213,F$=214,D$=0,R$=1,O$=2,D1=3,M$=4,L$=5,V$=6,B$=7,k$=0,I$=1,z$=2,X7=0,R1=1,O1=2,M1=3,L1=4,V1=5,i6=6,B1=7;var o6=301,z6=302,r8=303,t8=304,A$=1000,e8=1001,C$=1002,f7=1003,w$=1004;var a6=1005;var C9=1006,J5=1007;var v7=1008;var Q7=1009,P$=1010,_$=1011,r6=1012,k1=1013,y7=1014,V7=1015,p9=1016,I1=1017,z1=1018,i7=1020,T$=35902,S$=35899,j$=1021,f$=1022,$7=1023,A6=1026,b7=1027,v$=1028,A1=1029,o7=1030,C1=1031;var w1=1033,Q5=33776,$5=33777,Z5=33778,W5=33779,P1=35840,_1=35841,T1=35842,S1=35843,j1=36196,f1=37492,v1=37496,y1=37488,b1=37489,K5=37490,h1=37491,x1=37808,g1=37809,p1=37810,m1=37811,l1=37812,d1=37813,u1=37814,c1=37815,n1=37816,s1=37817,i1=37818,o1=37819,a1=37820,r1=37821,t1=36492,e1=36494,JJ=36495,QJ=36283,$J=36284,H5=36285,ZJ=36286;var WJ=0,y$=1,a7="",b$="srgb",KJ="srgb-linear",HJ="linear",Q9="srgb";var h$=512,x$=513,g$=514,XJ=515,p$=516,m$=517,YJ=518,UJ=519;var NJ=35048;var EJ="300 es",GJ=2000;function QK(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function $K(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function L6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function l$(){let J=L6("canvas");return J.style.display="block",J}var AQ={},V6=null;function qJ(...J){let Q="THREE."+J.shift();if(V6)V6("log",Q,...J);else console.log(Q,...J)}function d$(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function S0(...J){J=d$(J);let Q="THREE."+J.shift();if(V6)V6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function f0(...J){J=d$(J);let Q="THREE."+J.shift();if(V6)V6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function c6(...J){let Q=J.join(" ");if(Q in AQ)return;AQ[Q]=!0,S0(...J)}function u$(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}var c$={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class B7{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var z9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var u5=Math.PI/180,o8=180/Math.PI;function t6(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(z9[J&255]+z9[J>>8&255]+z9[J>>16&255]+z9[J>>24&255]+"-"+z9[Q&255]+z9[Q>>8&255]+"-"+z9[Q>>16&15|64]+z9[Q>>24&255]+"-"+z9[$&63|128]+z9[$>>8&255]+"-"+z9[$>>16&255]+z9[$>>24&255]+z9[Z&255]+z9[Z>>8&255]+z9[Z>>16&255]+z9[Z>>24&255]).toLowerCase()}function c0(J,Q,$){return Math.max(Q,Math.min($,J))}function ZK(J,Q){return(J%Q+Q)%Q}function c5(J,Q,$){return(1-$)*J+$*Q}function n$(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function FJ(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function WK(J,Q){if(Q.constructor===Float32Array)return J;let $=FJ(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/$,-1)}function KK(J,Q){if(Q.constructor===Float32Array)return J;let $=FJ(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*$)}class m0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=c0(this.x,J.x,Q.x),this.y=c0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=c0(this.x,J,Q),this.y=c0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(c0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(c0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*$-K*Z+J.x,this.y=W*Z+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class k7{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,K,H){let X=$[Z+0],Y=$[Z+1],U=$[Z+2],E=$[Z+3],G=W[K+0],N=W[K+1],R=W[K+2],L=W[K+3];if(E!==L||X!==G||Y!==N||U!==R){let k=X*G+Y*N+U*R+E*L;if(k<0)G=-G,N=-N,R=-R,L=-L,k=-k;let q=1-H;if(k<0.9995){let F=Math.acos(k),z=Math.sin(F);q=Math.sin(q*F)/z,H=Math.sin(H*F)/z,X=X*q+G*H,Y=Y*q+N*H,U=U*q+R*H,E=E*q+L*H}else{X=X*q+G*H,Y=Y*q+N*H,U=U*q+R*H,E=E*q+L*H;let F=1/Math.sqrt(X*X+Y*Y+U*U+E*E);X*=F,Y*=F,U*=F,E*=F}}J[Q]=X,J[Q+1]=Y,J[Q+2]=U,J[Q+3]=E}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){let H=$[Z],X=$[Z+1],Y=$[Z+2],U=$[Z+3],E=W[K],G=W[K+1],N=W[K+2],R=W[K+3];return J[Q]=H*R+U*E+X*N-Y*G,J[Q+1]=X*R+U*G+Y*E-H*N,J[Q+2]=Y*R+U*N+H*G-X*E,J[Q+3]=U*R-H*E-X*G-Y*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:K}=J,H=Math.cos,X=Math.sin,Y=H($/2),U=H(Z/2),E=H(W/2),G=X($/2),N=X(Z/2),R=X(W/2);switch(K){case"XYZ":this._x=G*U*E+Y*N*R,this._y=Y*N*E-G*U*R,this._z=Y*U*R+G*N*E,this._w=Y*U*E-G*N*R;break;case"YXZ":this._x=G*U*E+Y*N*R,this._y=Y*N*E-G*U*R,this._z=Y*U*R-G*N*E,this._w=Y*U*E+G*N*R;break;case"ZXY":this._x=G*U*E-Y*N*R,this._y=Y*N*E+G*U*R,this._z=Y*U*R+G*N*E,this._w=Y*U*E-G*N*R;break;case"ZYX":this._x=G*U*E-Y*N*R,this._y=Y*N*E+G*U*R,this._z=Y*U*R-G*N*E,this._w=Y*U*E+G*N*R;break;case"YZX":this._x=G*U*E+Y*N*R,this._y=Y*N*E+G*U*R,this._z=Y*U*R-G*N*E,this._w=Y*U*E-G*N*R;break;case"XZY":this._x=G*U*E-Y*N*R,this._y=Y*N*E-G*U*R,this._z=Y*U*R+G*N*E,this._w=Y*U*E+G*N*R;break;default:S0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],H=Q[5],X=Q[9],Y=Q[2],U=Q[6],E=Q[10],G=$+H+E;if(G>0){let N=0.5/Math.sqrt(G+1);this._w=0.25/N,this._x=(U-X)*N,this._y=(W-Y)*N,this._z=(K-Z)*N}else if($>H&&$>E){let N=2*Math.sqrt(1+$-H-E);this._w=(U-X)/N,this._x=0.25*N,this._y=(Z+K)/N,this._z=(W+Y)/N}else if(H>E){let N=2*Math.sqrt(1+H-$-E);this._w=(W-Y)/N,this._x=(Z+K)/N,this._y=0.25*N,this._z=(X+U)/N}else{let N=2*Math.sqrt(1+E-$-H);this._w=(K-Z)/N,this._x=(W+Y)/N,this._y=(X+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(c0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=Q._x,X=Q._y,Y=Q._z,U=Q._w;return this._x=$*U+K*H+Z*Y-W*X,this._y=Z*U+K*X+W*H-$*Y,this._z=W*U+K*Y+$*X-Z*H,this._w=K*U-$*H-Z*X-W*Y,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=this.dot(J);if(H<0)$=-$,Z=-Z,W=-W,K=-K,H=-H;let X=1-Q;if(H<0.9995){let Y=Math.acos(H),U=Math.sin(Y);X=Math.sin(X*Y)/U,Q=Math.sin(Q*Y)/U,this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+W*Q,this._w=this._w*X+K*Q,this._onChangeCallback()}else this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+W*Q,this._w=this._w*X+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class p{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(CQ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(CQ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,K=J.y,H=J.z,X=J.w,Y=2*(K*Z-H*$),U=2*(H*Q-W*Z),E=2*(W*$-K*Q);return this.x=Q+X*Y+K*E-H*U,this.y=$+X*U+H*Y-W*E,this.z=Z+X*E+W*U-K*Y,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=c0(this.x,J.x,Q.x),this.y=c0(this.y,J.y,Q.y),this.z=c0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=c0(this.x,J,Q),this.y=c0(this.y,J,Q),this.z=c0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(c0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,K=Q.x,H=Q.y,X=Q.z;return this.x=Z*X-W*H,this.y=W*K-$*X,this.z=$*H-Z*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return n5.copy(this).projectOnVector(J),this.sub(n5)}reflect(J){return this.sub(n5.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(c0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var n5=new p,CQ=new k7;class v0{static{this.prototype.isMatrix3=!0}constructor(J,Q,$,Z,W,K,H,X,Y){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,X,Y)}set(J,Q,$,Z,W,K,H,X,Y){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=W,U[5]=X,U[6]=$,U[7]=K,U[8]=Y,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[3],X=$[6],Y=$[1],U=$[4],E=$[7],G=$[2],N=$[5],R=$[8],L=Z[0],k=Z[3],q=Z[6],F=Z[1],z=Z[4],A=Z[7],B=Z[2],C=Z[5],P=Z[8];return W[0]=K*L+H*F+X*B,W[3]=K*k+H*z+X*C,W[6]=K*q+H*A+X*P,W[1]=Y*L+U*F+E*B,W[4]=Y*k+U*z+E*C,W[7]=Y*q+U*A+E*P,W[2]=G*L+N*F+R*B,W[5]=G*k+N*z+R*C,W[8]=G*q+N*A+R*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],X=J[6],Y=J[7],U=J[8];return Q*K*U-Q*H*Y-$*W*U+$*H*X+Z*W*Y-Z*K*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],X=J[6],Y=J[7],U=J[8],E=U*K-H*Y,G=H*X-U*W,N=Y*W-K*X,R=Q*E+$*G+Z*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/R;return J[0]=E*L,J[1]=(Z*Y-U*$)*L,J[2]=(H*$-Z*K)*L,J[3]=G*L,J[4]=(U*Q-Z*X)*L,J[5]=(Z*W-H*Q)*L,J[6]=N*L,J[7]=($*X-Y*Q)*L,J[8]=(K*Q-$*W)*L,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,K,H){let X=Math.cos(W),Y=Math.sin(W);return this.set($*X,$*Y,-$*(X*K+Y*H)+K+J,-Z*Y,Z*X,-Z*(-Y*K+X*H)+H+Q,0,0,1),this}scale(J,Q){return c6("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(s5.makeScale(J,Q)),this}rotate(J){return c6("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(s5.makeRotation(-J)),this}translate(J,Q){return c6("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(s5.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var s5=new v0,wQ=new v0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),PQ=new v0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function HK(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=M7(W.r),W.g=M7(W.g),W.b=M7(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=M6(W.r),W.g=M6(W.g),W.b=M6(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[H].fromXYZ).multiply(this.spaces[K].toXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:wQ,fromXYZ:PQ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:wQ,fromXYZ:PQ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var u0=HK();function M7(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function M6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var Z6;class DJ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(Z6===void 0)Z6=L6("canvas");Z6.width=J.width,Z6.height=J.height;let Z=Z6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=Z6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=L6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=M7(W[K]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(M7(Q[$]/255)*255);else Q[$]=M7(Q[$]);return{data:Q,width:J.width,height:J.height}}else return S0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var XK=0;class e6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:XK++}),this.uuid=t6(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++)if(Z[K].isDataTexture)W.push(i5(Z[K].image));else W.push(i5(Z[K]))}else W=i5(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function i5(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return DJ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return S0("Texture: Unable to serialize Texture."),{}}var YK=0,o5=new p;class L9 extends B7{constructor(J=L9.DEFAULT_IMAGE,Q=L9.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,K=1008,H=1023,X=1009,Y=L9.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:YK++}),this.uuid=t6(),this.name="",this.source=new e6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=Y,this.format=H,this.internalFormat=null,this.type=X,this.offset=new m0(0,0),this.repeat=new m0(1,1),this.center=new m0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new v0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(o5).x}get height(){return this.source.getSize(o5).y}get depth(){return this.source.getSize(o5).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){S0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){S0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}L9.DEFAULT_IMAGE=null;L9.DEFAULT_MAPPING=300;L9.DEFAULT_ANISOTROPY=1;class H9{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W,this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W,this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W,this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,K=0.01,H=0.1,X=J.elements,Y=X[0],U=X[4],E=X[8],G=X[1],N=X[5],R=X[9],L=X[2],k=X[6],q=X[10];if(Math.abs(U-G)<0.01&&Math.abs(E-L)<0.01&&Math.abs(R-k)<0.01){if(Math.abs(U+G)<0.1&&Math.abs(E+L)<0.1&&Math.abs(R+k)<0.1&&Math.abs(Y+N+q-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let z=(Y+1)/2,A=(N+1)/2,B=(q+1)/2,C=(U+G)/4,P=(E+L)/4,D=(R+k)/4;if(z>A&&z>B)if(z<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(z),Z=C/$,W=P/$;else if(A>B)if(A<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(A),$=C/Z,W=D/Z;else if(B<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(B),$=P/W,Z=D/W;return this.set($,Z,W,Q),this}let F=Math.sqrt((k-R)*(k-R)+(E-L)*(E-L)+(G-U)*(G-U));if(Math.abs(F)<0.001)F=1;return this.x=(k-R)/F,this.y=(E-L)/F,this.z=(G-U)/F,this.w=Math.acos((Y+N+q-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=c0(this.x,J.x,Q.x),this.y=c0(this.y,J.y,Q.y),this.z=c0(this.z,J.z,Q.z),this.w=c0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=c0(this.x,J,Q),this.y=c0(this.y,J,Q),this.z=c0(this.z,J,Q),this.w=c0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(c0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RJ extends B7{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new H9(0,0,J,Q),this.scissorTest=!1,this.viewport=new H9(0,0,J,Q),this.textures=[];let Z=$.count;for(let W=0;W<Z;W++)this.textures[W]=new L9({width:J,height:Q,depth:$.depth}),this.textures[W].isRenderTargetTexture=!0,this.textures[W].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new e6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class y9 extends RJ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class X5 extends L9{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class J8 extends L9{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class K9{static{this.prototype.isMatrix4=!0}constructor(J,Q,$,Z,W,K,H,X,Y,U,E,G,N,R,L,k){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,X,Y,U,E,G,N,R,L,k)}set(J,Q,$,Z,W,K,H,X,Y,U,E,G,N,R,L,k){let q=this.elements;return q[0]=J,q[4]=Q,q[8]=$,q[12]=Z,q[1]=W,q[5]=K,q[9]=H,q[13]=X,q[2]=Y,q[6]=U,q[10]=E,q[14]=G,q[3]=N,q[7]=R,q[11]=L,q[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new K9().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/W6.setFromMatrixColumn(J,0).length(),W=1/W6.setFromMatrixColumn(J,1).length(),K=1/W6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,K=Math.cos($),H=Math.sin($),X=Math.cos(Z),Y=Math.sin(Z),U=Math.cos(W),E=Math.sin(W);if(J.order==="XYZ"){let G=K*U,N=K*E,R=H*U,L=H*E;Q[0]=X*U,Q[4]=-X*E,Q[8]=Y,Q[1]=N+R*Y,Q[5]=G-L*Y,Q[9]=-H*X,Q[2]=L-G*Y,Q[6]=R+N*Y,Q[10]=K*X}else if(J.order==="YXZ"){let G=X*U,N=X*E,R=Y*U,L=Y*E;Q[0]=G+L*H,Q[4]=R*H-N,Q[8]=K*Y,Q[1]=K*E,Q[5]=K*U,Q[9]=-H,Q[2]=N*H-R,Q[6]=L+G*H,Q[10]=K*X}else if(J.order==="ZXY"){let G=X*U,N=X*E,R=Y*U,L=Y*E;Q[0]=G-L*H,Q[4]=-K*E,Q[8]=R+N*H,Q[1]=N+R*H,Q[5]=K*U,Q[9]=L-G*H,Q[2]=-K*Y,Q[6]=H,Q[10]=K*X}else if(J.order==="ZYX"){let G=K*U,N=K*E,R=H*U,L=H*E;Q[0]=X*U,Q[4]=R*Y-N,Q[8]=G*Y+L,Q[1]=X*E,Q[5]=L*Y+G,Q[9]=N*Y-R,Q[2]=-Y,Q[6]=H*X,Q[10]=K*X}else if(J.order==="YZX"){let G=K*X,N=K*Y,R=H*X,L=H*Y;Q[0]=X*U,Q[4]=L-G*E,Q[8]=R*E+N,Q[1]=E,Q[5]=K*U,Q[9]=-H*U,Q[2]=-Y*U,Q[6]=N*E+R,Q[10]=G-L*E}else if(J.order==="XZY"){let G=K*X,N=K*Y,R=H*X,L=H*Y;Q[0]=X*U,Q[4]=-E,Q[8]=Y*U,Q[1]=G*E+L,Q[5]=K*U,Q[9]=N*E-R,Q[2]=R*E-N,Q[6]=H*U,Q[10]=L*E+G}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(UK,J,NK)}lookAt(J,Q,$){let Z=this.elements;if(h9.subVectors(J,Q),h9.lengthSq()===0)h9.z=1;if(h9.normalize(),w7.crossVectors($,h9),w7.lengthSq()===0){if(Math.abs($.z)===1)h9.x+=0.0001;else h9.z+=0.0001;h9.normalize(),w7.crossVectors($,h9)}return w7.normalize(),P8.crossVectors(h9,w7),Z[0]=w7.x,Z[4]=P8.x,Z[8]=h9.x,Z[1]=w7.y,Z[5]=P8.y,Z[9]=h9.y,Z[2]=w7.z,Z[6]=P8.z,Z[10]=h9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[4],X=$[8],Y=$[12],U=$[1],E=$[5],G=$[9],N=$[13],R=$[2],L=$[6],k=$[10],q=$[14],F=$[3],z=$[7],A=$[11],B=$[15],C=Z[0],P=Z[4],D=Z[8],V=Z[12],j=Z[1],g=Z[5],S=Z[9],x=Z[13],r=Z[2],w=Z[6],c=Z[10],i=Z[14],v=Z[3],Z0=Z[7],d=Z[11],a=Z[15];return W[0]=K*C+H*j+X*r+Y*v,W[4]=K*P+H*g+X*w+Y*Z0,W[8]=K*D+H*S+X*c+Y*d,W[12]=K*V+H*x+X*i+Y*a,W[1]=U*C+E*j+G*r+N*v,W[5]=U*P+E*g+G*w+N*Z0,W[9]=U*D+E*S+G*c+N*d,W[13]=U*V+E*x+G*i+N*a,W[2]=R*C+L*j+k*r+q*v,W[6]=R*P+L*g+k*w+q*Z0,W[10]=R*D+L*S+k*c+q*d,W[14]=R*V+L*x+k*i+q*a,W[3]=F*C+z*j+A*r+B*v,W[7]=F*P+z*g+A*w+B*Z0,W[11]=F*D+z*S+A*c+B*d,W[15]=F*V+z*x+A*i+B*a,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],K=J[1],H=J[5],X=J[9],Y=J[13],U=J[2],E=J[6],G=J[10],N=J[14],R=J[3],L=J[7],k=J[11],q=J[15],F=X*N-Y*G,z=H*N-Y*E,A=H*G-X*E,B=K*N-Y*U,C=K*G-X*U,P=K*E-H*U;return Q*(L*F-k*z+q*A)-$*(R*F-k*B+q*C)+Z*(R*z-L*B+q*P)-W*(R*A-L*C+k*P)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[1],K=J[5],H=J[9],X=J[2],Y=J[6],U=J[10];return Q*(K*U-H*Y)-$*(W*U-H*X)+Z*(W*Y-K*X)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],X=J[6],Y=J[7],U=J[8],E=J[9],G=J[10],N=J[11],R=J[12],L=J[13],k=J[14],q=J[15],F=Q*H-$*K,z=Q*X-Z*K,A=Q*Y-W*K,B=$*X-Z*H,C=$*Y-W*H,P=Z*Y-W*X,D=U*L-E*R,V=U*k-G*R,j=U*q-N*R,g=E*k-G*L,S=E*q-N*L,x=G*q-N*k,r=F*x-z*S+A*g+B*j-C*V+P*D;if(r===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/r;return J[0]=(H*x-X*S+Y*g)*w,J[1]=(Z*S-$*x-W*g)*w,J[2]=(L*P-k*C+q*B)*w,J[3]=(G*C-E*P-N*B)*w,J[4]=(X*j-K*x-Y*V)*w,J[5]=(Q*x-Z*j+W*V)*w,J[6]=(k*A-R*P-q*z)*w,J[7]=(U*P-G*A+N*z)*w,J[8]=(K*S-H*j+Y*D)*w,J[9]=($*j-Q*S-W*D)*w,J[10]=(R*C-L*A+q*F)*w,J[11]=(E*A-U*C-N*F)*w,J[12]=(H*V-K*g-X*D)*w,J[13]=(Q*g-$*V+Z*D)*w,J[14]=(L*z-R*B-k*F)*w,J[15]=(U*B-E*z+G*F)*w,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,K=J.x,H=J.y,X=J.z,Y=W*K,U=W*H;return this.set(Y*K+$,Y*H-Z*X,Y*X+Z*H,0,Y*H+Z*X,U*H+$,U*X-Z*K,0,Y*X-Z*H,U*X+Z*K,W*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,K){return this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,K=Q._y,H=Q._z,X=Q._w,Y=W+W,U=K+K,E=H+H,G=W*Y,N=W*U,R=W*E,L=K*U,k=K*E,q=H*E,F=X*Y,z=X*U,A=X*E,B=$.x,C=$.y,P=$.z;return Z[0]=(1-(L+q))*B,Z[1]=(N+A)*B,Z[2]=(R-z)*B,Z[3]=0,Z[4]=(N-A)*C,Z[5]=(1-(G+q))*C,Z[6]=(k+F)*C,Z[7]=0,Z[8]=(R+z)*P,Z[9]=(k-F)*P,Z[10]=(1-(G+L))*P,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let K=W6.set(Z[0],Z[1],Z[2]).length(),H=W6.set(Z[4],Z[5],Z[6]).length(),X=W6.set(Z[8],Z[9],Z[10]).length();if(W<0)K=-K;r9.copy(this);let Y=1/K,U=1/H,E=1/X;return r9.elements[0]*=Y,r9.elements[1]*=Y,r9.elements[2]*=Y,r9.elements[4]*=U,r9.elements[5]*=U,r9.elements[6]*=U,r9.elements[8]*=E,r9.elements[9]*=E,r9.elements[10]*=E,Q.setFromRotationMatrix(r9),$.x=K,$.y=H,$.z=X,this}makePerspective(J,Q,$,Z,W,K,H=2000,X=!1){let Y=this.elements,U=2*W/(Q-J),E=2*W/($-Z),G=(Q+J)/(Q-J),N=($+Z)/($-Z),R,L;if(X)R=W/(K-W),L=K*W/(K-W);else if(H===2000)R=-(K+W)/(K-W),L=-2*K*W/(K-W);else if(H===2001)R=-K/(K-W),L=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return Y[0]=U,Y[4]=0,Y[8]=G,Y[12]=0,Y[1]=0,Y[5]=E,Y[9]=N,Y[13]=0,Y[2]=0,Y[6]=0,Y[10]=R,Y[14]=L,Y[3]=0,Y[7]=0,Y[11]=-1,Y[15]=0,this}makeOrthographic(J,Q,$,Z,W,K,H=2000,X=!1){let Y=this.elements,U=2/(Q-J),E=2/($-Z),G=-(Q+J)/(Q-J),N=-($+Z)/($-Z),R,L;if(X)R=1/(K-W),L=K/(K-W);else if(H===2000)R=-2/(K-W),L=-(K+W)/(K-W);else if(H===2001)R=-1/(K-W),L=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return Y[0]=U,Y[4]=0,Y[8]=0,Y[12]=G,Y[1]=0,Y[5]=E,Y[9]=0,Y[13]=N,Y[2]=0,Y[6]=0,Y[10]=R,Y[14]=L,Y[3]=0,Y[7]=0,Y[11]=0,Y[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var W6=new p,r9=new K9,UK=new p(0,0,0),NK=new p(1,1,1),w7=new p,P8=new p,h9=new p,_Q=new K9,TQ=new k7;class C6{constructor(J=0,Q=0,$=0,Z=C6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],K=Z[4],H=Z[8],X=Z[1],Y=Z[5],U=Z[9],E=Z[2],G=Z[6],N=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(c0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-K,W);else this._x=Math.atan2(G,Y),this._z=0;break;case"YXZ":if(this._x=Math.asin(-c0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,N),this._z=Math.atan2(X,Y);else this._y=Math.atan2(-E,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(c0(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-E,N),this._z=Math.atan2(-K,Y);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-c0(E,-1,1)),Math.abs(E)<0.9999999)this._x=Math.atan2(G,N),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-K,Y);break;case"YZX":if(this._z=Math.asin(c0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,Y),this._y=Math.atan2(-E,W);else this._x=0,this._y=Math.atan2(H,N);break;case"XZY":if(this._z=Math.asin(-c0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(G,Y),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,N),this._y=0;break;default:S0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return _Q.makeRotationFromQuaternion(J),this.setFromRotationMatrix(_Q,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return TQ.setFromEuler(this),this.setFromQuaternion(TQ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}C6.DEFAULT_ORDER="XYZ";class Y5{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var EK=0,SQ=new p,K6=new k7,q7=new K9,_8=new p,m6=new p,GK=new p,qK=new k7,jQ=new p(1,0,0),fQ=new p(0,1,0),vQ=new p(0,0,1),yQ={type:"added"},FK={type:"removed"},H6={type:"childadded",child:null},a5={type:"childremoved",child:null};class g9 extends B7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:EK++}),this.uuid=t6(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=g9.DEFAULT_UP.clone();let J=new p,Q=new C6,$=new k7,Z=new p(1,1,1);function W(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new K9},normalMatrix:{value:new v0}}),this.matrix=new K9,this.matrixWorld=new K9,this.matrixAutoUpdate=g9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=g9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y5,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return K6.setFromAxisAngle(J,Q),this.quaternion.multiply(K6),this}rotateOnWorldAxis(J,Q){return K6.setFromAxisAngle(J,Q),this.quaternion.premultiply(K6),this}rotateX(J){return this.rotateOnAxis(jQ,J)}rotateY(J){return this.rotateOnAxis(fQ,J)}rotateZ(J){return this.rotateOnAxis(vQ,J)}translateOnAxis(J,Q){return SQ.copy(J).applyQuaternion(this.quaternion),this.position.add(SQ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(jQ,J)}translateY(J){return this.translateOnAxis(fQ,J)}translateZ(J){return this.translateOnAxis(vQ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(q7.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)_8.copy(J);else _8.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),m6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)q7.lookAt(m6,_8,this.up);else q7.lookAt(_8,m6,this.up);if(this.quaternion.setFromRotationMatrix(q7),Z)q7.extractRotation(Z.matrixWorld),K6.setFromRotationMatrix(q7),this.quaternion.premultiply(K6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return f0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(yQ),H6.child=J,this.dispatchEvent(H6),H6.child=null;else f0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(FK),a5.child=J,this.dispatchEvent(a5),a5.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),q7.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),q7.multiply(J.parent.matrixWorld);return J.applyMatrix4(q7),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(yQ),H6.child=J,this.dispatchEvent(H6),H6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(m6,J,GK),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(m6,qK,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*Z,W[13]+=$-W[1]*Q-W[5]*$-W[9]*Z,W[14]+=Z-W[2]*Q-W[6]*$-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let K=0,H=W.length;K<H;K++)W[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(H,X){if(H[X.uuid]===void 0)H[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let X=H.shapes;if(Array.isArray(X))for(let Y=0,U=X.length;Y<U;Y++){let E=X[Y];W(J.shapes,E)}else W(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let X=0,Y=this.material.length;X<Y;X++)H.push(W(J.materials,this.material[X]));Z.material=H}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let X=this.animations[H];Z.animations.push(W(J.animations,X))}}if(Q){let H=K(J.geometries),X=K(J.materials),Y=K(J.textures),U=K(J.images),E=K(J.shapes),G=K(J.skeletons),N=K(J.animations),R=K(J.nodes);if(H.length>0)$.geometries=H;if(X.length>0)$.materials=X;if(Y.length>0)$.textures=Y;if(U.length>0)$.images=U;if(E.length>0)$.shapes=E;if(G.length>0)$.skeletons=G;if(N.length>0)$.animations=N;if(R.length>0)$.nodes=R}return $.object=Z,$;function K(H){let X=[];for(let Y in H){let U=H[Y];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}g9.DEFAULT_UP=new p(0,1,0);g9.DEFAULT_MATRIX_AUTO_UPDATE=!0;g9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class O6 extends g9{constructor(){super();this.isGroup=!0,this.type="Group"}}var DK={type:"move"};class Q8{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new O6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new O6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new p,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new p;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new O6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new p,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new p,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,K=null,H=this._targetRay,X=this._grip,Y=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(Y&&J.hand){K=!0;for(let L of J.hand.values()){let k=Q.getJointPose(L,$),q=this._getHandJoint(Y,L);if(k!==null)q.matrix.fromArray(k.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=k.radius;q.visible=k!==null}let U=Y.joints["index-finger-tip"],E=Y.joints["thumb-tip"],G=U.position.distanceTo(E.position),N=0.02,R=0.005;if(Y.inputState.pinching&&G>N+R)Y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!Y.inputState.pinching&&G<=N-R)Y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(DK)}}}if(H!==null)H.visible=Z!==null;if(X!==null)X.visible=W!==null;if(Y!==null)Y.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new O6;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var s$={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},P7={h:0,s:0,l:0},T8={h:0,s:0,l:0};function r5(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class o0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,u0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=u0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,u0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=u0.workingColorSpace){if(J=ZK(J,1),Q=c0(Q,0,1),$=c0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-W;this.r=r5(K,W,J+0.3333333333333333),this.g=r5(K,W,J),this.b=r5(K,W,J-0.3333333333333333)}return u0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)S0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(100,parseFloat(W[1]))/100,Math.min(100,parseFloat(W[2]))/100,Math.min(100,parseFloat(W[3]))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:S0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else S0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=s$[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else S0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=M7(J.r),this.g=M7(J.g),this.b=M7(J.b),this}copyLinearToSRGB(J){return this.r=M6(J.r),this.g=M6(J.g),this.b=M6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return u0.workingToColorSpace(A9.copy(this),J),Math.round(c0(A9.r*255,0,255))*65536+Math.round(c0(A9.g*255,0,255))*256+Math.round(c0(A9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=u0.workingColorSpace){u0.workingToColorSpace(A9.copy(this),Q);let{r:$,g:Z,b:W}=A9,K=Math.max($,Z,W),H=Math.min($,Z,W),X,Y,U=(H+K)/2;if(H===K)X=0,Y=0;else{let E=K-H;switch(Y=U<=0.5?E/(K+H):E/(2-K-H),K){case $:X=(Z-W)/E+(Z<W?6:0);break;case Z:X=(W-$)/E+2;break;case W:X=($-Z)/E+4;break}X/=6}return J.h=X,J.s=Y,J.l=U,J}getRGB(J,Q=u0.workingColorSpace){return u0.workingToColorSpace(A9.copy(this),Q),J.r=A9.r,J.g=A9.g,J.b=A9.b,J}getStyle(J="srgb"){u0.workingToColorSpace(A9.copy(this),J);let{r:Q,g:$,b:Z}=A9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(P7),this.setHSL(P7.h+J,P7.s+Q,P7.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(P7),J.getHSL(T8);let $=c5(P7.h,T8.h,Q),Z=c5(P7.s,T8.s,Q),W=c5(P7.l,T8.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var A9=new o0;o0.NAMES=s$;var t9=new p,F7=new p,t5=new p,D7=new p,X6=new p,Y6=new p,bQ=new p,e5=new p,J1=new p,Q1=new p,$1=new H9,Z1=new H9,W1=new H9;class d9{constructor(J=new p,Q=new p,$=new p){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),t9.subVectors(J,Q),Z.cross(t9);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){t9.subVectors(Z,Q),F7.subVectors($,Q),t5.subVectors(J,Q);let K=t9.dot(t9),H=t9.dot(F7),X=t9.dot(t5),Y=F7.dot(F7),U=F7.dot(t5),E=K*Y-H*H;if(E===0)return W.set(0,0,0),null;let G=1/E,N=(Y*X-H*U)*G,R=(K*U-H*X)*G;return W.set(1-N-R,R,N)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,D7)===null)return!1;return D7.x>=0&&D7.y>=0&&D7.x+D7.y<=1}static getInterpolation(J,Q,$,Z,W,K,H,X){if(this.getBarycoord(J,Q,$,Z,D7)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,D7.x),X.addScaledVector(K,D7.y),X.addScaledVector(H,D7.z),X}static getInterpolatedAttribute(J,Q,$,Z,W,K){return $1.setScalar(0),Z1.setScalar(0),W1.setScalar(0),$1.fromBufferAttribute(J,Q),Z1.fromBufferAttribute(J,$),W1.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector($1,W.x),K.addScaledVector(Z1,W.y),K.addScaledVector(W1,W.z),K}static isFrontFacing(J,Q,$,Z){return t9.subVectors($,Q),F7.subVectors(J,Q),t9.cross(F7).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return t9.subVectors(this.c,this.b),F7.subVectors(this.a,this.b),t9.cross(F7).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return d9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return d9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return d9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return d9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return d9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,K,H;X6.subVectors(Z,$),Y6.subVectors(W,$),e5.subVectors(J,$);let X=X6.dot(e5),Y=Y6.dot(e5);if(X<=0&&Y<=0)return Q.copy($);J1.subVectors(J,Z);let U=X6.dot(J1),E=Y6.dot(J1);if(U>=0&&E<=U)return Q.copy(Z);let G=X*E-U*Y;if(G<=0&&X>=0&&U<=0&&X-U>0)return K=X/(X-U),Q.copy($).addScaledVector(X6,K);Q1.subVectors(J,W);let N=X6.dot(Q1),R=Y6.dot(Q1);if(R>=0&&N<=R)return Q.copy(W);let L=N*Y-X*R;if(L<=0&&Y>=0&&R<=0)return H=Y/(Y-R),Q.copy($).addScaledVector(Y6,H);let k=U*R-N*E;if(k<=0&&E-U>=0&&N-R>=0)return bQ.subVectors(W,Z),H=(E-U)/(E-U+(N-R)),Q.copy(Z).addScaledVector(bQ,H);let q=1/(k+L+G);return K=L*q,H=G*q,Q.copy($).addScaledVector(X6,K).addScaledVector(Y6,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class r7{constructor(J=new p(1/0,1/0,1/0),Q=new p(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(e9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(e9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=e9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,e9);else e9.fromBufferAttribute(W,K);e9.applyMatrix4(J.matrixWorld),this.expandByPoint(e9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();S8.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();S8.copy($.boundingBox)}S8.applyMatrix4(J.matrixWorld),this.union(S8)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,e9),e9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(l6),j8.subVectors(this.max,l6),U6.subVectors(J.a,l6),N6.subVectors(J.b,l6),E6.subVectors(J.c,l6),_7.subVectors(N6,U6),T7.subVectors(E6,N6),d7.subVectors(U6,E6);let Q=[0,-_7.z,_7.y,0,-T7.z,T7.y,0,-d7.z,d7.y,_7.z,0,-_7.x,T7.z,0,-T7.x,d7.z,0,-d7.x,-_7.y,_7.x,0,-T7.y,T7.x,0,-d7.y,d7.x,0];if(!K1(Q,U6,N6,E6,j8))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!K1(Q,U6,N6,E6,j8))return!1;return f8.crossVectors(_7,T7),Q=[f8.x,f8.y,f8.z],K1(Q,U6,N6,E6,j8)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,e9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(e9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return R7[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),R7[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),R7[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),R7[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),R7[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),R7[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),R7[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),R7[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(R7),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var R7=[new p,new p,new p,new p,new p,new p,new p,new p],e9=new p,S8=new r7,U6=new p,N6=new p,E6=new p,_7=new p,T7=new p,d7=new p,l6=new p,j8=new p,f8=new p,u7=new p;function K1(J,Q,$,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){u7.fromArray(J,K);let X=W.x*Math.abs(u7.x)+W.y*Math.abs(u7.y)+W.z*Math.abs(u7.z),Y=Q.dot(u7),U=$.dot(u7),E=Z.dot(u7);if(Math.max(-Math.max(Y,U,E),Math.min(Y,U,E))>X)return!1}return!0}var E9=new p,v8=new m0,RK=0;class H7 extends B7{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RK++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?FJ(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)v8.fromBufferAttribute(this,Q),v8.applyMatrix3(J),this.setXY(Q,v8.x,v8.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)E9.fromBufferAttribute(this,Q),E9.applyMatrix3(J),this.setXYZ(Q,E9.x,E9.y,E9.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)E9.fromBufferAttribute(this,Q),E9.applyMatrix4(J),this.setXYZ(Q,E9.x,E9.y,E9.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)E9.fromBufferAttribute(this,Q),E9.applyNormalMatrix(J),this.setXYZ(Q,E9.x,E9.y,E9.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)E9.fromBufferAttribute(this,Q),E9.transformDirection(J),this.setXYZ(Q,E9.x,E9.y,E9.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),Z=this._normalize(Z),W=this._normalize(W);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):WK(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):KK(J,this.array)}}class U5 extends H7{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class N5 extends H7{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class J7 extends H7{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var OK=new r7,d6=new p,H1=new p;class $8{constructor(J=new p,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else OK.setFromPoints(J).getCenter($);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;d6.subVectors(J,this.center);let Q=d6.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(d6,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else H1.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(d6.copy(J.center).add(H1)),this.expandByPoint(d6.copy(J.center).sub(H1));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var MK=0,m9=new K9,X1=new g9,G6=new p,x9=new r7,u6=new r7,O9=new p;class I7 extends B7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MK++}),this.uuid=t6(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((QK(J))?N5:U5)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new v0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return m9.makeRotationFromQuaternion(J),this.applyMatrix4(m9),this}rotateX(J){return m9.makeRotationX(J),this.applyMatrix4(m9),this}rotateY(J){return m9.makeRotationY(J),this.applyMatrix4(m9),this}rotateZ(J){return m9.makeRotationZ(J),this.applyMatrix4(m9),this}translate(J,Q,$){return m9.makeTranslation(J,Q,$),this.applyMatrix4(m9),this}scale(J,Q,$){return m9.makeScale(J,Q,$),this.applyMatrix4(m9),this}lookAt(J){return X1.lookAt(J),X1.updateMatrix(),this.applyMatrix4(X1.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(G6).negate(),this.translate(G6.x,G6.y,G6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new J7($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)S0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new r7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new p(-1/0,-1/0,-1/0),new p(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(x9.setFromBufferAttribute(W),this.morphTargetsRelative)O9.addVectors(this.boundingBox.min,x9.min),this.boundingBox.expandByPoint(O9),O9.addVectors(this.boundingBox.max,x9.max),this.boundingBox.expandByPoint(O9);else this.boundingBox.expandByPoint(x9.min),this.boundingBox.expandByPoint(x9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))f0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new $8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new p,1/0);return}if(J){let $=this.boundingSphere.center;if(x9.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if(u6.setFromBufferAttribute(H),this.morphTargetsRelative)O9.addVectors(x9.min,u6.min),x9.expandByPoint(O9),O9.addVectors(x9.max,u6.max),x9.expandByPoint(O9);else x9.expandByPoint(u6.min),x9.expandByPoint(u6.max)}x9.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++)O9.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(O9));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],X=this.morphTargetsRelative;for(let Y=0,U=H.count;Y<U;Y++){if(O9.fromBufferAttribute(H,Y),X)G6.fromBufferAttribute(J,Y),O9.add(G6);Z=Math.max(Z,$.distanceToSquared(O9))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))f0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){f0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new H7(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],X=[],Y=new Uint8Array($.count);for(let V=0;V<$.count;V++)H[V]=new p,X[V]=new p;let U=new p,E=new p,G=new p,N=new m0,R=new m0,L=new m0,k=new p,q=new p;function F(V,j,g){Y[V]=Y[j]=Y[g]=1,U.fromBufferAttribute($,V),E.fromBufferAttribute($,j),G.fromBufferAttribute($,g),N.fromBufferAttribute(W,V),R.fromBufferAttribute(W,j),L.fromBufferAttribute(W,g),E.sub(U),G.sub(U),R.sub(N),L.sub(N);let S=1/(R.x*L.y-L.x*R.y);if(!isFinite(S))return;k.copy(E).multiplyScalar(L.y).addScaledVector(G,-R.y).multiplyScalar(S),q.copy(G).multiplyScalar(R.x).addScaledVector(E,-L.x).multiplyScalar(S),H[V].add(k),H[j].add(k),H[g].add(k),X[V].add(q),X[j].add(q),X[g].add(q)}let z=this.groups;if(z.length===0)z=[{start:0,count:J.count}];for(let V=0,j=z.length;V<j;++V){let g=z[V],S=g.start,x=g.count;for(let r=S,w=S+x;r<w;r+=3)F(J.getX(r+0),J.getX(r+1),J.getX(r+2))}let A=new p,B=new p,C=new p,P=new p;function D(V){C.fromBufferAttribute(Z,V),P.copy(C);let j=H[V];A.copy(j),A.sub(C.multiplyScalar(C.dot(j))).normalize(),B.crossVectors(P,j);let S=B.dot(X[V])<0?-1:1;K.setXYZW(V,A.x,A.y,A.z,S)}for(let V=0,j=$.count;V<j;++V)if(Y[V])D(V);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new H7(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let G=0,N=$.count;G<N;G++)$.setXYZ(G,0,0,0);let Z=new p,W=new p,K=new p,H=new p,X=new p,Y=new p,U=new p,E=new p;if(J)for(let G=0,N=J.count;G<N;G+=3){let R=J.getX(G+0),L=J.getX(G+1),k=J.getX(G+2);Z.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,L),K.fromBufferAttribute(Q,k),U.subVectors(K,W),E.subVectors(Z,W),U.cross(E),H.fromBufferAttribute($,R),X.fromBufferAttribute($,L),Y.fromBufferAttribute($,k),H.add(U),X.add(U),Y.add(U),$.setXYZ(R,H.x,H.y,H.z),$.setXYZ(L,X.x,X.y,X.z),$.setXYZ(k,Y.x,Y.y,Y.z)}else for(let G=0,N=Q.count;G<N;G+=3)Z.fromBufferAttribute(Q,G+0),W.fromBufferAttribute(Q,G+1),K.fromBufferAttribute(Q,G+2),U.subVectors(K,W),E.subVectors(Z,W),U.cross(E),$.setXYZ(G+0,U.x,U.y,U.z),$.setXYZ(G+1,U.x,U.y,U.z),$.setXYZ(G+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)O9.fromBufferAttribute(J,Q),O9.normalize(),J.setXYZ(Q,O9.x,O9.y,O9.z)}toNonIndexed(){function J(H,X){let{array:Y,itemSize:U,normalized:E}=H,G=new Y.constructor(X.length*U),N=0,R=0;for(let L=0,k=X.length;L<k;L++){if(H.isInterleavedBufferAttribute)N=X[L]*H.data.stride+H.offset;else N=X[L]*U;for(let q=0;q<U;q++)G[R++]=Y[N++]}return new H7(G,U,E)}if(this.index===null)return S0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new I7,$=this.index.array,Z=this.attributes;for(let H in Z){let X=Z[H],Y=J(X,$);Q.setAttribute(H,Y)}let W=this.morphAttributes;for(let H in W){let X=[],Y=W[H];for(let U=0,E=Y.length;U<E;U++){let G=Y[U],N=J(G,$);X.push(N)}Q.morphAttributes[H]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,X=K.length;H<X;H++){let Y=K[H];Q.addGroup(Y.start,Y.count,Y.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let Y in X)if(X[Y]!==void 0)J[Y]=X[Y];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let Y=$[X];J.data.attributes[X]=Y.toJSON(J.data)}let Z={},W=!1;for(let X in this.morphAttributes){let Y=this.morphAttributes[X],U=[];for(let E=0,G=Y.length;E<G;E++){let N=Y[E];U.push(N.toJSON(J.data))}if(U.length>0)Z[X]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let Y in Z){let U=Z[Y];this.setAttribute(Y,U.clone(Q))}let W=J.morphAttributes;for(let Y in W){let U=[],E=W[Y];for(let G=0,N=E.length;G<N;G++)U.push(E[G].clone(Q));this.morphAttributes[Y]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let Y=0,U=K.length;Y<U;Y++){let E=K[Y];this.addGroup(E.start,E.count,E.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Y1=new p,LK=new p,VK=new v0;class K7{constructor(J=new p(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=Y1.subVectors($,Q).cross(LK.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(Y1),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(Z,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||VK.getNormalMatrix(J),Z=this.coplanarPoint(Y1).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var BK=0;class w6 extends B7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:BK++}),this.uuid=t6(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new o0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){S0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){S0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)$.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)$.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((W)=>W.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let K=[];for(let H in W){let X=W[H];delete X.metadata,K.push(X)}return K}if(Q){let W=Z(J.textures),K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new o0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new K7().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new m0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new m0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var O7=new p,U1=new p,y8=new p,b8=new p;class OJ{constructor(J=new p,Q=new p(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,O7)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=O7.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return O7.copy(this.origin).addScaledVector(this.direction,Q),O7.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){U1.copy(J).add(Q).multiplyScalar(0.5),y8.copy(Q).sub(J).normalize(),b8.copy(this.origin).sub(U1);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(y8),H=b8.dot(this.direction),X=-b8.dot(y8),Y=b8.lengthSq(),U=Math.abs(1-K*K),E,G,N,R;if(U>0)if(E=K*X-H,G=K*H-X,R=W*U,E>=0)if(G>=-R)if(G<=R){let L=1/U;E*=L,G*=L,N=E*(E+K*G+2*H)+G*(K*E+G+2*X)+Y}else G=W,E=Math.max(0,-(K*G+H)),N=-E*E+G*(G+2*X)+Y;else G=-W,E=Math.max(0,-(K*G+H)),N=-E*E+G*(G+2*X)+Y;else if(G<=-R)E=Math.max(0,-(-K*W+H)),G=E>0?-W:Math.min(Math.max(-W,-X),W),N=-E*E+G*(G+2*X)+Y;else if(G<=R)E=0,G=Math.min(Math.max(-W,-X),W),N=G*(G+2*X)+Y;else E=Math.max(0,-(K*W+H)),G=E>0?W:Math.min(Math.max(-W,-X),W),N=-E*E+G*(G+2*X)+Y;else G=K>0?-W:W,E=Math.max(0,-(K*G+H)),N=-E*E+G*(G+2*X)+Y;if($)$.copy(this.origin).addScaledVector(this.direction,E);if(Z)Z.copy(U1).addScaledVector(y8,G);return N}intersectSphere(J,Q){if(J.radius<0)return null;O7.subVectors(J.center,this.origin);let $=O7.dot(this.direction),Z=O7.dot(O7)-$*$,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),H=$-K,X=$+K;if(X<0)return null;if(H<0)return this.at(X,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,K,H,X,Y=1/this.direction.x,U=1/this.direction.y,E=1/this.direction.z,G=this.origin;if(Y>=0)$=(J.min.x-G.x)*Y,Z=(J.max.x-G.x)*Y;else $=(J.max.x-G.x)*Y,Z=(J.min.x-G.x)*Y;if(U>=0)W=(J.min.y-G.y)*U,K=(J.max.y-G.y)*U;else W=(J.max.y-G.y)*U,K=(J.min.y-G.y)*U;if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(E>=0)H=(J.min.z-G.z)*E,X=(J.max.z-G.z)*E;else H=(J.max.z-G.z)*E,X=(J.min.z-G.z)*E;if($>X||H>Z)return null;if(H>$||$!==$)$=H;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,O7)!==null}intersectTriangle(J,Q,$,Z,W){let K=this.origin,H=this.direction,X=H.x,Y=H.y,U=H.z,E=J.x-K.x,G=J.y-K.y,N=J.z-K.z,R=Q.x-K.x,L=Q.y-K.y,k=Q.z-K.z,q=$.x-K.x,F=$.y-K.y,z=$.z-K.z,A=Math.abs(X),B=Math.abs(Y),C=Math.abs(U),P,D,V,j,g,S,x,r,w,c,i,v;if(A>=B&&A>=C)if(V=X,S=E,w=R,v=q,X>=0)P=Y,D=U,j=G,g=N,x=L,r=k,c=F,i=z;else P=U,D=Y,j=N,g=G,x=k,r=L,c=z,i=F;else if(B>=C)if(V=Y,S=G,w=L,v=F,Y>=0)P=U,D=X,j=N,g=E,x=k,r=R,c=z,i=q;else P=X,D=U,j=E,g=N,x=R,r=k,c=q,i=z;else if(V=U,S=N,w=k,v=z,U>=0)P=X,D=Y,j=E,g=G,x=R,r=L,c=q,i=F;else P=Y,D=X,j=G,g=E,x=L,r=R,c=F,i=q;if(V===0)return null;let Z0=P/V,d=D/V,a=1/V,Q0=j-Z0*S,B0=g-d*S,o=x-Z0*w,J0=r-d*w,O0=c-Z0*v,C0=i-d*v,z0=O0*J0-C0*o,R0=Q0*C0-B0*O0,n0=o*B0-J0*Q0;if(Z){if(z0<0||R0<0||n0<0)return null}else if((z0<0||R0<0||n0<0)&&(z0>0||R0>0||n0>0))return null;let h0=z0+R0+n0;if(h0===0)return null;let j0=a*(z0*S+R0*w+n0*v);if(h0>0?j0<0:j0>0)return null;return this.at(j0/h0,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class MJ extends w6{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new o0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new C6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var hQ=new K9,c7=new OJ,h8=new $8,xQ=new p,x8=new p,g8=new p,p8=new p,N1=new p,m8=new p,gQ=new p,l8=new p;class w9 extends g9{constructor(J=new I7,Q=new MJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(W&&H){m8.set(0,0,0);for(let X=0,Y=W.length;X<Y;X++){let U=H[X],E=W[X];if(U===0)continue;if(N1.fromBufferAttribute(E,J),K)m8.addScaledVector(N1,U);else m8.addScaledVector(N1.sub(Q),U)}Q.add(m8)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(h8.copy($.boundingSphere),h8.applyMatrix4(W),c7.copy(J.ray).recast(J.near),h8.containsPoint(c7.origin)===!1){if(c7.intersectSphere(h8,xQ)===null)return;if(c7.origin.distanceToSquared(xQ)>(J.far-J.near)**2)return}if(hQ.copy(W).invert(),c7.copy(J.ray).applyMatrix4(hQ),$.boundingBox!==null){if(c7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,c7)}_computeIntersections(J,Q,$){let Z,W=this.geometry,K=this.material,H=W.index,X=W.attributes.position,Y=W.attributes.uv,U=W.attributes.uv1,E=W.attributes.normal,G=W.groups,N=W.drawRange;if(H!==null)if(Array.isArray(K))for(let R=0,L=G.length;R<L;R++){let k=G[R],q=K[k.materialIndex],F=Math.max(k.start,N.start),z=Math.min(H.count,Math.min(k.start+k.count,N.start+N.count));for(let A=F,B=z;A<B;A+=3){let C=H.getX(A),P=H.getX(A+1),D=H.getX(A+2);if(Z=d8(this,q,J,$,Y,U,E,C,P,D),Z)Z.faceIndex=Math.floor(A/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let R=Math.max(0,N.start),L=Math.min(H.count,N.start+N.count);for(let k=R,q=L;k<q;k+=3){let F=H.getX(k),z=H.getX(k+1),A=H.getX(k+2);if(Z=d8(this,K,J,$,Y,U,E,F,z,A),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(K))for(let R=0,L=G.length;R<L;R++){let k=G[R],q=K[k.materialIndex],F=Math.max(k.start,N.start),z=Math.min(X.count,Math.min(k.start+k.count,N.start+N.count));for(let A=F,B=z;A<B;A+=3){let C=A,P=A+1,D=A+2;if(Z=d8(this,q,J,$,Y,U,E,C,P,D),Z)Z.faceIndex=Math.floor(A/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let R=Math.max(0,N.start),L=Math.min(X.count,N.start+N.count);for(let k=R,q=L;k<q;k+=3){let F=k,z=k+1,A=k+2;if(Z=d8(this,K,J,$,Y,U,E,F,z,A),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}}}function kK(J,Q,$,Z,W,K,H,X){let Y;if(Q.side===1)Y=Z.intersectTriangle(H,K,W,!0,X);else Y=Z.intersectTriangle(W,K,H,Q.side===0,X);if(Y===null)return null;l8.copy(X),l8.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(l8);if(U<$.near||U>$.far)return null;return{distance:U,point:l8.clone(),object:J}}function d8(J,Q,$,Z,W,K,H,X,Y,U){J.getVertexPosition(X,x8),J.getVertexPosition(Y,g8),J.getVertexPosition(U,p8);let E=kK(J,Q,$,Z,x8,g8,p8,gQ);if(E){let G=new p;if(d9.getBarycoord(gQ,x8,g8,p8,G),W)E.uv=d9.getInterpolatedAttribute(W,X,Y,U,G,new m0);if(K)E.uv1=d9.getInterpolatedAttribute(K,X,Y,U,G,new m0);if(H){if(E.normal=d9.getInterpolatedAttribute(H,X,Y,U,G,new p),E.normal.dot(Z.direction)>0)E.normal.multiplyScalar(-1)}let N={a:X,b:Y,c:U,normal:new p,materialIndex:0};d9.getNormal(x8,g8,p8,N.normal),E.face=N,E.barycoord=G}return E}class Z8 extends L9{constructor(J=null,Q=1,$=1,Z,W,K,H,X,Y=1003,U=1003,E,G){super(null,K,H,X,Y,U,Z,W,E,G);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class P6 extends H7{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var n7=new $8,IK=new m0(0.5,0.5),u8=new p;class B6{constructor(J=new K7,Q=new K7,$=new K7,Z=new K7,W=new K7,K=new K7){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,K=W[0],H=W[1],X=W[2],Y=W[3],U=W[4],E=W[5],G=W[6],N=W[7],R=W[8],L=W[9],k=W[10],q=W[11],F=W[12],z=W[13],A=W[14],B=W[15];if(Z[0].setComponents(Y-K,N-U,q-R,B-F).normalize(),Z[1].setComponents(Y+K,N+U,q+R,B+F).normalize(),Z[2].setComponents(Y+H,N+E,q+L,B+z).normalize(),Z[3].setComponents(Y-H,N-E,q-L,B-z).normalize(),$)Z[4].setComponents(X,G,k,A).normalize(),Z[5].setComponents(Y-X,N-G,q-k,B-A).normalize();else if(Z[4].setComponents(Y-X,N-G,q-k,B-A).normalize(),Q===2000)Z[5].setComponents(Y+X,N+G,q+k,B+A).normalize();else if(Q===2001)Z[5].setComponents(X,G,k,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();n7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();n7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(n7)}intersectsSprite(J){n7.center.set(0,0,0);let Q=IK.distanceTo(J.center);return n7.radius=0.7071067811865476+Q,n7.applyMatrix4(J.matrixWorld),this.intersectsSphere(n7)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(u8.x=Z.normal.x>0?J.max.x:J.min.x,u8.y=Z.normal.y>0?J.max.y:J.min.y,u8.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(u8)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var pQ=new K9;class E5{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,$=this._frustums;for(let Z=0;Z<Q.length;Z++){let W=Q[Z];if(pQ.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$[Z]===void 0)$[Z]=new B6;$[Z].setFromProjectionMatrix(pQ,W.coordinateSystem,W.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,$=J._frustums;for(let Z=0;Z<J._count;Z++){if(Q[Z]===void 0)Q[Z]=new B6;Q[Z].copy($[Z])}return this._count=J._count,this}clone(){return new E5().copy(this)}}class G5 extends L9{constructor(J=[],Q=301,$,Z,W,K,H,X,Y,U){super(J,Q,$,Z,W,K,H,X,Y,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class h7 extends L9{constructor(J,Q,$=1014,Z,W,K,H=1003,X=1003,Y,U=1026,E=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let G={width:J,height:Q,depth:E};super(G,Z,W,K,H,X,U,$,Y);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new e6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class q5 extends h7{constructor(J,Q=1014,$=301,Z,W,K=1003,H=1003,X,Y=1026){let U={width:J,height:J,depth:1},E=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,K,H,X,Y);this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class F5 extends L9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class _6 extends I7{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};let H=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let X=[],Y=[],U=[],E=[],G=0,N=0;R("z","y","x",-1,-1,$,Q,J,K,W,0),R("z","y","x",1,-1,$,Q,-J,K,W,1),R("x","z","y",1,1,J,$,Q,Z,K,2),R("x","z","y",1,-1,J,$,-Q,Z,K,3),R("x","y","z",1,-1,J,Q,$,Z,W,4),R("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(X),this.setAttribute("position",new J7(Y,3)),this.setAttribute("normal",new J7(U,3)),this.setAttribute("uv",new J7(E,2));function R(L,k,q,F,z,A,B,C,P,D,V){let j=A/P,g=B/D,S=A/2,x=B/2,r=C/2,w=P+1,c=D+1,i=0,v=0,Z0=new p;for(let d=0;d<c;d++){let a=d*g-x;for(let Q0=0;Q0<w;Q0++){let B0=Q0*j-S;Z0[L]=B0*F,Z0[k]=a*z,Z0[q]=r,Y.push(Z0.x,Z0.y,Z0.z),Z0[L]=0,Z0[k]=0,Z0[q]=C>0?1:-1,U.push(Z0.x,Z0.y,Z0.z),E.push(Q0/P),E.push(1-d/D),i+=1}}for(let d=0;d<D;d++)for(let a=0;a<P;a++){let Q0=G+a+w*d,B0=G+a+w*(d+1),o=G+(a+1)+w*(d+1),J0=G+(a+1)+w*d;X.push(Q0,B0,J0),X.push(B0,o,J0),v+=6}H.addGroup(N,v,V),N+=v,G+=i}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new _6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class c9 extends I7{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,K=Q/2,H=Math.floor($),X=Math.floor(Z),Y=H+1,U=X+1,E=J/H,G=Q/X,N=[],R=[],L=[],k=[];for(let q=0;q<U;q++){let F=q*G-K;for(let z=0;z<Y;z++){let A=z*E-W;R.push(A,-F,0),L.push(0,0,1),k.push(z/H),k.push(1-q/X)}}for(let q=0;q<X;q++)for(let F=0;F<H;F++){let z=F+Y*q,A=F+Y*(q+1),B=F+1+Y*(q+1),C=F+1+Y*q;N.push(z,A,C),N.push(A,B,C)}this.setIndex(N),this.setAttribute("position",new J7(R,3)),this.setAttribute("normal",new J7(L,3)),this.setAttribute("uv",new J7(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new c9(J.width,J.height,J.widthSegments,J.heightSegments)}}function t7(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(mQ(W))if(W.isRenderTargetTexture)S0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))if(mQ(W[0])){let K=[];for(let H=0,X=W.length;H<X;H++)K[H]=W[H].clone();Q[$][Z]=K}else Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function P9(J){let Q={};for(let $=0;$<J.length;$++){let Z=t7(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function mQ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function zK(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function LJ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return u0.workingColorSpace}var i$={clone:t7,merge:P9},AK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _9 extends w6{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AK,this.fragmentShader=CK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=t7(J.uniforms),this.uniformsGroups=zK(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[Z]={type:"m4",value:K.toArray()};else Q.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new o0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new m0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new p().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new H9().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new v0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new K9().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class VJ extends _9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class BJ extends w6{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class kJ extends w6{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function q6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function c8(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class e7{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let K;Q:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(W=Z,Z=Q[++$],J<Z)break J}K=Q.length;break Q}if(!(J>=W)){let H=Q[1];if(J<H)$=2,W=H;for(let X=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=W,W=Q[--$-1],J>=W)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)Q[K]=$[W+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class IJ extends e7{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,K=J+1,H=Z[W],X=Z[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-$;break;case 2402:W=Z.length-2,H=Q+Z[W]-Z[W+1];break;default:W=J,H=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,X=2*$-Q;break;case 2402:K=1,X=$+Z[1]-Z[0];break;default:K=J-1,X=Q}let Y=($-Q)*0.5,U=this.valueSize;this._weightPrev=Y/(Q-H),this._weightNext=Y/(X-$),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,X=J*H,Y=X-H,U=this._offsetPrev,E=this._offsetNext,G=this._weightPrev,N=this._weightNext,R=($-Q)/(Z-Q),L=R*R,k=L*R,q=-G*k+2*G*L-G*R,F=(1+G)*k+(-1.5-2*G)*L+(-0.5+G)*R+1,z=(-1-N)*k+(1.5+N)*L+0.5*R,A=N*k-N*L;for(let B=0;B!==H;++B)W[B]=q*K[U+B]+F*K[Y+B]+z*K[X+B]+A*K[E+B];return W}}class zJ extends e7{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,X=J*H,Y=X-H,U=($-Q)/(Z-Q),E=1-U;for(let G=0;G!==H;++G)W[G]=K[Y+G]*E+K[X+G]*U;return W}}class AJ extends e7{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class CJ extends e7{interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,X=J*H,Y=X-H,U=this.inTangents,E=this.outTangents;if(!U||!E){let R=($-Q)/(Z-Q),L=1-R;for(let k=0;k!==H;++k)W[k]=K[Y+k]*L+K[X+k]*R;return W}let G=H*2,N=J-1;for(let R=0;R!==H;++R){let L=K[Y+R],k=K[X+R],q=N*G+R*2,F=E[q],z=E[q+1],A=J*G+R*2,B=U[A],C=U[A+1],P=PK($,Q,F,B,Z);W[R]=o$(P,L,z,C,k)}return W}}function o$(J,Q,$,Z,W){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*Z+J*J*J*W}function wK(J,Q,$,Z,W){let K=1-J;return 3*K*K*($-Q)+6*K*J*(Z-$)+3*J*J*(W-Z)}function PK(J,Q,$,Z,W){let K=(J-Q)/(W-Q);for(let H=0;H<8;H++){let X=o$(K,Q,$,Z,W)-J;if(Math.abs(X)<0.0000000001)break;let Y=wK(K,Q,$,Z,W);if(Math.abs(Y)<0.0000000001)break;K=Math.max(0,Math.min(1,K-X/Y))}return K}class n9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=q6(Q,this.TimeBufferType),this.values=q6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:q6(J.times,Array),values:q6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(c8(J.settings))$.settings={inTangents:q6(J.settings.inTangents,Array),outTangents:q6(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new AJ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new zJ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new IJ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new CJ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return S0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J;if(c8(this.settings))lQ(this.settings.inTangents,J),lQ(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(c8(this.settings))dQ(this.settings.inTangents,J),dQ(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,K=Z-1;while(W!==Z&&$[W]<J)++W;while(K!==-1&&$[K]>Q)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=$.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)f0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)f0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let X=$[H];if(typeof X==="number"&&isNaN(X)){f0("KeyframeTrack: Time is not a valid number.",this,H,X),J=!1;break}if(K!==null&&K>X){f0("KeyframeTrack: Out of order keys.",this,H,X,K),J=!1;break}K=X}if(Z!==void 0){if($K(Z))for(let H=0,X=Z.length;H!==X;++H){let Y=Z[H];if(isNaN(Y)){f0("KeyframeTrack: Value is not a valid number.",this,H,Y),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let X=!1,Y=J[H],U=J[H+1];if(Y!==U&&(H!==1||Y!==J[0]))if(!Z){let E=H*$,G=E-$,N=E+$;for(let R=0;R!==$;++R){let L=Q[E+R];if(L!==Q[G+R]||L!==Q[N+R]){X=!0;break}}}else X=!0;if(X){if(H!==K){J[K]=J[H];let E=H*$,G=K*$;for(let N=0;N!==$;++N)Q[G+N]=Q[E+N]}++K}}if(W>0){J[K]=J[W];for(let H=W*$,X=K*$,Y=0;Y!==$;++Y)Q[X+Y]=Q[H+Y];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,c8(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function lQ(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]+=Q}function dQ(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}n9.prototype.ValueTypeName="";n9.prototype.TimeBufferType=Float32Array;n9.prototype.ValueBufferType=Float32Array;n9.prototype.DefaultInterpolation=2301;class J6 extends n9{constructor(J,Q,$){super(J,Q,$)}}J6.prototype.ValueTypeName="bool";J6.prototype.ValueBufferType=Array;J6.prototype.DefaultInterpolation=2300;J6.prototype.InterpolantFactoryMethodLinear=void 0;J6.prototype.InterpolantFactoryMethodSmooth=void 0;class wJ extends n9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}wJ.prototype.ValueTypeName="color";class PJ extends n9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}PJ.prototype.ValueTypeName="number";class _J extends e7{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,X=($-Q)/(Z-Q),Y=J*H;for(let U=Y+H;Y!==U;Y+=4)k7.slerpFlat(W,0,K,Y-H,K,Y,X);return W}}class D5 extends n9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new _J(this.times,this.values,this.getValueSize(),J)}}D5.prototype.ValueTypeName="quaternion";D5.prototype.InterpolantFactoryMethodSmooth=void 0;class Q6 extends n9{constructor(J,Q,$){super(J,Q,$)}}Q6.prototype.ValueTypeName="string";Q6.prototype.ValueBufferType=Array;Q6.prototype.DefaultInterpolation=2300;Q6.prototype.InterpolantFactoryMethodLinear=void 0;Q6.prototype.InterpolantFactoryMethodSmooth=void 0;class TJ extends n9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}TJ.prototype.ValueTypeName="vector";var i8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(uQ(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(uQ(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function uQ(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class SJ{constructor(J,Q,$){let Z=this,W=!1,K=0,H=0,X=void 0,Y=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,H);if(K===H){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,E){return Y.push(U,E),this},this.removeHandler=function(U){let E=Y.indexOf(U);if(E!==-1)Y.splice(E,2);return this},this.getHandler=function(U){for(let E=0,G=Y.length;E<G;E+=2){let N=Y[E],R=Y[E+1];if(N.global)N.lastIndex=0;if(N.test(U))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var a$=new SJ;class W8{constructor(J){if(this.manager=J!==void 0?J:a$,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}W8.DEFAULT_MATERIAL_NAME="__DEFAULT";var F6=new WeakMap;class jJ extends W8{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=i8.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0);else{let E=F6.get(K);if(E===void 0)E=[],F6.set(K,E);E.push({onLoad:Q,onError:Z})}return K}let H=L6("img");function X(){if(U(),Q)Q(this);let E=F6.get(this)||[];for(let G=0;G<E.length;G++){let N=E[G];if(N.onLoad)N.onLoad(this)}F6.delete(this),W.manager.itemEnd(J)}function Y(E){if(U(),Z)Z(E);i8.remove(`image:${J}`);let G=F6.get(this)||[];for(let N=0;N<G.length;N++){let R=G[N];if(R.onError)R.onError(E)}F6.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){H.removeEventListener("load",X,!1),H.removeEventListener("error",Y,!1)}if(H.addEventListener("load",X,!1),H.addEventListener("error",Y,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return i8.add(`image:${J}`,H),W.manager.itemStart(J),H.fetchPriority=this.priority,H.src=J,H}}class R5 extends W8{constructor(J){super(J)}load(J,Q,$,Z){let W=new L9,K=new jJ(this.manager);return K.setPriority(this.priority),K.setCache(this.cache),K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(W.image=H,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}var n8=new p,s8=new k7,W7=new p;class O5 extends g9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new K9,this.projectionMatrix=new K9,this.projectionMatrixInverse=new K9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(n8,s8,W7),W7.x===1&&W7.y===1&&W7.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(n8,s8,W7.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(n8,s8,W7),W7.x===1&&W7.y===1&&W7.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(n8,s8,W7.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var S7=new p,cQ=new m0,nQ=new m0;class l9 extends O5{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=o8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(u5*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return o8*2*Math.atan(Math.tan(u5*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){S7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(S7.x,S7.y).multiplyScalar(-J/S7.z),S7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(S7.x,S7.y).multiplyScalar(-J/S7.z)}getViewSize(J,Q){return this.getViewBounds(J,cQ,nQ),Q.subVectors(nQ,cQ)}setViewOffset(J,Q,$,Z,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(u5*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:Y}=K;W+=K.offsetX*Z/X,Q-=K.offsetY*$/Y,Z*=K.width/X,$*=K.height/Y}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class Y7 extends O5{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,K=$+J,H=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let Y=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=Y*this.view.offsetX,K=W+Y*this.view.width,H-=U*this.view.offsetY,X=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class $6 extends I7{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var D6=-90,R6=1;class K8 extends g9{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new l9(D6,R6,J,Q);Z.layers=this.layers,this.add(Z);let W=new l9(D6,R6,J,Q);W.layers=this.layers,this.add(W);let K=new l9(D6,R6,J,Q);K.layers=this.layers,this.add(K);let H=new l9(D6,R6,J,Q);H.layers=this.layers,this.add(H);let X=new l9(D6,R6,J,Q);X.layers=this.layers,this.add(X);let Y=new l9(D6,R6,J,Q);Y.layers=this.layers,this.add(Y)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,K,H,X]=Q;for(let Y of Q)this.remove(Y);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let Y of Q)this.add(Y),Y.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,X,Y,U]=this.children,E=J.getRenderTarget(),G=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let L=$.texture.mipmapsAutoUpdate;$.texture.mipmapsAutoUpdate=!1;let k=!1;if(J.isWebGLRenderer===!0)k=J.state.buffers.depth.getReversed();else k=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,4,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),$.texture.mipmapsAutoUpdate=L,J.setRenderTarget($,5,Z),k&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(E,G,N),J.xr.enabled=R,$.texture.needsPMREMUpdate=!0}}class fJ extends l9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var vJ="\\[\\]\\.:\\/",_K=new RegExp("["+vJ+"]","g"),yJ="[^"+vJ+"]",TK="[^"+vJ.replace("\\.","")+"]",SK=/((?:WC+[\/:])*)/.source.replace("WC",yJ),jK=/(WCOD+)?/.source.replace("WCOD",TK),fK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yJ),vK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yJ),yK=new RegExp("^"+SK+jK+fK+vK+"$"),bK=["material","materials","bones","map"];class r${constructor(J,Q,$){let Z=$||r0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class r0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||r0.parseTrackName(Q),this.node=r0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new r0(J,Q,$);else return new r0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(_K,"")}static parseTrackName(J){let Q=yK.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(bK.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let X=$(H.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=r0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){S0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let Y=Q.objectIndex;switch($){case"materials":if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){f0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){f0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===Y){Y=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){f0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){f0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(Y!==void 0){if(J[Y]===void 0){f0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[Y]}}let K=J[Z];if(K===void 0){let Y=Q.nodeName;f0("PropertyBinding: Trying to update property for track: "+Y+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))X=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}r0.Composite=r$;r0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};r0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};r0.prototype.GetterByBindingType=[r0.prototype._getValue_direct,r0.prototype._getValue_array,r0.prototype._getValue_arrayElement,r0.prototype._getValue_toArray];r0.prototype.SetterByBindingTypeAndVersioning=[[r0.prototype._setValue_direct,r0.prototype._setValue_direct_setNeedsUpdate,r0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_array,r0.prototype._setValue_array_setNeedsUpdate,r0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_arrayElement,r0.prototype._setValue_arrayElement_setNeedsUpdate,r0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[r0.prototype._setValue_fromArray,r0.prototype._setValue_fromArray_setNeedsUpdate,r0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xM=new Float32Array(1);class t${static{this.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=Z,this}}function bJ(J,Q,$,Z){let W=hK(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function hK(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)S0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function VZ(){let J=null,Q=!1,$=null,Z=null;function W(K,H){Z=J.requestAnimationFrame(W),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function xK(J){let Q=new WeakMap;function $(X,Y){let{array:U,usage:E}=X,G=U.byteLength,N=J.createBuffer();J.bindBuffer(Y,N),J.bufferData(Y,U,E),X.onUploadCallback();let R;if(U instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)R=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)R=J.SHORT;else if(U instanceof Uint32Array)R=J.UNSIGNED_INT;else if(U instanceof Int32Array)R=J.INT;else if(U instanceof Int8Array)R=J.BYTE;else if(U instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:R,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:G}}function Z(X,Y,U){let{array:E,updateRanges:G}=Y;if(J.bindBuffer(U,X),G.length===0)J.bufferSubData(U,0,E);else{G.sort((R,L)=>R.start-L.start);let N=0;for(let R=1;R<G.length;R++){let L=G[N],k=G[R];if(k.start<=L.start+L.count+1)L.count=Math.max(L.count,k.start+k.count-L.start);else++N,G[N]=k}G.length=N+1;for(let R=0,L=G.length;R<L;R++){let k=G[R];J.bufferSubData(U,k.start*E.BYTES_PER_ELEMENT,E,k.start,k.count)}Y.clearUpdateRanges()}Y.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function K(X){if(X.isInterleavedBufferAttribute)X=X.data;let Y=Q.get(X);if(Y)J.deleteBuffer(Y.buffer),Q.delete(X)}function H(X,Y){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let E=Q.get(X);if(!E||E.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,Y));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,Y),U.version=X.version}}return{get:W,remove:K,update:H}}var gK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pK=`#ifdef USE_ALPHAHASH
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
#endif`,mK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cK=`#ifdef USE_AOMAP
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
#endif`,nK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sK=`#ifdef USE_BATCHING
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
#endif`,iK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rK=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tK=`#ifdef USE_IRIDESCENCE
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
#endif`,eK=`#ifdef USE_BUMPMAP
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
#endif`,JH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$H=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,KH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,YH=`#define PI 3.141592653589793
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
} // validated`,UH=`vec3 transformedNormal = objectNormal;
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
#endif`,NH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FH="gl_FragColor = linearToOutputTexel( gl_FragColor );",DH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RH=`#ifdef USE_ENVMAP
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
#endif`,OH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,MH=`#ifdef USE_ENVMAP
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
#endif`,LH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VH=`#ifdef USE_ENVMAP
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
#endif`,BH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AH=`#ifdef USE_GRADIENTMAP
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
}`,CH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_H=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,TH=`#ifdef USE_ENVMAP
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
#endif`,SH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yH=`PhysicalMaterial material;
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
#endif`,bH=`uniform sampler2D dfgLUT;
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
}`,hH=`
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
#endif`,xH=`#if defined( RE_IndirectDiffuse )
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
#endif`,gH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pH=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,mH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iH=`#if defined( USE_POINTS_UV )
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
#endif`,oH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tH=`#if defined( USE_MORPHCOLORS )
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
#endif`,eH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JX=`#ifdef USE_MORPHTARGETS
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
#endif`,QX=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$X=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZX=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HX=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,XX=`#ifdef USE_NORMALMAP
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
#endif`,YX=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UX=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NX=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EX=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GX=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qX=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FX=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DX=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RX=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OX=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MX=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LX=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VX=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BX=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kX=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IX=`float getShadowMask() {
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
}`,zX=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AX=`#ifdef USE_SKINNING
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
#endif`,CX=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wX=`#ifdef USE_SKINNING
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
#endif`,PX=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_X=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TX=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SX=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jX=`#ifdef USE_TRANSMISSION
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
#endif`,fX=`#ifdef USE_TRANSMISSION
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
#endif`,vX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hX=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xX=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gX=`uniform sampler2D t2D;
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
}`,pX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mX=`uniform float backgroundBlurriness;
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
}`,lX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dX=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uX=`#include <common>
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
}`,cX=`#if DEPTH_PACKING == 3200
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
}`,nX=`#define DISTANCE
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
}`,sX=`#define DISTANCE
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
}`,iX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oX=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aX=`uniform float scale;
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
}`,rX=`uniform vec3 diffuse;
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
}`,tX=`#include <common>
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
}`,eX=`uniform vec3 diffuse;
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
}`,JY=`#define LAMBERT
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
}`,QY=`#define LAMBERT
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
}`,$Y=`#define MATCAP
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
}`,ZY=`#define MATCAP
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
}`,WY=`#define NORMAL
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
}`,KY=`#define NORMAL
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
}`,HY=`#define PHONG
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
}`,XY=`#define PHONG
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
}`,YY=`#define STANDARD
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
}`,UY=`#define STANDARD
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
}`,NY=`#define TOON
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
}`,EY=`#define TOON
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
}`,GY=`uniform float size;
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
}`,qY=`uniform vec3 diffuse;
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
}`,FY=`#include <common>
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
}`,DY=`uniform vec3 color;
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
}`,RY=`uniform float rotation;
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
}`,OY=`uniform vec3 diffuse;
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
}`,p0={alphahash_fragment:gK,alphahash_pars_fragment:pK,alphamap_fragment:mK,alphamap_pars_fragment:lK,alphatest_fragment:dK,alphatest_pars_fragment:uK,aomap_fragment:cK,aomap_pars_fragment:nK,batching_pars_vertex:sK,batching_vertex:iK,begin_vertex:oK,beginnormal_vertex:aK,bsdfs:rK,iridescence_fragment:tK,bumpmap_pars_fragment:eK,clipping_planes_fragment:JH,clipping_planes_pars_fragment:QH,clipping_planes_pars_vertex:$H,clipping_planes_vertex:ZH,color_fragment:WH,color_pars_fragment:KH,color_pars_vertex:HH,color_vertex:XH,common:YH,defaultnormal_vertex:UH,displacementmap_pars_vertex:NH,displacementmap_vertex:EH,emissivemap_fragment:GH,emissivemap_pars_fragment:qH,colorspace_fragment:FH,colorspace_pars_fragment:DH,envmap_fragment:RH,envmap_common_pars_fragment:OH,envmap_pars_fragment:MH,envmap_pars_vertex:LH,envmap_physical_pars_fragment:TH,envmap_vertex:VH,fog_vertex:BH,fog_pars_vertex:kH,fog_fragment:IH,fog_pars_fragment:zH,gradientmap_pars_fragment:AH,lightmap_pars_fragment:CH,lights_lambert_fragment:wH,lights_lambert_pars_fragment:PH,lights_pars_begin:_H,lights_toon_fragment:SH,lights_toon_pars_fragment:jH,lights_phong_fragment:fH,lights_phong_pars_fragment:vH,lights_physical_fragment:yH,lights_physical_pars_fragment:bH,lights_fragment_begin:hH,lights_fragment_maps:xH,lights_fragment_end:gH,lightprobes_pars_fragment:pH,logdepthbuf_fragment:mH,logdepthbuf_pars_fragment:lH,logdepthbuf_pars_vertex:dH,logdepthbuf_vertex:uH,map_fragment:cH,map_pars_fragment:nH,map_particle_fragment:sH,map_particle_pars_fragment:iH,metalnessmap_fragment:oH,metalnessmap_pars_fragment:aH,morphinstance_vertex:rH,morphcolor_vertex:tH,morphnormal_vertex:eH,morphtarget_pars_vertex:JX,morphtarget_vertex:QX,normal_fragment_begin:$X,normal_fragment_maps:ZX,normal_pars_fragment:WX,normal_pars_vertex:KX,normal_vertex:HX,normalmap_pars_fragment:XX,clearcoat_normal_fragment_begin:YX,clearcoat_normal_fragment_maps:UX,clearcoat_pars_fragment:NX,iridescence_pars_fragment:EX,opaque_fragment:GX,packing:qX,premultiplied_alpha_fragment:FX,project_vertex:DX,dithering_fragment:RX,dithering_pars_fragment:OX,roughnessmap_fragment:MX,roughnessmap_pars_fragment:LX,shadowmap_pars_fragment:VX,shadowmap_pars_vertex:BX,shadowmap_vertex:kX,shadowmask_pars_fragment:IX,skinbase_vertex:zX,skinning_pars_vertex:AX,skinning_vertex:CX,skinnormal_vertex:wX,specularmap_fragment:PX,specularmap_pars_fragment:_X,tonemapping_fragment:TX,tonemapping_pars_fragment:SX,transmission_fragment:jX,transmission_pars_fragment:fX,uv_pars_fragment:vX,uv_pars_vertex:yX,uv_vertex:bX,worldpos_vertex:hX,background_vert:xX,background_frag:gX,backgroundCube_vert:pX,backgroundCube_frag:mX,cube_vert:lX,cube_frag:dX,depth_vert:uX,depth_frag:cX,distance_vert:nX,distance_frag:sX,equirect_vert:iX,equirect_frag:oX,linedashed_vert:aX,linedashed_frag:rX,meshbasic_vert:tX,meshbasic_frag:eX,meshlambert_vert:JY,meshlambert_frag:QY,meshmatcap_vert:$Y,meshmatcap_frag:ZY,meshnormal_vert:WY,meshnormal_frag:KY,meshphong_vert:HY,meshphong_frag:XY,meshphysical_vert:YY,meshphysical_frag:UY,meshtoon_vert:NY,meshtoon_frag:EY,points_vert:GY,points_frag:qY,shadow_vert:FY,shadow_frag:DY,sprite_vert:RY,sprite_frag:OY},G0={common:{diffuse:{value:new o0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new v0}},envmap:{envMap:{value:null},envMapRotation:{value:new v0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new v0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new v0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new v0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new v0},normalScale:{value:new m0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new v0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new v0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new v0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new v0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new o0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new o0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0},uvTransform:{value:new v0}},sprite:{diffuse:{value:new o0(16777215)},opacity:{value:1},center:{value:new m0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}}},N7={basic:{uniforms:P9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:p0.meshbasic_vert,fragmentShader:p0.meshbasic_frag},lambert:{uniforms:P9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new o0(0)},envMapIntensity:{value:1}}]),vertexShader:p0.meshlambert_vert,fragmentShader:p0.meshlambert_frag},phong:{uniforms:P9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new o0(0)},specular:{value:new o0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:p0.meshphong_vert,fragmentShader:p0.meshphong_frag},standard:{uniforms:P9([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new o0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag},toon:{uniforms:P9([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new o0(0)}}]),vertexShader:p0.meshtoon_vert,fragmentShader:p0.meshtoon_frag},matcap:{uniforms:P9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:p0.meshmatcap_vert,fragmentShader:p0.meshmatcap_frag},points:{uniforms:P9([G0.points,G0.fog]),vertexShader:p0.points_vert,fragmentShader:p0.points_frag},dashed:{uniforms:P9([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:p0.linedashed_vert,fragmentShader:p0.linedashed_frag},depth:{uniforms:P9([G0.common,G0.displacementmap]),vertexShader:p0.depth_vert,fragmentShader:p0.depth_frag},normal:{uniforms:P9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:p0.meshnormal_vert,fragmentShader:p0.meshnormal_frag},sprite:{uniforms:P9([G0.sprite,G0.fog]),vertexShader:p0.sprite_vert,fragmentShader:p0.sprite_frag},background:{uniforms:{uvTransform:{value:new v0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:p0.background_vert,fragmentShader:p0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new v0}},vertexShader:p0.backgroundCube_vert,fragmentShader:p0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:p0.cube_vert,fragmentShader:p0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:p0.equirect_vert,fragmentShader:p0.equirect_frag},distance:{uniforms:P9([G0.common,G0.displacementmap,{referencePosition:{value:new p},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:p0.distance_vert,fragmentShader:p0.distance_frag},shadow:{uniforms:P9([G0.lights,G0.fog,{color:{value:new o0(0)},opacity:{value:1}}]),vertexShader:p0.shadow_vert,fragmentShader:p0.shadow_frag}};N7.physical={uniforms:P9([N7.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new v0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new v0},clearcoatNormalScale:{value:new m0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new v0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new v0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new v0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new v0},sheen:{value:0},sheenColor:{value:new o0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new v0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new v0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new v0},transmissionSamplerSize:{value:new m0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new v0},attenuationDistance:{value:0},attenuationColor:{value:new o0(0)},specularColor:{value:new o0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new v0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new v0},anisotropyVector:{value:new m0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new v0}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag};var M5={r:0,b:0,g:0},MY=new K9,BZ=new v0;BZ.set(-1,0,0,0,1,0,0,0,1);function LY(J,Q,$,Z,W,K){let H=new o0(0),X=W===!0?0:1,Y,U,E=null,G=0,N=null;function R(z){let A=z.isScene===!0?z.background:null;if(A&&A.isTexture){let B=z.backgroundBlurriness>0;A=Q.get(A,B)}return A}function L(z){let A=!1,B=R(z);if(B===null)q(H,X);else if(B&&B.isColor)q(B,1),A=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(C==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||A)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function k(z,A){let B=R(A);if(B&&B.isCubeTexture){if(U===void 0)U=new w9(new _6(1,1,1),new _9({name:"BackgroundCubeMaterial",uniforms:t7(N7.backgroundCube.uniforms),vertexShader:N7.backgroundCube.vertexShader,fragmentShader:N7.backgroundCube.fragmentShader,side:v9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(MY.makeRotationFromEuler(A.backgroundRotation)).transpose(),B.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(BZ);if(U.material.toneMapped=u0.getTransfer(B.colorSpace)!==Q9,E!==B||G!==B.version||N!==J.toneMapping)U.material.needsUpdate=!0,E=B,G=B.version,N=J.toneMapping;U.layers.enableAll(),z.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(Y===void 0)Y=new w9(new c9(2,2),new _9({name:"BackgroundMaterial",uniforms:t7(N7.background.uniforms),vertexShader:N7.background.vertexShader,fragmentShader:N7.background.fragmentShader,side:I6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),Y.geometry.deleteAttribute("normal"),Object.defineProperty(Y.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(Y);if(Y.material.uniforms.t2D.value=B,Y.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,Y.material.toneMapped=u0.getTransfer(B.colorSpace)!==Q9,B.matrixAutoUpdate===!0)B.updateMatrix();if(Y.material.uniforms.uvTransform.value.copy(B.matrix),E!==B||G!==B.version||N!==J.toneMapping)Y.material.needsUpdate=!0,E=B,G=B.version,N=J.toneMapping;Y.layers.enableAll(),z.unshift(Y,Y.geometry,Y.material,0,0,null)}}function q(z,A){z.getRGB(M5,LJ(J)),$.buffers.color.setClear(M5.r,M5.g,M5.b,A,K)}function F(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(Y!==void 0)Y.geometry.dispose(),Y.material.dispose(),Y=void 0}return{getClearColor:function(){return H},setClearColor:function(z,A=1){H.set(z),X=A,q(H,X)},getClearAlpha:function(){return X},setClearAlpha:function(z){X=z,q(H,X)},render:L,addToRenderList:k,dispose:F}}function VY(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=N(null),K=W,H=!1;function X(S,x,r,w,c){let i=!1,v=G(S,w,r,x);if(K!==v)K=v,U(K.object);if(i=R(S,w,r,c),i)L(S,w,r,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(i||H){if(H=!1,B(S,x,r,w),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function Y(){return J.createVertexArray()}function U(S){return J.bindVertexArray(S)}function E(S){return J.deleteVertexArray(S)}function G(S,x,r,w){let c=w.wireframe===!0,i=Z[x.id];if(i===void 0)i={},Z[x.id]=i;let v=S.isInstancedMesh===!0?S.id:0,Z0=i[v];if(Z0===void 0)Z0={},i[v]=Z0;let d=Z0[r.id];if(d===void 0)d={},Z0[r.id]=d;let a=d[c];if(a===void 0)a=N(Y()),d[c]=a;return a}function N(S){let x=[],r=[],w=[];for(let c=0;c<$;c++)x[c]=0,r[c]=0,w[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:r,attributeDivisors:w,object:S,attributes:{},index:null}}function R(S,x,r,w){let c=K.attributes,i=x.attributes,v=0,Z0=r.getAttributes();for(let d in Z0)if(Z0[d].location>=0){let Q0=c[d],B0=i[d];if(B0===void 0){if(d==="instanceMatrix"&&S.instanceMatrix)B0=S.instanceMatrix;if(d==="instanceColor"&&S.instanceColor)B0=S.instanceColor}if(Q0===void 0)return!0;if(Q0.attribute!==B0)return!0;if(B0&&Q0.data!==B0.data)return!0;v++}if(K.attributesNum!==v)return!0;if(K.index!==w)return!0;return!1}function L(S,x,r,w){let c={},i=x.attributes,v=0,Z0=r.getAttributes();for(let d in Z0)if(Z0[d].location>=0){let Q0=i[d];if(Q0===void 0){if(d==="instanceMatrix"&&S.instanceMatrix)Q0=S.instanceMatrix;if(d==="instanceColor"&&S.instanceColor)Q0=S.instanceColor}let B0={};if(B0.attribute=Q0,Q0&&Q0.data)B0.data=Q0.data;c[d]=B0,v++}K.attributes=c,K.attributesNum=v,K.index=w}function k(){let S=K.newAttributes;for(let x=0,r=S.length;x<r;x++)S[x]=0}function q(S){F(S,0)}function F(S,x){let{newAttributes:r,enabledAttributes:w,attributeDivisors:c}=K;if(r[S]=1,w[S]===0)J.enableVertexAttribArray(S),w[S]=1;if(c[S]!==x)J.vertexAttribDivisor(S,x),c[S]=x}function z(){let{newAttributes:S,enabledAttributes:x}=K;for(let r=0,w=x.length;r<w;r++)if(x[r]!==S[r])J.disableVertexAttribArray(r),x[r]=0}function A(S,x,r,w,c,i,v){if(v===!0)J.vertexAttribIPointer(S,x,r,c,i);else J.vertexAttribPointer(S,x,r,w,c,i)}function B(S,x,r,w){k();let c=w.attributes,i=r.getAttributes(),v=x.defaultAttributeValues;for(let Z0 in i){let d=i[Z0];if(d.location>=0){let a=c[Z0];if(a===void 0){if(Z0==="instanceMatrix"&&S.instanceMatrix)a=S.instanceMatrix;if(Z0==="instanceColor"&&S.instanceColor)a=S.instanceColor}if(a!==void 0){let{normalized:Q0,itemSize:B0}=a,o=Q.get(a);if(o===void 0)continue;let{buffer:J0,type:O0,bytesPerElement:C0}=o,z0=O0===J.INT||O0===J.UNSIGNED_INT||a.gpuType===k1;if(a.isInterleavedBufferAttribute){let R0=a.data,n0=R0.isInterleavedBuffer===!0?R0.stride:R0.itemSize,h0=a.offset;if(R0.isInstancedInterleavedBuffer||R0.isInstancedBufferAttribute){for(let j0=0;j0<d.locationSize;j0++)F(d.location+j0,R0.meshPerAttribute);if(S.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=R0.meshPerAttribute*R0.count}else for(let j0=0;j0<d.locationSize;j0++)q(d.location+j0);J.bindBuffer(J.ARRAY_BUFFER,J0);for(let j0=0;j0<d.locationSize;j0++)A(d.location+j0,B0/d.locationSize,O0,Q0,n0*C0,(h0+B0/d.locationSize*j0)*C0,z0)}else{if(a.isInstancedBufferAttribute){for(let R0=0;R0<d.locationSize;R0++)F(d.location+R0,a.meshPerAttribute);if(S.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=a.meshPerAttribute*a.count}else for(let R0=0;R0<d.locationSize;R0++)q(d.location+R0);J.bindBuffer(J.ARRAY_BUFFER,J0);for(let R0=0;R0<d.locationSize;R0++)A(d.location+R0,B0/d.locationSize,O0,Q0,B0*C0,B0/d.locationSize*R0*C0,z0)}}else if(v!==void 0){let Q0=v[Z0];if(Q0!==void 0)switch(Q0.length){case 2:J.vertexAttrib2fv(d.location,Q0);break;case 3:J.vertexAttrib3fv(d.location,Q0);break;case 4:J.vertexAttrib4fv(d.location,Q0);break;default:J.vertexAttrib1fv(d.location,Q0)}}}}z()}function C(){j();for(let S in Z){let x=Z[S];for(let r in x){let w=x[r];for(let c in w){let i=w[c];for(let v in i)E(i[v].object),delete i[v];delete w[c]}}delete Z[S]}}function P(S){if(Z[S.id]===void 0)return;let x=Z[S.id];for(let r in x){let w=x[r];for(let c in w){let i=w[c];for(let v in i)E(i[v].object),delete i[v];delete w[c]}}delete Z[S.id]}function D(S){for(let x in Z){let r=Z[x];for(let w in r){let c=r[w];if(c[S.id]===void 0)continue;let i=c[S.id];for(let v in i)E(i[v].object),delete i[v];delete c[S.id]}}}function V(S){for(let x in Z){let r=Z[x],w=S.isInstancedMesh===!0?S.id:0,c=r[w];if(c===void 0)continue;for(let i in c){let v=c[i];for(let Z0 in v)E(v[Z0].object),delete v[Z0];delete c[i]}if(delete r[w],Object.keys(r).length===0)delete Z[x]}}function j(){if(g(),H=!0,K===W)return;K=W,U(K.object)}function g(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:j,resetDefaultState:g,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:V,releaseStatesOfProgram:D,initAttributes:k,enableAttribute:q,disableUnusedAttributes:z}}function BY(J,Q,$){let Z;function W(Y){Z=Y}function K(Y,U){J.drawArrays(Z,Y,U),$.update(U,Z,1)}function H(Y,U,E){if(E===0)return;J.drawArraysInstanced(Z,Y,U,E),$.update(U,Z,E)}function X(Y,U,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,Y,0,U,0,E);let N=0;for(let R=0;R<E;R++)N+=U[R];$.update(N,Z,1)}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=X}function kY(J,Q,$,Z){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let D=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(D){if(D!==$7&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(D){let V=D===p9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(D!==Q7&&D!==V7&&!V&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function Y(D){if(D==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";D="mediump"}if(D==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",E=Y(U);if(E!==U)S0("WebGLRenderer:",U,"not supported, using",E,"instead."),U=E;let G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),N=$.logarithmicDepthBuffer===!0&&G===!1;if($.reversedDepthBuffer===!0&&G===!1)S0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if($.logarithmicDepthBuffer===!0&&G===!0)S0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),z=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),C=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:Y,textureFormatReadable:H,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:N,reversedDepthBuffer:G,maxTextures:R,maxVertexTextures:L,maxTextureSize:k,maxCubemapSize:q,maxAttributes:F,maxVertexUniforms:z,maxVaryings:A,maxFragmentUniforms:B,maxSamples:C,samples:P}}function IY(J){let Q=this,$=null,Z=0,W=!1,K=!1,H=new K7,X=new v0,Y={value:null,needsUpdate:!1};this.uniform=Y,this.numPlanes=0,this.numIntersection=0,this.init=function(G,N){let R=G.length!==0||N||Z!==0||W;return W=N,Z=G.length,R},this.beginShadows=function(){K=!0,E(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(G,N){$=E(G,N,0)},this.setState=function(G,N,R){let{clippingPlanes:L,clipIntersection:k,clipShadows:q}=G,F=J.get(G);if(!W||L===null||L.length===0||K&&!q)if(K)E(null);else U();else{let z=K?0:Z,A=z*4,B=F.clippingState||null;Y.value=B,B=E(L,N,A,R);for(let C=0;C!==A;++C)B[C]=$[C];F.clippingState=B,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=z}};function U(){if(Y.value!==$)Y.value=$,Y.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function E(G,N,R,L){let k=G!==null?G.length:0,q=null;if(k!==0){if(q=Y.value,L!==!0||q===null){let F=R+k*4,z=N.matrixWorldInverse;if(X.getNormalMatrix(z),q===null||q.length<F)q=new Float32Array(F);for(let A=0,B=R;A!==k;++A,B+=4)H.copy(G[A]).applyMatrix4(z,X),H.normal.toArray(q,B),q[B+3]=H.constant}Y.value=q,Y.needsUpdate=!0}return Q.numPlanes=k,Q.numIntersection=0,q}}class B5 extends y9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new G5(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new _6(5,5,5),W=new _9({name:"CubemapFromEquirect",uniforms:t7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:v9,blending:L7});W.uniforms.tEquirect.value=Q;let K=new w9(Z,W),H=Q.minFilter;if(Q.minFilter===v7)Q.minFilter=C9;return new K8(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,Z);J.setRenderTarget(W)}}var e$=256,zY=3,AY=20,kZ=256,IZ=16,CY=3,wY=new p,PY=new o0;class V5{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new K8(1,10,null),this._boxMesh=new w9(new _6(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:K=256,position:H=wY}=W,X=this._renderer;this._setSize(K);let Y=this._allocateTarget(),U=this._getSourceTarget(!0);if(Q>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:E,autoClearColor:G,autoClearDepth:N,autoClearStencil:R}=X,L=J.background;if(X.autoClear=!0,X.autoClearColor=!0,X.autoClearDepth=!0,X.autoClearStencil=!0,L===null)J.background=X.getClearColor(PY);let k=new K8($,Z,U);if(k.position.copy(H),k.update(X,J),X.autoClear=E,X.autoClearColor=G,X.autoClearDepth=N,X.autoClearStencil=R,J.background=L,Q>0)U.texture.mipmapsAutoUpdate=!0,this._blur(Y,Q);return this._applyPMREM(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=$Z(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=QZ(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(e$,n$(J))}_fromTexture(J,Q){if(J.mapping===o6||J.mapping===z6)this._setSize(J.image.length===0?e$:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let $=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM($),$}_allocateTarget(){let J=this._cubeSize,Q=JZ(J,!1,!1),$=Math.log2(J)-zY;for(let Z=0;Z<=$;Z++)Q.texture.mipmaps.push({width:J>>Z,height:J>>Z});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,$=this._sourceTarget;if($===null||$.width!==Q||J&&$.depthBuffer===!1){if($!==null)$.dispose();this._sourceTarget=JZ(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,$){let Z=this._boxMesh,W=this._cubeCamera;Z.material=$,W.renderTarget=J,W.activeMipmapLevel=Q;let K=J.width>>Q;J.viewport.set(0,0,K,K),W.update(this._renderer,Z),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===o6||J.mapping===z6){if(this._cubemapMaterial===null)this._cubemapMaterial=$Z();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=QZ();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=_Y(),this._integrationMaterial=TY();let Q=this._cubeSize,$=J.texture.mipmaps.length-1,Z=this._ggxMaterial.uniforms;Z.envMap.value=this._sourceTarget.texture;let W=this._integrationMaterial.uniforms;W.envMap.value=this._sourceTarget.texture,W.sourceLod.value=Math.log2(Q/IZ);for(let K=0;K<=$;K++){let H=V5.lodToRoughness(K,$);if(K>$-CY)W.roughness.value=H,this._renderCube(J,K,this._integrationMaterial);else{let X=H>0?Math.log2(Q)+0.5*Math.log2(6/(kZ*Math.pow(H,4)))+0.5:0;Z.roughness.value=H,Z.lodBias.value=X,this._renderCube(J,K,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=SY();let $=this._blurMaterial,Z=$.uniforms,W=this._sourceTarget;Z.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,Z.envMap.value=W.texture,this._renderCube(J,0,$),Z.envMap.value=J.texture,this._renderCube(W,0,$)}}function JZ(J,Q,$){return new B5(J,{minFilter:v7,generateMipmaps:Q,type:p9,colorSpace:KJ,depthBuffer:$})}function U8(J,Q,$){return new _9({name:J,uniforms:Q,vertexShader:p0.cube_vert,fragmentShader:$,side:v9,blending:L7,depthTest:!1,depthWrite:!1})}function _Y(){return U8("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${kZ}u

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
	`)}function TY(){return U8("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:IZ}},`

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
	`)}function SY(){return U8("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${AY}
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
	`)}function QZ(){return U8("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function $Z(){return U8("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jY(J){let Q=new WeakMap,$=new WeakMap,Z=null;function W(N,R=!1){if(N===null||N===void 0)return null;if(R)return H(N);return K(N)}function K(N){if(N&&N.isTexture){let R=N.mapping;if(R===r8||R===t8)if(Q.has(N)){let L=Q.get(N).texture;return X(L,N.mapping)}else{let L=N.image;if(L&&L.height>0){let k=new B5(L.height);return k.fromEquirectangularTexture(J,N),Q.set(N,k),N.addEventListener("dispose",U),X(k.texture,N.mapping)}else return null}}return N}function H(N){if(N&&N.isTexture&&N.isPMREMTexture!==!0){let R=N.mapping,L=R===r8||R===t8,k=R===o6||R===z6;if(L||k){let q=$.get(N),F=q!==void 0?q.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==F){if(Z===null)Z=new V5(J);return q=L?Z.fromEquirectangular(N,q):Z.fromCubemap(N,q),q.texture.pmremVersion=N.pmremVersion,$.set(N,q),q.texture}else if(q!==void 0)return q.texture;else{let z=N.image;if(L&&z&&z.height>0||k&&z&&Y(z)){if(Z===null)Z=new V5(J);return q=L?Z.fromEquirectangular(N):Z.fromCubemap(N),q.texture.pmremVersion=N.pmremVersion,$.set(N,q),N.addEventListener("dispose",E),q.texture}else return null}}}return N}function X(N,R){if(R===r8)N.mapping=o6;else if(R===t8)N.mapping=z6;return N}function Y(N){let R=0,L=6;for(let k=0;k<L;k++)if(N[k]!==void 0)R++;return R===L}function U(N){let R=N.target;R.removeEventListener("dispose",U);let L=Q.get(R);if(L!==void 0)Q.delete(R),L.dispose()}function E(N){let R=N.target;R.removeEventListener("dispose",E);let L=$.get(R);if(L!==void 0)$.delete(R),L.dispose()}function G(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:G}}function fY(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)c6("WebGLRenderer: "+Z+" extension not supported.");return W}}}function vY(J,Q,$,Z){let W={},K=new WeakMap,H=new FinalizationRegistry((L)=>delete W[L]);function X(L){Y(L.target)}function Y(L){if(L.index!==null)Q.remove(L.index);for(let q in L.attributes)Q.remove(L.attributes[q]);L.removeEventListener("dispose",X),delete W[L.id],H.unregister(L);let k=K.get(L);if(k)Q.remove(k),K.delete(L);if(Z.releaseStatesOfGeometry(L),L.isInstancedBufferGeometry===!0)delete L._maxInstanceCount;$.memory.geometries--}function U(L,k){if(W[k.id]!==void 0)return k;return k.addEventListener("dispose",X),W[k.id]=new WeakRef(k),H.register(k,k.id,k),$.memory.geometries++,k}function E(L){let k=L.attributes;for(let q in k)Q.update(k[q],J.ARRAY_BUFFER)}function G(L){let k=L.index,q=L.attributes.position,F=0;if(q===void 0)return;let z=k!==null?k.array.length:q.array.length/3-1,B=new(q.count>=65535?N5:U5)(Math.ceil(z/3)*6,1),C=B.array;if(k!==null){let D=k.array;F=k.version;for(let V=0,j=0;V<z;V+=3){let g=D[V+0],S=D[V+1],x=D[V+2];C[j++]=g,C[j++]=S,C[j++]=S,C[j++]=x,C[j++]=x,C[j++]=g}}else{F=q.version;for(let D=0,V=0;D<z;D+=3){let j=D+0,g=D+1,S=D+2;C[V++]=j,C[V++]=g,C[V++]=g,C[V++]=S,C[V++]=S,C[V++]=j}}B.version=F;let P=K.get(L);if(P)Q.remove(P);K.set(L,B)}function N(L){let k=K.get(L);if(k){let q=L.index;if(q!==null){if(k.version<q.version)G(L)}}else G(L);return K.get(L)}function R(){for(let L in W){let k=W[L].deref();if(k!==void 0)Y(k)}}return{get:U,update:E,getWireframeAttribute:N,dispose:R}}function yY(J,Q,$){let Z;function W(G){Z=G}let K,H;function X(G){K=G.type,H=G.bytesPerElement}function Y(G,N){J.drawElements(Z,N,K,G*H),$.update(N,Z,1)}function U(G,N,R){if(R===0)return;J.drawElementsInstanced(Z,N,K,G*H,R),$.update(N,Z,R)}function E(G,N,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,K,G,0,R);let k=0;for(let q=0;q<R;q++)k+=N[q];$.update(k,Z,1)}this.setMode=W,this.setIndex=X,this.render=Y,this.renderInstances=U,this.renderMultiDraw=E}function bY(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,X){switch($.calls++,H){case J.TRIANGLES:$.triangles+=X*(K/3);break;case J.LINES:$.lines+=X*(K/2);break;case J.LINE_STRIP:$.lines+=X*(K-1);break;case J.LINE_LOOP:$.lines+=X*K;break;case J.POINTS:$.points+=X*K;break;default:f0("WebGLInfo: Unknown draw mode:",H);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function hY(J,Q,$){let Z=new WeakMap,W=new H9;function K(H,X,Y){let U=H.morphTargetInfluences,E=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,G=E!==void 0?E.length:0,N=Z.get(X);if(N===void 0||N.count!==G){let j=function(){D.dispose(),Z.delete(X),X.removeEventListener("dispose",j)};if(N!==void 0)N.texture.dispose();let R=X.morphAttributes.position!==void 0,L=X.morphAttributes.normal!==void 0,k=X.morphAttributes.color!==void 0,q=X.morphAttributes.position||[],F=X.morphAttributes.normal||[],z=X.morphAttributes.color||[],A=0;if(R===!0)A=1;if(L===!0)A=2;if(k===!0)A=3;let B=X.attributes.position.count*A,C=1;if(B>Q.maxTextureSize)C=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let P=new Float32Array(B*C*4*G),D=new X5(P,B,C,G);D.type=V7,D.needsUpdate=!0;let V=A*4;for(let g=0;g<G;g++){let S=q[g],x=F[g],r=z[g],w=B*C*4*g;for(let c=0;c<S.count;c++){let i=c*V;if(R===!0)W.fromBufferAttribute(S,c),P[w+i+0]=W.x,P[w+i+1]=W.y,P[w+i+2]=W.z,P[w+i+3]=0;if(L===!0)W.fromBufferAttribute(x,c),P[w+i+4]=W.x,P[w+i+5]=W.y,P[w+i+6]=W.z,P[w+i+7]=0;if(k===!0)W.fromBufferAttribute(r,c),P[w+i+8]=W.x,P[w+i+9]=W.y,P[w+i+10]=W.z,P[w+i+11]=r.itemSize===4?W.w:1}}N={count:G,texture:D,size:new m0(B,C)},Z.set(X,N),X.addEventListener("dispose",j)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)Y.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let R=0;for(let k=0;k<U.length;k++)R+=U[k];let L=X.morphTargetsRelative?1:1-R;Y.getUniforms().setValue(J,"morphTargetBaseInfluence",L),Y.getUniforms().setValue(J,"morphTargetInfluences",U)}Y.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),Y.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:K}}function xY(J,Q,$,Z,W){let K=new WeakMap;function H(U){let E=W.render.frame,G=U.geometry,N=Q.get(U,G);if(K.get(N)!==E)Q.update(N),K.set(N,E);if(U.isInstancedMesh){if(U.hasEventListener("dispose",Y)===!1)U.addEventListener("dispose",Y);if(K.get(U)!==E){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,E)}}if(U.isSkinnedMesh){let R=U.skeleton;if(K.get(R)!==E)R.update(),K.set(R,E)}return N}function X(){K=new WeakMap}function Y(U){let E=U.target;if(E.removeEventListener("dispose",Y),Z.releaseStatesOfObject(E),$.remove(E.instanceMatrix),E.instanceColor!==null)$.remove(E.instanceColor)}return{update:H,dispose:X}}var gY={[R1]:"LINEAR_TONE_MAPPING",[O1]:"REINHARD_TONE_MAPPING",[M1]:"CINEON_TONE_MAPPING",[L1]:"ACES_FILMIC_TONE_MAPPING",[i6]:"AGX_TONE_MAPPING",[B1]:"NEUTRAL_TONE_MAPPING",[V1]:"CUSTOM_TONE_MAPPING"};function pY(J,Q,$,Z,W,K){let H=new y9(Q,$,{type:J,depthBuffer:W,stencilBuffer:K,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,Y=null,U=null,E=new I7;E.setAttribute("position",new J7([-1,3,0,-1,-1,0,3,-1,0],3)),E.setAttribute("uv",new J7([0,2,0,0,2,0],2));let G=new VJ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),N=new w9(E,G),R=new Y7(-1,1,1,-1,0,1),L=null,k=null,q=!1,F,z=null,A=[],B=!1;this.setSize=function(C,P){if(H.setSize(C,P),X!==null)X.setSize(C,P);if(Y!==null)Y.setSize(C,P);for(let D=0;D<A.length;D++){let V=A[D];if(V.setSize)V.setSize(C,P)}},this.setEffects=function(C){A=C,B=A.length>0&&A[0].isRenderPass===!0;let{width:P,height:D}=H;if(A.length>0&&X===null)X=new y9(P,D,{type:p9,depthBuffer:!1,stencilBuffer:!1}),Y=new y9(P,D,{type:p9,depthBuffer:!1,stencilBuffer:!1});let V=W===!0&&A.some((j)=>j.needsDepthTexture===!0);if(V!==(H.depthTexture!==null)){if(V===!0&&U===null){if(U=new h7(P,D),K===!0)U.format=b7,U.type=i7}H.dispose(),H.depthTexture=V?U:null,H.resolveDepthBuffer=V,H.storeMultisampledDepthBuffer=V}for(let j=0;j<A.length;j++){let g=A[j];if(g.setSize)g.setSize(P,D);if(V&&g.needsDepthTexture===!0&&g.setDepthTexture)g.setDepthTexture(U)}},this.begin=function(C,P){if(q)return!1;if(C.toneMapping===X7&&A.length===0)return!1;if(z=P,P!==null){let{width:D,height:V}=P;if(H.width!==D||H.height!==V)this.setSize(D,V)}if(B===!1)C.setRenderTarget(H);return F=C.toneMapping,C.toneMapping=X7,!0},this.hasRenderPass=function(){return B},this.end=function(C,P){C.toneMapping=F,q=!0;let D=H,V=X;for(let j=0;j<A.length;j++){let g=A[j];if(g.enabled===!1)continue;if(g.render(C,V,D,P),g.needsSwap!==!1)D=V,V=V===X?Y:X}if(L!==C.outputColorSpace||k!==C.toneMapping){if(L=C.outputColorSpace,k=C.toneMapping,G.defines={},u0.getTransfer(L)===Q9)G.defines.SRGB_TRANSFER="";let j=gY[k];if(j)G.defines[j]="";G.needsUpdate=!0}G.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(z),C.render(N,R),z=null,q=!1},this.isCompositing=function(){return q},this.dispose=function(){if(H.dispose(),X!==null)X.dispose();if(Y!==null)Y.dispose();E.dispose(),G.dispose()}}var zZ=new L9,AZ=new h7(1,1),CZ=new q5(1),wZ=new X5,PZ=new J8,_Z=new G5,ZZ=[],WZ=[],KZ=new Float32Array(16),HZ=new Float32Array(9),XZ=new Float32Array(4);function T6(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,K=ZZ[W];if(K===void 0)K=new Float32Array(W),ZZ[W]=K;if(Q!==0){Z.toArray(K,0);for(let H=1,X=0;H!==Q;++H)X+=$,J[H].toArray(K,X)}return K}function G9(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function q9(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function k5(J,Q){let $=WZ[Q];if($===void 0)$=new Int32Array(Q),WZ[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function mY(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function lY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(G9($,Q))return;J.uniform2fv(this.addr,Q),q9($,Q)}}function dY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(G9($,Q))return;J.uniform3fv(this.addr,Q),q9($,Q)}}function uY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(G9($,Q))return;J.uniform4fv(this.addr,Q),q9($,Q)}}function cY(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(G9($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),q9($,Q)}else{if(G9($,Z))return;XZ.set(Z),J.uniformMatrix2fv(this.addr,!1,XZ),q9($,Z)}}function nY(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(G9($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),q9($,Q)}else{if(G9($,Z))return;HZ.set(Z),J.uniformMatrix3fv(this.addr,!1,HZ),q9($,Z)}}function sY(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(G9($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),q9($,Q)}else{if(G9($,Z))return;KZ.set(Z),J.uniformMatrix4fv(this.addr,!1,KZ),q9($,Z)}}function iY(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function oY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(G9($,Q))return;J.uniform2iv(this.addr,Q),q9($,Q)}}function aY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(G9($,Q))return;J.uniform3iv(this.addr,Q),q9($,Q)}}function rY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(G9($,Q))return;J.uniform4iv(this.addr,Q),q9($,Q)}}function tY(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function eY(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(G9($,Q))return;J.uniform2uiv(this.addr,Q),q9($,Q)}}function JU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(G9($,Q))return;J.uniform3uiv(this.addr,Q),q9($,Q)}}function QU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(G9($,Q))return;J.uniform4uiv(this.addr,Q),q9($,Q)}}function I5(J){if(J.version===0)J.compareFunction=UJ,J.needsUpdate=!0;return J}function $U(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)K=I5(AZ);else K=zZ;$.setTexture2D(Q||K,W)}function ZU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||PZ,W)}function WU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_CUBE_SHADOW)K=I5(CZ);else K=_Z;$.setTextureCube(Q||K,W)}function KU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||wZ,W)}function HU(J){switch(J){case 5126:return mY;case 35664:return lY;case 35665:return dY;case 35666:return uY;case 35674:return cY;case 35675:return nY;case 35676:return sY;case 5124:case 35670:return iY;case 35667:case 35671:return oY;case 35668:case 35672:return aY;case 35669:case 35673:return rY;case 5125:return tY;case 36294:return eY;case 36295:return JU;case 36296:return QU;case 35678:case 36198:case 36298:case 36306:case 35682:return $U;case 35679:case 36299:case 36307:return ZU;case 35680:case 36300:case 36308:case 36293:return WU;case 36289:case 36303:case 36311:case 36292:return KU}}function XU(J,Q){J.uniform1fv(this.addr,Q)}function YU(J,Q){let $=T6(Q,this.size,2);J.uniform2fv(this.addr,$)}function UU(J,Q){let $=T6(Q,this.size,3);J.uniform3fv(this.addr,$)}function NU(J,Q){let $=T6(Q,this.size,4);J.uniform4fv(this.addr,$)}function EU(J,Q){let $=T6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function GU(J,Q){let $=T6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function qU(J,Q){let $=T6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function FU(J,Q){J.uniform1iv(this.addr,Q)}function DU(J,Q){J.uniform2iv(this.addr,Q)}function RU(J,Q){J.uniform3iv(this.addr,Q)}function OU(J,Q){J.uniform4iv(this.addr,Q)}function MU(J,Q){J.uniform1uiv(this.addr,Q)}function LU(J,Q){J.uniform2uiv(this.addr,Q)}function VU(J,Q){J.uniform3uiv(this.addr,Q)}function BU(J,Q){J.uniform4uiv(this.addr,Q)}function kU(J,Q,$){let Z=this.cache,W=Q.length,K=k5($,W);if(!G9(Z,K))J.uniform1iv(this.addr,K),q9(Z,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=I5(AZ);else H=zZ;for(let X=0;X!==W;++X)$.setTexture2D(Q[X]||H,K[X])}function IU(J,Q,$){let Z=this.cache,W=Q.length,K=k5($,W);if(!G9(Z,K))J.uniform1iv(this.addr,K),q9(Z,K);for(let H=0;H!==W;++H)$.setTexture3D(Q[H]||PZ,K[H])}function zU(J,Q,$){let Z=this.cache,W=Q.length,K=k5($,W);if(!G9(Z,K))J.uniform1iv(this.addr,K),q9(Z,K);let H;if(this.type===J.SAMPLER_CUBE_SHADOW)H=I5(CZ);else H=_Z;for(let X=0;X!==W;++X)$.setTextureCube(Q[X]||H,K[X])}function AU(J,Q,$){let Z=this.cache,W=Q.length,K=k5($,W);if(!G9(Z,K))J.uniform1iv(this.addr,K),q9(Z,K);for(let H=0;H!==W;++H)$.setTexture2DArray(Q[H]||wZ,K[H])}function CU(J){switch(J){case 5126:return XU;case 35664:return YU;case 35665:return UU;case 35666:return NU;case 35674:return EU;case 35675:return GU;case 35676:return qU;case 5124:case 35670:return FU;case 35667:case 35671:return DU;case 35668:case 35672:return RU;case 35669:case 35673:return OU;case 5125:return MU;case 36294:return LU;case 36295:return VU;case 36296:return BU;case 35678:case 36198:case 36298:case 36306:case 35682:return kU;case 35679:case 36299:case 36307:return IU;case 35680:case 36300:case 36308:case 36293:return zU;case 36289:case 36303:case 36311:case 36292:return AU}}class TZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=HU(Q.type)}}class SZ{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=CU(Q.type)}}class jZ{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let H=Z[W];H.setValue(J,Q[H.id],$)}}}var hJ=/(\w+)(\])?(\[|\.)?/g;function YZ(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function wU(J,Q,$){let Z=J.name,W=Z.length;hJ.lastIndex=0;while(!0){let K=hJ.exec(Z),H=hJ.lastIndex,X=K[1],Y=K[2]==="]",U=K[3];if(Y)X=X|0;if(U===void 0||U==="["&&H+2===W){YZ($,U===void 0?new TZ(X,J,Q):new SZ(X,J,Q));break}else{let G=$.map[X];if(G===void 0)G=new jZ(X),YZ($,G);$=G}}}class Y8{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),X=J.getUniformLocation(Q,H.name);wU(H,X,this)}let Z=[],W=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(K);else W.push(K);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],X=$[H.id];if(X.needsUpdate!==!1)H.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in Q)$.push(K)}return $}}function UZ(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var PU=37297,_U=0;function TU(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=W;H<K;H++){let X=H+1;Z.push(`${X===Q?">":" "} ${X}: ${$[H]}`)}return Z.join(`
`)}var NZ=new v0;function SU(J){u0._getMatrix(NZ,u0.workingColorSpace,J);let Q=`mat3( ${NZ.elements.map(($)=>$.toFixed(4))} )`;switch(u0.getTransfer(J)){case HJ:return[Q,"LinearTransferOETF"];case Q9:return[Q,"sRGBTransferOETF"];default:return S0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function EZ(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(Z&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let X=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+TU(J.getShaderSource(Q),X)}else return K}function jU(J,Q){let $=SU(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( ${$[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var fU={[R1]:"Linear",[O1]:"Reinhard",[M1]:"Cineon",[L1]:"ACESFilmic",[i6]:"AgX",[B1]:"Neutral",[V1]:"Custom"};function vU(J,Q){let $=fU[Q];if($===void 0)return S0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var L5=new p;function yU(){u0.getLuminanceCoefficients(L5);let J=L5.x.toFixed(4),Q=L5.y.toFixed(4),$=L5.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function bU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(X8).join(`
`)}function hU(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function xU(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib(Q,W),H=K.name,X=1;if(K.type===J.FLOAT_MAT2)X=2;if(K.type===J.FLOAT_MAT3)X=3;if(K.type===J.FLOAT_MAT4)X=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:X}}return $}function X8(J){return J!==""}function GZ(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function qZ(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var gU=/^[ \t]*#include +<([\w\d./]+)>/gm;function gJ(J){return J.replace(gU,pU)}function pU(J,Q){let $=p0[Q];if($===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return gJ($)}var mU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function FZ(J){return J.replace(mU,lU)}function lU(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function DZ(J){let Q=`precision ${J.precision} float;
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
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var dU={[n6]:"SHADOWMAP_TYPE_PCF",[k6]:"SHADOWMAP_TYPE_VSM"};function uU(J){return dU[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cU={[z6]:"ENVMAP_MODE_REFRACTION"};function nU(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return cU[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sU={[k$]:"ENVMAP_BLENDING_MULTIPLY",[I$]:"ENVMAP_BLENDING_MIX",[z$]:"ENVMAP_BLENDING_ADD"};function iU(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return sU[J.combine]||"ENVMAP_BLENDING_NONE"}function oU(J,Q,$,Z){let W=J.getContext(),K=$.defines,H=$.vertexShader,X=$.fragmentShader,Y=uU($),U=$.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",E=nU($),G=iU($),N=bU($),R=hU(K),L=W.createProgram(),k,q,F=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(k=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(X8).join(`
`),k.length>0)k+=`
`;if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(X8).join(`
`),q.length>0)q+=`
`}else k=[DZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+E:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+$.diffuseRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+Y:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(X8).join(`
`),q=[DZ($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+E:"",$.envMap?"#define "+G:"",$.envMapPMREM?"#define ENVMAP_MAX_LOD "+$.envMapMaxLod+".0":"",$.envMapPMREM?"#define ENVMAP_SIZE "+$.envMapSize+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+Y:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==X7?"#define TONE_MAPPING":"",$.toneMapping!==X7?p0.tonemapping_pars_fragment:"",$.toneMapping!==X7?vU("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",p0.colorspace_pars_fragment,jU("linearToOutputTexel",$.outputColorSpace),yU(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(X8).join(`
`);if(H=gJ(H),H=GZ(H,$),H=qZ(H,$),X=gJ(X),X=GZ(X,$),X=qZ(X,$),H=FZ(H),X=FZ(X),$.isRawShaderMaterial!==!0)F=`#version 300 es
`,k=[N,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+k,q=["#define varying in",$.glslVersion===EJ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===EJ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let z=F+k+H,A=F+q+X,B=UZ(W,W.VERTEX_SHADER,z),C=UZ(W,W.FRAGMENT_SHADER,A);if(W.attachShader(L,B),W.attachShader(L,C),$.index0AttributeName!==void 0)W.bindAttribLocation(L,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(L,0,"position");W.linkProgram(L);function P(g){if(J.debug.checkShaderErrors){let S=W.getProgramInfoLog(L)||"",x=W.getShaderInfoLog(B)||"",r=W.getShaderInfoLog(C)||"",w=S.trim(),c=x.trim(),i=r.trim(),v=!0,Z0=!0;if(W.getProgramParameter(L,W.LINK_STATUS)===!1)if(v=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,L,B,C);else{let d=EZ(W,B,"vertex"),a=EZ(W,C,"fragment");f0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(L,W.VALIDATE_STATUS)+`

Material Name: `+g.name+`
Material Type: `+g.type+`

Program Info Log: `+w+`
`+d+`
`+a)}else if(w!=="")S0("WebGLProgram: Program Info Log:",w);else if(c===""||i==="")Z0=!1;if(Z0)g.diagnostics={runnable:v,programLog:w,vertexShader:{log:c,prefix:k},fragmentShader:{log:i,prefix:q}}}W.deleteShader(B),W.deleteShader(C),D=new Y8(W,L),V=xU(W,L)}let D;this.getUniforms=function(){if(D===void 0)P(this);return D};let V;this.getAttributes=function(){if(V===void 0)P(this);return V};let j=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(j===!1)j=W.getProgramParameter(L,PU);return j},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(L),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=_U++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=B,this.fragmentShader=C,this}var aU=0;class fZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new vZ(J),Q.set(J,$);return $}}class vZ{constructor(J){this.id=aU++,this.code=J,this.usedTimes=0}}function rU(J){return J===o7||J===K5||J===H5}function tU(J,Q,$,Z,W,K){let H=new Y5,X=new fZ,Y=new Set,U=[],E=new Map,G=Z.logarithmicDepthBuffer,N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){if(Y.add(D),D===0)return"uv";return`uv${D}`}function L(D,V,j,g,S,x){let r=g.fog,w=S.geometry,c=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?g.environment:null,i=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,v=Q.get(D.envMap||c,i),Z0=N[D.type],d=Z.precision;if(D.precision!==null){if(d=Z.getMaxPrecision(D.precision),d!==D.precision)S0("WebGLProgram.getParameters:",D.precision,"not supported, using",d,"instead.")}let a=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,Q0=a!==void 0?a.length:0,B0=0;if(w.morphAttributes.position!==void 0)B0=1;if(w.morphAttributes.normal!==void 0)B0=2;if(w.morphAttributes.color!==void 0)B0=3;let o,J0,O0,C0;if(Z0){let F0=N7[Z0];o=F0.vertexShader,J0=F0.fragmentShader}else{o=D.vertexShader,J0=D.fragmentShader;let F0=X.getVertexShaderStage(D),e0=X.getFragmentShaderStage(D);X.update(D,F0,e0),O0=F0.id,C0=e0.id}let z0=J.getRenderTarget(),R0=J.state.buffers.depth.getReversed(),n0=S.isInstancedMesh===!0,h0=S.isBatchedMesh===!0,j0=!!D.map,i0=!!D.matcap,x0=!!v,X9=x0&&v.isPMREMTexture===!0,Y9=!!D.aoMap,S9=!!D.lightMap,b9=!!D.bumpMap&&D.wireframe===!1,U9=!!D.normalMap,V9=!!D.displacementMap,j9=!!D.emissiveMap,f9=!!D.metalnessMap,s9=!!D.roughnessMap,f=D.anisotropy>0,i9=D.clearcoat>0,t0=D.diffuseRoughness>0,F9=D.dispersion>0,E0=D.retroreflectivity>0,$9=D.iridescence>0,_0=D.sheen>0,y0=D.transmission>0,B9=f&&!!D.anisotropyMap,I=i9&&!!D.clearcoatMap,O=i9&&!!D.clearcoatNormalMap,y=i9&&!!D.clearcoatRoughnessMap,e=t0&&!!D.diffuseRoughnessMap,t=$9&&!!D.iridescenceMap,K0=$9&&!!D.iridescenceThicknessMap,Y0=_0&&!!D.sheenColorMap,l=_0&&!!D.sheenRoughnessMap,s=!!D.specularMap,H0=!!D.specularColorMap,_=!!D.specularIntensityMap,n=y0&&!!D.transmissionMap,u=y0&&!!D.thicknessMap,$0=!!D.gradientMap,W0=!!D.alphaMap,N0=D.alphaTest>0,w0=!!D.alphaHash,A0=!!D.extensions,q0=X7;if(D.toneMapped){if(z0===null||z0.isXRRenderTarget===!0)q0=J.toneMapping}let P0=X9?v.isCompressedCubeTexture?v.image[0].mipmaps:v.mipmaps:null,g0={shaderID:Z0,shaderType:D.type,shaderName:D.name,vertexShader:o,fragmentShader:J0,defines:D.defines,customVertexShaderID:O0,customFragmentShaderID:C0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:d,batching:h0,batchingColor:h0&&S._colorsTexture!==null,instancing:n0,instancingColor:n0&&S.instanceColor!==null,instancingMorph:n0&&S.morphTexture!==null,outputColorSpace:z0===null?J.outputColorSpace:z0.isXRRenderTarget===!0?z0.texture.colorSpace:u0.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:j0,matcap:i0,envMap:x0,envMapMode:x0&&v.mapping,envMapPMREM:X9,envMapMaxLod:X9?P0.length-1:null,envMapSize:X9?P0[0].width:null,aoMap:Y9,lightMap:S9,bumpMap:b9,normalMap:U9,displacementMap:V9,emissiveMap:j9,normalMapObjectSpace:U9&&D.normalMapType===y$,normalMapTangentSpace:U9&&D.normalMapType===WJ,packedNormalMap:U9&&D.normalMapType===WJ&&rU(D.normalMap.format),metalnessMap:f9,roughnessMap:s9,anisotropy:f,anisotropyMap:B9,clearcoat:i9,clearcoatMap:I,clearcoatNormalMap:O,clearcoatRoughnessMap:y,diffuseRoughness:t0,diffuseRoughnessMap:e,dispersion:F9,retroreflection:E0,iridescence:$9,iridescenceMap:t,iridescenceThicknessMap:K0,sheen:_0,sheenColorMap:Y0,sheenRoughnessMap:l,specularMap:s,specularColorMap:H0,specularIntensityMap:_,transmission:y0,transmissionMap:n,thicknessMap:u,gradientMap:$0,opaque:D.transparent===!1&&D.blending===s6&&D.alphaToCoverage===!1,alphaMap:W0,alphaTest:N0,alphaHash:w0,combine:D.combine,mapUv:j0&&R(D.map.channel),aoMapUv:Y9&&R(D.aoMap.channel),lightMapUv:S9&&R(D.lightMap.channel),bumpMapUv:b9&&R(D.bumpMap.channel),normalMapUv:U9&&R(D.normalMap.channel),displacementMapUv:V9&&R(D.displacementMap.channel),emissiveMapUv:j9&&R(D.emissiveMap.channel),metalnessMapUv:f9&&R(D.metalnessMap.channel),roughnessMapUv:s9&&R(D.roughnessMap.channel),anisotropyMapUv:B9&&R(D.anisotropyMap.channel),clearcoatMapUv:I&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:O&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:y&&R(D.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:e&&R(D.diffuseRoughnessMap.channel),iridescenceMapUv:t&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:K0&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Y0&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:l&&R(D.sheenRoughnessMap.channel),specularMapUv:s&&R(D.specularMap.channel),specularColorMapUv:H0&&R(D.specularColorMap.channel),specularIntensityMapUv:_&&R(D.specularIntensityMap.channel),transmissionMapUv:n&&R(D.transmissionMap.channel),thicknessMapUv:u&&R(D.thicknessMap.channel),alphaMapUv:W0&&R(D.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(U9||f),vertexNormals:!!w.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!w.attributes.uv&&(j0||W0),fog:!!r,useFog:D.fog===!0,fogExp2:!!r&&r.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||w.attributes.normal===void 0&&U9===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:G,reversedDepthBuffer:R0,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:Q0,morphTextureStride:B0,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:x.filter((F0)=>F0.texture!==null).length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:q0,decodeVideoTexture:j0&&D.map.isVideoTexture===!0&&u0.getTransfer(D.map.colorSpace)===Q9,decodeVideoTextureEmissive:j9&&D.emissiveMap.isVideoTexture===!0&&u0.getTransfer(D.emissiveMap.colorSpace)===Q9,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===u9,flipSided:D.side===v9,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:A0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(A0&&D.extensions.multiDraw===!0||h0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return g0.vertexUv1s=Y.has(1),g0.vertexUv2s=Y.has(2),g0.vertexUv3s=Y.has(3),Y.clear(),g0}function k(D){let V=[];if(D.shaderID)V.push(D.shaderID);else V.push(D.customVertexShaderID),V.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let j in D.defines)V.push(j),V.push(D.defines[j]);if(D.isRawShaderMaterial===!1)q(V,D),F(V,D),V.push(J.outputColorSpace);return V.push(D.customProgramCacheKey),V.join()}function q(D,V){D.push(V.precision),D.push(V.outputColorSpace),D.push(V.envMapMode),D.push(V.envMapPMREM),D.push(V.envMapMaxLod),D.push(V.envMapSize),D.push(V.mapUv),D.push(V.alphaMapUv),D.push(V.lightMapUv),D.push(V.aoMapUv),D.push(V.bumpMapUv),D.push(V.normalMapUv),D.push(V.displacementMapUv),D.push(V.emissiveMapUv),D.push(V.metalnessMapUv),D.push(V.roughnessMapUv),D.push(V.anisotropyMapUv),D.push(V.clearcoatMapUv),D.push(V.clearcoatNormalMapUv),D.push(V.clearcoatRoughnessMapUv),D.push(V.diffuseRoughnessMapUv),D.push(V.iridescenceMapUv),D.push(V.iridescenceThicknessMapUv),D.push(V.sheenColorMapUv),D.push(V.sheenRoughnessMapUv),D.push(V.specularMapUv),D.push(V.specularColorMapUv),D.push(V.specularIntensityMapUv),D.push(V.transmissionMapUv),D.push(V.thicknessMapUv),D.push(V.combine),D.push(V.fogExp2),D.push(V.sizeAttenuation),D.push(V.morphTargetsCount),D.push(V.numSunLights),D.push(V.numDirLights),D.push(V.numPointLights),D.push(V.numSpotLights),D.push(V.numSpotLightMaps),D.push(V.numHemiLights),D.push(V.numRectAreaLights),D.push(V.numSunLightShadows),D.push(V.numDirLightShadows),D.push(V.numPointLightShadows),D.push(V.numSpotLightShadows),D.push(V.numSpotLightShadowsWithMaps),D.push(V.numLightProbes),D.push(V.numLightProbeGrids),D.push(V.shadowMapType),D.push(V.toneMapping),D.push(V.numClippingPlanes),D.push(V.numClipIntersection),D.push(V.depthPacking)}function F(D,V){if(H.disableAll(),V.instancing)H.enable(0);if(V.instancingColor)H.enable(1);if(V.instancingMorph)H.enable(2);if(V.matcap)H.enable(3);if(V.envMap)H.enable(4);if(V.normalMapObjectSpace)H.enable(5);if(V.normalMapTangentSpace)H.enable(6);if(V.clearcoat)H.enable(7);if(V.iridescence)H.enable(8);if(V.alphaTest)H.enable(9);if(V.vertexColors)H.enable(10);if(V.vertexAlphas)H.enable(11);if(V.vertexUv1s)H.enable(12);if(V.vertexUv2s)H.enable(13);if(V.vertexUv3s)H.enable(14);if(V.vertexTangents)H.enable(15);if(V.anisotropy)H.enable(16);if(V.alphaHash)H.enable(17);if(V.batching)H.enable(18);if(V.dispersion)H.enable(19);if(V.retroreflection)H.enable(24);if(V.diffuseRoughness)H.enable(25);if(V.batchingColor)H.enable(20);if(V.gradientMap)H.enable(21);if(V.packedNormalMap)H.enable(22);if(V.vertexNormals)H.enable(23);if(D.push(H.mask),H.disableAll(),V.fog)H.enable(0);if(V.useFog)H.enable(1);if(V.flatShading)H.enable(2);if(V.logarithmicDepthBuffer)H.enable(3);if(V.reversedDepthBuffer)H.enable(4);if(V.skinning)H.enable(5);if(V.morphTargets)H.enable(6);if(V.morphNormals)H.enable(7);if(V.morphColors)H.enable(8);if(V.premultipliedAlpha)H.enable(9);if(V.shadowMapEnabled)H.enable(10);if(V.doubleSided)H.enable(11);if(V.flipSided)H.enable(12);if(V.useDepthPacking)H.enable(13);if(V.dithering)H.enable(14);if(V.transmission)H.enable(15);if(V.sheen)H.enable(16);if(V.opaque)H.enable(17);if(V.pointsUvs)H.enable(18);if(V.decodeVideoTexture)H.enable(19);if(V.decodeVideoTextureEmissive)H.enable(20);if(V.alphaToCoverage)H.enable(21);if(V.numLightProbeGrids>0)H.enable(22);if(V.hasPositionAttribute)H.enable(23);D.push(H.mask)}function z(D){let V=N[D.type],j;if(V){let g=N7[V];j=i$.clone(g.uniforms)}else j=D.uniforms;return j}function A(D,V){let j=E.get(V);if(j!==void 0)++j.usedTimes;else j=new oU(J,V,D,W),U.push(j),E.set(V,j);return j}function B(D){if(--D.usedTimes===0){let V=U.indexOf(D);U[V]=U[U.length-1],U.pop(),E.delete(D.cacheKey),D.destroy()}}function C(D){X.remove(D)}function P(){X.dispose()}return{getParameters:L,getProgramCacheKey:k,getUniforms:z,acquireProgram:A,releaseProgram:B,releaseShaderCache:C,programs:U,dispose:P}}function eU(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let X=J.get(H);if(X===void 0)X={},J.set(H,X);return X}function Z(H){J.delete(H)}function W(H,X,Y){J.get(H)[X]=Y}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function JN(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function RZ(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function OZ(){let J=[],Q=0,$=[],Z=[],W=[];function K(){Q=0,$.length=0,Z.length=0,W.length=0}function H(N){let R=0;if(N.isInstancedMesh)R+=2;if(N.isSkinnedMesh)R+=1;return R}function X(N,R,L,k,q,F){let z=J[Q];if(z===void 0)z={id:N.id,object:N,geometry:R,material:L,materialVariant:H(N),groupOrder:k,renderOrder:N.renderOrder,z:q,group:F},J[Q]=z;else z.id=N.id,z.object=N,z.geometry=R,z.material=L,z.materialVariant=H(N),z.groupOrder=k,z.renderOrder=N.renderOrder,z.z=q,z.group=F;return Q++,z}function Y(N,R,L,k,q,F,z){if(z.reversedDepth===!0)q=-q;let A=X(N,R,L,k,q,F);if(L.transmission>0)Z.push(A);else if(L.transparent===!0)W.push(A);else $.push(A)}function U(N,R,L,k,q,F){let z=X(N,R,L,k,q,F);if(L.transmission>0)Z.unshift(z);else if(L.transparent===!0)W.unshift(z);else $.unshift(z)}function E(N,R){if($.length>1)$.sort(N||JN);if(Z.length>1)Z.sort(R||RZ);if(W.length>1)W.sort(R||RZ)}function G(){for(let N=Q,R=J.length;N<R;N++){let L=J[N];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:Y,unshift:U,finish:G,sort:E}}function QN(){let J=new WeakMap;function Q(Z,W){let K=J.get(Z),H;if(K===void 0)H=new OZ,J.set(Z,[H]);else if(W>=K.length)H=new OZ,K.push(H);else H=K[W];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function $N(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new p,color:new o0};break;case"SpotLight":$={position:new p,direction:new p,color:new o0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new p,color:new o0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new p,skyColor:new o0,groundColor:new o0};break;case"RectAreaLight":$={color:new o0,position:new p,halfWidth:new p,halfHeight:new p};break}return J[Q.id]=$,$}}}function ZN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var WN=0;function KN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function HN(J){let Q=new $N,$=ZN(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new p);let W=new p,K=new K9,H=new K9;function X(U){let E=0,G=0,N=0;for(let x=0;x<9;x++)Z.probe[x].set(0,0,0);let R=0,L=0,k=0,q=0,F=0,z=0,A=0,B=0,C=0,P=0,D=0,V=0,j=0,g=0;U.sort(KN);for(let x=0,r=U.length;x<r;x++){let w=U[x],c=w.color,i=w.intensity,v=w.distance,Z0=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===o7)Z0=w.shadow.map.texture;else Z0=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)E+=c.r*i,G+=c.g*i,N+=c.b*i;else if(w.isLightProbe){for(let d=0;d<9;d++)Z.probe[d].addScaledVector(w.sh.coefficients[d],i);g++}else if(w.isSunLight){let d=Q.get(w);if(d.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let a=w.shadow,Q0=$.get(w);Q0.shadowIntensity=a.intensity,Q0.shadowBias=a.bias,Q0.shadowNormalBias=a.normalBias,Q0.shadowRadius=a.radius,Q0.shadowMapSize.copy(a.mapSize).multiply(a.getFrameExtents()),Z.sunShadow[L]=Q0,Z.sunShadowMap[L]=Z0;let B0=a.getViewportCount();for(let o=0;o<B0;o++)Z.sunShadowMatrix[k+o]=a.getMatrix(o),Z.sunShadowCascade[k+o]=a._cascadeData[o];k+=B0,L++}Z.sun[R]=d,R++}else if(w.isDirectionalLight){let d=Q.get(w);if(d.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let a=w.shadow,Q0=$.get(w);Q0.shadowIntensity=a.intensity,Q0.shadowBias=a.bias,Q0.shadowNormalBias=a.normalBias,Q0.shadowRadius=a.radius,Q0.shadowMapSize=a.mapSize,Z.directionalShadow[q]=Q0,Z.directionalShadowMap[q]=Z0,Z.directionalShadowMatrix[q]=w.shadow.matrix,C++}Z.directional[q]=d,q++}else if(w.isSpotLight){let d=Q.get(w);d.position.setFromMatrixPosition(w.matrixWorld),d.color.copy(c).multiplyScalar(i),d.distance=v,d.coneCos=Math.cos(w.angle),d.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),d.decay=w.decay,Z.spot[z]=d;let a=w.shadow;if(w.map){if(Z.spotLightMap[V]=w.map,V++,a.updateMatrices(w),w.castShadow)j++}if(Z.spotLightMatrix[z]=a.matrix,w.castShadow){let Q0=$.get(w);Q0.shadowIntensity=a.intensity,Q0.shadowBias=a.bias,Q0.shadowNormalBias=a.normalBias,Q0.shadowRadius=a.radius,Q0.shadowMapSize=a.mapSize,Z.spotShadow[z]=Q0,Z.spotShadowMap[z]=Z0,D++}z++}else if(w.isRectAreaLight){let d=Q.get(w);d.color.copy(c).multiplyScalar(i),d.halfWidth.set(w.width*0.5,0,0),d.halfHeight.set(0,w.height*0.5,0),Z.rectArea[A]=d,A++}else if(w.isPointLight){let d=Q.get(w);if(d.color.copy(w.color).multiplyScalar(w.intensity),d.distance=w.distance,d.decay=w.decay,w.castShadow){let a=w.shadow,Q0=$.get(w);Q0.shadowIntensity=a.intensity,Q0.shadowBias=a.bias,Q0.shadowNormalBias=a.normalBias,Q0.shadowRadius=a.radius,Q0.shadowMapSize=a.mapSize,Q0.shadowCameraNear=a.camera.near,Q0.shadowCameraFar=a.camera.far,Z.pointShadow[F]=Q0,Z.pointShadowMap[F]=Z0,Z.pointShadowMatrix[F]=w.shadow.matrix,P++}Z.point[F]=d,F++}else if(w.isHemisphereLight){let d=Q.get(w);d.skyColor.copy(w.color).multiplyScalar(i),d.groundColor.copy(w.groundColor).multiplyScalar(i),Z.hemi[B]=d,B++}}if(A>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=G0.LTC_FLOAT_1,Z.rectAreaLTC2=G0.LTC_FLOAT_2;else Z.rectAreaLTC1=G0.LTC_HALF_1,Z.rectAreaLTC2=G0.LTC_HALF_2;Z.ambient[0]=E,Z.ambient[1]=G,Z.ambient[2]=N;let S=Z.hash;if(S.sunLength!==R||S.directionalLength!==q||S.pointLength!==F||S.spotLength!==z||S.rectAreaLength!==A||S.hemiLength!==B||S.numSunShadows!==L||S.numDirectionalShadows!==C||S.numPointShadows!==P||S.numSpotShadows!==D||S.numSpotMaps!==V||S.numLightProbes!==g)Z.sun.length=R,Z.directional.length=q,Z.spot.length=z,Z.rectArea.length=A,Z.point.length=F,Z.hemi.length=B,Z.sunShadow.length=L,Z.sunShadowMap.length=L,Z.sunShadowMatrix.length=k,Z.sunShadowCascade.length=k,Z.directionalShadow.length=C,Z.directionalShadowMap.length=C,Z.directionalShadowMatrix.length=C,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.pointShadowMatrix.length=P,Z.spotShadow.length=D,Z.spotShadowMap.length=D,Z.spotLightMatrix.length=D+V-j,Z.spotLightMap.length=V,Z.numSpotLightShadowsWithMaps=j,Z.numLightProbes=g,S.sunLength=R,S.directionalLength=q,S.pointLength=F,S.spotLength=z,S.rectAreaLength=A,S.hemiLength=B,S.numSunShadows=L,S.numDirectionalShadows=C,S.numPointShadows=P,S.numSpotShadows=D,S.numSpotMaps=V,S.numLightProbes=g,Z.version=WN++}function Y(U,E){let G=0,N=0,R=0,L=0,k=0,q=0,F=E.matrixWorldInverse;for(let z=0,A=U.length;z<A;z++){let B=U[z];if(B.isSunLight){let C=Z.sun[G];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(F),G++}else if(B.isDirectionalLight){let C=Z.directional[N];C.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(F),N++}else if(B.isSpotLight){let C=Z.spot[L];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(F),C.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(F),L++}else if(B.isRectAreaLight){let C=Z.rectArea[k];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(F),H.identity(),K.copy(B.matrixWorld),K.premultiply(F),H.extractRotation(K),C.halfWidth.set(B.width*0.5,0,0),C.halfHeight.set(0,B.height*0.5,0),C.halfWidth.applyMatrix4(H),C.halfHeight.applyMatrix4(H),k++}else if(B.isPointLight){let C=Z.point[R];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(F),R++}else if(B.isHemisphereLight){let C=Z.hemi[q];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(F),q++}}}return{setup:X,setupView:Y,state:Z}}function MZ(J){let Q=new HN(J),$=[],Z=[],W=[];function K(G){E.camera=G,$.length=0,Z.length=0,W.length=0}function H(G){if(G.isLightProbeGrid)W.push(G);else $.push(G)}function X(G){Z.push(G)}function Y(){Q.setup($),W.sort((G,N)=>G.priority-N.priority||G.id-N.id)}function U(G){Q.setupView($,G)}let E={lightsArray:$,shadowsArray:Z,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:E,setupLights:Y,setupLightsView:U,pushLight:H,pushShadow:X}}function XN(J){let Q=new WeakMap;function $(W,K=0){let H=Q.get(W),X;if(H===void 0)X=new MZ(J),Q.set(W,[X]);else if(K>=H.length)X=new MZ(J),H.push(X);else X=H[K];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var YN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UN=`uniform sampler2D shadow_pass;
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
}`,NN=[new p(1,0,0),new p(-1,0,0),new p(0,1,0),new p(0,-1,0),new p(0,0,1),new p(0,0,-1)],EN=[new p(0,-1,0),new p(0,-1,0),new p(0,0,1),new p(0,0,-1),new p(0,-1,0),new p(0,-1,0)],LZ=new K9,H8=new p,xJ=new p;function GN(J,Q,$){let Z=new B6,W=new m0,K=new m0,H=new H9,X=new BJ,Y=new kJ,U={},E=$.maxTextureSize,G={[I6]:v9,[v9]:I6,[u9]:u9},N=new _9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new m0},radius:{value:4}},vertexShader:YN,fragmentShader:UN}),R=N.clone();R.defines.HORIZONTAL_PASS=1;let L=new I7;L.setAttribute("position",new H7(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let k=new w9(L,N),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n6;let F=this.type;this.render=function(P,D,V){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(P.length===0)return;if(this.type===aQ)S0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=n6;let j=J.getRenderTarget(),g=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),x=J.state;if(x.setBlending(L7),x.buffers.depth.getReversed()===!0)x.buffers.color.setClear(0,0,0,0);else x.buffers.color.setClear(1,1,1,1);x.buffers.depth.setTest(!0),x.setScissorTest(!1);let r=F!==this.type;if(r)D.traverse(function(w){if(w.material)if(Array.isArray(w.material))w.material.forEach((c)=>c.needsUpdate=!0);else w.material.needsUpdate=!0});for(let w=0,c=P.length;w<c;w++){let i=P[w],v=i.shadow;if(v===void 0){S0("WebGLShadowMap:",i,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;W.copy(v.mapSize);let Z0=v.getFrameExtents();if(W.multiply(Z0),K.copy(v.mapSize),W.x>E||W.y>E){if(W.x>E)K.x=Math.floor(E/Z0.x),W.x=K.x*Z0.x,v.mapSize.x=K.x;if(W.y>E)K.y=Math.floor(E/Z0.y),W.y=K.y*Z0.y,v.mapSize.y=K.y}let d=J.state.buffers.depth.getReversed();if(v.camera._reversedDepth=d,v.map===null||r===!0){if(v.map!==null){if(v.map.depthTexture!==null)v.map.depthTexture.dispose(),v.map.depthTexture=null;v.map.dispose()}if(this.type===k6){if(i.isPointLight){S0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}v.map=new y9(W.x,W.y,{format:o7,type:p9,minFilter:C9,magFilter:C9,generateMipmaps:!1}),v.map.texture.name=i.name+".shadowMap",v.map.depthTexture=new h7(W.x,W.y,V7),v.map.depthTexture.name=i.name+".shadowMapDepth",v.map.depthTexture.format=A6,v.map.depthTexture.compareFunction=null,v.map.depthTexture.minFilter=f7,v.map.depthTexture.magFilter=f7}else{if(i.isPointLight)v.map=new B5(W.x),v.map.depthTexture=new q5(W.x,y7);else v.map=new y9(W.x,W.y),v.map.depthTexture=new h7(W.x,W.y,y7);if(v.map.depthTexture.name=i.name+".shadowMap",v.map.depthTexture.format=A6,this.type===n6)v.map.depthTexture.compareFunction=d?YJ:XJ,v.map.depthTexture.minFilter=C9,v.map.depthTexture.magFilter=C9;else v.map.depthTexture.compareFunction=null,v.map.depthTexture.minFilter=f7,v.map.depthTexture.magFilter=f7}v.camera.updateProjectionMatrix()}if(v.map.isWebGLCubeRenderTarget!==!0&&(v.map.width!==W.x||v.map.height!==W.y))v.map.setSize(W.x,W.y);let a=v.map.isWebGLCubeRenderTarget?6:v.getViewportCount();if(i.isPointLight!==!0)v.updateMatrices(i,V);let Q0=(v.camera.layers.mask&4294967294)!==0?v.camera.layers:V.layers;for(let B0=0;B0<a;B0++){let o=v.getCamera(B0);if(i.isPointLight){let{camera:J0,matrix:O0}=v,C0=i.distance||J0.far;if(C0!==J0.far)J0.far=C0,J0.updateProjectionMatrix();H8.setFromMatrixPosition(i.matrixWorld),J0.position.copy(H8),xJ.copy(J0.position),xJ.add(NN[B0]),J0.up.copy(EN[B0]),J0.lookAt(xJ),J0.updateMatrixWorld(),O0.makeTranslation(-H8.x,-H8.y,-H8.z),LZ.multiplyMatrices(J0.projectionMatrix,J0.matrixWorldInverse),v._frustum.setFromProjectionMatrix(LZ,J0.coordinateSystem,J0.reversedDepth)}if(v.map.isWebGLCubeRenderTarget)J.setRenderTarget(v.map,B0),J.clear();else{if(B0===0)J.setRenderTarget(v.map),J.clear();let J0=v.getViewport(B0);H.set(K.x*J0.x,K.y*J0.y,K.x*J0.z,K.y*J0.w),x.viewport(H)}Z=v.getFrustum(B0),B(D,V,o,i,Q0,this.type)}if(v.isPointLightShadow!==!0&&this.type===k6)z(v,V);v.needsUpdate=!1}F=this.type,q.needsUpdate=!1,J.setRenderTarget(j,g,S)};function z(P,D){let V=Q.update(k);if(N.defines.VSM_SAMPLES!==P.blurSamples)N.defines.VSM_SAMPLES=P.blurSamples,R.defines.VSM_SAMPLES=P.blurSamples,N.needsUpdate=!0,R.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new y9(W.x,W.y,{format:o7,type:p9});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);N.uniforms.shadow_pass.value=P.map.depthTexture,N.uniforms.resolution.value.set(P.map.width,P.map.height),N.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(D,null,V,N,k,null),R.uniforms.shadow_pass.value=P.mapPass.texture,R.uniforms.resolution.value.set(P.map.width,P.map.height),R.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(D,null,V,R,k,null)}function A(P,D,V,j){let g=null,S=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)g=S;else if(g=V.isPointLight===!0?Y:X,J.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let x=g.uuid,r=D.uuid,w=U[x];if(w===void 0)w={},U[x]=w;let c=w[r];if(c===void 0)c=g.clone(),w[r]=c,D.addEventListener("dispose",C);g=c}if(g.visible=D.visible,g.wireframe=D.wireframe,j===k6)g.side=D.shadowSide!==null?D.shadowSide:D.side;else g.side=D.shadowSide!==null?D.shadowSide:G[D.side];if(g.alphaMap=D.alphaMap,g.alphaTest=D.alphaToCoverage===!0?0.5:D.alphaTest,g.map=D.map,g.clipShadows=D.clipShadows,g.clippingPlanes=D.clippingPlanes,g.clipIntersection=D.clipIntersection,g.displacementMap=D.displacementMap,g.displacementScale=D.displacementScale,g.displacementBias=D.displacementBias,g.wireframeLinewidth=D.wireframeLinewidth,g.linewidth=D.linewidth,V.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let x=J.properties.get(g);x.light=V}return g}function B(P,D,V,j,g,S){if(P.visible===!1)return;if(P.layers.test(g)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&S===k6)&&(!P.frustumCulled||P.intersectsFrustum(Z))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);let w=Q.update(P),c=P.material;if(Array.isArray(c)){let i=w.groups;for(let v=0,Z0=i.length;v<Z0;v++){let d=i[v],a=c[d.materialIndex];if(a&&a.visible){let Q0=A(P,a,j,S);P.onBeforeShadow(J,P,D,V,w,Q0,d),J.renderBufferDirect(V,null,w,Q0,P,d),P.onAfterShadow(J,P,D,V,w,Q0,d)}}}else if(c.visible){let i=A(P,c,j,S);P.onBeforeShadow(J,P,D,V,w,i,null),J.renderBufferDirect(V,null,w,i,P,null),P.onAfterShadow(J,P,D,V,w,i,null)}}}let r=P.children;for(let w=0,c=r.length;w<c;w++)B(r[w],D,V,j,g,S)}function C(P){P.target.removeEventListener("dispose",C);for(let V in U){let j=U[V],g=P.target.uuid;if(g in j)j[g].dispose(),delete j[g]}}}function qN(J,Q){function $(){let _=!1,n=new H9,u=null,$0=new H9(0,0,0,0);return{setMask:function(W0){if(u!==W0&&!_)J.colorMask(W0,W0,W0,W0),u=W0},setLocked:function(W0){_=W0},setClear:function(W0,N0,w0,A0,q0){if(q0===!0)W0*=A0,N0*=A0,w0*=A0;if(n.set(W0,N0,w0,A0),$0.equals(n)===!1)J.clearColor(W0,N0,w0,A0),$0.copy(n)},reset:function(){_=!1,u=null,$0.set(-1,0,0,0)}}}function Z(){let _=!1,n=!1,u=null,$0=null,W0=null;return{setReversed:function(N0){if(n!==N0){let w0=Q.get("EXT_clip_control");if(N0)w0.clipControlEXT(w0.LOWER_LEFT_EXT,w0.ZERO_TO_ONE_EXT);else w0.clipControlEXT(w0.LOWER_LEFT_EXT,w0.NEGATIVE_ONE_TO_ONE_EXT);n=N0;let A0=W0;W0=null,this.setClear(A0)}},getReversed:function(){return n},setTest:function(N0){if(N0)R0(J.DEPTH_TEST);else n0(J.DEPTH_TEST)},setMask:function(N0){if(u!==N0&&!_)J.depthMask(N0),u=N0},setFunc:function(N0){if(n)N0=c$[N0];if($0!==N0){switch(N0){case D$:J.depthFunc(J.NEVER);break;case R$:J.depthFunc(J.ALWAYS);break;case O$:J.depthFunc(J.LESS);break;case D1:J.depthFunc(J.LEQUAL);break;case M$:J.depthFunc(J.EQUAL);break;case L$:J.depthFunc(J.GEQUAL);break;case V$:J.depthFunc(J.GREATER);break;case B$:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}$0=N0}},setLocked:function(N0){_=N0},setClear:function(N0){if(W0!==N0){if(W0=N0,n)N0=1-N0;J.clearDepth(N0)}},reset:function(){_=!1,u=null,$0=null,W0=null,n=!1}}}function W(){let _=!1,n=null,u=null,$0=null,W0=null,N0=null,w0=null,A0=null,q0=null;return{setTest:function(P0){if(!_)if(P0)R0(J.STENCIL_TEST);else n0(J.STENCIL_TEST)},setMask:function(P0){if(n!==P0&&!_)J.stencilMask(P0),n=P0},setFunc:function(P0,g0,F0){if(u!==P0||$0!==g0||W0!==F0)J.stencilFunc(P0,g0,F0),u=P0,$0=g0,W0=F0},setOp:function(P0,g0,F0){if(N0!==P0||w0!==g0||A0!==F0)J.stencilOp(P0,g0,F0),N0=P0,w0=g0,A0=F0},setLocked:function(P0){_=P0},setClear:function(P0){if(q0!==P0)J.clearStencil(P0),q0=P0},reset:function(){_=!1,n=null,u=null,$0=null,W0=null,N0=null,w0=null,A0=null,q0=null}}}let K=new $,H=new Z,X=new W,Y={},U=new WeakMap,E={},G={},N={},R=new WeakMap,L=[],k=null,q=!1,F=null,z=null,A=null,B=null,C=null,P=null,D=null,V=new o0(0,0,0),j=0,g=!1,S=null,x=null,r=null,w=null,c=null,i=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),v=!1,Z0=0,d=J.getParameter(J.VERSION);if(d.indexOf("WebGL")!==-1)Z0=parseFloat(/^WebGL (\d)/.exec(d)[1]),v=Z0>=1;else if(d.indexOf("OpenGL ES")!==-1)Z0=parseFloat(/^OpenGL ES (\d)/.exec(d)[1]),v=Z0>=2;let a=null,Q0={},B0=J.getParameter(J.SCISSOR_BOX),o=J.getParameter(J.VIEWPORT),J0=new H9().fromArray(B0),O0=new H9().fromArray(o);function C0(_,n,u,$0){let W0=new Uint8Array(4),N0=J.createTexture();J.bindTexture(_,N0),J.texParameteri(_,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(_,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let w0=0;w0<u;w0++)if(_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texImage3D(n,0,J.RGBA,1,1,$0,0,J.RGBA,J.UNSIGNED_BYTE,W0);else J.texImage2D(n+w0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,W0);return N0}let z0={};z0[J.TEXTURE_2D]=C0(J.TEXTURE_2D,J.TEXTURE_2D,1),z0[J.TEXTURE_CUBE_MAP]=C0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),z0[J.TEXTURE_2D_ARRAY]=C0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),z0[J.TEXTURE_3D]=C0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),X.setClear(0),R0(J.DEPTH_TEST),H.setFunc(D1),b9(!1),U9(E1),R0(J.CULL_FACE),Y9(L7);function R0(_){if(E[_]!==!0)J.enable(_),E[_]=!0}function n0(_){if(E[_]!==!1)J.disable(_),E[_]=!1}function h0(_,n){if(N[_]!==n){if(J.bindFramebuffer(_,n),N[_]=n,_===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=n;if(_===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=n;return!0}return!1}function j0(_,n){let u=L,$0=!1;if(_){if(u=R.get(n),u===void 0)u=[],R.set(n,u);let W0=_.textures;if(u.length!==W0.length||u[0]!==J.COLOR_ATTACHMENT0){for(let N0=0,w0=W0.length;N0<w0;N0++)u[N0]=J.COLOR_ATTACHMENT0+N0;u.length=W0.length,$0=!0}}else if(u[0]!==J.BACK)u[0]=J.BACK,$0=!0;if($0)J.drawBuffers(u)}function i0(_){if(k!==_)return J.useProgram(_),k=_,!0;return!1}let x0={[j7]:J.FUNC_ADD,[rQ]:J.FUNC_SUBTRACT,[tQ]:J.FUNC_REVERSE_SUBTRACT};x0[eQ]=J.MIN,x0[J$]=J.MAX;let X9={[Q$]:J.ZERO,[s7]:J.ONE,[$$]:J.SRC_COLOR,[W$]:J.SRC_ALPHA,[N$]:J.SRC_ALPHA_SATURATE,[Y$]:J.DST_COLOR,[H$]:J.DST_ALPHA,[Z$]:J.ONE_MINUS_SRC_COLOR,[K$]:J.ONE_MINUS_SRC_ALPHA,[U$]:J.ONE_MINUS_DST_COLOR,[X$]:J.ONE_MINUS_DST_ALPHA,[E$]:J.CONSTANT_COLOR,[G$]:J.ONE_MINUS_CONSTANT_COLOR,[q$]:J.CONSTANT_ALPHA,[F$]:J.ONE_MINUS_CONSTANT_ALPHA};function Y9(_,n,u,$0,W0,N0,w0,A0,q0,P0){if(_===L7){if(q===!0)n0(J.BLEND),q=!1;return}if(q===!1)R0(J.BLEND),q=!0;if(_!==a8){if(_!==F||P0!==g){if(z!==j7||C!==j7)J.blendEquation(J.FUNC_ADD),z=j7,C=j7;if(P0)switch(_){case s6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case G1:J.blendFunc(J.ONE,J.ONE);break;case q1:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case F1:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:f0("WebGLState: Invalid blending: ",_);break}else switch(_){case s6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case G1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case q1:f0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F1:f0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:f0("WebGLState: Invalid blending: ",_);break}A=null,B=null,P=null,D=null,V.set(0,0,0),j=0,F=_,g=P0}return}if(W0=W0||n,N0=N0||u,w0=w0||$0,n!==z||W0!==C)J.blendEquationSeparate(x0[n],x0[W0]),z=n,C=W0;if(u!==A||$0!==B||N0!==P||w0!==D)J.blendFuncSeparate(X9[u],X9[$0],X9[N0],X9[w0]),A=u,B=$0,P=N0,D=w0;if(A0.equals(V)===!1||q0!==j)J.blendColor(A0.r,A0.g,A0.b,q0),V.copy(A0),j=q0;F=_,g=!1}function S9(_,n){_.side===u9?n0(J.CULL_FACE):R0(J.CULL_FACE);let u=_.side===v9;if(n)u=!u;b9(u),_.blending===s6&&_.transparent===!1?Y9(L7):Y9(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),H.setFunc(_.depthFunc),H.setTest(_.depthTest),H.setMask(_.depthWrite),K.setMask(_.colorWrite);let $0=_.stencilWrite;if(X.setTest($0),$0)X.setMask(_.stencilWriteMask),X.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),X.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass);j9(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?R0(J.SAMPLE_ALPHA_TO_COVERAGE):n0(J.SAMPLE_ALPHA_TO_COVERAGE)}function b9(_){if(S!==_){if(_)J.frontFace(J.CW);else J.frontFace(J.CCW);S=_}}function U9(_){if(_!==iQ){if(R0(J.CULL_FACE),_!==x)if(_===E1)J.cullFace(J.BACK);else if(_===oQ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else n0(J.CULL_FACE);x=_}function V9(_){if(_!==r){if(v)J.lineWidth(_);r=_}}function j9(_,n,u){if(_){if(R0(J.POLYGON_OFFSET_FILL),w!==n||c!==u){if(w=n,c=u,H.getReversed())n=-n,u=-u;J.polygonOffset(n,u)}}else n0(J.POLYGON_OFFSET_FILL)}function f9(_){if(_)R0(J.SCISSOR_TEST);else n0(J.SCISSOR_TEST)}function s9(_){if(_===void 0)_=J.TEXTURE0+i-1;if(a!==_)J.activeTexture(_),a=_}function f(_,n,u){if(u===void 0)if(a===null)u=J.TEXTURE0+i-1;else u=a;let $0=Q0[u];if($0===void 0)$0={type:void 0,texture:void 0},Q0[u]=$0;if($0.type!==_||$0.texture!==n){if(a!==u)J.activeTexture(u),a=u;J.bindTexture(_,n||z0[_]),$0.type=_,$0.texture=n}}function i9(){let _=Q0[a];if(_!==void 0&&_.type!==void 0)J.bindTexture(_.type,null),_.type=void 0,_.texture=void 0}function t0(){try{J.compressedTexImage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function F9(){try{J.compressedTexImage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function E0(){try{J.texSubImage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function $9(){try{J.texSubImage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function _0(){try{J.compressedTexSubImage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function y0(){try{J.compressedTexSubImage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function B9(){try{J.texStorage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function I(){try{J.texStorage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function O(){try{J.texImage2D(...arguments)}catch(_){f0("WebGLState:",_)}}function y(){try{J.texImage3D(...arguments)}catch(_){f0("WebGLState:",_)}}function e(_){if(G[_]!==void 0)return G[_];else return J.getParameter(_)}function t(_,n){if(G[_]!==n)J.pixelStorei(_,n),G[_]=n}function K0(_){if(J0.equals(_)===!1)J.scissor(_.x,_.y,_.z,_.w),J0.copy(_)}function Y0(_){if(O0.equals(_)===!1)J.viewport(_.x,_.y,_.z,_.w),O0.copy(_)}function l(_,n){let u=U.get(n);if(u===void 0)u=new WeakMap,U.set(n,u);let $0=u.get(_);if($0===void 0)$0=J.getUniformBlockIndex(n,_.name),J.uniformBlockBinding(n,$0,$0),u.set(_,$0)}function s(_,n,u){let W0=U.get(n).get(_);if(Y[W0]!==u)J.bindBufferBase(J.UNIFORM_BUFFER,W0,u),Y[W0]=u}function H0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),E={},G={},a=null,Q0={},N={},Y={},R=new WeakMap,L=[],k=null,q=!1,F=null,z=null,A=null,B=null,C=null,P=null,D=null,V=new o0(0,0,0),j=0,g=!1,S=null,x=null,r=null,w=null,c=null,J0.set(0,0,J.canvas.width,J.canvas.height),O0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),X.reset()}return{buffers:{color:K,depth:H,stencil:X},enable:R0,disable:n0,bindFramebuffer:h0,drawBuffers:j0,useProgram:i0,setBlending:Y9,setMaterial:S9,setFlipSided:b9,setCullFace:U9,setLineWidth:V9,setPolygonOffset:j9,setScissorTest:f9,activeTexture:s9,bindTexture:f,unbindTexture:i9,compressedTexImage2D:t0,compressedTexImage3D:F9,texImage2D:O,texImage3D:y,pixelStorei:t,getParameter:e,updateUBOMapping:l,uniformBlockBinding:s,texStorage2D:B9,texStorage3D:I,texSubImage2D:E0,texSubImage3D:$9,compressedTexSubImage2D:_0,compressedTexSubImage3D:y0,scissor:K0,viewport:Y0,reset:H0}}function FN(J,Q,$,Z,W,K,H){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,Y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new m0,E=new WeakMap,G=new Set,N,R=new WeakMap,L=new Set,k=new FinalizationRegistry((I)=>L.delete(I)),q=!1;try{q=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function F(I,O){return q?new OffscreenCanvas(I,O):L6("canvas")}function z(I,O,y){let e=1,t=B9(I);if(t.width>y||t.height>y)e=y/Math.max(t.width,t.height);if(e<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let K0=Math.floor(e*t.width),Y0=Math.floor(e*t.height);if(N===void 0)N=F(K0,Y0);let l=O?F(K0,Y0):N;return l.width=K0,l.height=Y0,l.getContext("2d").drawImage(I,0,0,K0,Y0),S0("WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+K0+"x"+Y0+")."),l}else{if("data"in I)S0("WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+").");return I}return I}function A(I){return I.generateMipmaps}function B(I){J.generateMipmap(I)}function C(I){if(I.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(I.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function P(I,O,y,e,t,K0=!1){if(I!==null){if(J[I]!==void 0)return J[I];S0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Y0;if(e){if(Y0=Q.get("EXT_texture_norm16"),!Y0)S0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let l=O;if(O===J.RED){if(y===J.FLOAT)l=J.R32F;if(y===J.HALF_FLOAT)l=J.R16F;if(y===J.UNSIGNED_BYTE)l=J.R8;if(y===J.UNSIGNED_SHORT&&Y0)l=Y0.R16_EXT;if(y===J.SHORT&&Y0)l=Y0.R16_SNORM_EXT}if(O===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.R8UI;if(y===J.UNSIGNED_SHORT)l=J.R16UI;if(y===J.UNSIGNED_INT)l=J.R32UI;if(y===J.BYTE)l=J.R8I;if(y===J.SHORT)l=J.R16I;if(y===J.INT)l=J.R32I}if(O===J.RG){if(y===J.FLOAT)l=J.RG32F;if(y===J.HALF_FLOAT)l=J.RG16F;if(y===J.UNSIGNED_BYTE)l=J.RG8;if(y===J.UNSIGNED_SHORT&&Y0)l=Y0.RG16_EXT;if(y===J.SHORT&&Y0)l=Y0.RG16_SNORM_EXT}if(O===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.RG8UI;if(y===J.UNSIGNED_SHORT)l=J.RG16UI;if(y===J.UNSIGNED_INT)l=J.RG32UI;if(y===J.BYTE)l=J.RG8I;if(y===J.SHORT)l=J.RG16I;if(y===J.INT)l=J.RG32I}if(O===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.RGB8UI;if(y===J.UNSIGNED_SHORT)l=J.RGB16UI;if(y===J.UNSIGNED_INT)l=J.RGB32UI;if(y===J.BYTE)l=J.RGB8I;if(y===J.SHORT)l=J.RGB16I;if(y===J.INT)l=J.RGB32I}if(O===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)l=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)l=J.RGBA16UI;if(y===J.UNSIGNED_INT)l=J.RGBA32UI;if(y===J.BYTE)l=J.RGBA8I;if(y===J.SHORT)l=J.RGBA16I;if(y===J.INT)l=J.RGBA32I}if(O===J.RGB){if(y===J.UNSIGNED_SHORT&&Y0)l=Y0.RGB16_EXT;if(y===J.SHORT&&Y0)l=Y0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)l=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)l=J.R11F_G11F_B10F}if(O===J.RGBA){let s=K0?HJ:u0.getTransfer(t);if(y===J.FLOAT)l=J.RGBA32F;if(y===J.HALF_FLOAT)l=J.RGBA16F;if(y===J.UNSIGNED_BYTE)l=s===Q9?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&Y0)l=Y0.RGBA16_EXT;if(y===J.SHORT&&Y0)l=Y0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)l=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)l=J.RGB5_A1}if(l===J.R16F||l===J.R32F||l===J.RG16F||l===J.RG32F||l===J.RGBA16F||l===J.RGBA32F)Q.get("EXT_color_buffer_float");return l}function D(I,O){let y;if(I){if(O===null||O===y7||O===i7)y=J.DEPTH24_STENCIL8;else if(O===V7)y=J.DEPTH32F_STENCIL8;else if(O===r6)y=J.DEPTH24_STENCIL8,S0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(O===null||O===y7||O===i7)y=J.DEPTH_COMPONENT24;else if(O===V7)y=J.DEPTH_COMPONENT32F;else if(O===r6)y=J.DEPTH_COMPONENT16;return y}function V(I,O){if(A(I)===!0||I.isFramebufferTexture&&I.minFilter!==f7&&I.minFilter!==C9)return Math.log2(Math.max(O.width,O.height))+1;else if(I.mipmaps.length>0)return I.mipmaps.length;else if(I.isCompressedTexture&&Array.isArray(I.image))return O.mipmaps.length;else return 1}function j(I){let O=new WeakRef(I);Z.get(I).__ref=O,L.add(O),k.register(I,O,O)}function g(I){let O=Z.get(I).__ref;if(O===void 0)return;L.delete(O),k.unregister(O)}function S(I){r(I.target)}function x(I){w(I.target)}function r(I){if(I.removeEventListener("dispose",S),g(I),i(I),I.isVideoTexture)E.delete(I);if(I.isHTMLTexture)G.delete(I)}function w(I){I.removeEventListener("dispose",x),g(I),Z0(I)}function c(){for(let I of L){let O=I.deref();if(O===void 0)continue;if(O.isRenderTarget===!0)w(O);else r(O)}L.clear(),G.clear()}function i(I){let O=Z.get(I);if(O.__webglInit===void 0)return;let y=I.source,e=R.get(y);if(e){let t=e[O.__cacheKey];if(t.usedTimes--,t.usedTimes===0)v(I);if(Object.keys(e).length===0)R.delete(y)}Z.remove(I)}function v(I){let O=Z.get(I);J.deleteTexture(O.__webglTexture);let y=I.source,e=R.get(y);delete e[O.__cacheKey],H.memory.textures--}function Z0(I){let O=Z.get(I);if(O.__depthDisposeCallback)O.__depthDisposeCallback();let y=I.depthTexture;if(y&&y.renderTarget===I)r(y);if(I.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(O.__webglFramebuffer[t]))for(let K0=0;K0<O.__webglFramebuffer[t].length;K0++)J.deleteFramebuffer(O.__webglFramebuffer[t][K0]);else J.deleteFramebuffer(O.__webglFramebuffer[t]);if(O.__webglDepthbuffer)J.deleteRenderbuffer(O.__webglDepthbuffer[t])}else{if(Array.isArray(O.__webglFramebuffer))for(let t=0;t<O.__webglFramebuffer.length;t++)J.deleteFramebuffer(O.__webglFramebuffer[t]);else J.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer)J.deleteRenderbuffer(O.__webglDepthbuffer);if(O.__webglMultisampledFramebuffer)J.deleteFramebuffer(O.__webglMultisampledFramebuffer);if(O.__webglColorRenderbuffer){for(let t=0;t<O.__webglColorRenderbuffer.length;t++)if(O.__webglColorRenderbuffer[t])J.deleteRenderbuffer(O.__webglColorRenderbuffer[t])}if(O.__webglDepthRenderbuffer)J.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let e=I.textures;for(let t=0,K0=e.length;t<K0;t++){let Y0=Z.get(e[t]);if(Y0.__webglTexture)J.deleteTexture(Y0.__webglTexture),H.memory.textures--;Z.remove(e[t])}Z.remove(I)}let d=0;function a(){d=0}function Q0(){return d}function B0(I){d=I}function o(){let I=d;if(I>=W.maxTextures)S0("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+W.maxTextures);return d+=1,I}function J0(I){let O=[];return O.push(I.wrapS),O.push(I.wrapT),O.push(I.wrapR||0),O.push(I.magFilter),O.push(I.minFilter),O.push(I.anisotropy),O.push(I.internalFormat),O.push(I.format),O.push(I.type),O.push(I.generateMipmaps),O.push(I.mipmapsAutoUpdate),O.push(I.premultiplyAlpha),O.push(I.flipY),O.push(I.unpackAlignment),O.push(I.colorSpace),O.join()}function O0(I,O){let y=Z.get(I);if(I.isVideoTexture)_0(I);if(I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&y.__version!==I.version){let e=I.image;if(e===null)S0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)S0("WebGLRenderer: Texture marked for update but image is incomplete");else{S9(y,I,O);return}}else if(I.isExternalTexture)y.__webglTexture=I.sourceTexture?I.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+O)}function C0(I,O){let y=Z.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&y.__version!==I.version){S9(y,I,O);return}else if(I.isExternalTexture)y.__webglTexture=I.sourceTexture?I.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+O)}function z0(I,O){let y=Z.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&y.__version!==I.version){S9(y,I,O);return}$.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+O)}function R0(I,O){let y=Z.get(I);if(I.version>0&&y.__version!==I.version){b9(y,I,O);return}$.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+O)}let n0={[A$]:J.REPEAT,[e8]:J.CLAMP_TO_EDGE,[C$]:J.MIRRORED_REPEAT},h0={[f7]:J.NEAREST,[w$]:J.NEAREST_MIPMAP_NEAREST,[a6]:J.NEAREST_MIPMAP_LINEAR,[C9]:J.LINEAR,[J5]:J.LINEAR_MIPMAP_NEAREST,[v7]:J.LINEAR_MIPMAP_LINEAR},j0={[h$]:J.NEVER,[UJ]:J.ALWAYS,[x$]:J.LESS,[XJ]:J.LEQUAL,[g$]:J.EQUAL,[YJ]:J.GEQUAL,[p$]:J.GREATER,[m$]:J.NOTEQUAL};function i0(I,O){if(O.type===V7&&Q.has("OES_texture_float_linear")===!1&&(O.magFilter===C9||O.magFilter===J5||O.magFilter===a6||O.magFilter===v7||O.minFilter===C9||O.minFilter===J5||O.minFilter===a6||O.minFilter===v7))S0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(I,J.TEXTURE_WRAP_S,n0[O.wrapS]),J.texParameteri(I,J.TEXTURE_WRAP_T,n0[O.wrapT]),I===J.TEXTURE_3D||I===J.TEXTURE_2D_ARRAY)J.texParameteri(I,J.TEXTURE_WRAP_R,n0[O.wrapR]);if(J.texParameteri(I,J.TEXTURE_MAG_FILTER,h0[O.magFilter]),J.texParameteri(I,J.TEXTURE_MIN_FILTER,h0[O.minFilter]),O.compareFunction)J.texParameteri(I,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(I,J.TEXTURE_COMPARE_FUNC,j0[O.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(O.magFilter===f7)return;if(O.minFilter!==a6&&O.minFilter!==v7)return;if(O.type===V7&&Q.has("OES_texture_float_linear")===!1)return;if(O.anisotropy>1||Z.get(O).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(I,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(O.anisotropy,W.getMaxAnisotropy())),Z.get(O).__currentAnisotropy=O.anisotropy}}}function x0(I,O){let y=!1;if(I.__webglInit===void 0)I.__webglInit=!0,O.addEventListener("dispose",S),j(O);let e=O.source,t=R.get(e);if(t===void 0)t={},R.set(e,t);let K0=J0(O);if(K0!==I.__cacheKey){if(t[K0]===void 0)t[K0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,y=!0;t[K0].usedTimes++;let Y0=t[I.__cacheKey];if(Y0!==void 0){if(t[I.__cacheKey].usedTimes--,Y0.usedTimes===0)v(O)}I.__cacheKey=K0,I.__webglTexture=t[K0].texture}return y}function X9(I,O,y){return Math.floor(Math.floor(I/y)/O)}function Y9(I,O,y,e){let K0=I.updateRanges;if(K0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,O.width,O.height,y,e,O.data);else{K0.sort((_,n)=>_.start-n.start);let Y0=0;for(let _=1;_<K0.length;_++){let n=K0[Y0],u=K0[_],$0=n.start+n.count,W0=X9(u.start,O.width,4),N0=X9(n.start,O.width,4);if(u.start<=$0+1&&W0===N0&&X9(u.start+u.count-1,O.width,4)===W0)n.count=Math.max(n.count,u.start+u.count-n.start);else++Y0,K0[Y0]=u}K0.length=Y0+1;let l=$.getParameter(J.UNPACK_ROW_LENGTH),s=$.getParameter(J.UNPACK_SKIP_PIXELS),H0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,O.width);for(let _=0,n=K0.length;_<n;_++){let u=K0[_],$0=Math.floor(u.start/4),W0=Math.ceil(u.count/4),N0=$0%O.width,w0=Math.floor($0/O.width),A0=W0,q0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,N0),$.pixelStorei(J.UNPACK_SKIP_ROWS,w0),$.texSubImage2D(J.TEXTURE_2D,0,N0,w0,A0,1,y,e,O.data)}I.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,l),$.pixelStorei(J.UNPACK_SKIP_PIXELS,s),$.pixelStorei(J.UNPACK_SKIP_ROWS,H0)}}function S9(I,O,y){let e=J.TEXTURE_2D;if(O.isDataArrayTexture||O.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(O.isData3DTexture)e=J.TEXTURE_3D;let t=x0(I,O),K0=O.source;$.bindTexture(e,I.__webglTexture,J.TEXTURE0+y);let Y0=Z.get(K0);if(K0.version!==Y0.__version||t===!0){if($.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap<"u"&&O.image instanceof ImageBitmap)===!1){let q0=u0.getPrimaries(u0.workingColorSpace),P0=O.colorSpace===a7?null:u0.getPrimaries(O.colorSpace),g0=O.colorSpace===a7||q0===P0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,O.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,g0)}$.pixelStorei(J.UNPACK_ALIGNMENT,O.unpackAlignment);let s=z(O.image,!1,W.maxTextureSize);s=y0(O,s);let H0=K.convert(O.format,O.colorSpace),_=K.convert(O.type),n=P(O.internalFormat,H0,_,O.normalized,O.colorSpace,O.isVideoTexture);i0(e,O);let u,$0=O.mipmaps,W0=O.isVideoTexture!==!0,N0=Y0.__version===void 0||t===!0,w0=K0.dataReady,A0=V(O,s);if(O.isDepthTexture){if(n=D(O.format===b7,O.type),N0)if(W0)$.texStorage2D(J.TEXTURE_2D,1,n,s.width,s.height);else $.texImage2D(J.TEXTURE_2D,0,n,s.width,s.height,0,H0,_,null)}else if(O.isDataTexture)if($0.length>0){if(W0&&N0)$.texStorage2D(J.TEXTURE_2D,A0,n,$0[0].width,$0[0].height);for(let q0=0,P0=$0.length;q0<P0;q0++)if(u=$0[q0],W0){if(w0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,u.width,u.height,H0,_,u.data)}else $.texImage2D(J.TEXTURE_2D,q0,n,u.width,u.height,0,H0,_,u.data);O.generateMipmaps=!1}else if(W0){if(N0)$.texStorage2D(J.TEXTURE_2D,A0,n,s.width,s.height);if(w0)Y9(O,s,H0,_)}else $.texImage2D(J.TEXTURE_2D,0,n,s.width,s.height,0,H0,_,s.data);else if(O.isCompressedTexture)if(O.isCompressedArrayTexture){if(W0&&N0)$.texStorage3D(J.TEXTURE_2D_ARRAY,A0,n,$0[0].width,$0[0].height,s.depth);for(let q0=0,P0=$0.length;q0<P0;q0++)if(u=$0[q0],O.format!==$7)if(H0!==null)if(W0){if(w0)if(O.layerUpdates.size>0){let g0=bJ(u.width,u.height,O.format,O.type);for(let F0 of O.layerUpdates){let e0=u.data.subarray(F0*g0/u.data.BYTES_PER_ELEMENT,(F0+1)*g0/u.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,F0,u.width,u.height,1,H0,e0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,u.width,u.height,s.depth,H0,u.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,q0,n,u.width,u.height,s.depth,0,u.data,0,0);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(w0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,u.width,u.height,s.depth,H0,_,u.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,q0,n,u.width,u.height,s.depth,0,H0,_,u.data);if(O.layerUpdates.size>0)O.clearLayerUpdates()}else{if(W0&&N0)$.texStorage2D(J.TEXTURE_2D,A0,n,$0[0].width,$0[0].height);for(let q0=0,P0=$0.length;q0<P0;q0++)if(u=$0[q0],O.format!==$7)if(H0!==null)if(W0){if(w0)$.compressedTexSubImage2D(J.TEXTURE_2D,q0,0,0,u.width,u.height,H0,u.data)}else $.compressedTexImage2D(J.TEXTURE_2D,q0,n,u.width,u.height,0,u.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(W0){if(w0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,u.width,u.height,H0,_,u.data)}else $.texImage2D(J.TEXTURE_2D,q0,n,u.width,u.height,0,H0,_,u.data)}else if(O.isDataArrayTexture)if(W0){if(N0)$.texStorage3D(J.TEXTURE_2D_ARRAY,A0,n,s.width,s.height,s.depth);if(w0)if(O.layerUpdates.size>0){let q0=bJ(s.width,s.height,O.format,O.type);for(let P0 of O.layerUpdates){let g0=s.data.subarray(P0*q0/s.data.BYTES_PER_ELEMENT,(P0+1)*q0/s.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,P0,s.width,s.height,1,H0,_,g0)}O.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,s.width,s.height,s.depth,H0,_,s.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,n,s.width,s.height,s.depth,0,H0,_,s.data);else if(O.isData3DTexture)if(W0){if(N0)$.texStorage3D(J.TEXTURE_3D,A0,n,s.width,s.height,s.depth);if(w0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,s.width,s.height,s.depth,H0,_,s.data)}else $.texImage3D(J.TEXTURE_3D,0,n,s.width,s.height,s.depth,0,H0,_,s.data);else if(O.isFramebufferTexture){if(N0)if(W0)$.texStorage2D(J.TEXTURE_2D,A0,n,s.width,s.height);else{let{width:q0,height:P0}=s;for(let g0=0;g0<A0;g0++)$.texImage2D(J.TEXTURE_2D,g0,n,q0,P0,0,H0,_,null),q0>>=1,P0>>=1}}else if(O.isHTMLTexture){if("texElementImage2D"in J){let q0=J.canvas;if(!q0.hasAttribute("layoutsubtree"))q0.setAttribute("layoutsubtree","true");if(s.parentNode!==q0){q0.appendChild(s),G.add(O),q0.onpaint=(P0)=>{let g0=P0.changedElements;for(let F0 of G)if(g0.includes(F0.image))F0.needsUpdate=!0},q0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,s);else{let{RGBA:g0,RGBA:F0,UNSIGNED_BYTE:e0}=J;J.texElementImage2D(J.TEXTURE_2D,0,g0,F0,e0,s)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if($0.length>0){if(W0&&N0){let q0=B9($0[0]);$.texStorage2D(J.TEXTURE_2D,A0,n,q0.width,q0.height)}for(let q0=0,P0=$0.length;q0<P0;q0++)if(u=$0[q0],W0){if(w0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,H0,_,u)}else $.texImage2D(J.TEXTURE_2D,q0,n,H0,_,u);O.generateMipmaps=!1}else if(W0){if(N0){let q0=B9(s);$.texStorage2D(J.TEXTURE_2D,A0,n,q0.width,q0.height)}if(w0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,H0,_,s)}else $.texImage2D(J.TEXTURE_2D,0,n,H0,_,s);if(A(O)&&O.mipmapsAutoUpdate===!0)B(e);if(Y0.__version=K0.version,O.onUpdate)O.onUpdate(O)}I.__version=O.version}function b9(I,O,y){if(O.image.length!==6)return;let e=x0(I,O),t=O.source;$.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+y);let K0=Z.get(t);if(t.version!==K0.__version||e===!0){$.activeTexture(J.TEXTURE0+y);let Y0=u0.getPrimaries(u0.workingColorSpace),l=O.colorSpace===a7?null:u0.getPrimaries(O.colorSpace),s=O.colorSpace===a7||Y0===l?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,O.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,O.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let H0=O.isCompressedTexture||O.image[0].isCompressedTexture,_=O.image[0]&&O.image[0].isDataTexture,n=[];for(let F0=0;F0<6;F0++){if(!H0&&!_)n[F0]=z(O.image[F0],!0,W.maxCubemapSize);else n[F0]=_?O.image[F0].image:O.image[F0];n[F0]=y0(O,n[F0])}let u=n[0],$0=K.convert(O.format,O.colorSpace),W0=K.convert(O.type),N0=P(O.internalFormat,$0,W0,O.normalized,O.colorSpace),w0=O.isVideoTexture!==!0,A0=K0.__version===void 0||e===!0,q0=t.dataReady,P0=V(O,u);i0(J.TEXTURE_CUBE_MAP,O);let g0;if(O.isDepthTexture){if(N0=D(O.format===b7,O.type),A0)if(w0)$.texStorage2D(J.TEXTURE_CUBE_MAP,1,N0,u.width,u.height);else for(let F0=0;F0<6;F0++)$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,N0,u.width,u.height,0,$0,W0,null)}else if(H0){if(w0&&A0)$.texStorage2D(J.TEXTURE_CUBE_MAP,P0,N0,u.width,u.height);for(let F0=0;F0<6;F0++){g0=n[F0].mipmaps;for(let e0=0;e0<g0.length;e0++){let D9=g0[e0];if(O.format!==$7)if($0!==null)if(w0){if(q0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,0,0,D9.width,D9.height,$0,D9.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,N0,D9.width,D9.height,0,D9.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(w0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,0,0,D9.width,D9.height,$0,W0,D9.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0,N0,D9.width,D9.height,0,$0,W0,D9.data)}}}else{if(g0=O.mipmaps,w0&&A0){if(g0.length>0)P0++;let F0=B9(n[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,P0,N0,F0.width,F0.height)}for(let F0=0;F0<6;F0++)if(_){if(w0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,n[F0].width,n[F0].height,$0,W0,n[F0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,N0,n[F0].width,n[F0].height,0,$0,W0,n[F0].data);for(let e0=0;e0<g0.length;e0++){let E7=g0[e0].image[F0].image;if(w0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,0,0,E7.width,E7.height,$0,W0,E7.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,N0,E7.width,E7.height,0,$0,W0,E7.data)}}else{if(w0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,$0,W0,n[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,N0,$0,W0,n[F0]);for(let e0=0;e0<g0.length;e0++){let D9=g0[e0];if(w0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,0,0,$0,W0,D9.image[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,e0+1,N0,$0,W0,D9.image[F0])}}}if(A(O)&&O.mipmapsAutoUpdate===!0)B(J.TEXTURE_CUBE_MAP);if(K0.__version=t.version,O.onUpdate)O.onUpdate(O)}I.__version=O.version}function U9(I,O,y,e,t,K0){let Y0=K.convert(y.format,y.colorSpace),l=K.convert(y.type),s=P(y.internalFormat,Y0,l,y.normalized,y.colorSpace),H0=Z.get(O),_=Z.get(y);if(_.__renderTarget=O,!H0.__hasExternalTextures){let n=Math.max(1,O.width>>K0),u=Math.max(1,O.height>>K0);if(t===J.TEXTURE_3D||t===J.TEXTURE_2D_ARRAY)$.texImage3D(t,K0,s,n,u,O.depth,0,Y0,l,null);else $.texImage2D(t,K0,s,n,u,0,Y0,l,null)}if($.bindFramebuffer(J.FRAMEBUFFER,I),$9(O))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,t,_.__webglTexture,0,E0(O));else if(t===J.TEXTURE_2D||t>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&t<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,t,_.__webglTexture,K0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function V9(I,O,y){if(J.bindRenderbuffer(J.RENDERBUFFER,I),O.depthBuffer){let e=O.depthTexture,t=e&&e.isDepthTexture?e.type:null,K0=D(O.stencilBuffer,t),Y0=O.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if($9(O))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(O),K0,O.width,O.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(O),K0,O.width,O.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,O.width,O.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,I)}else{let e=O.textures;for(let t=0;t<e.length;t++){let K0=e[t],Y0=K.convert(K0.format,K0.colorSpace),l=K.convert(K0.type),s=P(K0.internalFormat,Y0,l,K0.normalized,K0.colorSpace);if($9(O))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(O),s,O.width,O.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(O),s,O.width,O.height);else J.renderbufferStorage(J.RENDERBUFFER,s,O.width,O.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function j9(I,O,y){let e=O.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,I),!(O.depthTexture&&O.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let t=Z.get(O.depthTexture);t.__renderTarget=O;let K0=e?O.depthTexture.image[0]:O.depthTexture.image;if(!t.__webglTexture||K0.width!==O.width||K0.height!==O.height)K0.width=O.width,K0.height=O.height,O.depthTexture.needsUpdate=!0;if(e)R0(O.depthTexture,0);else O0(O.depthTexture,0);let Y0=t.__webglTexture,l=E0(O),s=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,H0=O.depthTexture.format===b7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(O.depthTexture.format===A6)if($9(O))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,s,Y0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,s,Y0,0);else if(O.depthTexture.format===b7)if($9(O))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,s,Y0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,s,Y0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function f9(I){let O=Z.get(I),y=I.isWebGLCubeRenderTarget===!0;if(O.__boundDepthTexture!==I.depthTexture){let e=I.depthTexture;if(O.__depthDisposeCallback)O.__depthDisposeCallback();if(e){let t=()=>{delete O.__boundDepthTexture,delete O.__depthDisposeCallback,e.removeEventListener("dispose",t)};e.addEventListener("dispose",t),O.__depthDisposeCallback=t}O.__boundDepthTexture=e}if(I.depthTexture&&!O.__autoAllocateDepthBuffer)if(y)for(let e=0;e<6;e++)j9(O.__webglFramebuffer[e],I,e);else if(I.texture.mipmaps.length>0)j9(O.__webglFramebuffer[0],I,0);else j9(O.__webglFramebuffer,I,0);else if(y){O.__webglDepthbuffer=[];for(let e=0;e<6;e++)if($.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer[e]),O.__webglDepthbuffer[e]===void 0)O.__webglDepthbuffer[e]=J.createRenderbuffer(),V9(O.__webglDepthbuffer[e],I,!1);else{let t=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,K0=O.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,K0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,K0)}}else{if(I.texture.mipmaps.length>0)$.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer);if(O.__webglDepthbuffer===void 0)O.__webglDepthbuffer=J.createRenderbuffer(),V9(O.__webglDepthbuffer,I,!1);else{let t=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,K0=O.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,K0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,K0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function s9(I,O,y){let e=Z.get(I);if(O!==void 0)U9(e.__webglFramebuffer,I,I.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)f9(I)}function f(I){let O=I.texture,y=Z.get(I),e=Z.get(O);I.addEventListener("dispose",x),j(I);let t=I.textures,K0=I.isWebGLCubeRenderTarget===!0,Y0=t.length>1;if(!Y0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=O.version,H.memory.textures++}if(K0){y.__webglFramebuffer=[];for(let l=0;l<6;l++)if(O.mipmaps.length>0){y.__webglFramebuffer[l]=[];for(let s=0;s<O.mipmaps.length;s++)y.__webglFramebuffer[l][s]=J.createFramebuffer()}else y.__webglFramebuffer[l]=J.createFramebuffer()}else{if(O.mipmaps.length>0){y.__webglFramebuffer=[];for(let l=0;l<O.mipmaps.length;l++)y.__webglFramebuffer[l]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(Y0)for(let l=0,s=t.length;l<s;l++){let H0=Z.get(t[l]);if(H0.__webglTexture===void 0)H0.__webglTexture=J.createTexture(),H.memory.textures++}if(I.samples>0&&$9(I)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let l=0;l<t.length;l++){let s=t[l];y.__webglColorRenderbuffer[l]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[l]);let H0=K.convert(s.format,s.colorSpace),_=K.convert(s.type),n=P(s.internalFormat,H0,_,s.normalized,s.colorSpace,I.isXRRenderTarget===!0),u=E0(I);J.renderbufferStorageMultisample(J.RENDERBUFFER,u,n,I.width,I.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+l,J.RENDERBUFFER,y.__webglColorRenderbuffer[l])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),I.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),V9(y.__webglDepthRenderbuffer,I,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(K0){$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),i0(J.TEXTURE_CUBE_MAP,O);for(let l=0;l<6;l++)if(O.mipmaps.length>0)for(let s=0;s<O.mipmaps.length;s++)U9(y.__webglFramebuffer[l][s],I,O,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,s);else U9(y.__webglFramebuffer[l],I,O,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,0);if(A(O))B(J.TEXTURE_CUBE_MAP);else if(O.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,O.mipmaps.length-1);$.unbindTexture()}else if(Y0){for(let l=0,s=t.length;l<s;l++){let H0=t[l],_=Z.get(H0),n=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)n=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(n,_.__webglTexture),i0(n,H0),U9(y.__webglFramebuffer,I,H0,J.COLOR_ATTACHMENT0+l,n,0),A(H0))B(n)}$.unbindTexture()}else{let l=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)l=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(l,e.__webglTexture),i0(l,O),O.mipmaps.length>0)for(let s=0;s<O.mipmaps.length;s++)U9(y.__webglFramebuffer[s],I,O,J.COLOR_ATTACHMENT0,l,s);else U9(y.__webglFramebuffer,I,O,J.COLOR_ATTACHMENT0,l,0);if(A(O))B(l);else if(O.mipmaps.length>0)J.texParameteri(l,J.TEXTURE_MAX_LEVEL,O.mipmaps.length-1);$.unbindTexture()}if(I.depthBuffer)f9(I)}function i9(I){let O=I.textures;for(let y=0,e=O.length;y<e;y++){let t=O[y];if(A(t)&&t.mipmapsAutoUpdate===!0){let K0=C(I),Y0=Z.get(t).__webglTexture;$.bindTexture(K0,Y0),B(K0),$.unbindTexture()}}}let t0=[];function F9(I){if(I.samples>0){if($9(I)===!1){let{textures:O,width:y,height:e}=I,t=J.COLOR_BUFFER_BIT,K0=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=Z.get(I),l=O.length>1;if(l)for(let H0=0;H0<O.length;H0++)$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,null,0);if($.bindFramebuffer(J.READ_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer);for(let H0=0;H0<O.length;H0++){if(I.resolveDepthBuffer){if(I.depthBuffer)t|=J.DEPTH_BUFFER_BIT;if(I.stencilBuffer&&I.resolveStencilBuffer)t|=J.STENCIL_BUFFER_BIT}if(l){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[H0]);let _=Z.get(O[H0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,_,0)}if(J.blitFramebuffer(0,0,y,e,0,0,y,e,t,J.NEAREST),Y===!0){if(t0.length=0,t0.push(J.COLOR_ATTACHMENT0+H0),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1)t0.push(K0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,t0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),l)for(let H0=0;H0<O.length;H0++){$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[H0]);let _=Z.get(O[H0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,_,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Y){let O=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[O])}}}function E0(I){return Math.min(W.maxSamples,I.samples)}function $9(I){let O=Z.get(I);return I.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&O.__useRenderToTexture!==!1}function _0(I){let O=H.render.frame;if(E.get(I)!==O)E.set(I,O),I.update()}function y0(I,O){let{colorSpace:y,format:e,type:t}=I;if(I.isCompressedTexture===!0||I.isVideoTexture===!0)return O;if(y!==KJ&&y!==a7)if(u0.getTransfer(y)===Q9){if(e!==$7||t!==Q7)S0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else f0("WebGLTextures: Unsupported texture color space:",y);return O}function B9(I){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement)U.width=I.naturalWidth||I.width,U.height=I.naturalHeight||I.height;else if(typeof VideoFrame<"u"&&I instanceof VideoFrame)U.width=I.displayWidth,U.height=I.displayHeight;else U.width=I.width,U.height=I.height;return U}this.allocateTextureUnit=o,this.resetTextureUnits=a,this.getTextureUnits=Q0,this.setTextureUnits=B0,this.setTexture2D=O0,this.setTexture2DArray=C0,this.setTexture3D=z0,this.setTextureCube=R0,this.rebindTextures=s9,this.setupRenderTarget=f,this.updateRenderTargetMipmap=i9,this.updateMultisampleRenderTarget=F9,this.setupDepthRenderbuffer=f9,this.setupFrameBufferTexture=U9,this.useMultisampledRTT=$9,this.dispose=c}function DN(J,Q){function $(Z,W=a7){let K,H=u0.getTransfer(W);if(Z===Q7)return J.UNSIGNED_BYTE;if(Z===I1)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===z1)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===T$)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===S$)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===P$)return J.BYTE;if(Z===_$)return J.SHORT;if(Z===r6)return J.UNSIGNED_SHORT;if(Z===k1)return J.INT;if(Z===y7)return J.UNSIGNED_INT;if(Z===V7)return J.FLOAT;if(Z===p9)return J.HALF_FLOAT;if(Z===j$)return J.ALPHA;if(Z===f$)return J.RGB;if(Z===$7)return J.RGBA;if(Z===A6)return J.DEPTH_COMPONENT;if(Z===b7)return J.DEPTH_STENCIL;if(Z===v$)return J.RED;if(Z===A1)return J.RED_INTEGER;if(Z===o7)return J.RG;if(Z===C1)return J.RG_INTEGER;if(Z===w1)return J.RGBA_INTEGER;if(Z===Q5||Z===$5||Z===Z5||Z===W5)if(H===Q9)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===Q5)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===$5)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===Z5)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===W5)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===Q5)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===$5)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===Z5)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===W5)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===P1||Z===_1||Z===T1||Z===S1)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===P1)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===_1)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===T1)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===S1)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===j1||Z===f1||Z===v1||Z===y1||Z===b1||Z===K5||Z===h1)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===j1||Z===f1)return H===Q9?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===v1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===y1)return K.COMPRESSED_R11_EAC;if(Z===b1)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===K5)return K.COMPRESSED_RG11_EAC;if(Z===h1)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===x1||Z===g1||Z===p1||Z===m1||Z===l1||Z===d1||Z===u1||Z===c1||Z===n1||Z===s1||Z===i1||Z===o1||Z===a1||Z===r1)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===x1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===g1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===p1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===m1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===l1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===d1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===u1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===c1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===n1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===s1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===i1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===o1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===a1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===r1)return H===Q9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===t1||Z===e1||Z===JJ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(Z===t1)return H===Q9?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===e1)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===JJ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===QJ||Z===$J||Z===H5||Z===ZJ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(Z===QJ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===$J)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===H5)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===ZJ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===i7)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var RN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ON=`
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

}`;class yZ{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new F5(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new _9({vertexShader:RN,fragmentShader:ON,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new w9(new c9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bZ extends B7{constructor(J,Q){super();let $=this,Z=null,W=1,K=null,H="local-floor",X=1,Y=null,U=null,E=null,G=null,N=null,R=null,L=typeof XRWebGLBinding<"u",k=new yZ,q={},F=Q.getContextAttributes(),z=null,A=null,B=[],C=[],P=new m0,D=null,V=null,j=new l9;j.viewport=new H9;let g=new l9;g.viewport=new H9;let S=[j,g],x=new fJ,r=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let J0=B[o];if(J0===void 0)J0=new Q8,B[o]=J0;return J0.getTargetRaySpace()},this.getControllerGrip=function(o){let J0=B[o];if(J0===void 0)J0=new Q8,B[o]=J0;return J0.getGripSpace()},this.getHand=function(o){let J0=B[o];if(J0===void 0)J0=new Q8,B[o]=J0;return J0.getHandSpace()};function c(o){let J0=C.indexOf(o.inputSource);if(J0===-1)return;let O0=B[J0];if(O0!==void 0)O0.update(o.inputSource,o.frame,Y||K),O0.dispatchEvent({type:o.type,data:o.inputSource})}function i(){Z.removeEventListener("select",c),Z.removeEventListener("selectstart",c),Z.removeEventListener("selectend",c),Z.removeEventListener("squeeze",c),Z.removeEventListener("squeezestart",c),Z.removeEventListener("squeezeend",c),Z.removeEventListener("end",i),Z.removeEventListener("inputsourceschange",v);for(let o=0;o<B.length;o++){let J0=C[o];if(J0===null)continue;C[o]=null,B[o].disconnect(J0)}r=null,w=null,k.reset();for(let o in q)delete q[o];if(J.setRenderTarget(z),N=null,G=null,E=null,Z=null,A=null,B0.stop(),$.isPresenting=!1,J.setPixelRatio(D),J.setSize(P.width,P.height,!1),V!==null){let o=V.camera;o.fov=V.fov,o.zoom=V.zoom,o.updateProjectionMatrix(),V=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(W=o,$.isPresenting===!0)S0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(H=o,$.isPresenting===!0)S0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Y||K},this.setReferenceSpace=function(o){Y=o},this.getBaseLayer=function(){return G!==null?G:N},this.getBinding=function(){if(E===null&&L)E=new XRWebGLBinding(Z,Q);return E},this.getFrame=function(){return R},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(z=J.getRenderTarget(),Z.addEventListener("select",c),Z.addEventListener("selectstart",c),Z.addEventListener("selectend",c),Z.addEventListener("squeeze",c),Z.addEventListener("squeezestart",c),Z.addEventListener("squeezeend",c),Z.addEventListener("end",i),Z.addEventListener("inputsourceschange",v),F.xrCompatible!==!0)await Q.makeXRCompatible();if(D=J.getPixelRatio(),J.getSize(P),!(L&&("createProjectionLayer"in XRWebGLBinding.prototype))){let O0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};N=new XRWebGLLayer(Z,Q,O0),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),A=new y9(N.framebufferWidth,N.framebufferHeight,{format:$7,type:Q7,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let O0=null,C0=null,z0=null;if(F.depth)z0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,O0=F.stencil?b7:A6,C0=F.stencil?i7:y7;let R0={colorFormat:Q.RGBA8,depthFormat:z0,scaleFactor:W};E=this.getBinding(),G=E.createProjectionLayer(R0),Z.updateRenderState({layers:[G]}),J.setPixelRatio(1),J.setSize(G.textureWidth,G.textureHeight,!1),A=new y9(G.textureWidth,G.textureHeight,{format:$7,type:Q7,depthTexture:new h7(G.textureWidth,G.textureHeight,C0,void 0,void 0,void 0,void 0,void 0,void 0,O0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(X),Y=null,K=await Z.requestReferenceSpace(H),B0.setContext(Z),B0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return k.getDepthTexture()};function v(o){for(let J0=0;J0<o.removed.length;J0++){let O0=o.removed[J0],C0=C.indexOf(O0);if(C0>=0)C[C0]=null,B[C0].disconnect(O0)}for(let J0=0;J0<o.added.length;J0++){let O0=o.added[J0],C0=C.indexOf(O0);if(C0===-1){for(let R0=0;R0<B.length;R0++)if(R0>=C.length){C.push(O0),C0=R0;break}else if(C[R0]===null){C[R0]=O0,C0=R0;break}if(C0===-1)break}let z0=B[C0];if(z0)z0.connect(O0)}}function Z0(o,J0){if(J0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(J0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;let{near:J0,far:O0}=o;if(k.texture!==null){if(k.depthNear>0)J0=k.depthNear;if(k.depthFar>0)O0=k.depthFar}if(x.near=g.near=j.near=J0,x.far=g.far=j.far=O0,r!==x.near||w!==x.far)Z.updateRenderState({depthNear:x.near,depthFar:x.far}),r=x.near,w=x.far;x.layers.mask=o.layers.mask|6,j.layers.mask=x.layers.mask&-5,g.layers.mask=x.layers.mask&-3;let C0=o.parent,z0=x.cameras;Z0(x,C0);for(let R0=0;R0<z0.length;R0++)Z0(z0[R0],C0);if(x.projectionMatrix.copy(j.projectionMatrix),x.projectionMatrixInverse.copy(j.projectionMatrixInverse),V===null&&o.isPerspectiveCamera)V={camera:o,fov:o.fov,zoom:o.zoom};d(o,x,C0)};function d(o,J0,O0){if(O0===null)o.matrix.copy(J0.matrixWorld);else o.matrix.copy(O0.matrixWorld),o.matrix.invert(),o.matrix.multiply(J0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(J0.projectionMatrix),o.projectionMatrixInverse.copy(J0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=o8*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return x},this.getFoveation=function(){if(G===null&&N===null)return;return X},this.setFoveation=function(o){if(X=o,G!==null)G.fixedFoveation=o;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=o},this.hasDepthSensing=function(){return k.texture!==null},this.getDepthSensingMesh=function(){return k.getMesh(x)},this.getCameraTexture=function(o){return q[o]};let a=null;function Q0(o,J0){if(U=J0.getViewerPose(Y||K),R=J0,U!==null){let O0=U.views;if(N!==null)J.setRenderTargetFramebuffer(A,N.framebuffer),J.setRenderTarget(A);let C0=!1;if(O0.length!==x.cameras.length)x.cameras.length=0,C0=!0;for(let h0=0;h0<O0.length;h0++){let j0=O0[h0],i0=null;if(N!==null)i0=N.getViewport(j0);else{let X9=E.getViewSubImage(G,j0);if(i0=X9.viewport,h0===0)J.setRenderTargetTextures(A,X9.colorTexture,X9.depthStencilTexture),J.setRenderTarget(A)}let x0=S[h0];if(x0===void 0)x0=new l9,x0.layers.enable(h0),x0.viewport=new H9,S[h0]=x0;if(x0.matrix.fromArray(j0.transform.matrix),x0.matrix.decompose(x0.position,x0.quaternion,x0.scale),x0.projectionMatrix.fromArray(j0.projectionMatrix),x0.projectionMatrixInverse.copy(x0.projectionMatrix).invert(),x0.viewport.set(i0.x,i0.y,i0.width,i0.height),h0===0)x.matrix.copy(x0.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale);if(C0===!0)x.cameras.push(x0)}let z0=Z.enabledFeatures;if(z0&&z0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&L){E=$.getBinding();let h0=E.getDepthInformation(O0[0]);if(h0&&h0.isValid&&h0.texture)k.init(h0,Z.renderState)}if(z0&&z0.includes("camera-access")&&L){J.state.unbindTexture(),E=$.getBinding();for(let h0=0;h0<O0.length;h0++){let j0=O0[h0].camera;if(j0){let i0=q[j0];if(!i0)i0=new F5,q[j0]=i0;let x0=E.getCameraImage(j0);i0.sourceTexture=x0}}}}for(let O0=0;O0<B.length;O0++){let C0=C[O0],z0=B[O0];if(C0!==null&&z0!==void 0)z0.update(C0,J0,Y||K)}if(a)a(o,J0);if(J0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:J0});R=null}let B0=new VZ;B0.setAnimationLoop(Q0),this.setAnimationLoop=function(o){a=o},this.dispose=function(){}}}var MN=new K9,hZ=new v0;hZ.set(-1,0,0,0,1,0,0,0,1);function LN(J,Q){function $(q,F){if(q.matrixAutoUpdate===!0)q.updateMatrix();F.value.copy(q.matrix)}function Z(q,F){if(F.color.getRGB(q.fogColor.value,LJ(J)),F.isFog)q.fogNear.value=F.near,q.fogFar.value=F.far;else if(F.isFogExp2)q.fogDensity.value=F.density}function W(q,F,z,A,B){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)K(q,F);else if(F.isMeshLambertMaterial){if(K(q,F),F.envMap)q.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)K(q,F),G(q,F);else if(F.isMeshPhongMaterial){if(K(q,F),E(q,F),F.envMap)q.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(K(q,F),N(q,F),F.isMeshPhysicalMaterial)R(q,F,B)}else if(F.isMeshMatcapMaterial)K(q,F),L(q,F);else if(F.isMeshDepthMaterial)K(q,F);else if(F.isMeshDistanceMaterial)K(q,F),k(q,F);else if(F.isMeshNormalMaterial)K(q,F);else if(F.isLineBasicMaterial){if(H(q,F),F.isLineDashedMaterial)X(q,F)}else if(F.isPointsMaterial)Y(q,F,z,A);else if(F.isSpriteMaterial)U(q,F);else if(F.isShadowMaterial)q.color.value.copy(F.color),q.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function K(q,F){if(q.opacity.value=F.opacity,F.color)q.diffuse.value.copy(F.color);if(F.emissive)q.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)q.map.value=F.map,$(F.map,q.mapTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,$(F.alphaMap,q.alphaMapTransform);if(F.bumpMap){if(q.bumpMap.value=F.bumpMap,$(F.bumpMap,q.bumpMapTransform),q.bumpScale.value=F.bumpScale,F.side===v9)q.bumpScale.value*=-1}if(F.normalMap){if(q.normalMap.value=F.normalMap,$(F.normalMap,q.normalMapTransform),q.normalScale.value.copy(F.normalScale),F.side===v9)q.normalScale.value.negate()}if(F.displacementMap)q.displacementMap.value=F.displacementMap,$(F.displacementMap,q.displacementMapTransform),q.displacementScale.value=F.displacementScale,q.displacementBias.value=F.displacementBias;if(F.emissiveMap)q.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,q.emissiveMapTransform);if(F.specularMap)q.specularMap.value=F.specularMap,$(F.specularMap,q.specularMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest;let z=Q.get(F),A=z.envMap,B=z.envMapRotation;if(A){if(q.envMap.value=A,q.envMapRotation.value.setFromMatrix4(MN.makeRotationFromEuler(B)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)q.envMapRotation.value.premultiply(hZ);q.reflectivity.value=F.reflectivity,q.ior.value=F.ior,q.refractionRatio.value=F.refractionRatio}if(F.lightMap)q.lightMap.value=F.lightMap,q.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,q.lightMapTransform);if(F.aoMap)q.aoMap.value=F.aoMap,q.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,q.aoMapTransform)}function H(q,F){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,F.map)q.map.value=F.map,$(F.map,q.mapTransform)}function X(q,F){q.dashSize.value=F.dashSize,q.totalSize.value=F.dashSize+F.gapSize,q.scale.value=F.scale}function Y(q,F,z,A){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,q.size.value=F.size*z,q.scale.value=A*0.5,F.map)q.map.value=F.map,$(F.map,q.uvTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,$(F.alphaMap,q.alphaMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest}function U(q,F){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,q.rotation.value=F.rotation,F.map)q.map.value=F.map,$(F.map,q.mapTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,$(F.alphaMap,q.alphaMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest}function E(q,F){q.specular.value.copy(F.specular),q.shininess.value=Math.max(F.shininess,0.0001)}function G(q,F){if(F.gradientMap)q.gradientMap.value=F.gradientMap}function N(q,F){if(q.metalness.value=F.metalness,F.metalnessMap)q.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=F.roughness,F.roughnessMap)q.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,q.roughnessMapTransform);if(F.envMap)q.envMapIntensity.value=F.envMapIntensity}function R(q,F,z){if(q.ior.value=F.ior,F.diffuseRoughness>0){if(q.diffuseRoughness.value=F.diffuseRoughness,F.diffuseRoughnessMap)q.diffuseRoughnessMap.value=F.diffuseRoughnessMap,$(F.diffuseRoughnessMap,q.diffuseRoughnessMapTransform)}if(F.sheen>0){if(q.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),q.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)q.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,q.sheenColorMapTransform);if(F.sheenRoughnessMap)q.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(q.clearcoat.value=F.clearcoat,q.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)q.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,q.clearcoatMapTransform);if(F.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(q.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===v9)q.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)q.dispersion.value=F.dispersion;if(F.retroreflectivity>0)q.retroreflectivity.value=F.retroreflectivity;if(F.iridescence>0){if(q.iridescence.value=F.iridescence,q.iridescenceIOR.value=F.iridescenceIOR,q.iridescenceThicknessMinimum.value=F.iridescenceThicknessMinimum,q.iridescenceThicknessMaximum.value=F.iridescenceThicknessMaximum,F.iridescenceMap)q.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,q.iridescenceMapTransform);if(F.iridescenceThicknessMap)q.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(F.transmission>0){if(q.transmission.value=F.transmission,q.transmissionSamplerMap.value=z.texture,q.transmissionSamplerSize.value.set(z.width,z.height),F.transmissionMap)q.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=F.thickness,F.thicknessMap)q.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=F.attenuationDistance,q.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(q.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)q.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=F.specularIntensity,q.specularColor.value.copy(F.specularColor),F.specularColorMap)q.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,q.specularColorMapTransform);if(F.specularIntensityMap)q.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,q.specularIntensityMapTransform)}function L(q,F){if(F.matcap)q.matcap.value=F.matcap}function k(q,F){let z=Q.get(F).light;q.referencePosition.value.setFromMatrixPosition(z.matrixWorld),q.nearDistance.value=z.shadow.camera.near,q.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function VN(J,Q,$,Z){let W={},K={};function H(z,A){let B=A.program;Z.uniformBlockBinding(z,B,W[z.id])}function X(z,A){let B=W[z.id];if(B===void 0)L(z),B=Y(z),W[z.id]=B,z.addEventListener("dispose",q);let C=A.program;Z.updateUBOMapping(z,C);let P=Q.render.frame;if(K[z.id]!==P)U(z),K[z.id]=P}function Y(z){let A=J.createBuffer(),B=z.__size,C=z.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,B,C),J.bindBuffer(J.UNIFORM_BUFFER,null),A}function U(z){let A=W[z.id],B=z.uniforms,C=z.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let P=0,D=B.length;P<D;P++){let V=B[P];if(Array.isArray(V))for(let j=0,g=V.length;j<g;j++)E(V[j],P,j,C);else E(V,P,0,C)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(z,A,B,C){if(N(z,A,B,C)===!0){let{__offset:P,value:D}=z;if(Array.isArray(D)){let V=0;for(let j=0;j<D.length;j++){let g=D[j],S=k(g,!0);G(g,z.__data,V),V+=S.storage/Float32Array.BYTES_PER_ELEMENT}}else G(D,z.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,P,z.__data)}}function G(z,A,B){if(typeof z==="number"||typeof z==="boolean")A[B]=z;else if(z.isMatrix3)A[B]=z.elements[0],A[B+1]=z.elements[1],A[B+2]=z.elements[2],A[B+3]=0,A[B+4]=z.elements[3],A[B+5]=z.elements[4],A[B+6]=z.elements[5],A[B+7]=0,A[B+8]=z.elements[6],A[B+9]=z.elements[7],A[B+10]=z.elements[8],A[B+11]=0;else if(ArrayBuffer.isView(z))A.set(z.subarray(0,A.length-B),B);else z.toArray(A,B)}function N(z,A,B,C){let P=z.value,D=A+"_"+B;if(Array.isArray(P)){if(C[D]===void 0)C[D]=[];let V=C[D],j=!1;for(let g=0;g<P.length;g++)if(R(P[g],V,g)===!0)j=!0;return j}return R(P,C,D)}function R(z,A,B){if(A[B]===void 0){if(typeof z==="number"||typeof z==="boolean")A[B]=z;else if(ArrayBuffer.isView(z))A[B]=z.slice();else A[B]=z.clone();return!0}else{let C=A[B];if(typeof z==="number"||typeof z==="boolean"){if(C!==z)return A[B]=z,!0}else if(ArrayBuffer.isView(z))return!0;else if(C.equals(z)===!1)return C.copy(z),!0}return!1}function L(z){let A=z.uniforms,B=0,C=16;for(let D=0,V=A.length;D<V;D++){let j=Array.isArray(A[D])?A[D]:[A[D]];for(let g=0,S=j.length;g<S;g++){let x=j[g],r=Array.isArray(x.value)?x.value:[x.value],w=Array.isArray(A[D])||Array.isArray(x.value),c=B;for(let v=0,Z0=r.length;v<Z0;v++){let d=r[v],a=k(d,w),Q0=B%C,B0=Q0%a.boundary,o=Q0+B0;if(B+=B0,o!==0&&C-o<a.storage)B+=C-o;if(v===0)c=B;B+=a.storage}let i=x.type==="int"?Int32Array:x.type==="uint"?Uint32Array:Float32Array;x.__data=new i((B-c)/Float32Array.BYTES_PER_ELEMENT),x.__offset=c}}let P=B%C;if(P>0)B+=C-P;return z.__size=B,z.__cache={},this}function k(z,A){let B={boundary:0,storage:0};if(typeof z==="number"||typeof z==="boolean")B.boundary=4,B.storage=4;else if(z.isVector2)B.boundary=8,B.storage=8;else if(z.isVector3||z.isColor)B.boundary=16,B.storage=12;else if(z.isVector4)B.boundary=16,B.storage=16;else if(z.isMatrix3)B.boundary=16,B.storage=48;else if(z.isMatrix4)B.boundary=16,B.storage=64;else if(z.isTexture)S0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(z))B.boundary=16,B.storage=z.byteLength;else S0("WebGLRenderer: Unsupported uniform value type.",z);if(A===!0)B.boundary=16,B.storage=Math.ceil(B.storage/16)*16;return B}function q(z){let A=z.target;A.removeEventListener("dispose",q),J.deleteBuffer(W[A.id]),delete W[A.id],delete K[A.id]}function F(){for(let z in W)J.deleteBuffer(W[z]);W={},K={}}return{bind:H,update:X,dispose:F}}var BN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),U7=null;function kN(){if(U7===null)U7=new Z8(BN,16,16,o7,p9),U7.name="DFG_LUT",U7.minFilter=C9,U7.magFilter=C9,U7.wrapS=e8,U7.wrapT=e8,U7.generateMipmaps=!1,U7.needsUpdate=!0;return U7}class pJ{constructor(J={}){let{canvas:Q=l$(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:Y=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:G=!1,outputBufferType:N=Q7}=J;this.isWebGLRenderer=!0;let R;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=$.getContextAttributes().alpha}else R=K;let L=N,k=new Set([w1,C1,A1]),q=new Set([Q7,y7,r6,i7,I1,z1]),F=new Uint32Array(4),z=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},B=null,C=null,P=[],D=[],V=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=X7,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,g=!1,S=null,x=null,r=null,w=null;this._outputColorSpace=b$;let c=0,i=0,v=null,Z0=-1,d=null,a=new H9,Q0=new H9,B0=null,o=new o0(0),J0=0,O0=Q.width,C0=Q.height,z0=1,R0=null,n0=null,h0=new H9(0,0,O0,C0),j0=new H9(0,0,O0,C0),i0=!1,x0=new B6,X9=new E5,Y9=!1,S9=!1,b9=new K9,U9=new p,V9=new H9,j9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},f9=!1;function s9(){return v===null?z0:1}let f=$;function i9(M,T){return Q.getContext(M,T)}let t0,F9,E0,$9,_0,y0,B9,I,O,y,e,t,K0,Y0,l,s,H0,_,n,u,$0,W0,N0;try{let M={alpha:!0,depth:Z,stencil:W,antialias:H,premultipliedAlpha:X,preserveDrawingBuffer:Y,powerPreference:U,failIfMajorPerformanceCaveat:E};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${sQ}`);if(Q.addEventListener("webglcontextlost",q0,!1),Q.addEventListener("webglcontextrestored",P0,!1),Q.addEventListener("webglcontextcreationerror",g0,!1),f===null){if(f=i9("webgl2",M),f===null)if(i9("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}w0()}catch(M){throw Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",P0,!1),Q.removeEventListener("webglcontextcreationerror",g0,!1),f0("WebGLRenderer: "+M.message),M}function w0(){if(t0=new fY(f),t0.init(),$0=new DN(f,t0),F9=new kY(f,t0,J,$0),E0=new qN(f,t0),F9.reversedDepthBuffer&&G)E0.buffers.depth.setReversed(!0);x=f.createFramebuffer(),r=f.createFramebuffer(),w=f.createFramebuffer(),$9=new bY(f),_0=new eU,y0=new FN(f,t0,E0,_0,F9,$0,$9),B9=new jY(j),I=new xK(f),W0=new VY(f,I),O=new vY(f,I,$9,W0),y=new xY(f,O,I,W0,$9),_=new hY(f,F9,y0),l=new IY(_0),e=new tU(j,B9,t0,F9,W0,l),t=new LN(j,_0),K0=new QN,Y0=new XN(t0),H0=new LY(j,B9,E0,y,R,X),s=new GN(j,y,F9),N0=new VN(f,$9,F9,E0),n=new BY(f,t0,$9),u=new yY(f,t0,$9),$9.programs=e.programs,j.capabilities=F9,j.extensions=t0,j.properties=_0,j.renderLists=K0,j.shadowMap=s,j.state=E0,j.info=$9}if(L!==Q7)V=new pY(L,Q.width,Q.height,H,Z,W);let A0=new bZ(j,f);this.xr=A0,this.getContext=function(){return f},this.getContextAttributes=function(){return f.getContextAttributes()},this.forceContextLoss=function(){let M=t0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=t0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return z0},this.setPixelRatio=function(M){if(M===void 0)return;z0=M,this.setSize(O0,C0,!1)},this.getSize=function(M){return M.set(O0,C0)},this.setSize=function(M,T,m=!0){if(A0.isPresenting){S0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(O0=M,C0=T,Q.width=Math.floor(M*z0),Q.height=Math.floor(T*z0),m===!0)Q.style.width=M+"px",Q.style.height=T+"px";if(V!==null)V.setSize(Q.width,Q.height);this.setViewport(0,0,M,T)},this.getDrawingBufferSize=function(M){return M.set(O0*z0,C0*z0).floor()},this.setDrawingBufferSize=function(M,T,m){O0=M,C0=T,z0=m,Q.width=Math.floor(M*m),Q.height=Math.floor(T*m),this.setViewport(0,0,M,T)},this.setEffects=function(M){if(L===Q7){f0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let T=0;T<M.length;T++)if(M[T].isOutputPass===!0){S0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(a)},this.getViewport=function(M){return M.copy(h0)},this.setViewport=function(M,T,m,b){if(M.isVector4)h0.set(M.x,M.y,M.z,M.w);else h0.set(M,T,m,b);E0.viewport(a.copy(h0).multiplyScalar(s9()).round())},this.getScissor=function(M){return M.copy(j0)},this.setScissor=function(M,T,m,b){if(M.isVector4)j0.set(M.x,M.y,M.z,M.w);else j0.set(M,T,m,b);E0.scissor(Q0.copy(j0).multiplyScalar(s9()).round())},this.getScissorTest=function(){return i0},this.setScissorTest=function(M){E0.setScissorTest(i0=M)},this.setOpaqueSort=function(M){R0=M},this.setTransparentSort=function(M){n0=M},this.getClearColor=function(M){return M.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor(...arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha(...arguments)},this.clear=function(M=!0,T=!0,m=!0){let b=0;if(M){let h=!1;if(v!==null){let U0=v.texture.format;h=k.has(U0)}if(h){let U0=v.texture.type,M0=q.has(U0),X0=H0.getClearColor(),D0=H0.getClearAlpha(),I0=X0.r,b0=X0.g,l0=X0.b;if(M0)F[0]=I0,F[1]=b0,F[2]=l0,F[3]=D0,f.clearBufferuiv(f.COLOR,0,F);else z[0]=I0,z[1]=b0,z[2]=l0,z[3]=D0,f.clearBufferiv(f.COLOR,0,z)}else b|=f.COLOR_BUFFER_BIT}if(T)b|=f.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)b|=f.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)f.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),S=M},this.dispose=function(){Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",P0,!1),Q.removeEventListener("webglcontextcreationerror",g0,!1),H0.dispose(),K0.dispose(),Y0.dispose(),y0.dispose(),_0.dispose(),B9.dispose(),y.dispose(),O.dispose(),W0.dispose(),N0.dispose(),e.dispose(),A0.dispose(),A0.removeEventListener("sessionstart",cJ),A0.removeEventListener("sessionend",nJ),p7.stop()};function q0(M){M.preventDefault(),qJ("WebGLRenderer: Context Lost."),g=!0}function P0(){qJ("WebGLRenderer: Context Restored."),g=!1;let M=$9.autoReset,T=s.enabled,m=s.autoUpdate,b=s.needsUpdate,h=s.type;w0(),$9.autoReset=M,s.enabled=T,s.autoUpdate=m,s.needsUpdate=b,s.type=h}function g0(M){f0("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function F0(M){let T=M.target;T.removeEventListener("dispose",F0),e0(T)}function e0(M){D9(M),_0.remove(M)}function D9(M){let T=_0.get(M).programs;if(T!==void 0){if(T.forEach(function(m){e.releaseProgram(m)}),M.isShaderMaterial)e.releaseShaderCache(M)}}this.renderBufferDirect=function(M,T,m,b,h,U0){if(T===null)T=j9;let M0=h.isMesh&&h.matrixWorld.determinantAffine()<0,X0=qW(M,T,m,b,h);E0.setMaterial(b,M0);let D0=m.index,I0=1;if(b.wireframe===!0){if(D0=O.getWireframeAttribute(m),D0===void 0)return;I0=2}let b0=m.drawRange,l0=m.attributes.position,L0=b0.start*I0,d0=(b0.start+b0.count)*I0;if(U0!==null)L0=Math.max(L0,U0.start*I0),d0=Math.min(d0,(U0.start+U0.count)*I0);if(D0!==null)L0=Math.max(L0,0),d0=Math.min(d0,D0.count);else if(l0!==void 0&&l0!==null)L0=Math.max(L0,0),d0=Math.min(d0,l0.count);let N9=d0-L0;if(N9<0||N9===1/0)return;W0.setup(h,b,X0,m,D0);let Z9,J9=n;if(D0!==null)Z9=I.get(D0),J9=u,J9.setIndex(Z9);if(h.isMesh)if(b.wireframe===!0)E0.setLineWidth(b.wireframeLinewidth*s9()),J9.setMode(f.LINES);else J9.setMode(f.TRIANGLES);else if(h.isLine){let k9=b.linewidth;if(k9===void 0)k9=1;if(E0.setLineWidth(k9*s9()),h.isLineSegments)J9.setMode(f.LINES);else if(h.isLineLoop)J9.setMode(f.LINE_LOOP);else J9.setMode(f.LINE_STRIP)}else if(h.isPoints)J9.setMode(f.POINTS);else if(h.isSprite)J9.setMode(f.TRIANGLES);if(h.isBatchedMesh)if(!t0.get("WEBGL_multi_draw")){let{_multiDrawStarts:k9,_multiDrawCounts:V0,_multiDrawCount:T9}=h,a0=D0?I.get(D0).bytesPerElement:1,m7=_0.get(b).currentProgram.getUniforms();for(let I9=0;I9<T9;I9++)m7.setValue(f,"_gl_DrawID",I9),J9.render(k9[I9]/a0,V0[I9])}else J9.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)J9.renderInstances(L0,N9,h.count);else if(m.isInstancedBufferGeometry){let k9=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,V0=Math.min(m.instanceCount,k9);J9.renderInstances(L0,N9,V0)}else J9.render(L0,N9)};function E7(M,T,m,b){if(S!==null&&M.isNodeMaterial)S.setObject(b,M);if(Y9===!0)l.setState(M,m,!1);if(M.transparent===!0&&M.side===u9&&M.forceSinglePass===!1)M.side=v9,M.needsUpdate=!0,b6(M,T,b),M.side=I6,M.needsUpdate=!0,b6(M,T,b),M.side=u9;else b6(M,T,b)}this.compile=function(M,T,m=null){if(m===null)m=M;if(S!==null)S.renderStart(M,T,m);if(C=Y0.get(m),C.init(T),D.push(C),m.traverseVisible(function(h){if(h.isLight&&h.layers.test(T.layers)){if(C.pushLight(h),h.castShadow)C.pushShadow(h)}}),M!==m)M.traverseVisible(function(h){if(h.isLight&&h.layers.test(T.layers)){if(C.pushLight(h),h.castShadow)C.pushShadow(h)}});if(C.setupLights(),S!==null)S.updateLights(C.state.lightsArray);if(S9=this.localClippingEnabled,Y9=l.init(this.clippingPlanes,S9),Y9===!0)l.setGlobalState(this.clippingPlanes,T);if(S!==null)s.render(C.state.shadowsArray,m,T);let b=new Set;if(M.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let U0=h.material;if(U0)if(Array.isArray(U0))for(let M0=0;M0<U0.length;M0++){let X0=U0[M0];E7(X0,m,T,h),b.add(X0)}else E7(U0,m,T,h),b.add(U0)}),C=D.pop(),S!==null)S.renderEnd();return b},this.compileAsync=function(M,T,m=null){let b=this.compile(M,T,m);return new Promise((h)=>{function U0(){if(b.forEach(function(M0){let D0=_0.get(M0).currentProgram;if(D0===void 0||D0.isReady())b.delete(M0)}),b.size===0){h(M);return}setTimeout(U0,10)}if(t0.get("KHR_parallel_shader_compile")!==null)U0();else setTimeout(U0,10)})};let _5=null;function EW(M){if(_5)_5(M)}function cJ(){p7.stop()}function nJ(){p7.start()}let p7=new VZ;if(p7.setAnimationLoop(EW),typeof self<"u")p7.setContext(self);this.setAnimationLoop=function(M){_5=M,A0.setAnimationLoop(M),M===null?p7.stop():p7.start()},A0.addEventListener("sessionstart",cJ),A0.addEventListener("sessionend",nJ),this.render=function(M,T){if(T!==void 0&&T.isCamera!==!0){f0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;if(S!==null)S.renderStart(M,T);let m=A0.enabled===!0&&A0.isPresenting===!0,b=V!==null&&(v===null||m)&&V.begin(j,v);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(T.parent===null&&T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(A0.enabled===!0&&A0.isPresenting===!0&&(V===null||V.isCompositing()===!1)){if(A0.cameraAutoUpdate===!0)A0.updateCamera(T);T=A0.getCamera()}if(M.isScene===!0)M.onBeforeRender(j,M,T,v);if(C=Y0.get(M,D.length),C.init(T),C.state.textureUnits=y0.getTextureUnits(),D.push(C),b9.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera)X9.setFromArrayCamera(T);else x0.setFromProjectionMatrix(b9,GJ,T.reversedDepth);if(S9=this.localClippingEnabled,Y9=l.init(this.clippingPlanes,S9),B=K0.get(M,P.length),B.init(),P.push(B),this.info.render.frame++,A0.enabled===!0&&A0.isPresenting===!0){let M0=j.xr.getDepthSensingMesh();if(M0!==null)T5(M0,T,-1/0,j.sortObjects)}if(T5(M,T,0,j.sortObjects),B.finish(),S!==null)S.updateLights(C.state.lightsArray);if(j.sortObjects===!0)B.sort(R0,n0);if(f9=A0.enabled===!1||A0.isPresenting===!1||A0.hasDepthSensing()===!1,f9)H0.addToRenderList(B,M);if(this.info.autoReset===!0)this.info.reset();if(Y9===!0)l.beginShadows();let h=C.state.shadowsArray;if(s.render(h,M,T),Y9===!0)l.endShadows();if((b&&V.hasRenderPass())===!1){let{opaque:M0,transmissive:X0}=B;if(C.setupLights(),T.isArrayCamera){let D0=T.cameras;if(X0.length>0)for(let I0=0,b0=D0.length;I0<b0;I0++){let l0=D0[I0];iJ(M0,X0,M,l0)}if(f9)H0.render(M);for(let I0=0,b0=D0.length;I0<b0;I0++){let l0=D0[I0];sJ(B,M,l0,l0.viewport)}}else{if(X0.length>0)iJ(M0,X0,M,T);if(f9)H0.render(M);sJ(B,M,T)}}if(v!==null&&i===0)y0.updateMultisampleRenderTarget(v),y0.updateRenderTargetMipmap(v);if(b)V.end(j);if(M.isScene===!0)M.onAfterRender(j,M,T);if(W0.resetDefaultState(),Z0=-1,d=null,D.pop(),D.length>0){if(C=D[D.length-1],y0.setTextureUnits(C.state.textureUnits),Y9===!0)l.setGlobalState(j.clippingPlanes,C.state.camera)}else C=null;if(P.pop(),P.length>0)B=P[P.length-1];else B=null;if(S!==null)S.renderEnd()};function T5(M,T,m,b){if(M.visible===!1)return;if(M.layers.test(T.layers)){if(M.isGroup)m=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(T)}else if(M.isLight){if(C.pushLight(M),M.castShadow)C.pushShadow(M)}else if(M.isSprite){let M0=T.isArrayCamera?X9:x0;if(!M.frustumCulled||M.intersectsFrustum(M0)){if(b)V9.setFromMatrixPosition(M.matrixWorld).applyMatrix4(b9);let X0=y.update(M),D0=M.material;if(D0.visible)B.push(M,X0,D0,m,V9.z,null,T)}}else if(M.isMesh||M.isLine||M.isPoints){let M0=T.isArrayCamera?X9:x0;if(!M.frustumCulled||M.intersectsFrustum(M0)){let X0=y.update(M),D0=M.material;if(b){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();V9.copy(M.boundingSphere.center)}else{if(X0.boundingSphere===null)X0.computeBoundingSphere();V9.copy(X0.boundingSphere.center)}V9.applyMatrix4(M.matrixWorld).applyMatrix4(b9)}if(Array.isArray(D0)){let I0=X0.groups;for(let b0=0,l0=I0.length;b0<l0;b0++){let L0=I0[b0],d0=D0[L0.materialIndex];if(d0&&d0.visible)B.push(M,X0,d0,m,V9.z,L0,T)}}else if(D0.visible)B.push(M,X0,D0,m,V9.z,null,T)}}}let U0=M.children;for(let M0=0,X0=U0.length;M0<X0;M0++)T5(U0[M0],T,m,b)}function sJ(M,T,m,b){let{opaque:h,transmissive:U0,transparent:M0}=M;if(C.setupLightsView(m),Y9===!0)l.setGlobalState(j.clippingPlanes,m);if(b)E0.viewport(a.copy(b));if(h.length>0)E8(h,T,m);if(U0.length>0)E8(U0,T,m);if(M0.length>0)E8(M0,T,m);E0.buffers.depth.setTest(!0),E0.buffers.depth.setMask(!0),E0.buffers.color.setMask(!0),E0.setPolygonOffset(!1)}function iJ(M,T,m,b){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[b.id]===void 0){let L0=t0.has("EXT_color_buffer_half_float")||t0.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[b.id]=new y9(1,1,{generateMipmaps:!0,type:L0?p9:Q7,minFilter:v7,samples:Math.max(4,F9.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:u0.workingColorSpace})}let U0=C.state.transmissionRenderTarget[b.id],M0=b.viewport||a;U0.setSize(M0.z*j.transmissionResolutionScale,M0.w*j.transmissionResolutionScale);let X0=j.getRenderTarget(),D0=j.getActiveCubeFace(),I0=j.getActiveMipmapLevel();if(j.setRenderTarget(U0),j.getClearColor(o),J0=j.getClearAlpha(),J0<1)j.setClearColor(16777215,0.5);if(j.clear(),f9)H0.render(m);let b0=j.toneMapping;j.toneMapping=X7;let l0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(C.setupLightsView(b),Y9===!0)l.setGlobalState(j.clippingPlanes,b);if(E8(M,m,b),y0.updateMultisampleRenderTarget(U0),y0.updateRenderTargetMipmap(U0),t0.has("WEBGL_multisampled_render_to_texture")===!1){let L0=!1;for(let d0=0,N9=T.length;d0<N9;d0++){let Z9=T[d0],{object:J9,geometry:k9,material:V0,group:T9}=Z9;if(V0.side===u9&&J9.layers.test(b.layers)){let a0=V0.side;V0.side=v9,V0.needsUpdate=!0,oJ(J9,m,b,k9,V0,T9),V0.side=a0,V0.needsUpdate=!0,L0=!0}}if(L0===!0)y0.updateMultisampleRenderTarget(U0),y0.updateRenderTargetMipmap(U0)}if(j.setRenderTarget(X0,D0,I0),j.setClearColor(o,J0),l0!==void 0)b.viewport=l0;j.toneMapping=b0}function E8(M,T,m){let b=T.isScene===!0?T.overrideMaterial:null;for(let h=0,U0=M.length;h<U0;h++){let M0=M[h],{object:X0,geometry:D0,group:I0}=M0,b0=M0.material;if(b0.allowOverride===!0&&b!==null)b0=b;if(X0.layers.test(m.layers))oJ(X0,T,m,D0,b0,I0)}}function oJ(M,T,m,b,h,U0){if(S!==null&&h.isNodeMaterial)S.setObject(M,h);if(M.onBeforeRender(j,T,m,b,h,U0),M.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),h.onBeforeRender(j,T,m,b,M,U0),h.transparent===!0&&h.side===u9&&h.forceSinglePass===!1)h.side=v9,h.needsUpdate=!0,j.renderBufferDirect(m,T,b,h,M,U0),h.side=I6,h.needsUpdate=!0,j.renderBufferDirect(m,T,b,h,M,U0),h.side=u9;else j.renderBufferDirect(m,T,b,h,M,U0);M.onAfterRender(j,T,m,b,h,U0)}function aJ(M){let T=0;for(let m of M)if(m.texture!==null)T++;return T}function b6(M,T,m){if(T.isScene!==!0)T=j9;let b=_0.get(M),h=C.state.lights,U0=C.state.shadowsArray,M0=h.state.version,X0=e.getParameters(M,h.state,U0,T,m,C.state.lightProbeGridArray),D0=e.getProgramCacheKey(X0),I0=b.programs;b.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?T.environment:null,b.fog=T.fog;let b0=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(b.envMap=B9.get(M.envMap||b.environment,b0),b.envMapRotation=b.environment!==null&&M.envMap===null?T.environmentRotation:M.envMapRotation,I0===void 0)M.addEventListener("dispose",F0),I0=new Map,b.programs=I0,b.programVariants=new Map;let l0=I0.get(D0);if(l0!==void 0){if(b.currentProgram===l0&&b.lightsStateVersion===M0)return tJ(M,X0),l0}else{if(X0.uniforms=e.getUniforms(M),S!==null&&M.isNodeMaterial)S.build(M,m,X0);M.onBeforeCompile(X0,j),l0=e.acquireProgram(X0,D0),I0.set(D0,l0),b.uniforms=X0.uniforms}let L0=b.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)L0.clippingPlanes=l.uniform;if(tJ(M,X0),b.needsLights=DW(M),b.lightsStateVersion=M0,b.needsLights)L0.ambientLightColor.value=h.state.ambient,L0.lightProbe.value=h.state.probe,L0.sunLights.value=h.state.sun,L0.sunLightShadows.value=h.state.sunShadow,L0.directionalLights.value=h.state.directional,L0.directionalLightShadows.value=h.state.directionalShadow,L0.spotLights.value=h.state.spot,L0.spotLightShadows.value=h.state.spotShadow,L0.rectAreaLights.value=h.state.rectArea,L0.ltc_1.value=h.state.rectAreaLTC1,L0.ltc_2.value=h.state.rectAreaLTC2,L0.pointLights.value=h.state.point,L0.pointLightShadows.value=h.state.pointShadow,L0.hemisphereLights.value=h.state.hemi,L0.sunShadowMatrix.value=h.state.sunShadowMatrix,L0.sunShadowCascade.value=h.state.sunShadowCascade,L0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,L0.spotLightMatrix.value=h.state.spotLightMatrix,L0.spotLightMap.value=h.state.spotLightMap,L0.pointShadowMatrix.value=h.state.pointShadowMatrix;return b.numLightProbeGrids=aJ(C.state.lightProbeGridArray),b.currentProgram=l0,b.uniformsList=null,l0}function GW(M,T,m,b,h){let U0=_0.get(M),M0=U0.currentProgram.id+","+b+","+h,X0=U0.programVariants.get(M0);if(X0===void 0)X0=b6(M,T,m),U0.programVariants.set(M0,X0);else U0.currentProgram=X0,U0.uniformsList=null,U0.outputColorSpace=b,U0.toneMapping=h;return X0}function rJ(M){if(M.uniformsList===null){let T=M.currentProgram.getUniforms();M.uniformsList=Y8.seqWithValue(T.seq,M.uniforms)}return M.uniformsList}function tJ(M,T){let m=_0.get(M);m.outputColorSpace=T.outputColorSpace,m.batching=T.batching,m.batchingColor=T.batchingColor,m.instancing=T.instancing,m.instancingColor=T.instancingColor,m.instancingMorph=T.instancingMorph,m.skinning=T.skinning,m.morphTargets=T.morphTargets,m.morphNormals=T.morphNormals,m.morphColors=T.morphColors,m.morphTargetsCount=T.morphTargetsCount,m.numClippingPlanes=T.numClippingPlanes,m.numIntersection=T.numClipIntersection,m.vertexAlphas=T.vertexAlphas,m.vertexTangents=T.vertexTangents,m.toneMapping=T.toneMapping}function qW(M,T,m,b,h){if(T.isScene!==!0)T=j9;y0.resetTextureUnits();let U0=T.fog,M0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?T.environment:null,X0=v===null?j.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:u0.workingColorSpace,D0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,I0=B9.get(b.envMap||M0,D0),b0=b.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,l0=!!m.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),L0=!!m.morphAttributes.position,d0=!!m.morphAttributes.normal,N9=!!m.morphAttributes.color,Z9=X7;if(b.toneMapped){if(v===null||v.isXRRenderTarget===!0)Z9=j.toneMapping}let J9=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,k9=J9!==void 0?J9.length:0,V0=_0.get(b),T9=C.state.lights;if(Y9===!0){if(S9===!0||M!==d){let W9=M===d&&b.id===Z0;l.setState(b,M,W9)}}let a0=!1,m7=!1;if(b.version===V0.__version){if(V0.needsLights&&V0.lightsStateVersion!==T9.state.version)a0=!0;else if(h.isBatchedMesh&&V0.batching===!1)a0=!0;else if(!h.isBatchedMesh&&V0.batching===!0)a0=!0;else if(h.isBatchedMesh&&V0.batchingColor===!0&&h._colorsTexture===null)a0=!0;else if(h.isBatchedMesh&&V0.batchingColor===!1&&h._colorsTexture!==null)a0=!0;else if(h.isInstancedMesh&&V0.instancing===!1)a0=!0;else if(!h.isInstancedMesh&&V0.instancing===!0)a0=!0;else if(h.isSkinnedMesh&&V0.skinning===!1)a0=!0;else if(!h.isSkinnedMesh&&V0.skinning===!0)a0=!0;else if(h.isInstancedMesh&&V0.instancingColor===!0&&h.instanceColor===null)a0=!0;else if(h.isInstancedMesh&&V0.instancingColor===!1&&h.instanceColor!==null)a0=!0;else if(h.isInstancedMesh&&V0.instancingMorph===!0&&h.morphTexture===null)a0=!0;else if(h.isInstancedMesh&&V0.instancingMorph===!1&&h.morphTexture!==null)a0=!0;else if(V0.envMap!==I0)a0=!0;else if(b.fog===!0&&V0.fog!==U0)a0=!0;else if(V0.numClippingPlanes!==void 0&&(V0.numClippingPlanes!==l.numPlanes||V0.numIntersection!==l.numIntersection))a0=!0;else if(V0.vertexAlphas!==b0)a0=!0;else if(V0.vertexTangents!==l0)a0=!0;else if(V0.morphTargets!==L0)a0=!0;else if(V0.morphNormals!==d0)a0=!0;else if(V0.morphColors!==N9)a0=!0;else if(V0.morphTargetsCount!==k9)a0=!0;else if(V0.numLightProbeGrids!==aJ(C.state.lightProbeGridArray))a0=!0;else if(V0.outputColorSpace!==X0||V0.toneMapping!==Z9)m7=!0}else a0=!0,V0.__version=b.version;let I9=V0.currentProgram;if(a0===!0||m7===!0){if(I9=m7===!0?GW(b,T,h,X0,Z9):b6(b,T,h),S&&b.isNodeMaterial)S.onUpdateProgram(b,I9,V0)}let G8=!1,A7=!1,l7=!1,s0=I9.getUniforms(),M9=V0.uniforms;if(E0.useProgram(I9.program))G8=!0,A7=!0,l7=!0;if(b.id!==Z0)Z0=b.id,A7=!0;if(G8||d!==M){if(E0.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();s0.setValue(f,"projectionMatrix",M.projectionMatrix),s0.setValue(f,"viewMatrix",M.matrixWorldInverse);let R9=s0.map.cameraPosition;if(R9!==void 0)R9.setValue(f,U9.setFromMatrixPosition(M.matrixWorld));if(F9.logarithmicDepthBuffer)s0.setValue(f,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)s0.setValue(f,"isOrthographic",M.isOrthographicCamera===!0);if(d!==M)d=M,A7=!0,l7=!0}if(V0.needsLights){if(T9.state.sunShadowMap.length>0)s0.setValue(f,"sunShadowMap",T9.state.sunShadowMap,y0);if(T9.state.directionalShadowMap.length>0)s0.setValue(f,"directionalShadowMap",T9.state.directionalShadowMap,y0);if(T9.state.spotShadowMap.length>0)s0.setValue(f,"spotShadowMap",T9.state.spotShadowMap,y0);if(T9.state.pointShadowMap.length>0)s0.setValue(f,"pointShadowMap",T9.state.pointShadowMap,y0)}if(h.isSkinnedMesh){s0.setOptional(f,h,"bindMatrix"),s0.setOptional(f,h,"bindMatrixInverse");let W9=h.skeleton;if(W9){if(W9.boneTexture===null)W9.computeBoneTexture();s0.setValue(f,"boneTexture",W9.boneTexture,y0)}}if(h.isBatchedMesh){if(s0.setOptional(f,h,"batchingTexture"),s0.setValue(f,"batchingTexture",h._matricesTexture,y0),s0.setOptional(f,h,"batchingIdTexture"),s0.setValue(f,"batchingIdTexture",h._indirectTexture,y0),s0.setOptional(f,h,"batchingColorTexture"),h._colorsTexture!==null)s0.setValue(f,"batchingColorTexture",h._colorsTexture,y0)}let o9=m.morphAttributes;if(o9.position!==void 0||o9.normal!==void 0||o9.color!==void 0)_.update(h,m,I9);if(A7||V0.receiveShadow!==h.receiveShadow)V0.receiveShadow=h.receiveShadow,s0.setValue(f,"receiveShadow",h.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&T.environment!==null)M9.envMapIntensity.value=T.environmentIntensity;if(M9.dfgLUT!==void 0)M9.dfgLUT.value=kN();if(A7){if(s0.setValue(f,"toneMappingExposure",j.toneMappingExposure),V0.needsLights)FW(M9,l7);if(U0&&b.fog===!0)t.refreshFogUniforms(M9,U0);if(t.refreshMaterialUniforms(M9,b,z0,C0,C.state.transmissionRenderTarget[M.id]),V0.needsLights&&V0.numLightProbeGrids>0){let W9=A,R9=0;for(let G7 of C.state.lightProbeGridArray){if(G7.texture===null)continue;W9.textures[R9]=G7.texture,W9.min[R9]=G7.boundingBox.min,W9.max[R9]=G7.boundingBox.max,W9.resolution[R9]=G7.resolution,R9++}for(let G7 in W9)W9[G7].length=R9;M9.probesSH.value=W9.textures,M9.probesMin.value=W9.min,M9.probesMax.value=W9.max,M9.probesResolution.value=W9.resolution}Y8.upload(f,rJ(V0),M9,y0)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)Y8.upload(f,rJ(V0),M9,y0),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)s0.setValue(f,"center",h.center);if(s0.setValue(f,"modelViewMatrix",h.modelViewMatrix),s0.setValue(f,"normalMatrix",h.normalMatrix),s0.setValue(f,"modelMatrix",h.matrixWorld),b.uniformsGroups!==void 0){let W9=b.uniformsGroups;for(let R9=0,G7=W9.length;R9<G7;R9++){let JQ=W9[R9];N0.update(JQ,I9),N0.bind(JQ,I9)}}return I9}function FW(M,T){M.ambientLightColor.needsUpdate=T,M.lightProbe.needsUpdate=T,M.sunLights.needsUpdate=T,M.sunLightShadows.needsUpdate=T,M.directionalLights.needsUpdate=T,M.directionalLightShadows.needsUpdate=T,M.pointLights.needsUpdate=T,M.pointLightShadows.needsUpdate=T,M.spotLights.needsUpdate=T,M.spotLightShadows.needsUpdate=T,M.rectAreaLights.needsUpdate=T,M.hemisphereLights.needsUpdate=T}function DW(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return i},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(M,T,m){let b=_0.get(M);if(b.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;_0.get(M.texture).__webglTexture=T,_0.get(M.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:m,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,T){let m=_0.get(M);m.__webglFramebuffer=T,m.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(M,T=0,m=0){v=M,c=T,i=m;let b=null,h=!1,U0=!1;if(M){let X0=_0.get(M);if(X0.__useDefaultFramebuffer!==void 0){E0.bindFramebuffer(f.FRAMEBUFFER,X0.__webglFramebuffer),a.copy(M.viewport),Q0.copy(M.scissor),B0=M.scissorTest,E0.viewport(a),E0.scissor(Q0),E0.setScissorTest(B0),Z0=-1;return}else if(X0.__webglFramebuffer===void 0)y0.setupRenderTarget(M);else if(X0.__hasExternalTextures)y0.rebindTextures(M,_0.get(M.texture).__webglTexture,_0.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let b0=M.depthTexture;if(X0.__boundDepthTexture!==b0){if(b0!==null&&_0.has(b0)&&(M.width!==b0.image.width||M.height!==b0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");y0.setupDepthRenderbuffer(M)}}let D0=M.texture;if(D0.isData3DTexture||D0.isDataArrayTexture||D0.isCompressedArrayTexture)U0=!0;let I0=_0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(I0[T]))b=I0[T][m];else b=I0[T];h=!0}else if(M.samples>0&&y0.useMultisampledRTT(M)===!1)b=_0.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(I0))b=I0[m];else b=I0;a.copy(M.viewport),Q0.copy(M.scissor),B0=M.scissorTest}else a.copy(h0).multiplyScalar(z0).floor(),Q0.copy(j0).multiplyScalar(z0).floor(),B0=i0;if(m!==0)b=x;if(E0.bindFramebuffer(f.FRAMEBUFFER,b))E0.drawBuffers(M,b);if(E0.viewport(a),E0.scissor(Q0),E0.setScissorTest(B0),h){let X0=_0.get(M.texture);f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_CUBE_MAP_POSITIVE_X+T,X0.__webglTexture,m)}else if(U0){let X0=T;for(let D0=0;D0<M.textures.length;D0++){let I0=_0.get(M.textures[D0]);f.framebufferTextureLayer(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0+D0,I0.__webglTexture,m,X0)}}else if(M!==null&&m!==0){let X0=_0.get(M.texture);f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,X0.__webglTexture,m)}Z0=-1};function eJ(M){let T=_0.get(M);if(T.__readFormat!==M.format||T.__readType!==M.type)T.__readFormat=M.format,T.__readType=M.type,T.__formatReadable=F9.textureFormatReadable(M.format),T.__typeReadable=F9.textureTypeReadable(M.type);return T}if(this.readRenderTargetPixels=function(M,T,m,b,h,U0,M0,X0=0){if(!(M&&M.isWebGLRenderTarget)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D0=_0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&M0!==void 0){if(D0=D0[M0],Array.isArray(D0))D0=D0[0]}if(D0){E0.bindFramebuffer(f.FRAMEBUFFER,D0);try{let I0=M.textures[X0],b0=I0.format,l0=I0.type;if(M.textures.length>1)f.readBuffer(f.COLOR_ATTACHMENT0+X0);let L0=eJ(I0);if(L0.__formatReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(L0.__typeReadable===!1){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(T>=0&&T<=M.width-b&&(m>=0&&m<=M.height-h))f.readPixels(T,m,b,h,$0.convert(b0),$0.convert(l0),U0)}finally{let I0=v!==null?_0.get(v).__webglFramebuffer:null;E0.bindFramebuffer(f.FRAMEBUFFER,I0)}}},this.readRenderTargetPixelsAsync=async function(M,T,m,b,h,U0,M0,X0=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D0=_0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&M0!==void 0){if(D0=D0[M0],Array.isArray(D0))D0=D0[0]}if(D0)if(T>=0&&T<=M.width-b&&(m>=0&&m<=M.height-h)){E0.bindFramebuffer(f.FRAMEBUFFER,D0);let I0=M.textures[X0],b0=I0.format,l0=I0.type;if(M.textures.length>1)f.readBuffer(f.COLOR_ATTACHMENT0+X0);let L0=eJ(I0);if(L0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(L0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let d0=f.createBuffer();f.bindBuffer(f.PIXEL_PACK_BUFFER,d0),f.bufferData(f.PIXEL_PACK_BUFFER,U0.byteLength,f.STREAM_READ),f.readPixels(T,m,b,h,$0.convert(b0),$0.convert(l0),0),f.bindBuffer(f.PIXEL_PACK_BUFFER,null);let N9=v!==null?_0.get(v).__webglFramebuffer:null;E0.bindFramebuffer(f.FRAMEBUFFER,N9);let Z9=f.fenceSync(f.SYNC_GPU_COMMANDS_COMPLETE,0);return f.flush(),await u$(f,Z9,4),f.bindBuffer(f.PIXEL_PACK_BUFFER,d0),f.getBufferSubData(f.PIXEL_PACK_BUFFER,0,U0),f.bindBuffer(f.PIXEL_PACK_BUFFER,null),f.deleteBuffer(d0),f.deleteSync(Z9),U0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,T=null,m=0){let b=Math.pow(2,-m),h=Math.floor(M.image.width*b),U0=Math.floor(M.image.height*b),M0=T!==null?T.x:0,X0=T!==null?T.y:0;y0.setTexture2D(M,0),f.copyTexSubImage2D(f.TEXTURE_2D,m,0,0,M0,X0,h,U0),E0.unbindTexture()},this.copyTextureToTexture=function(M,T,m=null,b=null,h=0,U0=0){let M0,X0,D0,I0,b0,l0,L0,d0,N9,Z9=M.isCompressedTexture?M.mipmaps[U0]:M.image;if(m!==null)M0=m.max.x-m.min.x,X0=m.max.y-m.min.y,D0=m.isBox3?m.max.z-m.min.z:1,I0=m.min.x,b0=m.min.y,l0=m.isBox3?m.min.z:0;else{let s0=Math.pow(2,-h);if(M0=Math.floor(Z9.width*s0),X0=Math.floor(Z9.height*s0),M.isDataArrayTexture)D0=Z9.depth;else if(M.isData3DTexture)D0=Math.floor(Z9.depth*s0);else D0=1;I0=0,b0=0,l0=0}if(b!==null)L0=b.x,d0=b.y,N9=b.z;else L0=0,d0=0,N9=0;let J9=$0.convert(T.format),k9=$0.convert(T.type),V0;if(T.isData3DTexture)y0.setTexture3D(T,0),V0=f.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)y0.setTexture2DArray(T,0),V0=f.TEXTURE_2D_ARRAY;else y0.setTexture2D(T,0),V0=f.TEXTURE_2D;E0.activeTexture(f.TEXTURE0),E0.pixelStorei(f.UNPACK_FLIP_Y_WEBGL,T.flipY),E0.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),E0.pixelStorei(f.UNPACK_ALIGNMENT,T.unpackAlignment);let T9=E0.getParameter(f.UNPACK_ROW_LENGTH),a0=E0.getParameter(f.UNPACK_IMAGE_HEIGHT),m7=E0.getParameter(f.UNPACK_SKIP_PIXELS),I9=E0.getParameter(f.UNPACK_SKIP_ROWS),G8=E0.getParameter(f.UNPACK_SKIP_IMAGES);E0.pixelStorei(f.UNPACK_ROW_LENGTH,Z9.width),E0.pixelStorei(f.UNPACK_IMAGE_HEIGHT,Z9.height),E0.pixelStorei(f.UNPACK_SKIP_PIXELS,I0),E0.pixelStorei(f.UNPACK_SKIP_ROWS,b0),E0.pixelStorei(f.UNPACK_SKIP_IMAGES,l0);let A7=M.isDataArrayTexture||M.isData3DTexture,l7=T.isDataArrayTexture||T.isData3DTexture;if(M.isDepthTexture){let s0=_0.get(M),M9=_0.get(T),o9=_0.get(s0.__renderTarget),W9=_0.get(M9.__renderTarget);E0.bindFramebuffer(f.READ_FRAMEBUFFER,o9.__webglFramebuffer),E0.bindFramebuffer(f.DRAW_FRAMEBUFFER,W9.__webglFramebuffer);for(let R9=0;R9<D0;R9++){if(A7)f.framebufferTextureLayer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,_0.get(M).__webglTexture,h,l0+R9),f.framebufferTextureLayer(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,_0.get(T).__webglTexture,U0,N9+R9);f.blitFramebuffer(I0,b0,I0+M0,b0+X0,L0,d0,L0+M0,d0+X0,f.DEPTH_BUFFER_BIT,f.NEAREST)}E0.bindFramebuffer(f.READ_FRAMEBUFFER,null),E0.bindFramebuffer(f.DRAW_FRAMEBUFFER,null)}else if(h!==0||M.isRenderTargetTexture||_0.has(M)){let s0=_0.get(M),M9=_0.get(T);E0.bindFramebuffer(f.READ_FRAMEBUFFER,r),E0.bindFramebuffer(f.DRAW_FRAMEBUFFER,w);for(let o9=0;o9<D0;o9++){if(A7)f.framebufferTextureLayer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,s0.__webglTexture,h,l0+o9);else f.framebufferTexture2D(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,s0.__webglTexture,h);if(l7)f.framebufferTextureLayer(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,M9.__webglTexture,U0,N9+o9);else f.framebufferTexture2D(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,M9.__webglTexture,U0);if(h!==0)f.blitFramebuffer(I0,b0,I0+M0,b0+X0,L0,d0,L0+M0,d0+X0,f.COLOR_BUFFER_BIT,f.NEAREST);else if(l7)f.copyTexSubImage3D(V0,U0,L0,d0,N9+o9,I0,b0,M0,X0);else f.copyTexSubImage2D(V0,U0,L0,d0,I0,b0,M0,X0)}E0.bindFramebuffer(f.READ_FRAMEBUFFER,null),E0.bindFramebuffer(f.DRAW_FRAMEBUFFER,null)}else if(l7)if(M.isDataTexture||M.isData3DTexture)f.texSubImage3D(V0,U0,L0,d0,N9,M0,X0,D0,J9,k9,Z9.data);else if(T.isCompressedArrayTexture)f.compressedTexSubImage3D(V0,U0,L0,d0,N9,M0,X0,D0,J9,Z9.data);else f.texSubImage3D(V0,U0,L0,d0,N9,M0,X0,D0,J9,k9,Z9);else if(M.isDataTexture)f.texSubImage2D(f.TEXTURE_2D,U0,L0,d0,M0,X0,J9,k9,Z9.data);else if(M.isCompressedTexture)f.compressedTexSubImage2D(f.TEXTURE_2D,U0,L0,d0,Z9.width,Z9.height,J9,Z9.data);else f.texSubImage2D(f.TEXTURE_2D,U0,L0,d0,M0,X0,J9,k9,Z9);if(E0.pixelStorei(f.UNPACK_ROW_LENGTH,T9),E0.pixelStorei(f.UNPACK_IMAGE_HEIGHT,a0),E0.pixelStorei(f.UNPACK_SKIP_PIXELS,m7),E0.pixelStorei(f.UNPACK_SKIP_ROWS,I9),E0.pixelStorei(f.UNPACK_SKIP_IMAGES,G8),U0===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0)f.generateMipmap(V0);E0.unbindTexture()},this.initRenderTarget=function(M){if(_0.get(M).__webglFramebuffer===void 0)y0.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)y0.setTextureCube(M,0);else if(M.isData3DTexture)y0.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)y0.setTexture2DArray(M,0);else y0.setTexture2D(M,0);E0.unbindTexture()},this.resetState=function(){c=0,i=0,v=null,E0.reset(),W0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return GJ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=u0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=u0._getUnpackColorSpace()}}class xZ{static isWebGL2Available(){try{let J=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&J.getContext("webgl2"))}catch(J){return!1}}static isColorSpaceAvailable(J){try{let Q=document.createElement("canvas"),$=window.WebGL2RenderingContext&&Q.getContext("webgl2");return $.drawingBufferColorSpace=J,$.drawingBufferColorSpace===J}catch(Q){return!1}}static getWebGL2ErrorMessage(){return this._getErrorMessage(2)}static _getErrorMessage(J){let Q={1:"WebGL",2:"WebGL 2"},$={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},Z='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',W=document.createElement("div");if(W.id="webglmessage",W.style.fontFamily="monospace",W.style.fontSize="13px",W.style.fontWeight="normal",W.style.textAlign="center",W.style.background="#fff",W.style.color="#000",W.style.padding="1.5em",W.style.width="400px",W.style.margin="5em auto 0",$[J])Z=Z.replace("$0","graphics card");else Z=Z.replace("$0","browser");return Z=Z.replace("$1",Q[J]),W.innerHTML=Z,W}}var gZ=xZ;var IN=gZ.isWebGL2Available();function S6(J){if(!IN)return;let Q;try{Q=new pJ({alpha:!0,depth:!1})}catch{return}let $=Q.domElement;return $.style.display="",$.className=J,$.setAttribute("aria-hidden","true"),$.addEventListener("webglcontextlost",()=>$.remove()),Q}function j6(J,Q,$){let Z=J.domElement;if(Z.width!==Q||Z.height!==$)J.setSize(Q,$,!1)}var z5=`float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
`;var pZ=`uniform vec3 top, bottom, glow;
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
`;var A5=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;var wN=0.3,PN=new m0(-1,-1).normalize(),_N=x6(m5);function mJ(J){let{l:Q,a:$,b:Z}=_N(J.trim());return new p(Q,$,Z)}function mZ(){let J=S6("paper");if(!J)return;let Q=getComputedStyle(document.documentElement),$={top:{value:mJ(Q.getPropertyValue("--paper-top"))},bottom:{value:mJ(Q.getPropertyValue("--paper-bottom"))},glow:{value:mJ(Q.getPropertyValue("--paper-glow"))},strength:{value:wN},size:{value:new m0},moon:{value:new m0},scale:{value:1},light:{value:PN}},Z=new w9(new c9(2,2),new _9({uniforms:$,vertexShader:A5,fragmentShader:z5+pZ})),W=new Y7(-1,1,1,-1,0,1),K=J.domElement;return document.body.prepend(K),(H,X)=>{let Y=Math.min(2,devicePixelRatio);j6(J,Math.round(K.clientWidth*Y),Math.round(K.clientHeight*Y)),$.size.value.set(K.width,K.height),$.moon.value.set(H*Y,X*Y),$.scale.value=Y,J.render(Z,W)}}var lZ=`uniform sampler2D light;
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
`;var dZ=`uniform highp sampler3D profiles;
uniform float layer;
uniform float stride;
flat varying vec2 vCenter;
flat varying vec3 vEnergy;

void main() {
  vec2 size = vec2(textureSize(profiles, 0).xy);
  vec2 offset = gl_FragCoord.xy - vCenter;
  gl_FragColor = vec4(vEnergy * texture(profiles, vec3(0.5 + offset / (size * stride), layer)).rgb, 0.0);
}
`;var uZ=`attribute vec2 spot;
attribute vec3 tint;
attribute float flux;
uniform vec2 viewport;
uniform float radius;
uniform float exposure;
flat varying vec2 vCenter;
flat varying vec3 vEnergy;

void main() {
  vec4 center = projectionMatrix * modelViewMatrix * vec4(spot, 0.0, 1.0);
  vCenter = (center.xy * 0.5 + 0.5) * viewport;
  vEnergy = tint * flux * exposure;

  gl_Position = vec4(center.xy + position.xy * 2.0 * radius / viewport, 0.0, 1.0);
}
`;var x7={model:"Band-integrated idealized Hubble OTA Fraunhofer intensity",size:[157,157,19],format:"rgba16float",texelCssPixels:0.024999999999999998,radiusCssPixels:19.2125,lambdaOverDiameterCssPixels:0.15,displayRollDegrees:45,pupilDiameterSamples:512,fftSize:3072,secondaryRadius:0.33,vaneWidth:0.022,mirrorPads:[[0.887,0,0.071],[-0.464,0.757,0.071],[-0.461,-0.763,0.071]],pupilTableBlob:"a2e4ccb57ebd3804d2e226bdc24abea7ba36d3c6",pupilImplementationBlob:"d9b5db79fe03e88db5d7e60a23ec990e2c273f3e",sources:["https://github.com/spacetelescope/tinytim/blob/master/pupil.tab","https://github.com/spacetelescope/tinytim/blob/master/cpupil.c","https://roman-docs.stsci.edu/simulation-tools/stpsf-space-telescope-point-spread-functions-for-roman/overview-of-stpsf","https://hst-docs.stsci.edu/wfc3ihb/chapter-6-uvis-imaging-with-wfc3/6-5-uvis-spectral-elements","https://esahubble.org/images/heic1501a/"],bandpasses:[{filter:"F673N",pivotNm:676.59,rectangularWidthNm:11.78,wavelengthSamples:5},{filter:"F657N",pivotNm:656.66,rectangularWidthNm:12.1,wavelengthSamples:5},{filter:"F502N",pivotNm:500.96,rectangularWidthNm:6.53,wavelengthSamples:5}],referenceWavelengthNm:656.66,retainedEnergy:[0.9988748412864739,0.9989055698735064,0.9994511490466119],cropNormalization:[1.0011264261216921,1.001095629216115,1.0005491523561822],approximations:["Angular diffraction scale is anchored to the reference display calibration, not measured HST angular resolution.","RGB profiles integrate rectangular approximations to the source F673N, F657N and F502N filters with flat detected photon density in each band.","The ideal pupil omits instrument optics, wavefront aberrations, jitter, charge diffusion and detector saturation.","The finite PSF is renormalized after cropping. Its shape is independent of source brightness and field position.","A shift-invariant focal-plane PSF approximates off-axis optics. Pixel solid angle converts integrated profiles to radiance."],byteLength:3746648,referenceViewportHeight:768,referenceVerticalFovDegrees:44,referenceFocalPixels:950.4333517118577,lambdaOverDiameterRadians:0.00015782274446685812,maximumScale:4,scales:[0,0.5,1,1.25,1.5,1.625,1.75,2,2.25,2.375,2.5,2.625,2.75,3,3.25,3.5,3.625,3.75,4],encodedIntegrals:[[1,1,1],[0.999830961227417,0.9997584819793701,1.0000683069229126],[1.0000395774841309,0.9998537302017212,0.9998184442520142],[1.0000888109207153,1.0001951456069946,1.0001084804534912],[1.0001260042190552,0.9999581575393677,0.9997936487197876],[1.0001171827316284,0.9998213052749634,0.9997577667236328],[1.0000489950180054,0.9997603893280029,0.999826192855835],[0.9999451637268066,0.9998741149902344,1.0001729726791382],[1.0000836849212646,0.9999197721481323,0.9999730587005615],[1.0001335144042969,0.9997963905334473,1.0001522302627563],[1.0000149011611938,1.00002920627594,0.9998884201049805],[1.0000532865524292,1.0001493692398071,0.9999713897705078],[0.9998228549957275,0.9999678134918213,1.0001212358474731],[0.999779462814331,0.9999351501464844,1.0002222061157227],[1.0001120567321777,1.0001012086868286,0.999924898147583],[0.9999985694885254,1.000117540359497,1.0001449584960938],[1.0000901222229004,0.999752402305603,1.0001378059387207],[0.9999186992645264,1.000192403793335,1.0000747442245483],[1.000165581703186,1.0002036094665527,0.9997936487197876]],maximumInterpolatedL1Error:0.014713479245100237,sha256:"200a81acf14c5175f09de6507b11b5fef814b9111b45b9022003fb15ef10c7a4",sampling:"Pixel-integrated profiles use unit-spaced texels. Trilinear interpolation blends optical scales and translates the source. Integer pixel strides cover larger profiles."};var vN=function(){function J(Q){if(this._value=NaN,typeof Q==="string")this._seed=this.hashCode(Q);else if(typeof Q==="number")this._seed=this.getSafeSeed(Q);else this._seed=this.getSafeSeed(J.MIN+Math.floor((J.MAX-J.MIN)*Math.random()));this.reset()}return J.prototype.next=function(Q,$){if(Q===void 0)Q=0;if($===void 0)$=1;return this.recalculate(),this.map(this._value,J.MIN,J.MAX,Q,$)},J.prototype.nextInt=function(Q,$){if(Q===void 0)Q=10;if($===void 0)$=100;return this.recalculate(),Math.floor(this.map(this._value,J.MIN,J.MAX,Q,$+1))},J.prototype.nextString=function(Q,$){if(Q===void 0)Q=16;if($===void 0)$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";var Z="";while(Z.length<Q)Z+=this.nextChar($);return Z},J.prototype.nextChar=function(Q){if(Q===void 0)Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return Q.substr(this.nextInt(0,Q.length-1),1)},J.prototype.nextArrayItem=function(Q){return Q[this.nextInt(0,Q.length-1)]},J.prototype.nextBoolean=function(){return this.recalculate(),this._value>0.5},J.prototype.skip=function(Q){if(Q===void 0)Q=1;while(Q-- >0)this.recalculate()},J.prototype.reset=function(){this._value=this._seed},J.prototype.recalculate=function(){this._value=this.xorshift(this._value)},J.prototype.xorshift=function(Q){return Q^=Q<<13,Q^=Q>>17,Q^=Q<<5,Q},J.prototype.map=function(Q,$,Z,W,K){return(Q-$)/(Z-$)*(K-W)+W},J.prototype.hashCode=function(Q){var $=0;if(Q){var Z=Q.length;for(var W=0;W<Z;W++)$=($<<5)-$+Q.charCodeAt(W),$|=0,$=this.xorshift($)}return this.getSafeSeed($)},J.prototype.getSafeSeed=function(Q){if(Q===0)return 1;return Q},J.MIN=-2147483648,J.MAX=2147483647,J}(),lJ=vN;var sZ=Math.sqrt(3),iZ=Math.sqrt(5),yN=0.5*(sZ-1),N8=(3-sZ)/6;var $I=(iZ-1)/4,ZI=(5-iZ)/20,cZ=(J)=>Math.floor(J)|0,nZ=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function oZ(J=Math.random){let Q=bN(J),$=new Float64Array(Q).map((W)=>nZ[W%12*2]),Z=new Float64Array(Q).map((W)=>nZ[W%12*2+1]);return function(K,H){let X=0,Y=0,U=0,E=(K+H)*yN,G=cZ(K+E),N=cZ(H+E),R=(G+N)*N8,L=G-R,k=N-R,q=K-L,F=H-k,z,A;if(q>F)z=1,A=0;else z=0,A=1;let B=q-z+N8,C=F-A+N8,P=q-1+2*N8,D=F-1+2*N8,V=G&255,j=N&255,g=0.5-q*q-F*F;if(g>=0){let r=V+Q[j],w=$[r],c=Z[r];g*=g,X=g*g*(w*q+c*F)}let S=0.5-B*B-C*C;if(S>=0){let r=V+z+Q[j+A],w=$[r],c=Z[r];S*=S,Y=S*S*(w*B+c*C)}let x=0.5-P*P-D*D;if(x>=0){let r=V+1+Q[j+1],w=$[r],c=Z[r];x*=x,U=x*x*(w*P+c*D)}return 70*(X+Y+U)}}function bN(J){let $=new Uint8Array(512);for(let Z=0;Z<256;Z++)$[Z]=Z;for(let Z=0;Z<255;Z++){let W=Z+~~(J()*(256-Z)),K=$[Z];$[Z]=$[W],$[W]=K}for(let Z=256;Z<512;Z++)$[Z]=$[Z-256];return $}var eZ=1887,hN=0.2,xN=0.9,gN=6.6,pN=0.32,aZ=4,mN=[0.82,0.91,1],lN=[1,0.97,0.94],dN=[1,0.86,0.7],rZ=24,uN=0.3,cN=0.565,nN=0.35,sN=1.134,z7=36,iN=new lJ(eZ),tZ=oZ(()=>iN.next());function JW(J,Q,$){let Z=[];for(let W=0;W<aZ;W++){let K=W===aZ-1,H=(K?1:0.75)*4**-W,X=z7/Math.sqrt(hN*H);for(let Y=Math.floor((J-z7)/X);Y<=Math.floor((Q+z7)/X);Y++)for(let U=0;U*X<=$+z7;U++){let E=new lJ(`${eZ} ${W} ${Y} ${U}`),G=(Y+E.next())*X,N=(U+E.next())*X,R=4**-W*(K?1-E.next():1-0.75*E.next()),L=Math.max(xN,gN+Math.log10(R)/pN),k=E.next(-1,1),q=E.nextInt(0,9999),F=k<0?mN:dN,z=lN.map((A,B)=>A+(F[B]-A)*Math.abs(k));Z.push({x:G,y:N,magnitude:L,color:z,index:q})}}return Z}function QW(J,Q,$){let Z=Math.floor(Q*rZ),W=(Y,U)=>cN*tZ(J*7.31+Y*3.17,Z/rZ*U*nN),K=(Y)=>sN*tZ(J*7.31+Y*3.17,Z*5.77),H=uN*(0.35+0.65*$),X=H*(0.5*W(3,1.7)+0.15*K(4));return{gain:Math.exp(H*(1.4*W(1,2.3)+0.8*W(2,7)+0.3*K(0))),tint:[1+X,1,1-X],shift:[0.03*H*K(5),0.03*H*K(6)]}}var oN=570,f6=(J,Q)=>new P6(new Float32Array(J*Q),Q).setUsage(NJ);function aN(J){let Q=Math.max(1,Math.ceil(J/x7.maximumScale)),$=J/Q,{scales:Z}=x7,W=0,K=Z.length-1;while(K-W>1){let X=W+K>>1;if(Z[X]<$)W=X;else K=X}let H=($-Z[W])/(Z[K]-Z[W]);return{radius:x7.radiusCssPixels*Z[K]*Q+Q,layer:(W+H+0.5)/Z.length,stride:Q}}async function rN(){let J=await fetch("cdn/star-psf.bin.gz");if(!J.ok||!J.body)throw Error(`Could not load the star profiles: ${J.status}`);let Q=J.headers.get("Content-Encoding")?.includes("gzip")?J.body:J.body.pipeThrough(new DecompressionStream("gzip")),$=await new Response(Q).arrayBuffer();if($.byteLength!==x7.byteLength)throw Error("The star profiles have an unexpected size.");let[Z,W,K]=x7.size,H=new J8(new Uint16Array($),Z,W,K);return H.format=$7,H.type=p9,H.minFilter=H.magFilter=C9,H.generateMipmaps=!1,H.needsUpdate=!0,H}function $W(J,Q){let $=S6("sky");if(!$)return;if(!$.extensions.has("EXT_color_buffer_float")&&!$.extensions.has("EXT_color_buffer_half_float")){$.dispose();return}$.toneMapping=i6;let Z=f6(0,2),W=f6(0,3),K=f6(0,1),H=new c9(2,2),X=new $6;X.setIndex(H.index),X.setAttribute("position",H.getAttribute("position")),X.setAttribute("spot",Z),X.setAttribute("tint",W),X.setAttribute("flux",K);let Y=new y9(1,1,{type:p9,depthBuffer:!1}),U={profiles:{value:null},viewport:{value:[1,1]},radius:{value:0},layer:{value:0},stride:{value:1},exposure:{value:0}},E=new _9({uniforms:U,vertexShader:uZ,fragmentShader:dZ,blending:a8,blendEquation:j7,blendSrc:s7,blendDst:s7,blendSrcAlpha:s7,blendDstAlpha:s7,depthTest:!1,depthWrite:!1}),G=new w9(X,E);G.frustumCulled=!1,G.visible=!1;let N={light:{value:Y.texture},frame:{value:0}},R=new w9(new c9(2,2),new _9({uniforms:N,vertexShader:A5,fragmentShader:lZ,blending:L7,depthTest:!1,depthWrite:!1}));R.frustumCulled=!1;let L=new Y7(-1,1,1,-1,0,1),k=new Y7,q=$.domElement;J.prepend(q),rN().then((P)=>{U.profiles.value=P,G.visible=!0,Q()},()=>q.remove());let F,z=[],A="";return{fit:(P)=>{F=P,A=""},draw:(P)=>{let{box:D,baseline:V,roofs:j,starFloor:g}=F,S=J.getBoundingClientRect();if(!q.isConnected||S.width===0)return;let x=D.width/S.width,r=S.top+scrollY,w=r+(V-D.top)/x;q.style.top=`${-r}px`,q.style.height=`${w}px`;let c=Math.min(2,devicePixelRatio),i=Math.round(q.clientWidth*c),v=Math.round(w*c);if(i<=0||v<=0)return;if(j6($,i,v),Y.width!==i||Y.height!==v)Y.setSize(i,v);let Z0=q.clientWidth,d=q.getBoundingClientRect().left,a=document.documentElement.clientWidth/2-d;k.left=0,k.right=Z0,k.top=0,k.bottom=w,k.near=0,k.far=1,k.updateProjectionMatrix();let Q0=z7*c/(x7.size[0]/2)*x7.maximumScale,{radius:B0,layer:o,stride:J0}=aN(Q0);U.viewport.value=[i,v],U.radius.value=B0,U.layer.value=o,U.stride.value=J0,U.exposure.value=oN*Q0*Q0/(J0*J0),N.frame.value=(N.frame.value+1)%64;let O0=S.left-d,C0=`${Z0} ${w} ${a} ${O0} ${x}`;if(A!==C0){A=C0;let z0=z7*x;if(z=JW(-a,Z0-a,w).filter(({x:R0,y:n0})=>{let h0=D.left+(a+R0-O0)*x,j0=j.filter((i0)=>h0>i0.from-z0&&h0<i0.to+z0).map((i0)=>i0.top);return(w-n0)*x>Math.max(g,...j0)+0.9*z0}),z.length>K.count)X.dispose(),Z=f6(z.length,2),W=f6(z.length,3),K=f6(z.length,1),X.setAttribute("spot",Z).setAttribute("tint",W).setAttribute("flux",K)}for(let[z0,{x:R0,y:n0,magnitude:h0,color:j0,index:i0}]of z.entries()){let x0=QW(i0,P,n0/w);Z.setXY(z0,a+R0+x0.shift[0]*z7,n0+x0.shift[1]*z7),W.setXYZ(z0,j0[0]*x0.tint[0],j0[1]*x0.tint[1],j0[2]*x0.tint[2]),K.setX(z0,10**(-0.4*h0)*x0.gain)}Z.needsUpdate=W.needsUpdate=K.needsUpdate=!0,X.instanceCount=z.length,$.setRenderTarget(Y),$.render(G,k),$.setRenderTarget(null),$.render(R,L)}}}var ZW=`uniform float baseline, time, pixel, grit, glass, spread, polarity, moonX;
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
`;var WW=`attribute float chop, rest, row, pitch, depth;
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
`;var JE="#e2d8b8",QE=3,$E=600,dJ=x6(d5);function ZE({baseline:J,sea:Q}){let $=[];for(let Z=J+Q.pitch/2,W=0;Z<J+Q.depth;W++){let K=(Z-J)/Q.depth,H=Q.pitch*(1+0.95*K);if($.push({chop:0,rest:Z,row:W,pitch:H,depth:K}),K<0.82)$.push({chop:1,rest:Z+H/2,row:W,pitch:H,depth:(Z+H/2-J)/Q.depth});Z+=H}return $}function WE(J,Q){let $=new c9(1,2,J,1),Z=new $6;Z.setIndex($.index),Z.setAttribute("position",$.getAttribute("position")),Z.setAttribute("uv",$.getAttribute("uv"));for(let W of["chop","rest","row","pitch","depth"])Z.setAttribute(W,new P6(Float32Array.from(Q,(K)=>K[W]),1));return Z.instanceCount=Q.length,Z}function KW(J,Q){let $=S6("water");if(!$)return;let Z=new Z8(new Uint8Array(4),1,1);Z.needsUpdate=!0;let W=dJ(JE),K={baseline:{value:0},basePitch:{value:0},seaDepth:{value:0},wavelength:{value:0},grit:{value:0},time:{value:0},pixel:{value:0},glass:{value:0},spread:{value:0},polarity:{value:0},moonX:{value:0},span:{value:new m0},ink:{value:new p},wiz:{value:new p},moonlight:{value:new p(W.r,W.g,W.b)},mirrored:{value:new p},mirror:{value:Z}},H=new _9({uniforms:K,vertexShader:WW,fragmentShader:z5+ZW,transparent:!0,premultipliedAlpha:!0,depthTest:!1,side:u9}),X=new w9(new $6,H);X.frustumCulled=!1;let Y=new Y7,U=new R5,E=$.domElement;E.addEventListener("webglcontextlost",()=>J.removeAttribute("data-water")),J.append(E),J.toggleAttribute("data-water",!0);let G,N=[],R=0,L=0,k=0,q=0;return{fit:(A)=>{G=A;let{box:B,baseline:C,sea:P,mirror:D,moon:V}=G;L=C-2*P.pitch,k=B.top+B.height,E.style.top=`${100*(L-B.top)/B.height}%`,E.style.height=`${100*(k-L)/B.height}%`;let j=dJ(getComputedStyle(J).color),g=dJ(G.wiz);K.baseline.value=C,K.basePitch.value=P.pitch,K.seaDepth.value=P.depth,K.wavelength.value=P.length,K.grit.value=P.grit,K.spread.value=B.width*0.3,K.polarity.value=2*(0.2126*j.r+0.7152*j.g+0.0722*j.b)-1,K.moonX.value=V.x,K.ink.value.set(j.r,j.g,j.b),K.wiz.value.set(g.r,g.g,g.b),K.mirrored.value.set(D.west,D.east,D.cap),N=ZE(G),R=0,q=0,U.load(D.image,(S)=>{if(G!==A)return S.dispose();S.flipY=!1,S.generateMipmaps=!1,S.minFilter=C9,K.mirror.value.dispose(),K.mirror.value=S,q=performance.now(),Q()})},draw:(A,B)=>{let C=Math.min(2,devicePixelRatio),P=Math.round(E.clientWidth*C),D=Math.round(E.clientHeight*C);if(P===0||D===0)return;j6($,P,D);let V=Math.ceil(E.clientWidth/QE);if(V!==R)R=V,X.geometry.dispose(),X.geometry=WE(R,N);let j=(k-L)/D,g=G.box.left+G.box.width/2;Y.left=g-P*j/2,Y.right=g+P*j/2,Y.top=L,Y.bottom=k,Y.near=0,Y.far=1,Y.updateProjectionMatrix(),K.span.value.set(Y.left,Y.right),K.time.value=A,K.pixel.value=j,K.glass.value=q===0?0:B?Math.min(1,(performance.now()-q)/$E):1,$.render(X,Y)}}}var KE=30,HW=document.querySelector(".year");if(HW)HW.textContent=String(new Date().getFullYear());var uJ=document.querySelector(".azoth");uJ?.addEventListener("pointerenter",({offsetX:J,offsetY:Q})=>{uJ.style.setProperty("--enter-x",`${J}px`),uJ.style.setProperty("--enter-y",`${Q}px`)});var v6=document.querySelector(".logo"),XW=matchMedia("(max-width: 760px) and (orientation: portrait)"),YW=matchMedia("(prefers-reduced-motion: reduce)"),HE=mZ(),w5=v6?$W(v6,y6):void 0,P5=v6?KW(v6,y6):void 0,g7=j5,C5=0;function UW(){g7=XW.matches?QQ:j5,w5?.fit(g7),P5?.fit(g7),y6()}function y6(){let J=innerWidth/2,Q=innerHeight/3;if(v6){let Z=v6.getBoundingClientRect(),W=Z.width/g7.box.width;J=Z.left+g7.moon.x*W,Q=Z.top+(g7.baseline-g7.moon.altitude-g7.box.top)*W}HE?.(J,Q);let $=YW.matches;w5?.draw($?0:C5/1000),P5?.draw($?0:C5/1000,!$)}function NW(J){if(requestAnimationFrame(NW),YW.matches||J-C5<KE)return;C5=J,w5?.draw(J/1000),P5?.draw(J/1000,!0)}UW();XW.addEventListener("change",UW);addEventListener("load",y6);addEventListener("resize",y6);addEventListener("scroll",y6,{passive:!0});if(w5||P5)requestAnimationFrame(NW);
