import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input, Form } from 'antd';

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;

const SuccessComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  return (
    <div className="flex-column h-center">
      <img src="/img/icon/modal_success.png"/>
      <Text className="large-title">Competencia lista y cargada</Text>
      <Text className="medium-title">En la Biblioteca de juegos puedes revisar los detalles</Text>
    </div>
  );
};

export default SuccessComponent;
