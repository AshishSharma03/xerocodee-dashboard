import { Box, Collapse, Stack, Switch, Typography } from "@mui/material";
import React, { useEffect,useContext } from "react";

import CustomizedSteppers from "../../Step";
import CustomSmallCard from "../../Step/SmallCard";
import ProgressCard from "../../ProgressCard";
import { StepCardProgress } from "../../context/XerocodeContext/StepProgressProvider";


function getFirstName(name) {

  const match = name?.match(/^\w+/);
  if (match) {
    return match[0];
  } else {
    return "Arya";
  }
}

function XerocodeeMode({user}) {
  const {steps,setSteps,StepProgessItems,setProgressStatus} = useContext(StepCardProgress);
  
  useEffect(()=>{
    
      if(StepProgessItems.length === 1){
        setTimeout(()=>{
          setSteps([false,false,true])
          setProgressStatus('Complete')
        },1000)
      }
      if(StepProgessItems.length === 2){
        setTimeout(()=>{
          setSteps([false,false,false])
          setProgressStatus('Complete')
        },1000)
      }
      if(StepProgessItems.length === 3){
        setTimeout(()=>{
          setProgressStatus('Complete')
        },1000)
      }
  },)
  return (
    <>
      <Stack
        component={"div"}
        sx={{
          borderRadius: "25px",
          background:
            "linear-gradient(0deg, rgba(211, 230, 255, 0.31) 0%, rgba(231, 241, 255, 0.00) 100%)",
          padding: {
            lg: "20px 30px",
            md: "20px",
            sm: "20px",
            xs: "20px",
          },
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <Box component={"span"} sx={{ flex: 1 }} />
          <Typography sx={{ fontSize: "13px" }}>Test Mode</Typography>
          <Switch color="primary" />
          <Typography sx={{ fontSize: "13px" }}>Production</Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: { lg: "45px", md: "40px", sm: "30px", xs: "30px" },
            fontWeight: "800",
          }}
        >
          Hi {getFirstName(user?.name)} !
        </Typography>
        <Typography sx={{ fontSize: "13px" }}>
          Welcome to XeroCodee Ecosystem 😎
        </Typography>
      </Stack>
      <Stack direction={{ lg: "row", md: "row", sm: "" }}>
        <Box minWidth={"70%"} sx={{ padding: "48px 0px" }}>
          
          <CustomizedSteppers
            disable={steps[0]}
            title={"Step 1"}
            desc={"Connect to Cloud"}
          >
            <CustomSmallCard
            step={0}
              icon="/Assets/icon/Services/Aws.svg"
              color={"#FFDFA2"}
              name={"AWS"}
            />
            <CustomSmallCard
            step={0}
              icon="/Assets/icon/Services/Gcp.svg"
              color={"#4192FF"}
              name={"GCP"}
            />
          </CustomizedSteppers>
       
          <CustomizedSteppers
            title={"Step 2"}
            disable={steps[1]}
            desc={"Connect to Source Code"}
          >
            <CustomSmallCard
            step={1}
              icon="/Assets/icon/Services/Github.svg"
              color="#C0C0C0"
              name={"Github"}
            />
            <CustomSmallCard
             step={1}
              icon="/Assets/icon/Services/Gitlab.svg"
              color="#F77556"
              name={"Gitlab"}
            />
            <CustomSmallCard
            step={1}
              icon="/Assets/icon/Services/GitBucket.svg"
              color="#4192FF"
              name={"Bitbucket"}
            />
          </CustomizedSteppers>
    
          <CustomizedSteppers
            title={"Step 3"}
            disable={steps[2]}
            desc={"Connect to DataSource"}
            last
          >
            <CustomSmallCard
            step={2}
              icon="/Assets/icon/Services/mongodb.svg"
              color={"#34A853"}
              name={"MognoDB"}
            />
            <CustomSmallCard
               step={2}
              icon="/Assets/icon/Services/redis.svg"
              color={"#F77556"}
              name={"RediesDB"}
            />
            <CustomSmallCard
               step={2}
              icon="/Assets/icon/Services/Postgresql.svg"
              color={"#64BAFF"}
              name={"Postgresql"}
            />
          </CustomizedSteppers>
        
        </Box>
        <Box minWidth={"%"} sx={{ width: "100%", padding: "15px 15px" }}>
          <ProgressCard />
        </Box>
      </Stack>
    </>
  );
}

export default XerocodeeMode;
