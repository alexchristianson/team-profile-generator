const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('can get school via constructor', () => {
    const testSchool = "UW-Madison";
    const intern = new Intern("Bob", 111, "bob@email.com", testSchool);

    expect(intern.school).toEqual(testSchool);
});

test('get school via getSchool()', () => {
    const testSchool = "UW-Madison";
    const intern = new Intern("Bob", 111, "bob@email.com", testSchool);

    expect(intern.getSchool()).toEqual(testSchool);
});

test('getRole() should return "Intern"', () => {
    const testRole = "Intern";
    const intern = new Intern("Bob", 111, "bob@email.com", "UW-Madison");

    expect(intern.getRole()).toEqual(testRole);
});