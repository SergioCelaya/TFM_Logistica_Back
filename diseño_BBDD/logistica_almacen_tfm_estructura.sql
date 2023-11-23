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
  PRIMARY KEY (`idalmacen`),
  UNIQUE KEY `idalmacen_UNIQUE` (`idalmacen`),
  UNIQUE KEY `nombre_almacen_UNIQUE` (`nombre_almacen`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `idempleado` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pwd` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellidos` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `puesto` int NOT NULL,
  `idalmacen` int NOT NULL,
  `num_empleado` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` tinyint DEFAULT NULL,
  `fecha_contratacion` datetime NOT NULL,
  PRIMARY KEY (`idempleado`),
  UNIQUE KEY `idempleado_UNIQUE` (`idempleado`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `puesto` (`puesto`),
  KEY `id_almacen` (`idalmacen`),
  CONSTRAINT `id_almacen` FOREIGN KEY (`idalmacen`) REFERENCES `almacenes` (`idalmacen`),
  CONSTRAINT `puesto` FOREIGN KEY (`puesto`) REFERENCES `puestos_trabajo` (`idpuesto_trabajo`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  PRIMARY KEY (`idPedido`),
  UNIQUE KEY `idPedidos_UNIQUE` (`idPedido`),
  UNIQUE KEY `numero_pedido_UNIQUE` (`numero_pedido`),
  UNIQUE KEY `id_transporte_UNIQUE` (`id_transporte`),
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-23 22:18:19
