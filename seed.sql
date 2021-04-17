INSERT INTO department (name) values 
    ('Marketing'),
    ('Management'),
    ('Other');

INSERT INTO employeeRole (title, salary, department_id) values
    ('Lead', 80000, 1),
    ('Lead', 60000, 2),
    ('Lead', 90000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values
    ('Bob', 'Guy', 1, null),
    ('Guy', 'Bob', 2, 1),
    ('Dude', 'Man', 3, 2);