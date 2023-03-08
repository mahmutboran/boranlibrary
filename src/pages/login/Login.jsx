import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  InputForm,
  LoginContainer,
  LoginDiv,
  LoginInput,
  SubmitButton,
} from "./Login.style";

const Login = ({setStorageUser }) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/");
    setStorageUser(JSON.parse(sessionStorage.getItem("user")))
  };

  return (
    <LoginContainer>
      <LoginDiv>
        <Header>Login</Header>
        <InputForm onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            placeholder="Enter userName"
            required
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
          <LoginInput
            type="text"
            placeholder="Enter password"
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </InputForm>
      </LoginDiv>
    </LoginContainer>
  );
};

export default Login;
