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
  `pseudo` VARCHAR(200) NULL,
  PRIMARY KEY (`utilisateurs_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `double_date`.`Couples`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `double_date`.`Couples` (
  `couple_id` INT NOT NULL AUTO_INCREMENT,
  `utilisateur_id_A` INT NOT NULL,
  `utilisateur_id_B` INT NOT NULL,
  `is_actif` TINYINT NULL,
  PRIMARY KEY (`couple_id`),
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


-- -----------------------------------------------------
-- Table `double_date`.`Conversations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `double_date`.`Conversations` (
  `conversations_id` INT NOT NULL AUTO_INCREMENT,
  `couple_id_A` INT NOT NULL,
  `couple_id_B` INT NOT NULL,
  PRIMARY KEY (`conversations_id`),
  CONSTRAINT `fk_Conversations_Couples1`
    FOREIGN KEY (`couple_id_A`)
    REFERENCES `double_date`.`Couples` (`couple_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Conversations_Couples2`
    FOREIGN KEY (`couple_id_B`)
    REFERENCES `double_date`.`Couples` (`couple_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `double_date`.`Messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `double_date`.`Messages` (
  `message_id` INT NOT NULL AUTO_INCREMENT,
  `text_message` TEXT NULL,
  `conversation_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`message_id`),
  CONSTRAINT `fk_Messages_Conversations1`
    FOREIGN KEY (`conversation_id`)
    REFERENCES `double_date`.`Conversations` (`conversations_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Messages_Utilisateurs1`
    FOREIGN KEY (`user_id`)
    REFERENCES `double_date`.`Utilisateurs` (`utilisateurs_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `double_date`.`Couple_Infos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `double_date`.`Couple_Infos` (
  `couple_info_id` INT NOT NULL AUTO_INCREMENT,
  `couple_id` INT NOT NULL,
  `presentation` TEXT NULL,
  `sport` TINYINT NULL,
  `jeu_de_table` TINYINT NULL,
  `voyage` TINYINT NULL,
  `discussion` TINYINT NULL,
  `autres` TINYINT NULL,
  `photo` VARCHAR(250) NULL,
  PRIMARY KEY (`couple_info_id`),
  CONSTRAINT `fk_Couple_Infos_Couples1`
    FOREIGN KEY (`couple_id`)
    REFERENCES `double_date`.`Couples` (`couple_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `double_date`.`User_Infos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `double_date`.`User_Infos` (
  `user_info_id` INT NOT NULL AUTO_INCREMENT,
  `utilisateur_id` INT NOT NULL,
  `birth_date` DATE NULL,
  `taille` INT NULL,
  `poid` INT NULL,
  `nom` VARCHAR(200) NULL,
  `prenom` VARCHAR(200) NULL,
  `date_inscription` DATETIME NULL,
  `photo` VARCHAR(250) NULL,
  `enfant` TINYINT NULL,
  PRIMARY KEY (`user_info_id`),
  CONSTRAINT `fk_User_Infos_Utilisateurs1`
    FOREIGN KEY (`utilisateur_id`)
    REFERENCES `double_date`.`Utilisateurs` (`utilisateurs_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
