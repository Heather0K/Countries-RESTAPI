import {useState} from "react";
import {CountryResults} from "../../Components/CountryResults/CountryResults";
import {PageContainer, ReigonContainer} from "../../containers/Containers.style";
import {ReigonItem} from './Home.style'
import {Button} from "../common.style";
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
        <PageContainer role="main">
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

            <ReigonContainer>
                {REGIONS.map((item) => {
                    return (
                        <ReigonItem
                            onClick={() => getCountries(item.title)}
                            key={item.title}
                            selected={selected === item.title}
                        >
                            <FontAwesomeIcon icon={item.icon}/>
                            <p>{item.title}</p>

                        </ReigonItem>
                    );
                })}
            </ReigonContainer>
            {countries.length > 0 &&
                <CountryResults countries={countries}/>
            };
        </PageContainer>
    );
};