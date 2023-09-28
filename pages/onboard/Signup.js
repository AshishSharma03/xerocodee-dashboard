  import React from "react";
  import CenterBox from "../../components/CustomcenterBox";
  import OnboardCard from "../../components/CustomOnboardCard";
  import OnboardInput from "../../components/CustomOnboardCard/CustomInput";
  import OnBoardButton from "../../components/CustomButton";
  
  function Signin() {
    return (
      <CenterBox headtitle={"sign up"} >
          <OnboardCard href={"/onboard/Signin"} Link="Sign in" LinkText={"Already Have An Account ? "}>
              <OnboardInput />
              <OnboardInput />
              <OnboardInput />
              <OnboardInput />
              <OnboardInput />
              <OnBoardButton text="Sign up" />
          </OnboardCard>
      </CenterBox>
    );
  }
  
  export default Signin;
  