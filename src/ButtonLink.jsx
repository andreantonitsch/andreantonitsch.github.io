import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';

import buttonTheme from './buttonTheme.jsx'

function ButtonLink(props) {

    return <>
        <LinkButton variant="outlined" href={props.link} className="button">{props.text}</LinkButton>
    </>

}

const LinkButton = styled(Button)(buttonTheme);

export default ButtonLink