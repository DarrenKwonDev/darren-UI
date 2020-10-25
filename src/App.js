import React from "react";
import Button from "./Component/Button";
import Card from "./Component/Card/index";
import Header from "./Component/Header";
import Input from "./Component/Input";
import LoginButton from "./Component/LoginButton";
import Tag from "./Component/Tag";
import TextArea from "./Component/TextArea";
import GlobalStyle from "./Style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Card
        Name={"[한정판] 코로나 마스크"}
        Owner={"(주)플래텀"}
        Category={"생활용품"}
        Score={4.9}
        Price={10000}
        isLiked={false}
      />
      <Button text="로그인" primary />
      <Button text="회원가입" />
      <Button text="disable" disabled />
      <LoginButton provider="google" text="구글 계정으로 로그인" />
      <LoginButton provider="apple" text="애플 계정으로 로그인" />
      <Tag text="티셔츠" />
      <Tag text="에코백" />
      <Input placeholder="이메일을 입력해주세요" name="이메일" />
      <Input />
      <TextArea placeholder="제품상세를 입력해주세요" name="제품상세" />
    </>
  );
}

export default App;
