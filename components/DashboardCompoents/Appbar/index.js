import {
  AppBar,
  Box,
  Button,
  Icon,
  IconButton,
  InputLabel,
  Input,
  MenuItem,
  Select,
  Stack,
  FormControl,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import theme from "../../../themeRegistery/theme";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import NativeSelect from "@mui/material/NativeSelect";
import Logo from "../../CoreAssets/Logo";

const CustomIconButton = styled(IconButton)({
  width: "fit-content",
  borderRadius: "5px",
  background: "#fff",
  boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, 0.10)",
  "&:hover": {
    background: "#fff",
  },
});

function Navbar() {
  return (
    <AppBar position="static" sx={{ boxShadow: "none", background: "none" }}>
      <Toolbar sx={{ background: theme.palette.secondary.main }}>
        <Logo
         width={{lg:"none",md:"150px",sm:"130px",xs:"100px"}}
         display={{lg:"none"}}
        />
        <Input
          sx={{
            background: "#fff",
            width: "335px",
            padding: "0px 0px 0px 20px",
            borderRadius: "35px",
            display:{xs:"none",sm:"none",lg:"flex",md:"flex "}
          }}
          placeholder="Search"
          endAdornment={
            <Button
              variant="contained"
              sx={{ borderRadius: "50px", padding: "10px" }}
            >
              <SearchIcon />
            </Button>
          }
          disableUnderline
        />
        <Box component={"span"} sx={{ flex: 1 }} />
        <Stack direction={"row"} gap="18px" alignItems={"center"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              background: "#FFC656",
              borderRadius: "32px",
              boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, 0.10)",
              padding: "5px 10px 5px 5px",
              display:{xs:"none",sm:"none",lg:"flex",md:"flex "}    
            }}
          >
            <IconButton size="small" sx={{ background: "#fff", color: "#000" }}>
              <BusinessCenterOutlinedIcon />
            </IconButton>
            <Typography
              sx={{ fontSize: "12px", color: "#000"}}
            >
              Upgrade Plan
            </Typography>
          </Box>
          <CustomIconButton
            size="small"
            color="primary"
            onClick={() => {
              console.log("ss");
            }}
          >
            <NotificationsOutlinedIcon />
          </CustomIconButton>
          <CustomIconButton
            size="small"
            color="primary"
            onClick={() => {
              console.log("ss");
            }}
          >
            <MailOutlineOutlinedIcon />
          </CustomIconButton>
          <CustomIconButton
            size="small"
            color="primary"
            onClick={() => {
              console.log("ss");
            }}
          >
            <SettingsOutlinedIcon />
          </CustomIconButton>

          <NativeSelect
            disableUnderline
            size="small"
            value={"Xerocodee"}
            sx={{ fontSize: "13px", padding: "5px" ,display:{xs:"none",sm:"none",lg:"flex",md:"flex "}}}
          >
            <option value={"Xero code"}>XeroCodee</option>
            <option value={"Xero code"}>Self hosting</option>
          </NativeSelect>

          <CustomIconButton
            size="small"
            color="primary"
            onClick={() => {
              console.log("ss");
            }}
          >
            <PersonOutlineOutlinedIcon />
          </CustomIconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
