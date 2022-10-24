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
        height: "100%",
      }}
    >
      <div className='panel padding-small large-title pv-medium color-w'
        style={{
          borderRadius: "10px 10px 0px 0px",
          background: "#6A67CE",
        }}
      >
        Elige a los jugadores de esta competencia
      </div>
      <div className="padding-small">
        <Row>
          <Col span={12}>
            <Button className="small-button hm">Jugadores</Button>
            <Button className="small-button hm ml-bit">Añadir nuevo jugador</Button>
          </Col>
          <Col span={12}>
            <Search
              className='hm'
              placeholder="Ingresa nombre ,email del jugador o departamento"
              allowClear
              onSearch={onSearch}
              style={{
                  width: "100%",
              }}
            />
          </Col>
        </Row>
      </div>
      <div style={{
        height: "calc(100% - 70px)",
      }}>
        <Row>
          <Col>
            <Table
              columns={competationColumn}
              dataSource={competationData}
              pagination={false}
              rowSelection={{
                type: 'checkbox',
                ...rowSelection,
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default VerifyComponent;
