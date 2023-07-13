// Material ui use kariki sabu karihaba jadi tapare bi css ta pare add karibara achi then dekha
// Ame Box import kariki Box use karile but amaku Box re css add karibara achi then const Component gote baneiki styled import kariki const Component=styled(Box)`width:400px` deipariiba and Box tag ku hateiki sethi Component tag lageile sethire Box tag with css add heijiba
import React, { useState } from "react";
// Amara 2 ta achi jadi already account achi ta paien alga auu jahara nahin ta paien alga scene so ame state lageiba 2 ta bhitaru ote darkar na
import { Box, TextField, Button, styled, Typography } from "@mui/material";
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;
const Image = styled("img")({
  // Sabu string guda '' bhitare rahiba
  width: 100,
  margin: "auto",
  padding: "50px",
}); //Ethi img gotw functin type ra define hauchi ame Box ku define karithile img ku style kariba paien Const Image = styled('img')({borderRight:2px solid black}) emti lekhibaku padiba

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  border-radius: 2px;
  color: white;
  background-color: orange;
`;
const SignupButton = styled(Button)`
  text-transform: none;
  text-align: center;
  height: 48px;
  color: #2870f0;
  background-color: #fff;
  border-radius: 2px;
  border: 0px solid black;
  box-shadow: 0 20x 4px 0 rgb(0 0 0/ 20%);
`;
// inlineCss lageiba paien styled(Box)`& >`  & > tapare amara main element hela div karana ame sina material ui dwara kama kariche seta but div element tara root ta button bi sethire css pakeipariba inline

const Login = () => {
  const [account, setAccount] = useState("Login");
  const toggleSignup = () => {
    account === "signup" ? setAccount("login") : setAccount("signup");
  };
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  return (
    <>
      <Component>
        <Box>
          <img src={imageURL} alt="Image" />
          {account === "Login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter User Name" />
              <TextField variant="standard" label="Enter Password" />
              <LoginButton variant="contained">Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <SignupButton onClick={() => toggleSignup()}>
                {" "}
                Create an account
              </SignupButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" label="Enter Your Name" />
              <TextField variant="standard" label="Create UserName" />
              <TextField variant="standard" label="Create Password" />
              <SignupButton variant="contained">Signup</SignupButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <LoginButton variant="contained" onClick={() => toggleSignup()}>
                Already have account
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </>
  );
};
export default Login;
