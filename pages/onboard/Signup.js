import React, { Children, useEffect, useState } from "react";
import CenterBox from "../../components/CustomcenterBox";
import OnboardCard from "../../components/CustomOnboardCard";
import OnboardInput from "../../components/CustomOnboardCard/CustomInput";
import OnBoardButton from "../../components/CustomButton";
import SocialButton from "../../components/CustomOnboardCard/CustomSocialButton";
import { signIn, signOut, useSession } from "next-auth/react";
import { Stack, Typography, IconButton, Alert, CircularProgress, Input, Box, Button } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LoadingScreen from "../../components/CoreAssets/LoadingScreen";
import { useRouter } from "next/navigation";
import { Router } from "next/router";


 function isGoogleEmail(email) {
    const [localPart, domainPart] = email.split('@');
    const isGoogleDomain = domainPart === 'gmail.com' || domainPart === 'googlemail.com';
    return isGoogleDomain;
  }  

  function generateOTP() {

    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
  }

  async function sendAuthorizationEmail(email, otp) {
    // Implement your email sending logic here
    // Use a library like nodemailer to send emails
    const transporter = nodemailer.createTransport({
  
      service: 'your_email_service_provider',
      auth: {
        user: 'your_email_username',
        pass: 'your_email_password',
      },
    });
  
    // Email content (subject, body)
    const mailOptions = {
      from: 'your_email_username',
      to: email,
      subject: 'Authorization OTP',
      text: `Your OTP for authorization: ${otp}`,
    };
  
    await transporter.sendMail(mailOptions);
  }

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
  const[wait,setWait] = useState(false)
  const [InputOtp,setInputOtp] = useState();
  const [Otpbverify,setOtpbverify] = useState(false);
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
    },6000)

    
},)

if (loading) {
  return <LoadingScreen/>
}

  const handelRegisterd = async () =>{

    if(isGoogleEmail(emailID)){
      
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
        

        if(res.status === 200){
          setAlertMsg(true)
          setWait(false)
          setMsg( {color:"success",msg:"User succesfully registerd"})
          const otp = generateOTP();
          // await sendAuthorizationEmail(emailID, otp);
          // setOtpbverify(true)
          // if(otp === InputOtp){
            router.push('/onboard/YourRole')
            signIn('credentials',res.data)
          // }else{
            
          // }
          

        }
        if(res.status === 400){
          setAlertMsg(true)
          setWait(false)
          setMsg( {color:"warning",msg:"User already registerd"})
        }
      }catch(error){
        setWait(false)
        console.log(error)
      }
    }else{
      setWait(false)
      setAlertMsg(true)
      setMsg( {color:"error",msg:"Email not valid!"})
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
        setWait(true)
        handelRegisterd()
    }
  };

  return (
    <CenterBox headtitle={"sign up"} >
       {Otpbverify?
      <Box sx={{position:"absolute",background:"#fff",flexDirection:"column",display:"flex",gap:1,boxShadow:"0px 10px 100px 0px rgba(0,0,0,0.2)",borderRadius:"10px",top:"10px",padding:"20px",zIndex:99}}>
        <Typography sx={{color:"green"}}>Verify Your Account</Typography>
        <Input placeholder="OTP Code" />
        <Button sx={{background:"green",color:"#fff",'&:hover':{color:"green"}}}>Verify</Button>
      </Box>:""  
      }
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
        <OnBoardButton disable={wait}  text={ wait?<CircularProgress size="25px" thickness={7} sx={{color:"#fff"}} />:"Sign up" } onClick={Validate} />
      </OnboardCard>
    </CenterBox>
  );
}

export default Signin;
