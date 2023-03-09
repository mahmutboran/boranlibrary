import React, { useState } from "react";
import { HomeDiv, HomeImg, MainDiv } from "./Home.style";
import homeImg from "../../assets/books.jpg";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import axios from "axios";
const Home = () => {
  // const printType = ["all","books","magazines"]
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);
  const APP_KEY = process.env.REACT_APP_apiKey;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setMyData(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HomeDiv>
      <Header
        setQuery={setQuery}
        setSelectType={setSelectType}
        getData={getData}
      />

      {!myData.length ? (
        <HomeImg>
          <img src={homeImg} alt="homeImg" />
        </HomeImg>
      ) : (
        <MainDiv wrap="wrap">
          {myData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </MainDiv>
      )}
    </HomeDiv>
  );
};

export default Home;
