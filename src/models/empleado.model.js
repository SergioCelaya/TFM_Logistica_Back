//GET

const getAllEmpleados = (numElementos, pagina) => {
  return db.query(
    "SELECT emp.idempleado,emp.email,emp.nombre,emp.apellidos,pst.descripcion puesto,emp.idalmacen,emp.num_empleado,emp.activo,emp.fecha_contratacion FROM empleados emp inner join puestos_trabajo pst on emp.puesto = pst.idpuesto_trabajo LIMIT ? OFFSET ?",
    [numElementos, pagina]
  );
};
const getNumAllEmpleados = () => {
  return db.query("SELECT count(*) total FROM empleados");
};

const getEmpleadoById = (idEmpleado) => {
  return db.query(
    "SELECT emp.idempleado,emp.email,emp.nombre,emp.apellidos,pst.descripcion puesto,emp.idalmacen,emp.num_empleado,emp.activo,emp.fecha_contratacion FROM empleados emp inner join puestos_trabajo pst on emp.puesto = pst.idpuesto_trabajo where emp.idempleado = ?",
    [idEmpleado]
  );
};

const getEmpleadosByPuesto = (puesto, numElementos, pagina) => {
  return db.query(
    "SELECT emp.idempleado,emp.email,emp.nombre,emp.apellidos,pst.descripcion puesto,emp.idalmacen,emp.num_empleado,emp.activo,emp.fecha_contratacion FROM empleados emp inner join puestos_trabajo pst on emp.puesto = pst.idpuesto_trabajo where emp.puesto = ? LIMIT ? OFFSET ?",
    [puesto, numElementos, pagina]
  );
};
const getNumEmpleadosByPuesto = (puesto) => {
  return db.query("SELECT count(*) total FROM empleados where puesto = ? ", [puesto]);
};

//CREATE
const createEmpleado = ({
  email,
  pwd,
  nombre,
  apellidos,
  puesto,
  idalmacen,
  num_empleado,
  activo,
  fecha_contratacion,
}) => {
  return db.query(
    "INSERT INTO empleados (email,pwd,nombre,apellidos,puesto,idalmacen,num_empleado,activo,fecha_contratacion) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      email,
      pwd,
      nombre,
      apellidos,
      puesto,
      idalmacen,
      num_empleado,
      activo,
      fecha_contratacion,
    ]
  );
};

//UPDATE
const updateEmpleado = (idempleado,{
  email,
  pwd,
  nombre,
  apellidos,
  puesto,
  idalmacen,
  num_empleado,
  activo,
  fecha_contratacion
}) => {
  return db.query(
    "UPDATE empleados SET email = ?,pwd = ?,nombre = ?,apellidos = ?,puesto = ?,idalmacen = ?,num_empleado = ?,activo = ?,fecha_contratacion = ? WHERE idempleado = ?",
    [
      email,
      pwd,
      nombre,
      apellidos,
      puesto,
      idalmacen,
      num_empleado,
      activo,
      fecha_contratacion,
      idempleado
    ]
  );
};

const updateEstadoEmpleado = (idEmpleado,{activo}) => {
  return db.query("UPDATE empleados SET activo = ? WHERE idempleado = ?", [
    activo,
    idEmpleado,
  ]);
};

const updateAlmacenEmpleado = (idEmpleado, {idalmacen}) => {
  return db.query("UPDATE empleados SET idalmacen = ? WHERE idempleado = ?", [
    idalmacen,
    idEmpleado,
  ]);
};
module.exports = {
  getAllEmpleados,
  getNumAllEmpleados,
  getEmpleadoById,
  getEmpleadosByPuesto,
  getNumEmpleadosByPuesto,
  createEmpleado,
  updateEmpleado,
  updateEstadoEmpleado,
  updateAlmacenEmpleado,
};