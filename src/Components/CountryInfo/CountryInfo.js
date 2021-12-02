import {InfoContainer} from "../../containers/Containers.style";
import {CardTitle, Flag, InfoCard, Names} from "./CountryInfo.style";

export const CountryInfo = ({flag, names, native, jpnName}) => {
    return (
        <InfoContainer>
            <InfoCard>
                <CardTitle>
                    <Flag>
                        {flag}
                    </Flag>
                    <h1> {names.common} </h1>
                </CardTitle>
                <Names>
                    <h2>Official Name </h2><p>{names.official}</p>
                </Names>
                <Names>
                    <h2>Native Name </h2><p>{native}</p>
                </Names>
                <Names>
                    <h2>Japanese Name </h2><p>{jpnName}</p>
                </Names>
            </InfoCard>
        </InfoContainer>
    )
}