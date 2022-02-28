import React, { useState } from "react";
import styled from "styled-components";
import { ChaltItem } from "../../components/chatItem";
import { RecentItem } from "../../components/recentItem";
import { COLOR } from "../../config/commom/color";

export default function HomeScreen() {
  const [content, setContent] = useState([
    {
      message: "Yeah everything is fine",
      time: "10:05",
    },
    {
      message: "& Next meeting tomorrow 10.00AM",
      time: "10:05",
    },
    {
      message: "Yeah everything is fine",
      time: "10:05",
    },
    {
      message: "& Next meeting tomorrow 10.00AM",
      time: "10:05",
    },
  ]);
  return (
    <div>
      {/* <ChaltItem
        avatar={"https://joeschmoe.io/api/v1/random"}
        type={"right"}
        name={"Hoang Anh"}
        content={content}
      /> */}
      {/* <RecentItem
        avatar={"https://joeschmoe.io/api/v1/random"}
        name={"Hoang Anh"}
        lastMessage={"chao buoi sang"}
        time={"10:10"}
        type={"complete"}
        totalLastMessage={2}
      /> */}
      <Navbar></Navbar>
      <div></div>
      <div></div>
    </div>
  );
}

const Navbar = styled.div({
  minWidth: 75,
  maxWidth: 75,
  height: "100vh",
  minHeight: 570,
  backgroundColor: COLOR.HEXffffff,
  display: "flex",
  zIndex: 9,
  boxShadow: "0 2px 4px rgb(15 34 58 / 12%)",
  marginRight: 4
})
