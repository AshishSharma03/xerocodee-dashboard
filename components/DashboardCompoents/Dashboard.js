import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "./Appbar";
import CoreHead from "../CoreAssets/CoreHead";
import SideMenu from "./SideMenu";
import XerocodeeMode from "./Screens/Main/XerocodeeMode";
import StepProgressProvider from "./context/XerocodeContext/StepProgressProvider";

const ScrollBoxInsideRoundedBox = styled(Box)({
  background: "#fff",
  minHeight: "88vh",
  borderRadius: "35px",
  maxHeight: "88vh",
  overflowY: "scroll",
  "&::-webkit-scrollbar": { width: 1 },
});

function Dashboard({user}) {
  
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <Box>
      <CoreHead headtitle={"Dashboard"} />
      <SideMenu >
        <Navbar  />
        <Box
          sx={{
            padding: {
              lg: "0px  20px 0px 0px",
              md: "10px",
              sm: "10px",
              xs: "10px",
            },
          }}
        >
          <ScrollBoxInsideRoundedBox
            sx={{
              padding: {
                lg: "10px   38px",
                md: "20px",
                sm: "20px",
                xs: "20px",
              },
            }}
          > 
            <StepProgressProvider>
            <XerocodeeMode user={user} />
            </StepProgressProvider>
          </ScrollBoxInsideRoundedBox>
        </Box>
      </SideMenu>
    </Box>
  );
}

export default Dashboard;
