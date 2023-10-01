import React from "react";
import CenterBox from "../../components/CustomcenterBox";
import BlankOnboardCard from "../../components/CustomOnboardCard/CustomBlackCard";
import { Box, Grid, Stack } from "@mui/material";
import OnBoardButton from "../../components/CustomButton";
import OnboardInput from "../../components/CustomOnboardCard/CustomInput";
import { useRouter } from "next/router";

function Service() {
  // const [active,setActive] = useState({id:1,type:"XeroCodee"}); 
  const route = useRouter()
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
              <OnBoardButton  variant="Outlined"onClick={()=>{route.push('/')}} text={"Self Hosting"} />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              textAlign={{ lg: "left", md: "left", sm: "center", xs: "center" }}
            >
              <OnBoardButton variant={"Outlined"} onClick={()=>{route.push('/')}} text={"XeroCodee Hosting"} />
            </Grid>
          </Grid>
        </Box>
      </BlankOnboardCard>
    </CenterBox>
  );
}

export default Service;
