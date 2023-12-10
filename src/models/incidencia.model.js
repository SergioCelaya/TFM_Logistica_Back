//GET

const getAllIncidencias = (numElementos = 6, pagina) => {
  return db.query(
    "SELECT inc.*, ped.usuario_asignado FROM incidencias inc INNER JOIN pedidos ped ON inc.idpedido_asociado = ped.idPedido order by inc.idincidencia desc LIMIT ? OFFSET ?",
    [numElementos = 6, pagina]
  );
};

const getIncidenciaByIdPedido=(idPedido)=>{
  return db.query(
    "SELECT * FROM incidencias where idpedido_asociado = ? and vista = 0 order by idincidencia desc ",
    [idPedido]
  );
}

const getNumAllIncidencias = () => {
  return db.query("SELECT count(*) total FROM incidencias inc INNER JOIN pedidos ped ON inc.idpedido_asociado = ped.idPedido");
};

const getIncidenciaById = (idIncidencia) => {
  return db.query("SELECT * FROM incidencias WHERE idincidencia = ? ", [
    idIncidencia,
  ]);
};

const getAllIncidenciasByEmpleado = (usuario_asignado,numElementos, pagina) => {
  return db.query(
    "SELECT  ped.usuario_asignado, inc.* FROM incidencias inc INNER JOIN pedidos ped ON inc.idpedido_asociado = ped.idPedido WHERE ped.usuario_asignado = ? order by inc.idincidencia desc  LIMIT ? OFFSET ?",
    [usuario_asignado,numElementos, pagina]
  );
};

const getNumAllIncidenciasByEmpleado = (usuario_asignado) => {
  return db.query(
    "SELECT  count(*) total FROM incidencias inc INNER JOIN pedidos ped ON inc.idpedido_asociado = ped.idPedido WHERE ped.usuario_asignado = ?",
    [usuario_asignado]
  );
};



const getAllIncidenciasNoVistasByEmpleado = (usuario_asignado,numElementos, pagina) => {
  return db.query(
    "SELECT ped.usuario_asignado, inc.* FROM incidencias inc INNER JOIN pedidos ped ON inc.idpedido_asociado = ped.idPedido WHERE ped.usuario_asignado = ? AND inc.vista = 0 order by inc.idincidencia desc  LIMIT ? OFFSET ?",
    [usuario_asignado,numElementos, pagina]
  );
};


const getNumAllIncidenciasNoVistasByEmpleado = (usuario_asignado) => {
  return db.query(
    "SELECT count(*) total FROM incidencias inc INNER JOIN pedidos ped ON inc.idpedido_asociado = ped.idPedido WHERE ped.usuario_asignado = ? AND inc.vista = 0",
    [usuario_asignado]
  );
};
// CREATE

const createIncidencia = ({
  titulo,
  descripcion,
  idpedido_asociado,
  tipo_incidencia,
  vista = 0,
}) => {
  return db.query(
    "INSERT INTO incidencias ( titulo,descripcion,idpedido_asociado,tipo_incidencia,vista) VALUES (?,?,?,?,?)",
    [titulo, descripcion, idpedido_asociado, tipo_incidencia, vista]
  );
};

// UPDATE

const updateIncidencia = (
  idIncidencia,
  { titulo, descripcion, idpedido_asociado, tipo_incidencia, vista = 0 }
) => {
  return db.query(
    "UPDATE incidencias SET titulo = ?, descripcion = ?, idpedido_asociado = ?, tipo_incidencia = ?, vista = ? WHERE idincidencia = ?",
    [
      titulo,
      descripcion,
      idpedido_asociado,
      tipo_incidencia,
      vista,
      idIncidencia,
    ]
  );
};

const updateIncidenciaToVista = (idIncidencia) => {
  return db.query(
    "UPDATE incidencias SET vista = 1 WHERE idincidencia = ?",
    [idIncidencia]
  );
};


const updateIncidenciaToNoVista = (idIncidencia) => {
  return db.query(
    "UPDATE incidencias SET vista = 0 WHERE idincidencia = ?",
    [idIncidencia]
  );
};


module.exports = {
  getNumAllIncidenciasByEmpleado,
  getNumAllIncidenciasNoVistasByEmpleado,
  getNumAllIncidencias,
  getAllIncidencias,
  getIncidenciaById,
  getAllIncidenciasByEmpleado,
  getAllIncidenciasNoVistasByEmpleado,
  createIncidencia,
  updateIncidencia,
  updateIncidenciaToVista,
  updateIncidenciaToNoVista,
  getIncidenciaByIdPedido
};
