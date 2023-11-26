ALTER TABLE `logistica_almacen_tfm`.`empleados` 
ADD COLUMN `imagen_empleado` VARCHAR(100) NULL AFTER `fecha_contratacion`,
ADD UNIQUE INDEX `imagen_empleado_UNIQUE` (`imagen_empleado` ASC) VISIBLE;
;
ALTER TABLE `logistica_almacen_tfm`.`almacenes` 
ADD COLUMN `imagen_almacen` VARCHAR(100) NULL AFTER `activo`,
ADD UNIQUE INDEX `imagen_almacen_UNIQUE` (`imagen_almacen` ASC) VISIBLE;
;