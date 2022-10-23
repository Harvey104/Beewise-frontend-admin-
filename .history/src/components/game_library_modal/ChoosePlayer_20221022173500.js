import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input } from 'antd';

import { GAME_MODAL_STEP } from "../../constant";
const { Search } = Input;

const { Text, Link } = Typography;

const VerifyComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const onSearch = (value) => console.log(value);
  return (
    <div className="panel" 
      style={{
        paddingLeft: "65px",
        paddingRight: "65px",
      }}
    >
      <div className='panel padding-small large-title pv-medium color-w'
        style={{
          height: "100%",
          borderRadius: "10px 10px 0px 0px",
          background: "#6A67CE",
        }}
      >
        Elige a los jugadores de esta competencia
      </div>
      <div className="padding-small h-center">
        <Row>
          <Col span={12}>
            <Button className="small-button hm">Jugadores</Button>
            <Button className="small-button hm">Añadir nuevo jugador</Button>
          </Col>
          <Col span={12}>
            <Search
              className='hm'
              placeholder="Ingresa nombre ,email del jugador o departamento"
              allowClear
              onSearch={onSearch}
              style={{
                  width: "50%",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default VerifyComponent;
