import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input, List } from 'antd';
import QRCode from "react-qr-code";
import styled from "styled-components";
import { HiUsers } from "react-icons/hi";

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;

const GameCompleteComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const listData = [
    (
      <div>
        
      </div>
    ),
  ];
  return (
    <div className="flex-column v-between" style={{width: "90%"}}>
      <div>
        <Text className="large-title">Resumen Competencia</Text><br/>
        <Text className="medium-title mt-bit">Aqui puedes visualizar los datos generales del juego</Text>
      </div>
      <div style={{width: "90%"}}>
        <Row>
          <Col span={12}>
            <List
              size="large"
              header={
                <div>
                  <Text className="large-title">Nombre: Aves nacionales</Text><br/>
                  <Text className="medium-title">Código Juego:  1 - t - H - 0 - 2</Text>
                </div>
              }
              dataSource={listData}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<HiUsers />}
                    title={<Text>{item.title}</Text>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={12}></Col>
        </Row>
      </div>
      <div></div>
    </div>
  );
};

export default GameCompleteComponent;
