import React, { useEffect, useState } from "react";
import CenterBox from "../../components/CustomcenterBox";
import OnboardCard from "../../components/CustomOnboardCard";
import OnboardInput from "../../components/CustomOnboardCard/CustomInput";
import OnBoardButton from "../../components/CustomButton";
import {  useSession } from "next-auth/react";
import { useRouter } from "next/router";
import SocialButton from "../../components/CustomOnboardCard/CustomSocialButton";
import { signIn } from "next-auth/react";
import { ErrorWRapper } from "./Signup";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {  Alert, Button, CircularProgress, IconButton, Typography } from "@mui/material";
import axios from "axios";
import LoadingScreen from "../../components/CoreAssets/LoadingScreen";

function Signin() {
  const { data : session,status} = useSession()
  const [email,setEmail]= useState()
  const [password,setpassword]= useState()
  const [visible, setVisible] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState({ index: 0, msg: "" });
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [Msg,setMsg] = useState({color:"",msg:""});
  const [AlertMsg,setAlertMsg] = useState(false);
  const[wait,setWait] = useState(false)
  
  useEffect(()=>    {

    console.log(status)
    if( status === 'authenticated'){
      router.push('/')
    }
  },[status])

  useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },1000)
      setTimeout(()=>{
        setAlertMsg(false)
      },7000)
  
  },)
 
  if (loading) {
    return <LoadingScreen/>
  }

 

  const handleLogin = async ()=>{
    var VirfyEm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email) {
      setErrorMsg({ index: 1, msg: "Email is required!" });
    } else if (!VirfyEm.test(email)) {
      setErrorMsg({ index: 1, msg: "Email not valid!" });
    } else if (!password) {
      setErrorMsg({ index: 2, msg: "password is required" });
    } else{
      setErrorMsg({index:0,msg:""})
      setWait(true)
      try{
         
          const res = await axios.post('/api/users/login',{email,password})
          if(res.status === 200){
            setWait(false)
            setAlertMsg(true)
            setMsg( {color:"success",msg:"Login successfull!"})
            signIn('credentials',res.data)
          }
        }catch(error){
          if(error.response.status === 401){
            setAlertMsg(true)
              setMsg( {color:"error",msg:"Invalid email or password!"})
              setWait(false)
            }
          }
    }
    
  }

  const onSubmit = async ({ team }) => {

    const organization = 'org_01HBNABT4APDDB3F1DPGX5PDHA';
    signIn('workos', undefined, {
      organization,
    });
  };

  return (
    <CenterBox headtitle={"sign in"}>
      <OnboardCard
        href={"/onboard/Signup"}
        Link="Sign up"
          HigliteMsg={"Welcome Back !"}
          descMsg={"Logn in to Your Account"}
        LinkText={"Don’t have an Account ?"}
        socialButtons={
          <>
            <SocialButton
              onClick={() => {
                signIn("google");
              }}
              text={"Sign Up With Google"}
              srcicon={"/Assets/icon/google.ico"}
            />
            <SocialButton
              onClick={() => {
                signIn('github');
              }}
              text={"Sign Up With Github"}
              srcicon={"/Assets/icon/Github.ico"}
            />
          </>
        }
      >
        {(AlertMsg)?<Alert variant="outlined" color={Msg.color}>
        {Msg.msg}
      </Alert>:"  "}
        <ErrorWRapper  msg={ErrorMsg.index === 1 ? ErrorMsg.msg + "*" : ""}>
        <OnboardInput  error={ErrorMsg.index === 1?true:""} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Email"/>
        </ErrorWRapper>
        <ErrorWRapper msg={ErrorMsg.index === 2 ? ErrorMsg.msg + "*" : ""}>

        <OnboardInput error={ErrorMsg.index === 2?true:""} onChange={(e)=>{setpassword(e.target.value)}} endAdornment={<IconButton
                onClick={() => {
                  setVisible(!visible);
                }}
                size="small"
                >
                {visible ? (
                  <RemoveRedEyeOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>} placeholder={"password"}
         
         type={visible ? "text" : "password"}/>
         </ErrorWRapper>
        <OnBoardButton  disable={wait} text={ wait?<CircularProgress size="25px"  thickness={7} sx={{color:"#fff"}} />:"Sign in"} onClick={handleLogin} />
        <Button onClick={onSubmit} >Login With SSO</Button>
      </OnboardCard>
    </CenterBox>
  );
}



export default Signin;

