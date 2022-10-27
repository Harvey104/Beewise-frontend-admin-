import { Button, Form, Input, Modal, Typography } from 'antd';
import ReactCodeInput from "react-code-input";
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
const { Text, Title } = Typography;
const co = {
  className: reactCodeInput,
  inputStyle: {
    fontFamily: 'monospace',
    margin:  '4px',
    MozAppearance: 'textfield',
    width: '15px',
    borderRadius: '3px',
    fontSize: '14px',
    height: '26px',
    paddingLeft: '7px',
    backgroundColor: 'black',
    color: 'lightskyblue',
    border: '1px solid lightskyblue'
  },
  inputStyleInvalid: {
    fontFamily: 'monospace',
    margin:  '4px',
    MozAppearance: 'textfield',
    width: '15px',
    borderRadius: '3px',
    fontSize: '14px',
    height: '26px',
    paddingLeft: '7px',
    backgroundColor: 'black',
    color: 'red',
    border: '1px solid red'
  }
}

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifiedCode, setVerifiedCode] = useState('00000');
  const [form] = Form.useForm();
  const formLayout = 'vertical';
  const navigate = useNavigate();

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
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

   const StyledReactInputVerificationCode = styled.div`
        display: flex;
        justify-content: center;

        --ReactInputVerificationCode-itemWidth: 6vh;
        --ReactInputVerificationCode-itemHeight: 6vh;
        --ReactInputVerificationCode-itemSpacing: 8px;

        .ReactInputVerificationCode__item {
            font-size: 1vw;
            font-weight: 500;
            color: #ABB4C5;
            border: 1px solid
            ${({ isInvalid }) => (isInvalid ? "#EF6C65" : "rgba(28, 30, 60, 0.4)")};
            border-radius: 4px;
            line-height: 6vh;
            box-shadow: none;
            background: #fff;
        }

        .ReactInputVerificationCode__item.is-active {
            box-shadow: none;
            border: 1px solid #36c6d9;
        }
        `;
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };
    
    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    
  return (
    <>
      <Form
        className='login-content flex-column v-between'
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        style={{height: "90%", overflow: "y"}}
      >
        <Title className='login-header-title'>Registro</Title>
        <Text className='login-common-title'>Por favor ingresa tus datos para registrarte.</Text>
        <Form.Item label="Nombre" className='mt-small login-input'>
            <Input placeholder="Nombre" style={{height: "6vh", borderRadius: "7px"}} onChange={ e => setName(e.target.value) }/>
        </Form.Item>
        <Form.Item label="Apellido" className='login-input'>
            <Input placeholder="Apellido" style={{height: "6vh", borderRadius: "7px"}} onChange={ e => setSurName(e.target.value) }/>
        </Form.Item>
        <Form.Item label="Código de acceso" className='login-input'>
          <div className='v-center'>
            <ReactCodeInput
              name="resetPassword"
              inputMode="numeric"
              fields={5}
              type="text"
              onChange={(e) => setVerifiedCode(e)}
              isValid={verifiedCode}
            />
          </div>
        </Form.Item>
        <Form.Item label="Email" className='login-input'>
            <Input placeholder="Ingrese su email" style={{height: "6vh", borderRadius: "7px"}} onChange={ e => setEmail(e.target.value) }/>
        </Form.Item>
        <Form.Item label="Clave" className='login-input'>
            <Input.Password placeholder="Ingrese su clave" style={{height: "6vh", borderRadius: "7px"}} onChange={ e => setPassword(e.target.value) }/>
        </Form.Item>
        <Form.Item {...buttonItemLayout} >
            <Button 
              className='long-button primary ' 
              style={{height: "6vh", fontSize: "1.2vw"}} 
              onClick={() => showModal()} 
              disabled = { email === '' || password === '' || name == '' || surname == ''|| verifiedCode == '00000' ? true : false } type="primary" >Registrarse</Button>
        </Form.Item>
      </Form>
        <Modal
            title=''
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            footer=''
        >
            <div className='modal-content' style={{border: "none"}}>
                <img src='/img/success.png' width="91"/>
                <h3>¡Su cuenta ha sido creada exitosamente!</h3>
                <p>Ahora se activará tu cuenta</p>
                <Button className='modal-button hm' onClick={() => navigate("/login")} type="primary">Aceptar</Button>
            </div>
        </Modal>
  </>
  );
}
