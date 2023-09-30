import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";


const IconBox = ({ srcicon ,width}) => <Box component={"img"} width={width} src={srcicon} />;

const CustomButtom = styled(Button)({
  textTransform: "capitalize",
  color: "#00002280",
  borderRadius: "5px",
  fontSize:"px"
  
});

const SocialButton = ({ srcicon, icon, text, onClick, }) => {

  return (
    <>
    <CustomButtom
      onClick={onClick}
      variant="outlined"
      color="ease"
      fullWidth
      sx={{display:{sm:"none",xs:"none",md:"none",lg:"flex"},fontSize:"12px"}}
      endIcon={<IconBox srcicon={srcicon}   />}
      >
      {text}
    </CustomButtom>
    <CustomButtom
      onClick={onClick}
      variant="outlined"
      color="ease"
      fullWidth
      sx={{display:{sm:"flex",xs:"flex",md:"flex",lg:"none"}}}
      endIcon={<IconBox srcicon={srcicon}  />}
      />
    </>
  );
};

export default SocialButton;
