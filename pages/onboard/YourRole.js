import React, { useState } from "react";
import CenterBox from "../../components/CustomcenterBox";
import BlankOnboardCard from "../../components/CustomOnboardCard/CustomBlackCard";
import { Box, Grid, Stack } from "@mui/material";
import OnBoardButton from "../../components/CustomButton";
import OnboardInput from "../../components/CustomOnboardCard/CustomInput";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function YourRole() {
  const { data : session,status} = useSession()
  const [active,setActive] = useState(-1); 
  const router =  useRouter()
    const handleRole =()=>{
      router.push('/onboard/Service')
    }

  

  // console.log(session)
  return (
    <CenterBox headtitle={"Onboard-step2"}>
      <BlankOnboardCard name={session?.user?.name}>
        <Box sx={{ paddingTop: {lg:"70px",xs:"40px"} }}>
          <Grid container spacing={"12px"}>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={"center"}>
              <OnBoardButton variant={active.id === 1? "contained" :"Outlined" } onClick={()=>{setActive({id:1})}} text={"Developer"} />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={"center"}>
              <OnBoardButton variant={active.id === 2? "contained" :"Outlined" } onClick={()=>{setActive({id:2})}}text={"Organisation"} />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} textAlign={"center"}>
              <OnBoardButton variant={active.id === 3? "contained" :"Outlined" } onClick={()=>{setActive({id:3})}}  text={"Developer"} />
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
          <OnboardInput placeholder={"Organization Name"} /> <OnBoardButton text="Submit" onClick={handleRole} />
        </Stack>
      </BlankOnboardCard>
    </CenterBox>
  );
}

export default YourRole;
