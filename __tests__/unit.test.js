// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhoneNumber True 1', () => {
    expect(functions.isPhoneNumber("(631) 697-8375")).toBe(true);
});

test('isPhoneNumber True 2', () => {
    expect(functions.isPhoneNumber("631 897-4513")).toBe(true);
});

test('isPhoneNumber False 1', () => {
    expect(functions.isPhoneNumber("6316973458375")).toBe(false);
});

test('isPhoneNumber False 2', () => {
    expect(functions.isPhoneNumber("(631) 6978375")).toBe(false);
});

test('isEmail True 1', () => {
    expect(functions.isEmail("rpmclaughlin18@gmail.com")).toBe(true);
});

test('isEmail True 2', () => {
    expect(functions.isEmail("rpmclaug@ucsd.edu")).toBe(true);
});

test('isEmail False 1', () => {
    expect(functions.isEmail("rpmclaughlin18@gmail.")).toBe(false);
});

test('isEmail False 2', () => {
    expect(functions.isEmail("Totally not an email")).toBe(false);
});

test('isStrongPassword True 1', () => {
    expect(functions.isStrongPassword("ThisIsAStrong1")).toBe(true);
});

test('isStrongPassword True 2', () => {
    expect(functions.isStrongPassword("AlsoAStrong1__")).toBe(true);
});

test('isStrongPassword False 1', () => {
    expect(functions.isStrongPassword("a")).toBe(false);
});

test('isStrongPassword False 2', () => {
    expect(functions.isStrongPassword("")).toBe(false);
});

test('isDate True 1', () => {
    expect(functions.isDate("08/04/1999")).toBe(true);
});

test('isDate True 2', () => {
    expect(functions.isDate("11/11/2021")).toBe(true);
});

test('isDate False 1', () => {
    expect(functions.isDate("08/0419991")).toBe(false);
});

test('isDate False 1', () => {
    expect(functions.isDate("08")).toBe(false);
});

test('isHexColor True 1', () => {
    expect(functions.isHexColor("#FF5733")).toBe(true);
});

test('isHexColor True 2', () => {
    expect(functions.isHexColor("#FF6199")).toBe(true);
});

test('isHexColor False 1', () => {
    expect(functions.isHexColor("")).toBe(false);
});

test('isHexColor False 1', () => {
    expect(functions.isHexColor("#")).toBe(false);
});