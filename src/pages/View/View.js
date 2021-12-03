import {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {CountryInfo} from "../../components/CountryInfo/CountryInfo";
import {PageContainer} from "../../containers/Containers.style";
import {Button} from "../../components/Button/Button";

export const View = () => {
    const history = useHistory();
    const {code} = useParams();
    const [countryData, setCountryData] = useState({});
    const [native, setNative] = useState('');

    const redirect = () => {
        history.push({
            pathname: `/`,
        });
    }
    useEffect(() => {
            const getData = async () => {
                try {
                    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
                    const info = await response.json()
                    const data = info[0];

                    if (info) {
                        document.title = data.name.common + ' ' + data.flag;

                        const popD = (data.population / data.area).toFixed(3);

                        let nm = data.name.nativeName;
                        Object.keys(nm).forEach((elem) => {
                            Object.entries(nm[elem]).forEach((va) => {
                                setNative(va[1])

                            });
                        });

                        const CountryData = {
                            'name': data.name.common,
                            'emoji': data.flag,
                            'officialName': data.name.official,
                            'japaneseName': data.translations.jpn.common,
                            'flag': data.flags.svg,
                            'popD': popD,
                        }
                        setCountryData(CountryData);
                    }
                } catch (e) {
                    console.error('Caught Error', e);
                }
            };
            getData();
        }, [code]
    );

    return (
        <PageContainer>
            <Button onClick={redirect} aria-label={'back'}>
                Back
            </Button>
            {countryData &&
                <CountryInfo role="main" countryData={countryData} native={native}/>
            }
        </PageContainer>
    );
};