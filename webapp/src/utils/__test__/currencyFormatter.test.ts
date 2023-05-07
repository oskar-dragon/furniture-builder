import { currencyFormatter } from '../currencyFormatter';

describe('currencyFormatter()', () => {
  test('it should format currency in british pound', () => {
    const input = 123;
    const expected = '£123';
    const output = currencyFormatter(input);

    expect(output).toBe(expected);
  });

  test('should return currency with fraction, when a integer with decimal provided', () => {
    const input = 123.24;
    const expected = '£123.24';
    const output = currencyFormatter(input);

    expect(output).toBe(expected);
  });

  test('should return currency without decimal, when a whole number provided', () => {
    const input = 123;
    const expected = '£123';
    const output = currencyFormatter(input);

    expect(output).toBe(expected);
  });

  test('it should return currency without decimal, when a number with decimal provided, but it is "00"', () => {
    const input = 123.0;
    const expected = '£123';
    const output = currencyFormatter(input);

    expect(output).toBe(expected);
  });
});
