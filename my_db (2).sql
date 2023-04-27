-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2023 at 08:31 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `email` varchar(50) NOT NULL,
  `password` int(11) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`email`, `password`, `ID`) VALUES
('admin', 123, 1);

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `q_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `priority` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`q_id`, `title`, `priority`) VALUES
(282, 'hello', 1),
(282, 'hi', 2),
(282, 'home', 3),
(282, 'how', 4),
(283, 'C', 1),
(283, 'A', 2),
(283, 'D', 3),
(283, 'V', 4),
(284, 'h', 1),
(284, 'u', 2),
(284, 'r', 3),
(284, 't', 4);

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `name` varchar(50) NOT NULL,
  `audiofile` blob NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exam`
--

INSERT INTO `exam` (`name`, `audiofile`, `id`) VALUES
('Q1', 0x433a5c66616b65706174685c68656c6c6f2e6d7033, 282),
('Q2', 0x433a5c66616b65706174685c68656c6c6f2e6d7033, 283),
('Q3', 0x433a5c66616b65706174685c68656c6c6f2e6d7033, 284);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('4TYOgKhrdyXcDJeQ2bgItcX_PRseeKT1', 1681643317, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-16T11:08:36.663Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('GdkksHHC5RBbM1R1MeusO1SEAiJ3UCw0', 1681656304, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-16T14:45:04.381Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('LUlLMTM_2ShhQ3TazdggHae5AaCuIfbl', 1681598892, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-15T22:48:12.189Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('O8L_h7ZEw_VxUwosv4Z9WHr0FUPPVDU7', 1681669821, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-16T18:30:21.338Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('SsU_YSuMXGTWrGznyXFTq-PKo8VktSd9', 1681655723, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-16T14:35:22.706Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('WzCMDsE92ewexpfrI7pCX_eydZ58n_e7', 1681585444, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-15T19:04:04.136Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('Z-zhsZFW1yNtO3O3R3IWaWkdKx1062Kn', 1681657637, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-16T15:07:17.275Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('atO0Xq5L8-EOADjpyNxsWVXL8AKNCTIK', 1681655722, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-16T14:35:22.416Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('dQGsze8OHT4HJDhUDxThRMBG4yiECaDO', 1681657637, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-16T15:07:17.303Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('pChpHmJE5b_UDeZWait_OPuGztG845dN', 1681668426, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-16T14:34:33.476Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}'),
('unFubzmrWW_d9oPxPdyqjLCCLas8DoWf', 1681590118, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-04-15T20:21:57.628Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedin\":true}');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `status` varchar(15) NOT NULL,
  `type` text NOT NULL DEFAULT 'user' COMMENT '0->user\r\n1->admin',
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `email`, `phone`, `status`, `type`, `token`) VALUES
(68, 'user1', '$2b$10$q9dxV2dZF7W5Jdxb/8W94uBkHbvFEdVwP4b7ak0WD7IGxslEL0tZy', 'user1', '011', '', 'user', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY4LCJlbWFpbCI6InVzZXIxIiwidHlwZSI6InVzZXIiLCJpYXQiOjE2ODE1ODM0MjF9.jzmjm-a4X1dTk9mNI85ls5ZbiP99ZwZQqo-tZlS-75g'),
(69, 'admin', '$2b$10$ushzP4YLjV.RIjP19gzaX.3MsmG4WDKnD3QF6VL5tWqJ3PLeIWni.', 'admin', '011', '', 'admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY5LCJlbWFpbCI6ImFkbWluIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjgxNTgyMjcyfQ.cP34mvEzSlmVYBh3DqfHeX16EOBwoP5HkR31UBBel5o');

-- --------------------------------------------------------

--
-- Table structure for table `user_exam`
--

CREATE TABLE `user_exam` (
  `user_token` varchar(255) NOT NULL,
  `result` int(11) NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_exam`
--

INSERT INTO `user_exam` (`user_token`, `result`, `date`) VALUES
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY4LCJlbWFpbCI6InVzZXIxIiwidHlwZSI6InVzZXIiLCJpYXQiOjE2ODE1ODM0MjF9.jzmjm-a4X1dTk9mNI85ls5ZbiP99ZwZQqo-tZlS-75g', 1, '2023-04-15T15:03:40.725Z'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY4LCJlbWFpbCI6InVzZXIxIiwidHlwZSI6InVzZXIiLCJpYXQiOjE2ODE1ODM0MjF9.jzmjm-a4X1dTk9mNI85ls5ZbiP99ZwZQqo-tZlS-75g', 3, '2023-04-15T18:30:30.651Z');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD UNIQUE KEY `q_id` (`q_id`,`priority`),
  ADD UNIQUE KEY `q_id_2` (`q_id`,`priority`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_2` (`id`),
  ADD KEY `id_3` (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Indexes for table `user_exam`
--
ALTER TABLE `user_exam`
  ADD KEY `user_token` (`user_token`),
  ADD KEY `user_token_2` (`user_token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=285;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`q_id`) REFERENCES `exam` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_exam`
--
ALTER TABLE `user_exam`
  ADD CONSTRAINT `user_exam_ibfk_1` FOREIGN KEY (`user_token`) REFERENCES `user` (`token`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
