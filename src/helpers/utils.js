const dayjs = require('dayjs');
const jsonwebtoken = require('jsonwebtoken');

const createToken = (user) => {
    const payload = {
        idEmpleado: user.idempleado,
        puesto: user.puesto,
        exp: dayjs().add(7, 'days').unix()
    }
    return jsonwebtoken.sign(payload, process.env.SECRET_KEY);
}

// Paginación

function addPaginado(pagina, total, respuesta) {
    return {
      TotalElementos: parseInt(total),
      ElementosPagina: parseInt(process.env.ELEMENTOS_POR_PAGINA),
      Pagina: parseInt(pagina),
      Resultado: respuesta,
    };
  }
  
  module.exports = {
    createToken,
    addPaginado
  };
  function addPaginadoIncidencias(pagina, total, respuesta) {
    return {
      TotalElementos: parseInt(total),
      ElementosPagina: parseInt(process.env.ELEMENTOS_POR_PAGINA_INCIDENCIAS),
      Pagina: parseInt(pagina),
      Resultado: respuesta,
    };
  }

  function addPaginadoEmpleados(pagina, total, respuesta) {
    return {
      TotalElementos: parseInt(total),
      ElementosPagina: parseInt(process.env.ELEMENTOS_POR_PAGINA_EMPLEADOS),
      Pagina: parseInt(pagina),
      Resultado: respuesta,
    };
  }
  
  module.exports = {
    addPaginadoIncidencias,
    addPaginadoEmpleados,
    createToken,
    addPaginado
  };