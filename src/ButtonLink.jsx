import { Button } from "@mui/material"
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import buttonTheme from './buttonTheme.jsx'
import tooltipTheme from './tooltipTheme.jsx'


const LinkButton = styled(Button)(buttonTheme);
const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className, tooltip: className }} />
  ))(tooltipTheme);

function ButtonLink(props) {

    return <>
    <StyledTooltip componentsProps={tooltipTheme} title={props.tooltip} className="tooltip" sx={{widht:"fit-content"}}>

        <LinkButton variant="outlined" href={props.link} className="button">{props.text}</LinkButton>

    </StyledTooltip>
    </>

}


export default ButtonLink