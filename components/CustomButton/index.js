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
  width:"200px"
  
  
});
const OnBoardButton = ({ text, onClick,variant }) => {
  return (
    <>
    {(variant === "Outlined")?
    <CustomButtomBlack
    variant="outlined"  
    color="ease"   

    >
      {text}
    </CustomButtomBlack>
    :<CustomButtom
      variant="contained"
      >
      {text}
    </CustomButtom>
    }
    </>
  );
};

export default OnBoardButton;
