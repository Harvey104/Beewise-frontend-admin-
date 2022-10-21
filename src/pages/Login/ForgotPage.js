import { Button, Form, Input, Modal, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Text, Title } = Typography;


export default function ForgotPage() {
  const [email, setEmail] = useState('');
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
            style={{height: "55%"}}
            >
            <div>
              <Title className='login-header-title'>Recuperar contraseña</Title>
              <Text className='login-common-title'>Por favor ingrese sus datos para recuperar contraseña.</Text>
            </div>
            <Form.Item label="Correo" className='mt-small login-input'>
                <Input placeholder="Ingrese su correo" style={{height: "6vh", borderRadius: "7px"}} onChange={ e => setEmail(e.target.value) }/>
            </Form.Item>
            <Form.Item {...buttonItemLayout} >
                <Button className='long-button primary' style={{height: "6vh", fontSize: "1.2vw"}} onClick={() => showModal()} disabled = { email === '' ? true : false } type="primary" >Recuperar contraseña</Button>
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
                <h3>El correo ha sido enviado</h3>
                <p>Revise el correo carlavenegas@gmail.com y complete los pasos para recuperar su contraseña.</p>
                <Button className='modal-button hm' onClick={() => handleCancel()} type="primary">Aceptar</Button>
            </div>
        </Modal>
  </>
  );
}
