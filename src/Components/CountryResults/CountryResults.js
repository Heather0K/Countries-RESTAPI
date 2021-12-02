import {useHistory} from "react-router-dom";
import {CountryContainer} from "../../containers/Containers.style";
import {CountryItem} from "./CountryResults.style";

export const CountryResults = ({countries}) => {

    const history = useHistory();
    const redirect = (code) => {
        history.push({
            pathname: `/country/${code}`,
            state: code,
        });
    }
    return (
        <CountryContainer>
            {countries.map((item) => {
                return (
                    <CountryItem
                        onClick={() => redirect(item.cca2)}
                        key={item.cca2}
                    >
                        <div>{item.flag}</div>
                        <p>{item.name.common}</p>
                    </CountryItem>
                );
            })}
        </CountryContainer>
    )
}