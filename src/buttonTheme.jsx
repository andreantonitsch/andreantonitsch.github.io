const  buttonTheme = ({ theme }) => ({
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
    textWrap : "pretty",
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
    
    '&.Mui-selected': {
        backgroundColor: "#ffffff",
         color: "black",
       //  color: "white",
          borderRadius : 0,
          borderWidth : 2,
          borderColor:"#ffffff",
      },
      '&.Mui-selected:hover': {
        backgroundColor: "#ffffff",
         color: "white",
       //  color: "white",
          borderRadius : 0,
          borderWidth : 2,
          borderColor:"white",
          backgroundColor: "#14121700",
      },
  })

export default buttonTheme