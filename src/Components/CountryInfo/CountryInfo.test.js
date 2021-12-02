import {render, screen} from '@testing-library/react';
import {CountryInfo} from "./CountryInfo";

describe('<CountryInfo/>', () => {
    const names = {
        common: 'Germany',
        official: 'Federal Republic of Germany'
    }
    const countryInfo = <CountryInfo flag={'🇩🇪'} names={names} native={'Deutschland'} jpnName={'ドイツ'}/>

    it('should render a flag', () => {
        render(countryInfo);
        expect(screen.getByText('🇩🇪')).toBeDefined();
    });
    it('should render the common name', () => {
        render(countryInfo);
        expect(screen.getByText('Germany')).toBeDefined();
    });
    it('should render the Native Name', () => {
        render(countryInfo);
        expect(screen.getByText('Deutschland')).toBeDefined();
    });
    it('should render the offical Name', () => {
        render(countryInfo);
        expect(screen.getByText('Federal Republic of Germany')).toBeDefined();
    });
    it('should render the Japanese Name', () => {
        render(countryInfo);
        expect(screen.getByText('ドイツ')).toBeDefined();
    });

});