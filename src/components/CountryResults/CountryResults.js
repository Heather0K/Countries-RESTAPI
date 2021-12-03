import {useHistory} from "react-router-dom";
import {CountryItem} from "./CountryResults.style";

export const CountryResults = ({item}) => {

    const history = useHistory();
    const redirect = (code) => {
        history.push({
            pathname: `/country/${code}`,
            state: code,
        });
    }
    return (
        <CountryItem
            onClick={() => redirect(item.cca2)}
        >
            <div>{item.flag}</div>
            <p>{item.name.common}</p>
        </CountryItem>
    );
}