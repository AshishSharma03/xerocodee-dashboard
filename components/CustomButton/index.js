import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import theme from "../../themeRegistery/theme";

const IconBox = ({ srcicon }) => <Box component={"img"} src={srcicon} />;

const CustomButtom = styled(Button)({
  // textTransform: "capitalize",
  borderRadius: "5px",
  boxShadow:"none"

  
});

const CustomButtomBlack = styled(Button)({
  // textTransform: "capitalize",
  textTransform: "capitalize",
  color: "#000",
  borderRadius: "5px",
  width:"200px",
  zIndex:1
});
const OnBoardButton = ({ text, onClick,variant,disable }) => {
  return (
    <>
    {(variant === "Outlined")?
    <CustomButtomBlack
    variant="outlined"  
    color="ease"   
    onClick={onClick}
    disabled={disable}
    >
      {text}
    </CustomButtomBlack>
    :<CustomButtom
      variant="contained"
  
      onClick={onClick}
      disabled={disable}
      >
      {text}
    </CustomButtom>
    }
    </>
  );
};

export default OnBoardButton;
