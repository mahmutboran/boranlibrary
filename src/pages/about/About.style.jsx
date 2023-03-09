import styled from "styled-components";
import Flex from "../../styles/Flex";

export const AboutDiv = styled(Flex)`
  height: 80vh;
  flex-direction: column;
  line-height: 2;
  text-align: center;
`;
export const ProfileImg = styled.img`
  margin: 1rem 1rem;
  border-radius: 50%;
  height: 150px;
  filter: drop-shadow(-5px 10px 10px #666);
`;

export const InfoContainer = styled.div`
  margin: 0 1rem 1rem;
  width: 60%;
  border: 1px solid white;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const IconContainer = styled.div`
  margin: 1rem;
  a {
    color: gray;
    padding: 1rem;
  }
`;
