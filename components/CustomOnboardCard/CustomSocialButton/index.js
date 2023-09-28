import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

const IconBox = ({ srcicon }) => <Box component={"img"} src={srcicon} />;

const CustomButtom = styled(Button)({
  textTransform: "capitalize",
  color: "#00002280",
  borderRadius: "5px",
  
});

const SocialButton = ({ srcicon, icon, text, onClick }) => {
  return (
    <>
    <CustomButtom
      onClick={onClick}
      variant="outlined"
      color="ease"
      fullWidth
      sx={{display:{sm:"none",xs:"none",md:"flex",lg:"flex",fontSize:"12px"}}}
      endIcon={<IconBox srcicon={srcicon} />}
      >
      {text}
    </CustomButtom>
    <CustomButtom
      onClick={onClick}
      variant="outlined"
      color="ease"
      fullWidth
      sx={{display:{sm:"flex",xs:"flex",md:"none",lg:"none",fontSize:"12px"}}}
      endIcon={<IconBox srcicon={srcicon} />}
      />
    </>
  );
};

export default SocialButton;
