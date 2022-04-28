import {Btn} from "./Button.style";
import React, {MouseEventHandler} from "react";

type Props = {
    onClick: MouseEventHandler,
    ariaLabel: string,
    children: React.ReactNode
}
const Button = ({onClick, ariaLabel, children}: Props) => (

    <Btn
        onClick={onClick}
        aria-label={ariaLabel}
    >
        {children}
    </Btn>
);

export default Button;