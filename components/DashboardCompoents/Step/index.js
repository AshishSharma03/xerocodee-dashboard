import * as React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import theme from "../../../themeRegistery/theme";

const steps = ["step 1", "step 2", "step 3"];

const SideStick = styled(Box)({
  height: "100%",
  padding: "2px",
  background: "#fff",
  border: "1px solid #E7E7E9",
  boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, 0.07)",
});

export default function CustomizedSteppers({ title, last, children, desc,disable }) {
    
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ padding: "0px 8px 40px 80px" }}>
          <Stack sx={{ padding: " 0px 0px 30px 5px" }}>
            <Typography sx={{ fontWeight: "700" }}>{title}</Typography>
            <Typography
              sx={{ fontWeight: "400", fontSize: "14px", color: "#797979" }}
            >
              {desc}
            </Typography>
          </Stack>
          <Stack
            direction={{ lg: "row", md: "column", sm: "row", xs: "column" }}
            gap={{lg:"30px",md:"20px",sm:"20px",xs:"20px"}}
          >
            {(!disable)?children:""}
          </Stack>
        </Box>
        <Stack
          sx={{ position: "absolute", top: 0, left: 0, height: "100%" }}
          alignItems={"center"}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              height: "40px",
              width: "40px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                padding: "20px",
                background:(!disable)? theme.palette.primary.main:"#D6D6D6",
                borderRadius: "20px",
                position: "absolute",
              }}
            />
            <Box
              sx={{
                padding: "5px",
                background: "#fff",
                borderRadius: "10px",
                position: "absolute",
              }}
            />
          </Box>
          {last ? "" : <SideStick />}
        </Stack>
      </Box>
    </>
  );
}
