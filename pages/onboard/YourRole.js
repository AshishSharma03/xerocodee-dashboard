import React from "react";
import CenterBox from "../../components/CustomcenterBox";
import BlankOnboardCard from "../../components/CustomOnboardCard/CustomBlackCard";
import { Box, Grid, Stack } from "@mui/material";
import OnBoardButton from "../../components/CustomButton";
import OnboardInput from "../../components/CustomOnboardCard/CustomInput";

function YourRole() {
  return (
    <CenterBox headtitle={"Onboard-step2"}>
      <BlankOnboardCard>
        <Box sx={{ paddingTop: {lg:"70px",xs:"40px"} }}>
          <Grid container spacing={"12px"}>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={"center"}>
              <OnBoardButton variant="Outlined" text={"Developer"} />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={"center"}>
              <OnBoardButton variant="Outlined" text={"Organisation"} />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={"center"}>
              <OnBoardButton variant="Outlined" text={"Developer"} />
            </Grid>
          </Grid>
        </Box>
        <Stack
          width={"100%"}
          position={{ lg: "absolute", md: "absolute" }}
          bottom={"20px"}
          direction={{ lg: "row", xs: "column" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10px"}
        >
          <OnboardInput /> <OnBoardButton text="Submit" />
        </Stack>
      </BlankOnboardCard>
    </CenterBox>
  );
}

export default YourRole;
