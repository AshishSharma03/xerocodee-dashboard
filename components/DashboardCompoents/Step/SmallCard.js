import React, { useContext, useEffect, useState }  from "react";
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
import { StepCardProgress } from "../context/XerocodeContext/StepProgressProvider";







const SmallCardButton = styled(Card)(({ clickedbutton}) => ({
  width: "220px",
  height: "100px",
  boxShadow:clickedbutton === 'true'?"none":  "5px 5px 10px 0px rgba(0, 0, 0, 0.10)",
  borderRadius: " 15px",
  border: clickedbutton === 'true' ? "2px solid #FC9512" :" 2px solid #F3F3F4",
  position: "relative",
  '&:hover':{
    border: clickedbutton === 'true' ? "2px solid #FC9512" :`2px solid ${theme.palette.primary.main}`,
    
  },
  '&:active':{
    border: `2px solid green`,
    boxShadow: "none" 
  },
  
}));

function hexToRgba(hexColor, alpha) {
  const hexNumber = parseInt(hexColor?.substring(1), 16);
  const red = (hexNumber >> 16) & 0xFF;
  const green = (hexNumber >> 8) & 0xFF;
  const blue = hexNumber & 0xFF;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}


function CustomSmallCard({ name, icon, color,step }) {
  const [IconButtonclicked, setIconButtonClicked] = useState(false);
  const {StepProgessItems,setSteProgressItems,setProgressStatus}  = useContext(StepCardProgress)
  useEffect(()=>{
    setTimeout(()=>{
      setIconButtonClicked(false) 
    },1000)
  },)

  const handleIconButtonClick = (e) => {
    e.stopPropagation();
    setIconButtonClicked(true);
    setProgressStatus('Progress..')
  };



  const handleStepAdd=()=>{
      if(step === 0){
        setSteProgressItems([{id:step,name:name,icon:icon,color:color}])
      }
      if(step === 1){
        if(!StepProgessItems[1]){
          setSteProgressItems([ ...StepProgessItems ,{id:step,name:name,icon:icon,color:color}])
        }else{
          const NewItem = StepProgessItems.filter((a)=> a.id === 0 )
          setSteProgressItems([ ...NewItem ,{id:step,name:name,icon:icon,color:color}])
          
        }
      }
      if(step === 2){
        if(!StepProgessItems[2]){
          setSteProgressItems([ ...StepProgessItems ,{id:step,name:name,icon:icon,color:color}])
        }else{
          const NewItem = [StepProgessItems[0],StepProgessItems[1]]
          setSteProgressItems([ ...NewItem ,{id:step,name:name,icon:icon,color:color}])
          
        }
      }
      setProgressStatus('Progress..')
  }  


  return (
  
    <SmallCardButton  onClick={handleStepAdd}   clickedbutton={IconButtonclicked.toString()}>
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
        
        <IconButton size="small" disabled={IconButtonclicked} onClick={handleIconButtonClick}   >
          <CachedIcon sx={{ color:IconButtonclicked?"#A4A4A4":"#000", fontSize: "10px" }} />
        </IconButton>
      </Stack>
 
    </SmallCardButton>
  );
}

export default CustomSmallCard;
