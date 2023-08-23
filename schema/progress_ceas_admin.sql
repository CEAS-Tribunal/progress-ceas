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
-- Table structure for table `progress_ceas_admin`
--

CREATE TABLE `progress_ceas_admin` (
  `uid` int(11) NOT NULL,
  `chair_1_name` varchar(128) NOT NULL,
  `chair_1_email` varchar(254) NOT NULL,
  `chair_2_name` varchar(128) NOT NULL,
  `chair_2_email` varchar(254) NOT NULL,
    `chair_3_name` varchar(128) NOT NULL,
  `chair_3_email` varchar(254) NOT NULL,
  `super_email` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `progress_ceas_admin`
--

INSERT INTO `progress_ceas_admin` (`uid`, `chair_1_name`, `chair_1_email`,`chair_2_name`, `chair_2_email`, `chair_3_name`, `chair_3_email`, `super_email`) VALUES
(1, 'chair_1', 'chair1@mail.uc.edu','chair_2', 'chair2@mail.uc.edu', 'chair_3', 'chair3@mail.uc.edu', 'super@mail.uc.edu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `progress_ceas_admin`
--
ALTER TABLE `progress_ceas_admin`
  ADD UNIQUE KEY `uid` (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `progress_ceas_admin`
--
ALTER TABLE `progress_ceas_admin`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
