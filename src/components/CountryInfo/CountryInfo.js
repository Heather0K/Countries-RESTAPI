import {InfoContainer} from "../../containers/Containers.style";
import {CardTitle, Flag, Emoji, InfoCard, InfoItem} from "./CountryInfo.style";

export const CountryInfo = ({countryData, native}) => {

    return (
        <InfoContainer>
            <InfoCard>
                <CardTitle>
                    <Emoji
                        alt='country flag emoji'
                    >
                        {countryData.emoji}
                    </Emoji>
                    <h1> {countryData.name} </h1>
                </CardTitle>
                <InfoItem>
                    <b>Official Name </b><p>{countryData.officialName}</p>
                </InfoItem>
                <InfoItem>
                    <b>Native Name </b><p>{native}</p>
                </InfoItem>
                <InfoItem>
                    <b>Japanese Name </b><p>{countryData.japaneseName}</p>
                </InfoItem>
                <InfoItem>
                    <b>Population Density </b><p>{countryData.popD} people / km2</p>
                </InfoItem>
                <Flag>
                    <img
                    alt='Countries flag'
                    src={countryData.flag}
                />
                </Flag>
            </InfoCard>
        </InfoContainer>
    )
}