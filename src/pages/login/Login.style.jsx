import styled from "styled-components";
export const LoginContainer = styled.div`
 background-image: url("https://picsum.photos/600/400");
 height: 100vh;
 background-repeat: no-repeat;
 background-size: cover;
 display: flex;
 justify-content: center;
 align-items: center;



`
export const LoginDiv = styled.div`

width: 70vh;
height: 70vh;
border-radius: 50%;
background-color: beige;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

`;

export const Header = styled.h1`
color: darkgrey;
font-size: 3rem;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const InputForm = styled.form`

display: flex;
flex-direction: column;
`

export const LoginInput  = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 15rem;
  border-radius: 5px;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 20px;
`

export const SubmitButton = styled.button`
font-size: 2rem;
border: none;
color: #29b154;
cursor: pointer;
background-color: white;
width: 15rem;
margin: 1rem;
height: 3rem;

`
