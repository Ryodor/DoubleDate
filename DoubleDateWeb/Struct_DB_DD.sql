
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema double_date
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema double_date
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `double_date` DEFAULT CHARACTER SET utf8 ;
USE `double_date` ;


-- -----------------------------------------------------
-- Table `double_date`.`Utilisateurs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `double_date`.`Utilisateurs` (
  `utilisateurs_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(200) NULL,
  `mdp` VARCHAR(250) NULL,
  `mon_couple` INT NOT NULL,
  `couple_actif` TINYINT NULL,
  `pseudo` VARCHAR(200) NULL,
  `code` VARCHAR(10) NULL,
  PRIMARY KEY (`utilisateurs_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `double_date`.`Couples`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `double_date`.`Couples` (
  `Couples_id` INT NOT NULL,
  `utilisateur_id_A` INT NOT NULL,
  `utilisateur_id_B` INT NOT NULL,
  PRIMARY KEY (`Couples_id`),
  CONSTRAINT `fk_Couples_Utilisateurs`
    FOREIGN KEY (`utilisateur_id_A`)
    REFERENCES `double_date`.`Utilisateurs` (`utilisateurs_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Couples_Utilisateurs1`
    FOREIGN KEY (`utilisateur_id_B`)
    REFERENCES `double_date`.`Utilisateurs` (`utilisateurs_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


ALTER TABLE Utilisateurs
ADD FOREIGN KEY (`mon_couple`)
    REFERENCES `double_date`.`Couples` (`Couples_id`);



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
