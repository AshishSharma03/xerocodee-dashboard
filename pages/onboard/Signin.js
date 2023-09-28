import React from "react";
import CenterBox from "../../components/CustomcenterBox";
import OnboardCard from "../../components/CustomOnboardCard";
import OnboardInput from "../../components/CustomOnboardCard/CustomInput";
import OnBoardButton from "../../components/CustomButton";

function Signin() {
  return (
    <CenterBox headtitle={"sign in"} >
        <OnboardCard href={"/onboard/Signup"} Link="Sign up" LinkText={"Don’t have an Account ?"}>
            <OnboardInput />
            <OnboardInput />
            <OnBoardButton text="Sign in" />
        </OnboardCard>
    </CenterBox>
  );
}

export default Signin;
