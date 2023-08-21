import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';

function ButtonLink(props) {

    return <>
        <_LinkButton variant="outlined" href={props.link} className="button">{props.text}</_LinkButton>
    </>

}

const _LinkButton = styled(Button)(({ theme }) => ({
    fontFamily: 'Oswald, sans-serif',
    color:  "#ffffff",
    backgroundColor: "#14121700",
    textDecoration: "none",
   
    fontWeight: 200,
    // fontWeight: 600,
    fontSize: 20,
    
    borderRadius : 0,
    borderWidth : 2,
    borderColor:"#ffffff",

    textJustify:"center",
    alignItems: "center",

    '&:hover': {
      backgroundColor: "#ffffff",
      color: "black",
    //   color: "white",
        borderRadius : 0,
        borderWidth : 2,
        borderColor:"#ffffff",
    },
  }));

export default ButtonLink