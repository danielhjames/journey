Bluff={VERSION:'0.3.4',array:function(c){if(c.length===undefined)return[c];var d=[],f=c.length;while(f--)d[f]=c[f];return d},each:function(c,d,f){for(var g=0,h=c.length;g<h;g++){d.call(f||null,c[g],g)}},reverse_each:function(c,d,f){var g=c.length;while(g--)d.call(f||null,c[g],g)},sum:function(c){var d=0,f=c.length;while(f--)d+=c[f];return d},Mini:{}};Bluff.Base=new JS.Class({extend:{DEBUG:false,DATA_LABEL_INDEX:0,DATA_VALUES_INDEX:1,DATA_COLOR_INDEX:2,LEGEND_MARGIN:10,TITLE_MARGIN:10,LABEL_MARGIN:10,DEFAULT_TARGET_WIDTH:800},top_margin:null,bottom_margin:null,right_margin:null,left_margin:null,labels:null,center_labels_over_point:null,has_left_labels:null,x_axis_label:null,y_axis_label:null,y_axis_increment:null,colors:null,title:null,font:null,font_color:null,hide_line_markers:null,hide_legend:null,hide_title:null,hide_line_numbers:null,no_data_message:null,title_font_size:null,legend_font_size:null,marker_font_size:null,marker_color:null,marker_count:null,minimum_value:null,maximum_value:null,sort:null,additional_line_values:null,stacked:null,legend_box_size:null,initialize:function(c,d){this._0=new Bluff.Renderer(c);d=d||this.klass.DEFAULT_TARGET_WIDTH;this.top_margin=this.bottom_margin=this.left_margin=this.right_margin=20;var f;if(typeof d!='number'){f=d.split('x');this._j=parseFloat(f[0]);this._w=parseFloat(f[1])}else{this._j=parseFloat(d);this._w=this._j*0.75}this.initialize_ivars();this._16();this.theme_keynote()},initialize_ivars:function(){this._b=800;this._I=800*(this._w/this._j);this._5=0;this.marker_count=null;this.maximum_value=this.minimum_value=null;this._9=false;this._2=[];this.labels={};this._x={};this.sort=true;this.title=null;this._c=this._j/this._b;this.marker_font_size=21.0;this.legend_font_size=20.0;this.title_font_size=36.0;this.legend_box_size=20.0;this.no_data_message="No Data";this.hide_line_markers=this.hide_legend=this.hide_title=this.hide_line_numbers=false;this.center_labels_over_point=true;this.has_left_labels=false;this.additional_line_values=[];this._1l=[];this._k={};this.x_axis_label=this.y_axis_label=null;this.y_axis_increment=null;this.stacked=null;this._a=null},set_margins:function(c){this.top_margin=this.left_margin=this.right_margin=this.bottom_margin=c},set_font:function(c){this.font=c;this._0.font=this.font},add_color:function(c){this.colors.push(c)},replace_colors:function(c){this.colors=c||[]},set_theme:function(c){this._16();this._k={colors:['black','white'],additional_line_colors:[],marker_color:'white',font_color:'black',background_colors:null,background_image:null};for(var d in c)this._k[d]=c[d];this.colors=this._k.colors;this.marker_color=this._k.marker_color;this.font_color=this._k.font_color||this.marker_color;this._1l=this._k.additional_line_colors;this._R()},theme_keynote:function(){this._S='#6886B4';this._T='#FDD84E';this._n='#72AE6E';this._y='#D1695E';this._U='#8A6EAF';this._z='#EFAA43';this._A='white';this.colors=[this._T,this._S,this._n,this._y,this._U,this._z,this._A];this.set_theme({colors:this.colors,marker_color:'white',font_color:'white',background_colors:['black','#4a465a']})},theme_37signals:function(){this._n='#339933';this._U='#cc99cc';this._S='#336699';this._T='#FFF804';this._y='#ff0000';this._z='#cf5910';this._B='black';this.colors=[this._T,this._S,this._n,this._y,this._U,this._z,this._B];this.set_theme({colors:this.colors,marker_color:'black',font_color:'black',background_colors:['#d1edf5','white']})},theme_rails_keynote:function(){this._n='#00ff00';this._V='#333333';this._z='#ff5d00';this._y='#f61100';this._A='white';this._W='#999999';this._B='black';this.colors=[this._n,this._V,this._z,this._y,this._A,this._W,this._B];this.set_theme({colors:this.colors,marker_color:'white',font_color:'white',background_colors:['#0083a3','#0083a3']})},theme_odeo:function(){this._V='#202020';this._A='white';this._1m='#a21764';this._n='#8ab438';this._W='#999999';this._1n='#3a5b87';this._B='black';this.colors=[this._V,this._A,this._1n,this._1m,this._n,this._W,this._B];this.set_theme({colors:this.colors,marker_color:'white',font_color:'white',background_colors:['#ff47a4','#ff1f81']})},theme_pastel:function(){this.colors=['#a9dada','#aedaa9','#daaea9','#dadaa9','#a9a9da','#daaeda','#dadada'];this.set_theme({colors:this.colors,marker_color:'#aea9a9',font_color:'black',background_colors:'white'})},theme_greyscale:function(){this.colors=['#282828','#383838','#686868','#989898','#c8c8c8','#e8e8e8'];this.set_theme({colors:this.colors,marker_color:'#aea9a9',font_color:'black',background_colors:'white'})},data:function(f,g,h){g=g||[];h=h||null;g=Bluff.array(g);this._2.push([f,g,(h||this._1o())]);this._5=(g.length>this._5)?g.length:this._5;Bluff.each(g,function(c,d){if(!c)return;if(this.maximum_value===null&&this.minimum_value===null)this.maximum_value=this.minimum_value=c;this.maximum_value=this._17(c)?c:this.maximum_value;if(this.maximum_value>0)this._9=true;this.minimum_value=this._1p(c)?c:this.minimum_value;if(this.minimum_value<0)this._9=true},this)},draw:function(){if(this.stacked)this._1q();this._1r();this._r(function(){this._0.rectangle(this.left_margin,this.top_margin,this._b-this.right_margin,this._I-this.bottom_margin);this._0.rectangle(this._1,this._7,this._o,this._i)})},clear:function(){this._R()},_1r:function(){if(!this._9)return this._1s();this._X();this._1t();if(this.sort)this._1u();this._1v();this._Y();this._1w();this._1x()},_X:function(g){if(this._a===null||g===true){this._a=[];if(!this._9)return;this._18();Bluff.each(this._2,function(d){var f=[];Bluff.each(d[this.klass.DATA_VALUES_INDEX],function(c){if(c===null||c===undefined)f.push(null);else f.push((c-this.minimum_value)/this._e)},this);this._a.push([d[this.klass.DATA_LABEL_INDEX],f,d[this.klass.DATA_COLOR_INDEX]])},this)}},_18:function(){this._e=this.maximum_value-this.minimum_value;this._e=this._e>0?this._e:1},_1t:function(){this._J=this.hide_line_markers?0:this._C(this.marker_font_size);this._19=this.hide_title?0:this._C(this.title_font_size);this._1a=this.hide_legend?0:this._C(this.legend_font_size);var c,d,f,g,h,i,j;if(this.hide_line_markers){this._1=this.left_margin;this._Z=this.right_margin;this._1b=this.bottom_margin}else{d=0;if(this.has_left_labels){c='';for(j in this.labels){c=c.length>this.labels[j].length?c:this.labels[j]}d=this._K(this.marker_font_size,c)*1.25}else{d=this._K(this.marker_font_size,this._1c(this.maximum_value))}f=this.hide_line_numbers&&!this.has_left_labels?0:d+this.klass.LABEL_MARGIN*2;this._1=this.left_margin+f+(this.y_axis_label===null?0.0:this._J+this.klass.LABEL_MARGIN*2);g=-Infinity;for(j in this.labels)g=g>Number(j)?g:Number(j);g=Math.round(g);h=(g>=(this._5-1)&&this.center_labels_over_point)?this._K(this.marker_font_size,this.labels[g])/2:0.0;this._Z=this.right_margin+h;this._1b=this.bottom_margin+this._J+this.klass.LABEL_MARGIN}this._o=this._b-this._Z;this._6=this._b-this._1-this._Z;this._7=this.top_margin+(this.hide_title?this.klass.TITLE_MARGIN:this._19+this.klass.TITLE_MARGIN*2)+(this.hide_legend?this.klass.LEGEND_MARGIN:this._1a+this.klass.LEGEND_MARGIN*2);i=(this.x_axis_label===null)?0.0:this._J+this.klass.LABEL_MARGIN;this._i=this._I-this._1b-i;this._4=this._i-this._7},_1w:function(){if(this.x_axis_label){var c=this._i+this.klass.LABEL_MARGIN*2+this._J;this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.stroke='transparent';this._0.pointsize=this._f(this.marker_font_size);this._0.gravity='north';this._0.annotate_scaled(this._b,1.0,0.0,c,this.x_axis_label,this._c);this._r(function(){this._0.line(0.0,c,this._b,c)})}},_Y:function(){if(this.hide_line_markers)return;if(this.y_axis_increment===null){if(this.marker_count===null){Bluff.each([3,4,5,6,7],function(c){if(!this.marker_count&&this._e%c==0)this.marker_count=c},this);this.marker_count=this.marker_count||4}this._10=(this._e>0)?this._1d(this._e/this.marker_count):1}else{this.maximum_value=Math.max(Math.ceil(this.maximum_value),this.y_axis_increment);this.minimum_value=Math.floor(this.minimum_value);this._18();this._X(true);this.marker_count=Math.round(this._e/this.y_axis_increment);this._10=this.y_axis_increment}this._1y=this._4/(this._e/this._10);var d,f,g,h;for(d=0,f=this.marker_count;d<=f;d++){g=this._7+this._4-d*this._1y;this._0.stroke=this.marker_color;this._0.stroke_width=1;this._0.line(this._1,g,this._o,g);h=d*this._10+this.minimum_value;if(!this.hide_line_numbers){this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.stroke='transparent';this._0.pointsize=this._f(this.marker_font_size);this._0.gravity='east';this._0.annotate_scaled(this._1-this.klass.LABEL_MARGIN,1.0,0.0,g,this._1c(h),this._c)}}},_1e:function(c){return(this._b-c)/2},_1v:function(){if(this.hide_legend)return;this._s=[];for(var i=0,j=this._2.length;i<j;i++)this._s.push(this._2[i][this.klass.DATA_LABEL_INDEX]);var k=this.legend_box_size;if(this.font)this._0.font=this.font;this._0.pointsize=this.legend_font_size;var l=[[]];Bluff.each(this._s,function(c){var d=l.length-1;var f=this._0.get_type_metrics(c);var g=f.width+k*2.7;l[d].push(g);if(Bluff.sum(l[d])>(this._b*0.9))l.push([l[d].pop()])},this);var o=this._1e(Bluff.sum(l[0]));var n=this.hide_title?this.top_margin+this.klass.LEGEND_MARGIN:this.top_margin+this.klass.TITLE_MARGIN+this._19+this.klass.LEGEND_MARGIN;this._r(function(){this._0.stroke_width=1;this._0.line(0,n,this._b,n)});Bluff.each(this._s,function(c,d){this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.pointsize=this._f(this.legend_font_size);this._0.stroke='transparent';this._0.font_weight='normal';this._0.gravity='west';this._0.annotate_scaled(this._b,1.0,o+(k*1.7),n,c,this._c);this._0.stroke='transparent';this._0.fill=this._2[d][this.klass.DATA_COLOR_INDEX];this._0.rectangle(o,n-k/2.0,o+k,n+k/2.0);this._0.pointsize=this.legend_font_size;var f=this._0.get_type_metrics(c);var g=f.width+(k*2.7),h;l[0].shift();if(l[0].length==0){this._r(function(){this._0.line(0.0,n,this._b,n)});l.shift();if(l.length>0)o=this._1e(Bluff.sum(l[0]));h=Math.max(this._1a,k)+this.klass.LEGEND_MARGIN;if(l.length>0){n+=h;this._7+=h;this._4=this._i-this._7}}else{o+=g}},this);this._l=0},_1x:function(){if(this.hide_title||!this.title)return;this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.pointsize=this._f(this.title_font_size);this._0.font_weight='bold';this._0.gravity='north';this._0.annotate_scaled(this._b,1.0,0,this.top_margin,this.title,this._c)},_d:function(c,d){if(this.hide_line_markers)return;var f;if(this.labels[d]&&!this._x[d]){f=this._i+this.klass.LABEL_MARGIN;this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.stroke='transparent';this._0.font_weight='normal';this._0.pointsize=this._f(this.marker_font_size);this._0.gravity='north';this._0.annotate_scaled(1.0,1.0,c,f,this.labels[d],this._c);this._x[d]=true;this._r(function(){this._0.stroke_width=1;this._0.line(0.0,f,this._b,f)})}},_1s:function(){this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.stroke='transparent';this._0.font_weight='normal';this._0.pointsize=this._f(80);this._0.gravity='center';this._0.annotate_scaled(this._b,this._I/2,0,10,this.no_data_message,this._c)},_R:function(){var c=this._k.background_colors;switch(true){case c instanceof Array:this._1z.apply(this,c);break;case typeof c=='string':this._1A(c);break;default:this._1B(this._k.background_image);break}},_1A:function(c){this._0.render_solid_background(this._j,this._w,c)},_1z:function(c,d){this._0.render_gradiated_background(this._j,this._w,c,d)},_1B:function(c){},_16:function(){this._l=0;this._x={};this._k={};this._0.scale(this._c,this._c)},_1U:function(c){return this._c*c},_f:function(c){var d=c*this._c;return d},_L:function(c,d){return(c>d)?d:c},_17:function(c,d){return c>this.maximum_value},_1p:function(c,d){return c<this.minimum_value},_1f:function(c,d){return c},_1V:function(c,d){return c},_1d:function(c){if(c==0)return 1.0;var d=1.0;while(c<10){c*=10;d/=10}while(c>100){c/=10;d*=10}return Math.floor(c)*d},_1u:function(){var f=this._1C,g=this.klass.DATA_VALUES_INDEX;this._a.sort(function(c,d){return f(d[g])-f(c[g])})},_1C:function(d){var f=0;Bluff.each(d,function(c){f+=c});return f},_1q:function(){var g=[],h=this._5;while(h--)g[h]=0;Bluff.each(this._2,function(f){Bluff.each(f[this.klass.DATA_VALUES_INDEX],function(c,d){g[d]+=c},this);f[this.klass.DATA_VALUES_INDEX]=Bluff.array(g)},this)},_r:function(c){if(this.klass.DEBUG){this._0.fill='transparent';this._0.stroke='turquoise';c.call(this)}},_1o:function(){if(this._l==0){this._l+=1;return this.colors[0]}else{if(this._l<this.colors.length){this._l+=1;return this.colors[this._l-1]}else{this._l=0;return this.colors[this.colors.length-1]}}},_1c:function(c){if(this._e%this.marker_count==0||this.y_axis_increment!==null){return String(Math.round(c))}if(this._e>10)return String(Math.floor(c));else if(this._e>=3)return String(Math.floor(c*100)/100);else return String(c)},_C:function(c){return this._0.caps_height(c)},_K:function(c,d){return this._0.text_width(c,d)}});Bluff.Area=new JS.Class(Bluff.Base,{draw:function(){this.callSuper();if(!this._9)return;this._M=this._6/(this._5-1);this._0.stroke='transparent';Bluff.each(this._a,function(h){var i=[];var j=0.0,k=0.0;Bluff.each(h[this.klass.DATA_VALUES_INDEX],function(c,d){var f=this._1+(this._M*d);var g=this._7+(this._4-c*this._4);if(j>0&&k>0){i.push(f);i.push(g)}else{i.push(this._1);i.push(this._i-1);i.push(f);i.push(g)}this._d(f,d);j=f;k=g},this);i.push(this._o);i.push(this._i-1);i.push(this._1);i.push(this._i-1);this._0.fill=h[this.klass.DATA_COLOR_INDEX];this._0.polyline(i)},this)}});Bluff.BarConversion=new JS.Class({mode:null,zero:null,graph_top:null,graph_height:null,minimum_value:null,spread:null,getLeftYRightYscaled:function(c,d){var f;switch(this.mode){case 1:d[0]=this.graph_top+this.graph_height*(1-c)+1;d[1]=this.graph_top+this.graph_height-1;break;case 2:d[0]=this.graph_top+1;d[1]=this.graph_top+this.graph_height*(1-c)-1;break;case 3:f=c-this.minimum_value/this.spread;if(c>=this.zero){d[0]=this.graph_top+this.graph_height*(1-(f-this.zero))+1;d[1]=this.graph_top+this.graph_height*(1-this.zero)-1}else{d[0]=this.graph_top+this.graph_height*(1-(f-this.zero))+1;d[1]=this.graph_top+this.graph_height*(1-this.zero)-1}break;default:d[0]=0.0;d[1]=0.0}}});Bluff.Bar=new JS.Class(Bluff.Base,{draw:function(){var c=0,d;for(d in this.labels)c+=1;this.center_labels_over_point=(c>this._5);this.callSuper();if(!this._9)return;this._1D()},_1D:function(){var l=0.9;this._8=this._6/(this._5*this._2.length);var o=(this._8*(1-l))/2;this._0.stroke_opacity=0.0;var n=new Bluff.BarConversion();n.graph_height=this._4;n.graph_top=this._7;if(this.minimum_value>=0){n.mode=1}else{if(this.maximum_value<=0){n.mode=2}else{n.mode=3;n.spread=this._e;n.minimum_value=this.minimum_value;n.zero=-this.minimum_value/this._e}}Bluff.each(this._a,function(j,k){Bluff.each(j[this.klass.DATA_VALUES_INDEX],function(c,d){var f=this._1+(this._8*(k+d+((this._2.length-1)*d)))+o;var g=f+this._8*l;var h=[];n.getLeftYRightYscaled(c,h);this._0.fill=j[this.klass.DATA_COLOR_INDEX];this._0.stroke='transparent';this._0.rectangle(f,h[0],g,h[1]);var i=this._1+(this._2.length*this._8*d)+(this._2.length*this._8/2.0)+o;this._d(i-(this.center_labels_over_point?this._8/2.0:0.0),d)},this)},this);if(this.center_labels_over_point)this._d(this._o,this._5)}});Bluff.Line=new JS.Class(Bluff.Base,{baseline_value:null,baseline_color:null,hide_dots:null,hide_lines:null,initialize:function(c){if(arguments.length>3)throw'Wrong number of arguments';if(arguments.length==1||(typeof arguments[1]!='number'&&typeof arguments[1]!='string'))this.callSuper(c,null);else this.callSuper();this.hide_dots=this.hide_lines=false;this.baseline_color='red';this.baseline_value=null},draw:function(){this.callSuper();if(!this._9)return;this.x_increment=(this._5>1)?(this._6/(this._5-1)):this._6;var l;if(this._N!==undefined){l=this._7+(this._4-this._N*this._4);this._0.push();this._0.stroke=this.baseline_color;this._0.stroke_width=3.0;this._0.line(this._1,l,this._1+this._6,l);this._0.pop()}Bluff.each(this._a,function(i){var j=null,k=null;Bluff.each(i[this.klass.DATA_VALUES_INDEX],function(c,d){var f=this._1+(this.x_increment*d);if(c===undefined)return;this._d(f,d);var g=this._7+(this._4-c*this._4);this._0.stroke=i[this.klass.DATA_COLOR_INDEX];this._0.fill=i[this.klass.DATA_COLOR_INDEX];this._0.stroke_opacity=1.0;this._0.stroke_width=this._L(this._j/(this._a[0][1].length*6),3.0);if(!this.hide_lines&&j!==null&&k!==null)this._0.line(j,k,f,g);var h=this._L(this._j/(this._a[0][1].length*2),7.0);if(!this.hide_dots)this._0.circle(f,g,f-h,g);j=f;k=g},this)},this)},_X:function(){this.maximum_value=Math.max(this.maximum_value,this.baseline_value);this.callSuper();if(this.baseline_value!==null)this._N=this.baseline_value/this.maximum_value}});Bluff.Net=new JS.Class(Bluff.Base,{hide_dots:null,initialize:function(){this.callSuper();this.hide_dots=false},draw:function(){this.callSuper();if(!this._9)return;this._t=this._4/2.0;this._u=this._1+(this._6/2.0);this._v=this._7+(this._4/2.0)-10;this._M=this._6/(this._5-1);var s=this._L(this._j/(this._a[0][this.klass.DATA_VALUES_INDEX].length*2.5),7.0);this._0.stroke_opacity=1.0;this._0.stroke_width=this._L(this._j/(this._a[0][this.klass.DATA_VALUES_INDEX].length*4),3.0);var q;if(this._N!==undefined){q=this._7+(this._4-this._N*this._4);this._0.push();this._0.stroke_color=this.baseline_color;this._0.fill_opacity=0.0;this._0.stroke_width=5;this._0.line(this._1,q,this._1+this._6,q);this._0.pop()}Bluff.each(this._a,function(m){var p=null,r=null;Bluff.each(m[this.klass.DATA_VALUES_INDEX],function(c,d){if(c===undefined)return;var f=d*Math.PI*2/this._5,g=c*this._t,h=this._u+Math.sin(f)*g,i=this._v-Math.cos(f)*g,j=(d+1<m[this.klass.DATA_VALUES_INDEX].length)?d+1:0,k=j*Math.PI*2/this._5,l=m[this.klass.DATA_VALUES_INDEX][j]*this._t,o=this._u+Math.sin(k)*l,n=this._v-Math.cos(k)*l;this._0.stroke=m[this.klass.DATA_COLOR_INDEX];this._0.fill=m[this.klass.DATA_COLOR_INDEX];this._0.line(h,i,o,n);if(!this.hide_dots)this._0.circle(h,i,h-s,i)},this)},this)},_Y:function(){if(this.hide_line_markers)return;this._t=this._4/2.0;this._u=this._1+(this._6/2.0);this._v=this._7+(this._4/2.0)-10;var c,d;for(var f=0,g=this._5;f<g;f++){c=f*Math.PI*2/this._5;this._0.stroke=this.marker_color;this._0.stroke_width=1;this._0.line(this._u,this._v,this._u+Math.sin(c)*this._t,this._v-Math.cos(c)*this._t);d=labels[f]?labels[f]:'000';this._d(this._u,this._v,c*360/(2*Math.PI),this._t,d)}},_d:function(c,d,f,g,h){var i=1.1,j=c,k=d,l=f*Math.PI/180,o=j+(g*i*Math.sin(l)),n=k-(g*i*Math.cos(l));this._0.fill=this.marker_color;if(this.font)this._0.font=this.font;this._0.pointsize=this._f(20);this._0.stroke='transparent';this._0.font_weight='bold';var m=l/(2*Math.PI);switch(true){case m>=0.96||m<0.04:this._0.gravity='south';break;case m>=0.04&&m<0.21:this._0.gravity='west';break;case m>=0.21&&m<0.29:this._0.gravity='west';break;case m>=0.29&&m<0.46:this._0.gravity='west';break;case m>=0.46&&m<0.54:this._0.gravity='north';break;case m>=0.54&&m<0.71:this._0.gravity='east';break;case m>=0.71&&m<0.79:this._0.gravity='east';break;case m>=0.79&&m<0.96:this._0.gravity='east';break}this._0.annotate_scaled(0,0,o,n,h,this._c)}});Bluff.Pie=new JS.Class(Bluff.Base,{extend:{TEXT_OFFSET_PERCENTAGE:0.15},zero_degreee:null,initialize_ivars:function(){this.callSuper();this.zero_degree=0.0},draw:function(){this.hide_line_markers=true;this.callSuper();if(!this._9)return;var i=this._4,j=(Math.min(this._6,this._4)/2)*0.8,k=this._1+(this._6-i)/2,l=this._1+(this._6/2),o=this._7+(this._4/2)-10,n=this._1E(),m=this.zero_degree,p=this.klass.DATA_VALUES_INDEX;if(this.sort)this._2.sort(function(a,b){return a[p][0]-b[p][0]});Bluff.each(this._2,function(c,d){if(c[this.klass.DATA_VALUES_INDEX][0]>0){this._0.fill=c[this.klass.DATA_COLOR_INDEX];var f=(c[this.klass.DATA_VALUES_INDEX][0]/n)*360;this._0.circle(l,o,l+j,o,m,m+f+0.5);var g=m+((m+f)-m)/2;var h=Math.round((c[this.klass.DATA_VALUES_INDEX][0]/n)*100.0)+'%';this._d(l,o,g,j+(j*this.klass.TEXT_OFFSET_PERCENTAGE),h);m+=f}},this)},_d:function(c,d,f,g,h){var i=20.0,j=c,k=d,l=g+i,o=l*0.15,n=j+((l+o)*Math.cos(f*Math.PI/180)),m=k+(l*Math.sin(f*Math.PI/180));this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.pointsize=this._f(this.marker_font_size);this._0.font_weight='bold';this._0.gravity='center';this._0.annotate_scaled(0,0,n,m,h,this._c)},_1E:function(){var d=0;Bluff.each(this._2,function(c){d+=c[this.klass.DATA_VALUES_INDEX][0]},this);return d}});Bluff.SideBar=new JS.Class(Bluff.Base,{draw:function(){this.has_left_labels=true;this.callSuper();if(!this._9)return;var p=0.9;this._D=this._4/this._5;this._8=this._D*p/this._a.length;this._0.stroke_opacity=0.0;var r=[],s=this._5;while(s--)r[s]=0;var q=[],u=this._5;while(u--)q[u]=this._1;var t=(this._D*(1-p))/2;Bluff.each(this._a,function(n,m){Bluff.each(n[this.klass.DATA_VALUES_INDEX],function(c,d){var f=this._1+(this._6-c*this._6-r[d]),g=this._1+this._6-r[d],h=g-f,i=q[d]-1,j=this._7+(this._D*d)+(this._8*m)+t,k=i+h,l=j+this._8;r[d]+=(c*this._6);this._0.stroke='transparent';this._0.fill=n[this.klass.DATA_COLOR_INDEX];this._0.rectangle(i,j,k,l);var o=this._7+(this._D*d+this._D/2)+t;this._d(o,d)},this)},this)},_Y:function(){if(this.hide_line_markers)return;this._0.stroke_width=1;var c=5;var d=this._1d(this.maximum_value/c),f,g,h,i;for(var j=0;j<=c;j++){f=(this._o-this._1)/c;g=this._o-(f*j)-1;h=j-c;i=Math.abs(h)*d;this._0.stroke=this.marker_color;this._0.line(g,this._i,g,this._7);if(!this.hide_line_numbers){this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.stroke='transparent';this._0.pointsize=this._f(this.marker_font_size);this._0.gravity='center';this._0.annotate_scaled(0,0,g,this._i+(this.klass.LABEL_MARGIN*2.0),i,this._c)}}},_d:function(c,d){if(this.labels[d]&&!this._x[d]){this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.stroke='transparent';this._0.font_weight='normal';this._0.pointsize=this._f(this.marker_font_size);this._0.gravity='east';this._0.annotate_scaled(1,1,this._1-this.klass.LABEL_MARGIN*2.0,c,this.labels[d],this._c);this._x[d]=true}}});Bluff.Spider=new JS.Class(Bluff.Base,{hide_text:null,hide_axes:null,transparent_background:null,initialize:function(c,d,f){this.callSuper(c,f);this._1F=d;this.hide_legend=true},draw:function(){this.hide_line_markers=true;this.callSuper();if(!this._9)return;var c=this._4,d=this._4/2.0,f=this._1+(this._6-c)/2.0,g=this._1+(this._6/2.0),h=this._7+(this._4/2.0)-25;this._1G=d/this._1F;var i=this._1H(),j=0.0,k=(2*Math.PI)/this._2.length,l=0.0;if(!this.hide_axes)this._1I(g,h,d,k);this._1J(g,h,k)},_1g:function(c){return c*this._1G},_d:function(c,d,f,g,h){var i=50,j=c,k=d+0,l=j+((g+i)*Math.cos(f)),o=k+((g+i)*Math.sin(f));this._0.fill=this.marker_color;if(this.font)this._0.font=this.font;this._0.pointsize=this._f(this.legend_font_size);this._0.stroke='transparent';this._0.font_weight='bold';this._0.gravity='center';this._0.annotate_scaled(0,0,l,o,h,this._c)},_1I:function(g,h,i,j,k){if(this.hide_axes)return;var l=0.0;Bluff.each(this._2,function(c){this._0.stroke=k||c[this.klass.DATA_COLOR_INDEX];this._0.stroke_width=5.0;var d=i*Math.cos(l);var f=i*Math.sin(l);this._0.line(g,h,g+d,h+f);if(!this.hide_text)this._d(g,h,l,i,c[this.klass.DATA_LABEL_INDEX]);l+=j},this)},_1J:function(d,f,g,h){var i=[],j=0.0;Bluff.each(this._2,function(c){i.push(d+this._1g(c[this.klass.DATA_VALUES_INDEX][0])*Math.cos(j));i.push(f+this._1g(c[this.klass.DATA_VALUES_INDEX][0])*Math.sin(j));j+=g},this);this._0.stroke_width=1.0;this._0.stroke=h||this.marker_color;this._0.fill=h||this.marker_color;this._0.fill_opacity=0.4;this._0.polyline(i)},_1H:function(){var d=0.0;Bluff.each(this._2,function(c){d+=c[this.klass.DATA_VALUES_INDEX][0]},this);return d}});Bluff.Base.StackedMixin=new JS.Module({_11:function(){var g={};Bluff.each(this._2,function(f){Bluff.each(f[this.klass.DATA_VALUES_INDEX],function(c,d){if(!g[d])g[d]=0.0;g[d]+=c},this)},this);for(var h in g){if(g[h]>this.maximum_value)this.maximum_value=g[h]}this.minimum_value=0}});Bluff.StackedArea=new JS.Class(Bluff.Base,{include:Bluff.Base.StackedMixin,last_series_goes_on_bottom:null,draw:function(){this._11();this.callSuper();if(!this._9)return;this._M=this._6/(this._5-1);this._0.stroke='transparent';var o=[],n=this._5;while(n--)o.push(0);var m=null;var p=this.last_series_goes_on_bottom?'reverse_each':'each';Bluff[p](this._a,function(h){var i=m;m=[];Bluff.each(h[this.klass.DATA_VALUES_INDEX],function(c,d){var f=this._1+(this._M*d);var g=this._7+(this._4-c*this._4-o[d]);o[d]+=(c*this._4);m.push(f);m.push(g);this._d(f,d)},this);var j,k,l;if(i){j=Bluff.array(m);for(k=i.length/2-1;k>=0;k--){j.push(i[2*k]);j.push(i[2*k+1])}j.push(m[0]);j.push(m[1])}else{j=Bluff.array(m);j.push(this._o);j.push(this._i-1);j.push(this._1);j.push(this._i-1);j.push(m[0]);j.push(m[1])}this._0.fill=h[this.klass.DATA_COLOR_INDEX];this._0.polyline(j)},this)}});Bluff.StackedBar=new JS.Class(Bluff.Base,{include:Bluff.Base.StackedMixin,draw:function(){this._11();this.callSuper();if(!this._9)return;var o=0.9;this._8=this._6/this._5;var n=(this._8*(1-o))/2;var m=[],p=this._5;while(p--)m.push(0);Bluff.each(this._a,function(k,l){Bluff.each(k[this.klass.DATA_VALUES_INDEX],function(c,d){var f=this._1+(this._8*d)+(this._8*o/2.0)+n;this._d(f,d);if(c==0)return;var g=this._1+(this._8*d)+n;var h=this._7+(this._4-c*this._4-m[d])+1;var i=g+this._8*o;var j=this._7+this._4-m[d]-1;m[d]+=(c*this._4);this._0.fill=k[this.klass.DATA_COLOR_INDEX];this._0.rectangle(g,h,i,j)},this)},this)}});Bluff.AccumulatorBar=new JS.Class(Bluff.StackedBar,{draw:function(){if(this._2.length!=1)throw'Incorrect number of datasets exception';var g=[];var h=0;var i=[];Bluff.each(this._2[0][this.klass.DATA_VALUES_INDEX],function(d){var f=-Infinity;Bluff.each(i,function(c){f=Math.max(f,c)});i.push((h>0)?(d+f):d);g.push(i[h]-d);h+=1},this);this.data("Accumulator",g);this.callSuper()}});Bluff.SideStackedBar=new JS.Class(Bluff.SideBar,{include:Bluff.Base.StackedMixin,draw:function(){this.has_left_labels=true;this._11();this.callSuper();if(!this._9)return;var p=0.9;this._8=this._4/this._5;var r=[],s=this._5,q=[],u=this._5,t=(this._8*(1-p))/2;while(s--)r.push(0);while(u--)q.push(this._1);Bluff.each(this._a,function(n,m){this._0.fill=n[this.klass.DATA_COLOR_INDEX];Bluff.each(n[this.klass.DATA_VALUES_INDEX],function(c,d){var f=this._1+(this._6-c*this._6-r[d])+1;var g=this._1+this._6-r[d]-1;var h=g-f;var i=q[d],j=this._7+(this._8*d)+t,k=i+h,l=j+this._8*p;q[d]+=h;r[d]+=(c*this._6-2);this._0.rectangle(i,j,k,l);var o=this._7+(this._8*d)+(this._8*p/2.0)+t;this._d(o,d)},this)},this)},_17:function(c,d){d=d||0;return this._1f(c,d)>this.maximum_value},_1f:function(d,f){var g=0;Bluff.each(this._2,function(c){g+=c[this.klass.DATA_VALUES_INDEX][f]},this);return g}});Bluff.Mini.Legend=new JS.Module({_12:function(){this._1K=this._I;this._w+=this._2.length*this._C(this._f(this.legend_font_size))*1.7;this._R()},_13:function(){this._s=[];Bluff.each(this._2,function(c){this._s.push(c[this.klass.DATA_LABEL_INDEX])},this);var f=40.0,g=10.0,h=100.0,i=40.0;if(this.font)this._0.font=this.font;this._0.pointsize=this.legend_font_size;var j=h,k=this._1K+i;this._r(function(){this._0.line(0.0,k,this._b,k)});Bluff.each(this._s,function(c,d){this._0.fill=this.font_color;if(this.font)this._0.font=this.font;this._0.pointsize=this._f(this.legend_font_size);this._0.stroke='transparent';this._0.font_weight='normal';this._0.gravity='west';this._0.annotate_scaled(this._b,1.0,j+(f*1.7),k,this._1L(c),this._c);this._0.stroke='transparent';this._0.fill=this._2[d][this.klass.DATA_COLOR_INDEX];this._0.rectangle(j,k-f/2.0,j+f,k+f/2.0);k+=this._C(this.legend_font_size)*1.7},this);this._l=0},_1L:function(c){var d=String(c);while(this._K(this._f(this.legend_font_size),d)>(this._j-this.legend_left_margin-this.right_margin)&&(d.length>1))d=d.substr(0,d.length-1);return d+(d.length<String(c).length?"…":'')}});Bluff.Mini.Bar=new JS.Class(Bluff.Bar,{include:Bluff.Mini.Legend,draw:function(){this.hide_legend=true;this.hide_title=true;this.hide_line_numbers=true;this.marker_font_size=50.0;this.minimum_value=0.0;this.legend_font_size=60.0;this._12();this.callSuper();this._13()}});Bluff.Mini.Pie=new JS.Class(Bluff.Pie,{include:Bluff.Mini.Legend,initialize_ivars:function(){this.callSuper();this.hide_legend=true;this.hide_title=true;this.hide_line_numbers=true;this.marker_font_size=60.0;this.legend_font_size=60.0},draw:function(){this._12();this.callSuper();this._13()}});Bluff.Mini.SideBar=new JS.Class(Bluff.SideBar,{include:Bluff.Mini.Legend,initialize_ivars:function(){this.callSuper();this.hide_legend=true;this.hide_title=true;this.hide_line_numbers=true;this.marker_font_size=50.0;this.legend_font_size=50.0},draw:function(){this._12();this.callSuper();this._13()}});Bluff.Renderer=new JS.Class({font:'Arial, Helvetica, Verdana, sans-serif',gravity:'north',initialize:function(c){this._O=document.getElementById(c);this._3=this._O.getContext('2d');this._14=[]},scale:function(c,d){this._g=c;this._h=d||c},caps_height:function(c){var d=this._P(c,'X'),f=this._E(d).height;this._Q(d);return f},text_width:function(c,d){var f=this._P(c,d);var g=this._E(f).width;this._Q(f);return g},get_type_metrics:function(c){var d=this._P(this.pointsize,c);var f=this._E(d);this._Q(d);return f},clear:function(c,d){this._O.width=c;this._O.height=d;this._3.clearRect(0,0,c,d);var f=this._14.length;while(f--)this._Q(f)},push:function(){this._3.save()},pop:function(){this._3.restore()},render_gradiated_background:function(c,d,f,g){this.clear(c,d);var h=this._3.createLinearGradient(0,0,0,d);h.addColorStop(0,f);h.addColorStop(1,g);this._3.fillStyle=h;this._3.fillRect(0,0,c,d)},render_solid_background:function(c,d,f){this.clear(c,d);this._3.fillStyle=f;this._3.fillRect(0,0,c,d)},annotate_scaled:function(c,d,f,g,h,i){var j=(c*i)>=1?(c*i):1;var k=(d*i)>=1?(d*i):1;var h=this._P(this.pointsize,h);h.style.color=this.fill;h.style.fontWeight=this.font_weight;h.style.textAlign='center';var l=this._1M(this._O);h.style.left=(l.left+this._g*f+this._1N(h,j))+'px';h.style.top=(l.top+this._h*g+this._1O(h,k))+'px'},circle:function(c,d,f,g,h,i){var j=Math.sqrt(Math.pow(f-c,2)+Math.pow(g-d,2));this._3.fillStyle=this.fill;this._3.beginPath();var k=(h||0)*Math.PI/180;var l=(i||360)*Math.PI/180;if(h!==undefined&&i!==undefined){this._3.moveTo(this._g*(c+j*Math.cos(l)),this._h*(d+j*Math.sin(l)));this._3.lineTo(this._g*c,this._h*d);this._3.lineTo(this._g*(c+j*Math.cos(k)),this._h*(d+j*Math.sin(k)))}this._3.arc(this._g*c,this._h*d,this._g*j,k,l,false);this._3.fill()},line:function(c,d,f,g){this._3.strokeStyle=this.stroke;this._3.lineWidth=this.stroke_width;this._3.beginPath();this._3.moveTo(this._g*c,this._h*d);this._3.lineTo(this._g*f,this._h*g);this._3.stroke()},polyline:function(c){this._3.fillStyle=this.fill;this._3.globalAlpha=this.fill_opacity||1;try{this._3.strokeStyle=this.stroke}catch(e){}var d=c.shift(),f=c.shift();this._3.beginPath();this._3.moveTo(this._g*d,this._h*f);while(c.length>0){d=c.shift();f=c.shift();this._3.lineTo(this._g*d,this._h*f)}this._3.fill()},rectangle:function(c,d,f,g){var h;if(c>f){h=c;c=f;f=h}if(d>g){h=d;d=g;g=h}try{this._3.fillStyle=this.fill;this._3.fillRect(this._g*c,this._h*d,this._g*(f-c),this._h*(g-d))}catch(e){}try{this._3.strokeStyle=this.stroke;if(this.stroke!='transparent')this._3.strokeRect(this._g*c,this._h*d,this._g*(f-c),this._h*(g-d))}catch(e){}},_1N:function(c,d){var f=this._E(c).width;switch(this.gravity){case'west':return 0;case'east':return d-f;case'north':case'south':case'center':return(d-f)/2}},_1O:function(c,d){var f=this._E(c).height;switch(this.gravity){case'north':return 0;case'south':return d-f;case'west':case'east':case'center':return(d-f)/2}},_P:function(c,d){var f=this._1P(d);f.style.fontFamily=this.font;f.style.fontSize=(typeof c=='number')?c+'px':c;return f},_1P:function(c){var d=document.createElement('div');d.style.position='absolute';d.appendChild(document.createTextNode(c));document.body.appendChild(d);this._14.push(d);return d},_Q:function(c){var d=this._14,f=c;if(typeof f!='number'){f=d.length-1;while(d[f]&&d[f]!=c)f-=1}if(f==-1)return;d[f].parentNode.removeChild(d[f]);d.splice(f,1)},_E:function(c){var d=c.style.display;return(d&&d!='none')?{width:c.offsetWidth,height:c.offsetHeight}:{width:c.clientWidth,height:c.clientHeight}},_1M:function(c){var d=0,f=0;do{d+=c.offsetTop||0;f+=c.offsetLeft||0;c=c.offsetParent}while(c);return{left:f,top:d}}});Bluff.TableReader=new JS.Class({NUMBER_FORMAT:/\-?(0|[1-9]\d*)(\.\d+)?(e[\+\-]?\d+)?/i,initialize:function(c,d){this._1Q=(typeof c=='string')?document.getElementById(c):c;this._1h=!!d},get_data:function(){if(!this._2)this._1i();return this._2},get_labels:function(){if(!this._15)this._1i();return this._15},get_title:function(){return this._1R},get_series:function(c){if(this._2[c])return this._2[c];return this._2[c]={points:[]}},_1i:function(){this._F=this._m=0;this._G=this._H=0;this._2=[];this._15={};this._p=[];this._q=[];this._1j(this._1Q);if((this._p.length>1&&this._q.length==1)||this._p.length<this._q.length){if(!this._1h)this._1k()}else{if(this._1h)this._1k()}Bluff.each(this._q,function(c,d){this.get_series(d-this._H).name=c},this);Bluff.each(this._p,function(c,d){this._15[d-this._G]=c},this)},_1j:function(c){this._1S(c);var d,f=c.childNodes,g=f.length;for(d=0;d<g;d++)this._1j(f[d])},_1S:function(c){if(!c.tagName)return;var d=this._1T(c.innerHTML),f,g;switch(c.tagName.toUpperCase()){case'TR':if(!this._9)this._G=this._F;this._F+=1;this._m=0;break;case'TD':if(!this._9)this._H=this._m;this._m+=1;d=parseFloat(d.match(this.NUMBER_FORMAT)[0]);if(typeof d=='number'){this._9=true;f=this._m-this._H-1;g=this._F-this._G-1;this.get_series(f).points[g]=parseFloat(d)}break;case'TH':this._m+=1;if(this._m==1&&this._F==1)this._p[0]=this._q[0]=d;else if(c.scope=="row"||this._m==1)this._p[this._F-1]=d;else this._q[this._m-1]=d;break;case'CAPTION':this._1R=d;break}},_1k:function(){var h=this._2,i;this._2=[];Bluff.each(h,function(f,g){Bluff.each(f.points,function(c,d){this.get_series(d).points[g]=c},this)},this);i=this._p;this._p=this._q;this._q=i;i=this._G;this._G=this._H;this._H=i},_1T:function(c){return c.replace(/<\/?[^>]+>/gi,'')},extend:{Mixin:new JS.Module({data_from_table:function(d,f){var g=new Bluff.TableReader(d,f),h=g.get_data();Bluff.each(h,function(c){this.data(c.name,c.points)},this);this.labels=g.get_labels();this.title=g.get_title()||this.title}})}});Bluff.Base.include(Bluff.TableReader.Mixin);