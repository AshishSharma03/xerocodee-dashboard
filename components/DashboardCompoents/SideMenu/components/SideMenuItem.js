import React, { useState } from 'react'
import {
    Box,
    Menu,
    MenuItem,
    MenuList,
    Stack,
    Typography,
  } from "@mui/material";
import theme from '../../../../themeRegistery/theme';
import IconBox from './IconBox';


export const  DasboardMenu = [
    {
      id: "#1",
      lebel: "XeroCodee",
      icon: "Grid",
    },
    {
      id: "#2",
      lebel: "Builder Center",
      icon: "Layers",
    },
    {
      id: "#3",
      lebel: "Service Board",
      icon:"ServiceBoard",
    },
    {
      id: "#4",
      lebel: "Clusters",
      icon: "Cluster",
    },
    {
      id: "#5",
      lebel: "Databases ",
      icon: "database",
    },
    {
      id: "#6",
      lebel: "Environment ",
      icon: "HardDrive",
    },
    {
      id: "#7",
      lebel: "Workflow",
      icon: "WorkfLow",
    },
    {
      id: "#8",
      lebel: "Monitoring",
      icon: "monitoring",
    },
    {
      id: "#9",
      lebel: "Security ",
      icon: "security",
    },
    {
      id: "#10",
      lebel: "Web Hooks",
      icon: "webhook",
    },
    {
      id: "#11",
      lebel: "Log Error",
      icon: "LogError",
    },
  ];
  

function SideMenuItem() {
  const [MenuActive,setMenuActive] = useState(DasboardMenu[0].id)
  return (
    <MenuList
    sx={{
      display: { lg: "flex", md: "none", sm: "none", xs: "none" },
      flexDirection: "column",
      gap: 1,
    }}
  >
    {DasboardMenu.map((a) => {
      return (
        <Box
          key={a.id}
          sx={{
            padding: "0px 20px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component={"span"}
            sx={{
              position: "absolute",
              display: a.id === MenuActive ? "flex" : "none",
              width: "30px",
              padding: "5px",
              background: "#fff",
              right: 0,
            }}
          />

          <MenuItem 
            onClick={()=>{setMenuActive(a.id)}}
            sx={{
              boxShadow:
                a.id === MenuActive
                  ? "5px 5px 10px 0px rgba(0, 0, 0, 0.10)"
                  : "",
              padding: "10px 30px",
              borderRadius: "50px",
              background: a.id === MenuActive ? "#fff" : "",
              width: "100%",
              "&:hover": { background: "#fff" },
              display: "flex",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <IconBox
                icon={a.icon}   
                fill={(a.id ===MenuActive )? theme.palette.primary.main : "#000"}
              
            />
            <Box component={"span"} sx={{ flex: 1 }} />
            <Typography
              sx={{
                color:
                  a.id === MenuActive ? theme.palette.primary.main : "#000",
                textAlign: "left",
                fontSize: "15px",
                width: "70%",
              }}
            >
              {a.lebel}
            </Typography>
          </MenuItem>
        </Box>
      );
    })}
  </MenuList>
  )
}

export default SideMenuItem