import { Box, Button } from "@mui/material";
import Head from "next/head";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import theme from "../../themeRegistery/theme";
import CoreHead from "../CoreAssets/CoreHead";

const LayerdBox = styled(Box)({
  minHeight: "100vh",
  background: ` url("/Assets/background.png")  50%`,
});

const BackgroundBox = styled(Box)({
  minHeight: "100vh",
  display:'flex',
  background: theme.palette.secondary.main,
  justifyContent:'center',
  alignItems:"center",
  position:"relative"
});

function CenterBox({ children,headtitle}) {
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <LayerdBox>
      <BackgroundBox>
      <CoreHead headtitle={headtitle}/>
        {children}
      </BackgroundBox>
    </LayerdBox>
  );
}

export default CenterBox;
