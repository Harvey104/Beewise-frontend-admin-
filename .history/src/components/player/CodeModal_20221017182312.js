import React, { useState } from "react";
import { Typography } from 'antd';
import ReactInputVerificationCode from "react-input-verification-code";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const { Text } = Typography;

const CodeModal = (props) => {
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
  const formLayout = 'vertical';
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
    
  return (
    <div className="v-center" >
      <div className="flex-column h-center" style={{width: "35%"}}>
        <Text className="large-title color-b">Muchas gracias</Text>    
        <Text className="medium-title mt-bit text-center">{props.type != 'admin' ? "Hemos agregado un nuevo cliente" : "Hemos agregado un nuevo Super Administrador"}</Text>
        <Text className="medium-title mt-bit text-center">{props.type != 'admin' ? "Este es el codigo de acceso" : "Este es el codigo de acceso  "}</Text>
        <StyledReactInputVerificationCode className="mt-bit mt-bit">
            <ReactInputVerificationCode length={5} placeholder={0} type='string' onChange={setVerifiedCode} value={verifiedCode}/>
        </StyledReactInputVerificationCode>
        <Text className="medium-title mt-bit text-center">Se le enviar?? un email con el codigo de acceso.</Text>
      </div>
    </div>
  );
};

export default CodeModal;
