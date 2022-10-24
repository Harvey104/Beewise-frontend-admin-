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
    <div className="modal-content ">
      <div className=' padding-small large-title'
        style={{
          height: "100%",
          borderRadius: "10px 10px 0px 0px",
          background: "#6A67CE",
          textAlign: "left",
        }}
      >
        Elige a los jugadores de esta competencia
      </div>
    </>
  );
};

export default VerifyComponent;
