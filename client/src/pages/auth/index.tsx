import React, { useState } from "react";
import { MessIcon } from "../../config/commom/icon";
import FormAuth from "./container/Form";
import styled from 'styled-components';
import { COLOR } from "../../config/commom/color";

export default function AuthScreen() {
  const [loginForm, setLoginForm] = useState<boolean>(true);
  return (
    <Wrap>
      <Header>
        <div>
          <MessIcon />
        </div>
        <h1>{loginForm ? "Đăng nhập" : "Đăng ký"}</h1>
        <h4>
          {loginForm
            ? "Đăng nhập để chat ngay nào"
            : "Đăng ký để chat ngay nào"}
        </h4>
      </Header>
      <FormAuth/>
    </Wrap>
  );
}

const Wrap = styled.div`
  background: ${COLOR.HEXf7f7ff};
`
const Header = styled.div`
  text-align: center
`
