-- Insertar datos ficticios en la tabla de incidencias
INSERT INTO incidencias (titulo, descripcion, idpedido_asociado, tipo_incidencia, vista)
VALUES
  ('Rectificación', 'Debes rectificar el pedido que va mal', 2, 1, 0),
  ('Problema con la entrega', 'La entrega no se realizó según lo esperado', 1, 1, 0),
  ('Error en el producto', 'El producto recibido está dañado', 3, 1, 0),
  ('Solicitud de cambio', 'Se solicita un cambio en el pedido', 4, 1, 0),
  ('Consulta sobre el pedido', 'Se necesita información adicional sobre el pedido', 5, 1, 0),
  ('Problema con la factura', 'Hay un error en el monto de la factura', 6, 1, 0),
  ('Reclamación de reembolso', 'Se solicita un reembolso para el pedido 7', 7, 1, 0),
  ('Problema de calidad', 'El producto no cumple con las expectativas de calidad', 8, 1, 0),
  ('Cambio de dirección de entrega', 'Se necesita cambiar la dirección de entrega del pedido 9', 9, 1, 0),
  ('Consulta sobre disponibilidad', '¿Hay disponibilidad para el producto X?', 10, 1, 0);