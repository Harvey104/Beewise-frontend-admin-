import React from "react";
import { Typography, Form, Row, Col, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text, Link } = Typography;

const InfoModal = (props) => {
  const setName = props.name;
  const setSurname = props.surname;
  const setEmail = props.email;
  const setProfileType = props.email;

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
    <Form
      {...formItemLayout}
      layout={formLayout}
    >
      <Row>
        <Col className='padding-small' span={12}>
          <Form.Item label={"Nombre "}>
            <Input placeholder="Ingrese nombre" onChange={(e) => setName(e.target.value)} className='hm'/>
          </Form.Item>
        </Col>
        <Col className='padding-small' span={12}>
          <Form.Item label={"Apellido"}>
            <Input placeholder="Ingrese su apellido" onChange={(e) => setSurname(e.target.value)} className='hm'/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col className='padding-small' span={12}>
          <Form.Item label="Email">
            <Input placeholder="Ingrese un email" onChange={(e) => setEmail(e.target.value)} className='hm'/>
          </Form.Item>
        </Col>
        {
          props.type == 'admin' ? 
            (
              <Col className='padding-small' span={12}>
                <Form.Item label={"Tipo de perfil"}>
                  <Input placeholder={"- Seleccione -"} onChange={(e) => (e.target.value)} className='hm'/>
                </Form.Item>
            </Col>)
            :
            ""
        }
      </Row>
    </Form>
  );
};

export default InfoModal;
