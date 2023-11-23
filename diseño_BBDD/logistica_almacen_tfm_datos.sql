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
-- Dumping data for table `almacenes`
--

LOCK TABLES `almacenes` WRITE;
/*!40000 ALTER TABLE `almacenes` DISABLE KEYS */;
INSERT INTO `almacenes` VALUES (1,'Almacén Madrid','40.318699','3.757352',1),(2,'Almacén Barcelona','41.373655','2.087099',1),(3,'Almacén Bilbao','43.243100','-2.920621',0);
/*!40000 ALTER TABLE `almacenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'juan.perez@example.com','contrasena1','Juan','Perez',1,1,'#00001',1,'2018-05-23 10:30:00'),(2,'maria.gomez@example.com','contrasena2','Maria','Gomez',2,2,'#00002',1,'2019-07-12 09:45:00'),(3,'carlos.lopez@example.com','contrasena3','Carlos','Lopez',3,1,'#00003',1,'2017-11-30 14:20:00'),(4,'laura.martin@example.com','contrasena4','Laura','Martin',1,2,'#00004',1,'2020-02-15 11:05:00'),(5,'sergio.fernandez@example.com','contrasena5','Sergio','Fernandez',2,1,'#00005',1,'2016-09-08 13:40:00'),(6,'ana.rodriguez@example.com','contrasena6','Ana','Rodriguez',3,2,'#00006',1,'2018-12-03 10:15:00'),(7,'pablo.sanchez@example.com','contrasena7','Pablo','Sanchez',1,1,'#00007',1,'2019-04-20 08:55:00'),(8,'lucia.garcia@example.com','contrasena8','Lucia','Garcia',2,2,'#00008',1,'2021-01-05 16:30:00'),(9,'javier.fernandez@example.com','contrasena9','Javier','Fernandez',3,1,'#00009',1,'2017-06-17 12:10:00'),(10,'elena.martinez@example.com','contrasena10','Elena','Martinez',1,2,'#00010',1,'2022-09-28 07:45:00'),(11,'luis.gutierrez@example.com','contrasena11','Luis','Gutierrez',2,3,'#00011',1,'2020-10-10 18:20:00');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `estados_pedidos`
--

LOCK TABLES `estados_pedidos` WRITE;
/*!40000 ALTER TABLE `estados_pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `estados_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `incidencias`
--

LOCK TABLES `incidencias` WRITE;
/*!40000 ALTER TABLE `incidencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `incidencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'1234567890','2022-07-15 14:30:00',1,2,'2023-09-20 00:00:00',1,3,1,'ABC123'),(2,'2345678901','2023-01-10 09:45:00',2,3,'2023-12-05 00:00:00',2,4,1,'XYZ789'),(3,'3456789012','2022-11-25 11:20:00',3,1,'2023-08-12 00:00:00',3,5,1,'DEF456'),(4,'4567890123','2023-04-03 16:15:00',1,3,'2023-10-18 00:00:00',4,1,1,'GHI789'),(5,'5678901234','2023-09-08 08:00:00',2,1,'2023-11-30 00:00:00',5,2,1,'JKL012'),(6,'6789012345','2022-12-20 13:50:00',3,2,'2023-07-05 00:00:00',1,3,1,'MNO345'),(7,'7890123456','2023-06-14 10:05:00',1,2,'2023-10-10 00:00:00',2,4,1,'PQR678'),(8,'8901234567','2023-03-01 15:40:00',2,3,'2023-12-15 00:00:00',3,5,1,'STU901'),(9,'9012345678','2022-10-28 12:25:00',3,1,'2023-09-25 00:00:00',4,1,1,'VWX234'),(10,'1234567891','2023-02-18 09:00:00',1,3,'2023-11-05 00:00:00',5,2,1,'YZA567'),(11,'2345678902','2022-11-10 14:30:00',2,1,'2023-10-20 00:00:00',1,3,1,'ABC345');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `puestos_trabajo`
--

LOCK TABLES `puestos_trabajo` WRITE;
/*!40000 ALTER TABLE `puestos_trabajo` DISABLE KEYS */;
INSERT INTO `puestos_trabajo` VALUES (3,'Administrador'),(1,'Empleado'),(2,'Encargado');
/*!40000 ALTER TABLE `puestos_trabajo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tipo_estados`
--

LOCK TABLES `tipo_estados` WRITE;
/*!40000 ALTER TABLE `tipo_estados` DISABLE KEYS */;
INSERT INTO `tipo_estados` VALUES (4,'En tránsito'),(6,'Finalizado'),(5,'Pendiente recepcionar'),(1,'Pendiente validar'),(2,'Rectificar'),(3,'Validado');
/*!40000 ALTER TABLE `tipo_estados` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2023-11-23 22:15:52
