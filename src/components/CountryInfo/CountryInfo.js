import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const CountryInfo = () => {
    const {code} = useParams();
    const [ countryData, setCountryData ] = useState([])



    useEffect( ()=> {
        const getData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
                const info = await response.json()
                setCountryData(info[0]);
                document.title = countryData.name ? countryData.name.common + countryData.flag : code;
            } catch (e){
                console.error('Caught Error', e);
            }
        }; getData();
    }, [code])

    return (
        <>{countryData.name &&
            <div>
                <p>{countryData.name.common}</p>
                <p>{countryData.name.official}</p>
                <p>{[Object.keys(countryData.name.nativeName)[0]]}</p>
                <p>{countryData.translations.jpn.official}</p>
            </div>
        }
        </>
    );
};


export {CountryInfo}