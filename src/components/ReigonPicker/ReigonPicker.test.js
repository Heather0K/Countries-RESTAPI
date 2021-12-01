import { render, screen } from '@testing-library/react';
import { ReigonPicker } from './ReigonPicker';

describe('<CountryInfo/>', () => {
    it('should render', () => {
        render(<ReigonPicker />);
        expect(screen.getByText('ReigonPicker')).toBeDefined();
    });
});