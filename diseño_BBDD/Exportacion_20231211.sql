DROP DATABASE  IF EXISTS `logistica_almacen_tfm`;
CREATE DATABASE  IF NOT EXISTS `logistica_almacen_tfm` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `logistica_almacen_tfm`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: logistica_almacen_tfm
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `almacenes`
--

DROP TABLE IF EXISTS `almacenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `almacenes` (
  `idalmacen` int NOT NULL AUTO_INCREMENT,
  `nombre_almacen` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `long` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` tinyint NOT NULL,
  `imagen_almacen` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idalmacen`),
  UNIQUE KEY `idalmacen_UNIQUE` (`idalmacen`),
  UNIQUE KEY `nombre_almacen_UNIQUE` (`nombre_almacen`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacenes`
--

LOCK TABLES `almacenes` WRITE;
/*!40000 ALTER TABLE `almacenes` DISABLE KEYS */;
INSERT INTO `almacenes` VALUES (1,'Almacén Madrid','-3.757352','40.318699',1,'Almacen1.jpg'),(2,'Almacén Barcelona','2.087099','41.373655',1,'Almacen2.jpg'),(3,'Almacén Bilbao','-2.920621','43.243100',1,'Almacen3.jpg'),(4,'Almac Sevill actualizado','-45421','54545',1,'Almacen4.jpg');
/*!40000 ALTER TABLE `almacenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `idempleado` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pwd` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellidos` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `puesto` int NOT NULL,
  `idalmacen` int NOT NULL,
  `num_empleado` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` tinyint DEFAULT NULL,
  `fecha_contratacion` datetime NOT NULL,
  `imagen_empleado` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idempleado`),
  UNIQUE KEY `idempleado_UNIQUE` (`idempleado`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `puesto` (`puesto`),
  KEY `id_almacen` (`idalmacen`),
  CONSTRAINT `id_almacen` FOREIGN KEY (`idalmacen`) REFERENCES `almacenes` (`idalmacen`),
  CONSTRAINT `puesto` FOREIGN KEY (`puesto`) REFERENCES `puestos_trabajo` (`idpuesto_trabajo`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'juan.perez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Juan','Perez',1,1,'#00001',1,'2018-05-23 10:30:00','Felix.png'),(2,'maria.gomez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Maria','Gomez',2,2,'#00002',1,'2019-07-12 09:45:00','090059.jpg'),(3,'carlos.lopez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Carlos','Lopez',2,1,'#00003',1,'2017-11-30 14:20:00','090066.jpg'),(4,'laura.martin@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Laura','Martin',1,2,'#00004',1,'2020-02-15 11:05:00','090061.jpg'),(5,'sergio.fernandez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Sergio','Fernandez',2,1,'#00005',1,'2016-09-08 13:40:00','090072.jpg'),(6,'ana.rodriguez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Ana','Rodriguez',3,2,'#00006',1,'2018-12-03 10:15:00','090068.jpg'),(7,'pablo.sanchez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Pablo','Sanchez',1,1,'#00007',1,'2019-04-20 08:55:00','Empleado.png'),(8,'lucia.garcia@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Lucia','Garcia',2,2,'#00008',1,'2021-01-05 16:30:00','090071.jpg'),(9,'javier.fernandez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Javier','Fernandez',3,1,'#00009',1,'2017-06-17 12:10:00','090078.jpg'),(10,'elena.martinez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Elena','Martinez',1,2,'#00010',1,'2022-09-28 07:45:00','Empleado.png'),(11,'luis.gutierrez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Luis','Gutierrez',2,3,'#00011',1,'2020-10-10 18:20:00','090093.jpg'),(14,'carmen.ris@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Carmen','Rios',2,1,'#00656',0,'2020-10-10 16:20:00','090075.jpg'),(15,'calmen.rios@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Carmen','Rios',2,3,'#00676',1,'2020-10-10 16:20:00','Mario.png'),(17,'calmen.riostre@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Carmen','Rios',1,2,'#00676',1,'2020-10-10 16:20:00','090081.jpg'),(18,'luciano.garcia@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','luciano','Garcia',1,1,'#00687',1,'2020-10-10 16:20:00','090094.jpg'),(19,'Fermin.Lopez@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Fermin','Lopez',2,1,'#00689',1,'2020-10-10 16:20:00','Juanan.png'),(20,'Leire.rins@example.com','$2a$08$J1ULCG1LZPQ/NcMywwnXG.GUTu2qFlWhPfVbX6F6ofE20mTqGx4eu','Leire','Rins',3,1,'#00690',1,'2020-10-10 16:20:00','Sergio.png');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados_pedidos`
--

DROP TABLE IF EXISTS `estados_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados_pedidos` (
  `idestado_pedidos` int NOT NULL AUTO_INCREMENT,
  `idestado` int NOT NULL,
  `idpedido` int NOT NULL,
  `fecha_cambio_estado` datetime NOT NULL,
  PRIMARY KEY (`idestado_pedidos`),
  KEY `idestado` (`idestado`),
  KEY `idpedido` (`idpedido`),
  CONSTRAINT `idestado` FOREIGN KEY (`idestado`) REFERENCES `tipo_estados` (`idestado`),
  CONSTRAINT `idpedido` FOREIGN KEY (`idpedido`) REFERENCES `pedidos` (`idPedido`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados_pedidos`
--

LOCK TABLES `estados_pedidos` WRITE;
/*!40000 ALTER TABLE `estados_pedidos` DISABLE KEYS */;
INSERT INTO `estados_pedidos` VALUES (1,1,1,'2023-11-25 00:00:00'),(2,2,1,'2023-11-25 00:00:00'),(3,3,1,'2023-11-25 00:00:00'),(4,4,1,'2023-11-25 00:00:00'),(5,1,3,'2023-11-25 00:00:00'),(6,2,3,'2023-11-25 00:00:00'),(7,3,3,'2023-11-25 00:00:00'),(8,4,3,'2023-11-25 00:00:00'),(9,5,3,'2023-11-25 00:00:00'),(10,6,3,'2023-11-25 00:00:00'),(11,1,5,'2023-11-25 00:00:00'),(12,2,5,'2023-11-25 00:00:00'),(13,3,5,'2023-11-25 00:00:00');
/*!40000 ALTER TABLE `estados_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `incidencias`
--

DROP TABLE IF EXISTS `incidencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `incidencias` (
  `idincidencia` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idpedido_asociado` int NOT NULL,
  `tipo_incidencia` int NOT NULL,
  `vista` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idincidencia`),
  UNIQUE KEY `idincidencia_UNIQUE` (`idincidencia`),
  KEY `tipo_incidencia` (`tipo_incidencia`),
  CONSTRAINT `tipo_incidencia` FOREIGN KEY (`tipo_incidencia`) REFERENCES `tipo_incidencia` (`idtipo_incidencia`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incidencias`
--

LOCK TABLES `incidencias` WRITE;
/*!40000 ALTER TABLE `incidencias` DISABLE KEYS */;
INSERT INTO `incidencias` VALUES (11,'Rectificación','Debes rectificar el pedido que va mal',2,1,0),(12,'Problema con la entrega','La entrega no se realizó según lo esperado. Se han recibido las cajas abiertas con marcas de haber sido mal tratadas.',1,1,1),(13,'Error en el producto','El producto recibido está dañado',6,1,0),(14,'Solicitud de cambio','Se solicita un cambio en el pedido',4,1,0),(15,'Consulta sobre el pedido','Se necesita información adicional sobre el pedido',5,1,0),(16,'Problema con la factura','Hay un error en el monto de la factura',19,1,0),(17,'Reclamación de reembolso','Se solicita un reembolso para el pedido 7',7,1,0),(18,'Problema de calidad','El producto no cumple con las expectativas de calidad',8,1,0),(19,'Cambio de dirección de entrega','Se necesita cambiar la dirección de entrega del pedido 9',9,1,1),(20,'Consulta sobre disponibilidad','¿Hay disponibilidad para el producto X?',1,1,0),(21,'Faltan cosas','Al pedido X le faltan cosas',1,1,0),(22,'Faltan cosas','Al pedido X le faltan cosas',27,1,1),(23,'El pedido pesa demasiado','Se debe de repartir la carga en varios camiones',9,1,1),(24,'Se ha hecho mal el reparto ','Por favor repartir bien el peso',9,1,0),(25,'Parece que hay hueco para más','Por favor, cargar el camión con otros pedidos',25,1,0),(26,'prueba','prueba',9,1,1),(27,'consultar','mirar si hay arce para cargar',9,1,0),(28,'hghg','ehety',9,1,1),(29,'Este pedido tiene mercancias peligrosas',', ¿como de peligrosas?',10,1,0),(30,'Algunos pedidos han sido derramados','Ha ocasionado daños en el camión.',30,1,0),(31,'Bateria para mi portatil','Esto sera una prueba de incidencia nueva',1,1,1),(32,'Prueba','Esto sera una prueba de incidencia nueva',2,1,0),(33,'Prueba','Esto sera una prueba de incidencia nueva',2,1,0),(34,'Faltan cosas','Al pedido X le faltan cosas',3,1,0);
/*!40000 ALTER TABLE `incidencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `numero_pedido` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `almacen_origen` int NOT NULL,
  `almacen_destino` int NOT NULL,
  `fecha_entrega` datetime DEFAULT NULL,
  `usuario_asignado` int NOT NULL,
  `usuario_responsable` int NOT NULL,
  `estado` int NOT NULL,
  `id_transporte` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detalle_pedido` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idPedido`),
  UNIQUE KEY `idPedidos_UNIQUE` (`idPedido`),
  UNIQUE KEY `numero_pedido_UNIQUE` (`numero_pedido`),
  KEY `almacen_destino` (`almacen_destino`),
  KEY `almacen_origen` (`almacen_origen`),
  KEY `estado` (`estado`),
  KEY `usuario_asignado` (`usuario_asignado`),
  KEY `usuario_responsable` (`usuario_responsable`),
  CONSTRAINT `almacen_destino` FOREIGN KEY (`almacen_destino`) REFERENCES `almacenes` (`idalmacen`),
  CONSTRAINT `almacen_origen` FOREIGN KEY (`almacen_origen`) REFERENCES `almacenes` (`idalmacen`),
  CONSTRAINT `estado` FOREIGN KEY (`estado`) REFERENCES `tipo_estados` (`idestado`),
  CONSTRAINT `usuario_asignado` FOREIGN KEY (`usuario_asignado`) REFERENCES `empleados` (`idempleado`),
  CONSTRAINT `usuario_responsable` FOREIGN KEY (`usuario_responsable`) REFERENCES `empleados` (`idempleado`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'1234567890','2022-07-14 00:00:00',1,2,'2023-09-18 00:00:00',1,3,1,'ACD6666','Fuegos artificiales para las fallas 500 Kg'),(2,'2346666661','2023-07-12 00:00:00',1,3,'2023-12-04 00:00:00',2,3,3,'XYZ780','250 palés de cereales, de 500 kg cada uno.'),(3,'3456789012','2022-11-25 00:00:00',3,1,'2023-08-12 00:00:00',3,8,1,'DEF456','Árboles plataneros de Canarias'),(4,'4567890123','2023-04-03 00:00:00',1,3,'2023-10-18 00:00:00',4,11,1,'GHI789','Bobina de cobre con recubrimiento de poluretano'),(5,'5678901234','2023-09-08 00:00:00',2,1,'2023-11-30 00:00:00',5,2,1,'JKL012','Peces tropicales'),(6,'6789012345','2022-12-20 00:00:00',1,2,'2023-07-04 00:00:00',18,1,4,'MNO345','Platanos 2000Kg'),(7,'7890123456','2023-06-14 00:00:00',1,2,'2023-10-10 00:00:00',2,2,1,'PQR678','Material de ofivina Almacenes cerrados. 2500Kgs'),(8,'8901234567','2023-03-01 00:00:00',2,3,'2023-12-15 00:00:00',3,5,1,'STU901','Cajas de cafareles, 2000Kgs'),(9,'9012345678','2022-10-28 00:00:00',3,1,'2023-09-25 00:00:00',4,14,6,'VWX234',' Vino Inurrieta DO'),(10,'1234567891','2023-02-18 00:00:00',1,3,'2023-11-05 00:00:00',5,2,1,'YZA567','Comida para mascotas procedente de subasta'),(11,'2345678902','2022-11-10 00:00:00',1,3,'2023-10-20 00:00:00',1,14,5,'ABC345','Juguetes para tienda mportación'),(13,'2346668901','2023-05-12 00:00:00',1,2,'2023-12-04 00:00:00',2,15,3,'XYZ788','Mandarinas Valecnianas 1500Kgs'),(17,'2346669001','2023-05-12 00:00:00',1,2,'2023-12-04 00:00:00',2,14,3,'XYZ780','250 palés de cereales, de 500 kg cada uno.'),(19,'2342424345','2022-11-10 00:00:00',1,2,'2023-10-20 00:00:00',1,15,4,'ABC345','Ropa de cama peso aprox 800Kg'),(20,'6252235226','2022-11-10 00:00:00',1,3,'2023-10-20 00:00:00',1,19,2,'MNO345','Congelados carnicerías 2500Kg'),(21,'4726265477','2022-12-20 00:00:00',1,3,'2023-10-20 00:00:00',1,19,3,'RTE453','Telas varias 600Kg. Material de sastrería'),(22,'2346669005','2023-05-12 00:00:00',1,1,'2023-12-04 00:00:00',2,3,2,'XYZ780','250 palés de cereales, de 500 kg cada uno.'),(24,'236669005','2023-05-12 00:00:00',1,2,'2023-12-04 00:00:00',2,3,3,'XYZ780','250 palés de cereales, de 500 kg cada uno.'),(25,'2345678970','2023-12-06 00:00:00',2,3,'2023-12-30 00:00:00',1,5,2,'MNO345','Esto sería un pedido de la fábrica de tuercas Enrosca S.A. 1500kg de carga'),(26,'123456123','2023-12-09 00:00:00',2,3,'2023-12-21 00:00:00',1,19,1,'MNO345','Este pedido tiene cargamento peligroso'),(27,'5735683','2023-07-12 08:45:00',1,3,'2023-12-04 09:00:00',1,19,6,'XYZ780','250 palés de cereales, de 500 kg cada uno.'),(28,'34563543','2023-12-10 00:00:00',1,2,'2023-12-23 00:00:00',1,19,3,'ABC345','Libros de ediorial Planeta SL 2000Kgs'),(29,'3456789','2023-12-10 00:00:00',1,2,'2023-12-15 00:00:00',1,19,1,'ABC345','Pedido bajo secreto de empresa 2000Kg'),(30,'2345678966','2023-12-11 00:00:00',3,1,'2023-12-17 00:00:00',1,19,4,'RTE453','Sandías Murcianas, 1500Kg');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puestos_trabajo`
--

DROP TABLE IF EXISTS `puestos_trabajo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puestos_trabajo` (
  `idpuesto_trabajo` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idpuesto_trabajo`),
  UNIQUE KEY `idpuesto_trabajo_UNIQUE` (`idpuesto_trabajo`),
  UNIQUE KEY `descripcion_UNIQUE` (`descripcion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puestos_trabajo`
--

LOCK TABLES `puestos_trabajo` WRITE;
/*!40000 ALTER TABLE `puestos_trabajo` DISABLE KEYS */;
INSERT INTO `puestos_trabajo` VALUES (3,'Administrador'),(1,'Empleado'),(2,'Encargado');
/*!40000 ALTER TABLE `puestos_trabajo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_estados`
--

DROP TABLE IF EXISTS `tipo_estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_estados` (
  `idestado` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idestado`),
  UNIQUE KEY `idestados_UNIQUE` (`idestado`),
  UNIQUE KEY `descripcion_UNIQUE` (`descripcion`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_estados`
--

LOCK TABLES `tipo_estados` WRITE;
/*!40000 ALTER TABLE `tipo_estados` DISABLE KEYS */;
INSERT INTO `tipo_estados` VALUES (4,'En tránsito'),(6,'Finalizado'),(5,'Pendiente recepcionar'),(1,'Pendiente validar'),(2,'Rectificar'),(3,'Validado');
/*!40000 ALTER TABLE `tipo_estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_incidencia`
--

DROP TABLE IF EXISTS `tipo_incidencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_incidencia` (
  `idtipo_incidencia` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idtipo_incidencia`),
  UNIQUE KEY `idtipo_incidencia_UNIQUE` (`idtipo_incidencia`),
  UNIQUE KEY `descripcion_UNIQUE` (`descripcion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_incidencia`
--

LOCK TABLES `tipo_incidencia` WRITE;
/*!40000 ALTER TABLE `tipo_incidencia` DISABLE KEYS */;
INSERT INTO `tipo_incidencia` VALUES (1,'Rectificar');
/*!40000 ALTER TABLE `tipo_incidencia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-11 20:38:26
