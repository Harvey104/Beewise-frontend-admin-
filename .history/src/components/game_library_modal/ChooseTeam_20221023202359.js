import React, { useState } from "react";
import { Typography } from 'antd';
import { Button , Col, Row, Input, Select } from 'antd';

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;
const { Option } = Select;

const ChooseTeamComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  let teams = [
    1, 2, 3, 4, 5
  ];
  
  const handleTeamChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <div style={{width: "70%"}}>
        <Row>
          <Col span={7}>
            <div className='w-100' style={{background: "#F2F2FF", borderRadius: "10px"}}>
              <div className='game-library-main-header h-center v-center' style={{background: "#E8E8FF", borderRadius: "10px 10px 0px 0px"}}>
                  <Text className='large-title' style={{color: "#142748"}}>Haz añadido</Text>
              </div>
              <div className='flex-column h-center' style={{ padding: "10px"}}>
                <Text 
                  style={{
                    fontWeight: 500,
                    fontSize: "64px",
                    color: "#142748",
                    fontFamily: 'Poppins',
                  }}
                >20</Text>
                <Text 
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#142748",
                    fontFamily: 'Poppins',
                  }}
                >jugadores</Text>
              </div>
            </div>
          </Col>
          <Col span={17} className="pv-medium flex-column v-between" style={{display: "flex"}}>
            <Text className='large-title color-black'
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "30px",
                color: "#142748"
              }}
            >Es momento  de  asignarlos en equipos</Text>
            <div>
              <Text 
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#191635",
                }}
              >Selecciona un número de equipos</Text>
              <Select
                className="ml-medium"
                defaultValue={0}
                style={{
                  height: "40px"
                }}
                onChange={handleTeamChange}
              >
                {teams.map((t) => (
                  <Option key={t}>{t}</Option>
                ))}
              </Select>
            </div>
            <Text 
                style={{
                  fontFamily: 'Open Sans',
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "22px",
                  textAlign: "center",
                  color: "#191635",
                }}
            >¿ Deseas que los jugadores se asignen a los equipos de manera aleatoria ? </Text>
            <div className="v-around">
              <Button className='bit-button hs' type="primary">Si</Button>
              <Button className='bit-button hs' type="primary">No</Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className='w-100' style={{paddingLeft: }}>
        <Button className='bit-button hs' onClick={() => previous()} type="primary">Volver</Button>
      </div>
    </>
  );
};

export default ChooseTeamComponent;
