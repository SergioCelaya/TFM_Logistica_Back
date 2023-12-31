const bcrypt = require('bcryptjs');

//GET

const getAllEmpleados = (numElementos, pagina) => {
  return db.query(
    "SELECT emp.idempleado, emp.email, emp.nombre, emp.apellidos, pst.descripcion puesto, emp.idalmacen, emp.num_empleado, emp.activo, emp.fecha_contratacion, emp.imagen_empleado FROM empleados emp INNER JOIN puestos_trabajo pst ON emp.puesto = pst.idpuesto_trabajo ORDER BY emp.nombre ASC LIMIT ? OFFSET ?",
    [numElementos, pagina]
  );
};
const getNumAllEmpleados = () => {
  return db.query("SELECT count(*) total FROM empleados");
};

const getEmpleadoById = (idEmpleado) => {
  return db.query(
    "SELECT emp.idempleado,emp.email,emp.nombre,emp.apellidos,pst.descripcion puesto,emp.idalmacen,emp.num_empleado,emp.activo,emp.fecha_contratacion,emp.imagen_empleado,emp.pwd FROM empleados emp inner join puestos_trabajo pst on emp.puesto = pst.idpuesto_trabajo where emp.idempleado = ?",
    [idEmpleado]
  );
};

const getEmpleadoByEmailConPwd = (email) => {
  return db.query(
    "SELECT idempleado,pwd FROM empleados where email = ?",
    [email]
  );
};

const getEmpleadosByPuesto = (puesto, numElementos, pagina) => {
  return db.query(
    "SELECT emp.idempleado,emp.email,emp.nombre,emp.apellidos,pst.descripcion puesto,emp.idalmacen,emp.num_empleado,emp.activo,emp.fecha_contratacion FROM empleados emp inner join puestos_trabajo pst on emp.puesto = pst.idpuesto_trabajo where emp.puesto = ? order by emp.idempleado desc  LIMIT ? OFFSET ?",
    [puesto, numElementos, pagina]
  );
};

const getEmpleadosByPuestoSinPaginar = (puesto) => {
  return db.query(
    "SELECT emp.idempleado,emp.email,emp.nombre,emp.apellidos,pst.descripcion puesto,emp.idalmacen,emp.num_empleado,emp.activo,emp.fecha_contratacion FROM empleados emp inner join puestos_trabajo pst on emp.puesto = pst.idpuesto_trabajo where emp.puesto = ? order by emp.idempleado desc ",
    [puesto]
  );
};

const getEmpleadosByPuestoAlmacenSinPaginar = (puesto,idalmacen) => {
  return db.query(
    "SELECT emp.idempleado,emp.email,emp.nombre,emp.apellidos,pst.descripcion puesto,emp.idalmacen,emp.num_empleado,emp.activo,emp.fecha_contratacion FROM empleados emp inner join puestos_trabajo pst on emp.puesto = pst.idpuesto_trabajo where emp.puesto = ? and emp.idalmacen = ? order by emp.idempleado desc ",
    [puesto,idalmacen]
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
  imagen_empleado = 'Empleado.png'
}) => {
  return db.query(
    "INSERT INTO empleados (email,pwd,nombre,apellidos,puesto,idalmacen,num_empleado,activo,fecha_contratacion,imagen_empleado) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      email,
      bcrypt.hashSync(pwd,8),
      nombre,
      apellidos,
      puesto,
      idalmacen,
      num_empleado,
      activo,
      fecha_contratacion,
      imagen_empleado
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
  fecha_contratacion,
  imagen_empleado
}) => {
  return db.query(
    "UPDATE empleados SET email = ?,pwd = ?,nombre = ?,apellidos = ?,puesto = ?,idalmacen = ?,num_empleado = ?,activo = ?,fecha_contratacion = ?,imagen_empleado = ? WHERE idempleado = ?",
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
      imagen_empleado,
      idempleado
    ]
  );
};

const updateNombreImagenEmpleado= (idEmpleado,imagen_empleado)=>{
  return db.query("UPDATE empleados SET imagen_empleado = ? WHERE idempleado = ?", [
    imagen_empleado,
    idEmpleado,
  ]);
}

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
  getEmpleadoByEmailConPwd,
  updateNombreImagenEmpleado,
  getAllEmpleados,
  getNumAllEmpleados,
  getEmpleadoById,
  getEmpleadosByPuesto,
  getEmpleadosByPuestoSinPaginar,
  getNumEmpleadosByPuesto,
  createEmpleado,
  updateEmpleado,
  updateEstadoEmpleado,
  updateAlmacenEmpleado,
  getEmpleadosByPuestoAlmacenSinPaginar
};
