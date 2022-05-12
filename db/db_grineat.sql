-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 12, 2022 at 07:20 AM
-- Server version: 10.7.3-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_grineat`
--
CREATE DATABASE IF NOT EXISTS `db_grineat` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `db_grineat`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL,
  `nameEnglish` varchar(50) NOT NULL,
  `nameFrench` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `nameEnglish`, `nameFrench`) VALUES
(1, 'Fast food', 'Restauration rapide'),
(2, 'Italian', 'Italien'),
(3, 'Thai', 'Thaïlandais'),
(4, 'Asian', 'Asiatique'),
(5, 'American', 'Américain');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `nameEnglish` varchar(100) NOT NULL,
  `nameFrench` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `nameEnglish`, `nameFrench`) VALUES
(1, 'Uruguay', 'Uruguay'),
(2, 'Paraguay', 'Paraguay'),
(3, 'Georgia', 'Géorgie'),
(4, 'United States', 'États-Unis'),
(5, 'Belize', 'Belize'),
(6, 'Gambia', 'Gambie'),
(7, 'Djibouti', 'Djibouti'),
(8, 'Martinique', 'Martinique'),
(9, 'Guam', 'Guam'),
(10, 'Mauritius', 'Île Maurice'),
(11, 'Marshall Islands', 'Îles Marshall'),
(12, 'Ecuador', 'Équateur'),
(13, 'Qatar', 'Qatar'),
(14, 'Brazil', 'Brésil'),
(15, 'Uganda', 'Ouganda'),
(16, 'Belarus', 'Biélorussie'),
(17, 'Chile', 'Chili'),
(18, 'Liberia', 'Liberia'),
(19, 'Réunion', 'Réunion'),
(20, 'Nauru', 'Nauru'),
(21, 'Montserrat', 'Montserrat'),
(22, 'Taiwan', 'Taïwan'),
(23, 'Antarctica', 'Antarctique'),
(24, 'Argentina', 'Argentine'),
(25, 'Togo', 'Togo'),
(26, 'Saint Pierre and Miquelon', 'Saint-Pierre-et-Miquelon'),
(27, 'Faroe Islands', 'Îles Féroé'),
(28, 'Morocco', 'Maroc'),
(29, 'Palau', 'Palaos (Palau)'),
(30, 'Anguilla', 'Anguilla'),
(31, 'Northern Mariana Islands', 'Îles Mariannes du Nord'),
(32, 'Mauritania', 'Mauritanie'),
(33, 'Ukraine', 'Ukraine'),
(34, 'China', 'Chine'),
(35, 'Cyprus', 'Chypre'),
(36, 'Lesotho', 'Lesotho'),
(37, 'Bangladesh', 'Bangladesh'),
(38, 'South Africa', 'Afrique du Sud'),
(39, 'Puerto Rico', 'Porto Rico'),
(40, 'Guatemala', 'Guatemala'),
(41, 'Curaçao', 'Curaçao'),
(42, 'Antigua and Barbuda', 'Antigua-et-Barbuda'),
(43, 'Israel', 'Israël'),
(44, 'Guyana', 'Guyana'),
(45, 'Croatia', 'Croatie'),
(46, 'Cayman Islands', 'Îles Caïmans'),
(47, 'Sint Maarten', 'Saint-Martin'),
(48, 'Gibraltar', 'Gibraltar'),
(49, 'Senegal', 'Sénégal'),
(50, 'Saint Kitts and Nevis', 'Saint-Christophe-et-Niévès'),
(51, 'Oman', 'Oman'),
(52, 'Kuwait', 'Koweït'),
(53, 'Bouvet Island', 'Île Bouvet'),
(54, 'Honduras', 'Honduras'),
(55, 'United Kingdom', 'Royaume-Uni'),
(56, 'South Georgia', 'Géorgie du Sud-et-les Îles Sandwich du Sud'),
(57, 'Cambodia', 'Cambodge'),
(58, 'North Macedonia', 'Macédoine du Nord'),
(59, 'Panama', 'Panama'),
(60, 'Iran', 'Iran'),
(61, 'Cook Islands', 'Îles Cook'),
(62, 'Trinidad and Tobago', 'Trinité-et-Tobago'),
(63, 'Comoros', 'Comores'),
(64, 'Kosovo', 'Kosovo'),
(65, 'French Southern and Antarctic Lands', 'Terres australes et antarctiques françaises'),
(66, 'Nigeria', 'Nigéria'),
(67, 'Poland', 'Pologne'),
(68, 'Niue', 'Niue'),
(69, 'New Caledonia', 'Nouvelle-Calédonie'),
(70, 'Ethiopia', 'Éthiopie'),
(71, 'Germany', 'Allemagne'),
(72, 'France', 'France'),
(73, 'Nepal', 'Népal'),
(74, 'Barbados', 'Barbade'),
(75, 'India', 'Inde'),
(76, 'Jersey', 'Jersey'),
(77, 'Kyrgyzstan', 'Kirghizistan'),
(78, 'South Sudan', 'Soudan du Sud'),
(79, 'Cuba', 'Cuba'),
(80, 'Bhutan', 'Bhoutan'),
(81, 'Bahamas', 'Bahamas'),
(82, 'Norway', 'Norvège'),
(83, 'Lithuania', 'Lituanie'),
(84, 'Kenya', 'Kenya'),
(85, 'Pitcairn Islands', 'Îles Pitcairn'),
(86, 'Sweden', 'Suède'),
(87, 'Guadeloupe', 'Guadeloupe'),
(88, 'British Indian Ocean Territory', 'Territoire britannique de l\'océan Indien'),
(89, 'Algeria', 'Algérie'),
(90, 'Canada', 'Canada'),
(91, 'Syria', 'Syrie'),
(92, 'Western Sahara', 'Sahara Occidental'),
(93, 'Isle of Man', 'Île de Man'),
(94, 'Botswana', 'Botswana'),
(95, 'Kazakhstan', 'Kazakhstan'),
(96, 'Venezuela', 'Venezuela'),
(97, 'Wallis and Futuna', 'Wallis-et-Futuna'),
(98, 'Slovakia', 'Slovaquie'),
(99, 'Saint Barthélemy', 'Saint-Barthélemy'),
(100, 'Christmas Island', 'Île Christmas'),
(101, 'Solomon Islands', 'Îles Salomon'),
(102, 'Latvia', 'Lettonie'),
(103, 'Afghanistan', 'Afghanistan'),
(104, 'Tonga', 'Tonga'),
(105, 'Serbia', 'Serbie'),
(106, 'Tajikistan', 'Tadjikistan'),
(107, 'Kiribati', 'Kiribati'),
(108, 'Eritrea', 'Érythrée'),
(109, 'Haiti', 'Haïti'),
(110, 'Mali', 'Mali'),
(111, 'Vanuatu', 'Vanuatu'),
(112, 'Bosnia and Herzegovina', 'Bosnie-Herzégovine'),
(113, 'Svalbard and Jan Mayen', 'Svalbard et Jan Mayen'),
(114, 'Samoa', 'Samoa'),
(115, 'Bolivia', 'Bolivie'),
(116, 'Madagascar', 'Madagascar'),
(117, 'São Tomé and Príncipe', 'São Tomé et Príncipe'),
(118, 'Bahrain', 'Bahreïn'),
(119, 'Greece', 'Grèce'),
(120, 'Peru', 'Pérou'),
(121, 'Suriname', 'Surinam'),
(122, 'American Samoa', 'Samoa américaines'),
(123, 'Tuvalu', 'Tuvalu'),
(124, 'North Korea', 'Corée du Nord'),
(125, 'Yemen', 'Yémen'),
(126, 'Ivory Coast', 'Côte d\'Ivoire'),
(127, 'New Zealand', 'Nouvelle-Zélande'),
(128, 'Armenia', 'Arménie'),
(129, 'Tokelau', 'Tokelau'),
(130, 'Pakistan', 'Pakistan'),
(131, 'Malawi', 'Malawi'),
(132, 'Lebanon', 'Liban'),
(133, 'Saudi Arabia', 'Arabie Saoudite'),
(134, 'Czechia', 'Tchéquie'),
(135, 'Myanmar', 'Birmanie'),
(136, 'Cocos (Keeling) Islands', 'Îles Cocos'),
(137, 'Romania', 'Roumanie'),
(138, 'Dominican Republic', 'République dominicaine'),
(139, 'Equatorial Guinea', 'Guinée équatoriale'),
(140, 'Ghana', 'Ghana'),
(141, 'Malta', 'Malte'),
(142, 'Turkey', 'Turquie'),
(143, 'Egypt', 'Égypte'),
(144, 'Belgium', 'Belgique'),
(145, 'Slovenia', 'Slovénie'),
(146, 'Hungary', 'Hongrie'),
(147, 'United Arab Emirates', 'Émirats arabes unis'),
(148, 'Albania', 'Albanie'),
(149, 'Heard Island and McDonald Islands', 'Îles Heard-et-MacDonald'),
(150, 'San Marino', 'Saint-Marin'),
(151, 'Fiji', 'Fidji'),
(152, 'Moldova', 'Moldavie'),
(153, 'Estonia', 'Estonie'),
(154, 'Sri Lanka', 'Sri Lanka'),
(155, 'El Salvador', 'Salvador'),
(156, 'Australia', 'Australie'),
(157, 'Nicaragua', 'Nicaragua'),
(158, 'Bermuda', 'Bermudes'),
(159, 'Somalia', 'Somalie'),
(160, 'Turks and Caicos Islands', 'Îles Turques-et-Caïques'),
(161, 'Micronesia', 'Micronésie'),
(162, 'Palestine', 'Palestine'),
(163, 'Turkmenistan', 'Turkménistan'),
(164, 'Timor-Leste', 'Timor oriental'),
(165, 'Mongolia', 'Mongolie'),
(166, 'Vietnam', 'Viêt Nam'),
(167, 'Cameroon', 'Cameroun'),
(168, 'French Guiana', 'Guyane'),
(169, 'Eswatini', 'Swaziland'),
(170, 'Zambia', 'Zambie'),
(171, 'Liechtenstein', 'Liechtenstein'),
(172, 'Montenegro', 'Monténégro'),
(173, 'Saint Lucia', 'Sainte-Lucie'),
(174, 'Uzbekistan', 'Ouzbékistan'),
(175, 'Japan', 'Japon'),
(176, 'Denmark', 'Danemark'),
(177, 'Cape Verde', 'Îles du Cap-Vert'),
(178, 'Hong Kong', 'Hong Kong'),
(179, 'Switzerland', 'Suisse'),
(180, 'Jordan', 'Jordanie'),
(181, 'Bulgaria', 'Bulgarie'),
(182, 'Republic of the Congo', 'Congo'),
(183, 'Norfolk Island', 'Île Norfolk'),
(184, 'Laos', 'Laos'),
(185, 'South Korea', 'Corée du Sud'),
(186, 'Tunisia', 'Tunisie'),
(187, 'Maldives', 'Maldives'),
(188, 'Singapore', 'Singapour'),
(189, 'Monaco', 'Monaco'),
(190, 'Angola', 'Angola'),
(191, 'Malaysia', 'Malaisie'),
(192, 'Luxembourg', 'Luxembourg'),
(193, 'Guinea', 'Guinée'),
(194, 'Libya', 'Libye'),
(195, 'Spain', 'Espagne'),
(196, 'Indonesia', 'Indonésie'),
(197, 'Mexico', 'Mexique'),
(198, 'Saint Helena, Ascension and Tristan da Cunha', 'Sainte-Hélène, Ascension et Tristan da Cunha'),
(199, 'Sierra Leone', 'Sierra Leone'),
(200, 'Central African Republic', 'République centrafricaine'),
(201, 'Greenland', 'Groenland'),
(202, 'Colombia', 'Colombie'),
(203, 'Papua New Guinea', 'Papouasie-Nouvelle-Guinée'),
(204, 'Falkland Islands', 'Îles Malouines'),
(205, 'Portugal', 'Portugal'),
(206, 'Guinea-Bissau', 'Guinée-Bissau'),
(207, 'Austria', 'Autriche'),
(208, 'DR Congo', 'Congo (Rép. dém.)'),
(209, 'Grenada', 'Grenade'),
(210, 'Russia', 'Russie'),
(211, 'Iceland', 'Islande'),
(212, 'Caribbean Netherlands', 'Pays-Bas caribéens'),
(213, 'Dominica', 'Dominique'),
(214, 'Namibia', 'Namibie'),
(215, 'United States Virgin Islands', 'Îles Vierges des États-Unis'),
(216, 'Åland Islands', 'Ahvenanmaa'),
(217, 'Andorra', 'Andorre'),
(218, 'Burundi', 'Burundi'),
(219, 'Azerbaijan', 'Azerbaïdjan'),
(220, 'Netherlands', 'Pays-Bas'),
(221, 'Iraq', 'Irak'),
(222, 'Italy', 'Italie'),
(223, 'Gabon', 'Gabon'),
(224, 'Macau', 'Macao'),
(225, 'Guernsey', 'Guernesey'),
(226, 'Sudan', 'Soudan'),
(227, 'British Virgin Islands', 'Îles Vierges britanniques'),
(228, 'Jamaica', 'Jamaïque'),
(229, 'Niger', 'Niger'),
(230, 'Thailand', 'Thaïlande'),
(231, 'Ireland', 'Irlande'),
(232, 'Mozambique', 'Mozambique'),
(233, 'Philippines', 'Philippines'),
(234, 'Mayotte', 'Mayotte'),
(235, 'Saint Vincent and the Grenadines', 'Saint-Vincent-et-les-Grenadines'),
(236, 'United States Minor Outlying Islands', 'Îles mineures éloignées des États-Unis'),
(237, 'Costa Rica', 'Costa Rica'),
(238, 'Burkina Faso', 'Burkina Faso'),
(239, 'Zimbabwe', 'Zimbabwe'),
(240, 'Finland', 'Finlande'),
(241, 'Seychelles', 'Seychelles'),
(242, 'Saint Martin', 'Saint-Martin'),
(243, 'Brunei', 'Brunei'),
(244, 'Rwanda', 'Rwanda'),
(245, 'Tanzania', 'Tanzanie'),
(246, 'French Polynesia', 'Polynésie française'),
(247, 'Vatican City', 'Cité du Vatican'),
(248, 'Benin', 'Bénin'),
(249, 'Chad', 'Tchad'),
(250, 'Aruba', 'Aruba');

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` bigint(20) NOT NULL,
  `restaurantId` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(300) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `restaurantId`, `name`, `description`, `image`, `price`) VALUES
(2, 1, 'Big Mac', 'Le burger le plus légendaire du monde est désormais encore meilleur. De la viande de bœuf bien juteuse de la boucherie Bell, de la salade croquante et du fromage fondu, dans un petit pain fabriqué avec de la farine de qualité IP-Suisse. Le tout rehaussé de la mystérieuse sauce Big Mac. Es-tu à la hauteur de son goût ?', 'http://grineat-api.tchoupi.ch/images/bigmac.jpg', '7.20'),
(3, 1, '6 Chicken McNuggets', 'Entièrement faites de poitrine de poulet assaisonnée, les Poulet McCroquettes sont toujours tout simplement délicieuses, sans arômes ni colorants artificiels, ni agents de conservation.', 'http://grineat-api.tchoupi.ch/images/6nuggets.jpg', '6.80');

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` bigint(20) NOT NULL,
  `createdOn` datetime NOT NULL DEFAULT current_timestamp(),
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `website` varchar(300) DEFAULT NULL,
  `image` varchar(300) NOT NULL,
  `street` varchar(300) NOT NULL,
  `cp` varchar(20) NOT NULL,
  `city` varchar(50) NOT NULL,
  `countryId` int(11) NOT NULL,
  `latitude` decimal(11,7) NOT NULL,
  `longitude` decimal(11,7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `createdOn`, `email`, `name`, `phone`, `website`, `image`, `street`, `cp`, `city`, `countryId`, `latitude`, `longitude`) VALUES
(1, '2022-05-03 15:29:30', 'support.mcdonalds@stuart.com', 'McDonald’s', '+41 22 796 88 00', NULL, 'https://lh5.googleusercontent.com/p/AF1QipMHX9lRpMskD-cAPt2PUVN-jsED8q5u9NLMkmib=w80-h106-k-no', 'Rte du Bois-des-Frères 40', '1219', 'Le Lignon', 179, '46.2059684', '6.0987860'),
(2, '2022-05-04 22:33:48', NULL, 'Le Tilleul', '+41 22 752 66 70', 'http://www.letilleul.ch/home.html', 'https://lh5.googleusercontent.com/p/AF1QipN0PwXFMHuV1Fdty1q8glnKpyJ4WLtpf06mCK5y=w80-h142-k-no', 'Rte de La-Repentance 86', '1252', ' Meinier', 179, '46.2479151', '6.2323470'),
(3, '2022-05-10 13:57:14', NULL, 'Auberge de Vandoeuvres', '+41 22 810 89 89', 'http://www.aubergedevandoeuvres.ch/', 'https://lh5.googleusercontent.com/p/AF1QipNss5ciZjhOkeuOG8gxr4i_IINhvYZwL7TytTAz=w137-h92-k-no', 'Rte de Choulex 2', '1254', 'Vandoeuvres', 179, '46.2212424', '6.2029113'),
(4, '2022-05-10 13:59:20', NULL, 'Café des Amis', '+41 22 750 13 39', 'https://cafe-des-amis.ch/', 'https://lh5.googleusercontent.com/p/AF1QipPhnAczhBfPNTS5_YAI9CyB7FLxvhJbOsLkx7MV=w163-h92-k-no', 'Rte de Choulex 132', '1244', 'Choulex', 179, '46.2239146', '6.2252661'),
(5, '2022-05-10 14:03:46', NULL, 'Auberge des Vieux-Chênes', '+41 22 759 12 07', 'https://auberge-vieux-chenes.ch/', 'https://lh5.googleusercontent.com/p/AF1QipNQ1iXwJLP3Rao2-iULJvmDtzmfu2biFag3MLxm=w163-h92-k-no', 'Rte de Presinge 121', '1243', 'Presinge', 179, '46.2195149', '6.2530531'),
(6, '2022-05-10 14:08:34', NULL, 'le Bistro de Cologny', '+41 22 736 57 80', 'https://yellow.local.ch/d/JiQYplXTnOec9cGBMtLu9A', 'https://lh5.googleusercontent.com/p/AF1QipN-dgvIWI1DSBjo3RwXrH2xWnyfrVIqJsc0JcIE=w80-h106-k-no', 'Pl. Pierre-Gautier 5', '1223', 'Cologny', 179, '46.2160894', '6.1807683'),
(7, '2022-05-10 15:14:53', NULL, 'Auberge de la Mairie', '+41 412 341 31 75', 'http://www.mairie.ch/', 'https://lh5.googleusercontent.com/p/AF1QipOBufz-NbUMeW2YPdz3oePFM6vbN_zt4NvIJcsn=w80-h164-k-no', 'Rue du Village 13', '1214', 'Vernier', 179, '46.2147933', '6.0839579'),
(8, '2022-05-10 15:18:41', NULL, 'Café-Restaurant du Cercle', '+41 22 796 82 00', 'https://restaurantducercle.wixsite.com/pizzeria', 'https://lh5.googleusercontent.com/p/AF1QipNgj0XcOq3-aa-HYjMazNduF4PFD2Ng5isCPtWT=w122-h92-k-no', 'Rte D\'Aïre 160', '1219', 'Aïre', 179, '46.2025826', '6.1054076'),
(9, '2022-05-10 15:20:20', NULL, 'Restaurant Da Toni', '+41 22 797 00 77', NULL, 'https://lh5.googleusercontent.com/p/AF1QipPdwruWrmUQxelaPUPhToN-ZIGuFxW-7g6YV5wY=w163-h92-k-no', 'Pl. du Lignon 4', '1219', 'Vernier', 179, '46.2043989', '6.0972502'),
(10, '2022-05-11 14:52:22', NULL, 'Doppiozero restaurant pizzeria', '+41 22 940 37 17', 'http://www.doppiozerorestaurant.ch/', 'https://lh5.googleusercontent.com/p/AF1QipO2MeCN35MN9VNXfKBl3cOU99QrDrK0NeS_dJW0=w163-h92-k-no', 'Chem. du Château-Bloch 11', '1219', 'Aïre', 179, '46.2062769', '6.1024415'),
(11, '2022-05-11 14:54:44', NULL, 'La Cité des Vents SA', '+41 22 797 10 70', 'http://www.lacitedesvents.ch/', 'https://lh5.googleusercontent.com/p/AF1QipMZaY64SHq8kJ4C3arm9RXmr0ygzYecD2QyYODB=w163-h92-k-no', 'Rue de la Coupe Gordon-Bennett 3', '1219', 'Aïre', 179, '46.2055822', '6.1023212'),
(12, '2022-05-11 14:56:51', NULL, 'Taverne du Valais', '+41 22 796 23 23', 'http://www.taverneduvalais.ch/', 'https://lh5.googleusercontent.com/p/AF1QipMrlInvran5FajRY7ynOCdnnJ5m1eNPUqo6lVw=w92-h92-k-no', 'Chem. Des Sellières 4', '1219', 'Le Lignon', 179, '46.2005881', '6.1028570'),
(13, '2022-05-11 14:58:42', NULL, 'Brasserie du Lignon', '+41 22 796 41 44', 'https://brasserie-lignon.ch/', 'https://lh5.googleusercontent.com/p/AF1QipPwNrPSUWPffx9z061Y-ZX_Q6JtMYEZiHrCxM2p=w122-h92-k-no', 'Pl. du Lignon 10', '1219', 'Vernier', 179, '46.2032840', '6.0956820'),
(14, '2022-05-11 15:29:59', NULL, 'Restaurant Le Commerce', '+33 4 50 49 20 96', 'http://pizzeria-grill-le-commerce.com/', 'https://lh5.googleusercontent.com/p/AF1QipP-DpFudRedTSAfkHGCo0gz6DzcyZbIn6V3Ygp9=w80-h106-k-no', '4 Rue Berthollet', '74160', 'Saint-Julien-en-Genevois', 72, '46.1441545', '6.0822197'),
(15, '2022-05-12 07:44:40', NULL, 'PizzaLand 10', '+41 22 320 81 90', 'http://www.pizzaland10.ch/', 'https://lh5.googleusercontent.com/p/AF1QipM8p05AXBPAYvzw2FIsWy4EHVnAoP9G3NV62SBL=w408-h544-k-no', 'Rue de Carouge 73', '1205', 'Genève', 179, '46.1903163', '6.1425983');

-- --------------------------------------------------------

--
-- Table structure for table `restaurants_categories`
--

CREATE TABLE `restaurants_categories` (
  `restaurantId` bigint(20) NOT NULL,
  `categoryId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurants_categories`
--

INSERT INTO `restaurants_categories` (`restaurantId`, `categoryId`) VALUES
(1, 1),
(1, 5),
(9, 2),
(10, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`nameEnglish`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`nameEnglish`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restaurantId` (`restaurantId`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCountry` (`countryId`);

--
-- Indexes for table `restaurants_categories`
--
ALTER TABLE `restaurants_categories`
  ADD PRIMARY KEY (`restaurantId`,`categoryId`),
  ADD KEY `restaurantId` (`restaurantId`,`categoryId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=501;

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `menu_items_ibfk_1` FOREIGN KEY (`restaurantId`) REFERENCES `restaurants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD CONSTRAINT `restaurants_ibfk_1` FOREIGN KEY (`countryId`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `restaurants_categories`
--
ALTER TABLE `restaurants_categories`
  ADD CONSTRAINT `restaurants_categories_ibfk_1` FOREIGN KEY (`restaurantId`) REFERENCES `restaurants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `restaurants_categories_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
