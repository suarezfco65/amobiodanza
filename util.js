function inicioNivel1(titulo)	{
	document.writeln('  <div class="panel panel-default">');
	document.writeln('    <div class="panel-heading" role="tab" id="heading'+nivel1+'">');
	document.writeln('      <h4 class="panel-title">');
	document.writeln('        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+nivel1+'" aria-expanded="false" aria-controls="collapse'+nivel1+'">');
	document.writeln('          '+nivel1+'. '+titulo);
	document.writeln('        </a>');
	document.writeln('      </h4>');
	document.writeln('    </div>');
	document.writeln('    <div id="collapse'+nivel1+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+nivel1+'">');
	document.writeln('      <div class="panel-body">');
}
function finNivel1()	{
	document.writeln('      </div>');
	document.writeln('    </div>');
	document.writeln('  </div>');
}
function inicioNivel2(nivel2, titulo)	{
	document.writeln('          <div class="panel panel-default">');
	document.writeln('            <div class="panel-heading" role="tab" id="subHeading'+nivel1+'-'+nivel2+'">');
	document.writeln('              <h4 class="panel-title">');
	document.writeln('                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#sub-accordion" href="#collapseSub'+nivel1+'-'+nivel2+'" aria-expanded="false" aria-controls="collapseSub'+nivel1+'-'+nivel2+'">');
	document.writeln('                  '+nivel2+'. '+titulo);
	document.writeln('                </a>');
	document.writeln('              </h4>');
	document.writeln('            </div>');
	document.writeln('            <div id="collapseSub'+nivel1+'-'+nivel2+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSub'+nivel1+'-'+nivel2+'">');
	document.writeln('              <div class="panel-body">');
}
function finNivel2()	{
	document.writeln('              </div>');
	document.writeln('            </div>');
	document.writeln('          </div>');
}
function longMaxima(aTexto)	{
	var max = 0;
	for (var i=0; i<aTexto.length; i++)
		if (max < aTexto[i].length)
			max = aTexto[i].length;
	return max
}
function conSombra()	{
	if ( document.getElementById('f1')) var i = 0
	else	{
		document.writeln('  <defs>');
		document.writeln('    <filter id="f1" x="0" y="0">');
		document.writeln('      <feOffset result="offOut" in="SourceAlpha" dx="7" dy="7"></feOffset>');
		document.writeln('      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3"></feGaussianBlur>');
		document.writeln('      <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>');
		document.writeln('    </filter>');
		document.writeln('  </defs>');
	}
}
function cajaTexto(aTexto)	{
	var lArr = aTexto.length;
	var lMax = longMaxima(aTexto);
	document.writeln('<svg width="'+((lMax*8)+8)+'" height="'+((22*lArr)+30)+'">');
	conSombra();
	document.writeln('  <rect width="'+(lMax*8)+'" height="'+((22*lArr)+10)+'" stroke="purple" stroke-width="3" fill="white" filter="url(#f1)"></rect>');
	for (var i=0; i<aTexto.length; i++)
		document.writeln(' <text fill="black" font-size="12" font-family="Courier New" x="10" y="'+(i*22+22)+'">'+aTexto[i]+'</text>');
	document.writeln('</svg>');
}
function cuadroTexto(x, y, aTexto, borde=1)	{
	var sizeFuente = 18;
	var anchoLetra = sizeFuente*0.6;
	var altoLinea = sizeFuente*1.5;
	var lineaMax = longMaxima(aTexto);
	var lineas = aTexto.length;
	var ancho = (anchoLetra+1) * lineaMax;
	var alto = (lineas+1) * altoLinea;
	if (borde == 2)	{
		conSombra();
		document.writeln('<rect x="'+x+'" y="'+y+'" width="'+ancho+'" height="'+alto+'" stroke="gray" stroke-width="2" fill="white" filter="url(#f1)"></rect>');
	}
	if (borde == 1)
		document.writeln('<rect x="'+x+'" y="'+y+'" width="'+ancho+'" height="'+alto+'" stroke="gray" stroke-width="2" fill="white"></rect>');
	for (var i=0; i<aTexto.length; i++)	{
		var x1 = x+anchoLetra*(1+(lineaMax-aTexto[i].trim().length)/2);
		var y1 = y+(i+1.20)*altoLinea;
		document.writeln(' <text fill="black" font-size="'+sizeFuente+'" font-family="Courier New" x="'+x1+'" y="'+y1+'">'+aTexto[i]+'</text>');
	}
}
function elipseTexto(x, y, aTexto, borde=1)	{
	var sizeFuente = 18;
	var anchoLetra = sizeFuente*0.6;
	var altoLinea = sizeFuente*1.5;
	var lineaMax = longMaxima(aTexto);
	var lineas = aTexto.length;
	var ancho = (anchoLetra+1) * lineaMax;
	var alto = (lineas+1) * altoLinea;
	var rx = ancho/1.7;
	var ry = alto/1.7;
	var cx = x+rx;
	var cy = y+ry;
	if (borde == 2)	{
		conSombra();
		document.writeln('<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" stroke="gray" stroke-width="2" fill="white" filter="url(#f1)"></ellipse>');
	}
	if (borde == 1)
		document.writeln('<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" stroke="gray" stroke-width="2" fill="white"></ellipse>');
	for (var i=0; i<aTexto.length; i++)	{
		var x1 = x+anchoLetra*(2.75+(lineaMax-aTexto[i].trim().length)/2);
		var y1 = y+(i+1.50)*altoLinea;
		document.writeln(' <text fill="black" font-size="'+sizeFuente+'" font-family="Courier New" x="'+x1+'" y="'+y1+'">'+aTexto[i]+'</text>');
	}
}
function linea(x1, y1, x2, y2)	{
	document.writeln('<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"  stroke="gray" stroke-width="2"/>');
}
function flecha (x1, y1, size, direccion, angulo=0)	{
	var sizePunta = 5;
	var x2 = x1;
	var y2 = y1;
	var x3, y3, x4, y4;
	if (direccion == "de")	{
		x2 = x1 + size;
		x3 = x2 - sizePunta;
		y3 = y2 - sizePunta;
		x4 = x3;
		y4 = y2 + sizePunta;
	}
	if (direccion == "iz") 	{
		x2 = x1 - size;
		x3 = x2 + sizePunta;
		y3 = y2 - sizePunta;
		x4 = x3;
		y4 = y2 + sizePunta;
	}
	if (direccion == "ar")	{
		y2 = y1 - size;
		y3 = y2 + sizePunta;
		x3 = x2 - sizePunta;
		y4 = y3;
		x4 = x2 + sizePunta;
	}
	if (direccion == "ab")	{
		y2 = y1 + size;
		y3 = y2 - sizePunta;
		x3 = x2 - sizePunta;
		y4 = y3;
		x4 = x2 + sizePunta;
	}
	document.writeln('<g  transform="rotate('+angulo+', '+x1+', '+y1+')">');
	document.writeln('<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"  stroke="gray" stroke-width="2"/>');
	document.writeln('<line x1="'+x2+'" y1="'+y2+'" x2="'+x3+'" y2="'+y3+'"  stroke="gray" stroke-width="2"/>');
	document.writeln('<line x1="'+x2+'" y1="'+y2+'" x2="'+x4+'" y2="'+y4+'"  stroke="gray" stroke-width="2"/>');
	document.writeln('</g>');
}
