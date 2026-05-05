// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js'; // Ensure the .js extension is there

// TODO - Part 2

// 1. isPhoneNumber
test('isPhoneNumber returns true for standard format', () => {
  expect(isPhoneNumber('858-534-2230')).toBe(true);
});
test('isPhoneNumber returns true for parenthesis format', () => {
  expect(isPhoneNumber('(858) 534-2230')).toBe(true);
});
test('isPhoneNumber returns false for too few digits', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});
test('isPhoneNumber returns false for text strings', () => {
  expect(isPhoneNumber('call-me-now')).toBe(false);
});

// 2. isEmail
// 2. isEmail
test('isEmail returns true for standard email', () => {
  expect(isEmail('ralouie@ucsd.edu')).toBe(true);
});
test('isEmail returns true for another simple email', () => {
  expect(isEmail('ra_louie@gmail.com')).toBe(true); 
});
test('isEmail returns false for missing @ symbol', () => {
  expect(isEmail('ralouie.gmail.com')).toBe(false);
});
test('isEmail returns false for invalid characters', () => {
  expect(isEmail('user@domain!#!.com')).toBe(false);
});

// 3. isStrongPassword
test('isStrongPassword returns true for valid mix', () => {
  expect(isStrongPassword('A1234b_')).toBe(true);
});
test('isStrongPassword returns true for long valid password', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});
test('isStrongPassword returns false for too short', () => {
  expect(isStrongPassword('a1_')).toBe(false);
});
test('isStrongPassword returns false for starting with number', () => {
  expect(isStrongPassword('123Password')).toBe(false);
});

// 4. isDate
test('isDate returns true for standard date', () => {
  expect(isDate('05/24/2026')).toBe(true);
});
test('isDate returns true for single digit days', () => {
  expect(isDate('5/4/2026')).toBe(true);
});
test('isDate returns false for year only', () => {
  expect(isDate('2026')).toBe(false);
});
test('isDate returns false for text instead of numbers', () => {
  expect(isDate('May/24/2026')).toBe(false);
});

// 5. isHexColor
test('isHexColor returns true for 6-digit hex', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});
test('isHexColor returns true for 3-digit hex', () => {
  expect(isHexColor('#000')).toBe(true);
});
test('isHexColor returns false for invalid hex characters', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});
test('isHexColor returns false for too many digits', () => {
  expect(isHexColor('#12345678')).toBe(false);
});