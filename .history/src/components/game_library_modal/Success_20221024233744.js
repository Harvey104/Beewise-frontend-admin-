import React, { useState } from "react";
import { Typography } from 'antd';
import { Button } from 'antd';

const { Text } = Typography;

const SuccessComponent = (props) => {
  const next = props.next;
  return (
    <div className="h-center" style={{height: "100%"}}>
      <div className="flex-column h-center">
        <img src="/img/icon/modal_success.png"/>
        <Text className="large-title mt-small">Competencia lista y cargada</Text>
        <Text className="medium-title">En la Biblioteca de juegos puedes revisar los detalles</Text>
        <div className="w-100 v-center mt-small">
          <Button className="bit-button hm" onClick={() => next()}>Ir a Biblioteca de juegos</Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessComponent;
