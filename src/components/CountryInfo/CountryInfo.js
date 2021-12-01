import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const CountryInfo = () => {
    const {code} = useParams();
    const [countryData, setCountryData] = useState([null]);
    const [names, setNames] = useState([]);
    const [native, setNative] = useState([]);
    const [jpnName, setJpnName] = useState('');

    useEffect(() => {
            const getData = async () => {
                try {
                    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
                    const info = await response.json()
                    setCountryData(info[0]);

                    if (countryData) {
                        let names = info[0].name;
                        let native = names.nativeName;

                        document.title = names.common + info[0].flag;
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
            getData();
        }, [code]
    );

    return (
        <>{countryData &&
            <div>
                <img src={countryData.flag}></img>
                <p>{countryData.flag}</p>
                <p>Name {names.common}</p>
                <p>Official Name {names.official}</p>
                <p>Native Name {native}</p>
                <p>Japaneese Name {jpnName}</p>
            </div>
        }
        </>
    );
};


export {CountryInfo}