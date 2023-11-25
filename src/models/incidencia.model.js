// TODO limpiar comentarios
//GET

const getAllIncidencias = () => {
    return db.query("select * from incidencias");
  };

const getIncidenciaById = (idIncidencia) => {
    return db.query("select * from incidencias where idincidencia = ?",[idIncidencia]);
  };

//TODO terminar sentencia
const getIncidenciaByEmpleado = (usuario_asignado) => {
    return db.query("",[usuario_asignado]);
  };

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
    getAllIncidencias,
    getIncidenciaById,
   createIncidencia
  };
  