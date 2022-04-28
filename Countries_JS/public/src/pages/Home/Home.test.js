import {render, screen} from '@testing-library/react';
import {Home} from "./Home";

describe('<CountryInfo/>', () => {
    it('should render heading text', () => {
        render(<Home/>);
        expect(screen.getByText('Welcome to Country Finder 👋')).toBeDefined();
    });
        it('should render a region tile', () => {
            render(<Home/>);
            expect(screen.getByText('Africa')).toBeDefined();
        });
});
