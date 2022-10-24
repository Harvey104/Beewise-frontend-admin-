import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input, List } from 'antd';
import QRCode from "react-qr-code";
import styled from "styled-components";
import { HiUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;

const GameCompleteComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const listData = [
    {
      avatar: (<HiUsers/>),
      title: "20 jugadores"
    },
    {
      avatar: (<FaUsers/>),
      title: "4 equipos"
    },
    {
      avatar: (<BsFillQuestionCircleFill/>),
      title: "15 preguntas"
    },
    {
      avatar: (<MdOutlineEventNote/>),
      title: "Resultados Ponderados"
    },
    {
      avatar: (<MdOutlineEventNote/>),
      title: "Resultados Ponderados"
    },
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
                    title={<Text className="small-title">{item.title}</Text>}
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
