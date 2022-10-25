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
    <div className="flex-column v-between" style={{width: "90%"}}>
      <div>
        <Text className="large-title">Resumen Competencia</Text>
        <Text className="medium-title mt-bit">Aqui puedes visualizar los datos generales del juego</Text>
      </div>
      <Row>
        <Col></>
      </Row>
      <div></div>
    </div>
  );
};

export default GameCompleteComponent;
