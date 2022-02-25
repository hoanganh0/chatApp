import React, { useState } from "react";
import { MessageOutlined } from "@ant-design/icons";
import { FormAuth } from "./container/Form";
import styled from "styled-components";
import { COLOR } from "../../config/commom/color";
import { Link } from "react-router-dom";

export default function AuthScreen() {
  const [loginForm, setLoginForm] = useState<boolean>(true);
  return (
    <Wrap>
      <Inner>
        <Header>
          <div>
            <MessageOutlined style={{ color: COLOR.HEX7269ef, fontSize: 40 }} />
          </div>
          <H4>{loginForm ? "Đăng nhập" : "Đăng ký"}</H4>
          <P>
            {loginForm
              ? "Đăng nhập để chat ngay nào"
              : "Đăng ký để chat ngay nào"}
          </P>
        </Header>
        <FormAuth statusForm={loginForm} />
        <SwitchForm>
          <p>
            Bạn {loginForm ? "chưa" : "đã"} có tài khoản?{" "}
            <TextLink onClick={() => setLoginForm(loginForm ? false : true)}>
              {loginForm ? "Đăng ký" : "Đăng nhập"} ngay
            </TextLink>{" "}
            
          </p>
        </SwitchForm>
      </Inner>
    </Wrap>
  );
}

const Wrap = styled.div`
  background: ${COLOR.HEXf7f7ff};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Inner = styled.div`
  width: 100vw;
`;
const Header = styled.div`
  text-align: center;
`;
const H4 = styled.h4`
  color: ${COLOR.HEX495057};
  margin-bottom: 0;
  font-weight: 600;
  font-size: calc(1.25625rem + 0.075vw);
  margin-top: 30px;
`;
const P = styled.p`
  color: ${COLOR.HEX7a7f9a};
  margin-bottom: 30px;
`;
const SwitchForm = styled.div`
  text-align: center;
  margin-top: 30px;
`;
const TextLink = styled.span`
  color: ${COLOR.HEX7269ef};
  cursor: pointer;
`
