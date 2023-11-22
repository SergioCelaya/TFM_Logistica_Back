CREATE DATABASE  IF NOT EXISTS `logistica_almacen_tfm` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `logistica_almacen_tfm`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: logistica_almacen_tfm
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacenes`
--

LOCK TABLES `almacenes` WRITE;
/*!40000 ALTER TABLE `almacenes` DISABLE KEYS */;
INSERT INTO `almacenes` VALUES (1,'Almacen1','40.7128','-74.0060',1),(2,'Almacen2','34.0522','-118.2437',1),(3,'Almacen3','51.5074','-0.1278',1),(4,'Almacen4','35.6895','139.6917',1),(5,'Almacen5','41.8781','-87.6298',1);
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
  `pwd` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'empleado1@example.com','pwd1','Nombre1','Apellido1',1,1,'E001',1,'2023-01-01 00:00:00'),(2,'empleado2@example.com','pwd2','Nombre2','Apellido2',2,2,'E002',1,'2023-01-02 00:00:00'),(3,'empleado3@example.com','pwd3','Nombre3','Apellido3',3,3,'E003',1,'2023-01-03 00:00:00'),(4,'empleado4@example.com','pwd4','Nombre4','Apellido4',1,4,'E004',1,'2023-01-04 00:00:00'),(5,'empleado5@example.com','pwd5','Nombre5','Apellido5',2,5,'E005',1,'2023-01-05 00:00:00');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados_pedidos`
--

LOCK TABLES `estados_pedidos` WRITE;
/*!40000 ALTER TABLE `estados_pedidos` DISABLE KEYS */;
INSERT INTO `estados_pedidos` VALUES (1,1,1,'2023-01-02 11:55:00'),(2,2,1,'2023-01-05 11:40:10'),(3,1,2,'2023-01-03 13:30:03'),(4,2,2,'2023-01-08 22:20:00'),(5,1,3,'2023-01-04 01:00:30');
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
  `idpeticion_asociada` int NOT NULL,
  `tipo_incidencia` int NOT NULL,
  `vista` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idincidencia`),
  UNIQUE KEY `idincidencia_UNIQUE` (`idincidencia`),
  KEY `tipo_incidencia` (`tipo_incidencia`),
  CONSTRAINT `tipo_incidencia` FOREIGN KEY (`tipo_incidencia`) REFERENCES `tipo_incidencia` (`idtipo_incidencia`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incidencias`
--

LOCK TABLES `incidencias` WRITE;
/*!40000 ALTER TABLE `incidencias` DISABLE KEYS */;
INSERT INTO `incidencias` VALUES (1,'Incidencia1','Descripción incidencia 1',1,1,0),(2,'Incidencia2','Descripción incidencia 2',2,2,0),(3,'Incidencia3','Descripción incidencia 3',3,3,0),(4,'Incidencia4','Descripción incidencia 4',4,4,0),(5,'Incidencia5','Descripción incidencia 5',5,5,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'P001','2023-01-01 12:00:00',1,2,'2023-01-10 12:00:00',1,2,1),(2,'P002','2023-01-02 12:00:00',2,3,'2023-01-12 12:00:00',2,3,2),(3,'P003','2023-01-03 12:00:00',3,1,'2023-01-15 12:00:00',3,1,3),(4,'P004','2023-01-04 12:00:00',4,5,'2023-01-20 12:00:00',4,5,4),(5,'P005','2023-01-05 12:00:00',5,4,'2023-01-25 12:00:00',5,4,5);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puestos_trabajo`
--

LOCK TABLES `puestos_trabajo` WRITE;
/*!40000 ALTER TABLE `puestos_trabajo` DISABLE KEYS */;
INSERT INTO `puestos_trabajo` VALUES (1,'Puesto1'),(2,'Puesto2'),(3,'Puesto3'),(4,'Puesto4'),(5,'Puesto5');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_estados`
--

LOCK TABLES `tipo_estados` WRITE;
/*!40000 ALTER TABLE `tipo_estados` DISABLE KEYS */;
INSERT INTO `tipo_estados` VALUES (1,'Estado1'),(2,'Estado2'),(3,'Estado3'),(4,'Estado4'),(5,'Estado5');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_incidencia`
--

LOCK TABLES `tipo_incidencia` WRITE;
/*!40000 ALTER TABLE `tipo_incidencia` DISABLE KEYS */;
INSERT INTO `tipo_incidencia` VALUES (1,'Incidencia1'),(2,'Incidencia2'),(3,'Incidencia3'),(4,'Incidencia4'),(5,'Incidencia5');
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

-- Dump completed on 2023-11-22 11:57:57
