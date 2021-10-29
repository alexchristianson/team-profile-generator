const Employee = require('../lib/Employee');

test('can instantiate Employee', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('can set name via constructor arguments', () => {
    const name = "Bob";
    const employee = new Employee(name);

    expect(employee.name).toEqual(name);
});

test('can set id via constructor arguments', () => {
    const testId = 111;
    const employee = new Employee("Bob", testId);

    expect(employee.id).toEqual(testId);
});

test('can set email via constructor arguments', () => {
    const testEmail = "Bob@email.com";
    const employee = new Employee("Bob", 111, testEmail);

    expect(employee.email).toEqual(testEmail);
});

test('can get name via getName', () => {
    const testName = "Bob";
    const employee = new Employee(testName);

    expect(employee.getName()).toEqual(testName);
});

test('can get id via getId', () => {
    const testId = 111;
    const employee = new Employee("Bob", testId);

    expect(employee.getId()).toEqual(testId);
});

test('can get email via getEmail', () => {
    const testEmail = "Bob@email.com";
    const employee = new Employee("Bob", 111, testEmail);

    expect(employee.getEmail()).toEqual(testEmail);
});

test('getRole() should return "Employee"', () => {
    const testRole = "Employee";
    const employee = new Employee("Bob", 111, "Bob@email.com");

    expect(employee.getRole()).toEqual(testRole);
});