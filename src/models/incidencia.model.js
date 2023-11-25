//GET

const getAllIncidencias = () => {
    return db.query(
        "SELECT * FROM incidencias"
        );
  };

const getIncidenciaById = (idIncidencia) => {
    return db.query(
        "SELECT * FROM incidencias WHERE idincidencia = ?",[idIncidencia]
        );
  };

  const getAllIncidenciasByEmpleado = (usuario_asignado) => {
    return db.query(
        "SELECT  ped.usuario_asignado, inc.* FROM incidencias inc INNER JOIN pedidos ped on inc.idpedido_asociado = ped.idPedido WHERE ped.usuario_asignado = ?", [usuario_asignado]
        );
};

const getAllIncidenciasNoVistasByEmpleado = (usuario_asignado) => {
    return db.query(
        "SELECT ped.usuario_asignado, inc.* FROM incidencias inc INNER JOIN pedidos ped on inc.idpedido_asociado = ped.idPedido WHERE ped.usuario_asignado = ? AND inc.vista = 0", [usuario_asignado]
    );
};


//CREATE
const createIncidencia = ({
        titulo,
        descripcion,
        idpedido_asociado,
        tipo_incidencia,
        vista = 0 
  }) => {
    return db.query(
      "insert into incidencias ( titulo,descripcion,idpedido_asociado,tipo_incidencia,vista) values (?,?,?,?,?)",
      [
        titulo,
        descripcion,
        idpedido_asociado,
        tipo_incidencia,
        vista
      ]
    );
  };



module.exports = {
    getAllIncidencias,
    getIncidenciaById,
    getAllIncidenciasByEmpleado,
    getAllIncidenciasNoVistasByEmpleado,
    createIncidencia
  };
  