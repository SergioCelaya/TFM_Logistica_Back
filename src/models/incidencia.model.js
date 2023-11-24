// TODO limpiar comentarios
//CREATE
const createIncidencia = ({
        titulo,
        descripcion,
        idpeticion_asociada,
        tipo_incidencia,
        vista = 0 // valor por defecto
  }) => {
    return db.query(
      "insert into incidencias ( titulo,descripcion,idpeticion_asociada,tipo_incidencia,vista) values (?,?,?,?,?)",
      [
        titulo,
        descripcion,
        idpeticion_asociada,
        tipo_incidencia,
        vista
      ]
    );
  };



module.exports = {
   createIncidencia
  };
  