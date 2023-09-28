import React from "react";
import CenterBox from "../../components/CustomcenterBox";
import BlankOnboardCard from "../../components/CustomOnboardCard/CustomBlackCard";
import { Box, Grid, Stack } from "@mui/material";
import OnBoardButton from "../../components/CustomButton";
import OnboardInput from "../../components/CustomOnboardCard/CustomInput";

function Service() {
  return (
    <CenterBox headtitle={"Onboard-step2"}>
      <BlankOnboardCard>
        <Box sx={{ paddingTop: { lg: "70px", xs: "40px" } }}>
          <Grid container spacing={{ lg: "100px", md: "20px", xs: "20px" }}>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              textAlign={{
                lg: "right",
                md: "right",
                sm: "center",
                xs: "center",
              }}
            >
              <OnBoardButton variant="Outlined" text={"Self Hosting"} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              textAlign={{ lg: "left", md: "left", sm: "center", xs: "center" }}
            >
              <OnBoardButton variant="Outlined" text={"XeroCodee Hosting"} />
            </Grid>
          </Grid>
        </Box>
      </BlankOnboardCard>
    </CenterBox>
  );
}

export default Service;
