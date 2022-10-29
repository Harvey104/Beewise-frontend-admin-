import React from "react";
import { Typography, Form, Row, Col, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text, Link } = Typography;

const InfoModal = (props) => {
  const name = props.
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
            <Input placeholder="Ingrese nombre" className='hm'/>
          </Form.Item>
        </Col>
        <Col className='padding-small' span={12}>
          <Form.Item label={"Apellido"}>
            <Input placeholder={"Ingrese su apellido"} className='hm'/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col className='padding-small' span={12}>
          <Form.Item label="Email">
            <Input placeholder="Ingrese un email " className='hm'/>
          </Form.Item>
        </Col>
        {
          props.type == 'admin' ? 
            (
              <Col className='padding-small' span={12}>
                <Form.Item label={"Tipo de perfil"}>
                  <Input placeholder={"- Seleccione -"} className='hm'/>
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
