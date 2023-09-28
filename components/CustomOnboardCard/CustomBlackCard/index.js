import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import React, { Children } from "react";
import Logo from "../../CoreAssets/Logo";
import OnBoardButton from "../../CustomButton";

const CustomOnboardCard = styled(Box)({
  background: "#fff",
  padding: "32px 0px",
  borderRadius: "35px",
});

const InnerCustomOnboardCard = styled(Box)({
  minHeight: "70vh",
  width: "80vw",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  position:"relative"
});



function BlankOnboardCard({children}) {
  return (
    <CustomOnboardCard>
      <InnerCustomOnboardCard>
        <Stack alignItems={"center"}>
          <Logo />
        </Stack>
        <Stack alignItems={"center"}>
          <Typography sx={{ fontSize: "25px", }}>
            Welcome Arya Soni !
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Stack
            direction={"row"}
            alignItems={"end"}
            width={{ xs: "80%", md: "50%" }}
          >
            <Box sx={{ flex: 1, height: "2px", background: "#AAB2C873" }} />
            <Typography
              fontSize={{ xs: "10px", sm: "14px" }}
              sx={{ color: "#00002280",  }}
            >
              Choose from the following
            </Typography>
            <Box sx={{ flex: 1, height: "2px", background: "#AAB2C873" }} />
          </Stack>
        </Stack>
       
        {children}
      </InnerCustomOnboardCard>
    </CustomOnboardCard>
  );
}

export default BlankOnboardCard;
