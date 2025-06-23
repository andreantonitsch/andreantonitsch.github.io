import { Button, Tooltip } from "@mui/material"
import { styled } from '@mui/material/styles';

import buttonTheme from './buttonTheme.jsx'

function ButtonLink(props) {

    return <>
    <Tooltip title={props.tooltip}>

        <LinkButton variant="outlined" href={props.link} className="button">{props.text}</LinkButton>

    </Tooltip>
    </>

}

const LinkButton = styled(Button)(buttonTheme);

export default ButtonLink