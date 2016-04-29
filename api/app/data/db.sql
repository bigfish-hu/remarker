SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`project` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(64) NOT NULL,
  `is_manual_notification` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`project_allowed_url`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`project_allowed_url` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_id` INT(11) UNSIGNED NOT NULL,
  `url` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_allowed_url_project_id_idx` (`project_id` ASC),
  CONSTRAINT `fk_project_allowed_url_project_id`
    FOREIGN KEY (`project_id`)
    REFERENCES `mydb`.`project` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`feedback` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(64) NOT NULL,
  `description` TEXT NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  `reporter_name` VARCHAR(128) NOT NULL,
  `reporter_email` VARCHAR(255) NOT NULL,
  `created` DATETIME NOT NULL,
  `screenshot` BLOB NOT NULL,
  `browser_name` VARCHAR(64) NOT NULL,
  `browser_is_cookie_enabled` TINYINT(1) NOT NULL,
  `platform` VARCHAR(64) NOT NULL,
  `user_agent` VARCHAR(128) NOT NULL,
  `screen_resolution` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`issue_tracker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`issue_tracker` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(64) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`project_email`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`project_email` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_id` INT(11) UNSIGNED NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_email_project_id_idx` (`project_id` ASC),
  CONSTRAINT `fk_project_email_project_id`
    FOREIGN KEY (`project_id`)
    REFERENCES `mydb`.`project` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`project_issue_tracker`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`project_issue_tracker` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_id` INT(11) UNSIGNED NOT NULL,
  `issue_tracker_id` INT(11) UNSIGNED NOT NULL,
  `issue_tracker_project` VARCHAR(128) NOT NULL,
  `issue_tracker_assignee` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_issue_tracker_project_id_idx` (`project_id` ASC),
  INDEX `fk_project_issue_tracker_issue_tracker_id_idx` (`issue_tracker_id` ASC),
  CONSTRAINT `fk_project_issue_tracker_project_id`
    FOREIGN KEY (`project_id`)
    REFERENCES `mydb`.`project` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_project_issue_tracker_issue_tracker_id`
    FOREIGN KEY (`issue_tracker_id`)
    REFERENCES `mydb`.`issue_tracker` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`project_issue_tracker_watcher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`project_issue_tracker_watcher` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_issue_tracker_id` INT(11) UNSIGNED NOT NULL,
  `issue_tracker_watcher` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_issue_tracker_watcher_project_issue_tracker_id_idx` (`project_issue_tracker_id` ASC),
  CONSTRAINT `fk_project_issue_tracker_watcher_project_issue_tracker_id`
    FOREIGN KEY (`project_issue_tracker_id`)
    REFERENCES `mydb`.`project_issue_tracker` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`feedback_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`feedback_history` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `feedback_id` INT(11) UNSIGNED NOT NULL,
  `action_code` VARCHAR(32) NOT NULL,
  `project_email_id` INT(11) UNSIGNED NULL,
  `issue_tracker_id` INT(11) UNSIGNED NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
