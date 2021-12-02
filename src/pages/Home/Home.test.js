import { render, screen } from '@testing-library/react';
import {Home} from "./Home";


describe('<CountryInfo/>', () => {
    it('should render title', () => {
        render(<Home />);
        expect(screen.text('Welcome to Country Finder')).toBeDefined();
    });

    it('should render a region tile', () => {
        render(<Home />);
        expect(screen.getByText('Africa')).toBeDefined();
    });

    it('should render a reset button when region is clicked', () => {
        render(<Home />);
        expect(screen.getByText('Africa')).toBeDefined();
    });

    it('should render country tiles when region is clicked', () => {
        render(<Home />);
        expect(screen.getByText('Africa')).toBeDefined();
    });
});