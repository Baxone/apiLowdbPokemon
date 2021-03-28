# Creacion de proyecto
Este proyecto se ha creado para realizar una api que nos sirva un fichero json, a través de la libreria lowdb
(https://www.npmjs.com/package/lowdb).

Dicha libreria me permite crear un fichero fisico y usarlo para hacer peticiones como si fuese una base de datos, lowdb implement un ORM propio que me permite realizar acciones de GET, DELETE, PUT, POST sobre el fichero fisico y asi no tener una dependencia de una base de datos externa, para la practica me parecía una opción rapida que no me exigía un instancia externa de BBDD.

Como dependencias de proyecto he instalado CORS, EXPRESS, LOWDB, MORGAN, en sus versiones más actuales.

## Arrancar el proyecto
Antes de arrancar el proyecto cargar las dependencias que estan en el fichero package.json a través de:

### `npm i`

En el directorio del proyecto puedes arrancar la instancia en local a través de este comando:

### `npm run dev`

Arrancarás el proyecto en el puerto 3000 no sirve ninguna vista ya que es solo una api básica para el envío de información
