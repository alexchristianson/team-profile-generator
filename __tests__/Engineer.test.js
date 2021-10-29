const Engineer = require('../lib/Engineer');

test('can set github username via constructor', () => {
    const testUsername = "GenericUser";
    const engineer = new Engineer("Bob", 111, "bob@email.com", testUsername);

    expect(engineer.github).toEqual(testUsername);
});

test('can get github username from getGithub()', () => {
    const testUsername = "GenericUser";
    const engineer = new Engineer("Bob", 111, "bob@email.com", testUsername);
    
    expect(engineer.getGithub()).toEqual(testUsername);
});

test('getRole() should return "Engineer"', () => {
    const testRole = "Engineer";
    const engineer = new Engineer("Bob", 111, "bob@email.com", "GenericUsername");

    expect(engineer.getRole()).toEqual(testRole);
});