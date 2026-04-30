import { describe, it, expect } from 'vitest';
import { formatCurrency, formatDate, generateId } from '../utils/storage';

describe('storage utils', () => {
  it('formatCurrency formats TRY correctly', () => {
    expect(formatCurrency(45000, 'TRY')).toContain('45');
    expect(formatCurrency(45000, 'TRY')).toContain('₺');
  });
  it('formatCurrency formats USD correctly', () => {
    expect(formatCurrency(1200, 'USD')).toContain('1');
    expect(formatCurrency(1200, 'USD')).toContain('$');
  });
  it('formatCurrency formats EUR correctly', () => {
    expect(formatCurrency(800, 'EUR')).toContain('800');
    expect(formatCurrency(800, 'EUR')).toContain('€');
  });
  it('formatDate formats valid date string', () => {
    const result = formatDate('2023-10-12');
    expect(result).toMatch(/12 Eki 2023|Oct 12, 2023/);
  });
  it('formatDate returns empty string for empty input', () => {
    expect(formatDate('')).toBe('');
  });
  it('generateId produces unique ids', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
    expect(id1).toMatch(/^[a-z0-9]+-[a-z0-9]+$/);
  });
});
