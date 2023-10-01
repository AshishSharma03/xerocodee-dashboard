import React from "react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  Stack,
  Stepper,
  Switch,
  Typography,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
function hexToRgba(hexColor, alpha) {
  const hexNumber = parseInt(hexColor?.substring(1), 16);
  const red = (hexNumber >> 16) & 0xff;
  const green = (hexNumber >> 8) & 0xff;
  const blue = hexNumber & 0xff;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function StepProgressCard({ step, name, status, color, icon }) {
  return (
    <Stack gap={1}>
      <Typography
        sx={{
          
          fontSize: "14px",
          color: "rgba(121, 121, 121, 0.50)",
        }}
      >
        Step {step}
      </Typography>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px 10px 10px 20px",
          borderRadius: "10px",
          background: hexToRgba(color, 0.2),
          boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        <Stack>
          <Typography  sx={{fontSize:"14px"}}>{name}</Typography>
          <Typography sx={{  color: "#797979",fontSize:"13px" }}>
            Status : {status}
          </Typography>
        </Stack>
        <Box component={"span"} sx={{ flex: 1 }} />
        <Box
          sx={{
            border: `1px solid ${color}`,
            background: "#fff",
            borderRadius: "15px",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component={"img"} src={icon} sx={{ width: "70%" }} />  
        </Box>
          {/* <IconButton> */}
            <MoreVertIcon sx={{fontSize:"30px",color:"#CACACA"}}/>
          {/* </IconButton> */}
      </Card>
    </Stack>
  );
}

export default StepProgressCard;
