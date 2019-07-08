import formatNumber, {shortenNum} from './formatNumber';

describe('Test formatNumber integration', () => {
    test('999', () => {
      expect(formatNumber(999)).toBe('999');
    });
    test('999.999', () => {
      expect(formatNumber(999.999)).toBe('999');
    });
    test('1000', () => {
      expect(formatNumber(1000)).toBe('1K');
    });
    test('1234', () => {
      expect(formatNumber(1234)).toBe('1.23K');
    });
    test('1234567', () => {
      expect(formatNumber(1234567)).toBe('1.23M');
    });
    test('1234567891', () => {
      expect(formatNumber(1234567891)).toBe('1.23B');
    });
    test('1234567891.123', () => {
      expect(formatNumber(1234567891.123)).toBe('1.23B');
    });
    test('1234567891123', () => {
      expect(formatNumber(1234567891123)).toBe('1.23T');
    });
    test('1234567891123.123', () => {
      expect(formatNumber(1234567891123.123)).toBe('1.23T');
    });
  });

  describe('Test shortenNum unit', () => {
    test('1234', () => {
      expect(shortenNum(1234,1e3)).toBe('1.23');
    });
    test('135455555', () => {
      expect(shortenNum(135455555,1e6)).toBe('135');
    });
  });