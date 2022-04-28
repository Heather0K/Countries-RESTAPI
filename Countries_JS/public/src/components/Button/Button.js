import {Btn} from "./Button.style";

export const Button = ({onClick, ariaLabel, children}) => {

        return (
            <Btn
                onClick={onClick}
                aria-label={ariaLabel}
            >
                {children}
            </Btn>
        );
};
