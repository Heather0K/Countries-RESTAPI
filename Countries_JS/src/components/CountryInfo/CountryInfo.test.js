import {render, screen} from '@testing-library/react';
import {CountryInfo} from "./CountryInfo";

describe('<CountryInfo/>', () => {
    const countryData = {
        'name': 'Germany',
        'emoji': '🇩🇪',
        'officialName': 'Federal Republic of Germany',
        'japaneseName': 'ドイツ',
        'flag': 'https://flagcdn.com/de.svg',
        'popD': '1234',
    }
    const countryInfo = <CountryInfo countryData={countryData} native='Deutschland'/>

    it('should render a flag emoji', () => {
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
        expect(screen.getByText('Official Name')).toBeDefined();
    });
    it('should render the official Name', () => {
        render(countryInfo);
        expect(screen.getByText('Federal Republic of Germany')).toBeDefined();
        expect(screen.getByText('Native Name')).toBeDefined();
    });
    it('should render the Japanese Name', () => {
        render(countryInfo);
        expect(screen.getByText('ドイツ')).toBeDefined();
        expect(screen.getByText('Japanese Name')).toBeDefined();
    });
    it('should render population density', () => {
        render(countryInfo);
        expect(screen.getByText('1234 people / km2')).toBeDefined();
        expect(screen.getByText('Population Density')).toBeDefined();
    });
    it('should render a flag img', async () => {
        const { getByAltText } = await render(countryInfo);
        const image = getByAltText('Countries flag');
        expect(image).toHaveAttribute('src', 'https://flagcdn.com/de.svg')
    });

});