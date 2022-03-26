USE tracker;

INSERT INTO department (name)
VALUES
('Markerting'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Marketing Assoicate', 100000.00, 1),
('Accountant', 150000.00, 2),
('Sales Rep', 95000.00, 4),
('Graphic Designer', 105000.00, 1),
('Lawyer', 200000.00, 3),
('Legal Aid', 70000, 3),
('Financial Analyst', 115000.00, 2),
('Account Manager', 100000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Hermione', 'Granger', 5, NULL),
('Draco', 'Malfoy', 7, NULL),
('Severus', 'Snape', 1, NULL),
('Luna', 'Lovegood', 3, NULL),
('Harry', 'Potter', 8, NULL),
('Albus', 'Dumbledore', 4, NULL),
('Ron', 'Weasley', 6, NULL), 
('Rubeus', 'Hagrid', 1, NULL),
('Lord', 'Voldemort', 3, NULL),
('Minerva', 'McGonagall', 2, NULL);

