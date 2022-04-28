import {SetStateAction, useState} from "react";
import CountryResults from "../../components/CountryResults/CountryResults";
import {CountryContainer, PageContainer, ReigonContainer} from "../../containers/Containers.style";
import {RegionItem} from "./Home.syle";
import Button from "../../components/Button/Button";
import {REGIONS} from "../../assets/reigons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Home = () => {

    const [countries, setCountries] = useState([])
    const [selected, setSelected] = useState("")


    const getCountries = async (region: SetStateAction<string>) => {
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
                    ariaLabel={'reset'}
                    onClick={() => {
                        setSelected("")
                    }}
                >
                    Reset
                </Button>
            }

            <ReigonContainer role="main">
                {REGIONS.map((item, i) => {

                    return (
                        <RegionItem
                            aria-label={item.title}
                            onClick={() => getCountries(item.title)}
                            key={i}
                            selected={item.title}
                            title={item.title}
                        >
                            {/*@ts-ignore*/}
                            <FontAwesomeIcon icon={item.icon} alt="Globe Icon"/>
                            <p>{item.title}</p>

                        </RegionItem>
                    );
                })}
            </ReigonContainer>
            {countries.length > 0 &&
                <CountryContainer>
                    {countries.map((item, i) => {
                        return (
                            <CountryResults key={i} item={item}/>
                        );
                    })}
                </CountryContainer>
            };
        </PageContainer>
    );
};
export default Home;