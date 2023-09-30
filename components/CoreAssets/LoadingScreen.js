import { Box, LinearProgress } from '@mui/material'
import React, { useEffect ,useState,useRef} from 'react'
import Logo from './Logo'

function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);
  
    const progressRef = useRef(() => {});
    useEffect(() => {
        progressRef.current = () => {
          if (progress > 100) {
            setProgress(0);
            setBuffer(10);
          } else {
            const diff = Math.random() * 10;
            const diff2 = Math.random() * 10;
            setProgress(progress + diff);
            setBuffer(progress + diff + diff2);
          }
        };
      });
    
        useEffect(()=>{
            const timer = setInterval(() => {
                progressRef.current();
              }, 50);
          
              return () => {
                clearInterval(timer);
              };
        },[])

  return (
    <Box minHeight={"100vh"} sx={{display:"flex",justifyContent:'center',alignItems:"center",flexDirection:"column"}}>
            <Logo/>
            <LinearProgress sx={{width:"200px"}} variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
  )
}

export default LoadingScreen