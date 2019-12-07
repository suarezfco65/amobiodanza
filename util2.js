var n1, n2;
function inicioNivel1(titulo)	{
	n1 = nivel1;
	var s='';
	s += '  <div class="panel panel-default">';
	s += '    <div class="panel-heading" role="tab" id="heading'+nivel1+'">';
	s += '      <h4 class="panel-title">';
	s += '        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+nivel1+'" aria-expanded="false" aria-controls="collapse'+nivel1+'">';
	s += '          '+nivel1+'. '+titulo;
	s += '        </a>';
	s += '      </h4>';
	s += '    </div>';
	s += '    <div id="collapse'+nivel1+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+nivel1+'">';
	s += '      <div class="panel-body">';
	return s;
}
function finNivel1()	{
	var s='';
	s += '      </div>';
	s += '    </div>';
	s += '  </div>';
	return s;
}
function inicioNivel2(nivel2, titulo)	{
	n2 = nivel2;
	var s = '';
	s += '          <div class="panel panel-default">';
	s += '            <div class="panel-heading" role="tab" id="subHeading'+nivel1+'-'+nivel2+'">';
	s += '              <h4 class="panel-title">';
	s += '                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#sub-accordion" href="#collapseSub'+nivel1+'-'+nivel2+'" aria-expanded="false" aria-controls="collapseSub'+nivel1+'-'+nivel2+'">';
	s += '                  '+nivel2+'. '+titulo;
	s += '                </a>';
	s += '              </h4>';
	s += '            </div>';
	s += '            <div id="collapseSub'+nivel1+'-'+nivel2+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSub'+nivel1+'-'+nivel2+'">';
	s += '              <div class="panel-body">';
	return s;
}
function finNivel2()	{
	var s='';
	s += '              </div>';
	s += '            </div>';
	s += '          </div>';
	return s;
}
function longMaxima(aTexto)	{
	var max = 0;
	for (var i=0; i<aTexto.length; i++)
		if (max < aTexto[i].length)
			max = aTexto[i].length;
	return max
}
function conSombra()	{
	var s='';
	if ( document.getElementById('f1')) var i = 0
	else	{
		s += '  <defs>';
		s += '    <filter id="f1" x="0" y="0">';
		s += '      <feOffset result="offOut" in="SourceAlpha" dx="7" dy="7"></feOffset>';
		s += '      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3"></feGaussianBlur>';
		s += '      <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>';
		s += '    </filter>';
		s += '  </defs>';
	}
	return s;
}
function cajaTexto(aTexto)	{
	var s='';
	var lArr = aTexto.length;
	var lMax = longMaxima(aTexto);
	s += '<svg width="'+((lMax*8)+8)+'" height="'+((22*lArr)+30)+'">';
	conSombra();
	s += '  <rect width="'+(lMax*8)+'" height="'+((22*lArr)+10)+'" stroke="purple" stroke-width="3" fill="white" filter="url(#f1)"></rect>';
	for (var i=0; i<aTexto.length; i++)
		s += ' <text fill="black" font-size="12" font-family="Courier New" x="10" y="'+(i*22+22)+'">'+aTexto[i]+'</text>';
	s += '</svg>';
	return s;
}
function cuadroTexto(x, y, aTexto, borde=1)	{
	var s='';
	var sizeFuente = 18;
	var anchoLetra = sizeFuente*0.6;
	var altoLinea = sizeFuente*1.5;
	var lineaMax = longMaxima(aTexto);
	var lineas = aTexto.length;
	var ancho = (anchoLetra+1) * lineaMax;
	var alto = (lineas+1) * altoLinea;
	if (borde == 2)	{
		s += '<rect x="'+(x-5)+'" y="'+(y-5)+'" width="'+ancho+'" height="'+alto+'" fill="silver"></rect>';
		s += '<rect x="'+x+'" y="'+y+'" width="'+ancho+'" height="'+alto+'" stroke="gray" stroke-width="2" fill="white"></rect>';
	}
	if (borde == 1)
		s += '<rect x="'+x+'" y="'+y+'" width="'+ancho+'" height="'+alto+'" stroke="gray" stroke-width="2" fill="white"></rect>';
	for (var i=0; i<aTexto.length; i++)	{
		var x1 = x+anchoLetra*(1+(lineaMax-aTexto[i].trim().length)/2);
		var y1 = y+(i+1.20)*altoLinea;
		s += ' <text fill="black" font-size="'+sizeFuente+'" font-family="Courier New" x="'+x1+'" y="'+y1+'">'+aTexto[i]+'</text>';
	}
	return s;
}
function elipseTexto(x, y, aTexto, borde=1)	{
	var s='';
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
		s += '<ellipse cx="'+(cx+5)+'" cy="'+(cy+5)+'" rx="'+rx+'" ry="'+ry+'" fill="silver"></ellipse>';
		s += '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" stroke="gray" stroke-width="2" fill="white"></ellipse>';
	}
	if (borde == 1)
		s += '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" stroke="gray" stroke-width="2" fill="white"></ellipse>';
	for (var i=0; i<aTexto.length; i++)	{
		var x1 = x+anchoLetra*(2.75+(lineaMax-aTexto[i].trim().length)/2);
		var y1 = y+(i+1.50)*altoLinea;
		s += ' <text fill="black" font-size="'+sizeFuente+'" font-family="Courier New" x="'+x1+'" y="'+y1+'">'+aTexto[i]+'</text>';
	}
	return s;
}
function linea(x1, y1, x2, y2)	{
	var s='';
	s += '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"  stroke="gray" stroke-width="2"/>';
	return s;
}
function flecha (x1, y1, size, direccion, angulo=0)	{
	var s='';
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
	s += '<g  transform="rotate('+angulo+', '+x1+', '+y1+')">';
	s += '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"  stroke="gray" stroke-width="2"/>';
	s += '<line x1="'+x2+'" y1="'+y2+'" x2="'+x3+'" y2="'+y3+'"  stroke="gray" stroke-width="2"/>';
	s += '<line x1="'+x2+'" y1="'+y2+'" x2="'+x4+'" y2="'+y4+'"  stroke="gray" stroke-width="2"/>';
	s += '</g>';
	return s;
}
//  <div w3-include-html="content.html"></div> 
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}