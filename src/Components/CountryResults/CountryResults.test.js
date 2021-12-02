import {render, screen} from '@testing-library/react';
import {CountryResults} from "./CountryResults";

describe('<CountryInfo/>', () => {

    const item = {
        flag: '🇩🇪',
        name: {
            common: 'Germany'
        }
    }

    it('should render a flag', () => {
        render(<CountryResults item={item}/>);
        expect(screen.getByText('🇩🇪')).toBeDefined();
    });
    it('should render the common name', () => {
        render(<CountryResults item={item}/>);
        expect(screen.getByText('Germany')).toBeDefined();
    });
});