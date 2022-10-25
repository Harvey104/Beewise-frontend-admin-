import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input, Form } from 'antd';
import QRCode from "react-qr-code";
import styled from "styled-components";

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;

const GameCompleteComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  return (
    <div className="flex-column " style={{width: "90%"}}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default GameCompleteComponent;
