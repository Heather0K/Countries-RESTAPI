import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {ReigonItem, ReigonContainer} from './ReigonPicker.style'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobeAfrica, faGlobeAmericas, faGlobeEurope} from '@fortawesome/free-solid-svg-icons'

const REGIONS = [
    {
        icon: faGlobeAfrica,
        title: 'Africa',
    },
    {
        icon: faGlobeAmericas,
        title: 'Americas',
    },
    {
        icon: faGlobeEurope,
        title: 'Asia',
    },
    {
        icon: faGlobeEurope,
        title: 'Europe',
    },
    {
        icon: faGlobeEurope,
        title: 'Oceania',
    },
]

const ReigonPicker = () => {
    const history = useHistory();

    const redirect = (code) => {
        history.push({
            pathname: `/country/${code}`,
            state: code,
        });
    }
    const [countries, setCountries] = useState([])
    const [selected, setSelected] = useState('')

    const getCountries = async (reigon) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/region/${reigon}`);
            const info = await response.json();
            setCountries(info);
            setSelected(reigon);
        } catch (e) {
            console.error('Caught Error: ', e);
        }
    };
    return (
        <>
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
                <ReigonContainer>
                    {countries.map((item) => {
                        return (
                            <ReigonItem
                                onClick={() => redirect(item.cca2)}
                                key={item.cca2}
                            >
                                <p>{item.flag}{item.name.common}</p>
                            </ReigonItem>
                        );
                    })}
                </ReigonContainer>
            }
        </>
    );
};


export {ReigonPicker}