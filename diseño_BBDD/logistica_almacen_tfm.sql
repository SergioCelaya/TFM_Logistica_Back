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
  `nombre_almacen` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `long` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` tinyint NOT NULL,
  PRIMARY KEY (`idalmacen`),
  UNIQUE KEY `idalmacen_UNIQUE` (`idalmacen`),
  UNIQUE KEY `nombre_almacen_UNIQUE` (`nombre_almacen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacenes`
--

LOCK TABLES `almacenes` WRITE;
/*!40000 ALTER TABLE `almacenes` DISABLE KEYS */;
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
  `nombre` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellidos` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `puesto` int NOT NULL,
  `num_empleado` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` tinyint DEFAULT NULL,
  `fecha_contratacion` datetime DEFAULT NULL,
  PRIMARY KEY (`idempleado`),
  UNIQUE KEY `idempleado_UNIQUE` (`idempleado`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
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
  PRIMARY KEY (`idestado_pedidos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados_pedidos`
--

LOCK TABLES `estados_pedidos` WRITE;
/*!40000 ALTER TABLE `estados_pedidos` DISABLE KEYS */;
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
  `titulo` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idpeticion_asociada` int NOT NULL,
  `tipo_incidencia` int NOT NULL,
  `vista` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idincidencia`),
  UNIQUE KEY `idincidencia_UNIQUE` (`idincidencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `incidencias`
--

LOCK TABLES `incidencias` WRITE;
/*!40000 ALTER TABLE `incidencias` DISABLE KEYS */;
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
  `numero_pedido` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `almacen_origen` int DEFAULT NULL,
  `almacen_destino` int DEFAULT NULL,
  `fecha_entrega` datetime DEFAULT NULL,
  `usuario_asignado` int DEFAULT NULL,
  `usuario_responsable` int DEFAULT NULL,
  `estado` int DEFAULT NULL,
  PRIMARY KEY (`idPedido`),
  UNIQUE KEY `idPedidos_UNIQUE` (`idPedido`),
  UNIQUE KEY `numero_pedido_UNIQUE` (`numero_pedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
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
  `descripcion` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idpuesto_trabajo`),
  UNIQUE KEY `idpuesto_trabajo_UNIQUE` (`idpuesto_trabajo`),
  UNIQUE KEY `descripcion_UNIQUE` (`descripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puestos_trabajo`
--

LOCK TABLES `puestos_trabajo` WRITE;
/*!40000 ALTER TABLE `puestos_trabajo` DISABLE KEYS */;
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
  `descripcion` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idestado`),
  UNIQUE KEY `idestados_UNIQUE` (`idestado`),
  UNIQUE KEY `descripcion_UNIQUE` (`descripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_estados`
--

LOCK TABLES `tipo_estados` WRITE;
/*!40000 ALTER TABLE `tipo_estados` DISABLE KEYS */;
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
  `descripcion` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idtipo_incidencia`),
  UNIQUE KEY `idtipo_incidencia_UNIQUE` (`idtipo_incidencia`),
  UNIQUE KEY `descripcion_UNIQUE` (`descripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_incidencia`
--

LOCK TABLES `tipo_incidencia` WRITE;
/*!40000 ALTER TABLE `tipo_incidencia` DISABLE KEYS */;
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

-- Dump completed on 2023-11-11 11:52:07
