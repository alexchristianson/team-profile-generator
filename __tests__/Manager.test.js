const Manager = require('../lib/Manager');

test('check if we can get office number', () => {
    const officeNumber = 123;
    const manager = new Manager("Bob", 1, "bob@email.com", officeNumber);

    expect(manager.officeNumber).toBe(123);
})

test('check if we get office number from getOfficeNumber', () => {
    const officeNumber = 123;
    const manager = new Manager("Bob", 1, "bob@email.com", officeNumber);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

test('check if we can override "employee" role', () => {
    const role = "Manager";
    const manager = new Manager("Bob", 1, "bob@email.com", 123);

    expect(manager.getRole()).toBe("Manager");
})