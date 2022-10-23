import React, { useState } from "react";
import { Typography } from 'antd';
import ReactInputVerificationCode from "react-input-verification-code";
import { Button , Col, Row, Input, Form } from 'antd';
import styled from "styled-components";

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;

const VerifyComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
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
      <div className="padding-small">
        <Row>
          <Col span={12}>
            <Button className="medium-button hm">Jugadores</Button>
            <Button className="medium-button hm">Añadir nuevo jugador</Button>
          </Col>
          <Col span={12}>
            <Search
                  className='mt-small hm'
                  placeholder="Busca un juego para visualizar resultados"
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
