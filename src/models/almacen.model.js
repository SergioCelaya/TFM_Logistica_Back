// GET

const getAllAlmacenes = () => {
  return db.query("SELECT * FROM almacenes");
};

const getAlmacenById = (idAlmacen) => {
  return db.query("SELECT * FROM almacenes WHERE idalmacen = ?", [idAlmacen]);
};

// CREATE

const createAlmacen = ({ nombre_almacen, long, lat, activo = 1, imagen_almacen = 'Almacen0.jpg' }) => {
  return db.query(
    "INSERT INTO almacenes ( nombre_almacen, `long`, lat, activo, imagen_almacen) VALUES (?,?,?,?,?)",
    [nombre_almacen, long, lat, activo, imagen_almacen]
  );
};

// UPDATE

const updateAlmacen = (idAlmacen, { nombre_almacen, long, lat, activo, imagen_almacen }) => {
  return db.query(
    "UPDATE almacenes SET nombre_almacen = ?, `long` = ?, lat = ?, activo = ?, imagen_almacen = ? WHERE idalmacen = ?",
    [nombre_almacen, long, lat, activo, imagen_almacen, idAlmacen]
  );
};

const updateAlmacenToActive = (idAlmacen) => {
  return db.query("UPDATE almacenes SET activo = 1 WHERE idalmacen = ?", [
    idAlmacen,
  ]);
};

const updateAlmacenToInactive = (idAlmacen) => {
  return db.query("UPDATE almacenes SET activo = 0 WHERE idalmacen = ?", [
    idAlmacen,
  ]);
};

const updateNombreImagenAlmacen = (idAlmacen, imagen_almacen) => {
  return db.query(
    "UPDATE almacenes SET imagen_almacen = ? WHERE idalmacen = ?",
    [imagen_almacen, idAlmacen]
  );
};

module.exports = {
  getAllAlmacenes,
  getAlmacenById,
  createAlmacen,
  updateAlmacen,
  updateAlmacenToActive,
  updateAlmacenToInactive,
  updateNombreImagenAlmacen
};
