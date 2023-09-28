import React from "react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Stack,
  Stepper,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import StepProgressCard from "./components/StepCard";
import CustomProgressBar from "./components/CustomProgressBar";


const CustomProgressButton = styled(Button)({
    borderRadius:"50px",
    background:"#fff",
    color:"#797979",
    textTransform:"capitalize",
    border:"1px solid rgba(0,0,0,0.1)",
    padding:"5px 25px",
    filter:"drop-shadow(0px 2px 1px rgba(64, 72, 82, 0.05));"

})

const ProgressCardStyle = styled(Card)({
    padding: "20px",
    boxShadow:" 7px 7px 10px 0px rgba(0, 0, 0, 0.10)",
    borderRadius:"15px",
    border:"1px solid rgba(0, 0, 0, 0.10);",
    display:"flex",
    flexDirection:"column",
    gap:"30px"

})

function ProgressCard() {
  return (
    <ProgressCardStyle >
      <Stack  gap={3} alignItems={"center"}>
        <Stack alignItems={"center"}>
          <Typography sx={{ fontSize: "22px" }}>
            Your Progress
          </Typography>
          <Typography sx={{color:"#818181",fontSize:"14px"}}>towards XeroCodee</Typography>
        </Stack>
     
        <CustomProgressBar value={70}/>
        
        <CustomProgressButton >View Details</CustomProgressButton>
      </Stack>
      <Stack  gap={3}>
            <StepProgressCard color={"#FFDFA2"} status={"Complete"}  icon={"/Assets/icon/Services/Aws.svg"}  step={1}  name={"AWS"}/>
            <StepProgressCard color={"#F77556"} status={"Complete"}  icon={"/Assets/icon/Services/Gitlab.svg"} step={2}  name={"Gitlab"}/>
            <StepProgressCard color={"#34A853"} status={"Pending"}  icon={"/Assets/icon/Services/mongodb.svg"}  step={3}  name={"MongoDB"}/>
      </Stack>
    </ProgressCardStyle>
  );
}

export default ProgressCard;
