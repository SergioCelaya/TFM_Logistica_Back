# Información sobre las diferentes peticiones de la app:


##### -----------------------INCIDENCIAS-------------------------#####

Los métodos que se encuentran páginados, devuelven un total de elementos por págna configurable (.env),
La respuesta de un metodo paginado, tiene el formato:

{
  "TotalElementos": 4,
  "ElementosPagina": 3,
  "Pagina": 1,
  "Resultado": [
    {...},{...},{...}
  ]
}
Donde:

- TotalElementos, son el total de elementos que hay al realizar la consulta
- ElementosPagina, es el número de elementos por página
- Pagina, la página en la que te encuentras
- Resultado, el array con los elemetos resultado de la consulta

* # GET http://localhost:3000/api/incidencias/:pagina

    - Devuelve un array con todas las incidencias de la base de datos. Devuelve la página indicada con los elementos correspondientes.

* # GET http://localhost:3000/api/incidencias/:idIncidencia/

    - Devuelve un objeto con la incidencia correspondiente al :idIncidencia

* # GET http://localhost:3000/api/incidencias/usuario/:usuario_asignado/:pagina

    - Devuelve un array con todas las incidencias asignadas a un usuario.Devuelve la página indicada con los elementos correspondientes.

* # GET http://localhost:3000/api/incidencias/noVistas/:usuario_asignado/:pagina

    - Devuelve un array con todas las incidencias vista = 0 asignadas a un usuario.Devuelve la página indicada con los elementos correspondientes.

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

* # PUT http://localhost:3000/api/incidencias/:idIncidencia

    - Actualiza los campos que se le envíen en la base de datos.
        {
            "titulo": "Faltan cosas",
            "descripcion": "Al pedido X le faltan cositas",
            "idpedido_asociado": 5,
            "tipo_incidencia": 1,
            "vista": 0
        }
* # PUT http://localhost:3000/api/incidencias/vista/:idIncidencia

    - Setea el valor 1 (incidencia vista) sobre el campo "vista".

* # PUT http://localhost:3000/api/incidencias/noVista/:idIncidencia

    - Setea el valor 0 (incidencia no vista) sobre el campo "vista".


# -----------------------------------------------------------------------------------

##### -----------------------ALMACENES-------------------------#####

* # GET http://localhost:3000/api/almacenes/

    - Devuelve un array con todos los almacenes que se encuentran en la bbdd.

* # GET http://localhost:3000/api/almacenes/:idAlmacen/

    - Devuelve un objeto con el almacén obtenido mediante el id.

* # POST http://localhost:3000/api/almacenes/

    - Crea un almacén en la bbdd, para ello es obligatorio pasarle los siguientes campos:
     
     {
        "nombre_almacen": "Almacén Sevilla",
        "long": "-4545421",
        "lat": "54545"
     }
// Por defecto el campo "activo" se crea con el valor 1, aunque se le puede pasar el valor 0 (inactivo).

* # PUT http://localhost:3000/api/incidencias/:idAlmacen

    - Actualiza un almacén pasándole los valores del siguiente modo:

            {
                "nombre_almacen": "Almacén Sevil actualido",
                "long": "-45421",
                "lat": "54545",
                "activo": 0
            } 

* # PUT http://localhost:3000/api/incidencias/toActive/:idAlmacen

    - Actualiza el almacén indicado en el idAlmacén el campo activo con el valor 1.

# PUT http://localhost:3000/api/incidencias/toInactive/:idAlmacen

    - Actualiza el almacén indicado en el idAlmacén el campo activo con el valor 0.

# -----------------------------------------------------------------------------------







##### -----------------------PEDIDOS-------------------------#####

Los métodos que se encuentran páginados, devuelven un total de elementos por págna configurable (.env),
La respuesta de un metodo paginado, tiene el formato:

{
  "TotalElementos": 4,
  "ElementosPagina": 3,
  "Pagina": 1,
  "Resultado": [
    {...},{...},{...}
  ]
}
Donde:

- TotalElementos, son el total de elementos que hay al realizar la consulta
- ElementosPagina, es el número de elementos por página
- Pagina, la página en la que te encuentras
- Resultado, el array con los elemetos resultado de la consulta

* # GET http://localhost:3000/api/pedidos/:pagina

    - Obtiene la página indicada de todos los pedidos.

* # GET http://localhost:3000/api/pedidos/byId/:idPedido

    - Obtiene el pedido con idpedido = :idPedido

* # GET http://localhost:3000/api/pedidos/byNumPedido/:numPedido"

    - Obtiene el pedido con numero_pedido = :numPedido

* # GET http://localhost:3000/api/pedidos/byEmpleadoId/:usuario_asignado/:pagina

    - Obtiene la página indicada de todos los pedidos por un id de empleado

* # GET http://localhost:3000/api/pedidos/byResponsableId/:usuario_responsable/:pagina

    - Obtiene la página indicada de todos los pedidos por un id de responsable

* # GET http://localhost:3000/api/pedidos/byEmpleadoEstado/:usuario_asignado/:estado/:pagina

    - Obtiene la página indicada de todos los pedidos de un empleado en un estado concreto


* # GET http://localhost:3000/api/pedidos/byResponsableEstado/:usuario_responsable/:estado/:pagina

    - Obtiene la página indicada de todos los pedidos de un empleado en un estado concreto

* # GET http://localhost:3000/api/pedidos/estado/:estado/:pagina

    - Obtiene la página indicada de todos los pedidos paginados en un estado concreto
* # GET http://localhost:3000/api/pedidos/byAlmacenOrigen/:almacen_origen/:pagina

    - Otiene la pagina indicada de los pedidos de un almacen origen

* # GET http://localhost:3000/api/pedidos/byAlmacenDestino/:almacen_destino/:pagina

    - Otiene la pagina indicada de los pedidos de un almacen destino

* # POST http://localhost:3000/api/pedidos/ 

    - Este sería un ejempol del objeto a mandar en el body:

{
    "numero_pedido": "2346669001",
    "fecha_creacion": "2023-05-12 08:45:00",
    "almacen_origen": 1,
    "almacen_destino": 2,
    "fecha_entrega": "2023-12-04 23:00:00",
    "usuario_asignado": 2,
    "usuario_responsable": 3,
    "estado": 3,
    "id_transporte": "XYZ780",
    "detalle_pedido": "250 palés de cereales, de 500 kg cada uno."
}

* # UPDATE http://localhost:3000/api/pedidos/:idPedido 

    - Permite modificar un pedido, indicando su id por el parámetro :idPedido y el body tiene que tener un formato como el siguiente:

{
    "numero_pedido": "2346666661",
    "fecha_creacion": "2023-07-12 08:45:00",
    "almacen_origen": 1,
    "almacen_destino": 3,
    "fecha_entrega": "2023-12-04 23:00:00",
    "usuario_asignado": 2,
    "usuario_responsable": 3,
    "estado": 3,
    "id_transporte": "XYZ780",
    "detalle_pedido": "250 palés de cereales, de 500 kg cada uno."
}

* Los siguientes métodos cambian de estado el pedido indicado por id, al estado que describe su urls

* # UPDATE http://localhost:3000/api/pedidos/toPendienteValidar/:idPedido  
* # UPDATE http://localhost:3000/api/pedidos/toRectificar/:idPedido 
* # UPDATE http://localhost:3000/api/pedidos/toValidado/:idPedido 
* # UPDATE http://localhost:3000/api/pedidos/toEnTransito/:idPedido 
* # UPDATE http://localhost:3000/api/pedidos/toPendienteRecepcionar/:idPedido 
* # UPDATE http://localhost:3000/api/pedidos/toFinalizado/:idPedido 



# -----------------------------------------------------------------



##### -----------------------EMPLEADOS-------------------------#####

Los métodos que se encuentran páginados, devuelven un total de elementos por págna configurable (.env),
La respuesta de un metodo paginado, tiene el formato:

{
  "TotalElementos": 4,
  "ElementosPagina": 3,
  "Pagina": 1,
  "Resultado": [
    {...},{...},{...}
  ]
}
Donde:

- TotalElementos, son el total de elementos que hay al realizar la consulta
- ElementosPagina, es el número de elementos por página
- Pagina, la página en la que te encuentras
- Resultado, el array con los elemetos resultado de la consulta

* # GET http://localhost:3000/api/empleados/:pagina

    - Método paginado que devuelve todos los empleados.

* # GET http://localhost:3000/api/empleados/byId/:idEmpleado

    - Método que develve un epleado consultando por su id

* # GET http://localhost:3000/api/empleados/byPuesto/:idPuesto/:pagina

    - Métdodo paginado, que develve los empleados de un puesto determinado.

* # POST http://localhost:3000/api/empleados/

    -Método para crear un empleado. Se debe de mandar un body de este estilo:

    {
      "pwd":"ASD34fERT",
      "email": "carmen.rios@example.com",
      "nombre": "Carmen",
      "apellidos": "Rios",
      "puesto": 2,
      "idalmacen": 1,
      "num_empleado": "#00666",
      "activo": 1,
      "fecha_contratacion": "2020-10-10 16:20:00"
    }

* # UPDATE http://localhost:3000/api/empleados/estado/:idEmpleado

    Metodo para actualizar el estado de un empleado, pasando su id, y un body de este estilo:
    {
      "activo": 0
    }

* # UPDATE http://localhost:3000/api/empleados/almacen/:idEmpleado

    Método para actualizar el almacén de un empleado, pasando su id, y un body de este estilo:
    {
      "idalmacen": 1
    }

# ---------------------------------------------------------------



##### -----------------------ESTADOS-------------------------#####

* # GET http://localhost:3000/api/estados/:idPedido
    
    -Método que devuelve el historico de estados de un pedido.


# -----------------------------------------------------------------