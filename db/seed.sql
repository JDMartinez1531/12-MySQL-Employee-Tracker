USE lorem_ipsum_inc;

-- department
INSERT INTO department (id, name) VALUES (DEFAULT, "Hall of the Arcane");
INSERT INTO department (id, name) VALUES (DEFAULT, "Warriors Lodge");
INSERT INTO department (id, name) VALUES (DEFAULT, "Crafting Center");


-- role
INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, "manager", 120000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, "darkMage", 80000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, "redMage", 60000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, "knight", 650000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, "footman", 40000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, "enchanter", 90000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, "blacksmith", 50000, 3);


-- employee
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Charles", "Pearson", 1, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Jim", "Halpert", 2, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Zaki ", "Mccarthy", 3, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Karan ", "Oneil", 3, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Lalatina ", "Dustiness-Ford", 4, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Marina ", "Howe", 5, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Kenya ", "Chan", 5, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Earl ", "Hill", 6, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Dylon ", "Milner", 7, 8);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, "Arianna ", "Blanchard", 7, 8)