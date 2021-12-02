import {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {CountryInfo} from "../../Components/CountryInfo/CountryInfo";
import {PageContainer} from "../../containers/Containers.style";
import {Button} from "../../Components/Button/Button";

export const View = () => {
    const history = useHistory();
    const {code} = useParams();
    const [countryData, setCountryData] = useState([]);
    const [names, setNames] = useState([]);
    const [native, setNative] = useState([]);
    const [jpnName, setJpnName] = useState('');

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

                    if (info) {
                        setCountryData(info[0]);
                        let names = info[0].name;
                        let native = names.nativeName;

                        document.title = names.common + ' ' + info[0].flag;
                        setNames(names);

                        let translations = info[0].translations;
                        setJpnName(translations.jpn.common);

                        Object.keys(native).forEach((elem) => {
                            Object.entries(native[elem]).forEach((va) => {
                                setNative(va[1])
                            });
                        });
                    }

                } catch (e) {
                    console.error('Caught Error', e);
                }
            };
            getData().then(r => {

            });
        }, [code]
    );

    return (
        <PageContainer>
            <Button onClick={redirect} aria-label={'back'}>
                Back
            </Button>
            {countryData &&
                <CountryInfo names={names} flag={countryData.flag} native={native} jpnName={jpnName}/>
            }
        </PageContainer>
    );
};