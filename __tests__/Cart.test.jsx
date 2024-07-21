import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Cart from './../app/(page)/Cart/page';

describe('Cart', () => {
    it('should display items from localStorage', () => {
        localStorage.setItem('cart', JSON.stringify([
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
        ]))

        render(<Cart />)

        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
        expect(screen.getByText('$10')).toBeInTheDocument();
        expect(screen.getByText('$20')).toBeInTheDocument();
    });

    it('should remove an item from the cart', () => {
        localStorage.setItem('cart', JSON.stringify([{ id: 1, name: 'Product 1', price: 10 }]));

        render(<Cart />);

        fireEvent.click(screen.getByText('Remove'));

        expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
    });
})