# Información sobre las diferentes peticiones de la app:


##### -----------------------INCIDENCIAS-------------------------#####


* # GET http://localhost:3000/api/incidencias/

    - Devuelve un array con todas las incidencias de la base de datos.

* # GET http://localhost:3000/api/incidencias/:idIncidencia/

    - Devuelve un objeto con la incidencia correspondiente al :idIncidencia

* # GET http://localhost:3000/api/incidencias/usuario/:usuario_asignado/

    - Devuelve un array con todas las incidencias asignadas a un usuario.

* # GET http://localhost:3000/api/incidencias/noVistas/:usuario_asignado/

    - Devuelve un array con todas las incidencias vista = 0 asignadas a un usuario.

* # POST http://localhost:3000/api/incidencias/

    - Devuelve el objeto creado, se le debe pasar en el body un objeto similar a este:
        {
            "titulo": "Titulo que desee",
            "descripcion": "Descripción que desee",
            "idpedido_asociado": Number,
            "tipo_incidencia": Number,
            "vista": 0 
        }
    // La vista por defecto es 0, en el caso de que ya haya sido revisada por el usuario pasaría a ser 1.


# ---------------------------------------------------------------------------