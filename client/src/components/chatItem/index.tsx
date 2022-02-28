import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { type } from "os";
import React from "react";
import styled from "styled-components";
import { COLOR } from "../../config/commom/color";

interface IProps {
  avatar: string;
  type: "left" | "right";
  name: string;
  content: {
    message: string;
    time: string;
  }[];
}

export const ChaltItem: React.FC<IProps> = (props) => {
  const { avatar, type, name, content } = props;

  return (
    <Wrap className={type === "right" ? "right" : ""}>
      <BoxAvatar className={type === "right" ? "right" : ""}>
        <Avatar src={avatar} style={{ width: 36, height: 36 }} />
      </BoxAvatar>
      <div>
        {content?.map((element, index) => {
          return (
            <ItemsMess
              key={index}
              className={type === "right" ? "right" : ""}
              style={{ marginTop: index > 0 ? 24 : 0 }}
            >
              <TextMess>{element.message}</TextMess>
              <Time className={type === "right" ? "right" : ""}>
                <ClockCircleOutlined /> {element.time}
              </Time>
              <BeforeMess
                style={type === "right" ? BeforeMessRight : {}}
              ></BeforeMess>
            </ItemsMess>
          );
        })}
        <Name className={type === "right" ? "right" : ""}>{name}</Name>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div({
  display: "flex",
  marginBottom: 24,
  alignItems: "flex-end",
  "&.right": {
    justifyContent: "flex-end",
  },
});
const BoxAvatar = styled.div({
  marginRight: 16,
  "&.right": {
    marginLeft: 16,
    order: 2,
  },
});

const ItemsMess = styled.div({
  padding: "12px 20px",
  backgroundColor: COLOR.HEX7269ef,
  borderRadius: "8px 8px 8px 0",
  color: COLOR.HEXffffff,
  position: "relative",
  "&.right": {
    backgroundColor: COLOR.HEXf5f7fb,
    color: COLOR.HEX343a40,
    textAlign: "right",
    borderRadius: "8px 8px 0 8px",
  },
});

const BeforeMess = styled.div({
  position: "absolute",
  borderColor: `${COLOR.HEX7269ef} transparent transparent ${COLOR.HEX7269ef}`,
  borderStyle: "solid",
  borderWidth: "5px",
  left: 0,
  right: "auto",
  bottom: "-10px",
});

const BeforeMessRight = {
  borderColor: `${COLOR.HEXf5f7fb} ${COLOR.HEXf5f7fb} transparent transparent`,
  left: "auto",
  right: 0,
};

const TextMess = styled.p({
  fontSize: 15,
});

const Time = styled.p({
  fontSize: 12,
  marginTop: 4,
  textAlign: "right",
  color: COLOR.HEXffffff7a,
  "&.right": {
    color: COLOR.HEX7a7f9a
  },
});

const Name = styled.p({
  fontSize: 14,
  marginTop: 10,
  "&.right": {
    textAlign: "right",
  }
});
