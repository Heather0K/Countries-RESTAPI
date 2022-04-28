import { useNavigate} from "react-router";
import {CountryItem} from "./CountryResults.style";
import React from "react";

type Props = {
    item: {
        cca2: string,
        flag: string,
        name: {
            common: string,
        }
    },
}

const CountryResults = ({item}: Props) => {
    const navigate = useNavigate();
    const redirect = (code: string) => {
        navigate(`/country/${code}`);
    }

    return (
    <CountryItem
        onClick={() => redirect(item.cca2)}
    >
        <div>{item.flag}</div>
        <p>{item.name.common}</p>
    </CountryItem>
    )
}

export default CountryResults;