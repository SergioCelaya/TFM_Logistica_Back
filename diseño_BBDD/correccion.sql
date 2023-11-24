ALTER TABLE `logistica_almacen_tfm`.`pedidos` 
ADD COLUMN `detalle_pedido` VARCHAR(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL AFTER `id_transporte`,
DROP INDEX `id_transporte_UNIQUE` ;