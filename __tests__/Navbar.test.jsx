import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { usePathname } from "next/navigation";
import Navbar from './../app/(componant)/Navbar/Navbar';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navbar', () => {
  it('should display the correct cart items', () => {
    usePathname.mockReturnValue('/');
    
    localStorage.setItem('cart', JSON.stringify([{ id: 1 }, { id: 2 }]));

    render(<Navbar />);

    
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
