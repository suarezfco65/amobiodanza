var crearNavBar =   function (pagWeb, opcionActiva) {
    var opciones = [
        {titulo:'Inicio', href:'index.html', hijos:[]},
        {titulo:'1er año', href:'#', hijos:[
          {titulo:'01 Definición y Modelo Teórico', href:'01 Definición y Modelo Teórico.html', hijos:[]},
          {titulo:'02 Inconsciente Vital y Principio Biocéntrico', href:'02 Inconsciente Vital y Principio Biocéntrico.html', hijos:[]},
          {titulo:'03 La Vivencia', href:'03 La Vivencia.html', hijos:[]},
          {titulo:'04 Aspectos Biológicos', href:'04 Aspectos Biológicos de la Biodanza.html', hijos:[]},
          {titulo:'05 Aspectos Fisiológicos', href:'05 Aspectos Fisiológicos de la Biodanza.html', hijos:[]},
          {titulo:'06 Aspectos Psicológicos', href:'06 Aspectos Psicológicos de la Biodanza.html', hijos:[]},
          {titulo:'07 Antecedentes Míticos y Filosoficos', href:'07 Antecedentes Míticos y Filosóficos.html', hijos:[]},
          {titulo:'08 Identidad e Integración', href:'08 Identidad e Integración.html', hijos:[]},
          {titulo:'09 Trance y Regresión', href:'09 Trance y Regresión.html', hijos:[]},
          {titulo:'10 Contacto y Caricias', href:'10 Contacto y Caricias.html', hijos:[]}
        ]},
        {titulo:'2do año', href:'#', hijos:[
          {titulo:'11 Movimiento Humano', href:'11 Movimiento Humano.html', hijos:[]},
          {titulo:'12 Vitalidad', href:'12 Vitalidad.html', hijos:[]},
          {titulo:'13 Sexualidad', href:'13 Sexualidad.html', hijos:[]},
          {titulo:'14 Creatividad', href:'14 Creatividad.html', hijos:[]},
          {titulo:'15 Afectividad', href:'15 Afectividad.html', hijos:[]},
          {titulo:'16 Trascendencia', href:'16 Trascendencia.html', hijos:[]},
          {titulo:'17 Mecanismos de Acción', href:'17 Mecanismos de Acción.html', hijos:[]},
          {titulo:'18 Biodanza y Acción Social', href:'18 Biodanza y Acción Social.html', hijos:[]},
          {titulo:'19 Aplicaciones y Extensiones', href:'19 Aplicaciones y Extensiones.html', hijos:[]},
          {titulo:'20 Biodanza Ars Magna', href:'20 Biodanza Ars Magna.html', hijos:[]}
        ]},
        {titulo:'3er año', href:'#', hijos:[
          {titulo:'La Música', href:'21 La Música.html', hijos:[]},
          {titulo:'Metodología I (Semantica Músical)', href:'22 Metodología I.html', hijos:[]},
          {titulo:'Metodología II (La Sesión de Biodanza)', href:'23 Metodología II.html', hijos:[]},
          {titulo:'Metodología III (La Sesión de Biodanza II)', href:'24 Metodología III.html', hijos:[]},
          {titulo:'Metodología IV (Profundización)', href:'25 Metodología IV.html', hijos:[]},
          {titulo:'Metodología V (El Grupo de Biodanza)', href:'26 Metodología V.html', hijos:[]},
          {titulo:'Metodología VI (Criterios de Evaluación)', href:'27 Metodología VI.html', hijos:[]}
        ]},
        {titulo:'Sesión', href:'#', hijos:[
          {titulo:'Catálogo de Danzas', href:'catalogo.html', hijos:[]},
          {titulo:'M. Pessoa - Vida y Plenitud', href:'mariaPessoa.html', hijos:[]},
          {titulo:'Música - Danza - Línea de Vivencia', href:'musicaCruce.html', hijos:[]},
          {titulo:'Preparar Sesión', href:'sesion.html', hijos:[]},
          {titulo:'Algunas Sesiones', href:'algunasSesiones.html', hijos:[]}
        ]}
    ];
    document.write('<nav class="navbar navbar-inverse navbar-fixed-top">');
    document.write('  <div class="container-fluid">');
    document.write('    <div class="navbar-header">');
    document.write('      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">');
    document.write('        <span class="icon-bar"></span>');
    document.write('        <span class="icon-bar"></span>');
    document.write('        <span class="icon-bar"></span>');
    document.write('      </button>');
    document.write('      <a class="navbar-brand" href="index.html">'+pagWeb+'</a>');
    document.write('    </div>');
    document.write('    <div class="collapse navbar-collapse" id="myNavbar">');
    document.write('      <ul class="nav navbar-nav">');
    for (var i=0; i<opciones.length; i++)   {
        var s = '<li';
        var cls = '';
        if (opciones[i].titulo == opcionActiva)     cls = ' class="active';
        if (opciones[i].hijos.length > 0)   {
            if (cls == "") cls = ' class="dropdown">'
            else    cls += ' dropdown">'
            s += cls
            s+= '<a class="dropdown-toggle" data-toggle="dropdown" href="'+opciones[i].href+'">'+opciones[i].titulo+'<span class="caret"></span></a>'
            s+= '<ul class="dropdown-menu">';
            for (var j=0; j<opciones[i].hijos.length; j++)  
                s+='<li><a href="'+opciones[i].hijos[j].href+'">'+opciones[i].hijos[j].titulo+'</a></li>';
            s+= '</ul></li>';
        }
        else   {
            if (cls!='') s+=cls+'"';
            s += '><a href="'+opciones[i].href+'">'+opciones[i].titulo+'</li>';   
        }
        document.write(s);
    }
    document.write('      </ul>');
    document.write('      <ul class="nav navbar-nav navbar-right">');
//    document.write('        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Registro</a></li>');
    document.write('        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Acceder</a></li>');
    document.write('      </ul>');
    document.write('    </div>');
    document.write('  </div>');
    document.write('</nav>');
}
function cIcon(obj) {
    if (obj.innerHTML == '❥')   
        obj.innerHTML = '❤'
    else 
        obj.innerHTML = '❥';
}
function starContenido(titulo, h, id, c=true) {
    var color = (h==4) ? 'red': ((h==5) ? 'blue' : 'green');
    var sc= c ? '❥' : '❤';
    var scoll = c ? 'collapse' : 'collapse in';
    var sty = (h==5) ? ' style="margin-left:3%"':'';
    var s= '<h'+h+sty+'><span data-toggle="collapse" data-target="#c'+id+'" onclick="cIcon(this);" style="color:'+color+'; cursor:pointer">'+sc+'</span> '+titulo+'</h'+h+'>';
    s+='<div id="c'+id+'" class="'+scoll+'"'+sty+'>';
    return(s);
}
function inicioContenido(titulo, h, id, c=true) {
    document.write(starContenido(titulo, h, id, c));
}
function endContenido() {
    return '</div>';
}
function finContenido() {
    document.write(endContenido())
}
function cerrarAbrir(obj, h) {
	var str = obj.innerHTML;
	var abrir = (str.indexOf('Abrir') == 0)
	var td;
	var spans = document.getElementsByTagName('span');
	for (var i = 0; i < spans.length; i++)  {
		if (dt = spans[i].getAttribute('data-target'))    {
			if (spans[i].parentElement.nodeName == 'H'+h)	{
				if ((spans[i].innerHTML === "❥" && abrir)	||
					(spans[i].innerHTML === "❤" && !abrir)	)
					spans[i].click()
			}
		}
	}
	if (abrir) obj.innerHTML = str.replace('Abrir','Cerrar')
	else obj.innerHTML = str.replace('Cerrar','Abrir')
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
buscarProfesor = function (l,q,b)  { 
	let p=-1; l.forEach(function(v, i) { if (v[q] === b) p = i; }); return p;  
}

$( document ).ready(function() {
	const hr = sessionStorage.getItem("hr");
	$( document ).ready(function() {
		if (buscarProfesor(psr,"hr",hr) == -1) {
			sessionStorage.setItem('href',window.location);
			window.location.href="https://suarezfco65.github.io/amobiodanza/login.html";
		}
	});
});

function checkAppStatus() {
    const currentDate = new Date();
    const endDate = new Date('2025-04-01');

    if (currentDate < endDate) {
        // Mostrar ventana modal
        const modalContent = `
            <div style="padding: 20px; text-align: center;">
                <h2>Atención</h2>
                <p>Esta aplicación dejará de funcionar a partir del 01-Abril-2025. Y solo quedará disponible para estudiantes de Biodanza</p>
                <p>Visita la <a href="https://ilovebiodanza.top" target="_blank">Nueva versión de Yo Amo Biodanza</a></p>
                <button onclick="closeModal()">Cerrar</button>
            </div>
        `;
        // showModal(modalContent);

        // Crear el div del anuncio
        const anuncioDiv = document.createElement('div');
        anuncioDiv.id = 'anuncio';
        
        // Establecer el contenido del anuncio
        anuncioDiv.innerHTML = `
            <h2>Atención</h2>
            <p>Esta aplicación dejará de funcionar a partir del 01-Abril-2025. Y solo quedará disponible para estudiantes de Biodanza</p>
            <p>Visita la <a href="https://ilovebiodanza.top" target="_blank">Nueva versión de Yo Amo Biodanza</a></p>
        `;

        // Establecer estilos en JavaScript
        anuncioDiv.style.position = 'fixed'; // Fijar la posición
        anuncioDiv.style.bottom = '0'; // Ajustar al fondo
        anuncioDiv.style.left = '0';
        anuncioDiv.style.right = '0';
        anuncioDiv.style.backgroundColor = '#f8f9fa';
        anuncioDiv.style.padding = '10px';
        anuncioDiv.style.textAlign = 'center';
        anuncioDiv.style.borderTop = '1px solid #dee2e6';
        anuncioDiv.style.display = 'none'; // Inicialmente oculto
        anuncioDiv.style.zIndex = '1000'; // Asegurar que esté por encima de otros elementos

        // Agregar el div al cuerpo
        document.body.appendChild(anuncioDiv);

        // Mostrar el anuncio
        anuncioDiv.style.display = 'block'; // Mostrar el anuncio

        // Hacer desaparecer el anuncio después de 90 segundos
        setTimeout(() => {
            anuncioDiv.style.display = 'none'; // Ocultar el anuncio
        }, 15000); // 90000 milisegundos = 90 segundos

    } else {
        // Mostrar alerta y redireccionar
        alert("La aplicación ha dejado de funcionar.");
        window.location.href = "https://ilovebiodanza.top";
    }
}

function showModal(content) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = '#FFFFFF';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.innerHTML = content;

    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) {
        document.body.removeChild(modal);
    }
}

// Llamar a la función al cargar la página
window.onload = checkAppStatus;
