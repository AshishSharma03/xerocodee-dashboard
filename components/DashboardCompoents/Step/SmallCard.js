import * as React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import theme from "../../../themeRegistery/theme";
import CircleIcon from "@mui/icons-material/Circle";
import CachedIcon from "@mui/icons-material/Cached";

const SmallCardButton = styled(Card)({
  width: "220px",
  height: "100px",
  boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, 0.10)",
  borderRadius: " 15px",
  border: " 1px solid #F3F3F4",
  position: "relative",
});

function hexToRgba(hexColor, alpha) {
  const hexNumber = parseInt(hexColor?.substring(1), 16);
  const red = (hexNumber >> 16) & 0xFF;
  const green = (hexNumber >> 8) & 0xFF;
  const blue = hexNumber & 0xFF;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}


function CustomSmallCard({ name, icon, color, border }) {

  return (
    <SmallCardButton>
      <Stack
        direction={"row"}
        sx={{
          height: "100%",
          width: "100%",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ flex: 1, fontWeight: "700", fontSize: {lg:"20px",md:"15px",sm:"13px",xs:"10px"} }}>
          {name}
        </Typography>
        <Box
          sx={{
            border: `1px solid ${color}`,
            background: hexToRgba(color,0.2),
            borderRadius: "15px",
            width: "70px",
            height: "70px",
            display:'flex',
            justifyContent:'center',
            alignItems:"center"
            
          }}
        >
          <Box 
            component={"img"}
            src={icon}
            sx={{width:"70%"}}
          />
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        gap={"5px"}
        alignItems={"center"}
        sx={{ position: "absolute", bottom: "10px", left: "19px", zIndex: 99 }}
      >
        <CircleIcon sx={{ color: "#D12223", fontSize: "10px" }} />
        <CircleIcon sx={{ color: "#34A853", fontSize: "10px" }} />
        <IconButton size="small">
          <CachedIcon sx={{ color: "#000", fontSize: "10px" }} />
        </IconButton>
      </Stack>
    </SmallCardButton>
  );
}

export default CustomSmallCard;
