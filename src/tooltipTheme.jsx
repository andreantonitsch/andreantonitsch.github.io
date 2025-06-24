import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { maxWidth, minWidth, sizeWidth, textAlign } from '@mui/system';
const  tooltipTheme = ({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        fontFamily: 'Oswald, sans-serif',
        color:  "#ffffff",
        backgroundColor: "#141217DD",
        textDecoration: "none",
       
        //fontWeight: 250,
        fontWeight: 300,
        fontSize: 20,
        
        textWrap : "pretty",
        borderRadius : 1,
        borderWidth : 2,
        borderColor:"#ffffff",
        //textAlign : "center",
        textJustify:"center",
        alignItems: "center",
        maxWidth : 900,
        minWidth : 200,
        width : "fit-content"
    },
    

  })

export default tooltipTheme