import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import theme from "../../../../themeRegistery/theme";

function CustomProgressBar({value}) {
  return (
    <Box
      sx={{
        height: "130px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={"div"}
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{fontSize:"20px",color:Math.floor(value) === 100?theme.palette.primary.main:""}}>{`${Math.floor(value)}%`}</Typography>
        <CircularProgress
          variant="determinate"
          thickness={7}
          size={140}
          value={Math.floor(value)}
          sx={{ position: "absolute", color: "rgba(0,0,0,0.1)" }}
        />
         <CircularProgress
          variant="determinate"
          thickness={7}
          size={105}
          value={Math.floor(value)}
          sx={{ position: "absolute", color: "rgba(0,0,0,0.1)" }}
        />
        <CircularProgress
          variant="determinate"
          thickness={8}
          size={130}
          value={100}
          sx={{ position: "absolute", color: "#C7CEFF" }}
        />
        <CircularProgress
          variant="determinate"
          thickness={8}
          size={130}
          value={Math.floor(value)}
          sx={{ position: "absolute" }}
        />
      </Box>
    </Box>
  );
}

export default CustomProgressBar;
