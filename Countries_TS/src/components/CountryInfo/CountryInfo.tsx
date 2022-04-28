import {InfoContainer} from "../../containers/Containers.style";
import {CardTitle, Flag, Emoji, InfoCard, InfoItem} from "./CountryInfo.style";
import React from "react";

type Props = {
    countryData: {
        emoji: string,
        name: string,
        officialName: string,
        japaneseName: string,
        popD: number,
        flag: string
    },
    native: string,
}
const CountryInfo = ({countryData, native}: Props) => (
    <InfoContainer>
        <InfoCard>
            <CardTitle>
                <Emoji>
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

export default CountryInfo;