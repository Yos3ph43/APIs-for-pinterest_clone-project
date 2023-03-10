-- Adminer 4.8.1 MySQL 8.0.32 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `bookmark`;
CREATE TABLE `bookmark` (
  `user_id` int NOT NULL,
  `picture_id` int NOT NULL,
  `bookmark_date` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`,`picture_id`),
  KEY `picture_id` (`picture_id`),
  CONSTRAINT `bookmark_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `bookmark_ibfk_2` FOREIGN KEY (`picture_id`) REFERENCES `picture` (`picture_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `bookmark` (`user_id`, `picture_id`, `bookmark_date`) VALUES
(3,	1,	'2023-03-06 15:46:17'),
(3,	2,	'2023-03-06 15:46:32');

DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `picture_id` int NOT NULL,
  `comment_date` datetime DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `picture_id` (`picture_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`picture_id`) REFERENCES `picture` (`picture_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `comment` (`comment_id`, `user_id`, `picture_id`, `comment_date`, `content`) VALUES
(1,	3,	4,	'2023-03-06 15:47:12',	'where pic 2 bro??'),
(2,	3,	1,	'2023-03-06 15:47:26',	'niceeeee');

DROP TABLE IF EXISTS `picture`;
CREATE TABLE `picture` (
  `picture_id` int NOT NULL AUTO_INCREMENT,
  `picture_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`picture_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `picture_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `picture` (`picture_id`, `picture_name`, `source`, `desc`, `user_id`) VALUES
(1,	'pic 1 from root',	'cdn.trustmebro.jpg',	'nice root pic',	2),
(2,	'pic 2 from root',	'cdn.trustmebro2.jpg',	'nice root pic',	2),
(3,	'pic 1 from lm',	'cdn.trustmebro.py',	'trust the source bro',	1),
(4,	'pic 3 from lm',	'cdn.trustmebro2.py',	'where pic 2 bro?',	1);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `user` (`user_id`, `email`, `password`, `full_name`, `age`, `avatar`) VALUES
(1,	'luan43@mail.mail',	'1234',	'luan minh',	99,	'insert avatar here'),
(2,	'root@root.root',	'1234',	'root',	99,	'root ava'),
(3,	'randomdude@mail.mail',	'1234',	'random dude',	9,	'random avatar cdn');

-- 2023-03-06 15:53:25
