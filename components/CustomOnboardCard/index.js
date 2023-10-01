import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  Stack,
  TextField,
  Typography,
  Card,
  CardContent,
  colors,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import SocialButton from "./CustomSocialButton";
import OnboardInput from "./CustomInput";
import OnBoardButton from "../CustomButton";
import theme from "../../themeRegistery/theme";
import Logo from "../CoreAssets/Logo";


const CustomOnboardCard = styled(Box)({
  position: "relative",
  background: "#fff",
  padding: "32px 0px",
  borderRadius: "0px 35px 35px 35px",
});

function OnboardCard({ children, Link, href, LinkText,socialButtons,HigliteMsg,descMsg,center }) {
  return (
    <CustomOnboardCard>
      <Box
        component={"img"}
        src={"/Assets/Vector.svg"}
        sx={{ position: "absolute", bottom: 0, right: 0, width: "50%" ,zIndex:0}}
      />
      <Stack direction={"row"}>
        <Box
          minHeight={"80vh"}
          minWidth={{ lg: "35vw", sm: "60vh", xs: "40vh" }}
          display={"flex"}
          flexDirection={"column"}
          padding={"0px 60px"}
          gap={"22px"}
        >
          <Stack alignItems={"center"}>
            <Logo
              component={"img"}
              src="/Assets/logo.svg"
              sx={{ width: "120px" }}
            />
          </Stack>
          <Stack gap={"1px"} >
            <Typography textAlign={"center"} fontSize={"32px"}>
              {HigliteMsg}
            </Typography>
            <Stack direction={"row"} alignItems={"end"}>
              <Box sx={{ flex: 1, height: "2px", background: "#AAB2C873" }} />
              <Typography fontSize={"14px"} sx={{ color: "#00002280" }}>
                {descMsg}
              </Typography>
              <Box sx={{ flex: 1, height: "2px", background: "#AAB2C873" }} />
            </Stack>
          </Stack>
          <Stack gap={"15px"} height={"100%"} justifyContent={center} marginTop={!center?"20px":""}>
            {children}
            <Typography
              textAlign={"center"}
              sx={{
                textTransform: "uppercase",
                color: "#00002280",
                fontSize: "14px",
              }}
            >
              or
            </Typography>
            <Stack direction={"row"} gap={{lg:"20px",md:"20px",sm:"20px",xs:"20px"}}>
              {socialButtons}
              
            </Stack>

            <Typography
              textAlign={"center"}
              fontSize={"12px"}
              sx={{
                textTransform: "capitalize",
                color: "#00002280",
              }}
            >
              {" "}
              {LinkText}{" "}
              <Box
                component={"a"}
                sx={{
                  textDecoration: "none",
                  textTransform: "uppercase",
                  color: theme.palette.primary.main,
                }}
                href={href ? href : "/"}
              >
                {Link}
              </Box>
            </Typography>
          </Stack>
        </Box>
        <Box
          minHeight={"50%"}
          sx={{
            padding: "1px",
            background: "rgba(170, 178, 200, 0.45)",
            margin: "50px 0px",
          }}
        />
        <Box
          minHeight={"80vh"}
          minWidth={"35vw"}
          sx={{
            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component={"img"}
            src={"/Assets/bro.svg"}
            sx={{ width: "80%" }}
          />
        </Box>
      </Stack>
    </CustomOnboardCard>
  );
}

export default OnboardCard;
