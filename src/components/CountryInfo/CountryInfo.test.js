import { render, screen } from '@testing-library/react';
import { CountryInfo } from './ReigonPicker';

describe('<CountryInfo/>', () => {
    it('should render', () => {
        render(<CountryInfo />);
        expect(screen.getByText('ReigonPicker')).toBeDefined();
    });
});