-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Server version: 5.7.24-log
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tribunal`
--

-- --------------------------------------------------------

--
-- Table structure for table `progress_ceas_main`
--

CREATE TABLE `progress_ceas_main` (
  `uid` int(11) NOT NULL,
  `disclose_contact` varchar(10) NOT NULL,
  `name` varchar(128) NOT NULL,
  `grad_year` int(11) NOT NULL,
  `major` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `concern` varchar(254) NOT NULL,
  `academic_satisfied_level` varchar(254) NOT NULL,
  `coop_satisfied_level` varchar(254) NOT NULL,
  `academic_comment` varchar(254) NOT NULL,
  `coop_comment` varchar(254) NOT NULL,
  `specific_changes` varchar(254) NOT NULL,
  `academic_resources` varchar(254) NOT NULL,
  `coop_resources` varchar(254) NOT NULL,
  `student_led` varchar(254) NOT NULL,
  `follow_up` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `progress_ceas_main`
--
ALTER TABLE `progress_ceas_main`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `progress_ceas_main`
--
ALTER TABLE `progress_ceas_main`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
