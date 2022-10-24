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
      avatar: (<HiUsers style={{fontSize: "px"}}/>),
      title: "20 jugadores"
    },
    {
      avatar: (<FaUsers style={{fontSize: "21px"}}/>),
      title: "4 equipos"
    },
    {
      avatar: (<BsFillQuestionCircleFill style={{fontSize: "21px"}}/>),
      title: "15 preguntas"
    },
    {
      avatar: (<MdOutlineEventNote style={{fontSize: "21px"}}/>),
      title: "Resultados Ponderados"
    },
    {
      avatar: (<BiCalendar style={{fontSize: "21px"}}/>),
      title: "Inicia: 22 Agosto 2022 / 13:30 hrs"
    },
  ];
  return (
    <div className="flex-column v-between h-center" style={{width: "90%"}}>
      <div style={{width: "100%"}}>
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
                    avatar={item.avatar}
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
