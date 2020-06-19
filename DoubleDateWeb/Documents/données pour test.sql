SET FOREIGN_KEY_CHECKS = 0; 

TRUNCATE TABLE `utilisateurs`;
INSERT INTO utilisateurs (email, mdp, pseudo)
 VALUES
('kevanK@gmail.com', 'kevan', 'kevan'),
('maudB@gmail.com', 'maud', 'maud'),
('julietteT@gmail.com', 'juliette', 'juliette'),
('paulL@gmail.com', 'paul', 'paul');
 
TRUNCATE TABLE `user_infos`;
INSERT INTO user_infos (utilisateur_id, birth_date, taille, poid, nom, prenom, date_inscription, photo, enfant)
 VALUES
(1, '1982-08-29', 175, 78, 'khojandi', 'kevan', NOW(), " ", true),
(1, '1984-08-29', 155, 64, 'bettina', 'maud', NOW(), " ", true),
(1, '1985-04-12', 170, 59, 'tresanini', 'juliette', NOW(), " ", true),
(1, '1988-12-27', 176, 71, 'lapierre', 'paul', NOW(), " ", true); 

TRUNCATE TABLE `couples`;
INSERT INTO couples (utilisateur_id_A, utilisateur_id_B, is_actif)
 VALUES
(1, 2, true), 
(3, 4, true);

TRUNCATE TABLE `couple_infos`;
INSERT INTO couple_infos (couple_id, presentation, sport, jeu_de_table, voyage, discussion, autres, photo)
 VALUES
(1, "Coucou c'est maud et kevan! Aujoud'hui c'est tuto endromir son bambino", true, true, false, true, false, " photo couple MK " ), 
(2, "Nous sommes si beau paul et moi!", false, true, false, true, true, " photo couple PM " );

TRUNCATE TABLE `conversations`;
INSERT INTO conversations (couple_id_A, couple_id_B)
 VALUES
(1, 2); 

TRUNCATE TABLE `messages`;
INSERT INTO messages (text_message, conversation_id, user_id)
 VALUES
("Salut les amoureux !", 1, 3), 
("Hey Juju et Paul, prêts pour se soir? :) ", 1, 1),
("Oui et on ramène les boisson", 1, 4),
("Tant mieux, nous n'en n'avons plus", 1, 2);

select * from `utilisateurs`;
select * from `user_infos`;
select * from `couples`;
select * from `couple_infos`;
select * from `messages`;
 
SET FOREIGN_KEY_CHECKS = 1;