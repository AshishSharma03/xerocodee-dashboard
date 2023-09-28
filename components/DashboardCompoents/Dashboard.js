import {
  Box,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "./Appbar";
import CoreHead from "../CoreAssets/CoreHead";
import SideMenu from "./SideMenu";

import CustomizedSteppers from "./Step";
import CustomSmallCard from "./Step/SmallCard";
import ProgressCard from "./ProgressCard";

function Dashboard() {
  
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
      <SideMenu>
        <Navbar />
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
          <Box
            sx={{
              background: "#fff",
              minHeight: "88vh",
              borderRadius: "35px",
              maxHeight: "88vh",
              overflowY: "scroll",
              padding: {
                lg: "10px   38px",
                md: "20px",
                sm: "20px",
                xs: "20px",
              },
              "&::-webkit-scrollbar": { width: 1 },
            }}
          >
            <Stack
              component={"div"}
              sx={{
                borderRadius: "25px",
                background:
                  "linear-gradient(0deg, rgba(211, 230, 255, 0.31) 0%, rgba(231, 241, 255, 0.00) 100%)",
                padding: {
                  lg: "20px 30px",
                  md: "20px",
                  sm: "20px",
                  xs: "20px",
                },
              }}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <Box component={"span"} sx={{ flex: 1 }} />
                <Typography sx={{ fontSize: "13px" }}>
                  Test Mode
                </Typography>
                <Switch color="primary" />
                <Typography sx={{ fontSize: "13px" }}>
                  Production
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontSize: { lg: "45px", md: "40px", sm: "30px", xs: "30px" },fontWeight:"800"
                }}
              >
                Hi Arya !
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                Welcome to XeroCodee Ecosystem 😎
              </Typography>
            </Stack>
            <Stack direction={{ lg: "row", md: "row", sm: "" }}>
              <Box sx={{ padding: "48px 0px" }}>
                <CustomizedSteppers title={"Step 1"} desc={"Connect to Cloud"}>
                  <CustomSmallCard icon="/Assets/icon/Services/Aws.svg" color={"#FFDFA2"} name={"AWS"} />
                  <CustomSmallCard icon="/Assets/icon/Services/Gcp.svg" color={"#4192FF"} name={"GCP"} />
                </CustomizedSteppers>
                <CustomizedSteppers
                  title={"Step 2"}
                  desc={"Connect to Source Code"}
                >
                  <CustomSmallCard icon="/Assets/icon/Services/Github.svg" color="#C0C0C0" name={"Github"} />
                  <CustomSmallCard icon="/Assets/icon/Services/gitlab.svg" color="#F77556" name={"Gitlab"} />
                  <CustomSmallCard icon="/Assets/icon/Services/gitbucket.svg" color="#4192FF" name={"Bitbucket"} />
                </CustomizedSteppers>
                <CustomizedSteppers
                  title={"Step 3"}
                  desc={"Connect to DataSource"}
                >
                  <CustomSmallCard icon="/Assets/icon/Services/mongodb.svg" color={"#34A853"} name={"MognoDB"} />
                  <CustomSmallCard icon="/Assets/icon/Services/redis.svg" color={"#F77556"} name={"RediesDB"} />
                  <CustomSmallCard  icon="/Assets/icon/Services/Postgresql.svg" color={"#64BAFF"}name={"Postgresql"} />
                </CustomizedSteppers>
              </Box>
              <Box sx={{ width: "100%", padding: "15px 15px" }}>
                <ProgressCard />
              </Box>
            </Stack>
          </Box>
        </Box>
      </SideMenu>
    </Box>
  );
}

export default Dashboard; 
