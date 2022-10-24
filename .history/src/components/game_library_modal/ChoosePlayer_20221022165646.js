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
    <div className='modal-content' style={{border: "none", height: "100%", display: "block"}}>
      <Text className='header-title color-back'>Búsqueda</Text><br/>
      <Text className='medium-title'>Para visualizar los resultados, busca la competencia, juego o jugador que desees.</Text><br/>
      <div className='mt-medium'>
        <Button className={`bit-button hm`} onClick={() => setModalStep('game')}>Juegos</Button>
        <Button className={`bit-button hm ml-bit`} onClick={() => setModalStep('skill')}>Competencias</Button>
        <Button className={`bit-button hm ml-bit ${modalStep !== 'player' ? 'back-grey': '' }`} onClick={() => setModalStep('player')}>Jugadores</Button>
      </div>
      <Search
          className='mt-small hm'
          placeholder="Busca un juego para visualizar resultados"
          allowClear
          onSearch={onSearch}
          style={{
              width: "50%",
          }}
        />
      <ModalSearch mode={modalStep} />
    </div>
  );
};

export default VerifyComponent;
