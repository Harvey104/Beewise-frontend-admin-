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
      <div className="w-100 v-center mt-small">
        <Button className="small-button hm" onClick={() => next(GAME_MODAL_STEP.CHOOSE_TEAM)}>Añadir seleccionados</Button>
      </div>
    </div>
  );
};

export default SuccessComponent;
