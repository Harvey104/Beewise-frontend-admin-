import React from "react";
import withClickOutside from "../WithClickOutside";
import { Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button , Col, Row, Input, Form } from 'antd';

const { Text, Link } = Typography;

const VerifyComponent = () => {
  return (
    <>
      <div style={{width: "50%"}}>
        <div><Text className='large-title color-black'>Asigna un nombre a esta competencia</Text></div>
        <div><Text className='medium-title'>Así será más fácil reconocerlo cuando veas los resultados</Text></div>
        <Input placeholder="Ingrese nombre del juego" className='hm mt-bit'/>
        <div className='w-100' style={{background: "#F2F2FF", borderRadius: "10px"}}>
          <div className='game-library-main-header h-center pv-medium mt-large v-center' style={{background: "#E8E8FF", borderRadius: "10px 10px 0px 0px"}}>
              <Text className='large-title' style={{color: "#142748"}}>Código de la competencia</Text>
          </div>
          <div className='flex-column h-center' style={{ padding: "30px"}}>
            <Text className='medium-title'>Hemos generado un codigo de acceso</Text>
            <StyledReactInputVerificationCode className="mt-bit">
                <ReactInputVerificationCode length={5} placeholder={0} type='string' onChange={setVerifiedCode} value={verifiedCode}/>
            </StyledReactInputVerificationCode>
          </div>
        </div>
      </div>
      <div className='w-100 v-center'>
        <Button className='bit-button hs' onClick={() => handleCancel()} type="primary">Volver</Button>
        <Button className='bit-button hs ml-medium' onClick={() => handleCancel()} type="primary">Continuar</Button>
      </div>
    </>
  );
};

export default ChoosePlayerComponent;
