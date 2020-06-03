var cafecito = require("express");//express es la libreria, requiere no existen en el fonrten soolo en el backen, requiere busca librerias de npm en este caso la variable express/* asdfa*/
var aplicacion = cafecito();

aplicacion.get("/", inicio );
//  "/" esto es la url, inmediatamente despues del eslash en este caso el home. Luego se dispara la funcion inicio
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
  resultado.send("Esta es la <strong>prueba del servidor y esta funcionando</strong>");
}

function cursos(peticion, resultado)
{
  resultado.send("Estos son los <strong>cambios que sse pueden ver</strong>");
}

aplicacion.listen(8989);
