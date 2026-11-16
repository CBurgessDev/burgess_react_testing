import {
  calculateItemTotal,
  calculateSubtotal,
  calculateDiscount,
  calculateTax,
  calculateTotal,
  formatCurrency,
  isValidQuantity,
  CartItem,
} from './cartUtils';

describe('calculateItemTotal', () => {
  test('should calculate item total correctly', () => {
    const item: CartItem = {
      id: 1,
      name: 'Book',
      price: 10,
      quantity: 3,
    };

    expect(calculateItemTotal(item)).toBe(30);
  });
});

describe('calculateSubtotal', () => {
  test('should calculate subtotal for multiple items', () => {
    const items: CartItem[] = [
      { id: 1, name: 'A', price: 10, quantity: 2 },
      { id: 2, name: 'B', price: 20, quantity: 1 },
    ];

    expect(calculateSubtotal(items)).toBe(40);
  });

  test('should return 0 for empty cart', () => {
    expect(calculateSubtotal([])).toBe(0);
  });
});

describe('calculateDiscount', () => {
  test('should return 10% discount when subtotal is 100 or more', () => {
    expect(calculateDiscount(100)).toBe(10);
    expect(calculateDiscount(200)).toBe(20);
  });

  test('should return 5% discount when subtotal is between 50 and 99.99', () => {
    expect(calculateDiscount(50)).toBe(2.5);
    expect(calculateDiscount(80)).toBe(4);
  });

  test('should return 0 discount when subtotal is below 50', () => {
    expect(calculateDiscount(49)).toBe(0);
  });
});

describe('calculateTax', () => {
  test('should calculate 8% tax', () => {
    expect(calculateTax(100)).toBeCloseTo(8);
  });
});

describe('calculateTotal', () => {
  test('should calculate final total with discount and tax', () => {
    const items: CartItem[] = [
      {
        id: 1,
        name: 'Laptop',
        price: 100,
        quantity: 1,
      },
    ];

    expect(calculateTotal(items)).toBeCloseTo(97.2);
  });

  test('should return 0 for empty cart', () => {
    expect(calculateTotal([])).toBe(0);
  });
});

describe('formatCurrency', () => {
  test('should format currency correctly', () => {
    expect(formatCurrency(12.5)).toBe('$12.50');
  });

  test('should format whole numbers', () => {
    expect(formatCurrency(10)).toBe('$10.00');
  });
});

describe('isValidQuantity', () => {
  test('should return true for positive integers', () => {
    expect(isValidQuantity(1)).toBe(true);
    expect(isValidQuantity(10)).toBe(true);
  });

  test('should return false for zero', () => {
    expect(isValidQuantity(0)).toBe(false);
  });

  test('should return false for negatives', () => {
    expect(isValidQuantity(-5)).toBe(false);
  });

  test('should return false for decimals', () => {
    expect(isValidQuantity(1.5)).toBe(false);
  });
});