
import styled from "styled-components"
import Head from 'next/head'
import { Button } from '@mui/material'
import {auth, provider} from '../firebase' 
import { signInWithPopup } from 'firebase/auth'
function Login() {
  const SignIn = () =>{
    signInWithPopup(auth, provider).then(
      () => {

      }
    ).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
     console.log(errorCode);
    })
  }
  return (
    <Container>
            <Head>
            <title> Login</title>
            </Head>
      
         <LoginContainer>
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" />
            <Button onClick={SignIn} variant='outline'>Sign in with Google</Button>
         </LoginContainer>
    </Container>
  )
}

export default Login
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  flex-direction: column;
  align-items:center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;
const Logo= styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`