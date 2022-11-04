import { Button, Form, Input, Radio, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'email-validator';

import { loginAction } from '../../components/actions/Sign';
const { Text, Title, Link } = Typography;

export default function LoginPage() {
  const [form] = Form.useForm();
  const formLayout = 'vertical';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const goRegister = () => {
    navigate('/register');
  }

  const login = () => {
    loginAction({
      email: email,
      password: password
    }, (items) => {
      console.log(items);
      localStorage.setItem('admin-auth', JSON.stringify(items));
      navigate('/home/dashboard');
    });
  }

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
  return (
    <Form
      className='login-content flex-column v-between'
      {...formItemLayout}
      layout={formLayout}
    >
      <Title className='login-header-title'>Iniciar sesión</Title>
      <Text className='login-common-title'>Por favor ingresa tus datos para entrar a Beewise.</Text>
      <Form.Item label="Email" className='mt-large login-input' style={{fontSize: "1.2vw"}}>
        <Input placeholder="Ingrese su email" style={{height: "6vh", borderRadius: "7px"}} onChange={ e => setEmail(e.target.value) } />
      </Form.Item>
      <Form.Item label="Contraseña" className='login-input'>
        <Input.Password placeholder="Ingrese su contraseña" className='mb-bit' style={{height: "6vh", borderRadius: "7px"}} onChange={ e => setPassword(e.target.value) }/>
        <Link onClick={() => navigate('/forgot')} className='small-title right' style={{fontSize: "1vw"}}>Olvidé mi contraseña</Link>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button className={`long-button primary`} 
          onClick={() => login()} 
          style={{height: "6vh", fontSize: "1.2vw"}} 
          disabled = { email === '' || password === '' ? true : false } 
          type="primary">Iniciar sesión</Button>
      </Form.Item>
      <Form.Item >
        <Text className='small-title center'>¿No tienes cuenta?</Text>
        <Button className='long-button other mt-bit' style={{height: "6vh", fontSize: "1.2vw"}}  type="primary" onClick={() => goRegister()}>Regístrate acá</Button>
      </Form.Item>
    </Form>
  );
}
