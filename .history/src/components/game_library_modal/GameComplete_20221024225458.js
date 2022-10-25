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
  const [code, setCode] = useState('http://beewise.com/games/123456');
  const listData = [
    {
      avatar: (<HiUsers style={{fontSize: "27px", color: "#6A67CE"}}/>),
      title: "20 jugadores"
    },
    {
      avatar: (<FaUsers style={{fontSize: "27px", color: "#6A67CE"}}/>),
      title: "4 equipos"
    },
    {
      avatar: (<BsFillQuestionCircleFill style={{fontSize: "27px", color: "#6A67CE"}}/>),
      title: "15 preguntas"
    },
    {
      avatar: (<MdOutlineEventNote style={{fontSize: "27px", color: "#6A67CE"}}/>),
      title: "Resultados Ponderados"
    },
    {
      avatar: (<BiCalendar style={{fontSize: "27px", color: "#6A67CE"}}/>),
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
          <Col span={12}>
            <div className="padding-medium flex-column v-between h-center"
              style={{
                boxShadow: "0px 3px 22px 10px rgba(0, 0, 0, 0.08)",
                borderRadius: "15px",
              }}
            >
              <QRCode value={code} />
              <Text className="medium-title mt-small">Escanea el código para acceder a la competencia</Text>
              <Input placeholder="" className='hm mt-small' style={{width: "100%"}}/>
            </div>
          </Col>
        </Row>
      </div>
      <div>

      </div>
    </div>
  );
};

export default GameCompleteComponent;
