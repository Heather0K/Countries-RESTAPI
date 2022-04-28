import { render, screen } from '@testing-library/react';
import  Button from './Button';

describe('<Button/>', () => {
    it('should render with text', () => {
        render(<Button aria-label="Click">Click Me!</Button>);
        expect(screen.getByText('Click Me!')).toBeDefined();
    });
});
