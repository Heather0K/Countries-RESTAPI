import {useState} from "react";
import {CountryResults} from "../../components/CountryResults/CountryResults";
import {CountryContainer, PageContainer, ReigonContainer} from "../../containers/Containers.style";
import {RegionItem} from "./Home.syle";
import {Button} from "../../components/Button/Button";
import {REGIONS} from "../../assets/reigons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Home = () => {

    const [countries, setCountries] = useState([])
    const [selected, setSelected] = useState(null)


    const getCountries = async (region) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const info = await response.json();
            setCountries(info);
            setSelected(region);
        } catch (e) {
            console.error('Caught Error: ', e);
        }
    };

    return (
        <PageContainer>
            <h1>Welcome to Country Finder 👋 </h1>
            <h2>Pick a region below to begin</h2>

            {selected &&
                <Button
                    aria-label={'reset'}
                    onClick={() => {
                        setSelected(null)
                    }}
                >
                    Reset
                </Button>
            }

            <ReigonContainer role="main">
                {REGIONS.map((item) => {
                    return (
                        <RegionItem
                            aria-label={item.title}
                            onClick={() => getCountries(item.title)}
                            key={item.title}
                            selected={selected === item.title}
                        >
                            <FontAwesomeIcon icon={item.icon} alt="Globe Icon"/>
                            <p>{item.title}</p>

                        </RegionItem>
                    );
                })}
            </ReigonContainer>
            {countries.length > 0 &&
                <CountryContainer>
                    {countries.map((item) => {
                        return (
                            <CountryResults  key={item.cca2} item={item}/>
                        );
                    })}
                </CountryContainer>
            };
        </PageContainer>
    );
};