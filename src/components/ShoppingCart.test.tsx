import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShoppingCart } from './ShoppingCart';

describe('ShoppingCart Component', () => {
  test('should render empty cart message initially', () => {
    render(<ShoppingCart />);

    expect(
      screen.getByText(/your cart is empty/i)
    ).toBeInTheDocument();
  });

  test('should add a valid item to cart', async () => {
    const user = userEvent.setup();

    render(<ShoppingCart />);

    await user.type(
      screen.getByLabelText(/product name/i),
      'Keyboard'
    );

    await user.type(
      screen.getByLabelText(/product price/i),
      '50'
    );

    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );

    expect(
      screen.getByText('Keyboard')
    ).toBeInTheDocument();

    expect(
      screen.getByText('$50.00')
    ).toBeInTheDocument();
  });

  test('should not add item with empty name', async () => {
    const user = userEvent.setup();

    render(<ShoppingCart />);

    await user.type(
      screen.getByLabelText(/product price/i),
      '10'
    );

    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );

    expect(
      screen.getByText(/your cart is empty/i)
    ).toBeInTheDocument();
  });

  test('should not add item with invalid price', async () => {
    const user = userEvent.setup();

    render(<ShoppingCart />);

    await user.type(
      screen.getByLabelText(/product name/i),
      'Mouse'
    );

    await user.type(
      screen.getByLabelText(/product price/i),
      '-10'
    );

    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );

    expect(
      screen.getByText(/your cart is empty/i)
    ).toBeInTheDocument();
  });

  test('should remove an item', async () => {
    const user = userEvent.setup();

    render(<ShoppingCart />);

    await user.type(
      screen.getByLabelText(/product name/i),
      'Mouse'
    );

    await user.type(
      screen.getByLabelText(/product price/i),
      '15'
    );

    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );

    await user.click(
      screen.getByRole('button', {
        name: /remove/i,
      })
    );

    expect(
      screen.getByText(/your cart is empty/i)
    ).toBeInTheDocument();
  });

  test('should update quantity', async () => {
    const user = userEvent.setup();

    render(<ShoppingCart />);

    await user.type(
      screen.getByLabelText(/product name/i),
      'Monitor'
    );

    await user.type(
      screen.getByLabelText(/product price/i),
      '25'
    );

    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );

    const quantityInput =
      screen.getByLabelText(/quantity for monitor/i);

    await user.clear(quantityInput);
    await user.type(quantityInput, '3');

    expect(quantityInput).toHaveValue(3);
  });

  test('should calculate totals correctly', async () => {
    const user = userEvent.setup();

    render(<ShoppingCart />);

    await user.type(
      screen.getByLabelText(/product name/i),
      'Laptop'
    );

    await user.type(
      screen.getByLabelText(/product price/i),
      '100'
    );

    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );

    expect(
      screen.getByText(/subtotal: \$100.00/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/discount: -\$10.00/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/tax: \$7.20/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/total: \$97.20/i)
    ).toBeInTheDocument();
  });

  test('should clear cart', async () => {
    const user = userEvent.setup();

    render(<ShoppingCart />);

    await user.type(
      screen.getByLabelText(/product name/i),
      'Phone'
    );

    await user.type(
      screen.getByLabelText(/product price/i),
      '300'
    );

    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );

    await user.click(
      screen.getByRole('button', {
        name: /clear cart/i,
      })
    );

    expect(
      screen.getByText(/your cart is empty/i)
    ).toBeInTheDocument();
  });

  test('should add multiple items and calculate subtotal', async () => {
    const user = userEvent.setup();

    render(<ShoppingCart />);

    await user.type(
      screen.getByLabelText(/product name/i),
      'Keyboard'
    );

    await user.type(
      screen.getByLabelText(/product price/i),
      '50'
    );

    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );

    await user.type(
      screen.getByLabelText(/product name/i),
      'Mouse'
    );

    await user.type(
      screen.getByLabelText(/product price/i),
      '50'
    );

    await user.click(
      screen.getByRole('button', {
        name: /add to cart/i,
      })
    );

    expect(
      screen.getByText(/subtotal: \$100.00/i)
    ).toBeInTheDocument();
  });
});