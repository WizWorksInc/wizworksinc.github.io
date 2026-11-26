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
var zJ={wide:{box:{left:0,top:-470,width:3200,height:1450},baseline:444,wiz:"#a66bff",sea:{pitch:15,depth:440,length:450,grit:1},mirror:{image:"cdn/logo-mirror.png",west:261,east:2939,cap:864.9},starFloor:405,roofs:[{from:1153,to:2899,top:405},{from:301,to:453.7,top:688.9},{from:453.7,to:606.4,top:460.9},{from:606.4,to:759,top:478.9},{from:759,to:911.7,top:650.9},{from:911.7,to:1064.4,top:812.9},{from:1064.4,to:1217,top:864.9},{from:2916.9,to:2943.4,top:26.4}]},narrow:{box:{left:0,top:-212,width:1600,height:1472},baseline:800,wiz:"#a66bff",sea:{pitch:21,depth:330,length:390,grit:1.5},mirror:{image:"cdn/logo-narrow-mirror.png",west:222.6,east:1570,cap:294},starFloor:294,roofs:[{from:262.6,to:1530,top:294},{from:40,to:150.8,top:840.5},{from:150.8,to:261.6,top:674.5},{from:261.6,to:372.5,top:688.5},{from:372.5,to:483.3,top:812.5},{from:483.3,to:594.1,top:930.5},{from:594.1,to:704.9,top:968.5},{from:1543,to:1562.2,top:19.2}]}};var AJ={...zJ.wide,moon:{x:1497.55,altitude:586.95},starReach:102.4},o$={...zJ.narrow,moon:{x:300.48,altitude:758.3},starReach:112};var qK=({l:J,a:Q,b:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=Math.pow(J+0.3963377773761749*Q+0.2158037573099136*$,3),K=Math.pow(J-0.1055613458156586*Q-0.0638541728258133*$,3),H=Math.pow(J-0.0894841775298119*Q-1.2914855480194092*$,3),Y={mode:"lrgb",r:4.076741636075957*W-3.3077115392580616*K+0.2309699031821044*H,g:-1.2684379732850317*W+2.6097573492876887*K-0.3413193760026573*H,b:-0.0041960761386756*W-0.7034186179359362*K+1.7076146940746117*H};if(Z!==void 0)Y.alpha=Z;return Y},N6=qK;var FK=({r:J,g:Q,b:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=Math.cbrt(0.412221469470763*J+0.5363325372617348*Q+0.0514459932675022*$),K=Math.cbrt(0.2119034958178252*J+0.6806995506452344*Q+0.1073969535369406*$),H=Math.cbrt(0.0883024591900564*J+0.2817188391361215*Q+0.6299787016738222*$),Y={mode:"oklab",l:0.210454268309314*W+0.7936177747023054*K-0.0040720430116193*H,a:1.9779985324311684*W-2.42859224204858*K+0.450593709617411*H,b:0.0259040424655478*W+0.7827717124575296*K-0.8086757549230774*H};if(Z!==void 0)Y.alpha=Z;return Y},E6=FK;var CJ=(J=0)=>{let Q=Math.abs(J);if(Q<=0.04045)return J/12.92;return(Math.sign(J)||1)*Math.pow((Q+0.055)/1.055,2.4)},DK=({r:J,g:Q,b:$,alpha:Z})=>{let W={mode:"lrgb",r:CJ(J),g:CJ(Q),b:CJ($)};if(Z!==void 0)W.alpha=Z;return W},G6=DK;var OK=(J)=>{let Q=E6(G6(J));if(J.r===J.b&&J.b===J.g)Q.a=Q.b=0;return Q},a$=OK;var PJ=(J=0)=>{let Q=Math.abs(J);if(Q>0.0031308)return(Math.sign(J)||1)*(1.055*Math.pow(Q,0.4166666666666667)-0.055);return J*12.92},RK=({r:J,g:Q,b:$,alpha:Z},W="rgb")=>{let K={mode:W,r:PJ(J),g:PJ(Q),b:PJ($)};if(Z!==void 0)K.alpha=Z;return K},q6=RK;var MK=(J)=>q6(N6(J)),r$=MK;var LK=(J,Q)=>J===void 0?void 0:typeof J!=="object"?e$(J):J.mode!==void 0?J:Q?{...J,mode:Q}:void 0,t$=LK;var VK=(J="rgb")=>(Q)=>(Q=t$(Q,J))!==void 0?Q.mode===J?Q:i9[Q.mode][J]?i9[Q.mode][J](Q):J==="rgb"?i9[Q.mode].rgb(Q):i9.rgb[J](i9[Q.mode].rgb(Q)):void 0,JZ=VK;var i9={},QZ={},f8=[],wJ={},BK=(J)=>J,y8=(J)=>{if(i9[J.mode]={...i9[J.mode],...J.toMode},Object.keys(J.fromMode||{}).forEach((Q)=>{if(!i9[Q])i9[Q]={};i9[Q][J.mode]=J.fromMode[Q]}),!J.ranges)J.ranges={};if(!J.difference)J.difference={};return J.channels.forEach((Q)=>{if(J.ranges[Q]===void 0)J.ranges[Q]=[0,1];if(!J.interpolate[Q])throw Error(`Missing interpolator for: ${Q}`);if(typeof J.interpolate[Q]==="function")J.interpolate[Q]={use:J.interpolate[Q]};if(!J.interpolate[Q].fixup)J.interpolate[Q].fixup=BK}),QZ[J.mode]=J,(J.parse||[]).forEach((Q)=>{$Z(Q,J.mode)}),JZ(J.mode)},_J=(J)=>QZ[J],$Z=(J,Q)=>{if(typeof J==="string"){if(!Q)throw Error("'mode' required when 'parser' is a string");wJ[J]=Q}else if(typeof J==="function"){if(f8.indexOf(J)<0)f8.push(J)}};var TJ=/[^\x00-\x7F]|[a-zA-Z_]/,kK=/[^\x00-\x7F]|[-\w]/,k0={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"},T0=0;function F6(J){let Q=J[T0],$=J[T0+1];if(Q==="-"||Q==="+")return/\d/.test($)||$==="."&&/\d/.test(J[T0+2]);if(Q===".")return/\d/.test($);return/\d/.test(Q)}function SJ(J){if(T0>=J.length)return!1;let Q=J[T0];if(TJ.test(Q))return!0;if(Q==="-"){if(J.length-T0<2)return!1;let $=J[T0+1];if($==="-"||TJ.test($))return!0;return!1}return!1}var IK={deg:1,rad:180/Math.PI,grad:0.9,turn:360};function b8(J){let Q="";if(J[T0]==="-"||J[T0]==="+")Q+=J[T0++];if(Q+=D6(J),J[T0]==="."&&/\d/.test(J[T0+1]))Q+=J[T0++]+D6(J);if(J[T0]==="e"||J[T0]==="E"){if((J[T0+1]==="-"||J[T0+1]==="+")&&/\d/.test(J[T0+2]))Q+=J[T0++]+J[T0++]+D6(J);else if(/\d/.test(J[T0+1]))Q+=J[T0++]+D6(J)}if(SJ(J)){let $=O6(J);if($==="deg"||$==="rad"||$==="turn"||$==="grad")return{type:k0.Hue,value:Q*IK[$]};return}if(J[T0]==="%")return T0++,{type:k0.Percentage,value:+Q};return{type:k0.Number,value:+Q}}function D6(J){let Q="";while(/\d/.test(J[T0]))Q+=J[T0++];return Q}function O6(J){let Q="";while(T0<J.length&&kK.test(J[T0]))Q+=J[T0++];return Q}function zK(J){let Q=O6(J);if(J[T0]==="(")return T0++,{type:k0.Function,value:Q};if(Q==="none")return{type:k0.None,value:void 0};return{type:k0.Ident,value:Q}}function AK(J=""){let Q=J.trim(),$=[],Z;T0=0;while(T0<Q.length){if(Z=Q[T0++],Z===`
`||Z==="\t"||Z===" "){while(T0<Q.length&&(Q[T0]===`
`||Q[T0]==="\t"||Q[T0]===" "))T0++;continue}if(Z===",")return;if(Z===")"){$.push({type:k0.ParenClose});continue}if(Z==="+"){if(T0--,F6(Q)){$.push(b8(Q));continue}return}if(Z==="-"){if(T0--,F6(Q)){$.push(b8(Q));continue}if(SJ(Q)){$.push({type:k0.Ident,value:O6(Q)});continue}return}if(Z==="."){if(T0--,F6(Q)){$.push(b8(Q));continue}return}if(Z==="/"){while(T0<Q.length&&(Q[T0]===`
`||Q[T0]==="\t"||Q[T0]===" "))T0++;let W;if(F6(Q)){if(W=b8(Q),W.type!==k0.Hue){$.push({type:k0.Alpha,value:W});continue}}if(SJ(Q)){if(O6(Q)==="none"){$.push({type:k0.Alpha,value:{type:k0.None,value:void 0}});continue}}return}if(/\d/.test(Z)){T0--,$.push(b8(Q));continue}if(TJ.test(Z)){T0--,$.push(zK(Q));continue}return}return $}function CK(J){J._i=0;let Q=J[J._i++];if(!Q||Q.type!==k0.Function||Q.value!=="color")return;if(Q=J[J._i++],Q.type!==k0.Ident)return;let $=wJ[Q.value];if(!$)return;let Z={mode:$},W=ZZ(J,!1);if(!W)return;let K=_J($).channels;for(let H=0,Y,X;H<K.length;H++)if(Y=W[H],X=K[H],Y.type!==k0.None){if(Z[X]=Y.type===k0.Number?Y.value:Y.value/100,X==="alpha")Z[X]=Math.max(0,Math.min(1,Z[X]))}return Z}function ZZ(J,Q){let $=[],Z;while(J._i<J.length){if(Z=J[J._i++],Z.type===k0.None||Z.type===k0.Number||Z.type===k0.Alpha||Z.type===k0.Percentage||Q&&Z.type===k0.Hue){$.push(Z);continue}if(Z.type===k0.ParenClose){if(J._i<J.length)return;continue}return}if($.length<3||$.length>4)return;if($.length===4){if($[3].type!==k0.Alpha)return;$[3]=$[3].value}if($.length===3)$.push({type:k0.None,value:void 0});return $.every((W)=>W.type!==k0.Alpha)?$:void 0}function PK(J,Q){J._i=0;let $=J[J._i++];if(!$||$.type!==k0.Function)return;let Z=ZZ(J,Q);if(!Z)return;return Z.unshift($.value),Z}var wK=(J)=>{if(typeof J!=="string")return;let Q=AK(J),$=Q?PK(Q,!0):void 0,Z=void 0,W=0,K=f8.length;while(W<K)if((Z=f8[W++](J,$))!==void 0)return Z;return Q?CK(Q):void 0},e$=wK;function _K(J,Q){if(!Q||Q[0]!=="oklab")return;let $={mode:"oklab"},[,Z,W,K,H]=Q;if(Z.type===k0.Hue||W.type===k0.Hue||K.type===k0.Hue)return;if(Z.type!==k0.None)$.l=Math.min(Math.max(0,Z.type===k0.Number?Z.value:Z.value/100),1);if(W.type!==k0.None)$.a=W.type===k0.Number?W.value:W.value*0.4/100;if(K.type!==k0.None)$.b=K.type===k0.Number?K.value:K.value*0.4/100;if(H.type!==k0.None)$.alpha=Math.min(1,Math.max(0,H.type===k0.Number?H.value:H.value/100));return $}var WZ=_K;var R6=Math.pow(29,3)/Math.pow(3,3),M6=Math.pow(6,3)/Math.pow(29,3);var z7={X:0.9642956764295677,Y:1,Z:0.8251046025104602};var IE=Math.pow(29,3)/Math.pow(3,3),zE=Math.pow(6,3)/Math.pow(29,3);var jJ=(J)=>Math.pow(J,3)>M6?Math.pow(J,3):(116*J-16)/R6,TK=({l:J,a:Q,b:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=(J+16)/116,K=Q/500+W,H=W-$/200,Y={mode:"xyz50",x:jJ(K)*z7.X,y:jJ(W)*z7.Y,z:jJ(H)*z7.Z};if(Z!==void 0)Y.alpha=Z;return Y},L6=TK;var SK=({x:J,y:Q,z:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=q6({r:J*3.1341359569958707-Q*1.6173863321612538-0.4906619460083532*$,g:J*-0.978795502912089+Q*1.916254567259524+0.03344273116131949*$,b:J*0.07195537988411677-Q*0.2289768264158322+1.405386058324125*$});if(Z!==void 0)W.alpha=Z;return W},KZ=SK;var jK=(J)=>KZ(L6(J)),HZ=jK;var vK=(J)=>{let{r:Q,g:$,b:Z,alpha:W}=G6(J),K={mode:"xyz50",x:0.436065742824811*Q+0.3851514688337912*$+0.14307845442264197*Z,y:0.22249319175623702*Q+0.7168870538238823*$+0.06061979053616537*Z,z:0.013923904500943465*Q+0.09708128566574634*$+0.7140993584005155*Z};if(W!==void 0)K.alpha=W;return K},YZ=vK;var vJ=(J)=>J>M6?Math.cbrt(J):(R6*J+16)/116,fK=({x:J,y:Q,z:$,alpha:Z})=>{if(J===void 0)J=0;if(Q===void 0)Q=0;if($===void 0)$=0;let W=vJ(J/z7.X),K=vJ(Q/z7.Y),H=vJ($/z7.Z),Y={mode:"lab",l:116*K-16,a:500*(W-K),b:200*(K-H)};if(Z!==void 0)Y.alpha=Z;return Y},V6=fK;var yK=(J)=>{let Q=V6(YZ(J));if(J.r===J.b&&J.b===J.g)Q.a=Q.b=0;return Q},XZ=yK;function bK(J,Q){if(!Q||Q[0]!=="lab")return;let $={mode:"lab"},[,Z,W,K,H]=Q;if(Z.type===k0.Hue||W.type===k0.Hue||K.type===k0.Hue)return;if(Z.type!==k0.None)$.l=Math.min(Math.max(0,Z.value),100);if(W.type!==k0.None)$.a=W.type===k0.Number?W.value:W.value*125/100;if(K.type!==k0.None)$.b=K.type===k0.Number?K.value:K.value*125/100;if(H.type!==k0.None)$.alpha=Math.min(1,Math.max(0,H.type===k0.Number?H.value:H.value/100));return $}var UZ=bK;var NZ=(J,Q,$)=>J+$*(Q-J);var hK=(J)=>{let Q=[];for(let $=0;$<J.length-1;$++){let Z=J[$],W=J[$+1];if(Z===void 0&&W===void 0)Q.push(void 0);else if(Z!==void 0&&W!==void 0)Q.push([Z,W]);else Q.push(Z!==void 0?[Z,Z]:[W,W])}return Q},EZ=(J)=>(Q)=>{let $=hK(Q);return(Z)=>{let W=Z*$.length,K=Z>=1?$.length-1:Math.max(Math.floor(W),0),H=$[K];return H===void 0?void 0:J(H[0],H[1],W-K)}};var Q7=EZ(NZ);var B6=(J)=>{let Q=!1,$=J.map((Z)=>{if(Z!==void 0)return Q=!0,Z;return 1});return Q?$:J};var xK={mode:"lab",toMode:{xyz50:L6,rgb:HZ},fromMode:{xyz50:V6,rgb:XZ},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-125,125],b:[-125,125]},parse:[UZ],serialize:(J)=>`lab(${J.l!==void 0?J.l:"none"} ${J.a!==void 0?J.a:"none"} ${J.b!==void 0?J.b:"none"}${J.alpha<1?` / ${J.alpha}`:""})`,interpolate:{l:Q7,a:Q7,b:Q7,alpha:{use:Q7,fixup:B6}}},GZ=xK;var gK={...GZ,mode:"oklab",toMode:{lrgb:N6,rgb:r$},fromMode:{lrgb:E6,rgb:a$},ranges:{l:[0,1],a:[-0.4,0.4],b:[-0.4,0.4]},parse:[WZ],serialize:(J)=>`oklab(${J.l!==void 0?J.l:"none"} ${J.a!==void 0?J.a:"none"} ${J.b!==void 0?J.b:"none"}${J.alpha<1?` / ${J.alpha}`:""})`},fJ=gK;var pK=(J,Q)=>{if(typeof J!=="number")return;if(Q===3)return{mode:"rgb",r:(J>>8&15|J>>4&240)/255,g:(J>>4&15|J&240)/255,b:(J&15|J<<4&240)/255};if(Q===4)return{mode:"rgb",r:(J>>12&15|J>>8&240)/255,g:(J>>8&15|J>>4&240)/255,b:(J>>4&15|J&240)/255,alpha:(J&15|J<<4&240)/255};if(Q===6)return{mode:"rgb",r:(J>>16&255)/255,g:(J>>8&255)/255,b:(J&255)/255};if(Q===8)return{mode:"rgb",r:(J>>24&255)/255,g:(J>>16&255)/255,b:(J>>8&255)/255,alpha:(J&255)/255}},k6=pK;var mK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qZ=mK;var lK=(J)=>{return k6(qZ[J.toLowerCase()],6)},FZ=lK;var dK=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,uK=(J)=>{let Q;return(Q=J.match(dK))?k6(parseInt(Q[1],16),Q[1].length):void 0},DZ=uK;var I6="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";var z6="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%";var yJ="(?:([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%|([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?))";var h8="\\s*,\\s*";var MG=new RegExp("^(?:([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%|([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)|none)$");var cK=new RegExp(`^rgba?\\(\\s*${I6}${h8}${I6}${h8}${I6}\\s*(?:,\\s*${yJ}\\s*)?\\)$`),nK=new RegExp(`^rgba?\\(\\s*${z6}${h8}${z6}${h8}${z6}\\s*(?:,\\s*${yJ}\\s*)?\\)$`),sK=(J)=>{let Q={mode:"rgb"},$;if($=J.match(cK)){if($[1]!==void 0)Q.r=$[1]/255;if($[2]!==void 0)Q.g=$[2]/255;if($[3]!==void 0)Q.b=$[3]/255}else if($=J.match(nK)){if($[1]!==void 0)Q.r=$[1]/100;if($[2]!==void 0)Q.g=$[2]/100;if($[3]!==void 0)Q.b=$[3]/100}else return;if($[4]!==void 0)Q.alpha=Math.max(0,Math.min(1,$[4]/100));else if($[5]!==void 0)Q.alpha=Math.max(0,Math.min(1,+$[5]));return Q},OZ=sK;function iK(J,Q){if(!Q||Q[0]!=="rgb"&&Q[0]!=="rgba")return;let $={mode:"rgb"},[,Z,W,K,H]=Q;if(Z.type===k0.Hue||W.type===k0.Hue||K.type===k0.Hue)return;if(Z.type!==k0.None)$.r=Z.type===k0.Number?Z.value/255:Z.value/100;if(W.type!==k0.None)$.g=W.type===k0.Number?W.value/255:W.value/100;if(K.type!==k0.None)$.b=K.type===k0.Number?K.value/255:K.value/100;if(H.type!==k0.None)$.alpha=Math.min(1,Math.max(0,H.type===k0.Number?H.value:H.value/100));return $}var RZ=iK;var oK=(J)=>J==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,MZ=oK;var aK={mode:"rgb",channels:["r","g","b","alpha"],parse:[RZ,DZ,OZ,FZ,MZ,"srgb"],serialize:"srgb",interpolate:{r:Q7,g:Q7,b:Q7,alpha:{use:Q7,fixup:B6}},gamut:!0,white:{r:1,g:1,b:1},black:{r:0,g:0,b:0}},bJ=aK;var mZ="187";var lZ=0,WQ=1,dZ=2;var d8=1,uZ=2,L8=3,V8=0,f9=1,y9=2,u7=0,u8=1,KQ=2,HQ=3,YQ=4,cZ=5;var B8=100,nZ=101,sZ=102,iZ=103,oZ=104,aZ=200,rZ=201,tZ=202,eZ=203,J5=204,Q5=205,$5=206,Z5=207,W5=208,K5=209,H5=210,Y5=211,X5=212,U5=213,N5=214,E5=0,G5=1,q5=2,XQ=3,F5=4,D5=5,O5=6,R5=7,M5=0,L5=1,V5=2,K7=0,UQ=1,NQ=2,EQ=3,GQ=4,qQ=5,FQ=6,DQ=7;var c8=301,k8=302,s6=303,i6=304,B5=1000,o6=1001,k5=1002,T7=1003,I5=1004;var n8=1005;var C9=1006,a6=1007;var S7=1008;var e9=1009,z5=1010,A5=1011,s8=1012,OQ=1013,j7=1014,R7=1015,H7=1016,RQ=1017,MQ=1018,c7=1020,C5=35902,P5=35899,w5=1021,_5=1022,M7=1023,I8=1026,v7=1027,T5=1028,LQ=1029,n7=1030,VQ=1031;var BQ=1033,r6=33776,t6=33777,e6=33778,JJ=33779,kQ=35840,IQ=35841,zQ=35842,AQ=35843,CQ=36196,PQ=37492,wQ=37496,_Q=37488,TQ=37489,QJ=37490,SQ=37491,jQ=37808,vQ=37809,fQ=37810,yQ=37811,bQ=37812,hQ=37813,xQ=37814,gQ=37815,pQ=37816,mQ=37817,lQ=37818,dQ=37819,uQ=37820,cQ=37821,nQ=36492,sQ=36494,iQ=36495,oQ=36283,aQ=36284,$J=36285,rQ=36286;var tQ=0,S5=1,s7="",j5="srgb",eQ="srgb-linear",J$="linear",J9="srgb";var v5=512,f5=513,y5=514,Q$=515,b5=516,h5=517,$$=518,Z$=519;var i8=35048;var W$="300 es",K$=2000;function rK(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function tK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function O8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function x5(){let J=O8("canvas");return J.style.display="block",J}var LZ={},R8=null;function H$(...J){let Q="THREE."+J.shift();if(R8)R8("log",Q,...J);else console.log(Q,...J)}function g5(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function S0(...J){J=g5(J);let Q="THREE."+J.shift();if(R8)R8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function j0(...J){J=g5(J);let Q="THREE."+J.shift();if(R8)R8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function l8(...J){let Q=J.join(" ");if(Q in LZ)return;LZ[Q]=!0,S0(...J)}function p5(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}var m5={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class L7{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var z9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hJ=Math.PI/180,n6=180/Math.PI;function o8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(z9[J&255]+z9[J>>8&255]+z9[J>>16&255]+z9[J>>24&255]+"-"+z9[Q&255]+z9[Q>>8&255]+"-"+z9[Q>>16&15|64]+z9[Q>>24&255]+"-"+z9[$&63|128]+z9[$>>8&255]+"-"+z9[$>>16&255]+z9[$>>24&255]+z9[Z&255]+z9[Z>>8&255]+z9[Z>>16&255]+z9[Z>>24&255]).toLowerCase()}function u0(J,Q,$){return Math.max(Q,Math.min($,J))}function eK(J,Q){return(J%Q+Q)%Q}function xJ(J,Q,$){return(1-$)*J+$*Q}function l5(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function Y$(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function JH(J,Q){if(Q.constructor===Float32Array)return J;let $=Y$(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/$,-1)}function QH(J,Q){if(Q.constructor===Float32Array)return J;let $=Y$(Q);if($===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*$)}class d0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=u0(this.x,J.x,Q.x),this.y=u0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=u0(this.x,J,Q),this.y=u0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(u0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(u0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*$-K*Z+J.x,this.y=W*Z+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class V7{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,K,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],G=$[Z+3],E=W[K+0],N=W[K+1],O=W[K+2],L=W[K+3];if(G!==L||Y!==E||X!==N||U!==O){let I=Y*E+X*N+U*O+G*L;if(I<0)E=-E,N=-N,O=-O,L=-L,I=-I;let q=1-H;if(I<0.9995){let F=Math.acos(I),z=Math.sin(F);q=Math.sin(q*F)/z,H=Math.sin(H*F)/z,Y=Y*q+E*H,X=X*q+N*H,U=U*q+O*H,G=G*q+L*H}else{Y=Y*q+E*H,X=X*q+N*H,U=U*q+O*H,G=G*q+L*H;let F=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=F,X*=F,U*=F,G*=F}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){let H=$[Z],Y=$[Z+1],X=$[Z+2],U=$[Z+3],G=W[K],E=W[K+1],N=W[K+2],O=W[K+3];return J[Q]=H*O+U*G+Y*N-X*E,J[Q+1]=Y*O+U*E+X*G-H*N,J[Q+2]=X*O+U*N+H*E-Y*G,J[Q+3]=U*O-H*G-Y*E-X*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(Z/2),G=H(W/2),E=Y($/2),N=Y(Z/2),O=Y(W/2);switch(K){case"XYZ":this._x=E*U*G+X*N*O,this._y=X*N*G-E*U*O,this._z=X*U*O+E*N*G,this._w=X*U*G-E*N*O;break;case"YXZ":this._x=E*U*G+X*N*O,this._y=X*N*G-E*U*O,this._z=X*U*O-E*N*G,this._w=X*U*G+E*N*O;break;case"ZXY":this._x=E*U*G-X*N*O,this._y=X*N*G+E*U*O,this._z=X*U*O+E*N*G,this._w=X*U*G-E*N*O;break;case"ZYX":this._x=E*U*G-X*N*O,this._y=X*N*G+E*U*O,this._z=X*U*O-E*N*G,this._w=X*U*G+E*N*O;break;case"YZX":this._x=E*U*G+X*N*O,this._y=X*N*G+E*U*O,this._z=X*U*O-E*N*G,this._w=X*U*G-E*N*O;break;case"XZY":this._x=E*U*G-X*N*O,this._y=X*N*G-E*U*O,this._z=X*U*O+E*N*G,this._w=X*U*G+E*N*O;break;default:S0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],E=$+H+G;if(E>0){let N=0.5/Math.sqrt(E+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(W-X)*N,this._z=(K-Z)*N}else if($>H&&$>G){let N=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/N,this._x=0.25*N,this._y=(Z+K)/N,this._z=(W+X)/N}else if(H>G){let N=2*Math.sqrt(1+H-$-G);this._w=(W-X)/N,this._x=(Z+K)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+G-$-H);this._w=(K-Z)/N,this._x=(W+X)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(u0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+Z*X-W*Y,this._y=Z*U+K*Y+W*H-$*X,this._z=W*U+K*X+$*Y-Z*H,this._w=K*U-$*H-Z*Y-W*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=this.dot(J);if(H<0)$=-$,Z=-Z,W=-W,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class p{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(VZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(VZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*Z-H*$),U=2*(H*Q-W*Z),G=2*(W*$-K*Q);return this.x=Q+Y*X+K*G-H*U,this.y=$+Y*U+H*X-W*G,this.z=Z+Y*G+W*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=u0(this.x,J.x,Q.x),this.y=u0(this.y,J.y,Q.y),this.z=u0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=u0(this.x,J,Q),this.y=u0(this.y,J,Q),this.z=u0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(u0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=Z*Y-W*H,this.y=W*K-$*Y,this.z=$*H-Z*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return gJ.copy(this).projectOnVector(J),this.sub(gJ)}reflect(J){return this.sub(gJ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(u0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var gJ=new p,VZ=new V7;class v0{static{this.prototype.isMatrix3=!0}constructor(J,Q,$,Z,W,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X)}set(J,Q,$,Z,W,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],G=$[7],E=$[2],N=$[5],O=$[8],L=Z[0],I=Z[3],q=Z[6],F=Z[1],z=Z[4],A=Z[7],B=Z[2],C=Z[5],w=Z[8];return W[0]=K*L+H*F+Y*B,W[3]=K*I+H*z+Y*C,W[6]=K*q+H*A+Y*w,W[1]=X*L+U*F+G*B,W[4]=X*I+U*z+G*C,W[7]=X*q+U*A+G*w,W[2]=E*L+N*F+O*B,W[5]=E*I+N*z+O*C,W[8]=E*q+N*A+O*w,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*W*U+$*H*Y+Z*W*X-Z*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*K-H*X,E=H*Y-U*W,N=X*W-K*Y,O=Q*G+$*E+Z*N;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/O;return J[0]=G*L,J[1]=(Z*X-U*$)*L,J[2]=(H*$-Z*K)*L,J[3]=E*L,J[4]=(U*Q-Z*Y)*L,J[5]=(Z*W-H*Q)*L,J[6]=N*L,J[7]=($*Y-X*Q)*L,J[8]=(K*Q-$*W)*L,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,K,H){let Y=Math.cos(W),X=Math.sin(W);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-Z*X,Z*Y,-Z*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return l8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pJ.makeScale(J,Q)),this}rotate(J){return l8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pJ.makeRotation(-J)),this}translate(J,Q){return l8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pJ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var pJ=new v0,BZ=new v0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),kZ=new v0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function $H(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=O7(W.r),W.g=O7(W.g),W.b=O7(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=D8(W.r),W.g=D8(W.g),W.b=D8(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[H].fromXYZ).multiply(this.spaces[K].toXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:BZ,fromXYZ:kZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:BZ,fromXYZ:kZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var l0=$H();function O7(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function D8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var J8;class X${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(J8===void 0)J8=O8("canvas");J8.width=J.width,J8.height=J.height;let Z=J8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=J8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=O8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=O7(W[K]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(O7(Q[$]/255)*255);else Q[$]=O7(Q[$]);return{data:Q,width:J.width,height:J.height}}else return S0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var ZH=0;class a8{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ZH++}),this.uuid=o8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++)if(Z[K].isDataTexture)W.push(mJ(Z[K].image));else W.push(mJ(Z[K]))}else W=mJ(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function mJ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return X$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return S0("Texture: Unable to serialize Texture."),{}}var WH=0,lJ=new p;class L9 extends L7{constructor(J=L9.DEFAULT_IMAGE,Q=L9.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,K=1008,H=1023,Y=1009,X=L9.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:WH++}),this.uuid=o8(),this.name="",this.source=new a8(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new d0(0,0),this.repeat=new d0(1,1),this.center=new d0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new v0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(lJ).x}get height(){return this.source.getSize(lJ).y}get depth(){return this.source.getSize(lJ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){S0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){S0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}L9.DEFAULT_IMAGE=null;L9.DEFAULT_MAPPING=300;L9.DEFAULT_ANISOTROPY=1;class H9{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W,this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W,this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W,this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],E=Y[1],N=Y[5],O=Y[9],L=Y[2],I=Y[6],q=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(G-L)<0.01&&Math.abs(O-I)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+L)<0.1&&Math.abs(O+I)<0.1&&Math.abs(X+N+q-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let z=(X+1)/2,A=(N+1)/2,B=(q+1)/2,C=(U+E)/4,w=(G+L)/4,D=(O+I)/4;if(z>A&&z>B)if(z<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(z),Z=C/$,W=w/$;else if(A>B)if(A<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(A),$=C/Z,W=D/Z;else if(B<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(B),$=w/W,Z=D/W;return this.set($,Z,W,Q),this}let F=Math.sqrt((I-O)*(I-O)+(G-L)*(G-L)+(E-U)*(E-U));if(Math.abs(F)<0.001)F=1;return this.x=(I-O)/F,this.y=(G-L)/F,this.z=(E-U)/F,this.w=Math.acos((X+N+q-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=u0(this.x,J.x,Q.x),this.y=u0(this.y,J.y,Q.y),this.z=u0(this.z,J.z,Q.z),this.w=u0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=u0(this.x,J,Q),this.y=u0(this.y,J,Q),this.z=u0(this.z,J,Q),this.w=u0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(u0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U$ extends L7{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new H9(0,0,J,Q),this.scissorTest=!1,this.viewport=new H9(0,0,J,Q),this.textures=[];let Z=$.count;for(let W=0;W<Z;W++)this.textures[W]=new L9({width:J,height:Q,depth:$.depth}),this.textures[W].isRenderTargetTexture=!0,this.textures[W].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new a8(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class d9 extends U${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class ZJ extends L9{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class N$ extends L9{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class K9{static{this.prototype.isMatrix4=!0}constructor(J,Q,$,Z,W,K,H,Y,X,U,G,E,N,O,L,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X,U,G,E,N,O,L,I)}set(J,Q,$,Z,W,K,H,Y,X,U,G,E,N,O,L,I){let q=this.elements;return q[0]=J,q[4]=Q,q[8]=$,q[12]=Z,q[1]=W,q[5]=K,q[9]=H,q[13]=Y,q[2]=X,q[6]=U,q[10]=G,q[14]=E,q[3]=N,q[7]=O,q[11]=L,q[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new K9().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/Q8.setFromMatrixColumn(J,0).length(),W=1/Q8.setFromMatrixColumn(J,1).length(),K=1/Q8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=K*U,N=K*G,O=H*U,L=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=N+O*X,Q[5]=E-L*X,Q[9]=-H*Y,Q[2]=L-E*X,Q[6]=O+N*X,Q[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,N=Y*G,O=X*U,L=X*G;Q[0]=E+L*H,Q[4]=O*H-N,Q[8]=K*X,Q[1]=K*G,Q[5]=K*U,Q[9]=-H,Q[2]=N*H-O,Q[6]=L+E*H,Q[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,N=Y*G,O=X*U,L=X*G;Q[0]=E-L*H,Q[4]=-K*G,Q[8]=O+N*H,Q[1]=N+O*H,Q[5]=K*U,Q[9]=L-E*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,N=K*G,O=H*U,L=H*G;Q[0]=Y*U,Q[4]=O*X-N,Q[8]=E*X+L,Q[1]=Y*G,Q[5]=L*X+E,Q[9]=N*X-O,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,N=K*X,O=H*Y,L=H*X;Q[0]=Y*U,Q[4]=L-E*G,Q[8]=O*G+N,Q[1]=G,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=N*G+O,Q[10]=E-L*G}else if(J.order==="XZY"){let E=K*Y,N=K*X,O=H*Y,L=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=E*G+L,Q[5]=K*U,Q[9]=N*G-O,Q[2]=O*G-N,Q[6]=H*U,Q[10]=L*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(KH,J,HH)}lookAt(J,Q,$){let Z=this.elements;if(h9.subVectors(J,Q),h9.lengthSq()===0)h9.z=1;if(h9.normalize(),A7.crossVectors($,h9),A7.lengthSq()===0){if(Math.abs($.z)===1)h9.x+=0.0001;else h9.z+=0.0001;h9.normalize(),A7.crossVectors($,h9)}return A7.normalize(),A6.crossVectors(h9,A7),Z[0]=A7.x,Z[4]=A6.x,Z[8]=h9.x,Z[1]=A7.y,Z[5]=A6.y,Z[9]=h9.y,Z[2]=A7.z,Z[6]=A6.z,Z[10]=h9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],G=$[5],E=$[9],N=$[13],O=$[2],L=$[6],I=$[10],q=$[14],F=$[3],z=$[7],A=$[11],B=$[15],C=Z[0],w=Z[4],D=Z[8],V=Z[12],j=Z[1],x=Z[5],S=Z[9],g=Z[13],a=Z[2],P=Z[6],c=Z[10],o=Z[14],b=Z[3],W0=Z[7],d=Z[11],r=Z[15];return W[0]=K*C+H*j+Y*a+X*b,W[4]=K*w+H*x+Y*P+X*W0,W[8]=K*D+H*S+Y*c+X*d,W[12]=K*V+H*g+Y*o+X*r,W[1]=U*C+G*j+E*a+N*b,W[5]=U*w+G*x+E*P+N*W0,W[9]=U*D+G*S+E*c+N*d,W[13]=U*V+G*g+E*o+N*r,W[2]=O*C+L*j+I*a+q*b,W[6]=O*w+L*x+I*P+q*W0,W[10]=O*D+L*S+I*c+q*d,W[14]=O*V+L*g+I*o+q*r,W[3]=F*C+z*j+A*a+B*b,W[7]=F*w+z*x+A*P+B*W0,W[11]=F*D+z*S+A*c+B*d,W[15]=F*V+z*g+A*o+B*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],E=J[10],N=J[14],O=J[3],L=J[7],I=J[11],q=J[15],F=Y*N-X*E,z=H*N-X*G,A=H*E-Y*G,B=K*N-X*U,C=K*E-Y*U,w=K*G-H*U;return Q*(L*F-I*z+q*A)-$*(O*F-I*B+q*C)+Z*(O*z-L*B+q*w)-W*(O*A-L*C+I*w)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(W*U-H*Y)+Z*(W*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],E=J[10],N=J[11],O=J[12],L=J[13],I=J[14],q=J[15],F=Q*H-$*K,z=Q*Y-Z*K,A=Q*X-W*K,B=$*Y-Z*H,C=$*X-W*H,w=Z*X-W*Y,D=U*L-G*O,V=U*I-E*O,j=U*q-N*O,x=G*I-E*L,S=G*q-N*L,g=E*q-N*I,a=F*g-z*S+A*x+B*j-C*V+w*D;if(a===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/a;return J[0]=(H*g-Y*S+X*x)*P,J[1]=(Z*S-$*g-W*x)*P,J[2]=(L*w-I*C+q*B)*P,J[3]=(E*C-G*w-N*B)*P,J[4]=(Y*j-K*g-X*V)*P,J[5]=(Q*g-Z*j+W*V)*P,J[6]=(I*A-O*w-q*z)*P,J[7]=(U*w-E*A+N*z)*P,J[8]=(K*S-H*j+X*D)*P,J[9]=($*j-Q*S-W*D)*P,J[10]=(O*C-L*A+q*F)*P,J[11]=(G*A-U*C-N*F)*P,J[12]=(H*V-K*x-Y*D)*P,J[13]=(Q*x-$*V+Z*D)*P,J[14]=(L*z-O*B-I*F)*P,J[15]=(U*B-G*z+E*F)*P,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,K=J.x,H=J.y,Y=J.z,X=W*K,U=W*H;return this.set(X*K+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*K,0,X*Y-Z*H,U*Y+Z*K,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,K){return this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=W+W,U=K+K,G=H+H,E=W*X,N=W*U,O=W*G,L=K*U,I=K*G,q=H*G,F=Y*X,z=Y*U,A=Y*G,B=$.x,C=$.y,w=$.z;return Z[0]=(1-(L+q))*B,Z[1]=(N+A)*B,Z[2]=(O-z)*B,Z[3]=0,Z[4]=(N-A)*C,Z[5]=(1-(E+q))*C,Z[6]=(I+F)*C,Z[7]=0,Z[8]=(O+z)*w,Z[9]=(I-F)*w,Z[10]=(1-(E+L))*w,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let K=Q8.set(Z[0],Z[1],Z[2]).length(),H=Q8.set(Z[4],Z[5],Z[6]).length(),Y=Q8.set(Z[8],Z[9],Z[10]).length();if(W<0)K=-K;o9.copy(this);let X=1/K,U=1/H,G=1/Y;return o9.elements[0]*=X,o9.elements[1]*=X,o9.elements[2]*=X,o9.elements[4]*=U,o9.elements[5]*=U,o9.elements[6]*=U,o9.elements[8]*=G,o9.elements[9]*=G,o9.elements[10]*=G,Q.setFromRotationMatrix(o9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2*W/(Q-J),G=2*W/($-Z),E=(Q+J)/(Q-J),N=($+Z)/($-Z),O,L;if(Y)O=W/(K-W),L=K*W/(K-W);else if(H===2000)O=-(K+W)/(K-W),L=-2*K*W/(K-W);else if(H===2001)O=-K/(K-W),L=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=G,X[9]=N,X[13]=0,X[2]=0,X[6]=0,X[10]=O,X[14]=L,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),G=2/($-Z),E=-(Q+J)/(Q-J),N=-($+Z)/($-Z),O,L;if(Y)O=1/(K-W),L=K/(K-W);else if(H===2000)O=-2/(K-W),L=-(K+W)/(K-W);else if(H===2001)O=-1/(K-W),L=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=G,X[9]=0,X[13]=N,X[2]=0,X[6]=0,X[10]=O,X[14]=L,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var Q8=new p,o9=new K9,KH=new p(0,0,0),HH=new p(1,1,1),A7=new p,A6=new p,h9=new p,IZ=new K9,zZ=new V7;class z8{constructor(J=0,Q=0,$=0,Z=z8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],K=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],G=Z[2],E=Z[6],N=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(u0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-K,W);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-u0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,N),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(u0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-u0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,N),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(u0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(H,N);break;case"XZY":if(this._z=Math.asin(-u0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,N),this._y=0;break;default:S0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return IZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(IZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return zZ.setFromEuler(this),this.setFromQuaternion(zZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}z8.DEFAULT_ORDER="XYZ";class WJ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var YH=0,AZ=new p,$8=new V7,E7=new K9,C6=new p,x8=new p,XH=new p,UH=new V7,CZ=new p(1,0,0),PZ=new p(0,1,0),wZ=new p(0,0,1),_Z={type:"added"},NH={type:"removed"},Z8={type:"childadded",child:null},dJ={type:"childremoved",child:null};class g9 extends L7{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:YH++}),this.uuid=o8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=g9.DEFAULT_UP.clone();let J=new p,Q=new z8,$=new V7,Z=new p(1,1,1);function W(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new K9},normalMatrix:{value:new v0}}),this.matrix=new K9,this.matrixWorld=new K9,this.matrixAutoUpdate=g9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=g9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new WJ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return $8.setFromAxisAngle(J,Q),this.quaternion.multiply($8),this}rotateOnWorldAxis(J,Q){return $8.setFromAxisAngle(J,Q),this.quaternion.premultiply($8),this}rotateX(J){return this.rotateOnAxis(CZ,J)}rotateY(J){return this.rotateOnAxis(PZ,J)}rotateZ(J){return this.rotateOnAxis(wZ,J)}translateOnAxis(J,Q){return AZ.copy(J).applyQuaternion(this.quaternion),this.position.add(AZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(CZ,J)}translateY(J){return this.translateOnAxis(PZ,J)}translateZ(J){return this.translateOnAxis(wZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(E7.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)C6.copy(J);else C6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),x8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)E7.lookAt(x8,C6,this.up);else E7.lookAt(C6,x8,this.up);if(this.quaternion.setFromRotationMatrix(E7),Z)E7.extractRotation(Z.matrixWorld),$8.setFromRotationMatrix(E7),this.quaternion.premultiply($8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return j0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(_Z),Z8.child=J,this.dispatchEvent(Z8),Z8.child=null;else j0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(NH),dJ.child=J,this.dispatchEvent(dJ),dJ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),E7.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),E7.multiply(J.parent.matrixWorld);return J.applyMatrix4(E7),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(_Z),Z8.child=J,this.dispatchEvent(Z8),Z8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(x8,J,XH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(x8,UH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*Z,W[13]+=$-W[1]*Q-W[5]*$-W[9]*Z,W[14]+=Z-W[2]*Q-W[6]*$-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let K=0,H=W.length;K<H;K++)W[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];W(J.shapes,G)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(W(J.materials,this.material[Y]));Z.material=H}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(W(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),G=K(J.shapes),E=K(J.skeletons),N=K(J.animations),O=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(E.length>0)$.skeletons=E;if(N.length>0)$.animations=N;if(O.length>0)$.nodes=O}return $.object=Z,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}g9.DEFAULT_UP=new p(0,1,0);g9.DEFAULT_MATRIX_AUTO_UPDATE=!0;g9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class F8 extends g9{constructor(){super();this.isGroup=!0,this.type="Group"}}var EH={type:"move"};class r8{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new F8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new F8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new p,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new p;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new F8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new p,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new p,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let L of J.hand.values()){let I=Q.getJointPose(L,$),q=this._getHandJoint(X,L);if(I!==null)q.matrix.fromArray(I.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=I.radius;q.visible=I!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],E=U.position.distanceTo(G.position),N=0.02,O=0.005;if(X.inputState.pinching&&E>N+O)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=N-O)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(EH)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new F8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var d5={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},C7={h:0,s:0,l:0},P6={h:0,s:0,l:0};function uJ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class s0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,l0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=l0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,l0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=l0.workingColorSpace){if(J=eK(J,1),Q=u0(Q,0,1),$=u0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-W;this.r=uJ(K,W,J+0.3333333333333333),this.g=uJ(K,W,J),this.b=uJ(K,W,J-0.3333333333333333)}return l0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)S0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(100,parseFloat(W[1]))/100,Math.min(100,parseFloat(W[2]))/100,Math.min(100,parseFloat(W[3]))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(H))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:S0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else S0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=d5[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else S0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=O7(J.r),this.g=O7(J.g),this.b=O7(J.b),this}copyLinearToSRGB(J){return this.r=D8(J.r),this.g=D8(J.g),this.b=D8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return l0.workingToColorSpace(A9.copy(this),J),Math.round(u0(A9.r*255,0,255))*65536+Math.round(u0(A9.g*255,0,255))*256+Math.round(u0(A9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=l0.workingColorSpace){l0.workingToColorSpace(A9.copy(this),Q);let{r:$,g:Z,b:W}=A9,K=Math.max($,Z,W),H=Math.min($,Z,W),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let G=K-H;switch(X=U<=0.5?G/(K+H):G/(2-K-H),K){case $:Y=(Z-W)/G+(Z<W?6:0);break;case Z:Y=(W-$)/G+2;break;case W:Y=($-Z)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=l0.workingColorSpace){return l0.workingToColorSpace(A9.copy(this),Q),J.r=A9.r,J.g=A9.g,J.b=A9.b,J}getStyle(J="srgb"){l0.workingToColorSpace(A9.copy(this),J);let{r:Q,g:$,b:Z}=A9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(C7),this.setHSL(C7.h+J,C7.s+Q,C7.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(C7),J.getHSL(P6);let $=xJ(C7.h,P6.h,Q),Z=xJ(C7.s,P6.s,Q),W=xJ(C7.l,P6.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var A9=new s0;s0.NAMES=d5;var a9=new p,G7=new p,cJ=new p,q7=new p,W8=new p,K8=new p,TZ=new p,nJ=new p,sJ=new p,iJ=new p,oJ=new H9,aJ=new H9,rJ=new H9;class l9{constructor(J=new p,Q=new p,$=new p){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),a9.subVectors(J,Q),Z.cross(a9);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){a9.subVectors(Z,Q),G7.subVectors($,Q),cJ.subVectors(J,Q);let K=a9.dot(a9),H=a9.dot(G7),Y=a9.dot(cJ),X=G7.dot(G7),U=G7.dot(cJ),G=K*X-H*H;if(G===0)return W.set(0,0,0),null;let E=1/G,N=(X*Y-H*U)*E,O=(K*U-H*Y)*E;return W.set(1-N-O,O,N)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,q7)===null)return!1;return q7.x>=0&&q7.y>=0&&q7.x+q7.y<=1}static getInterpolation(J,Q,$,Z,W,K,H,Y){if(this.getBarycoord(J,Q,$,Z,q7)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,q7.x),Y.addScaledVector(K,q7.y),Y.addScaledVector(H,q7.z),Y}static getInterpolatedAttribute(J,Q,$,Z,W,K){return oJ.setScalar(0),aJ.setScalar(0),rJ.setScalar(0),oJ.fromBufferAttribute(J,Q),aJ.fromBufferAttribute(J,$),rJ.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(oJ,W.x),K.addScaledVector(aJ,W.y),K.addScaledVector(rJ,W.z),K}static isFrontFacing(J,Q,$,Z){return a9.subVectors($,Q),G7.subVectors(J,Q),a9.cross(G7).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return a9.subVectors(this.c,this.b),G7.subVectors(this.a,this.b),a9.cross(G7).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return l9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return l9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return l9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return l9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return l9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,K,H;W8.subVectors(Z,$),K8.subVectors(W,$),nJ.subVectors(J,$);let Y=W8.dot(nJ),X=K8.dot(nJ);if(Y<=0&&X<=0)return Q.copy($);sJ.subVectors(J,Z);let U=W8.dot(sJ),G=K8.dot(sJ);if(U>=0&&G<=U)return Q.copy(Z);let E=Y*G-U*X;if(E<=0&&Y>=0&&U<=0&&Y-U>0)return K=Y/(Y-U),Q.copy($).addScaledVector(W8,K);iJ.subVectors(J,W);let N=W8.dot(iJ),O=K8.dot(iJ);if(O>=0&&N<=O)return Q.copy(W);let L=N*X-Y*O;if(L<=0&&X>=0&&O<=0)return H=X/(X-O),Q.copy($).addScaledVector(K8,H);let I=U*O-N*G;if(I<=0&&G-U>=0&&N-O>=0)return TZ.subVectors(W,Z),H=(G-U)/(G-U+(N-O)),Q.copy(Z).addScaledVector(TZ,H);let q=1/(I+L+E);return K=L*q,H=E*q,Q.copy($).addScaledVector(W8,K).addScaledVector(K8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class i7{constructor(J=new p(1/0,1/0,1/0),Q=new p(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(r9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(r9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=r9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,r9);else r9.fromBufferAttribute(W,K);r9.applyMatrix4(J.matrixWorld),this.expandByPoint(r9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();w6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();w6.copy($.boundingBox)}w6.applyMatrix4(J.matrixWorld),this.union(w6)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,r9),r9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(g8),_6.subVectors(this.max,g8),H8.subVectors(J.a,g8),Y8.subVectors(J.b,g8),X8.subVectors(J.c,g8),P7.subVectors(Y8,H8),w7.subVectors(X8,Y8),p7.subVectors(H8,X8);let Q=[0,-P7.z,P7.y,0,-w7.z,w7.y,0,-p7.z,p7.y,P7.z,0,-P7.x,w7.z,0,-w7.x,p7.z,0,-p7.x,-P7.y,P7.x,0,-w7.y,w7.x,0,-p7.y,p7.x,0];if(!tJ(Q,H8,Y8,X8,_6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!tJ(Q,H8,Y8,X8,_6))return!1;return T6.crossVectors(P7,w7),Q=[T6.x,T6.y,T6.z],tJ(Q,H8,Y8,X8,_6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,r9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(r9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return F7[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),F7[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),F7[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),F7[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),F7[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),F7[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),F7[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),F7[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(F7),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var F7=[new p,new p,new p,new p,new p,new p,new p,new p],r9=new p,w6=new i7,H8=new p,Y8=new p,X8=new p,P7=new p,w7=new p,p7=new p,g8=new p,_6=new p,T6=new p,m7=new p;function tJ(J,Q,$,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){m7.fromArray(J,K);let Y=W.x*Math.abs(m7.x)+W.y*Math.abs(m7.y)+W.z*Math.abs(m7.z),X=Q.dot(m7),U=$.dot(m7),G=Z.dot(m7);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var E9=new p,S6=new d0,GH=0;class W7 extends L7{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?Y$(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)S6.fromBufferAttribute(this,Q),S6.applyMatrix3(J),this.setXY(Q,S6.x,S6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)E9.fromBufferAttribute(this,Q),E9.applyMatrix3(J),this.setXYZ(Q,E9.x,E9.y,E9.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)E9.fromBufferAttribute(this,Q),E9.applyMatrix4(J),this.setXYZ(Q,E9.x,E9.y,E9.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)E9.fromBufferAttribute(this,Q),E9.applyNormalMatrix(J),this.setXYZ(Q,E9.x,E9.y,E9.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)E9.fromBufferAttribute(this,Q),E9.transformDirection(J),this.setXYZ(Q,E9.x,E9.y,E9.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=this._denormalize($);return $}setComponent(J,Q,$){if(this.normalized)$=this._normalize($);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),$=this._normalize($),Z=this._normalize(Z),W=this._normalize(W);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):JH(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):QH(J,this.array)}}class KJ extends W7{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class HJ extends W7{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class t9 extends W7{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var qH=new i7,p8=new p,eJ=new p;class t8{constructor(J=new p,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else qH.setFromPoints(J).getCenter($);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;p8.subVectors(J,this.center);let Q=p8.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(p8,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else eJ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(p8.copy(J.center).add(eJ)),this.expandByPoint(p8.copy(J.center).sub(eJ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var FH=0,p9=new K9,JQ=new g9,U8=new p,x9=new i7,m8=new i7,R9=new p;class B7 extends L7{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FH++}),this.uuid=o8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((rK(J))?HJ:KJ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new v0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return p9.makeRotationFromQuaternion(J),this.applyMatrix4(p9),this}rotateX(J){return p9.makeRotationX(J),this.applyMatrix4(p9),this}rotateY(J){return p9.makeRotationY(J),this.applyMatrix4(p9),this}rotateZ(J){return p9.makeRotationZ(J),this.applyMatrix4(p9),this}translate(J,Q,$){return p9.makeTranslation(J,Q,$),this.applyMatrix4(p9),this}scale(J,Q,$){return p9.makeScale(J,Q,$),this.applyMatrix4(p9),this}lookAt(J){return JQ.lookAt(J),JQ.updateMatrix(),this.applyMatrix4(JQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(U8).negate(),this.translate(U8.x,U8.y,U8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new t9($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)S0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new i7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new p(-1/0,-1/0,-1/0),new p(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(x9.setFromBufferAttribute(W),this.morphTargetsRelative)R9.addVectors(this.boundingBox.min,x9.min),this.boundingBox.expandByPoint(R9),R9.addVectors(this.boundingBox.max,x9.max),this.boundingBox.expandByPoint(R9);else this.boundingBox.expandByPoint(x9.min),this.boundingBox.expandByPoint(x9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))j0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new t8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new p,1/0);return}if(J){let $=this.boundingSphere.center;if(x9.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if(m8.setFromBufferAttribute(H),this.morphTargetsRelative)R9.addVectors(x9.min,m8.min),x9.expandByPoint(R9),R9.addVectors(x9.max,m8.max),x9.expandByPoint(R9);else x9.expandByPoint(m8.min),x9.expandByPoint(m8.max)}x9.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++)R9.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(R9));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(R9.fromBufferAttribute(H,X),Y)U8.fromBufferAttribute(J,X),R9.add(U8);Z=Math.max(Z,$.distanceToSquared(R9))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))j0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){j0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new W7(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[],X=new Uint8Array($.count);for(let V=0;V<$.count;V++)H[V]=new p,Y[V]=new p;let U=new p,G=new p,E=new p,N=new d0,O=new d0,L=new d0,I=new p,q=new p;function F(V,j,x){X[V]=X[j]=X[x]=1,U.fromBufferAttribute($,V),G.fromBufferAttribute($,j),E.fromBufferAttribute($,x),N.fromBufferAttribute(W,V),O.fromBufferAttribute(W,j),L.fromBufferAttribute(W,x),G.sub(U),E.sub(U),O.sub(N),L.sub(N);let S=1/(O.x*L.y-L.x*O.y);if(!isFinite(S))return;I.copy(G).multiplyScalar(L.y).addScaledVector(E,-O.y).multiplyScalar(S),q.copy(E).multiplyScalar(O.x).addScaledVector(G,-L.x).multiplyScalar(S),H[V].add(I),H[j].add(I),H[x].add(I),Y[V].add(q),Y[j].add(q),Y[x].add(q)}let z=this.groups;if(z.length===0)z=[{start:0,count:J.count}];for(let V=0,j=z.length;V<j;++V){let x=z[V],S=x.start,g=x.count;for(let a=S,P=S+g;a<P;a+=3)F(J.getX(a+0),J.getX(a+1),J.getX(a+2))}let A=new p,B=new p,C=new p,w=new p;function D(V){C.fromBufferAttribute(Z,V),w.copy(C);let j=H[V];A.copy(j),A.sub(C.multiplyScalar(C.dot(j))).normalize(),B.crossVectors(w,j);let S=B.dot(Y[V])<0?-1:1;K.setXYZW(V,A.x,A.y,A.z,S)}for(let V=0,j=$.count;V<j;++V)if(X[V])D(V);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new W7(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,N=$.count;E<N;E++)$.setXYZ(E,0,0,0);let Z=new p,W=new p,K=new p,H=new p,Y=new p,X=new p,U=new p,G=new p;if(J)for(let E=0,N=J.count;E<N;E+=3){let O=J.getX(E+0),L=J.getX(E+1),I=J.getX(E+2);Z.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,L),K.fromBufferAttribute(Q,I),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),H.fromBufferAttribute($,O),Y.fromBufferAttribute($,L),X.fromBufferAttribute($,I),H.add(U),Y.add(U),X.add(U),$.setXYZ(O,H.x,H.y,H.z),$.setXYZ(L,Y.x,Y.y,Y.z),$.setXYZ(I,X.x,X.y,X.z)}else for(let E=0,N=Q.count;E<N;E+=3)Z.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),K.fromBufferAttribute(Q,E+2),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)R9.fromBufferAttribute(J,Q),R9.normalize(),J.setXYZ(Q,R9.x,R9.y,R9.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,E=new X.constructor(Y.length*U),N=0,O=0;for(let L=0,I=Y.length;L<I;L++){if(H.isInterleavedBufferAttribute)N=Y[L]*H.data.stride+H.offset;else N=Y[L]*U;for(let q=0;q<U;q++)E[O++]=X[N++]}return new W7(E,U,G)}if(this.index===null)return S0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new B7,$=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,$);Q.setAttribute(H,X)}let W=this.morphAttributes;for(let H in W){let Y=[],X=W[H];for(let U=0,G=X.length;U<G;U++){let E=X[U],N=J(E,$);Y.push(N)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,E=X.length;G<E;G++){let N=X[G];U.push(N.toJSON(J.data))}if(U.length>0)Z[Y]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],G=W[X];for(let E=0,N=G.length;E<N;E++)U.push(G[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let G=K[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var QQ=new p,DH=new p,OH=new v0;class Z7{constructor(J=new p(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=QQ.subVectors($,Q).cross(DH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(QQ),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(Z,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||OH.getNormalMatrix(J),Z=this.coplanarPoint(QQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var RH=0;class A8 extends L7{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:RH++}),this.uuid=o8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new s0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){S0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){S0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)$.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)$.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)$.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)$.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((W)=>W.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if(Q){let W=Z(J.textures),K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new s0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new Z7().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new d0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new d0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var D7=new p,$Q=new p,j6=new p,v6=new p;class E${constructor(J=new p,Q=new p(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,D7)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=D7.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return D7.copy(this.origin).addScaledVector(this.direction,Q),D7.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){$Q.copy(J).add(Q).multiplyScalar(0.5),j6.copy(Q).sub(J).normalize(),v6.copy(this.origin).sub($Q);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(j6),H=v6.dot(this.direction),Y=-v6.dot(j6),X=v6.lengthSq(),U=Math.abs(1-K*K),G,E,N,O;if(U>0)if(G=K*Y-H,E=K*H-Y,O=W*U,G>=0)if(E>=-O)if(E<=O){let L=1/U;G*=L,E*=L,N=G*(G+K*E+2*H)+E*(K*G+E+2*Y)+X}else E=W,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;else E=-W,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;else if(E<=-O)G=Math.max(0,-(-K*W+H)),E=G>0?-W:Math.min(Math.max(-W,-Y),W),N=-G*G+E*(E+2*Y)+X;else if(E<=O)G=0,E=Math.min(Math.max(-W,-Y),W),N=E*(E+2*Y)+X;else G=Math.max(0,-(K*W+H)),E=G>0?W:Math.min(Math.max(-W,-Y),W),N=-G*G+E*(E+2*Y)+X;else E=K>0?-W:W,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy($Q).addScaledVector(j6,E);return N}intersectSphere(J,Q){if(J.radius<0)return null;D7.subVectors(J.center,this.origin);let $=D7.dot(this.direction),Z=D7.dot(D7)-$*$,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(X>=0)$=(J.min.x-E.x)*X,Z=(J.max.x-E.x)*X;else $=(J.max.x-E.x)*X,Z=(J.min.x-E.x)*X;if(U>=0)W=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(G>=0)H=(J.min.z-E.z)*G,Y=(J.max.z-E.z)*G;else H=(J.max.z-E.z)*G,Y=(J.min.z-E.z)*G;if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,D7)!==null}intersectTriangle(J,Q,$,Z,W){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,G=J.x-K.x,E=J.y-K.y,N=J.z-K.z,O=Q.x-K.x,L=Q.y-K.y,I=Q.z-K.z,q=$.x-K.x,F=$.y-K.y,z=$.z-K.z,A=Math.abs(Y),B=Math.abs(X),C=Math.abs(U),w,D,V,j,x,S,g,a,P,c,o,b;if(A>=B&&A>=C)if(V=Y,S=G,P=O,b=q,Y>=0)w=X,D=U,j=E,x=N,g=L,a=I,c=F,o=z;else w=U,D=X,j=N,x=E,g=I,a=L,c=z,o=F;else if(B>=C)if(V=X,S=E,P=L,b=F,X>=0)w=U,D=Y,j=N,x=G,g=I,a=O,c=z,o=q;else w=Y,D=U,j=G,x=N,g=O,a=I,c=q,o=z;else if(V=U,S=N,P=I,b=z,U>=0)w=Y,D=X,j=G,x=E,g=O,a=L,c=q,o=F;else w=X,D=Y,j=E,x=G,g=L,a=O,c=F,o=q;if(V===0)return null;let W0=w/V,d=D/V,r=1/V,J0=j-W0*S,L0=x-d*S,n=g-W0*P,$0=a-d*P,V0=c-W0*b,P0=o-d*b,w0=V0*$0-P0*n,B0=J0*P0-L0*V0,o0=n*L0-$0*J0;if(Z){if(w0<0||B0<0||o0<0)return null}else if((w0<0||B0<0||o0<0)&&(w0>0||B0>0||o0>0))return null;let g0=w0+B0+o0;if(g0===0)return null;let b0=r*(w0*S+B0*P+o0*b);if(g0>0?b0<0:b0>0)return null;return this.at(b0/g0,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class G$ extends A8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new s0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new z8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var SZ=new K9,l7=new E$,f6=new t8,jZ=new p,y6=new p,b6=new p,h6=new p,ZQ=new p,x6=new p,vZ=new p,g6=new p;class _9 extends g9{constructor(J=new B7,Q=new G$){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(W&&H){x6.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=H[Y],G=W[Y];if(U===0)continue;if(ZQ.fromBufferAttribute(G,J),K)x6.addScaledVector(ZQ,U);else x6.addScaledVector(ZQ.sub(Q),U)}Q.add(x6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(f6.copy($.boundingSphere),f6.applyMatrix4(W),l7.copy(J.ray).recast(J.near),f6.containsPoint(l7.origin)===!1){if(l7.intersectSphere(f6,jZ)===null)return;if(l7.origin.distanceToSquared(jZ)>(J.far-J.near)**2)return}if(SZ.copy(W).invert(),l7.copy(J.ray).applyMatrix4(SZ),$.boundingBox!==null){if(l7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,l7)}_computeIntersections(J,Q,$){let Z,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,N=W.drawRange;if(H!==null)if(Array.isArray(K))for(let O=0,L=E.length;O<L;O++){let I=E[O],q=K[I.materialIndex],F=Math.max(I.start,N.start),z=Math.min(H.count,Math.min(I.start+I.count,N.start+N.count));for(let A=F,B=z;A<B;A+=3){let C=H.getX(A),w=H.getX(A+1),D=H.getX(A+2);if(Z=p6(this,q,J,$,X,U,G,C,w,D),Z)Z.faceIndex=Math.floor(A/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let O=Math.max(0,N.start),L=Math.min(H.count,N.start+N.count);for(let I=O,q=L;I<q;I+=3){let F=H.getX(I),z=H.getX(I+1),A=H.getX(I+2);if(Z=p6(this,K,J,$,X,U,G,F,z,A),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(K))for(let O=0,L=E.length;O<L;O++){let I=E[O],q=K[I.materialIndex],F=Math.max(I.start,N.start),z=Math.min(Y.count,Math.min(I.start+I.count,N.start+N.count));for(let A=F,B=z;A<B;A+=3){let C=A,w=A+1,D=A+2;if(Z=p6(this,q,J,$,X,U,G,C,w,D),Z)Z.faceIndex=Math.floor(A/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let O=Math.max(0,N.start),L=Math.min(Y.count,N.start+N.count);for(let I=O,q=L;I<q;I+=3){let F=I,z=I+1,A=I+2;if(Z=p6(this,K,J,$,X,U,G,F,z,A),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}}}function MH(J,Q,$,Z,W,K,H,Y){let X;if(Q.side===1)X=Z.intersectTriangle(H,K,W,!0,Y);else X=Z.intersectTriangle(W,K,H,Q.side===0,Y);if(X===null)return null;g6.copy(Y),g6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(g6);if(U<$.near||U>$.far)return null;return{distance:U,point:g6.clone(),object:J}}function p6(J,Q,$,Z,W,K,H,Y,X,U){J.getVertexPosition(Y,y6),J.getVertexPosition(X,b6),J.getVertexPosition(U,h6);let G=MH(J,Q,$,Z,y6,b6,h6,vZ);if(G){let E=new p;if(l9.getBarycoord(vZ,y6,b6,h6,E),W)G.uv=l9.getInterpolatedAttribute(W,Y,X,U,E,new d0);if(K)G.uv1=l9.getInterpolatedAttribute(K,Y,X,U,E,new d0);if(H){if(G.normal=l9.getInterpolatedAttribute(H,Y,X,U,E,new p),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let N={a:Y,b:X,c:U,normal:new p,materialIndex:0};l9.getNormal(y6,b6,h6,N.normal),G.face=N,G.barycoord=E}return G}class e8 extends L9{constructor(J=null,Q=1,$=1,Z,W,K,H,Y,X=1003,U=1003,G,E){super(null,K,H,Y,X,U,Z,W,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class f7 extends W7{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var d7=new t8,LH=new d0(0.5,0.5),m6=new p;class M8{constructor(J=new Z7,Q=new Z7,$=new Z7,Z=new Z7,W=new Z7,K=new Z7){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,K=W[0],H=W[1],Y=W[2],X=W[3],U=W[4],G=W[5],E=W[6],N=W[7],O=W[8],L=W[9],I=W[10],q=W[11],F=W[12],z=W[13],A=W[14],B=W[15];if(Z[0].setComponents(X-K,N-U,q-O,B-F).normalize(),Z[1].setComponents(X+K,N+U,q+O,B+F).normalize(),Z[2].setComponents(X+H,N+G,q+L,B+z).normalize(),Z[3].setComponents(X-H,N-G,q-L,B-z).normalize(),$)Z[4].setComponents(Y,E,I,A).normalize(),Z[5].setComponents(X-Y,N-E,q-I,B-A).normalize();else if(Z[4].setComponents(X-Y,N-E,q-I,B-A).normalize(),Q===2000)Z[5].setComponents(X+Y,N+E,q+I,B+A).normalize();else if(Q===2001)Z[5].setComponents(Y,E,I,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();d7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();d7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(d7)}intersectsSprite(J){d7.center.set(0,0,0);let Q=LH.distanceTo(J.center);return d7.radius=0.7071067811865476+Q,d7.applyMatrix4(J.matrixWorld),this.intersectsSphere(d7)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(m6.x=Z.normal.x>0?J.max.x:J.min.x,m6.y=Z.normal.y>0?J.max.y:J.min.y,m6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(m6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var fZ=new K9;class YJ{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,$=this._frustums;for(let Z=0;Z<Q.length;Z++){let W=Q[Z];if(fZ.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$[Z]===void 0)$[Z]=new M8;$[Z].setFromProjectionMatrix(fZ,W.coordinateSystem,W.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,$=J._frustums;for(let Z=0;Z<J._count;Z++){if(Q[Z]===void 0)Q[Z]=new M8;Q[Z].copy($[Z])}return this._count=J._count,this}clone(){return new YJ().copy(this)}}class XJ extends L9{constructor(J=[],Q=301,$,Z,W,K,H,Y,X,U){super(J,Q,$,Z,W,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class y7 extends L9{constructor(J,Q,$=1014,Z,W,K,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,Z,W,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new a8(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class UJ extends y7{constructor(J,Q=1014,$=301,Z,W,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,K,H,Y,X);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class NJ extends L9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class C8 extends B7{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};let H=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let Y=[],X=[],U=[],G=[],E=0,N=0;O("z","y","x",-1,-1,$,Q,J,K,W,0),O("z","y","x",1,-1,$,Q,-J,K,W,1),O("x","z","y",1,1,J,$,Q,Z,K,2),O("x","z","y",1,-1,J,$,-Q,Z,K,3),O("x","y","z",1,-1,J,Q,$,Z,W,4),O("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(Y),this.setAttribute("position",new t9(X,3)),this.setAttribute("normal",new t9(U,3)),this.setAttribute("uv",new t9(G,2));function O(L,I,q,F,z,A,B,C,w,D,V){let j=A/w,x=B/D,S=A/2,g=B/2,a=C/2,P=w+1,c=D+1,o=0,b=0,W0=new p;for(let d=0;d<c;d++){let r=d*x-g;for(let J0=0;J0<P;J0++){let L0=J0*j-S;W0[L]=L0*F,W0[I]=r*z,W0[q]=a,X.push(W0.x,W0.y,W0.z),W0[L]=0,W0[I]=0,W0[q]=C>0?1:-1,U.push(W0.x,W0.y,W0.z),G.push(J0/w),G.push(1-d/D),o+=1}}for(let d=0;d<D;d++)for(let r=0;r<w;r++){let J0=E+r+P*d,L0=E+r+P*(d+1),n=E+(r+1)+P*(d+1),$0=E+(r+1)+P*d;Y.push(J0,L0,$0),Y.push(L0,n,$0),b+=6}H.addGroup(N,b,V),N+=b,E+=o}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new C8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class J7 extends B7{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(Z),X=H+1,U=Y+1,G=J/H,E=Q/Y,N=[],O=[],L=[],I=[];for(let q=0;q<U;q++){let F=q*E-K;for(let z=0;z<X;z++){let A=z*G-W;O.push(A,-F,0),L.push(0,0,1),I.push(z/H),I.push(1-q/Y)}}for(let q=0;q<Y;q++)for(let F=0;F<H;F++){let z=F+X*q,A=F+X*(q+1),B=F+1+X*(q+1),C=F+1+X*q;N.push(z,A,C),N.push(A,B,C)}this.setIndex(N),this.setAttribute("position",new t9(O,3)),this.setAttribute("normal",new t9(L,3)),this.setAttribute("uv",new t9(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new J7(J.width,J.height,J.widthSegments,J.heightSegments)}}function o7(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(yZ(W))if(W.isRenderTargetTexture)S0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))if(yZ(W[0])){let K=[];for(let H=0,Y=W.length;H<Y;H++)K[H]=W[H].clone();Q[$][Z]=K}else Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function P9(J){let Q={};for(let $=0;$<J.length;$++){let Z=o7(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function yZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function VH(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function q$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return l0.workingColorSpace}var u5={clone:o7,merge:P9},BH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kH=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class T9 extends A8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BH,this.fragmentShader=kH,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=o7(J.uniforms),this.uniformsGroups=VH(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[Z]={type:"m4",value:K.toArray()};else Q.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new s0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new d0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new p().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new H9().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new v0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new K9().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class F$ extends T9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class D$ extends A8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class O$ extends A8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function N8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function l6(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class a7{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let K;Q:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(W=Z,Z=Q[++$],J<Z)break J}K=Q.length;break Q}if(!(J>=W)){let H=Q[1];if(J<H)$=2,W=H;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=W,W=Q[--$-1],J>=W)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)Q[K]=$[W+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class R$ extends a7{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,K=J+1,H=Z[W],Y=Z[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-$;break;case 2402:W=Z.length-2,H=Q+Z[W]-Z[W+1];break;default:W=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+Z[1]-Z[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,N=this._weightNext,O=($-Q)/(Z-Q),L=O*O,I=L*O,q=-E*I+2*E*L-E*O,F=(1+E)*I+(-1.5-2*E)*L+(-0.5+E)*O+1,z=(-1-N)*I+(1.5+N)*L+0.5*O,A=N*I-N*L;for(let B=0;B!==H;++B)W[B]=q*K[U+B]+F*K[X+B]+z*K[Y+B]+A*K[G+B];return W}}class M$ extends a7{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),G=1-U;for(let E=0;E!==H;++E)W[E]=K[X+E]*G+K[Y+E]*U;return W}}class L$ extends a7{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class V$ extends a7{interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,G=this.outTangents;if(!U||!G){let O=($-Q)/(Z-Q),L=1-O;for(let I=0;I!==H;++I)W[I]=K[X+I]*L+K[Y+I]*O;return W}let E=H*2,N=J-1;for(let O=0;O!==H;++O){let L=K[X+O],I=K[Y+O],q=N*E+O*2,F=G[q],z=G[q+1],A=J*E+O*2,B=U[A],C=U[A+1],w=zH($,Q,F,B,Z);W[O]=c5(w,L,z,C,I)}return W}}function c5(J,Q,$,Z,W){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*Z+J*J*J*W}function IH(J,Q,$,Z,W){let K=1-J;return 3*K*K*($-Q)+6*K*J*(Z-$)+3*J*J*(W-Z)}function zH(J,Q,$,Z,W){let K=(J-Q)/(W-Q);for(let H=0;H<8;H++){let Y=c5(K,Q,$,Z,W)-J;if(Math.abs(Y)<0.0000000001)break;let X=IH(K,Q,$,Z,W);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class u9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=N8(Q,this.TimeBufferType),this.values=N8($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:N8(J.times,Array),values:N8(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(l6(J.settings))$.settings={inTangents:N8(J.settings.inTangents,Array),outTangents:N8(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new L$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new M$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new R$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new V$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return S0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J;if(l6(this.settings))bZ(this.settings.inTangents,J),bZ(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(l6(this.settings))hZ(this.settings.inTangents,J),hZ(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,K=Z-1;while(W!==Z&&$[W]<J)++W;while(K!==-1&&$[K]>Q)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=$.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)j0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)j0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){j0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){j0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(Z!==void 0){if(tK(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){j0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let G=H*$,E=G-$,N=G+$;for(let O=0;O!==$;++O){let L=Q[G+O];if(L!==Q[E+O]||L!==Q[N+O]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let G=H*$,E=K*$;for(let N=0;N!==$;++N)Q[E+N]=Q[G+N]}++K}}if(W>0){J[K]=J[W];for(let H=W*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,l6(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function bZ(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]+=Q}function hZ(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}u9.prototype.ValueTypeName="";u9.prototype.TimeBufferType=Float32Array;u9.prototype.ValueBufferType=Float32Array;u9.prototype.DefaultInterpolation=2301;class r7 extends u9{constructor(J,Q,$){super(J,Q,$)}}r7.prototype.ValueTypeName="bool";r7.prototype.ValueBufferType=Array;r7.prototype.DefaultInterpolation=2300;r7.prototype.InterpolantFactoryMethodLinear=void 0;r7.prototype.InterpolantFactoryMethodSmooth=void 0;class B$ extends u9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}B$.prototype.ValueTypeName="color";class k$ extends u9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}k$.prototype.ValueTypeName="number";class I$ extends a7{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q),X=J*H;for(let U=X+H;X!==U;X+=4)V7.slerpFlat(W,0,K,X-H,K,X,Y);return W}}class EJ extends u9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new I$(this.times,this.values,this.getValueSize(),J)}}EJ.prototype.ValueTypeName="quaternion";EJ.prototype.InterpolantFactoryMethodSmooth=void 0;class t7 extends u9{constructor(J,Q,$){super(J,Q,$)}}t7.prototype.ValueTypeName="string";t7.prototype.ValueBufferType=Array;t7.prototype.DefaultInterpolation=2300;t7.prototype.InterpolantFactoryMethodLinear=void 0;t7.prototype.InterpolantFactoryMethodSmooth=void 0;class z$ extends u9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}z$.prototype.ValueTypeName="vector";var c6={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(xZ(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(xZ(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function xZ(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class A${constructor(J,Q,$){let Z=this,W=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,H);if(K===H){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=X.length;G<E;G+=2){let N=X[G],O=X[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return O}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var n5=new A$;class J6{constructor(J){if(this.manager=J!==void 0?J:n5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}J6.DEFAULT_MATERIAL_NAME="__DEFAULT";var E8=new WeakMap;class C$ extends J6{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=c6.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0);else{let G=E8.get(K);if(G===void 0)G=[],E8.set(K,G);G.push({onLoad:Q,onError:Z})}return K}let H=O8("img");function Y(){if(U(),Q)Q(this);let G=E8.get(this)||[];for(let E=0;E<G.length;E++){let N=G[E];if(N.onLoad)N.onLoad(this)}E8.delete(this),W.manager.itemEnd(J)}function X(G){if(U(),Z)Z(G);c6.remove(`image:${J}`);let E=E8.get(this)||[];for(let N=0;N<E.length;N++){let O=E[N];if(O.onError)O.onError(G)}E8.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return c6.add(`image:${J}`,H),W.manager.itemStart(J),H.fetchPriority=this.priority,H.src=J,H}}class P8 extends J6{constructor(J){super(J)}load(J,Q,$,Z){let W=new L9,K=new C$(this.manager);return K.setPriority(this.priority),K.setCache(this.cache),K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(W.image=H,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}var d6=new p,u6=new V7,$7=new p;class GJ extends g9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new K9,this.projectionMatrix=new K9,this.projectionMatrixInverse=new K9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(d6,u6,$7),$7.x===1&&$7.y===1&&$7.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(d6,u6,$7.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(d6,u6,$7),$7.x===1&&$7.y===1&&$7.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(d6,u6,$7.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var _7=new p,gZ=new d0,pZ=new d0;class m9 extends GJ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=n6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(hJ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return n6*2*Math.atan(Math.tan(hJ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){_7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(_7.x,_7.y).multiplyScalar(-J/_7.z),_7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(_7.x,_7.y).multiplyScalar(-J/_7.z)}getViewSize(J,Q){return this.getViewBounds(J,gZ,pZ),Q.subVectors(pZ,gZ)}setViewOffset(J,Q,$,Z,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(hJ*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*Z/Y,Q-=K.offsetY*$/X,Z*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class k7 extends GJ{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,K=$+J,H=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,K=W+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class e7 extends B7{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var G8=-90,q8=1;class Q6 extends g9{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new m9(G8,q8,J,Q);Z.layers=this.layers,this.add(Z);let W=new m9(G8,q8,J,Q);W.layers=this.layers,this.add(W);let K=new m9(G8,q8,J,Q);K.layers=this.layers,this.add(K);let H=new m9(G8,q8,J,Q);H.layers=this.layers,this.add(H);let Y=new m9(G8,q8,J,Q);Y.layers=this.layers,this.add(Y);let X=new m9(G8,q8,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,X,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let L=$.texture.mipmapsAutoUpdate;$.texture.mipmapsAutoUpdate=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.mipmapsAutoUpdate=L,J.setRenderTarget($,5,Z),I&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,E,N),J.xr.enabled=O,$.texture.needsPMREMUpdate=!0}}class P$ extends m9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var w$="\\[\\]\\.:\\/",AH=new RegExp("["+w$+"]","g"),_$="[^"+w$+"]",CH="[^"+w$.replace("\\.","")+"]",PH=/((?:WC+[\/:])*)/.source.replace("WC",_$),wH=/(WCOD+)?/.source.replace("WCOD",CH),_H=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_$),TH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_$),SH=new RegExp("^"+PH+wH+_H+TH+"$"),jH=["material","materials","bones","map"];class s5{constructor(J,Q,$){let Z=$||a0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class a0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||a0.parseTrackName(Q),this.node=a0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new a0(J,Q,$);else return new a0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(AH,"")}static parseTrackName(J){let Q=SH.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(jH.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=a0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){S0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){j0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){j0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){j0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){j0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){j0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[Z];if(K===void 0){let X=Q.nodeName;j0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}a0.Composite=s5;a0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};a0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};a0.prototype.GetterByBindingType=[a0.prototype._getValue_direct,a0.prototype._getValue_array,a0.prototype._getValue_arrayElement,a0.prototype._getValue_toArray];a0.prototype.SetterByBindingTypeAndVersioning=[[a0.prototype._setValue_direct,a0.prototype._setValue_direct_setNeedsUpdate,a0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[a0.prototype._setValue_array,a0.prototype._setValue_array_setNeedsUpdate,a0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[a0.prototype._setValue_arrayElement,a0.prototype._setValue_arrayElement_setNeedsUpdate,a0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[a0.prototype._setValue_fromArray,a0.prototype._setValue_fromArray_setNeedsUpdate,a0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _M=new Float32Array(1);class i5{static{this.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=Z,this}}function T$(J,Q,$,Z){let W=vH(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function vH(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)S0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function OW(){let J=null,Q=!1,$=null,Z=null;function W(K,H){Z=J.requestAnimationFrame(W),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function fH(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:G}=Y,E=U.byteLength,N=J.createBuffer();J.bindBuffer(X,N),J.bufferData(X,U,G),Y.onUploadCallback();let O;if(U instanceof Float32Array)O=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)O=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)O=J.SHORT;else if(U instanceof Uint32Array)O=J.UNSIGNED_INT;else if(U instanceof Int32Array)O=J.INT;else if(U instanceof Int8Array)O=J.BYTE;else if(U instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:O,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function Z(Y,X,U){let{array:G,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,G);else{E.sort((O,L)=>O.start-L.start);let N=0;for(let O=1;O<E.length;O++){let L=E[N],I=E[O];if(I.start<=L.start+L.count+1)L.count=Math.max(L.count,I.start+I.count-L.start);else++N,E[N]=I}E.length=N+1;for(let O=0,L=E.length;O<L;O++){let I=E[O];J.bufferSubData(U,I.start*G.BYTES_PER_ELEMENT,G,I.start,I.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:K,update:H}}var yH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bH=`#ifdef USE_ALPHAHASH
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
#endif`,hH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mH=`#ifdef USE_AOMAP
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
#endif`,lH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dH=`#ifdef USE_BATCHING
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
#endif`,uH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sH=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iH=`#ifdef USE_IRIDESCENCE
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
#endif`,oH=`#ifdef USE_BUMPMAP
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
#endif`,aH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$Y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ZY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,WY=`#define PI 3.141592653589793
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
} // validated`,KY=`vec3 transformedNormal = objectNormal;
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
#endif`,HY=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YY=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XY=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UY=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NY="gl_FragColor = linearToOutputTexel( gl_FragColor );",EY=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GY=`#ifdef USE_ENVMAP
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
#endif`,qY=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,FY=`#ifdef USE_ENVMAP
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
#endif`,DY=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OY=`#ifdef USE_ENVMAP
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
#endif`,RY=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MY=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LY=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VY=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BY=`#ifdef USE_GRADIENTMAP
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
}`,kY=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IY=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AY=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,CY=`#ifdef USE_ENVMAP
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
#endif`,PY=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_Y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SY=`PhysicalMaterial material;
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
#endif`,jY=`uniform sampler2D dfgLUT;
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
}`,vY=`
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
#endif`,fY=`#if defined( RE_IndirectDiffuse )
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
#endif`,yY=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bY=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,hY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uY=`#if defined( USE_POINTS_UV )
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
#endif`,cY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iY=`#if defined( USE_MORPHCOLORS )
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
#endif`,oY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aY=`#ifdef USE_MORPHTARGETS
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
#endif`,rY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eY=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$X=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ZX=`#ifdef USE_NORMALMAP
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
#endif`,WX=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KX=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HX=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YX=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XX=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UX=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NX=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EX=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GX=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qX=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FX=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DX=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OX=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RX=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MX=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LX=`float getShadowMask() {
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
}`,VX=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BX=`#ifdef USE_SKINNING
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
#endif`,kX=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IX=`#ifdef USE_SKINNING
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
#endif`,zX=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AX=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CX=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PX=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wX=`#ifdef USE_TRANSMISSION
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
#endif`,_X=`#ifdef USE_TRANSMISSION
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
#endif`,TX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jX=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vX=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fX=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yX=`uniform sampler2D t2D;
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
}`,bX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hX=`uniform float backgroundBlurriness;
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
}`,xX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gX=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pX=`#include <common>
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
}`,mX=`#if DEPTH_PACKING == 3200
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
}`,lX=`#define DISTANCE
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
}`,dX=`#define DISTANCE
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
}`,uX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cX=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nX=`uniform float scale;
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
}`,sX=`uniform vec3 diffuse;
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
}`,iX=`#include <common>
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
}`,oX=`uniform vec3 diffuse;
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
}`,aX=`#define LAMBERT
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
}`,rX=`#define LAMBERT
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
}`,tX=`#define MATCAP
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
}`,eX=`#define MATCAP
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
}`,JU=`#define NORMAL
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
}`,QU=`#define NORMAL
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
}`,$U=`#define PHONG
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
}`,ZU=`#define PHONG
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
}`,WU=`#define STANDARD
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
}`,KU=`#define STANDARD
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
}`,HU=`#define TOON
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
}`,YU=`#define TOON
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
}`,XU=`uniform float size;
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
}`,UU=`uniform vec3 diffuse;
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
}`,NU=`#include <common>
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
}`,EU=`uniform vec3 color;
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
}`,GU=`uniform float rotation;
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
}`,qU=`uniform vec3 diffuse;
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
}`,x0={alphahash_fragment:yH,alphahash_pars_fragment:bH,alphamap_fragment:hH,alphamap_pars_fragment:xH,alphatest_fragment:gH,alphatest_pars_fragment:pH,aomap_fragment:mH,aomap_pars_fragment:lH,batching_pars_vertex:dH,batching_vertex:uH,begin_vertex:cH,beginnormal_vertex:nH,bsdfs:sH,iridescence_fragment:iH,bumpmap_pars_fragment:oH,clipping_planes_fragment:aH,clipping_planes_pars_fragment:rH,clipping_planes_pars_vertex:tH,clipping_planes_vertex:eH,color_fragment:JY,color_pars_fragment:QY,color_pars_vertex:$Y,color_vertex:ZY,common:WY,defaultnormal_vertex:KY,displacementmap_pars_vertex:HY,displacementmap_vertex:YY,emissivemap_fragment:XY,emissivemap_pars_fragment:UY,colorspace_fragment:NY,colorspace_pars_fragment:EY,envmap_fragment:GY,envmap_common_pars_fragment:qY,envmap_pars_fragment:FY,envmap_pars_vertex:DY,envmap_physical_pars_fragment:CY,envmap_vertex:OY,fog_vertex:RY,fog_pars_vertex:MY,fog_fragment:LY,fog_pars_fragment:VY,gradientmap_pars_fragment:BY,lightmap_pars_fragment:kY,lights_lambert_fragment:IY,lights_lambert_pars_fragment:zY,lights_pars_begin:AY,lights_toon_fragment:PY,lights_toon_pars_fragment:wY,lights_phong_fragment:_Y,lights_phong_pars_fragment:TY,lights_physical_fragment:SY,lights_physical_pars_fragment:jY,lights_fragment_begin:vY,lights_fragment_maps:fY,lights_fragment_end:yY,lightprobes_pars_fragment:bY,logdepthbuf_fragment:hY,logdepthbuf_pars_fragment:xY,logdepthbuf_pars_vertex:gY,logdepthbuf_vertex:pY,map_fragment:mY,map_pars_fragment:lY,map_particle_fragment:dY,map_particle_pars_fragment:uY,metalnessmap_fragment:cY,metalnessmap_pars_fragment:nY,morphinstance_vertex:sY,morphcolor_vertex:iY,morphnormal_vertex:oY,morphtarget_pars_vertex:aY,morphtarget_vertex:rY,normal_fragment_begin:tY,normal_fragment_maps:eY,normal_pars_fragment:JX,normal_pars_vertex:QX,normal_vertex:$X,normalmap_pars_fragment:ZX,clearcoat_normal_fragment_begin:WX,clearcoat_normal_fragment_maps:KX,clearcoat_pars_fragment:HX,iridescence_pars_fragment:YX,opaque_fragment:XX,packing:UX,premultiplied_alpha_fragment:NX,project_vertex:EX,dithering_fragment:GX,dithering_pars_fragment:qX,roughnessmap_fragment:FX,roughnessmap_pars_fragment:DX,shadowmap_pars_fragment:OX,shadowmap_pars_vertex:RX,shadowmap_vertex:MX,shadowmask_pars_fragment:LX,skinbase_vertex:VX,skinning_pars_vertex:BX,skinning_vertex:kX,skinnormal_vertex:IX,specularmap_fragment:zX,specularmap_pars_fragment:AX,tonemapping_fragment:CX,tonemapping_pars_fragment:PX,transmission_fragment:wX,transmission_pars_fragment:_X,uv_pars_fragment:TX,uv_pars_vertex:SX,uv_vertex:jX,worldpos_vertex:vX,background_vert:fX,background_frag:yX,backgroundCube_vert:bX,backgroundCube_frag:hX,cube_vert:xX,cube_frag:gX,depth_vert:pX,depth_frag:mX,distance_vert:lX,distance_frag:dX,equirect_vert:uX,equirect_frag:cX,linedashed_vert:nX,linedashed_frag:sX,meshbasic_vert:iX,meshbasic_frag:oX,meshlambert_vert:aX,meshlambert_frag:rX,meshmatcap_vert:tX,meshmatcap_frag:eX,meshnormal_vert:JU,meshnormal_frag:QU,meshphong_vert:$U,meshphong_frag:ZU,meshphysical_vert:WU,meshphysical_frag:KU,meshtoon_vert:HU,meshtoon_frag:YU,points_vert:XU,points_frag:UU,shadow_vert:NU,shadow_frag:EU,sprite_vert:GU,sprite_frag:qU},G0={common:{diffuse:{value:new s0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new v0}},envmap:{envMap:{value:null},envMapRotation:{value:new v0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new v0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new v0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new v0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new v0},normalScale:{value:new d0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new v0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new v0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new v0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new v0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new s0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new s0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0},uvTransform:{value:new v0}},sprite:{diffuse:{value:new s0(16777215)},opacity:{value:1},center:{value:new d0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new v0},alphaMap:{value:null},alphaMapTransform:{value:new v0},alphaTest:{value:0}}},X7={basic:{uniforms:P9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.fog]),vertexShader:x0.meshbasic_vert,fragmentShader:x0.meshbasic_frag},lambert:{uniforms:P9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new s0(0)},envMapIntensity:{value:1}}]),vertexShader:x0.meshlambert_vert,fragmentShader:x0.meshlambert_frag},phong:{uniforms:P9([G0.common,G0.specularmap,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,G0.lights,{emissive:{value:new s0(0)},specular:{value:new s0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:x0.meshphong_vert,fragmentShader:x0.meshphong_frag},standard:{uniforms:P9([G0.common,G0.envmap,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.roughnessmap,G0.metalnessmap,G0.fog,G0.lights,{emissive:{value:new s0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag},toon:{uniforms:P9([G0.common,G0.aomap,G0.lightmap,G0.emissivemap,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.gradientmap,G0.fog,G0.lights,{emissive:{value:new s0(0)}}]),vertexShader:x0.meshtoon_vert,fragmentShader:x0.meshtoon_frag},matcap:{uniforms:P9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,G0.fog,{matcap:{value:null}}]),vertexShader:x0.meshmatcap_vert,fragmentShader:x0.meshmatcap_frag},points:{uniforms:P9([G0.points,G0.fog]),vertexShader:x0.points_vert,fragmentShader:x0.points_frag},dashed:{uniforms:P9([G0.common,G0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:x0.linedashed_vert,fragmentShader:x0.linedashed_frag},depth:{uniforms:P9([G0.common,G0.displacementmap]),vertexShader:x0.depth_vert,fragmentShader:x0.depth_frag},normal:{uniforms:P9([G0.common,G0.bumpmap,G0.normalmap,G0.displacementmap,{opacity:{value:1}}]),vertexShader:x0.meshnormal_vert,fragmentShader:x0.meshnormal_frag},sprite:{uniforms:P9([G0.sprite,G0.fog]),vertexShader:x0.sprite_vert,fragmentShader:x0.sprite_frag},background:{uniforms:{uvTransform:{value:new v0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:x0.background_vert,fragmentShader:x0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new v0}},vertexShader:x0.backgroundCube_vert,fragmentShader:x0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:x0.cube_vert,fragmentShader:x0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:x0.equirect_vert,fragmentShader:x0.equirect_frag},distance:{uniforms:P9([G0.common,G0.displacementmap,{referencePosition:{value:new p},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:x0.distance_vert,fragmentShader:x0.distance_frag},shadow:{uniforms:P9([G0.lights,G0.fog,{color:{value:new s0(0)},opacity:{value:1}}]),vertexShader:x0.shadow_vert,fragmentShader:x0.shadow_frag}};X7.physical={uniforms:P9([X7.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new v0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new v0},clearcoatNormalScale:{value:new d0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new v0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new v0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new v0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new v0},sheen:{value:0},sheenColor:{value:new s0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new v0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new v0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new v0},transmissionSamplerSize:{value:new d0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new v0},attenuationDistance:{value:0},attenuationColor:{value:new s0(0)},specularColor:{value:new s0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new v0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new v0},anisotropyVector:{value:new d0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new v0}}]),vertexShader:x0.meshphysical_vert,fragmentShader:x0.meshphysical_frag};var qJ={r:0,b:0,g:0},FU=new K9,RW=new v0;RW.set(-1,0,0,0,1,0,0,0,1);function DU(J,Q,$,Z,W,K){let H=new s0(0),Y=W===!0?0:1,X,U,G=null,E=0,N=null;function O(z){let A=z.isScene===!0?z.background:null;if(A&&A.isTexture){let B=z.backgroundBlurriness>0;A=Q.get(A,B)}return A}function L(z){let A=!1,B=O(z);if(B===null)q(H,Y);else if(B&&B.isColor)q(B,1),A=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(C==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||A)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(z,A){let B=O(A);if(B&&B.isCubeTexture){if(U===void 0)U=new _9(new C8(1,1,1),new T9({name:"BackgroundCubeMaterial",uniforms:o7(X7.backgroundCube.uniforms),vertexShader:X7.backgroundCube.vertexShader,fragmentShader:X7.backgroundCube.fragmentShader,side:f9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(C,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(FU.makeRotationFromEuler(A.backgroundRotation)).transpose(),B.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(RW);if(U.material.toneMapped=l0.getTransfer(B.colorSpace)!==J9,G!==B||E!==B.version||N!==J.toneMapping)U.material.needsUpdate=!0,G=B,E=B.version,N=J.toneMapping;U.layers.enableAll(),z.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(X===void 0)X=new _9(new J7(2,2),new T9({name:"BackgroundMaterial",uniforms:o7(X7.background.uniforms),vertexShader:X7.background.vertexShader,fragmentShader:X7.background.fragmentShader,side:V8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=B,X.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,X.material.toneMapped=l0.getTransfer(B.colorSpace)!==J9,B.matrixAutoUpdate===!0)B.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(B.matrix),G!==B||E!==B.version||N!==J.toneMapping)X.material.needsUpdate=!0,G=B,E=B.version,N=J.toneMapping;X.layers.enableAll(),z.unshift(X,X.geometry,X.material,0,0,null)}}function q(z,A){z.getRGB(qJ,q$(J)),$.buffers.color.setClear(qJ.r,qJ.g,qJ.b,A,K)}function F(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(z,A=1){H.set(z),Y=A,q(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(z){Y=z,q(H,Y)},render:L,addToRenderList:I,dispose:F}}function OU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=N(null),K=W,H=!1;function Y(S,g,a,P,c){let o=!1,b=E(S,P,a,g);if(K!==b)K=b,U(K.object);if(o=O(S,P,a,c),o)L(S,P,a,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(o||H){if(H=!1,B(S,g,a,P),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function X(){return J.createVertexArray()}function U(S){return J.bindVertexArray(S)}function G(S){return J.deleteVertexArray(S)}function E(S,g,a,P){let c=P.wireframe===!0,o=Z[g.id];if(o===void 0)o={},Z[g.id]=o;let b=S.isInstancedMesh===!0?S.id:0,W0=o[b];if(W0===void 0)W0={},o[b]=W0;let d=W0[a.id];if(d===void 0)d={},W0[a.id]=d;let r=d[c];if(r===void 0)r=N(X()),d[c]=r;return r}function N(S){let g=[],a=[],P=[];for(let c=0;c<$;c++)g[c]=0,a[c]=0,P[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:a,attributeDivisors:P,object:S,attributes:{},index:null}}function O(S,g,a,P){let c=K.attributes,o=g.attributes,b=0,W0=a.getAttributes();for(let d in W0)if(W0[d].location>=0){let J0=c[d],L0=o[d];if(L0===void 0){if(d==="instanceMatrix"&&S.instanceMatrix)L0=S.instanceMatrix;if(d==="instanceColor"&&S.instanceColor)L0=S.instanceColor}if(J0===void 0)return!0;if(J0.attribute!==L0)return!0;if(L0&&J0.data!==L0.data)return!0;b++}if(K.attributesNum!==b)return!0;if(K.index!==P)return!0;return!1}function L(S,g,a,P){let c={},o=g.attributes,b=0,W0=a.getAttributes();for(let d in W0)if(W0[d].location>=0){let J0=o[d];if(J0===void 0){if(d==="instanceMatrix"&&S.instanceMatrix)J0=S.instanceMatrix;if(d==="instanceColor"&&S.instanceColor)J0=S.instanceColor}let L0={};if(L0.attribute=J0,J0&&J0.data)L0.data=J0.data;c[d]=L0,b++}K.attributes=c,K.attributesNum=b,K.index=P}function I(){let S=K.newAttributes;for(let g=0,a=S.length;g<a;g++)S[g]=0}function q(S){F(S,0)}function F(S,g){let{newAttributes:a,enabledAttributes:P,attributeDivisors:c}=K;if(a[S]=1,P[S]===0)J.enableVertexAttribArray(S),P[S]=1;if(c[S]!==g)J.vertexAttribDivisor(S,g),c[S]=g}function z(){let{newAttributes:S,enabledAttributes:g}=K;for(let a=0,P=g.length;a<P;a++)if(g[a]!==S[a])J.disableVertexAttribArray(a),g[a]=0}function A(S,g,a,P,c,o,b){if(b===!0)J.vertexAttribIPointer(S,g,a,c,o);else J.vertexAttribPointer(S,g,a,P,c,o)}function B(S,g,a,P){I();let c=P.attributes,o=a.getAttributes(),b=g.defaultAttributeValues;for(let W0 in o){let d=o[W0];if(d.location>=0){let r=c[W0];if(r===void 0){if(W0==="instanceMatrix"&&S.instanceMatrix)r=S.instanceMatrix;if(W0==="instanceColor"&&S.instanceColor)r=S.instanceColor}if(r!==void 0){let{normalized:J0,itemSize:L0}=r,n=Q.get(r);if(n===void 0)continue;let{buffer:$0,type:V0,bytesPerElement:P0}=n,w0=V0===J.INT||V0===J.UNSIGNED_INT||r.gpuType===OQ;if(r.isInterleavedBufferAttribute){let B0=r.data,o0=B0.isInterleavedBuffer===!0?B0.stride:B0.itemSize,g0=r.offset;if(B0.isInstancedInterleavedBuffer||B0.isInstancedBufferAttribute){for(let b0=0;b0<d.locationSize;b0++)F(d.location+b0,B0.meshPerAttribute);if(S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=B0.meshPerAttribute*B0.count}else for(let b0=0;b0<d.locationSize;b0++)q(d.location+b0);J.bindBuffer(J.ARRAY_BUFFER,$0);for(let b0=0;b0<d.locationSize;b0++)A(d.location+b0,L0/d.locationSize,V0,J0,o0*P0,(g0+L0/d.locationSize*b0)*P0,w0)}else{if(r.isInstancedBufferAttribute){for(let B0=0;B0<d.locationSize;B0++)F(d.location+B0,r.meshPerAttribute);if(S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=r.meshPerAttribute*r.count}else for(let B0=0;B0<d.locationSize;B0++)q(d.location+B0);J.bindBuffer(J.ARRAY_BUFFER,$0);for(let B0=0;B0<d.locationSize;B0++)A(d.location+B0,L0/d.locationSize,V0,J0,L0*P0,L0/d.locationSize*B0*P0,w0)}}else if(b!==void 0){let J0=b[W0];if(J0!==void 0)switch(J0.length){case 2:J.vertexAttrib2fv(d.location,J0);break;case 3:J.vertexAttrib3fv(d.location,J0);break;case 4:J.vertexAttrib4fv(d.location,J0);break;default:J.vertexAttrib1fv(d.location,J0)}}}}z()}function C(){j();for(let S in Z){let g=Z[S];for(let a in g){let P=g[a];for(let c in P){let o=P[c];for(let b in o)G(o[b].object),delete o[b];delete P[c]}}delete Z[S]}}function w(S){if(Z[S.id]===void 0)return;let g=Z[S.id];for(let a in g){let P=g[a];for(let c in P){let o=P[c];for(let b in o)G(o[b].object),delete o[b];delete P[c]}}delete Z[S.id]}function D(S){for(let g in Z){let a=Z[g];for(let P in a){let c=a[P];if(c[S.id]===void 0)continue;let o=c[S.id];for(let b in o)G(o[b].object),delete o[b];delete c[S.id]}}}function V(S){for(let g in Z){let a=Z[g],P=S.isInstancedMesh===!0?S.id:0,c=a[P];if(c===void 0)continue;for(let o in c){let b=c[o];for(let W0 in b)G(b[W0].object),delete b[W0];delete c[o]}if(delete a[P],Object.keys(a).length===0)delete Z[g]}}function j(){if(x(),H=!0,K===W)return;K=W,U(K.object)}function x(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:j,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:V,releaseStatesOfProgram:D,initAttributes:I,enableAttribute:q,disableUnusedAttributes:z}}function RU(J,Q,$){let Z;function W(X){Z=X}function K(X,U){J.drawArrays(Z,X,U),$.update(U,Z,1)}function H(X,U,G){if(G===0)return;J.drawArraysInstanced(Z,X,U,G),$.update(U,Z,G)}function Y(X,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,G);let N=0;for(let O=0;O<G;O++)N+=U[O];$.update(N,Z,1)}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function MU(J,Q,$,Z){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let D=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(D){if(D!==M7&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(D){let V=D===H7&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(D!==e9&&D!==R7&&!V&&Z.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(D){if(D==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";D="mediump"}if(D==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)S0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),N=$.logarithmicDepthBuffer===!0&&E===!1;if($.reversedDepthBuffer===!0&&E===!1)S0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if($.logarithmicDepthBuffer===!0&&E===!0)S0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let O=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),z=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),C=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:N,reversedDepthBuffer:E,maxTextures:O,maxVertexTextures:L,maxTextureSize:I,maxCubemapSize:q,maxAttributes:F,maxVertexUniforms:z,maxVaryings:A,maxFragmentUniforms:B,maxSamples:C,samples:w}}function LU(J){let Q=this,$=null,Z=0,W=!1,K=!1,H=new Z7,Y=new v0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,N){let O=E.length!==0||N||Z!==0||W;return W=N,Z=E.length,O},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,N){$=G(E,N,0)},this.setState=function(E,N,O){let{clippingPlanes:L,clipIntersection:I,clipShadows:q}=E,F=J.get(E);if(!W||L===null||L.length===0||K&&!q)if(K)G(null);else U();else{let z=K?0:Z,A=z*4,B=F.clippingState||null;X.value=B,B=G(L,N,A,O);for(let C=0;C!==A;++C)B[C]=$[C];F.clippingState=B,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=z}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(E,N,O,L){let I=E!==null?E.length:0,q=null;if(I!==0){if(q=X.value,L!==!0||q===null){let F=O+I*4,z=N.matrixWorldInverse;if(Y.getNormalMatrix(z),q===null||q.length<F)q=new Float32Array(F);for(let A=0,B=O;A!==I;++A,B+=4)H.copy(E[A]).applyMatrix4(z,Y),H.normal.toArray(q,B),q[B+3]=H.constant}X.value=q,X.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,q}}class OJ extends d9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new XJ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new C8(5,5,5),W=new T9({name:"CubemapFromEquirect",uniforms:o7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:f9,blending:u7});W.uniforms.tEquirect.value=Q;let K=new _9(Z,W),H=Q.minFilter;if(Q.minFilter===S7)Q.minFilter=C9;return new Q6(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,Z);J.setRenderTarget(W)}}var o5=256,VU=3,BU=20,MW=256,LW=16,kU=3,IU=new p,zU=new s0;class DJ{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Q6(1,10,null),this._boxMesh=new _9(new C8(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:K=256,position:H=IU}=W,Y=this._renderer;this._setSize(K);let X=this._allocateTarget(),U=this._getSourceTarget(!0);if(Q>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:G,autoClearColor:E,autoClearDepth:N,autoClearStencil:O}=Y,L=J.background;if(Y.autoClear=!0,Y.autoClearColor=!0,Y.autoClearDepth=!0,Y.autoClearStencil=!0,L===null)J.background=Y.getClearColor(zU);let I=new Q6($,Z,U);if(I.position.copy(H),I.update(Y,J),Y.autoClear=G,Y.autoClearColor=E,Y.autoClearDepth=N,Y.autoClearStencil=O,J.background=L,Q>0)U.texture.mipmapsAutoUpdate=!0,this._blur(X,Q);return this._applyPMREM(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=t5(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=r5(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(o5,l5(J))}_fromTexture(J,Q){if(J.mapping===c8||J.mapping===k8)this._setSize(J.image.length===0?o5:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let $=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM($),$}_allocateTarget(){let J=this._cubeSize,Q=a5(J,!1,!1),$=Math.log2(J)-VU;for(let Z=0;Z<=$;Z++)Q.texture.mipmaps.push({width:J>>Z,height:J>>Z});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,$=this._sourceTarget;if($===null||$.width!==Q||J&&$.depthBuffer===!1){if($!==null)$.dispose();this._sourceTarget=a5(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,$){let Z=this._boxMesh,W=this._cubeCamera;Z.material=$,W.renderTarget=J,W.activeMipmapLevel=Q;let K=J.width>>Q;J.viewport.set(0,0,K,K),W.update(this._renderer,Z),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===c8||J.mapping===k8){if(this._cubemapMaterial===null)this._cubemapMaterial=t5();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=r5();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=AU(),this._integrationMaterial=CU();let Q=this._cubeSize,$=J.texture.mipmaps.length-1,Z=this._ggxMaterial.uniforms;Z.envMap.value=this._sourceTarget.texture;let W=this._integrationMaterial.uniforms;W.envMap.value=this._sourceTarget.texture,W.sourceLod.value=Math.log2(Q/LW);for(let K=0;K<=$;K++){let H=DJ.lodToRoughness(K,$);if(K>$-kU)W.roughness.value=H,this._renderCube(J,K,this._integrationMaterial);else{let Y=H>0?Math.log2(Q)+0.5*Math.log2(6/(MW*Math.pow(H,4)))+0.5:0;Z.roughness.value=H,Z.lodBias.value=Y,this._renderCube(J,K,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=PU();let $=this._blurMaterial,Z=$.uniforms,W=this._sourceTarget;Z.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,Z.envMap.value=W.texture,this._renderCube(J,0,$),Z.envMap.value=J.texture,this._renderCube(W,0,$)}}function a5(J,Q,$){return new OJ(J,{minFilter:S7,generateMipmaps:Q,type:H7,colorSpace:eQ,depthBuffer:$})}function K6(J,Q,$){return new T9({name:J,uniforms:Q,vertexShader:x0.cube_vert,fragmentShader:$,side:f9,blending:u7,depthTest:!1,depthWrite:!1})}function AU(){return K6("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${MW}u

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
	`)}function CU(){return K6("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:LW}},`

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
	`)}function PU(){return K6("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${BU}
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
	`)}function r5(){return K6("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function t5(){return K6("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wU(J){let Q=new WeakMap,$=new WeakMap,Z=null;function W(N,O=!1){if(N===null||N===void 0)return null;if(O)return H(N);return K(N)}function K(N){if(N&&N.isTexture){let O=N.mapping;if(O===s6||O===i6)if(Q.has(N)){let L=Q.get(N).texture;return Y(L,N.mapping)}else{let L=N.image;if(L&&L.height>0){let I=new OJ(L.height);return I.fromEquirectangularTexture(J,N),Q.set(N,I),N.addEventListener("dispose",U),Y(I.texture,N.mapping)}else return null}}return N}function H(N){if(N&&N.isTexture&&N.isPMREMTexture!==!0){let O=N.mapping,L=O===s6||O===i6,I=O===c8||O===k8;if(L||I){let q=$.get(N),F=q!==void 0?q.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==F){if(Z===null)Z=new DJ(J);return q=L?Z.fromEquirectangular(N,q):Z.fromCubemap(N,q),q.texture.pmremVersion=N.pmremVersion,$.set(N,q),q.texture}else if(q!==void 0)return q.texture;else{let z=N.image;if(L&&z&&z.height>0||I&&z&&X(z)){if(Z===null)Z=new DJ(J);return q=L?Z.fromEquirectangular(N):Z.fromCubemap(N),q.texture.pmremVersion=N.pmremVersion,$.set(N,q),N.addEventListener("dispose",G),q.texture}else return null}}}return N}function Y(N,O){if(O===s6)N.mapping=c8;else if(O===i6)N.mapping=k8;return N}function X(N){let O=0,L=6;for(let I=0;I<L;I++)if(N[I]!==void 0)O++;return O===L}function U(N){let O=N.target;O.removeEventListener("dispose",U);let L=Q.get(O);if(L!==void 0)Q.delete(O),L.dispose()}function G(N){let O=N.target;O.removeEventListener("dispose",G);let L=$.get(O);if(L!==void 0)$.delete(O),L.dispose()}function E(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:E}}function _U(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)l8("WebGLRenderer: "+Z+" extension not supported.");return W}}}function TU(J,Q,$,Z){let W={},K=new WeakMap,H=new FinalizationRegistry((L)=>delete W[L]);function Y(L){X(L.target)}function X(L){if(L.index!==null)Q.remove(L.index);for(let q in L.attributes)Q.remove(L.attributes[q]);L.removeEventListener("dispose",Y),delete W[L.id],H.unregister(L);let I=K.get(L);if(I)Q.remove(I),K.delete(L);if(Z.releaseStatesOfGeometry(L),L.isInstancedBufferGeometry===!0)delete L._maxInstanceCount;$.memory.geometries--}function U(L,I){if(W[I.id]!==void 0)return I;return I.addEventListener("dispose",Y),W[I.id]=new WeakRef(I),H.register(I,I.id,I),$.memory.geometries++,I}function G(L){let I=L.attributes;for(let q in I)Q.update(I[q],J.ARRAY_BUFFER)}function E(L){let I=L.index,q=L.attributes.position,F=0;if(q===void 0)return;let z=I!==null?I.array.length:q.array.length/3-1,B=new(q.count>=65535?HJ:KJ)(Math.ceil(z/3)*6,1),C=B.array;if(I!==null){let D=I.array;F=I.version;for(let V=0,j=0;V<z;V+=3){let x=D[V+0],S=D[V+1],g=D[V+2];C[j++]=x,C[j++]=S,C[j++]=S,C[j++]=g,C[j++]=g,C[j++]=x}}else{F=q.version;for(let D=0,V=0;D<z;D+=3){let j=D+0,x=D+1,S=D+2;C[V++]=j,C[V++]=x,C[V++]=x,C[V++]=S,C[V++]=S,C[V++]=j}}B.version=F;let w=K.get(L);if(w)Q.remove(w);K.set(L,B)}function N(L){let I=K.get(L);if(I){let q=L.index;if(q!==null){if(I.version<q.version)E(L)}}else E(L);return K.get(L)}function O(){for(let L in W){let I=W[L].deref();if(I!==void 0)X(I)}}return{get:U,update:G,getWireframeAttribute:N,dispose:O}}function SU(J,Q,$){let Z;function W(E){Z=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,N){J.drawElements(Z,N,K,E*H),$.update(N,Z,1)}function U(E,N,O){if(O===0)return;J.drawElementsInstanced(Z,N,K,E*H,O),$.update(N,Z,O)}function G(E,N,O){if(O===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,K,E,0,O);let I=0;for(let q=0;q<O;q++)I+=N[q];$.update(I,Z,1)}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function jU(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:j0("WebGLInfo: Unknown draw mode:",H);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function vU(J,Q,$){let Z=new WeakMap,W=new H9;function K(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=G!==void 0?G.length:0,N=Z.get(Y);if(N===void 0||N.count!==E){let j=function(){D.dispose(),Z.delete(Y),Y.removeEventListener("dispose",j)};if(N!==void 0)N.texture.dispose();let O=Y.morphAttributes.position!==void 0,L=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,q=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],z=Y.morphAttributes.color||[],A=0;if(O===!0)A=1;if(L===!0)A=2;if(I===!0)A=3;let B=Y.attributes.position.count*A,C=1;if(B>Q.maxTextureSize)C=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let w=new Float32Array(B*C*4*E),D=new ZJ(w,B,C,E);D.type=R7,D.needsUpdate=!0;let V=A*4;for(let x=0;x<E;x++){let S=q[x],g=F[x],a=z[x],P=B*C*4*x;for(let c=0;c<S.count;c++){let o=c*V;if(O===!0)W.fromBufferAttribute(S,c),w[P+o+0]=W.x,w[P+o+1]=W.y,w[P+o+2]=W.z,w[P+o+3]=0;if(L===!0)W.fromBufferAttribute(g,c),w[P+o+4]=W.x,w[P+o+5]=W.y,w[P+o+6]=W.z,w[P+o+7]=0;if(I===!0)W.fromBufferAttribute(a,c),w[P+o+8]=W.x,w[P+o+9]=W.y,w[P+o+10]=W.z,w[P+o+11]=a.itemSize===4?W.w:1}}N={count:E,texture:D,size:new d0(B,C)},Z.set(Y,N),Y.addEventListener("dispose",j)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let O=0;for(let I=0;I<U.length;I++)O+=U[I];let L=Y.morphTargetsRelative?1:1-O;X.getUniforms().setValue(J,"morphTargetBaseInfluence",L),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:K}}function fU(J,Q,$,Z,W){let K=new WeakMap;function H(U){let G=W.render.frame,E=U.geometry,N=Q.get(U,E);if(K.get(N)!==G)Q.update(N),K.set(N,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,G)}}if(U.isSkinnedMesh){let O=U.skeleton;if(K.get(O)!==G)O.update(),K.set(O,G)}return N}function Y(){K=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:H,dispose:Y}}var yU={[UQ]:"LINEAR_TONE_MAPPING",[NQ]:"REINHARD_TONE_MAPPING",[EQ]:"CINEON_TONE_MAPPING",[GQ]:"ACES_FILMIC_TONE_MAPPING",[FQ]:"AGX_TONE_MAPPING",[DQ]:"NEUTRAL_TONE_MAPPING",[qQ]:"CUSTOM_TONE_MAPPING"};function bU(J,Q,$,Z,W,K){let H=new d9(Q,$,{type:J,depthBuffer:W,stencilBuffer:K,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=null,G=new B7;G.setAttribute("position",new t9([-1,3,0,-1,-1,0,3,-1,0],3)),G.setAttribute("uv",new t9([0,2,0,0,2,0],2));let E=new F$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),N=new _9(G,E),O=new k7(-1,1,1,-1,0,1),L=null,I=null,q=!1,F,z=null,A=[],B=!1;this.setSize=function(C,w){if(H.setSize(C,w),Y!==null)Y.setSize(C,w);if(X!==null)X.setSize(C,w);for(let D=0;D<A.length;D++){let V=A[D];if(V.setSize)V.setSize(C,w)}},this.setEffects=function(C){A=C,B=A.length>0&&A[0].isRenderPass===!0;let{width:w,height:D}=H;if(A.length>0&&Y===null)Y=new d9(w,D,{type:H7,depthBuffer:!1,stencilBuffer:!1}),X=new d9(w,D,{type:H7,depthBuffer:!1,stencilBuffer:!1});let V=W===!0&&A.some((j)=>j.needsDepthTexture===!0);if(V!==(H.depthTexture!==null)){if(V===!0&&U===null){if(U=new y7(w,D),K===!0)U.format=v7,U.type=c7}H.dispose(),H.depthTexture=V?U:null,H.resolveDepthBuffer=V,H.storeMultisampledDepthBuffer=V}for(let j=0;j<A.length;j++){let x=A[j];if(x.setSize)x.setSize(w,D);if(V&&x.needsDepthTexture===!0&&x.setDepthTexture)x.setDepthTexture(U)}},this.begin=function(C,w){if(q)return!1;if(C.toneMapping===K7&&A.length===0)return!1;if(z=w,w!==null){let{width:D,height:V}=w;if(H.width!==D||H.height!==V)this.setSize(D,V)}if(B===!1)C.setRenderTarget(H);return F=C.toneMapping,C.toneMapping=K7,!0},this.hasRenderPass=function(){return B},this.end=function(C,w){C.toneMapping=F,q=!0;let D=H,V=Y;for(let j=0;j<A.length;j++){let x=A[j];if(x.enabled===!1)continue;if(x.render(C,V,D,w),x.needsSwap!==!1)D=V,V=V===Y?X:Y}if(L!==C.outputColorSpace||I!==C.toneMapping){if(L=C.outputColorSpace,I=C.toneMapping,E.defines={},l0.getTransfer(L)===J9)E.defines.SRGB_TRANSFER="";let j=yU[I];if(j)E.defines[j]="";E.needsUpdate=!0}E.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(z),C.render(N,O),z=null,q=!1},this.isCompositing=function(){return q},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();G.dispose(),E.dispose()}}var VW=new L9,BW=new y7(1,1),kW=new UJ(1),IW=new ZJ,zW=new N$,AW=new XJ,e5=[],JW=[],QW=new Float32Array(16),$W=new Float32Array(9),ZW=new Float32Array(4);function w8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,K=e5[W];if(K===void 0)K=new Float32Array(W),e5[W]=K;if(Q!==0){Z.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function G9(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function q9(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function RJ(J,Q){let $=JW[Q];if($===void 0)$=new Int32Array(Q),JW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function hU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function xU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(G9($,Q))return;J.uniform2fv(this.addr,Q),q9($,Q)}}function gU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(G9($,Q))return;J.uniform3fv(this.addr,Q),q9($,Q)}}function pU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(G9($,Q))return;J.uniform4fv(this.addr,Q),q9($,Q)}}function mU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(G9($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),q9($,Q)}else{if(G9($,Z))return;ZW.set(Z),J.uniformMatrix2fv(this.addr,!1,ZW),q9($,Z)}}function lU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(G9($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),q9($,Q)}else{if(G9($,Z))return;$W.set(Z),J.uniformMatrix3fv(this.addr,!1,$W),q9($,Z)}}function dU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(G9($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),q9($,Q)}else{if(G9($,Z))return;QW.set(Z),J.uniformMatrix4fv(this.addr,!1,QW),q9($,Z)}}function uU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function cU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(G9($,Q))return;J.uniform2iv(this.addr,Q),q9($,Q)}}function nU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(G9($,Q))return;J.uniform3iv(this.addr,Q),q9($,Q)}}function sU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(G9($,Q))return;J.uniform4iv(this.addr,Q),q9($,Q)}}function iU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function oU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(G9($,Q))return;J.uniform2uiv(this.addr,Q),q9($,Q)}}function aU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(G9($,Q))return;J.uniform3uiv(this.addr,Q),q9($,Q)}}function rU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(G9($,Q))return;J.uniform4uiv(this.addr,Q),q9($,Q)}}function MJ(J){if(J.version===0)J.compareFunction=Z$,J.needsUpdate=!0;return J}function tU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)K=MJ(BW);else K=VW;$.setTexture2D(Q||K,W)}function eU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||zW,W)}function J1(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_CUBE_SHADOW)K=MJ(kW);else K=AW;$.setTextureCube(Q||K,W)}function Q1(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||IW,W)}function $1(J){switch(J){case 5126:return hU;case 35664:return xU;case 35665:return gU;case 35666:return pU;case 35674:return mU;case 35675:return lU;case 35676:return dU;case 5124:case 35670:return uU;case 35667:case 35671:return cU;case 35668:case 35672:return nU;case 35669:case 35673:return sU;case 5125:return iU;case 36294:return oU;case 36295:return aU;case 36296:return rU;case 35678:case 36198:case 36298:case 36306:case 35682:return tU;case 35679:case 36299:case 36307:return eU;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return Q1}}function Z1(J,Q){J.uniform1fv(this.addr,Q)}function W1(J,Q){let $=w8(Q,this.size,2);J.uniform2fv(this.addr,$)}function K1(J,Q){let $=w8(Q,this.size,3);J.uniform3fv(this.addr,$)}function H1(J,Q){let $=w8(Q,this.size,4);J.uniform4fv(this.addr,$)}function Y1(J,Q){let $=w8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function X1(J,Q){let $=w8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function U1(J,Q){let $=w8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function N1(J,Q){J.uniform1iv(this.addr,Q)}function E1(J,Q){J.uniform2iv(this.addr,Q)}function G1(J,Q){J.uniform3iv(this.addr,Q)}function q1(J,Q){J.uniform4iv(this.addr,Q)}function F1(J,Q){J.uniform1uiv(this.addr,Q)}function D1(J,Q){J.uniform2uiv(this.addr,Q)}function O1(J,Q){J.uniform3uiv(this.addr,Q)}function R1(J,Q){J.uniform4uiv(this.addr,Q)}function M1(J,Q,$){let Z=this.cache,W=Q.length,K=RJ($,W);if(!G9(Z,K))J.uniform1iv(this.addr,K),q9(Z,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=MJ(BW);else H=VW;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function L1(J,Q,$){let Z=this.cache,W=Q.length,K=RJ($,W);if(!G9(Z,K))J.uniform1iv(this.addr,K),q9(Z,K);for(let H=0;H!==W;++H)$.setTexture3D(Q[H]||zW,K[H])}function V1(J,Q,$){let Z=this.cache,W=Q.length,K=RJ($,W);if(!G9(Z,K))J.uniform1iv(this.addr,K),q9(Z,K);let H;if(this.type===J.SAMPLER_CUBE_SHADOW)H=MJ(kW);else H=AW;for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||H,K[Y])}function B1(J,Q,$){let Z=this.cache,W=Q.length,K=RJ($,W);if(!G9(Z,K))J.uniform1iv(this.addr,K),q9(Z,K);for(let H=0;H!==W;++H)$.setTexture2DArray(Q[H]||IW,K[H])}function k1(J){switch(J){case 5126:return Z1;case 35664:return W1;case 35665:return K1;case 35666:return H1;case 35674:return Y1;case 35675:return X1;case 35676:return U1;case 5124:case 35670:return N1;case 35667:case 35671:return E1;case 35668:case 35672:return G1;case 35669:case 35673:return q1;case 5125:return F1;case 36294:return D1;case 36295:return O1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return B1}}class CW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=$1(Q.type)}}class PW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=k1(Q.type)}}class wW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let H=Z[W];H.setValue(J,Q[H.id],$)}}}var S$=/(\w+)(\])?(\[|\.)?/g;function WW(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function I1(J,Q,$){let Z=J.name,W=Z.length;S$.lastIndex=0;while(!0){let K=S$.exec(Z),H=S$.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===W){WW($,U===void 0?new CW(Y,J,Q):new PW(Y,J,Q));break}else{let E=$.map[Y];if(E===void 0)E=new wW(Y),WW($,E);$=E}}}class W6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);I1(H,Y,this)}let Z=[],W=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(K);else W.push(K);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in Q)$.push(K)}return $}}function KW(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var z1=37297,A1=0;function C1(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=W;H<K;H++){let Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var HW=new v0;function P1(J){l0._getMatrix(HW,l0.workingColorSpace,J);let Q=`mat3( ${HW.elements.map(($)=>$.toFixed(4))} )`;switch(l0.getTransfer(J)){case J$:return[Q,"LinearTransferOETF"];case J9:return[Q,"sRGBTransferOETF"];default:return S0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function YW(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(Z&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+C1(J.getShaderSource(Q),Y)}else return K}function w1(J,Q){let $=P1(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( ${$[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _1={[UQ]:"Linear",[NQ]:"Reinhard",[EQ]:"Cineon",[GQ]:"ACESFilmic",[FQ]:"AgX",[DQ]:"Neutral",[qQ]:"Custom"};function T1(J,Q){let $=_1[Q];if($===void 0)return S0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var FJ=new p;function S1(){l0.getLuminanceCoefficients(FJ);let J=FJ.x.toFixed(4),Q=FJ.y.toFixed(4),$=FJ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function j1(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Z6).join(`
`)}function v1(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function f1(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib(Q,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function Z6(J){return J!==""}function XW(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function UW(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function v$(J){return J.replace(y1,b1)}function b1(J,Q){let $=x0[Q];if($===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return v$($)}var h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function NW(J){return J.replace(h1,x1)}function x1(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function EW(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var g1={[d8]:"SHADOWMAP_TYPE_PCF",[L8]:"SHADOWMAP_TYPE_VSM"};function p1(J){return g1[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m1={[k8]:"ENVMAP_MODE_REFRACTION"};function l1(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return m1[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d1={[M5]:"ENVMAP_BLENDING_MULTIPLY",[L5]:"ENVMAP_BLENDING_MIX",[V5]:"ENVMAP_BLENDING_ADD"};function u1(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return d1[J.combine]||"ENVMAP_BLENDING_NONE"}function c1(J,Q,$,Z){let W=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=p1($),U=$.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",G=l1($),E=u1($),N=j1($),O=v1(K),L=W.createProgram(),I,q,F=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(I=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(Z6).join(`
`),I.length>0)I+=`
`;if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(Z6).join(`
`),q.length>0)q+=`
`}else I=[EW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+$.diffuseRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Z6).join(`
`),q=[EW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+E:"",$.envMapPMREM?"#define ENVMAP_MAX_LOD "+$.envMapMaxLod+".0":"",$.envMapPMREM?"#define ENVMAP_SIZE "+$.envMapSize+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",$.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==K7?"#define TONE_MAPPING":"",$.toneMapping!==K7?x0.tonemapping_pars_fragment:"",$.toneMapping!==K7?T1("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",x0.colorspace_pars_fragment,w1("linearToOutputTexel",$.outputColorSpace),S1(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(Z6).join(`
`);if(H=v$(H),H=XW(H,$),H=UW(H,$),Y=v$(Y),Y=XW(Y,$),Y=UW(Y,$),H=NW(H),Y=NW(Y),$.isRawShaderMaterial!==!0)F=`#version 300 es
`,I=[N,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+I,q=["#define varying in",$.glslVersion===W$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===W$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let z=F+I+H,A=F+q+Y,B=KW(W,W.VERTEX_SHADER,z),C=KW(W,W.FRAGMENT_SHADER,A);if(W.attachShader(L,B),W.attachShader(L,C),$.index0AttributeName!==void 0)W.bindAttribLocation(L,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(L,0,"position");W.linkProgram(L);function w(x){if(J.debug.checkShaderErrors){let S=W.getProgramInfoLog(L)||"",g=W.getShaderInfoLog(B)||"",a=W.getShaderInfoLog(C)||"",P=S.trim(),c=g.trim(),o=a.trim(),b=!0,W0=!0;if(W.getProgramParameter(L,W.LINK_STATUS)===!1)if(b=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,L,B,C);else{let d=YW(W,B,"vertex"),r=YW(W,C,"fragment");j0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(L,W.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+P+`
`+d+`
`+r)}else if(P!=="")S0("WebGLProgram: Program Info Log:",P);else if(c===""||o==="")W0=!1;if(W0)x.diagnostics={runnable:b,programLog:P,vertexShader:{log:c,prefix:I},fragmentShader:{log:o,prefix:q}}}W.deleteShader(B),W.deleteShader(C),D=new W6(W,L),V=f1(W,L)}let D;this.getUniforms=function(){if(D===void 0)w(this);return D};let V;this.getAttributes=function(){if(V===void 0)w(this);return V};let j=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(j===!1)j=W.getProgramParameter(L,z1);return j},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(L),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=A1++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=B,this.fragmentShader=C,this}var n1=0;class _W{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new TW(J),Q.set(J,$);return $}}class TW{constructor(J){this.id=n1++,this.code=J,this.usedTimes=0}}function s1(J){return J===n7||J===QJ||J===$J}function i1(J,Q,$,Z,W,K){let H=new WJ,Y=new _W,X=new Set,U=[],G=new Map,E=Z.logarithmicDepthBuffer,N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(D){if(X.add(D),D===0)return"uv";return`uv${D}`}function L(D,V,j,x,S,g){let a=x.fog,P=S.geometry,c=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?x.environment:null,o=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,b=Q.get(D.envMap||c,o),W0=N[D.type],d=Z.precision;if(D.precision!==null){if(d=Z.getMaxPrecision(D.precision),d!==D.precision)S0("WebGLProgram.getParameters:",D.precision,"not supported, using",d,"instead.")}let r=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J0=r!==void 0?r.length:0,L0=0;if(P.morphAttributes.position!==void 0)L0=1;if(P.morphAttributes.normal!==void 0)L0=2;if(P.morphAttributes.color!==void 0)L0=3;let n,$0,V0,P0;if(W0){let F0=X7[W0];n=F0.vertexShader,$0=F0.fragmentShader}else{n=D.vertexShader,$0=D.fragmentShader;let F0=Y.getVertexShaderStage(D),t0=Y.getFragmentShaderStage(D);Y.update(D,F0,t0),V0=F0.id,P0=t0.id}let w0=J.getRenderTarget(),B0=J.state.buffers.depth.getReversed(),o0=S.isInstancedMesh===!0,g0=S.isBatchedMesh===!0,b0=!!D.map,Z9=!!D.matcap,c0=!!b,Y9=c0&&b.isPMREMTexture===!0,X9=!!D.aoMap,S9=!!D.lightMap,b9=!!D.bumpMap&&D.wireframe===!1,U9=!!D.normalMap,V9=!!D.displacementMap,j9=!!D.emissiveMap,v9=!!D.metalnessMap,c9=!!D.roughnessMap,v=D.anisotropy>0,n9=D.clearcoat>0,r0=D.diffuseRoughness>0,F9=D.dispersion>0,E0=D.retroreflectivity>0,Q9=D.iridescence>0,_0=D.sheen>0,f0=D.transmission>0,B9=v&&!!D.anisotropyMap,k=n9&&!!D.clearcoatMap,R=n9&&!!D.clearcoatNormalMap,f=n9&&!!D.clearcoatRoughnessMap,e=r0&&!!D.diffuseRoughnessMap,t=Q9&&!!D.iridescenceMap,K0=Q9&&!!D.iridescenceThicknessMap,X0=_0&&!!D.sheenColorMap,l=_0&&!!D.sheenRoughnessMap,i=!!D.specularMap,H0=!!D.specularColorMap,_=!!D.specularIntensityMap,s=f0&&!!D.transmissionMap,u=f0&&!!D.thicknessMap,Q0=!!D.gradientMap,Z0=!!D.alphaMap,N0=D.alphaTest>0,A0=!!D.alphaHash,z0=!!D.extensions,q0=K7;if(D.toneMapped){if(w0===null||w0.isXRRenderTarget===!0)q0=J.toneMapping}let C0=Y9?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,h0={shaderID:W0,shaderType:D.type,shaderName:D.name,vertexShader:n,fragmentShader:$0,defines:D.defines,customVertexShaderID:V0,customFragmentShaderID:P0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:d,batching:g0,batchingColor:g0&&S._colorsTexture!==null,instancing:o0,instancingColor:o0&&S.instanceColor!==null,instancingMorph:o0&&S.morphTexture!==null,outputColorSpace:w0===null?J.outputColorSpace:w0.isXRRenderTarget===!0?w0.texture.colorSpace:l0.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:b0,matcap:Z9,envMap:c0,envMapMode:c0&&b.mapping,envMapPMREM:Y9,envMapMaxLod:Y9?C0.length-1:null,envMapSize:Y9?C0[0].width:null,aoMap:X9,lightMap:S9,bumpMap:b9,normalMap:U9,displacementMap:V9,emissiveMap:j9,normalMapObjectSpace:U9&&D.normalMapType===S5,normalMapTangentSpace:U9&&D.normalMapType===tQ,packedNormalMap:U9&&D.normalMapType===tQ&&s1(D.normalMap.format),metalnessMap:v9,roughnessMap:c9,anisotropy:v,anisotropyMap:B9,clearcoat:n9,clearcoatMap:k,clearcoatNormalMap:R,clearcoatRoughnessMap:f,diffuseRoughness:r0,diffuseRoughnessMap:e,dispersion:F9,retroreflection:E0,iridescence:Q9,iridescenceMap:t,iridescenceThicknessMap:K0,sheen:_0,sheenColorMap:X0,sheenRoughnessMap:l,specularMap:i,specularColorMap:H0,specularIntensityMap:_,transmission:f0,transmissionMap:s,thicknessMap:u,gradientMap:Q0,opaque:D.transparent===!1&&D.blending===u8&&D.alphaToCoverage===!1,alphaMap:Z0,alphaTest:N0,alphaHash:A0,combine:D.combine,mapUv:b0&&O(D.map.channel),aoMapUv:X9&&O(D.aoMap.channel),lightMapUv:S9&&O(D.lightMap.channel),bumpMapUv:b9&&O(D.bumpMap.channel),normalMapUv:U9&&O(D.normalMap.channel),displacementMapUv:V9&&O(D.displacementMap.channel),emissiveMapUv:j9&&O(D.emissiveMap.channel),metalnessMapUv:v9&&O(D.metalnessMap.channel),roughnessMapUv:c9&&O(D.roughnessMap.channel),anisotropyMapUv:B9&&O(D.anisotropyMap.channel),clearcoatMapUv:k&&O(D.clearcoatMap.channel),clearcoatNormalMapUv:R&&O(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:f&&O(D.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:e&&O(D.diffuseRoughnessMap.channel),iridescenceMapUv:t&&O(D.iridescenceMap.channel),iridescenceThicknessMapUv:K0&&O(D.iridescenceThicknessMap.channel),sheenColorMapUv:X0&&O(D.sheenColorMap.channel),sheenRoughnessMapUv:l&&O(D.sheenRoughnessMap.channel),specularMapUv:i&&O(D.specularMap.channel),specularColorMapUv:H0&&O(D.specularColorMap.channel),specularIntensityMapUv:_&&O(D.specularIntensityMap.channel),transmissionMapUv:s&&O(D.transmissionMap.channel),thicknessMapUv:u&&O(D.thicknessMap.channel),alphaMapUv:Z0&&O(D.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(U9||v),vertexNormals:!!P.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!P.attributes.uv&&(b0||Z0),fog:!!a,useFog:D.fog===!0,fogExp2:!!a&&a.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||P.attributes.normal===void 0&&U9===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:B0,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J0,morphTextureStride:L0,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:g.filter((F0)=>F0.texture!==null).length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:q0,decodeVideoTexture:b0&&D.map.isVideoTexture===!0&&l0.getTransfer(D.map.colorSpace)===J9,decodeVideoTextureEmissive:j9&&D.emissiveMap.isVideoTexture===!0&&l0.getTransfer(D.emissiveMap.colorSpace)===J9,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===y9,flipSided:D.side===f9,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:z0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z0&&D.extensions.multiDraw===!0||g0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return h0.vertexUv1s=X.has(1),h0.vertexUv2s=X.has(2),h0.vertexUv3s=X.has(3),X.clear(),h0}function I(D){let V=[];if(D.shaderID)V.push(D.shaderID);else V.push(D.customVertexShaderID),V.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let j in D.defines)V.push(j),V.push(D.defines[j]);if(D.isRawShaderMaterial===!1)q(V,D),F(V,D),V.push(J.outputColorSpace);return V.push(D.customProgramCacheKey),V.join()}function q(D,V){D.push(V.precision),D.push(V.outputColorSpace),D.push(V.envMapMode),D.push(V.envMapPMREM),D.push(V.envMapMaxLod),D.push(V.envMapSize),D.push(V.mapUv),D.push(V.alphaMapUv),D.push(V.lightMapUv),D.push(V.aoMapUv),D.push(V.bumpMapUv),D.push(V.normalMapUv),D.push(V.displacementMapUv),D.push(V.emissiveMapUv),D.push(V.metalnessMapUv),D.push(V.roughnessMapUv),D.push(V.anisotropyMapUv),D.push(V.clearcoatMapUv),D.push(V.clearcoatNormalMapUv),D.push(V.clearcoatRoughnessMapUv),D.push(V.diffuseRoughnessMapUv),D.push(V.iridescenceMapUv),D.push(V.iridescenceThicknessMapUv),D.push(V.sheenColorMapUv),D.push(V.sheenRoughnessMapUv),D.push(V.specularMapUv),D.push(V.specularColorMapUv),D.push(V.specularIntensityMapUv),D.push(V.transmissionMapUv),D.push(V.thicknessMapUv),D.push(V.combine),D.push(V.fogExp2),D.push(V.sizeAttenuation),D.push(V.morphTargetsCount),D.push(V.numSunLights),D.push(V.numDirLights),D.push(V.numPointLights),D.push(V.numSpotLights),D.push(V.numSpotLightMaps),D.push(V.numHemiLights),D.push(V.numRectAreaLights),D.push(V.numSunLightShadows),D.push(V.numDirLightShadows),D.push(V.numPointLightShadows),D.push(V.numSpotLightShadows),D.push(V.numSpotLightShadowsWithMaps),D.push(V.numLightProbes),D.push(V.numLightProbeGrids),D.push(V.shadowMapType),D.push(V.toneMapping),D.push(V.numClippingPlanes),D.push(V.numClipIntersection),D.push(V.depthPacking)}function F(D,V){if(H.disableAll(),V.instancing)H.enable(0);if(V.instancingColor)H.enable(1);if(V.instancingMorph)H.enable(2);if(V.matcap)H.enable(3);if(V.envMap)H.enable(4);if(V.normalMapObjectSpace)H.enable(5);if(V.normalMapTangentSpace)H.enable(6);if(V.clearcoat)H.enable(7);if(V.iridescence)H.enable(8);if(V.alphaTest)H.enable(9);if(V.vertexColors)H.enable(10);if(V.vertexAlphas)H.enable(11);if(V.vertexUv1s)H.enable(12);if(V.vertexUv2s)H.enable(13);if(V.vertexUv3s)H.enable(14);if(V.vertexTangents)H.enable(15);if(V.anisotropy)H.enable(16);if(V.alphaHash)H.enable(17);if(V.batching)H.enable(18);if(V.dispersion)H.enable(19);if(V.retroreflection)H.enable(24);if(V.diffuseRoughness)H.enable(25);if(V.batchingColor)H.enable(20);if(V.gradientMap)H.enable(21);if(V.packedNormalMap)H.enable(22);if(V.vertexNormals)H.enable(23);if(D.push(H.mask),H.disableAll(),V.fog)H.enable(0);if(V.useFog)H.enable(1);if(V.flatShading)H.enable(2);if(V.logarithmicDepthBuffer)H.enable(3);if(V.reversedDepthBuffer)H.enable(4);if(V.skinning)H.enable(5);if(V.morphTargets)H.enable(6);if(V.morphNormals)H.enable(7);if(V.morphColors)H.enable(8);if(V.premultipliedAlpha)H.enable(9);if(V.shadowMapEnabled)H.enable(10);if(V.doubleSided)H.enable(11);if(V.flipSided)H.enable(12);if(V.useDepthPacking)H.enable(13);if(V.dithering)H.enable(14);if(V.transmission)H.enable(15);if(V.sheen)H.enable(16);if(V.opaque)H.enable(17);if(V.pointsUvs)H.enable(18);if(V.decodeVideoTexture)H.enable(19);if(V.decodeVideoTextureEmissive)H.enable(20);if(V.alphaToCoverage)H.enable(21);if(V.numLightProbeGrids>0)H.enable(22);if(V.hasPositionAttribute)H.enable(23);D.push(H.mask)}function z(D){let V=N[D.type],j;if(V){let x=X7[V];j=u5.clone(x.uniforms)}else j=D.uniforms;return j}function A(D,V){let j=G.get(V);if(j!==void 0)++j.usedTimes;else j=new c1(J,V,D,W),U.push(j),G.set(V,j);return j}function B(D){if(--D.usedTimes===0){let V=U.indexOf(D);U[V]=U[U.length-1],U.pop(),G.delete(D.cacheKey),D.destroy()}}function C(D){Y.remove(D)}function w(){Y.dispose()}return{getParameters:L,getProgramCacheKey:I,getUniforms:z,acquireProgram:A,releaseProgram:B,releaseShaderCache:C,programs:U,dispose:w}}function o1(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function a1(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function GW(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function qW(){let J=[],Q=0,$=[],Z=[],W=[];function K(){Q=0,$.length=0,Z.length=0,W.length=0}function H(N){let O=0;if(N.isInstancedMesh)O+=2;if(N.isSkinnedMesh)O+=1;return O}function Y(N,O,L,I,q,F){let z=J[Q];if(z===void 0)z={id:N.id,object:N,geometry:O,material:L,materialVariant:H(N),groupOrder:I,renderOrder:N.renderOrder,z:q,group:F},J[Q]=z;else z.id=N.id,z.object=N,z.geometry=O,z.material=L,z.materialVariant=H(N),z.groupOrder=I,z.renderOrder=N.renderOrder,z.z=q,z.group=F;return Q++,z}function X(N,O,L,I,q,F,z){if(z.reversedDepth===!0)q=-q;let A=Y(N,O,L,I,q,F);if(L.transmission>0)Z.push(A);else if(L.transparent===!0)W.push(A);else $.push(A)}function U(N,O,L,I,q,F){let z=Y(N,O,L,I,q,F);if(L.transmission>0)Z.unshift(z);else if(L.transparent===!0)W.unshift(z);else $.unshift(z)}function G(N,O){if($.length>1)$.sort(N||a1);if(Z.length>1)Z.sort(O||GW);if(W.length>1)W.sort(O||GW)}function E(){for(let N=Q,O=J.length;N<O;N++){let L=J[N];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:X,unshift:U,finish:E,sort:G}}function r1(){let J=new WeakMap;function Q(Z,W){let K=J.get(Z),H;if(K===void 0)H=new qW,J.set(Z,[H]);else if(W>=K.length)H=new qW,K.push(H);else H=K[W];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function t1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new p,color:new s0};break;case"SpotLight":$={position:new p,direction:new p,color:new s0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new p,color:new s0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new p,skyColor:new s0,groundColor:new s0};break;case"RectAreaLight":$={color:new s0,position:new p,halfWidth:new p,halfHeight:new p};break}return J[Q.id]=$,$}}}function e1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new d0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new d0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new d0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var JN=0;function QN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function $N(J){let Q=new t1,$=e1(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new p);let W=new p,K=new K9,H=new K9;function Y(U){let G=0,E=0,N=0;for(let g=0;g<9;g++)Z.probe[g].set(0,0,0);let O=0,L=0,I=0,q=0,F=0,z=0,A=0,B=0,C=0,w=0,D=0,V=0,j=0,x=0;U.sort(QN);for(let g=0,a=U.length;g<a;g++){let P=U[g],c=P.color,o=P.intensity,b=P.distance,W0=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===n7)W0=P.shadow.map.texture;else W0=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)G+=c.r*o,E+=c.g*o,N+=c.b*o;else if(P.isLightProbe){for(let d=0;d<9;d++)Z.probe[d].addScaledVector(P.sh.coefficients[d],o);x++}else if(P.isSunLight){let d=Q.get(P);if(d.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let r=P.shadow,J0=$.get(P);J0.shadowIntensity=r.intensity,J0.shadowBias=r.bias,J0.shadowNormalBias=r.normalBias,J0.shadowRadius=r.radius,J0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),Z.sunShadow[L]=J0,Z.sunShadowMap[L]=W0;let L0=r.getViewportCount();for(let n=0;n<L0;n++)Z.sunShadowMatrix[I+n]=r.getMatrix(n),Z.sunShadowCascade[I+n]=r._cascadeData[n];I+=L0,L++}Z.sun[O]=d,O++}else if(P.isDirectionalLight){let d=Q.get(P);if(d.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let r=P.shadow,J0=$.get(P);J0.shadowIntensity=r.intensity,J0.shadowBias=r.bias,J0.shadowNormalBias=r.normalBias,J0.shadowRadius=r.radius,J0.shadowMapSize=r.mapSize,Z.directionalShadow[q]=J0,Z.directionalShadowMap[q]=W0,Z.directionalShadowMatrix[q]=P.shadow.matrix,C++}Z.directional[q]=d,q++}else if(P.isSpotLight){let d=Q.get(P);d.position.setFromMatrixPosition(P.matrixWorld),d.color.copy(c).multiplyScalar(o),d.distance=b,d.coneCos=Math.cos(P.angle),d.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),d.decay=P.decay,Z.spot[z]=d;let r=P.shadow;if(P.map){if(Z.spotLightMap[V]=P.map,V++,r.updateMatrices(P),P.castShadow)j++}if(Z.spotLightMatrix[z]=r.matrix,P.castShadow){let J0=$.get(P);J0.shadowIntensity=r.intensity,J0.shadowBias=r.bias,J0.shadowNormalBias=r.normalBias,J0.shadowRadius=r.radius,J0.shadowMapSize=r.mapSize,Z.spotShadow[z]=J0,Z.spotShadowMap[z]=W0,D++}z++}else if(P.isRectAreaLight){let d=Q.get(P);d.color.copy(c).multiplyScalar(o),d.halfWidth.set(P.width*0.5,0,0),d.halfHeight.set(0,P.height*0.5,0),Z.rectArea[A]=d,A++}else if(P.isPointLight){let d=Q.get(P);if(d.color.copy(P.color).multiplyScalar(P.intensity),d.distance=P.distance,d.decay=P.decay,P.castShadow){let r=P.shadow,J0=$.get(P);J0.shadowIntensity=r.intensity,J0.shadowBias=r.bias,J0.shadowNormalBias=r.normalBias,J0.shadowRadius=r.radius,J0.shadowMapSize=r.mapSize,J0.shadowCameraNear=r.camera.near,J0.shadowCameraFar=r.camera.far,Z.pointShadow[F]=J0,Z.pointShadowMap[F]=W0,Z.pointShadowMatrix[F]=P.shadow.matrix,w++}Z.point[F]=d,F++}else if(P.isHemisphereLight){let d=Q.get(P);d.skyColor.copy(P.color).multiplyScalar(o),d.groundColor.copy(P.groundColor).multiplyScalar(o),Z.hemi[B]=d,B++}}if(A>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=G0.LTC_FLOAT_1,Z.rectAreaLTC2=G0.LTC_FLOAT_2;else Z.rectAreaLTC1=G0.LTC_HALF_1,Z.rectAreaLTC2=G0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=N;let S=Z.hash;if(S.sunLength!==O||S.directionalLength!==q||S.pointLength!==F||S.spotLength!==z||S.rectAreaLength!==A||S.hemiLength!==B||S.numSunShadows!==L||S.numDirectionalShadows!==C||S.numPointShadows!==w||S.numSpotShadows!==D||S.numSpotMaps!==V||S.numLightProbes!==x)Z.sun.length=O,Z.directional.length=q,Z.spot.length=z,Z.rectArea.length=A,Z.point.length=F,Z.hemi.length=B,Z.sunShadow.length=L,Z.sunShadowMap.length=L,Z.sunShadowMatrix.length=I,Z.sunShadowCascade.length=I,Z.directionalShadow.length=C,Z.directionalShadowMap.length=C,Z.directionalShadowMatrix.length=C,Z.pointShadow.length=w,Z.pointShadowMap.length=w,Z.pointShadowMatrix.length=w,Z.spotShadow.length=D,Z.spotShadowMap.length=D,Z.spotLightMatrix.length=D+V-j,Z.spotLightMap.length=V,Z.numSpotLightShadowsWithMaps=j,Z.numLightProbes=x,S.sunLength=O,S.directionalLength=q,S.pointLength=F,S.spotLength=z,S.rectAreaLength=A,S.hemiLength=B,S.numSunShadows=L,S.numDirectionalShadows=C,S.numPointShadows=w,S.numSpotShadows=D,S.numSpotMaps=V,S.numLightProbes=x,Z.version=JN++}function X(U,G){let E=0,N=0,O=0,L=0,I=0,q=0,F=G.matrixWorldInverse;for(let z=0,A=U.length;z<A;z++){let B=U[z];if(B.isSunLight){let C=Z.sun[E];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(F),E++}else if(B.isDirectionalLight){let C=Z.directional[N];C.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(F),N++}else if(B.isSpotLight){let C=Z.spot[L];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(F),C.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(F),L++}else if(B.isRectAreaLight){let C=Z.rectArea[I];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(F),H.identity(),K.copy(B.matrixWorld),K.premultiply(F),H.extractRotation(K),C.halfWidth.set(B.width*0.5,0,0),C.halfHeight.set(0,B.height*0.5,0),C.halfWidth.applyMatrix4(H),C.halfHeight.applyMatrix4(H),I++}else if(B.isPointLight){let C=Z.point[O];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(F),O++}else if(B.isHemisphereLight){let C=Z.hemi[q];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(F),q++}}}return{setup:Y,setupView:X,state:Z}}function FW(J){let Q=new $N(J),$=[],Z=[],W=[];function K(E){G.camera=E,$.length=0,Z.length=0,W.length=0}function H(E){if(E.isLightProbeGrid)W.push(E);else $.push(E)}function Y(E){Z.push(E)}function X(){Q.setup($),W.sort((E,N)=>E.priority-N.priority||E.id-N.id)}function U(E){Q.setupView($,E)}let G={lightsArray:$,shadowsArray:Z,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:G,setupLights:X,setupLightsView:U,pushLight:H,pushShadow:Y}}function ZN(J){let Q=new WeakMap;function $(W,K=0){let H=Q.get(W),Y;if(H===void 0)Y=new FW(J),Q.set(W,[Y]);else if(K>=H.length)Y=new FW(J),H.push(Y);else Y=H[K];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var WN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KN=`uniform sampler2D shadow_pass;
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
}`,HN=[new p(1,0,0),new p(-1,0,0),new p(0,1,0),new p(0,-1,0),new p(0,0,1),new p(0,0,-1)],YN=[new p(0,-1,0),new p(0,-1,0),new p(0,0,1),new p(0,0,-1),new p(0,-1,0),new p(0,-1,0)],DW=new K9,$6=new p,j$=new p;function XN(J,Q,$){let Z=new M8,W=new d0,K=new d0,H=new H9,Y=new D$,X=new O$,U={},G=$.maxTextureSize,E={[V8]:f9,[f9]:V8,[y9]:y9},N=new T9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new d0},radius:{value:4}},vertexShader:WN,fragmentShader:KN}),O=N.clone();O.defines.HORIZONTAL_PASS=1;let L=new B7;L.setAttribute("position",new W7(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new _9(L,N),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d8;let F=this.type;this.render=function(w,D,V){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(w.length===0)return;if(this.type===uZ)S0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=d8;let j=J.getRenderTarget(),x=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),g=J.state;if(g.setBlending(u7),g.buffers.depth.getReversed()===!0)g.buffers.color.setClear(0,0,0,0);else g.buffers.color.setClear(1,1,1,1);g.buffers.depth.setTest(!0),g.setScissorTest(!1);let a=F!==this.type;if(a)D.traverse(function(P){if(P.material)if(Array.isArray(P.material))P.material.forEach((c)=>c.needsUpdate=!0);else P.material.needsUpdate=!0});for(let P=0,c=w.length;P<c;P++){let o=w[P],b=o.shadow;if(b===void 0){S0("WebGLShadowMap:",o,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;W.copy(b.mapSize);let W0=b.getFrameExtents();if(W.multiply(W0),K.copy(b.mapSize),W.x>G||W.y>G){if(W.x>G)K.x=Math.floor(G/W0.x),W.x=K.x*W0.x,b.mapSize.x=K.x;if(W.y>G)K.y=Math.floor(G/W0.y),W.y=K.y*W0.y,b.mapSize.y=K.y}let d=J.state.buffers.depth.getReversed();if(b.camera._reversedDepth=d,b.map===null||a===!0){if(b.map!==null){if(b.map.depthTexture!==null)b.map.depthTexture.dispose(),b.map.depthTexture=null;b.map.dispose()}if(this.type===L8){if(o.isPointLight){S0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}b.map=new d9(W.x,W.y,{format:n7,type:H7,minFilter:C9,magFilter:C9,generateMipmaps:!1}),b.map.texture.name=o.name+".shadowMap",b.map.depthTexture=new y7(W.x,W.y,R7),b.map.depthTexture.name=o.name+".shadowMapDepth",b.map.depthTexture.format=I8,b.map.depthTexture.compareFunction=null,b.map.depthTexture.minFilter=T7,b.map.depthTexture.magFilter=T7}else{if(o.isPointLight)b.map=new OJ(W.x),b.map.depthTexture=new UJ(W.x,j7);else b.map=new d9(W.x,W.y),b.map.depthTexture=new y7(W.x,W.y,j7);if(b.map.depthTexture.name=o.name+".shadowMap",b.map.depthTexture.format=I8,this.type===d8)b.map.depthTexture.compareFunction=d?$$:Q$,b.map.depthTexture.minFilter=C9,b.map.depthTexture.magFilter=C9;else b.map.depthTexture.compareFunction=null,b.map.depthTexture.minFilter=T7,b.map.depthTexture.magFilter=T7}b.camera.updateProjectionMatrix()}if(b.map.isWebGLCubeRenderTarget!==!0&&(b.map.width!==W.x||b.map.height!==W.y))b.map.setSize(W.x,W.y);let r=b.map.isWebGLCubeRenderTarget?6:b.getViewportCount();if(o.isPointLight!==!0)b.updateMatrices(o,V);let J0=(b.camera.layers.mask&4294967294)!==0?b.camera.layers:V.layers;for(let L0=0;L0<r;L0++){let n=b.getCamera(L0);if(o.isPointLight){let{camera:$0,matrix:V0}=b,P0=o.distance||$0.far;if(P0!==$0.far)$0.far=P0,$0.updateProjectionMatrix();$6.setFromMatrixPosition(o.matrixWorld),$0.position.copy($6),j$.copy($0.position),j$.add(HN[L0]),$0.up.copy(YN[L0]),$0.lookAt(j$),$0.updateMatrixWorld(),V0.makeTranslation(-$6.x,-$6.y,-$6.z),DW.multiplyMatrices($0.projectionMatrix,$0.matrixWorldInverse),b._frustum.setFromProjectionMatrix(DW,$0.coordinateSystem,$0.reversedDepth)}if(b.map.isWebGLCubeRenderTarget)J.setRenderTarget(b.map,L0),J.clear();else{if(L0===0)J.setRenderTarget(b.map),J.clear();let $0=b.getViewport(L0);H.set(K.x*$0.x,K.y*$0.y,K.x*$0.z,K.y*$0.w),g.viewport(H)}Z=b.getFrustum(L0),B(D,V,n,o,J0,this.type)}if(b.isPointLightShadow!==!0&&this.type===L8)z(b,V);b.needsUpdate=!1}F=this.type,q.needsUpdate=!1,J.setRenderTarget(j,x,S)};function z(w,D){let V=Q.update(I);if(N.defines.VSM_SAMPLES!==w.blurSamples)N.defines.VSM_SAMPLES=w.blurSamples,O.defines.VSM_SAMPLES=w.blurSamples,N.needsUpdate=!0,O.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new d9(W.x,W.y,{format:n7,type:H7});else if(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)w.mapPass.setSize(w.map.width,w.map.height);N.uniforms.shadow_pass.value=w.map.depthTexture,N.uniforms.resolution.value.set(w.map.width,w.map.height),N.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(D,null,V,N,I,null),O.uniforms.shadow_pass.value=w.mapPass.texture,O.uniforms.resolution.value.set(w.map.width,w.map.height),O.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(D,null,V,O,I,null)}function A(w,D,V,j){let x=null,S=V.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)x=S;else if(x=V.isPointLight===!0?X:Y,J.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let g=x.uuid,a=D.uuid,P=U[g];if(P===void 0)P={},U[g]=P;let c=P[a];if(c===void 0)c=x.clone(),P[a]=c,D.addEventListener("dispose",C);x=c}if(x.visible=D.visible,x.wireframe=D.wireframe,j===L8)x.side=D.shadowSide!==null?D.shadowSide:D.side;else x.side=D.shadowSide!==null?D.shadowSide:E[D.side];if(x.alphaMap=D.alphaMap,x.alphaTest=D.alphaToCoverage===!0?0.5:D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,V.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let g=J.properties.get(x);g.light=V}return x}function B(w,D,V,j,x,S){if(w.visible===!1)return;if(w.layers.test(x)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&S===L8)&&(!w.frustumCulled||w.intersectsFrustum(Z))){w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld);let P=Q.update(w),c=w.material;if(Array.isArray(c)){let o=P.groups;for(let b=0,W0=o.length;b<W0;b++){let d=o[b],r=c[d.materialIndex];if(r&&r.visible){let J0=A(w,r,j,S);w.onBeforeShadow(J,w,D,V,P,J0,d),J.renderBufferDirect(V,null,P,J0,w,d),w.onAfterShadow(J,w,D,V,P,J0,d)}}}else if(c.visible){let o=A(w,c,j,S);w.onBeforeShadow(J,w,D,V,P,o,null),J.renderBufferDirect(V,null,P,o,w,null),w.onAfterShadow(J,w,D,V,P,o,null)}}}let a=w.children;for(let P=0,c=a.length;P<c;P++)B(a[P],D,V,j,x,S)}function C(w){w.target.removeEventListener("dispose",C);for(let V in U){let j=U[V],x=w.target.uuid;if(x in j)j[x].dispose(),delete j[x]}}}function UN(J,Q){function $(){let _=!1,s=new H9,u=null,Q0=new H9(0,0,0,0);return{setMask:function(Z0){if(u!==Z0&&!_)J.colorMask(Z0,Z0,Z0,Z0),u=Z0},setLocked:function(Z0){_=Z0},setClear:function(Z0,N0,A0,z0,q0){if(q0===!0)Z0*=z0,N0*=z0,A0*=z0;if(s.set(Z0,N0,A0,z0),Q0.equals(s)===!1)J.clearColor(Z0,N0,A0,z0),Q0.copy(s)},reset:function(){_=!1,u=null,Q0.set(-1,0,0,0)}}}function Z(){let _=!1,s=!1,u=null,Q0=null,Z0=null;return{setReversed:function(N0){if(s!==N0){let A0=Q.get("EXT_clip_control");if(N0)A0.clipControlEXT(A0.LOWER_LEFT_EXT,A0.ZERO_TO_ONE_EXT);else A0.clipControlEXT(A0.LOWER_LEFT_EXT,A0.NEGATIVE_ONE_TO_ONE_EXT);s=N0;let z0=Z0;Z0=null,this.setClear(z0)}},getReversed:function(){return s},setTest:function(N0){if(N0)B0(J.DEPTH_TEST);else o0(J.DEPTH_TEST)},setMask:function(N0){if(u!==N0&&!_)J.depthMask(N0),u=N0},setFunc:function(N0){if(s)N0=m5[N0];if(Q0!==N0){switch(N0){case E5:J.depthFunc(J.NEVER);break;case G5:J.depthFunc(J.ALWAYS);break;case q5:J.depthFunc(J.LESS);break;case XQ:J.depthFunc(J.LEQUAL);break;case F5:J.depthFunc(J.EQUAL);break;case D5:J.depthFunc(J.GEQUAL);break;case O5:J.depthFunc(J.GREATER);break;case R5:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}Q0=N0}},setLocked:function(N0){_=N0},setClear:function(N0){if(Z0!==N0){if(Z0=N0,s)N0=1-N0;J.clearDepth(N0)}},reset:function(){_=!1,u=null,Q0=null,Z0=null,s=!1}}}function W(){let _=!1,s=null,u=null,Q0=null,Z0=null,N0=null,A0=null,z0=null,q0=null;return{setTest:function(C0){if(!_)if(C0)B0(J.STENCIL_TEST);else o0(J.STENCIL_TEST)},setMask:function(C0){if(s!==C0&&!_)J.stencilMask(C0),s=C0},setFunc:function(C0,h0,F0){if(u!==C0||Q0!==h0||Z0!==F0)J.stencilFunc(C0,h0,F0),u=C0,Q0=h0,Z0=F0},setOp:function(C0,h0,F0){if(N0!==C0||A0!==h0||z0!==F0)J.stencilOp(C0,h0,F0),N0=C0,A0=h0,z0=F0},setLocked:function(C0){_=C0},setClear:function(C0){if(q0!==C0)J.clearStencil(C0),q0=C0},reset:function(){_=!1,s=null,u=null,Q0=null,Z0=null,N0=null,A0=null,z0=null,q0=null}}}let K=new $,H=new Z,Y=new W,X={},U=new WeakMap,G={},E={},N={},O=new WeakMap,L=[],I=null,q=!1,F=null,z=null,A=null,B=null,C=null,w=null,D=null,V=new s0(0,0,0),j=0,x=!1,S=null,g=null,a=null,P=null,c=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),b=!1,W0=0,d=J.getParameter(J.VERSION);if(d.indexOf("WebGL")!==-1)W0=parseFloat(/^WebGL (\d)/.exec(d)[1]),b=W0>=1;else if(d.indexOf("OpenGL ES")!==-1)W0=parseFloat(/^OpenGL ES (\d)/.exec(d)[1]),b=W0>=2;let r=null,J0={},L0=J.getParameter(J.SCISSOR_BOX),n=J.getParameter(J.VIEWPORT),$0=new H9().fromArray(L0),V0=new H9().fromArray(n);function P0(_,s,u,Q0){let Z0=new Uint8Array(4),N0=J.createTexture();J.bindTexture(_,N0),J.texParameteri(_,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(_,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let A0=0;A0<u;A0++)if(_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texImage3D(s,0,J.RGBA,1,1,Q0,0,J.RGBA,J.UNSIGNED_BYTE,Z0);else J.texImage2D(s+A0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,Z0);return N0}let w0={};w0[J.TEXTURE_2D]=P0(J.TEXTURE_2D,J.TEXTURE_2D,1),w0[J.TEXTURE_CUBE_MAP]=P0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),w0[J.TEXTURE_2D_ARRAY]=P0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),w0[J.TEXTURE_3D]=P0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),B0(J.DEPTH_TEST),H.setFunc(XQ),b9(!1),U9(WQ),B0(J.CULL_FACE),X9(u7);function B0(_){if(G[_]!==!0)J.enable(_),G[_]=!0}function o0(_){if(G[_]!==!1)J.disable(_),G[_]=!1}function g0(_,s){if(N[_]!==s){if(J.bindFramebuffer(_,s),N[_]=s,_===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=s;if(_===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=s;return!0}return!1}function b0(_,s){let u=L,Q0=!1;if(_){if(u=O.get(s),u===void 0)u=[],O.set(s,u);let Z0=_.textures;if(u.length!==Z0.length||u[0]!==J.COLOR_ATTACHMENT0){for(let N0=0,A0=Z0.length;N0<A0;N0++)u[N0]=J.COLOR_ATTACHMENT0+N0;u.length=Z0.length,Q0=!0}}else if(u[0]!==J.BACK)u[0]=J.BACK,Q0=!0;if(Q0)J.drawBuffers(u)}function Z9(_){if(I!==_)return J.useProgram(_),I=_,!0;return!1}let c0={[B8]:J.FUNC_ADD,[nZ]:J.FUNC_SUBTRACT,[sZ]:J.FUNC_REVERSE_SUBTRACT};c0[iZ]=J.MIN,c0[oZ]=J.MAX;let Y9={[aZ]:J.ZERO,[rZ]:J.ONE,[tZ]:J.SRC_COLOR,[J5]:J.SRC_ALPHA,[H5]:J.SRC_ALPHA_SATURATE,[W5]:J.DST_COLOR,[$5]:J.DST_ALPHA,[eZ]:J.ONE_MINUS_SRC_COLOR,[Q5]:J.ONE_MINUS_SRC_ALPHA,[K5]:J.ONE_MINUS_DST_COLOR,[Z5]:J.ONE_MINUS_DST_ALPHA,[Y5]:J.CONSTANT_COLOR,[X5]:J.ONE_MINUS_CONSTANT_COLOR,[U5]:J.CONSTANT_ALPHA,[N5]:J.ONE_MINUS_CONSTANT_ALPHA};function X9(_,s,u,Q0,Z0,N0,A0,z0,q0,C0){if(_===u7){if(q===!0)o0(J.BLEND),q=!1;return}if(q===!1)B0(J.BLEND),q=!0;if(_!==cZ){if(_!==F||C0!==x){if(z!==B8||C!==B8)J.blendEquation(J.FUNC_ADD),z=B8,C=B8;if(C0)switch(_){case u8:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case KQ:J.blendFunc(J.ONE,J.ONE);break;case HQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case YQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:j0("WebGLState: Invalid blending: ",_);break}else switch(_){case u8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case KQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case HQ:j0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case YQ:j0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:j0("WebGLState: Invalid blending: ",_);break}A=null,B=null,w=null,D=null,V.set(0,0,0),j=0,F=_,x=C0}return}if(Z0=Z0||s,N0=N0||u,A0=A0||Q0,s!==z||Z0!==C)J.blendEquationSeparate(c0[s],c0[Z0]),z=s,C=Z0;if(u!==A||Q0!==B||N0!==w||A0!==D)J.blendFuncSeparate(Y9[u],Y9[Q0],Y9[N0],Y9[A0]),A=u,B=Q0,w=N0,D=A0;if(z0.equals(V)===!1||q0!==j)J.blendColor(z0.r,z0.g,z0.b,q0),V.copy(z0),j=q0;F=_,x=!1}function S9(_,s){_.side===y9?o0(J.CULL_FACE):B0(J.CULL_FACE);let u=_.side===f9;if(s)u=!u;b9(u),_.blending===u8&&_.transparent===!1?X9(u7):X9(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),H.setFunc(_.depthFunc),H.setTest(_.depthTest),H.setMask(_.depthWrite),K.setMask(_.colorWrite);let Q0=_.stencilWrite;if(Y.setTest(Q0),Q0)Y.setMask(_.stencilWriteMask),Y.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),Y.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass);j9(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?B0(J.SAMPLE_ALPHA_TO_COVERAGE):o0(J.SAMPLE_ALPHA_TO_COVERAGE)}function b9(_){if(S!==_){if(_)J.frontFace(J.CW);else J.frontFace(J.CCW);S=_}}function U9(_){if(_!==lZ){if(B0(J.CULL_FACE),_!==g)if(_===WQ)J.cullFace(J.BACK);else if(_===dZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else o0(J.CULL_FACE);g=_}function V9(_){if(_!==a){if(b)J.lineWidth(_);a=_}}function j9(_,s,u){if(_){if(B0(J.POLYGON_OFFSET_FILL),P!==s||c!==u){if(P=s,c=u,H.getReversed())s=-s,u=-u;J.polygonOffset(s,u)}}else o0(J.POLYGON_OFFSET_FILL)}function v9(_){if(_)B0(J.SCISSOR_TEST);else o0(J.SCISSOR_TEST)}function c9(_){if(_===void 0)_=J.TEXTURE0+o-1;if(r!==_)J.activeTexture(_),r=_}function v(_,s,u){if(u===void 0)if(r===null)u=J.TEXTURE0+o-1;else u=r;let Q0=J0[u];if(Q0===void 0)Q0={type:void 0,texture:void 0},J0[u]=Q0;if(Q0.type!==_||Q0.texture!==s){if(r!==u)J.activeTexture(u),r=u;J.bindTexture(_,s||w0[_]),Q0.type=_,Q0.texture=s}}function n9(){let _=J0[r];if(_!==void 0&&_.type!==void 0)J.bindTexture(_.type,null),_.type=void 0,_.texture=void 0}function r0(){try{J.compressedTexImage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function F9(){try{J.compressedTexImage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function E0(){try{J.texSubImage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function Q9(){try{J.texSubImage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function _0(){try{J.compressedTexSubImage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function f0(){try{J.compressedTexSubImage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function B9(){try{J.texStorage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function k(){try{J.texStorage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function R(){try{J.texImage2D(...arguments)}catch(_){j0("WebGLState:",_)}}function f(){try{J.texImage3D(...arguments)}catch(_){j0("WebGLState:",_)}}function e(_){if(E[_]!==void 0)return E[_];else return J.getParameter(_)}function t(_,s){if(E[_]!==s)J.pixelStorei(_,s),E[_]=s}function K0(_){if($0.equals(_)===!1)J.scissor(_.x,_.y,_.z,_.w),$0.copy(_)}function X0(_){if(V0.equals(_)===!1)J.viewport(_.x,_.y,_.z,_.w),V0.copy(_)}function l(_,s){let u=U.get(s);if(u===void 0)u=new WeakMap,U.set(s,u);let Q0=u.get(_);if(Q0===void 0)Q0=J.getUniformBlockIndex(s,_.name),J.uniformBlockBinding(s,Q0,Q0),u.set(_,Q0)}function i(_,s,u){let Z0=U.get(s).get(_);if(X[Z0]!==u)J.bindBufferBase(J.UNIFORM_BUFFER,Z0,u),X[Z0]=u}function H0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},E={},r=null,J0={},N={},X={},O=new WeakMap,L=[],I=null,q=!1,F=null,z=null,A=null,B=null,C=null,w=null,D=null,V=new s0(0,0,0),j=0,x=!1,S=null,g=null,a=null,P=null,c=null,$0.set(0,0,J.canvas.width,J.canvas.height),V0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:B0,disable:o0,bindFramebuffer:g0,drawBuffers:b0,useProgram:Z9,setBlending:X9,setMaterial:S9,setFlipSided:b9,setCullFace:U9,setLineWidth:V9,setPolygonOffset:j9,setScissorTest:v9,activeTexture:c9,bindTexture:v,unbindTexture:n9,compressedTexImage2D:r0,compressedTexImage3D:F9,texImage2D:R,texImage3D:f,pixelStorei:t,getParameter:e,updateUBOMapping:l,uniformBlockBinding:i,texStorage2D:B9,texStorage3D:k,texSubImage2D:E0,texSubImage3D:Q9,compressedTexSubImage2D:_0,compressedTexSubImage3D:f0,scissor:K0,viewport:X0,reset:H0}}function NN(J,Q,$,Z,W,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new d0,G=new WeakMap,E=new Set,N,O=new WeakMap,L=new Set,I=new FinalizationRegistry((k)=>L.delete(k)),q=!1;try{q=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(k){}function F(k,R){return q?new OffscreenCanvas(k,R):O8("canvas")}function z(k,R,f){let e=1,t=B9(k);if(t.width>f||t.height>f)e=f/Math.max(t.width,t.height);if(e<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let K0=Math.floor(e*t.width),X0=Math.floor(e*t.height);if(N===void 0)N=F(K0,X0);let l=R?F(K0,X0):N;return l.width=K0,l.height=X0,l.getContext("2d").drawImage(k,0,0,K0,X0),S0("WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+K0+"x"+X0+")."),l}else{if("data"in k)S0("WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+").");return k}return k}function A(k){return k.generateMipmaps}function B(k){J.generateMipmap(k)}function C(k){if(k.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(k.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function w(k,R,f,e,t,K0=!1){if(k!==null){if(J[k]!==void 0)return J[k];S0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let X0;if(e){if(X0=Q.get("EXT_texture_norm16"),!X0)S0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let l=R;if(R===J.RED){if(f===J.FLOAT)l=J.R32F;if(f===J.HALF_FLOAT)l=J.R16F;if(f===J.UNSIGNED_BYTE)l=J.R8;if(f===J.UNSIGNED_SHORT&&X0)l=X0.R16_EXT;if(f===J.SHORT&&X0)l=X0.R16_SNORM_EXT}if(R===J.RED_INTEGER){if(f===J.UNSIGNED_BYTE)l=J.R8UI;if(f===J.UNSIGNED_SHORT)l=J.R16UI;if(f===J.UNSIGNED_INT)l=J.R32UI;if(f===J.BYTE)l=J.R8I;if(f===J.SHORT)l=J.R16I;if(f===J.INT)l=J.R32I}if(R===J.RG){if(f===J.FLOAT)l=J.RG32F;if(f===J.HALF_FLOAT)l=J.RG16F;if(f===J.UNSIGNED_BYTE)l=J.RG8;if(f===J.UNSIGNED_SHORT&&X0)l=X0.RG16_EXT;if(f===J.SHORT&&X0)l=X0.RG16_SNORM_EXT}if(R===J.RG_INTEGER){if(f===J.UNSIGNED_BYTE)l=J.RG8UI;if(f===J.UNSIGNED_SHORT)l=J.RG16UI;if(f===J.UNSIGNED_INT)l=J.RG32UI;if(f===J.BYTE)l=J.RG8I;if(f===J.SHORT)l=J.RG16I;if(f===J.INT)l=J.RG32I}if(R===J.RGB_INTEGER){if(f===J.UNSIGNED_BYTE)l=J.RGB8UI;if(f===J.UNSIGNED_SHORT)l=J.RGB16UI;if(f===J.UNSIGNED_INT)l=J.RGB32UI;if(f===J.BYTE)l=J.RGB8I;if(f===J.SHORT)l=J.RGB16I;if(f===J.INT)l=J.RGB32I}if(R===J.RGBA_INTEGER){if(f===J.UNSIGNED_BYTE)l=J.RGBA8UI;if(f===J.UNSIGNED_SHORT)l=J.RGBA16UI;if(f===J.UNSIGNED_INT)l=J.RGBA32UI;if(f===J.BYTE)l=J.RGBA8I;if(f===J.SHORT)l=J.RGBA16I;if(f===J.INT)l=J.RGBA32I}if(R===J.RGB){if(f===J.UNSIGNED_SHORT&&X0)l=X0.RGB16_EXT;if(f===J.SHORT&&X0)l=X0.RGB16_SNORM_EXT;if(f===J.UNSIGNED_INT_5_9_9_9_REV)l=J.RGB9_E5;if(f===J.UNSIGNED_INT_10F_11F_11F_REV)l=J.R11F_G11F_B10F}if(R===J.RGBA){let i=K0?J$:l0.getTransfer(t);if(f===J.FLOAT)l=J.RGBA32F;if(f===J.HALF_FLOAT)l=J.RGBA16F;if(f===J.UNSIGNED_BYTE)l=i===J9?J.SRGB8_ALPHA8:J.RGBA8;if(f===J.UNSIGNED_SHORT&&X0)l=X0.RGBA16_EXT;if(f===J.SHORT&&X0)l=X0.RGBA16_SNORM_EXT;if(f===J.UNSIGNED_SHORT_4_4_4_4)l=J.RGBA4;if(f===J.UNSIGNED_SHORT_5_5_5_1)l=J.RGB5_A1}if(l===J.R16F||l===J.R32F||l===J.RG16F||l===J.RG32F||l===J.RGBA16F||l===J.RGBA32F)Q.get("EXT_color_buffer_float");return l}function D(k,R){let f;if(k){if(R===null||R===j7||R===c7)f=J.DEPTH24_STENCIL8;else if(R===R7)f=J.DEPTH32F_STENCIL8;else if(R===s8)f=J.DEPTH24_STENCIL8,S0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===j7||R===c7)f=J.DEPTH_COMPONENT24;else if(R===R7)f=J.DEPTH_COMPONENT32F;else if(R===s8)f=J.DEPTH_COMPONENT16;return f}function V(k,R){if(A(k)===!0||k.isFramebufferTexture&&k.minFilter!==T7&&k.minFilter!==C9)return Math.log2(Math.max(R.width,R.height))+1;else if(k.mipmaps.length>0)return k.mipmaps.length;else if(k.isCompressedTexture&&Array.isArray(k.image))return R.mipmaps.length;else return 1}function j(k){let R=new WeakRef(k);Z.get(k).__ref=R,L.add(R),I.register(k,R,R)}function x(k){let R=Z.get(k).__ref;if(R===void 0)return;L.delete(R),I.unregister(R)}function S(k){a(k.target)}function g(k){P(k.target)}function a(k){if(k.removeEventListener("dispose",S),x(k),o(k),k.isVideoTexture)G.delete(k);if(k.isHTMLTexture)E.delete(k)}function P(k){k.removeEventListener("dispose",g),x(k),W0(k)}function c(){for(let k of L){let R=k.deref();if(R===void 0)continue;if(R.isRenderTarget===!0)P(R);else a(R)}L.clear(),E.clear()}function o(k){let R=Z.get(k);if(R.__webglInit===void 0)return;let f=k.source,e=O.get(f);if(e){let t=e[R.__cacheKey];if(t.usedTimes--,t.usedTimes===0)b(k);if(Object.keys(e).length===0)O.delete(f)}Z.remove(k)}function b(k){let R=Z.get(k);J.deleteTexture(R.__webglTexture);let f=k.source,e=O.get(f);delete e[R.__cacheKey],H.memory.textures--}function W0(k){let R=Z.get(k);if(R.__depthDisposeCallback)R.__depthDisposeCallback();let f=k.depthTexture;if(f&&f.renderTarget===k)a(f);if(k.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(R.__webglFramebuffer[t]))for(let K0=0;K0<R.__webglFramebuffer[t].length;K0++)J.deleteFramebuffer(R.__webglFramebuffer[t][K0]);else J.deleteFramebuffer(R.__webglFramebuffer[t]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[t])}else{if(Array.isArray(R.__webglFramebuffer))for(let t=0;t<R.__webglFramebuffer.length;t++)J.deleteFramebuffer(R.__webglFramebuffer[t]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let t=0;t<R.__webglColorRenderbuffer.length;t++)if(R.__webglColorRenderbuffer[t])J.deleteRenderbuffer(R.__webglColorRenderbuffer[t])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let e=k.textures;for(let t=0,K0=e.length;t<K0;t++){let X0=Z.get(e[t]);if(X0.__webglTexture)J.deleteTexture(X0.__webglTexture),H.memory.textures--;Z.remove(e[t])}Z.remove(k)}let d=0;function r(){d=0}function J0(){return d}function L0(k){d=k}function n(){let k=d;if(k>=W.maxTextures)S0("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+W.maxTextures);return d+=1,k}function $0(k){let R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.mipmapsAutoUpdate),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function V0(k,R){let f=Z.get(k);if(k.isVideoTexture)_0(k);if(k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&f.__version!==k.version){let e=k.image;if(e===null)S0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)S0("WebGLRenderer: Texture marked for update but image is incomplete");else{S9(f,k,R);return}}else if(k.isExternalTexture)f.__webglTexture=k.sourceTexture?k.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,f.__webglTexture,J.TEXTURE0+R)}function P0(k,R){let f=Z.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&f.__version!==k.version){S9(f,k,R);return}else if(k.isExternalTexture)f.__webglTexture=k.sourceTexture?k.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,f.__webglTexture,J.TEXTURE0+R)}function w0(k,R){let f=Z.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&f.__version!==k.version){S9(f,k,R);return}$.bindTexture(J.TEXTURE_3D,f.__webglTexture,J.TEXTURE0+R)}function B0(k,R){let f=Z.get(k);if(k.version>0&&f.__version!==k.version){b9(f,k,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,f.__webglTexture,J.TEXTURE0+R)}let o0={[B5]:J.REPEAT,[o6]:J.CLAMP_TO_EDGE,[k5]:J.MIRRORED_REPEAT},g0={[T7]:J.NEAREST,[I5]:J.NEAREST_MIPMAP_NEAREST,[n8]:J.NEAREST_MIPMAP_LINEAR,[C9]:J.LINEAR,[a6]:J.LINEAR_MIPMAP_NEAREST,[S7]:J.LINEAR_MIPMAP_LINEAR},b0={[v5]:J.NEVER,[Z$]:J.ALWAYS,[f5]:J.LESS,[Q$]:J.LEQUAL,[y5]:J.EQUAL,[$$]:J.GEQUAL,[b5]:J.GREATER,[h5]:J.NOTEQUAL};function Z9(k,R){if(R.type===R7&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===C9||R.magFilter===a6||R.magFilter===n8||R.magFilter===S7||R.minFilter===C9||R.minFilter===a6||R.minFilter===n8||R.minFilter===S7))S0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(k,J.TEXTURE_WRAP_S,o0[R.wrapS]),J.texParameteri(k,J.TEXTURE_WRAP_T,o0[R.wrapT]),k===J.TEXTURE_3D||k===J.TEXTURE_2D_ARRAY)J.texParameteri(k,J.TEXTURE_WRAP_R,o0[R.wrapR]);if(J.texParameteri(k,J.TEXTURE_MAG_FILTER,g0[R.magFilter]),J.texParameteri(k,J.TEXTURE_MIN_FILTER,g0[R.minFilter]),R.compareFunction)J.texParameteri(k,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(k,J.TEXTURE_COMPARE_FUNC,b0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===T7)return;if(R.minFilter!==n8&&R.minFilter!==S7)return;if(R.type===R7&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let f=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(k,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function c0(k,R){let f=!1;if(k.__webglInit===void 0)k.__webglInit=!0,R.addEventListener("dispose",S),j(R);let e=R.source,t=O.get(e);if(t===void 0)t={},O.set(e,t);let K0=$0(R);if(K0!==k.__cacheKey){if(t[K0]===void 0)t[K0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,f=!0;t[K0].usedTimes++;let X0=t[k.__cacheKey];if(X0!==void 0){if(t[k.__cacheKey].usedTimes--,X0.usedTimes===0)b(R)}k.__cacheKey=K0,k.__webglTexture=t[K0].texture}return f}function Y9(k,R,f){return Math.floor(Math.floor(k/f)/R)}function X9(k,R,f,e){let K0=k.updateRanges;if(K0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,f,e,R.data);else{K0.sort((_,s)=>_.start-s.start);let X0=0;for(let _=1;_<K0.length;_++){let s=K0[X0],u=K0[_],Q0=s.start+s.count,Z0=Y9(u.start,R.width,4),N0=Y9(s.start,R.width,4);if(u.start<=Q0+1&&Z0===N0&&Y9(u.start+u.count-1,R.width,4)===Z0)s.count=Math.max(s.count,u.start+u.count-s.start);else++X0,K0[X0]=u}K0.length=X0+1;let l=$.getParameter(J.UNPACK_ROW_LENGTH),i=$.getParameter(J.UNPACK_SKIP_PIXELS),H0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let _=0,s=K0.length;_<s;_++){let u=K0[_],Q0=Math.floor(u.start/4),Z0=Math.ceil(u.count/4),N0=Q0%R.width,A0=Math.floor(Q0/R.width),z0=Z0,q0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,N0),$.pixelStorei(J.UNPACK_SKIP_ROWS,A0),$.texSubImage2D(J.TEXTURE_2D,0,N0,A0,z0,1,f,e,R.data)}k.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,l),$.pixelStorei(J.UNPACK_SKIP_PIXELS,i),$.pixelStorei(J.UNPACK_SKIP_ROWS,H0)}}function S9(k,R,f){let e=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)e=J.TEXTURE_3D;let t=c0(k,R),K0=R.source;$.bindTexture(e,k.__webglTexture,J.TEXTURE0+f);let X0=Z.get(K0);if(K0.version!==X0.__version||t===!0){if($.activeTexture(J.TEXTURE0+f),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let q0=l0.getPrimaries(l0.workingColorSpace),C0=R.colorSpace===s7?null:l0.getPrimaries(R.colorSpace),h0=R.colorSpace===s7||q0===C0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,h0)}$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment);let i=z(R.image,!1,W.maxTextureSize);i=f0(R,i);let H0=K.convert(R.format,R.colorSpace),_=K.convert(R.type),s=w(R.internalFormat,H0,_,R.normalized,R.colorSpace,R.isVideoTexture);Z9(e,R);let u,Q0=R.mipmaps,Z0=R.isVideoTexture!==!0,N0=X0.__version===void 0||t===!0,A0=K0.dataReady,z0=V(R,i);if(R.isDepthTexture){if(s=D(R.format===v7,R.type),N0)if(Z0)$.texStorage2D(J.TEXTURE_2D,1,s,i.width,i.height);else $.texImage2D(J.TEXTURE_2D,0,s,i.width,i.height,0,H0,_,null)}else if(R.isDataTexture)if(Q0.length>0){if(Z0&&N0)$.texStorage2D(J.TEXTURE_2D,z0,s,Q0[0].width,Q0[0].height);for(let q0=0,C0=Q0.length;q0<C0;q0++)if(u=Q0[q0],Z0){if(A0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,u.width,u.height,H0,_,u.data)}else $.texImage2D(J.TEXTURE_2D,q0,s,u.width,u.height,0,H0,_,u.data);R.generateMipmaps=!1}else if(Z0){if(N0)$.texStorage2D(J.TEXTURE_2D,z0,s,i.width,i.height);if(A0)X9(R,i,H0,_)}else $.texImage2D(J.TEXTURE_2D,0,s,i.width,i.height,0,H0,_,i.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(Z0&&N0)$.texStorage3D(J.TEXTURE_2D_ARRAY,z0,s,Q0[0].width,Q0[0].height,i.depth);for(let q0=0,C0=Q0.length;q0<C0;q0++)if(u=Q0[q0],R.format!==M7)if(H0!==null)if(Z0){if(A0)if(R.layerUpdates.size>0){let h0=T$(u.width,u.height,R.format,R.type);for(let F0 of R.layerUpdates){let t0=u.data.subarray(F0*h0/u.data.BYTES_PER_ELEMENT,(F0+1)*h0/u.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,F0,u.width,u.height,1,H0,t0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,u.width,u.height,i.depth,H0,u.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,q0,s,u.width,u.height,i.depth,0,u.data,0,0);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Z0){if(A0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,q0,0,0,0,u.width,u.height,i.depth,H0,_,u.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,q0,s,u.width,u.height,i.depth,0,H0,_,u.data);if(R.layerUpdates.size>0)R.clearLayerUpdates()}else{if(Z0&&N0)$.texStorage2D(J.TEXTURE_2D,z0,s,Q0[0].width,Q0[0].height);for(let q0=0,C0=Q0.length;q0<C0;q0++)if(u=Q0[q0],R.format!==M7)if(H0!==null)if(Z0){if(A0)$.compressedTexSubImage2D(J.TEXTURE_2D,q0,0,0,u.width,u.height,H0,u.data)}else $.compressedTexImage2D(J.TEXTURE_2D,q0,s,u.width,u.height,0,u.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Z0){if(A0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,u.width,u.height,H0,_,u.data)}else $.texImage2D(J.TEXTURE_2D,q0,s,u.width,u.height,0,H0,_,u.data)}else if(R.isDataArrayTexture)if(Z0){if(N0)$.texStorage3D(J.TEXTURE_2D_ARRAY,z0,s,i.width,i.height,i.depth);if(A0)if(R.layerUpdates.size>0){let q0=T$(i.width,i.height,R.format,R.type);for(let C0 of R.layerUpdates){let h0=i.data.subarray(C0*q0/i.data.BYTES_PER_ELEMENT,(C0+1)*q0/i.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,C0,i.width,i.height,1,H0,_,h0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,i.width,i.height,i.depth,H0,_,i.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,s,i.width,i.height,i.depth,0,H0,_,i.data);else if(R.isData3DTexture)if(Z0){if(N0)$.texStorage3D(J.TEXTURE_3D,z0,s,i.width,i.height,i.depth);if(A0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,i.width,i.height,i.depth,H0,_,i.data)}else $.texImage3D(J.TEXTURE_3D,0,s,i.width,i.height,i.depth,0,H0,_,i.data);else if(R.isFramebufferTexture){if(N0)if(Z0)$.texStorage2D(J.TEXTURE_2D,z0,s,i.width,i.height);else{let{width:q0,height:C0}=i;for(let h0=0;h0<z0;h0++)$.texImage2D(J.TEXTURE_2D,h0,s,q0,C0,0,H0,_,null),q0>>=1,C0>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in J){let q0=J.canvas;if(!q0.hasAttribute("layoutsubtree"))q0.setAttribute("layoutsubtree","true");if(i.parentNode!==q0){q0.appendChild(i),E.add(R),q0.onpaint=(C0)=>{let h0=C0.changedElements;for(let F0 of E)if(h0.includes(F0.image))F0.needsUpdate=!0},q0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,i);else{let{RGBA:h0,RGBA:F0,UNSIGNED_BYTE:t0}=J;J.texElementImage2D(J.TEXTURE_2D,0,h0,F0,t0,i)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(Q0.length>0){if(Z0&&N0){let q0=B9(Q0[0]);$.texStorage2D(J.TEXTURE_2D,z0,s,q0.width,q0.height)}for(let q0=0,C0=Q0.length;q0<C0;q0++)if(u=Q0[q0],Z0){if(A0)$.texSubImage2D(J.TEXTURE_2D,q0,0,0,H0,_,u)}else $.texImage2D(J.TEXTURE_2D,q0,s,H0,_,u);R.generateMipmaps=!1}else if(Z0){if(N0){let q0=B9(i);$.texStorage2D(J.TEXTURE_2D,z0,s,q0.width,q0.height)}if(A0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,H0,_,i)}else $.texImage2D(J.TEXTURE_2D,0,s,H0,_,i);if(A(R)&&R.mipmapsAutoUpdate===!0)B(e);if(X0.__version=K0.version,R.onUpdate)R.onUpdate(R)}k.__version=R.version}function b9(k,R,f){if(R.image.length!==6)return;let e=c0(k,R),t=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,k.__webglTexture,J.TEXTURE0+f);let K0=Z.get(t);if(t.version!==K0.__version||e===!0){$.activeTexture(J.TEXTURE0+f);let X0=l0.getPrimaries(l0.workingColorSpace),l=R.colorSpace===s7?null:l0.getPrimaries(R.colorSpace),i=R.colorSpace===s7||X0===l?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,i);let H0=R.isCompressedTexture||R.image[0].isCompressedTexture,_=R.image[0]&&R.image[0].isDataTexture,s=[];for(let F0=0;F0<6;F0++){if(!H0&&!_)s[F0]=z(R.image[F0],!0,W.maxCubemapSize);else s[F0]=_?R.image[F0].image:R.image[F0];s[F0]=f0(R,s[F0])}let u=s[0],Q0=K.convert(R.format,R.colorSpace),Z0=K.convert(R.type),N0=w(R.internalFormat,Q0,Z0,R.normalized,R.colorSpace),A0=R.isVideoTexture!==!0,z0=K0.__version===void 0||e===!0,q0=t.dataReady,C0=V(R,u);Z9(J.TEXTURE_CUBE_MAP,R);let h0;if(R.isDepthTexture){if(N0=D(R.format===v7,R.type),z0)if(A0)$.texStorage2D(J.TEXTURE_CUBE_MAP,1,N0,u.width,u.height);else for(let F0=0;F0<6;F0++)$.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,N0,u.width,u.height,0,Q0,Z0,null)}else if(H0){if(A0&&z0)$.texStorage2D(J.TEXTURE_CUBE_MAP,C0,N0,u.width,u.height);for(let F0=0;F0<6;F0++){h0=s[F0].mipmaps;for(let t0=0;t0<h0.length;t0++){let D9=h0[t0];if(R.format!==M7)if(Q0!==null)if(A0){if(q0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,0,0,D9.width,D9.height,Q0,D9.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,N0,D9.width,D9.height,0,D9.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(A0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,0,0,D9.width,D9.height,Q0,Z0,D9.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0,N0,D9.width,D9.height,0,Q0,Z0,D9.data)}}}else{if(h0=R.mipmaps,A0&&z0){if(h0.length>0)C0++;let F0=B9(s[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,C0,N0,F0.width,F0.height)}for(let F0=0;F0<6;F0++)if(_){if(A0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,s[F0].width,s[F0].height,Q0,Z0,s[F0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,N0,s[F0].width,s[F0].height,0,Q0,Z0,s[F0].data);for(let t0=0;t0<h0.length;t0++){let U7=h0[t0].image[F0].image;if(A0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,0,0,U7.width,U7.height,Q0,Z0,U7.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,N0,U7.width,U7.height,0,Q0,Z0,U7.data)}}else{if(A0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,0,0,Q0,Z0,s[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,N0,Q0,Z0,s[F0]);for(let t0=0;t0<h0.length;t0++){let D9=h0[t0];if(A0){if(q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,0,0,Q0,Z0,D9.image[F0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,t0+1,N0,Q0,Z0,D9.image[F0])}}}if(A(R)&&R.mipmapsAutoUpdate===!0)B(J.TEXTURE_CUBE_MAP);if(K0.__version=t.version,R.onUpdate)R.onUpdate(R)}k.__version=R.version}function U9(k,R,f,e,t,K0){let X0=K.convert(f.format,f.colorSpace),l=K.convert(f.type),i=w(f.internalFormat,X0,l,f.normalized,f.colorSpace),H0=Z.get(R),_=Z.get(f);if(_.__renderTarget=R,!H0.__hasExternalTextures){let s=Math.max(1,R.width>>K0),u=Math.max(1,R.height>>K0);if(t===J.TEXTURE_3D||t===J.TEXTURE_2D_ARRAY)$.texImage3D(t,K0,i,s,u,R.depth,0,X0,l,null);else $.texImage2D(t,K0,i,s,u,0,X0,l,null)}if($.bindFramebuffer(J.FRAMEBUFFER,k),Q9(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,t,_.__webglTexture,0,E0(R));else if(t===J.TEXTURE_2D||t>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&t<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,t,_.__webglTexture,K0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function V9(k,R,f){if(J.bindRenderbuffer(J.RENDERBUFFER,k),R.depthBuffer){let e=R.depthTexture,t=e&&e.isDepthTexture?e.type:null,K0=D(R.stencilBuffer,t),X0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(Q9(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(R),K0,R.width,R.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(R),K0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,K0,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,X0,J.RENDERBUFFER,k)}else{let e=R.textures;for(let t=0;t<e.length;t++){let K0=e[t],X0=K.convert(K0.format,K0.colorSpace),l=K.convert(K0.type),i=w(K0.internalFormat,X0,l,K0.normalized,K0.colorSpace);if(Q9(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,E0(R),i,R.width,R.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,E0(R),i,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,i,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function j9(k,R,f){let e=R.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let t=Z.get(R.depthTexture);t.__renderTarget=R;let K0=e?R.depthTexture.image[0]:R.depthTexture.image;if(!t.__webglTexture||K0.width!==R.width||K0.height!==R.height)K0.width=R.width,K0.height=R.height,R.depthTexture.needsUpdate=!0;if(e)B0(R.depthTexture,0);else V0(R.depthTexture,0);let X0=t.__webglTexture,l=E0(R),i=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+f:J.TEXTURE_2D,H0=R.depthTexture.format===v7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===I8)if(Q9(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,i,X0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,i,X0,0);else if(R.depthTexture.format===v7)if(Q9(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,i,X0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,i,X0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function v9(k){let R=Z.get(k),f=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){let e=k.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(e){let t=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,e.removeEventListener("dispose",t)};e.addEventListener("dispose",t),R.__depthDisposeCallback=t}R.__boundDepthTexture=e}if(k.depthTexture&&!R.__autoAllocateDepthBuffer)if(f)for(let e=0;e<6;e++)j9(R.__webglFramebuffer[e],k,e);else if(k.texture.mipmaps.length>0)j9(R.__webglFramebuffer[0],k,0);else j9(R.__webglFramebuffer,k,0);else if(f){R.__webglDepthbuffer=[];for(let e=0;e<6;e++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[e]),R.__webglDepthbuffer[e]===void 0)R.__webglDepthbuffer[e]=J.createRenderbuffer(),V9(R.__webglDepthbuffer[e],k,!1);else{let t=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,K0=R.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,K0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,K0)}}else{if(k.texture.mipmaps.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),V9(R.__webglDepthbuffer,k,!1);else{let t=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,K0=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,K0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,K0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function c9(k,R,f){let e=Z.get(k);if(R!==void 0)U9(e.__webglFramebuffer,k,k.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(f!==void 0)v9(k)}function v(k){let R=k.texture,f=Z.get(k),e=Z.get(R);k.addEventListener("dispose",g),j(k);let t=k.textures,K0=k.isWebGLCubeRenderTarget===!0,X0=t.length>1;if(!X0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=R.version,H.memory.textures++}if(K0){f.__webglFramebuffer=[];for(let l=0;l<6;l++)if(R.mipmaps.length>0){f.__webglFramebuffer[l]=[];for(let i=0;i<R.mipmaps.length;i++)f.__webglFramebuffer[l][i]=J.createFramebuffer()}else f.__webglFramebuffer[l]=J.createFramebuffer()}else{if(R.mipmaps.length>0){f.__webglFramebuffer=[];for(let l=0;l<R.mipmaps.length;l++)f.__webglFramebuffer[l]=J.createFramebuffer()}else f.__webglFramebuffer=J.createFramebuffer();if(X0)for(let l=0,i=t.length;l<i;l++){let H0=Z.get(t[l]);if(H0.__webglTexture===void 0)H0.__webglTexture=J.createTexture(),H.memory.textures++}if(k.samples>0&&Q9(k)===!1){f.__webglMultisampledFramebuffer=J.createFramebuffer(),f.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let l=0;l<t.length;l++){let i=t[l];f.__webglColorRenderbuffer[l]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,f.__webglColorRenderbuffer[l]);let H0=K.convert(i.format,i.colorSpace),_=K.convert(i.type),s=w(i.internalFormat,H0,_,i.normalized,i.colorSpace,k.isXRRenderTarget===!0),u=E0(k);J.renderbufferStorageMultisample(J.RENDERBUFFER,u,s,k.width,k.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+l,J.RENDERBUFFER,f.__webglColorRenderbuffer[l])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),k.depthBuffer)f.__webglDepthRenderbuffer=J.createRenderbuffer(),V9(f.__webglDepthRenderbuffer,k,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(K0){$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),Z9(J.TEXTURE_CUBE_MAP,R);for(let l=0;l<6;l++)if(R.mipmaps.length>0)for(let i=0;i<R.mipmaps.length;i++)U9(f.__webglFramebuffer[l][i],k,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,i);else U9(f.__webglFramebuffer[l],k,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,0);if(A(R))B(J.TEXTURE_CUBE_MAP);else if(R.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,R.mipmaps.length-1);$.unbindTexture()}else if(X0){for(let l=0,i=t.length;l<i;l++){let H0=t[l],_=Z.get(H0),s=J.TEXTURE_2D;if(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)s=k.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(s,_.__webglTexture),Z9(s,H0),U9(f.__webglFramebuffer,k,H0,J.COLOR_ATTACHMENT0+l,s,0),A(H0))B(s)}$.unbindTexture()}else{let l=J.TEXTURE_2D;if(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)l=k.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(l,e.__webglTexture),Z9(l,R),R.mipmaps.length>0)for(let i=0;i<R.mipmaps.length;i++)U9(f.__webglFramebuffer[i],k,R,J.COLOR_ATTACHMENT0,l,i);else U9(f.__webglFramebuffer,k,R,J.COLOR_ATTACHMENT0,l,0);if(A(R))B(l);else if(R.mipmaps.length>0)J.texParameteri(l,J.TEXTURE_MAX_LEVEL,R.mipmaps.length-1);$.unbindTexture()}if(k.depthBuffer)v9(k)}function n9(k){let R=k.textures;for(let f=0,e=R.length;f<e;f++){let t=R[f];if(A(t)&&t.mipmapsAutoUpdate===!0){let K0=C(k),X0=Z.get(t).__webglTexture;$.bindTexture(K0,X0),B(K0),$.unbindTexture()}}}let r0=[];function F9(k){if(k.samples>0){if(Q9(k)===!1){let{textures:R,width:f,height:e}=k,t=J.COLOR_BUFFER_BIT,K0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=Z.get(k),l=R.length>1;if(l)for(let H0=0;H0<R.length;H0++)$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,null,0);if($.bindFramebuffer(J.READ_FRAMEBUFFER,X0.__webglMultisampledFramebuffer),k.texture.mipmaps.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglFramebuffer);for(let H0=0;H0<R.length;H0++){if(k.resolveDepthBuffer){if(k.depthBuffer)t|=J.DEPTH_BUFFER_BIT;if(k.stencilBuffer&&k.resolveStencilBuffer)t|=J.STENCIL_BUFFER_BIT}if(l){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let _=Z.get(R[H0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,_,0)}if(J.blitFramebuffer(0,0,f,e,0,0,f,e,t,J.NEAREST),X===!0){if(r0.length=0,r0.push(J.COLOR_ATTACHMENT0+H0),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1)r0.push(K0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,r0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),l)for(let H0=0;H0<R.length;H0++){$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,X0.__webglColorRenderbuffer[H0]);let _=Z.get(R[H0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,X0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.TEXTURE_2D,_,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,X0.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&X){let R=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function E0(k){return Math.min(W.maxSamples,k.samples)}function Q9(k){let R=Z.get(k);return k.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function _0(k){let R=H.render.frame;if(G.get(k)!==R)G.set(k,R),k.update()}function f0(k,R){let{colorSpace:f,format:e,type:t}=k;if(k.isCompressedTexture===!0||k.isVideoTexture===!0)return R;if(f!==eQ&&f!==s7)if(l0.getTransfer(f)===J9){if(e!==M7||t!==e9)S0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else j0("WebGLTextures: Unsupported texture color space:",f);return R}function B9(k){if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement)U.width=k.naturalWidth||k.width,U.height=k.naturalHeight||k.height;else if(typeof VideoFrame<"u"&&k instanceof VideoFrame)U.width=k.displayWidth,U.height=k.displayHeight;else U.width=k.width,U.height=k.height;return U}this.allocateTextureUnit=n,this.resetTextureUnits=r,this.getTextureUnits=J0,this.setTextureUnits=L0,this.setTexture2D=V0,this.setTexture2DArray=P0,this.setTexture3D=w0,this.setTextureCube=B0,this.rebindTextures=c9,this.setupRenderTarget=v,this.updateRenderTargetMipmap=n9,this.updateMultisampleRenderTarget=F9,this.setupDepthRenderbuffer=v9,this.setupFrameBufferTexture=U9,this.useMultisampledRTT=Q9,this.dispose=c}function EN(J,Q){function $(Z,W=s7){let K,H=l0.getTransfer(W);if(Z===e9)return J.UNSIGNED_BYTE;if(Z===RQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===MQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===C5)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===P5)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===z5)return J.BYTE;if(Z===A5)return J.SHORT;if(Z===s8)return J.UNSIGNED_SHORT;if(Z===OQ)return J.INT;if(Z===j7)return J.UNSIGNED_INT;if(Z===R7)return J.FLOAT;if(Z===H7)return J.HALF_FLOAT;if(Z===w5)return J.ALPHA;if(Z===_5)return J.RGB;if(Z===M7)return J.RGBA;if(Z===I8)return J.DEPTH_COMPONENT;if(Z===v7)return J.DEPTH_STENCIL;if(Z===T5)return J.RED;if(Z===LQ)return J.RED_INTEGER;if(Z===n7)return J.RG;if(Z===VQ)return J.RG_INTEGER;if(Z===BQ)return J.RGBA_INTEGER;if(Z===r6||Z===t6||Z===e6||Z===JJ)if(H===J9)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===r6)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===t6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===e6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===JJ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===r6)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===t6)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===e6)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===JJ)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===kQ||Z===IQ||Z===zQ||Z===AQ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===kQ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===IQ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===zQ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===AQ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===CQ||Z===PQ||Z===wQ||Z===_Q||Z===TQ||Z===QJ||Z===SQ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===CQ||Z===PQ)return H===J9?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===wQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===_Q)return K.COMPRESSED_R11_EAC;if(Z===TQ)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===QJ)return K.COMPRESSED_RG11_EAC;if(Z===SQ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===jQ||Z===vQ||Z===fQ||Z===yQ||Z===bQ||Z===hQ||Z===xQ||Z===gQ||Z===pQ||Z===mQ||Z===lQ||Z===dQ||Z===uQ||Z===cQ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===jQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===vQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===fQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===yQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===bQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===hQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===xQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===gQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===pQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===mQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===lQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===dQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===uQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===cQ)return H===J9?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===nQ||Z===sQ||Z===iQ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(Z===nQ)return H===J9?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===sQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===iQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===oQ||Z===aQ||Z===$J||Z===rQ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(Z===oQ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===aQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===$J)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===rQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===c7)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var GN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qN=`
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

}`;class SW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new NJ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new T9({vertexShader:GN,fragmentShader:qN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new _9(new J7(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jW extends L7{constructor(J,Q){super();let $=this,Z=null,W=1,K=null,H="local-floor",Y=1,X=null,U=null,G=null,E=null,N=null,O=null,L=typeof XRWebGLBinding<"u",I=new SW,q={},F=Q.getContextAttributes(),z=null,A=null,B=[],C=[],w=new d0,D=null,V=null,j=new m9;j.viewport=new H9;let x=new m9;x.viewport=new H9;let S=[j,x],g=new P$,a=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let $0=B[n];if($0===void 0)$0=new r8,B[n]=$0;return $0.getTargetRaySpace()},this.getControllerGrip=function(n){let $0=B[n];if($0===void 0)$0=new r8,B[n]=$0;return $0.getGripSpace()},this.getHand=function(n){let $0=B[n];if($0===void 0)$0=new r8,B[n]=$0;return $0.getHandSpace()};function c(n){let $0=C.indexOf(n.inputSource);if($0===-1)return;let V0=B[$0];if(V0!==void 0)V0.update(n.inputSource,n.frame,X||K),V0.dispatchEvent({type:n.type,data:n.inputSource})}function o(){Z.removeEventListener("select",c),Z.removeEventListener("selectstart",c),Z.removeEventListener("selectend",c),Z.removeEventListener("squeeze",c),Z.removeEventListener("squeezestart",c),Z.removeEventListener("squeezeend",c),Z.removeEventListener("end",o),Z.removeEventListener("inputsourceschange",b);for(let n=0;n<B.length;n++){let $0=C[n];if($0===null)continue;C[n]=null,B[n].disconnect($0)}a=null,P=null,I.reset();for(let n in q)delete q[n];if(J.setRenderTarget(z),N=null,E=null,G=null,Z=null,A=null,L0.stop(),$.isPresenting=!1,J.setPixelRatio(D),J.setSize(w.width,w.height,!1),V!==null){let n=V.camera;n.fov=V.fov,n.zoom=V.zoom,n.updateProjectionMatrix(),V=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(W=n,$.isPresenting===!0)S0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(H=n,$.isPresenting===!0)S0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(n){X=n},this.getBaseLayer=function(){return E!==null?E:N},this.getBinding=function(){if(G===null&&L)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return O},this.getSession=function(){return Z},this.setSession=async function(n){if(Z=n,Z!==null){if(z=J.getRenderTarget(),Z.addEventListener("select",c),Z.addEventListener("selectstart",c),Z.addEventListener("selectend",c),Z.addEventListener("squeeze",c),Z.addEventListener("squeezestart",c),Z.addEventListener("squeezeend",c),Z.addEventListener("end",o),Z.addEventListener("inputsourceschange",b),F.xrCompatible!==!0)await Q.makeXRCompatible();if(D=J.getPixelRatio(),J.getSize(w),!(L&&("createProjectionLayer"in XRWebGLBinding.prototype))){let V0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};N=new XRWebGLLayer(Z,Q,V0),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),A=new d9(N.framebufferWidth,N.framebufferHeight,{format:M7,type:e9,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let V0=null,P0=null,w0=null;if(F.depth)w0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,V0=F.stencil?v7:I8,P0=F.stencil?c7:j7;let B0={colorFormat:Q.RGBA8,depthFormat:w0,scaleFactor:W};G=this.getBinding(),E=G.createProjectionLayer(B0),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),A=new d9(E.textureWidth,E.textureHeight,{format:M7,type:e9,depthTexture:new y7(E.textureWidth,E.textureHeight,P0,void 0,void 0,void 0,void 0,void 0,void 0,V0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await Z.requestReferenceSpace(H),L0.setContext(Z),L0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function b(n){for(let $0=0;$0<n.removed.length;$0++){let V0=n.removed[$0],P0=C.indexOf(V0);if(P0>=0)C[P0]=null,B[P0].disconnect(V0)}for(let $0=0;$0<n.added.length;$0++){let V0=n.added[$0],P0=C.indexOf(V0);if(P0===-1){for(let B0=0;B0<B.length;B0++)if(B0>=C.length){C.push(V0),P0=B0;break}else if(C[B0]===null){C[B0]=V0,P0=B0;break}if(P0===-1)break}let w0=B[P0];if(w0)w0.connect(V0)}}function W0(n,$0){if($0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices($0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(Z===null)return;let{near:$0,far:V0}=n;if(I.texture!==null){if(I.depthNear>0)$0=I.depthNear;if(I.depthFar>0)V0=I.depthFar}if(g.near=x.near=j.near=$0,g.far=x.far=j.far=V0,a!==g.near||P!==g.far)Z.updateRenderState({depthNear:g.near,depthFar:g.far}),a=g.near,P=g.far;g.layers.mask=n.layers.mask|6,j.layers.mask=g.layers.mask&-5,x.layers.mask=g.layers.mask&-3;let P0=n.parent,w0=g.cameras;W0(g,P0);for(let B0=0;B0<w0.length;B0++)W0(w0[B0],P0);if(g.projectionMatrix.copy(j.projectionMatrix),g.projectionMatrixInverse.copy(j.projectionMatrixInverse),V===null&&n.isPerspectiveCamera)V={camera:n,fov:n.fov,zoom:n.zoom};d(n,g,P0)};function d(n,$0,V0){if(V0===null)n.matrix.copy($0.matrixWorld);else n.matrix.copy(V0.matrixWorld),n.matrix.invert(),n.matrix.multiply($0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy($0.projectionMatrix),n.projectionMatrixInverse.copy($0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=n6*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return g},this.getFoveation=function(){if(E===null&&N===null)return;return Y},this.setFoveation=function(n){if(Y=n,E!==null)E.fixedFoveation=n;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=n},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(g)},this.getCameraTexture=function(n){return q[n]};let r=null;function J0(n,$0){if(U=$0.getViewerPose(X||K),O=$0,U!==null){let V0=U.views;if(N!==null)J.setRenderTargetFramebuffer(A,N.framebuffer),J.setRenderTarget(A);let P0=!1;if(V0.length!==g.cameras.length)g.cameras.length=0,P0=!0;for(let g0=0;g0<V0.length;g0++){let b0=V0[g0],Z9=null;if(N!==null)Z9=N.getViewport(b0);else{let Y9=G.getViewSubImage(E,b0);if(Z9=Y9.viewport,g0===0)J.setRenderTargetTextures(A,Y9.colorTexture,Y9.depthStencilTexture),J.setRenderTarget(A)}let c0=S[g0];if(c0===void 0)c0=new m9,c0.layers.enable(g0),c0.viewport=new H9,S[g0]=c0;if(c0.matrix.fromArray(b0.transform.matrix),c0.matrix.decompose(c0.position,c0.quaternion,c0.scale),c0.projectionMatrix.fromArray(b0.projectionMatrix),c0.projectionMatrixInverse.copy(c0.projectionMatrix).invert(),c0.viewport.set(Z9.x,Z9.y,Z9.width,Z9.height),g0===0)g.matrix.copy(c0.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale);if(P0===!0)g.cameras.push(c0)}let w0=Z.enabledFeatures;if(w0&&w0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&L){G=$.getBinding();let g0=G.getDepthInformation(V0[0]);if(g0&&g0.isValid&&g0.texture)I.init(g0,Z.renderState)}if(w0&&w0.includes("camera-access")&&L){J.state.unbindTexture(),G=$.getBinding();for(let g0=0;g0<V0.length;g0++){let b0=V0[g0].camera;if(b0){let Z9=q[b0];if(!Z9)Z9=new NJ,q[b0]=Z9;let c0=G.getCameraImage(b0);Z9.sourceTexture=c0}}}}for(let V0=0;V0<B.length;V0++){let P0=C[V0],w0=B[V0];if(P0!==null&&w0!==void 0)w0.update(P0,$0,X||K)}if(r)r(n,$0);if($0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:$0});O=null}let L0=new OW;L0.setAnimationLoop(J0),this.setAnimationLoop=function(n){r=n},this.dispose=function(){}}}var FN=new K9,vW=new v0;vW.set(-1,0,0,0,1,0,0,0,1);function DN(J,Q){function $(q,F){if(q.matrixAutoUpdate===!0)q.updateMatrix();F.value.copy(q.matrix)}function Z(q,F){if(F.color.getRGB(q.fogColor.value,q$(J)),F.isFog)q.fogNear.value=F.near,q.fogFar.value=F.far;else if(F.isFogExp2)q.fogDensity.value=F.density}function W(q,F,z,A,B){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)K(q,F);else if(F.isMeshLambertMaterial){if(K(q,F),F.envMap)q.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)K(q,F),E(q,F);else if(F.isMeshPhongMaterial){if(K(q,F),G(q,F),F.envMap)q.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(K(q,F),N(q,F),F.isMeshPhysicalMaterial)O(q,F,B)}else if(F.isMeshMatcapMaterial)K(q,F),L(q,F);else if(F.isMeshDepthMaterial)K(q,F);else if(F.isMeshDistanceMaterial)K(q,F),I(q,F);else if(F.isMeshNormalMaterial)K(q,F);else if(F.isLineBasicMaterial){if(H(q,F),F.isLineDashedMaterial)Y(q,F)}else if(F.isPointsMaterial)X(q,F,z,A);else if(F.isSpriteMaterial)U(q,F);else if(F.isShadowMaterial)q.color.value.copy(F.color),q.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function K(q,F){if(q.opacity.value=F.opacity,F.color)q.diffuse.value.copy(F.color);if(F.emissive)q.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)q.map.value=F.map,$(F.map,q.mapTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,$(F.alphaMap,q.alphaMapTransform);if(F.bumpMap){if(q.bumpMap.value=F.bumpMap,$(F.bumpMap,q.bumpMapTransform),q.bumpScale.value=F.bumpScale,F.side===f9)q.bumpScale.value*=-1}if(F.normalMap){if(q.normalMap.value=F.normalMap,$(F.normalMap,q.normalMapTransform),q.normalScale.value.copy(F.normalScale),F.side===f9)q.normalScale.value.negate()}if(F.displacementMap)q.displacementMap.value=F.displacementMap,$(F.displacementMap,q.displacementMapTransform),q.displacementScale.value=F.displacementScale,q.displacementBias.value=F.displacementBias;if(F.emissiveMap)q.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,q.emissiveMapTransform);if(F.specularMap)q.specularMap.value=F.specularMap,$(F.specularMap,q.specularMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest;let z=Q.get(F),A=z.envMap,B=z.envMapRotation;if(A){if(q.envMap.value=A,q.envMapRotation.value.setFromMatrix4(FN.makeRotationFromEuler(B)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)q.envMapRotation.value.premultiply(vW);q.reflectivity.value=F.reflectivity,q.ior.value=F.ior,q.refractionRatio.value=F.refractionRatio}if(F.lightMap)q.lightMap.value=F.lightMap,q.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,q.lightMapTransform);if(F.aoMap)q.aoMap.value=F.aoMap,q.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,q.aoMapTransform)}function H(q,F){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,F.map)q.map.value=F.map,$(F.map,q.mapTransform)}function Y(q,F){q.dashSize.value=F.dashSize,q.totalSize.value=F.dashSize+F.gapSize,q.scale.value=F.scale}function X(q,F,z,A){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,q.size.value=F.size*z,q.scale.value=A*0.5,F.map)q.map.value=F.map,$(F.map,q.uvTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,$(F.alphaMap,q.alphaMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest}function U(q,F){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,q.rotation.value=F.rotation,F.map)q.map.value=F.map,$(F.map,q.mapTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,$(F.alphaMap,q.alphaMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest}function G(q,F){q.specular.value.copy(F.specular),q.shininess.value=Math.max(F.shininess,0.0001)}function E(q,F){if(F.gradientMap)q.gradientMap.value=F.gradientMap}function N(q,F){if(q.metalness.value=F.metalness,F.metalnessMap)q.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=F.roughness,F.roughnessMap)q.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,q.roughnessMapTransform);if(F.envMap)q.envMapIntensity.value=F.envMapIntensity}function O(q,F,z){if(q.ior.value=F.ior,F.diffuseRoughness>0){if(q.diffuseRoughness.value=F.diffuseRoughness,F.diffuseRoughnessMap)q.diffuseRoughnessMap.value=F.diffuseRoughnessMap,$(F.diffuseRoughnessMap,q.diffuseRoughnessMapTransform)}if(F.sheen>0){if(q.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),q.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)q.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,q.sheenColorMapTransform);if(F.sheenRoughnessMap)q.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(q.clearcoat.value=F.clearcoat,q.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)q.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,q.clearcoatMapTransform);if(F.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(q.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===f9)q.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)q.dispersion.value=F.dispersion;if(F.retroreflectivity>0)q.retroreflectivity.value=F.retroreflectivity;if(F.iridescence>0){if(q.iridescence.value=F.iridescence,q.iridescenceIOR.value=F.iridescenceIOR,q.iridescenceThicknessMinimum.value=F.iridescenceThicknessMinimum,q.iridescenceThicknessMaximum.value=F.iridescenceThicknessMaximum,F.iridescenceMap)q.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,q.iridescenceMapTransform);if(F.iridescenceThicknessMap)q.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(F.transmission>0){if(q.transmission.value=F.transmission,q.transmissionSamplerMap.value=z.texture,q.transmissionSamplerSize.value.set(z.width,z.height),F.transmissionMap)q.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=F.thickness,F.thicknessMap)q.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=F.attenuationDistance,q.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(q.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)q.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=F.specularIntensity,q.specularColor.value.copy(F.specularColor),F.specularColorMap)q.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,q.specularColorMapTransform);if(F.specularIntensityMap)q.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,q.specularIntensityMapTransform)}function L(q,F){if(F.matcap)q.matcap.value=F.matcap}function I(q,F){let z=Q.get(F).light;q.referencePosition.value.setFromMatrixPosition(z.matrixWorld),q.nearDistance.value=z.shadow.camera.near,q.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function ON(J,Q,$,Z){let W={},K={};function H(z,A){let B=A.program;Z.uniformBlockBinding(z,B,W[z.id])}function Y(z,A){let B=W[z.id];if(B===void 0)L(z),B=X(z),W[z.id]=B,z.addEventListener("dispose",q);let C=A.program;Z.updateUBOMapping(z,C);let w=Q.render.frame;if(K[z.id]!==w)U(z),K[z.id]=w}function X(z){let A=J.createBuffer(),B=z.__size,C=z.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,B,C),J.bindBuffer(J.UNIFORM_BUFFER,null),A}function U(z){let A=W[z.id],B=z.uniforms,C=z.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let w=0,D=B.length;w<D;w++){let V=B[w];if(Array.isArray(V))for(let j=0,x=V.length;j<x;j++)G(V[j],w,j,C);else G(V,w,0,C)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function G(z,A,B,C){if(N(z,A,B,C)===!0){let{__offset:w,value:D}=z;if(Array.isArray(D)){let V=0;for(let j=0;j<D.length;j++){let x=D[j],S=I(x,!0);E(x,z.__data,V),V+=S.storage/Float32Array.BYTES_PER_ELEMENT}}else E(D,z.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,w,z.__data)}}function E(z,A,B){if(typeof z==="number"||typeof z==="boolean")A[B]=z;else if(z.isMatrix3)A[B]=z.elements[0],A[B+1]=z.elements[1],A[B+2]=z.elements[2],A[B+3]=0,A[B+4]=z.elements[3],A[B+5]=z.elements[4],A[B+6]=z.elements[5],A[B+7]=0,A[B+8]=z.elements[6],A[B+9]=z.elements[7],A[B+10]=z.elements[8],A[B+11]=0;else if(ArrayBuffer.isView(z))A.set(z.subarray(0,A.length-B),B);else z.toArray(A,B)}function N(z,A,B,C){let w=z.value,D=A+"_"+B;if(Array.isArray(w)){if(C[D]===void 0)C[D]=[];let V=C[D],j=!1;for(let x=0;x<w.length;x++)if(O(w[x],V,x)===!0)j=!0;return j}return O(w,C,D)}function O(z,A,B){if(A[B]===void 0){if(typeof z==="number"||typeof z==="boolean")A[B]=z;else if(ArrayBuffer.isView(z))A[B]=z.slice();else A[B]=z.clone();return!0}else{let C=A[B];if(typeof z==="number"||typeof z==="boolean"){if(C!==z)return A[B]=z,!0}else if(ArrayBuffer.isView(z))return!0;else if(C.equals(z)===!1)return C.copy(z),!0}return!1}function L(z){let A=z.uniforms,B=0,C=16;for(let D=0,V=A.length;D<V;D++){let j=Array.isArray(A[D])?A[D]:[A[D]];for(let x=0,S=j.length;x<S;x++){let g=j[x],a=Array.isArray(g.value)?g.value:[g.value],P=Array.isArray(A[D])||Array.isArray(g.value),c=B;for(let b=0,W0=a.length;b<W0;b++){let d=a[b],r=I(d,P),J0=B%C,L0=J0%r.boundary,n=J0+L0;if(B+=L0,n!==0&&C-n<r.storage)B+=C-n;if(b===0)c=B;B+=r.storage}let o=g.type==="int"?Int32Array:g.type==="uint"?Uint32Array:Float32Array;g.__data=new o((B-c)/Float32Array.BYTES_PER_ELEMENT),g.__offset=c}}let w=B%C;if(w>0)B+=C-w;return z.__size=B,z.__cache={},this}function I(z,A){let B={boundary:0,storage:0};if(typeof z==="number"||typeof z==="boolean")B.boundary=4,B.storage=4;else if(z.isVector2)B.boundary=8,B.storage=8;else if(z.isVector3||z.isColor)B.boundary=16,B.storage=12;else if(z.isVector4)B.boundary=16,B.storage=16;else if(z.isMatrix3)B.boundary=16,B.storage=48;else if(z.isMatrix4)B.boundary=16,B.storage=64;else if(z.isTexture)S0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(z))B.boundary=16,B.storage=z.byteLength;else S0("WebGLRenderer: Unsupported uniform value type.",z);if(A===!0)B.boundary=16,B.storage=Math.ceil(B.storage/16)*16;return B}function q(z){let A=z.target;A.removeEventListener("dispose",q),J.deleteBuffer(W[A.id]),delete W[A.id],delete K[A.id]}function F(){for(let z in W)J.deleteBuffer(W[z]);W={},K={}}return{bind:H,update:Y,dispose:F}}var RN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Y7=null;function MN(){if(Y7===null)Y7=new e8(RN,16,16,n7,H7),Y7.name="DFG_LUT",Y7.minFilter=C9,Y7.magFilter=C9,Y7.wrapS=o6,Y7.wrapT=o6,Y7.generateMipmaps=!1,Y7.needsUpdate=!0;return Y7}class f${constructor(J={}){let{canvas:Q=x5(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1,outputBufferType:N=e9}=J;this.isWebGLRenderer=!0;let O;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");O=$.getContextAttributes().alpha}else O=K;let L=N,I=new Set([BQ,VQ,LQ]),q=new Set([e9,j7,s8,c7,RQ,MQ]),F=new Uint32Array(4),z=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},B=null,C=null,w=[],D=[],V=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=K7,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,x=!1,S=null,g=null,a=null,P=null;this._outputColorSpace=j5;let c=0,o=0,b=null,W0=-1,d=null,r=new H9,J0=new H9,L0=null,n=new s0(0),$0=0,V0=Q.width,P0=Q.height,w0=1,B0=null,o0=null,g0=new H9(0,0,V0,P0),b0=new H9(0,0,V0,P0),Z9=!1,c0=new M8,Y9=new YJ,X9=!1,S9=!1,b9=new K9,U9=new p,V9=new H9,j9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},v9=!1;function c9(){return b===null?w0:1}let v=$;function n9(M,T){return Q.getContext(M,T)}let r0,F9,E0,Q9,_0,f0,B9,k,R,f,e,t,K0,X0,l,i,H0,_,s,u,Q0,Z0,N0;try{let M={alpha:!0,depth:Z,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${mZ}`);if(Q.addEventListener("webglcontextlost",q0,!1),Q.addEventListener("webglcontextrestored",C0,!1),Q.addEventListener("webglcontextcreationerror",h0,!1),v===null){if(v=n9("webgl2",M),v===null)if(n9("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}A0()}catch(M){throw Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",C0,!1),Q.removeEventListener("webglcontextcreationerror",h0,!1),j0("WebGLRenderer: "+M.message),M}function A0(){if(r0=new _U(v),r0.init(),Q0=new EN(v,r0),F9=new MU(v,r0,J,Q0),E0=new UN(v,r0),F9.reversedDepthBuffer&&E)E0.buffers.depth.setReversed(!0);g=v.createFramebuffer(),a=v.createFramebuffer(),P=v.createFramebuffer(),Q9=new jU(v),_0=new o1,f0=new NN(v,r0,E0,_0,F9,Q0,Q9),B9=new wU(j),k=new fH(v),Z0=new OU(v,k),R=new TU(v,k,Q9,Z0),f=new fU(v,R,k,Z0,Q9),_=new vU(v,F9,f0),l=new LU(_0),e=new i1(j,B9,r0,F9,Z0,l),t=new DN(j,_0),K0=new r1,X0=new ZN(r0),H0=new DU(j,B9,E0,f,O,Y),i=new XN(j,f,F9),N0=new ON(v,Q9,F9,E0),s=new RU(v,r0,Q9),u=new SU(v,r0,Q9),Q9.programs=e.programs,j.capabilities=F9,j.extensions=r0,j.properties=_0,j.renderLists=K0,j.shadowMap=i,j.state=E0,j.info=Q9}if(L!==e9)V=new bU(L,Q.width,Q.height,H,Z,W);let z0=new jW(j,v);this.xr=z0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let M=r0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=r0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return w0},this.setPixelRatio=function(M){if(M===void 0)return;w0=M,this.setSize(V0,P0,!1)},this.getSize=function(M){return M.set(V0,P0)},this.setSize=function(M,T,m=!0){if(z0.isPresenting){S0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(V0=M,P0=T,Q.width=Math.floor(M*w0),Q.height=Math.floor(T*w0),m===!0)Q.style.width=M+"px",Q.style.height=T+"px";if(V!==null)V.setSize(Q.width,Q.height);this.setViewport(0,0,M,T)},this.getDrawingBufferSize=function(M){return M.set(V0*w0,P0*w0).floor()},this.setDrawingBufferSize=function(M,T,m){V0=M,P0=T,w0=m,Q.width=Math.floor(M*m),Q.height=Math.floor(T*m),this.setViewport(0,0,M,T)},this.setEffects=function(M){if(L===e9){j0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let T=0;T<M.length;T++)if(M[T].isOutputPass===!0){S0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(r)},this.getViewport=function(M){return M.copy(g0)},this.setViewport=function(M,T,m,y){if(M.isVector4)g0.set(M.x,M.y,M.z,M.w);else g0.set(M,T,m,y);E0.viewport(r.copy(g0).multiplyScalar(c9()).round())},this.getScissor=function(M){return M.copy(b0)},this.setScissor=function(M,T,m,y){if(M.isVector4)b0.set(M.x,M.y,M.z,M.w);else b0.set(M,T,m,y);E0.scissor(J0.copy(b0).multiplyScalar(c9()).round())},this.getScissorTest=function(){return Z9},this.setScissorTest=function(M){E0.setScissorTest(Z9=M)},this.setOpaqueSort=function(M){B0=M},this.setTransparentSort=function(M){o0=M},this.getClearColor=function(M){return M.copy(H0.getClearColor())},this.setClearColor=function(){H0.setClearColor(...arguments)},this.getClearAlpha=function(){return H0.getClearAlpha()},this.setClearAlpha=function(){H0.setClearAlpha(...arguments)},this.clear=function(M=!0,T=!0,m=!0){let y=0;if(M){let h=!1;if(b!==null){let U0=b.texture.format;h=I.has(U0)}if(h){let U0=b.texture.type,O0=q.has(U0),Y0=H0.getClearColor(),D0=H0.getClearAlpha(),I0=Y0.r,y0=Y0.g,p0=Y0.b;if(O0)F[0]=I0,F[1]=y0,F[2]=p0,F[3]=D0,v.clearBufferuiv(v.COLOR,0,F);else z[0]=I0,z[1]=y0,z[2]=p0,z[3]=D0,v.clearBufferiv(v.COLOR,0,z)}else y|=v.COLOR_BUFFER_BIT}if(T)y|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)y|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(y!==0)v.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),S=M},this.dispose=function(){Q.removeEventListener("webglcontextlost",q0,!1),Q.removeEventListener("webglcontextrestored",C0,!1),Q.removeEventListener("webglcontextcreationerror",h0,!1),H0.dispose(),K0.dispose(),X0.dispose(),f0.dispose(),_0.dispose(),B9.dispose(),f.dispose(),R.dispose(),Z0.dispose(),N0.dispose(),e.dispose(),z0.dispose(),z0.removeEventListener("sessionstart",g$),z0.removeEventListener("sessionend",p$),h7.stop()};function q0(M){M.preventDefault(),H$("WebGLRenderer: Context Lost."),x=!0}function C0(){H$("WebGLRenderer: Context Restored."),x=!1;let M=Q9.autoReset,T=i.enabled,m=i.autoUpdate,y=i.needsUpdate,h=i.type;A0(),Q9.autoReset=M,i.enabled=T,i.autoUpdate=m,i.needsUpdate=y,i.type=h}function h0(M){j0("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function F0(M){let T=M.target;T.removeEventListener("dispose",F0),t0(T)}function t0(M){D9(M),_0.remove(M)}function D9(M){let T=_0.get(M).programs;if(T!==void 0){if(T.forEach(function(m){e.releaseProgram(m)}),M.isShaderMaterial)e.releaseShaderCache(M)}}this.renderBufferDirect=function(M,T,m,y,h,U0){if(T===null)T=j9;let O0=h.isMesh&&h.matrixWorld.determinantAffine()<0,Y0=UK(M,T,m,y,h);E0.setMaterial(y,O0);let D0=m.index,I0=1;if(y.wireframe===!0){if(D0=R.getWireframeAttribute(m),D0===void 0)return;I0=2}let y0=m.drawRange,p0=m.attributes.position,R0=y0.start*I0,m0=(y0.start+y0.count)*I0;if(U0!==null)R0=Math.max(R0,U0.start*I0),m0=Math.min(m0,(U0.start+U0.count)*I0);if(D0!==null)R0=Math.max(R0,0),m0=Math.min(m0,D0.count);else if(p0!==void 0&&p0!==null)R0=Math.max(R0,0),m0=Math.min(m0,p0.count);let N9=m0-R0;if(N9<0||N9===1/0)return;Z0.setup(h,y,Y0,m,D0);let $9,e0=s;if(D0!==null)$9=k.get(D0),e0=u,e0.setIndex($9);if(h.isMesh)if(y.wireframe===!0)E0.setLineWidth(y.wireframeLinewidth*c9()),e0.setMode(v.LINES);else e0.setMode(v.TRIANGLES);else if(h.isLine){let k9=y.linewidth;if(k9===void 0)k9=1;if(E0.setLineWidth(k9*c9()),h.isLineSegments)e0.setMode(v.LINES);else if(h.isLineLoop)e0.setMode(v.LINE_LOOP);else e0.setMode(v.LINE_STRIP)}else if(h.isPoints)e0.setMode(v.POINTS);else if(h.isSprite)e0.setMode(v.TRIANGLES);if(h.isBatchedMesh)if(!r0.get("WEBGL_multi_draw")){let{_multiDrawStarts:k9,_multiDrawCounts:M0,_multiDrawCount:w9}=h,i0=D0?k.get(D0).bytesPerElement:1,x7=_0.get(y).currentProgram.getUniforms();for(let I9=0;I9<w9;I9++)x7.setValue(v,"_gl_DrawID",I9),e0.render(k9[I9]/i0,M0[I9])}else e0.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)e0.renderInstances(R0,N9,h.count);else if(m.isInstancedBufferGeometry){let k9=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,M0=Math.min(m.instanceCount,k9);e0.renderInstances(R0,N9,M0)}else e0.render(R0,N9)};function U7(M,T,m,y){if(S!==null&&M.isNodeMaterial)S.setObject(y,M);if(X9===!0)l.setState(M,m,!1);if(M.transparent===!0&&M.side===y9&&M.forceSinglePass===!1)M.side=f9,M.needsUpdate=!0,v8(M,T,y),M.side=V8,M.needsUpdate=!0,v8(M,T,y),M.side=y9;else v8(M,T,y)}this.compile=function(M,T,m=null){if(m===null)m=M;if(S!==null)S.renderStart(M,T,m);if(C=X0.get(m),C.init(T),D.push(C),m.traverseVisible(function(h){if(h.isLight&&h.layers.test(T.layers)){if(C.pushLight(h),h.castShadow)C.pushShadow(h)}}),M!==m)M.traverseVisible(function(h){if(h.isLight&&h.layers.test(T.layers)){if(C.pushLight(h),h.castShadow)C.pushShadow(h)}});if(C.setupLights(),S!==null)S.updateLights(C.state.lightsArray);if(S9=this.localClippingEnabled,X9=l.init(this.clippingPlanes,S9),X9===!0)l.setGlobalState(this.clippingPlanes,T);if(S!==null)i.render(C.state.shadowsArray,m,T);let y=new Set;if(M.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let U0=h.material;if(U0)if(Array.isArray(U0))for(let O0=0;O0<U0.length;O0++){let Y0=U0[O0];U7(Y0,m,T,h),y.add(Y0)}else U7(U0,m,T,h),y.add(U0)}),C=D.pop(),S!==null)S.renderEnd();return y},this.compileAsync=function(M,T,m=null){let y=this.compile(M,T,m);return new Promise((h)=>{function U0(){if(y.forEach(function(O0){let D0=_0.get(O0).currentProgram;if(D0===void 0||D0.isReady())y.delete(O0)}),y.size===0){h(M);return}setTimeout(U0,10)}if(r0.get("KHR_parallel_shader_compile")!==null)U0();else setTimeout(U0,10)})};let kJ=null;function YK(M){if(kJ)kJ(M)}function g$(){h7.stop()}function p$(){h7.start()}let h7=new OW;if(h7.setAnimationLoop(YK),typeof self<"u")h7.setContext(self);this.setAnimationLoop=function(M){kJ=M,z0.setAnimationLoop(M),M===null?h7.stop():h7.start()},z0.addEventListener("sessionstart",g$),z0.addEventListener("sessionend",p$),this.render=function(M,T){if(T!==void 0&&T.isCamera!==!0){j0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(S!==null)S.renderStart(M,T);let m=z0.enabled===!0&&z0.isPresenting===!0,y=V!==null&&(b===null||m)&&V.begin(j,b);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(T.parent===null&&T.matrixWorldAutoUpdate===!0)T.updateMatrixWorld();if(z0.enabled===!0&&z0.isPresenting===!0&&(V===null||V.isCompositing()===!1)){if(z0.cameraAutoUpdate===!0)z0.updateCamera(T);T=z0.getCamera()}if(M.isScene===!0)M.onBeforeRender(j,M,T,b);if(C=X0.get(M,D.length),C.init(T),C.state.textureUnits=f0.getTextureUnits(),D.push(C),b9.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera)Y9.setFromArrayCamera(T);else c0.setFromProjectionMatrix(b9,K$,T.reversedDepth);if(S9=this.localClippingEnabled,X9=l.init(this.clippingPlanes,S9),B=K0.get(M,w.length),B.init(),w.push(B),this.info.render.frame++,z0.enabled===!0&&z0.isPresenting===!0){let O0=j.xr.getDepthSensingMesh();if(O0!==null)IJ(O0,T,-1/0,j.sortObjects)}if(IJ(M,T,0,j.sortObjects),B.finish(),S!==null)S.updateLights(C.state.lightsArray);if(j.sortObjects===!0)B.sort(B0,o0);if(v9=z0.enabled===!1||z0.isPresenting===!1||z0.hasDepthSensing()===!1,v9)H0.addToRenderList(B,M);if(this.info.autoReset===!0)this.info.reset();if(X9===!0)l.beginShadows();let h=C.state.shadowsArray;if(i.render(h,M,T),X9===!0)l.endShadows();if((y&&V.hasRenderPass())===!1){let{opaque:O0,transmissive:Y0}=B;if(C.setupLights(),T.isArrayCamera){let D0=T.cameras;if(Y0.length>0)for(let I0=0,y0=D0.length;I0<y0;I0++){let p0=D0[I0];l$(O0,Y0,M,p0)}if(v9)H0.render(M);for(let I0=0,y0=D0.length;I0<y0;I0++){let p0=D0[I0];m$(B,M,p0,p0.viewport)}}else{if(Y0.length>0)l$(O0,Y0,M,T);if(v9)H0.render(M);m$(B,M,T)}}if(b!==null&&o===0)f0.updateMultisampleRenderTarget(b),f0.updateRenderTargetMipmap(b);if(y)V.end(j);if(M.isScene===!0)M.onAfterRender(j,M,T);if(Z0.resetDefaultState(),W0=-1,d=null,D.pop(),D.length>0){if(C=D[D.length-1],f0.setTextureUnits(C.state.textureUnits),X9===!0)l.setGlobalState(j.clippingPlanes,C.state.camera)}else C=null;if(w.pop(),w.length>0)B=w[w.length-1];else B=null;if(S!==null)S.renderEnd()};function IJ(M,T,m,y){if(M.visible===!1)return;if(M.layers.test(T.layers)){if(M.isGroup)m=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(T)}else if(M.isLight){if(C.pushLight(M),M.castShadow)C.pushShadow(M)}else if(M.isSprite){let O0=T.isArrayCamera?Y9:c0;if(!M.frustumCulled||M.intersectsFrustum(O0)){if(y)V9.setFromMatrixPosition(M.matrixWorld).applyMatrix4(b9);let Y0=f.update(M),D0=M.material;if(D0.visible)B.push(M,Y0,D0,m,V9.z,null,T)}}else if(M.isMesh||M.isLine||M.isPoints){let O0=T.isArrayCamera?Y9:c0;if(!M.frustumCulled||M.intersectsFrustum(O0)){let Y0=f.update(M),D0=M.material;if(y){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();V9.copy(M.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();V9.copy(Y0.boundingSphere.center)}V9.applyMatrix4(M.matrixWorld).applyMatrix4(b9)}if(Array.isArray(D0)){let I0=Y0.groups;for(let y0=0,p0=I0.length;y0<p0;y0++){let R0=I0[y0],m0=D0[R0.materialIndex];if(m0&&m0.visible)B.push(M,Y0,m0,m,V9.z,R0,T)}}else if(D0.visible)B.push(M,Y0,D0,m,V9.z,null,T)}}}let U0=M.children;for(let O0=0,Y0=U0.length;O0<Y0;O0++)IJ(U0[O0],T,m,y)}function m$(M,T,m,y){let{opaque:h,transmissive:U0,transparent:O0}=M;if(C.setupLightsView(m),X9===!0)l.setGlobalState(j.clippingPlanes,m);if(y)E0.viewport(r.copy(y));if(h.length>0)X6(h,T,m);if(U0.length>0)X6(U0,T,m);if(O0.length>0)X6(O0,T,m);E0.buffers.depth.setTest(!0),E0.buffers.depth.setMask(!0),E0.buffers.color.setMask(!0),E0.setPolygonOffset(!1)}function l$(M,T,m,y){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[y.id]===void 0){let R0=r0.has("EXT_color_buffer_half_float")||r0.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[y.id]=new d9(1,1,{generateMipmaps:!0,type:R0?H7:e9,minFilter:S7,samples:Math.max(4,F9.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:l0.workingColorSpace})}let U0=C.state.transmissionRenderTarget[y.id],O0=y.viewport||r;U0.setSize(O0.z*j.transmissionResolutionScale,O0.w*j.transmissionResolutionScale);let Y0=j.getRenderTarget(),D0=j.getActiveCubeFace(),I0=j.getActiveMipmapLevel();if(j.setRenderTarget(U0),j.getClearColor(n),$0=j.getClearAlpha(),$0<1)j.setClearColor(16777215,0.5);if(j.clear(),v9)H0.render(m);let y0=j.toneMapping;j.toneMapping=K7;let p0=y.viewport;if(y.viewport!==void 0)y.viewport=void 0;if(C.setupLightsView(y),X9===!0)l.setGlobalState(j.clippingPlanes,y);if(X6(M,m,y),f0.updateMultisampleRenderTarget(U0),f0.updateRenderTargetMipmap(U0),r0.has("WEBGL_multisampled_render_to_texture")===!1){let R0=!1;for(let m0=0,N9=T.length;m0<N9;m0++){let $9=T[m0],{object:e0,geometry:k9,material:M0,group:w9}=$9;if(M0.side===y9&&e0.layers.test(y.layers)){let i0=M0.side;M0.side=f9,M0.needsUpdate=!0,d$(e0,m,y,k9,M0,w9),M0.side=i0,M0.needsUpdate=!0,R0=!0}}if(R0===!0)f0.updateMultisampleRenderTarget(U0),f0.updateRenderTargetMipmap(U0)}if(j.setRenderTarget(Y0,D0,I0),j.setClearColor(n,$0),p0!==void 0)y.viewport=p0;j.toneMapping=y0}function X6(M,T,m){let y=T.isScene===!0?T.overrideMaterial:null;for(let h=0,U0=M.length;h<U0;h++){let O0=M[h],{object:Y0,geometry:D0,group:I0}=O0,y0=O0.material;if(y0.allowOverride===!0&&y!==null)y0=y;if(Y0.layers.test(m.layers))d$(Y0,T,m,D0,y0,I0)}}function d$(M,T,m,y,h,U0){if(S!==null&&h.isNodeMaterial)S.setObject(M,h);if(M.onBeforeRender(j,T,m,y,h,U0),M.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),h.onBeforeRender(j,T,m,y,M,U0),h.transparent===!0&&h.side===y9&&h.forceSinglePass===!1)h.side=f9,h.needsUpdate=!0,j.renderBufferDirect(m,T,y,h,M,U0),h.side=V8,h.needsUpdate=!0,j.renderBufferDirect(m,T,y,h,M,U0),h.side=y9;else j.renderBufferDirect(m,T,y,h,M,U0);M.onAfterRender(j,T,m,y,h,U0)}function u$(M){let T=0;for(let m of M)if(m.texture!==null)T++;return T}function v8(M,T,m){if(T.isScene!==!0)T=j9;let y=_0.get(M),h=C.state.lights,U0=C.state.shadowsArray,O0=h.state.version,Y0=e.getParameters(M,h.state,U0,T,m,C.state.lightProbeGridArray),D0=e.getProgramCacheKey(Y0),I0=y.programs;y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?T.environment:null,y.fog=T.fog;let y0=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(y.envMap=B9.get(M.envMap||y.environment,y0),y.envMapRotation=y.environment!==null&&M.envMap===null?T.environmentRotation:M.envMapRotation,I0===void 0)M.addEventListener("dispose",F0),I0=new Map,y.programs=I0,y.programVariants=new Map;let p0=I0.get(D0);if(p0!==void 0){if(y.currentProgram===p0&&y.lightsStateVersion===O0)return n$(M,Y0),p0}else{if(Y0.uniforms=e.getUniforms(M),S!==null&&M.isNodeMaterial)S.build(M,m,Y0);M.onBeforeCompile(Y0,j),p0=e.acquireProgram(Y0,D0),I0.set(D0,p0),y.uniforms=Y0.uniforms}let R0=y.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)R0.clippingPlanes=l.uniform;if(n$(M,Y0),y.needsLights=EK(M),y.lightsStateVersion=O0,y.needsLights)R0.ambientLightColor.value=h.state.ambient,R0.lightProbe.value=h.state.probe,R0.sunLights.value=h.state.sun,R0.sunLightShadows.value=h.state.sunShadow,R0.directionalLights.value=h.state.directional,R0.directionalLightShadows.value=h.state.directionalShadow,R0.spotLights.value=h.state.spot,R0.spotLightShadows.value=h.state.spotShadow,R0.rectAreaLights.value=h.state.rectArea,R0.ltc_1.value=h.state.rectAreaLTC1,R0.ltc_2.value=h.state.rectAreaLTC2,R0.pointLights.value=h.state.point,R0.pointLightShadows.value=h.state.pointShadow,R0.hemisphereLights.value=h.state.hemi,R0.sunShadowMatrix.value=h.state.sunShadowMatrix,R0.sunShadowCascade.value=h.state.sunShadowCascade,R0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,R0.spotLightMatrix.value=h.state.spotLightMatrix,R0.spotLightMap.value=h.state.spotLightMap,R0.pointShadowMatrix.value=h.state.pointShadowMatrix;return y.numLightProbeGrids=u$(C.state.lightProbeGridArray),y.currentProgram=p0,y.uniformsList=null,p0}function XK(M,T,m,y,h){let U0=_0.get(M),O0=U0.currentProgram.id+","+y+","+h,Y0=U0.programVariants.get(O0);if(Y0===void 0)Y0=v8(M,T,m),U0.programVariants.set(O0,Y0);else U0.currentProgram=Y0,U0.uniformsList=null,U0.outputColorSpace=y,U0.toneMapping=h;return Y0}function c$(M){if(M.uniformsList===null){let T=M.currentProgram.getUniforms();M.uniformsList=W6.seqWithValue(T.seq,M.uniforms)}return M.uniformsList}function n$(M,T){let m=_0.get(M);m.outputColorSpace=T.outputColorSpace,m.batching=T.batching,m.batchingColor=T.batchingColor,m.instancing=T.instancing,m.instancingColor=T.instancingColor,m.instancingMorph=T.instancingMorph,m.skinning=T.skinning,m.morphTargets=T.morphTargets,m.morphNormals=T.morphNormals,m.morphColors=T.morphColors,m.morphTargetsCount=T.morphTargetsCount,m.numClippingPlanes=T.numClippingPlanes,m.numIntersection=T.numClipIntersection,m.vertexAlphas=T.vertexAlphas,m.vertexTangents=T.vertexTangents,m.toneMapping=T.toneMapping}function UK(M,T,m,y,h){if(T.isScene!==!0)T=j9;f0.resetTextureUnits();let U0=T.fog,O0=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,Y0=b===null?j.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:l0.workingColorSpace,D0=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,I0=B9.get(y.envMap||O0,D0),y0=y.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,p0=!!m.attributes.tangent&&(!!y.normalMap||y.anisotropy>0),R0=!!m.morphAttributes.position,m0=!!m.morphAttributes.normal,N9=!!m.morphAttributes.color,$9=K7;if(y.toneMapped){if(b===null||b.isXRRenderTarget===!0)$9=j.toneMapping}let e0=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,k9=e0!==void 0?e0.length:0,M0=_0.get(y),w9=C.state.lights;if(X9===!0){if(S9===!0||M!==d){let W9=M===d&&y.id===W0;l.setState(y,M,W9)}}let i0=!1,x7=!1;if(y.version===M0.__version){if(M0.needsLights&&M0.lightsStateVersion!==w9.state.version)i0=!0;else if(h.isBatchedMesh&&M0.batching===!1)i0=!0;else if(!h.isBatchedMesh&&M0.batching===!0)i0=!0;else if(h.isBatchedMesh&&M0.batchingColor===!0&&h._colorsTexture===null)i0=!0;else if(h.isBatchedMesh&&M0.batchingColor===!1&&h._colorsTexture!==null)i0=!0;else if(h.isInstancedMesh&&M0.instancing===!1)i0=!0;else if(!h.isInstancedMesh&&M0.instancing===!0)i0=!0;else if(h.isSkinnedMesh&&M0.skinning===!1)i0=!0;else if(!h.isSkinnedMesh&&M0.skinning===!0)i0=!0;else if(h.isInstancedMesh&&M0.instancingColor===!0&&h.instanceColor===null)i0=!0;else if(h.isInstancedMesh&&M0.instancingColor===!1&&h.instanceColor!==null)i0=!0;else if(h.isInstancedMesh&&M0.instancingMorph===!0&&h.morphTexture===null)i0=!0;else if(h.isInstancedMesh&&M0.instancingMorph===!1&&h.morphTexture!==null)i0=!0;else if(M0.envMap!==I0)i0=!0;else if(y.fog===!0&&M0.fog!==U0)i0=!0;else if(M0.numClippingPlanes!==void 0&&(M0.numClippingPlanes!==l.numPlanes||M0.numIntersection!==l.numIntersection))i0=!0;else if(M0.vertexAlphas!==y0)i0=!0;else if(M0.vertexTangents!==p0)i0=!0;else if(M0.morphTargets!==R0)i0=!0;else if(M0.morphNormals!==m0)i0=!0;else if(M0.morphColors!==N9)i0=!0;else if(M0.morphTargetsCount!==k9)i0=!0;else if(M0.numLightProbeGrids!==u$(C.state.lightProbeGridArray))i0=!0;else if(M0.outputColorSpace!==Y0||M0.toneMapping!==$9)x7=!0}else i0=!0,M0.__version=y.version;let I9=M0.currentProgram;if(i0===!0||x7===!0){if(I9=x7===!0?XK(y,T,h,Y0,$9):v8(y,T,h),S&&y.isNodeMaterial)S.onUpdateProgram(y,I9,M0)}let U6=!1,I7=!1,g7=!1,n0=I9.getUniforms(),M9=M0.uniforms;if(E0.useProgram(I9.program))U6=!0,I7=!0,g7=!0;if(y.id!==W0)W0=y.id,I7=!0;if(U6||d!==M){if(E0.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();n0.setValue(v,"projectionMatrix",M.projectionMatrix),n0.setValue(v,"viewMatrix",M.matrixWorldInverse);let O9=n0.map.cameraPosition;if(O9!==void 0)O9.setValue(v,U9.setFromMatrixPosition(M.matrixWorld));if(F9.logarithmicDepthBuffer)n0.setValue(v,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(y.isMeshPhongMaterial||y.isMeshToonMaterial||y.isMeshLambertMaterial||y.isMeshBasicMaterial||y.isMeshStandardMaterial||y.isShaderMaterial)n0.setValue(v,"isOrthographic",M.isOrthographicCamera===!0);if(d!==M)d=M,I7=!0,g7=!0}if(M0.needsLights){if(w9.state.sunShadowMap.length>0)n0.setValue(v,"sunShadowMap",w9.state.sunShadowMap,f0);if(w9.state.directionalShadowMap.length>0)n0.setValue(v,"directionalShadowMap",w9.state.directionalShadowMap,f0);if(w9.state.spotShadowMap.length>0)n0.setValue(v,"spotShadowMap",w9.state.spotShadowMap,f0);if(w9.state.pointShadowMap.length>0)n0.setValue(v,"pointShadowMap",w9.state.pointShadowMap,f0)}if(h.isSkinnedMesh){n0.setOptional(v,h,"bindMatrix"),n0.setOptional(v,h,"bindMatrixInverse");let W9=h.skeleton;if(W9){if(W9.boneTexture===null)W9.computeBoneTexture();n0.setValue(v,"boneTexture",W9.boneTexture,f0)}}if(h.isBatchedMesh){if(n0.setOptional(v,h,"batchingTexture"),n0.setValue(v,"batchingTexture",h._matricesTexture,f0),n0.setOptional(v,h,"batchingIdTexture"),n0.setValue(v,"batchingIdTexture",h._indirectTexture,f0),n0.setOptional(v,h,"batchingColorTexture"),h._colorsTexture!==null)n0.setValue(v,"batchingColorTexture",h._colorsTexture,f0)}let s9=m.morphAttributes;if(s9.position!==void 0||s9.normal!==void 0||s9.color!==void 0)_.update(h,m,I9);if(I7||M0.receiveShadow!==h.receiveShadow)M0.receiveShadow=h.receiveShadow,n0.setValue(v,"receiveShadow",h.receiveShadow);if((y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial)&&y.envMap===null&&T.environment!==null)M9.envMapIntensity.value=T.environmentIntensity;if(M9.dfgLUT!==void 0)M9.dfgLUT.value=MN();if(I7){if(n0.setValue(v,"toneMappingExposure",j.toneMappingExposure),M0.needsLights)NK(M9,g7);if(U0&&y.fog===!0)t.refreshFogUniforms(M9,U0);if(t.refreshMaterialUniforms(M9,y,w0,P0,C.state.transmissionRenderTarget[M.id]),M0.needsLights&&M0.numLightProbeGrids>0){let W9=A,O9=0;for(let N7 of C.state.lightProbeGridArray){if(N7.texture===null)continue;W9.textures[O9]=N7.texture,W9.min[O9]=N7.boundingBox.min,W9.max[O9]=N7.boundingBox.max,W9.resolution[O9]=N7.resolution,O9++}for(let N7 in W9)W9[N7].length=O9;M9.probesSH.value=W9.textures,M9.probesMin.value=W9.min,M9.probesMax.value=W9.max,M9.probesResolution.value=W9.resolution}W6.upload(v,c$(M0),M9,f0)}if(y.isShaderMaterial&&y.uniformsNeedUpdate===!0)W6.upload(v,c$(M0),M9,f0),y.uniformsNeedUpdate=!1;if(y.isSpriteMaterial)n0.setValue(v,"center",h.center);if(n0.setValue(v,"modelViewMatrix",h.modelViewMatrix),n0.setValue(v,"normalMatrix",h.normalMatrix),n0.setValue(v,"modelMatrix",h.matrixWorld),y.uniformsGroups!==void 0){let W9=y.uniformsGroups;for(let O9=0,N7=W9.length;O9<N7;O9++){let i$=W9[O9];N0.update(i$,I9),N0.bind(i$,I9)}}return I9}function NK(M,T){M.ambientLightColor.needsUpdate=T,M.lightProbe.needsUpdate=T,M.sunLights.needsUpdate=T,M.sunLightShadows.needsUpdate=T,M.directionalLights.needsUpdate=T,M.directionalLightShadows.needsUpdate=T,M.pointLights.needsUpdate=T,M.pointLightShadows.needsUpdate=T,M.spotLights.needsUpdate=T,M.spotLightShadows.needsUpdate=T,M.rectAreaLights.needsUpdate=T,M.hemisphereLights.needsUpdate=T}function EK(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return o},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,T,m){let y=_0.get(M);if(y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,y.__autoAllocateDepthBuffer===!1)y.__useRenderToTexture=!1;_0.get(M.texture).__webglTexture=T,_0.get(M.depthTexture).__webglTexture=y.__autoAllocateDepthBuffer?void 0:m,y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,T){let m=_0.get(M);m.__webglFramebuffer=T,m.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(M,T=0,m=0){b=M,c=T,o=m;let y=null,h=!1,U0=!1;if(M){let Y0=_0.get(M);if(Y0.__useDefaultFramebuffer!==void 0){E0.bindFramebuffer(v.FRAMEBUFFER,Y0.__webglFramebuffer),r.copy(M.viewport),J0.copy(M.scissor),L0=M.scissorTest,E0.viewport(r),E0.scissor(J0),E0.setScissorTest(L0),W0=-1;return}else if(Y0.__webglFramebuffer===void 0)f0.setupRenderTarget(M);else if(Y0.__hasExternalTextures)f0.rebindTextures(M,_0.get(M.texture).__webglTexture,_0.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let y0=M.depthTexture;if(Y0.__boundDepthTexture!==y0){if(y0!==null&&_0.has(y0)&&(M.width!==y0.image.width||M.height!==y0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");f0.setupDepthRenderbuffer(M)}}let D0=M.texture;if(D0.isData3DTexture||D0.isDataArrayTexture||D0.isCompressedArrayTexture)U0=!0;let I0=_0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(I0[T]))y=I0[T][m];else y=I0[T];h=!0}else if(M.samples>0&&f0.useMultisampledRTT(M)===!1)y=_0.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(I0))y=I0[m];else y=I0;r.copy(M.viewport),J0.copy(M.scissor),L0=M.scissorTest}else r.copy(g0).multiplyScalar(w0).floor(),J0.copy(b0).multiplyScalar(w0).floor(),L0=Z9;if(m!==0)y=g;if(E0.bindFramebuffer(v.FRAMEBUFFER,y))E0.drawBuffers(M,y);if(E0.viewport(r),E0.scissor(J0),E0.setScissorTest(L0),h){let Y0=_0.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y0.__webglTexture,m)}else if(U0){let Y0=T;for(let D0=0;D0<M.textures.length;D0++){let I0=_0.get(M.textures[D0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+D0,I0.__webglTexture,m,Y0)}}else if(M!==null&&m!==0){let Y0=_0.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Y0.__webglTexture,m)}W0=-1};function s$(M){let T=_0.get(M);if(T.__readFormat!==M.format||T.__readType!==M.type)T.__readFormat=M.format,T.__readType=M.type,T.__formatReadable=F9.textureFormatReadable(M.format),T.__typeReadable=F9.textureTypeReadable(M.type);return T}if(this.readRenderTargetPixels=function(M,T,m,y,h,U0,O0,Y0=0){if(!(M&&M.isWebGLRenderTarget)){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D0=_0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&O0!==void 0){if(D0=D0[O0],Array.isArray(D0))D0=D0[0]}if(D0){E0.bindFramebuffer(v.FRAMEBUFFER,D0);try{let I0=M.textures[Y0],y0=I0.format,p0=I0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+Y0);let R0=s$(I0);if(R0.__formatReadable===!1){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(R0.__typeReadable===!1){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(T>=0&&T<=M.width-y&&(m>=0&&m<=M.height-h))v.readPixels(T,m,y,h,Q0.convert(y0),Q0.convert(p0),U0)}finally{let I0=b!==null?_0.get(b).__webglFramebuffer:null;E0.bindFramebuffer(v.FRAMEBUFFER,I0)}}},this.readRenderTargetPixelsAsync=async function(M,T,m,y,h,U0,O0,Y0=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D0=_0.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&O0!==void 0){if(D0=D0[O0],Array.isArray(D0))D0=D0[0]}if(D0)if(T>=0&&T<=M.width-y&&(m>=0&&m<=M.height-h)){E0.bindFramebuffer(v.FRAMEBUFFER,D0);let I0=M.textures[Y0],y0=I0.format,p0=I0.type;if(M.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+Y0);let R0=s$(I0);if(R0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(R0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let m0=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,m0),v.bufferData(v.PIXEL_PACK_BUFFER,U0.byteLength,v.STREAM_READ),v.readPixels(T,m,y,h,Q0.convert(y0),Q0.convert(p0),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let N9=b!==null?_0.get(b).__webglFramebuffer:null;E0.bindFramebuffer(v.FRAMEBUFFER,N9);let $9=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await p5(v,$9,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,m0),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,U0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(m0),v.deleteSync($9),U0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,T=null,m=0){let y=Math.pow(2,-m),h=Math.floor(M.image.width*y),U0=Math.floor(M.image.height*y),O0=T!==null?T.x:0,Y0=T!==null?T.y:0;f0.setTexture2D(M,0),v.copyTexSubImage2D(v.TEXTURE_2D,m,0,0,O0,Y0,h,U0),E0.unbindTexture()},this.copyTextureToTexture=function(M,T,m=null,y=null,h=0,U0=0){let O0,Y0,D0,I0,y0,p0,R0,m0,N9,$9=M.isCompressedTexture?M.mipmaps[U0]:M.image;if(m!==null)O0=m.max.x-m.min.x,Y0=m.max.y-m.min.y,D0=m.isBox3?m.max.z-m.min.z:1,I0=m.min.x,y0=m.min.y,p0=m.isBox3?m.min.z:0;else{let n0=Math.pow(2,-h);if(O0=Math.floor($9.width*n0),Y0=Math.floor($9.height*n0),M.isDataArrayTexture)D0=$9.depth;else if(M.isData3DTexture)D0=Math.floor($9.depth*n0);else D0=1;I0=0,y0=0,p0=0}if(y!==null)R0=y.x,m0=y.y,N9=y.z;else R0=0,m0=0,N9=0;let e0=Q0.convert(T.format),k9=Q0.convert(T.type),M0;if(T.isData3DTexture)f0.setTexture3D(T,0),M0=v.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)f0.setTexture2DArray(T,0),M0=v.TEXTURE_2D_ARRAY;else f0.setTexture2D(T,0),M0=v.TEXTURE_2D;E0.activeTexture(v.TEXTURE0),E0.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,T.flipY),E0.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),E0.pixelStorei(v.UNPACK_ALIGNMENT,T.unpackAlignment);let w9=E0.getParameter(v.UNPACK_ROW_LENGTH),i0=E0.getParameter(v.UNPACK_IMAGE_HEIGHT),x7=E0.getParameter(v.UNPACK_SKIP_PIXELS),I9=E0.getParameter(v.UNPACK_SKIP_ROWS),U6=E0.getParameter(v.UNPACK_SKIP_IMAGES);E0.pixelStorei(v.UNPACK_ROW_LENGTH,$9.width),E0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,$9.height),E0.pixelStorei(v.UNPACK_SKIP_PIXELS,I0),E0.pixelStorei(v.UNPACK_SKIP_ROWS,y0),E0.pixelStorei(v.UNPACK_SKIP_IMAGES,p0);let I7=M.isDataArrayTexture||M.isData3DTexture,g7=T.isDataArrayTexture||T.isData3DTexture;if(M.isDepthTexture){let n0=_0.get(M),M9=_0.get(T),s9=_0.get(n0.__renderTarget),W9=_0.get(M9.__renderTarget);E0.bindFramebuffer(v.READ_FRAMEBUFFER,s9.__webglFramebuffer),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,W9.__webglFramebuffer);for(let O9=0;O9<D0;O9++){if(I7)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,_0.get(M).__webglTexture,h,p0+O9),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,_0.get(T).__webglTexture,U0,N9+O9);v.blitFramebuffer(I0,y0,I0+O0,y0+Y0,R0,m0,R0+O0,m0+Y0,v.DEPTH_BUFFER_BIT,v.NEAREST)}E0.bindFramebuffer(v.READ_FRAMEBUFFER,null),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(h!==0||M.isRenderTargetTexture||_0.has(M)){let n0=_0.get(M),M9=_0.get(T);E0.bindFramebuffer(v.READ_FRAMEBUFFER,a),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,P);for(let s9=0;s9<D0;s9++){if(I7)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,n0.__webglTexture,h,p0+s9);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,n0.__webglTexture,h);if(g7)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,M9.__webglTexture,U0,N9+s9);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,M9.__webglTexture,U0);if(h!==0)v.blitFramebuffer(I0,y0,I0+O0,y0+Y0,R0,m0,R0+O0,m0+Y0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(g7)v.copyTexSubImage3D(M0,U0,R0,m0,N9+s9,I0,y0,O0,Y0);else v.copyTexSubImage2D(M0,U0,R0,m0,I0,y0,O0,Y0)}E0.bindFramebuffer(v.READ_FRAMEBUFFER,null),E0.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(g7)if(M.isDataTexture||M.isData3DTexture)v.texSubImage3D(M0,U0,R0,m0,N9,O0,Y0,D0,e0,k9,$9.data);else if(T.isCompressedArrayTexture)v.compressedTexSubImage3D(M0,U0,R0,m0,N9,O0,Y0,D0,e0,$9.data);else v.texSubImage3D(M0,U0,R0,m0,N9,O0,Y0,D0,e0,k9,$9);else if(M.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,U0,R0,m0,O0,Y0,e0,k9,$9.data);else if(M.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,U0,R0,m0,$9.width,$9.height,e0,$9.data);else v.texSubImage2D(v.TEXTURE_2D,U0,R0,m0,O0,Y0,e0,k9,$9);if(E0.pixelStorei(v.UNPACK_ROW_LENGTH,w9),E0.pixelStorei(v.UNPACK_IMAGE_HEIGHT,i0),E0.pixelStorei(v.UNPACK_SKIP_PIXELS,x7),E0.pixelStorei(v.UNPACK_SKIP_ROWS,I9),E0.pixelStorei(v.UNPACK_SKIP_IMAGES,U6),U0===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0)v.generateMipmap(M0);E0.unbindTexture()},this.initRenderTarget=function(M){if(_0.get(M).__webglFramebuffer===void 0)f0.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)f0.setTextureCube(M,0);else if(M.isData3DTexture)f0.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)f0.setTexture2DArray(M,0);else f0.setTexture2D(M,0);E0.unbindTexture()},this.resetState=function(){c=0,o=0,b=null,E0.reset(),Z0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return K$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=l0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=l0._getUnpackColorSpace()}}class fW{static isWebGL2Available(){try{let J=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&J.getContext("webgl2"))}catch(J){return!1}}static isColorSpaceAvailable(J){try{let Q=document.createElement("canvas"),$=window.WebGL2RenderingContext&&Q.getContext("webgl2");return $.drawingBufferColorSpace=J,$.drawingBufferColorSpace===J}catch(Q){return!1}}static getWebGL2ErrorMessage(){return this._getErrorMessage(2)}static _getErrorMessage(J){let Q={1:"WebGL",2:"WebGL 2"},$={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},Z='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',W=document.createElement("div");if(W.id="webglmessage",W.style.fontFamily="monospace",W.style.fontSize="13px",W.style.fontWeight="normal",W.style.textAlign="center",W.style.background="#fff",W.style.color="#000",W.style.padding="1.5em",W.style.width="400px",W.style.margin="5em auto 0",$[J])Z=Z.replace("$0","graphics card");else Z=Z.replace("$0","browser");return Z=Z.replace("$1",Q[J]),W.innerHTML=Z,W}}var yW=fW;var LN=yW.isWebGL2Available();function _8(J){if(!LN)return;let Q;try{Q=new f$({alpha:!0,depth:!1})}catch{return}let $=Q.domElement;return $.style.display="",$.className=J,$.setAttribute("aria-hidden","true"),$.addEventListener("webglcontextlost",()=>$.remove()),Q}function T8(J,Q,$){let Z=J.domElement;if(Z.width!==Q||Z.height!==$)J.setSize(Q,$,!1)}var LJ=`float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
`;var bW=`uniform vec3 top, bottom, glow;
uniform vec2 size, moon;
uniform float strength;

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

void main() {
  vec2 at = vec2(gl_FragCoord.x, size.y - gl_FragCoord.y);
  vec2 grain = at - size * 0.5 + 4096.0;
  
  float d = length(at - moon) / max(size.x, size.y);
  vec3 c = mix(mix(top, bottom, at.y / size.y), glow, strength * exp(-d * d * 3.2));
  
  c.x += (noise(grain * vec2(0.5, 0.36)) + 0.5 * noise(grain * 1.1) - 0.75) * 0.01;
  c.x += (noise(grain * 0.011) + 0.6 * noise(grain * 0.047) - 0.8) * 0.008;
  float speck = smoothstep(0.86, 0.95, noise(grain * vec2(0.21, 0.5) + 70.0)) * step(0.76, noise(grain * 0.031 + 9.0));
  c.x += speck * (c.x > 0.5 ? -0.03 : 0.02);

  gl_FragColor = vec4(oklabToLinear(c), 1.0);
  #include <colorspace_fragment>

  // Dither hides banding in the dark gradient.
  gl_FragColor.rgb += (hash(grain + 7.0) + hash(grain + 91.0) - 1.0) / 255.0;
}
`;var hW=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;var IN=0.3,zN=y8(fJ);function y$(J){let{l:Q,a:$,b:Z}=zN(J.trim());return new p(Q,$,Z)}function xW(){let J=_8("paper");if(!J)return;let Q=getComputedStyle(document.documentElement),$={top:{value:y$(Q.getPropertyValue("--paper-top"))},bottom:{value:y$(Q.getPropertyValue("--paper-bottom"))},glow:{value:y$(Q.getPropertyValue("--paper-glow"))},strength:{value:IN},size:{value:new d0},moon:{value:new d0}},Z=new _9(new J7(2,2),new T9({uniforms:$,vertexShader:hW,fragmentShader:LJ+bW})),W=new k7(-1,1,1,-1,0,1),K=J.domElement;return document.body.prepend(K),(H,Y)=>{T8(J,K.clientWidth,K.clientHeight),$.size.value.set(K.width,K.height),$.moon.value.set(H,Y),J.render(Z,W)}}var gW=`uniform sampler2D sprite;
varying vec2 vUv;
flat varying vec3 vTint;
flat varying float vFlux;

void main() {
  vec3 code = texture2D(sprite, vUv).rgb;

  // The sprite stores six decades of brightness as a log code.
  vec3 light = pow(vec3(10.0), 6.0 * code - 6.0) * step(0.01, code);
  vec3 seen = (1.0 - exp(-light * vFlux)) * vTint;
  gl_FragColor = vec4(seen, max(seen.r, max(seen.g, seen.b)));
}
`;var pW=`attribute vec2 spot;
attribute vec3 tint;
attribute float flux;
uniform float reach;
varying vec2 vUv;
flat varying vec3 vTint;
flat varying float vFlux;

void main() {
  vUv = uv;
  vTint = tint;
  vFlux = flux;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(spot + position.xy * reach, 0.0, 1.0);
}
`;var PN=function(){function J(Q){if(this._value=NaN,typeof Q==="string")this._seed=this.hashCode(Q);else if(typeof Q==="number")this._seed=this.getSafeSeed(Q);else this._seed=this.getSafeSeed(J.MIN+Math.floor((J.MAX-J.MIN)*Math.random()));this.reset()}return J.prototype.next=function(Q,$){if(Q===void 0)Q=0;if($===void 0)$=1;return this.recalculate(),this.map(this._value,J.MIN,J.MAX,Q,$)},J.prototype.nextInt=function(Q,$){if(Q===void 0)Q=10;if($===void 0)$=100;return this.recalculate(),Math.floor(this.map(this._value,J.MIN,J.MAX,Q,$+1))},J.prototype.nextString=function(Q,$){if(Q===void 0)Q=16;if($===void 0)$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";var Z="";while(Z.length<Q)Z+=this.nextChar($);return Z},J.prototype.nextChar=function(Q){if(Q===void 0)Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return Q.substr(this.nextInt(0,Q.length-1),1)},J.prototype.nextArrayItem=function(Q){return Q[this.nextInt(0,Q.length-1)]},J.prototype.nextBoolean=function(){return this.recalculate(),this._value>0.5},J.prototype.skip=function(Q){if(Q===void 0)Q=1;while(Q-- >0)this.recalculate()},J.prototype.reset=function(){this._value=this._seed},J.prototype.recalculate=function(){this._value=this.xorshift(this._value)},J.prototype.xorshift=function(Q){return Q^=Q<<13,Q^=Q>>17,Q^=Q<<5,Q},J.prototype.map=function(Q,$,Z,W,K){return(Q-$)/(Z-$)*(K-W)+W},J.prototype.hashCode=function(Q){var $=0;if(Q){var Z=Q.length;for(var W=0;W<Z;W++)$=($<<5)-$+Q.charCodeAt(W),$|=0,$=this.xorshift($)}return this.getSafeSeed($)},J.prototype.getSafeSeed=function(Q){if(Q===0)return 1;return Q},J.MIN=-2147483648,J.MAX=2147483647,J}(),b$=PN;var dW=Math.sqrt(3),uW=Math.sqrt(5),wN=0.5*(dW-1),H6=(3-dW)/6;var ck=(uW-1)/4,nk=(5-uW)/20,mW=(J)=>Math.floor(J)|0,lW=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function cW(J=Math.random){let Q=_N(J),$=new Float64Array(Q).map((W)=>lW[W%12*2]),Z=new Float64Array(Q).map((W)=>lW[W%12*2+1]);return function(K,H){let Y=0,X=0,U=0,G=(K+H)*wN,E=mW(K+G),N=mW(H+G),O=(E+N)*H6,L=E-O,I=N-O,q=K-L,F=H-I,z,A;if(q>F)z=1,A=0;else z=0,A=1;let B=q-z+H6,C=F-A+H6,w=q-1+2*H6,D=F-1+2*H6,V=E&255,j=N&255,x=0.5-q*q-F*F;if(x>=0){let a=V+Q[j],P=$[a],c=Z[a];x*=x,Y=x*x*(P*q+c*F)}let S=0.5-B*B-C*C;if(S>=0){let a=V+z+Q[j+A],P=$[a],c=Z[a];S*=S,X=S*S*(P*B+c*C)}let g=0.5-w*w-D*D;if(g>=0){let a=V+1+Q[j+1],P=$[a],c=Z[a];g*=g,U=g*g*(P*w+c*D)}return 70*(Y+X+U)}}function _N(J){let $=new Uint8Array(512);for(let Z=0;Z<256;Z++)$[Z]=Z;for(let Z=0;Z<255;Z++){let W=Z+~~(J()*(256-Z)),K=$[Z];$[Z]=$[W],$[W]=K}for(let Z=256;Z<512;Z++)$[Z]=$[Z-256];return $}var iW=1887,TN=0.2,SN=0.9,jN=6.6,vN=0.32,fN=[0.82,0.91,1],yN=[1,0.97,0.94],bN=[1,0.86,0.7],nW=24,hN=0.3,xN=0.565,gN=0.35,pN=1.134,Y6=140,mN=new b$(iW),sW=cW(()=>mN.next());function oW(J,Q,$,{roofs:Z,starReach:W,starFloor:K}){let H=new b$(iW),Y=Math.min(Y6,Math.round(TN*J*Q/(W*W))),X=[];for(let U=0;U<Y;U++){let G=$+J*H.next(-0.5,0.5),E=Q*H.next(),N=Math.max(SN,jN+Math.log10(1-H.next())/vN),O=H.next(-1,1),L=Z.filter((F)=>G>F.from-W&&G<F.to+W).map((F)=>F.top);if(E<=Math.max(K,...L)+0.9*W)continue;let I=O<0?fN:bN,q=yN.map((F,z)=>F+(I[z]-F)*Math.abs(O));X.push({x:G,level:E,magnitude:N,color:q,index:U})}return X}function aW(J,Q,$){let Z=Math.floor(Q*nW),W=(X,U)=>xN*sW(J*7.31+X*3.17,Z/nW*U*gN),K=(X)=>pN*sW(J*7.31+X*3.17,Z*5.77),H=hN*(0.35+0.65*$),Y=H*(0.5*W(3,1.7)+0.15*K(4));return{gain:Math.exp(H*(1.4*W(1,2.3)+0.8*W(2,7)+0.3*K(0))),tint:[1+Y,1,1-Y],shift:[0.03*H*K(5),0.03*H*K(6)]}}var lN=20000;function rW(J,Q){let $=_8("sky");if(!$)return;let Z=new f7(new Float32Array(Y6*2),2).setUsage(i8),W=new f7(new Float32Array(Y6*3),3).setUsage(i8),K=new f7(new Float32Array(Y6),1).setUsage(i8),H=new J7(2,2),Y=new e7;Y.setIndex(H.index),Y.setAttribute("position",H.getAttribute("position")),Y.setAttribute("uv",H.getAttribute("uv")),Y.setAttribute("spot",Z),Y.setAttribute("tint",W),Y.setAttribute("flux",K);let X=new P8().load("cdn/star.png",()=>{E.visible=!0,Q()});X.flipY=!1,X.generateMipmaps=!1,X.minFilter=C9;let U={sprite:{value:X},reach:{value:0}},G=new T9({uniforms:U,vertexShader:pW,fragmentShader:gW,transparent:!0,premultipliedAlpha:!0,depthTest:!1,side:y9}),E=new _9(Y,G);E.frustumCulled=!1,E.visible=!1;let N=new k7,O=$.domElement;J.prepend(O);let L,I=[],q="";return{fit:(A)=>{L=A,U.reach.value=L.starReach,q=""},draw:(A)=>{let{box:B,baseline:C,starReach:w}=L,D=J.getBoundingClientRect();if(!O.isConnected||D.width===0)return;let V=B.width/D.width,j=D.top+scrollY,x=j+(C-B.top)/V;O.style.top=`${-j}px`,O.style.height=`${x}px`;let S=Math.min(2,devicePixelRatio),g=Math.round(O.clientWidth*S),a=Math.round(x*S);if(g<=0||a<=0)return;T8($,g,a);let P=O.clientWidth*V,c=x*V,o=B.left+B.width/2;if(N.left=o-P/2,N.right=o+P/2,N.top=C-c,N.bottom=C,N.near=0,N.far=1,N.updateProjectionMatrix(),q!==`${P} ${c}`)q=`${P} ${c}`,I=oW(P,c,o,L);for(let[b,{x:W0,level:d,magnitude:r,color:J0,index:L0}]of I.entries()){let n=aW(L0,A,1-d/c);Z.setXY(b,W0+n.shift[0]*w,C-d+n.shift[1]*w),W.setXYZ(b,J0[0]*n.tint[0],J0[1]*n.tint[1],J0[2]*n.tint[2]),K.setX(b,lN*10**(-0.4*r)*n.gain)}Z.needsUpdate=W.needsUpdate=K.needsUpdate=!0,Y.instanceCount=I.length,$.render(E,N)}}}var tW=`uniform float baseline, time, pixel, grit, glass, spread, polarity, moonX;
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
`;var eW=`attribute float chop, rest, row, pitch, depth;
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
`;var cN="#e2d8b8",nN=3,sN=600,h$=y8(bJ);function iN({baseline:J,sea:Q}){let $=[];for(let Z=J+Q.pitch/2,W=0;Z<J+Q.depth;W++){let K=(Z-J)/Q.depth,H=Q.pitch*(1+0.95*K);if($.push({chop:0,rest:Z,row:W,pitch:H,depth:K}),K<0.82)$.push({chop:1,rest:Z+H/2,row:W,pitch:H,depth:(Z+H/2-J)/Q.depth});Z+=H}return $}function oN(J,Q){let $=new J7(1,2,J,1),Z=new e7;Z.setIndex($.index),Z.setAttribute("position",$.getAttribute("position")),Z.setAttribute("uv",$.getAttribute("uv"));for(let W of["chop","rest","row","pitch","depth"])Z.setAttribute(W,new f7(Float32Array.from(Q,(K)=>K[W]),1));return Z.instanceCount=Q.length,Z}function JK(J,Q){let $=_8("water");if(!$)return;let Z=new e8(new Uint8Array(4),1,1);Z.needsUpdate=!0;let W=h$(cN),K={baseline:{value:0},basePitch:{value:0},seaDepth:{value:0},wavelength:{value:0},grit:{value:0},time:{value:0},pixel:{value:0},glass:{value:0},spread:{value:0},polarity:{value:0},moonX:{value:0},span:{value:new d0},ink:{value:new p},wiz:{value:new p},moonlight:{value:new p(W.r,W.g,W.b)},mirrored:{value:new p},mirror:{value:Z}},H=new T9({uniforms:K,vertexShader:eW,fragmentShader:LJ+tW,transparent:!0,premultipliedAlpha:!0,depthTest:!1,side:y9}),Y=new _9(new e7,H);Y.frustumCulled=!1;let X=new k7,U=new P8,G=$.domElement;G.addEventListener("webglcontextlost",()=>J.removeAttribute("data-water")),J.append(G),J.toggleAttribute("data-water",!0);let E,N=[],O=0,L=0,I=0,q=0;return{fit:(A)=>{E=A;let{box:B,baseline:C,sea:w,mirror:D,moon:V}=E;L=C-2*w.pitch,I=B.top+B.height,G.style.top=`${100*(L-B.top)/B.height}%`,G.style.height=`${100*(I-L)/B.height}%`;let j=h$(getComputedStyle(J).color),x=h$(E.wiz);K.baseline.value=C,K.basePitch.value=w.pitch,K.seaDepth.value=w.depth,K.wavelength.value=w.length,K.grit.value=w.grit,K.spread.value=B.width*0.3,K.polarity.value=2*(0.2126*j.r+0.7152*j.g+0.0722*j.b)-1,K.moonX.value=V.x,K.ink.value.set(j.r,j.g,j.b),K.wiz.value.set(x.r,x.g,x.b),K.mirrored.value.set(D.west,D.east,D.cap),N=iN(E),O=0,q=0,U.load(D.image,(S)=>{if(E!==A)return S.dispose();S.flipY=!1,S.generateMipmaps=!1,S.minFilter=C9,K.mirror.value.dispose(),K.mirror.value=S,q=performance.now(),Q()})},draw:(A,B)=>{let C=Math.min(2,devicePixelRatio),w=Math.round(G.clientWidth*C),D=Math.round(G.clientHeight*C);if(w===0||D===0)return;T8($,w,D);let V=Math.ceil(G.clientWidth/nN);if(V!==O)O=V,Y.geometry.dispose(),Y.geometry=oN(O,N);let j=(I-L)/D,x=E.box.left+E.box.width/2;X.left=x-w*j/2,X.right=x+w*j/2,X.top=L,X.bottom=I,X.near=0,X.far=1,X.updateProjectionMatrix(),K.span.value.set(X.left,X.right),K.time.value=A,K.pixel.value=j,K.glass.value=q===0?0:B?Math.min(1,(performance.now()-q)/sN):1,$.render(Y,X)}}}var aN=30,QK=document.querySelector(".year");if(QK)QK.textContent=String(new Date().getFullYear());var x$=document.querySelector(".azoth");x$?.addEventListener("pointerenter",({offsetX:J,offsetY:Q})=>{x$.style.setProperty("--enter-x",`${J}px`),x$.style.setProperty("--enter-y",`${Q}px`)});var S8=document.querySelector(".logo"),ZK=matchMedia("(max-width: 760px) and (orientation: portrait)"),WK=matchMedia("(prefers-reduced-motion: reduce)"),rN=xW(),VJ=S8?rW(S8,j8):void 0,BJ=S8?JK(S8,j8):void 0,b7=AJ,$K=0;function KK(){b7=ZK.matches?o$:AJ,VJ?.fit(b7),BJ?.fit(b7),j8()}function j8(){let J=innerWidth/2,Q=innerHeight/3;if(S8){let $=S8.getBoundingClientRect(),Z=$.width/b7.box.width;J=$.left+b7.moon.x*Z,Q=$.top+(b7.baseline-b7.moon.altitude-b7.box.top)*Z}if(rN?.(J,Q),WK.matches)VJ?.draw(0),BJ?.draw(0,!1)}function HK(J){if(requestAnimationFrame(HK),WK.matches||J-$K<aN)return;$K=J,VJ?.draw(J/1000),BJ?.draw(J/1000,!0)}KK();ZK.addEventListener("change",KK);addEventListener("load",j8);addEventListener("resize",j8);addEventListener("scroll",j8,{passive:!0});if(VJ||BJ)requestAnimationFrame(HK);
