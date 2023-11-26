const AlmacenModel = require('../models/almacen.model');


const getAllAlmacenes = async (req, res) => {
    try {
      const [result] = await AlmacenModel.getAllAlmacenes();
      res.json(result);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };

  const getAlmacenById = async (req, res) => {
    try {
      const idAlmacen = req.params.idAlmacen
      const [result] = await AlmacenModel.getAlmacenById(idAlmacen);
      res.json(result);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };

  // CREATE

  const createAlmacen = async (req, res) => {
    try {
      const [result] = await AlmacenModel.createAlmacen(req.body);
      const [almacen] = await AlmacenModel.getAlmacenById(
        result.insertId
      );
      res.json(almacen[0]);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };

  // UPDATE

  const updateAlmacen = async (req, res) => {
    try {
      const { idAlmacen } = req.params;
      const [result] = await AlmacenModel.updateAlmacen( idAlmacen, req.body);
      res.json(result);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };
  
  const updateAlmacenToActive = async (req, res) => {
    try {
      const {idAlmacen} = req.params;
      const [result] = await AlmacenModel.updateAlmacenToActive(idAlmacen);
      res.json(result[0]);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };
  
  const updateAlmacenToInactive = async (req, res) => {
    try {
      const {idAlmacen} = req.params;
      const [result] = await AlmacenModel.updateAlmacenToInactive(idAlmacen);
      res.json(result[0]);
    } catch (error) {
      res.json({ fatal: error.message });
    }
  };
  module.exports = {
    getAllAlmacenes,
    getAlmacenById,
    createAlmacen,
    updateAlmacen,
    updateAlmacenToActive,
    updateAlmacenToInactive
  }