import React, { useContext } from "react";
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
import { StepCardProgress } from "../context/XerocodeContext/StepProgressProvider";

const CustomProgressButton = styled(Button)({
  borderRadius: "50px",
  background: "#fff",
  color: "#797979",
  textTransform: "capitalize",
  border: "1px solid rgba(0,0,0,0.1)",
  padding: "5px 25px",
  filter: "drop-shadow(0px 2px 1px rgba(64, 72, 82, 0.05));",
});

const ProgressCardStyle = styled(Card)({
  padding: "20px",
  boxShadow: " 7px 7px 10px 0px rgba(0, 0, 0, 0.10)",
  borderRadius: "15px",
  border: "1px solid rgba(0, 0, 0, 0.10);",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

function ProgressCard() {
  const { StepProgessItems, setSteProgressItems,ProgressStatus } = useContext(StepCardProgress);

  return (
    <ProgressCardStyle>
      <Stack gap={3} alignItems={"center"}>
        <Stack alignItems={"center"}>
          <Typography sx={{ fontSize: "22px" }}>Your Progress</Typography>
          <Typography sx={{ color: "#818181", fontSize: "14px" }}>
            towards XeroCodee
          </Typography>
        </Stack>

        <CustomProgressBar
          value={
            StepProgessItems.length === 0
              ? 0
              : StepProgessItems.length === 1
              ? 40
              : StepProgessItems.length === 2
              ? 80
              : StepProgessItems.length === 3
              ? 100
              : 0
          }
        />

        <CustomProgressButton>View Details</CustomProgressButton>
      </Stack>
      <Stack gap={3}>
        {StepProgessItems.map((item, i) => (
          <StepProgressCard
            step={i + 1}
            key={i}
            color={item.color}
            status={ProgressStatus}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </Stack>
    </ProgressCardStyle>
  );
}

export default ProgressCard;
