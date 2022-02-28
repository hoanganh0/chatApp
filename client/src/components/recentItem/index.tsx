import { FileImageOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import styled from "styled-components";
import { COLOR } from "../../config/commom/color";
import { LoadingDots } from "../../config/commom/icon";

interface IProps {
  avatar: string;
  name: string;
  lastMessage: string;
  time: string;
  type: "complete" | "typing" | "image";
  totalLastMessage?: number
}

export const RecentItem: React.FC<IProps> = (props) => {
  const { avatar, name, lastMessage, time, type, totalLastMessage } = props;
  return (
    <Wrap>
      <BoxAvatar>
        <Avatar src={avatar} style={{ width: 35, height: 35 }} />
      </BoxAvatar>
      <div>
        <Name>
          {name} <Time>{time}</Time>
        </Name>
        <BoxLastMessage>
          {type === "complete" && <p>{lastMessage}</p>}
          {type === "typing" && (
            <p>
              typing <LoadingDots />
            </p>
          )}
          {type === "image" && (
            <p>
              <FileImageOutlined /> images
            </p>
          )}
          {totalLastMessage && <TotalLastMessage>{totalLastMessage}</TotalLastMessage>}
        </BoxLastMessage>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div({
  display: "flex",
  padding: "15px 20px",
  color: COLOR.HEX7a7f9a,
  alignItems: "flex-end",
});
const BoxAvatar = styled.div({
  marginRight: 16,
});
const Name = styled.p({
  fontSize: 15,
  color: COLOR.HEX495057,
  fontWeight: 600,
  marginBottom: 4,
});
const Time = styled.span({
  marginLeft: "auto",
  fontSize: 11,
  color: COLOR.HEX7a7f9a,
});
const BoxLastMessage = styled.p({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});
const TotalLastMessage = styled.p({
  color: COLOR.HEXef476f,
  backgroundColor: "rgba(239,71,111,.18)",
  fontSize: 10,
  padding: "2.5px 6px",
  fontWeight: 600,
  borderRadius: "50rem"
})
