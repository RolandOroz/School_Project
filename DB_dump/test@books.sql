-- MySQLShell dump 2.0.1  Distrib Ver 8.0.32-g3 for Win64 on x86_64 - for MySQL 8.0.32 (MySQL Community Server (GPL)), for Win64 (x86_64)
--
-- Host: localhost    Database: test    Table: books
-- ------------------------------------------------------
-- Server version	8.0.31

--
-- Table structure for table `books`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE IF NOT EXISTS `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `book_desc` varchar(255) NOT NULL,
  `cover` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
