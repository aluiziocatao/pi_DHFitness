-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dh_fitness
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dh_fitness
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dh_fitness` DEFAULT CHARACTER SET utf8 ;
USE `dh_fitness` ;

-- -----------------------------------------------------
-- Table `dh_fitness`.`professor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dh_fitness`.`professor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `matricula` INT NOT NULL,
  `data_nascimento` VARCHAR(255) NOT NULL,
  `formacao` VARCHAR(255) NOT NULL,
  `cargo` VARCHAR(255) NOT NULL,
  `data_admissao` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = MyISAM;


-- -----------------------------------------------------
-- Table `dh_fitness`.`modalidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dh_fitness`.`modalidade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `modalidade` VARCHAR(45) NOT NULL,
  `professor_id` INT NOT NULL,
  PRIMARY KEY (`id`, `professor_id`))
ENGINE = MyISAM;


-- -----------------------------------------------------
-- Table `dh_fitness`.`unidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dh_fitness`.`unidade` (
  `cod` INT NOT NULL AUTO_INCREMENT,
  `unidade` VARCHAR(255) NOT NULL,
  `rua` VARCHAR(255) NOT NULL,
  `bairro` VARCHAR(255) NOT NULL,
  `cidade` VARCHAR(255) NOT NULL,
  `cep` VARCHAR(255) NOT NULL,
  `modalidade_id` INT NOT NULL,
  PRIMARY KEY (`cod`, `modalidade_id`))
ENGINE = MyISAM;


-- -----------------------------------------------------
-- Table `dh_fitness`.`pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dh_fitness`.`pagamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `valor` DECIMAL NOT NULL,
  `data` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = MyISAM;


-- -----------------------------------------------------
-- Table `dh_fitness`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dh_fitness`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `matricula` INT NOT NULL,
  `data_nascimento` VARCHAR(255) NOT NULL,
  `sexo` VARCHAR(255) NOT NULL,
  `cpf` VARCHAR(255) NOT NULL,
  `rg` INT NOT NULL,
  `telefone` VARCHAR(255) NOT NULL,
  `rua` VARCHAR(255) NOT NULL,
  `bairro` VARCHAR(255) NOT NULL,
  `cep` INT NOT NULL,
  `numero` INT NOT NULL,
  `cidade` VARCHAR(255) NOT NULL,
  `uf` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `tipo` INT NOT NULL,
  `status` INT NOT NULL,
  `unidade_id` INT NOT NULL,
  `pagamento_id` INT NOT NULL,
  `modalidade_id` INT NOT NULL,
  PRIMARY KEY (`id`, `unidade_id`, `pagamento_id`, `modalidade_id`))
ENGINE = MyISAM
COMMENT = '					';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
