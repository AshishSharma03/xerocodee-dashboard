import React, { Children, useEffect, useState } from "react";
import CenterBox from "../../components/CustomcenterBox";
import OnboardCard from "../../components/CustomOnboardCard";
import OnboardInput from "../../components/CustomOnboardCard/CustomInput";
import OnBoardButton from "../../components/CustomButton";
import SocialButton from "../../components/CustomOnboardCard/CustomSocialButton";
import { signIn, useSession } from "next-auth/react";
import { Stack, Typography, IconButton, Alert } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LoadingScreen from "../../components/CoreAssets/LoadingScreen";
import { useRouter } from "next/navigation";
export const ErrorWRapper = ({ msg, children }) => {
  return (
    <Stack>
      {children}
      <Typography sx={{ fontSize: "12px", color: "red", padding: "0px 10px" }}>
        {msg}
      </Typography>
    </Stack>
  );
};

function Signin() {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [emailID, setEmailID] = useState();
  const [ErrorMsg, setErrorMsg] = useState({ index: 0, msg: "" });
  const [visible, setVisible] = useState(false);
  const [ConfirmVisible, setConfirmVisible] = useState(false);
  const [loading, setLoading] = useState(true)
  const [Msg,setMsg] = useState({color:"",msg:""});
  const [AlertMsg,setAlertMsg] = useState(false);
  const { data : session,status} = useSession()
  const router = useRouter()
  
  useEffect(()=>    {

    console.log(status)
    if( status === 'authenticated'  ){
        router.push('/onboard/YourRole')
    }
  },[status])


  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
    setTimeout(()=>{
      setAlertMsg(false)
    },5000)

    
},)

if (loading) {
  return <LoadingScreen/>
}

  const handelRegisterd = async () =>{

      try{
         const res = await fetch("/api/users/register",{
          method :"POST",
          headers:{"Content-Type":"application/json"},
          body : JSON.stringify({
             FirstName,
             LastName,
             emailID,
             Password,}
          )
        })
       
        if(res.ok){
          setMsg( {color:"success",msg:"User succesfully registerd"})
        }
        if(res.status === 400){
          setAlertMsg(true)
          setMsg( {color:"warning",msg:"User already registerd"})
        }
      }catch(error){
        console.log(error)
      }

  }

  const Validate = () => {
   
    var VirfyEm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let PasswordVarify =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
    if (!FirstName) {
      setErrorMsg({ index: 1, msg: "First Name is required!" });
    } else if (FirstName.length <= 1) {
      setErrorMsg({ index: 1, msg: "First Name should be > 1" });
    } else if (!LastName) {
      setErrorMsg({ index: 2, msg: "Last Name is required!" });
    } else if (LastName.length <= 1) {
      setErrorMsg({ index: 2, msg: "Last Name should be > 1" });
    } else if (!emailID) {
      setErrorMsg({ index: 3, msg: "Email is required!" });
    } else if (!VirfyEm.test(emailID)) {
      setErrorMsg({ index: 3, msg: "Email not valid!" });
    } else if (!Password) {
      setErrorMsg({ index: 4, msg: "Password is required" });
    } else if (!PasswordVarify.test(Password)) {
      setErrorMsg({
        index: 4,
        msg: "must be >= 8 to 16 and at least one [A-Z],[a-z],[0-9] and [Symbol]",
      });
    } else if (!ConfirmPassword) {
      setErrorMsg({ index: 5, msg: "Confirm Password is required" });
    } else if (ConfirmPassword != Password) {
      setErrorMsg({ index: 5, msg: "Confirm Password not equal to password" });
    }else{
        setErrorMsg(false)
        handelRegisterd()
    }
  };

  return (
    <CenterBox headtitle={"sign up"} >
      
      <OnboardCard
        href={"/onboard/Signin"}
        HigliteMsg={"Hello !"}
        descMsg={"Create Your Account"}
        Link="Sign in"
        LinkText={"Already Have An Account ? "}
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
                signIn("github");
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
        <ErrorWRapper msg={ErrorMsg.index === 1 ? ErrorMsg.msg + "*" : ""}>
          <OnboardInput error={ErrorMsg.index === 1? true :""}
            placeholder={"First Name"}
            type={"text"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </ErrorWRapper>
        <ErrorWRapper msg={ErrorMsg.index === 2 ? ErrorMsg.msg + "*" : ""}>
          <OnboardInput error={ErrorMsg.index === 2? true :""}
            placeholder={"Last Name"}
            type={"text"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </ErrorWRapper>
        <ErrorWRapper msg={ErrorMsg.index === 3 ? ErrorMsg.msg + "*" : ""}>
          <OnboardInput error={ErrorMsg.index === 3? true :""}
            placeholder={"Email-ID"}
            type={"text"}
            onChange={(e) => {
              setEmailID(e.target.value);
            }}
          />
        </ErrorWRapper>
        <ErrorWRapper msg={ErrorMsg.index === 4 ? ErrorMsg.msg + "*" : ""}>
          <OnboardInput error={ErrorMsg.index === 4? true :""}
            placeholder={"Password"}
            type={visible ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            endAdornment={
              <IconButton
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
              </IconButton>
            }
          />
        </ErrorWRapper>
        <ErrorWRapper msg={ErrorMsg.index === 5 ? ErrorMsg.msg + "*" : ""}>
          <OnboardInput error={ErrorMsg.index === 5? true :""}
            placeholder={"Confirm Password"}
            type={ConfirmVisible ? "text" : "password"}
            endAdornment={
              <IconButton
                onClick={() => {
                  setConfirmVisible(!ConfirmVisible);
                }}
                size="small"
              >
                {ConfirmVisible ? (
                  <RemoveRedEyeOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            }
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </ErrorWRapper>
        <OnBoardButton text="Sign up" onClick={Validate} />
      </OnboardCard>
    </CenterBox>
  );
}

export default Signin;
