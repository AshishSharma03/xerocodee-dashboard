import {
  Box,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "../../CoreAssets/Logo";
import theme from "../../../themeRegistery/theme";
import SideMenuItem from "./components/SideMenuItem";

function SideMenu({ children }) {
  return (
    <>
      <Stack flexDirection={"row"}>
        <Box
          sx={{
            background: theme.palette.secondary.main,
            minHeight: "100vh",
            minWidth: { lg: "15vw", md: "0vw", xs: "0vw" },
          }}
        >
          <Stack direction={"column"}>
            <Stack
              alignItems={"center"}
              padding={"30px 0px"}
              justifyContent={"center"}
            >
              <Logo display={{ xs: "none", lg: "block" }} />
            </Stack>
            <SideMenuItem />
          </Stack>
        </Box>
        <Box
          sx={{
            background: theme.palette.secondary.main,
            minHeight: "100vh",
            minWidth: { lg: "85vw", md: "100vw", sm: "100vw", xs: "100vw" },
          }}
        >
          {children}
        </Box>
      </Stack>
    </>
  );
}

export default SideMenu;
