import React, { useState } from "react";
import { Typography } from 'antd';
import ReactInputVerificationCode from "react-input-verification-code";
import { Button , Col, Row, Input, Form } from 'antd';
import styled from "styled-components";

import { GAME_MODAL_STEP } from "../../constant";

const { Text, Link } = Typography;

const ChooseTeamComponent = (props) => {
  const next = props.next;
  const previous = props.previous;
  const [verifiedCode, setVerifiedCode] = useState('00000');
  const StyledReactInputVerificationCode = styled.div`
       display: flex;
       justify-content: center;

       --ReactInputVerificationCode-itemWidth: 40px;
       --ReactInputVerificationCode-itemHeight: 40px;
       --ReactInputVerificationCode-itemSpacing: 8px;

       .ReactInputVerificationCode__item {
           font-size: 16px;
           font-weight: 500;
           color: #ABB4C5;
           border: 1px solid
           ${({ isInvalid }) => (isInvalid ? "#EF6C65" : "rgba(28, 30, 60, 0.4)")};
           border-radius: 4px;
           line-height: 40px;
           box-shadow: none;
           background: #fff;
       }

       .ReactInputVerificationCode__item.is-active {
           box-shadow: none;
           border: 1px solid #36c6d9;
       }
       `;
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
                /* identical to box height */

                text-align: center;

                color: #142748;
              }}
            >Es momento  de  asignarlos en equipos</Text>
            <Text className='medium-title'>Así será más fácil reconocerlo cuando veas los resultados</Text>
            <Input placeholder="Ingrese nombre del juego" className='hm mt-bit'/>
          </Col>
        </Row>
      </div>
      <div className='w-100'>
        <Button className='bit-button hs' onClick={() => previous()} type="primary">Volver</Button>
      </div>
    </>
  );
};

export default ChooseTeamComponent;
