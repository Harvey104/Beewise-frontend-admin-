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

          </Col>
          <Col span={17}></Col>
        </Row>
        <div><Text className='large-title color-black'>Asigna un nombre a esta competencia</Text></div>
        <div><Text className='medium-title'>Así será más fácil reconocerlo cuando veas los resultados</Text></div>
        <Input placeholder="Ingrese nombre del juego" className='hm mt-bit'/>
        
      </div>
      <div className='w-100'>
        <Button className='bit-button hs' onClick={() => previous()} type="primary">Volver</Button>
      </div>
    </>
  );
};

export default ChooseTeamComponent;
